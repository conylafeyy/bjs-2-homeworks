function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    let hash = args.toString();
    let idx = cache.findIndex((item) => item.hash === hash);

    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }

    let result = func.call(this, ...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(f, ms) {
  let timeout;

  return function (...args) {
    if (!timeout) {
      f.apply(this, args);
    }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      f.apply(this, args);
    }, ms);
  };

}

function debounceDecorator2(f) {
  let timeout;

  function wrapper(...args) {
    wrapper.count += 1;
    if (!timeout) {
      f.apply(this, args);
    }
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      f.apply(this, args);
    }, ms);
  };

  wrapper.count = 0;
  return wrapper
}
