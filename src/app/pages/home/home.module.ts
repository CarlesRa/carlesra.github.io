import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TranslateModule} from "@ngx-translate/core";
import {ComponentsModule} from "../../components/components.module";
//Material
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatIconModule,
    ComponentsModule,
  ],
  exports: [],
})
export class HomeModule { }
