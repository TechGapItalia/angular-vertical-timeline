import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<vertical-timeline><vertical-timeline-card>Hello!</vertical-timeline-card><vertical-timeline-card>World!</vertical-timeline-card></vertical-timeline>`
})
export class AppComponent {
  public header: string = 'UMD Demo';
}
