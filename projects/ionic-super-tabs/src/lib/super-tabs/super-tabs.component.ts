import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SuperTabsContainerComponent } from '../super-tabs-container/super-tabs-container.component';
import { SuperTabsToolbarComponent } from '../super-tabs-toolbar/super-tabs-toolbar.component';

@Component({
  selector: 'super-tabs',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./super-tabs.component.scss']
})
export class SuperTabsComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild(SuperTabsToolbarComponent) toolbar: SuperTabsToolbarComponent;
  @ContentChild(SuperTabsContainerComponent) container: SuperTabsContainerComponent;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit(...args) {
    console.log('Content init fired; ', ...args);
  }

  ngAfterContentChecked(...args) {
    console.log('Content after checked fired', ...args, this.toolbar, this.container);
  }

}
