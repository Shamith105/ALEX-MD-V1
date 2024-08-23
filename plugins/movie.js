const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("🚫 Movie not found.");
        }

        const movieInfo = `
*╭─「 𝐀𝙻𝗘𝙓-𝙈𝘿 」*
*╰───────────────┈*
*⟡━⟪🎬𝐀𝐋𝐄𝐗-𝐌𝐃 𝐌𝐕 𝐈𝐍𝐅𝐎🎬⟫━⟡*
*╭⃘⃝──────────────┈◦•☻•◦*
*╎☘️ Tιтle :* $ {data.Title}
*╎📆 Rᴇʟᴇᴀꜱᴇ ➠* ${data.Released}
*╎*🌼 Rᴀᴛɪɴɢ ➠* ${data.Rating}
*╎🌙 Lᴀɴɢᴜᴀɢᴇꜱ ➠* ${data.Languages}
*╎🌈 Dɪʀᴇᴄᴛᴏʀ ➠* ${data.Director}
*╎〽️ Gᴇɴʀᴇs ➠* ${data.Genres}
*╎🌎 Cᴏᴜɴᴛʀʏ ➠* ${data.Country}
*╚────────────────>*
 *📖* ${data.Plot}
 
╭─「  𝙪𝙥𝙡𝙤𝙖𝙙𝙚 𝙗𝙮 」
╰────────────┈
> ⟡━⟪ 𝘔𝘙.𝘈𝘓𝘌𝘟-𝘐𝘋⟫━⟡
        *⦁│ᴘʀᴏɢʀᴀᴍꜱ│⦁*
`;

        // Define the image URL
        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        // Send the movie information along with the poster image
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> 𝘼𝙇𝙀𝙓-𝙈𝘿 𝙈𝙑 𝙄𝙉𝙁𝙊`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
