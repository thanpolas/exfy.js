/*
 * jpeg-headers
 * https://github.com/thanpolas/jpeg-headers.js
 *
 * Copyright (c) 2012 Thanasis Polychronakis
 * Licensed under the MIT, GPL licenses.
 */

goog.provide('Exfy');

var Exfy = function()
{

  /**
   * @type {string?} The base64 representation of the current asset.
   */
  this.base64;

  /**
   * @type {string?} The base64 representation without the image headers
   */
  this.base64Clean;

  /**
   * Exfy information object
   * @type {object}
   */
  this.exif = {};

};

/**
 * @const {regex} The image headers we want to strip from a base64 string
 */
Exfy.BASE64_IMAGE_HEADERS = /data:image\/jpeg;base64,/;

Exfy.prototype.toObject = function()
{
  return this.exif;
};

Exfy.prototype._getExif = function()
{
  var rawData = window.atob(this.base64Clean);

  var c = new BinaryFile(rawData);

  this.exif = EXIF.readFromBinaryFile(c);
};

Exfy.prototype.addBase64 = function(base64)
{
  this.base64 = base64;
  this.base64Clean = this.base64.replace(Exfy.BASE64_IMAGE_HEADERS, '');
  this._getExif();
};


Exfy.prototype.addElement = function (element)
{
  this.base64 = this._elementToBase64(element);
  this.base64Clean = this.base64.replace(Exfy.BASE64_IMAGE_HEADERS, '');
  this._getExif();
};

/**
 * Convert a DOM (Image) element to BASE64
 *
 * @param   {document.element} element An image element.
 * @return  {string} base64 representation
 * @private
 */
Exfy.prototype._elementToBase64 = function(element)
{
  var canvas = document.createElement('canvas');
  canvas.width = element.width;
  canvas.height = element.height;
  var context = canvas.getContext('2d');

  context.drawImage(element, 0,0);

  return  canvas.toDataURL('image/jpeg');
};