const Discord = require('discord.js');
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');

const client = new Discord.Client();

var botstatus = true;

require('events').EventEmitter.defaultMaxListeners = Infinity;

const music = new Music(client, {
    youtubeKey: process.env.ytapikey, //Youtube Dev API3 Key
    prefix: config.prefix, maxQueueSize: 100, thumbnailType: 'default', defVolume: 100, anyoneCanSkip: true, messageHelp: true,
    botOwner: '342681780635172864', helpCmd: 'assist', playCmd: 'play',    skipCmd: 'skip', queueCmd: 'queue',
    pauseCmd: 'pause', resumeCmd: 'resume', volumeCmd: 'vol', leaveCmd: 'leave', clearCmd: 'clear', setCmd: 'set',
    loopCmd: 'loop', searchCmd: 'search', ownerCmd: 'owner', enableQueueStat: true});

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
    const pref = msg.content.slice(0, 2);
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (pref === config.prefix) {
        
        if (command === 'Status' && botstatus) {
            msg.channel.send("Online!");
        } else if (command === 'musichelp') {
	        msg.channel.send("Music Commands!! Enjoy!\n:>play [song]: Plays Song\n:>skip: Skips Song Playing\n:>queue: Shows song queue\n:>pause: Pauses Song\n:>resume: Resumes Song\n:>vol [Number 1-100]: Sets Bot Volume\n:>leave: Causes Bot to Leave Channel\n:>clear: Clears Queue\n:>loop: Loops song/queue\n:>search [text]: Searches Text and Pulls Up Video Options");                

                
                
                } else {
                        return;
                }
        } else {
                return;
        }
});
