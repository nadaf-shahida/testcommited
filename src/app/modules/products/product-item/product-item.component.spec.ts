import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
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
    // fixture.detectChanges();
    // expect(storeSpy).toHaveBeenCalledTimes(1);
  });

});
