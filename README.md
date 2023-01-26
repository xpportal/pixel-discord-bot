# Pixel Bot (NodeJS)

## Pre-requisites

- [Node 12 or newer](https://nodejs.org/en/) (LTS recommended)
- [VS Code](https://code.visualstudio.com/download) (or similar)

```npm install
cp config.mock.json config.json # to setup the your private bot token
```

Then update the `BOT_TOKEN` and `OPEN_AI_KEY` with your real one in the `config.js` file.

```json
{
  "BOT_TOKEN": "YOUR_BOT_TOKEN_HERE",
  "OPEN_AI_KEY": "YOUR_API_KEY"
}
```

## Run the bot

```sh
node index.js
```

> Now you can see your bot online on your Discord server

---

#### Discord JS

* GitHub: https://github.com/discordjs/discord.js
* Docs: https://discord.js.org/#/docs/main/stable/general/welcome
