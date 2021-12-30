import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading = true;

  constructor(
    public translate: TranslateService,
  ) {
    translate.addLangs(['es', 'en']);
    const lang = localStorage.getItem('lang');
    if (lang) {
      translate.setDefaultLang(lang);
      this.loading = false;
      return;
    }
    translate.setDefaultLang('es');
    this.loading = false;
  }

  switchLang(value: string) {
    localStorage.setItem('lang', value);
    this.translate.use(value);
  }
}
