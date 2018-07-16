
const money = require('discord-money');


module.exports.run = async (bot, message, args) => {

	let police = message.guild.roles.find("name", "Cadet");

	if(!police) return message.channel.send("You do not have the required role")

	let sign = args[0];


	money.updateBal(message.author.id, `${sign}` /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                message.channel.send(`**New Callsign:** K1-${sign}`).setNickname(`Test`);
            })



}



module.exports.help = {
	name: "setcallsign",
	desclist: "Let's you change your call sign, maybe changed due to admins",
	usage: "sh!changecallsign"

}