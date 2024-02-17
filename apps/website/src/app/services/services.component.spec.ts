import { render } from '@testing-library/angular';
import { ServicesComponent } from './services.component';
import { CardComponent } from '@bp/components';
import { MockComponent } from 'ng-mocks';

describe(ServicesComponent.name, () => {
  let component: ServicesComponent;

  beforeEach(async () => {
    const { fixture } = await render(ServicesComponent, {
      componentImports: [MockComponent(CardComponent)],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
