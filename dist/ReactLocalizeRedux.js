(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactLocalizeRedux"] = factory(require("react"));
	else
		root["ReactLocalizeRedux"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalizeContext = exports.getContextPropsFromState = undefined;

var _createReactContext = __webpack_require__(14);

var _createReactContext2 = _interopRequireDefault(_createReactContext);

var _reselect = __webpack_require__(8);

var _localize = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dispatchInitialize = function dispatchInitialize(dispatch) {
  return function (payload) {
    return dispatch((0, _localize.initialize)(payload));
  };
};

var dispatchAddTranslation = function dispatchAddTranslation(dispatch) {
  return function (translation) {
    return dispatch((0, _localize.addTranslation)(translation));
  };
};

var dispatchAddTranslationForLanguage = function dispatchAddTranslationForLanguage(dispatch) {
  return function (translation, language) {
    return dispatch((0, _localize.addTranslationForLanguage)(translation, language));
  };
};

var dispatchSetActiveLanguage = function dispatchSetActiveLanguage(dispatch) {
  return function (languageCode) {
    return dispatch((0, _localize.setActiveLanguage)(languageCode));
  };
};

var getContextPropsFromState = exports.getContextPropsFromState = function getContextPropsFromState(dispatch) {
  return (0, _reselect.createSelector)(_localize.getTranslate, _localize.getLanguages, _localize.getActiveLanguage, _localize.getOptions, function (translate, languages, activeLanguage, options) {
    var defaultLanguage = options.defaultLanguage || languages[0] && languages[0].code;
    var renderToStaticMarkup = options.renderToStaticMarkup;
    var ignoreTranslateChildren = options.ignoreTranslateChildren !== undefined ? options.ignoreTranslateChildren : _localize.defaultTranslateOptions.ignoreTranslateChildren;

    return {
      translate: translate,
      languages: languages,
      defaultLanguage: defaultLanguage,
      activeLanguage: activeLanguage,
      initialize: dispatchInitialize(dispatch),
      addTranslation: dispatchAddTranslation(dispatch),
      addTranslationForLanguage: dispatchAddTranslationForLanguage(dispatch),
      setActiveLanguage: dispatchSetActiveLanguage(dispatch),
      renderToStaticMarkup: renderToStaticMarkup,
      ignoreTranslateChildren: ignoreTranslateChildren
    };
  });
};

var defaultLocalizeState = (0, _localize.localizeReducer)(undefined, {});
var defaultContext = getContextPropsFromState(function () {})(defaultLocalizeState);

var LocalizeContext = exports.LocalizeContext = (0, _createReactContext2.default)(defaultContext);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslate = exports.getTranslationsForSpecificLanguage = exports.getTranslationsForActiveLanguage = exports.translationsEqualSelector = exports.getActiveLanguage = exports.getOptions = exports.getLanguages = exports.getTranslations = exports.setActiveLanguage = exports.addTranslationForLanguage = exports.addTranslation = exports.initialize = exports.localizeReducer = exports.defaultTranslateOptions = exports.TRANSLATE = exports.SET_ACTIVE_LANGUAGE = exports.ADD_TRANSLATION_FOR_LANGUAGE = exports.ADD_TRANSLATION = exports.INITIALIZE = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.languages = languages;
exports.translations = translations;
exports.options = options;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _flat = __webpack_require__(15);

var _reselect = __webpack_require__(8);

var _utils = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * ACTIONS
 */


/**
 * TYPES
 */


// This is to get around the whole default options issue with Flow
// I tried using the $Diff approach, but with no luck so for now stuck with this terd.
// Because sometimes you just want flow to shut up!
var INITIALIZE = exports.INITIALIZE = '@@localize/INITIALIZE';
var ADD_TRANSLATION = exports.ADD_TRANSLATION = '@@localize/ADD_TRANSLATION';
var ADD_TRANSLATION_FOR_LANGUAGE = exports.ADD_TRANSLATION_FOR_LANGUAGE = '@@localize/ADD_TRANSLATION_FOR_LANGUAGE';
var SET_ACTIVE_LANGUAGE = exports.SET_ACTIVE_LANGUAGE = '@@localize/SET_ACTIVE_LANGUAGE';
var TRANSLATE = exports.TRANSLATE = '@@localize/TRANSLATE';

/**
 * REDUCERS
 */
function languages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case INITIALIZE:
      var _options = action.payload.options || {};
      return action.payload.languages.map(function (language, index) {
        var isActive = function isActive(code) {
          return _options.defaultLanguage !== undefined ? code === _options.defaultLanguage : index === 0;
        };
        // check if it's using array of Language objects, or array of language codes
        return typeof language === 'string' ? { code: language, active: isActive(language) // language codes
        } : _extends({}, language, { active: isActive(language.code) }); // language objects
      });
    case SET_ACTIVE_LANGUAGE:
      return state.map(function (language) {
        return language.code === action.payload.languageCode ? _extends({}, language, { active: true }) : _extends({}, language, { active: false });
      });
    default:
      return state;
  }
}

