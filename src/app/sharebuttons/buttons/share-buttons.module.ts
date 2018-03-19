import { NgModule, InjectionToken } from '@angular/core';

import { ShareButtons, ShareButtonsConfig, CONFIG } from '../core';
import { ShareButtonModule } from '../button';

import { ShareButtonsComponent } from './share-buttons.component';

export function ShareButtonsFactory(config: ShareButtonsConfig) {
  return new ShareButtons(config);
}

@NgModule({
  declarations: [
    ShareButtonsComponent
  ],
  imports: [
    ShareButtonModule
  ],
  exports: [
    ShareButtonModule,
    ShareButtonsComponent
  ]
})
export class ShareButtonsModule {
  static forRoot(config?: ShareButtonsConfig) {
    return {
      ngModule: ShareButtonsModule,
      providers: [
        {provide: CONFIG, useValue: config},
        {
          provide: ShareButtons,
          useFactory: ShareButtonsFactory,
          deps: [CONFIG]
        }
      ]
    };
  }
}
