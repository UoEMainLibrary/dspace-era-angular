import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from '../../../../../../../app/core/shared/context.model';
import {
  UntypedItemComponent as BaseComponent
} from '../../../../../../../app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ItemSharedModule } from '../../../../../../../app/item-page/item-shared.module';
import { DsoPageModule } from '../../../../../../../app/shared/dso-page/dso-page.module';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { ItemPageModule } from '../../../../../../../app/item-page/item-page.module';
import { ResultsBackButtonModule } from '../../../../../../../app/shared/results-back-button/results-back-button.module';
import { NgIf, AsyncPipe } from '@angular/common';

/**
 * Component that represents an untyped Item page
 */
@listableObjectComponent(Item, ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
    selector: 'ds-untyped-item',
    // styleUrls: ['./untyped-item.component.scss'],
    styleUrls: ['../../../../../../../app/item-page/simple/item-types/untyped-item/untyped-item.component.scss'],
    templateUrl: './untyped-item.component.html',
    // templateUrl: '../../../../../../../app/item-page/simple/item-types/untyped-item/untyped-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, ResultsBackButtonModule, ItemPageModule, SharedModule, DsoPageModule, ItemSharedModule, RouterLink, AsyncPipe, TranslateModule]
})
export class UntypedItemComponent extends BaseComponent {
}
