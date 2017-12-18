import { TestBed, inject } from '@angular/core/testing';

import { CoursesPageService } from './courses-page.service';

describe('CoursesPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesPageService]
    });
  });

  it('should be created', inject([CoursesPageService], (service: CoursesPageService) => {
    expect(service).toBeTruthy();
  }));
});
