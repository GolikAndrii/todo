import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {AlltodoPageComponent} from "./alltodo-page/alltodo-page.component";
// import {AuthGuard} from "./shared/classes/auth.guard";

if (localStorage.getItem('')) {
  console.log('LS is empty')
} else {
  console.log('LS is full')
}

const routes: Routes = [
  {
    path: "", component: AuthLayoutComponent, children: [
      {path: '',redirectTo: '/login', pathMatch:'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: "", component: SiteLayoutComponent, children: [
    // path: "", component: SiteLayoutComponent, canActivate:[AuthGuard], children: [

      {path: 'overview', component: OverviewPageComponent},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'alltodo', component: AlltodoPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
