
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "KnightBot!H4sIAAAAAAAAA5VUSY7bRhS9S21bMGeREtCAKVISKWqiJGqKvSiSRYrNUVVFTUYvHGeTReBFFrEXBnKEAIGDAE5W2fkW7RP0EQL2EPcicdogQHz+Kv7/3vvDC5DlEUEWOoLmC1DgaAcpqkx6LBBoglYZBAiDGvAhhaAJHOuYOI4pilSS1mSg7DS7bgXb0RoVB42FUxE2rN1x4WTt9jm4rIGidJPI+0LA9qKQV0W/jrkLjSHrcGT5OCH+ceB3/bTrWZrRWmI55cgyPweXVUQY4SgL28UGpQjDxELHMYzw4+Dzfcid9oc1O9T6/XhnsebYYNbMyVam40Ia90y1rgVdrLJt+3Hw8UxRN4d9P4yZiHOG+VrsGHkZWVtf7gxTb6S3O8hwXIO0xVv4JAoz5Js+ymhEj4/WXdMPrFywZR7rRksYhtM66vVWHM8vl26H1LdJNmWUXHXHc+9xwNeNViCdYla/cGRIGkbqn3XEzUpCfmeeGI3BZB4z3pIs1pv8IfAxvu+V+Gt0X3TYbdiTNWXtxuo+5g3o8JNDzzjG44PCzXaJxEwYm1jyY+HPpJ10kfPjxFEHM4+abiDYktROrWgxwa3wwJ7psjkV0wH7QHdIS/wllF3ibbzDbJg3VF8668kjM9ubG2SGesZs8tx2XD7ujc7oPGdZRfd1jpEk52SP/PnES6MWPxcPw0L1S4lhbJPEAcPtjdb+/IZRjI6mD5rcZQ1gFEaEYkijPKt8klwD0N9NkYcRvVEXdLvH2XFjtMerdgMiJrf6LXXucZzL2guRpGeSt6z3g5DZIvMc1ECBcw8RgnwjIjTHxwEiBIaIgOY3z2sgQwd6W7cqm8DVQBBhQp2sLJIc+vdFvT+EnpeXGZ0eM0+rDIRBk/3sRpRGWUgqGcsMYm8T7ZC2gZSAZgATgv4hiDDy73w1gPOy+s3MgvxLXa46pm6HZiXYXb7qto8ojBJSXRiMeWau2PVgJHL2aqVOVdVS1UqDe3z3db4VkqwFzgzzMkA2dmZQjcso3861+MS5yoJi7LS5xaTj9YWu+G9BqkGZajPipfPtpi5PluNinK94v7fjd/7oYsosWzJewpO+J4u+e5hyykU0uPBmeGtsaQ7pPt0Ky1DNYzbRJ3ypr0krzdK1rp5X2Xy0izz0MNkS5bvWcObJRq+/FRc7BHlmxbt0JRDJd4YslxzOdPcUyIKwdDtaJ+t62oRJHHaitNJRzEt0sjbHpdbdaZtwOpehvtjr9m0HpjetH/mgCRSF5ZR6XVIEQRGbnPSUPNlXJYRF8SRDFNRABqvr4PrH7769fvfmz79+v3739vWnlx8+vfxw9dvPV+9fXb3/6eMvV++///jrs+zxz/W7tz9U7zd/3NivHtivvybOs+wJqIHkhgwvS5LAiZzANkSJVyo61cH9zCd3uza6GYdKgOoziNDN6rrj+f+C3NaqmhH2svYgyN02/I+GbrldvzE1rX4mxBbX5sNeP99aiV0MGgumg2Gdaw3n8WSpNQ4luLx8XgNFAmmQ47Tq3dSFFUtIqPp5JmdRigiFaQGanKw0FJZvNITLvwEZPhL5yAcAAA==",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "Bot Father",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "8801866583384",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "RAHAT islam",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