function translations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var flattenedTranslations = void 0;
  var translationWithTransform = void 0;

  switch (action.type) {
    case INITIALIZE:
      if (!action.payload.translation) {
        return state;
      }

      flattenedTranslations = (0, _flat.flatten)(action.payload.translation, {
        safe: true
      });
      var _options2 = action.payload.options || {};
      var firstLanguage = typeof action.payload.languages[0] === 'string' ? action.payload.languages[0] : action.payload.languages[0].code;
      var _defaultLanguage = _options2.defaultLanguage || firstLanguage;
      var isMultiLanguageTranslation = Object.keys(flattenedTranslations).some(function (item) {
        return Array.isArray(flattenedTranslations[item]);
      });

      // add translation based on whether it is single vs multi language translation data
      var newTranslation = isMultiLanguageTranslation ? flattenedTranslations : (0, _utils.getSingleToMultilanguageTranslation)(_defaultLanguage, action.languageCodes, flattenedTranslations, state);

      return _extends({}, state, newTranslation);
    case ADD_TRANSLATION:
      translationWithTransform = action.payload.translationOptions && action.payload.translationOptions.translationTransform !== undefined ? action.payload.translationOptions.translationTransform(action.payload.translation || {}, action.languageCodes) : action.payload.translation;
      return _extends({}, state, (0, _flat.flatten)(translationWithTransform, { safe: true }));
    case ADD_TRANSLATION_FOR_LANGUAGE:
      flattenedTranslations = (0, _flat.flatten)(action.payload.translation, {
        safe: true
      });
      return _extends({}, state, (0, _utils.getSingleToMultilanguageTranslation)(action.payload.language, action.languageCodes, flattenedTranslations, state));
    default:
      return state;
  }
}

function options() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultTranslateOptions;
  var action = arguments[1];

  switch (action.type) {
    case INITIALIZE:
      var _options3 = action.payload.options || {};
      var _defaultLanguage2 = _options3.defaultLanguage || action.languageCodes[0];
      return _extends({}, state, (0, _utils.validateOptions)(_options3), { defaultLanguage: _defaultLanguage2 });
    default:
      return state;
  }
}

var defaultTranslateOptions = exports.defaultTranslateOptions = {
  renderToStaticMarkup: false,
  renderInnerHtml: false,
  ignoreTranslateChildren: false,
  defaultLanguage: '',
  onMissingTranslation: function onMissingTranslation(_ref) {
    var translationId = _ref.translationId,
        languageCode = _ref.languageCode;
    return 'Missing translationId: ${ translationId } for language: ${ languageCode }';
  }
};

var initialState = {
  languages: [],
  translations: {},
  options: defaultTranslateOptions
};

var localizeReducer = exports.localizeReducer = function localizeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  // execute the languages reducer first as we need access to those values for other reducers
  var languagesState = languages(state.languages, action);
  var languageCodes = languagesState.map(function (language) {
    return language.code;
  });

  return {
    languages: languagesState,
    translations: translations(state.translations, _extends({}, action, {
      languageCodes: languageCodes
    })),
    options: options(state.options, _extends({}, action, { languageCodes: languageCodes }))
  };
};

