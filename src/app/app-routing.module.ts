import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaysDetailComponent } from './secondPage/pays-detail/pays-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pays',component:PaysDetailComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
