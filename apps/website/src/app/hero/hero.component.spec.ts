import { render } from '@testing-library/angular';
import { HeroComponent } from './hero.component';

describe(HeroComponent.name, () => {
  let component: HeroComponent;

  beforeEach(async () => {
    const { fixture } = await render(HeroComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
