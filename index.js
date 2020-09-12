const Discord = require("discord.js");
const MessageEmbed = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "!";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
  
    if (command === "wow") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }

    else if (command === "anything") {
        message.reply(command);
    }

    else if (command === "avatar") {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
      }
    else if (command === "rip") {
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
    else if (command === "embed") {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
          // Set the title of the field
          .setTitle('A slick little embed')
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription('Hello, this is a slick embed!');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
      }
    });
    
client.login(config.BOT_TOKEN);

