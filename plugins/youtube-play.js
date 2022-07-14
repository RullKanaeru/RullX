import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤 *𝙋𝙪𝙗𝙡𝙞𝙠𝙖𝙨𝙞:* ${publishedTime}
⏰ *𝘿𝙪𝙧𝙖𝙨𝙞:* ${durationH}
👁️ *𝙋𝙚𝙣𝙤𝙣𝙩𝙤𝙣:* ${viewH}

🔗 *𝙐𝙧𝙡/𝙇𝙞𝙣𝙠:* ${url}
📔 *𝘿𝙚𝙨𝙠𝙧𝙞𝙥𝙨𝙞:* ${description}
  `.trim(), wm, thumbnail, url, '𝙆𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚', null, null, [
    ['𝘼𝙪𝙙𝙞𝙤', `${usedPrefix}yta ${url} yes`],
    ['𝙑𝙞𝙙𝙚𝙤', `${usedPrefix}ytv ${url} yes`],
    ['𝘾𝙖𝙧𝙞 𝙙𝙞 𝙮𝙤𝙪𝙩𝙪𝙗𝙚', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler


//Di gw ini gabisa, Kalau di kalian ga tau bisa apa nggk, Kayanya bisa:v
