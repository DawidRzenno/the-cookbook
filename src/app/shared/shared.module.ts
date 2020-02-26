import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

const allComponents = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: allComponents,
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: allComponents
})
export class SharedModule { }
