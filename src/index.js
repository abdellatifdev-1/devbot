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
    if (self) return;
    if (message == "hi") {
        client.say(process.env.TWITCH_CHANNEL, `hello ${user["display-name"]}`);
    }
});
