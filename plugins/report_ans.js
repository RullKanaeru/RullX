let handler = m => m
handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(REPORT|REQUEST|KONFIR|KONFIRM)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    conn.reply(m.quoted.mentionedJid[0], '*𝙊𝙬𝙣𝙚𝙧:* ' + m.text, null)
    conn.reply(m.key.remoteJid, '*𝙋𝙚𝙨𝙖𝙣 𝘿𝙖𝙧𝙞 𝙊𝙬𝙣𝙚𝙧:* ' + m.text, null)
    //conn.reply(m.quoted.mentionedJid[0], '*𝙊𝙬𝙣𝙚𝙧:* ' + m.text + m.quoted.mentionedJid[0] + `${m.quoted.text.split`Pesan :`[1]}`, null)

}
export default handler 
