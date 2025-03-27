import { TestBed } from '@angular/core/testing';
import { ChildService } from './child-service';
import { ParentService } from './parent-service';

describe('ChildService', () => {
  let service: ChildService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ChildService
      ]
    });

    service = TestBed.inject(ChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct sum when addMethod is called', () => {
    expect(service.addMethod(3, 5)).toBe(8);
  });
});