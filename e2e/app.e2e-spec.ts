import { CVAppPage } from './app.po';

describe('cvapp App', function() {
  let page: CVAppPage;

  beforeEach(() => {
    page = new CVAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
