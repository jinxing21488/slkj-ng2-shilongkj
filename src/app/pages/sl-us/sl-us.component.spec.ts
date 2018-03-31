import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlUsComponent } from './sl-us.component';

describe('SlUsComponent', () => {
  let component: SlUsComponent;
  let fixture: ComponentFixture<SlUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
