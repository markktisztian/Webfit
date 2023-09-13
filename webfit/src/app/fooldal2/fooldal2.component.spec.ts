import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fooldal2Component } from './fooldal2.component';

describe('Fooldal2Component', () => {
  let component: Fooldal2Component;
  let fixture: ComponentFixture<Fooldal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fooldal2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fooldal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
