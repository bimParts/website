import { Component, Type } from '@angular/core';
import {
  RenderResult,
  render as libraryRender,
} from '@testing-library/angular';

type RenderOptions<ComponentType> = {
  imports: Component['imports'];
  providers: Component['providers'];
  inputs?: Partial<ComponentType> | Record<keyof ComponentType, unknown>;
};

export const render = <ComponentType>(
  component: Type<ComponentType>,
  renderOptions?: RenderOptions<ComponentType>,
): Promise<RenderResult<ComponentType, ComponentType>> =>
  libraryRender(component, {
    imports: undefined,
    componentImports: undefined,
    providers: undefined,
    componentProviders: undefined,
    componentInputs: renderOptions?.inputs,
    configureTestBed: (testbed) => {
      testbed.overrideComponent(component, {
        set: {
          imports: renderOptions?.imports,
          providers: renderOptions?.providers,
        },
      });
    },
  });
