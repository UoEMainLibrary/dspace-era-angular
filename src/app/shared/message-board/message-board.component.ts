import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Bitstream } from '../../core/shared/bitstream.model';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../../core/message/message.service';
import { Eperson } from '../../core/eperson/models/eperson.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../notifications/notifications.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationOptions } from '../notifications/models/notification-options.model';
import { Subscription } from 'rxjs/Subscription';
import { hasValue } from '../empty.util';

@Component({
  selector: 'ds-message-board',
  styleUrls: ['./message-board.component.scss'],
  templateUrl: './message-board.component.html',
  providers: [
    NgbActiveModal,
  ]
})

export class MessageBoardComponent implements OnDestroy {
  @Input()
  public messages: Bitstream[];
  @Input()
  public submitter: Eperson;
  @Input()
  public user: Eperson;
  @Input()
  public modalRef: NgbModalRef;
  @Input()
  public itemUUID: string;
  @Input()
  public unRead: string[];
  @Output()
  public refresh = new EventEmitter<any>();

  /**
   * The message form.
   * @type {FormGroup}
   */
  public messageForm: FormGroup;
  public showUnread = false;

  private sub: Subscription;

  constructor(private formBuilder: FormBuilder,
              public msgService: MessageService,
              private notificationsService: NotificationsService,
              private translate: TranslateService,) {
  }

  ngOnInit() {
    // set formGroup
    this.messageForm = this.formBuilder.group({
      textSubject: ['', Validators.required],
      textDescription: ['', Validators.required]
    });

    if (this.isLastMsgForMe()) {
      const lastMsg = this.messages[this.messages.length - 1];
      const accessioned = lastMsg.findMetadata('dc.date.accessioned');
      if (!accessioned) {
        this.read(); // Set as Read the last message
      }
      this.showUnread = true;

      // TODO REMOVE... Use only for test the Set as Unread
      // this.unRead();
    }
  }

  isLastMsgForMe(): boolean {
    if (this.messages && this.messages.length > 0) {
      const lastMsg = this.messages[this.messages.length - 1];
      if (this.user.uuid === this.submitter.uuid) {
        if (lastMsg.findMetadata('dc.type') === 'outbound') {
          return true;
        }
      } else {
        if (lastMsg.findMetadata('dc.type') === 'inbound') {
          return true;
        }
      }
    }
    return false;
  }

  sendMessage() {
    // get subject and description values
    const subject: string = this.messageForm.get('textSubject').value;
    const description: string = this.messageForm.get('textDescription').value;
    const body = {
      uuid: this.itemUUID,
      subject,
      description
    };
    this.sub = this.msgService.createMessage(body)
      .take(1)
      .subscribe((res) => {
      if (res.isSuccessful) {
        console.log('After message creation:');
        console.log(res);
        // Refresh event
        this.refresh.emit('read');
        this.modalRef.dismiss('Send Message');
        this.notificationsService.success(null,
          this.translate.get('submission.workflow.tasks.generic.success'),
          new NotificationOptions(5000, false));
      } else {
        this.notificationsService.error(null,
          this.translate.get('submission.workflow.tasks.generic.error'),
          new NotificationOptions(20000, true));
      }
    });
  }

  unReadLastMsg() {
    const uuid = this.messages[this.messages.length - 1].uuid;
    const body = {
      uuid: uuid
    };
    const req = this.msgService.markAsUnread(body).subscribe((res) => {
      console.log('After message unRead:');
      console.log(res);
      // Refresh event
      this.refresh.emit('read');
      this.showUnread = false;
    });
  }

  read() {
    this.unRead.forEach((uuid) => {
      const body = {
        uuid
      };
      const req = this.msgService.markAsRead(body).subscribe((res) => {
        console.log('After message read:');
        console.log(res);
        // Refresh event
        this.refresh.emit('read');
      });
    });
  }

  ngOnDestroy() {
    if (hasValue(this.sub)) {
      this.sub.unsubscribe();
    }
  }
}
