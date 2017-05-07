import * as easingFn from './easing';

function noop () {}

const getPrefixed = (name) => window['webkit' + name] || window['moz' + name] || window['ms' + name];
const requestAnimationFrame = window.requestAnimationFrame
  || getPrefixed('RequestAnimationFrame')
  || ((callback) => setTimeout(callback, 1000 / 60));
const cancelAnimationFrame = window.cancelAnimationFrame
  || getPrefixed('RequestAnimationFrame')
  || ((timerId) => window.clearTimeout(timerId));

export function animate(from, to, {
  duration = 1000,
  ease = 'easeInOut',
  onFrame = noop,
  onComplete = noop
} = {}) {
  const origin = (() => {
    var value = {};
    let e;

    for (e in to) {
      (from[e] != null) && (value[e] = from[e]);
    }
    return value;
  })();
  let runner = (resolve, start) => {
    return function tick() {
      const elapsed = (new Date() - start);
      const progress = Math.min(1, (elapsed / duration) || 0);
      let e;

      for (e in origin) {
        from[e] = ((to[e] - origin[e]) * ease(progress)) + origin[e];
      }

      onFrame(from, to, origin);
      timeoutId = requestAnimationFrame(tick);

      if (progress >= 1) {
        cancelAnimationFrame(timeoutId);
        resolve();
        onComplete();
      }
    };
  };
  let timeoutId = 0;

  ease = easingFn[ease] || easingFn.linear;

  return {
    run() {
      const start = new Date();

      return new Promise(resolve => runner(resolve, start)());
    },
    cancel() {
      cancelAnimationFrame(timeoutId);
    }
  };
}
