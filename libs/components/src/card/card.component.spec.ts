import { render } from '@bp/abstractions';
import { CardComponent } from './card.component';
import { input } from '@angular/core';

describe(CardComponent.name, () => {
  let component: CardComponent;

  beforeEach(async () => {
    const { fixture } = await render(CardComponent, {
      imports: [],
      providers: [],
      properties: {
        text: input(''),
        link: input('' as string | undefined),
      },
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
