import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-tabs-toolbar',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./super-tabs-toolbar.component.scss'],
})
export class SuperTabsToolbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
