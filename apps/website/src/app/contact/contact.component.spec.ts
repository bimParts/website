import { render } from '@testing-library/angular';
import { ContactComponent } from './contact.component';

describe(ContactComponent.name, () => {
  let component: ContactComponent;

  beforeEach(async () => {
    const { fixture } = await render(ContactComponent, {
      imports: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
