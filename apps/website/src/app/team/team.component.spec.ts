import { Component, Input, input } from '@angular/core';
import { render } from '@bp/abstractions';
import { TeamComponent } from './team.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'bpc-profile',
  standalone: true,
  template: '',
})
class MockProfileComponent {
  @Input() imgSrc?: string;
  @Input() name?: string;
  @Input() email?: string;
  @Input() title?: string | undefined;
}

describe(TeamComponent.name, () => {
  let component: TeamComponent;

  beforeEach(async () => {
    const { fixture } = await render(TeamComponent, {
      imports: [MockProfileComponent],
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
