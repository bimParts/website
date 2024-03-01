import { render } from '@bp/abstractions';
import { ResponsivePopupComponent } from './responsive-popup.component';

describe(ResponsivePopupComponent.name, () => {
  let component: ResponsivePopupComponent;

  beforeEach(async () => {
    const { fixture } = await render(ResponsivePopupComponent, {
      imports: [],
      providers: [],
      properties: {},
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
