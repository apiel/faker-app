// import { loadUrl } from 'render-and-test';
// const rnt = require('render-and-test');

// import fetch from 'node-fetch';
const fetch = require('node-fetch');

jest.setTimeout(600000);

describe('Item test', () => {
    let page;
    beforeAll(async () => {
        if (process.env.RNT_START) {
            const response = await fetch('http://localhost:2000/');
            const json = await response.json();
            const dataUrls = json.map((data, index) => ({
                file: __filename,
                url: `http://localhost:3000/item/${index}`,
                data,
            }));
            dataUrls.forEach((dataUrl) => {
                process.stdout.write(`[rnt] ${JSON.stringify({ dataUrl })}\n`);
            });
            throw new Error('Force exit');
        } else {
            page = await global.__BROWSER__.newPage();
            await page.goto('https://google.com');
        }
    });
    it('should do something in item', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('google');
    });
});

// // import fetch from 'node-fetch';
// const fetch = require('node-fetch');

// let data = [];

// const loadData = async () => {
//     const response = await fetch('http://localhost:2000/');
//     data = await response.json();
// }
// // create a script looping through e2e files
// // find load data function
// // then call jest using env variable to pass params

// describe('Item', () => {
//     beforeAll(async () => {
//         await loadData();
//     });

//     // it('hello', () => {});

//     // data.forEach((item, index) => {
//     for(let index = 0; index < 100; index++) {
//         testIndex(index);
//     }
//     // });
// });

// function testIndex(index) {
//     describe(`Item at index ${index}`, () => {
//         beforeAll(async () => {
//             await page.goto(`http://localhost:3000/item/${index}`);
//         });

//         it('should display name text on page', async () => {
//             const item = data[index];
//             await expect(page).toMatch(item.name);
//         });
//     });
// }
