module.exports.run = async (bot, message, args) => {



	let sargent = message.guild.roles.find("name", 'Sargent');
	if(!message.member.roles.has(sargent.id)) return message.channel.send("You do not have the required rank");
	
	// let staffsargent = message.guild.roles.find("name", 'Staff Sargent');
	// if(!message.member.roles.has(staffsargent.id)) return message.channel.send("You do not have the required rank you need Staff Sargent");






	let role = args.join(" ").slice(22);
	if(!role) return message.channel.send("Please specify a role");
	let gRole = message.guild.roles.find('name', role);
	if(!gRole) return message.channel.send("Could not find that role");


		let searchTerm = message.mentions.members.first();
		if(searchTerm === `${message.author.id}`) return message.channel.send("You can not promote yourself!")

if(searchTerm.roles.has(gRole.id));
await(searchTerm.addRole(gRole.id));






message.channel.send(`Well done! ${searchTerm} you've been promoted too ${gRole}!`)





}


module.exports.help = {

	name: "promote",
	desclist: "",
	usage: ""
}