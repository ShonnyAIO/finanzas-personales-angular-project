import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GlobalService } from './global.service';

describe('GlobalService', () => {
  let injector: TestBed;
  let service: GlobalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GlobalService]
    });
    injector = getTestBed();
    service = injector.inject(GlobalService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Injection del servicio global', () => {
    expect(service).toBeTruthy();
  });
});
