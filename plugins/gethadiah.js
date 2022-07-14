let handler = async (m, { conn }) => {
let info = `
*${htki} 𝙂𝙚𝙩 𝙃𝙖𝙙𝙞𝙖𝙝 ${htka}*
`
const sections = [
   {
	title: `✃ 𝗖𝗟𝗔𝗜𝗠 𝗥𝗘𝗪𝗔𝗥𝗗`,
	rows: [
	    {title: "🌸𝗗𝗮𝗶𝗹𝘆 𝗥𝗲𝘄𝗮𝗿𝗱", rowId: '.daily', description: 'Hadiah per hari' },
	    {title: "🌸𝗪𝗲𝗲𝗸𝗹𝘆 𝗥𝗲𝘄𝗮𝗿𝗱", rowId: '.weekly', description: 'Hadiah per minggu' },
	{title: "🌸𝗠𝗼𝗻𝘁𝗵𝗹𝘆 𝗥𝗲𝘄𝗮𝗿𝗱", rowId: '.monthly', description: 'Hadiah per bulan' },
	{title: "🌸𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗥𝗲𝘄𝗮𝗿𝗱", rowId: '.special', description: 'Hadiah special' },
	]
    }, {
    title: `✃ 𝗜𝗡𝗚𝗣𝗢`,
	rows: [
	    {title: "𝗜𝗻𝗳𝗼 𝗕𝗼𝘁", rowId: '.info', description: '𝙄𝙣𝙛𝙤 𝘽𝙤𝙩' },
	    {title: "𝗠𝗲𝗻𝘂", rowId: '.menu', description: '𝙆𝙚𝙢𝙗𝙖𝙡𝙞 𝙆𝙚 𝙈𝙚𝙣𝙪' },
	{title: "𝗢𝘄𝗻𝗲𝗿", rowId: '.owner', description: '𝙋𝙚𝙢𝙞𝙡𝙞𝙠 𝘽𝙤𝙩' },
	{title: "𝗦𝗽𝗲𝗲𝗱 𝗕𝗼𝘁", rowId: '.speed', description: '𝙆𝙚𝙘𝙚𝙥𝙖𝙩𝙖𝙣 𝘽𝙤𝙩' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "G E T",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah', 'claim']
handler.tags = ['rpg']
handler.command = /^(hadiah|claim)$/i

export default handler
