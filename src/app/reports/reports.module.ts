import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsTableComponent } from './reports-table/reports-table.component';





@NgModule({
  imports:      [ CommonModule],
  declarations: [ ReportsComponent, ReportsTableComponent,],
  exports: [ ReportsComponent ]
})
export class ReportsModule { }