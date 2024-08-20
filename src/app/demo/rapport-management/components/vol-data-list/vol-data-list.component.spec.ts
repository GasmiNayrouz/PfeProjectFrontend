import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolDataListComponent } from './vol-data-list.component';

describe('VolDataListComponent', () => {
  let component: VolDataListComponent;
  let fixture: ComponentFixture<VolDataListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolDataListComponent]
    });
    fixture = TestBed.createComponent(VolDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
