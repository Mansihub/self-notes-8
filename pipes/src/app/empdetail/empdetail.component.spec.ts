import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetailComponent } from './empdetail.component';

describe('EmpdetailComponent', () => {
  let component: EmpdetailComponent;
  let fixture: ComponentFixture<EmpdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
