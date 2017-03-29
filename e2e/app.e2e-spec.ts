import { AdminComponentsPage } from './app.po';

describe('admin-components App', function() {
  let page: AdminComponentsPage;

  beforeEach(() => {
    page = new AdminComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
