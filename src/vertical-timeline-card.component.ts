import {Component, Input, OnInit, HostBinding} from '@angular/core';

@Component({
    selector: 'vertical-timeline-card',
    templateUrl: 'vertical-timeline-card.html',
})
export class VerticalTimelineCardComponent implements OnInit {

    @Input() public dateValue: Date;
    @Input() public color: string;
    @HostBinding('class.timeline-item') public someField: boolean = false;
    public textColor: string;

    public ngOnInit() {
        this.someField = true; // set class `someClass` on `<body>`
        if (this.dateValue === null || this.dateValue === undefined) {
            this.dateValue = new Date();
        }

        if (this.color === null || this.color === undefined) {
            this.color = '#3F51B5';
        }

        if (this.isLight(this.color)) {
            this.textColor = '#000000';
        } else {
            this.textColor = '#FFFFFF';
        }
    }

    private isLight(hexColor: string): boolean {
        const R = parseInt(hexColor.slice(1, 3), 16);
        const G = parseInt(hexColor.slice(3, 5), 16);
        const B = parseInt(hexColor.slice(5, 7), 16);
        const maxBrightness = this.calculateBrightness(255, 255, 255);
        const brightness = this.calculateBrightness(R, G, B);
        const pBrightness = brightness / maxBrightness;
        return pBrightness > 0.5;
    }

    // HSP rule sqrt( .299 R2 + .587 G2 + .114 B2 ), see http://alienryderflex.com/hsp.html
    private calculateBrightness(R: number, G: number, B: number): number {
        return Math.sqrt((0.299 * Math.pow(R, 2)) + (0.587 * Math.pow(G, 2)) + (0.114 * Math.pow(B, 2)));
    }
}
