import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Course} from '../../components/course-block/course-block.class';

import {Observable} from 'rxjs/';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursesPageService {

  private _courses: BehaviorSubject<any>;
  private start;
  private count;
  private readonly host = 'http://localhost:3004';

  constructor(private httpClient: HttpClient) {
    this.start = 0;
    this.count = 3;
    this._courses = new BehaviorSubject([]);
    this.loadCourses(this.start, this.count)
      .subscribe(data => {
        this._courses.next(data);
      });
  }

  get courses() {
    return this._courses.asObservable();
  }

  private loadCourses(start: number, count: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('start', '' + start);
    params = params.append('count', '' + count);
    return this.httpClient.get(`${this.host}/courses`, {params: params});
  }

  filterCourses(filter: string, searchField: string): any {
    return this._courses
      .subscribe((coursesData: Course[]) => {
        let courses;
        courses = coursesData.filter((course) => {
          const SEARCH = course[searchField].match(new RegExp(filter, 'gi'));
          return SEARCH && SEARCH.length > 0;
        });
        this._courses.next(courses);
      });
  }

  loadNext() {
    this.loadCourses(this.start + this.count - 1, this.count)
      .subscribe(data => {
        if (data.length > 0) {
          this._courses.next(data);
          this.start += this.count - 1;
        }
      });
  }

  loadPrevious() {
    this.loadCourses(this.start - this.count - 1, this.count)
      .subscribe(data => {
        if (data.length > 0) {
          this._courses.next(data);
          this.start -= this.count - 1;
        }
      });
  }

  addCourse(course: Course) {
  }

  updateCourse(courseToUpdate) {
    return Observable.of(this._courses.map((course: Course) => {
      return courseToUpdate.id === course.id ? courseToUpdate : course;
    }))
      .subscribe(() => {
          const courses = this._courses.getValue();
          const index = courses.findIndex((course) => course.id === courseToUpdate.id);
          courses.splice(index, 1, courseToUpdate);
          this._courses.next(courses);
        }
      );
  }

  deleteCourse(courseToDelete) {
    let params = new HttpParams();
    params = params.append('id', '' + courseToDelete.id);

    this.httpClient.delete(`${this.host}/courses`, {params: params})
      .subscribe((data) => {
        console.log(data);
      });

    this.loadCourses(this.start, this.count)
      .subscribe(data => {
        this._courses.next(data);
      });
  }
}
