// 참조: https://gist.github.com/gre/1650294

const _easeIn  = p => t => Math.pow(t, p);
const _easeOut = p => t => (1 - Math.abs(Math.pow(t-1, p)));
const _easeInOut = p => t => t<.5 ? _easeIn(p)(t*2)/2 : _easeOut(p)(t*2 - 1)/2+0.5;

// no easing, no acceleration
export const linear = _easeInOut(1);

// accelerating from zero velocity
export const easeIn = _easeIn(2);

// decelerating to zero velocity
export const easeOut = _easeOut(2);

// acceleration until halfway, then deceleration
export const easeInOut = _easeInOut(2);

// accelerating from zero velocity 
export const easeInCubic = _easeIn(3);

// decelerating to zero velocity 
export const easeOutCubic = _easeOut(3);

// acceleration until halfway, then deceleration 
export const easeInOutCubic = _easeInOut(3);

// accelerating from zero velocity 
export const easeInQuart = _easeIn(4);

// decelerating to zero velocity 
export const easeOutQuart = _easeOut(4);

// acceleration until halfway, then deceleration
export const easeInOutQuart = _easeInOut(4);

// accelerating from zero velocity
export const easeInQuint = _easeIn(5);

// decelerating to zero velocity
export const easeOutQuint = _easeOut(5);

// acceleration until halfway, then deceleration 
export const easeInOutQuint = _easeInOut(5);
