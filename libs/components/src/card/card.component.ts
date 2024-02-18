import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bpc-card',
  standalone: true,
  imports: [],
  template: `
    @if(link()){
    <a [href]="link()">
      <article class="rounded-sm shadow-sm flex flex-col items-center">
        <ng-content />
        <h3 class="text-2xl font-bold">{{ text() }}</h3>
      </article>
    </a>
    }@else {
    <article class="rounded-sm shadow-sm flex flex-col items-center">
      <ng-content />
      <h3 class="text-2xl font-bold">{{ text() }}</h3>
    </article>

    }
  `,
  styles: `
    :host {
      @apply block w-full h-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public readonly text = input.required<string>();
  public readonly link = input<string>();
}
