import {​​​​​​​​ waitForAsync, ComponentFixture, TestBed }​​​​​​​​ from'@angular/core/testing';
import {​​​​​​​​ FormsModule }​​​​​​​​ from'@angular/forms';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import {​​​​​​​​ BrowserAnimationsModule }​​​​​​​​ from'@angular/platform-browser/animations';
import {​​​​​​​​ RouterTestingModule }​​​​​​​​ from'@angular/router/testing';
 
import {​​​​​​​​ NotFoundComponent }​​​​​​​​ from'./not-found.component';
 
describe('NotFoundComponent', () => {​​​​​​​​
let component: NotFoundComponent;
let fixture: ComponentFixture<NotFoundComponent>;
 
beforeEach(waitForAsync(() => {​​​​​​​​
TestBed.configureTestingModule({​​​​​​​​
imports: [BrowserModule,
BrowserAnimationsModule,
RouterTestingModule,
FormsModule],
declarations: [NotFoundComponent]
    }​​​​​​​​)
      .compileComponents();
  }​​​​​​​​));
 
beforeEach(() => {​​​​​​​​
fixture = TestBed.createComponent(NotFoundComponent);
component = fixture.componentInstance;
fixture.detectChanges();
  }​​​​​​​​);
 
it('should create', () => {​​​​​​​​
expect(component).toBeTruthy();
  }​​​​​​​​);
}​​​​​​​​);

