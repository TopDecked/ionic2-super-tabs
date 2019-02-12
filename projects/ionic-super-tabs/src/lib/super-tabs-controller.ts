import { Subject } from 'rxjs';
import { SuperTabButtonClickEvent, SuperTabChangeEvent, SuperTabsControllerConfig } from './super-tabs.model';
import { SuperTabButtonComponent } from './super-tab-button/super-tab-button.component';
import { SuperTabComponent } from './super-tab/super-tab.component';
import { SuperTabsContainerComponent } from './super-tabs-container/super-tabs-container.component';
import { SuperTabsToolbarComponent } from './super-tabs-toolbar/super-tabs-toolbar.component';
import { SuperTabsComponent } from './super-tabs/super-tabs.component';


export const DEFAULT_CONFIG: SuperTabsControllerConfig = {
  animationDuration: 300,
};

export class SuperTabsController implements SuperTabsControllerConfig {
  animationDuration: number;

  container: SuperTabsContainerComponent;
  toolbar: SuperTabsToolbarComponent;
  tabs: SuperTabComponent[];
  tabButtons: SuperTabButtonComponent[];

  tabRegistered$ = new Subject<SuperTabComponent>();
  toolbarRegistered$ = new Subject<SuperTabsToolbarComponent>();
  containerRegistered$ = new Subject<SuperTabsContainerComponent>();
  tabButtonRegistered$ = new Subject<SuperTabButtonComponent>();

  tabSelected$ = new Subject<SuperTabChangeEvent>();
  tabButtonClicked$ = new Subject<SuperTabButtonClickEvent>();

  constructor(public superTabs: SuperTabsComponent) {
    this.configure(DEFAULT_CONFIG);
  }

  configure(config: SuperTabsControllerConfig) {
    for (const k in config) {
      if (config[k]) {
        this[k] = config[k];
      }
    }
  }

  registerContainer(container: SuperTabsContainerComponent) {
    if (this.container !== container) {
      this.container = container;
      this.containerRegistered$.next(container);
    }
  }

  registerToolbar(toolbar: SuperTabsToolbarComponent) {
    if (this.toolbar !== toolbar) {
      this.toolbar = toolbar;
      this.toolbarRegistered$.next(toolbar);
    }
  }

  registerTab(tab: SuperTabComponent) {
    if (!this.tabs.some(t => t === tab)) {
      this.tabs.push(tab);
      this.tabRegistered$.next(tab);
    }
  }

  registerTabButton(btn: SuperTabButtonComponent) {
    if (!this.tabButtons.some(b => b === btn)) {
      this.tabButtons.push(btn);
      this.tabButtonRegistered$.next(btn);
    }
  }

  setToolbarPosition(position: number, duration = this.animationDuration) {

  }

  setContainerPosition(position: number, duration = this.animationDuration) {

  }

  setActiveTab(index: number) {

  }

}
