import {getEvent} from './index';

describe('getEvent', () => {
    // removed since I was unable to get it to unmock
    it('should call real api method', () => {
      const event = getEvent(123);
      expect(event).toEqual({
        id: 123,
        title: 'Real Event',
        description: 'This is the description of the real event that I made up in the eventApi',
      });
    });

  });