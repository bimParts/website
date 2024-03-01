import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bpc-profile',
  standalone: true,
  imports: [],
  template: `
    <a
      [href]="'mailto:' + email()"
      [title]="'Email-Adresse von ' + name()">
      <figure class="flex flex-col gap-2 items-center">
        <img
          class="aspect-square rounded-full object-cover w-3/4 sm:w-4/6 md:w-1/2 lg:w-56 2xl:w-64 mx-auto"
          [src]="imgSrc()"
          [alt]="name()" />
        <figcaption class="text-center">
          <h3 class="font-black text-lg">{{ name() }}</h3>
          @if(title()){
          <p class="text-bold text-gray-400">{{ title() }}</p>
          }
        </figcaption>
      </figure>
    </a>
  `,
  styles: `
    :host {
      @apply block p-2;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  public readonly imgSrc = input.required<string>();
  public readonly name = input.required<string>();
  public readonly email = input.required<string>();
  public readonly title = input<string>();
}
