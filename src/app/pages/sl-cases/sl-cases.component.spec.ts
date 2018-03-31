import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlCasesComponent } from './sl-cases.component';

describe('SlCasesComponent', () => {
  let component: SlCasesComponent;
  let fixture: ComponentFixture<SlCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
