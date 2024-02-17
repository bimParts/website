import { render } from '@bp/abstractions';
import { ContactComponent } from './contact.component';

describe(ContactComponent.name, () => {
  let component: ContactComponent;

  beforeEach(async () => {
    const { fixture } = await render(ContactComponent, {
      imports: [],
      providers: [],
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
