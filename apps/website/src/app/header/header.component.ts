import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavItem } from '@bp/types';

@Component({
  selector: 'bpw-header',
  standalone: true,
  imports: [],
  template: `
    <a href="/">
      <img
        src="/assets/bimparts.svg"
        alt="Bimparts Logo" />
    </a>

    <div class="flex-1"></div>

    @for(link of links(); track link.href){
    <a
      class="text-lg font-bold tracking-wide uppercase "
      href="{{ link.href }}">
      {{ link.text }}
    </a>
    }
  `,
  styles: `
    :host {
      @apply flex flex-row gap-4;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly links = input.required<NavItem[]>();
}
