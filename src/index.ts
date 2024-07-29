import { Client } from "tmi.js";
import { opt } from "./constants";
import { sendGreeting } from "./commands/viewers";

const client = new Client(opt);

client.connect();

client.on("join", () => {
    console.log("starting the bot..");
});

client.on("message", (channel, user, message, self) => {
    if (self || user.username === opt.identity!.username) {
    } else {
        sendGreeting(client, channel, message);
    }
});
