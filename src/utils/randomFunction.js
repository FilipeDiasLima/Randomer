export function randomNumberFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function randomOptionFunction(arr) {
  let id = Math.floor(Math.random() * arr.length);

  return arr[id];
}

export function imageFingers(number) {
  if(number === 1) {
    return '/one-finger.png'
  }
  if(number === 2) {
    return '/two-fingers.png'
  }
  if(number === 3) {
    return '/three-fingers.png'
  }
  if(number === 4) {
    return '/four-fingers.png'
  }
  if(number === 5) {
    return '/five-fingers.png'
  }
}