/**
 * ACTION CREATORS
 */
var initialize = exports.initialize = function initialize(payload) {
  return {
    type: INITIALIZE,
    payload: payload
  };
};

var addTranslation = exports.addTranslation = function addTranslation(translation, options) {
  return {
    type: ADD_TRANSLATION,
    payload: {
      translation: translation,
      translationOptions: options
    }
  };
};

var addTranslationForLanguage = exports.addTranslationForLanguage = function addTranslationForLanguage(translation, language) {
  return {
    type: ADD_TRANSLATION_FOR_LANGUAGE,
    payload: { translation: translation, language: language }
  };
};

var setActiveLanguage = exports.setActiveLanguage = function setActiveLanguage(languageCode) {
  return {
    type: SET_ACTIVE_LANGUAGE,
    payload: { languageCode: languageCode }
  };
};

/**
 * SELECTORS
 */
var getTranslations = exports.getTranslations = function getTranslations(state) {
  return state.translations;
};

var getLanguages = exports.getLanguages = function getLanguages(state) {
  return state.languages;
};

var getOptions = exports.getOptions = function getOptions(state) {
  return state.options;
};

var getActiveLanguage = exports.getActiveLanguage = function getActiveLanguage(state) {
  var languages = getLanguages(state);
  return languages.filter(function (language) {
    return language.active === true;
  })[0];
};

/**
 * A custom equality checker that checker that compares an objects keys and values instead of === comparison
 * e.g. {name: 'Ted', sport: 'hockey'} would result in 'name,sport - Ted,hocker' which would be used for comparison
 *
 * NOTE: This works with activeLanguage, languages, and translations data types.
 * If a new data type is added to selector this would need to be updated to accomodate
 */
var translationsEqualSelector = exports.translationsEqualSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, function (prev, cur) {
  var prevKeys = (typeof prev === 'undefined' ? 'undefined' : _typeof(prev)) === 'object' ? Object.keys(prev).toString() : undefined;
  var curKeys = (typeof cur === 'undefined' ? 'undefined' : _typeof(cur)) === 'object' ? Object.keys(cur).toString() : undefined;

  var prevValues = (typeof prev === 'undefined' ? 'undefined' : _typeof(prev)) === 'object' ? (0, _utils.objectValuesToString)(prev) : undefined;
  var curValues = (typeof cur === 'undefined' ? 'undefined' : _typeof(cur)) === 'object' ? (0, _utils.objectValuesToString)(cur) : undefined;

  var prevCacheValue = prevKeys !== undefined && prevValues !== undefined ? prevKeys + ' - ' + prevValues : prev;

  var curCacheValue = curKeys !== undefined && curValues !== undefined ? curKeys + ' - ' + curValues : cur;

  return prevCacheValue === curCacheValue;
});

var getTranslationsForActiveLanguage = exports.getTranslationsForActiveLanguage = translationsEqualSelector(getActiveLanguage, getLanguages, getTranslations, _utils.getTranslationsForLanguage);

var getTranslationsForSpecificLanguage = exports.getTranslationsForSpecificLanguage = translationsEqualSelector(getLanguages, getTranslations, function (languages, translations) {
  return (0, _reselect.defaultMemoize)(function (languageCode) {
    return (0, _utils.getTranslationsForLanguage)({ code: languageCode, active: false }, languages, translations);
  });
});

