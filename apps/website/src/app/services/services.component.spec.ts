import { render } from '@testing-library/angular';
import { ServicesComponent } from './services.component';

describe(ServicesComponent.name, () => {
  let component: ServicesComponent;

  beforeEach(async () => {
    const { fixture } = await render(ServicesComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
