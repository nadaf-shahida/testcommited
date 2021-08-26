import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthService } from '../resources/auth.service';

import { AuthLinksComponent } from './auth-links.component';

describe('AuthLinksComponent', () => {
  let component: AuthLinksComponent;
  let fixture: ComponentFixture<AuthLinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLinksComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ModalModule],
      providers: [provideMockStore(), AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call logout', () => {
  //   const storeSpy = jest.spyOn(component.store, 'dispatch');
  //   component.logout();
  //   fixture.detectChanges();
  //   expect(storeSpy).toBe(true);
  // });

});
