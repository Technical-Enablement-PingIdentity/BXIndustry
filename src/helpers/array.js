/**
 * Helper gets array of items and value, which should this item has. By default keyName is "id"
 * @param {Array} arr array of items
 * @param {*} val Value, which should be contained by item
 * @param {String} key Name of key, which should contain value
 * @returns {Object} Object with key value equal value from props
 */

export function findInArrayBy(arr, val, key = 'id') {
  return arr.find(function (item) {
    return item[key] === val;
  });
}

/**
 * Check if propery is array
 * @param {*} obj any data type
 * @returns {Boolean} 
 */

export function isArray(obj) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
  return Array.isArray(obj);
}