import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginModalComponent],
      imports: [FormsModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateShoppingCart', () => {​​​​​​​​
    jest.spyOn(component.cartService, 'updatedCartSelection');
    jest.spyOn(component.cartService, 'getCartByUserId');
    fixture.detectChanges();
    component.updateShoppingCart('');
    expect(component.cartService.updatedCartSelection).toHaveBeenCalledTimes(0);
    expect(component.cartService.getCartByUserId).toHaveBeenCalledWith('');

      }​​​​​​​​);

      // it('should call onsubmit', () => {
      //   const storeSpy = jest.spyOn(component.store, 'dispatch');
      //   let f:NgForm=null
      //   component.onSubmit(f);
      //   fixture.detectChanges();
      //   expect(storeSpy).toHaveBeenCalledWith(f);
      //   // fixture.detectChanges();
      //   // expect(storeSpy).toHaveBeenCalledTimes(1);
      // });
    
        
});
