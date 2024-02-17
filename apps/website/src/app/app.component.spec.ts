import { render } from '@bp/abstractions';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

describe(AppComponent.name, () => {
  let component: AppComponent;

  beforeEach(async () => {
    const { fixture } = await render(AppComponent, {
      imports: [
        MockComponent(HeaderComponent),
        MockComponent(HeroComponent),
        MockComponent(ServicesComponent),
        MockComponent(TeamComponent),
        MockComponent(ContactComponent),
        MockComponent(FooterComponent),
      ],
      providers: [],
    });
    component = fixture.componentInstance;
  });

  it(`should create'`, () => {
    expect(component).toBeTruthy();
  });
});
