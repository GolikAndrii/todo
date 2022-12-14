import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {AlltodoPageComponent} from "./alltodo-page/alltodo-page.component";
import {CategoriesFormComponent} from "./categories-page/categories-form/categories-form.component";
import {RepasswordPageComponent} from "./repassword-page/repassword-page.component";
// import {AuthGuard} from "./shared/classes/auth.guard";

const routes: Routes = [
  {
    path: "", component: AuthLayoutComponent, children: [
      {path: '',redirectTo: '/login', pathMatch:'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: 'repassword', component: RepasswordPageComponent}
    ]
  },
  {
    path: "", component: SiteLayoutComponent, children: [
    // path: "", component: SiteLayoutComponent, canActivate:[AuthGuard], children: [

      {path: 'overview',  component: OverviewPageComponent},
      {path: 'all-todo', component: AlltodoPageComponent},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'categories/new', component: CategoriesFormComponent},
      {path: 'categories/:id', component: CategoriesFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
