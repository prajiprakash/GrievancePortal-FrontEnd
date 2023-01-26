import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedcomplaintsComponent } from './completedcomplaints.component';

describe('CompletedcomplaintsComponent', () => {
  let component: CompletedcomplaintsComponent;
  let fixture: ComponentFixture<CompletedcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
