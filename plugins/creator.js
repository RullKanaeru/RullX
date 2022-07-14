let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
• @${nomorown.split`@`[0]} •
------- ${nameown} -------

📮 *𝑵𝒐𝒕𝒆:*
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp
• Chat gajelas = Block`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*💌 Nama* : 𝑹𝒖𝒍𝒍𝑷𝒊𝒏𝒈𝒖𝒊𝒏
*✉️ Nama RL* : 𝑹𝒖𝒍𝒍
*♂️ Gender* : 𝑳𝒂𝒌𝒊 𝑳𝒂𝒌𝒊
*🕋 Agama* : 𝑷𝒓𝒊𝒗𝒂𝒕𝒆
*⏰ Tanggal lahir* : 𝑷𝒓𝒊𝒗𝒂𝒕𝒆
*🎨 Umur* : 𝑷𝒓𝒊𝒗𝒂𝒕𝒆
*🧮 Kelas* : 𝑷𝒓𝒊𝒗𝒂𝒕𝒆
*🧩 Hobby* : 𝑷𝒓𝒊𝒗𝒂𝒕𝒆
*💬 Sifat* : 𝑮𝒂𝒕𝒂𝒖
*🗺️ Tinggal* : 𝑰𝒔𝒆𝒌𝒂𝒊
*❤️ Suka* : 𝑮𝒂𝒕𝒂𝒖
*💔 Benci* : 𝑮𝒂𝒕𝒂𝒖

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} 𝐎𝐰𝐧𝐞𝐫 𝐁𝐨𝐭 –––––––––·•`,
	rows: [
	    {title: "📱 • 𝑁𝑂𝑀𝑂𝑅", rowId: ".owner nomor"},
	{title: "🎨 • 𝐵𝐼𝑂𝐷𝐴𝑇𝐴", rowId: ".owner bio"},
	{title: "🌐 • 𝑊𝐸𝐵", rowId: ".website"},
	]
    },{
	title: `${htjava} 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 –––––––·•`,
	rows: [
	    {title: "💹 • 𝐷𝑂𝑁𝐴𝑇𝐼𝑂𝑁", rowId: ".donasi"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
