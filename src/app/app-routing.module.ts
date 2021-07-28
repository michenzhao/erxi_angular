import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];
const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'news', component: NewsComponent }, { path: 'newscontent/:id', component: NewscontentComponent }, { path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
