import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavItem } from '@bp/types';

@Component({
  selector: 'bpw-header',
  standalone: true,
  imports: [],
  template: `
    <a href="/">
      <img
        class="h-20 object-cover"
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
      @apply flex flex-row gap-4 h-32 items-center justify-between px-4 w-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly links = input.required<NavItem[]>();
}
