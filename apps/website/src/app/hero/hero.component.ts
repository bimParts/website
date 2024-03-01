import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bpw-hero',
  standalone: true,
  imports: [],
  template: `
    <img
      class="object-cover absolute inset-0 w-[50%]"
      src="assets/hero/trees.png"
      alt="BimTree" />
    <article
      class="absolute w-[50%] h-full left-[50%] container flex flex-col justify-center gap-4">
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
      @apply block relative m-0 h-96 overflow-hidden;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
