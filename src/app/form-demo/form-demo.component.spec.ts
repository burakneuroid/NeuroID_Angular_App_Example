import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemoComponent } from './form-demo.component';

describe('FormDemoComponent', () => {
  let component: FormDemoComponent;
  let fixture: ComponentFixture<FormDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDemoComponent]
    });
    fixture = TestBed.createComponent(FormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
