const botconfig = require("./botconfig.json");
const Discord = require ("discord.js");
const money = require('discord-money');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const ms = require("ms");
const med = JSON.parse(fs.readFileSync('med.json', 'utf8'));




Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
};


bot.commands = new Discord.Collection();
fs.readdir("./cmds/",  (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i +1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);

  });

});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("sh! | MDT/CAD Open");
  bot.user.setUsername("MDT/CAD Bot");
});




bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.reply("Dm's can not be used for commands, sorry about that!");
  if (message.isMentioned(bot.user)) {
    message.reply("My prefix is here \`sh!\` you can find more help using \`sh!help\`");
  };

  let colds = med.colds;
  let prefix = botconfig.prefix;
  let sprefix = botconfig.sprefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);



// if(command === `${prefix}help`) {
// message.channel.send(`What do you need help with? 1. What is the point of this bot? 2. Who created this bot? 3. What are the commands for this bot?`)
// .then(() => {
//   message.channel.awaitMessages(response => response.content === '1', {
//     max: 1,
//     time: 30000,
//     errors: ['time'],
//   })
//   .then((collected) => {
//     var embedping = new Discord.RichEmbed()
//     .setTitle("**The purpose of this bot:**")
//     .addField(`The help you chose was: ${collected.first().content}` + `\n This bot was made in hope to someday help someone. \n If you are near a device with an internet connection then you can hit up this bot \n `)
//     .setDescription(" | ")
//     .addField(`and ask a question about yourself; if you feel unwell and need help \n then you can message this bot for help!`)
//     .setColor(0xff8000)
//     .setFooter(" | ")
//     message.channel.send(embedping);

//     })
//     message.channel.awaitMessages(response => response.content === '2', {
//       max: 1,
//       time: 30000,
//       errors: ['time'],
//     })
//     .then((collected) => {
//       message.channel.send(`The help you chose was: ${collected.first().content}` + `\n This bot was created by sir Kalum`);
//     })
//     message.channel.awaitMessages(response => response.content === '3', {
//       max: 1,
//       time: 30000,
//       errors: ['time'],
//     })
//     .then((collected) => {
//       message.channel.send(`The help you chose was: ${collected.first().content}` + `\n This bot has many commands! Here they are: ${commands}`);
//     })
//     .catch(() => {
//       message.channel.send('There was no collected message that passed the filter within the time limit!');
//     });
//   });


// if (command === `${prefix}close`){
//  ticket = data["tickets"] + 1
//  data["tickets"] = ticket
//  var chan = message.channel.name.indexOf("ticket") > -1;


//   console.log(chan);

//      if(chan) {
//      message.channel.delete();
//      message.author.sendMessage("Your ticket has been closed.");
//      } else{
//        message.channel.sendMessage("You are not in the correct channel")
//      }

//  }


// if (command === `${prefix}new`) {
// message.channel.send({embed: {
//    color: 0xff8000,
//    title: "",
//    url: "",
//    description: ":white_check_mark: Your ticket has been created.",
//    footer: {
//      icon_url: bot.user.avatarURL,
//         text: "Med Bot v1.0",
//    }
//  }
// });
// ticket = data["tickets"] + 1
// data["tickets"] = ticket
//  message.guild.createChannel(`ticket-` + (ticket).pad(4), "text")
//  //message.guild.createChannel(`Ticket-${Math.random(5)}`, "text")
// .then(newChannel => newChannel.setParent("443445426809470986"))
// .then(newChannel => newChannel.setTopic(``))
// .then(newChannel => newChannel.overwritePermissions(message.author, {VIEW_CHANNEL: true, SEND_MESSAGES: true}))
// .then(newChannel => newChannel.overwritePermissions(message.guild.defaultRole, {VIEW_CHANNEL: false}))
// .then(newChannel => newChannel.overwritePermissions(message.guild.roles.find("name", "Tester"), {VIEW_CHANNEL: true, SEND_MESSAGES: true}));
// }
// };

// if (command === `${sprefix}cold`){
//   message.channel.send({embed: {
//      color: 0xff8000,
//      title: "Symptoms",
//      url: "",
//      description: "Runny or stuffy nose \n Sore throat \n Cough \n Congestion \n Slight body aches or  a mild headache \n Sneezing \n Low-grade fever",
//      footer: {
//        icon_url: bot.user.avatarURL,
//           text: "Med Bot v1.0",
//      }
//    }
// });
// };


// //sprefix = s!
// //prefix = sh!




// if (command === `${prefix}cold`){
//   message.channel.send(`Tester`)
//   .then(() => {
//     message.channel.awaitMessages(response => response.content === 'Adult', {
//       max: 1,
//       time: 30000,
//       errors: ['time'],
//     })
//     .then((collected) => {
//      message.channel.send({embed: {
//         color: 0xff8000,
//         title: "Symptoms for an Adult",
//         url: "",
//         description: `You have chosen \`Adult\` you are more than likey experience the following: \n ${colds}`,
//         footer: {
//           icon_url: bot.user.avatarURL,
//              text: "Med Bot v1.0",
//         }
//       }
//      })

//       })
//       message.channel.awaitMessages(response => response.content === 'Child', {
//         max: 1,
//         time: 30000,
//         errors: ['time'],
//       })
//       .then((collected) => {
//        message.channel.send({embed: {
//           color: 0xff8000,
//           title: "Symptoms for a Child",
//           url: "",
//           description: `You have chosen \`Child\` you are more than likey experience the following: \n ${colds}`,
//           footer: {
//             icon_url: bot.user.avatarURL,
//                text: "Med Bot v1.0",
//           }
//         }
//        })

//       })
//           .catch(() => {
//         message.channel.send('There was no collected message that passed the filter within the time limit!');
//       });
//     });


// }





});










bot.login(botconfig.token);
