import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 currentLang: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
      this.currentLang = localStorage['language'] ? localStorage['language'] || this.translate.getBrowserLang() : this.translate.getBrowserLang();
      console.log(this.translate.getBrowserLang());
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
    localStorage['language'] = language;
  }

}