var getTranslate = (0, _reselect.createSelector)(getTranslationsForActiveLanguage, getTranslationsForSpecificLanguage, getActiveLanguage, getOptions, function (translationsForActiveLanguage, getTranslationsForLanguage, activeLanguage, initializeOptions) {
  return function (value) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var translateOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var defaultLanguage = initializeOptions.defaultLanguage,
        defaultOptions = _objectWithoutProperties(initializeOptions, ['defaultLanguage']);

    var overrideLanguage = translateOptions.language;

    var translations = overrideLanguage !== undefined ? getTranslationsForLanguage(overrideLanguage) : translationsForActiveLanguage;

    var defaultTranslations = activeLanguage && activeLanguage.code === defaultLanguage ? translationsForActiveLanguage : getTranslationsForLanguage(defaultLanguage);

    var languageCode = overrideLanguage !== undefined ? overrideLanguage : activeLanguage && activeLanguage.code;

    var mergedOptions = _extends({}, defaultOptions, translateOptions);

    var getTranslation = function getTranslation(translationId) {
      var hasValidTranslation = translations[translationId] !== undefined;
      var hasValidDefaultTranslation = defaultTranslations[translationId] !== undefined;

      var defaultTranslation = hasValidDefaultTranslation ? (0, _utils.getLocalizedElement)({
        translation: defaultTranslations[translationId],
        data: data,
        renderInnerHtml: mergedOptions.renderInnerHtml
      }) : "No default translation found! Ensure you've added translations for your default langauge.";

      // if translation is not valid then generate the on missing translation message in it's place
      var translation = hasValidTranslation ? translations[translationId] : mergedOptions.onMissingTranslation({
        translationId: translationId,
        languageCode: languageCode,
        defaultTranslation: defaultTranslation
      });

      // if translations are missing than ovrride data to include translationId, languageCode
      // as these will be needed to render missing translations message
      var translationData = hasValidTranslation ? data : { translationId: translationId, languageCode: languageCode };

      return (0, _utils.getLocalizedElement)({
        translation: translation,
        data: translationData,
        languageCode: languageCode,
        renderInnerHtml: mergedOptions.renderInnerHtml
      });
    };

    if (typeof value === 'string') {
      return getTranslation(value);
    } else if (Array.isArray(value)) {
      return value.reduce(function (prev, cur) {
        return _extends({}, prev, _defineProperty({}, cur, getTranslation(cur)));
      }, {});
    } else {
      throw new Error('react-localize-redux: Invalid key passed to getTranslate.');
    }
  };
});
exports.getTranslate = getTranslate;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.get = exports.getSingleToMultilanguageTranslation = exports.storeDidChange = exports.getTranslationsForLanguage = exports.validateOptions = exports.objectValuesToString = exports.getIndexForLanguageCode = exports.templater = exports.hasHtmlTags = exports.getLocalizedElement = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getLocalizedElement = exports.getLocalizedElement = function getLocalizedElement(options) {
  var translation = options.translation,
      data = options.data,
      renderInnerHtml = options.renderInnerHtml;


  var translatedValueOrArray = templater(translation, data);

  // if result of templater is string, do the usual stuff
  if (typeof translatedValueOrArray === 'string') {
    return renderInnerHtml === true && hasHtmlTags(translatedValueOrArray) ? _react2.default.createElement('span', {
      dangerouslySetInnerHTML: { __html: translatedValueOrArray }
    }) : translatedValueOrArray;
  }

  // at this point we know we have react components;
  // check if there are HTMLTags in the translation (not allowed)
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = translatedValueOrArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var portion = _step.value;

      if (typeof portion === 'string' && hasHtmlTags(portion)) {
        warning('HTML tags in the translation string are not supported when passing React components as arguments to the translation.');
        return '';
      }
    }

    // return as Element
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return _react2.default.createElement.apply(_react2.default, ['span', null].concat(_toConsumableArray(translatedValueOrArray)));
};

var hasHtmlTags = exports.hasHtmlTags = function hasHtmlTags(value) {
  var pattern = /(&[^\s]*;|<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>)/;
  return value.search(pattern) >= 0;
};

/**
 * @func templater
 * @desc A poor mans template parser
 * @param {string} strings The template string
 * @param {object} data The data that should be inserted in template
 * @return {string} The template string with the data merged in
 */
