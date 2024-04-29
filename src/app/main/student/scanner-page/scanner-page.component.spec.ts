import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerPageComponent } from './scanner-page.component';

describe('ScannerPageComponent', () => {
  let component: ScannerPageComponent;
  let fixture: ComponentFixture<ScannerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerPageComponent]
    });
    fixture = TestBed.createComponent(ScannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
