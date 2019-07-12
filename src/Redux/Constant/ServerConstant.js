import btoa from 'btoa';

const WEB_CLIENT_ID = 'xvyeBym51rN9Njd0';
const WEB_CLIENT_SECRET = 'AOdyo5FfB7Mvia56n6RtCspPhgqkIIjB4dR4ytgqjIkUGDUqqrqSpwL4n8x6wUzU';

export const BASE_URL = 'https://dev2.joyaethercloud.com/save-the-children-server';
// Non-secure: http://ec2-54-169-93-233.ap-southeast-1.compute.amazonaws.com/fablead-server
// Secure: https://api.fablead.joyaethercloud.com/fablead-server

export const WEB_CLIENT_CREDENTIAL_TOKEN = btoa(`${WEB_CLIENT_ID}:${WEB_CLIENT_SECRET}`);

export const AUDIENCE = 'save-the-children.joyaether.com';
