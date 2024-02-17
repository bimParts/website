import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileComponent } from '@bp/components';

@Component({
  selector: 'bpw-team',
  standalone: true,
  imports: [ProfileComponent],
  template: `
    <bpc-profile
      imgSrc="/assets/team/mathias.jpg"
      name="Mathias Schmid"
      title="Geschäftsleitung, Co-Founder"
      email="mathias.schmid@bimparts.ch" />

    <bpc-profile
      imgSrc="/assets/team/andreas.jpg"
      name="Andreas Lukas"
      title="Landschaftsarchitekt, Co-Founder"
      email="andreas.lukas@bimparts.ch" />

    <bpc-profile
      imgSrc="/assets/team/mathieu.jpg"
      name="Mathieu Lichtsteiner"
      title="Softwareingenieur, Co-Founder"
      email="mathieu.lichtsteiner@bimparts.ch" />
  `,
  styles: `
    :host {
      @apply grid lg:grid-cols-3 gap-4;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {}
