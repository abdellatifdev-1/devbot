import { ChatUserstate, Client } from "tmi.js";

export const greetings = [
    "hello",
    "hi",
    "hey",
    "greetings",
    "salutations",
    "howdy",
    "good day",
    "good morning",
    "good afternoon",
    "good evening",
    "what's up",
    "how's it going",
    "hey there",
    "yo",
];

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
