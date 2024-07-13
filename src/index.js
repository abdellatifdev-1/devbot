import { Client } from "tmi.js";

const opt = {
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_TOKEN,
    },
    channels: [process.env.TWITCH_CHANNEL],
};

const client = new Client(opt);

client.connect();

client.on("message", (channel, user, message, self) => {
    if (self || user.username === opt.identity.username) return;
    if (message == "hi") {
        client.say(opt.channels[0], `hello ${user["display-name"]}`);
    }
});
