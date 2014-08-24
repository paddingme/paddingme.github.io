/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
  function addIcon(el, entity) {
    var html = el.innerHTML;
    el.innerHTML = '<span style="font-family: \'icomoon-ultimate\'">' + entity + '</span>' + html;
  }
  var icons = {
      'icon-info' : '&#xe000;',
      'icon-info-2' : '&#xe001;',
      'icon-quill' : '&#xe002;',
      'icon-quill-2' : '&#xe003;',
      'icon-pen' : '&#xe004;',
      'icon-feed' : '&#xe005;',
      'icon-feed-2' : '&#xe006;',
      'icon-feed-3' : '&#xe007;',
      'icon-twitter' : '&#xe008;',
      'icon-github' : '&#xe009;',
      'icon-cc' : '&#xe00a;',
      'icon-search' : '&#xe00b;'
    },
    els = document.getElementsByTagName('*'),
    i, attr, html, c, el;
  for (i = 0; i < els.length; i += 1) {
    el = els[i];
    attr = el.getAttribute('data-icon');
    if (attr) {
      c = icons['icon-' + attr];
      if (c) {
        attr = c;
      }
      addIcon(el, attr);
    }
    c = el.className;
    c = c.match(/icon-[^\s'"]+/);
    if (c && icons[c[0]]) {
      addIcon(el, icons[c[0]]);
    }
  }
};