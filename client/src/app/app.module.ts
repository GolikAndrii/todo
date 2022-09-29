import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AlltodoPageComponent } from './alltodo-page/alltodo-page.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    CategoriesPageComponent,
    AlltodoPageComponent,
    CategoriesFormComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    {
    provide: HTTP_INTERCEPTORS,
    multi: true,
      useClass: TokenInterceptor
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
