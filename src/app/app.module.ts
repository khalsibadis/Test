import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaysDetailComponent } from './secondPage/pays-detail/pays-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    PaysDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    MatIconModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule ,
    HttpClientModule,
    MatTableModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
