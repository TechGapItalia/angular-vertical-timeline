# Angular Vertical Timeline

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

## Usage

```html
<!-- In app.component.html -->
<h1>
  Hello Angular!
</h1>

<!-- Add the timeline -->
<vertical-timeline>
  
  <!-- Add some cards to the timeline. It works with *ngFor too -->
  <vertical-timeline-card>
    <h1>Hello I'm a card!</h1>
    <p>I'm in the timeline</p>
  </vertical-timeline-card>

  <vertical-timeline-card *ngFor="let cat of cats">
    <h2>{{cat.meow}}</h2>
  </vertical-timeline-card>

</vertical-timeline>
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
$ npm run lint
```

## License

Apache License 2.0 © [TechGap Italia](mailto:opensource@techgap.it)
