import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@bp/components';

@Component({
  selector: 'bpw-services',
  standalone: true,
  imports: [CardComponent],
  template: `
    <bpc-card text="CAD Software">
      <img
        src="/assets/services/cad-software.jpeg"
        alt="Symbolbild für CAD Software"
        class="aspect-square object-cover" />
    </bpc-card>
    <bpc-card text="Analysen">
      <img
        src="/assets/services/analysen.jpeg"
        alt="Symbolbild für Analysen"
        class="aspect-square object-cover" />
    </bpc-card>
    <bpc-card text="Skript automation">
      <img
        src="/assets/services/skript-automation.jpeg"
        alt="Symbolbild für Skript Automation"
        class="aspect-square object-cover" />
    </bpc-card>
  `,
  styles: `
    :host {
      @apply grid lg:grid-cols-3 gap-8 place-items-center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
