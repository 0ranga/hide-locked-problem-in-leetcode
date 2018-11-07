// ==UserScript==
// @name         Hide Locked Problems in LeetCode
// @namespace    https://github.com/0ranga/hide-locked-problem-in-leetcode
// @version      0.1
// @description  Hide Locked Problems in LeetCode. Originally written by the author @csvwolf and then posted on the monkey by @Nuula.
// @author       Nuula
// @match        https://leetcode.com/*
// @grant        none
// ==/UserScript==

(function() {
  let target = null;

  const observer = new MutationObserver((mutations) => {
    clearTimeout(target);
    if (document.querySelector('.table-responsive')) {
      target = setTimeout(() => {
        const trs = document.querySelectorAll('.reactable-data tr');
        for (let i = 0; i < trs.length; i++) {
          if (trs[i].querySelector('.fa-lock')) trs[i].style.display = 'none';
        }
      }, 100);
    }
  });

  const config = {
    childList: true,
    subtree: true
  };

  observer.observe(document.querySelector('body'), config);
})();