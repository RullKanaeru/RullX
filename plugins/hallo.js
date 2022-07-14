let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *𝑨𝒅𝒂 𝑨𝒑𝒂?* ${htka}

        💬 𝑨𝒅𝒂 𝑩𝒂𝒏𝒕𝒖𝒂𝒏 𝑩𝒐𝒕?
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕', url: 'https://wa.me/6285785845416'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(woi|hallo|p)$/i
handler.command = new RegExp

export default handler
