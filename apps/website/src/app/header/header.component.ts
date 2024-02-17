import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bpw-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      src="/assets/bimparts.svg"
      alt="Bimparts Logo" />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
