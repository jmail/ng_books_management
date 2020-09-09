import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
      const supportedLangs = ['en', 'pl'];
      this.translate.addLangs(supportedLangs);
      this.translate.setDefaultLang('en');

      const savedSelectedLang = localStorage ? localStorage['language'] || null : null;
      if (savedSelectedLang && supportedLangs.find(lang => lang === savedSelectedLang)) {
          this.translate.use(savedSelectedLang);
      } else {
          this.translate.use('en');
      }
  }
  title = 'ng-books';

}
