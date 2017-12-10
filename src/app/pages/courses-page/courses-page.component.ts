import {Component, OnInit} from '@angular/core';
import {CoursesPageService} from './courses-page.service';
import {Course} from "../../modules/course/course-block/course-block.class";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})

export class CoursesPageComponent implements OnInit {
  protected courses: Course[];

  constructor(private coursesPageService: CoursesPageService) {
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courses = this.coursesPageService.getCourses();
  }

  handleCourseDelete(id) {
    this.courses = this.coursesPageService.deleteCourse(id);
  }
}
