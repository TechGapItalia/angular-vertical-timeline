import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalTimelineComponent } from './vertical-timeline.component';
import {VerticalTimelineCardComponent} from './vertical-timeline-card.component';

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
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: VerticalTimelineModule,
    };
  }
}
