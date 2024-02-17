import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bpc-card',
  standalone: true,
  imports: [],
  template: `
    @if(link()){
    <a [href]="link()">
      <article class="rounded-sm p-4 shadow-sm flex flex-col items-center">
        <ng-content />
        <h3>{{ text() }}</h3>
      </article>
    </a>
    }@else {
    <article class="rounded-sm p-4 shadow-sm flex flex-col items-center">
      <ng-content />
      <h3>{{ text() }}</h3>
    </article>

    }
  `,
  styles: `
    :host {
      @apply m-2;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public readonly text = input.required<string>();
  public readonly link = input<string>();
}
