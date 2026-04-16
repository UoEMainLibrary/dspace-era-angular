import {
  AsyncPipe,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { RecentItemListComponent as BaseComponent } from '../../../../../app/home-page/recent-item-list/recent-item-list.component';
import { ErrorComponent } from '../../../../../app/shared/error/error.component';
import { ThemedLoadingComponent } from '../../../../../app/shared/loading/themed-loading.component';
import { ObjectCollectionComponent } from '../../../../../app/shared/object-collection/object-collection.component';
import { VarDirective } from '../../../../../app/shared/utils/var.directive';

@Component({
  selector: 'ds-themed-recent-item-list',
  styleUrls: ['./recent-item-list.component.scss'],
  // styleUrls: ['../../../../../app/home-page/recent-item-list/recent-item-list.component.scss'],
  templateUrl: './recent-item-list.component.html',
  // templateUrl: '../../../../../app/home-page/recent-item-list/recent-item-list.component.html',
  standalone: true,
  imports: [VarDirective, NgIf, ObjectCollectionComponent, ErrorComponent, ThemedLoadingComponent, AsyncPipe, TranslateModule],
})

export class RecentItemListComponent extends BaseComponent {}

