let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} MODE ${htka}*


              📮ᴍᴀᴜ ᴍᴏᴅᴇ ᴀᴘᴀ?
`
const templateButtons = [
    {index: 3, urlButton: {displayText: 'ᴏᴡɴᴇʀ ғᴀɴᴛᴀsʏ ʙᴏᴛ', url: 'https://wa.me/6285785845416'}},
    {index: 4, quickReplyButton: {displayText: 'ᴘᴜʙʟɪᴄ', id: '.on public'}},
    {index: 5, quickReplyButton: {displayText: 'ꜱᴇʟꜰ', id: '.self'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['mode']
handler.tags = ['owner']
handler.command = /^mode$/i
handler.owner = true

export default handler
