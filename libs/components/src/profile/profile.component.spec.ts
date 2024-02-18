import { input } from '@angular/core';
import { render } from '@bp/abstractions';
import { ProfileComponent } from './profile.component';

describe(ProfileComponent.name, () => {
  let component: ProfileComponent;

  beforeEach(async () => {
    const { fixture } = await render(ProfileComponent, {
      imports: [],
      providers: [],
      properties: {
        imgSrc: input(''),
        name: input(''),
        email: input(''),
        title: input('' as string | undefined),
      },
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
