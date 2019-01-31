const express = require('express');
const cors = require('cors');
const faker = require('faker');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  faker.seed(1);

  const data = [];
  const count = 10;
  for(let n = 0; n < count; n++) {
    data.push({
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      text: faker.lorem.paragraphs(),
      avatar: faker.internet.avatar(),
    });
  }
  res.send(data);
});

app.listen(2000);
