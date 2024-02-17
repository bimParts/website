import { render } from '@bp/abstractions';
import { CardComponent } from './card.component';

describe(CardComponent.name, () => {
  let component: CardComponent;

  beforeEach(async () => {
    const { fixture } = await render(CardComponent, {
      imports: [],
      providers: [],
      inputs: {
        text: '',
        link: '',
      },
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
