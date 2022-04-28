/**
 * Helper provides an opportunity to transform image name from settings.json to image path
 * @param {String} verticalFolderName vertical folder name which are in the pages folder
 * @param {String} image file name or url from settings.json
 * @returns {String} internal or external image path
 */

export function getImagePath(verticalFolderName, image) {
  if (!image) {
    return '';
  }
  
  if ((/(http|https)/).test(image)) {
    return image
  }

  return require(`@Pages/${verticalFolderName}/img/${image}`).default
}


/**
 * @param {Object} data which includes title, favicon and appleTouchIcon. Helper is used
 * for setuping base vertical data
 */

export function setHeadData({ title, favicon, appleTouchIcon }) {
  document.title = title;
  document.getElementById("favicon").href = favicon;
  document.getElementById("apple-touch-icon").href = appleTouchIcon;
}
