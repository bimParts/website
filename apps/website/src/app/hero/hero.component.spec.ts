import { render } from '@bp/abstractions';
import { HeroComponent } from './hero.component';

describe(HeroComponent.name, () => {
  let component: HeroComponent;

  beforeEach(async () => {
    const { fixture } = await render(HeroComponent, {
      imports: [],
      providers: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
