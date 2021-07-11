import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { ItemRequestsComponent } from './item-requests/item-requests.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'market', component: MarketComponent },
  { path: 'item-requests', component: ItemRequestsComponent },
  { path: 'index', component: IndexComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
