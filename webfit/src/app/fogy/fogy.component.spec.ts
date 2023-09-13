import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogyComponent } from './fogy.component';

describe('FogyComponent', () => {
  let component: FogyComponent;
  let fixture: ComponentFixture<FogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FogyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
