const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Qcgl0aAQ#b0tSLjKSqM6zYLWFV_rvau7M-NjBeMgxweMWN8MceGM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/87e7ae0d50a3fa8f1ff4e.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"*HELLO MOTHER FUCKER 🖕",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};
