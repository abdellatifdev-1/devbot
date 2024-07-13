import { Client } from "tmi.js";

const client = new Client({
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_TOKEN,
    },
    channels: [process.env.TWITCH_CHANNEL],
});

client.connect();

client.on("message", (channel, user, message, self) => {
    // "Alca: Hello, World!"
    console.log(`${user["display-name"]}: ${message}`);
});
