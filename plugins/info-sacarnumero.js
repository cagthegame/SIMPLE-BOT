let handler = async (m, { conn, usedPrefix }) => {
let vn = './media/menu'
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`╰⊱🔰⊱ *paso a paso* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
 Como sacar un número del soporte 
Rápido 
Manda un Gmail correo 
Al
support@support.whatsapp.com
Asulto 
Me suspendieron por error
Texto algunos del esto 
Texto 1:
Hola me suspendieron por error yo no hice nada malo apenas estoy usando el WhatsApp, y necesito mi número para mí grupo del estudio y trabajo.
Por favor me suspendieron por error
Mi número es
####
Textos 2:
Hola buenas noches, vengo a reclamar un error de suspensión a mi cuenta Hace aproximadamente un par de horas, estaba tranquilamente hablando con amigos cuando me llega un mensaje diciendo que mi WhatsApp fue registado en otro telefono; posterior a eso cuando intento ingresar me dice que mi cuenta Ha sido suspendida, por favor me ayuden a recuperar mi cuenta mi numero es (NUMERO)
Texto 3:
porfavor activen mi cuenta de WhatsApp tengo cosas muy importantes gracias mi número es (NUMERO)
Textos 4:
Hola Buenas, hace poco recupere mi celular y quiero que activen mi cuenta de WhatsApp tengo cosas de empresas mi número es (NUMERO)`
let buttonMessage= {
'document': { url: `https://github.com/cagthegame/KANTU-BOT` },
'mimetype': `application/${document}`,
'fileName': `𝐊𝐀𝐍𝐓𝐔 𝐁𝐎𝐓`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/cagthegame/KANTU-BOT',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Como saca un numero del soporte',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝐊𝐀𝐍𝐓𝐔 𝐁𝐎𝐓'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(sacarnumero|sacarnumerodelsoporte|como sacar un numero del soporte)$/i
export default handler
