import { Options } from "tmi.js";
export const opt: Options = {
    identity: {
        username: process.env.TWITCH_USERNAME as string,
        password: process.env.TWITCH_TOKEN as string,
    },
    channels: [process.env.TWITCH_CHANNEL as string],
};

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
