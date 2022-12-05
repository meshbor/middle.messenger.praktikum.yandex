// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _renderDOM = require("./utils/renderDOM");
document.addEventListener("DOMContentLoaded", ()=>{
    const path = document.location.pathname;
    (0, _renderDOM.renderPage)(path);
});

},{"./utils/renderDOM":"KSWc5"}],"KSWc5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDOM", ()=>renderDOM);
parcelHelpers.export(exports, "renderPage", ()=>renderPage);
var _loginPage = require("/src/pages/login/LoginPage");
var _registration = require("../pages/registration/Registration");
var _chats = require("../pages/chats/Chats");
var _profileDetailsPage = require("/src/pages/profile/details/ProfileDetailsPage");
var _profileEditPage = require("/src/pages/profile/edit/ProfileEditPage");
var _changePasswordPage = require("/src/pages/profile/changePassword/ChangePasswordPage");
var _notFound = require("../pages/404/NotFound");
function renderDOM(component) {
    const root = document.querySelector("#app");
    if (!root) throw new Error("Root not found");
    root.innerHTML = "";
    root.append(component.getContent());
}
function renderPage(path) {
    switch(path){
        case "/":
            const loginPage = new (0, _loginPage.LoginPage)();
            renderDOM(loginPage);
            break;
        case "/registration":
            const registrationPage = new (0, _registration.RegistrationPage)();
            renderDOM(registrationPage);
            break;
        case "/chats":
            const chatsPage = new (0, _chats.ChatsPage)();
            renderDOM(chatsPage);
            break;
        case "/profile":
            const profilePage = new (0, _profileDetailsPage.ProfileDetailsPage)();
            renderDOM(profilePage);
            break;
        case "/editProfile":
            const profileEditPage = new (0, _profileEditPage.ProfileEditPage)();
            renderDOM(profileEditPage);
            break;
        case "/changePassword":
            const changePasswordPage = new (0, _changePasswordPage.ChangePasswordPage)();
            renderDOM(changePasswordPage);
            break;
        default:
            const notFoundPage = new (0, _notFound.NotFoundPage)();
            renderDOM(notFoundPage);
    }
}

},{"/src/pages/login/LoginPage":"cdEEQ","../pages/registration/Registration":"bC1NC","../pages/chats/Chats":"36rwK","/src/pages/profile/details/ProfileDetailsPage":"gLJYG","/src/pages/profile/edit/ProfileEditPage":"hyaK0","/src/pages/profile/changePassword/ChangePasswordPage":"1wFLB","../pages/404/NotFound":"le8go","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdEEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginPage", ()=>LoginPage);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("/src/components");
var _registration = require("../registration/Registration");
var _chats = require("../chats/Chats");
var _renderDOM = require("/src/utils/renderDOM");
var _validateForm = require("/src/utils/validateForm");
var _loginPageHbs = require("./loginPage.hbs");
var _loginPageHbsDefault = parcelHelpers.interopDefault(_loginPageHbs);
var _loginScss = require("./login.scss");
var _loginScssDefault = parcelHelpers.interopDefault(_loginScss);
var _profileDetailsPage = require("../profile/details/ProfileDetailsPage");
class LoginPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.loginField = new (0, _components.InputBlock)({
            type: "text",
            id: "login-form__login",
            label: "Login",
            name: "login"
        });
        this.children.passwordField = new (0, _components.InputBlock)({
            type: "password",
            id: "login-form__password",
            label: "Password",
            name: "password"
        });
        this.children.loginButton = new (0, _components.Button)({
            label: "Sign in",
            type: "submit",
            events: {
                click: ()=>{
                    const form = document.querySelector("#login-form");
                    form.onsubmit = (e)=>(0, _validateForm.validateForm)(e);
                }
            }
        });
        this.children.registerLink = new (0, _components.Link)({
            text: "No account?",
            type: "medium",
            url: "/registration",
            events: {
                click: (e)=>{
                    const registrationPage = new (0, _registration.RegistrationPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(registrationPage);
                }
            }
        });
        this.children.chatsLink = new (0, _components.Link)({
            text: "To chats",
            type: "medium",
            url: "/chats",
            events: {
                click: (e)=>{
                    const chatsPage = new (0, _chats.ChatsPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(chatsPage);
                }
            }
        });
        this.children.profile = new (0, _components.Link)({
            text: "Profile",
            url: "/profile",
            events: {
                click: (e)=>{
                    const profileDetailsPage = new (0, _profileDetailsPage.ProfileDetailsPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(profileDetailsPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _loginPageHbsDefault.default), {
            styles: (0, _loginScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/components":"dHnah","../registration/Registration":"bC1NC","../chats/Chats":"36rwK","/src/utils/renderDOM":"KSWc5","/src/utils/validateForm":"d4pvs","./loginPage.hbs":"gX7DX","./login.scss":"hFfED","../profile/details/ProfileDetailsPage":"gLJYG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"915bj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nanoid = require("nanoid");
var _eventBus = require("./EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    id = (0, _nanoid.nanoid)(6);
    _element = null;
    constructor(propsAndChildren = {}){
        const eventBus = new (0, _eventBusDefault.default)();
        const { props , children  } = this.getChildrenAndProps(propsAndChildren);
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.initChildren();
        this.eventBus = ()=>eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _addEvents() {
        const { events ={}  } = this.props;
        if (!events) return;
        Object.keys(events).forEach((eventName)=>{
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }
    _removeEvents() {
        const { events ={}  } = this.props;
        if (!events || !this._element) return;
        Object.keys(events).forEach((eventName)=>{
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }
    getChildrenAndProps(propsAndChildren) {
        const props = {};
        const children = {};
        Object.entries(propsAndChildren).forEach(([key, value])=>{
            if (value instanceof Block) children[key] = value;
            else if (Array.isArray(value) && value.every((v)=>v instanceof Block)) props[key] = value;
            else props[key] = value;
        });
        return {
            props: props,
            children
        };
    }
    initChildren() {}
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    init() {}
    _componentDidMount() {
        this.componentDidMount();
    }
    componentDidMount() {}
    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach((child)=>child.dispatchComponentDidMount());
    }
    _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidUpdate(oldProps, newProps) {
        return oldProps !== newProps;
    }
    setProps(nextProps) {
        if (!nextProps) return;
        Object.assign(this.props, nextProps);
    }
    get element() {
        return this._element;
    }
    _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild;
        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
        }
        this._element = newElement;
        this._addEvents();
    }
    render() {
        return new DocumentFragment();
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get (target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set (target, prop, value) {
                const oldTarget = {
                    ...target
                };
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty () {
                throw new Error("Нет доступа");
            }
        });
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
    compile(template, context) {
        const contextAndStubs = {
            ...context
        };
        Object.entries(this.children).forEach(([name, child])=>{
            if (Array.isArray(child)) {
                contextAndStubs[name] = child.map((ch)=>`<div data-id=id-${ch.id}></div>`);
                return;
            }
            contextAndStubs[name] = `<div data-id=id-${child.id}></div>`;
        });
        const htmlString = template(contextAndStubs);
        const fragment = this._createDocumentElement("template");
        fragment.innerHTML = htmlString;
        Object.entries(this.children).forEach(([_, child])=>{
            if (Array.isArray(child)) {
                child.forEach((ch)=>{
                    const stub = fragment.content.querySelector(`[data-id='id-${ch.id}']`);
                    if (stub) stub.replaceWith(ch.getContent());
                });
                return fragment.content;
            }
            const stub = fragment.content.querySelector(`[data-id='id-${child.id}']`);
            if (!stub) return;
            stub.replaceWith(child.getContent());
        });
        return fragment.content;
    }
}
exports.default = Block;

},{"nanoid":"2ifus","./EventBus":"iVvKU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ifus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iVvKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventBus {
    listeners = {};
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach((listener)=>{
            listener(...args);
        });
    }
}
exports.default = EventBus;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHnah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>(0, _buttonDefault.default));
parcelHelpers.export(exports, "Link", ()=>(0, _linkDefault.default));
parcelHelpers.export(exports, "InputBlock", ()=>(0, _inputDefault.default));
parcelHelpers.export(exports, "TextField", ()=>(0, _textFieldDefault.default));
var _button = require("./Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _input = require("./InputBlock/Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _link = require("./Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _textField = require("./TextField/TextField");
var _textFieldDefault = parcelHelpers.interopDefault(_textField);

},{"./Button/Button":"87mAs","./InputBlock/Input":"96uXV","./Link/Link":"77y7T","./TextField/TextField":"bwxbw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87mAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _buttonHbs = require("./button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
var _buttonScss = require("./button.scss");
var _buttonScssDefault = parcelHelpers.interopDefault(_buttonScss);
class Button extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _buttonHbsDefault.default), {
            label: this.props.label,
            type: this.props.type,
            events: {
                click: this.props.click
            },
            styles: (0, _buttonScssDefault.default),
            customClass: this.props.customClass
        });
    }
}
exports.default = Button;

},{"../../utils/Block":"915bj","./button.hbs":"lkzvo","./button.scss":"aGB6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkzvo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<button class="button ' + alias4((helper = (helper = lookupProperty(helpers, "customClass") || (depth0 != null ? lookupProperty(depth0, "customClass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "customClass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 22
                },
                "end": {
                    "line": 1,
                    "column": 39
                }
            }
        }) : helper)) + '" type=' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 46
                },
                "end": {
                    "line": 1,
                    "column": 56
                }
            }
        }) : helper)) + ">\n  " + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            }
        }) : helper)) + "\n</button>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7ZpO":[function(require,module,exports) {
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(3);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(36);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(5);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(37);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(43);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst["default"] = inst;
            exports["default"] = inst;
            module1.exports = exports["default"];
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) return obj;
                else {
                    var newObj = {};
                    if (obj != null) {
                        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            };
            exports.__esModule = true;
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };
            exports.__esModule = true;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(9);
            var _decorators = __webpack_require__(29);
            var _logger = __webpack_require__(31);
            var _logger2 = _interopRequireDefault(_logger);
            var _internalProtoAccess = __webpack_require__(32);
            var VERSION = "4.7.7";
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 8;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = "[object Object]";
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
                    else {
                        if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2["default"].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2["default"];
        /***/ },
        /* 4 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj /* , ...source */ ) {
                for(var i = 1; i < arguments.length; i++){
                    for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */ var isFunction = function isFunction(value) {
                return typeof value === "function";
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
                return typeof value === "function" && toString.call(value) === "[object Function]";
            };
            exports.isFunction = isFunction;
            /* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for(var i = 0, len = array.length; i < len; i++){
                    if (array[i] === value) return i;
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== "string") {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) return string.toHTML();
                    else if (string == null) return "";
                    else if (!string) return string + "";
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = "" + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) return true;
                else if (isArray(value) && value.length === 0) return true;
                else return false;
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
            }
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$defineProperty = __webpack_require__(6)["default"];
            exports.__esModule = true;
            var errorProps = [
                "description",
                "fileName",
                "lineNumber",
                "endLineNumber",
                "message",
                "name",
                "number",
                "stack"
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
                if (loc) {
                    line = loc.start.line;
                    endLineNumber = loc.end.line;
                    column = loc.start.column;
                    endColumn = loc.end.column;
                    message += " - " + line + ":" + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
                /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
                try {
                    if (loc) {
                        this.lineNumber = line;
                        this.endLineNumber = endLineNumber;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */ if (_Object$defineProperty) {
                            Object.defineProperty(this, "column", {
                                value: column,
                                enumerable: true
                            });
                            Object.defineProperty(this, "endColumn", {
                                value: endColumn,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                            this.endColumn = endColumn;
                        }
                    }
                } catch (nop) {
                /* Ignore if the browser is very particular */ }
            }
            Exception.prototype = new Error();
            exports["default"] = Exception;
            module1.exports = exports["default"];
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(7),
                __esModule: true
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
            };
        /***/ },
        /* 8 */ /***/ function(module1, exports) {
            var $Object = Object;
            module1.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: ({}).propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            };
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            exports.moveHelperToHooks = moveHelperToHooks;
            var _helpersBlockHelperMissing = __webpack_require__(10);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(11);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(24);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(25);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(26);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(27);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(28);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance);
            }
            function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                    instance.hooks[helperName] = instance.helpers[helperName];
                    if (!keepHelper) delete instance.helpers[helperName];
                }
            }
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) return fn(this);
                    else if (context === false || context == null) return inverse(this);
                    else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) options.ids = [
                                options.name
                            ];
                            return instance.helpers.each(context, options);
                        } else return inverse(this);
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            };
                        }
                        return fn(context, options);
                    }
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                var _Object$keys = __webpack_require__(12)["default"];
                var _interopRequireDefault = __webpack_require__(2)["default"];
                exports.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports["default"] = function(instance) {
                    instance.registerHelper("each", function(context, options) {
                        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
                        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
                        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
                        if (_utils.isFunction(context)) context = context.call(this);
                        if (options.data) data = _utils.createFrame(options.data);
                        function execIteration(field, index, last) {
                            if (data) {
                                data.key = field;
                                data.index = index;
                                data.first = index === 0;
                                data.last = !!last;
                                if (contextPath) data.contextPath = contextPath + field;
                            }
                            ret = ret + fn(context[field], {
                                data: data,
                                blockParams: _utils.blockParams([
                                    context[field],
                                    field
                                ], [
                                    contextPath + field,
                                    null
                                ])
                            });
                        }
                        if (context && typeof context === "object") {
                            if (_utils.isArray(context)) {
                                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
                            } else if (global.Symbol && context[global.Symbol.iterator]) {
                                var newContext = [];
                                var iterator = context[global.Symbol.iterator]();
                                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                                context = newContext;
                                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
                            } else (function() {
                                var priorKey = undefined;
                                _Object$keys(context).forEach(function(key) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                                    priorKey = key;
                                    i++;
                                });
                                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
                            })();
                        }
                        if (i === 0) ret = inverse(this);
                        return ret;
                    });
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(13),
                __esModule: true
            };
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(14);
            module1.exports = __webpack_require__(20).Object.keys;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(15);
            __webpack_require__(17)("keys", function($keys) {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /* 16 */ /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), "Object", exp);
            };
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && key in target;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(param) {
                            return this instanceof C ? new C(param) : C(param);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            module1.exports = $export;
        /***/ },
        /* 19 */ /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
        /***/ },
        /* 20 */ /***/ function(module1, exports) {
            var core = module1.exports = {
                version: "1.2.6"
            };
            if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(22);
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /* 22 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it;
            };
        /***/ },
        /* 23 */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() /* [args, ]options */ {
                    if (arguments.length === 1) // A missing field in a {{foo}} construct.
                    return undefined;
                    else // Someone is actually trying to call something, blow up.
                    throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
                    if (_utils.isFunction(conditional)) conditional = conditional.call(this);
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
                    else return options.fn(this);
                });
                instance.registerHelper("unless", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 26 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("log", function() /* message, options */ {
                    var args = [
                        undefined
                    ], options = arguments[arguments.length - 1];
                    for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
                    var level = 1;
                    if (options.hash.level != null) level = options.hash.level;
                    else if (options.data && options.data.level != null) level = options.data.level;
                    args[0] = level;
                    instance.log.apply(instance, args);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 27 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                    if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
                    return obj;
                    return options.lookupProperty(obj, field);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
                    if (_utils.isFunction(context)) context = context.call(this);
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([
                                context
                            ], [
                                data && data.contextPath
                            ])
                        });
                    } else return options.inverse(this);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(30);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance);
            }
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function(context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret;
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var logger = {
                methodMap: [
                    "debug",
                    "info",
                    "warn",
                    "error"
                ],
                level: "info",
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === "string") {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) level = levelMap;
                        else level = parseInt(level, 10);
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        // eslint-disable-next-line no-console
                        if (!console[method]) method = "log";
                        for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };
            exports["default"] = logger;
            module1.exports = exports["default"];
        /***/ },
        /* 32 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.createProtoAccessControl = createProtoAccessControl;
            exports.resultIsAllowed = resultIsAllowed;
            exports.resetLoggedProperties = resetLoggedProperties;
            var _createNewLookupObject = __webpack_require__(35);
            var _logger = __webpack_require__(31);
            var logger = _interopRequireWildcard(_logger);
            var loggedProperties = _Object$create(null);
            function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList["constructor"] = false;
                defaultMethodWhiteList["__defineGetter__"] = false;
                defaultMethodWhiteList["__defineSetter__"] = false;
                defaultMethodWhiteList["__lookupGetter__"] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                // eslint-disable-next-line no-proto
                defaultPropertyWhiteList["__proto__"] = false;
                return {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }
            function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
                else return checkWhiteList(protoAccessControl.properties, propertyName);
            }
            function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
                if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
            }
            function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                    loggedProperties[propertyName] = true;
                    logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
                }
            }
            function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            }
        /***/ },
        /* 33 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(34),
                __esModule: true
            };
        /***/ },
        /* 34 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function create(P, D) {
                return $.create(P, D);
            };
        /***/ },
        /* 35 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            exports.__esModule = true;
            exports.createNewLookupObject = createNewLookupObject;
            var _utils = __webpack_require__(4);
            /**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */ function createNewLookupObject() {
                for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                return _utils.extend.apply(undefined, [
                    _Object$create(null)
                ].concat(sources));
            }
        /***/ },
        /* 36 */ /***/ function(module1, exports) {
            // Build out our basic SafeString type
            "use strict";
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
            };
            exports["default"] = SafeString;
            module1.exports = exports["default"];
        /***/ },
        /* 37 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$seal = __webpack_require__(38)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(3);
            var _helpers = __webpack_require__(9);
            var _internalWrapHelper = __webpack_require__(42);
            var _internalProtoAccess = __webpack_require__(32);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else // Use the embedded version info since the runtime doesn't know about this revision yet
                throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
                if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as pseudo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) options.ids[0] = true;
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var extendedOptions = Utils.extend({}, options, {
                        hooks: this.hooks,
                        protoAccessControl: this.protoAccessControl
                    });
                    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, extendedOptions);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split("\n");
                            for(var i = 0, l = lines.length; i < l; i++){
                                if (!lines[i] && i + 1 === l) break;
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join("\n");
                        }
                        return result;
                    } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                            loc: loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        if (result == null) return result;
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
                        if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
                        return undefined;
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for(var i = 0; i < len; i++){
                            var result = depths[i] && container.lookupProperty(depths[i], name);
                            if (result != null) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === "function" ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + "_d"];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while(value && depth--)value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) obj = Utils.extend({}, common, param);
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: _Object$seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) data = initData(context, data);
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) depths = context != options.depths[0] ? [
                            context
                        ].concat(options.depths) : options.depths;
                        else depths = [
                            context
                        ];
                    }
                    function main(context /*, options*/ ) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function(options) {
                    if (!options.partial) {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        wrapHelpersToPassLookupProperty(mergedHelpers, container);
                        container.helpers = mergedHelpers;
                        if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
                        container.partials = container.mergeIfNeeded(options.partials, env.partials);
                        if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
                        container.hooks = {};
                        container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
                        _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                    } else {
                        container.protoAccessControl = options.protoAccessControl; // internal option
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                        container.hooks = options.hooks;
                    }
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
                    if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
                        context
                    ].concat(depths);
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
                        options.blockParams
                    ].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            /**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */ function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === "@partial-block") partial = options.data["partial-block"];
                    else partial = options.partials[options.name];
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context, options) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = true;
                if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) (function() {
                    options.data = _base.createFrame(options.data);
                    // Wrapper function to get access to currentPartialBlock from the closure
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        // Restore the partial-block from the closure for the execution of the block
                        // i.e. the part inside the block of the partial call.
                        options.data = _base.createFrame(options.data);
                        options.data["partial-block"] = currentPartialBlock;
                        return fn(context, options);
                    };
                    if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
                })();
                if (partial === undefined && partialBlock) partial = partialBlock;
                if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
                else if (partial instanceof Function) return partial(context, options);
            }
            function noop() {
                return "";
            }
            function initData(context, data) {
                if (!data || !("root" in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }
            function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                    var helper = mergedHelpers[helperName];
                    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
            }
            function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                    return Utils.extend({
                        lookupProperty: lookupProperty
                    }, options);
                });
            }
        /***/ },
        /* 38 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(39),
                __esModule: true
            };
        /***/ },
        /* 39 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(40);
            module1.exports = __webpack_require__(20).Object.seal;
        /***/ },
        /* 40 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(41);
            __webpack_require__(17)("seal", function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(it) : it;
                };
            });
        /***/ },
        /* 41 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /* 42 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.wrapHelper = wrapHelper;
            function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
                // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
                return helper;
                var wrapper = function wrapper() /* dynamic arguments */ {
                    var options = arguments[arguments.length - 1];
                    arguments[arguments.length - 1] = transformOptionsFn(options);
                    return helper.apply(this, arguments);
                };
                return wrapper;
            }
        /***/ },
        /* 43 */ /***/ function(module1, exports) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                exports.__esModule = true;
                exports["default"] = function(Handlebars) {
                    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */ Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
                        return Handlebars;
                    };
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ }
    ]);
});

},{}],"aGB6e":[function() {},{}],"96uXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
var _inputScss = require("./input.scss");
var _inputScssDefault = parcelHelpers.interopDefault(_inputScss);
var _validation = require("../../utils/validation");
const eventsObject = {
    focusin: (0, _validation.inputValidationHandler),
    focusout: (0, _validation.inputValidationHandler)
};
class InputBlock extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props,
            events: eventsObject
        });
    }
    render() {
        return this.compile((0, _inputHbsDefault.default), {
            label: this.props.label,
            name: this.props.name,
            type: this.props.type,
            id: this.props.id,
            value: this.props.value,
            required: this.props.required,
            title: this.props.title,
            styles: (0, _inputScssDefault.default)
        });
    }
}
exports.default = InputBlock;

},{"../../utils/Block":"915bj","./input.hbs":"aWNRL","./input.scss":"3oUsM","../../utils/validation":"ecV3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWNRL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="inputItem" data-name=' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 43
                }
            }
        }) : helper)) + ">\n  <input\n      type=" + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 11
                },
                "end": {
                    "line": 3,
                    "column": 21
                }
            }
        }) : helper)) + "\n      id=" + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 9
                },
                "end": {
                    "line": 4,
                    "column": 17
                }
            }
        }) : helper)) + '\n      class="inputItem__input"\n      placeholder=' + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 18
                },
                "end": {
                    "line": 6,
                    "column": 29
                }
            }
        }) : helper)) + "\n      name=" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 11
                },
                "end": {
                    "line": 7,
                    "column": 21
                }
            }
        }) : helper)) + '\n      value="' + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 13
                },
                "end": {
                    "line": 8,
                    "column": 24
                }
            }
        }) : helper)) + '"\n      ' + alias4((helper = (helper = lookupProperty(helpers, "required") || (depth0 != null ? lookupProperty(depth0, "required") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "required",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 6
                },
                "end": {
                    "line": 9,
                    "column": 20
                }
            }
        }) : helper)) + "\n      title=" + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 23
                }
            }
        }) : helper)) + "\n  />\n  <label for=" + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 13
                },
                "end": {
                    "line": 12,
                    "column": 21
                }
            }
        }) : helper)) + ' class="inputItem__label">' + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 47
                },
                "end": {
                    "line": 12,
                    "column": 58
                }
            }
        }) : helper)) + "</label>\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3oUsM":[function() {},{}],"ecV3i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_NAMES", ()=>FIELD_NAMES);
