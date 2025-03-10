import { Component } from '@angular/core';
import { RecentItemListComponent as BaseComponent } from '../../../../../app/home-page/recent-item-list/recent-item-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';
@Component({
    selector: 'ds-recent-item-list',
    // styleUrls: ['./recent-item-list.component.scss'],
    styleUrls: ['../../../../../app/home-page/recent-item-list/recent-item-list.component.scss'],
    templateUrl: './recent-item-list.component.html'
    // templateUrl: '../../../../../app/home-page/recent-item-list/ds-recent-item-list.component.html'
    ,
    standalone: true,
    imports: [SharedModule, NgIf, NgClass, NgFor, AsyncPipe, TranslateModule]
})

export class RecentItemListComponent extends BaseComponent {}