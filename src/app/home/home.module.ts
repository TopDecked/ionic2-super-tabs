import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperTabsModule } from '../../../projects/ionic-super-tabs/src/lib/super-tabs.module';
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SuperTabsModule,
    AboutPageModule,
    ContactPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
