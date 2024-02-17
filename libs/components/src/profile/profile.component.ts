import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bpc-profile',
  standalone: true,
  imports: [],
  template: `
    <a
      [href]="'mailto:' + email()"
      [title]="'Email-Adresse von ' + name()">
      <figure class="flex flex-col items-center max-w-24">
        <img
          class="aspect-square rounded-full w-full object-cover"
          [src]="imgSrc()"
          [alt]="name()" />
        <figcaption>
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
      @apply block;
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
