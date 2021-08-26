import { TestBed } from '@angular/core/testing';
import { PaginationService } from './pagination.service'

describe('Pagination Service', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PaginationService] });
  });

  it('should create', () => {
    service = TestBed.inject(PaginationService);
    expect(service).toBeTruthy();
  })

  it('should parse return pagination url', () => {
    service = TestBed.inject(PaginationService);
    var result = service.parseReturnedPaginationUrls({});
    expect(result).toBeTruthy();
  })

  it('should create url', () => {
    service = TestBed.inject(PaginationService);
    var result = service.createUrl('0', '1', '0', '1', '');
    expect(result).toBeTruthy();
  })
})