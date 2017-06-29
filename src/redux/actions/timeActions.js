export function getCurrentTime(date) {
  const newTime = date;
  return {
      type: 'GET_CURRENT_TIME', payload: newTime
  }
}

export function toggleView() {
  return {
    type: 'TOGGLE_VIEW', 
  }
}
