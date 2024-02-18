import { render } from '@bp/abstractions';
import { FooterComponent } from './footer.component';

describe(FooterComponent.name, () => {
  let component: FooterComponent;

  beforeEach(async () => {
    const { fixture } = await render(FooterComponent, {
      imports: [],
      providers: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
