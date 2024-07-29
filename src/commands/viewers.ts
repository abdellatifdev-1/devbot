import { ChatUserstate, Client } from "tmi.js";
import { greetings } from "../constants";

export function sendGreeting(
    client: Client,
    channel: string,
    message: string,
    user: ChatUserstate,
) {
    if (greetings.includes(message.toLowerCase())) {
        client.say(channel, `hello ${user["display-name"]}`);
    }
}
