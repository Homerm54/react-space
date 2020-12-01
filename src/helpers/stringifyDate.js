

/**
 * Return the Date in a YYYY-MM-DD format. 
 * Pass reverse = true, to format it in a DD-MM-YYYY format.
 * 
 * @param {Date} date The Date to by formated. Required*
 * @param {Bool} reverse Flag to change the Date format.
 */
export default function stringifyDate(date, reverse = false) {

  if(!date) throw new Error('A Date Object must be provided');

  
  
  let [month, theDate, year] = date.toLocaleDateString("en-US").split("/")
  
  
  if (theDate < 10) theDate = '0' + theDate;
  if (month < 10) month = '0' + month;
  
  if(reverse){
    return [theDate, month, year].join('-');

  }else{
    return [year, month, theDate].join('-');
  }
  
}



