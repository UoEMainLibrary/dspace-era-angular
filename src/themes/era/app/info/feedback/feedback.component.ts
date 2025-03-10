import { Component } from '@angular/core';
import { FeedbackComponent as BaseComponent } from '../../../../../app/info/feedback/feedback.component';
import { InfoModule } from '../../../../../app/info/info.module';

@Component({
    selector: 'ds-feedback',
    // styleUrls: ['./feedback.component.scss'],
    styleUrls: ['../../../../../app/info/feedback/feedback.component.scss'],
    // templateUrl: './feedback.component.html'
    templateUrl: '../../../../../app/info/feedback/feedback.component.html',
    standalone: true,
    imports: [InfoModule]
})

/**
 * Component displaying the feedback Statement
 */
export class FeedbackComponent extends BaseComponent { }
