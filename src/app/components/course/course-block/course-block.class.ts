import {CourseBlockInterface} from './course-block.interface';

export class Course implements CourseBlockInterface {
  public id: string;
  public title: string;
  public duration: number;
  public date: string;
  public description: string;
  public controls?: object[];

  constructor(id: string, title: string, duration: number, date: string, description: string, controls?: object[]) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.date = date;
    this.description = description;
    this.controls = controls;
  }
}
