

/**
 * Return the Date in a YYYY-MM-DD format. Pass reverse = true, to format it in a DD-MM-YYYY format.
 * 
 * @param {Date} date The Date to by formated
 * @param {Bool} reverse Flag to change the Date format.
 */
export default function stringifyDate(date, reverse = false) {

  let day = date.getDate();
  if (day < 10) day = '0' + day;

  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;

  let string = '';
  
  if(reverse){
    string = [day, month, date.getFullYear()].join('-');

  }else{
    string = [date.getFullYear(), month, day].join('-');
  }
  
  // console.log(string);
  return string
}



