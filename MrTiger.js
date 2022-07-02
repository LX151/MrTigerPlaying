const Discord = require('discord.js');
const tpoints = {};
const prefix = "2"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `s!help`,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("OTg1OTE0MTE4NDY2ODYzMTY0.GPwjC7.uJ59FdSDthnsQqyFjbq4EJ9RE8Usb9ZGcyF3Ik");
