import { render } from '@bp/abstractions';
import { ServicesComponent } from './services.component';
import { CardComponent } from '@bp/components';
import { MockComponent } from 'ng-mocks';

describe(ServicesComponent.name, () => {
  let component: ServicesComponent;

  beforeEach(async () => {
    const { fixture } = await render(ServicesComponent, {
      imports: [MockComponent(CardComponent)],
      providers: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