var templater = exports.templater = function templater(strings) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!strings) return '';

  // ${**}
  // brackets to include it in the result of .split()
  var genericPlaceholderPattern = '(\\${\\s*[^\\s}]+\\s*})';

  // split: from 'Hey ${name}' -> ['Hey', '${name}']
  // filter: clean empty strings
  // map: replace ${prop} with data[prop]
  var splitStrings = strings.split(new RegExp(genericPlaceholderPattern, 'gmi')).filter(function (str) {
    return !!str;
  }).map(function (templatePortion) {
    var matched = void 0;
    for (var prop in data) {
      if (matched) break;
      var pattern = '\\${\\s*' + prop + '\\s*}';
      var regex = new RegExp(pattern, 'gmi');
      if (regex.test(templatePortion)) matched = data[prop];
    }
    if (typeof matched === 'undefined') return templatePortion;
    return matched;
  });

  // if there is a React element, return as array
  if (splitStrings.some(function (portion) {
    return _react2.default.isValidElement(portion);
  })) {
    return splitStrings;
  }

  // otherwise concatenate all portions into the translated value
  return splitStrings.reduce(function (translated, portion) {
    return translated + ('' + portion);
  }, '');
};

var getIndexForLanguageCode = exports.getIndexForLanguageCode = function getIndexForLanguageCode(code, languages) {
  return languages.map(function (language) {
    return language.code;
  }).indexOf(code);
};

var objectValuesToString = exports.objectValuesToString = function objectValuesToString(data) {
  return !Object.values ? Object.keys(data).map(function (key) {
    return data[key].toString();
  }).toString() : Object.values(data).toString();
};

var validateOptions = exports.validateOptions = function validateOptions(options) {
  if (options.onMissingTranslation !== undefined && typeof options.onMissingTranslation !== 'function') {
    throw new Error('react-localize-redux: an invalid onMissingTranslation function was provided.');
  }

  if (options.renderToStaticMarkup !== false && typeof options.renderToStaticMarkup !== 'function') {
    throw new Error('\n      react-localize-redux: initialize option renderToStaticMarkup is invalid.\n      Please see https://ryandrewjohnson.github.io/react-localize-redux-docs/#initialize.\n    ');
  }

  return options;
};

var getTranslationsForLanguage = exports.getTranslationsForLanguage = function getTranslationsForLanguage(language, languages, translations) {
  // no language! return no translations
  if (!language) {
    return {};
  }

  var languageCode = language.code;

  var languageIndex = getIndexForLanguageCode(languageCode, languages);
  var keys = Object.keys(translations);
  var totalKeys = keys.length;
  var translationsForLanguage = {};

  for (var i = 0; i < totalKeys; i++) {
    var key = keys[i];
    translationsForLanguage[key] = translations[key][languageIndex];
  }

  return translationsForLanguage;
};

var storeDidChange = exports.storeDidChange = function storeDidChange(store, onChange) {
  var currentState = void 0;

  function handleChange() {
    var nextState = store.getState();
    if (nextState !== currentState) {
      onChange(currentState);
      currentState = nextState;
    }
  }

  var unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
};

var getSingleToMultilanguageTranslation = exports.getSingleToMultilanguageTranslation = function getSingleToMultilanguageTranslation(language, languageCodes, flattenedTranslations, existingTranslations) {
  var languageIndex = languageCodes.indexOf(language);
  var translations = languageIndex >= 0 ? flattenedTranslations : {};
  var keys = Object.keys(translations);
  var totalKeys = keys.length;
  var singleLanguageTranslations = {};

  var _loop = function _loop(i) {
    var key = keys[i];
    // loop through each language, and for languages that don't match languageIndex
    // keep existing translation data, and for languageIndex store new translation data
    var translationValues = languageCodes.map(function (code, index) {
      var existingValues = existingTranslations[key] || [];

      return index === languageIndex ? flattenedTranslations[key] : existingValues[index];
    });

    singleLanguageTranslations[key] = translationValues;
  };

  for (var i = 0; i < totalKeys; i++) {
    _loop(i);
  }

  return singleLanguageTranslations;
};

var get = exports.get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  var pathArr = path.split('.').filter(Boolean);
  return pathArr.reduce(function (ret, key) {
    return ret && ret[key] ? ret[key] : defaultValue;
  }, obj);
};

