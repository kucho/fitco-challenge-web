import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupbuyComponent } from './groupbuy/groupbuy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'group-buy', component: GroupbuyComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
