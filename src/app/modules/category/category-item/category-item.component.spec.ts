import {​​​​​​​​ HttpClientTestingModule }​​​​​​​​ from'@angular/common/http/testing';
import {​​​​​​​​ waitForAsync, ComponentFixture, TestBed }​​​​​​​​ from'@angular/core/testing';
import {​​​​​​​​ RouterTestingModule }​​​​​​​​ from'@angular/router/testing';
 
import {​​​​​​​​ CategoryItemComponent }​​​​​​​​ from'./category-item.component';
 
describe('CategoryItemComponent', () => {​​​​​​​​
let component: CategoryItemComponent;
let fixture: ComponentFixture<CategoryItemComponent>;
 
const mockRouter = {​​​​​​​​
navigate:jest.fn()
  }​​​​​​​​;
 
beforeEach(waitForAsync(() => {​​​​​​​​
TestBed.configureTestingModule({​​​​​​​​
declarations: [CategoryItemComponent],
imports: [RouterTestingModule, HttpClientTestingModule]
    }​​​​​​​​)
      .compileComponents();
  }​​​​​​​​));
 
beforeEach(() => {​​​​​​​​
fixture = TestBed.createComponent(CategoryItemComponent);
component = fixture.componentInstance;
fixture.detectChanges();
  }​​​​​​​​);
 
it('should create', () => {​​​​​​​​
expect(component).toBeTruthy();
  }​​​​​​​​);
 
it('should call deleteCategory', () => {​​​​​​​​
jest.spyOn(component.categoryService, 'deleteCategory');
fixture.detectChanges();
component.deleteCategory(123);
expect(mockRouter.navigate).toHaveBeenCalledTimes(0);
expect(component.categoryService.deleteCategory).toHaveBeenCalledTimes(1);
  }​​​​​​​​)
}​​​​​​​​);

