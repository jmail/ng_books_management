import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import {AlertMessageComponent} from './messages/alert-message.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    CreateBookComponent,
    UpdateBookComponent,
    AlertMessageComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayPanelModule,
    TableModule,
    PanelModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
