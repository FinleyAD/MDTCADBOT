const money = require('discord-money');

module.exports.run = async (bot, message, args) => {

		
	let police = message.guild.roles.find("name", "Cadet");

	if(!police) return message.channel.send("You do not have the required role")

	money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`**Callsign:** K1-${i.money}`);
            })


}


module.exports.help = {
	name: "getcallsign",
	desclist: "",
	usage: ""

}