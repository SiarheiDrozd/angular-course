import {Injectable} from '@angular/core';
import {Course} from '../../components/course/course-block/course-block.class';

@Injectable()
export class CoursesPageService {

  public courses: Course[];
  private dummyText: string;
  private defaultControls: Object[];

  constructor() {
    this.dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`;
    this.defaultControls = [
      {
        type: 'button',
        label: 'edit course',
        event: 'edit'
      },
      {
        type: 'button',
        label: 'delete',
        event: 'delete'
      }
    ];

    this.courses = this.loadCourses();
  }

  private loadCourses(): Course[] {
    return [
      new Course(
        '1',
        'video course',
        120,
        '1 Jan 1991',
        this.dummyText,
        this.defaultControls
      ),
      new Course(
        '2',
        'video course',
        15,
        '832290375902',
        this.dummyText,
        this.defaultControls
      ),
      new Course(
        '3',
        'video course',
        65,
        new Date().toString(),
        this.dummyText,
        [
          {
            type: 'button',
            label: 'some unknown event',
            event: 'someEvent'
          }
        ]
      ),
    ];
  }

  private getCourseIndex(course: Course): number {
    return this.courses.indexOf(this.getCourseById(course.id));
  }

  getCourses(): Course[] {
    this.courses = this.courses || this.loadCourses();
    return this.courses;
  }

  createCourse({id, title, duration, date, description, controls}): Course {
    return new Course(id, title, duration, date, description, controls);
  }

  addCourse(course: Course): Course[] {
    this.courses.push(course);
    return this.courses;
  }

  getCourseById(id) {
    return this.courses.find(item => item.id === id);
  }

  updateCourse(courseToUpdate) {
    this.courses = this.courses.splice(this.getCourseIndex(courseToUpdate), 1, courseToUpdate);
  }

  deleteCourse(id): Course[] {
    this.courses = this.courses.filter(element => {
      return element.id !== id;
    });

    return this.courses;
  }
}
