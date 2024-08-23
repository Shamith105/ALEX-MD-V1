const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID=`3I8xjAZJ#lPq-MFPlJEwvY3vm7ycEVXzA_ptJBMJWsvDn8z6LaYI`,
ALIVE_IMG: process.env.ALIVE_IMG=`https://telegra.ph/file/d7e4a702a1b70a78c29ba.jpg`,
ALIVE_MSG: process.env.ALIVE_MSG=`*╭─ 「  𝐀𝙻𝗘𝙓-𝗠𝗗  」*
*╰────────────┈*
> ⟡━⟪ BOT PANNEL ⟫━⟡
*╭────────────┈◦•◦❥•*
*╎➮ .𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐*
*╎➮ .𝙈𝘼𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*
*╎➮ .𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀*
*╎➮ .𝘼𝙐𝘿𝙄𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀*
*╎➮ .𝘼𝙄 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*
*╎➮ .𝘽𝙐𝙂 𝙈𝙀𝙉𝙐*
*╎➮ .𝙀𝙃𝙄 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*
*╚──────────────⬣>*
*╭─ 「  𝙐𝙋𝘿𝘼𝙏𝙀𝙎  」*
*╰───────────────┈*
            *⟪  Follow  Us  ⟫*
https://whatsapp.com/channel/0029VagEOTtHwXbDdrr7Eq3k          
           𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔
> ⟡━⟪  𝘔𝘙 𝘈𝘓𝘌𝘟 - 𝘐𝘋  ⟫━⟡
           ⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁`,
OMDB_API_KEY: process.env.OMDB_API_KEY="76cb7f39",
MODE: process.env.MODE="public"
};   

