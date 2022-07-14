let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *ADA APA* ${htka}

        💬 Ada bantuan Bot?
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ᴏᴡɴᴇʀ ʙᴏᴛ', url: 'https://wa.me/6285785845416'}},
    {index: 2, quickReplyButton: {displayText: 'ʀᴀᴛᴇ ʙᴏᴛ', id: '.rate'}},
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
