import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    <header class="container sticky">
      <bpw-header [links]="navItems" />
    </header>
    <main>
      <section class="container">
        <h2 class="text-2xl">bimTree</h2>
        <bpw-hero />
      </section>
      <section
        class="container"
        id="services">
        <h2 class="text-2xl">Services</h2>
        <bpw-services />
      </section>
      <section
        class="container"
        id="team">
        <h2 class="text-2xl">Team</h2>
        <bpw-team />
      </section>
      <section
        class="container"
        id="contact">
        <h2 class="text-2xl">Kontakt</h2>
        <bpw-contact />
      </section>
    </main>
    <footer class="container">
      <bpw-footer />
    </footer>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  protected readonly navItems = [
    { href: '#services', text: 'Services' },
    { href: '#team', text: 'Team' },
    { href: '#contact', text: 'Kontakt' },
  ];
}
