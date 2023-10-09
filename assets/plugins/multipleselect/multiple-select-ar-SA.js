(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Multiple Select ar-SA translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['ar-SA'] = {
    formatSelectAll: function formatSelectAll() {
      return '[اختيار الكل]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'تم اختيار الكل';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' من ' + total + ' تم اختياره';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'لا يوجد نتائج للبحث';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ar-SA']);

}));
