/**
 * This is only for local test
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {VerticalTimelineModule} from 'angular-vertical-timeline';

@Component({
    selector: 'app-component',
    template: `
        <vertical-timeline>

            <vertical-timeline-card [color]="'#08D198'">
                <h1>Today</h1>
            </vertical-timeline-card>

            <vertical-timeline-card [color]="'#331111'">
                <h1>Tomorrow</h1>
            </vertical-timeline-card> 
            
            <vertical-timeline-card [color]="'#08D198'">
                <h1>Today</h1>
            </vertical-timeline-card>

            <vertical-timeline-card [color]="'#331111'">
                <h1>Tomorrow</h1>
            </vertical-timeline-card>

        </vertical-timeline>
    `,
    styleUrls: ['styles.css']
})
class AppComponent {
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, VerticalTimelineModule]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
