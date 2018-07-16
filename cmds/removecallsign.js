
const money = require('discord-money');

module.exports.run = async (bot, message, args) => {

	let police = message.guild.roles.find("name", "Cadet");

	if(!police) return message.channel.send("You do not have the required role")
	

		let rem = args[0];

	if(!rem) return message.channel.send("Please enter the callsign you want to remove");
	money.updateBal(message.author.id, -`${rem}`).then((i) =>{
		message.channel.send(`Removed. ${rem}\n **New Callsign**: K1-${i.money}`)
	})



}




module.exports.help = {
	name: "remcallsign"
}