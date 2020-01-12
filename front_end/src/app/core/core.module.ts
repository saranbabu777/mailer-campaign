import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule
  ],
  exports: [ LayoutComponent ]
})
export class CoreModule { }
