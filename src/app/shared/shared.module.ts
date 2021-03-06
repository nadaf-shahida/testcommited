import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CourseListComponent } from './course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { PaginationButtonsWidgetComponent } from './pagination-buttons-widget/pagination-buttons-widget.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [CourseListComponent, PaginationButtonsWidgetComponent, RegisterComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    AccordionModule.forRoot(),
    RouterModule,
  ],
  exports: [CourseListComponent, PaginationButtonsWidgetComponent],
})
export class SharedModule {}
