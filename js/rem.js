/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-10-19 21:06:19
 * @LastEditors: shengnan
 * @LastEditTime: 2020-10-19 21:11:22
 */
let htmlEL = document.documentElement;
let htmlWidth = htmlEL.clientWidth;

if(htmlWidth <= 1024) htmlWidth = 1024;
if(htmlWidth >= 1920) htmlWidth = 1920;

window.onload = function() {
  htmlEL.style.fontSize = htmlWidth / (1920 / 24);
}
window.onload();