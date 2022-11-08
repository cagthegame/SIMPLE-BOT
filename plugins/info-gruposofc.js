let media = './galería/grupos-oficiales.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝐓𝐄 𝐈𝐍𝐕𝐈𝐓𝐎 𝐀 𝐔𝐍𝐈𝐑𝐓𝐄 𝐀 𝐌𝐈𝐒 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒 𝐏𝐀𝐑𝐀 𝐂𝐎𝐍𝐕𝐈𝐕𝐈𝐑 𝐂𝐎𝐍 𝐋𝐀 𝐂𝐎𝐌𝐔𝐍𝐈𝐃𝐀𝐃 :𝐃
*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/IrvY5IpNHrOC92HUBvlCEH

*2._* https://chat.whatsapp.com/FPkQqMHIMLh2gR626AOU7V

*3._* https://chat.whatsapp.com/IrvY5IpNHrOC92HUBvlCEH

*4._* https://chat.whatsapp.com/FPkQqMHIMLh2gR626AOU7V

*5._* https://chat.whatsapp.com/IrvY5IpNHrOC92HUBvlCEH

*6._* https://chat.whatsapp.com/FPkQqMHIMLh2gR626AOU7V

`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
