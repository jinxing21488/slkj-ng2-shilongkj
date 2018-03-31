import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlProductComponent } from './sl-product.component';

describe('SlProductComponent', () => {
  let component: SlProductComponent;
  let fixture: ComponentFixture<SlProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
