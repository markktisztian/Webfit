import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzomComponent } from './izom.component';

describe('IzomComponent', () => {
  let component: IzomComponent;
  let fixture: ComponentFixture<IzomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
