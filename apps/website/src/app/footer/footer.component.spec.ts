import { render } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe(FooterComponent.name, () => {
  let component: FooterComponent;

  beforeEach(async () => {
    const { fixture } = await render(FooterComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
