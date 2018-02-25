import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {CoursesPageService} from '../courses-page/courses-page.service';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.less']
})
export class CreateCoursePageComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;

  public course: Object;
  public authorsList: Observable<any>;
  public courseAuthors: any[];

  constructor(private _route: ActivatedRoute,
              private _coursesService: CoursesPageService,
              private _location: Location,
              private _http: HttpClient) {
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

    this._http.get('http://localhost:3004/authors')
      .subscribe((data: any) => {
        this.authorsList = data.map(item => {
          return {label: `${item.firstName} ${item.lastName}`, checked: false, data: item};
        });
      });
    this.courseAuthors = [
      {
        'firstName': 'Autumn',
        'lastName': 'Solis'
      },
      {
        'firstName': 'Bell',
        'lastName': 'Hull'
      }
    ];
  }

  back() {
    this._location.back();
  }

  submit(form) {
    console.log(form);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
