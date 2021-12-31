import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TranslateModule} from "@ngx-translate/core";
//Material
import { MatChipsModule } from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [],
})
export class HomeModule { }
