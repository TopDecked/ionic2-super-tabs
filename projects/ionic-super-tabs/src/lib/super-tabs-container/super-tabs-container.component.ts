import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-tabs-container',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./super-tabs-container.component.scss'],
})
export class SuperTabsContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
