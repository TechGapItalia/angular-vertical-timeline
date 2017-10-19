import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vertical-timeline-card',
  templateUrl: 'vertical-timeline-card.html',
  host: {
    ['class']: 'timeline-item'
  },
  styleUrls: [
    'vertical-timeline.scss'
  ]
})

export class VerticalTimelineCardComponent implements OnInit {

  @Input() dateValue: Date;

  constructor() {
  }

  ngOnInit() {
    if (this.dateValue === null || this.dateValue === undefined) {
      this.dateValue = new Date();
    }
  }
}
