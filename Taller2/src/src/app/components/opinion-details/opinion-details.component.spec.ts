import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionDetailsComponent } from './opinion-details.component';

describe('OpinionDetailsComponent', () => {
  let component: OpinionDetailsComponent;
  let fixture: ComponentFixture<OpinionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
