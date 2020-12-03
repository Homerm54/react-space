import stringifyDate from 'helpers/stringifyDate';


describe('Helpers Test Suit', ()=>{

  const date = new Date(2020, 8, 1); // Month 0 indexed

  test('should return a "YYY-MM-DD" formated string of a Date', ()=>{
  
    const formatedDate = stringifyDate(date);
    expect(formatedDate).toBe('2020-09-01');
  });


  test('should return a "YYY-MM-DD" formated string of a Date', ()=>{
  
    const formatedDate = stringifyDate(date, true);
    expect(formatedDate).toBe('01-09-2020');
  });

  test('should throw an Error if no Date passed"', ()=>{
  
    expect(stringifyDate).toThrow();
  });

});


