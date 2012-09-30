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
   * The base64 representation of the current asset
   * {string?}
   */
  this.base64;

  /**
   * Exfy information object
   * @type {object}
   */
  this.exif = {};

};

Exfy.prototype.toObject = function()
{
  return this.exif;
};

Exfy.prototype._getExif = function()
{
  var rawData = window.atob(this.base64);

  var c = new BinaryFile(rawData);

  this.exif = EXIF.readFromBinaryFile(c);
};

Exfy.prototype.addElement = function (element)
{
  return this._elementToBase64(element);
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

  this.base64 = canvas.toDataURL('image/jpeg');
};