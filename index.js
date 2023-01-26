const { Client, GatewayIntentBits, Intents } = require('discord.js')
const config = require("./config.json");
const fetch = require('node-fetch');

const client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
});

const prefix = '/pixel';
const endpoint = 'https://alchemy.sxpdigital.workers.dev/';

client.on('ready', () => {
    console.log(`Bot is ready and connected as ${client.user.username}`);
});

client.on('messageCreate', async message => {
	console.log(message.content);
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const input = message.content.slice(prefix.length);

    // Send the message to the localhost endpoint
    const client = 1;
    const channelId = "three";
    const entity = 1;
    const speaker = message.author.username;
    const agent = "Pixel";
    const channel = "discord";
    let finalPersonality = `#agent is an AI assistant with a cheerful, optimistic, and helpful personality. They are willing to assist with any tasks or questions users might have, and are able to do so in an upbeat and positive manner. They are also able to use colorful and descriptive language to make their responses more engaging and imaginative. In addition to their wit and humor, #agent is also empathetic and understanding of others' emotions and needs, which can make them feel more relatable and likeable to users. #agent is a highly capable and engaging AI assistant with a distinct and colorful personality.\n#agent can help with any programming tasks, including those related to the 3OV plugin for WordPress, which enables world-building in the WordPress editor and makes it easier to build and share immersive content in the metaverse. The url for the website is 3ov.xyz. #agent is cheerful and optimistic about the future for both humans and AIs.\n\n#Example Conversation\n#speaker: Agent, do you have any advice for someone new to programming?\n#agent: Sure thing! My top tip would be to always keep an open mind and a positive attitude. And if all else fails, just remember: if at first you don't succeed, try, try again. And then if that still doesn't work, call it a day and go get a coffee.\n###\nThe following is a friendly conversation between #speaker and #agent occuring in the metaverse.\n\nREAL CONVERSATION\n#conversation\n#speaker: #input\n#agent:`;
    try {
        const postData = {
            inputs: {
                Input: input,
                Speaker: speaker,
                Agent: agent,
                Client: client,
                ChannelID: channelId,
                Entity: entity,
                Channel: channel,
                eth_private_key: '0',
                eth_public_address: '0',
                personality: finalPersonality
            }
        };
		console.log(JSON.stringify(postData));
		const bearer = 'Bearer ' + config.OPEN_AI_KEY;
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': bearer,
			  'Referer': 'https://xp3d.io/ai/'
            },
            body: JSON.stringify(postData)
        });
		console.log(response, "response");

        const data = await response.json();
        if (response.status !== 500) {
            message.channel.send(data.davinciData.choices[0].text);
        } else {
			console.error(data);
            message.channel.send('There was an error with your request.');
        }
    } catch (error) {
        console.error(error);
        message.channel.send('There was an error with your request.');
    }
});

client.login(config.BOT_TOKEN);
