const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const inTwo = fs.readFileSync(`${__dirname}/../client/client2.html`);
const inTres = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getInTwo = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(inTwo);
  response.end();
};

const getInTres = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(inTres);
  response.end();
};

module.exports = {
  getIndex,
  getInTwo,
  getInTres,
};
