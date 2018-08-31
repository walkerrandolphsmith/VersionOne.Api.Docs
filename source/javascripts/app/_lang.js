(function (global) {
  'use strict';

  var LANG = 'lang';
  var HOST = 'host';
  var INSTANCE = 'instance';
  var TOKEN = 'token';

  var DEFAULT_HOST = 'V1Host';
  var DEFAULT_INSTNACE = 'V1Instance';
  var DEFAULT_TOKEN = '<access-token>';

  var languages = [];
  var host = DEFAULT_HOST;
  var instance = DEFAULT_INSTNACE;
  var token = DEFAULT_TOKEN;

  global.setupLanguages = setupLanguages;
  global.activateLanguage = activateLanguage;
  global.setupSettings = setupSettings;
  global.updateSettings = updateSettings;

  function activateLanguage(language) {
    if (!language || language === "") return;

    $(".lang-selector a").removeClass('active');
    $(".lang-selector a[data-language-name='" + language + "']").addClass('active');
    for (var i = 0; i < languages.length; i++) {
      $(".code-wrapper." + languages[i]).hide();
      $(".lang-specific." + languages[i]).hide();
    }
    $(".code-wrapper." + language).show();
    $(".lang-specific." + language).show();

    $(".response-wrapper").show();

    global.toc.calculateHeights();

    if ($(window.location.hash).get(0)) {
      $(window.location.hash).get(0).scrollIntoView(true);
    }
  }

  function parseURL(str) {
    if (typeof str !== 'string') {
      return {};
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
      return {};
    }

    return str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];

      key = decodeURIComponent(key);
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }

      return ret;
    }, {});
  };

  function stringifyURL(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
      var val = obj[key];

      if (Array.isArray(val)) {
        return val.sort().map(function (val2) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
        }).join('&');
      }

      return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
  };

  function isLangKnow(lang) {
    return Boolean(languages.find(function (language) { return language === lang }))
  }

  function getQueryParam(param) {
    if (location.search.length >= 1) {
      var value = parseURL(location.search)[param]
      if (value) {
        return value;
      }
      var firstTerm = location.search.substr(1);
      var isLangParam = param === LANG;

      if (isLangParam && isLangKnow(firstTerm)) {
        return firstTerm
      }
    }
    return false;
  }

  function generateNewQueryString(param, value) {
    var url = parseURL(location.search);

    var params = Object.keys(url);
    var hasOneParam = params.length === 1;
    var hasShorthandLang = hasOneParam && isLangKnow(params[0]);

    if (param === LANG && hasShorthandLang) return value;

    if (hasShorthandLang) {
      url = {};
      url[LANG] = params[0];
      url[param] = value;
      return stringifyURL(url);
    }

    url[param] = value;

    return stringifyURL(url);
  }

  function pushURL(param, value) {
    if (!history) { return; }
    var hash = window.location.hash;
    if (hash) {
      hash = hash.replace(/^#+/, '');
    }

    var params = generateNewQueryString(param, value);

    var url = "?" + params + "#" + hash;

    history.pushState({}, '', url);

    localStorage.setItem(param, value);
  }

  function setupLanguages(l) {
    var defaultLanguage = localStorage.getItem(LANG);

    languages = l;

    var presetLanguage = getQueryParam(LANG);
    if (presetLanguage) {
      activateLanguage(presetLanguage);

      localStorage.setItem(LANG, presetLanguage);
    } else if ((defaultLanguage !== null) && (jQuery.inArray(defaultLanguage, languages) != -1)) {
      // the language was the last selected one saved in localstorage, so use that language!
      activateLanguage(defaultLanguage);
    } else {
      // no language selected, so use the default
      activateLanguage(languages[0]);
    }
  }

  function getDefaultSetting(setting, defaultValue) {
    var fromStorage = localStorage.getItem(setting);
    var fromQueryParam = getQueryParam(setting);

    return fromQueryParam || fromStorage || defaultValue;
  }

  function setupSettings() {
    var newHost = getDefaultSetting(HOST, DEFAULT_HOST);
    var newInstance = getDefaultSetting(INSTANCE, DEFAULT_INSTNACE);
    var newToken = getDefaultSetting(TOKEN, DEFAULT_TOKEN);

    updateSettings($('.content')[0], newHost, newInstance, newToken);
  }

  function replaceTextNodes(node, transform) {
    node.childNodes.forEach(function (el) {
      var isTextNode = el.nodeType === 3;
      if (!isTextNode) return replaceTextNodes(el, transform);
      el.nodeValue = transform(el.nodeValue)
    });
  }

  function updateSettings(rootElm, newHost, newInstance, newToken) {
    pushURL(HOST, newHost);
    pushURL(INSTANCE, newInstance);
    localStorage.setItem(TOKEN, newToken);

    function transform(string) {
      return string.replace(host, newHost)
        .replace(instance, newInstance)
        .replace(token, newToken);
    }

    replaceTextNodes(rootElm, transform);

    $('#host').val(newHost)
    $('#instance').val(newInstance)
    $('#token').val(newToken)

    $('.host').html(newHost)
    $('.instance').html(newInstance)
    $('.token').html(newToken)

    host = newHost;
    instance = newInstance;
    token = newToken;
  }

  $(function () {
    var $button = $('.edit-instance, .here');
    var $modal = $('.my-info-modal');
    var $scrim = $('.scrim');
    var $host = $('#host');

    function showModal() {
      $modal.show();
      $scrim.show();
      $host.focus();
    }

    function hideModal() {
      $modal.hide();
      $scrim.hide();
    }

    hideModal();

    $button.on('click', showModal);
    $scrim.on('click', hideModal);

    function copy(event) {
      var $copier = $(event.target);
      var $pre = $copier.parent().find('pre');
      selectText($pre[0]);
      try {
        document.execCommand('copy');
      }
      catch (err) {
        console.log('err', err);
      }
    }

    function selectText(element) {
      var doc = document;
      var text = element;
      var range;
      var selection;

      if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    $(".fa-copy").click(copy);

    $(".lang-selector a").on("click", function () {
      var language = $(this).data("language-name");
      pushURL(LANG, language);
      activateLanguage(language);
      return false;
    });
    var rootElm = $('.content')[0];

    window.onpopstate = function () {
      activateLanguage(getQueryParam(LANG));

      var newHost = getQueryParam(HOST) || DEFAULT_HOST;
      var newInstance = getQueryParam(INSTANCE) || DEFAULT_INSTNACE;
      var newToken = localStorage.getItem(TOKEN) || DEFAULT_TOKEN;

      updateSettings(rootElm, newHost, newInstance, newToken);
    };

    function saveSettings() {
      var newHost = $host.val() || DEFAULT_HOST;
      var newInstance = $('#instance').val() || DEFAULT_INSTNACE;
      var newToken = $('#token').val() || DEFAULT_TOKEN;

      updateSettings(rootElm, newHost, newInstance, newToken);
      hideModal();
    }

    $('.save-settings').on('click', saveSettings);

    $(window).on('keypress', function (event) {
      if (event.which === 13) saveSettings();
    });
  });

})(window);