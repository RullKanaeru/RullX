import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "𝗣𝗶𝗹𝗶𝗵 𝗨𝗺𝘂𝗿 !",
	rows: [
	    {title: "𝘜𝘮𝘶𝘳 𝘙𝘢𝘯𝘥𝘰𝘮", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "𝘛 𝘜 𝘈",
	rows: [
	    {title: "30 Years", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Years", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Years", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Years", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Years", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Years", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "𝘔 𝘜 𝘋 𝘈",
	rows: [
	    {title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Years", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Years", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Years", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Years", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Years", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›𝘚𝘪𝘩𝘭𝘢𝘬𝘢𝘯 𝘱𝘪𝘭𝘪𝘩 𝘶𝘮𝘶𝘳 𝘥𝘪 𝘵𝘰𝘮𝘣𝘰𝘭 𝘣𝘦𝘳𝘪𝘬𝘶𝘵...`,
  footer: `┗ *ɴᴀᴍᴀ ᴋᴀᴍᴜ:* ${conn.getName(m.sender)}\n<❔> 𝘔𝘢𝘶 𝘬𝘶𝘵𝘰𝘮𝘪𝘴𝘢𝘴𝘪 𝘯𝘢𝘮𝘢? 𝘒𝘦𝘵𝘪𝘬 *${usedPrefix + command} 𝘯𝘢𝘮𝘢.𝘶𝘮𝘶𝘳*`,
  title: "▢- - - - - ᴍᴇɴᴅᴀғᴛᴀʀ - - - - -",
  buttonText: "𝙆𝙡𝙞𝙠 𝙙𝙞𝙨𝙞𝙣𝙞 𝙮𝙖𝙖 !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'ɴᴀᴍᴀ ɢᴀʙᴏʟᴇʜ ᴋᴏsᴏɴɢ (Alphanumeric)'
  if (!age) throw 'ᴜᴍᴜʀ ɢᴀʙᴏʟᴇʜ ᴋᴏsᴏɴɢ (Angka)'
  age = parseInt(age)
  if (age > 30) throw '𝑈𝑚𝑢𝑟 𝑇𝑒𝑟𝑙𝑎𝑙𝑢 𝑇𝑢𝑎 (。-`ω´-)'
  if (age < 5) throw '𝑇𝑒𝑟𝑙𝑎𝑙𝑢 𝑏𝑜𝑐𝑖𝑙'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏─• *ᴜsᴇʀ ʙᴏᴛ*
│▸ *sᴛᴀᴛᴜs:* 𝑆𝑢𝑘𝑠𝑒𝑠𝑠
│▸ *ɴᴀᴍᴀ:* ${name}
│▸ *ᴜᴍᴜʀ ᴀɴᴅᴀ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
┗────···

`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - 𝑴𝑬𝑵𝑫𝑨𝑭𝑻𝑨𝑹 - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
