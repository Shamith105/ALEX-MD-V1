const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson} =requier('..lib/functions')

cmd({
    pattern: "ai",
    desc: "ai chat",
    category: "main",
    react: "🧠",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
let data= await fetchJson('https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}')
}catch(e){
console.log(e)
reply(`${e}`)
}
})
