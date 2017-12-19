export interface CourseBlockInterface {
  id: string;
  title: string;
  date: Date;
  duration: number;
  description: string;
  controls?: object[];
}
