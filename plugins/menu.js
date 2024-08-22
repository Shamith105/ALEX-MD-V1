const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require(`../lib/functions`)
cmd({
    pattern: "menu",
    desc: "Bot Command List",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `

*╭─ `「  𝐀𝙻𝗘𝙓-𝗠𝗗  」`*
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
*╭─ `「  𝙐𝙋𝘿𝘼𝙏𝙀𝙎  」`*
*╰───────────────┈*
            *⟪  Follow  Us  ⟫*
https://whatsapp.com/channel/0029VagEOTtHwXbDdrr7Eq3k          
           `𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔`
> ⟡━⟪  𝘔𝘙 𝘈𝘓𝘌𝘟 - 𝘐𝘋  ⟫━⟡
           `⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁`

`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
} )
