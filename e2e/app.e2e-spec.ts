import { AuxiliaryPage } from './app.po';

describe('auxiliary App', function() {
  let page: AuxiliaryPage;

  beforeEach(() => {
    page = new AuxiliaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
