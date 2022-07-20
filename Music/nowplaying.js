////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const createBar = require("string-progressbar");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const {
  approveemoji,
  denyemoji,
  PREFIX,
} = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "nowplaying",
  aliases: ['np',"now-playing","current","current-song"],
  description: "Zeigt aktuellen Song",
  cooldown: 5,
  edesc: `Gib im Chat nowplaying ein, um zu sehen, welches Lied gerade gespielt wird! Außerdem wird angezeigt, wie lange es dauert, bis es zu Ende ist.\nBenutzung: ${PREFIX}nowplaying`,
  
execute(message) {
    //if not in a guild return
    if(!message.guild) return;
    //react with approve emoji
    message.react(approveemoji)
    //get Server Queue
    const queue = message.client.queue.get(message.guild.id);
    //if nothing playing error
    if (!queue) return attentionembed(message, "Es gibt nichts zu spielen.").catch(console.error);
    //Define the current song 
    const song = queue.songs[0];
    //get current song duration in s
    let minutes = song.duration.split(":")[0];   
    let seconds = song.duration.split(":")[1];    
    let ms = (Number(minutes)*60+Number(seconds));   
    //get thumbnail
    let thumb;
    if (song.thumbnail === undefined) thumb = "https://mfp-network.com/wp-content/uploads/2022/07/Braun-orange-weisses-Logo-mit-Illustration-Festival-Pandaemonium.png";
    else thumb = song.thumbnail.url;
    //define current time
    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    //define left duration
    const left = ms - seek;
    //define embed
    let nowPlaying = new MessageEmbed()
          .setAuthor('♪Jetzt♪','https://mfp-network.com/wp-content/uploads/2022/07/Braun-orange-weisses-Logo-mit-Illustration-Festival-Pandaemonium.png','https://mfp-network.com/ghostmusic')
          .setDescription(`[**${song.title}**](${song.url})`)
          .setThumbnail(song.thumbnail.url)
          .setColor("#4B180F")
          .setFooter(`In der Liste dank: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
      //if its a stream
      if(ms >= 10000) {
        nowPlaying.addField("\u200b", "🔴 LIVE", false);
        //send approve msg
        return message.channel.send(nowPlaying);
      }
      //If its not a stream 
      if (ms > 0 && ms<10000) {
        nowPlaying.addField("\u200b", "**``[" + createBar((ms == 0 ? seek : ms), seek, 25, "▬", "🔘")[0] + "]``**\n**" + "\n[" + new Date(seek * 1000).toISOString().substr(11, 8) + " / " + (ms == 0 ? " ◉ LIVE" : new Date(ms * 1000).toISOString().substr(11, 8))+ "]**" + "\n" + "\n **Zeit verbleidbend:**" + "``" + new Date(left * 1000).toISOString().substr(11, 8) + "``", false );
        //send approve msg
        return message.channel.send(nowPlaying);
      }
  }
};
