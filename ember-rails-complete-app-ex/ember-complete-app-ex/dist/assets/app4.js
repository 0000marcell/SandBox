"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('app4/adapters/application', ['exports', 'ember-data/adapters/json-api', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberDataAdaptersJsonApi, _emberSimpleAuthMixinsDataAdapterMixin) {
	exports['default'] = _emberDataAdaptersJsonApi['default'].extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
		namespace: 'api/v1',
		authorizer: 'authorizer:application',
		coalesceFindRequests: true,
		parseErrorResponse: function parseErrorResponse(responseText) {
			var response = JSON.parse(responseText);
			var json = { errors: [response.errors] };
			return json;
		}
	});
});
define('app4/app', ['exports', 'ember', 'app4/resolver', 'ember-load-initializers', 'app4/config/environment'], function (exports, _ember, _app4Resolver, _emberLoadInitializers, _app4ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _app4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _app4ConfigEnvironment['default'].podModulePrefix,
    Resolver: _app4Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _app4ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('app4/authenticators/application', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _emberSimpleAuthAuthorizersOauth2Bearer) {
  exports['default'] = _emberSimpleAuthAuthorizersOauth2Bearer['default'].extend();
});
define('app4/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant) {
	exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend({
		serverTokenEndpoint: '/oauth/token'
	});
});
define('app4/authorizers/application', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _emberSimpleAuthAuthorizersOauth2Bearer) {
  exports['default'] = _emberSimpleAuthAuthorizersOauth2Bearer['default'].extend();
});
define('app4/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'app4/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _app4ConfigEnvironment) {

  var name = _app4ConfigEnvironment['default'].APP.name;
  var version = _app4ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('app4/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('app4/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('app4/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define('app4/components/materialize-badge', ['exports', 'ember', 'app4/components/md-badge'], function (exports, _ember, _app4ComponentsMdBadge) {
  exports['default'] = _app4ComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-button-submit', ['exports', 'ember', 'app4/components/md-btn-submit'], function (exports, _ember, _app4ComponentsMdBtnSubmit) {
  exports['default'] = _app4ComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-button', ['exports', 'ember', 'app4/components/md-btn'], function (exports, _ember, _app4ComponentsMdBtn) {
  exports['default'] = _app4ComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-card-action', ['exports', 'ember', 'app4/components/md-card-action'], function (exports, _ember, _app4ComponentsMdCardAction) {
  exports['default'] = _app4ComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-card-content', ['exports', 'ember', 'app4/components/md-card-content'], function (exports, _ember, _app4ComponentsMdCardContent) {
  exports['default'] = _app4ComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-card-panel', ['exports', 'ember', 'app4/components/md-card-panel'], function (exports, _ember, _app4ComponentsMdCardPanel) {
  exports['default'] = _app4ComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-card-reveal', ['exports', 'ember', 'app4/components/md-card-reveal'], function (exports, _ember, _app4ComponentsMdCardReveal) {
  exports['default'] = _app4ComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-card', ['exports', 'ember', 'app4/components/md-card'], function (exports, _ember, _app4ComponentsMdCard) {
  exports['default'] = _app4ComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-checkbox', ['exports', 'ember', 'app4/components/md-check'], function (exports, _ember, _app4ComponentsMdCheck) {
  exports['default'] = _app4ComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-checkboxes', ['exports', 'ember', 'app4/components/md-checks'], function (exports, _ember, _app4ComponentsMdChecks) {
  exports['default'] = _app4ComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-collapsible-card', ['exports', 'ember', 'app4/components/md-card-collapsible'], function (exports, _ember, _app4ComponentsMdCardCollapsible) {
  exports['default'] = _app4ComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-collapsible', ['exports', 'ember', 'app4/components/md-collapsible'], function (exports, _ember, _app4ComponentsMdCollapsible) {
  exports['default'] = _app4ComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-copyright', ['exports', 'ember', 'app4/components/md-copyright'], function (exports, _ember, _app4ComponentsMdCopyright) {
  exports['default'] = _app4ComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-date-input', ['exports', 'ember', 'app4/components/md-input-date'], function (exports, _ember, _app4ComponentsMdInputDate) {
  exports['default'] = _app4ComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-input-field', ['exports', 'ember', 'app4/components/md-input-field'], function (exports, _ember, _app4ComponentsMdInputField) {
  exports['default'] = _app4ComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-input', ['exports', 'ember', 'app4/components/md-input'], function (exports, _ember, _app4ComponentsMdInput) {
  exports['default'] = _app4ComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-loader', ['exports', 'ember', 'app4/components/md-loader'], function (exports, _ember, _app4ComponentsMdLoader) {
  exports['default'] = _app4ComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-modal', ['exports', 'ember', 'app4/components/md-modal'], function (exports, _ember, _app4ComponentsMdModal) {
  exports['default'] = _app4ComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-navbar', ['exports', 'ember', 'app4/components/md-navbar'], function (exports, _ember, _app4ComponentsMdNavbar) {
  exports['default'] = _app4ComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-pagination', ['exports', 'ember', 'app4/components/md-pagination'], function (exports, _ember, _app4ComponentsMdPagination) {
  exports['default'] = _app4ComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-parallax', ['exports', 'ember', 'app4/components/md-parallax'], function (exports, _ember, _app4ComponentsMdParallax) {
  exports['default'] = _app4ComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-radio', ['exports', 'ember', 'app4/components/md-radio'], function (exports, _ember, _app4ComponentsMdRadio) {
  exports['default'] = _app4ComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-radios', ['exports', 'ember', 'app4/components/md-radios'], function (exports, _ember, _app4ComponentsMdRadios) {
  exports['default'] = _app4ComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-range', ['exports', 'ember', 'app4/components/md-range'], function (exports, _ember, _app4ComponentsMdRange) {
  exports['default'] = _app4ComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-select', ['exports', 'ember', 'app4/components/md-select'], function (exports, _ember, _app4ComponentsMdSelect) {
  exports['default'] = _app4ComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-switch', ['exports', 'ember', 'app4/components/md-switch'], function (exports, _ember, _app4ComponentsMdSwitch) {
  exports['default'] = _app4ComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-switches', ['exports', 'ember', 'app4/components/md-switches'], function (exports, _ember, _app4ComponentsMdSwitches) {
  exports['default'] = _app4ComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-tabs-tab', ['exports', 'ember', 'app4/components/md-tab'], function (exports, _ember, _app4ComponentsMdTab) {
  exports['default'] = _app4ComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-tabs', ['exports', 'ember', 'app4/components/md-tabs'], function (exports, _ember, _app4ComponentsMdTabs) {
  exports['default'] = _app4ComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/materialize-textarea', ['exports', 'ember', 'app4/components/md-textarea'], function (exports, _ember, _app4ComponentsMdTextarea) {
  exports['default'] = _app4ComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('app4/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _emberCliMaterializeComponentsMdBadge) {
  exports['default'] = _emberCliMaterializeComponentsMdBadge['default'];
});
define('app4/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _emberCliMaterializeComponentsMdBtnDropdown) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnDropdown['default'];
});
define('app4/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _emberCliMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnSubmit['default'];
});
define('app4/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'];
});
define('app4/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _emberCliMaterializeComponentsMdCardAction) {
  exports['default'] = _emberCliMaterializeComponentsMdCardAction['default'];
});
define('app4/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _emberCliMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCardCollapsible['default'];
});
define('app4/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _emberCliMaterializeComponentsMdCardContent) {
  exports['default'] = _emberCliMaterializeComponentsMdCardContent['default'];
});
define('app4/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _emberCliMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberCliMaterializeComponentsMdCardPanel['default'];
});
define('app4/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'];
});
define('app4/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  exports['default'] = _emberCliMaterializeComponentsMdCard['default'];
});
define('app4/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _emberCliMaterializeComponentsMdCheck) {
  exports['default'] = _emberCliMaterializeComponentsMdCheck['default'];
});
define('app4/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _emberCliMaterializeComponentsMdChecksCheck) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdChecksCheck['default'];
    }
  });
});
define('app4/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _emberCliMaterializeComponentsMdChecks) {
  exports['default'] = _emberCliMaterializeComponentsMdChecks['default'];
});
define('app4/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _emberCliMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCollapsible['default'];
});
define('app4/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _emberCliMaterializeComponentsMdCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdCollection['default'];
    }
  });
});
define('app4/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _emberCliMaterializeComponentsMdCopyright) {
  exports['default'] = _emberCliMaterializeComponentsMdCopyright['default'];
});
define('app4/components/md-default-collection-header', ['exports', 'ember-cli-materialize/components/md-default-collection-header'], function (exports, _emberCliMaterializeComponentsMdDefaultCollectionHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdDefaultCollectionHeader['default'];
    }
  });
});
define('app4/components/md-default-column-header', ['exports', 'ember-cli-materialize/components/md-default-column-header'], function (exports, _emberCliMaterializeComponentsMdDefaultColumnHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdDefaultColumnHeader['default'];
    }
  });
});
define('app4/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtn['default'];
    }
  });
});
define('app4/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtns) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtns['default'];
    }
  });
});
define('app4/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _emberCliMaterializeComponentsMdInputDate) {
  exports['default'] = _emberCliMaterializeComponentsMdInputDate['default'];
});
define('app4/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _emberCliMaterializeComponentsMdInputField) {
  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'];
});
define('app4/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _emberCliMaterializeComponentsMdInput) {
  exports['default'] = _emberCliMaterializeComponentsMdInput['default'];
});
define('app4/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _emberCliMaterializeComponentsMdLoader) {
  exports['default'] = _emberCliMaterializeComponentsMdLoader['default'];
});
define('app4/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _emberCliMaterializeComponentsMdModalContainer) {
  exports['default'] = _emberCliMaterializeComponentsMdModalContainer['default'];
});
define('app4/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _emberCliMaterializeComponentsMdModal) {
  exports['default'] = _emberCliMaterializeComponentsMdModal['default'];
});
define('app4/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _emberCliMaterializeComponentsMdNavbar) {
  exports['default'] = _emberCliMaterializeComponentsMdNavbar['default'];
});
define('app4/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _emberCliMaterializeComponentsMdPagination) {
  exports['default'] = _emberCliMaterializeComponentsMdPagination['default'];
});
define('app4/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _emberCliMaterializeComponentsMdParallax) {
  exports['default'] = _emberCliMaterializeComponentsMdParallax['default'];
});
define('app4/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _emberCliMaterializeComponentsMdRadio) {
  exports['default'] = _emberCliMaterializeComponentsMdRadio['default'];
});
define('app4/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _emberCliMaterializeComponentsMdRadiosRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdRadiosRadio['default'];
    }
  });
});
define('app4/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _emberCliMaterializeComponentsMdRadios) {
  exports['default'] = _emberCliMaterializeComponentsMdRadios['default'];
});
define('app4/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _emberCliMaterializeComponentsMdRange) {
  exports['default'] = _emberCliMaterializeComponentsMdRange['default'];
});
define('app4/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _emberCliMaterializeComponentsMdSelect) {
  exports['default'] = _emberCliMaterializeComponentsMdSelect['default'];
});
define('app4/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _emberCliMaterializeComponentsMdSwitch) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitch['default'];
});
define('app4/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _emberCliMaterializeComponentsMdSwitchesSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdSwitchesSwitch['default'];
    }
  });
});
define('app4/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _emberCliMaterializeComponentsMdSwitches) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitches['default'];
});
define('app4/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _emberCliMaterializeComponentsMdTab) {
  exports['default'] = _emberCliMaterializeComponentsMdTab['default'];
});
define('app4/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _emberCliMaterializeComponentsMdTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTableCol['default'];
    }
  });
});
define('app4/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _emberCliMaterializeComponentsMdTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTable['default'];
    }
  });
});
define('app4/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _emberCliMaterializeComponentsMdTabs) {
  exports['default'] = _emberCliMaterializeComponentsMdTabs['default'];
});
define('app4/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdTextarea) {
  exports['default'] = _emberCliMaterializeComponentsMdTextarea['default'];
});
define('app4/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('app4/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('app4/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('app4/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('app4/components/session-component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		authManager: _ember['default'].inject.service('session'),
		actions: {
			logOut: function logOut() {
				this.get('onLogout')();
			}
		}
	});
});
define('app4/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('app4/controllers/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		authManager: _ember['default'].inject.service('session'),
		actions: {
			logout: function logout() {
				this.get('authManager').invalidate();
				this.transitionToRoute('login');
			}
		}
	});
});
define('app4/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgProp: {},
		sendingMessage: false,
		authManager: _ember['default'].inject.service('session'),
		actions: {
			login: function login() {
				var _this = this;

				this.set('sendingMessage', true);
				this.get('authManager').authenticate('authenticator:oauth2', this.get('email'), this.get('password')).then(function () {
					var username = _this.get('authManager.data.authenticated.user.username');
					_this.store.find('user', username).then(function (user) {
						_this.set('sendingMessage', false);
						_this.transitionToRoute('users.user', user);
					});
				}, function () {
					_this.set('sendingMessage', false);
					_this.set('msgProp.color', 'red accent 4');
					_this.set('msgProp.msg', 'wrong email/password combination!');
				});
			}
		}
	});
});
define('app4/controllers/password_reset', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgProp: {},
		sendingMessage: false,
		actions: {
			resetPassword: function resetPassword() {
				var _this = this;

				this.set('sendingMessage', true);
				_ember['default'].$.ajax({
					type: "POST",
					url: "/api/v1/password_resets",
					data: {
						user: {
							email: this.get('email')
						}
					}
				}).done(function () {
					_this.set('sendingMessage', false);
					_this.set('msgProp.color', 'green accent 4');
					_this.set('msgProp.msg', 'Check your email to reset your password!');
				}).fail(function (resp) {
					_this.set('sendingMessage', false);
					_this.set('msgProp.color', 'red accent 4');
					_this.set('error while trying to reset your password: ' + resp);
				});
			}
		}
	});
});
define('app4/controllers/signup', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgProp: {},
		sendingMessage: false,
		actions: {
			signup: function signup() {
				var _this = this;

				this.set('sendingMessage', true);
				var user = this.get('model');
				user.save().then(function () {
					_this.set('sendingMessage', false);
					_this.set('msgProp.color', 'green accent 4');
					_this.set('msgProp.msg', 'Confirmation message sent, check your email!');
				})['catch'](function (resp) {
					_this.set('sendingMessage', false);
					_this.set('msgProp.color', 'red accent 4');
					_this.set('msgProp.msg', 'error: ' + resp);
				});
			}
		}
	});
});
define('app4/controllers/users/user/todos/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		loadingModel: false,
		modalIsOpen: false,
		itemToDelete: null,
		actions: {
			'delete': function _delete(todo) {
				this.toggleProperty('modalIsOpen');
				this.itemToDelete = todo;
			},
			agree: function agree() {
				this.itemToDelete.destroyRecord();
				this.toggleProperty('modalIsOpen');
			},
			closeModal: function closeModal() {
				this.toggleProperty('modalIsOpen');
			}
		}
	});
});
define('app4/controllers/users/user/todos/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgVisible: false,
		msgColor: '',
		msgContent: 'Todo not saved!',
		userController: _ember['default'].inject.controller('users/user'),
		user: _ember['default'].computed.reads('userController.model'),
		authManager: _ember['default'].inject.service('session'),
		actions: {
			save: function save() {
				var _this = this;

				var model = this.get('model');
				var title = model.get('title');
				model.set('user_id', this.get('authManager.data.authenticated.user.id'));
				model.set('slug', _ember['default'].String.dasherize(title.toLowerCase()));
				model.save().then(function (model) {
					_this.set('msgVisible', false);
					_this.set('msgColor', 'green accent 4');
					_this.get('model').reload();
					_this.transitionToRoute('users.user.todos.todo', model);
				})['catch'](function () {
					_this.set('msgColor', 'red accent 4');
					_this.set('msgVisible', true);
				});
			}
		}
	});
});
define('app4/controllers/users/user/todos/todo/edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			edit: function edit() {
				var _this = this;

				this.get('model').save().then(function () {
					_this.transitionToRoute('users.user.todos');
				})['catch'](function (error) {
					console.log('error while saving todo' + error);
				});
			}
		}
	});
});
define('app4/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('app4/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('app4/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('app4/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('app4/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('app4/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'app4/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _app4ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_app4ConfigEnvironment['default'].APP.name, _app4ConfigEnvironment['default'].APP.version)
  };
});
define('app4/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('app4/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('app4/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'app4/config/environment', 'app4/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _app4ConfigEnvironment, _app4MirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_app4ConfigEnvironment['default'].environment, _app4ConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_app4ConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _app4ConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _app4MirageConfig['default'], testConfig: _app4MirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('app4/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('app4/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardInitializersEmberKeyboardFirstResponderInputs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('app4/initializers/ember-simple-auth', ['exports', 'ember', 'app4/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _app4ConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _app4ConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _app4ConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('app4/initializers/export-application-global', ['exports', 'ember', 'app4/config/environment'], function (exports, _ember, _app4ConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_app4ConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _app4ConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_app4ConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('app4/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('app4/initializers/md-settings', ['exports', 'app4/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _app4ConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize() {
    var materializeDefaults = _app4ConfigEnvironment['default'].materializeDefaults;

    var application = arguments[1] || arguments[0];

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});
define('app4/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('app4/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('app4/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("app4/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('app4/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define("app4/instance-initializers/global", ["exports"], function (exports) {
	exports.initialize = initialize;

	function initialize(application) {
		application.store = application.lookup("service:store");
		window.App = application;
	}

	exports["default"] = {
		name: 'global',
		initialize: initialize
	};
});
define("app4/mirage/config", ["exports"], function (exports) {
	exports["default"] = function () {
		// These comments are here to help you get started. Feel free to delete them.

		/*
    Config (with defaults).
     Note: these only affect routes defined *after* them!
  */

		// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
		// this.namespace = '';    // make this `api`, for example, if your API is namespaced
		// this.timing = 400;      // delay for each request, automatically set to 0 during testing

		/*
    Shorthand cheatsheet:
     this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
     http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
		this.post('/oauth/token', function () {
			return { "access_token": "43de36e1a9266aea606265b524b82578963b9b9efdbef7e2ed003a6bb7185a4b",
				"token_type": "bearer",
				"expires_in": 7200,
				"created_at": 1466035645,
				"user": { "id": 0, "email": "user0@gmail.com",
					"name": "User 0",
					"username": "user0" }
			};
		});
		this.passthrough('/write-coverage');
		this.namespace = 'api/v1';
		this.get('/users');
		this.get('/users/:user_username', function (schema, request) {
			return schema.users.where({
				username: request.params.user_username
			}).models[0];
		});
		this.post('/users');
		this.get('/todos', { coalesce: true });
		this.get('/todos/:todo_url', function (schema, request) {
			debugger;
			return schema.todos.where({
				todo_url: request.params.todo_url
			}).models[0];
		});
		this.post('/todos');
		this.del('/todos/:id');
		this.patch('/todos/:id');
	};
});
define('app4/mirage/factories/todo', ['exports', 'ember', 'ember-cli-mirage'], function (exports, _ember, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({
		title: function title(i) {
			return 'todo ' + i;
		}
		/*
  todo_url:  Ember.computed('title', () => {
  	debugger;
  	Ember.String.dasherize(this.title);
  })
  */
	});
});
define('app4/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({
		username: function username(i) {
			return 'user' + i;
		},
		name: function name(i) {
			return 'User ' + i;
		},
		email: function email(i) {
			return 'user' + i + '@gmail.com';
		},
		password: '123456'
	});
});
define('app4/mirage/models/todo', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Model.extend({
		user: (0, _emberCliMirage.belongsTo)()
	});
});
define('app4/mirage/models/token', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define('app4/mirage/models/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Model.extend({
		todos: (0, _emberCliMirage.hasMany)('todo')
	});
});
define('app4/mirage/scenarios/default', ['exports'], function (exports) {
  exports['default'] = function (server) {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */
    var user = server.create('user');
    server.createList('todo', 50, { user: user });
  };
});
define('app4/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('app4/models/todo', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
		exports['default'] = _emberDataModel['default'].extend({
				title: (0, _emberDataAttr['default'])('string'),
				slug: (0, _emberDataAttr['default'])('string'),
				user: (0, _emberDataRelationships.belongsTo)('user')
		});
});
define('app4/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		todos: _emberData['default'].hasMany('todo'),
		email: _emberData['default'].attr('string'),
		name: _emberData['default'].attr('string'),
		username: _emberData['default'].attr('string'),
		password: _emberData['default'].attr('string')
	});
});
define('app4/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('app4/router', ['exports', 'ember', 'app4/config/environment'], function (exports, _ember, _app4ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _app4ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('signup');
    this.route('users', function () {
      this.route('user', { path: '/:user_username' }, function () {
        this.route('todos', function () {
          this.route('todo', { path: ':slug' }, function () {
            this.route('edit');
          });
          this.route('new');
        });
      });
    });
    this.route('password-reset');
  });

  exports['default'] = Router;
});
define('app4/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend();
});
define('app4/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('app4/routes/password-reset', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('app4/routes/signup', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.createRecord('user');
		}
	});
});
define('app4/routes/users/user/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('app4/routes/users/user/todos/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.createRecord('todo');
		}
	});
});
define('app4/routes/users/user/todos/todo/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('app4/routes/users/user/todos/todo/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('app4/routes/users/user/todos/todo', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			return this.store.find('todo', param.slug);
		}
	});
});
/*
serialize(model){
	if(!model.get('title'))
		return;
	let title = model.get('title');
	return {
		todo_url: Ember.String.dasherize(title.toLowerCase())
	}
}
*/
define('app4/routes/users/user/todos', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		actions: {
			loading: function loading() {}
		}
	});
});
define('app4/routes/users/user', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			return this.store.find('user', param.user_username);
		},
		serialize: function serialize(model) {
			return {
				user_username: model.get('username')
			};
		},
		actions: {
			loading: function loading(transition) {
				var controller = this.controllerFor('users/user/todos/index');
				controller.set('loadingModel', true);
				transition['finally'](function () {
					controller.set('loadingModel', false);
				});
			}
		}
	});
});
define('app4/routes/users', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
	exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
		model: function model() {
			return this.store.findAll('user');
		}
	});
});
define('app4/serializers/application', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
	exports['default'] = _emberData['default'].JSONAPISerializer.extend({
		serialize: function serialize() {
			var result = this._super.apply(this, arguments),
			    attr = result.data.attributes || {},
			    rel = result.data.relationships || {};
			return Object.keys(rel).reduce(function (acc, elem) {
				var data = rel[elem].data;
				elem = _ember['default'].String.underscore(elem);
				if (data) {
					acc[elem + "_id"] = data.id;
				}
				if (data && data.type) {
					acc[elem + "_type"] = data.type[0].toUpperCase() + data.type.slice(1, -1);
				}
				return acc;
			}, attr);
		}
	});
});
define('app4/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('app4/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _emberKeyboardServicesKeyboard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardServicesKeyboard['default'];
    }
  });
});
define('app4/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _emberCliMaterializeServicesMdSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeServicesMdSettings['default'];
    }
  });
});
define('app4/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define("app4/services/session", ["exports", "ember", "ember-simple-auth/services/session"], function (exports, _ember, _emberSimpleAuthServicesSession) {
	exports["default"] = _emberSimpleAuthServicesSession["default"].extend({
		store: _ember["default"].inject.service()
	});
});
define('app4/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("app4/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "app4/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "session-component", [], ["onLogout", ["subexpr", "action", ["logout"], [], ["loc", [null, [2, 30], [2, 47]]]]], ["loc", [null, [2, 1], [2, 49]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 1
            },
            "end": {
              "line": 14,
              "column": 1
            }
          },
          "moduleName": "app4/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "white-text right");
          dom.setAttribute(el1, "href", "#!");
          var el2 = dom.createTextNode("\n				Mais\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "app4/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "page-footer indigo white-text");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "md-navbar", [], ["name", "", "class", "indigo"], 0, null, ["loc", [null, [1, 0], [3, 14]]]], ["content", "outlet", ["loc", [null, [4, 0], [4, 10]]]], ["block", "md-copyright", [], ["text", "Ember Test", "startYear", 2015, "class", "indigo darken-2 white-text"], 1, null, ["loc", [null, [8, 1], [14, 18]]]], ["content", "md-modal-container", ["loc", [null, [17, 0], [17, 22]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("app4/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "app4/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('app4/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("app4/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "app4/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "app4/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "app4/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("app4/templates/components/session-component", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 1
              },
              "end": {
                "line": 2,
                "column": 117
              }
            },
            "moduleName": "app4/templates/components/session-component.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "authManager.data.authenticated.user.email", ["loc", [null, [2, 72], [2, 117]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 1
              },
              "end": {
                "line": 3,
                "column": 26
              }
            },
            "moduleName": "app4/templates/components/session-component.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Users");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "app4/templates/components/session-component.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Log Out");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["block", "link-to", ["users.user", ["get", "authManager.data.authenticated.user.username", ["loc", [null, [2, 25], [2, 69]]]]], [], 0, null, ["loc", [null, [2, 1], [2, 129]]]], ["block", "link-to", ["users"], [], 1, null, ["loc", [null, [3, 1], [3, 38]]]], ["element", "action", ["logOut"], [], ["loc", [null, [4, 4], [4, 23]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 1
              },
              "end": {
                "line": 6,
                "column": 27
              }
            },
            "moduleName": "app4/templates/components/session-component.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Login");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 1
              },
              "end": {
                "line": 7,
                "column": 30
              }
            },
            "moduleName": "app4/templates/components/session-component.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Sign Up");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "app4/templates/components/session-component.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["login"], [], 0, null, ["loc", [null, [6, 1], [6, 39]]]], ["block", "link-to", ["signup"], [], 1, null, ["loc", [null, [7, 1], [7, 42]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "app4/templates/components/session-component.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "authManager.isAuthenticated", ["loc", [null, [1, 6], [1, 33]]]]], [], 0, 1, ["loc", [null, [1, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('app4/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("app4/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 10,
                  "column": 4
                }
              },
              "moduleName": "app4/templates/login.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "msgProp.msg", ["loc", [null, [9, 5], [9, 20]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 3
              },
              "end": {
                "line": 11,
                "column": 3
              }
            },
            "moduleName": "app4/templates/login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "md-card-panel", [], ["class", ["subexpr", "readonly", [["get", "msgProp.color", ["loc", [null, [6, 37], [6, 50]]]]], [], ["loc", [null, [6, 27], [6, 51]]]], "bodyClass", "white-text", "id", "card-panel"], 0, null, ["loc", [null, [6, 4], [10, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 3
              },
              "end": {
                "line": 14,
                "column": 3
              }
            },
            "moduleName": "app4/templates/login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "md-loader", [], ["id", "spinner", "mode", "circular"], ["loc", [null, [13, 4], [13, 46]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 4
                },
                "end": {
                  "line": 22,
                  "column": 50
                }
              },
              "moduleName": "app4/templates/login.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Forgot Password?");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 3
              },
              "end": {
                "line": 24,
                "column": 3
              }
            },
            "moduleName": "app4/templates/login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "");
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [5]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(element0, 1, 1);
            morphs[3] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["inline", "md-input", [], ["label", "Email", "type", "email", "class", "col s12", "validate", true, "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [15, 78], [15, 83]]]]], [], []]], ["loc", [null, [15, 4], [15, 85]]]], ["inline", "md-input", [], ["label", "Password", "type", "password", "class", "col s12", "validate", true, "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [16, 83], [16, 91]]]]], [], []]], ["loc", [null, [16, 3], [16, 93]]]], ["inline", "md-btn-submit", [], ["class", "indigo", "id", "login", "action", "login", "text", "Login"], ["loc", [null, [18, 4], [21, 19]]]], ["block", "link-to", ["password-reset"], [], 0, null, ["loc", [null, [22, 4], [22, 62]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 25,
              "column": 2
            }
          },
          "moduleName": "app4/templates/login.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Login");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "msgProp.msg", ["loc", [null, [5, 9], [5, 20]]]]], [], 0, null, ["loc", [null, [5, 3], [11, 10]]]], ["block", "if", [["get", "sendingMessage", ["loc", [null, [12, 9], [12, 23]]]]], [], 1, 2, ["loc", [null, [12, 3], [24, 10]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "app4/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [3, 2], [25, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/password-reset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 10,
                  "column": 4
                }
              },
              "moduleName": "app4/templates/password-reset.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "msgProp.msg", ["loc", [null, [9, 5], [9, 20]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 3
              },
              "end": {
                "line": 11,
                "column": 3
              }
            },
            "moduleName": "app4/templates/password-reset.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "md-card-panel", [], ["class", ["subexpr", "readonly", [["get", "msgProp.color", ["loc", [null, [6, 37], [6, 50]]]]], [], ["loc", [null, [6, 27], [6, 51]]]], "bodyClass", "white-text", "id", "card-panel"], 0, null, ["loc", [null, [6, 4], [10, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 3
              },
              "end": {
                "line": 14,
                "column": 3
              }
            },
            "moduleName": "app4/templates/password-reset.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "md-loader", [], ["mode", "circular"], ["loc", [null, [13, 4], [13, 33]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 3
              },
              "end": {
                "line": 21,
                "column": 3
              }
            },
            "moduleName": "app4/templates/password-reset.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["inline", "md-input", [], ["label", "Email", "type", "email", "class", "col s12", "validate", true, "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [15, 78], [15, 83]]]]], [], []]], ["loc", [null, [15, 4], [15, 85]]]], ["inline", "md-btn-submit", [], ["class", "indigo", "action", "resetPassword", "text", "Reset"], ["loc", [null, [17, 5], [19, 19]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 5
            }
          },
          "moduleName": "app4/templates/password-reset.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Password Reset");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          return morphs;
        },
        statements: [["block", "if", [["get", "msgProp.msg", ["loc", [null, [5, 9], [5, 20]]]]], [], 0, null, ["loc", [null, [5, 3], [11, 10]]]], ["block", "if", [["get", "sendingMessage", ["loc", [null, [12, 9], [12, 23]]]]], [], 1, 2, ["loc", [null, [12, 3], [21, 10]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "app4/templates/password-reset.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [3, 2], [23, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 10,
                  "column": 4
                }
              },
              "moduleName": "app4/templates/signup.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "msgProp.msg", ["loc", [null, [9, 5], [9, 20]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 3
              },
              "end": {
                "line": 11,
                "column": 3
              }
            },
            "moduleName": "app4/templates/signup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "md-card-panel", [], ["class", ["subexpr", "readonly", [["get", "msgProp.color", ["loc", [null, [6, 37], [6, 50]]]]], [], ["loc", [null, [6, 27], [6, 51]]]], "bodyClass", "white-text", "id", "card-panel"], 0, null, ["loc", [null, [6, 4], [10, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 3
              },
              "end": {
                "line": 14,
                "column": 3
              }
            },
            "moduleName": "app4/templates/signup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "md-loader", [], ["mode", "circular"], ["loc", [null, [13, 4], [13, 33]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 3
              },
              "end": {
                "line": 25,
                "column": 3
              }
            },
            "moduleName": "app4/templates/signup.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
            morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
            morphs[5] = dom.createMorphAt(dom.childAt(fragment, [11]), 1, 1);
            return morphs;
          },
          statements: [["inline", "md-input", [], ["label", "Name", "type", "text", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.name", ["loc", [null, [15, 62], [15, 72]]]]], [], []], "validate", true], ["loc", [null, [15, 4], [15, 88]]]], ["inline", "md-input", [], ["label", "Email", "type", "email", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [16, 64], [16, 75]]]]], [], []], "validate", true], ["loc", [null, [16, 4], [16, 91]]]], ["inline", "md-input", [], ["label", "User Name", "type", "text", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.username", ["loc", [null, [17, 67], [17, 81]]]]], [], []], "validate", true], ["loc", [null, [17, 4], [17, 97]]]], ["inline", "md-input", [], ["label", "Password", "type", "password", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [18, 70], [18, 84]]]]], [], []], "validate", true], ["loc", [null, [18, 4], [18, 100]]]], ["inline", "md-input", [], ["label", "Password Confirmation", "type", "password", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.passwordConfirmation", ["loc", [null, [19, 83], [19, 109]]]]], [], []], "validate", true], ["loc", [null, [19, 4], [19, 125]]]], ["inline", "md-btn-submit", [], ["class", "indigo", "action", "signup", "text", "Sign Up"], ["loc", [null, [21, 5], [23, 22]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 26,
              "column": 2
            }
          },
          "moduleName": "app4/templates/signup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Sign Up");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "msgProp.msg", ["loc", [null, [5, 9], [5, 20]]]]], [], 0, null, ["loc", [null, [5, 3], [11, 10]]]], ["block", "if", [["get", "sendingMessage", ["loc", [null, [12, 9], [12, 23]]]]], [], 1, 2, ["loc", [null, [12, 3], [25, 10]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "app4/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [3, 2], [26, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/users/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 1
              },
              "end": {
                "line": 5,
                "column": 1
              }
            },
            "moduleName": "app4/templates/users/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "id", "item");
            dom.setAttribute(el1, "class", "collection-item");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "user.name", ["loc", [null, [4, 41], [4, 54]]]]],
          locals: ["user"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "app4/templates/users/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Users");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "md-collection", [], ["content", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 26], [3, 31]]]]], [], []]], 0, null, ["loc", [null, [3, 1], [5, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [1, 0], [6, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/users/user/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 1
              },
              "end": {
                "line": 3,
                "column": 43
              }
            },
            "moduleName": "app4/templates/users/user/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Todos");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "app4/templates/users/user/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["content", "model.name", ["loc", [null, [2, 5], [2, 19]]]], ["block", "link-to", ["users.user.todos", ["get", "model", ["loc", [null, [3, 31], [3, 36]]]]], [], 0, null, ["loc", [null, [3, 1], [3, 55]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [1, 0], [4, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/users/user/todos/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 1
              },
              "end": {
                "line": 15,
                "column": 1
              }
            },
            "moduleName": "app4/templates/users/user/todos/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "modal-content");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h4");
            var el3 = dom.createTextNode("Delete Todo!");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Are you sure you wanna delete this todo?");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "modal-footer");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "modal-action modal-close waves-effect waves-orange btn-flat agree-button");
            var el3 = dom.createTextNode("\n        Yes\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "modal-action modal-close waves-effect waves-red btn-flat cancel-button");
            var el3 = dom.createTextNode("\n				Cancel\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [3]);
            var element4 = dom.childAt(element3, [1]);
            var element5 = dom.childAt(element3, [3]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element4);
            morphs[1] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["element", "action", ["agree"], [], ["loc", [null, [8, 88], [8, 106]]]], ["element", "action", ["closeModal"], [], ["loc", [null, [11, 88], [11, 111]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "app4/templates/users/user/todos/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "md-modal", [], ["close", "closeModal", "class", "test-modal"], 0, null, ["loc", [null, [2, 1], [15, 14]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 2
              },
              "end": {
                "line": 21,
                "column": 2
              }
            },
            "moduleName": "app4/templates/users/user/todos/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "md-loader", [], ["mode", "circular"], ["loc", [null, [20, 3], [20, 32]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 3
                },
                "end": {
                  "line": 22,
                  "column": 41
                }
              },
              "moduleName": "app4/templates/users/user/todos/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("New");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.5.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 5
                  },
                  "end": {
                    "line": 25,
                    "column": 60
                  }
                },
                "moduleName": "app4/templates/users/user/todos/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "item.title", ["loc", [null, [25, 46], [25, 60]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.5.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 6
                  },
                  "end": {
                    "line": 27,
                    "column": 56
                  }
                },
                "moduleName": "app4/templates/users/user/todos/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Edit");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 3
                },
                "end": {
                  "line": 31,
                  "column": 3
                }
              },
              "moduleName": "app4/templates/users/user/todos/index.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "id", "item");
              dom.setAttribute(el1, "class", "collection-item");
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "secondary-content");
              var el3 = dom.createTextNode("\n						");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n						");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3, "id", "delete");
              var el4 = dom.createTextNode("Delete");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n					");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var element1 = dom.childAt(element0, [3]);
              var element2 = dom.childAt(element1, [3]);
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(element0, 1, 1);
              morphs[1] = dom.createMorphAt(element1, 1, 1);
              morphs[2] = dom.createElementMorph(element2);
              return morphs;
            },
            statements: [["block", "link-to", ["users.user.todos.todo", ["get", "item", ["loc", [null, [25, 40], [25, 44]]]]], [], 0, null, ["loc", [null, [25, 5], [25, 72]]]], ["block", "link-to", ["users.user.todos.todo.edit", ["get", "item", ["loc", [null, [27, 46], [27, 50]]]]], [], 1, null, ["loc", [null, [27, 6], [27, 68]]]], ["element", "action", ["delete", ["get", "item", ["loc", [null, [28, 39], [28, 43]]]]], [], ["loc", [null, [28, 21], [28, 45]]]]],
            locals: ["item"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 2
              }
            },
            "moduleName": "app4/templates/users/user/todos/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "link-to", ["users.user.todos.new"], [], 0, null, ["loc", [null, [22, 3], [22, 53]]]], ["block", "md-collection", [], ["content", ["subexpr", "@mut", [["get", "model.todos", ["loc", [null, [23, 28], [23, 39]]]]], [], []]], 1, null, ["loc", [null, [23, 3], [31, 21]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 1
            },
            "end": {
              "line": 33,
              "column": 1
            }
          },
          "moduleName": "app4/templates/users/user/todos/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("todo");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "loadingModel", ["loc", [null, [19, 8], [19, 20]]]]], [], 0, 1, ["loc", [null, [19, 2], [32, 9]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "modalIsOpen", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [16, 7]]]], ["block", "md-card", [], ["id", "image-card"], 1, null, ["loc", [null, [17, 1], [33, 13]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("app4/templates/users/user/todos/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 10,
                  "column": 4
                }
              },
              "moduleName": "app4/templates/users/user/todos/new.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "msgContent", ["loc", [null, [9, 5], [9, 19]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 3
              },
              "end": {
                "line": 11,
                "column": 3
              }
            },
            "moduleName": "app4/templates/users/user/todos/new.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "md-card-panel", [], ["class", ["subexpr", "readonly", [["get", "msgColor", ["loc", [null, [6, 37], [6, 45]]]]], [], ["loc", [null, [6, 27], [6, 46]]]], "bodyClass", "white-text", "id", "card-panel"], 0, null, ["loc", [null, [6, 4], [10, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "app4/templates/users/user/todos/new.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("New todo");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "msgVisible", ["loc", [null, [5, 9], [5, 19]]]]], [], 0, null, ["loc", [null, [5, 3], [11, 10]]]], ["inline", "md-input", [], ["label", "title", "type", "text", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [12, 62], [12, 73]]]]], [], []], "validate", true], ["loc", [null, [12, 3], [12, 89]]]], ["inline", "md-btn-submit", [], ["class", "indigo", "id", "form-submit", "action", "save", "text", "Save"], ["loc", [null, [14, 4], [17, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos/new.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [3, 2], [19, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/users/user/todos/todo/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "app4/templates/users/user/todos/todo/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Edit todo");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "md-input", [], ["label", "Name", "type", "text", "class", "col s12", "value", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [5, 61], [5, 72]]]]], [], []], "validate", true], ["loc", [null, [5, 3], [5, 88]]]], ["inline", "md-btn-submit", [], ["class", "indigo", "id", "form-submit", "action", "edit", "text", "edit"], ["loc", [null, [6, 3], [9, 17]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos/todo/edit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card", [], ["id", "image-card"], 0, null, ["loc", [null, [3, 2], [10, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("app4/templates/users/user/todos/todo/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos/todo/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h5");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [1, 4], [1, 19]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("app4/templates/users/user/todos/todo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos/todo.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("app4/templates/users/user/todos", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("app4/templates/users/user", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("app4/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('app4/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _emberKeyboardUtilsListenerName) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardUtilsListenerName['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('app4/config/environment', ['ember'], function(Ember) {
  var prefix = 'app4';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("app4/app")["default"].create({"name":"app4","version":"0.0.0+87559c02"});
}

/* jshint ignore:end */
//# sourceMappingURL=app4.map