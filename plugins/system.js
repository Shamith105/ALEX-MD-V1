const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require(`../lib/functions`)
cmd({
    pattern: "system",
    alias : ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `‎*╭─「 𝐀𝙻𝗘𝙓-𝙈𝘿 」*
*╰───────────────┈*
*⟡━⟪ 𝐀𝐋𝐄𝐗-𝐌𝐃 𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎  ⟫━⟡*
*╭─────────────────┈◦•☻•◦*
*╎⏰ 𝗨𝗽 𝗧𝗶𝗺𝗲 : ${runtime(process.uptime())}*
*╎📟 𝗥𝗮𝗺 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*╎⚙️PlatForm  : ${os.hostname()}*
*╎👨‍💻 𝗢𝘄𝗻𝗲𝗿 : 𝐀𝙻𝗘𝙓-𝙄𝘿*
*╚───────────────────♲*
*╭─「  POWERED BY 」*
*╰────────────┈*
> ⟡━⟪ 𝘔𝘙.𝘈𝘓𝘌𝘟-𝘐𝘋⟫━⟡
       *⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁*`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
} )
