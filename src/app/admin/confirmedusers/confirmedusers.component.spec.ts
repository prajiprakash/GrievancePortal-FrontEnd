import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedusersComponent } from './confirmedusers.component';

describe('ConfirmedusersComponent', () => {
  let component: ConfirmedusersComponent;
  let fixture: ComponentFixture<ConfirmedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
