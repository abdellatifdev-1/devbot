import { greetings } from "../constants.js";

export function sendGreeting(client, channel, message) {
    if (greetings.includes(message.toLowerCase())) {
        client.say(channel, `hello ${user["display-name"]}`);
    }
}
