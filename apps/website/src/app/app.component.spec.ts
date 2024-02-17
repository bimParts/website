import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  let component: AppComponent;

  beforeEach(async () => {
    const { fixture } = await render(AppComponent, {
      imports: [RouterTestingModule],
    });
    component = fixture.componentInstance;
  });

  it(`should create'`, () => {
    expect(component).toBeTruthy();
  });
});
