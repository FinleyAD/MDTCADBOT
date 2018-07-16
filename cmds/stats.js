 const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

 let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This bot's stats are:")
    .addField(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`)
    .setColor("#9B59B6");
  message.channel.sendEmbed(embed);
}


module.exports.help = {
	name: "stats",
	desclist: "Used to see the statistics of the bot - How many guilds/users/members we have",
	usage: "sh!stats"
}

