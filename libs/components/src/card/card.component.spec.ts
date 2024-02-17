import { render } from '@testing-library/angular';
import { CardComponent } from './card.component';

describe(CardComponent.name, () => {
  let component: CardComponent;

  beforeEach(async () => {
    const { fixture } = await render(CardComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
