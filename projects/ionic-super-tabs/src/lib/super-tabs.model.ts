import { SuperTabComponent } from './super-tab/super-tab.component';

export interface SuperTabsControllerConfig {
  animationDuration: number;
}

export interface SuperTabChangeEvent {
  tab: SuperTabComponent;
  index: number;
}

export interface SuperTabButtonClickEvent {
  tab: SuperTabComponent;
  index: number;
  changed: boolean;
}

export abstract class SuperTabsAnimatableComponent {
  abstract setPosition(position: number, duration: number);
}

export abstract class SuperTabUnit {
  protected _index: number;
  protected _active: boolean;

  get index() {
    return this._index;
  }

  get active() {
    return this._active;
  }

  setIndex(index: number) {
    this._index = index;
  }

  setActive(active: boolean) {
    this._active = active;
  }
}
