import { render } from '@testing-library/angular';
import { TeamComponent } from './team.component';
import { ProfileComponent } from '@bp/components';

describe(TeamComponent.name, () => {
  let component: TeamComponent;

  beforeEach(async () => {
    const { fixture } = await render(TeamComponent, {
      imports: [ProfileComponent],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
