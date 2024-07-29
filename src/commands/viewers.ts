import { Client } from "tmi.js";
import { greetings } from "../constants";

export function sendGreeting(
    client: Client,
    channel: string,
    message: string,
    displayName: string,
) {
    if (greetings.includes(message.toLowerCase())) {
        client.say(channel, `hello ${displayName}`);
    }
}
