import crypto from 'crypto';

const SERVER_SEED = 'adc9315397001caae58d5779ec30f5b41bdf6f24fc76b371acce6bbc9839caf5';
const SERVER_SEED_HASHED = '95872beaa9a7e9c4ed185f72e5d04d38a5876823049e8b7d931a583e2f051215';
const CLIENT_SEED = 'd53e5d3d121523dceecde642b66af9b1';

const checkServerSeedHash = (serverSeed, serverSeedHashed) => {
  const hash = crypto.createHash('sha256').update(serverSeed).digest('hex');
  return hash === serverSeedHashed;
}

const generateTicket = (serverSeed, clientSeed) => {
    const hash = crypto.createHash('sha256').update(serverSeed + '-' + clientSeed).digest('hex');
    const ticket = parseInt(hash.substring(0, 8), 16) % 1000000 / 1000000;
    return ticket;
}

console.log('Server seed hash check:', checkServerSeedHash(SERVER_SEED, SERVER_SEED_HASHED));
console.log('Ticket:', generateTicket(SERVER_SEED, CLIENT_SEED));