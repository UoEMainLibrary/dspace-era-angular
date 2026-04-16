import { Component } from '@angular/core';

import { AccessibilitySettingsComponent as BaseComponent } from '../../../../../app/info/accessibility-settings/accessibility-settings.component';
import { ThemedAccessibilitySettingsComponent } from '../../../../../app/info/accessibility-settings/themed-accessibility-settings.component';

@Component({
  selector: 'ds-themed-accessibility-settings',
  // styleUrls: ['./privacy.component.scss'],
  styleUrls: ['./accessibility-settings.component.scss'],
  // templateUrl: './privacy.component.html'
  templateUrl: './accessibility-settings.component.html',
  standalone: true,
  imports: [ThemedAccessibilitySettingsComponent],
})

/**
 * Component displaying the Accessibility Settings
 */
export class AccessibilitySettingsComponent extends BaseComponent {}
