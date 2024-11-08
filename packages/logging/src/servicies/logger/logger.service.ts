import { context, trace } from "@opentelemetry/api";
import { isHttpError } from "http-errors";
import pino, { Bindings, Logger as PinoLogger, LoggerOptions } from "pino";
import { gcpLogOptions } from "pino-cloud-logging";
import pinoFluentd from "pino-fluentd";
import pretty from "pino-pretty";
import { Writable } from "stream";

import { config } from "../../config";

export type Logger = Pick<PinoLogger, "info" | "error" | "warn" | "debug">;

export class LoggerService implements Logger {
  protected pino: Logger;

  constructor(bindings?: Bindings) {
    this.pino = this.initPino(bindings);
  }

  private initPino(bindings?: Bindings): Logger {
    const destinations: Writable[] = [];

    let options: LoggerOptions = {
      level: config.LOG_LEVEL,
      mixin: () => {
        const currentSpan = trace.getSpan(context.active());
        return { ...currentSpan?.spanContext() };
      }
    };

    if (config.STD_OUT_LOG_FORMAT === "pretty") {
      destinations.push(pretty({ sync: true }));
    } else {
      options = gcpLogOptions(options as any) as LoggerOptions;
      destinations.push(process.stdout);
    }

    const fluentd = this.initFluentd();

    if (fluentd) {
      destinations.push(fluentd);
    }

    let instance = pino(options, this.combineDestinations(destinations));

    if (bindings) {
      instance = instance.child(bindings);
    }

    return instance;
  }

  private initFluentd(): Writable | undefined {
    const isFluentdEnabled = !!(config.FLUENTD_HOST && config.FLUENTD_PORT && config.FLUENTD_TAG);

    if (isFluentdEnabled) {
      return pinoFluentd({
        tag: config.FLUENTD_TAG,
        host: config.FLUENTD_HOST,
        port: config.FLUENTD_PORT,
        "trace-level": config.LOG_LEVEL
      });
    }
  }

  private combineDestinations(destinations: Writable[]): Writable {
    return new Writable({
      write(chunk, encoding, callback) {
        for (const destination of destinations) {
          destination.write(chunk, encoding);
        }

        callback();
      }
    });
  }

  info(message: any) {
    message = this.toLoggableInput(message);
    return this.pino.info(message);
  }

  error(message: any) {
    this.pino.error(this.toLoggableInput(message));
  }

  warn(message: any) {
    return this.pino.warn(this.toLoggableInput(message));
  }

  debug(message: any) {
    return this.pino.debug(this.toLoggableInput(message));
  }

  protected toLoggableInput(message: any) {
    if (isHttpError(message)) {
      const loggableInput = { status: message.status, message: message.message, stack: message.stack, data: message.data };
      return "originalError" in message
        ? {
            ...loggableInput,
            originalError: message.stack
          }
        : loggableInput;
    }

    if (message instanceof Error) {
      return message.stack;
    }

    return message;
  }
}
