const bcrypt = require('bcrypt');

const iterations = 15;
console.log(iterations);

bcrypt.hash('mypassword', iterations).then((hash) => {
  console.log(hash);
  console.log('finish');
});
