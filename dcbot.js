const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.buttons = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const buttonsPath = path.join(__dirname, 'buttons');
const buttonFiles = fs.readdirSync(buttonsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    try{
		client.commands.set(command.data.name, command);
	} catch(error){
		//console.log(error);
		console.log(`${file} can't be required`);
	}
}
for (const file of buttonFiles) {
    const filePath = path.join(buttonsPath, file);
    const button = require(filePath);
    
    try{
		client.buttons.set(button.data.name,button);
	} catch(error){
		//console.log(error);
		console.log(`${file} can't be required`);
	}
}
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.on(Events.InteractionCreate, async interaction => {
    //console.log(interaction);

    const userData = {
        user_ID : `${interaction.user.id}`,
        farming_Status : 0,
        count_farmed : 0,
        land_Farmed : 0
    };
    const userStatus = JSON.parse(fs.readFileSync('./userStatus.json', 'utf8'));
    if (!(userStatus.find(data => data.user_ID === userData.user_ID))) {
        userStatus.push(userData);
        fs.writeFileSync('./userStatus.json', JSON.stringify(userStatus));
    }
    if (interaction.isChatInputCommand()){

        const command = client.commands.get(interaction.commandName);

        if (!command) return;
        //console.log(command);
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', 
            ephemeral: true });
        }
    }
    else if(interaction.isButton()) {
       // console.log(interaction);
        const button = client.buttons.get(interaction.customId);
        if(!button) return;
        //console.log(button);

        try{
            await button.execute(interaction);
        }catch(error){
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', 
            ephemeral: true });

        }
    }
    else{
        return;
    }

});

// const bot = new Client();
// bot.on(Events.ButtonPress, async buttonPressEvent => {
//     const { customId } = buttonPressEvent;
//     if (customId === 'Farm!') {
//         await buttonPressEvent.respond('你按了鋤!!!');
//     } else if (customId === 'WaitMore') {
//         await buttonPressEvent.respond('你按了再等等');
//     }
// });

client.login(token);