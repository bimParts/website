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
    <header class="sticky top-0 z-10 bg-white">
      <div class="container">
        <bpw-header [links]="navItems" />
      </div>
    </header>
    <main>
      <bpw-hero />

      <section
        class="container"
        id="services">
        <h2 class="text-5xl font-extrabold">Services</h2>
        <bpw-services />
      </section>
      <section
        class="container"
        id="team">
        <h2 class="text-5xl font-extrabold">Team</h2>
        <bpw-team />
      </section>
      <section
        class="container"
        id="contact">
        <h2 class="text-5xl font-extrabold">Kontakt</h2>
        <bpw-contact />
      </section>
    </main>
    <footer class="container">
      <bpw-footer />
    </footer>
  `,
  styles: `
    :host {
      @apply block relative;
    }
    main section {
      @apply w-full py-16 flex flex-col items-center justify-center gap-12;
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
