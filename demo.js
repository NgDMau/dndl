const dns = require('dns')

dns.lookup('asrvn.duckdns.org', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
});

dns.resolve4('asrvn.duckdns.org', (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
    });
});