import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@bp/components';

@Component({
  selector: 'bpw-services',
  standalone: true,
  imports: [CardComponent],
  template: `
    <bpc-card title="CAD Software">
      <img
        image
        src="assets/services/cad-software.jpeg"
        alt="Symbolbild für CAD Software"
        class="image aspect-square object-cover" />
      <p class="font-medium tracking-wider">
        Entdecken Sie unsere massgeschneiderte Add-in Software für
        CAD-Anwendungen, die von der Konzeption bis zur Projektleitung alles
        umfasst. Wir unterstützen Kunden bei der Entwicklung von
        CAD-Softwarelösungen, die spezifisch auf ihre Bedürfnisse zugeschnitten
        sind. Lassen Sie uns gemeinsam Ihre Designprozesse optimieren.
      </p>
    </bpc-card>
    <bpc-card title="Analysen">
      <img
        image
        src="assets/services/analysen.jpeg"
        alt="Symbolbild für Analysen"
        class="image aspect-square object-cover" />
      <p class="font-medium tracking-wider">
        Unsere Expertise in Wärmeanalysen ermöglicht eine detaillierte
        Untersuchung der Temperaturveränderungen in Landschaften über die Zeit.
        Durch die Analyse des Pflanzenwachstums und der Tageszeit bieten wir
        Einblicke in die wahrgenommene Temperatur und deren Einfluss auf die
        Lebensdauer von Landschaften. Profitieren Sie von unseren Erkenntnissen
        für eine nachhaltige Planung.
      </p>
    </bpc-card>
    <bpc-card title="Skript automation">
      <img
        image
        src="assets/services/skript-automation.jpeg"
        alt="Symbolbild für Skript Automation"
        class="image aspect-square object-cover" />
      <p class="font-medium tracking-wider">
        Steigern Sie Ihre Effizienz mit unseren Automatisierungsskripts für
        CAD-Software. Ob für spezifische Projekte oder komplette Workflows,
        unsere Skriptlösungen sind darauf ausgerichtet, Ihre Arbeitsprozesse zu
        vereinfachen und zu beschleunigen. Erleben Sie, wie unsere
        Automatisierungslösungen Ihre Produktivität auf das nächste Level heben.
      </p>
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
