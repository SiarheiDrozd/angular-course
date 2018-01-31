import {CourseBlockInterface} from './course-block.interface';

export class Course implements CourseBlockInterface {
  public id: string;
  public title: string;
  public duration: number;
  public date: Date;
  public description: string;
  public isTopRated?: boolean;

  constructor(obj?) {
    if (obj) {
      this.id = obj.id;
      this.title = obj.title;
      this.duration = obj.duration;
      this.date = new Date(obj.date.toString());
      this.description = obj.description;
      this.isTopRated = obj.isTopRated || false;
    }
  }
}
