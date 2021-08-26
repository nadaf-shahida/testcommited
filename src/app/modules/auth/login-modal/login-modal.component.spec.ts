import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { MockApiCartService } from '../../cart/resources/mock-api-cart.service';
import { AuthService } from '../resources/auth.service';
import { ModalService } from '../resources/modal.service';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginModalComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [AuthService, MockApiCartService, ModalService, provideMockStore()]
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

  it('should call updateShoppingCart', () => {
    jest.spyOn(component.cartService, 'updatedCartSelection');
    jest.spyOn(component.cartService, 'getCartByUserId');
    fixture.detectChanges();
    component.updateShoppingCart('');
    expect(component.cartService.updatedCartSelection).toHaveBeenCalledTimes(0);
    expect(component.cartService.getCartByUserId).toHaveBeenCalledWith('');

  });

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
