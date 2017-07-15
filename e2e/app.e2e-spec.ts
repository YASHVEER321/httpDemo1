import { HttpsDemoPage } from './app.po';

describe('https-demo App', () => {
  let page: HttpsDemoPage;

  beforeEach(() => {
    page = new HttpsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
