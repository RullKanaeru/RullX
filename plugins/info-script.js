let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} 𝐒𝐨𝐮𝐫𝐜𝐞 𝐂𝐨𝐝𝐞 𝐁𝐨𝐭 ${htka}*
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'https://youtube.com/channel/UCY0FBGErW6JZJtIHyfAXERQ'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler
