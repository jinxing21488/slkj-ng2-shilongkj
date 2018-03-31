import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlServicesComponent } from './sl-services.component';

describe('SlServicesComponent', () => {
  let component: SlServicesComponent;
  let fixture: ComponentFixture<SlServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
