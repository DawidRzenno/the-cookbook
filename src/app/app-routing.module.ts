import { ForgottenPasswordComponent } from './authentication/log-in/forgotten-password/forgotten-password.component';
import { DevLogComponent } from './dev-log/dev-log.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { LogOutComponent } from './authentication/log-out/log-out.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'log-in',
    component: LogInComponent
  },  
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  { path: 'dev-log',
    component: DevLogComponent
  },
  {
    path: 'log-out',
    component: LogOutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
