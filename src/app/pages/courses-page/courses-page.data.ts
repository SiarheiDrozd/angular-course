import {Course} from '../../modules/course/course-block/course-block.class';

const DUMMY_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`;
const DEFAULT_CONTROLLS = [
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

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'video course',
    duration: 120,
    date: '1 Jan 1991',
    description: DUMMY_TEXT,
    controls: DEFAULT_CONTROLLS
  },
  {
    id: '2',
    title: 'video course',
    duration: 15,
    date: '832290375902',
    description: DUMMY_TEXT,
    controls: DEFAULT_CONTROLLS
  },
  {
    id: '3',
    title: 'video course',
    duration: 65,
    date: new Date().toString(),
    description: DUMMY_TEXT,
    controls: DEFAULT_CONTROLLS
  },
];
