const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '+'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "475059185831116811") return; 

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});



/////////////////////////////////////////////////
const queue = new Map();
client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);
    client.user.setGame('Hades - (+help)',"https://www.twitch.tv/peery13");
});


client.on('message', message => {
   var mention = message.mentions.members.first();
   var chan = message.member.voiceChannel;
	
	
  if (message.content.startsWith(prefix + "move")) {
   if(!message.member.roles.find(role => role.name === "Move")) return message.reply("__** You dont have the ``Move`` role  **__"); 
   if (!chan) return message.reply("__** You need to be in a voice channel ! **__");
   if (!mention) return message.reply("__** Please, Mention a user ! **__");
   var chan2 = mention.voiceChannel;
   if (!chan2) return message.reply("__** The user you mentioned is not in a voice channel ! **__");
   var permissions = chan2.permissionsFor(message.member.user);
   if (!permissions.has('CONNECT') || !permissions.has('VIEW_CHANNEL')) {
      return message.reply('__** You can not move this user ! **__');
    }

    console.log('hi')
    let log = message.guild.channels.find( channel => channel.name === "move-log");
    log.send('**`' + message.author.username + '`** ** Moved ** **`' + mention.user.username + '`** ** From ** __**{' + chan2  + '}**__  **`` To ``**  __**{' + chan + '}**__');
    mention.setVoiceChannel(chan)
   message.channel.send(" :white_check_mark:  ``"+mention.displayName+"`` ** moved to ** __**"+chan+"**__")
   
  }
    
});

client.on('message', message => {
  var mention = message.mentions.members.first();
   var chan = message.member.voiceChannel;
  
  
  if (message.content.startsWith(prefix + "goto")) {
   if(!message.member.roles.find(role => role.name === "Move")) return message.reply("__** You dont have the ``Move`` role **__");
   if (!mention) return message.reply("__** Please, Mention a user ! **__");
   var chan2 = mention.voiceChannel;
     if (!chan2) return message.reply("__** The user you mentioned is not in a voice channel **__");
     var permissions = chan2.permissionsFor(message.member.user);
     if (!permissions.has('CONNECT') || !permissions.has('VIEW_CHANNEL')) {
      return message.reply('__** You dont have the permission to join this channel **__');
    }
    console.log('hi')
    let log = message.guild.channels.find( channel => channel.name === "move-log");
    log.send('**`' + message.author.username + ':`** **{'+ chan + '}** __**Teleported To**__ **`' + mention.displayName + ':`** **{' + chan2 + '}**');
    message.member.setVoiceChannel(chan2)
   
   
  }
    
});
//////////////////////////////////////////////////////////////////////
	client.on('message', message => {
if (message.content.startsWith(prefix + "ban")) {
	
    var mention = message.mentions.members.first();
	if (!message.member.hasPermission("BAN_M"))  return message.reply('__** You dont have the `BAN_M` Permission ! :no_entry_sign:**__');
	if(!message.guild.member(client.user).hasPermission("BAN_M")) return message.reply("** I dont have the `BAN_M` permission !  :confused: **");
    if(!mention) return message.channel.send("__** User was not found **__ ```+Ban <User:Mention> [Reason:Text]```");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send(" :hammer: ``" + mention.displayName + "`` __**: Has been banned from the server ! **__ ");
};
});
	client.on('message', message => {
if (message.content.startsWith(prefix + "kick")) {
	
    var mention = message.mentions.members.first();
	if (!message.member.hasPermission('KICK_MEMBERS'))  return message.reply('__** You dont have the `KICK_MEMBERS` Permission !   :no_entry_sign: **__');
	if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("** I dont have the `KICK_MEMBERS` permission !    :confused: **");
    if(!mention) return message.channel.send("__** User was not found **__ ```+Kick <User:Mention> [Reason:Text]```");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send(" :no_entry:  ``" + mention.displayName + "`` __**: Has been kicked out of the server ! **__ ");
	

};
});
//////////////////////////////////////////////////////////////////////


