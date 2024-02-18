import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bpw-hero',
  standalone: true,
  imports: [],
  template: `
    <img
      class="object-cover absolute inset-0 w-[50%]"
      src="/assets/hero/trees.png"
      alt="BimTree" />
    <article
      class="absolute w-[50%] h-full left-[50%] container flex flex-col justify-center">
      <h1 class="text-4xl font-black ">BimTree</h1>
      <p class="font-bold">Wachstumskurve des Lebenszyklus</p>
      <p class="font-bold">High-End-Visualisierung von 3D-Modellen< /p></p>
      <p class="font-bold">
        Erstellung von 3D-Modellen für Landschaftsarchitekten
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
