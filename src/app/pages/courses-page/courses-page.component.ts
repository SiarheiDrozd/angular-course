import {Component, OnInit} from '@angular/core';
import {CoursesPageService} from './courses-page.service';
import {Course} from "../../modules/course/course-block/course-block.class";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less']
})

export class CoursesPageComponent implements OnInit {
  protected courses: Course[];
  private showModal: boolean;
  private modalHeading: string;
  private modalMessage: string;
  private currentCourseId: string;

  constructor(private coursesPageService: CoursesPageService) {
  }

  ngOnInit() {
    this.showModal = false;
    this.modalHeading = '';
    this.modalMessage = '';
    this.getCourses();
  }

  getCourses() {
    this.courses = this.coursesPageService.getCourses();
  }

  handleCourseDelete(id) {
    this.currentCourseId = id;
    this.modalHeading = 'Do you really want to delete this course?';
    this.modalMessage = this.coursesPageService.getCourseById(id).title + ' ' + id;
    this.showModal = true;
  }

  handleModalResult(result: boolean) {
    this.showModal = false;
    if(result) {
      this.courses = this.coursesPageService.deleteCourse(this.currentCourseId);
    }
  }

  isFreshCourse(course): boolean {
    let today = new Date(),
      courseDate = course.date;
    return (courseDate < today) && (courseDate >= new Date().setDate(today.getDate() - 14));
  }

  isUpcommingCourse(course): boolean {
    let today = new Date(),
      courseDate = course.date;
    return courseDate > today;
  }

}
