import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Course} from '../../modules/course/course-block/course-block.class';

import {Observable} from 'rxjs/';

@Injectable()
export class CoursesPageService {

  private _courses;
  private readonly host = 'http://localhost:3004';

  constructor(private httpClient: HttpClient) {
    this._courses = this.loadCourses();
  }

  get courses() {
    return this._courses;
  }

  private loadCourses() {
    return this.httpClient.get<Course[]>(`${this.host}/courses`);
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
    return Observable.of(this._courses.filter((course: Course) => {
      return courseToDelete.id !== course.id;
    }))
      .subscribe(() => {
          const courses = this._courses.getValue();
          const index = courses.findIndex((course) => course.id === courseToDelete.id);
          courses.splice(index, 1);
          this._courses.next(courses);
        }
      );
  }
}
