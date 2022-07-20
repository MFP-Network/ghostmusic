const { canModifyQueue } = require("../util/nkm");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed"); 
const {
  approveemoji,
  denyemoji,
  PREFIX,
} = require(`../config.json`);
module.exports = {
  name: "pause",
  aliases: ["pa"],
  description: "Pausiert die aktuelle Musik",
  cooldown: 5,
  edesc: `Geben Sie diesen Befehl ein, um den Song anzuhalten!\nBenutzung: ${PREFIX}pause`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, "Es gibt nichts zu stoppen").catch(console.error);
    //If not in the same channel return
    if (!canModifyQueue(message.member)) return;
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#4B180F")
      .setAuthor(`${message.author.username} pausiert die Musik.`, "https://mfp-network.com/wp-content/uploads/2022/07/Braun-orange-weisses-Logo-mit-Illustration-Festival-Pandaemonium.png")
      //react with approve emoji
      message.react(approveemoji)
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
