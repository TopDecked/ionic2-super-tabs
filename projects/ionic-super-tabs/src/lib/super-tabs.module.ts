import { NgModule } from '@angular/core';
import { SuperTabsComponent } from './super-tabs/super-tabs.component';
import { SuperTabComponent } from './super-tab/super-tab.component';
import { SuperTabButtonComponent } from './super-tab-button/super-tab-button.component';
import { SuperTabsContainerComponent } from './super-tabs-container/super-tabs-container.component';
import { SuperTabsToolbarComponent } from './super-tabs-toolbar/super-tabs-toolbar.component';

@NgModule({
  declarations: [SuperTabsComponent, SuperTabComponent, SuperTabButtonComponent, SuperTabsContainerComponent, SuperTabsToolbarComponent],
  imports: [
  ],
  exports: [SuperTabsComponent, SuperTabComponent]
})
export class SuperTabsModule {}
