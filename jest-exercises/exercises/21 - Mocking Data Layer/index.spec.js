import {getEvent} from './index';

let mockApiGet = jest.fn(() => ({
  id: 1,
  title: 'Some fake title',
  description: 'Longer description',
  isPaid: true,
}));

jest.mock('./eventApi',  () => { return { get: () => mockApiGet() }});

describe('getEvent', () => {

  // note from original author: removed since I was unable to get it to unmock
  // further info from me: It is not possible to get the original module after mocking it in Jest. What jest.mock 
  // does is to replace the module with your mock.  Jest will hoist the jest.mock('foo') call on top of the 
  // call stack, so it's the first thing that happens when the test starts. This will also affect all other 
  // modules you import and that import foo.js.
  // https://stackoverflow.com/questions/54109708/how-to-unmock-a-single-instance-method-with-jest
  // SO...moved to own test file (eventApi.spec.js)
  xit('should call real api method', () => {
    const event = getEvent(123);
    expect(event).toEqual({
      id: 123,
      title: 'Real Event',
      description: 'This is the description of the real event that I made up in the eventApi',
    });
  });

  it('should return an object', () => {
    const event = getEvent(123);
    expect(event).toEqual(expect.objectContaining({
      id: 1,
      title: expect.any(String),
    }));
  });

  it('should return from cache on second request', () => {
    let firstEvent = getEvent(123);
    expect(firstEvent).toEqual(expect.objectContaining({
      id: 1,
      title: expect.any(String),
    }));

    let secondEvent = getEvent(123);
    expect(secondEvent).toBe(firstEvent);

    expect(mockApiGet).toHaveBeenCalledTimes(1);
  });
  
});
