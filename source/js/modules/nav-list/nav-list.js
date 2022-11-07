export class MenuButton {
  constructor() {
    this._menu = document.querySelector('.main-nav__list');
    this._button = document.querySelector('.main-nav__toggle');
    this.toggle = this.toggle.bind(this);
    this._elements = document.querySelectorAll('[data-state]');
  }

  init() {
    this._button.addEventListener('click', this.toggle);
  }

  toggle() {
    const state = this._menu.dataset.state;
    const elementsList = [...this._elements];

    elementsList.forEach((element) =>
      element.setAttribute('data-state', state === 'open' ? 'close' : 'open')
    );
  }
}
