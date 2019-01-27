// import fetch from 'node-fetch';
const fetch = require('node-fetch');

let data = [];

describe('Item', () => {
    beforeAll(async () => {
        const response = await fetch('http://localhost:2000/');
        data = await response.json();
    });

    // it('hello', () => {});

    // data.forEach((item, index) => {
    for(let index = 0; index < 100; index++) {
        testIndex(index);
    }
    // });
});

function testIndex(index) {
    describe(`Item at index ${index}`, () => {
        beforeAll(async () => {
            await page.goto(`http://localhost:3000/item/${index}`);
        });

        it('should display name text on page', async () => {
            const item = data[index];
            await expect(page).toMatch(item.name);
        });
    });
}
