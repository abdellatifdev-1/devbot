/**
 * @type {{ identity: { username: string, password: string, }, channels: string[] }}
 *
 */
export const opt = {
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_TOKEN,
    },
    channels: [process.env.TWITCH_CHANNEL],
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
