import nightmare from 'nightmare';
jest.setTimeout(10000);

describe('When visit the homepage', () => {
  it('welcomes the user', async () => {
    let page = nightmare().goto('http://localhost:3001');
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Nature');
  });

  it('increase like count', async () => {
    let page = nightmare().goto('http://localhost:3001/posts/1');
    let oldCount = await page.evaluate(() => (document.querySelector('.likeCount').innerText)).end();

    page.click('.addLike');

    page.evaluate(() => (document.querySelector('.likeCount').innerText))
      .then((newCount) => {
        expect(newCount).toEqual(oldCount + 1);
      });
  });
});
