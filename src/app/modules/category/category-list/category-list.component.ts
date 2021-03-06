import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../resources/model';
import { CategoryApiService } from '../resources/category-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(
    private categoryApiService: CategoryApiService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories$ = this.categoryApiService.getAllCategories();
  }

  deleteCategory(id: number) {
    const categoryObserver = {
      next: () => {
        console.log('Category Deleted');
        this.ngOnInit();
      },
      error: (err) => console.error(err),
    };
    this.categoryApiService.deleteCategory(id).subscribe(categoryObserver);
  }
}
