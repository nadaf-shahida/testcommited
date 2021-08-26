import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CartComponent } from './cart.component';
import { MockApiCartService } from './resources/mock-api-cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [RouterTestingModule,BrowserModule,
        BrowserAnimationsModule,
        FormsModule],
      providers: [MockApiCartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call onSubmit', () => {​​​​​​​​
  // component.ngOnInit();
  // expect(component.cart$).toEqual(component.cartService.cart)
  
  //   }​​​​​​​​)
  
});
