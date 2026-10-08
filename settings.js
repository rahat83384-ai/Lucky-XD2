
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
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "LuckyM2-H4sIAAAAAAAAA5VU25KiSBD9l3qVGBUQ0YiOGJSLSKOAguLGPJRQInesKkSc8N83sLun52F3tpenIgsyT55zMn+CoowJMlALpj9BheMrpKg70rZCYApm9emEMGBACCkEU9Bat/72VdZce69NCObuqaCqRV2158PeGsunbT5RIg22tUJewIMBVX3M4uAPCZvtsaGll5hsbFw9Bd4PfTKrL+3oEPDDhNOEY33xbJVN7OYFPLqMMMZxESnVGeUIw8xArQVj/DX4uaINmmVIDO1CzfvAVkeuLJ/2Qi0dJ+nGvPFruS7v6mKRR1+D74mHMO3nB6R4wnGwdJot74y00313nF+9XtW/IG+kWz1znrtv8EkcFSjUQ1TQmLZf5j1YGrHv5CTJC1hEUbhdNrLf9Ieixi1VdeBG6qR2GhJKA/9rwK/rtakObVg0E4Wjgy3HDbavrSp4R3HG973BZNTyu0o6hxr/O3ALf3gl/T+8B6vR5VYGLKtXXq9OaJZypVZx2h6bap2KvLDHlI4847D7Iu+1Vbfz10MeKYI1r/MEJwtX4aFlx3v7hDTsR3vdeSUHHEmf8CGt8Z9Qes4t8/vD9GwRnOXUMUnjGgs0Hrvh3j7jm0DZfhC4y4Ye15q2PrYSMRWrJ9K5Lyxu1b4RlNtmjp3e4VBBcR3mq9o4Ry/PjlLU6iGYDh8MwCiKCcWQxmXxjE3GDIDhdYMCjOiTXtCQ2blGF3kZsLueasQLUaEOy/fOYuSfRsrCayQR237jsfoLYECFywARgsJFTGiJWxMRAiNEwPSvHwwo0I2+CdeV4zgGnGJMqFvUVVbC8EPVj0sYBGVd0E1bBPPugDCYDj7DiNK4iEjHY11AHJzjK5qfISVgeoIZQb86RBiFYEpxjX5N7bwMn8TvlibPmjPAgPwpSByCKRDFwXA8GvI8K4iTKfudfGu6tLCqvhWIAgYUsPsaYJgABmTPfwROGI/FwWgyZFmem7Lfu/DjF9gud4gojDMCpmBuyQntB4pixnoR+pomKZE0jyTw2dyHS95UqLZOFmrcWc/dsFm1yeWmn2dqi18zutWTSWQtnRgOtJXc2i//kKTDt1lSCfawFwlOtdlvLXeUWvKKGj2ft6SZiTcBTvtwdY+Ta/p66B/um3mrqZW+nQiKUcvJYqEfklhk92duV7CswO88qbMUA0J0jQP0ezF/n/ZNIq41lfedsRHlTd+wXX+8YGFCBXdJbaUYkc3spGRhXYahlGfr40r21sdgeElkq0iCM1rVhpWafnOcr5fJ6yiR3vz7nJ/sfW/FT2d1snWvpxg918C7PP8p4xvwzm2DB/NbjvfF8i/DOYPu4LB3KL9ZZotADkqBbHTbCS7t6Oi2et+XW9fP6SyxxRQ8Hj8YUGWQnkqcgykg+RECBuCy7ryrF6fyD5XmUqrP7GjVtZ1BQqXPedjGOSIU5hWYDseTIc/zAssxIG+lqtpQSD/GCEjdY2xS8PgbDQcKH2IHAAA=",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "8801751442689",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "ʟᴜᴄᴋʏ ➋➊➑",
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
