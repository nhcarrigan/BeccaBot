/**
 * This config maps the default values for the ServerModel document. Useful
 * for the reset command as well as instantiating new server settings.
 */
export const defaultServer = {
  prefix: "becca!",
  thanks: "off",
  levels: "off",
  welcome_channel: "",
  log_channel: "",
  suggestion_channel: "",
  muted_role: "",
  custom_welcome:
    "Hello {@username}! Welcome to {@servername}! My name is Becca. Feel free to let me know if you need anything.",
  hearts: [] as string[],
  blocked: [] as string[],
  self_roles: [] as string[],
};
