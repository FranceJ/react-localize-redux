var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { localizeReducer, getActiveLanguage, getOptions, getTranslationsForActiveLanguage, initialize as initializeAC, INITIALIZE } from './localize';
import { LocalizeContext, getContextPropsFromState } from './LocalizeContext';
import { storeDidChange } from './utils';

export var LocalizeProvider = function (_Component) {
  _inherits(LocalizeProvider, _Component);

  function LocalizeProvider(props) {
    _classCallCheck(this, LocalizeProvider);

    var _this = _possibleConstructorReturn(this, (LocalizeProvider.__proto__ || Object.getPrototypeOf(LocalizeProvider)).call(this, props));

    var dispatch = _this.props.store ? _this.props.store.dispatch : _this.dispatch.bind(_this);

    _this.getContextPropsSelector = getContextPropsFromState(dispatch);

    var initialState = _this.props.initialize !== undefined ? localizeReducer(undefined, {
      type: INITIALIZE,
      payload: _this.props.initialize
    }) : localizeReducer(undefined, {});

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
        store.dispatch(initializeAC(initialize));
      }
    }
  }, {
    key: 'subscribeToExternalStore',
    value: function subscribeToExternalStore() {
      var store = this.props.store;

      if (store) {
        this.unsubscribeFromStore = storeDidChange(store, this.onStateDidChange.bind(this));
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

      var prevActiveLanguage = prevState && getActiveLanguage(prevLocalizeState);
      var curActiveLanguage = getActiveLanguage(curLocalizeState);

      var prevOptions = prevState && getOptions(prevLocalizeState);
      var curOptions = getOptions(curLocalizeState);

      var prevTranslations = prevState && getTranslationsForActiveLanguage(prevLocalizeState);
      var curTranslations = getTranslationsForActiveLanguage(curLocalizeState);

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
          localize: localizeReducer(prevState.localize, action)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.contextProps = this.getContextPropsSelector(this.state.localize);

      return React.createElement(
        LocalizeContext.Provider,
        { value: this.contextProps },
        this.props.children
      );
    }
  }]);

  return LocalizeProvider;
}(Component);