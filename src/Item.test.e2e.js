// import { loadUrl } from 'render-and-test';
const rnt = require('render-and-test');

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
    }, ({ pathUrl, data }) => {
        beforeAll(async () => {
            console.log('beforeAll child');
        });
        it('should fail', () => {
            expect(1).toBe(2);
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
