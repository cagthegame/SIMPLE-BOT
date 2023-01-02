import { performance } from 'perf_hooks'
let handler = async (m, { conn, text }) => {
let start = `*☠ ¡¡PREPARANDO SOPORTE!! ☠*`
let boost = `*${pickRandom(['10','20','30','40','50'])}%*`
let boost2 = `*${pickRandom(['60','70','80','90','100'])}%*`
await m.reply(start)
await m.reply(boost)
await m.reply(boost3)
await m.reply(boost5)
let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `*[ ✔ ] 𝗡𝗨𝗠𝗘𝗥𝗢 𝗕𝗔𝗡𝗘𝗔𝗗𝗢*\n*⏳ 𝗦𝗢𝗣𝗢𝗥𝗧𝗘 𝗘𝗡𝗩𝗜𝗔𝗗𝗢 𝗘𝗡: ${speed} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜!*
*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂:*
*Nombre:* ${text}

𝐍𝐔𝐌𝐄𝐑𝐎 𝐄𝐍 𝐄𝐒𝐏𝐄𝐑𝐀 𝐃𝐄 𝐒𝐎𝐏𝐎𝐑𝐓𝐄.

𝗦𝗜 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗡𝗢 𝗦𝗘 𝗩𝗔 𝗔 𝗦𝗢𝗣𝗢𝗥𝗧𝗘 𝗘𝗦 𝗣𝗢𝗥 𝗤𝗨𝗘:

- 𝙵𝙰𝙻𝙻𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾
- 𝙲𝙾𝚁𝚁𝙴𝙾 𝙽𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾
- 𝙲𝙾𝙳𝙴𝚂 𝙴𝙽 -𝟷
- 𝙼𝙴𝚃𝙾𝙳𝙾 𝙿𝙰𝚁𝙲𝙷𝙰𝙳𝙾
- 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙽𝙾 𝙻𝙴 𝙳𝙸𝙾 𝙱𝙰𝙽


𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴 𝙴𝚂𝚃𝙰𝚁 𝟷00% 𝚂𝙴𝙶𝚄𝚁𝙾 𝙳𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚂𝙴 𝚅𝙰𝚈𝙰 𝙰 𝚂𝙾𝙿𝙾𝚁𝚃𝙴 𝙿𝚄𝙴𝙳𝙴 𝙽𝙴𝙶𝙾𝙲𝙸𝙰𝚁 𝙲𝙾𝙽 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 wa.me/5215591478197

m.reply(doxeo, null, { mentions: conn.parseMention(doxeo) })
}
handler.help = ['soporte <nombre> | <@tag>']
handler.tags = ['fun']
handler.command = /^darsoporte|enviarasoporte|darbaneowhatsapp/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
