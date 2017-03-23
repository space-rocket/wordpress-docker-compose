import { WpAngularPage } from './app.po';

describe('wp-angular App', function() {
  let page: WpAngularPage;

  beforeEach(() => {
    page = new WpAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
