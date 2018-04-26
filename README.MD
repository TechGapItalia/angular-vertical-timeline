# Angular Vertical Timeline
[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/TechGapItalia/angular-vertical-timeline.svg)](https://travis-ci.org/TechGapItalia/angular-vertical-timeline.svg)
## Branch organization

This repository follows the [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) approach.

* `master` is the stable branch with tagged releases
* `develop` is the snapshot branch, it's mostly stable but active development is done on this branch.
* `feature/*` are temporary, working branches that are not supposed to be stable or usable. They are deleted once merged into `develop`

For most uses `master` is the only branch to consider.

## Angular 4
Version 0.6.0 depends on Angular 5. It should be fine for most users, but if you want guaranteed Angular 4 compatibility you should use 0.5.X. This version will be maintained alongside mainline in the 0.5.x branch.

## Installation

To install this library, run:

```bash
$ npm install angular-vertical-timeline --save
```
Or:
```bash
yarn add angular-vertical-timeline
```

## Importing

Import `VerticalTimelineModule` into your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the timeline library
import { VerticalTimelineModule } from 'angular-vertical-timeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the timeline as an import
    VerticalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Also import the stylesheet in your `styles.css`

```css
@import "~angular-vertical-timeline/dist/vertical-timeline.css";
```

## Usage

```html
<!-- In app.component.html -->
<h1>
  Hello Angular!
</h1>

<!-- Add the timeline -->
<vertical-timeline>

  <!-- Add some cards to the timeline. It works with *ngFor too -->

  <!-- If no value is passed for the date, the current time is used. -->
  <vertical-timeline-card>
   <h1>Today</h1>
  </vertical-timeline-card>

  <!-- tomorrow = new Date(2017, 9, 20, 14,34); -->
  <vertical-timeline-card [dateValue]="tomorrow">
    <h1>Tomorrow</h1>
  </vertical-timeline-card>

</vertical-timeline>
```

#### Angular 4 only
To bypass [this bug](https://github.com/angular/angular/issues/9524)
in the Angular Date Pipe on **Microsoft Edge** and **Internet Explorer**,
since version 0.4.1 you can supply a string to `timeString` with
the correct time to output in the timeline.
If no value is passed, then the
regular `dateValue` and Date Pipe is used.
No need for this if your application is using **Angular 5**.
```html
  <vertical-timeline-card
  [dateValue]="myDate"
  [timeString]="'15:18'"
  >
    <h1>Tomorrow</h1>
  </vertical-timeline-card>
```

Example result:

![Angular Vertical Timeline](https://image.ibb.co/d4zCam/angular_timeline.png)

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files in `dist/` folder:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run tslint
```

## License

Apache License 2.0 © [TechGap Italia](mailto:opensource@techgap.it)
