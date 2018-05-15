/**
 * Something to do with routing
 * @param { object } obj
 * @param { string } url
 * @return { object } history object
 */
export const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);
