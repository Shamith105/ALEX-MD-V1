const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Qcgl0aAQ#b0tSLjKSqM6zYLWFV_rvau7M-NjBeMgxweMWN8MceGM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d7e4a702a1b70a78c29ba.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"*╭─ `「  𝐀𝙻𝗘𝙓-𝗠𝗗  」`*
*╰────────────┈*
> ⟡━⟪ 𝙸 𝙰𝙼 𝙰𝙻𝙸𝚅𝙴  ⟫━⟡
*╭────────────┈◦•◦❥•*
*╎➮ .𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝙰𝙻𝙴𝚇-𝙸𝙳*
*╎➮ .𝙼𝙾𝚅𝙸𝙴 𝚂𝙴𝚁𝙲𝙷 𝚂𝚈𝚂𝚃𝙴𝙼*
*╎➮ .𝙱𝚄𝙶𝚂*
*╎➮ .𝙿𝙰𝙸𝙳 𝙵𝙸𝙻𝙴*
*╚──────────────⬣>*
*╭─ `「  𝙐𝙋𝘿𝘼𝙏𝙀𝙎  」`*
*╰───────────────┈*
            *⟪  Follow  Us  ⟫*
https://whatsapp.com/channel/0029VagEOTtHwXbDdrr7Eq3k          
     
          `𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔`
> ⟡━⟪  𝘔𝘙 𝘈𝘓𝘌𝘟 - 𝘐𝘋  ⟫━⟡
           `⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁`",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};
