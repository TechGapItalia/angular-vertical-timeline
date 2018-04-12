import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <vertical-timeline>
      <vertical-timeline-card>
        Spicy jalapeno bacon ipsum dolor amet tenderloin buffalo chuck pancetta pork belly
        landjaeger tail frankfurter swine porchetta ribeye. Cow turducken shoulder pastrami chicken. T-bone doner beef,
        kielbasa buffalo burgdoggen strip steak fatback filet mignon pork belly picanha pig chuck. Chuck boudin jowl
        tail meatloaf. Tri-tip prosciutto hamburger meatloaf biltong shank kevin. Kevin rump picanha pastrami, cupim
        turkey shank beef ribs short ribs ground round hamburger. Ball tip burgdoggen strip steak porchetta landjaeger.
      </vertical-timeline-card>
      <vertical-timeline-card [disabled]="true">
        Beef ribs andouille shank, tri-tip ribeye cow salami jerky tail bacon porchetta. Fatback
        buffalo ribeye, prosciutto kielbasa pork ball tip sausage rump drumstick. Short loin strip steak salami, alcatra
        cupim turkey buffalo meatloaf bresaola chicken tri-tip picanha. Pancetta kevin frankfurter cow ham drumstick
        rump tongue sausage pork fatback picanha t-bone short loin. Chicken hamburger sausage swine corned beef flank
        turducken chuck prosciutto beef tongue spare ribs fatback ribeye.
      </vertical-timeline-card>
      <vertical-timeline-card [timeString]="'22:33'">
        Spicy jalapeno bacon ipsum dolor amet tenderloin buffalo chuck pancetta pork belly
        landjaeger tail frankfurter swine porchetta ribeye. Cow turducken shoulder pastrami chicken. T-bone doner beef,
        kielbasa buffalo burgdoggen strip steak fatback filet mignon pork belly picanha pig chuck. Chuck boudin jowl
        tail meatloaf. Tri-tip prosciutto hamburger meatloaf biltong shank kevin. Kevin rump picanha pastrami, cupim
        turkey shank beef ribs short ribs ground round hamburger. Ball tip burgdoggen strip steak porchetta landjaeger.
      </vertical-timeline-card>
    </vertical-timeline>`
})
export class AppComponent {
  public header: string = 'UMD Demo';
}
