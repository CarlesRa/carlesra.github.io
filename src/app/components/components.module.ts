import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipListComponent } from './chip-list/chip-list.component';
// Material
import { MatChipsModule } from "@angular/material/chips";



@NgModule({
  declarations: [
    ChipListComponent,
  ],
  imports: [
    CommonModule,
    MatChipsModule,
  ],
  exports: [
    ChipListComponent,
  ]
})
export class ComponentsModule { }
