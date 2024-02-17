import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'bpw-root',
  template: `
    <bpw-header />
    <bpw-hero />
    <bpw-services />
    <bpw-team />
    <bpw-contact />
    <bpw-footer />
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
