import { render } from '@bp/abstractions';
import { TeamComponent } from './team.component';
import { ProfileComponent } from '@bp/components';

describe(TeamComponent.name, () => {
  let component: TeamComponent;

  beforeEach(async () => {
    const { fixture } = await render(TeamComponent, {
      imports: [ProfileComponent],
      providers: [],
      inputs: {},
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
