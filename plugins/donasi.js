let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 𝐃𝐨𝐧𝐚𝐬𝐢 • 𝐏𝐮𝐥𝐬𝐚 」
│ • *𝑰𝒏𝒅𝒐𝒔𝒂𝒕:* 085785845416
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '𝐕𝐢𝐚 𝐒𝐚𝐰𝐞𝐞𝐢𝐚', url: psaweria}},
    {index: 2, urlButton: {displayText: '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦', url: sig}},
    {index: 3, urlButton: {displayText: '𝐆𝐫𝐮𝐛 𝐁𝐨𝐭', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
