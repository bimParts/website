import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'bpc-responsive-popup',
  standalone: true,
  imports: [],
  template: `
    <div class="-mr-2 -my-2 md:hidden">
      <button
        type="button"
        (keyup.enter)="toggleMobileMenu()"
        (click)="toggleMobileMenu()"
        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div
      [@openClose]="openCloseTrigger"
      popup
      class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="flex items-center justify-between">
          <button
            (click)="toggleMobileMenu()"
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div
          content
          class="py-6 px-5">
          <ng-content select="[header]" />

          <div class="flex-1"></div>

          <ng-content />
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1, 1)',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scale(0.95, 0.95)',
        }),
      ),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsivePopupComponent {
  @ViewChild('[popup] [content]', { static: false, read: HTMLElement })
  private readonly popup?: HTMLElement;

  private _mobileMenuOpen = false;

  public iconPosition: 'left' | 'right' = 'right';

  protected get mobileMenuOpen() {
    return this._mobileMenuOpen;
  }
  protected get openCloseTrigger() {
    return this.mobileMenuOpen ? 'open' : 'closed';
  }

  protected toggleMobileMenu() {
    this._mobileMenuOpen = !this._mobileMenuOpen;
    // focus the mobileMenuOpen for accessibility
    if (this._mobileMenuOpen && this.popup) {
      this.popup.focus();
    }
  }
}
