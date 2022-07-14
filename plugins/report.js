let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `𝑲𝒂𝒍𝒂𝒖 𝑨𝒅 𝑲𝒆𝒍𝒖𝒉𝒂𝒏 𝑳𝒂𝒏𝒈𝒔𝒖𝒏𝒈 𝑯𝒖𝒃𝒖𝒏𝒈𝒊 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕`
    if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\n𝑷𝒆𝒔𝒂𝒏 : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`'_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi'_`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.private = true
handler.command = /^(report|request)$/i
export default handler
