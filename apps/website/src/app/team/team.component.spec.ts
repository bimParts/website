import { render } from '@testing-library/angular';
import { TeamComponent } from './team.component';

describe(TeamComponent.name, () => {
  let component: TeamComponent;

  beforeEach(async () => {
    const { fixture } = await render(TeamComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
