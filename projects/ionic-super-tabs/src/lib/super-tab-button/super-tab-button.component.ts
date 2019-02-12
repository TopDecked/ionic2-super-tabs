import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SuperTabUnit } from '../super-tabs.model';

@Component({
  selector: 'super-tab-button',
  template: `
    <ion-ripple-effect></ion-ripple-effect>
    <ng-content></ng-content>
  `,
  styleUrls: ['./super-tab-button.component.scss']
})
export class SuperTabButtonComponent extends SuperTabUnit implements OnInit {

  ngOnInit() {
  }

}
