const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('facebook-search')


cmd({
    pattern: "fb",
    desc: "download videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("> *Please give me url or title*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `*╭─「𝐀𝙻𝗘𝙓-𝙈𝘿」 *
*╰────────────┈*
*⟡━⟪ 𝙁𝘽 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀 ⟫━⟡*
*╭⃘⃝─────────────┈◦•☻•◦*
*╎🍀Title*: ${data.title}
*╎🕛Time* :${data.timestamp}
*╎🎧Ago* : ${data.ago}
*╎✨Views* : ${data.views}
*╚──────────>*
「 𝗿𝗲𝗽𝗹𝗮𝘆 𝘄𝗶𝘁𝗵」
*╭────────────┈◦•♲•◦*
*╎1️⃣ Document*
*╎2️⃣ Video*
*╚──────────>*
  ⟡━⟪𝘔𝘙.𝘈𝘓𝘌𝘟-𝘐𝘋⟫━⟡
        ⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+ document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"𝐌ʀ - 𝐀𝙻𝗘𝙓 - 𝙄𝘿 "},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
