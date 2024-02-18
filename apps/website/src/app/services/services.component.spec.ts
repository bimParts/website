import { Component, Input } from '@angular/core';
import { render } from '@bp/abstractions';
import { ServicesComponent } from './services.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'bpc-card',
  standalone: true,
  template: '',
})
class MockCardComponent {
  @Input() text?: string;
  @Input() link?: string;
}

describe(ServicesComponent.name, () => {
  let component: ServicesComponent;

  beforeEach(async () => {
    const { fixture } = await render(ServicesComponent, {
      imports: [MockCardComponent],
      providers: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
