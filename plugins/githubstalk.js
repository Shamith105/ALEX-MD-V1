const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "githubstalk",
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "utility",
    react: "🖥️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const username = args[0];
        if (!username) {
            return reply("Please provide a GitHub username.");
        }

        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let userInfo = `     ╭─「 𝐀𝙻𝗘𝙓-𝙈𝘿 」
╰────────────┈
⟡━⟪ 🔍_*ALEX-MD GIT STALK*_🔎 ⟫━⟡
╭⃘⃝─────────────┈◦•☻•◦
╎👤 *Username*: ${data.name || data.login}
╎🔗 *Github Url*:(${data.html_url})
╎📝 *Bio*: ${data.bio || 'Not available'}
╎🏙️ *Location*: ${data.location || 'Unknown'}
╎👥 *Followers*: ${data.followers} | Following:$ {data.following}
╎📅 *Created At*: ${new Date(data.created_at).toDateString()}
╎🔭 *Public Gists*: ${data.public_gists}
╎
╚──────────>
╭─「  𝙪𝙥𝙡𝙤𝙖𝙙𝙚 𝙗𝙮 」
╰────────────┈
⟡━⟪ 𝘔𝘙.𝘈𝘓𝘌𝘟-𝘐𝘋⟫━⟡
       ⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁`;

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: userInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching data: ${e.response ? e.response.data.message : e.message}`);
    }
});
