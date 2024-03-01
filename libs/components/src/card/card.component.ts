import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bpc-card',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    @if(link()){
    <a [href]="link()">
      <ng-container [ngTemplateOutlet]="content" />
    </a>
    }@else {
    <ng-container [ngTemplateOutlet]="content" />
    }

    <ng-template #content>
      <article
        class="flex flex-col items-center gap-2 rounded-sm hover:shadow-2xl shadow-slate-200">
        <ng-content select="[image]" />
        <h3 class="text-2xl font-bold">{{ title() }}</h3>
        <div class="p-2 text-center">
          <ng-content />
        </div>
      </article>
    </ng-template>
  `,
  styles: `
    :host {
      @apply block w-full h-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public readonly title = input.required<string>();
  public readonly link = input<string>();
}
