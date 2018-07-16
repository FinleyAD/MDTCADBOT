const users = require("../users.json");


module.exports.run = async (bot, message, args) => {



	  let user = users.user;
	  let password = users.password;

	  let userinput = args[0];
	  	  message.delete()
	  if(!userinput) return message.channel.send("Please provide a username");



}


module.exports.help = {
	name: "cadetslogin",
	desclist: "",
	usager: ""


}