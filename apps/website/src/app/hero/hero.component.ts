import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bpw-hero',
  standalone: true,
  imports: [],
  template: `
    <div class="left">
      <img
        src="assets/hero/trees.png"
        alt="BimTree" />
    </div>
    <article class="right">
      <h1 class="text-4xl font-black">BimTree</h1>
      <p class="font-bold">
        Entdecken Sie die bimTree Add-in-Software, die die Erstellung von
        3D-Baummodellen automatisiert. Ob in 2D oder 3D Planungen, bimTree
        wertet Projekte mit hochwertigen Baumdarstellungen nach BIM-Standards
        auf. Jedes Modell ist detailliert in Blattwerk, Stamm und Wurzelraum
        gegliedert und variiert je nach Gattung. Zudem kann bimTree das Wachstum
        der Bäume simulieren, was eine genaue Planung zukünftiger Landschaften
        erlaubt. Anhand von Filtern kann der geeignete Baum aus einem Katalog
        von über 100 Arten gefunden werden, um jeder Umgebung gerecht zu werden.
      </p>
    </article>
  `,
  styles: `
    :host {
      @apply block m-0 grid lg:grid-cols-2 gap-4 place-items-center;
    }

    .left {
      @apply overflow-hidden w-full lg:h-128 2xl:h-144;

      img {
        @apply object-cover w-full h-full;
      }
    }
    .right {
      @apply h-full container flex flex-col justify-center gap-4 text-center lg:text-left;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
