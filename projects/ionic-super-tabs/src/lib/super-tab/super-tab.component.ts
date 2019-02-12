import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SuperTabUnit } from '../super-tabs.model';

@Component({
  selector: 'super-tab',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./super-tab.component.scss'],
})
export class SuperTabComponent extends SuperTabUnit implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
  }

  setActive(active: boolean) {
    super.setActive(active);

    if (active) {
      this.cdr.detach();
    } else {
      this.cdr.detach();
    }
  }

}
