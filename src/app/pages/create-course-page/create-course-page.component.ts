import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {CoursesPageService} from '../courses-page/courses-page.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.less']
})
export class CreateCoursePageComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;

  public course: Object;

  constructor(private _route: ActivatedRoute,
              private _coursesService: CoursesPageService,
              private _location: Location) {
    this.course = {};
  }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe((data) => {
      const ID = data['id'];
      if (ID) {
        this._coursesService.loadCourse(ID)
          .subscribe((course) => {
            this.course = course;
          });
      }
    });
  }

  back() {
    this._location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
