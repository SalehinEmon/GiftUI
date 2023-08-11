import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetIncidentComponent } from './set-incident.component';

describe('SetIncidentComponent', () => {
  let component: SetIncidentComponent;
  let fixture: ComponentFixture<SetIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