client.on("message", msg => {
	var prefix = "+";
if (msg.content.startsWith(prefix + "report")) {
var mention = msg.mentions.members.first();
var args = msg.content.split(' ').slice(2);
var args2 = args.join(' ');
	if(!mention) return msg.reply('**You need to mention the member you want to report**  ``` Report <User:Mention> [Report subject:Text] ``` ');
        if(!args2) return msg.reply('**You need to mention the reason for the report** ``` Report <User:Mention> [Report subject:Text] ``` ');
	var channel = msg.guild.channels.find(chann => chann.id === "692843276977438811");
	
channel.send(`:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:`);
channel.send(`<@&615590344658124803> , <@&603323549108928523> , <@&615911024066822210> , <@&602246777361530956> , __**A new report has been submitted**__`)
channel.send(`__**Report author :**__<@${msg.author.id}> `);
channel.send(`__**Reported :**__<@${mention.id}> `);
channel.send(`__**Report subject :**__ \`\`${args2}\`\``)
msg.channel.send(` :white_check_mark: __**Report sent**__`);

}
});615911024066822210



client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#6910dd")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
         ${prefix}id   : Your Personnal File.  
         ${prefix}server : Server Statistics. 
         ${prefix}link : Invite to the server.   
         ------------------------------
         ${prefix}ban  : Ban a Member. 
         ${prefix}kick : Kick a Member. 
         ${prefix}mute : Mute a Member.
         ${prefix}unmute : Unmute a Member. 
         ${prefix}report : Report a Member.  
         ${prefix}move : Move a Member to a Voice Channel.
         ${prefix}clear: Delete Messages. 
         ${prefix}createroles : Make complete Ranks for the server.   
         ${prefix}voicesetup : Create a voice channel  
         ------------------------------
         ${prefix}guilds: Number of bot servers.  
         ${prefix}inv   : Invite to the bot server.   
         ${prefix}help  : Receive thi message.
         ------------------------------
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#6910dd")
  .addField("Done" , " You have been sent a private message !")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var prefix = "+"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'Bot';
}else {
var w = 'Member';
}
let embed = new Discord.RichEmbed()
.setColor("#6910dd")
.addField('🔱| Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ID:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| Account Type:',"**"+ w + "**",true)    
.addField('📛| Your accounts Code  :',"**#" +  `${z.discriminator}**`,true)
.addField('📆| ** Date of creation  **: ' ,year + "-"+ month +"-"+ day)    
.addField("⌚| ** Date of joining the server :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | Exact date of creating  :**', message.author.createdAt.toLocaleString())
.addField("**💬 |Your last message | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('** ❌ Put the mention in the correct way ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('#6910dd')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#6910dd")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('** Put a certain number please.  **');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***``` Put the number of messages to delete ! 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n Number of messages deleted : " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});



client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});
client.on('message', message => {
    if (message.content === "_createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Head-Administrator", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Administrator", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Moderator", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Support", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Friend", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('** Loanding . . . Please Wait.  **')
}
});


      client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: ** I dont have the permission ! **');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » __  Failed to create the channel . . you need to put 0 in the name of the room ! __');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: »  The Room has been created !');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


client.on('message', async message => {
  if(message.content.startsWith(prefix + "membersetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: ** You dont have the permission ! **');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: ** I dont have the permission ! **');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » __ Failed to create the channel . . You need to put 0 in the name of the room ! __');
  if(!args) args = `VoiceOnline: [ ${message.guild.memberCount} ]`;
  message.channel.send(':white_check_mark: » The room has been created !');
  message.guild.createChannel(`${args.replace(0, message.guild.memberCount)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.memberCount)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});



client.on("guildMemberAdd", memb => {
        if(memb.guild.id === "692803787286642820") {  // ايدي السيرفر
  const channel = memb.guild.channels.find('id', '692845285843533846'); //ايدي الروم
if (!channel) return;
channel.send(`**<@${memb.user.id}> Welcome To Our Server !  ** ❤️ `)  

}});



//////////////////////////////////////////////////////////////////////


client.login(process.env.BOT_TOKEN);