parcelHelpers.export(exports, "formValidation", ()=>formValidation);
parcelHelpers.export(exports, "inputValidation", ()=>inputValidation);
parcelHelpers.export(exports, "inputValidationHandler", ()=>inputValidationHandler);
let FIELD_NAMES;
(function(FIELD_NAMES) {
    FIELD_NAMES["first_name"] = "first_name";
    FIELD_NAMES["second_name"] = "second_name";
    FIELD_NAMES["login"] = "login";
    FIELD_NAMES["email"] = "email";
    FIELD_NAMES["oldPassword"] = "oldPassword";
    FIELD_NAMES["password"] = "password";
    FIELD_NAMES["repeatPassword"] = "repeatPassword";
    FIELD_NAMES["phone"] = "phone";
    FIELD_NAMES["message"] = "message";
})(FIELD_NAMES || (FIELD_NAMES = {}));
const PATTERNS = {
    [FIELD_NAMES.first_name]: /^[А-ЯЁA-Z]{1}([а-яёa-z]|-[А-ЯЁA-Zа-яёa-z]{1}[а-яёa-z])*$/,
    [FIELD_NAMES.second_name]: /^[А-ЯЁA-Z]{1}([а-яёa-z]|-[А-ЯЁA-Zа-яёa-z]{1}[а-яёa-z])*$/,
    [FIELD_NAMES.login]: /^(?=.*?([a-zA-Z]|-|_))(\w|-|_){3,20}$/,
    [FIELD_NAMES.email]: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    [FIELD_NAMES.phone]: /^\+?\d{10,15}$/,
    [FIELD_NAMES.message]: /[\s\S]+/,
    [FIELD_NAMES.oldPassword]: /^(?=.*?([A-Z]))(?=.*?\d)(\w|-|_){8,40}$/,
    [FIELD_NAMES.password]: /^(?=.*?([A-Z]))(?=.*?\d)(\w|-|_){8,40}$/,
    [FIELD_NAMES.repeatPassword]: /^(?=.*?([A-Z]))(?=.*?\d)(\w|-|_){8,40}$/
};
const highlightErrors = (errors, selector = ".inputItem", errorClass = "inputItem-error")=>{
    const inputWrappers = Array.from(document.querySelectorAll(selector));
    inputWrappers.forEach((inputWrapper)=>{
        const input = inputWrapper.querySelector("input");
        errors[input.name] ? inputWrapper.classList.add(errorClass) : inputWrapper.classList.remove(errorClass);
    });
};
const validateFormData = ([fieldName, value])=>PATTERNS[fieldName].test(value);
const validateInput = ({ name , value  })=>PATTERNS[name].test(value);
const formValidation = (formData, selector, errorClass)=>{
    const errors = {};
    for (const inputItem of formData)if (!validateFormData(inputItem)) errors[inputItem[0]] = true;
    highlightErrors(errors, selector, errorClass);
    if (!Object.keys(errors).length) return null;
};
const inputValidation = (input, errorClass = "inputItem-error")=>{
    let inputError = null;
    const parentElement = input.parentElement;
    if (!validateInput(input)) inputError = true;
    inputError ? parentElement.classList.add(errorClass) : parentElement.classList.remove(errorClass);
};
const inputValidationHandler = (e)=>{
    inputValidation(e.target);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77y7T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _linkHbs = require("./link.hbs");
var _linkHbsDefault = parcelHelpers.interopDefault(_linkHbs);
var _linkScss = require("./link.scss");
var _linkScssDefault = parcelHelpers.interopDefault(_linkScss);
class Link extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _linkHbsDefault.default), {
            text: this.props.text,
            url: this.props.url,
            type: this.props.type,
            color: this.props.color,
            customClass: this.props.customClass,
            events: {
                click: this.props.click
            },
            styles: (0, _linkScssDefault.default)
        });
    }
}
exports.default = Link;

},{"../../utils/Block":"915bj","./link.hbs":"l98xn","./link.scss":"2LplY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l98xn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<a href=" + alias4((helper = (helper = lookupProperty(helpers, "url") || (depth0 != null ? lookupProperty(depth0, "url") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "url",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            }
        }) : helper)) + ' class="link link-' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            }
        }) : helper)) + " " + alias4((helper = (helper = lookupProperty(helpers, "customClass") || (depth0 != null ? lookupProperty(depth0, "customClass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "customClass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 46
                },
                "end": {
                    "line": 1,
                    "column": 63
                }
            }
        }) : helper)) + '">\n  ' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 12
                }
            }
        }) : helper)) + "\n</a>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2LplY":[function() {},{}],"bwxbw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _textFieldHbs = require("./textField.hbs");
