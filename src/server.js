const polka = require('polka');

module.exports = function() {
  polka()
  .get('/', (req, res) => {
    res.end(`Hello World`);
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });
}