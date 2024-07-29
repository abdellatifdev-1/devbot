import { greetings } from "../constants.js";

/**
 * @returns {void}
 * @param {Client} client
 * @param {string} channel
 * @param {string} message
 *
 */
export function sendGreeting(client, channel, message) {
    if (greetings.includes(message.toLowerCase())) {
        client.say(channel, `hello ${user["display-name"]}`);
    }
}