// Thanks react-redux for utility function
// https://github.com/reactjs/react-redux/blob/master/src/utils/warning.js
var warning = exports.warning = function warning(message) {
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {}
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(5);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalizeProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(2);

var _LocalizeContext = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalizeProvider = exports.LocalizeProvider = function (_Component) {
  _inherits(LocalizeProvider, _Component);

  function LocalizeProvider(props) {
    _classCallCheck(this, LocalizeProvider);

    var _this = _possibleConstructorReturn(this, (LocalizeProvider.__proto__ || Object.getPrototypeOf(LocalizeProvider)).call(this, props));

    var dispatch = _this.props.store ? _this.props.store.dispatch : _this.dispatch.bind(_this);

    _this.getContextPropsSelector = (0, _LocalizeContext.getContextPropsFromState)(dispatch);

    var initialState = _this.props.initialize !== undefined ? (0, _localize.localizeReducer)(undefined, {
      type: _localize.INITIALIZE,
      payload: _this.props.initialize
    }) : (0, _localize.localizeReducer)(undefined, {});

    _this.state = {
      localize: initialState
    };
    return _this;
  }

  _createClass(LocalizeProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initExternalStore();
      this.subscribeToExternalStore();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribeFromStore && this.unsubscribeFromStore();
    }
  }, {
    key: 'initExternalStore',
    value: function initExternalStore() {
      var _props = this.props,
          store = _props.store,
          initialize = _props.initialize;

      if (store && initialize) {
        store.dispatch((0, _localize.initialize)(initialize));
      }
    }
  }, {
    key: 'subscribeToExternalStore',
    value: function subscribeToExternalStore() {
      var store = this.props.store;

      if (store) {
        this.unsubscribeFromStore = (0, _utils.storeDidChange)(store, this.onStateDidChange.bind(this));
      }
    }
  }, {
    key: 'onStateDidChange',
    value: function onStateDidChange(prevState) {
      if (!this.props.store) {
        return;
      }
      var getState = this.props.getState || function (state) {
        return state.localize;
      };

      var prevLocalizeState = prevState && getState(prevState);
      var curLocalizeState = getState(this.props.store.getState());

      var prevActiveLanguage = prevState && (0, _localize.getActiveLanguage)(prevLocalizeState);
      var curActiveLanguage = (0, _localize.getActiveLanguage)(curLocalizeState);

      var prevOptions = prevState && (0, _localize.getOptions)(prevLocalizeState);
      var curOptions = (0, _localize.getOptions)(curLocalizeState);

      var prevTranslations = prevState && (0, _localize.getTranslationsForActiveLanguage)(prevLocalizeState);
      var curTranslations = (0, _localize.getTranslationsForActiveLanguage)(curLocalizeState);

      var hasActiveLangaugeChanged = (prevActiveLanguage && prevActiveLanguage.code) !== (curActiveLanguage && curActiveLanguage.code);
      var hasOptionsChanged = prevOptions !== curOptions;
      var hasTranslationsChanged = prevTranslations !== curTranslations;

      if (hasActiveLangaugeChanged || hasOptionsChanged || hasTranslationsChanged) {
        this.setState({ localize: curLocalizeState });
      }
    }
  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      this.setState(function (prevState) {
        return {
          localize: (0, _localize.localizeReducer)(prevState.localize, action)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.contextProps = this.getContextPropsSelector(this.state.localize);

      return _react2.default.createElement(
        _LocalizeContext.LocalizeContext.Provider,
        { value: this.contextProps },
        this.props.children
      );
    }
  }]);

  return LocalizeProvider;
}(_react.Component);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _utils = __webpack_require__(3);

