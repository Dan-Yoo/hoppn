import { AngularmaterialModule } from './angularmaterial.module';

describe('AngularmaterialModule', () => {
  let angularmaterialModule: AngularmaterialModule;

  beforeEach(() => {
    angularmaterialModule = new AngularmaterialModule();
  });

  it('should create an instance', () => {
    expect(angularmaterialModule).toBeTruthy();
  });
});
