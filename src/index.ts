import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalTimelineComponent } from './vertical-timeline.component'
import {VerticalTimelineCardComponent} from './vertical-timeline-card.component'
export * from './vertical-timeline.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VerticalTimelineComponent,
    VerticalTimelineCardComponent
  ],
  exports: [
    VerticalTimelineComponent,
    VerticalTimelineCardComponent
  ]
})
export class VerticalTimelineModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VerticalTimelineModule,
    };
  }
}
