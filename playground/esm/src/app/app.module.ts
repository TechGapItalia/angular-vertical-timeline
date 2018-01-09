import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { VerticalTimelineModule } from '../../lib';

@NgModule({
  imports: [ BrowserModule, VerticalTimelineModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
