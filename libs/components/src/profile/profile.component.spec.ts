import { render } from '@bp/abstractions';
import { ProfileComponent } from './profile.component';

describe(ProfileComponent.name, () => {
  let component: ProfileComponent;

  beforeEach(async () => {
    const { fixture } = await render(ProfileComponent, {
      imports: [],
      providers: [],
      inputs: {
        imgSrc: '',
        name: '',
        email: '',
        title: '',
      },
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
