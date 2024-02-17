import { render } from '@testing-library/angular';
import { ProfileComponent } from './profile.component';

describe(ProfileComponent.name, () => {
  let component: ProfileComponent;

  beforeEach(async () => {
    const { fixture } = await render(ProfileComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
