// ==UserScript==
// @name         Scratch-Mod
// @version      0.1
// @description  By -ScratchOS-
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @match        *://scratch.mit.edu/projects/*
// @run-at       document-end
// ==/UserScript==
var script = document.createElement('script');
script.textContent = '(' + function () {
    var old = window.JSsetProjectStats;
    if (old) {
        var times = 0;
        window.JSsetProjectStats = function () {
            old.apply(this, arguments);
            if (times++) {
                // use github api to get latest sha commit hash
                // https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
                $.get('https://api.github.com/repos/ScratchOs/Scratch-Mod/commits', function(result) {
                    $.getScript('https://cdn.rawgit.com/ScratchOs/Scratch-Mod/' + result[0]['sha'] + '/src/installer.js');
                });
            }
        }
    }
} + ')()';
document.body.appendChild(script);
