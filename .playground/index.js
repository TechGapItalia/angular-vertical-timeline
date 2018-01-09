"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is only for local test
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var angular_vertical_timeline_1 = require("angular-vertical-timeline");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_2.Component({
        selector: 'app-component',
        template: "\n        <vertical-timeline>\n\n            <vertical-timeline-card [color]=\"'#08D198'\">\n                <h1>Today</h1>\n            </vertical-timeline-card>\n\n            <vertical-timeline-card [color]=\"'#331111'\">\n                <h1>Tomorrow</h1>\n            </vertical-timeline-card> \n            \n            <vertical-timeline-card [color]=\"'#08D198'\">\n                <h1>Today</h1>\n            </vertical-timeline-card>\n\n            <vertical-timeline-card [color]=\"'#331111'\">\n                <h1>Tomorrow</h1>\n            </vertical-timeline-card>\n\n        </vertical-timeline>\n    ",
        styleUrls: ['styles.css']
    })
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [AppComponent],
        declarations: [AppComponent],
        imports: [platform_browser_1.BrowserModule, angular_vertical_timeline_1.VerticalTimelineModule]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=index.js.map