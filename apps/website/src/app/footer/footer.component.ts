import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bpw-footer',
  standalone: true,
  imports: [],
  template: `
    <a href="">logo</a>
    <a href="">datenschutzerklärung</a>
    <a href="">cookies</a>
    <a href="">copyright</a>
    <a href="">anfrage starten</a>
    <a href="">social-media</a>
    <a href="">newsletter-anmeldung</a>
    <a href="">back-to-top-link</a>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
