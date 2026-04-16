import { Component } from '@angular/core';

import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { AccessibilitySettingsComponent } from './accessibility-settings.component';
/**
 * Themed wrapper for AccessibilitySettingsComponent
 */
@Component({
  selector: 'ds-accessibility-settings',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [AccessibilitySettingsComponent],
})
export class ThemedAccessibilitySettingsComponent extends ThemedComponent<AccessibilitySettingsComponent> {
  protected getComponentName(): string {
    return 'AccessibilitySettingsComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/accessibility-settings/accessibility-settings.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./accessibility-settings.component`);
  }

}
