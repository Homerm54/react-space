import * as ACTIONS from 'context/actions';
import types from 'context/types';

describe('Context / Actions Test Suit', ()=>{

  
  test('should create a Date Object with the day before', ()=>{
  
    const someDate = new Date('2020-11-30');
    const expectedDayBefore = new Date('2020-11-29');

    const dayBefore = ACTIONS.goDayBefore(someDate);

    expect(dayBefore.type).toBe(types.setDate);
    expect(dayBefore.payload.date).toEqual(expectedDayBefore);
  
  });

  test('should create a Date Object with the day after', ()=>{
  
    const someDate = new Date('2020-11-29');
    const expectedDayBefore = new Date('2020-11-30');

    const dayBefore = ACTIONS.goDayAfter(someDate);

    expect(dayBefore.type).toBe(types.setDate);
    expect(dayBefore.payload.date).toEqual(expectedDayBefore);
  
  });

  test('should create a Date Object with the day before (change month)', ()=>{
  
    const someDate = new Date('2020-11-01');
    const expectedDayBefore = new Date('2020-10-31');

    const dayBefore = ACTIONS.goDayBefore(someDate);

    expect(dayBefore.type).toBe(types.setDate);
    expect(dayBefore.payload.date).toEqual(expectedDayBefore);
  
  });

  test('should create a Date Object with the day after (change month)', ()=>{
  
    const someDate = new Date('2020-11-30');
    const expectedDayBefore = new Date('2020-12-01');

    const dayBefore = ACTIONS.goDayAfter(someDate);

    expect(dayBefore.type).toBe(types.setDate);
    expect(dayBefore.payload.date).toEqual(expectedDayBefore);
  
  });


  test('should Catch All Error Sections', ()=>{
  
    const ErrorSections = ['Fetch', 'Image', 'Form', ];

    ErrorSections.forEach( where =>{

      const result = ACTIONS.setError({ where });
      
      expect(result.type).toBe(types.setError);
      expect(result.payload.error.message).not.toBe('Unknow Error'); 
      // 'Unknow Error' is the default error, when 'where' isn't recognized
    });


    const result = ACTIONS.setError({ where: 'Random Where Unidentified' });
    
    expect(result.type).toBe(types.setError);
    expect(result.payload.error.message).toBe('Unknow Error');
  
  });
});

