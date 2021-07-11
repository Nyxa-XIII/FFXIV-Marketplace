// So this is like TMAIN

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { ItemRequestsComponent } from './item-requests/item-requests.component';
import { IndexComponent } from './index/index.component';
import { MatTable } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    ItemRequestsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
