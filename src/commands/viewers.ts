import { ChatUserstate, Client } from "tmi.js";
import { greetings } from "../constants";

function sendGreeting(
    client: Client,
    channel: string,
    message: string,
    displayName: string,
) {
    if (greetings.includes(message.toLowerCase())) {
        client.say(channel, `hello ${displayName}`);
    }
}

export function commands(
    client: Client,
    channel: string,
    user: ChatUserstate,
    message: string,
) {
    sendGreeting(client, channel, message, user["display-name"] as string);
}
