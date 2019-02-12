import { Component } from '@angular/core';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

export interface IPage {
  name: string;
  root: Function | HTMLElement | null | string | undefined;
  rootParams: { [key: string]: any; };
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pages: IPage[] = [
    {
      name: 'Contact',
      root: ContactPage,
      rootParams: {},
      icon: 'call',
    },
    {
      name: 'About',
      root: AboutPage,
      rootParams: {},
      icon: 'more',
    }
  ];

  ngOnInit() {
    setTimeout(() => this.pages = [...this.pages, ...this.pages], 2500);
  }
}
