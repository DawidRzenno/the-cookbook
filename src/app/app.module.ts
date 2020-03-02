import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevLogComponent } from './dev-log/dev-log.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { LogOutComponent } from './authentication/log-out/log-out.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    DevLogComponent,
    PageNotFoundComponent,
    LogInComponent,
    LogOutComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
