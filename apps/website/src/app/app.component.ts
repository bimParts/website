import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

@Component({
  standalone: true,
  selector: 'bpw-root',
  template: `
    <header>
      <bpw-header />
    </header>
    <section>
      <bpw-hero />
    </section>
    <section>
      <bpw-services />
    </section>
    <section>
      <bpw-team />
    </section>
    <section>
      <bpw-contact />
    </section>
    <footer>
      <bpw-footer />
    </footer>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
