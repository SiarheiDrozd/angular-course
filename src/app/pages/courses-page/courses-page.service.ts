import {Injectable} from '@angular/core';

import {Course} from '../../modules/course/course-block/course-block.class';
import {COURSES} from './courses-page.data';

import {Observable, BehaviorSubject} from 'rxjs/';

@Injectable()
export class CoursesPageService {

  private _courses: BehaviorSubject<Course[]> = new BehaviorSubject([]);

  constructor() {
    this.loadCourses();
  }

  get courses() {
    return this._courses.asObservable();
  }

  private loadCourses() {
    return Observable.of(COURSES)
      .subscribe(res => {
        const courses = res.map(courseData => this.createCourse(courseData));
        this._courses.next(courses);
      },
      () => console.error('Error retrieving courses')
    );
  }

  filterCourses(filter: string, searchField: string): any {
    return Observable.of(COURSES)
      .subscribe((coursesData: Course[]) => {
        let courses = this._courses.getValue();
        courses = coursesData.filter((course) => {
          const SEARCH = course[searchField].match(new RegExp(filter, 'gi'));
          return SEARCH && SEARCH.length > 0;
        });
        this._courses.next(courses);
      });
  }

  createCourse(courseData): Course {
    return new Course(
      courseData.id,
      courseData.title,
      courseData.duration,
      new Date(courseData.date),
      courseData.description,
      courseData.topRated,
    );
  }

  addCourse(course: Course) {
    return Observable.of([...COURSES].push(course)).subscribe(() => {
      const courses = this._courses.getValue();
      courses.push(course);
      this._courses.next(courses);
    });
  }

  updateCourse(courseToUpdate) {
    return Observable.of(COURSES.map((course: Course) => {
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
    return Observable.of(COURSES.filter((course: Course) => {
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
