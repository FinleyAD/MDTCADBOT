const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var embedping = new Discord.RichEmbed()
       .setTitle("**The Bots Ping is**")
       .addField('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`', "ping")
       .setColor(0xff8000)
       .setFooter("**PING!!**")
       message.channel.send(embedping);

}

  
    


module.exports.help = {
	name: "ping",
	desclist: "Use to see the ping of the bot",
	usage: "sh!ping"
}