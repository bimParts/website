import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@bp/components';

@Component({
  selector: 'bpw-services',
  standalone: true,
  imports: [CardComponent],
  template: `
    <bpc-card text="CAD Software">
      <img
        src="/assets/services/cad-software.jpg"
        alt="Symbolbild für CAD Software"
        class="aspect-square" />
    </bpc-card>
    <bpc-card text="Analysen">
      <img
        src="/assets/services/analysen.jpg"
        alt="Symbolbild für Analysen"
        class="aspect-square" />
    </bpc-card>
    <bpc-card text="Skript automation">
      <img
        src="/assets/services/skript-automation.jpg"
        alt="Symbolbild für Skript Automation"
        class="aspect-square" />
    </bpc-card>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
