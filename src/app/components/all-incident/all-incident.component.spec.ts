import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIncidentComponent } from './all-incident.component';

describe('AllIncidentComponent', () => {
  let component: AllIncidentComponent;
  let fixture: ComponentFixture<AllIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
