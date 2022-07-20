module.exports = { 
    name: "leave", 
    description: "Verlässt den VC", 
    execute(message) {
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply("Du bist in keinem VC!").catch(console.error); 
         if (!message.guild.me.voice.channel) return message.reply("Hier kann ich nicht singen, lass mich auf einen Bühne zuerst!").catch(console.error); 
         if (channel.id !== message.guild.me.voice.channel.id) return message.reply("Ich bin doch garnicht da!").catch(console.error); 
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.leave(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send('Ich verlasse das hier. Sehen uns Später.').catch(console.error); 
             return 
            }
            channel.leave(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send('I have left the channel. See you again.').catch(console.error); } };