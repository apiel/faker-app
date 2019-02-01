// import { loadUrl } from 'render-and-test';
const rnt = require('render-and-test');
const puppeteer = require('puppeteer');

// import fetch from 'node-fetch';
const fetch = require('node-fetch');

jest.setTimeout(300000);

describe('Item test', () => {
    rnt.run(() => {
        beforeAll(async () => {
            const response = await fetch('http://localhost:2000/');
            const json = await response.json();
            const dataUrls = json.map((data, index) => ({
                pathUrl: `/item/${index}`,
                data,
            }));
            await rnt.loadUrls(dataUrls);
        });
    }, ({ baseUrl, pathUrl, data }) => {
        let page;
        let browser;
        beforeAll(async () => {
            browser = await puppeteer.launch();
            page = await browser.newPage();
            // await page.goto('https://google.com');
            await page.goto(`${baseUrl}${pathUrl}`)
        });
        afterAll(async () => {
            await browser.close();
        })
        it('should success', async () => {
            // expect(1).toBe(2);
            // await expect(page).toMatch(data.name);
            const text = await page.evaluate(() => document.body.textContent);
            // expect(text).toContain('google');
            expect(text).toContain(data.name);
        });
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
