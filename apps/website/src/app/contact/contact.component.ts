import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bpw-contact',
  standalone: true,
  imports: [],
  template: ` <address></address> `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
