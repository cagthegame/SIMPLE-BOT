import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}π«πππ ππ πππππππππ ππ πππππππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}π°ππππππ ππ ππππππππ πππ π«ππππππππ`
if (isNaN(txt)) throw `${mg}πΊππ ππΜππππππ, ππππ πππππππ ππ ππΜππππ`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp -= pjk
if (exp < 1) throw `${mg}π¬π ππΜππππ ππΜππππ πππ π¬ππππππππππ (πππ) ππ *1*`
let users = global.db.data.users
users[who].exp -= xp

conn.sendHydrated(m.chat, `β­β[ π¬ππππππππππ β‘]ββ¬£\nβ\nβα¦ *π·πππ:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *πΊπ πππππππ*\nβα¦ *${xp} EXP* β‘\nβ\nβ°βββββββββββββββ¬£`, wm, null, md, 'KANTU-BOT', null, null, [
['π Infobot π', '.infobot'],
['Volver al menu βοΈ', '/menu']], m)
}
handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['eliminarxp', 'eliminarexp', 'eliminarexperiencia', 'quitarexperiencia', 'quitarxp', 'quitarexp', 'delexperiencia', 'delxp', 'quitarexp'] 
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler
