const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Zeigt diesen Bot in der Serverliste`,
  aliases: [],
  cooldown: 3,
  edesc: "Geben Sie diesen Befehl ein, um alle Bot-Listen Server, auf denen der Bot ist, anzuzeigen. Bitte dort abstimmen UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#4B180F")
    .setTitle("Hier ist eine Liste mit einem Überblick auf die Botliste!")
   .addField("top.gg", "https://top.gg/bot/897973364474388510")
   .addField("ghostmusik.ml", "ghostmusik.ml")
  
    );

  }
}