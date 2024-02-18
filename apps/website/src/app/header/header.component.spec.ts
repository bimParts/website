import { render } from '@bp/abstractions';
import { HeaderComponent } from './header.component';
import { input } from '@angular/core';
import { NavItem } from '@bp/types';

describe(HeaderComponent.name, () => {
  let component: HeaderComponent;

  beforeEach(async () => {
    const { fixture } = await render(HeaderComponent, {
      imports: [],
      providers: [],
      properties: {
        links: input([] as NavItem[]),
      },
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
