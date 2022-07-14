import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*💌 𝗡𝗮𝗺𝗮:* ${filename}
*📊 𝗨𝗸𝘂𝗿𝗮𝗻 𝗙𝗶𝗹𝗲:* ${filesizeH}
*🗂️ 𝗘𝘅𝘁𝗲𝗻𝘀𝗶𝗼𝗻:* ${ext}
*📨 𝗨𝗽𝗹𝗼𝗮𝗱 𝗽𝗮𝗱𝗮:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
