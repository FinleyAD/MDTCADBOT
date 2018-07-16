module.exports.run = async (bot, message, args) => {

	let users = bot.users;

	let searchTerm = args[0];
	if(!searchTerm) return message.channel.sendMessage("Please provide a search term.");

	let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
	
	message.channel.sendMessage(matches.map(u => u.tag));


}


module.exports.help = {
	name: "findusers",
	desclist: "Use to find users with a specific term in their name",
	usage: "sh!findusers <terms> For example \`sh!findusers art\` shows all users in that guild with the word \`art\` in their name"
}