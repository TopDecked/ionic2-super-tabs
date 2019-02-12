import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SuperTabButtonComponent } from './super-tab-button/super-tab-button.component';
import { SuperTabComponent } from './super-tab/super-tab.component';
import { SuperTabsContainerComponent } from './super-tabs-container/super-tabs-container.component';
import { SuperTabsToolbarComponent } from './super-tabs-toolbar/super-tabs-toolbar.component';
import { SuperTabsService } from './super-tabs.service';
import { SuperTabsComponent } from './super-tabs/super-tabs.component';

@NgModule({
  declarations: [
    SuperTabsComponent,
    SuperTabComponent,
    SuperTabButtonComponent,
    SuperTabsContainerComponent,
    SuperTabsToolbarComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SuperTabsComponent,
    SuperTabComponent,
    SuperTabButtonComponent,
    SuperTabsContainerComponent,
    SuperTabsToolbarComponent,
  ],
})
export class SuperTabsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SuperTabsModule,
      providers: [
        SuperTabsService,
      ],
    };
  }
}
