const users = require("../users.json");


module.exports.run = async (bot, message, args) => {



	  let user = users.user;
	  let password = users.password;

	  let userinput = args[0];
	  	  message.delete()
	  if(!userinput) return message.channel.send("Please provide a username");


	  let passwordinput = args[1];
	  if(!passwordinput) return message.channel.send("Please provide a password")
	  
	  
	  if(passwordinput === password || userinput === user) return message.channel.send("Log in complete")
	  	
	  	message.author.send("Welcome Cadet!")

	  	message.author.send("Welcome to the MDT you will be given an embed message, once we have loaded everything!"), 1 * 100



	  if(passwordinput !== password || userinput !== user) return message.channel.send("Log in failed");







}


module.exports.help = {
	name: "cadetlogin",
	desclist: "",
	usager: ""


}