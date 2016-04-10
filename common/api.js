'use strict';

import co from 'co';

export const httpGet = (url, options) => {
  return co(function *() {
    console.log(`HTTP.GET: [${url}]`);

    let res = yield fetch(url, {
      method: 'GET',
      ...options,
    });

    res.text = yield res.text();

    console.log(`HTTP.GET.RESULT: ${res}, TEXT: ${res.text}`);

    return res;
  }).catch(e => {
    console.log(`ERROR: HTTP.GET: ${url}`, e);
  });
};

export const httpPost = (url, options) => {
  return co(function *() {
    console.log(`HTTP.POST: [${url}]`);

    let res = yield fetch(url, {
      method: 'POST',
      ...options,
    });

    res.text = yield res.text();

    console.log(`HTTP.POST.RESULT: ${res}, TEXT: ${res.text}`);

    return res;
  }).catch(e => {
    console.log(`ERROR: HTTP.POST: ${url}`, e);
  });
};