var _textFieldHbsDefault = parcelHelpers.interopDefault(_textFieldHbs);
var _textFieldScss = require("./textField.scss");
var _textFieldScssDefault = parcelHelpers.interopDefault(_textFieldScss);
class TextField extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _textFieldHbsDefault.default), {
            label: this.props.label,
            value: this.props.value,
            styles: (0, _textFieldScssDefault.default)
        });
    }
}
exports.default = TextField;

},{"../../utils/Block":"915bj","./textField.hbs":"33nsA","./textField.scss":"cLNRI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"33nsA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="textField">\n  <span class="textField__label">' + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 33
                },
                "end": {
                    "line": 2,
                    "column": 44
                }
            }
        }) : helper)) + '</span>\n  <span class="textField__value">' + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 33
                },
                "end": {
                    "line": 3,
                    "column": 44
                }
            }
        }) : helper)) + "</span>\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLNRI":[function() {},{}],"bC1NC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegistrationPage", ()=>RegistrationPage);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("../../components");
var _registrationHbs = require("./registration.hbs");
var _registrationHbsDefault = parcelHelpers.interopDefault(_registrationHbs);
var _registrationScss = require("./registration.scss");
var _registrationScssDefault = parcelHelpers.interopDefault(_registrationScss);
var _loginPage = require("/src/pages/login/LoginPage");
var _renderDOM = require("/src/utils/renderDOM");
var _validateForm = require("/src/utils/validateForm");
class RegistrationPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.emailField = new (0, _components.InputBlock)({
            type: "email",
            id: "registration-form__email",
            label: "Email",
            name: "email"
        });
        this.children.loginField = new (0, _components.InputBlock)({
            type: "text",
            id: "login-form__login",
            label: "Login",
            name: "login"
        });
        this.children.firstNameField = new (0, _components.InputBlock)({
            type: "text",
            id: "registration-form__firstName",
            label: "Name",
            name: "first_name"
        });
        this.children.secondNameField = new (0, _components.InputBlock)({
            type: "text",
            id: "registration-form__secondName",
            label: "Surname",
            name: "second_name"
        });
        this.children.phoneField = new (0, _components.InputBlock)({
            type: "tel",
            id: "registration-form__phone",
            label: "Phone",
            name: "phone"
        });
        this.children.passwordField = new (0, _components.InputBlock)({
            type: "password",
            id: "registration-form__password",
            label: "Password",
            name: "password"
        });
        this.children.repeatPasswordField = new (0, _components.InputBlock)({
            type: "password",
            id: "registration-form__repeatPassword",
            label: "Repeat Password",
            name: "repeatPassword"
        });
        this.children.registerButton = new (0, _components.Button)({
            label: "Sign up",
            type: "submit",
            events: {
                click: ()=>{
                    const form = document.querySelector("#registration-form");
                    form.onsubmit = (e)=>(0, _validateForm.validateForm)(e);
                }
            }
        });
        this.children.loginLink = new (0, _components.Link)({
            text: "Enter",
            type: "medium",
            url: "/",
            events: {
                click: (e)=>{
                    const loginPage = new (0, _loginPage.LoginPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(loginPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _registrationHbsDefault.default), {
            styles: (0, _registrationScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","../../components":"dHnah","./registration.hbs":"8qPCD","./registration.scss":"bUBzq","/src/pages/login/LoginPage":"cdEEQ","/src/utils/renderDOM":"KSWc5","/src/utils/validateForm":"d4pvs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qPCD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main>\n  <form class="registration-form" id="registration-form">\n    <h1 class="registration-form__header">Registration</h1>\n    <div class="registration-form__content">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "emailField") || (depth0 != null ? lookupProperty(depth0, "emailField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "emailField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 6
                },
                "end": {
                    "line": 5,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginField") || (depth0 != null ? lookupProperty(depth0, "loginField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 6
                },
                "end": {
                    "line": 6,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "firstNameField") || (depth0 != null ? lookupProperty(depth0, "firstNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "firstNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 6
                },
                "end": {
                    "line": 7,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "secondNameField") || (depth0 != null ? lookupProperty(depth0, "secondNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "secondNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 6
                },
                "end": {
                    "line": 8,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "phoneField") || (depth0 != null ? lookupProperty(depth0, "phoneField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phoneField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 6
                },
                "end": {
                    "line": 9,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "passwordField") || (depth0 != null ? lookupProperty(depth0, "passwordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "passwordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 6
                },
                "end": {
                    "line": 10,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "repeatPasswordField") || (depth0 != null ? lookupProperty(depth0, "repeatPasswordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "repeatPasswordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 6
                },
                "end": {
                    "line": 11,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    </div>\n    <div class="registration-form__footer">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "registerButton") || (depth0 != null ? lookupProperty(depth0, "registerButton") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "registerButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 6
                },
                "end": {
                    "line": 14,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginLink") || (depth0 != null ? lookupProperty(depth0, "loginLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 6
                },
                "end": {
                    "line": 15,
                    "column": 23
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    </div>\n  </form>\n</main>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUBzq":[function() {},{}],"d4pvs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateForm", ()=>validateForm);
var _validation = require("./validation");
const validateForm = (event, selector, errorClass)=>{
    event.preventDefault();
    const form = event.target;
    if (!form) return;
    const invalidFields = (0, _validation.formValidation)(new FormData(form), selector, errorClass);
    if (invalidFields === null) console.log(Object.fromEntries(new FormData(form).entries()));
};

},{"./validation":"ecV3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"36rwK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPage", ()=>ChatsPage);
/* eslint-disable @typescript-eslint/ban-ts-comment */ var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messages = require("./components/Messages/Messages");
var _chatsHeader = require("./components/ChatsHeader/ChatsHeader");
var _chatsList = require("./components/ChatsList/ChatsList");
var _messageCard = require("./components/Messages/components/MessageCard/MessageCard");
var _chatCard = require("./components/ChatsList/components/chatCard/ChatCard");
var _chatsHbs = require("./chats.hbs");
var _chatsHbsDefault = parcelHelpers.interopDefault(_chatsHbs);
var _emptySvg = require("/static/empty.svg");
var _emptySvgDefault = parcelHelpers.interopDefault(_emptySvg);
var _chatsScss = require("./chats.scss");
var _chatsScssDefault = parcelHelpers.interopDefault(_chatsScss);
class ChatsPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.header = new (0, _chatsHeader.ChatsHeader)();
        this.children.messages = new (0, _messages.Messages)({
            date: "2 december",
            messageList: [
                new (0, _messageCard.MessageCard)({
                    message: "Wake up Neo",
                    time: "05:21",
                    type: "got"
                }),
                new (0, _messageCard.MessageCard)({
                    message: "For what?",
                    time: "09:00",
                    type: "sent"
                }),
                new (0, _messageCard.MessageCard)({
                    message: "Just follow the white rabbit",
                    time: "11:21",
                    type: "got"
                }), 
            ],
            userName: "Alice",
            userAvatar: (0, _emptySvgDefault.default)
        });
        this.children.chatsList = new (0, _chatsList.ChatsList)({
            chatList: [
                new (0, _chatCard.ChatCard)({
                    chatIcon: (0, _emptySvgDefault.default),
                    chatName: "Morpheus",
                    lastMessage: "You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.",
                    lastMessageDate: "12:22",
                    newMessages: "1",
                    events: {
                        click: ()=>{
                            // @ts-ignore
                            this.children.messages.setProps({
                                messageList: [
                                    new (0, _messageCard.MessageCard)({
                                        message: "You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.",
                                        time: "13:00",
                                        type: "got"
                                    }), 
                                ],
                                date: "05 december",
                                userName: "Morpheus",
                                userAvatar: (0, _emptySvgDefault.default)
                            });
                        }
                    }
                }), 
            ]
        });
    }
    render() {
        return this.compile((0, _chatsHbsDefault.default), {
            styles: (0, _chatsScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./components/Messages/Messages":"7m9xI","./components/ChatsHeader/ChatsHeader":"eMh0M","./components/ChatsList/ChatsList":"87QgY","./components/Messages/components/MessageCard/MessageCard":"cV3aL","./components/ChatsList/components/chatCard/ChatCard":"9CFzM","./chats.hbs":"l8buw","/static/empty.svg":"63wOg","./chats.scss":"iwlg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7m9xI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messages", ()=>Messages);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messageList = require("./components/MessageList/MessageList");
var _messagesHbs = require("./messages.hbs");
var _messagesHbsDefault = parcelHelpers.interopDefault(_messagesHbs);
var _messagesScss = require("./messages.scss");
var _messagesScssDefault = parcelHelpers.interopDefault(_messagesScss);
var _messageForm = require("/src/pages/chats/components/Messages/components/MessageInputForm/MessageForm");
class Messages extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    initChildren() {
        this.children.messageForm = new (0, _messageForm.MessageForm)();
        this.children.messagesList = new (0, _messageList.MessageList)({
            date: this.props.date,
            messageList: this.props.messageList
        });
    }
    componentDidUpdate(oldProps, newProps) {
        if (newProps !== oldProps) this.children.messagesList = new (0, _messageList.MessageList)({
            date: this.props.date,
            messageList: this.props.messageList
        });
        return super.componentDidUpdate(oldProps, newProps);
    }
    render() {
        return this.compile((0, _messagesHbsDefault.default), {
            userName: this.props.userName,
            userAvatar: this.props.userAvatar,
            messagesList: this.props.messagesList,
            styles: (0, _messagesScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./components/MessageList/MessageList":"42C8L","./messages.hbs":"980Ky","./messages.scss":"i34pZ","/src/pages/chats/components/Messages/components/MessageInputForm/MessageForm":"GuNOs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42C8L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageList", ()=>MessageList);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messageListHbs = require("./messageList.hbs");
var _messageListHbsDefault = parcelHelpers.interopDefault(_messageListHbs);
var _messageListScss = require("./messageList.scss");
var _messageListScssDefault = parcelHelpers.interopDefault(_messageListScss);
class MessageList extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    initChildren() {
        this.children.messageList = this.props.messageList;
    }
    render() {
        return this.compile((0, _messageListHbsDefault.default), {
            date: this.props.date,
            messageList: this.props.messageList,
            styles: (0, _messageListScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./messageList.hbs":"xMZdR","./messageList.scss":"2ICt5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xMZdR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "      " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="messages__list">\n  <div class="chat__date">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "date",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  </div>\n  <div class="chat_messages">\n' + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "messageList") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 13
                }
            }
        })) != null ? stack1 : "") + "  </div>\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ICt5":[function() {},{}],"980Ky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="messagesContainer">\n  <div class="messages" >\n    <div class="messages__userInfo">\n      <div class="messages__userInfo__avatar">\n        <img src=' + ((stack1 = (helper = (helper = lookupProperty(helpers, "userAvatar") || (depth0 != null ? lookupProperty(depth0, "userAvatar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "userAvatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 17
                },
                "end": {
                    "line": 5,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + ' alt="userAvatar">\n      </div>\n      <div class="messages__userInfo__name">\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "userName") || (depth0 != null ? lookupProperty(depth0, "userName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "userName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n      </div>\n    </div>\n    <div class="messages__list">\n      <div class="chat__date">\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "date",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 8
                },
                "end": {
                    "line": 13,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n      </div>\n      <div class="chat_messages">\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "messagesList") || (depth0 != null ? lookupProperty(depth0, "messagesList") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messagesList",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 8
                },
                "end": {
                    "line": 16,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      </div>\n    </div>\n  </div>\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "messageForm") || (depth0 != null ? lookupProperty(depth0, "messageForm") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messageForm",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 20,
                    "column": 2
                },
                "end": {
                    "line": 20,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n</div>\n\n\n\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i34pZ":[function() {},{}],"GuNOs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageForm", ()=>MessageForm);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("/src/components");
var _validateForm = require("/src/utils/validateForm");
var _messageFormHbs = require("./messageForm.hbs");
var _messageFormHbsDefault = parcelHelpers.interopDefault(_messageFormHbs);
var _messageFormScss = require("./messageForm.scss");
var _messageFormScssDefault = parcelHelpers.interopDefault(_messageFormScss);
var _messageInput = require("/src/pages/chats/components/Messages/components/MessageInputForm/MessageInput/MessageInput");
var _validation = require("../../../../../../utils/validation");
class MessageForm extends (0, _blockDefault.default) {
    initChildren() {
        this.children.sendButton = new (0, _components.Button)({
            label: "",
            type: "submit",
            events: {
                click: ()=>{
                    const form = document.querySelector("#message-form");
                    form.onsubmit = (e)=>(0, _validateForm.validateForm)(e, ".messageInput", "messageInput-error");
                }
            },
            customClass: "message-form__sendMessage"
        });
        this.children.messageInput = new (0, _messageInput.MessageInput)({
            events: {
                focusin: (e)=>{
                    (0, _validation.inputValidation)(e.target, "messageInput-error");
                },
                focusout: (e)=>{
                    (0, _validation.inputValidation)(e.target, "messageInput-error");
                }
            }
        });
    }
    render() {
        return this.compile((0, _messageFormHbsDefault.default), {
            styles: (0, _messageFormScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/components":"dHnah","/src/utils/validateForm":"d4pvs","./messageForm.hbs":"dZLh5","./messageForm.scss":"cOVwh","/src/pages/chats/components/Messages/components/MessageInputForm/MessageInput/MessageInput":"dbei4","../../../../../../utils/validation":"ecV3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZLh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<form id="message-form" class="message-form">\n  <button class="message-form__addFile"></button>\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "messageInput") || (depth0 != null ? lookupProperty(depth0, "messageInput") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messageInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "sendButton") || (depth0 != null ? lookupProperty(depth0, "sendButton") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "sendButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n</form>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOVwh":[function() {},{}],"dbei4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageInput", ()=>MessageInput);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messageInputHbs = require("./messageInput.hbs");
var _messageInputHbsDefault = parcelHelpers.interopDefault(_messageInputHbs);
var _messageInputScss = require("./messageInput.scss");
var _messageInputScssDefault = parcelHelpers.interopDefault(_messageInputScss);
class MessageInput extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _messageInputHbsDefault.default), {
            events: {
                focusin: this.props.focusin,
                focusout: this.props.focusout
            },
            styles: (0, _messageInputScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./messageInput.hbs":"ioxjO","./messageInput.scss":"3c67c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioxjO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<div class="messageInput">\n  <input type="text" id="message" class="messageInput__input" name="message" placeholder="Message" autocomplete="off"/>\n</div>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3c67c":[function() {},{}],"eMh0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsHeader", ()=>ChatsHeader);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatsHeaderHbs = require("./chatsHeader.hbs");
var _chatsHeaderHbsDefault = parcelHelpers.interopDefault(_chatsHeaderHbs);
var _chatsHeaderScss = require("./chatsHeader.scss");
var _chatsHeaderScssDefault = parcelHelpers.interopDefault(_chatsHeaderScss);
class ChatsHeader extends (0, _blockDefault.default) {
    render() {
        return this.compile((0, _chatsHeaderHbsDefault.default), {
            styles: (0, _chatsHeaderScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./chatsHeader.hbs":"eXAEp","./chatsHeader.scss":"2cURf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXAEp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<div class="chatsHeader">\n  <div class="searchInput">\n    <input class="searchInput__input" placeholder="Search">\n  </div>\n</div>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cURf":[function() {},{}],"87QgY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsList", ()=>ChatsList);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatsListHbs = require("./chatsList.hbs");
var _chatsListHbsDefault = parcelHelpers.interopDefault(_chatsListHbs);
class ChatsList extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    initChildren() {
        this.children.chatList = this.props.chatList;
    }
    render() {
        return this.compile((0, _chatsListHbsDefault.default), {});
    }
}

},{"/src/utils/Block":"915bj","./chatsList.hbs":"iji9F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iji9F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "    " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="chatsList">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "chatList") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cV3aL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageCard", ()=>MessageCard);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messageCardHbs = require("./messageCard.hbs");
var _messageCardHbsDefault = parcelHelpers.interopDefault(_messageCardHbs);
var _messageCardScss = require("./messageCard.scss");
var _messageCardScssDefault = parcelHelpers.interopDefault(_messageCardScss);
class MessageCard extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _messageCardHbsDefault.default), {
            message: this.props.message,
            time: this.props.time,
            type: this.props.type,
            styles: (0, _messageCardScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./messageCard.hbs":"kU5t9","./messageCard.scss":"7lMiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kU5t9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="message__card message__card-' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 40
                },
                "end": {
                    "line": 1,
                    "column": 50
                }
            }
        }) : helper)) + '">\n  <div class="message__card__message">\n   ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "message") || (depth0 != null ? lookupProperty(depth0, "message") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 3
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  </div>\n  <div class="message__card__time message__card__time-' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 54
                },
                "end": {
                    "line": 5,
                    "column": 64
                }
            }
        }) : helper)) + '">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  </div>\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lMiQ":[function() {},{}],"9CFzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatCard", ()=>ChatCard);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatCardHbs = require("./chatCard.hbs");
var _chatCardHbsDefault = parcelHelpers.interopDefault(_chatCardHbs);
var _chatCardScss = require("./chatCard.scss");
var _chatCardScssDefault = parcelHelpers.interopDefault(_chatCardScss);
class ChatCard extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _chatCardHbsDefault.default), {
            chatIcon: this.props.chatIcon,
            chatName: this.props.chatName,
            lastMessage: this.props.lastMessage,
            lastMessageDate: this.props.lastMessageDate,
            newMessages: this.props.newMessages,
            events: {
                click: this.props.click
            },
            styles: (0, _chatCardScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","./chatCard.hbs":"clVT6","./chatCard.scss":"bzxmR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clVT6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="chatCard" onclick=' + ((stack1 = (helper = (helper = lookupProperty(helpers, "onclick") || (depth0 != null ? lookupProperty(depth0, "onclick") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "onclick",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            }
        }) : helper)) != null ? stack1 : "") + '>\n  <div class="chatIcon">\n    <img src=' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatIcon") || (depth0 != null ? lookupProperty(depth0, "chatIcon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatIcon",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 13
                },
                "end": {
                    "line": 3,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + ' alt="chatIcon">\n  </div>\n  <div class="chatInfo">\n    <div class="chatInfo__name">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatName") || (depth0 != null ? lookupProperty(depth0, "chatName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 6
                },
                "end": {
                    "line": 7,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    </div>\n    <div class="chatInfo__lastMessage">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "lastMessage") || (depth0 != null ? lookupProperty(depth0, "lastMessage") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lastMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 6
                },
                "end": {
                    "line": 10,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    </div>\n  </div>\n  <div class="chatSubInfo">\n    <div class="chatSubInfo__date">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "lastMessageDate") || (depth0 != null ? lookupProperty(depth0, "lastMessageDate") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lastMessageDate",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 6
                },
                "end": {
                    "line": 15,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    </div>\n    <div class="chatSubInfo__newMessages">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "newMessages") || (depth0 != null ? lookupProperty(depth0, "newMessages") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "newMessages",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 6
                },
                "end": {
                    "line": 18,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    </div>\n  </div>\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzxmR":[function() {},{}],"l8buw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="chats">\n  <div class="chats__list">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "header") || (depth0 != null ? lookupProperty(depth0, "header") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "header",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 18
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatsList") || (depth0 != null ? lookupProperty(depth0, "chatsList") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatsList",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  </div>\n  <div class="chats__current">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "messages") || (depth0 != null ? lookupProperty(depth0, "messages") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messages",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 4
                },
                "end": {
                    "line": 7,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  </div>\n</main>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63wOg":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "empty.b1e0a695.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iwlg6":[function() {},{}],"gX7DX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main>\n  <form class="login-form" id="login-form">\n    <h1 class="login-form__header">Enter</h1>\n    <div class="login-form__content">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginField") || (depth0 != null ? lookupProperty(depth0, "loginField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 6
                },
                "end": {
                    "line": 5,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "passwordField") || (depth0 != null ? lookupProperty(depth0, "passwordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "passwordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 6
                },
                "end": {
                    "line": 6,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    </div>\n    <div class="login-form__footer">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginButton") || (depth0 != null ? lookupProperty(depth0, "loginButton") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 6
                },
                "end": {
                    "line": 9,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "registerLink") || (depth0 != null ? lookupProperty(depth0, "registerLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "registerLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 6
                },
                "end": {
                    "line": 10,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatsLink") || (depth0 != null ? lookupProperty(depth0, "chatsLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatsLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 6
                },
                "end": {
                    "line": 11,
                    "column": 23
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "profile") || (depth0 != null ? lookupProperty(depth0, "profile") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 6
                },
                "end": {
                    "line": 12,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n\n    </div>\n  </form>\n</main>\n\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFfED":[function() {},{}],"gLJYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileDetailsPage", ()=>ProfileDetailsPage);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("/src/components");
var _profileHeader = require("../components/ProfileHeader/ProfileHeader");
var _profileSidebar = require("../components/ProfileSidebar/ProfileSidebar");
var _profileDetailsData = require("./components/ProfileDetailsData/ProfileDetailsData");
var _renderDOM = require("/src/utils/renderDOM");
var _profileEditPage = require("/src/pages/profile/edit/ProfileEditPage");
var _changePasswordPage = require("/src/pages/profile/changePassword/ChangePasswordPage");
var _loginPage = require("/src/pages/login/LoginPage");
var _profileDetailsHbs = require("./profileDetails.hbs");
var _profileDetailsHbsDefault = parcelHelpers.interopDefault(_profileDetailsHbs);
var _profileDetailsScss = require("./profileDetails.scss");
var _profileDetailsScssDefault = parcelHelpers.interopDefault(_profileDetailsScss);
class ProfileDetailsPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.profileHeader = new (0, _profileHeader.ProfileHeader)();
        this.children.sidebar = new (0, _profileSidebar.ProfileSidebar)();
        this.children.profileDetailsData = new (0, _profileDetailsData.ProfileDetailsData)();
        this.children.changeDataLink = new (0, _components.Link)({
            text: "Edit data",
            url: "/editProfile",
            type: "large",
            events: {
                click: (e)=>{
                    const profileEditPage = new (0, _profileEditPage.ProfileEditPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(profileEditPage);
                }
            }
        });
        this.children.changePasswordLink = new (0, _components.Link)({
            text: "Change Password",
            url: "/changePassword",
            type: "large",
            events: {
                click: (e)=>{
                    const changePasswordPage = new (0, _changePasswordPage.ChangePasswordPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(changePasswordPage);
                }
            }
        });
        this.children.homeLink = new (0, _components.Link)({
            text: "Exit",
            url: "/",
            type: "large",
            customClass: "profile__action__homeLink",
            events: {
                click: (e)=>{
                    const loginPage = new (0, _loginPage.LoginPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(loginPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _profileDetailsHbsDefault.default), {
            styles: (0, _profileDetailsScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/components":"dHnah","../components/ProfileHeader/ProfileHeader":"cpSAG","../components/ProfileSidebar/ProfileSidebar":"6We9l","./components/ProfileDetailsData/ProfileDetailsData":"iTAEZ","/src/utils/renderDOM":"KSWc5","/src/pages/profile/edit/ProfileEditPage":"hyaK0","/src/pages/profile/changePassword/ChangePasswordPage":"1wFLB","/src/pages/login/LoginPage":"cdEEQ","./profileDetails.hbs":"u4Opb","./profileDetails.scss":"7jUos","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpSAG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileHeader", ()=>ProfileHeader);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _userAvatarSvg = require("/static/user_avatar.svg");
var _userAvatarSvgDefault = parcelHelpers.interopDefault(_userAvatarSvg);
var _profileHeaderHbs = require("./profileHeader.hbs");
var _profileHeaderHbsDefault = parcelHelpers.interopDefault(_profileHeaderHbs);
var _profileHeaderScss = require("./profileHeader.scss");
var _profileHeaderScssDefault = parcelHelpers.interopDefault(_profileHeaderScss);
class ProfileHeader extends (0, _blockDefault.default) {
    render() {
        return this.compile((0, _profileHeaderHbsDefault.default), {
            styles: (0, _profileHeaderScssDefault.default),
            avatar: (0, _userAvatarSvgDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/static/user_avatar.svg":"hopQa","./profileHeader.hbs":"cGiYT","./profileHeader.scss":"22T5z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hopQa":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "user_avatar.b4de16a9.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cGiYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<div class="profile__header">\n  <div class="header__name">Your Name</div>\n</div>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22T5z":[function() {},{}],"6We9l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileSidebar", ()=>ProfileSidebar);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("/src/components");
var _profileSidebarHbs = require("./profileSidebar.hbs");
var _profileSidebarHbsDefault = parcelHelpers.interopDefault(_profileSidebarHbs);
var _profileSidebarScss = require("./profileSidebar.scss");
var _profileSidebarScssDefault = parcelHelpers.interopDefault(_profileSidebarScss);
var _renderDOM = require("/src/utils/renderDOM");
var _chats = require("../../../chats/Chats");
class ProfileSidebar extends (0, _blockDefault.default) {
    initChildren() {
        this.children.backButton = new (0, _components.Link)({
            text: "",
            url: "/chats",
            customClass: "sidebar__backButton",
            events: {
                click: (e)=>{
                    const chatsPage = new (0, _chats.ChatsPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(chatsPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _profileSidebarHbsDefault.default), {
            styles: (0, _profileSidebarScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/components":"dHnah","./profileSidebar.hbs":"8uR83","./profileSidebar.scss":"91W6d","/src/utils/renderDOM":"KSWc5","../../../chats/Chats":"36rwK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uR83":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="sidebar">\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "backButton") || (depth0 != null ? lookupProperty(depth0, "backButton") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "backButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91W6d":[function() {},{}],"iTAEZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileDetailsData", ()=>ProfileDetailsData);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("/src/components");
var _profileDetailsDataHbs = require("./profileDetailsData.hbs");
var _profileDetailsDataHbsDefault = parcelHelpers.interopDefault(_profileDetailsDataHbs);
var _profileDetailsDataScss = require("./profileDetailsData.scss");
var _profileDetailsDataScssDefault = parcelHelpers.interopDefault(_profileDetailsDataScss);
class ProfileDetailsData extends (0, _blockDefault.default) {
    initChildren() {
        this.children.emailField = new (0, _components.TextField)({
            label: "Email",
            value: "email@email.ru"
        });
        this.children.loginField = new (0, _components.TextField)({
            label: "Login",
            value: "hardssd"
        });
        this.children.firstNameField = new (0, _components.TextField)({
            label: "Name",
            value: "Andrew"
        });
        this.children.secondNameField = new (0, _components.TextField)({
            label: "Surname",
            value: "Volkov"
        });
        this.children.chatNameField = new (0, _components.TextField)({
            label: "Name in chat",
            value: "Andrew"
        });
        this.children.phoneField = new (0, _components.TextField)({
            label: "Phone",
            value: "+7 (000) 0000000"
        });
    }
    render() {
        return this.compile((0, _profileDetailsDataHbsDefault.default), {
            styles: (0, _profileDetailsDataScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/components":"dHnah","./profileDetailsData.hbs":"bAwKM","./profileDetailsData.scss":"65WmX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAwKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="profile__data">\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "emailField") || (depth0 != null ? lookupProperty(depth0, "emailField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "emailField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginField") || (depth0 != null ? lookupProperty(depth0, "loginField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "firstNameField") || (depth0 != null ? lookupProperty(depth0, "firstNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "firstNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "secondNameField") || (depth0 != null ? lookupProperty(depth0, "secondNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "secondNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatNameField") || (depth0 != null ? lookupProperty(depth0, "chatNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 2
                },
                "end": {
                    "line": 6,
                    "column": 23
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "phoneField") || (depth0 != null ? lookupProperty(depth0, "phoneField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phoneField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65WmX":[function() {},{}],"hyaK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileEditPage", ()=>ProfileEditPage);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _profileHeader = require("/src/pages/profile/components/ProfileHeader/ProfileHeader");
var _profileSidebar = require("/src/pages/profile/components/ProfileSidebar/ProfileSidebar");
var _profileEditForm = require("/src/pages/profile/edit/components/ProfileEditForm/ProfileEditForm");
var _profileEditHbs = require("./profileEdit.hbs");
var _profileEditHbsDefault = parcelHelpers.interopDefault(_profileEditHbs);
var _profileEditScss = require("./profileEdit.scss");
var _profileEditScssDefault = parcelHelpers.interopDefault(_profileEditScss);
class ProfileEditPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.profileHeader = new (0, _profileHeader.ProfileHeader)();
        this.children.sidebar = new (0, _profileSidebar.ProfileSidebar)();
        this.children.profileEditForm = new (0, _profileEditForm.ProfileEditForm)();
    }
    render() {
        return this.compile((0, _profileEditHbsDefault.default), {
            styles: (0, _profileEditScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/pages/profile/components/ProfileHeader/ProfileHeader":"cpSAG","/src/pages/profile/components/ProfileSidebar/ProfileSidebar":"6We9l","/src/pages/profile/edit/components/ProfileEditForm/ProfileEditForm":"etyPf","./profileEdit.hbs":"lQ8hH","./profileEdit.scss":"lVief","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etyPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileEditForm", ()=>ProfileEditForm);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("/src/components");
var _validateForm = require("/src/utils/validateForm");
var _profileEditFormHbs = require("./profileEditForm.hbs");
var _profileEditFormHbsDefault = parcelHelpers.interopDefault(_profileEditFormHbs);
var _profileEditFormScss = require("./profileEditForm.scss");
var _profileEditFormScssDefault = parcelHelpers.interopDefault(_profileEditFormScss);
class ProfileEditForm extends (0, _blockDefault.default) {
    initChildren() {
        this.children.emailEditField = new (0, _components.InputBlock)({
            type: "email",
            id: "profileEdit__email",
            label: "Email",
            name: "email",
            value: "email@email.ru"
        });
        this.children.loginEditField = new (0, _components.InputBlock)({
            type: "text",
            id: "profileEdit__login",
            label: "Login",
            name: "login",
            value: "morpheus"
        });
        this.children.firstNameEditField = new (0, _components.InputBlock)({
            type: "text",
            id: "profileEdit__firstName",
            label: "Name",
            name: "first_name",
            value: "Andrew"
        });
        this.children.secondNameEditField = new (0, _components.InputBlock)({
            type: "text",
            id: "profileEdit__secondName",
            label: "Surname",
            name: "second_name",
            value: "Volkov"
        });
        this.children.phoneEditField = new (0, _components.InputBlock)({
            type: "tel",
            id: "profileEdit__phone",
            label: "Phone",
            name: "phone",
            value: "+79999999999"
        });
        this.children.saveButton = new (0, _components.Button)({
            label: "Save",
            type: "submit",
            events: {
                click: ()=>{
                    const form = document.querySelector("#profileEdit-form");
                    form.onsubmit = (e)=>(0, _validateForm.validateForm)(e);
                }
            }
        });
    }
    render() {
        return this.compile((0, _profileEditFormHbsDefault.default), {
            styles: (0, _profileEditFormScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/components":"dHnah","/src/utils/validateForm":"d4pvs","./profileEditForm.hbs":"9FSye","./profileEditForm.scss":"fy5Jc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FSye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<form class="profileEditForm" id="profileEdit-form">\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "emailEditField") || (depth0 != null ? lookupProperty(depth0, "emailEditField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "emailEditField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginEditField") || (depth0 != null ? lookupProperty(depth0, "loginEditField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginEditField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "firstNameEditField") || (depth0 != null ? lookupProperty(depth0, "firstNameEditField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "firstNameEditField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "secondNameEditField") || (depth0 != null ? lookupProperty(depth0, "secondNameEditField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "secondNameEditField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatNameEditField") || (depth0 != null ? lookupProperty(depth0, "chatNameEditField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatNameEditField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 2
                },
                "end": {
                    "line": 6,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "phoneEditField") || (depth0 != null ? lookupProperty(depth0, "phoneEditField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phoneEditField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  <div class="profileEditForm__actionButton">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "saveButton") || (depth0 != null ? lookupProperty(depth0, "saveButton") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "saveButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 4
                },
                "end": {
                    "line": 9,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  </div>\n</form>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fy5Jc":[function() {},{}],"lQ8hH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="profile">\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "sidebar") || (depth0 != null ? lookupProperty(depth0, "sidebar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "sidebar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  <div class="profile__content">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "profileHeader") || (depth0 != null ? lookupProperty(depth0, "profileHeader") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profileHeader",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "profileEditForm") || (depth0 != null ? lookupProperty(depth0, "profileEditForm") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profileEditForm",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  </div>\n</main>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVief":[function() {},{}],"1wFLB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChangePasswordPage", ()=>ChangePasswordPage);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _profileHeader = require("/src/pages/profile/components/ProfileHeader/ProfileHeader");
var _profileSidebar = require("/src/pages/profile/components/ProfileSidebar/ProfileSidebar");
var _components = require("/src/components");
var _changePasswordHbs = require("./changePassword.hbs");
var _changePasswordHbsDefault = parcelHelpers.interopDefault(_changePasswordHbs);
var _changePasswordScss = require("./changePassword.scss");
var _changePasswordScssDefault = parcelHelpers.interopDefault(_changePasswordScss);
var _validateForm = require("/src/utils/validateForm");
class ChangePasswordPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.profileHeader = new (0, _profileHeader.ProfileHeader)();
        this.children.sidebar = new (0, _profileSidebar.ProfileSidebar)();
        this.children.oldPasswordField = new (0, _components.InputBlock)({
            type: "password",
            id: "changePassword__oldPassword",
            label: "Старый пароль",
            name: "oldPassword"
        });
        this.children.newPasswordField = new (0, _components.InputBlock)({
            type: "password",
            id: "changePassword__newPassword",
            label: "Новый пароль",
            name: "password"
        });
        this.children.repeatNewPasswordField = new (0, _components.InputBlock)({
            type: "password",
            id: "changePassword__repeatNewPassword",
            label: "Повторите новый пароль",
            name: "repeatPassword"
        });
        this.children.saveButton = new (0, _components.Button)({
            label: "Сохранить",
            type: "submit",
            events: {
                click: ()=>{
                    const form = document.querySelector("#changePassword-form");
                    form.onsubmit = (e)=>(0, _validateForm.validateForm)(e);
                }
            }
        });
    }
    render() {
        return this.compile((0, _changePasswordHbsDefault.default), {
            styles: (0, _changePasswordScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","/src/pages/profile/components/ProfileHeader/ProfileHeader":"cpSAG","/src/pages/profile/components/ProfileSidebar/ProfileSidebar":"6We9l","/src/components":"dHnah","./changePassword.hbs":"8uXQN","./changePassword.scss":"abygL","/src/utils/validateForm":"d4pvs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uXQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="profile" id="changePassword-form">\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "sidebar") || (depth0 != null ? lookupProperty(depth0, "sidebar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "sidebar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  <div class="profile__content">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "profileHeader") || (depth0 != null ? lookupProperty(depth0, "profileHeader") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profileHeader",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    <form class="profileChangePasswordForm">\n      ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "oldPasswordField") || (depth0 != null ? lookupProperty(depth0, "oldPasswordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "oldPasswordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 6
                },
                "end": {
                    "line": 6,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "newPasswordField") || (depth0 != null ? lookupProperty(depth0, "newPasswordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "newPasswordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 6
                },
                "end": {
                    "line": 7,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "repeatNewPasswordField") || (depth0 != null ? lookupProperty(depth0, "repeatNewPasswordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "repeatNewPasswordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 6
                },
                "end": {
                    "line": 8,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n      <div class="profileChangePasswordForm__actionButton">\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "saveButton") || (depth0 != null ? lookupProperty(depth0, "saveButton") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "saveButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 8
                },
                "end": {
                    "line": 10,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n      </div>\n    </form>\n  </div>\n</main>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abygL":[function() {},{}],"u4Opb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="profile">\n  ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "sidebar") || (depth0 != null ? lookupProperty(depth0, "sidebar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "sidebar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n  <div class="profile__content">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "profileHeader") || (depth0 != null ? lookupProperty(depth0, "profileHeader") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profileHeader",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "profileDetailsData") || (depth0 != null ? lookupProperty(depth0, "profileDetailsData") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profileDetailsData",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n    <div class="profile__action">\n        <div class="profile__action__button">\n          ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "changeDataLink") || (depth0 != null ? lookupProperty(depth0, "changeDataLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "changeDataLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 10
                },
                "end": {
                    "line": 8,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n        </div>\n        <div class="profile__action__button">\n          ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "changePasswordLink") || (depth0 != null ? lookupProperty(depth0, "changePasswordLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "changePasswordLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 10
                },
                "end": {
                    "line": 11,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + '\n        </div>\n        <div class="profile__action__button">\n          ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "homeLink") || (depth0 != null ? lookupProperty(depth0, "homeLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "homeLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 10
                },
                "end": {
                    "line": 14,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        </div>\n      </div>\n  </div>\n</main>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jUos":[function() {},{}],"le8go":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFoundPage", ()=>NotFoundPage);
var _block = require("/src/utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _components = require("../../components");
var _404Hbs = require("./404.hbs");
var _404HbsDefault = parcelHelpers.interopDefault(_404Hbs);
var _404Scss = require("./404.scss");
var _404ScssDefault = parcelHelpers.interopDefault(_404Scss);
var _renderDOM = require("/src/utils/renderDOM");
var _chats = require("../chats/Chats");
class NotFoundPage extends (0, _blockDefault.default) {
    initChildren() {
        this.children.homeLink = new (0, _components.Link)({
            text: "Назад к чатам",
            url: "/chats",
            events: {
                click: (e)=>{
                    const chatsPage = new (0, _chats.ChatsPage)();
                    e.preventDefault();
                    (0, _renderDOM.renderDOM)(chatsPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _404HbsDefault.default), {
            styles: (0, _404ScssDefault.default)
        });
    }
}

},{"/src/utils/Block":"915bj","../../components":"dHnah","./404.hbs":"01Ury","./404.scss":"i8QqD","/src/utils/renderDOM":"KSWc5","../chats/Chats":"36rwK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Ury":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="notFound__wrapper">\n  <h1 class="notFound__title">404</h1>\n  <h2 class="notFound__subtitle">Не туда попали</h2>\n  <div class="notFound__backButton">\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "homeLink") || (depth0 != null ? lookupProperty(depth0, "homeLink") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "homeLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n  </div>\n</main>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i8QqD":[function() {},{}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequireab20")

//# sourceMappingURL=index.b71e74eb.js.map
