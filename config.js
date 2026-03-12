module.exports = {
  // Bot settings
  prefix: process.env.PREFIX || "!",       // Command prefix
  token: process.env.DISCORD_TOKEN,        // Bot token from .env
  ownerID: "YOUR_DISCORD_ID_HERE",         // Your Discord ID (bot owner)

  // Staff system
  staffIDs: [],                             // Array of Discord user IDs who can use staff commands

  // Whitelist system
  whitelist: [],                            // Array of user IDs protected from moderation

  // Moderation settings
  moderation: {
    maxWarnings: 3,                         // Number of warnings before taking action
    logChannelID: null                       // ID of channel where moderation logs are sent
  },

  // Server protection placeholders (expandable later)
  security: {
    antiSpam: false,                         // Enable anti-spam later if needed
    antiRaid: false,                         // Enable anti-raid later
    antiLink: false                           // Enable link protection later
  },

  // General bot settings
  defaultRole: null,                         // Optional: role to assign to new members
  language: "en"                              // Bot language
}