var _LocalizeContext = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrappedTranslate = function (_React$Component) {
  _inherits(WrappedTranslate, _React$Component);

  function WrappedTranslate() {
    _classCallCheck(this, WrappedTranslate);

    return _possibleConstructorReturn(this, (WrappedTranslate.__proto__ || Object.getPrototypeOf(WrappedTranslate)).apply(this, arguments));
  }

  _createClass(WrappedTranslate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addDefaultTranslation();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var idChanged = this.props.id && prevProps.id !== this.props.id;

      var noDefaultLanguage = !(0, _utils.get)(prevProps, 'context.defaultLanguage') && !(0, _utils.get)(prevProps, 'options.language');
      var incomingLanguage = (0, _utils.get)(this.props, 'context.defaultLanguage') || (0, _utils.get)(this.props, 'options.language');

      var defaultLanguageSet = noDefaultLanguage && incomingLanguage;

      if (idChanged || defaultLanguageSet) {
        this.addDefaultTranslation();
      }
    }
  }, {
    key: 'addDefaultTranslation',
    value: function addDefaultTranslation() {
      var _props = this.props,
          context = _props.context,
          id = _props.id,
          children = _props.children,
          _props$options = _props.options,
          options = _props$options === undefined ? {} : _props$options;

      var defaultLanguage = options.language || context.defaultLanguage;
      var fallbackRenderToStaticMarkup = function fallbackRenderToStaticMarkup(value) {
        return value;
      };
      var renderToStaticMarkup = context.renderToStaticMarkup || fallbackRenderToStaticMarkup;
      var hasId = id !== undefined;
      var hasDefaultLanguage = defaultLanguage !== undefined;
      var hasChildren = children !== undefined;
      var hasFunctionAsChild = typeof children === 'function';

      var ignoreTranslateChildren = options.ignoreTranslateChildren !== undefined ? options.ignoreTranslateChildren : context.ignoreTranslateChildren;

      var isValidDefaultTranslation = hasChildren && hasId && hasDefaultLanguage;

      var shouldAddDefaultTranslation = isValidDefaultTranslation && !hasFunctionAsChild && !ignoreTranslateChildren;

      if (shouldAddDefaultTranslation) {
        var translation = renderToStaticMarkup(children);
        context.addTranslationForLanguage && context.addTranslationForLanguage(_defineProperty({}, id, translation), defaultLanguage);
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props2 = this.props,
          context = _props2.context,
          _props2$id = _props2.id,
          id = _props2$id === undefined ? '' : _props2$id,
          options = _props2.options,
          data = _props2.data;


      return typeof this.props.children === 'function' ? this.props.children(context) : context.translate && context.translate(id, data, options);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderChildren();
    }
  }]);

  return WrappedTranslate;
}(React.Component);

var Translate = exports.Translate = function Translate(props) {
  return React.createElement(
    _LocalizeContext.LocalizeContext.Consumer,
    null,
    function (context) {
      return React.createElement(WrappedTranslate, _extends({}, props, { context: context }));
    }
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withLocalize = withLocalize;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(17);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _LocalizeContext = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withLocalize(WrappedComponent) {
  var LocalizedComponent = function (_Component) {
    _inherits(LocalizedComponent, _Component);

    function LocalizedComponent() {
      _classCallCheck(this, LocalizedComponent);

      return _possibleConstructorReturn(this, (LocalizedComponent.__proto__ || Object.getPrototypeOf(LocalizedComponent)).apply(this, arguments));
    }

    _createClass(LocalizedComponent, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          _LocalizeContext.LocalizeContext.Consumer,
          null,
          function (context) {
            return _react2.default.createElement(WrappedComponent, _extends({}, context, _this2.props));
          }
        );
      }
    }]);

    return LocalizedComponent;
  }(_react.Component);

  (0, _hoistNonReactStatics2.default)(LocalizedComponent, WrappedComponent);
  return LocalizedComponent;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Translate = __webpack_require__(10);

Object.defineProperty(exports, 'Translate', {
  enumerable: true,
  get: function get() {
    return _Translate.Translate;
  }
});

var _withLocalize = __webpack_require__(11);

Object.defineProperty(exports, 'withLocalize', {
  enumerable: true,
  get: function get() {
    return _withLocalize.withLocalize;
  }
});

var _LocalizeProvider = __webpack_require__(9);

