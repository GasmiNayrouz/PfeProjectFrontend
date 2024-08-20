import { TestBed } from '@angular/core/testing';
import { RapportServiceService } from '../service/rapport-service.service';
import { MyOoredooApp } from './my-ooredoo-app';


describe('RapportServiceService', () => {
  let service: RapportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});