import { ChatUserstate, Client } from "tmi.js";
import { opt } from "./constants";
import { commands } from "./commands/viewers";

const client = new Client(opt);

client.connect();

client.on("join", () => {
    console.log("started successfully");
});

client.on(
    "message",
    (channel: string, user: ChatUserstate, message: string, self: boolean) => {
        if (self || user.username === opt.identity!.username) {
            return;
        } else {
            commands(client, channel, user, message);
        }
    },
);
