import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizationBoxComponent } from './cotization-box.component';

describe('CotizationBoxComponent', () => {
  let component: CotizationBoxComponent;
  let fixture: ComponentFixture<CotizationBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizationBoxComponent]
    });
    fixture = TestBed.createComponent(CotizationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
