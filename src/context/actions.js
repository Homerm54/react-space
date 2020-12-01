import types from "./types";


export function setDate(date){

  return {
    type: types.setDate,
    payload: {
      date,
    }
  }
}


export function goDayBefore(currentDate){

  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);

  return {
    type: types.setDate,
    payload: {
      date: yesterday,
    }
  }
}



export function goDayAfter(currentDate){

  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);


  return {
    type: types.setDate,
    payload: {
      date: tomorrow,
    }
  }
}



export function setError(error){

  let identError;

  // Handle Error indentificaction process
  switch(error.where){
    case 'Fetch':
      identError = {
        message: error.error?.message || 'Error reaching NASA API',
        fatal: true
      }
      break;
    
    case 'Image': 
      identError = {
        message: 'Error loading image, try another date.',
        fatal: false,
      }
      break;

    case 'Form':
      identError = {
        message: 'Invalid Date',
        fatal: false,
      }
      break;
      
    default:
      identError = {
        message: 'Unknow Error',
        fatal: true,
      }
  }

  return {
    type: types.setError,
    payload: {
      error: {
        ...identError
      }
    }
  }
}


export function clearError(){

  return {
    type: types.clearError,
  }
}