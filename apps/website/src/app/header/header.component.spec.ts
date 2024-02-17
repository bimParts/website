import { render } from '@bp/abstractions';
import { HeaderComponent } from './header.component';

describe(HeaderComponent.name, () => {
  let component: HeaderComponent;

  beforeEach(async () => {
    const { fixture } = await render(HeaderComponent, {
      imports: [],
      providers: [],
      inputs: {
        links: [],
      },
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
