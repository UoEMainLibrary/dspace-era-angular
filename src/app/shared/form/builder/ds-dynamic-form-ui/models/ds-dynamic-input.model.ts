import {
  ClsConfig, DynamicFormGroupModel, DynamicFormGroupModelConfig, DynamicInputModel, DynamicInputModelConfig,
  serializable
} from '@ng-dynamic-forms/core';
import { isNotEmpty } from '../../../../empty.util';
import { Subject } from 'rxjs/Subject';
import { AuthorityModel } from '../../../../../core/integration/models/authority.model';

export interface DsDynamicInputModelConfig extends DynamicInputModelConfig {
  languages: Language[];
  language: string;
}

export class DsDynamicInputModel extends DynamicInputModel {
  @serializable() private _languages: Language[];
  @serializable() private _language: string;
  @serializable() languageUpdates: Subject<string>;

  constructor(config: DsDynamicInputModelConfig, cls?: ClsConfig) {
    super(config, cls);

    this.languages = config.languages;

    this.languageUpdates = new Subject<string>();
    this.languageUpdates.subscribe((lang: string) => {
      this.language = lang;
    });
  }

  hasLanguages(): boolean {
    if (this.languages && this.languages.length > 1) {
      return true;
    }
  }

  get language(): string {
    return this._language;
  }

  set language(language: string) {
    this._language = language;
  }

  get languages(): Language[] {
    return this._languages;
  }

  set languages(languages: Language[]) {
    this._languages = languages;
    this.language = this.language || this.languages ? this.languages[0].code : null;
  }

}

export interface Language {
  display: string;
  code: string;
}
