import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoryAddComponent } from './category-add.component';

describe('CategoryAddComponent', () => {
  let component: CategoryAddComponent;
  let fixture: ComponentFixture<CategoryAddComponent>;

  const mockRouter = {
    navigate: jest.fn()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAddComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    let f: NgForm = new NgForm(null, null);
    f.setValue({});
    component.onSubmit(f);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/category/list']);

  });
});

