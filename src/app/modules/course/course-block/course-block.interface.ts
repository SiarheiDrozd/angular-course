export interface CourseBlockInterface {
  id: string;
  title: string;
  date: typeof Date;
  duration: number;
  description: string;
  controls?: object[];
}
