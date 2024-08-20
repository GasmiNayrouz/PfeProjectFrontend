import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedDataListComponent } from './reported-data-list.component';

describe('ReportedDataListComponent', () => {
  let component: ReportedDataListComponent;
  let fixture: ComponentFixture<ReportedDataListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportedDataListComponent]
    });
    fixture = TestBed.createComponent(ReportedDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
