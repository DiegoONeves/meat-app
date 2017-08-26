import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestaurantsService } from '../../restaurants/restaurants.service';
import { MenuItem } from '../item-menu/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>;
  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu =
      this.restaurantsService.getMenuOfRestaurant(this.route.snapshot.parent.params['id']);
  }

  // addMenuItem(item: MenuItem) {
  //   console.log(item);
  // }

}
