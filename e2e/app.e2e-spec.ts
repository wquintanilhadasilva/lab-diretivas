import { LabDiretivasPage } from './app.po';

describe('lab-diretivas App', () => {
  let page: LabDiretivasPage;

  beforeEach(() => {
    page = new LabDiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
