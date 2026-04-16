import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ThemedUserMenuComponent } from 'src/app/shared/auth-nav-menu/user-menu/themed-user-menu.component';

import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';

// import { SharedModule } from '../../../../app/shared/shared.module'
import { AuthNavMenuComponent } from "../shared/auth-nav-menu/auth-nav-menu.component";
import { ThemedLangSwitchComponent } from "src/app/shared/lang-switch/themed-lang-switch.component";

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-themed-navbar',
  styleUrls: ['./navbar.component.scss'],
  // styleUrls: ['../../../../app/navbar/navbar.component.scss'],
  templateUrl: './navbar.component.html',
  // templateUrl: '../../../../app/navbar/navbar.component.html',
  animations: [slideMobileNav],
  standalone: true,
  imports: [NgbDropdownModule, NgClass, NgIf, ThemedUserMenuComponent, NgFor, NgComponentOutlet, AsyncPipe, TranslateModule, AuthNavMenuComponent, ThemedLangSwitchComponent],
})
export class NavbarComponent extends BaseComponent {
}
