export enum AnalyticsEvents {
  CONNECT_WALLET = "connect_wallet",
  DISCONNECT_WALLET = "disconnect_wallet",
  SUCCESSFUL_TX = "successful_transaction",
  FAILED_TX = "failed_tx",
  REVOKE_CERTIFICATE = "revoke_certificate",
  REVOKE_ALL_CERTIFICATE = "revoke_all_certificate",
  CREATE_CERTIFICATE = "create_certificate",
  REGENERATE_CERTIFICATE = "regenerate_certificate",
  EXPORT_CERTIFICATE = "export_certificate",
  DEPLOYMENT_DEPOSIT = "deployment_deposit",
  CLOSE_DEPLOYMENT = "close_deployment",
  USE_DEPOSITOR = "use_depositor",
  DOWNLOADED_LOGS = "downloaded_logs",
  UPDATE_DEPLOYMENT = "update_deployment",
  DOWNLOADED_SHELL_FILE = "downloaded_shell_file",
  CREATE_LEASE = "create_lease",
  SEND_MANIFEST = "send_manifest",
  CREATE_DEPLOYMENT = "create_deployment",
  CREATE_GPU_DEPLOYMENT = "create_gpu_deployment",
  AUTHORIZE_SPEND = "authorize_spend",
  NAVIGATE_TAB = "navigate_tab_", // Append tab
  LEAP_GET_MORE_TOKENS = "leap_get_more_tokens",
  LEAP_TRANSACTION_COMPLETE = "leap_transaction_complete",

  // SDL Builder
  DEPLOY_SDL = "deploy_sdl",
  PREVIEW_SDL = "preview_sdl",
  IMPORT_SDL = "import_sdl",
  RESET_SDL = "reset_sdl",
  CREATE_SDL_TEMPLATE = "create_sdl_template",
  CREATE_SDL_TEMPLATE_LINK = "create_sdl_template_link",
  UPDATE_SDL_TEMPLATE = "update_sdl_template",
  CLICK_SDL_PROFILE = "click_sdl_profile",
  CLICK_VIEW_TEMPLATE = "click_view_template",
  EDIT_SDL_DESCRIPTION = "edit_sdl_description",
  SAVE_SDL_DESCRIPTION = "save_sdl_description",
  ADD_SDL_FAVORITE = "add_sdl_favorite",
  REMOVE_SDL_FAVORITE = "remove_sdl_favorite",
  CLICK_EDIT_SDL_TEMPLATE = "click_edit_sdl_template",

  // User Profile
  USER_PROFILE_CLICK_TEMPLATE = "user_profile_click_template",
  USER_PROFILE_CLICK_TEMPLATE_FAVORITE = "user_profile_click_template_favorite",
  USER_PROFILE_TEMPLATE_TAB = "user_profile_template_tab",
  USER_PROFILE_FAVORITES_TAB = "user_profile_favorites_tab",
  USER_PROFILE_SETTINGS_TAB = "user_profile_settings_tab",
  EDIT_ADDRESS_BOOK = "edit_address_book",
  ADDRESS_BOOK_SAVE_ADDRESS = "address_book_save_address",
  ADDRESS_BOOK_ADD_ADDRESS = "address_book_add_address",
  ADDRESS_BOOK_REMOVE_ADDRESS = "address_book_remove_address",
  USER_SETTINGS_MANAGE_BILLING = "user_settings_manage_billing",
  USER_SETTINGS_UPGRADE_PLAN = "user_settings_upgrade_plan",
  USER_SETTINGS_SAVE = "user_settings_save",

  // Addresses
  ADDRESSES_SEND_TOKENS_CLICK = "addresses_send_tokens_click",
  ADDRESSES_SEND_TOKENS = "addresses_send_tokens",
  ADDRESSES_ADDRESS_TAB = "addresses_address_tab",
  ADDRESSES_TRANSACTIONS_TAB = "addresses_transactions_tab",
  ADDRESSES_DEPLOYMENTS_TAB = "addresses_deployments_tab",

  // Validators
  VALIDATORS_CLAIM_ALL_REWARDS = "validators_claim_all_rewards",
  VALIDATORS_CLAIM_REWARDS = "validators_all_rewards",
  VALIDATORS_DELEGATE_CLICK = "validators_delegate_click",
  VALIDATORS_DELEGATE = "validators_delegate"
}