Object.defineProperty(exports, 'LocalizeProvider', {
  enumerable: true,
  get: function get() {
    return _LocalizeProvider.LocalizeProvider;
  }
});

var _LocalizeContext = __webpack_require__(1);

Object.defineProperty(exports, 'LocalizeContext', {
  enumerable: true,
  get: function get() {
    return _LocalizeContext.LocalizeContext;
  }
});

var _localize = __webpack_require__(2);

Object.defineProperty(exports, 'localizeReducer', {
  enumerable: true,
  get: function get() {
    return _localize.localizeReducer;
  }
});
Object.defineProperty(exports, 'initialize', {
  enumerable: true,
  get: function get() {
    return _localize.initialize;
  }
});
Object.defineProperty(exports, 'addTranslation', {
  enumerable: true,
  get: function get() {
    return _localize.addTranslation;
  }
});
Object.defineProperty(exports, 'addTranslationForLanguage', {
  enumerable: true,
  get: function get() {
    return _localize.addTranslationForLanguage;
  }
});
Object.defineProperty(exports, 'setActiveLanguage', {
  enumerable: true,
  get: function get() {
    return _localize.setActiveLanguage;
  }
});
Object.defineProperty(exports, 'getTranslate', {
  enumerable: true,
  get: function get() {
    return _localize.getTranslate;
  }
});
Object.defineProperty(exports, 'getActiveLanguage', {
  enumerable: true,
  get: function get() {
    return _localize.getActiveLanguage;
  }
});
Object.defineProperty(exports, 'getLanguages', {
  enumerable: true,
  get: function get() {
    return _localize.getLanguages;
  }
});
Object.defineProperty(exports, 'getTranslations', {
  enumerable: true,
  get: function get() {
    return _localize.getTranslations;
  }
});
Object.defineProperty(exports, 'getOptions', {
  enumerable: true,
  get: function get() {
    return _localize.getOptions;
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(16);

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(13);

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(18)

var flat = module.exports = flatten
flatten.flatten = flatten
flatten.unflatten = unflatten

function flatten(target, opts) {
  opts = opts || {}

  var delimiter = opts.delimiter || '.'
  var maxDepth = opts.maxDepth
  var output = {}

  function step(object, prev, currentDepth) {
    currentDepth = currentDepth ? currentDepth : 1
    Object.keys(object).forEach(function(key) {
      var value = object[key]
      var isarray = opts.safe && Array.isArray(value)
      var type = Object.prototype.toString.call(value)
      var isbuffer = isBuffer(value)
      var isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      var newKey = prev
        ? prev + delimiter + key
        : key

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}

function unflatten(target, opts) {
  opts = opts || {}

  var delimiter = opts.delimiter || '.'
  var overwrite = opts.overwrite || false
  var result = {}

  var isbuffer = isBuffer(target)
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey(key) {
    var parsedKey = Number(key)

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1
    ) ? key
      : parsedKey
  }

  Object.keys(target).forEach(function(key) {
    var split = key.split(delimiter)
    var key1 = getkey(split.shift())
    var key2 = getkey(split[0])
    var recipient = result

    while (key2 !== undefined) {
      var type = Object.prototype.toString.call(recipient[key1])
      var isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        )
      }

      recipient = recipient[key1]
      if (split.length > 0) {
        key1 = getkey(split.shift())
        key2 = getkey(split[0])
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts)
  })

  return result
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ReactIs$ForwardRef;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(24);
var React = __webpack_require__(0);
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var TYPE_STATICS = _defineProperty({}, ReactIs.ForwardRef, (_ReactIs$ForwardRef = {}, _defineProperty(_ReactIs$ForwardRef, '$$typeof', true), _defineProperty(_ReactIs$ForwardRef, 'render', true), _ReactIs$ForwardRef));

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(6);
  var warning = __webpack_require__(4);
  var ReactPropTypesSecret = __webpack_require__(7);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(4);
var assign = __webpack_require__(19);

var ReactPropTypesSecret = __webpack_require__(7);
var checkPropTypes = __webpack_require__(20);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(21)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__(23);
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});