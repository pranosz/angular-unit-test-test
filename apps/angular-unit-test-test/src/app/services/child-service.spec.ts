import { TestBed } from '@angular/core/testing';
import { ChildService } from './child-service';
import { ParentService } from './parent-service';

describe('ChildService', () => {
  let service: ChildService;
  let parentServiceMock: jest.Mocked<ParentService>;

  beforeEach(() => {
    parentServiceMock = {
        multiplyMethod: jest.fn().mockReturnValue(5)
    } as jest.Mocked<ParentService>;

    TestBed.configureTestingModule({
      providers: [
        ChildService,
        { provide: ParentService, useValue: parentServiceMock }
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