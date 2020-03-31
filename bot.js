const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("+");

client.login(process.env.BOT_TOKEN);

client.on('ready', function () {
    console.log('Bot Connected')
    client.user.setGame(`Kingdom System (+help)`,"http://twitch.tv/Death Shop")
})

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('693093387183587359').send(' **Hello** ' + member.user + ', **Welcome to Kingdom** , **We are now** ' + member.guild.memberCount + ' **Members** ! :crown: **Kingdom For life** :heart:');
    console.log('+1');
});

/*kick*/
client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix +'kick'){
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("**Adak l7mar ! ** `Ra ma3ndkch the permission to use this command a zbi` ! :warning: ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(" `Please Mention an user` ! :warning: ")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("You do not have the permission to kick this member")
        if (!member.kickable) return message.channel.send(" `I can't kick this user` :warning: ")
        member.kick()
        message.channel.send(member.user.username+ ' `Has been kicked from the server, Bye` :o :warning: ')
    }
});


/*Ban*/
client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix +'ban'){
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Adak l7mar !** `Ra ma3ndkch the permission to use this command a zbi` :warning: ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(" `Please Mention an user` ! :warning: ")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("`You do not have the permission to Ban this member` :warning: ")
        if (!member.bannable) return message.channel.send(" `I can't Ban this user` :warning: ")
        message.guild.ban(member, {days : 7})
        message.channel.send(member.user.username+ ' `Has been Banned from the server, Bye` :o :warning: ')
    }
});

/*help*/

client.on('message', message => {
   if (message.content === (prefix + "help")) {
   let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#6910dd")
.addField("Done" , " Bot still in developpement, Please ask a Kingdom Staff Member for the commands !" )
message.channel.sendEmbed(embed);
  }
});

/*blacklist*/

client.on('guildMemberAdd', (mem1) => {
             if ( (mem1.user.id == "506960370444009483") || (mem1.user.id == "") || (mem1.user.id == "") || (mem1.user.id == "") || (mem1.user.id == "")  || (mem1.user.id == "")|| (mem1.user.id == "")|| (mem1.user.id == "")|| (mem1.user.id == "")|| (mem1.user.id == "")){
		let chan = mem1.guild.channels.find( channel => channel.id === "620781295563177985");
                chan.send("__**Warning :warning: :**__**This member ``" + mem1.displayName + "`` is blacklisted:rotating_light: ** ");
		mem1.ban(7) 
                .then(() => chan.send(" ``" + mem1.displayName + " `` __**was banned :hammer:**__"));
	        mem1.guild.owner.send("__**Warning :warning: :**__**This member** ``" + mem1.displayName + "`` ** has been banned because he is blacklisted:rotating_light: **");
}
});

client.on('message', msg => {
if (msg.content.startsWith(prefix + 'scann')) {
	if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('**A L7mar, you dont have permission** `ADMINISTRATOR`🚫' );

msg.guild.ban('506960370444009483').then(user => msg.channel.send(`**🚨A Blacklisted user has been detected :** __** ${user.username || user.id || user}**__ **has been banned from**🔨 __** ${msg.guild.name} **__ `));
msg.guild.ban('').then(user => msg.channel.send(`**🚨A Blacklisted user has been detected :** __** ${user.username || user.id || user}**__ **Has been banned from**🔨 __** ${msg.guild.name} **__ `));
msg.guild.ban('').then(user => msg.channel.send(`**🚨A Blacklisted user has been detected :** __** ${user.username || user.id || user}**__ **Has been banned from**🔨 __** ${msg.guild.name} **__ `))
   
	
.then(user2 => msg.channel.send('__**The server is clean**__✅'));
}
});




/*move*/

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

/*goto*/

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



/*id server*/

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

.addField('**⌚ | Exact date of creation  :**', message.author.createdAt.toLocaleString())
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
    .addField(':blue_circle: **__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});





/*Clear*/ /*mute*/
client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix +"clear") {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Adak L7mar !** `You dont have the permission to use this command !` :warning: ")
        let count = args[1]
        if (!count) return message.channel.send(" `Please choose a number of messages to delete` :warning:")
        if (isNaN(count)) return message.channel.send(" `Please choose a number of messages to delete ` :warning: ")
        if (count <1 || count > 100) return message.channel.send("`Please choose a number from 1 to 100` :warning: ")
        message.channel.bulkDelete(parseInt(count) + 1)
    }

    if (args[0].toLowerCase() === prefix +"mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Adak L7mar !** `You dont have the permission to use this command !` :warning: ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("`I Couldn't found that member ` :warning: ")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("` I can't Mute this user` :warning: ")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("`I can't Mute this Member` :warning: ")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + '`Has Been Muted` :warning: ')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + '`Has Been Muted` :warning: ')
            })
        }
    }

   

    /*Unmute */
    if(args[0].toLowerCase() === prefix + "unmute"){
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Adak l7mar !** `You dont have the permission to use this command !` :warning: ")
        if(!member) return message.channel.send(" `I Couldn't found that member` ! :warning: ")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("`You c'ant unmute this member.` :warning: ")
        if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id ===  message.guild.ownerID) return message.channel.send("`I c'ant unmute this member.` :warning: ")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' `Has been unmuted` :warning: ')
    }


    
});
