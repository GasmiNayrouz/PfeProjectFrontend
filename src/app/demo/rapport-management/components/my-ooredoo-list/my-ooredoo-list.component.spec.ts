import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOoredooListComponent } from './my-ooredoo-list.component';

describe('MyOoredooListComponent', () => {
  let component: MyOoredooListComponent;
  let fixture: ComponentFixture<MyOoredooListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOoredooListComponent]
    });
    fixture = TestBed.createComponent(MyOoredooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
