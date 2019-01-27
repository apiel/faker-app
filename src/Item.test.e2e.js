
const names = ['Mina Watsica', 'Cassandra O\'Hara'];

describe('Item', () => {
    names.forEach((name, index) => {
        describe(`Item ${name} at index ${index}`, () => {
            beforeAll(async () => {
                await page.goto(`http://localhost:3000/item/${index}`);
            });

            it(`should display ${name} text on page`, async () => {
                await expect(page).toMatch(name);
            });
        });
    });
});
