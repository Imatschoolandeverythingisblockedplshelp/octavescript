// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2023-12-13
// @description  try to take over the world!
// @author       You
// @match        https://multiplayerpiano.org/*
// @match        https://docs.google.com/*
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==
/* globals jQuery, $ */
var script = document.createElement("script");
script.setAttribute("type", "application/javascript");

function octaves(){
$(document).keydown(function(e) {
           if(e.keyCode == 81) {
            var p = jQuery.Event('keydown');
            p.keyCode = 90;
            $('body').trigger(p);
          setInterval(octaves, 0)
           }

        }
    )};
