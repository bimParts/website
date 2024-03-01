import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ResponsivePopupComponent } from '@bp/components';
import { NavItem } from '@bp/types';

@Component({
  selector: 'bpw-header',
  standalone: true,
  imports: [ResponsivePopupComponent],
  template: `
    <bpc-responsive-popup>
      <a
        header
        href="/">
        <img
          class="h-16 lg:h-20 object-cover"
          src="assets/bimparts.svg"
          alt="Bimparts Logo" />
      </a>

      <div class="text-lg font-bold tracking-wide uppercase">
        @for(link of links(); track link.href){
        <a href="{{ link.href }}">
          {{ link.text }}
        </a>
        }
      </div>
    </bpc-responsive-popup>
  `,
  styles: `
    :host {
      @apply flex flex-row gap-4 h-20 lg:h-32 items-center justify-between px-4 w-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly links = input.required<NavItem[]>();
}
