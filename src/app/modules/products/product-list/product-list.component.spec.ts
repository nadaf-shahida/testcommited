import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { PaginationService } from '../../../shared/services/pagination.service';
// import { environment } from 'src/environments/environment';
//  import { PaginationService } from '../../../shared/services/pagination.service';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule, Store],

      declarations: [ProductListComponent],
      providers: [PaginationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onsubmit', () => {
    const storeSpy = jest.spyOn(component.store, 'dispatch');
    component.deleteProduct('');
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalled();
  });

  it('should call loadproducts', () => {
    const storeSpy = jest.spyOn(component.store, 'dispatch');
    component.loadProducts('');
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalled();
  });


});
