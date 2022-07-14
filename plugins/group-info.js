let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*「 𝗜𝗡𝗙𝗢 𝗚𝗥𝗨𝗕 」*\n
*𝐈𝐃:* 
${groupMetadata.id}
*𝐍𝐚𝐦𝐚:* 
${groupMetadata.subject}
*𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢:* 
${groupMetadata.desc?.toString() || 'unknown'}
*𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫:*
${participants.length} Members
*𝐎𝐰𝐧𝐞𝐫 𝐆𝐫𝐮𝐛:* 
@${owner.split('@')[0]}
*𝐎𝐰𝐧𝐞𝐫 𝐀𝐝𝐦𝐢𝐧:*
${listAdmin}
*𝐒𝐞𝐭𝐭𝐢𝐧𝐠 𝐆𝐫𝐮𝐛:*
${isBanned ? '✅' : '❌'} 𝐁𝐧𝐧𝐧𝐞𝐝
${welcome ? '✅' : '❌'} 𝐖𝐞𝐥𝐜𝐨𝐦𝐞
${detect ? '✅' : '❌'} 𝐃𝐞𝐭𝐞𝐜𝐭
${del ? '❌' : '✅'} 𝐀𝐧𝐭𝐢 𝐝𝐞𝐥𝐞𝐭𝐞
${antiLink ? '✅' : '❌'} 𝐀𝐧𝐭𝐢 𝐥𝐢𝐧𝐤
*𝐒𝐞𝐭𝐭𝐢𝐧𝐠 𝐏𝐞𝐬𝐚𝐧:*
𝐖𝐞𝐥𝐜𝐨𝐦𝐞: ${sWelcome}
𝐁𝐲𝐞: ${sBye}
𝐏𝐫𝐨𝐦𝐨𝐭𝐞: ${sPromote}
𝐃𝐞𝐦𝐨𝐭𝐞: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler
