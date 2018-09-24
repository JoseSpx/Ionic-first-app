import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageModule } from './about/about.module';
import { ContactPageModule } from './contact/contact.module';
import { HomePageModule } from './home/home.module';


@NgModule({
  imports: [
    CommonModule,
    AboutPageModule,
    ContactPageModule,
    HomePageModule
  ],
  declarations: []
})
export class ModulesModule { }
