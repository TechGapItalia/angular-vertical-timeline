/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VerticalTimelineModule } from 'angular-vertical-timeline';

@Component({
  selector: 'app',
  template: `<vertical-timeline>
  
  <vertical-timeline-card>
   <h1>Today</h1>
  </vertical-timeline-card>

  <vertical-timeline-card>
    <h1>Tomorrow</h1>
  </vertical-timeline-card>
  
</vertical-timeline>
`
})
class AppComponent { }

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, VerticalTimelineModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
