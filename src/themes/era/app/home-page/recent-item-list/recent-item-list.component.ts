import { Component } from '@angular/core';
import { RecentItemListComponent as BaseComponent } from '../../../../../app/home-page/recent-item-list/recent-item-list.component';
@Component({
  selector: 'ds-recent-item-list',
  // styleUrls: ['./recent-item-list.scss'],
  styleUrls: ['../../../../../app/home-page/ds-recent-item-list/ds-recent-item-list.component.scss'],
  templateUrl: './recent-item-list.component.html'
  // templateUrl: '../../../../../app/home-page/ds-recent-item-list/ds-recent-item-list.component.html'
})

export class RecentItemListComponent extends BaseComponent {}

