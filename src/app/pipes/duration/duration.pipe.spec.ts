import { DurationPipe } from './duration.pipe';

describe('MinutesParsePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
