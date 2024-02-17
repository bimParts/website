import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bpw-contact',
  standalone: true,
  imports: [],
  template: ``,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
