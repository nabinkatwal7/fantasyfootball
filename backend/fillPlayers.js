const http = require('http');
const apiKey = "f34df6c6d6d844ab938f022876228517";

const options = {
  host: 'api.football-data.org',
  path: 'v4/teams',
  headers: { 'X-Auth-Token': apiKey }
};

const req = http.get(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const teams = JSON.parse(data);
    teams.forEach(team => {
        http.get(`https://api.football-data.org/v2/teams/${team.id}/players`, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                const players = JSON.parse(data);
                // You can now use the `players` variable to access all the player data, such as name, position, etc.
                // You can also store the player data in a database or use it to create a view component (as mentioned in your previous question)
                console.log(players)
            });
        });
    });
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
