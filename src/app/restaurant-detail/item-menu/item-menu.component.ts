import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';
@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html'
})
export class ItemMenuComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
