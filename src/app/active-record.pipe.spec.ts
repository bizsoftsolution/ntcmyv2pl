import { ActiveRecordPipe } from './active-record.pipe';

describe('ActiveRecordPipe', () => {
  it('create an instance', () => {
    const pipe = new ActiveRecordPipe();
    expect(pipe).toBeTruthy();
  });
});
