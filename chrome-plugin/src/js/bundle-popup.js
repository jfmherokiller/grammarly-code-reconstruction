!function e$$12(t, n, r) {
    /**
     * @param {string} o
     * @param {?} u
     * @return {?}
     */
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" === typeof require && require;
                if (!u && a) {
                    return a(o, true);
                }
                if (i) {
                    return i(o, true);
                }
                /** @type {Error} */
                var err = new Error("Cannot find module '" + o + "'");
                throw err.code = "MODULE_NOT_FOUND", err;
            }
            var module_ = n[o] = {
                exports : {}
            };
            t[o][0].call(module_.exports, function(e) {
                var n = t[o][1][e];
                if (n) {
                    return s(n);
                } else {
                    return s(e);
                }
            }, module_, module_.exports, e$$12, t, n, r);
        }
        return n[o].exports;
    }
    var i = "function" === typeof require && require;
    /** @type {number} */
    var o = 0;
    for (;o < r.length;o++) {
        s(r[o]);
    }
    return s;
}({
    1 : [function(require, dataAndEvents, result) {
        /**
         * @param {number} name
         * @param {number} type
         * @param {?} val
         * @return {?}
         */
        function style(name, type, val) {
            return arguments.length < 2 ? split(name) : void set(name, type, val);
        }
        /**
         * @param {number} key
         * @param {number} properties
         * @return {undefined}
         */
        function set(key, properties) {
            var opt = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
            /** @type {string} */
            var curCookie = exists(key) + "=" + exists(properties);
            if (null === properties) {
                /** @type {number} */
                opt.maxage = -1;
            }
            if (opt.maxage) {
                /** @type {Date} */
                opt.expires = new Date(+new Date + opt.maxage);
            }
            if (opt.path) {
                curCookie += "; path=" + opt.path;
            }
            if (opt.domain) {
                curCookie += "; domain=" + opt.domain;
            }
            if (opt.expires) {
                curCookie += "; expires=" + opt.expires.toUTCString();
            }
            if (opt.secure) {
                curCookie += "; secure";
            }
            /** @type {string} */
            document.cookie = curCookie;
        }
        /**
         * @param {number} prop
         * @return {?}
         */
        function split(prop) {
            var node = each(document.cookie);
            return prop ? node[prop] : node;
        }
        /**
         * @param {string} collection
         * @return {?}
         */
        function each(collection) {
            var obj = {};
            var pairs = collection.split(/ *; */);
            if (!pairs[0]) {
                return obj;
            }
            var expectedNumberOfNonCommentArgs = pairs;
            /** @type {boolean} */
            var _isArray = Array.isArray(expectedNumberOfNonCommentArgs);
            /** @type {number} */
            var x = 0;
            expectedNumberOfNonCommentArgs = _isArray ? expectedNumberOfNonCommentArgs : expectedNumberOfNonCommentArgs[Symbol.iterator]();
            for (;;) {
                var val;
                if (_isArray) {
                    if (x >= expectedNumberOfNonCommentArgs.length) {
                        break;
                    }
                    val = expectedNumberOfNonCommentArgs[x++];
                } else {
                    if (x = expectedNumberOfNonCommentArgs.next(), x.done) {
                        break;
                    }
                    val = x.value;
                }
                var elems = val;
                elems = elems.split("=");
                obj[fn(elems[0])] = fn(elems[1]);
            }
            return obj;
        }
        /**
         * @param {number} key
         * @return {?}
         */
        function exists(key) {
            try {
                return encodeURIComponent(key);
            } catch (e) {
                return null;
            }
        }
        /**
         * @param {?} param
         * @return {?}
         */
        function fn(param) {
            try {
                return decodeURIComponent(param);
            } catch (e) {
                return null;
            }
        }
        /** @type {boolean} */
        result.__esModule = true;
        /** @type {function (number, number, ?): ?} */
        result["default"] = style;
    }, {}],
    2 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {string} _value
         * @return {?}
         */
        function resolve(_value) {
            return{
                type : "success",
                value : _value
            };
        }
        /**
         * @param {Error} reason
         * @return {?}
         */
        function reject(reason) {
            return{
                type : "failure",
                error : reason
            };
        }
        /**
         * @param {?} promise
         * @return {?}
         */
        function connect(promise) {
            return promise.then(resolve, reject);
        }
        /**
         * @param {number} opt_attributes
         * @param {number} timestep
         * @param {Function} callback
         * @return {?}
         */
        function save(opt_attributes, timestep, callback) {
            var result = callback();
            return opt_attributes > 0 ? result["catch"](function(dataAndEvents) {
                return(new Promise(function(fnc, dataAndEvents) {
                    return setTimeout(fnc, timestep);
                })).then(function(dataAndEvents) {
                    return save(opt_attributes - 1, timestep, callback);
                });
            }) : result;
        }
        var dataAttr = this && this.__extends || function() {
            var mixIn = Object.setPrototypeOf || ({
                __proto__ : []
            } instanceof Array && function(expectedNumberOfNonCommentArgs, key) {
                /** @type {Function} */
                expectedNumberOfNonCommentArgs.__proto__ = key;
            } || function(expectedNumberOfNonCommentArgs, key) {
                var k;
                for (k in key) {
                    if (key.hasOwnProperty(k)) {
                        expectedNumberOfNonCommentArgs[k] = key[k];
                    }
                }
            });
            return function(constructor, expectedNumberOfNonCommentArgs) {
                /**
                 * @return {undefined}
                 */
                function __() {
                    /** @type {Object} */
                    this.constructor = constructor;
                }
                mixIn(constructor, expectedNumberOfNonCommentArgs);
                constructor.prototype = null === expectedNumberOfNonCommentArgs ? Object.create(expectedNumberOfNonCommentArgs) : (__.prototype = expectedNumberOfNonCommentArgs.prototype, new __);
            };
        }();
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var events = require("@grammarly-npm/cookie");
        var Base = require("./util");
        /** @type {string} */
        var key = "gnar_containerId";
        /** @type {string} */
        var storageKey = "gnar_containerId_test";
        /** @type {number} */
        var attributes = 12;
        /**
         * @return {?}
         */
        var formatDate = function() {
            return(new Date).setFullYear((new Date).getFullYear() + 10);
        };
        /**
         * @return {?}
         */
        var timestamp = function() {
            return(new Date).setMinutes((new Date).getMinutes() + 10);
        };
        /** @type {RegExp} */
        var isSimple = /^\.\w+\.\w+/;
        var ContainerIdManager = function() {
            /**
             * @param {?} err
             * @param {number} contexts
             * @param {?} n
             * @param {?} ctx
             * @param {number} a
             * @param {number} substitution
             * @param {Function} x
             * @return {undefined}
             */
            function f(err, contexts, n, ctx, a, substitution, x) {
                if (void 0 === contexts) {
                    /** @type {Array} */
                    contexts = [];
                }
                if (void 0 === a) {
                    /** @type {number} */
                    a = 3E5;
                }
                if (void 0 === substitution) {
                    /** @type {number} */
                    substitution = 0;
                }
                if (void 0 === x) {
                    /**
                     * @return {?}
                     */
                    x = function() {
                        return Date.now();
                    };
                }
                this.primaryStorage = err;
                /** @type {number} */
                this.secondaryStorages = contexts;
                this._logger = n;
                this._metric = ctx;
                /** @type {number} */
                this._cacheSuccessTimeoutMillis = a;
                /** @type {number} */
                this._cacheFailureTimeoutMillis = substitution;
                /** @type {Function} */
                this._getTime = x;
                /** @type {Array} */
                this._allStorages = [err].concat(contexts);
            }
            return f.prototype._expireCache = function(dataAndEvents) {
                if (0 === dataAndEvents) {
                    /** @type {number} */
                    this._cacheExpireTimestamp = 0;
                } else {
                    if (dataAndEvents > 0) {
                        this._cacheExpireTimestamp = this._getTime() + dataAndEvents;
                    }
                }
            }, f.prototype.getContainerId = function() {
                var that = this;
                if (void 0 !== this._cache && (void 0 === this._cacheExpireTimestamp || this._getTime() < this._cacheExpireTimestamp)) {
                    return this._cache;
                }
                var event = this._metric.getTimer("doGetContainerId.timer").start();
                var val = this._doGetContainerId();
                return this._cache = val, this._cacheExpireTimestamp = void 0, val.then(function(dataAndEvents) {
                    return that._expireCache(that._cacheSuccessTimeoutMillis);
                }, function(dataAndEvents) {
                    return that._expireCache(that._cacheFailureTimeoutMillis);
                }), val.then(function(dataAndEvents) {
                    event.stop();
                    that._metric.getCounter("doGetContainerId.success").increment();
                }, function(key) {
                    event.stop();
                    that._metric.getCounter("doGetContainerId.failure").increment();
                    that._logger.warn("doGetContainerId.failed", key);
                }), val;
            }, f._generateContainerId = function() {
                return Base.alphanumeric(attributes);
            }, f.prototype._doGetContainerId = function() {
                var self = this;
                var promise = Promise.all(this._allStorages.map(function(dataAndEvents) {
                    return connect(dataAndEvents.safeGetContainerId());
                }));
                return promise.then(function(a) {
                    var next = a[0];
                    if ("failure" === next.type) {
                        return Promise.reject("getting containerId from primary storage " + ("'" + self.primaryStorage.name + "' has failed: " + next.error));
                    }
                    var expectedNumberOfNonCommentArgs;
                    var amount = a.find(function(textfield) {
                        return "success" === textfield.type && void 0 !== textfield.value;
                    });
                    /** @type {boolean} */
                    var program = "success" === next.type && (void 0 === next.value && void 0 !== amount);
                    /** @type {boolean} */
                    var inverse = false;
                    if (void 0 === amount) {
                        expectedNumberOfNonCommentArgs = f._generateContainerId();
                        /** @type {boolean} */
                        inverse = true;
                    } else {
                        expectedNumberOfNonCommentArgs = amount.value;
                    }
                    var values = a.map(function(textfield, timeoutKey) {
                        return "success" === textfield.type && textfield.value !== expectedNumberOfNonCommentArgs ? connect(self._allStorages[timeoutKey].safeSetContainerId(expectedNumberOfNonCommentArgs)) : Promise.resolve(resolve(void 0));
                    });
                    var promise = Promise.all(values).then(function(params) {
                        if (program || inverse) {
                            var param = params[0];
                            if ("success" !== param.type) {
                                return Promise.reject("setting containerId to primary storage has failed: " + param.error);
                            }
                        }
                        return Promise.resolve(expectedNumberOfNonCommentArgs);
                    });
                    return promise.then(function(dataAndEvents) {
                        if (program) {
                            self._metric.getCounter("recovered").increment();
                        } else {
                            if (inverse) {
                                self._metric.getCounter("generated").increment();
                            }
                        }
                    }), promise;
                });
            }, f;
        }();
        expectedNumberOfNonCommentArgs.ContainerIdManager = ContainerIdManager;
        var camelKey = function() {
            /**
             * @param {string} name
             * @return {undefined}
             */
            function Set(name) {
                /** @type {string} */
                this.name = name;
            }
            return Set.prototype.safeSetContainerId = function(isXML) {
                var req1 = this;
                return this.ensureAvailable().then(function() {
                    return req1.setContainerId(isXML);
                });
            }, Set.prototype.safeGetContainerId = function() {
                var getContainerId = this;
                return this.ensureAvailable().then(function() {
                    return getContainerId.getContainerId();
                }).then(function(buffer) {
                    return "" === buffer ? void 0 : buffer;
                });
            }, Set;
        }();
        expectedNumberOfNonCommentArgs.BaseStorage = camelKey;
        var ChromeCookieStorage = function(camelKey) {
            /**
             * @param {?} url
             * @param {?} qualifier
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(url, qualifier) {
                var self = camelKey.call(this, "chromeCookie") || this;
                if (self._url = url, self._domain = qualifier, !isSimple.test(qualifier)) {
                    throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
                }
                return self;
            }
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype._hasRuntimeError = function() {
                return window.chrome && (window.chrome.runtime && window.chrome.runtime.lastError);
            }, expectedNumberOfNonCommentArgs.prototype.ensureAvailable = function() {
                var settings = this;
                return save(2, 1E3, function() {
                    return new Promise(function($sanitize, done) {
                        var tag = Base.alphanumeric(10);
                        try {
                            window.chrome.cookies.set({
                                name : tag,
                                value : tag,
                                url : settings._url,
                                domain : settings._domain,
                                expirationDate : timestamp() / 1E3
                            }, function(child) {
                                var ex = settings._hasRuntimeError();
                                if (!child) {
                                    if (ex) {
                                        done("chrome.cookie.set failed with an error: " + ex.message);
                                    }
                                }
                                if (child && child.value === tag) {
                                    $sanitize();
                                } else {
                                    done(new Error("ChromeCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + tag + ", the result is " + (child ? child.value : child) + "."));
                                }
                            });
                        } catch (err) {
                            done(err);
                        }
                    });
                });
            }, expectedNumberOfNonCommentArgs.prototype.getContainerId = function() {
                var settings = this;
                return new Promise(function(done, on) {
                    try {
                        window.chrome.cookies.get({
                            url : settings._url,
                            name : key
                        }, function(found) {
                            var ex = settings._hasRuntimeError();
                            if (!found) {
                                if (ex) {
                                    on("chrome.cookie.get failed with an error: " + ex.message);
                                }
                            }
                            done(found ? found.value : void 0);
                        });
                    } catch (failuresLink) {
                        on(failuresLink);
                    }
                });
            }, expectedNumberOfNonCommentArgs.prototype.setContainerId = function(value) {
                var settings = this;
                return new Promise(function($sanitize, done) {
                    try {
                        window.chrome.cookies.set({
                            name : key,
                            value : value,
                            url : settings._url,
                            domain : settings._domain,
                            expirationDate : formatDate() / 1E3
                        }, function(s) {
                            var ex = settings._hasRuntimeError();
                            if (!s) {
                                if (ex) {
                                    done("chrome.cookie.set failed with an error: " + ex.message);
                                }
                            }
                            if (!(s && s.value === value)) {
                                done(new Error("setContainerId failed.\n            Tried to set " + value + ", the result is " + (s ? s.value : s) + "."));
                            }
                            $sanitize();
                        });
                    } catch (err) {
                        done(err);
                    }
                });
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.ChromeCookieStorage = ChromeCookieStorage;
        var WebExtensionsCookieStorage = function(camelKey) {
            /**
             * @param {?} url
             * @param {?} qualifier
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(url, qualifier) {
                var self = camelKey.call(this, "webExtensionsCookie") || this;
                if (self._url = url, self._domain = qualifier, !isSimple.test(qualifier)) {
                    throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
                }
                return self;
            }
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype.ensureAvailable = function() {
                var settings = this;
                return save(2, 1E3, function() {
                    return new Promise(function($sanitize, done) {
                        var tag = Base.alphanumeric(10);
                        window.browser.cookies.set({
                            name : tag,
                            value : tag,
                            url : settings._url,
                            domain : settings._domain,
                            expirationDate : timestamp() / 1E3
                        }).then(function() {
                            window.browser.cookies.get({
                                url : settings._url,
                                name : tag
                            }).then(function(child) {
                                if (child && child.value === tag) {
                                    $sanitize();
                                } else {
                                    done(new Error("WebExtensionsCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + tag + ", the result is " + (child ? child.value : child) + "."));
                                }
                            })["catch"](function(m1) {
                                done("browser.cookies.get failed with an error: " + m1.message);
                            });
                        })["catch"](function(m1) {
                            done("browser.cookies.set failed with an error: " + m1.message);
                        });
                    });
                });
            }, expectedNumberOfNonCommentArgs.prototype.getContainerId = function() {
                var settings = this;
                return new Promise(function(done, $sanitize) {
                    window.browser.cookies.get({
                        url : settings._url,
                        name : key
                    }).then(function(found) {
                        done(found ? found.value : void 0);
                    })["catch"](function(m1) {
                        $sanitize("browser.cookies.get failed with an error: " + m1.message);
                    });
                });
            }, expectedNumberOfNonCommentArgs.prototype.setContainerId = function(value) {
                var settings = this;
                return new Promise(function($sanitize, done) {
                    window.browser.cookies.set({
                        name : key,
                        value : value,
                        url : settings._url,
                        domain : settings._domain,
                        expirationDate : formatDate() / 1E3
                    }).then(function(s) {
                        if (!(s && s.value === value)) {
                            done(new Error("setContainerId failed.\n          Tried to set " + value + ", the result is " + (s ? s.value : s) + "."));
                        }
                        $sanitize();
                    })["catch"](function(m1) {
                        done("browser.cookies.set failed with an error: " + m1.message);
                    });
                });
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.WebExtensionsCookieStorage = WebExtensionsCookieStorage;
        var LocalStorage = function(camelKey) {
            /**
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs() {
                return camelKey.call(this, "localStorage") || this;
            }
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype.ensureAvailable = function() {
                var tabId = Base.alphanumeric(10);
                return new Promise(function($sanitize, done) {
                    localStorage.setItem(storageKey, tabId);
                    if (localStorage.getItem(storageKey) !== tabId) {
                        done(new Error("LocalStorage is unavailable.\n          Availability test failed.\n          Tried to set " + tabId + ", the result is " + localStorage.getItem(storageKey) + "."));
                    } else {
                        $sanitize();
                    }
                    localStorage.removeItem(storageKey);
                });
            }, expectedNumberOfNonCommentArgs.prototype.getContainerId = function() {
                var value = localStorage.getItem(key);
                return new Promise(function(resolve, dataAndEvents) {
                    return resolve(null === value ? void 0 : value);
                });
            }, expectedNumberOfNonCommentArgs.prototype.setContainerId = function(value) {
                return new Promise(function($sanitize, dataAndEvents) {
                    localStorage.setItem(key, value);
                    $sanitize();
                });
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.LocalStorage = LocalStorage;
        var CookieStorage = function(camelKey) {
            /**
             * @param {?} qualifier
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(qualifier) {
                var self = camelKey.call(this, "cookie") || this;
                if (self._domain = qualifier, !isSimple.test(qualifier)) {
                    throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
                }
                return self;
            }
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype._getCookieOptions = function() {
                return{
                    path : "/",
                    domain : this._domain,
                    expires : new Date(formatDate())
                };
            }, expectedNumberOfNonCommentArgs.prototype.ensureAvailable = function() {
                var event = Base.alphanumeric(10);
                return new Promise(function($sanitize, done) {
                    events["default"](event, event);
                    if (events["default"](event) !== event) {
                        done(new Error("CookieStorage is unavailable.\n          Availability test failed.\n          Tried to set " + event + ", the result is " + events["default"](event) + "."));
                    } else {
                        $sanitize();
                    }
                    events["default"](event, null);
                });
            }, expectedNumberOfNonCommentArgs.prototype.getContainerId = function() {
                return new Promise(function(func, dataAndEvents) {
                    return func(events["default"](key));
                });
            }, expectedNumberOfNonCommentArgs.prototype.setContainerId = function(isXML) {
                var _getCookieOptions = this;
                return new Promise(function($sanitize, dataAndEvents) {
                    events["default"](key, isXML, _getCookieOptions._getCookieOptions());
                    $sanitize();
                });
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.CookieStorage = CookieStorage;
        var BackendStorage = function(camelKey) {
            /**
             * @param {?} theTitle
             * @param {string} client
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(theTitle, client) {
                var self = camelKey.call(this, "backend") || this;
                return self._fetch = theTitle, self._url = client, self._keyName = key, self._testKeyName = storageKey, self._baseUrl = client + "/cookies", self;
            }
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype.ensureAvailable = function() {
                var util = this;
                var val = Base.alphanumeric(10);
                /** @type {number} */
                var type = (timestamp() - Date.now()) / 1E3;
                /** @type {string} */
                var desc = this._baseUrl + "?name=" + this._testKeyName;
                /** @type {string} */
                var msg = desc + "&value=" + val + "&maxAge=" + type;
                return this._doSend(msg, "post").then(function(assert) {
                    if (!assert.ok) {
                        throw new Error("BackendStorage is unavailable.\n          Availability test failed.\n          Tried to set " + val + ". Request failed.\n        ");
                    }
                }).then(function() {
                    return util._doSend(desc, "get").then(function(res) {
                        if (res.ok) {
                            return res.json().then(function(rel) {
                                if (rel.value !== val) {
                                    throw new Error("BackendStorage is unavailable.\n                Availability test failed.\n                Tried to get " + util._testKeyName + " from server.\n                Got " + rel.value + " instead of " + val + ".");
                                }
                            });
                        }
                        throw new Error("BackendStorage is unavailable.\n            Availability test failed.\n            Tried to get " + util._testKeyName + " from server. Request failed.");
                    });
                });
            }, expectedNumberOfNonCommentArgs.prototype._doSend = function(data, method) {
                return this._fetch(data, {
                    credentials : "include",
                    method : method
                });
            }, expectedNumberOfNonCommentArgs.prototype.getContainerId = function() {
                /** @type {string} */
                var pdataCur = this._baseUrl + "?name=" + this._keyName;
                return this._doSend(pdataCur, "get").then(function(res) {
                    return res.json();
                }).then(function($provide) {
                    return $provide.value;
                });
            }, expectedNumberOfNonCommentArgs.prototype.setContainerId = function(isXML) {
                /** @type {number} */
                var type = (formatDate() - Date.now()) / 1E3;
                /** @type {string} */
                var msg = this._baseUrl + "?name=" + this._keyName + "&value=" + isXML + "&maxAge=" + type;
                return this._doSend(msg, "post").then(function() {
                });
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.BackendStorage = BackendStorage;
        var MemoryStorage = function(camelKey) {
            /**
             * @param {Object} _value
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(_value) {
                if (void 0 === _value) {
                    _value = void 0;
                }
                var _lastDisplayedGridState = camelKey.call(this, "memory") || this;
                return _lastDisplayedGridState._value = _value, _lastDisplayedGridState;
            }
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype.ensureAvailable = function() {
                return Promise.resolve();
            }, expectedNumberOfNonCommentArgs.prototype.getContainerId = function() {
                return Promise.resolve(this._value);
            }, expectedNumberOfNonCommentArgs.prototype.setContainerId = function(value) {
                return this._value = value, Promise.resolve();
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.MemoryStorage = MemoryStorage;
    }, {
        "./util" : 4,
        "@grammarly-npm/cookie" : 1
    }],
    3 : [function(lerp, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var cd = lerp("./util");
        var bc = lerp("./container_id_manager");
        expectedNumberOfNonCommentArgs.ContainerIdManager = bc.ContainerIdManager;
        expectedNumberOfNonCommentArgs.BaseStorage = bc.BaseStorage;
        expectedNumberOfNonCommentArgs.MemoryStorage = bc.MemoryStorage;
        expectedNumberOfNonCommentArgs.LocalStorage = bc.LocalStorage;
        expectedNumberOfNonCommentArgs.CookieStorage = bc.CookieStorage;
        expectedNumberOfNonCommentArgs.ChromeCookieStorage = bc.ChromeCookieStorage;
        expectedNumberOfNonCommentArgs.WebExtensionsCookieStorage = bc.WebExtensionsCookieStorage;
        expectedNumberOfNonCommentArgs.BackendStorage = bc.BackendStorage;
        /** @type {Array} */
        var excludes = ["eventName", "client", "clientVersion", "userId", "isTest", "containerId", "instanceId", "batchId"];
        /** @type {string} */
        var storageKey = "gnar_nextPingTimestamp";
        var GnarClientImpl = function() {
            /**
             * @param {string} err
             * @param {string} key
             * @param {?} name
             * @param {?} val
             * @param {?} count
             * @param {?} logger
             * @param {?} child
             * @param {boolean} res
             * @return {undefined}
             */
            function self(err, key, name, val, count, logger, child, res) {
                if (void 0 === res) {
                    /** @type {boolean} */
                    res = false;
                }
                /** @type {string} */
                this._client = key;
                this._clientVersion = name;
                this._fetch = val;
                this._containerIdManager = count;
                this._logger = logger;
                this._metric = child;
                /** @type {boolean} */
                this._storePingTimestamp = res;
                /** @type {number} */
                this._batchId = 0;
                this._instanceId = cd.alphanumeric(8);
                /** @type {boolean} */
                this._isReady = false;
                /** @type {Array} */
                this._queue = [];
                /** @type {string} */
                this._eventsUrl = err + "/events";
                this._pingMaybe();
            }
            return self.prototype.track = function(data, expectedNumberOfNonCommentArgs) {
                if (void 0 === expectedNumberOfNonCommentArgs && (expectedNumberOfNonCommentArgs = {}), 0 === data.indexOf(this._client + "/")) {
                    throw new Error("Event name " + data + " should not start with '" + this._client + "/'");
                }
                Object.keys(expectedNumberOfNonCommentArgs).forEach(function(el) {
                    if (excludes.indexOf(el) !== -1) {
                        throw new Error("Event data should not contain '" + el + "' prop.");
                    }
                });
                if (this._isReady) {
                    if ("ping" !== data) {
                        this._pingMaybe();
                    }
                    this._send(data, expectedNumberOfNonCommentArgs);
                } else {
                    this._enqueue(data, expectedNumberOfNonCommentArgs);
                }
            }, self.prototype.setUser = function(value, user) {
                if (null === value || "" === value) {
                    throw new Error("Invalid userId: " + value);
                }
                var _userId = this._userId && (this._userId !== value && !(/^-/.test(value) && /^-/.test(this._userId)));
                this._isTest = user;
                /** @type {number} */
                this._userId = value;
                if (_userId) {
                    this._pingMaybe(true);
                }
                if (!this._isReady) {
                    this._execQueue();
                    /** @type {boolean} */
                    this._isReady = true;
                }
            }, self.prototype.getContainerId = function() {
                return this._containerIdManager.getContainerId();
            }, self.prototype._setNextPingTimestamp = function() {
                var dstUri = cd.getNextPingDate();
                if (this._nextPingTimestamp = dstUri, this._storePingTimestamp) {
                    try {
                        localStorage.setItem(storageKey, dstUri.toString());
                    } catch (key) {
                        this._metric.getCounter("nextPingDate.write.failure").increment();
                        this._logger.warn("nextPingDate.write.failed", key);
                    }
                }
            }, self.prototype._getNextPingTimestamp = function() {
                var _nextPingTimestamp = this._nextPingTimestamp;
                if (void 0 !== _nextPingTimestamp || !this._storePingTimestamp) {
                    return _nextPingTimestamp;
                }
                try {
                    var cDigit = localStorage.getItem(storageKey);
                    /** @type {(number|undefined)} */
                    _nextPingTimestamp = null === cDigit ? void 0 : parseInt(cDigit, 10);
                } catch (key) {
                    _nextPingTimestamp = void 0;
                    this._metric.getCounter("nextPingDate.read.failure").increment();
                    this._logger.warn("nextPingDate.read.failed", key);
                }
                return _nextPingTimestamp;
            }, self.prototype._shouldPing = function(deepDataAndEvents) {
                if (deepDataAndEvents) {
                    return true;
                }
                var number = this._getNextPingTimestamp();
                return void 0 === number || number < Date.now();
            }, self.prototype._pingMaybe = function(deepDataAndEvents) {
                if (void 0 === deepDataAndEvents && (deepDataAndEvents = false), this._shouldPing(deepDataAndEvents)) {
                    this._setNextPingTimestamp();
                    var pdataCur = {
                        referrer : document.referrer,
                        url : document.location.href,
                        userAgent : navigator.userAgent,
                        navigatorAppName : navigator.appName,
                        navigatorAppCodeName : navigator.appCodeName,
                        navigatorAppVersion : navigator.appVersion,
                        navigatorVendor : navigator.vendor,
                        screenWidth : screen.width,
                        screenHeight : screen.height
                    };
                    this.track("ping", pdataCur);
                }
            }, self.prototype.pingMaybe = function() {
                this._pingMaybe();
            }, self.prototype._enqueue = function(key, cb) {
                this._queue.push([key, cb]);
            }, self.prototype._execQueue = function() {
                var client = this;
                this._queue.forEach(function(result) {
                    var message = result[0];
                    var params = result[1];
                    return client._send(message, params);
                });
                /** @type {Array} */
                this._queue = [];
            }, self.prototype._send = function(message, m) {
                var self = this;
                /** @type {number} */
                var _batchId = this._batchId++;
                this.getContainerId().then(function(containerId) {
                    var options = {
                        eventName : self._client + "/" + message,
                        client : self._client,
                        clientVersion : self._clientVersion,
                        userId : self._userId,
                        isTest : self._isTest,
                        containerId : containerId,
                        instanceId : self._instanceId,
                        batchId : _batchId
                    };
                    return self._doSend(options, m);
                })["catch"](function(key) {
                    self._metric.getCounter("send.failure").increment();
                    self._logger.warn("send.failed", key);
                });
            }, self.prototype._doSend = function(expectedNumberOfNonCommentArgs, camelKey) {
                return this._fetch(this._eventsUrl, {
                    mode : "cors",
                    credentials : "include",
                    method : "post",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        events : [Object.assign(expectedNumberOfNonCommentArgs, camelKey)]
                    })
                });
            }, self;
        }();
        expectedNumberOfNonCommentArgs.GnarClientImpl = GnarClientImpl;
        var MemoryGnarClient = function() {
            /**
             * @return {undefined}
             */
            function self() {
                /** @type {Array} */
                this.history = [];
            }
            return self.prototype.track = function(eventName, data) {
                if (void 0 === data) {
                    data = {};
                }
                this.history.push({
                    eventName : eventName,
                    props : data
                });
            }, self.prototype.pingMaybe = function() {
            }, self.prototype.setUser = function(user, aValue) {
            }, self.prototype.getContainerId = function() {
                return Promise.resolve("dummy_container_id");
            }, self;
        }();
        expectedNumberOfNonCommentArgs.MemoryGnarClient = MemoryGnarClient;
        var LocalStorageGnarClient = function() {
            /**
             * @return {undefined}
             */
            function self() {
            }
            return self.prototype.track = function(eventName, data) {
                if (void 0 === data) {
                    data = {};
                }
                /** @type {string} */
                var storageKey = "trackingGnar";
                try {
                    /** @type {*} */
                    var list = JSON.parse(localStorage.getItem(storageKey)) || [];
                    list.push({
                        eventName : eventName,
                        props : data
                    });
                    localStorage.setItem(storageKey, JSON.stringify(list));
                } catch (error) {
                }
            }, self.prototype.pingMaybe = function() {
            }, self.prototype.setUser = function(user, aValue) {
            }, self.prototype.getContainerId = function() {
                return Promise.resolve("dummy_container_id");
            }, self;
        }();
        expectedNumberOfNonCommentArgs.LocalStorageGnarClient = LocalStorageGnarClient;
    }, {
        "./container_id_manager" : 2,
        "./util" : 4
    }],
    4 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {number} opt_attributes
         * @param {string} max
         * @return {?}
         */
        function rand(opt_attributes, max) {
            if (void 0 === max && (max = ""), opt_attributes <= 0) {
                return max;
            }
            /** @type {number} */
            var index2 = Math.floor(Math.random() * (possible.length - 1));
            return rand(opt_attributes - 1, max + possible.charAt(index2));
        }
        /**
         * @return {?}
         */
        function process() {
            /** @type {Date} */
            var currentTime = new Date;
            return currentTime.getHours() > 2 && currentTime.setDate(currentTime.getDate() + 1), currentTime.setHours(3), currentTime.setMinutes(Math.floor(60 * Math.random())), currentTime.getTime();
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /** @type {string} */
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        /** @type {function (number, string): ?} */
        expectedNumberOfNonCommentArgs.alphanumeric = rand;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getNextPingDate = process;
    }, {}],
    5 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var nodes = require("./ring_buffer");
        var CrashLogWrapper = function() {
            /**
             * @param {HTMLAnchorElement} css
             * @param {Function} opts
             * @param {?} fileContent
             * @param {?} str
             * @return {undefined}
             */
            function Tokenizer(css, opts, fileContent, str) {
                var self = this;
                this._eventsSink = fileContent;
                this._crashLogger = str;
                /** @type {boolean} */
                this._crashLogged = false;
                /**
                 * @param {?} test
                 * @return {undefined}
                 */
                this.sink = function(test) {
                    self._buffer.push(test);
                    self._eventsSink(test);
                    if (self._trigger(test)) {
                        self._sendCrashLog(test);
                    }
                };
                this._buffer = new nodes.RingBuffer(css, true);
                /** @type {Function} */
                this._trigger = "function" === typeof opts ? opts : function(o) {
                    return o.level >= opts;
                };
            }
            return Tokenizer.prototype._sendCrashLog = function(o) {
                if (!this._crashLogged || this._buffer.size > this._buffer.capacity / 2) {
                    var error = void 0;
                    try {
                        /** @type {string} */
                        error = JSON.stringify(this._buffer, void 0, "");
                    } catch (err) {
                        error = err;
                    }
                    this._crashLogger.log(o.level, "CrashLog", {
                        events : error,
                        first : !this._crashLogged
                    });
                    /** @type {boolean} */
                    this._crashLogged = true;
                    this._buffer.clear();
                }
            }, Tokenizer;
        }();
        expectedNumberOfNonCommentArgs.CrashLogWrapper = CrashLogWrapper;
    }, {
        "./ring_buffer" : 9
    }],
    6 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var Block = require("./log4ts");
        expectedNumberOfNonCommentArgs.Logging = Block;
        var inspect = require("./log4ts_impl");
        expectedNumberOfNonCommentArgs.LoggingImpl = inspect;
        var selfClosing = require("./timeseries");
        expectedNumberOfNonCommentArgs.TimeSeries = selfClosing;
        var helper = require("./timeseries_impl");
        expectedNumberOfNonCommentArgs.TimeSeriesImpl = helper;
        var nodes = require("./utils");
        expectedNumberOfNonCommentArgs.EventProps = nodes.EventProps;
        var Monitoring;
        !function(exports) {
            var EventEmitter = function() {
                /**
                 * @return {undefined}
                 */
                function expectedNumberOfNonCommentArgs() {
                }
                return Object.defineProperty(expectedNumberOfNonCommentArgs, "root", {
                    /**
                     * @return {?}
                     */
                    get : function() {
                        return inspect.LoggingConfig.getRootLogger();
                    },
                    enumerable : true,
                    configurable : true
                }), expectedNumberOfNonCommentArgs.getLogger = function(name, deepDataAndEvents) {
                    return expectedNumberOfNonCommentArgs.root.getLogger(name, deepDataAndEvents);
                }, expectedNumberOfNonCommentArgs;
            }();
            exports.Logging = EventEmitter;
            var TimeSeries = function() {
                /**
                 * @return {undefined}
                 */
                function expectedNumberOfNonCommentArgs() {
                }
                return Object.defineProperty(expectedNumberOfNonCommentArgs, "root", {
                    /**
                     * @return {?}
                     */
                    get : function() {
                        return helper.MetricsConfig.getRootMetric();
                    },
                    enumerable : true,
                    configurable : true
                }), expectedNumberOfNonCommentArgs;
            }();
            exports.TimeSeries = TimeSeries;
        }(Monitoring = expectedNumberOfNonCommentArgs.Monitoring || (expectedNumberOfNonCommentArgs.Monitoring = {}));
    }, {
        "./log4ts" : 7,
        "./log4ts_impl" : 8,
        "./timeseries" : 10,
        "./timeseries_impl" : 11,
        "./utils" : 12
    }],
    7 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var LogLevel;
        !function(Level) {
            /** @type {string} */
            Level[Level.TRACE = 0] = "TRACE";
            /** @type {string} */
            Level[Level.DEBUG = 1] = "DEBUG";
            /** @type {string} */
            Level[Level.INFO = 2] = "INFO";
            /** @type {string} */
            Level[Level.WARN = 3] = "WARN";
            /** @type {string} */
            Level[Level.ERROR = 4] = "ERROR";
            /** @type {string} */
            Level[Level.FATAL = 5] = "FATAL";
            /** @type {string} */
            Level[Level.OFF = 6] = "OFF";
        }(LogLevel = expectedNumberOfNonCommentArgs.LogLevel || (expectedNumberOfNonCommentArgs.LogLevel = {}));
        (function(Level) {
            /**
             * @param {string} iLogLevel
             * @return {?}
             */
            function getLevel(iLogLevel) {
                switch(iLogLevel) {
                    case "TRACE":
                        return Level.TRACE;
                    case "DEBUG":
                        return Level.DEBUG;
                    case "INFO":
                        return Level.INFO;
                    case "WARN":
                        return Level.WARN;
                    case "ERROR":
                        return Level.ERROR;
                    case "FATAL":
                        return Level.FATAL;
                    case "OFF":
                        return Level.OFF;
                    default:
                        throw new TypeError("Unrecognized log level string '" + iLogLevel + "'");;
                }
            }
            /** @type {function (string): ?} */
            Level.fromString = getLevel;
        })(LogLevel = expectedNumberOfNonCommentArgs.LogLevel || (expectedNumberOfNonCommentArgs.LogLevel = {}));
    }, {}],
    8 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var data_user = require("tslib");
        var selfClosing = require("./utils");
        var self = require("./log4ts");
        var Block = require("./utils");
        var helper = require("./crash_logger");
        var nodes = require("./ring_buffer");
        var Logger = function() {
            /**
             * @param {Object} obj
             * @return {undefined}
             */
            function self(obj) {
                /** @type {Object} */
                this.parent = obj;
                this.context = void 0;
            }
            return self.prototype.get = function() {
                var camelKey = this.parent && this.parent.get();
                var attributes = this.context;
                return camelKey || attributes ? Object.assign({}, camelKey, attributes) : void 0;
            }, self.prototype.add = function(attributes) {
                this.context = Object.assign({}, this.context, attributes);
            }, self.prototype.remove = function(keepData) {
                var element = this;
                if (this.context) {
                    keepData.forEach(function(key) {
                        if (key in element.context) {
                            delete element.context[key];
                        }
                    });
                }
            }, self.prototype.clear = function() {
                this.context = void 0;
            }, self;
        }();
        expectedNumberOfNonCommentArgs.TreeContext = Logger;
        var key = function() {
            /**
             * @param {string} name
             * @param {?} level
             * @param {Object} element
             * @return {undefined}
             */
            function Logger(name, level, element) {
                /** @type {string} */
                this.name = name;
                this.level = level;
                /** @type {Object} */
                this.context = element;
                selfClosing.validateName(name);
            }
            return Logger.prototype.isEnabled = function(level) {
                return level >= this.level;
            }, Logger.prototype.handler = function(msg, name) {
                var log = this;
                return{
                    /**
                     * @param {string} type
                     * @return {?}
                     */
                    trace : function(type) {
                        throw log.trace(msg, type, name), type;
                    },
                    /**
                     * @param {string} type
                     * @return {?}
                     */
                    debug : function(type) {
                        throw log.debug(msg, type, name), type;
                    },
                    /**
                     * @param {string} text
                     * @return {?}
                     */
                    info : function(text) {
                        throw log.info(msg, text, name), text;
                    },
                    /**
                     * @param {string} type
                     * @return {?}
                     */
                    warn : function(type) {
                        throw log.warn(msg, type, name), type;
                    },
                    /**
                     * @param {string} type
                     * @return {?}
                     */
                    error : function(type) {
                        throw log.error(msg, type, name), type;
                    },
                    /**
                     * @param {?} err
                     * @return {?}
                     */
                    fatal : function(err) {
                        throw log.fatal(msg, err, name), err;
                    }
                };
            }, Logger.prototype.trace = function(type, keepData, object) {
                this.log(self.LogLevel.TRACE, type, keepData, object);
            }, Logger.prototype.debug = function(type, keepData, object) {
                this.log(self.LogLevel.DEBUG, type, keepData, object);
            }, Logger.prototype.info = function(type, which, source) {
                this.log(self.LogLevel.INFO, type, which, source);
            }, Logger.prototype.warn = function(type, keepData, object) {
                this.log(self.LogLevel.WARN, type, keepData, object);
            }, Logger.prototype.error = function(type, keepData, object) {
                this.log(self.LogLevel.ERROR, type, keepData, object);
            }, Logger.prototype.fatal = function(key, which, message) {
                this.log(self.LogLevel.FATAL, key, which, message);
            }, Logger.prototype.log = function(object, keepData, callback, s) {
                if (this.isEnabled(object)) {
                    if (callback && s || Block.ErrorLike.isErrorLike(callback)) {
                        this.logImpl(object, keepData, callback, s);
                    } else {
                        this.logImpl(object, keepData, void 0, s || callback);
                    }
                }
            }, Logger;
        }();
        expectedNumberOfNonCommentArgs.AbstractLogger = key;
        var Splice = function() {
            /**
             * @param {?} ui
             * @param {string} msg
             * @param {?} logger
             * @param {number} onFailed
             * @param {?} error
             * @param {Object} args
             * @param {Object} context
             * @return {undefined}
             */
            function start(ui, msg, logger, onFailed, error, args, context) {
                this.level = ui;
                /** @type {string} */
                this.message = msg;
                this.logger = logger;
                /** @type {number} */
                this.timestamp = onFailed;
                this.exception = error;
                /** @type {Object} */
                this.extra = args;
                /** @type {Object} */
                this.context = context;
            }
            return start;
        }();
        expectedNumberOfNonCommentArgs.LogEvent = Splice;
        var camelKey = function(camelKey) {
            /**
             * @param {?} fake
             * @param {?} graphics
             * @param {?} lvl
             * @param {?} opt_renderer
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(fake, graphics, lvl, opt_renderer) {
                var o = camelKey.call(this, fake, graphics, opt_renderer || new Logger) || this;
                return o.appender = lvl, o;
            }
            return data_user.__extends(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.prototype.getLogger = function(name, deepDataAndEvents) {
                return new expectedNumberOfNonCommentArgs(this.name + "." + name, deepDataAndEvents || this.level, this.appender, new Logger(this.context));
            }, expectedNumberOfNonCommentArgs.prototype.logImpl = function(val, keepData, opt_attributes, v02) {
                var thisObject = new Splice(val, keepData, this.name, Date.now(), opt_attributes, v02, this.context.get());
                try {
                    this.appender(thisObject);
                } catch (key) {
                    console.error("Failed processing log event", key);
                    try {
                        block.printToConsole(thisObject);
                    } catch (name) {
                        console.error("No luck. Can't print the event", name);
                    }
                }
            }, expectedNumberOfNonCommentArgs;
        }(key);
        expectedNumberOfNonCommentArgs.SimpleLogger = camelKey;
        var block = function(camelKey) {
            /**
             * @param {?} fake
             * @param {?} graphics
             * @param {?} opt_coordHeight
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(fake, graphics, opt_coordHeight) {
                return camelKey.call(this, fake, graphics, expectedNumberOfNonCommentArgs.printToConsole, opt_coordHeight) || this;
            }
            return data_user.__extends(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.printToConsole = function(obj) {
                /** @type {function (this:Console, ...[*]): ?} */
                var log = console.log;
                /** @type {Function} */
                log = obj.level <= self.LogLevel.TRACE ? console.trace || console.log : obj.level <= self.LogLevel.DEBUG ? console.debug || console.log : obj.level <= self.LogLevel.INFO ? console.log : obj.level <= self.LogLevel.WARN ? console.warn : console.error;
                log.apply(console, ["[" + obj.logger + "]: " + self.LogLevel[obj.level] + " : " + obj.message, obj.exception, obj.extra].filter(function(dataAndEvents) {
                    return!!dataAndEvents;
                }));
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.ConsoleLogger = block;
        var _t = function() {
            /**
             * @return {undefined}
             */
            function _t() {
            }
            return _t.createRootLogger = function(dataAndEvents, LEVEL_LIST, r, elm, deepDataAndEvents) {
                if (void 0 === deepDataAndEvents) {
                    /** @type {boolean} */
                    deepDataAndEvents = false;
                }
                /**
                 * @param {Object} o
                 * @return {undefined}
                 */
                var log = function(o) {
                    if (o.level >= LEVEL_LIST) {
                        if (deepDataAndEvents) {
                            block.printToConsole(o);
                        }
                        r.append(o)["catch"](_t._onError);
                    }
                };
                var logger = new Logger;
                /** @type {function (Object): undefined} */
                var sink = log;
                if (elm) {
                    var next = new camelKey(dataAndEvents + ".crashLogs", self.LogLevel.TRACE, function(value) {
                        elm.append(value)["catch"](_t._onError);
                    }, new Logger(logger));
                    var context = new helper.CrashLogWrapper(500, self.LogLevel.ERROR, log, next);
                    sink = context.sink;
                }
                return new camelKey(dataAndEvents, LEVEL_LIST, sink, logger);
            }, _t;
        }();
        /**
         * @param {number} data
         * @return {?}
         */
        _t._onError = function(data) {
            return block.printToConsole(new Splice(self.LogLevel.WARN, "Error while logging message to the server.", "Fallback", 0, void 0, data));
        };
        expectedNumberOfNonCommentArgs.DefaultLogAppender = _t;
        var Connection = function() {
            /**
             * @param {?} event
             * @return {undefined}
             */
            function render(event) {
                var promise = this;
                this.event = event;
                this.promise = (new Promise(function(resolve, dataAndEvents) {
                    /** @type {Object} */
                    promise.resolve = resolve;
                })).then(function() {
                });
            }
            return render;
        }();
        /** @type {number} */
        var _c = 300;
        /** @type {number} */
        var target = 1E4;
        var LogQueue = function() {
            /**
             * @param {?} dataAndEvents
             * @param {number} c
             * @param {number} deep
             * @return {undefined}
             */
            function clone(dataAndEvents, c, deep) {
                if (void 0 === c) {
                    /** @type {number} */
                    c = _c;
                }
                if (void 0 === deep) {
                    /** @type {number} */
                    deep = target;
                }
                this._sink = dataAndEvents;
                /** @type {number} */
                this._retryInterval = deep;
                /** @type {null} */
                this._currentItem = null;
                /** @type {null} */
                this._skippedCounter = null;
                this._buffer = new nodes.RingBuffer(c, false);
            }
            return clone.prototype.append = function(opts) {
                if (this._buffer.isFull) {
                    return this._incSkippedCounter(), Promise.reject(new Error("Outgoing message buffer is full"));
                }
                var c = new Connection(opts);
                return this._buffer.push(c), this._doAppend(), c.promise;
            }, clone.prototype._incSkippedCounter = function() {
                if (!this._skippedCounter) {
                    this._skippedCounter = new Splice(self.LogLevel.WARN, "Messages was skipped due to buffer overflow", "log4ts_impl.LogQueue", Date.now(), void 0, {
                        count : 0
                    });
                }
                this._skippedCounter.extra.count++;
            }, clone.prototype._doAppend = function() {
                var me = this;
                if (!this._buffer.isEmpty && !this._currentItem) {
                    var result = this._buffer.first;
                    var promise = this._sink.append(result.event);
                    this._currentItem = result;
                    promise.then(function() {
                        result.resolve();
                        var expected = me._buffer.pop();
                        if (expected !== result && expected === me._currentItem) {
                            throw new Error("Illegal state");
                        }
                        /** @type {null} */
                        me._currentItem = null;
                        if (me._skippedCounter) {
                            me.append(me._skippedCounter);
                            /** @type {null} */
                            me._skippedCounter = null;
                        }
                        me._doAppend();
                    })["catch"](function(dataAndEvents) {
                        me._retryAppend(result);
                    });
                }
            }, clone.prototype._retryAppend = function(e) {
                var m = this;
                setTimeout(function() {
                    var camelKey = e.event.extra || {};
                    if (!camelKey.appendRetries) {
                        camelKey = e.event.extra = Object.assign({
                            appendRetries : 1
                        }, camelKey);
                    }
                    ++camelKey.appendRetries;
                    /** @type {null} */
                    m._currentItem = null;
                    m._doAppend();
                }, this._retryInterval);
            }, clone;
        }();
        expectedNumberOfNonCommentArgs.LogQueue = LogQueue;
        var DummyFelogClient = function() {
            /**
             * @return {undefined}
             */
            function $Element() {
            }
            return $Element.prototype.append = function(op) {
                return Promise.resolve();
            }, $Element;
        }();
        expectedNumberOfNonCommentArgs.DummyFelogClient = DummyFelogClient;
        var cacheKey = function() {
            /**
             * @param {?} events
             * @param {?} dataAndEvents
             * @param {?} deepDataAndEvents
             * @param {?} keepData
             * @return {undefined}
             */
            function clone(events, dataAndEvents, deepDataAndEvents, keepData) {
                this._appName = events;
                this._appVersion = dataAndEvents;
                this._env = deepDataAndEvents;
                this._fetch = keepData;
            }
            return clone.prototype.append = function(op) {
                return this._fetch(this._prepareData(op));
            }, clone.prototype._toObject = function(expectedNumberOfNonCommentArgs) {
                return void 0 === expectedNumberOfNonCommentArgs || (null === expectedNumberOfNonCommentArgs || expectedNumberOfNonCommentArgs instanceof Object && !Array.isArray(expectedNumberOfNonCommentArgs)) ? expectedNumberOfNonCommentArgs : {
                    extra : expectedNumberOfNonCommentArgs
                };
            }, clone.prototype._parseException = function(slide) {
                if (slide) {
                    var e = this._toObject(slide);
                    var a = e.name;
                    var an = void 0 === a ? "UnknownError" : a;
                    var msg = e.message;
                    var message = void 0 === msg ? "Unknown error message" : msg;
                    var stack = e.stack;
                    var expectedNumberOfNonCommentArgs = data_user.__rest(e, ["name", "message", "stack"]);
                    return{
                        exceptionPart : {
                            exception : {
                                name : an,
                                message : message,
                                stack : stack
                            }
                        },
                        exceptionDetailsPart : Object.keys(expectedNumberOfNonCommentArgs).length > 0 ? {
                            exceptionDetails : expectedNumberOfNonCommentArgs
                        } : {}
                    };
                }
                return{
                    exceptionPart : {},
                    exceptionDetailsPart : {}
                };
            }, clone.prototype._prepareData = function(data) {
                /** @type {({context: ??}|{})} */
                var actualKey = data.context ? {
                    context : data.context
                } : {};
                var table = this._parseException(data.exception);
                var attributes = table.exceptionPart;
                var camelKey = table.exceptionDetailsPart;
                /** @type {string} */
                var err = JSON.stringify(Object.assign({}, camelKey, this._toObject(data.extra)));
                var b = Object.assign({
                    message : data.message,
                    logger : data.logger,
                    level : self.LogLevel[data.level],
                    application : this._appName,
                    version : this._appVersion,
                    env : this._env
                }, actualKey, attributes, "{}" !== err && {
                    details : err
                });
                return JSON.stringify(b, null, "");
            }, clone;
        }();
        expectedNumberOfNonCommentArgs.FelogClientBase = cacheKey;
        var cached = function(camelKey) {
            /**
             * @param {?} url
             * @param {?} fake
             * @param {?} graphics
             * @param {?} capture
             * @param {?} xhr
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(url, fake, graphics, capture, xhr) {
                return camelKey.call(this, fake, graphics, capture, function(reqData) {
                    return xhr(url, {
                        method : "POST",
                        cache : "no-cache",
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        body : reqData
                    }).then(function() {
                    });
                }) || this;
            }
            return data_user.__extends(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs;
        }(cacheKey);
        expectedNumberOfNonCommentArgs.PostFelogClient = cached;
        var value = function(camelKey) {
            /**
             * @param {string} dataAndEvents
             * @param {?} fake
             * @param {?} graphics
             * @param {?} capture
             * @param {?} $transition
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(dataAndEvents, fake, graphics, capture, $transition) {
                var _this = this;
                /** @type {string} */
                var deliminator = dataAndEvents + "/log?json=";
                return _this = camelKey.call(this, fake, graphics, capture, function(i) {
                    return $transition(deliminator + encodeURIComponent(i), {
                        mode : "no-cors",
                        method : "get",
                        cache : "no-cache"
                    }).then(function() {
                    });
                }) || this;
            }
            return data_user.__extends(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs;
        }(cacheKey);
        expectedNumberOfNonCommentArgs.GetFelogClient = value;
        var LoggingConfig = function() {
            /**
             * @return {undefined}
             */
            function self() {
            }
            return self.getRootLogger = function() {
                return self._rootLogger || (self._rootLogger = self._createDefaultRootLogger(), self._rootLogger.warn("Using DEFAULT root logger")), self._rootLogger;
            }, self.configure = function(type) {
                /** @type {string} */
                self._rootLogger = type;
                self._rootLogger.debug("ROOT logger changed", type);
            }, self._createDefaultRootLogger = function() {
                return new block("DEFAULT", self.LogLevel.DEBUG);
            }, self;
        }();
        expectedNumberOfNonCommentArgs.LoggingConfig = LoggingConfig;
    }, {
        "./crash_logger" : 5,
        "./log4ts" : 7,
        "./ring_buffer" : 9,
        "./utils" : 12,
        tslib : "tslib"
    }],
    9 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var RingBuffer = function() {
            /**
             * @param {number} c
             * @param {boolean} err
             * @return {undefined}
             */
            function self(c, err) {
                if (void 0 === err && (err = false), this.capacity = c, this.allowOverflow = err, this._start = 0, this._end = 0, this._isFull = false, this.toJSON = this.toArray, c <= 0) {
                    throw new Error("Invalid capacity " + c);
                }
                /** @type {Array} */
                this._buffer = new Array(c);
            }
            return Object.defineProperty(self.prototype, "size", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length;
                },
                enumerable : true,
                configurable : true
            }), Object.defineProperty(self.prototype, "isEmpty", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return 0 === this.size;
                },
                enumerable : true,
                configurable : true
            }), Object.defineProperty(self.prototype, "isFull", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return this._isFull;
                },
                enumerable : true,
                configurable : true
            }), self.prototype.push = function(o) {
                if (this.isFull) {
                    if (!this.allowOverflow) {
                        throw new Error("Buffer is full");
                    }
                    ++this._start;
                    if (this._start === this.capacity) {
                        /** @type {number} */
                        this._start = 0;
                    }
                }
                this._buffer[this._end++] = o;
                if (this._end === this.capacity) {
                    /** @type {number} */
                    this._end = 0;
                }
                if (this._start === this._end) {
                    /** @type {boolean} */
                    this._isFull = true;
                }
            }, self.prototype.pop = function() {
                if (!this.isEmpty) {
                    var first = this._buffer[this._start];
                    return this._buffer[this._start] = void 0, this._start++, this._start === this.capacity && (this._start = 0), this._isFull = false, first;
                }
            }, Object.defineProperty(self.prototype, "first", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return this.isEmpty ? void 0 : this._buffer[this._start];
                },
                enumerable : true,
                configurable : true
            }), Object.defineProperty(self.prototype, "last", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return this.isEmpty ? void 0 : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1];
                },
                enumerable : true,
                configurable : true
            }), self.prototype.clear = function() {
                /** @type {Array} */
                this._buffer = new Array(this.capacity);
                /** @type {number} */
                this._start = this._end = 0;
                /** @type {boolean} */
                this._isFull = false;
            }, self.prototype.toArray = function() {
                var out;
                if (this.isEmpty) {
                    /** @type {Array} */
                    out = new Array(0);
                } else {
                    if (this._start < this._end) {
                        out = this._buffer.slice(this._start, this._end);
                    } else {
                        /** @type {Array} */
                        out = new Array(this.size);
                        /** @type {number} */
                        var n = 0;
                        var i = this._start;
                        for (;i < this.capacity;++i, ++n) {
                            out[n] = this._buffer[i];
                        }
                        /** @type {number} */
                        i = 0;
                        for (;i < this._end;++i, ++n) {
                            out[n] = this._buffer[i];
                        }
                    }
                }
                return out;
            }, self;
        }();
        expectedNumberOfNonCommentArgs.RingBuffer = RingBuffer;
    }, {}],
    10 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
    }, {}],
    11 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var data_user = require("tslib");
        var selfClosing = require("./utils");
        var camelKey = function() {
            /**
             * @param {Blob} name
             * @param {?} err
             * @param {?} key
             * @return {undefined}
             */
            function self(name, err, key) {
                /** @type {Blob} */
                this.name = name;
                this.timersSink = err;
                this.countersSink = key;
                selfClosing.validateName(name);
            }
            return self.prototype.getMetric = function(dataName) {
                return this._createChild(dataName);
            }, self.prototype.getTimer = function(dataName) {
                return this._createChild(dataName);
            }, self.prototype.getCounter = function(dataName) {
                return this._createChild(dataName);
            }, Object.defineProperty(self.prototype, "parent", {
                /**
                 * @return {?}
                 */
                get : function() {
                    var offset = this.name.lastIndexOf(".");
                    var arg = this.name.substring(0, offset === -1 ? 0 : offset);
                    return "" === arg ? void 0 : new self(arg, this.timersSink, this.countersSink);
                },
                enumerable : true,
                configurable : true
            }), Object.defineProperty(self.prototype, "root", {
                /**
                 * @return {?}
                 */
                get : function() {
                    var offset = this.name.indexOf(".");
                    var arg = this.name.substring(0, offset === -1 ? 0 : offset);
                    return "" === arg ? this : new self(arg, this.timersSink, this.countersSink);
                },
                enumerable : true,
                configurable : true
            }), self.prototype._createName = function(name) {
                return this.name + "." + name;
            }, self.prototype.start = function() {
                /** @type {number} */
                var length = Date.now();
                var ret = this;
                return{
                    /**
                     * @return {undefined}
                     */
                    stop : function() {
                        ret.recordTime(Date.now() - length);
                    }
                };
            }, self.prototype.recordTime = function(deepDataAndEvents) {
                this.timersSink(this.name, deepDataAndEvents);
            }, self.prototype.timing = function(callback) {
                var event = this.start();
                try {
                    return callback();
                } finally {
                    try {
                        event.stop();
                    } catch (e) {
                    }
                }
            }, self.prototype.increment = function(a) {
                if (void 0 === a) {
                    /** @type {number} */
                    a = 1;
                }
                this.countersSink(this.name, a);
            }, self.prototype.decrement = function(item) {
                if (void 0 === item) {
                    /** @type {number} */
                    item = 1;
                }
                this.increment(-item);
            }, self.prototype._createChild = function(i) {
                return new self(this._createName(i), this.timersSink, this.countersSink);
            }, self;
        }();
        expectedNumberOfNonCommentArgs.AbstractMetricsStorage = camelKey;
        var log = function(camelKey) {
            /**
             * @param {?} require
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(require) {
                return camelKey.call(this, "MP", function(dataAndEvents, path) {
                    return require("TIMER: " + dataAndEvents + " = " + path);
                }, function(dataAndEvents, path) {
                    return require("COUNTER: " + dataAndEvents + " = " + path);
                }) || this;
            }
            return data_user.__extends(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.MetricsPrinter = log;
        /** @type {number} */
        var mat = 7500;
        /** @type {number} */
        var charLen = 3;
        var MetricsStorage = function(camelKey) {
            /**
             * @param {?} fake
             * @param {string} ng
             * @param {?} theTitle
             * @param {number} dest
             * @return {?}
             */
            function expectedNumberOfNonCommentArgs(fake, ng, theTitle, dest) {
                if (void 0 === dest) {
                    /** @type {number} */
                    dest = mat;
                }
                var self = camelKey.call(this, fake, function(deepDataAndEvents, funcToCall) {
                    return self._reportTimer(deepDataAndEvents, funcToCall);
                }, function(onComplete, deepDataAndEvents) {
                    return self._reportCounter(onComplete, deepDataAndEvents);
                }) || this;
                return self._fetch = theTitle, self._sendTimeout = dest, self._countersBuffer = {}, self._timersBuffer = new Array, self._sendTimer = void 0, self._sendData = function() {
                    /** @type {string} */
                    var _ = [self._timersBuffer.join("&"), Object.keys(self._countersBuffer).map(function(timeoutKey) {
                        return timeoutKey + "=" + self._countersBuffer[timeoutKey];
                    }).join("&")].filter(function(newlines) {
                        return newlines.length;
                    }).join("&");
                    /** @type {string} */
                    var which = self._baseUrl + _;
                    /** @type {number} */
                    self._timersBuffer.length = 0;
                    self._countersBuffer = {};
                    self._sendTimer = void 0;
                    /** @type {number} */
                    var i = 0;
                    /**
                     * @return {undefined}
                     */
                    var run = function() {
                        self._fetch(which, {
                            mode : "no-cors",
                            cache : "no-cache"
                        })["catch"](function(key) {
                            if (i++ < charLen) {
                                setTimeout(run, 5E3 * i);
                            } else {
                                console.error("Cannot send timesereies data", key, which);
                            }
                        });
                    };
                    run();
                }, self._baseUrl = ng + "/ts?", self;
            }
            return data_user.__extends(expectedNumberOfNonCommentArgs, camelKey), expectedNumberOfNonCommentArgs.createRoot = function(dataAndEvents, suffix, putativeSpy) {
                return new expectedNumberOfNonCommentArgs(dataAndEvents, suffix, putativeSpy);
            }, expectedNumberOfNonCommentArgs.prototype._reportTimer = function(deepDataAndEvents, funcToCall) {
                this._timersBuffer.push("t." + deepDataAndEvents + "=" + funcToCall);
                this._startSending();
            }, expectedNumberOfNonCommentArgs.prototype._reportCounter = function(onComplete, deepDataAndEvents) {
                /** @type {string} */
                var unlock = "c." + onComplete;
                this._countersBuffer[unlock] = (this._countersBuffer[unlock] || 0) + deepDataAndEvents;
                this._startSending();
            }, expectedNumberOfNonCommentArgs.prototype._startSending = function() {
                if (!this._sendTimer) {
                    /** @type {number} */
                    this._sendTimer = setTimeout(this._sendData, this._sendTimeout);
                }
            }, expectedNumberOfNonCommentArgs;
        }(camelKey);
        expectedNumberOfNonCommentArgs.MetricsStorage = MetricsStorage;
        var MetricsConfig = function() {
            /**
             * @return {undefined}
             */
            function context() {
            }
            return context.getRootMetric = function() {
                return context._metricsRoot || (console.warn("[WARNING] Using default timeseries implementation."), context._metricsRoot = new log(console.log)), context._metricsRoot;
            }, context.configure = function(clear) {
                context._metricsRoot = clear;
            }, context;
        }();
        expectedNumberOfNonCommentArgs.MetricsConfig = MetricsConfig;
    }, {
        "./utils" : 12,
        tslib : "tslib"
    }],
    12 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {Object} value
         * @return {undefined}
         */
        function url(value) {
            if ("" === value) {
                throw new Error("Empty name");
            }
            if (!rchecked.test(value)) {
                throw new Error("Invalid name: " + value + ". Should be hierarchical dot separated string and may contain only word characters)");
            }
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var defer;
        !function(on) {
            /**
             * @param {boolean} e
             * @return {?}
             */
            function fn(e) {
                /** @type {boolean} */
                var exception = e;
                return exception && (void 0 !== exception.message && void 0 !== exception.name || void 0 !== exception.stack);
            }
            /** @type {function (boolean): ?} */
            on.isErrorLike = fn;
        }(defer = expectedNumberOfNonCommentArgs.ErrorLike || (expectedNumberOfNonCommentArgs.ErrorLike = {}));
        var EventProps;
        !function(dataAndEvents) {
            /**
             * @param {Object} err
             * @return {?}
             */
            function assembler(err) {
                return next(err, [err], defer.isErrorLike(err));
            }
            /**
             * @param {Object} obj
             * @param {Array} result
             * @param {(Function|string)} signal_eof
             * @return {?}
             */
            function next(obj, result, signal_eof) {
                if (!obj) {
                    return{};
                }
                var qs = {};
                /** @type {function (Object): Array.<string>} */
                var inArray = signal_eof ? Object.getOwnPropertyNames : Object.keys;
                return inArray(obj).forEach(function(i) {
                    var val = obj[i];
                    if (null === val || (void 0 === val || ("number" === typeof val || ("string" === typeof val || "boolean" === typeof val)))) {
                        qs[i] = val;
                    } else {
                        if ("object" === typeof val) {
                            if (val instanceof Boolean || (val instanceof Number || (val instanceof String || (val instanceof Date || val instanceof RegExp)))) {
                                qs[i] = val.toString();
                            } else {
                                if (result.indexOf(val) === -1) {
                                    result.push(val);
                                    var expectedNumberOfNonCommentArgs = next(val, result, defer.isErrorLike(val));
                                    if (Object.keys(expectedNumberOfNonCommentArgs).length > 0) {
                                        qs[i] = expectedNumberOfNonCommentArgs;
                                    }
                                }
                            }
                        }
                    }
                }), qs;
            }
            /** @type {function (Object): ?} */
            dataAndEvents.fromAny = assembler;
        }(EventProps = expectedNumberOfNonCommentArgs.EventProps || (expectedNumberOfNonCommentArgs.EventProps = {}));
        /** @type {RegExp} */
        var rchecked = /^(?!\.[\w])[\w.]*\w$/;
        /** @type {function (Object): undefined} */
        expectedNumberOfNonCommentArgs.validateName = url;
    }, {}],
    13 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/array/from"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/array/from" : 36
    }],
    14 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/get-iterator"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/get-iterator" : 37
    }],
    15 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/is-iterable"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/is-iterable" : 38
    }],
    16 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/json/stringify"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/json/stringify" : 39
    }],
    17 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/assign"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/assign" : 40
    }],
    18 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/create"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/create" : 41
    }],
    19 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/define-property"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/define-property" : 42
    }],
    20 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/get-own-property-symbols"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/get-own-property-symbols" : 43
    }],
    21 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/get-prototype-of"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/get-prototype-of" : 44
    }],
    22 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/keys"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/keys" : 45
    }],
    23 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/object/set-prototype-of"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/object/set-prototype-of" : 46
    }],
    24 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/promise"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/promise" : 47
    }],
    25 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/symbol"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/symbol" : 48
    }],
    26 : [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default" : $sanitize("core-js/library/fn/symbol/iterator"),
            __esModule : true
        };
    }, {
        "core-js/library/fn/symbol/iterator" : 49
    }],
    27 : [function(dataAndEvents, deepDataAndEvents, __exports__) {
        /** @type {boolean} */
        __exports__.__esModule = true;
        /**
         * @param {?} dataAndEvents
         * @param {Function} deepDataAndEvents
         * @return {undefined}
         */
        __exports__["default"] = function(dataAndEvents, deepDataAndEvents) {
            if (!(dataAndEvents instanceof deepDataAndEvents)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };
    }, {}],
    28 : [function(require, dataAndEvents, __exports__) {
        /**
         * @param {?} value
         * @return {?}
         */
        function appendModelPrefix(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var other = require("../core-js/object/define-property");
        var fullOtherName = appendModelPrefix(other);
        __exports__["default"] = function() {
            /**
             * @param {Function} value
             * @param {Array} obj
             * @return {undefined}
             */
            function defineProperty(value, obj) {
                /** @type {number} */
                var i = 0;
                for (;i < obj.length;i++) {
                    var property = obj[i];
                    property.enumerable = property.enumerable || false;
                    /** @type {boolean} */
                    property.configurable = true;
                    if ("value" in property) {
                        /** @type {boolean} */
                        property.writable = true;
                    }
                    (0, fullOtherName["default"])(value, property.key, property);
                }
            }
            return function(ctor, element, key) {
                return element && defineProperty(ctor.prototype, element), key && defineProperty(ctor, key), ctor;
            };
        }();
    }, {
        "../core-js/object/define-property" : 19
    }],
    29 : [function(require, dataAndEvents, __exports__) {
        /**
         * @param {?} value
         * @return {?}
         */
        function appendModelPrefix(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var other = require("../core-js/object/define-property");
        var fullOtherName = appendModelPrefix(other);
        /**
         * @param {Object} obj
         * @param {?} key
         * @param {string} value
         * @return {?}
         */
        __exports__["default"] = function(obj, key, value) {
            return key in obj ? (0, fullOtherName["default"])(obj, key, {
                value : value,
                enumerable : true,
                configurable : true,
                writable : true
            }) : obj[key] = value, obj;
        };
    }, {
        "../core-js/object/define-property" : 19
    }],
    30 : [function(require, dataAndEvents, __exports__) {
        /**
         * @param {?} type
         * @return {?}
         */
        function create(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var selector = require("../core-js/object/set-prototype-of");
        var elem = create(selector);
        var type = require("../core-js/object/create");
        var socket = create(type);
        var data = require("../helpers/typeof");
        var conf = create(data);
        /**
         * @param {Object} ret
         * @param {Function} b
         * @return {undefined}
         */
        __exports__["default"] = function(ret, b) {
            if ("function" !== typeof b && null !== b) {
                throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof b ? "undefined" : (0, conf["default"])(b)));
            }
            ret.prototype = (0, socket["default"])(b && b.prototype, {
                constructor : {
                    value : ret,
                    enumerable : false,
                    writable : true,
                    configurable : true
                }
            });
            if (b) {
                if (elem["default"]) {
                    (0, elem["default"])(ret, b);
                } else {
                    /** @type {Function} */
                    ret.__proto__ = b;
                }
            }
        };
    }, {
        "../core-js/object/create" : 18,
        "../core-js/object/set-prototype-of" : 23,
        "../helpers/typeof" : 34
    }],
    31 : [function(proceed, dataAndEvents, __exports__) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var value = proceed("../helpers/typeof");
        var iterator = lookupIterator(value);
        /**
         * @param {string} dataAndEvents
         * @param {?} callback
         * @return {?}
         */
        __exports__["default"] = function(dataAndEvents, callback) {
            if (!dataAndEvents) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!callback || "object" !== ("undefined" === typeof callback ? "undefined" : (0, iterator["default"])(callback)) && "function" !== typeof callback ? dataAndEvents : callback;
        };
    }, {
        "../helpers/typeof" : 34
    }],
    32 : [function(require, dataAndEvents, __exports__) {
        /**
         * @param {?} value
         * @return {?}
         */
        function h(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var b = require("../core-js/is-iterable");
        var keys = h(b);
        var selector = require("../core-js/get-iterator");
        var elem = h(selector);
        __exports__["default"] = function() {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {number} i
             * @return {?}
             */
            function flush(expectedNumberOfNonCommentArgs, i) {
                /** @type {Array} */
                var buffer = [];
                /** @type {boolean} */
                var callback2 = true;
                /** @type {boolean} */
                var _d = false;
                var bulk = void 0;
                try {
                    var node;
                    var exports = (0, elem["default"])(expectedNumberOfNonCommentArgs);
                    for (;!(callback2 = (node = exports.next()).done) && (buffer.push(node.value), !i || buffer.length !== i);callback2 = true) {
                    }
                } catch (fn) {
                    /** @type {boolean} */
                    _d = true;
                    bulk = fn;
                } finally {
                    try {
                        if (!callback2) {
                            if (exports["return"]) {
                                exports["return"]();
                            }
                        }
                    } finally {
                        if (_d) {
                            throw bulk;
                        }
                    }
                }
                return buffer;
            }
            return function(expectedNumberOfNonCommentArgs, dataName) {
                if (Array.isArray(expectedNumberOfNonCommentArgs)) {
                    return expectedNumberOfNonCommentArgs;
                }
                if ((0, keys["default"])(Object(expectedNumberOfNonCommentArgs))) {
                    return flush(expectedNumberOfNonCommentArgs, dataName);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, {
        "../core-js/get-iterator" : 14,
        "../core-js/is-iterable" : 15
    }],
    33 : [function(require, dataAndEvents, __exports__) {
        /**
         * @param {?} value
         * @return {?}
         */
        function appendModelPrefix(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var other = require("../core-js/array/from");
        var fullOtherName = appendModelPrefix(other);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        __exports__["default"] = function(expectedNumberOfNonCommentArgs) {
            if (Array.isArray(expectedNumberOfNonCommentArgs)) {
                /** @type {number} */
                var name = 0;
                /** @type {Array} */
                var old = Array(expectedNumberOfNonCommentArgs.length);
                for (;name < expectedNumberOfNonCommentArgs.length;name++) {
                    old[name] = expectedNumberOfNonCommentArgs[name];
                }
                return old;
            }
            return(0, fullOtherName["default"])(expectedNumberOfNonCommentArgs);
        };
    }, {
        "../core-js/array/from" : 13
    }],
    34 : [function($, dataAndEvents, __exports__) {
        /**
         * @param {?} name
         * @return {?}
         */
        function group(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var obj = $("../core-js/symbol/iterator");
        var keys = group(obj);
        var optgroup = $("../core-js/symbol");
        var schema = group(optgroup);
        /** @type {function (string): ?} */
        var ownProp = "function" === typeof schema["default"] && "symbol" === typeof keys["default"] ? function(attr) {
            return typeof attr;
        } : function(attr) {
            return attr && ("function" === typeof schema["default"] && (attr.constructor === schema["default"] && attr !== schema["default"].prototype)) ? "symbol" : typeof attr;
        };
        /** @type {function (string): ?} */
        __exports__["default"] = "function" === typeof schema["default"] && "symbol" === ownProp(keys["default"]) ? function(protoProps) {
            return "undefined" === typeof protoProps ? "undefined" : ownProp(protoProps);
        } : function(protoProps) {
            return protoProps && ("function" === typeof schema["default"] && (protoProps.constructor === schema["default"] && protoProps !== schema["default"].prototype)) ? "symbol" : "undefined" === typeof protoProps ? "undefined" : ownProp(protoProps);
        };
    }, {
        "../core-js/symbol" : 25,
        "../core-js/symbol/iterator" : 26
    }],
    35 : [function(factory, module, dataAndEvents) {
        module.exports = factory("regenerator-runtime");
    }, {
        "regenerator-runtime" : 145
    }],
    36 : [function($sanitize, opts, dataAndEvents) {
        $sanitize("../../modules/es6.string.iterator");
        $sanitize("../../modules/es6.array.from");
        opts.exports = $sanitize("../../modules/_core").Array.from;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.array.from" : 125,
        "../../modules/es6.string.iterator" : 135
    }],
    37 : [function(factory, module, dataAndEvents) {
        factory("../modules/web.dom.iterable");
        factory("../modules/es6.string.iterator");
        module.exports = factory("../modules/core.get-iterator");
    }, {
        "../modules/core.get-iterator" : 123,
        "../modules/es6.string.iterator" : 135,
        "../modules/web.dom.iterable" : 139
    }],
    38 : [function(factory, module, dataAndEvents) {
        factory("../modules/web.dom.iterable");
        factory("../modules/es6.string.iterator");
        module.exports = factory("../modules/core.is-iterable");
    }, {
        "../modules/core.is-iterable" : 124,
        "../modules/es6.string.iterator" : 135,
        "../modules/web.dom.iterable" : 139
    }],
    39 : [function($sanitize, module, dataAndEvents) {
        var S = $sanitize("../../modules/_core");
        var newArgs = S.JSON || (S.JSON = {
            /** @type {function (this:JSONType, *, (Array.<string>|function (string, *): *|null)=, (number|string)=): string} */
            stringify : JSON.stringify
        });
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return newArgs.stringify.apply(newArgs, arguments);
        };
    }, {
        "../../modules/_core" : 57
    }],
    40 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.assign");
        module.exports = $sanitize("../../modules/_core").Object.assign;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.assign" : 127
    }],
    41 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.create");
        var Obj = $sanitize("../../modules/_core").Object;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            return Obj.create(expectedNumberOfNonCommentArgs, key);
        };
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.create" : 128
    }],
    42 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.define-property");
        var shims = $sanitize("../../modules/_core").Object;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            return shims.defineProperty(expectedNumberOfNonCommentArgs, key, opt_attributes);
        };
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.define-property" : 129
    }],
    43 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.symbol");
        module.exports = $sanitize("../../modules/_core").Object.getOwnPropertySymbols;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.symbol" : 136
    }],
    44 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.get-prototype-of");
        module.exports = $sanitize("../../modules/_core").Object.getPrototypeOf;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.get-prototype-of" : 130
    }],
    45 : [function($sanitize, config, dataAndEvents) {
        $sanitize("../../modules/es6.object.keys");
        config.exports = $sanitize("../../modules/_core").Object.keys;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.keys" : 131
    }],
    46 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.set-prototype-of");
        module.exports = $sanitize("../../modules/_core").Object.setPrototypeOf;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.set-prototype-of" : 132
    }],
    47 : [function(require, module, dataAndEvents) {
        require("../modules/es6.object.to-string");
        require("../modules/es6.string.iterator");
        require("../modules/web.dom.iterable");
        require("../modules/es6.promise");
        module.exports = require("../modules/_core").Promise;
    }, {
        "../modules/_core" : 57,
        "../modules/es6.object.to-string" : 133,
        "../modules/es6.promise" : 134,
        "../modules/es6.string.iterator" : 135,
        "../modules/web.dom.iterable" : 139
    }],
    48 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.symbol");
        $sanitize("../../modules/es6.object.to-string");
        $sanitize("../../modules/es7.symbol.async-iterator");
        $sanitize("../../modules/es7.symbol.observable");
        module.exports = $sanitize("../../modules/_core").Symbol;
    }, {
        "../../modules/_core" : 57,
        "../../modules/es6.object.to-string" : 133,
        "../../modules/es6.symbol" : 136,
        "../../modules/es7.symbol.async-iterator" : 137,
        "../../modules/es7.symbol.observable" : 138
    }],
    49 : [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.string.iterator");
        $sanitize("../../modules/web.dom.iterable");
        module.exports = $sanitize("../../modules/_wks-ext").f("iterator");
    }, {
        "../../modules/_wks-ext" : 120,
        "../../modules/es6.string.iterator" : 135,
        "../../modules/web.dom.iterable" : 139
    }],
    50 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            if ("function" !== typeof expectedNumberOfNonCommentArgs) {
                throw TypeError(expectedNumberOfNonCommentArgs + " is not a function!");
            }
            return expectedNumberOfNonCommentArgs;
        };
    }, {}],
    51 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @return {undefined}
         */
        module.exports = function() {
        };
    }, {}],
    52 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @param {string} chai
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes, chai) {
            if (!(expectedNumberOfNonCommentArgs instanceof key) || void 0 !== chai && chai in expectedNumberOfNonCommentArgs) {
                throw TypeError(opt_attributes + ": incorrect invocation!");
            }
            return expectedNumberOfNonCommentArgs;
        };
    }, {}],
    53 : [function(require, module, dataAndEvents) {
        var getActual = require("./_is-object");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            if (!getActual(expectedNumberOfNonCommentArgs)) {
                throw TypeError(expectedNumberOfNonCommentArgs + " is not an object!");
            }
            return expectedNumberOfNonCommentArgs;
        };
    }, {
        "./_is-object" : 77
    }],
    54 : [function(require, module, dataAndEvents) {
        var matcher = require("./_to-iobject");
        var assert = require("./_to-length");
        var debug = require("./_to-index");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return function(input, any, start) {
                var token;
                var elements = matcher(input);
                var ms = assert(elements.length);
                var s = debug(start, ms);
                if (expectedNumberOfNonCommentArgs && any !== any) {
                    for (;ms > s;) {
                        if (token = elements[s++], token !== token) {
                            return true;
                        }
                    }
                } else {
                    for (;ms > s;s++) {
                        if ((expectedNumberOfNonCommentArgs || s in elements) && elements[s] === any) {
                            return expectedNumberOfNonCommentArgs || (s || 0);
                        }
                    }
                }
                return!expectedNumberOfNonCommentArgs && -1;
            };
        };
    }, {
        "./_to-index" : 112,
        "./_to-iobject" : 114,
        "./_to-length" : 115
    }],
    55 : [function(require, module, dataAndEvents) {
        var getActual = require("./_cof");
        var camelKey = require("./_wks")("toStringTag");
        /** @type {boolean} */
        var nativeIsArray = "Arguments" === getActual(function() {
            return arguments;
        }());
        /**
         * @param {Array} data
         * @param {number} key
         * @return {?}
         */
        var dataAttr = function(data, key) {
            try {
                return data[key];
            } catch (e) {
            }
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            var obj;
            var data;
            var hash;
            return void 0 === expectedNumberOfNonCommentArgs ? "Undefined" : null === expectedNumberOfNonCommentArgs ? "Null" : "string" === typeof(data = dataAttr(obj = Object(expectedNumberOfNonCommentArgs), camelKey)) ? data : nativeIsArray ? getActual(obj) : "Object" === (hash = getActual(obj)) && "function" === typeof obj.callee ? "Arguments" : hash;
        };
    }, {
        "./_cof" : 56,
        "./_wks" : 121
    }],
    56 : [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {function (this:*): string} */
        var ostring = {}.toString;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return ostring.call(expectedNumberOfNonCommentArgs).slice(8, -1);
        };
    }, {}],
    57 : [function(dataAndEvents, $, deepDataAndEvents) {
        var core = $.exports = {
            version : "2.4.0"
        };
        if ("number" === typeof __e) {
            __e = core;
        }
    }, {}],
    58 : [function(require, module, dataAndEvents) {
        var a = require("./_object-dp");
        var getActual = require("./_property-desc");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            if (key in expectedNumberOfNonCommentArgs) {
                a.f(expectedNumberOfNonCommentArgs, key, getActual(0, opt_attributes));
            } else {
                expectedNumberOfNonCommentArgs[key] = opt_attributes;
            }
        };
    }, {
        "./_object-dp" : 90,
        "./_property-desc" : 101
    }],
    59 : [function(require, module, dataAndEvents) {
        var getActual = require("./_a-function");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            if (getActual(expectedNumberOfNonCommentArgs), void 0 === key) {
                return expectedNumberOfNonCommentArgs;
            }
            switch(opt_attributes) {
                case 1:
                    return function(fake) {
                        return expectedNumberOfNonCommentArgs.call(key, fake);
                    };
                case 2:
                    return function(fake, graphics) {
                        return expectedNumberOfNonCommentArgs.call(key, fake, graphics);
                    };
                case 3:
                    return function(fake, graphics, capture) {
                        return expectedNumberOfNonCommentArgs.call(key, fake, graphics, capture);
                    };
            }
            return function() {
                return expectedNumberOfNonCommentArgs.apply(key, arguments);
            };
        };
    }, {
        "./_a-function" : 50
    }],
    60 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            if (void 0 === expectedNumberOfNonCommentArgs) {
                throw TypeError("Can't call method on  " + expectedNumberOfNonCommentArgs);
            }
            return expectedNumberOfNonCommentArgs;
        };
    }, {}],
    61 : [function($sanitize, module, dataAndEvents) {
        /** @type {boolean} */
        module.exports = !$sanitize("./_fails")(function() {
            return 7 !== Object.defineProperty({}, "a", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_fails" : 66
    }],
    62 : [function($sanitize, module, dataAndEvents) {
        var isHostMethod = $sanitize("./_is-object");
        var document = $sanitize("./_global").document;
        var is = isHostMethod(document) && isHostMethod(document.createElement);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return is ? document.createElement(expectedNumberOfNonCommentArgs) : {};
        };
    }, {
        "./_global" : 68,
        "./_is-object" : 77
    }],
    63 : [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {Array.<string>} */
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}],
    64 : [function(require, module, dataAndEvents) {
        var inspect = require("./_object-keys");
        var nodes = require("./_object-gops");
        var cfg = require("./_object-pie");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            var str = inspect(expectedNumberOfNonCommentArgs);
            var n = nodes.f;
            if (n) {
                var v;
                var items = n(expectedNumberOfNonCommentArgs);
                var filter = cfg.f;
                /** @type {number} */
                var index = 0;
                for (;items.length > index;) {
                    if (filter.call(expectedNumberOfNonCommentArgs, v = items[index++])) {
                        str.push(v);
                    }
                }
            }
            return str;
        };
    }, {
        "./_object-gops" : 95,
        "./_object-keys" : 98,
        "./_object-pie" : 99
    }],
    65 : [function(require, module, dataAndEvents) {
        var e = require("./_global");
        var helper = require("./_core");
        var extend = require("./_ctx");
        var callback = require("./_hide");
        /** @type {string} */
        var name = "prototype";
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        var data = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            var i;
            var di;
            var opts;
            /** @type {number} */
            var IS_FORCED = expectedNumberOfNonCommentArgs & data.F;
            /** @type {number} */
            var args = expectedNumberOfNonCommentArgs & data.G;
            /** @type {number} */
            var parens = expectedNumberOfNonCommentArgs & data.S;
            /** @type {number} */
            var sch = expectedNumberOfNonCommentArgs & data.P;
            /** @type {number} */
            var m = expectedNumberOfNonCommentArgs & data.B;
            /** @type {number} */
            var controlElm = expectedNumberOfNonCommentArgs & data.W;
            var self = args ? helper : helper[key] || (helper[key] = {});
            var events = self[name];
            var subject = args ? e : parens ? e[key] : (e[key] || {})[name];
            if (args) {
                /** @type {string} */
                opt_attributes = key;
            }
            for (i in opt_attributes) {
                di = !IS_FORCED && (subject && void 0 !== subject[i]);
                if (!(di && i in self)) {
                    opts = di ? subject[i] : opt_attributes[i];
                    self[i] = args && "function" !== typeof subject[i] ? opt_attributes[i] : m && di ? extend(opts, e) : controlElm && subject[i] === opts ? function(old) {
                        /**
                         * @param {string} min2
                         * @param {string} reject
                         * @param {string} opt_obj
                         * @return {?}
                         */
                        var map = function(min2, reject, opt_obj) {
                            if (this instanceof old) {
                                switch(arguments.length) {
                                    case 0:
                                        return new old;
                                    case 1:
                                        return new old(min2);
                                    case 2:
                                        return new old(min2, reject);
                                }
                                return new old(min2, reject, opt_obj);
                            }
                            return old.apply(this, arguments);
                        };
                        return map[name] = old[name], map;
                    }(opts) : sch && "function" === typeof opts ? extend(Function.call, opts) : opts;
                    if (sch) {
                        (self.virtual || (self.virtual = {}))[i] = opts;
                        if (expectedNumberOfNonCommentArgs & data.R) {
                            if (events) {
                                if (!events[i]) {
                                    callback(events, i, opts);
                                }
                            }
                        }
                    }
                }
            }
        };
        /** @type {number} */
        data.F = 1;
        /** @type {number} */
        data.G = 2;
        /** @type {number} */
        data.S = 4;
        /** @type {number} */
        data.P = 8;
        /** @type {number} */
        data.B = 16;
        /** @type {number} */
        data.W = 32;
        /** @type {number} */
        data.U = 64;
        /** @type {number} */
        data.R = 128;
        /** @type {function (Object, string, ?): undefined} */
        module.exports = data;
    }, {
        "./_core" : 57,
        "./_ctx" : 59,
        "./_global" : 68,
        "./_hide" : 70
    }],
    66 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            try {
                return!!expectedNumberOfNonCommentArgs();
            } catch (e) {
                return true;
            }
        };
    }, {}],
    67 : [function(require, module, e) {
        var getActual = require("./_ctx");
        var test = require("./_iter-call");
        var swap = require("./_is-array-iter");
        var objDisplay = require("./_an-object");
        var assert = require("./_to-length");
        var inspect = require("./core.get-iterator-method");
        var resultUS = {};
        var resultCommaDecimal = {};
        /** @type {function (Object, string, ?, string, boolean): ?} */
        e = module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes, args, data) {
            var tagSeparatorIndex;
            var object;
            var context;
            var result;
            var value = data ? function() {
                return expectedNumberOfNonCommentArgs;
            } : inspect(expectedNumberOfNonCommentArgs);
            var fn = getActual(opt_attributes, args, key ? 2 : 1);
            /** @type {number} */
            var index = 0;
            if ("function" !== typeof value) {
                throw TypeError(expectedNumberOfNonCommentArgs + " is not iterable!");
            }
            if (swap(value)) {
                tagSeparatorIndex = assert(expectedNumberOfNonCommentArgs.length);
                for (;tagSeparatorIndex > index;index++) {
                    if (result = key ? fn(objDisplay(object = expectedNumberOfNonCommentArgs[index])[0], object[1]) : fn(expectedNumberOfNonCommentArgs[index]), result === resultUS || result === resultCommaDecimal) {
                        return result;
                    }
                }
            } else {
                context = value.call(expectedNumberOfNonCommentArgs);
                for (;!(object = context.next()).done;) {
                    if (result = test(context, fn, object.value, key), result === resultUS || result === resultCommaDecimal) {
                        return result;
                    }
                }
            }
        };
        e.BREAK = resultUS;
        e.RETURN = resultCommaDecimal;
    }, {
        "./_an-object" : 53,
        "./_ctx" : 59,
        "./_is-array-iter" : 75,
        "./_iter-call" : 78,
        "./_to-length" : 115,
        "./core.get-iterator-method" : 122
    }],
    68 : [function(dataAndEvents, module, deepDataAndEvents) {
        var global = module.exports = "undefined" !== typeof window && window.Math === Math ? window : "undefined" !== typeof self && self.Math === Math ? self : Function("return this")();
        if ("number" === typeof __g) {
            __g = global;
        }
    }, {}],
    69 : [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {function (this:Object, *): boolean} */
        var has = {}.hasOwnProperty;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            return has.call(expectedNumberOfNonCommentArgs, key);
        };
    }, {}],
    70 : [function(require, module, dataAndEvents) {
        var a = require("./_object-dp");
        var getActual = require("./_property-desc");
        /** @type {function (Object, string, ?): ?} */
        module.exports = require("./_descriptors") ? function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            return a.f(expectedNumberOfNonCommentArgs, key, getActual(1, opt_attributes));
        } : function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            return expectedNumberOfNonCommentArgs[key] = opt_attributes, expectedNumberOfNonCommentArgs;
        };
    }, {
        "./_descriptors" : 61,
        "./_object-dp" : 90,
        "./_property-desc" : 101
    }],
    71 : [function($sanitize, module, dataAndEvents) {
        module.exports = $sanitize("./_global").document && document.documentElement;
    }, {
        "./_global" : 68
    }],
    72 : [function($sanitize, module, dataAndEvents) {
        /** @type {boolean} */
        module.exports = !$sanitize("./_descriptors") && !$sanitize("./_fails")(function() {
            return 7 !== Object.defineProperty($sanitize("./_dom-create")("div"), "a", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_descriptors" : 61,
        "./_dom-create" : 62,
        "./_fails" : 66
    }],
    73 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            /** @type {boolean} */
            var un = void 0 === opt_attributes;
            switch(key.length) {
                case 0:
                    return un ? expectedNumberOfNonCommentArgs() : expectedNumberOfNonCommentArgs.call(opt_attributes);
                case 1:
                    return un ? expectedNumberOfNonCommentArgs(key[0]) : expectedNumberOfNonCommentArgs.call(opt_attributes, key[0]);
                case 2:
                    return un ? expectedNumberOfNonCommentArgs(key[0], key[1]) : expectedNumberOfNonCommentArgs.call(opt_attributes, key[0], key[1]);
                case 3:
                    return un ? expectedNumberOfNonCommentArgs(key[0], key[1], key[2]) : expectedNumberOfNonCommentArgs.call(opt_attributes, key[0], key[1], key[2]);
                case 4:
                    return un ? expectedNumberOfNonCommentArgs(key[0], key[1], key[2], key[3]) : expectedNumberOfNonCommentArgs.call(opt_attributes, key[0], key[1], key[2], key[3]);
            }
            return expectedNumberOfNonCommentArgs.apply(opt_attributes, key);
        };
    }, {}],
    74 : [function(require, module, dataAndEvents) {
        var getActual = require("./_cof");
        /** @type {Function} */
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(expectedNumberOfNonCommentArgs) {
            return "String" === getActual(expectedNumberOfNonCommentArgs) ? expectedNumberOfNonCommentArgs.split("") : Object(expectedNumberOfNonCommentArgs);
        };
    }, {
        "./_cof" : 56
    }],
    75 : [function(require, module, dataAndEvents) {
        var nodes = require("./_iterators");
        var expression = require("./_wks")("iterator");
        var e = Array.prototype;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return void 0 !== expectedNumberOfNonCommentArgs && (nodes.Array === expectedNumberOfNonCommentArgs || e[expression] === expectedNumberOfNonCommentArgs);
        };
    }, {
        "./_iterators" : 83,
        "./_wks" : 121
    }],
    76 : [function(require, module, dataAndEvents) {
        var getActual = require("./_cof");
        /** @type {function (*): boolean} */
        module.exports = Array.isArray || function(expectedNumberOfNonCommentArgs) {
            return "Array" === getActual(expectedNumberOfNonCommentArgs);
        };
    }, {
        "./_cof" : 56
    }],
    77 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return "object" === typeof expectedNumberOfNonCommentArgs ? null !== expectedNumberOfNonCommentArgs : "function" === typeof expectedNumberOfNonCommentArgs;
        };
    }, {}],
    78 : [function(require, module, dataAndEvents) {
        var getActual = require("./_an-object");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @param {string} chai
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes, chai) {
            try {
                return chai ? key(getActual(opt_attributes)[0], opt_attributes[1]) : key(opt_attributes);
            } catch (e) {
                var conditional = expectedNumberOfNonCommentArgs["return"];
                throw void 0 !== conditional && getActual(conditional.call(expectedNumberOfNonCommentArgs)), e;
            }
        };
    }, {
        "./_an-object" : 53
    }],
    79 : [function(require, module, dataAndEvents) {
        var getActual = require("./_object-create");
        var objDisplay = require("./_property-desc");
        var inspect = require("./_set-to-string-tag");
        var proto = {};
        require("./_hide")(proto, require("./_wks")("iterator"), function() {
            return this;
        });
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            expectedNumberOfNonCommentArgs.prototype = getActual(proto, {
                next : objDisplay(1, opt_attributes)
            });
            inspect(expectedNumberOfNonCommentArgs, key + " Iterator");
        };
    }, {
        "./_hide" : 70,
        "./_object-create" : 89,
        "./_property-desc" : 101,
        "./_set-to-string-tag" : 106,
        "./_wks" : 121
    }],
    80 : [function(require, module, dataAndEvents) {
        var Block = require("./_library");
        var group = require("./_export");
        var getActual = require("./_redefine");
        var set = require("./_hide");
        var inspect = require("./_has");
        var qs = require("./_iterators");
        var inherits = require("./_iter-create");
        var swap = require("./_set-to-string-tag");
        var objDisplay = require("./_object-gpo");
        var key = require("./_wks")("iterator");
        /** @type {boolean} */
        var retval = !([].keys && "next" in [].keys());
        /** @type {string} */
        var implementation = "@@iterator";
        /** @type {string} */
        var a = "keys";
        /** @type {string} */
        var type = "values";
        /**
         * @return {?}
         */
        var val = function() {
            return this;
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} value
         * @param {?} opt_attributes
         * @param {string} classProps
         * @param {Function} data
         * @param {(Function|string)} t
         * @param {string} chai
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, value, opt_attributes, classProps, data, t, chai) {
            inherits(opt_attributes, value, classProps);
            var context;
            var match;
            var elem;
            /**
             * @param {Function} key
             * @return {?}
             */
            var callback = function(key) {
                if (!retval && key in obj) {
                    return obj[key];
                }
                switch(key) {
                    case a:
                        return function() {
                            return new opt_attributes(this, key);
                        };
                    case type:
                        return function() {
                            return new opt_attributes(this, key);
                        };
                }
                return function() {
                    return new opt_attributes(this, key);
                };
            };
            /** @type {string} */
            var i = value + " Iterator";
            /** @type {boolean} */
            var err = data === type;
            /** @type {boolean} */
            var lists = false;
            var obj = expectedNumberOfNonCommentArgs.prototype;
            var object = obj[key] || (obj[implementation] || data && obj[data]);
            var info = object || callback(data);
            var result = data ? err ? callback("entries") : info : void 0;
            var self = "Array" === value ? obj.entries || object : object;
            if (self && (elem = objDisplay(self.call(new expectedNumberOfNonCommentArgs)), elem !== Object.prototype && (swap(elem, i, true), Block || (inspect(elem, key) || set(elem, key, val)))), err && (object && (object.name !== type && (lists = true, info = function() {
                    return object.call(this);
                }))), Block && !chai || (!retval && (!lists && obj[key]) || set(obj, key, info)), qs[value] = info, qs[i] = val, data) {
                if (context = {
                        values : err ? info : callback(type),
                        keys : t ? info : callback(a),
                        entries : result
                    }, chai) {
                    for (match in context) {
                        if (!(match in obj)) {
                            getActual(obj, match, context[match]);
                        }
                    }
                } else {
                    group(group.P + group.F * (retval || lists), value, context);
                }
            }
            return context;
        };
    }, {
        "./_export" : 65,
        "./_has" : 69,
        "./_hide" : 70,
        "./_iter-create" : 79,
        "./_iterators" : 83,
        "./_library" : 85,
        "./_object-gpo" : 96,
        "./_redefine" : 103,
        "./_set-to-string-tag" : 106,
        "./_wks" : 121
    }],
    81 : [function($sanitize, module, dataAndEvents) {
        var prop = $sanitize("./_wks")("iterator");
        /** @type {boolean} */
        var defaultMessage = false;
        try {
            var expectedNumberOfNonCommentArgs = [7][prop]();
            /**
             * @return {undefined}
             */
            expectedNumberOfNonCommentArgs["return"] = function() {
                /** @type {boolean} */
                defaultMessage = true;
            };
            Array.from(expectedNumberOfNonCommentArgs, function() {
                throw 2;
            });
        } catch (e) {
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            if (!key && !defaultMessage) {
                return false;
            }
            /** @type {boolean} */
            var str = false;
            try {
                /** @type {Array} */
                var originalEvent = [7];
                var stream = originalEvent[prop]();
                /**
                 * @return {?}
                 */
                stream.next = function() {
                    return{
                        done : str = true
                    };
                };
                /**
                 * @return {?}
                 */
                originalEvent[prop] = function() {
                    return stream;
                };
                expectedNumberOfNonCommentArgs(originalEvent);
            } catch (e) {
            }
            return str;
        };
    }, {
        "./_wks" : 121
    }],
    82 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            return{
                value : key,
                done : !!expectedNumberOfNonCommentArgs
            };
        };
    }, {}],
    83 : [function(dataAndEvents, module, deepDataAndEvents) {
        module.exports = {};
    }, {}],
    84 : [function(require, module, dataAndEvents) {
        var inspect = require("./_object-keys");
        var flag = require("./_to-iobject");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            var c;
            var obj = flag(expectedNumberOfNonCommentArgs);
            var str = inspect(obj);
            var len = str.length;
            /** @type {number} */
            var j = 0;
            for (;len > j;) {
                if (obj[c = str[j++]] === key) {
                    return c;
                }
            }
        };
    }, {
        "./_object-keys" : 98,
        "./_to-iobject" : 114
    }],
    85 : [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {boolean} */
        module.exports = true;
    }, {}],
    86 : [function(require, module, dataAndEvents) {
        var camelKey = require("./_uid")("meta");
        var visit = require("./_is-object");
        var hasOwnProperty = require("./_has");
        var dataAttr = require("./_object-dp").f;
        /** @type {number} */
        var O = 0;
        /** @type {function (Object): boolean} */
        var HOP = Object.isExtensible || function() {
            return true;
        };
        /** @type {boolean} */
        var FREEZE = !require("./_fails")(function() {
            return HOP(Object.preventExtensions({}));
        });
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {undefined}
         */
        var isString = function(expectedNumberOfNonCommentArgs) {
            dataAttr(expectedNumberOfNonCommentArgs, camelKey, {
                value : {
                    i : "O" + ++O,
                    w : {}
                }
            });
        };
        /**
         * @param {string} e
         * @param {?} idt
         * @return {?}
         */
        var toString = function(e, idt) {
            if (!visit(e)) {
                return "symbol" === typeof e ? e : ("string" === typeof e ? "S" : "P") + e;
            }
            if (!hasOwnProperty(e, camelKey)) {
                if (!HOP(e)) {
                    return "F";
                }
                if (!idt) {
                    return "E";
                }
                isString(e);
            }
            return e[camelKey].i;
        };
        /**
         * @param {Object} value
         * @param {?} str
         * @return {?}
         */
        var isEmpty = function(value, str) {
            if (!hasOwnProperty(value, camelKey)) {
                if (!HOP(value)) {
                    return true;
                }
                if (!str) {
                    return false;
                }
                isString(value);
            }
            return value[camelKey].w;
        };
        /**
         * @param {Object} walkers
         * @return {?}
         */
        var with_walkers = function(walkers) {
            return FREEZE && (NEED.NEED && (HOP(walkers) && (!hasOwnProperty(walkers, camelKey) && isString(walkers)))), walkers;
        };
        var NEED = module.exports = {
            KEY : camelKey,
            NEED : false,
            /** @type {function (string, ?): ?} */
            fastKey : toString,
            /** @type {function (Object, ?): ?} */
            getWeak : isEmpty,
            /** @type {function (Object): ?} */
            onFreeze : with_walkers
        };
    }, {
        "./_fails" : 66,
        "./_has" : 69,
        "./_is-object" : 77,
        "./_object-dp" : 90,
        "./_uid" : 118
    }],
    87 : [function($sanitize, module, dataAndEvents) {
        var expectedNumberOfNonCommentArgs = $sanitize("./_global");
        var proceed = $sanitize("./_task").set;
        var Store = expectedNumberOfNonCommentArgs.MutationObserver || expectedNumberOfNonCommentArgs.WebKitMutationObserver;
        var process = expectedNumberOfNonCommentArgs.process;
        var Promise = expectedNumberOfNonCommentArgs.Promise;
        /** @type {boolean} */
        var isNode = "process" === $sanitize("./_cof")(process);
        /**
         * @return {?}
         */
        module.exports = function() {
            var head;
            var ret;
            var done;
            /**
             * @return {undefined}
             */
            var init = function() {
                var d;
                var fn;
                if (isNode) {
                    if (d = process.domain) {
                        d.exit();
                    }
                }
                for (;head;) {
                    fn = head.fn;
                    head = head.next;
                    try {
                        fn();
                    } catch (e) {
                        throw head ? done() : ret = void 0, e;
                    }
                }
                ret = void 0;
                if (d) {
                    d.enter();
                }
            };
            if (isNode) {
                /**
                 * @return {undefined}
                 */
                done = function() {
                    process.nextTick(init);
                };
            } else {
                if (Store) {
                    /** @type {boolean} */
                    var iterations = true;
                    /** @type {Text} */
                    var node = document.createTextNode("");
                    (new Store(init)).observe(node, {
                        characterData : true
                    });
                    /**
                     * @return {undefined}
                     */
                    done = function() {
                        /** @type {boolean} */
                        node.data = iterations = !iterations;
                    };
                } else {
                    if (Promise && Promise.resolve) {
                        var delegate = Promise.resolve();
                        /**
                         * @return {undefined}
                         */
                        done = function() {
                            delegate.then(init);
                        };
                    } else {
                        /**
                         * @return {undefined}
                         */
                        done = function() {
                            proceed.call(expectedNumberOfNonCommentArgs, init);
                        };
                    }
                }
            }
            return function(fn) {
                var next = {
                    /** @type {Function} */
                    fn : fn,
                    next : void 0
                };
                if (ret) {
                    ret.next = next;
                }
                if (!head) {
                    head = next;
                    done();
                }
                ret = next;
            };
        };
    }, {
        "./_cof" : 56,
        "./_global" : 68,
        "./_task" : 111
    }],
    88 : [function(require, module, dataAndEvents) {
        var helper = require("./_object-keys");
        var a = require("./_object-gops");
        var cfg = require("./_object-pie");
        var selector = require("./_to-object");
        var inspect = require("./_iobject");
        var getNames_ = Object.assign;
        module.exports = !getNames_ || require("./_fails")(function() {
            var actualKey = {};
            var camelKey = {};
            var unlock = Symbol();
            /** @type {string} */
            var view = "abcdefghijklmnopqrst";
            return actualKey[unlock] = 7, view.split("").forEach(function(testname) {
                /** @type {string} */
                camelKey[testname] = testname;
            }), 7 !== getNames_({}, actualKey)[unlock] || Object.keys(getNames_({}, camelKey)).join("") !== view;
        }) ? function(expectedNumberOfNonCommentArgs, key) {
            var node = selector(expectedNumberOfNonCommentArgs);
            /** @type {number} */
            var argLength = arguments.length;
            /** @type {number} */
            var current = 1;
            var f = a.f;
            var filter = cfg.f;
            for (;argLength > current;) {
                var property;
                var element = inspect(arguments[current++]);
                var objectProperties = f ? helper(element).concat(f(element)) : helper(element);
                var ln = objectProperties.length;
                /** @type {number} */
                var multiplication = 0;
                for (;ln > multiplication;) {
                    if (filter.call(element, property = objectProperties[multiplication++])) {
                        node[property] = element[property];
                    }
                }
            }
            return node;
        } : getNames_;
    }, {
        "./_fails" : 66,
        "./_iobject" : 74,
        "./_object-gops" : 95,
        "./_object-keys" : 98,
        "./_object-pie" : 99,
        "./_to-object" : 116
    }],
    89 : [function(select, module, dataAndEvents) {
        var definition = select("./_an-object");
        var promote = select("./_object-dps");
        var tokenized = select("./_enum-bug-keys");
        var prop = select("./_shared-key")("IE_PROTO");
        /**
         * @return {undefined}
         */
        var context = function() {
        };
        /** @type {string} */
        var pname = "prototype";
        /**
         * @return {?}
         */
        var run = function() {
            var d;
            var ifr = select("./_dom-create")("iframe");
            var index = tokenized.length;
            /** @type {string} */
            var prefix = "<";
            /** @type {string} */
            var name = ">";
            /** @type {string} */
            ifr.style.display = "none";
            select("./_html").appendChild(ifr);
            /** @type {string} */
            ifr.src = "javascript:";
            d = ifr.contentWindow.document;
            d.open();
            d.write(prefix + "script" + name + "document.F=Object" + prefix + "/script" + name);
            d.close();
            run = d.F;
            for (;index--;) {
                delete run[pname][tokenized[index]];
            }
            return run();
        };
        /** @type {function ((Object|null), (Object|null)=): Object} */
        module.exports = Object.create || function(expectedNumberOfNonCommentArgs, key) {
            var originalEvent;
            return null !== expectedNumberOfNonCommentArgs ? (context[pname] = definition(expectedNumberOfNonCommentArgs), originalEvent = new context, context[pname] = null, originalEvent[prop] = expectedNumberOfNonCommentArgs) : originalEvent = run(), void 0 === key ? originalEvent : promote(originalEvent, key);
        };
    }, {
        "./_an-object" : 53,
        "./_dom-create" : 62,
        "./_enum-bug-keys" : 63,
        "./_html" : 71,
        "./_object-dps" : 91,
        "./_shared-key" : 107
    }],
    90 : [function(require, dataAndEvents, entry) {
        var getActual = require("./_an-object");
        var Block = require("./_ie8-dom-define");
        var i = require("./_to-primitive");
        /** @type {function (Object, string, Object): Object} */
        var setDescriptor = Object.defineProperty;
        /** @type {Function} */
        entry.f = require("./_descriptors") ? Object.defineProperty : function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            if (getActual(expectedNumberOfNonCommentArgs), key = i(key, true), getActual(opt_attributes), Block) {
                try {
                    return setDescriptor(expectedNumberOfNonCommentArgs, key, opt_attributes);
                } catch (e) {
                }
            }
            if ("get" in opt_attributes || "set" in opt_attributes) {
                throw TypeError("Accessors not supported!");
            }
            return "value" in opt_attributes && (expectedNumberOfNonCommentArgs[key] = opt_attributes.value), expectedNumberOfNonCommentArgs;
        };
    }, {
        "./_an-object" : 53,
        "./_descriptors" : 61,
        "./_ie8-dom-define" : 72,
        "./_to-primitive" : 117
    }],
    91 : [function(require, module, dataAndEvents) {
        var argv = require("./_object-dp");
        var getActual = require("./_an-object");
        var i = require("./_object-keys");
        /** @type {Function} */
        module.exports = require("./_descriptors") ? Object.defineProperties : function(expectedNumberOfNonCommentArgs, key) {
            getActual(expectedNumberOfNonCommentArgs);
            var f;
            var faces = i(key);
            var count = faces.length;
            /** @type {number} */
            var offset = 0;
            for (;count > offset;) {
                argv.f(expectedNumberOfNonCommentArgs, f = faces[offset++], key[f]);
            }
            return expectedNumberOfNonCommentArgs;
        };
    }, {
        "./_an-object" : 53,
        "./_descriptors" : 61,
        "./_object-dp" : 90,
        "./_object-keys" : 98
    }],
    92 : [function(require, dataAndEvents, entry) {
        var module = require("./_object-pie");
        var nodes = require("./_property-desc");
        var getActual = require("./_to-iobject");
        var i = require("./_to-primitive");
        var hasOwn = require("./_has");
        var Block = require("./_ie8-dom-define");
        /** @type {function (Object, string): (ObjectPropertyDescriptor|undefined)} */
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        /** @type {Function} */
        entry.f = require("./_descriptors") ? getOwnPropertyDescriptor : function(expectedNumberOfNonCommentArgs, key) {
            if (expectedNumberOfNonCommentArgs = getActual(expectedNumberOfNonCommentArgs), key = i(key, true), Block) {
                try {
                    return getOwnPropertyDescriptor(expectedNumberOfNonCommentArgs, key);
                } catch (e) {
                }
            }
            if (hasOwn(expectedNumberOfNonCommentArgs, key)) {
                return nodes(!module.f.call(expectedNumberOfNonCommentArgs, key), expectedNumberOfNonCommentArgs[key]);
            }
        };
    }, {
        "./_descriptors" : 61,
        "./_has" : 69,
        "./_ie8-dom-define" : 72,
        "./_object-pie" : 99,
        "./_property-desc" : 101,
        "./_to-iobject" : 114,
        "./_to-primitive" : 117
    }],
    93 : [function(symbol, mod, dataAndEvents) {
        var a = symbol("./_to-iobject");
        var f = symbol("./_object-gopn").f;
        /** @type {function (this:*): string} */
        var ostring = {}.toString;
        /** @type {Array} */
        var models = "object" === typeof window && (window && Object.getOwnPropertyNames) ? Object.getOwnPropertyNames(window) : [];
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        var tryIt = function(expectedNumberOfNonCommentArgs) {
            try {
                return f(expectedNumberOfNonCommentArgs);
            } catch (e) {
                return models.slice();
            }
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        mod.exports.f = function(expectedNumberOfNonCommentArgs) {
            return models && "[object Window]" === ostring.call(expectedNumberOfNonCommentArgs) ? tryIt(expectedNumberOfNonCommentArgs) : f(a(expectedNumberOfNonCommentArgs));
        };
    }, {
        "./_object-gopn" : 94,
        "./_to-iobject" : 114
    }],
    94 : [function(toArray, dataAndEvents, entry) {
        var dataAttr = toArray("./_object-keys-internal");
        var camelKey = toArray("./_enum-bug-keys").concat("length", "prototype");
        /** @type {function (Object): Array.<string>} */
        entry.f = Object.getOwnPropertyNames || function(expectedNumberOfNonCommentArgs) {
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey);
        };
    }, {
        "./_enum-bug-keys" : 63,
        "./_object-keys-internal" : 97
    }],
    95 : [function(dataAndEvents, deepDataAndEvents, object) {
        object.f = Object.getOwnPropertySymbols;
    }, {}],
    96 : [function(require, module, dataAndEvents) {
        var hasKey = require("./_has");
        var getActual = require("./_to-object");
        var type = require("./_shared-key")("IE_PROTO");
        var objectProto = Object.prototype;
        /** @type {function (Object): (Object|null)} */
        module.exports = Object.getPrototypeOf || function(expectedNumberOfNonCommentArgs) {
            return expectedNumberOfNonCommentArgs = getActual(expectedNumberOfNonCommentArgs), hasKey(expectedNumberOfNonCommentArgs, type) ? expectedNumberOfNonCommentArgs[type] : "function" === typeof expectedNumberOfNonCommentArgs.constructor && expectedNumberOfNonCommentArgs instanceof expectedNumberOfNonCommentArgs.constructor ? expectedNumberOfNonCommentArgs.constructor.prototype : expectedNumberOfNonCommentArgs instanceof Object ? objectProto : null;
        };
    }, {
        "./_has" : 69,
        "./_shared-key" : 107,
        "./_to-object" : 116
    }],
    97 : [function(require, module, dataAndEvents) {
        var getActual = require("./_has");
        var flag = require("./_to-iobject");
        var walk = require("./_array-includes")(false);
        var noConflict = require("./_shared-key")("IE_PROTO");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            var k;
            var obj = flag(expectedNumberOfNonCommentArgs);
            /** @type {number} */
            var bs = 0;
            /** @type {Array} */
            var ret = [];
            for (k in obj) {
                if (k !== noConflict) {
                    if (getActual(obj, k)) {
                        ret.push(k);
                    }
                }
            }
            for (;key.length > bs;) {
                if (getActual(obj, k = key[bs++])) {
                    if (!~walk(ret, k)) {
                        ret.push(k);
                    }
                }
            }
            return ret;
        };
    }, {
        "./_array-includes" : 54,
        "./_has" : 69,
        "./_shared-key" : 107,
        "./_to-iobject" : 114
    }],
    98 : [function($sanitize, module, dataAndEvents) {
        var dataAttr = $sanitize("./_object-keys-internal");
        var camelKey = $sanitize("./_enum-bug-keys");
        /** @type {function (Object): Array.<string>} */
        module.exports = Object.keys || function(expectedNumberOfNonCommentArgs) {
            return dataAttr(expectedNumberOfNonCommentArgs, camelKey);
        };
    }, {
        "./_enum-bug-keys" : 63,
        "./_object-keys-internal" : 97
    }],
    99 : [function(dataAndEvents, deepDataAndEvents, entry) {
        /** @type {function (this:Object, string): boolean} */
        entry.f = {}.propertyIsEnumerable;
    }, {}],
    100 : [function(require, module, dataAndEvents) {
        var inspect = require("./_export");
        var util = require("./_core");
        var getActual = require("./_fails");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {undefined}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            var resolve = (util.Object || {})[expectedNumberOfNonCommentArgs] || Object[expectedNumberOfNonCommentArgs];
            var r20 = {};
            r20[expectedNumberOfNonCommentArgs] = key(resolve);
            inspect(inspect.S + inspect.F * getActual(function() {
                resolve(1);
            }), "Object", r20);
        };
    }, {
        "./_core" : 57,
        "./_export" : 65,
        "./_fails" : 66
    }],
    101 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            return{
                enumerable : !(1 & expectedNumberOfNonCommentArgs),
                configurable : !(2 & expectedNumberOfNonCommentArgs),
                writable : !(4 & expectedNumberOfNonCommentArgs),
                value : key
            };
        };
    }, {}],
    102 : [function($sanitize, module, dataAndEvents) {
        var dataAttr = $sanitize("./_hide");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            var name;
            for (name in key) {
                if (opt_attributes && expectedNumberOfNonCommentArgs[name]) {
                    expectedNumberOfNonCommentArgs[name] = key[name];
                } else {
                    dataAttr(expectedNumberOfNonCommentArgs, name, key[name]);
                }
            }
            return expectedNumberOfNonCommentArgs;
        };
    }, {
        "./_hide" : 70
    }],
    103 : [function(factory, module, dataAndEvents) {
        module.exports = factory("./_hide");
    }, {
        "./_hide" : 70
    }],
    104 : [function(require, c, dataAndEvents) {
        var forIn = require("./_is-object");
        var baseCreateCallback = require("./_an-object");
        /**
         * @param {Object} callback
         * @param {Object} object
         * @return {undefined}
         */
        var forOwn = function(callback, object) {
            if (baseCreateCallback(callback), !forIn(object) && null !== object) {
                throw TypeError(object + ": can't set as prototype!");
            }
        };
        c.exports = {
            set : Object.setPrototypeOf || ("__proto__" in {} ? function(value, err, func) {
                try {
                    func = require("./_ctx")(Function.call, require("./_object-gopd").f(Object.prototype, "__proto__").set, 2);
                    func(value, []);
                    /** @type {boolean} */
                    err = !(value instanceof Array);
                } catch (e) {
                    /** @type {boolean} */
                    err = true;
                }
                return function(object, callback) {
                    return forOwn(object, callback), err ? object.__proto__ = callback : func(object, callback), object;
                };
            }({}, false) : void 0),
            /** @type {function (Object, Object): undefined} */
            check : forOwn
        };
    }, {
        "./_an-object" : 53,
        "./_ctx" : 59,
        "./_is-object" : 77,
        "./_object-gopd" : 92
    }],
    105 : [function(require, module, dataAndEvents) {
        var Block = require("./_global");
        var nodes = require("./_core");
        var ret = require("./_object-dp");
        var helper = require("./_descriptors");
        var camelKey = require("./_wks")("species");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {undefined}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            var rreturn = "function" === typeof nodes[expectedNumberOfNonCommentArgs] ? nodes[expectedNumberOfNonCommentArgs] : Block[expectedNumberOfNonCommentArgs];
            if (helper) {
                if (rreturn) {
                    if (!rreturn[camelKey]) {
                        ret.f(rreturn, camelKey, {
                            configurable : true,
                            /**
                             * @return {?}
                             */
                            get : function() {
                                return this;
                            }
                        });
                    }
                }
            }
        };
    }, {
        "./_core" : 57,
        "./_descriptors" : 61,
        "./_global" : 68,
        "./_object-dp" : 90,
        "./_wks" : 121
    }],
    106 : [function(require, module, dataAndEvents) {
        var setDescriptor = require("./_object-dp").f;
        var getActual = require("./_has");
        var camelKey = require("./_wks")("toStringTag");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            if (expectedNumberOfNonCommentArgs) {
                if (!getActual(expectedNumberOfNonCommentArgs = opt_attributes ? expectedNumberOfNonCommentArgs : expectedNumberOfNonCommentArgs.prototype, camelKey)) {
                    setDescriptor(expectedNumberOfNonCommentArgs, camelKey, {
                        configurable : true,
                        value : key
                    });
                }
            }
        };
    }, {
        "./_has" : 69,
        "./_object-dp" : 90,
        "./_wks" : 121
    }],
    107 : [function(require, module, dataAndEvents) {
        var key = require("./_shared")("keys");
        var getActual = require("./_uid");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return key[expectedNumberOfNonCommentArgs] || (key[expectedNumberOfNonCommentArgs] = getActual(expectedNumberOfNonCommentArgs));
        };
    }, {
        "./_shared" : 108,
        "./_uid" : 118
    }],
    108 : [function(require, module, dataAndEvents) {
        var nodes = require("./_global");
        /** @type {string} */
        var i = "__core-js_shared__";
        var store = nodes[i] || (nodes[i] = {});
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return store[expectedNumberOfNonCommentArgs] || (store[expectedNumberOfNonCommentArgs] = {});
        };
    }, {
        "./_global" : 68
    }],
    109 : [function(require, module, dataAndEvents) {
        var getActual = require("./_an-object");
        var inspect = require("./_a-function");
        var prop = require("./_wks")("species");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            var a;
            var obj = getActual(expectedNumberOfNonCommentArgs).constructor;
            return void 0 === obj || void 0 === (a = getActual(obj)[prop]) ? key : inspect(a);
        };
    }, {
        "./_a-function" : 50,
        "./_an-object" : 53,
        "./_wks" : 121
    }],
    110 : [function(getCallback, module, dataAndEvents) {
        var func = getCallback("./_to-integer");
        var callback = getCallback("./_defined");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return function(value, fn) {
                var chr;
                var b;
                /** @type {string} */
                var str = String(callback(value));
                var i = func(fn);
                /** @type {number} */
                var len = str.length;
                return i < 0 || i >= len ? expectedNumberOfNonCommentArgs ? "" : void 0 : (chr = str.charCodeAt(i), chr < 55296 || (chr > 56319 || (i + 1 === len || ((b = str.charCodeAt(i + 1)) < 56320 || b > 57343))) ? expectedNumberOfNonCommentArgs ? str.charAt(i) : chr : expectedNumberOfNonCommentArgs ? str.slice(i, i + 2) : (chr - 55296 << 10) + (b - 56320) + 65536);
            };
        };
    }, {
        "./_defined" : 60,
        "./_to-integer" : 113
    }],
    111 : [function(require, c, dataAndEvents) {
        var callback;
        var channel;
        var thisArg;
        var bind = require("./_ctx");
        var getActual = require("./_invoke");
        var xml = require("./_html");
        var inspect = require("./_dom-create");
        var global = require("./_global");
        var process = global.process;
        var last = global.setImmediate;
        var nonCommentArg = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        /** @type {number} */
        var pdataCur = 0;
        var a = {};
        /** @type {string} */
        var onreadystatechange = "onreadystatechange";
        /**
         * @return {undefined}
         */
        var self = function() {
            /** @type {number} */
            var cur = +this;
            if (a.hasOwnProperty(cur)) {
                var next = a[cur];
                delete a[cur];
                next();
            }
        };
        /**
         * @param {MessageEvent} ev
         * @return {undefined}
         */
        var onmessage = function(ev) {
            self.call(ev.data);
        };
        if (!(last && nonCommentArg)) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            last = function(expectedNumberOfNonCommentArgs) {
                /** @type {Array} */
                var args = [];
                /** @type {number} */
                var i = 1;
                for (;arguments.length > i;) {
                    args.push(arguments[i++]);
                }
                return a[++pdataCur] = function() {
                    getActual("function" === typeof expectedNumberOfNonCommentArgs ? expectedNumberOfNonCommentArgs : Function(expectedNumberOfNonCommentArgs), args);
                }, callback(pdataCur), pdataCur;
            };
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {undefined}
             */
            nonCommentArg = function(expectedNumberOfNonCommentArgs) {
                delete a[expectedNumberOfNonCommentArgs];
            };
            if ("process" === require("./_cof")(process)) {
                /**
                 * @param {number} data
                 * @return {undefined}
                 */
                callback = function(data) {
                    process.nextTick(bind(self, data, 1));
                };
            } else {
                if (MessageChannel) {
                    channel = new MessageChannel;
                    thisArg = channel.port2;
                    /** @type {function (MessageEvent): undefined} */
                    channel.port1.onmessage = onmessage;
                    callback = bind(thisArg.postMessage, thisArg, 1);
                } else {
                    if (global.addEventListener && ("function" === typeof postMessage && !global.importScripts)) {
                        /**
                         * @param {(number|string)} value
                         * @return {undefined}
                         */
                        callback = function(value) {
                            global.postMessage(value + "", "*");
                        };
                        global.addEventListener("message", onmessage, false);
                    } else {
                        /** @type {function (Object): undefined} */
                        callback = onreadystatechange in inspect("script") ? function(expectedNumberOfNonCommentArgs) {
                            /**
                             * @return {undefined}
                             */
                            xml.appendChild(inspect("script"))[onreadystatechange] = function() {
                                xml.removeChild(this);
                                self.call(expectedNumberOfNonCommentArgs);
                            };
                        } : function(data) {
                            setTimeout(bind(self, data, 1), 0);
                        };
                    }
                }
            }
        }
        c.exports = {
            set : last,
            clear : nonCommentArg
        };
    }, {
        "./_cof" : 56,
        "./_ctx" : 59,
        "./_dom-create" : 62,
        "./_global" : 68,
        "./_html" : 71,
        "./_invoke" : 73
    }],
    112 : [function(require, module, dataAndEvents) {
        var getActual = require("./_to-integer");
        /** @type {function (...[*]): number} */
        var log = Math.max;
        /** @type {function (...[*]): number} */
        var inspect = Math.min;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            return expectedNumberOfNonCommentArgs = getActual(expectedNumberOfNonCommentArgs), expectedNumberOfNonCommentArgs < 0 ? log(expectedNumberOfNonCommentArgs + key, 0) : inspect(expectedNumberOfNonCommentArgs, key);
        };
    }, {
        "./_to-integer" : 113
    }],
    113 : [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {function (*): number} */
        var ceil = Math.ceil;
        /** @type {function (*): number} */
        var floor = Math.floor;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return isNaN(expectedNumberOfNonCommentArgs = +expectedNumberOfNonCommentArgs) ? 0 : (expectedNumberOfNonCommentArgs > 0 ? floor : ceil)(expectedNumberOfNonCommentArgs);
        };
    }, {}],
    114 : [function(require, module, dataAndEvents) {
        var format = require("./_iobject");
        var getActual = require("./_defined");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return format(getActual(expectedNumberOfNonCommentArgs));
        };
    }, {
        "./_defined" : 60,
        "./_iobject" : 74
    }],
    115 : [function(require, module, dataAndEvents) {
        var getActual = require("./_to-integer");
        /** @type {function (...[*]): number} */
        var nativeMin = Math.min;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return expectedNumberOfNonCommentArgs > 0 ? nativeMin(getActual(expectedNumberOfNonCommentArgs), 9007199254740991) : 0;
        };
    }, {
        "./_to-integer" : 113
    }],
    116 : [function(require, module, dataAndEvents) {
        var getActual = require("./_defined");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return Object(getActual(expectedNumberOfNonCommentArgs));
        };
    }, {
        "./_defined" : 60
    }],
    117 : [function(require, module, dataAndEvents) {
        var getActual = require("./_is-object");
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs, key) {
            if (!getActual(expectedNumberOfNonCommentArgs)) {
                return expectedNumberOfNonCommentArgs;
            }
            var valueOf;
            var str;
            if (key && ("function" === typeof(valueOf = expectedNumberOfNonCommentArgs.toString) && !getActual(str = valueOf.call(expectedNumberOfNonCommentArgs)))) {
                return str;
            }
            if ("function" === typeof(valueOf = expectedNumberOfNonCommentArgs.valueOf) && !getActual(str = valueOf.call(expectedNumberOfNonCommentArgs))) {
                return str;
            }
            if (!key && ("function" === typeof(valueOf = expectedNumberOfNonCommentArgs.toString) && !getActual(str = valueOf.call(expectedNumberOfNonCommentArgs)))) {
                return str;
            }
            throw TypeError("Can't convert object to primitive value");
        };
    }, {
        "./_is-object" : 77
    }],
    118 : [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {number} */
        var count = 0;
        /** @type {number} */
        var id = Math.random();
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            return "Symbol(".concat(void 0 === expectedNumberOfNonCommentArgs ? "" : expectedNumberOfNonCommentArgs, ")_", (++count + id).toString(36));
        };
    }, {}],
    119 : [function(require, module, dataAndEvents) {
        var nodes = require("./_global");
        var runtime = require("./_core");
        var Block = require("./_library");
        var argv = require("./_wks-ext");
        var getActual = require("./_object-dp").f;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {undefined}
         */
        module.exports = function(expectedNumberOfNonCommentArgs) {
            var obj = runtime.Symbol || (runtime.Symbol = Block ? {} : nodes.Symbol || {});
            if (!("_" === expectedNumberOfNonCommentArgs.charAt(0))) {
                if (!(expectedNumberOfNonCommentArgs in obj)) {
                    getActual(obj, expectedNumberOfNonCommentArgs, {
                        value : argv.f(expectedNumberOfNonCommentArgs)
                    });
                }
            }
        };
    }, {
        "./_core" : 57,
        "./_global" : 68,
        "./_library" : 85,
        "./_object-dp" : 90,
        "./_wks-ext" : 120
    }],
    120 : [function(trim, dataAndEvents, el) {
        el.f = trim("./_wks");
    }, {
        "./_wks" : 121
    }],
    121 : [function(require, module, dataAndEvents) {
        var store = require("./_shared")("wks");
        var Block = require("./_uid");
        var Symbol = require("./_global").Symbol;
        /** @type {boolean} */
        var fn = "function" === typeof Symbol;
        /** @type {function (Object): ?} */
        var self = module.exports = function(expectedNumberOfNonCommentArgs) {
            return store[expectedNumberOfNonCommentArgs] || (store[expectedNumberOfNonCommentArgs] = fn && Symbol[expectedNumberOfNonCommentArgs] || (fn ? Symbol : Block)("Symbol." + expectedNumberOfNonCommentArgs));
        };
        self.store = store;
    }, {
        "./_global" : 68,
        "./_shared" : 108,
        "./_uid" : 118
    }],
    122 : [function(require, module, dataAndEvents) {
        var getActual = require("./_classof");
        var implementation = require("./_wks")("iterator");
        var objectTypes = require("./_iterators");
        /** @type {function (Object): ?} */
        module.exports = require("./_core").getIteratorMethod = function(obj) {
            if (void 0 !== obj) {
                return obj[implementation] || (obj["@@iterator"] || objectTypes[getActual(obj)]);
            }
        };
    }, {
        "./_classof" : 55,
        "./_core" : 57,
        "./_iterators" : 83,
        "./_wks" : 121
    }],
    123 : [function(require, module, dataAndEvents) {
        var nodes = require("./_an-object");
        var getActual = require("./core.get-iterator-method");
        /** @type {function (string): ?} */
        module.exports = require("./_core").getIterator = function(expectedNumberOfNonCommentArgs) {
            var fn = getActual(expectedNumberOfNonCommentArgs);
            if ("function" !== typeof fn) {
                throw TypeError(expectedNumberOfNonCommentArgs + " is not iterable!");
            }
            return nodes(fn.call(expectedNumberOfNonCommentArgs));
        };
    }, {
        "./_an-object" : 53,
        "./_core" : 57,
        "./core.get-iterator-method" : 122
    }],
    124 : [function(require, module, dataAndEvents) {
        var helper = require("./_classof");
        var func = require("./_wks")("iterator");
        var tags = require("./_iterators");
        /** @type {function (Object): ?} */
        module.exports = require("./_core").isIterable = function(expectedNumberOfNonCommentArgs) {
            var t = Object(expectedNumberOfNonCommentArgs);
            return void 0 !== t[func] || ("@@iterator" in t || tags.hasOwnProperty(helper(t)));
        };
    }, {
        "./_classof" : 55,
        "./_core" : 57,
        "./_iterators" : 83,
        "./_wks" : 121
    }],
    125 : [function(require, dataAndEvents, deepDataAndEvents) {
        var makeIterator = require("./_ctx");
        var expr = require("./_export");
        var getActual = require("./_to-object");
        var indexOf = require("./_iter-call");
        var merge = require("./_is-array-iter");
        var expect = require("./_to-length");
        var assert = require("./_create-property");
        var map = require("./core.get-iterator-method");
        expr(expr.S + expr.F * !require("./_iter-detect")(function(expectedNumberOfNonCommentArgs) {
            Array.from(expectedNumberOfNonCommentArgs);
        }), "Array", {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            from : function(expectedNumberOfNonCommentArgs) {
                var l;
                var result;
                var _ref;
                var cur;
                var elems = getActual(expectedNumberOfNonCommentArgs);
                var Buffer = "function" === typeof this ? this : Array;
                /** @type {number} */
                var len = arguments.length;
                var callback = len > 1 ? arguments[1] : void 0;
                /** @type {boolean} */
                var value = void 0 !== callback;
                /** @type {number} */
                var i = 0;
                var ret = map(elems);
                if (value && (callback = makeIterator(callback, len > 2 ? arguments[2] : void 0, 2)), void 0 === ret || Buffer === Array && merge(ret)) {
                    l = expect(elems.length);
                    result = new Buffer(l);
                    for (;l > i;i++) {
                        assert(result, i, value ? callback(elems[i], i) : elems[i]);
                    }
                } else {
                    cur = ret.call(elems);
                    result = new Buffer;
                    for (;!(_ref = cur.next()).done;i++) {
                        assert(result, i, value ? indexOf(cur, callback, [_ref.value, i], true) : _ref.value);
                    }
                }
                return result.length = i, result;
            }
        });
    }, {
        "./_create-property" : 58,
        "./_ctx" : 59,
        "./_export" : 65,
        "./_is-array-iter" : 75,
        "./_iter-call" : 78,
        "./_iter-detect" : 81,
        "./_to-length" : 115,
        "./_to-object" : 116,
        "./core.get-iterator-method" : 122
    }],
    126 : [function(require, module, dataAndEvents) {
        var isArray = require("./_add-to-unscopables");
        var fn = require("./_iter-step");
        var nodes = require("./_iterators");
        var getActual = require("./_to-iobject");
        module.exports = require("./_iter-define")(Array, "Array", function(obj, dataAndEvents) {
            this._t = getActual(obj);
            /** @type {number} */
            this._i = 0;
            /** @type {(number|string)} */
            this._k = dataAndEvents;
        }, function() {
            var arr = this._t;
            var EMPTY = this._k;
            /** @type {number} */
            var i = this._i++;
            return!arr || i >= arr.length ? (this._t = void 0, fn(1)) : "keys" === EMPTY ? fn(0, i) : "values" === EMPTY ? fn(0, arr[i]) : fn(0, [i, arr[i]]);
        }, "values");
        nodes.Arguments = nodes.Array;
        isArray("keys");
        isArray("values");
        isArray("entries");
    }, {
        "./_add-to-unscopables" : 51,
        "./_iter-define" : 80,
        "./_iter-step" : 82,
        "./_iterators" : 83,
        "./_to-iobject" : 114
    }],
    127 : [function(prim, dataAndEvents, deepDataAndEvents) {
        var d = prim("./_export");
        d(d.S + d.F, "Object", {
            assign : prim("./_object-assign")
        });
    }, {
        "./_export" : 65,
        "./_object-assign" : 88
    }],
    128 : [function(require, dataAndEvents, deepDataAndEvents) {
        var isKind = require("./_export");
        isKind(isKind.S, "Object", {
            create : require("./_object-create")
        });
    }, {
        "./_export" : 65,
        "./_object-create" : 89
    }],
    129 : [function(require, dataAndEvents, deepDataAndEvents) {
        var expr = require("./_export");
        expr(expr.S + expr.F * !require("./_descriptors"), "Object", {
            defineProperty : require("./_object-dp").f
        });
    }, {
        "./_descriptors" : 61,
        "./_export" : 65,
        "./_object-dp" : 90
    }],
    130 : [function(require, dataAndEvents, deepDataAndEvents) {
        var condition = require("./_to-object");
        var when = require("./_object-gpo");
        require("./_object-sap")("getPrototypeOf", function() {
            return function(value) {
                return when(condition(value));
            };
        });
    }, {
        "./_object-gpo" : 96,
        "./_object-sap" : 100,
        "./_to-object" : 116
    }],
    131 : [function(require, dataAndEvents, deepDataAndEvents) {
        var HOP = require("./_to-object");
        var getActual = require("./_object-keys");
        require("./_object-sap")("keys", function() {
            return function(walkers) {
                return getActual(HOP(walkers));
            };
        });
    }, {
        "./_object-keys" : 98,
        "./_object-sap" : 100,
        "./_to-object" : 116
    }],
    132 : [function(require, dataAndEvents, deepDataAndEvents) {
        var isKind = require("./_export");
        isKind(isKind.S, "Object", {
            setPrototypeOf : require("./_set-proto").set
        });
    }, {
        "./_export" : 65,
        "./_set-proto" : 104
    }],
    133 : [function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    }, {}],
    134 : [function(require, dataAndEvents, deepDataAndEvents) {
        var Moment;
        var Deferred;
        var S_NIL;
        var error = require("./_library");
        var expectedNumberOfNonCommentArgs = require("./_global");
        var fn = require("./_ctx");
        var b = require("./_classof");
        var node = require("./_export");
        var keys = require("./_is-object");
        var inspect = require("./_a-function");
        var getActual = require("./_an-instance");
        var each = require("./_for-of");
        var callback = require("./_species-constructor");
        var setter = require("./_task").set;
        var s = require("./_microtask")();
        /** @type {string} */
        var app = "Promise";
        var concat = expectedNumberOfNonCommentArgs.TypeError;
        var self = expectedNumberOfNonCommentArgs.process;
        var Promise = expectedNumberOfNonCommentArgs[app];
        self = expectedNumberOfNonCommentArgs.process;
        /** @type {boolean} */
        var domain = "process" === b(self);
        /**
         * @return {undefined}
         */
        var arg = function() {
        };
        /** @type {boolean} */
        var result = !!function() {
            try {
                var me = Promise.resolve(1);
                /** @type {function (?): undefined} */
                var FakePromise = (me.constructor = {})[require("./_wks")("species")] = function(func) {
                    func(arg, arg);
                };
                return(domain || "function" === typeof PromiseRejectionEvent) && me.then(arg) instanceof FakePromise;
            } catch (e) {
            }
        }();
        /**
         * @param {number} a
         * @param {number} b
         * @return {?}
         */
        var reject = function(a, b) {
            return a === b || a === Promise && b === S_NIL;
        };
        /**
         * @param {?} object
         * @return {?}
         */
        var extend = function(object) {
            var length;
            return!(!keys(object) || "function" !== typeof(length = object.then)) && length;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        var then = function(fn) {
            return reject(Promise, fn) ? new defer(fn) : new Deferred(fn);
        };
        /** @type {function (?): undefined} */
        var defer = Deferred = function(promise) {
            var result;
            var text;
            this.promise = new promise(function(subKey, textAlt) {
                if (void 0 !== result || void 0 !== text) {
                    throw concat("Bad Promise constructor");
                }
                result = subKey;
                text = textAlt;
            });
            this.resolve = inspect(result);
            this.reject = inspect(text);
        };
        /**
         * @param {Function} errback
         * @return {?}
         */
        var get = function(errback) {
            try {
                errback();
            } catch (err) {
                return{
                    error : err
                };
            }
        };
        /**
         * @param {Object} data
         * @param {boolean} recurring
         * @return {undefined}
         */
        var push = function(data, recurring) {
            if (!data._n) {
                /** @type {boolean} */
                data._n = true;
                var items = data._c;
                s(function() {
                    var silent = data._v;
                    /** @type {boolean} */
                    var caseSensitive = 1 === data._s;
                    /** @type {number} */
                    var index = 0;
                    /**
                     * @param {Object} result
                     * @return {undefined}
                     */
                    var finish = function(result) {
                        var expectedNumberOfNonCommentArgs;
                        var params;
                        var text = caseSensitive ? result.ok : result.fail;
                        var resolve = result.resolve;
                        var onComplete = result.reject;
                        var domain = result.domain;
                        try {
                            if (text) {
                                if (!caseSensitive) {
                                    if (2 === data._h) {
                                        write(data);
                                    }
                                    /** @type {number} */
                                    data._h = 1;
                                }
                                if (text === true) {
                                    expectedNumberOfNonCommentArgs = silent;
                                } else {
                                    if (domain) {
                                        domain.enter();
                                    }
                                    expectedNumberOfNonCommentArgs = text(silent);
                                    if (domain) {
                                        domain.exit();
                                    }
                                }
                                if (expectedNumberOfNonCommentArgs === result.promise) {
                                    onComplete(concat("Promise-chain cycle"));
                                } else {
                                    if (params = extend(expectedNumberOfNonCommentArgs)) {
                                        params.call(expectedNumberOfNonCommentArgs, resolve, onComplete);
                                    } else {
                                        resolve(expectedNumberOfNonCommentArgs);
                                    }
                                }
                            } else {
                                onComplete(silent);
                            }
                        } catch (val) {
                            onComplete(val);
                        }
                    };
                    for (;items.length > index;) {
                        finish(items[index++]);
                    }
                    /** @type {Array} */
                    data._c = [];
                    /** @type {boolean} */
                    data._n = false;
                    if (recurring) {
                        if (!data._h) {
                            ready(data);
                        }
                    }
                });
            }
        };
        /**
         * @param {Object} el
         * @return {undefined}
         */
        var ready = function(el) {
            setter.call(expectedNumberOfNonCommentArgs, function() {
                var node;
                var apc;
                var out;
                var type = el._v;
                if (test(el) && (node = get(function() {
                        if (domain) {
                            self.emit("unhandledRejection", type, el);
                        } else {
                            if (apc = expectedNumberOfNonCommentArgs.onunhandledrejection) {
                                apc({
                                    promise : el,
                                    reason : type
                                });
                            } else {
                                if (out = expectedNumberOfNonCommentArgs.console) {
                                    if (out.error) {
                                        out.error("Unhandled promise rejection", type);
                                    }
                                }
                            }
                        }
                    }), el._h = domain || test(el) ? 2 : 1), el._a = void 0, node) {
                    throw node.error;
                }
            });
        };
        /**
         * @param {Object} t
         * @return {?}
         */
        var test = function(t) {
            if (1 === t._h) {
                return false;
            }
            var next;
            var items = t._a || t._c;
            /** @type {number} */
            var index = 0;
            for (;items.length > index;) {
                if (next = items[index++], next.fail || !test(next.promise)) {
                    return false;
                }
            }
            return true;
        };
        /**
         * @param {Object} header
         * @return {undefined}
         */
        var write = function(header) {
            setter.call(expectedNumberOfNonCommentArgs, function() {
                var onError;
                if (domain) {
                    self.emit("rejectionHandled", header);
                } else {
                    if (onError = expectedNumberOfNonCommentArgs.onrejectionhandled) {
                        onError({
                            promise : header,
                            reason : header._v
                        });
                    }
                }
            });
        };
        /**
         * @param {?} e
         * @return {undefined}
         */
        var add = function(e) {
            var a = this;
            if (!a._d) {
                /** @type {boolean} */
                a._d = true;
                a = a._w || a;
                a._v = e;
                /** @type {number} */
                a._s = 2;
                if (!a._a) {
                    a._a = a._c.slice();
                }
                push(a, true);
            }
        };
        /**
         * @param {Object} h
         * @return {undefined}
         */
        var e = function(h) {
            var value;
            var a = this;
            if (!a._d) {
                /** @type {boolean} */
                a._d = true;
                a = a._w || a;
                try {
                    if (a === h) {
                        throw concat("Promise can't be resolved itself");
                    }
                    if (value = extend(h)) {
                        s(function() {
                            var expectedNumberOfNonCommentArgs = {
                                _w : a,
                                _d : false
                            };
                            try {
                                value.call(h, fn(e, expectedNumberOfNonCommentArgs, 1), fn(add, expectedNumberOfNonCommentArgs, 1));
                            } catch (name) {
                                add.call(expectedNumberOfNonCommentArgs, name);
                            }
                        });
                    } else {
                        /** @type {Object} */
                        a._v = h;
                        /** @type {number} */
                        a._s = 1;
                        push(a, false);
                    }
                } catch (name) {
                    add.call({
                        _w : a,
                        _d : false
                    }, name);
                }
            }
        };
        if (!result) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {undefined}
             */
            Promise = function(expectedNumberOfNonCommentArgs) {
                getActual(this, Promise, app, "_h");
                inspect(expectedNumberOfNonCommentArgs);
                Moment.call(this);
                try {
                    expectedNumberOfNonCommentArgs(fn(e, this, 1), fn(add, this, 1));
                } catch (name) {
                    add.call(this, name);
                }
            };
            /**
             * @param {?} isUTC
             * @return {undefined}
             */
            Moment = function(isUTC) {
                /** @type {Array} */
                this._c = [];
                this._a = void 0;
                /** @type {number} */
                this._s = 0;
                /** @type {boolean} */
                this._d = false;
                this._v = void 0;
                /** @type {number} */
                this._h = 0;
                /** @type {boolean} */
                this._n = false;
            };
            Moment.prototype = require("./_redefine-all")(Promise.prototype, {
                /**
                 * @param {Function} fn
                 * @param {Function} result
                 * @return {?}
                 */
                then : function(fn, result) {
                    var p = then(callback(this, Promise));
                    return p.ok = "function" !== typeof fn || fn, p.fail = "function" === typeof result && result, p.domain = domain ? self.domain : void 0, this._c.push(p), this._a && this._a.push(p), this._s && push(this, false), p.promise;
                },
                /**
                 * @param {Function} callback
                 * @return {?}
                 */
                "catch" : function(callback) {
                    return this.then(void 0, callback);
                }
            });
            /**
             * @return {undefined}
             */
            defer = function() {
                var util = new Moment;
                this.promise = util;
                this.resolve = fn(e, util, 1);
                this.reject = fn(add, util, 1);
            };
        }
        node(node.G + node.W + node.F * !result, {
            Promise : Promise
        });
        require("./_set-to-string-tag")(Promise, app);
        require("./_set-species")(app);
        S_NIL = require("./_core")[app];
        node(node.S + node.F * !result, app, {
            /**
             * @param {Object} silent
             * @return {?}
             */
            reject : function(silent) {
                var createDeferred = then(this);
                var reject = createDeferred.reject;
                return reject(silent), createDeferred.promise;
            }
        });
        node(node.S + node.F * (error || !result), app, {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            resolve : function(expectedNumberOfNonCommentArgs) {
                if (expectedNumberOfNonCommentArgs instanceof Promise && reject(expectedNumberOfNonCommentArgs.constructor, this)) {
                    return expectedNumberOfNonCommentArgs;
                }
                var deferred = then(this);
                var resolver = deferred.resolve;
                return resolver(expectedNumberOfNonCommentArgs), deferred.promise;
            }
        });
        node(node.S + node.F * !(result && require("./_iter-detect")(function(value) {
            Promise.all(value)["catch"](arg);
        })), app, {
            /**
             * @param {?} obj
             * @return {?}
             */
            all : function(obj) {
                var callback = this;
                var deferred = then(callback);
                var resolver = deferred.resolve;
                var reject = deferred.reject;
                var data = get(function() {
                    /** @type {Array} */
                    var passedValues = [];
                    /** @type {number} */
                    var index = 0;
                    /** @type {number} */
                    var remaining = 1;
                    each(obj, false, function(expectedNumberOfNonCommentArgs) {
                        /** @type {number} */
                        var i = index++;
                        /** @type {boolean} */
                        var alreadyCalled = false;
                        passedValues.push(void 0);
                        remaining++;
                        callback.resolve(expectedNumberOfNonCommentArgs).then(function(o) {
                            if (!alreadyCalled) {
                                /** @type {boolean} */
                                alreadyCalled = true;
                                passedValues[i] = o;
                                if (!--remaining) {
                                    resolver(passedValues);
                                }
                            }
                        }, reject);
                    });
                    if (!--remaining) {
                        resolver(passedValues);
                    }
                });
                return data && reject(data.error), deferred.promise;
            },
            /**
             * @param {Array} initial
             * @return {?}
             */
            race : function(initial) {
                var scope = this;
                var result = then(scope);
                var reject = result.reject;
                var data = get(function() {
                    each(initial, false, function(expectedNumberOfNonCommentArgs) {
                        scope.resolve(expectedNumberOfNonCommentArgs).then(result.resolve, reject);
                    });
                });
                return data && reject(data.error), result.promise;
            }
        });
    }, {
        "./_a-function" : 50,
        "./_an-instance" : 52,
        "./_classof" : 55,
        "./_core" : 57,
        "./_ctx" : 59,
        "./_export" : 65,
        "./_for-of" : 67,
        "./_global" : 68,
        "./_is-object" : 77,
        "./_iter-detect" : 81,
        "./_library" : 85,
        "./_microtask" : 87,
        "./_redefine-all" : 102,
        "./_set-species" : 105,
        "./_set-to-string-tag" : 106,
        "./_species-constructor" : 109,
        "./_task" : 111,
        "./_wks" : 121
    }],
    135 : [function($sanitize, dataAndEvents, deepDataAndEvents) {
        var fn = $sanitize("./_string-at")(true);
        $sanitize("./_iter-define")(String, "String", function(opt_message) {
            /** @type {string} */
            this._t = String(opt_message);
            /** @type {number} */
            this._i = 0;
        }, function() {
            var result;
            var list = this._t;
            var index = this._i;
            return index >= list.length ? {
                value : void 0,
                done : true
            } : (result = fn(list, index), this._i += result.length, {
                value : result,
                done : false
            });
        });
    }, {
        "./_iter-define" : 80,
        "./_string-at" : 110
    }],
    136 : [function($, dataAndEvents, deepDataAndEvents) {
        var opts = $("./_global");
        var promote = $("./_has");
        var emptyJ = $("./_descriptors");
        var tile = $("./_export");
        var ok = $("./_redefine");
        var text = $("./_meta").KEY;
        var hidden = $("./_fails");
        var query = $("./_shared");
        var copy = $("./_set-to-string-tag");
        var map = $("./_uid");
        var t = $("./_wks");
        var tests = $("./_wks-ext");
        var divSpan = $("./_wks-define");
        var hasKey = $("./_keyof");
        var sender = $("./_enum-keys");
        var isString = $("./_is-array");
        var push = $("./_an-object");
        var trim = $("./_to-iobject");
        var parseFloat = $("./_to-primitive");
        var css = $("./_property-desc");
        var isArray = $("./_object-create");
        var x = $("./_object-gopn-ext");
        var module = $("./_object-gopd");
        var entry = $("./_object-dp");
        var i = $("./_object-keys");
        var indexOf = module.f;
        var defineProperty = entry.f;
        var require = x.f;
        var options = opts.Symbol;
        var expectedNumberOfNonCommentArgs = opts.JSON;
        var fn = expectedNumberOfNonCommentArgs && expectedNumberOfNonCommentArgs.stringify;
        /** @type {string} */
        var key = "prototype";
        var camelKey = t("_hidden");
        var index = t("toPrimitive");
        /** @type {function (this:Object, string): boolean} */
        var propertyIsEnumerable = {}.propertyIsEnumerable;
        var events = query("symbol-registry");
        var keys = query("symbols");
        var elems = query("op-symbols");
        var object = Object[key];
        /** @type {boolean} */
        var symbol = "function" === typeof options;
        var duration = opts.QObject;
        /** @type {boolean} */
        var ownFlag = !duration || (!duration[key] || !duration[key].findChild);
        var callback = emptyJ && hidden(function() {
            return 7 !== isArray(defineProperty({}, "a", {
                /**
                 * @return {?}
                 */
                get : function() {
                    return defineProperty(this, "a", {
                        value : 7
                    }).a;
                }
            })).a;
        }) ? function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            var attributes = indexOf(object, key);
            if (attributes) {
                delete object[key];
            }
            defineProperty(expectedNumberOfNonCommentArgs, key, opt_attributes);
            if (attributes) {
                if (expectedNumberOfNonCommentArgs !== object) {
                    defineProperty(object, key, attributes);
                }
            }
        } : defineProperty;
        /**
         * @param {(number|string)} code
         * @return {?}
         */
        var a = function(code) {
            var self = keys[code] = isArray(options[key]);
            return self._k = code, self;
        };
        /** @type {function (Object): ?} */
        var test = symbol && "symbol" === typeof options.iterator ? function(o) {
            return "symbol" === typeof o;
        } : function(o) {
            return o instanceof options;
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @param {?} opt_attributes
         * @return {?}
         */
        var setValue = function(expectedNumberOfNonCommentArgs, key, opt_attributes) {
            return expectedNumberOfNonCommentArgs === object && setValue(elems, key, opt_attributes), push(expectedNumberOfNonCommentArgs), key = parseFloat(key, true), push(opt_attributes), promote(keys, key) ? (opt_attributes.enumerable ? (promote(expectedNumberOfNonCommentArgs, camelKey) && (expectedNumberOfNonCommentArgs[camelKey][key] && (expectedNumberOfNonCommentArgs[camelKey][key] = false)), opt_attributes = isArray(opt_attributes, {
                enumerable : css(0, false)
            })) : (promote(expectedNumberOfNonCommentArgs, camelKey) || defineProperty(expectedNumberOfNonCommentArgs, camelKey, css(1, {})), expectedNumberOfNonCommentArgs[camelKey][key] = true), callback(expectedNumberOfNonCommentArgs, key, opt_attributes)) : defineProperty(expectedNumberOfNonCommentArgs, key, opt_attributes);
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        var iterator = function(expectedNumberOfNonCommentArgs, key) {
            push(expectedNumberOfNonCommentArgs);
            var name;
            var attrNames = sender(key = trim(key));
            /** @type {number} */
            var i = 0;
            var l = attrNames.length;
            for (;l > i;) {
                setValue(expectedNumberOfNonCommentArgs, name = attrNames[i++], key[name]);
            }
            return expectedNumberOfNonCommentArgs;
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        var _each = function(expectedNumberOfNonCommentArgs, key) {
            return void 0 === key ? isArray(expectedNumberOfNonCommentArgs) : iterator(isArray(expectedNumberOfNonCommentArgs), key);
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        var s = function(expectedNumberOfNonCommentArgs) {
            /** @type {boolean} */
            var E = propertyIsEnumerable.call(this, expectedNumberOfNonCommentArgs = parseFloat(expectedNumberOfNonCommentArgs, true));
            return!(this === object && (promote(keys, expectedNumberOfNonCommentArgs) && !promote(elems, expectedNumberOfNonCommentArgs))) && (!(E || (!promote(this, expectedNumberOfNonCommentArgs) || (!promote(keys, expectedNumberOfNonCommentArgs) || promote(this, camelKey) && this[camelKey][expectedNumberOfNonCommentArgs]))) || E);
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} key
         * @return {?}
         */
        var parse = function(expectedNumberOfNonCommentArgs, key) {
            if (expectedNumberOfNonCommentArgs = trim(expectedNumberOfNonCommentArgs), key = parseFloat(key, true), expectedNumberOfNonCommentArgs !== object || (!promote(keys, key) || promote(elems, key))) {
                var found = indexOf(expectedNumberOfNonCommentArgs, key);
                return!found || (!promote(keys, key) || (promote(expectedNumberOfNonCommentArgs, camelKey) && expectedNumberOfNonCommentArgs[camelKey][key] || (found.enumerable = true))), found;
            }
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        var f = function(expectedNumberOfNonCommentArgs) {
            var cur;
            var items = require(trim(expectedNumberOfNonCommentArgs));
            /** @type {Array} */
            var pos = [];
            /** @type {number} */
            var index = 0;
            for (;items.length > index;) {
                if (!promote(keys, cur = items[index++])) {
                    if (!(cur === camelKey)) {
                        if (!(cur === text)) {
                            pos.push(cur);
                        }
                    }
                }
            }
            return pos;
        };
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        var next = function(expectedNumberOfNonCommentArgs) {
            var key;
            /** @type {boolean} */
            var chainable = expectedNumberOfNonCommentArgs === object;
            var path = require(chainable ? elems : trim(expectedNumberOfNonCommentArgs));
            /** @type {Array} */
            var rv = [];
            /** @type {number} */
            var idx = 0;
            for (;path.length > idx;) {
                if (!!promote(keys, key = path[idx++])) {
                    if (!(chainable && !promote(object, key))) {
                        rv.push(keys[key]);
                    }
                }
            }
            return rv;
        };
        if (!symbol) {
            /**
             * @return {?}
             */
            options = function() {
                if (this instanceof options) {
                    throw TypeError("Symbol is not a constructor!");
                }
                var storageKey = map(arguments.length > 0 ? arguments[0] : void 0);
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {undefined}
                 */
                var fn = function(expectedNumberOfNonCommentArgs) {
                    if (this === object) {
                        fn.call(elems, expectedNumberOfNonCommentArgs);
                    }
                    if (promote(this, camelKey)) {
                        if (promote(this[camelKey], storageKey)) {
                            /** @type {boolean} */
                            this[camelKey][storageKey] = false;
                        }
                    }
                    callback(this, storageKey, css(1, expectedNumberOfNonCommentArgs));
                };
                return emptyJ && (ownFlag && callback(object, storageKey, {
                    configurable : true,
                    /** @type {function (Object): undefined} */
                    set : fn
                })), a(storageKey);
            };
            ok(options[key], "toString", function() {
                return this._k;
            });
            /** @type {function (Object, string): ?} */
            module.f = parse;
            /** @type {function (Object, string, ?): ?} */
            entry.f = setValue;
            /** @type {function (Object): ?} */
            $("./_object-gopn").f = x.f = f;
            /** @type {function (Object): ?} */
            $("./_object-pie").f = s;
            /** @type {function (Object): ?} */
            $("./_object-gops").f = next;
            if (emptyJ) {
                if (!$("./_library")) {
                    ok(object, "propertyIsEnumerable", s, true);
                }
            }
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            tests.f = function(expectedNumberOfNonCommentArgs) {
                return a(t(expectedNumberOfNonCommentArgs));
            };
        }
        tile(tile.G + tile.W + tile.F * !symbol, {
            Symbol : options
        });
        /** @type {Array.<string>} */
        var str = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",");
        /** @type {number} */
        var chars = 0;
        for (;str.length > chars;) {
            t(str[chars++]);
        }
        str = i(t.store);
        /** @type {number} */
        chars = 0;
        for (;str.length > chars;) {
            divSpan(str[chars++]);
        }
        tile(tile.S + tile.F * !symbol, "Symbol", {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            "for" : function(expectedNumberOfNonCommentArgs) {
                return promote(events, expectedNumberOfNonCommentArgs += "") ? events[expectedNumberOfNonCommentArgs] : events[expectedNumberOfNonCommentArgs] = options(expectedNumberOfNonCommentArgs);
            },
            /**
             * @param {string} key
             * @return {?}
             */
            keyFor : function(key) {
                if (test(key)) {
                    return hasKey(events, key);
                }
                throw TypeError(key + " is not a symbol!");
            },
            /**
             * @return {undefined}
             */
            useSetter : function() {
                /** @type {boolean} */
                ownFlag = true;
            },
            /**
             * @return {undefined}
             */
            useSimple : function() {
                /** @type {boolean} */
                ownFlag = false;
            }
        });
        tile(tile.S + tile.F * !symbol, "Object", {
            /** @type {function (Object, string): ?} */
            create : _each,
            /** @type {function (Object, string, ?): ?} */
            defineProperty : setValue,
            /** @type {function (Object, string): ?} */
            defineProperties : iterator,
            /** @type {function (Object, string): ?} */
            getOwnPropertyDescriptor : parse,
            /** @type {function (Object): ?} */
            getOwnPropertyNames : f,
            /** @type {function (Object): ?} */
            getOwnPropertySymbols : next
        });
        if (expectedNumberOfNonCommentArgs) {
            tile(tile.S + tile.F * (!symbol || hidden(function() {
                var expectedNumberOfNonCommentArgs = options();
                return "[null]" !== fn([expectedNumberOfNonCommentArgs]) || ("{}" !== fn({
                    a : expectedNumberOfNonCommentArgs
                }) || "{}" !== fn(Object(expectedNumberOfNonCommentArgs)));
            })), "JSON", {
                /**
                 * @param {Object} obj
                 * @return {?}
                 */
                stringify : function(obj) {
                    if (void 0 !== obj && !test(obj)) {
                        var handler;
                        var callback;
                        /** @type {Array} */
                        var args = [obj];
                        /** @type {number} */
                        var i = 1;
                        for (;arguments.length > i;) {
                            args.push(arguments[i++]);
                        }
                        return handler = args[1], "function" === typeof handler && (callback = handler), !callback && isString(handler) || (handler = function(node, res) {
                            if (callback && (res = callback.call(this, node, res)), !test(res)) {
                                return res;
                            }
                        }), args[1] = handler, fn.apply(expectedNumberOfNonCommentArgs, args);
                    }
                }
            });
        }
        if (!options[key][index]) {
            $("./_hide")(options[key], index, options[key].valueOf);
        }
        copy(options, "Symbol");
        copy(Math, "Math", true);
        copy(opts.JSON, "JSON", true);
    }, {
        "./_an-object" : 53,
        "./_descriptors" : 61,
        "./_enum-keys" : 64,
        "./_export" : 65,
        "./_fails" : 66,
        "./_global" : 68,
        "./_has" : 69,
        "./_hide" : 70,
        "./_is-array" : 76,
        "./_keyof" : 84,
        "./_library" : 85,
        "./_meta" : 86,
        "./_object-create" : 89,
        "./_object-dp" : 90,
        "./_object-gopd" : 92,
        "./_object-gopn" : 94,
        "./_object-gopn-ext" : 93,
        "./_object-gops" : 95,
        "./_object-keys" : 98,
        "./_object-pie" : 99,
        "./_property-desc" : 101,
        "./_redefine" : 103,
        "./_set-to-string-tag" : 106,
        "./_shared" : 108,
        "./_to-iobject" : 114,
        "./_to-primitive" : 117,
        "./_uid" : 118,
        "./_wks" : 121,
        "./_wks-define" : 119,
        "./_wks-ext" : 120
    }],
    137 : [function($sanitize, dataAndEvents, deepDataAndEvents) {
        $sanitize("./_wks-define")("asyncIterator");
    }, {
        "./_wks-define" : 119
    }],
    138 : [function($sanitize, dataAndEvents, deepDataAndEvents) {
        $sanitize("./_wks-define")("observable");
    }, {
        "./_wks-define" : 119
    }],
    139 : [function(require, dataAndEvents, deepDataAndEvents) {
        require("./es6.array.iterator");
        var events = require("./_global");
        var getActual = require("./_hide");
        var nodes = require("./_iterators");
        var args = require("./_wks")("toStringTag");
        /** @type {Array} */
        var def = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"];
        /** @type {number} */
        var n = 0;
        for (;n < 5;n++) {
            var name = def[n];
            var constructor = events[name];
            var obj = constructor && constructor.prototype;
            if (obj) {
                if (!obj[args]) {
                    getActual(obj, args, name);
                }
            }
            nodes[name] = nodes.Array;
        }
    }, {
        "./_global" : 68,
        "./_hide" : 70,
        "./_iterators" : 83,
        "./_wks" : 121,
        "./es6.array.iterator" : 126
    }],
    140 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @return {?}
         */
        function r() {
            throw new Error("setTimeout has not been defined");
        }
        /**
         * @return {?}
         */
        function none() {
            throw new Error("clearTimeout has not been defined");
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function requestAnimationFrame(fn) {
            if (type === setTimeout) {
                return setTimeout(fn, 0);
            }
            if ((type === r || !type) && setTimeout) {
                return type = setTimeout, setTimeout(fn, 0);
            }
            try {
                return type(fn, 0);
            } catch (e) {
                try {
                    return type.call(null, fn, 0);
                } catch (e) {
                    return type.call(this, fn, 0);
                }
            }
        }
        /**
         * @param {?} id
         * @return {?}
         */
        function cancelAnimationFrame(id) {
            if (display === clearTimeout) {
                return clearTimeout(id);
            }
            if ((display === none || !display) && clearTimeout) {
                return display = clearTimeout, clearTimeout(id);
            }
            try {
                return display(id);
            } catch (e) {
                try {
                    return display.call(null, id);
                } catch (e) {
                    return display.call(this, id);
                }
            }
        }
        /**
         * @return {undefined}
         */
        function update() {
            if (draining) {
                if (received) {
                    /** @type {boolean} */
                    draining = false;
                    if (received.length) {
                        data = received.concat(data);
                    } else {
                        /** @type {number} */
                        index = -1;
                    }
                    if (data.length) {
                        tick();
                    }
                }
            }
        }
        /**
         * @return {undefined}
         */
        function tick() {
            if (!draining) {
                var id = requestAnimationFrame(update);
                /** @type {boolean} */
                draining = true;
                var length = data.length;
                for (;length;) {
                    received = data;
                    /** @type {Array} */
                    data = [];
                    for (;++index < length;) {
                        if (received) {
                            received[index].run();
                        }
                    }
                    /** @type {number} */
                    index = -1;
                    /** @type {number} */
                    length = data.length;
                }
                /** @type {null} */
                received = null;
                /** @type {boolean} */
                draining = false;
                cancelAnimationFrame(id);
            }
        }
        /**
         * @param {Function} options
         * @param {Function} array
         * @return {undefined}
         */
        function Animation(options, array) {
            /** @type {Function} */
            this.fun = options;
            /** @type {Function} */
            this.array = array;
        }
        /**
         * @return {undefined}
         */
        function tmp() {
        }
        var type;
        var display;
        var process = module.exports = {};
        !function() {
            try {
                /** @type {Function} */
                type = "function" === typeof setTimeout ? setTimeout : r;
            } catch (e) {
                /** @type {function (): ?} */
                type = r;
            }
            try {
                /** @type {Function} */
                display = "function" === typeof clearTimeout ? clearTimeout : none;
            } catch (e) {
                /** @type {function (): ?} */
                display = none;
            }
        }();
        var received;
        /** @type {Array} */
        var data = [];
        /** @type {boolean} */
        var draining = false;
        /** @type {number} */
        var index = -1;
        /**
         * @param {Function} fn
         * @return {undefined}
         */
        process.nextTick = function(fn) {
            /** @type {Array} */
            var x = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                /** @type {number} */
                var i = 1;
                for (;i < arguments.length;i++) {
                    x[i - 1] = arguments[i];
                }
            }
            data.push(new Animation(fn, x));
            if (!(1 !== data.length)) {
                if (!draining) {
                    requestAnimationFrame(tick);
                }
            }
        };
        /**
         * @return {undefined}
         */
        Animation.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        /** @type {string} */
        process.title = "browser";
        /** @type {boolean} */
        process.browser = true;
        process.env = {};
        /** @type {Array} */
        process.argv = [];
        /** @type {string} */
        process.version = "";
        process.versions = {};
        /** @type {function (): undefined} */
        process.on = tmp;
        /** @type {function (): undefined} */
        process.addListener = tmp;
        /** @type {function (): undefined} */
        process.once = tmp;
        /** @type {function (): undefined} */
        process.off = tmp;
        /** @type {function (): undefined} */
        process.removeListener = tmp;
        /** @type {function (): undefined} */
        process.removeAllListeners = tmp;
        /** @type {function (): undefined} */
        process.emit = tmp;
        /**
         * @param {?} name
         * @return {?}
         */
        process.binding = function(name) {
            throw new Error("process.binding is not supported");
        };
        /**
         * @return {?}
         */
        process.cwd = function() {
            return "/";
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        };
        /**
         * @return {?}
         */
        process.umask = function() {
            return 0;
        };
    }, {}],
    141 : [function(factory, module, dataAndEvents) {
        module.exports = factory("./lib/effects");
    }, {
        "./lib/effects" : 142
    }],
    142 : [function(matches, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.select = expectedNumberOfNonCommentArgs.cancel = expectedNumberOfNonCommentArgs.join = expectedNumberOfNonCommentArgs.fork = expectedNumberOfNonCommentArgs.cps = expectedNumberOfNonCommentArgs.apply = expectedNumberOfNonCommentArgs.call = expectedNumberOfNonCommentArgs.race = expectedNumberOfNonCommentArgs.put = expectedNumberOfNonCommentArgs.take = void 0;
        var options = matches("./internal/io");
        expectedNumberOfNonCommentArgs.take = options.take;
        expectedNumberOfNonCommentArgs.put = options.put;
        expectedNumberOfNonCommentArgs.race = options.race;
        expectedNumberOfNonCommentArgs.call = options.call;
        expectedNumberOfNonCommentArgs.apply = options.apply;
        expectedNumberOfNonCommentArgs.cps = options.cps;
        expectedNumberOfNonCommentArgs.fork = options.fork;
        expectedNumberOfNonCommentArgs.join = options.join;
        expectedNumberOfNonCommentArgs.cancel = options.cancel;
        expectedNumberOfNonCommentArgs.select = options.select;
    }, {
        "./internal/io" : 143
    }],
    143 : [function(Event, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} camelKey
         * @param {Object} session
         * @return {?}
         */
        function callback(expectedNumberOfNonCommentArgs, camelKey, session) {
            return camelKey in expectedNumberOfNonCommentArgs ? Object.defineProperty(expectedNumberOfNonCommentArgs, camelKey, {
                value : session,
                enumerable : true,
                configurable : true,
                writable : true
            }) : expectedNumberOfNonCommentArgs[camelKey] = session, expectedNumberOfNonCommentArgs;
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        function get(expectedNumberOfNonCommentArgs) {
            return("*" === expectedNumberOfNonCommentArgs ? config.wildcard : self.is.array(expectedNumberOfNonCommentArgs) ? config.array : self.is.func(expectedNumberOfNonCommentArgs) ? config.predicate : config["default"])(expectedNumberOfNonCommentArgs);
        }
        /**
         * @param {(Object|string)} id
         * @return {?}
         */
        function find(id) {
            if (arguments.length > 0 && self.is.undef(id)) {
                throw new Error(str);
            }
            return cb(param, self.is.undef(id) ? "*" : id);
        }
        /**
         * @param {string} store
         * @return {?}
         */
        function put(store) {
            return cb(r, store);
        }
        /**
         * @param {(Array|string)} template
         * @return {?}
         */
        function compile(template) {
            return cb(prop, template);
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @return {?}
         */
        function fn(expectedNumberOfNonCommentArgs, args) {
            (0, self.check)(expectedNumberOfNonCommentArgs, self.is.notUndef, r20);
            /** @type {null} */
            var context = null;
            if (self.is.array(expectedNumberOfNonCommentArgs)) {
                /** @type {Object} */
                var option = expectedNumberOfNonCommentArgs;
                var f = jQuery(option, 2);
                context = f[0];
                expectedNumberOfNonCommentArgs = f[1];
            } else {
                if (expectedNumberOfNonCommentArgs.fn) {
                    /** @type {Object} */
                    var options = expectedNumberOfNonCommentArgs;
                    context = options.context;
                    expectedNumberOfNonCommentArgs = options.fn;
                }
            }
            return(0, self.check)(expectedNumberOfNonCommentArgs, self.is.func, r20), {
                context : context,
                fn : expectedNumberOfNonCommentArgs,
                args : args
            };
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        function map(expectedNumberOfNonCommentArgs) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var args = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                args[i - 1] = arguments[i];
            }
            return cb(x, fn(expectedNumberOfNonCommentArgs, args));
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {?} name
         * @return {?}
         */
        function describe(expectedNumberOfNonCommentArgs, name) {
            var typePattern = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
            return cb(x, fn({
                context : expectedNumberOfNonCommentArgs,
                fn : name
            }, typePattern));
        }
        /**
         * @param {Object} res
         * @return {?}
         */
        function destroy(res) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var args = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                args[i - 1] = arguments[i];
            }
            return cb(sel, fn(res, args));
        }
        /**
         * @param {Object} el
         * @return {?}
         */
        function init(el) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var args = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                args[i - 1] = arguments[i];
            }
            return cb(evt, fn(el, args));
        }
        /**
         * @param {string} reason
         * @return {?}
         */
        function end(reason) {
            if (!stop(reason)) {
                throw new Error(objectDisposed);
            }
            return cb(status, reason);
        }
        /**
         * @param {string} e
         * @return {?}
         */
        function done(e) {
            if (!stop(e)) {
                throw new Error(msg);
            }
            return cb(arg, e);
        }
        /**
         * @param {string} type
         * @return {?}
         */
        function attach(type) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var args = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                args[i - 1] = arguments[i];
            }
            return 0 === arguments.length ? type = self.ident : (0, self.check)(type, self.is.func, restoreScript), cb(part, {
                selector : type,
                args : args
            });
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.asEffect = expectedNumberOfNonCommentArgs.SELECT_ARG_ERROR = expectedNumberOfNonCommentArgs.INVALID_PATTERN = expectedNumberOfNonCommentArgs.CANCEL_ARG_ERROR = expectedNumberOfNonCommentArgs.JOIN_ARG_ERROR = expectedNumberOfNonCommentArgs.FORK_ARG_ERROR = expectedNumberOfNonCommentArgs.CALL_FUNCTION_ARG_ERROR = void 0;
        var jQuery = function() {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {number} i
             * @return {?}
             */
            function flush(expectedNumberOfNonCommentArgs, i) {
                /** @type {Array} */
                var buffer = [];
                /** @type {boolean} */
                var callback2 = true;
                /** @type {boolean} */
                var _d = false;
                var bulk = void 0;
                try {
                    var node;
                    var exports = expectedNumberOfNonCommentArgs[Symbol.iterator]();
                    for (;!(callback2 = (node = exports.next()).done) && (buffer.push(node.value), !i || buffer.length !== i);callback2 = true) {
                    }
                } catch (fn) {
                    /** @type {boolean} */
                    _d = true;
                    bulk = fn;
                } finally {
                    try {
                        if (!callback2) {
                            if (exports["return"]) {
                                exports["return"]();
                            }
                        }
                    } finally {
                        if (_d) {
                            throw bulk;
                        }
                    }
                }
                return buffer;
            }
            return function(expectedNumberOfNonCommentArgs, dataName) {
                if (Array.isArray(expectedNumberOfNonCommentArgs)) {
                    return expectedNumberOfNonCommentArgs;
                }
                if (Symbol.iterator in Object(expectedNumberOfNonCommentArgs)) {
                    return flush(expectedNumberOfNonCommentArgs, dataName);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.matcher = get;
        /** @type {function ((Object|string)): ?} */
        expectedNumberOfNonCommentArgs.take = find;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.put = put;
        /** @type {function ((Array|string)): ?} */
        expectedNumberOfNonCommentArgs.race = compile;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.call = map;
        /** @type {function (Object, ?): ?} */
        expectedNumberOfNonCommentArgs.apply = describe;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.cps = destroy;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.fork = init;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.join = end;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.cancel = done;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.select = attach;
        var self = Event("./utils");
        /** @type {string} */
        var r20 = expectedNumberOfNonCommentArgs.CALL_FUNCTION_ARG_ERROR = "call/cps/fork first argument must be a function, an array [context, function] or an object {context, fn}";
        /** @type {string} */
        var objectDisposed = (expectedNumberOfNonCommentArgs.FORK_ARG_ERROR = "fork first argument must be a generator function or an iterator", expectedNumberOfNonCommentArgs.JOIN_ARG_ERROR = "join argument must be a valid task (a result of a fork)");
        /** @type {string} */
        var msg = expectedNumberOfNonCommentArgs.CANCEL_ARG_ERROR = "cancel argument must be a valid task (a result of a fork)";
        /** @type {string} */
        var str = expectedNumberOfNonCommentArgs.INVALID_PATTERN = "Invalid pattern passed to `take` (HINT: check if you didn't mispell a constant)";
        /** @type {string} */
        var restoreScript = expectedNumberOfNonCommentArgs.SELECT_ARG_ERROR = "select first argument must be a function";
        var key = (0, self.sym)("IO");
        /** @type {string} */
        var param = "TAKE";
        /** @type {string} */
        var r = "PUT";
        /** @type {string} */
        var prop = "RACE";
        /** @type {string} */
        var x = "CALL";
        /** @type {string} */
        var sel = "CPS";
        /** @type {string} */
        var evt = "FORK";
        /** @type {string} */
        var status = "JOIN";
        /** @type {string} */
        var arg = "CANCEL";
        /** @type {string} */
        var part = "SELECT";
        /**
         * @param {string} value
         * @param {string} msg
         * @return {?}
         */
        var cb = function(value, msg) {
            var e;
            return e = {}, callback(e, key, true), callback(e, value, msg), e;
        };
        var config = {
            /**
             * @return {?}
             */
            wildcard : function() {
                return self.kTrue;
            },
            /**
             * @param {?} name
             * @return {?}
             */
            "default" : function(name) {
                return function(v) {
                    return v.type === name;
                };
            },
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            array : function(expectedNumberOfNonCommentArgs) {
                return function(message) {
                    return expectedNumberOfNonCommentArgs.some(function(type) {
                        return type === message.type;
                    });
                };
            },
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            predicate : function(expectedNumberOfNonCommentArgs) {
                return function(deepDataAndEvents) {
                    return expectedNumberOfNonCommentArgs(deepDataAndEvents);
                };
            }
        };
        /**
         * @param {string} e
         * @return {?}
         */
        var stop = function(e) {
            return e[self.TASK];
        };
        expectedNumberOfNonCommentArgs.asEffect = {
            /**
             * @param {Object} item
             * @return {?}
             */
            take : function(item) {
                return item && (item[key] && item[param]);
            },
            /**
             * @param {Object} data
             * @return {?}
             */
            put : function(data) {
                return data && (data[key] && data[r]);
            },
            /**
             * @param {Object} data
             * @return {?}
             */
            race : function(data) {
                return data && (data[key] && data[prop]);
            },
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            call : function(expectedNumberOfNonCommentArgs) {
                return expectedNumberOfNonCommentArgs && (expectedNumberOfNonCommentArgs[key] && expectedNumberOfNonCommentArgs[x]);
            },
            /**
             * @param {Object} matches
             * @return {?}
             */
            cps : function(matches) {
                return matches && (matches[key] && matches[sel]);
            },
            /**
             * @param {Object} options
             * @return {?}
             */
            fork : function(options) {
                return options && (options[key] && options[evt]);
            },
            /**
             * @param {Object} args
             * @return {?}
             */
            join : function(args) {
                return args && (args[key] && args[status]);
            },
            /**
             * @param {Object} data
             * @return {?}
             */
            cancel : function(data) {
                return data && (data[key] && data[arg]);
            },
            /**
             * @param {string} object
             * @return {?}
             */
            select : function(object) {
                return object && (object[key] && object[part]);
            }
        };
    }, {
        "./utils" : 144
    }],
    144 : [function(callback, dataAndEvents, expectedNumberOfNonCommentArgs) {
        (function(exports) {
            /**
             * @param {?} object
             * @return {?}
             */
            function seal(object) {
                return object;
            }
            /**
             * @param {Object} model
             * @param {Function} success
             * @param {?} str
             * @return {undefined}
             */
            function check(model, success, str) {
                if (!success(model)) {
                    throw new Error(str);
                }
            }
            /**
             * @param {?} keepData
             * @param {Function} element
             * @return {undefined}
             */
            function remove(keepData, element) {
                var classes = keepData.indexOf(element);
                if (classes >= 0) {
                    keepData.splice(classes, 1);
                }
            }
            /**
             * @return {?}
             */
            function resolve() {
                var camelKey = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                var deferred = defer({}, camelKey);
                var promise = new Promise(function(resolve, reject) {
                    /** @type {Function} */
                    deferred.resolve = resolve;
                    deferred.reject = reject;
                });
                return deferred.promise = promise, deferred;
            }
            /**
             * @param {number} n
             * @return {?}
             */
            function find(n) {
                /** @type {Array} */
                var file = [];
                /** @type {number} */
                var i = 0;
                for (;i < n;i++) {
                    file.push(resolve());
                }
                return file;
            }
            /**
             * @return {?}
             */
            function e() {
                var seed = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                return function() {
                    return++seed;
                };
            }
            /**
             * @param {?} successCB
             * @return {?}
             */
            function save(successCB) {
                return Promise.resolve(1).then(function() {
                    return successCB();
                });
            }
            /**
             * @param {string} name
             * @return {undefined}
             */
            function it(name) {
                if (isDev) {
                    console.warn("DEPRECATION WARNING", name);
                }
            }
            Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
                value : true
            });
            var defer = Object.assign || function(expectedNumberOfNonCommentArgs) {
                /** @type {number} */
                var i = 1;
                for (;i < arguments.length;i++) {
                    var iterable = arguments[i];
                    var key;
                    for (key in iterable) {
                        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
                            expectedNumberOfNonCommentArgs[key] = iterable[key];
                        }
                    }
                }
                return expectedNumberOfNonCommentArgs;
            };
            /** @type {function (?): ?} */
            expectedNumberOfNonCommentArgs.ident = seal;
            /** @type {function (Object, Function, ?): undefined} */
            expectedNumberOfNonCommentArgs.check = check;
            /** @type {function (?, Function): undefined} */
            expectedNumberOfNonCommentArgs.remove = remove;
            /** @type {function (): ?} */
            expectedNumberOfNonCommentArgs.deferred = resolve;
            /** @type {function (number): ?} */
            expectedNumberOfNonCommentArgs.arrayOfDeffered = find;
            /** @type {function (): ?} */
            expectedNumberOfNonCommentArgs.autoInc = e;
            /** @type {function (?): ?} */
            expectedNumberOfNonCommentArgs.asap = save;
            /** @type {function (string): undefined} */
            expectedNumberOfNonCommentArgs.warnDeprecated = it;
            /** @type {function (string): ?} */
            var throttledUpdate = expectedNumberOfNonCommentArgs.sym = function(dataAndEvents) {
                return "@@redux-saga/" + dataAndEvents;
            };
            var sp = expectedNumberOfNonCommentArgs.TASK = throttledUpdate("TASK");
            var isDev = (expectedNumberOfNonCommentArgs.kTrue = function() {
                return true;
            }, expectedNumberOfNonCommentArgs.noop = function() {
            }, expectedNumberOfNonCommentArgs.isDev = "undefined" !== typeof exports && (exports.env && "development" === exports.env.NODE_ENV));
            var args = expectedNumberOfNonCommentArgs.is = {
                /**
                 * @param {number} id
                 * @return {?}
                 */
                undef : function(id) {
                    return null === id || void 0 === id;
                },
                /**
                 * @param {Object} dataAndEvents
                 * @return {?}
                 */
                notUndef : function(dataAndEvents) {
                    return null !== dataAndEvents && void 0 !== dataAndEvents;
                },
                /**
                 * @param {Object} name
                 * @return {?}
                 */
                func : function(name) {
                    return "function" === typeof name;
                },
                /** @type {function (*): boolean} */
                array : Array.isArray,
                /**
                 * @param {Object} obj
                 * @return {?}
                 */
                promise : function(obj) {
                    return obj && args.func(obj.then);
                },
                /**
                 * @param {Object} obj
                 * @return {?}
                 */
                iterator : function(obj) {
                    return obj && (args.func(obj.next) && args.func(obj["throw"]));
                },
                /**
                 * @param {(Node|string)} p
                 * @return {?}
                 */
                task : function(p) {
                    return p && p[sp];
                }
            };
        }).call(this, callback("_process"));
    }, {
        _process : 140
    }],
    145 : [function(factory, module, dataAndEvents) {
        (function(override) {
            var expectedNumberOfNonCommentArgs = "object" === typeof override ? override : "object" === typeof window ? window : "object" === typeof self ? self : this;
            var value = expectedNumberOfNonCommentArgs.regeneratorRuntime && Object.getOwnPropertyNames(expectedNumberOfNonCommentArgs).indexOf("regeneratorRuntime") >= 0;
            var attrNames = value && expectedNumberOfNonCommentArgs.regeneratorRuntime;
            if (expectedNumberOfNonCommentArgs.regeneratorRuntime = void 0, module.exports = factory("./runtime"), value) {
                expectedNumberOfNonCommentArgs.regeneratorRuntime = attrNames;
            } else {
                try {
                    delete expectedNumberOfNonCommentArgs.regeneratorRuntime;
                } catch (e) {
                    expectedNumberOfNonCommentArgs.regeneratorRuntime = void 0;
                }
            }
        }).call(this, "undefined" !== typeof window ? window : {});
    }, {
        "./runtime" : 146
    }],
    146 : [function(callback, exports, dataAndEvents) {
        (function(data, override) {
            !function(event) {
                /**
                 * @param {Function} options
                 * @param {Function} event
                 * @param {?} callback
                 * @param {Array} opt_attributes
                 * @return {?}
                 */
                function onComplete(options, event, callback, opt_attributes) {
                    var Type = event && event.prototype instanceof superClass ? event : superClass;
                    /** @type {Object} */
                    var self = Object.create(Type.prototype);
                    var opts = new Class(opt_attributes || []);
                    return self._invoke = parse(options, callback, opts), self;
                }
                /**
                 * @param {Function} msg
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @param {?} arg
                 * @return {?}
                 */
                function debug(msg, expectedNumberOfNonCommentArgs, arg) {
                    try {
                        return{
                            type : "normal",
                            arg : msg.call(expectedNumberOfNonCommentArgs, arg)
                        };
                    } catch (param) {
                        return{
                            type : "throw",
                            arg : param
                        };
                    }
                }
                /**
                 * @return {undefined}
                 */
                function superClass() {
                }
                /**
                 * @return {undefined}
                 */
                function method() {
                }
                /**
                 * @return {undefined}
                 */
                function camelKey() {
                }
                /**
                 * @param {Object} proto
                 * @return {undefined}
                 */
                function mix(proto) {
                    ["next", "throw", "return"].forEach(function(method) {
                        /**
                         * @param {?} data
                         * @return {?}
                         */
                        proto[method] = function(data) {
                            return this._invoke(method, data);
                        };
                    });
                }
                /**
                 * @param {Object} index
                 * @return {undefined}
                 */
                function init(index) {
                    /**
                     * @param {string} str
                     * @param {?} data
                     * @param {?} cb
                     * @param {?} callback
                     * @return {?}
                     */
                    function parse(str, data, cb, callback) {
                        var msg = debug(index[str], index, data);
                        if ("throw" !== msg.type) {
                            var params = msg.arg;
                            var expectedNumberOfNonCommentArgs = params.value;
                            return expectedNumberOfNonCommentArgs && ("object" === typeof expectedNumberOfNonCommentArgs && hasOwn.call(expectedNumberOfNonCommentArgs, "__await")) ? Promise.resolve(expectedNumberOfNonCommentArgs.__await).then(function(k) {
                                parse("next", k, cb, callback);
                            }, function(k) {
                                parse("throw", k, cb, callback);
                            }) : Promise.resolve(expectedNumberOfNonCommentArgs).then(function(v) {
                                params.value = v;
                                cb(params);
                            }, callback);
                        }
                        callback(msg.arg);
                    }
                    /**
                     * @param {string} req
                     * @param {?} stream
                     * @return {?}
                     */
                    function load(req, stream) {
                        /**
                         * @return {?}
                         */
                        function reject() {
                            return new Promise(function(part, val) {
                                parse(req, stream, part, val);
                            });
                        }
                        return promise = promise ? promise.then(reject, reject) : reject();
                    }
                    if ("object" === typeof data) {
                        if (data.domain) {
                            parse = data.domain.bind(parse);
                        }
                    }
                    var promise;
                    /** @type {function (string, ?): ?} */
                    this._invoke = load;
                }
                /**
                 * @param {Function} xhr
                 * @param {?} file
                 * @param {Object} opts
                 * @return {?}
                 */
                function parse(xhr, file, opts) {
                    /** @type {string} */
                    var type = remove;
                    return function(method, arg) {
                        if (type === fx) {
                            throw new Error("Generator is already running");
                        }
                        if (type === html) {
                            if ("throw" === method) {
                                throw arg;
                            }
                            return cb();
                        }
                        /** @type {string} */
                        opts.method = method;
                        opts.arg = arg;
                        for (;;) {
                            var e = opts.delegate;
                            if (e) {
                                var o = next(e, opts);
                                if (o) {
                                    if (o === value) {
                                        continue;
                                    }
                                    return o;
                                }
                            }
                            if ("next" === opts.method) {
                                opts.sent = opts._sent = opts.arg;
                            } else {
                                if ("throw" === opts.method) {
                                    if (type === remove) {
                                        throw type = html, opts.arg;
                                    }
                                    opts.dispatchException(opts.arg);
                                } else {
                                    if ("return" === opts.method) {
                                        opts.abrupt("return", opts.arg);
                                    }
                                }
                            }
                            /** @type {string} */
                            type = fx;
                            var data = debug(xhr, file, opts);
                            if ("normal" === data.type) {
                                if (type = opts.done ? html : width, data.arg === value) {
                                    continue;
                                }
                                return{
                                    value : data.arg,
                                    done : opts.done
                                };
                            }
                            if ("throw" === data.type) {
                                /** @type {string} */
                                type = html;
                                /** @type {string} */
                                opts.method = "throw";
                                opts.arg = data.arg;
                            }
                        }
                    };
                }
                /**
                 * @param {?} options
                 * @param {Object} opts
                 * @return {?}
                 */
                function next(options, opts) {
                    var stackStartFunction = options.iterator[opts.method];
                    if (stackStartFunction === arg) {
                        if (opts.delegate = null, "throw" === opts.method) {
                            if (options.iterator["return"] && (opts.method = "return", opts.arg = arg, next(options, opts), "throw" === opts.method)) {
                                return value;
                            }
                            /** @type {string} */
                            opts.method = "throw";
                            /** @type {TypeError} */
                            opts.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return value;
                    }
                    var self = debug(stackStartFunction, options.iterator, opts.arg);
                    if ("throw" === self.type) {
                        return opts.method = "throw", opts.arg = self.arg, opts.delegate = null, value;
                    }
                    var c = self.arg;
                    return c ? c.done ? (opts[options.resultName] = c.value, opts.next = options.nextLoc, "return" !== opts.method && (opts.method = "next", opts.arg = arg), opts.delegate = null, value) : c : (opts.method = "throw", opts.arg = new TypeError("iterator result is not an object"), opts.delegate = null, value);
                }
                /**
                 * @param {Array} property
                 * @return {undefined}
                 */
                function addProperty(property) {
                    var vvar = {
                        tryLoc : property[0]
                    };
                    if (1 in property) {
                        vvar.catchLoc = property[1];
                    }
                    if (2 in property) {
                        vvar.finallyLoc = property[2];
                        vvar.afterLoc = property[3];
                    }
                    this.tryEntries.push(vvar);
                }
                /**
                 * @param {?} httpServer
                 * @return {undefined}
                 */
                function start(httpServer) {
                    var me = httpServer.completion || {};
                    /** @type {string} */
                    me.type = "normal";
                    delete me.arg;
                    httpServer.completion = me;
                }
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {undefined}
                 */
                function Class(expectedNumberOfNonCommentArgs) {
                    /** @type {Array} */
                    this.tryEntries = [{
                        tryLoc : "root"
                    }];
                    expectedNumberOfNonCommentArgs.forEach(addProperty, this);
                    this.reset(true);
                }
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                function val(expectedNumberOfNonCommentArgs) {
                    if (expectedNumberOfNonCommentArgs) {
                        var conditional = expectedNumberOfNonCommentArgs[i];
                        if (conditional) {
                            return conditional.call(expectedNumberOfNonCommentArgs);
                        }
                        if ("function" === typeof expectedNumberOfNonCommentArgs.next) {
                            return expectedNumberOfNonCommentArgs;
                        }
                        if (!isNaN(expectedNumberOfNonCommentArgs.length)) {
                            /** @type {number} */
                            var j = -1;
                            /**
                             * @return {?}
                             */
                            var list = function test() {
                                for (;++j < expectedNumberOfNonCommentArgs.length;) {
                                    if (hasOwn.call(expectedNumberOfNonCommentArgs, j)) {
                                        return test.value = expectedNumberOfNonCommentArgs[j], test.done = false, test;
                                    }
                                }
                                return test.value = arg, test.done = true, test;
                            };
                            return list.next = list;
                        }
                    }
                    return{
                        /** @type {function (): ?} */
                        next : cb
                    };
                }
                /**
                 * @return {?}
                 */
                function cb() {
                    return{
                        value : arg,
                        done : true
                    };
                }
                var arg;
                var op = Object.prototype;
                /** @type {function (this:Object, *): boolean} */
                var hasOwn = op.hasOwnProperty;
                var container = "function" === typeof Symbol ? Symbol : {};
                var i = container.iterator || "@@iterator";
                var protoKey = container.toStringTag || "@@toStringTag";
                /** @type {boolean} */
                var onlyHandlers = "object" === typeof exports;
                var self = event.regeneratorRuntime;
                if (self) {
                    return void(onlyHandlers && (exports.exports = self));
                }
                self = event.regeneratorRuntime = onlyHandlers ? exports.exports : {};
                /** @type {function (Function, Function, ?, Array): ?} */
                self.wrap = onComplete;
                /** @type {string} */
                var remove = "suspendedStart";
                /** @type {string} */
                var width = "suspendedYield";
                /** @type {string} */
                var fx = "executing";
                /** @type {string} */
                var html = "completed";
                var value = {};
                var expectedNumberOfNonCommentArgs = {};
                /**
                 * @return {?}
                 */
                expectedNumberOfNonCommentArgs[i] = function() {
                    return this;
                };
                /** @type {function (Object): (Object|null)} */
                var getPrototypeOf = Object.getPrototypeOf;
                /** @type {(Object|null)} */
                var params = getPrototypeOf && getPrototypeOf(getPrototypeOf(val([])));
                if (params) {
                    if (params !== op) {
                        if (hasOwn.call(params, i)) {
                            /** @type {Object} */
                            expectedNumberOfNonCommentArgs = params;
                        }
                    }
                }
                /** @type {Object} */
                var proto = camelKey.prototype = superClass.prototype = Object.create(expectedNumberOfNonCommentArgs);
                /** @type {function (): undefined} */
                method.prototype = proto.constructor = camelKey;
                /** @type {function (): undefined} */
                camelKey.constructor = method;
                /** @type {string} */
                camelKey[protoKey] = method.displayName = "GeneratorFunction";
                /**
                 * @param {?} conditions
                 * @return {?}
                 */
                self.isGeneratorFunction = function(conditions) {
                    /** @type {(Function|boolean|null)} */
                    var func = "function" === typeof conditions && conditions.constructor;
                    return!!func && (func === method || "GeneratorFunction" === (func.displayName || func.name));
                };
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                self.mark = function(expectedNumberOfNonCommentArgs) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(expectedNumberOfNonCommentArgs, camelKey) : (expectedNumberOfNonCommentArgs.__proto__ = camelKey, protoKey in expectedNumberOfNonCommentArgs || (expectedNumberOfNonCommentArgs[protoKey] = "GeneratorFunction")), expectedNumberOfNonCommentArgs.prototype = Object.create(proto), expectedNumberOfNonCommentArgs;
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {?}
                 */
                self.awrap = function(dataAndEvents) {
                    return{
                        __await : dataAndEvents
                    };
                };
                mix(init.prototype);
                /** @type {function (Object): undefined} */
                self.AsyncIterator = init;
                /**
                 * @param {Function} options
                 * @param {?} callback
                 * @param {?} a
                 * @param {Object} opt_attributes
                 * @return {?}
                 */
                self.async = function(options, callback, a, opt_attributes) {
                    var stream = new init(onComplete(options, callback, a, opt_attributes));
                    return self.isGeneratorFunction(callback) ? stream : stream.next().then(function(d) {
                        return d.done ? d.value : stream.next();
                    });
                };
                mix(proto);
                /** @type {string} */
                proto[protoKey] = "Generator";
                /**
                 * @return {?}
                 */
                proto.toString = function() {
                    return "[object Generator]";
                };
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                self.keys = function(expectedNumberOfNonCommentArgs) {
                    /** @type {Array} */
                    var eventPath = [];
                    var cur;
                    for (cur in expectedNumberOfNonCommentArgs) {
                        eventPath.push(cur);
                    }
                    return eventPath.reverse(), function init() {
                        for (;eventPath.length;) {
                            var result = eventPath.pop();
                            if (result in expectedNumberOfNonCommentArgs) {
                                return init.value = result, init.done = false, init;
                            }
                        }
                        return init.done = true, init;
                    };
                };
                /** @type {function (Object): ?} */
                self.values = val;
                Class.prototype = {
                    /** @type {function (Object): undefined} */
                    constructor : Class,
                    /**
                     * @param {boolean} dataAndEvents
                     * @return {undefined}
                     */
                    reset : function(dataAndEvents) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = arg, this.done = false, this.delegate = null, this.method = "next", this.arg = arg, this.tryEntries.forEach(start), !dataAndEvents) {
                            var prop;
                            for (prop in this) {
                                if ("t" === prop.charAt(0)) {
                                    if (hasOwn.call(this, prop)) {
                                        if (!isNaN(+prop.slice(1))) {
                                            this[prop] = arg;
                                        }
                                    }
                                }
                            }
                        }
                    },
                    /**
                     * @return {?}
                     */
                    stop : function() {
                        /** @type {boolean} */
                        this.done = true;
                        var m = this.tryEntries[0];
                        var me = m.completion;
                        if ("throw" === me.type) {
                            throw me.arg;
                        }
                        return this.rval;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    dispatchException : function(value) {
                        /**
                         * @param {string} e
                         * @param {boolean} signal_eof
                         * @return {?}
                         */
                        function next(e, signal_eof) {
                            return msg.type = "throw", msg.arg = value, me.next = e, signal_eof && (me.method = "next", me.arg = arg), !!signal_eof;
                        }
                        if (this.done) {
                            throw value;
                        }
                        var me = this;
                        /** @type {number} */
                        var unlock = this.tryEntries.length - 1;
                        for (;unlock >= 0;--unlock) {
                            var expectedNumberOfNonCommentArgs = this.tryEntries[unlock];
                            var msg = expectedNumberOfNonCommentArgs.completion;
                            if ("root" === expectedNumberOfNonCommentArgs.tryLoc) {
                                return next("end");
                            }
                            if (expectedNumberOfNonCommentArgs.tryLoc <= this.prev) {
                                /** @type {boolean} */
                                var a = hasOwn.call(expectedNumberOfNonCommentArgs, "catchLoc");
                                /** @type {boolean} */
                                var b = hasOwn.call(expectedNumberOfNonCommentArgs, "finallyLoc");
                                if (a && b) {
                                    if (this.prev < expectedNumberOfNonCommentArgs.catchLoc) {
                                        return next(expectedNumberOfNonCommentArgs.catchLoc, true);
                                    }
                                    if (this.prev < expectedNumberOfNonCommentArgs.finallyLoc) {
                                        return next(expectedNumberOfNonCommentArgs.finallyLoc);
                                    }
                                } else {
                                    if (a) {
                                        if (this.prev < expectedNumberOfNonCommentArgs.catchLoc) {
                                            return next(expectedNumberOfNonCommentArgs.catchLoc, true);
                                        }
                                    } else {
                                        if (!b) {
                                            throw new Error("try statement without catch or finally");
                                        }
                                        if (this.prev < expectedNumberOfNonCommentArgs.finallyLoc) {
                                            return next(expectedNumberOfNonCommentArgs.finallyLoc);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    /**
                     * @param {string} type
                     * @param {?} t
                     * @return {?}
                     */
                    abrupt : function(type, t) {
                        /** @type {number} */
                        var unlock = this.tryEntries.length - 1;
                        for (;unlock >= 0;--unlock) {
                            var expectedNumberOfNonCommentArgs = this.tryEntries[unlock];
                            if (expectedNumberOfNonCommentArgs.tryLoc <= this.prev && (hasOwn.call(expectedNumberOfNonCommentArgs, "finallyLoc") && this.prev < expectedNumberOfNonCommentArgs.finallyLoc)) {
                                var item = expectedNumberOfNonCommentArgs;
                                break;
                            }
                        }
                        if (item) {
                            if ("break" === type || "continue" === type) {
                                if (item.tryLoc <= t) {
                                    if (t <= item.finallyLoc) {
                                        /** @type {null} */
                                        item = null;
                                    }
                                }
                            }
                        }
                        var data = item ? item.completion : {};
                        return data.type = type, data.arg = t, item ? (this.method = "next", this.next = item.finallyLoc, value) : this.complete(data);
                    },
                    /**
                     * @param {Event} token
                     * @param {?} next
                     * @return {?}
                     */
                    complete : function(token, next) {
                        if ("throw" === token.type) {
                            throw token.arg;
                        }
                        return "break" === token.type || "continue" === token.type ? this.next = token.arg : "return" === token.type ? (this.rval = this.arg = token.arg, this.method = "return", this.next = "end") : "normal" === token.type && (next && (this.next = next)), value;
                    },
                    /**
                     * @param {number} opt_attributes
                     * @return {?}
                     */
                    finish : function(opt_attributes) {
                        /** @type {number} */
                        var unlock = this.tryEntries.length - 1;
                        for (;unlock >= 0;--unlock) {
                            var httpServer = this.tryEntries[unlock];
                            if (httpServer.finallyLoc === opt_attributes) {
                                return this.complete(httpServer.completion, httpServer.afterLoc), start(httpServer), value;
                            }
                        }
                    },
                    /**
                     * @param {?} no
                     * @return {?}
                     */
                    "catch" : function(no) {
                        /** @type {number} */
                        var unlock = this.tryEntries.length - 1;
                        for (;unlock >= 0;--unlock) {
                            var httpServer = this.tryEntries[unlock];
                            if (httpServer.tryLoc === no) {
                                var me = httpServer.completion;
                                if ("throw" === me.type) {
                                    var arg = me.arg;
                                    start(httpServer);
                                }
                                return arg;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    /**
                     * @param {Object} expectedNumberOfNonCommentArgs
                     * @param {string} dataAndEvents
                     * @param {?} deepDataAndEvents
                     * @return {?}
                     */
                    delegateYield : function(expectedNumberOfNonCommentArgs, dataAndEvents, deepDataAndEvents) {
                        return this.delegate = {
                            iterator : val(expectedNumberOfNonCommentArgs),
                            resultName : dataAndEvents,
                            nextLoc : deepDataAndEvents
                        }, "next" === this.method && (this.arg = arg), value;
                    }
                };
            }("object" === typeof override ? override : "object" === typeof window ? window : "object" === typeof self ? self : this);
        }).call(this, callback("_process"), "undefined" !== typeof window ? window : {});
    }, {
        _process : 140
    }],
    147 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        require("extension-api/globals");
        var cfg = require("config");
        cfg.initGlobal("chrome", "popup");
        var Block = require("extension-api/chrome");
        var nodes = require("extension-api");
        var helper = require("extension-api/web-extensions");
        helper.hacksForCompatibility();
        nodes.initGlobalExtensionApi(Block.createApi());
        require("universal/popup");
    }, {
        config : 151,
        "extension-api" : 159,
        "extension-api/chrome" : 157,
        "extension-api/globals" : 158,
        "extension-api/web-extensions" : 166,
        "universal/popup" : 217
    }],
    148 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var AppConfig;
        var nodes = require("stdlib");
        var config = require("./url");
        var module = require("./services");
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @param {?} opt_attributes
             * @return {?}
             */
            function create(expectedNumberOfNonCommentArgs, key, opt_attributes) {
                var camelKey = "prod" === key ? "https://f-log-extension.grammarly.io" : "qa" === key || "dev" === key ? "https://127.0.0.1:8000" : nodes.assertNever(key);
                var actualKey = "prod" === key ? url : "qa" === key || "dev" === key ? "qagr.io" : nodes.assertNever(key);
                return{
                    url : config.UrlConfig.create(url, camelKey, opt_attributes),
                    gnar : module.GnarConfig.create(expectedNumberOfNonCommentArgs, actualKey),
                    felog : module.FelogConfig.create(expectedNumberOfNonCommentArgs),
                    extensionId : extensionId
                };
            }
            /** @type {string} */
            var extensionId = "87677a2c52b84ad3a151a4a72f5bd3c4";
            /** @type {string} */
            var url = "grammarly.com";
            /** @type {function (Object, string, ?): ?} */
            exports.create = create;
        }(AppConfig = expectedNumberOfNonCommentArgs.AppConfig || (expectedNumberOfNonCommentArgs.AppConfig = {}));
    }, {
        "./services" : 153,
        "./url" : 155,
        stdlib : 201
    }],
    149 : [function(topic, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var BuildInfo;
        var out = topic("stdlib");
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @param {?} opt_attributes
             * @param {string} index
             * @param {string} value
             * @param {string} object
             * @param {string} visitor
             * @return {?}
             */
            function traverse(expectedNumberOfNonCommentArgs, key, opt_attributes, index, value, object, visitor) {
                var num = void 0 !== object && void 0 !== visitor ? object : "UNVERSIONED";
                /** @type {string} */
                var l = expectedNumberOfNonCommentArgs + "." + key + "." + opt_attributes;
                /** @type {string} */
                var min = ["prod" !== value ? value : null, num !== index ? num : null].filter(function(dataAndEvents) {
                    return!!dataAndEvents;
                }).join(".");
                return{
                    version : l,
                    fullVersion : l + "-" + [index, min].filter(function(g) {
                        return "" !== g;
                    }).join("/"),
                    commitHash : visitor,
                    gitBranch : object
                };
            }
            /**
             * @param {string} browser
             * @param {string} value
             * @param {Object} o
             * @return {?}
             */
            function detectBrowser(browser, value, o) {
                try {
                    switch(browser) {
                        case "safari":
                            switch(value) {
                                case "bg":
                                    ;
                                case "popup":
                                    return o.safari.extension.displayVersion;
                                default:
                                    return;
                            }
                            ;
                        case "chrome":
                            return o.chrome.runtime.getManifest().version;
                        case "firefox":
                            return o.firefox.runtime.getManifest().version;
                        case "edge":
                            return o.edge.runtime.getManifest().version;
                        default:
                            return out.assertNever(browser);
                    }
                } catch (key) {
                    return void console.error("Could not get extension version from manifest", key);
                }
            }
            /** @type {function (Object, string, ?, string, string, string, string): ?} */
            exports.create = traverse;
            /** @type {function (string, string, Object): ?} */
            exports.getManifestVersion = detectBrowser;
        }(BuildInfo = expectedNumberOfNonCommentArgs.BuildInfo || (expectedNumberOfNonCommentArgs.BuildInfo = {}));
    }, {
        stdlib : 201
    }],
    150 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var TargetBrowser;
        var Block = require("stdlib");
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function Detectizr(expectedNumberOfNonCommentArgs) {
                return Block.optionalStringUnion(["chrome", "safari", "firefox", "edge"], expectedNumberOfNonCommentArgs);
            }
            /**
             * @param {Object} w
             * @return {?}
             */
            function detect(w) {
                return w.chrome && /google/i.test(w.navigator.vendor) ? "chrome" : w.navigator.userAgent.indexOf("Firefox") !== -1 ? "firefox" : /^((?!chrome).)*safari/i.test(w.navigator.userAgent) ? "safari" : "Netscape" === w.navigator.appName && w.navigator.appVersion.indexOf("Edge") > -1 ? "edge" : void 0;
            }
            /** @type {function (Object): ?} */
            exports.create = Detectizr;
            /** @type {function (Object): ?} */
            exports.detect = detect;
        }(TargetBrowser = expectedNumberOfNonCommentArgs.TargetBrowser || (expectedNumberOfNonCommentArgs.TargetBrowser = {}));
        var TargetEnv;
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function create(expectedNumberOfNonCommentArgs) {
                return Block.optionalStringUnion(["dev", "prod", "qa"], expectedNumberOfNonCommentArgs);
            }
            /** @type {function (Object): ?} */
            exports.create = create;
        }(TargetEnv = expectedNumberOfNonCommentArgs.TargetEnv || (expectedNumberOfNonCommentArgs.TargetEnv = {}));
        var TargetContext;
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function create(expectedNumberOfNonCommentArgs) {
                return Block.optionalStringUnion(["bg", "cs", "popup"], expectedNumberOfNonCommentArgs);
            }
            /**
             * @param {Object} obj
             * @param {string} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function promise(obj, expectedNumberOfNonCommentArgs) {
                /**
                 * @return {?}
                 */
                function resolve() {
                    try {
                        return obj.safari.extension.globalPage.contentWindow !== obj;
                    } catch (_) {
                        return false;
                    }
                }
                /** @type {boolean} */
                var bulk = !!obj.IS_BG;
                var length = "safari" === expectedNumberOfNonCommentArgs ? resolve() : !!obj.IS_POPUP;
                return bulk ? "bg" : length ? "popup" : "cs";
            }
            /** @type {function (Object): ?} */
            exports.create = create;
            /** @type {function (Object, string): ?} */
            exports.detect = promise;
        }(TargetContext = expectedNumberOfNonCommentArgs.TargetContext || (expectedNumberOfNonCommentArgs.TargetContext = {}));
        var BundleInfo;
        !function(settings) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @param {?} opt_attributes
             * @return {?}
             */
            function row(expectedNumberOfNonCommentArgs, key, opt_attributes) {
                return{
                    browser : expectedNumberOfNonCommentArgs,
                    env : key,
                    context : opt_attributes
                };
            }
            /** @type {function (Object, string, ?): ?} */
            settings.create = row;
        }(BundleInfo = expectedNumberOfNonCommentArgs.BundleInfo || (expectedNumberOfNonCommentArgs.BundleInfo = {}));
    }, {
        stdlib : 201
    }],
    151 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {Object} iterable
         * @return {undefined}
         */
        function enumerate(iterable) {
            var key;
            for (key in iterable) {
                if (!expectedNumberOfNonCommentArgs.hasOwnProperty(key)) {
                    expectedNumberOfNonCommentArgs[key] = iterable[key];
                }
            }
        }
        /**
         * @return {?}
         */
        function match() {
            return proto.get();
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {string} camelKey
         * @param {(Object|boolean|number|string)} models
         * @return {undefined}
         */
        function reset(expectedNumberOfNonCommentArgs, camelKey, models) {
            proto.init(config.MainConfig.create(expectedNumberOfNonCommentArgs, camelKey, models || config.ProcessEnv.fromBrowserify()));
            window.GR_CFG = proto.get();
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        enumerate(require("./app"));
        enumerate(require("./build"));
        enumerate(require("./bundle"));
        enumerate(require("./services"));
        enumerate(require("./system"));
        enumerate(require("./url"));
        enumerate(require("./mainConfig"));
        var config = require("./mainConfig");
        var drop = require("./bundle");
        var header = require("stdlib");
        var proto = new header.Global(function() {
            console.warn("Global config not initialized -- using fall back value.");
            var expectedNumberOfNonCommentArgs = header.assertNonNull(drop.TargetBrowser.detect(window), "runtime-detected browser type");
            var _$ = config.MainConfig.create(expectedNumberOfNonCommentArgs, drop.TargetContext.detect(window, expectedNumberOfNonCommentArgs), config.ProcessEnv.fromBrowserify());
            return window.GR_CFG = _$, _$;
        });
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getGlobal = match;
        /** @type {function (Object, string, (Object|boolean|number|string)): undefined} */
        expectedNumberOfNonCommentArgs.initGlobal = reset;
    }, {
        "./app" : 148,
        "./build" : 149,
        "./bundle" : 150,
        "./mainConfig" : 152,
        "./services" : 153,
        "./system" : 154,
        "./url" : 155,
        stdlib : 201
    }],
    152 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        (function(p) {
            /**
             * @param {?} name
             * @return {?}
             */
            function ondata(name) {
                return name && name.__esModule ? name : {
                    "default" : name
                };
            }
            var name = $("babel-runtime/helpers/slicedToArray");
            var quoteNeeded = ondata(name);
            Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
                value : true
            });
            var ProcessEnv;
            var $window = $("./app");
            var book = $("./build");
            var game = $("./system");
            var article = $("./bundle");
            var collection = $("stdlib");
            !function(self) {
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @param {string} key
                 * @param {?} opt_attributes
                 * @param {string} val
                 * @param {?} value
                 * @param {string} index
                 * @param {string} align
                 * @return {?}
                 */
                function row(expectedNumberOfNonCommentArgs, key, opt_attributes, val, value, index, align) {
                    return{
                        env : expectedNumberOfNonCommentArgs,
                        major_number : key,
                        build_number : opt_attributes,
                        release_number : val,
                        git_branch : value,
                        git_commit : index,
                        popup_url : align
                    };
                }
                /**
                 * @return {?}
                 */
                function onComplete() {
                    return row("prod", "14", "794", "1083", p.env.GIT_BRANCH, "9a2e211e63c063be2ea48c13d2448ef885669f14", "https://s3.amazonaws.com/grammarly_neweditor/index/1.0.87-browserplugin_2.0/popup.html");
                }
                /** @type {function (Object, string, ?, string, ?, string, string): ?} */
                self.create = row;
                /** @type {function (): ?} */
                self.fromBrowserify = onComplete;
            }(ProcessEnv = expectedNumberOfNonCommentArgs.ProcessEnv || (expectedNumberOfNonCommentArgs.ProcessEnv = {}));
            var MainConfig;
            !function(exports) {
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @param {string} value
                 * @param {?} opt_attributes
                 * @return {?}
                 */
                function create(expectedNumberOfNonCommentArgs, value, opt_attributes) {
                    var key = void 0;
                    if (opt_attributes.env) {
                        var pair = article.TargetEnv.create(opt_attributes.env);
                        if (void 0 !== pair) {
                            key = pair;
                        } else {
                            console.warn("*** process.env.ENV is invalid ('" + opt_attributes.env + "'), assuming 'prod' env");
                            /** @type {string} */
                            key = "prod";
                        }
                    } else {
                        console.warn("*** process.env.ENV is not defined, assuming 'prod' env");
                        /** @type {string} */
                        key = "prod";
                    }
                    var camelKey = collection.assertNonNull(key, "ENV env var OR a fallback value");
                    /** @type {Array.<?>} */
                    var tasks = [opt_attributes.major_number, opt_attributes.build_number, opt_attributes.release_number].map(collection.optionalIntString);
                    var fromIndex = void 0;
                    if (3 === tasks.length && tasks.every(function(dataAndEvents) {
                            return void 0 !== dataAndEvents;
                        })) {
                        /** @type {Array.<?>} */
                        fromIndex = tasks;
                    } else {
                        var array = (book.BuildInfo.getManifestVersion(expectedNumberOfNonCommentArgs, value, window) || "").split(".").map(collection.optionalIntString);
                        fromIndex = 3 === array.length && array.every(function(dataAndEvents) {
                            return void 0 !== dataAndEvents;
                        }) ? array : [4, 0, 2];
                    }
                    var i = fromIndex;
                    var args = (0, quoteNeeded["default"])(i, 3);
                    var next = args[0];
                    var actualKey = args[1];
                    var attributes = args[2];
                    return{
                        buildInfo : book.BuildInfo.create(next, actualKey, attributes, expectedNumberOfNonCommentArgs, camelKey, opt_attributes.git_branch, opt_attributes.git_commit),
                        bundleInfo : article.BundleInfo.create(expectedNumberOfNonCommentArgs, camelKey, value),
                        appConfig : $window.AppConfig.create(expectedNumberOfNonCommentArgs, camelKey, opt_attributes.popup_url),
                        systemInfo : game.SystemInfo.create(expectedNumberOfNonCommentArgs, window)
                    };
                }
                /** @type {function (Object, string, ?): ?} */
                exports.create = create;
            }(MainConfig = expectedNumberOfNonCommentArgs.MainConfig || (expectedNumberOfNonCommentArgs.MainConfig = {}));
        }).call(this, $("_process"));
    }, {
        "./app" : 148,
        "./build" : 149,
        "./bundle" : 150,
        "./system" : 154,
        _process : 140,
        "babel-runtime/helpers/slicedToArray" : 32,
        stdlib : 201
    }],
    153 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var GnarConfig;
        var assert = require("stdlib");
        !function(settings) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @return {?}
             */
            function row(expectedNumberOfNonCommentArgs, key) {
                return{
                    appName : assert.assertNonNull(browser[expectedNumberOfNonCommentArgs], "gnar app name"),
                    url : "https://gnar." + key,
                    domain : "." + key
                };
            }
            var browser = {
                chrome : "chromeExt",
                firefox : "firefoxExt",
                safari : "safariExt",
                edge : "edgeExt"
            };
            /** @type {function (Object, string): ?} */
            settings.create = row;
        }(GnarConfig = expectedNumberOfNonCommentArgs.GnarConfig || (expectedNumberOfNonCommentArgs.GnarConfig = {}));
        var FelogConfig;
        !function(el) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function node(expectedNumberOfNonCommentArgs) {
                return{
                    appName : assert.assertNonNull(browser[expectedNumberOfNonCommentArgs], "felog app name")
                };
            }
            var browser = {
                chrome : "extensionChrome",
                firefox : "extensionFirefox",
                safari : "extensionSafari",
                edge : "extensionEdge"
            };
            /** @type {function (Object): ?} */
            el.create = node;
        }(FelogConfig = expectedNumberOfNonCommentArgs.FelogConfig || (expectedNumberOfNonCommentArgs.FelogConfig = {}));
    }, {
        stdlib : 201
    }],
    154 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var Hash;
        var drop = require("./bundle");
        var Block = require("stdlib");
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @return {?}
             */
            function detect(expectedNumberOfNonCommentArgs, key) {
                var paramType = drop.TargetBrowser.detect(key) || "other";
                return{
                    type : paramType,
                    isWE : "firefox" === expectedNumberOfNonCommentArgs ? Block.try_(function() {
                        return!!firefox.runtime;
                    }, function(dataAndEvents) {
                        return false;
                    }) : "chrome" === expectedNumberOfNonCommentArgs || "edge" === expectedNumberOfNonCommentArgs
                };
            }
            /** @type {function (Object, string): ?} */
            exports.create = detect;
        }(Hash = expectedNumberOfNonCommentArgs.BrowserInfo || (expectedNumberOfNonCommentArgs.BrowserInfo = {}));
        var keys;
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function create(expectedNumberOfNonCommentArgs) {
                return{
                    isWindows : expectedNumberOfNonCommentArgs.navigator.appVersion.indexOf("Win") !== -1
                };
            }
            /** @type {function (Object): ?} */
            exports.create = create;
        }(keys = expectedNumberOfNonCommentArgs.OsInfo || (expectedNumberOfNonCommentArgs.OsInfo = {}));
        var SystemInfo;
        !function(settings) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {Object} key
             * @return {?}
             */
            function row(expectedNumberOfNonCommentArgs, key) {
                return{
                    browser : Hash.create(expectedNumberOfNonCommentArgs, key),
                    os : keys.create(key)
                };
            }
            /** @type {function (Object, Object): ?} */
            settings.create = row;
        }(SystemInfo = expectedNumberOfNonCommentArgs.SystemInfo || (expectedNumberOfNonCommentArgs.SystemInfo = {}));
    }, {
        "./bundle" : 150,
        stdlib : 201
    }],
    155 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var UrlConfig;
        !function(exports) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @param {?} opt_attributes
             * @return {?}
             */
            function init(expectedNumberOfNonCommentArgs, key, opt_attributes) {
                /** @type {string} */
                var authPath = "https://www." + expectedNumberOfNonCommentArgs;
                /** @type {string} */
                var dapiMimic = "https://data." + expectedNumberOfNonCommentArgs;
                /** @type {string} */
                var rootPath = "https://app." + expectedNumberOfNonCommentArgs;
                /** @type {string} */
                var appPathRoute = "https://auth." + expectedNumberOfNonCommentArgs + "/v3";
                /** @type {string} */
                var saveEmailFeedback = "https://emailfeedback." + expectedNumberOfNonCommentArgs;
                return{
                    app : rootPath,
                    appPersonalDictionary : rootPath + "/profile/dictionary",
                    capi : "wss://capi." + expectedNumberOfNonCommentArgs + "/freews",
                    dapiMimic : dapiMimic + "/api/mimic",
                    dapiProps : dapiMimic + "/api/props",
                    editorDictionary : rootPath + "/profile/dictionary",
                    dictionary : "https://capi." + expectedNumberOfNonCommentArgs + "/api/defs",
                    docs : rootPath + "/docs",
                    docsApi : "https://dox." + expectedNumberOfNonCommentArgs + "/documents",
                    authCreatePage : appPathRoute + "/redirect-anonymous?location=" + authPath + "/after_install_page",
                    userOrAnonymous : appPathRoute + "/user/oranonymous",
                    authSignin : appPathRoute + "/login",
                    authSignup : appPathRoute + "/signup",
                    signin : authPath + "/signin",
                    signup : authPath + "/signup",
                    resetPassword : authPath + "/resetpassword",
                    saveEmailFeedback : saveEmailFeedback + "/api/feedback/",
                    newFelog : key,
                    referral : authPath + "/referral?page=extension",
                    welcomeC : authPath + "/extension-success",
                    upgrade : authPath + "/upgrade",
                    uninstall : authPath + "/extension-uninstall",
                    terms : authPath + "/terms",
                    policy : authPath + "/privacy-policy",
                    pageConfigUrl : "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json",
                    popupUrl : opt_attributes,
                    grammarlyDomain : expectedNumberOfNonCommentArgs
                };
            }
            /** @type {function (Object, string, ?): ?} */
            exports.create = init;
        }(UrlConfig = expectedNumberOfNonCommentArgs.UrlConfig || (expectedNumberOfNonCommentArgs.UrlConfig = {}));
    }, {}],
    156 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {Function} reject
         * @param {?} callback
         * @return {undefined}
         */
        function map(reject, callback) {
            if (chrome.runtime.lastError) {
                callback(chrome.runtime.lastError);
            } else {
                reject();
            }
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /** @type {function (Function, ?): undefined} */
        expectedNumberOfNonCommentArgs.handleChromeError = map;
    }, {}],
    157 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function parseInt(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @return {?}
         */
        function array() {
            return new SrcArray;
        }
        var b = $("babel-runtime/core-js/promise");
        var bp = parseInt(b);
        var entry = $("babel-runtime/core-js/object/assign");
        var ret = parseInt(entry);
        var text = $("babel-runtime/helpers/classCallCheck");
        var code = parseInt(text);
        var val = $("babel-runtime/helpers/createClass");
        var type = parseInt(val);
        var actual = $("babel-runtime/helpers/defineProperty");
        var m = (parseInt(actual), $("babel-runtime/core-js/object/get-own-property-symbols"));
        var row = parseInt(m);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} a
         * @return {?}
         */
        var extend = function(expectedNumberOfNonCommentArgs, a) {
            var obj = {};
            var m;
            for (m in expectedNumberOfNonCommentArgs) {
                if (Object.prototype.hasOwnProperty.call(expectedNumberOfNonCommentArgs, m)) {
                    if (a.indexOf(m) < 0) {
                        obj[m] = expectedNumberOfNonCommentArgs[m];
                    }
                }
            }
            if (null !== expectedNumberOfNonCommentArgs && "function" === typeof row["default"]) {
                /** @type {number} */
                var i = 0;
                m = (0, row["default"])(expectedNumberOfNonCommentArgs);
                for (;i < m.length;i++) {
                    if (a.indexOf(m[i]) < 0) {
                        obj[m[i]] = expectedNumberOfNonCommentArgs[m[i]];
                    }
                }
            }
            return obj;
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var emptyJ = $("./message/bg");
        var $spy = $("./message/content");
        var $src = $("./tabs/chrome");
        var source = $("./chrome-util");
        var curElem = $("./web-extensions");
        var handler = $("lib/util");
        var $window = $("stdlib");
        var create = function() {
            /**
             * @param {string} errorName
             * @return {undefined}
             */
            function bindToTabHandler(errorName) {
                (0, code["default"])(this, bindToTabHandler);
                this.port = chrome.runtime.connect({
                    name : errorName
                });
            }
            return(0, type["default"])(bindToTabHandler, [{
                key : "onMessage",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this.port.onMessage.addListener(name);
                }
            }, {
                key : "onDisconnect",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this.port.onDisconnect.addListener(name);
                }
            }, {
                key : "postMessage",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this.port.postMessage(name);
                }
            }]), bindToTabHandler;
        }();
        var Splice = function() {
            /**
             * @param {Object} event
             * @return {undefined}
             */
            function next(event) {
                (0, code["default"])(this, next);
                /** @type {Object} */
                this._port = event;
                this.sender = {};
                var data = event.sender;
                var name = event.name;
                this.name = name;
                if (data) {
                    this.sender.url = data.url;
                    if (data.tab) {
                        if (data.tab.url) {
                            if (data.tab.id) {
                                this.sender.tab = {
                                    url : data.tab.url,
                                    id : data.tab.id,
                                    active : data.tab.active
                                };
                            }
                        }
                    }
                }
            }
            return(0, type["default"])(next, [{
                key : "onMessage",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._port.onMessage.addListener(name);
                }
            }, {
                key : "onDisconnect",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._port.onDisconnect.addListener(name);
                }
            }, {
                key : "postMessage",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._port.postMessage(name);
                }
            }]), next;
        }();
        /**
         * @return {undefined}
         */
        var SrcArray = function create() {
            (0, code["default"])(this, create);
            this.tabs = new $src.ChromeTabsApiImpl;
            this.notification = {
                kind : "web-extension",
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                create : function(expectedNumberOfNonCommentArgs) {
                    return $window.SafePromise.create(function(proceed, n) {
                        var rvar = expectedNumberOfNonCommentArgs.onClicked;
                        var optgroup = expectedNumberOfNonCommentArgs.onButtonClicked;
                        var oldconfig = extend(expectedNumberOfNonCommentArgs, ["onClicked", "onButtonClicked"]);
                        var data = chrome.notifications;
                        var element = handler.guid();
                        data.create(element, (0, ret["default"])({
                            type : "basic"
                        }, oldconfig), function() {
                            source.handleChromeError(function() {
                                if (void 0 !== rvar) {
                                    data.onClicked.addListener(rvar);
                                }
                                if (void 0 !== optgroup) {
                                    data.onButtonClicked.addListener(optgroup);
                                }
                                proceed(element);
                            }, n);
                        });
                    });
                },
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                clear : function(expectedNumberOfNonCommentArgs) {
                    return $window.SafePromise.create(function(cb, n) {
                        chrome.notifications.clear(expectedNumberOfNonCommentArgs, function(outErr) {
                            source.handleChromeError(function() {
                                return cb(outErr);
                            }, n);
                        });
                    });
                }
            };
            this.cookies = {
                kind : "web-extension",
                /**
                 * @param {string} key
                 * @return {?}
                 */
                get : function(key) {
                    return $window.SafePromise.create(function(cb, n) {
                        return chrome.cookies.get(key, function(outErr) {
                            return source.handleChromeError(function() {
                                return cb(outErr);
                            }, n);
                        });
                    });
                },
                /**
                 * @param {?} key
                 * @return {?}
                 */
                remove : function(key) {
                    return new bp["default"](function($sanitize, n) {
                        return chrome.cookies.remove(key, function() {
                            return source.handleChromeError(function() {
                                return $sanitize(null);
                            }, n);
                        });
                    });
                },
                /**
                 * @param {?} context
                 * @return {?}
                 */
                getAll : function(context) {
                    return $window.SafePromise.create(function(cb, n) {
                        return chrome.cookies.getAll(context, function(outErr) {
                            return source.handleChromeError(function() {
                                return cb(outErr);
                            }, n);
                        });
                    });
                },
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                set : function(expectedNumberOfNonCommentArgs) {
                    return $window.SafePromise.create(function(cb, n) {
                        return chrome.cookies.set(expectedNumberOfNonCommentArgs, function(outErr) {
                            return source.handleChromeError(function() {
                                return cb(outErr);
                            }, n);
                        });
                    });
                },
                /**
                 * @param {Object} target
                 * @param {?} next
                 * @return {undefined}
                 */
                watch : function(target, next) {
                    chrome.cookies.onChanged.addListener(function(options) {
                        var self = options.cookie;
                        var async = options.cause;
                        if (!!self) {
                            if (!!self.name) {
                                if (!(target.path && target.path !== self.path)) {
                                    if (!(target.name !== self.name)) {
                                        if (!(target.domain && self.domain.indexOf(target.domain) === -1)) {
                                            if ("explicit" === async) {
                                                next(self);
                                            }
                                            if ("expired_overwrite" === async) {
                                                next();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            };
            this.preferences = curElem.preferencesApi.windowLocalStorage;
            this.button = {
                kind : "web-extension",
                /**
                 * @param {?} text
                 * @return {undefined}
                 */
                setBadge : function(text) {
                    chrome.browserAction.setBadgeText({
                        text : text
                    });
                },
                /**
                 * @param {boolean} suffix
                 * @return {undefined}
                 */
                setIconByName : function(suffix) {
                    /** @type {string} */
                    var start = "./src/icon/icon";
                    /** @type {string} */
                    var end = suffix ? "-" + suffix : "";
                    chrome.browserAction.setIcon({
                        path : {
                            16 : start + "16" + end + ".png",
                            32 : start + "32" + end + ".png"
                        }
                    });
                },
                /**
                 * @param {string} opt_attributes
                 * @return {undefined}
                 */
                setBadgeBackgroundColor : function(opt_attributes) {
                    chrome.browserAction.setBadgeBackgroundColor({
                        color : opt_attributes
                    });
                }
            };
            this.management = {
                /**
                 * @return {undefined}
                 */
                uninstallSelf : function() {
                    chrome.management.uninstallSelf();
                }
            };
            this.message = handler.isBg() ? new emptyJ.GenericBackgroundMessageApiImpl(function($sanitize) {
                return chrome.runtime.onConnect.addListener(function(val) {
                    return $sanitize(new Splice(val));
                });
            }, this.tabs.getActiveTab.bind(this.tabs), this.tabs.getAllTabs.bind(this.tabs)) : new $spy.GenericContentScriptMessageApiImpl(function(dataAndEvents) {
                return new create(dataAndEvents);
            });
        };
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.createApi = array;
    }, {
        "./chrome-util" : 156,
        "./message/bg" : 161,
        "./message/content" : 162,
        "./tabs/chrome" : 165,
        "./web-extensions" : 166,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/get-own-property-symbols" : 20,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/defineProperty" : 29,
        "lib/util" : 198,
        stdlib : 201
    }],
    158 : [function(dataAndEvents, deepDataAndEvents, ctx) {
        Object.defineProperty(ctx, "__esModule", {
            value : true
        });
        window.firefox = window.browser;
        try {
            window.firefox = browser;
        } catch (e) {
        }
        window.edge = window.browser;
        window.chrome = window.chrome;
        ctx["default"] = void 0;
    }, {}],
    159 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {Object} helper
         * @return {undefined}
         */
        function getChildren(helper) {
            var key;
            for (key in helper) {
                if (!expectedNumberOfNonCommentArgs.hasOwnProperty(key)) {
                    expectedNumberOfNonCommentArgs[key] = helper[key];
                }
            }
        }
        /**
         * @param {?} _
         * @return {undefined}
         */
        function callback(_) {
            if (window.extensionApi) {
                console.warn("Extension Api init called more than once");
            }
            window.extensionApi = window.extensionApi || _;
        }
        /**
         * @return {?}
         */
        function getGlobalExtensionApi() {
            return assert.assertNonNull(window.extensionApi, "extension api was not initialized");
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var assert = require("stdlib");
        getChildren(require("./interface"));
        /** @type {function (?): undefined} */
        expectedNumberOfNonCommentArgs.initGlobalExtensionApi = callback;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getGlobalExtensionApi = getGlobalExtensionApi;
    }, {
        "./interface" : 160,
        stdlib : 201
    }],
    160 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.ports = {
            bridge : "bridge",
            background : "message:to-priv",
            broadcast : "message:to-non-priv"
        };
    }, {}],
    161 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @return {undefined}
         */
        function initialize() {
            /** @type {number} */
            var otherKey = 4;
            var program = (handler.isChrome() || handler.isFF()) && (!chrome.extension || (!chrome.tabs || (!chrome.runtime || !chrome.runtime.onConnect)));
            var inverse = handler.isEdge() && (!edge.extension || (!edge.tabs || (!edge.runtime || !edge.runtime.onConnect)));
            if (program || inverse) {
                /** @type {string} */
                var cDigit = window.localStorage.getItem("bgInitFail") || "0";
                /** @type {number} */
                var key = parseInt(cDigit, 10);
                if (key > otherKey) {
                    console.error("too many bgInitFail", key);
                } else {
                    window.localStorage.setItem("bgInitFail", (key + 1).toString());
                    document.location.reload();
                }
            }
        }
        /**
         * @param {?} attr
         * @return {?}
         */
        function init(attr) {
            if (!attr) {
                return false;
            }
            var rvar = sandbox.getGlobal().bundleInfo.browser;
            var pointsRe = "firefox" === rvar ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "edge" === rvar ? /^ms-browser-extension:\/\/.*\/src\/popup.html$/ : "chrome" === rvar ? chrome && (chrome.runtime && chrome.runtime.id) ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : body.assertNever(rvar);
            return void 0 !== pointsRe && pointsRe.test(attr);
        }
        var type = $("babel-runtime/helpers/classCallCheck");
        var event = Event(type);
        var error = $("babel-runtime/helpers/createClass");
        var handlers = Event(error);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var emptyJ = $("./helpers");
        var handler = $("lib/util");
        var sandbox = $("config");
        var body = $("stdlib");
        var me = $("../interface");
        /** @type {string} */
        expectedNumberOfNonCommentArgs.SETTINGS_TAB_ID = "popup";
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.bgPreload = initialize;
        var GenericBackgroundMessageApiImpl = function() {
            /**
             * @param {?} callback
             * @param {?} fn
             * @param {?} fnc
             * @return {undefined}
             */
            function off(callback, fn, fnc) {
                var $ = this;
                (0, event["default"])(this, off);
                this._getActiveTab = fn;
                this._getAllTabs = fnc;
                /** @type {string} */
                this.kind = "background-message-api";
                this._callbacks = {};
                this._tabPorts = {
                    popup : []
                };
                this._messageHelper = new emptyJ.MessageHelperImpl;
                /**
                 * @param {?} k
                 * @param {?} opt_attributes
                 * @return {undefined}
                 */
                this._sendMessageToPorts = function(k, opt_attributes) {
                    var cs = $._tabPorts[k];
                    if (cs) {
                        cs.forEach(function(ternWorker) {
                            return ternWorker.postMessage(opt_attributes);
                        });
                    }
                };
                /**
                 * @param {string} type
                 * @param {string} keepData
                 * @return {?}
                 */
                this.toFocused = function(type, keepData) {
                    return $._getActiveTab().then(function(d) {
                        var id = d.id;
                        var link = d.url;
                        if (id) {
                            return init(link) ? console.warn("toFocussed not allowed for popup when it open like regular tab", type, keepData) : void $._sendMessageToPorts(id.toString(), {
                                type : type,
                                content : keepData,
                                callid : handler.guid()
                            });
                        }
                    });
                };
                /**
                 * @param {string} type
                 * @param {?} message
                 * @return {undefined}
                 */
                this.broadcast = function(type, message) {
                    if (message) {
                        /**
                         * @param {Object} request
                         * @return {undefined}
                         */
                        var callback = function(request) {
                            var id = request.id;
                            var requestUrl = request.url;
                            if (id) {
                                if (requestUrl) {
                                    if (requestUrl.indexOf("chrome-extension:") === -1) {
                                        $._sendMessageToPorts(id.toString(), {
                                            type : type,
                                            callid : handler.guid(),
                                            content : message
                                        });
                                    }
                                }
                            }
                        };
                        $._getAllTabs().then(function(array) {
                            return array.forEach(callback);
                        });
                        if ($._tabPorts.popup) {
                            if ($._tabPorts.popup.length) {
                                $._getActiveTab().then(function(tab) {
                                    var url = tab.url;
                                    var active = tab.active;
                                    callback({
                                        id : expectedNumberOfNonCommentArgs.SETTINGS_TAB_ID,
                                        url : url,
                                        active : active
                                    });
                                });
                            }
                        }
                    }
                };
                /**
                 * @param {Object} self
                 * @return {undefined}
                 */
                this._initPortListener = function(self) {
                    if (self.name === me.ports.bridge) {
                        self.onMessage(function(req) {
                            if ("message.toFocussed" === req.method) {
                                $.toFocused(req.params && req.params.type, req.params && req.params.content);
                            }
                        });
                    } else {
                        if (self.name === me.ports.broadcast) {
                            self.onMessage(function(data) {
                                return $.broadcast(data.type, data.content);
                            });
                        } else {
                            if (self.name === me.ports.background) {
                                var options = self.sender;
                                if (options) {
                                    if (options.tab) {
                                        var map = options.tab;
                                        var name = map.id;
                                        var url = map.url;
                                        if (name) {
                                            var old = $._tabPorts[name];
                                            if (void 0 === old) {
                                                /** @type {Array} */
                                                old = $._tabPorts[name] = [];
                                            }
                                            old.push(self);
                                        }
                                        if (url) {
                                            if (0 === url.indexOf("http")) {
                                                $._messageHelper.fire("tab-connected", {
                                                    tab : name,
                                                    url : url
                                                });
                                            }
                                        }
                                        self.onDisconnect(function() {
                                            if (name) {
                                                var rule = $._tabPorts[name];
                                                if (rule) {
                                                    rule.splice(rule.indexOf(self), 1);
                                                }
                                            }
                                        });
                                    }
                                    var protoProps = options.url ? options.url : options.tab ? options.tab.url : "";
                                    if (protoProps && init(protoProps)) {
                                        var module = expectedNumberOfNonCommentArgs.SETTINGS_TAB_ID;
                                        $._tabPorts[module] = $._tabPorts[module] || [];
                                        $._tabPorts[module].push(self);
                                        self.onDisconnect(function() {
                                            var target = $._tabPorts[module];
                                            target.splice(target.indexOf(self), 1);
                                        });
                                    }
                                }
                                self.onMessage(function(e) {
                                    /**
                                     * @param {Object} msg
                                     * @return {undefined}
                                     */
                                    var next = function(msg) {
                                        var id = msg.callid;
                                        var e = msg.content;
                                        var fn = msg.type;
                                        if ($._callbacks[id]) {
                                            $._callbacks[id](e);
                                            delete $._callbacks[id];
                                        }
                                        /**
                                         * @param {Object} elem
                                         * @return {?}
                                         */
                                        var restoreScript = function(elem) {
                                            return self.postMessage({
                                                content : elem,
                                                callid : id
                                            });
                                        };
                                        $._messageHelper.fire(fn, e, restoreScript, options && options.tab ? options.tab.id : -1);
                                    };
                                    if ("tab-connected" === e.type) {
                                        $._getActiveTab().then(function(request) {
                                            var requestUrl = request.url;
                                            e.content = {
                                                tab : expectedNumberOfNonCommentArgs.SETTINGS_TAB_ID,
                                                url : requestUrl
                                            };
                                            next(e);
                                        });
                                    } else {
                                        next(e);
                                    }
                                });
                            }
                        }
                    }
                };
                callback(this._initPortListener);
            }
            return(0, handlers["default"])(off, [{
                key : "sendTo",
                /**
                 * @param {string} name
                 * @param {string} event
                 * @param {Object} error
                 * @param {Function} fn
                 * @param {?} callback
                 * @return {?}
                 */
                value : function(name, event, error, fn, callback) {
                    var set = this._tabPorts[name];
                    if (!set || !set.length) {
                        return void(callback && callback({
                            message : "no ports on specified tabId"
                        }));
                    }
                    var msg = {
                        type : event,
                        content : error
                    };
                    if (fn) {
                        if ("function" === typeof fn) {
                            msg.callid = handler.guid();
                            /** @type {Function} */
                            this._callbacks[msg.callid] = fn;
                        }
                    }
                    set.forEach(function(ternWorker) {
                        return ternWorker.postMessage(msg);
                    });
                }
            }, {
                key : "listen",
                /**
                 * @param {string} name
                 * @param {string} events
                 * @return {undefined}
                 */
                value : function(name, events) {
                    this._messageHelper.listen(name, events);
                }
            }]), off;
        }();
        expectedNumberOfNonCommentArgs.GenericBackgroundMessageApiImpl = GenericBackgroundMessageApiImpl;
    }, {
        "../interface" : 160,
        "./helpers" : 163,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        config : 151,
        "lib/util" : 198,
        stdlib : 201
    }],
    162 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @return {undefined}
         */
        function init() {
            window.addEventListener("update-window-size-gr", function(options) {
                /**
                 * @return {undefined}
                 */
                function init() {
                    document.body.appendChild(testElement);
                    setTimeout(function() {
                        if (testElement.parentNode) {
                            testElement.parentNode.removeChild(testElement);
                        }
                    }, 10);
                }
                /** @type {Element} */
                var testElement = document.createElement("div");
                if (testElement.style.height = "1px", options.detail && options.detail.force) {
                    /** @type {number} */
                    var poll = setInterval(init, 100);
                    setTimeout(function() {
                        return clearInterval(poll);
                    }, 405);
                }
            }, false);
            window.addEventListener("close-popup-gr", function() {
                if (window.navigator.userAgent.indexOf("Firefox") !== -1) {
                    window.close();
                }
            }, false);
        }
        var target = $("babel-runtime/helpers/classCallCheck");
        var targets = Event(target);
        var type = $("babel-runtime/helpers/createClass");
        var event = Event(type);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var $window = $("stdlib");
        var emptyJ = $("./helpers");
        var handler = $("lib/util");
        var me = $("../interface");
        var GenericContentScriptMessageApiImpl = function() {
            /**
             * @param {?} callback
             * @return {undefined}
             */
            function onMessage(callback) {
                var self = this;
                (0, targets["default"])(this, onMessage);
                /** @type {string} */
                this.kind = "content-script-message-api";
                this._callbacks = {};
                this._messageHelper = new emptyJ.MessageHelperImpl;
                this._proxyPortsStorage = {};
                /**
                 * @return {?}
                 */
                this.broadcastBackground = function() {
                    /** @type {number} */
                    var expectedNumberOfNonCommentArgs = arguments.length;
                    /** @type {Array} */
                    var args = Array(expectedNumberOfNonCommentArgs);
                    /** @type {number} */
                    var $_i = 0;
                    for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                        args[$_i] = arguments[$_i];
                    }
                    return self._emit(self.backgroundPort, "bg").apply(null, args);
                };
                /**
                 * @return {?}
                 */
                this.broadcast = function() {
                    /** @type {number} */
                    var expectedNumberOfNonCommentArgs = arguments.length;
                    /** @type {Array} */
                    var args = Array(expectedNumberOfNonCommentArgs);
                    /** @type {number} */
                    var $_i = 0;
                    for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                        args[$_i] = arguments[$_i];
                    }
                    return self._emit(self.broadcastPort, "tabs").apply(null, args);
                };
                /**
                 * @param {Function} which
                 * @return {undefined}
                 */
                this._onPortMessage = function(which) {
                    console.log("[Messaging] extension api", "portMessage", which);
                };
                this._checkHealth = function() {
                    /**
                     * @return {undefined}
                     */
                    function ready() {
                        document.removeEventListener("grammarly:pong", completed);
                        if (timeout) {
                            clearTimeout(timeout);
                            /** @type {null} */
                            timeout = null;
                        }
                        if (interval) {
                            clearInterval(interval);
                            /** @type {null} */
                            interval = null;
                        }
                    }
                    /** @type {number} */
                    var time = 500;
                    /** @type {number} */
                    var quietMillis = 5E3;
                    /** @type {null} */
                    var interval = null;
                    /** @type {null} */
                    var timeout = null;
                    /**
                     * @return {?}
                     */
                    var animate = function() {
                        return document.dispatchEvent(new CustomEvent("grammarly:ping"));
                    };
                    /**
                     * @return {undefined}
                     */
                    var completed = function() {
                        ready();
                    };
                    /**
                     * @return {undefined}
                     */
                    var check = function() {
                        [self.port, self.backgroundPort, self.broadcastPort].forEach(function(dataAndEvents) {
                            if (dataAndEvents) {
                                if (dataAndEvents.removeMessageListeners) {
                                    dataAndEvents.removeMessageListeners();
                                }
                            }
                        });
                        /** @type {null} */
                        self.port = self.backgroundPort = self.broadcastPort = null;
                        ready();
                        document.addEventListener("grammarly:proxyports", self._onGrammarlyResetAfterTimeout);
                        document.dispatchEvent(new CustomEvent("grammarly:offline"));
                    };
                    return function() {
                        ready();
                        document.addEventListener("grammarly:pong", completed);
                        /** @type {number} */
                        interval = window.setInterval(animate, time);
                        /** @type {number} */
                        timeout = window.setTimeout(check, quietMillis);
                    };
                }();
                /**
                 * @return {undefined}
                 */
                this._onGrammarlyResetAfterTimeout = function() {
                    document.removeEventListener("grammarly:proxyports", self._onGrammarlyResetAfterTimeout);
                    self.port = self._initProxyPort(me.ports.bridge, self._onPortMessage, self._checkHealth, true);
                    self.backgroundPort = self._initProxyPort(me.ports.background, self._onBgPortMessage, self._checkHealth);
                    self.broadcastPort = self._initProxyPort(me.ports.broadcast, null, self._checkHealth);
                };
                /**
                 * @param {Object} msg
                 * @return {undefined}
                 */
                this._onBgPortMessage = function(msg) {
                    var id = msg.callid;
                    var e = msg.content;
                    var fn = msg.type;
                    if (self._callbacks[id]) {
                        self._callbacks[id](e);
                        delete self._callbacks[id];
                    } else {
                        self._messageHelper.fire(fn, e, function(h) {
                            if (!self.backgroundPort) {
                                throw new Error("fail reply to bg page - connection lost");
                            }
                            self.backgroundPort.postMessage({
                                content : h,
                                callid : id
                            });
                        });
                    }
                };
                /**
                 * @param {?} conf
                 * @param {Object} recurring
                 * @param {?} data
                 * @return {?}
                 */
                this._initProxyPort = function(conf, recurring, data) {
                    var isCheckHealth = arguments.length > 3 && (void 0 !== arguments[3] && arguments[3]);
                    var client = self._proxyPort(conf);
                    return isCheckHealth && self._checkHealth(), recurring && client.onMessage(recurring), data && client.onDisconnect(data), client;
                };
                /**
                 * @param {?} data
                 * @param {string} child
                 * @return {?}
                 */
                this._emit = function(data, child) {
                    return function(paramType, h, o, on) {
                        var i = handler.guid();
                        if (o) {
                            if ("function" === typeof o) {
                                /** @type {Function} */
                                self._callbacks[i] = o;
                            }
                        }
                        try {
                            if (!data) {
                                throw new Error("lost connection to " + child + " port");
                            }
                            data.postMessage({
                                type : paramType,
                                callid : i,
                                content : h
                            });
                        } catch (failuresLink) {
                            if (!on) {
                                throw failuresLink;
                            }
                            on(failuresLink);
                        }
                    };
                };
                /**
                 * @param {?} key
                 * @return {?}
                 */
                this._proxyPort = function(key) {
                    self._proxyPortsStorage[key] = {};
                    /**
                     * @param {string} value
                     * @param {Event} event
                     * @return {undefined}
                     */
                    var callback = function(value, event) {
                        var data = event.detail;
                        if (data.name === key) {
                            var template = self._proxyPortsStorage[key][value];
                            if (template) {
                                template(data.msg);
                            }
                        }
                    };
                    /**
                     * @param {Event} request
                     * @return {?}
                     */
                    var completed = function(request) {
                        return callback("success", request);
                    };
                    /**
                     * @param {Event} key
                     * @return {?}
                     */
                    var handler = function(key) {
                        return callback("error", key);
                    };
                    return document.addEventListener("grammarly:message", completed), document.addEventListener("grammarly:error", handler), {
                        /**
                         * @return {?}
                         */
                        postMessage : function() {
                            var task = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            var options = {
                                data : task,
                                name : key
                            };
                            return document.dispatchEvent(new CustomEvent("grammarly:action", {
                                detail : options
                            }));
                        },
                        /**
                         * @param {Function} recurring
                         * @return {undefined}
                         */
                        onMessage : function(recurring) {
                            /** @type {Function} */
                            self._proxyPortsStorage[key].success = recurring;
                        },
                        /**
                         * @param {Function} e
                         * @return {undefined}
                         */
                        onDisconnect : function(e) {
                            /** @type {Function} */
                            self._proxyPortsStorage[key].error = e;
                        },
                        /**
                         * @return {undefined}
                         */
                        removeMessageListeners : function() {
                            document.removeEventListener("grammarly:message", completed);
                            document.removeEventListener("grammarly:error", handler);
                        }
                    };
                };
                this.port = callback(me.ports.bridge);
                this.port.onMessage(this._onPortMessage);
                this.port.onDisconnect(function() {
                    /** @type {null} */
                    self.port = null;
                    self.port = self._initProxyPort(me.ports.bridge, self._onPortMessage, self._checkHealth, true);
                });
                this.backgroundPort = callback(me.ports.background);
                this.backgroundPort.onMessage(this._onBgPortMessage);
                this.backgroundPort.onDisconnect(function() {
                    /** @type {null} */
                    self.backgroundPort = null;
                    self.backgroundPort = self._initProxyPort(me.ports.background, self._onBgPortMessage, self._checkHealth);
                });
                this.broadcastPort = callback(me.ports.broadcast);
                this.broadcastPort.onDisconnect(function() {
                    /** @type {null} */
                    self.broadcastPort = null;
                    self.broadcastPort = self._initProxyPort(me.ports.broadcast, null, self._checkHealth);
                });
            }
            return(0, event["default"])(onMessage, [{
                key : "listen",
                /**
                 * @param {string} name
                 * @param {string} events
                 * @return {undefined}
                 */
                value : function(name, events) {
                    this._messageHelper.listen(name, events);
                }
            }, {
                key : "toFocused",
                /**
                 * @param {string} name
                 * @param {Object} event
                 * @return {?}
                 */
                value : function(name, event) {
                    var map = this;
                    return $window.SafePromise.create(function(it) {
                        if (!map.port) {
                            throw new Error("lost connection to bg page");
                        }
                        map.port.postMessage({
                            method : "message.toFocussed",
                            params : {
                                type : name,
                                content : event
                            }
                        });
                        it();
                    });
                }
            }]), onMessage;
        }();
        expectedNumberOfNonCommentArgs.GenericContentScriptMessageApiImpl = GenericContentScriptMessageApiImpl;
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.hacksForCompatibility = init;
    }, {
        "../interface" : 160,
        "./helpers" : 163,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "lib/util" : 198,
        stdlib : 201
    }],
    163 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @return {?}
         */
        function dispatchContext() {
            return safari.application.activeBrowserWindow && safari.application.activeBrowserWindow.activeTab;
        }
        /**
         * @return {?}
         */
        function connect() {
            var object = dispatchContext();
            return object && object.url || "http://newtab";
        }
        /**
         * @return {?}
         */
        function module() {
            /**
             * @param {string} name
             * @param {Function} object
             * @param {Object} item
             * @return {undefined}
             */
            function emit(name, object, item) {
                var ref = testSource[name];
                if (ref) {
                    ref.forEach(function(callback) {
                        return callback(object, item);
                    });
                } else {
                    if (!groups[name]) {
                        /** @type {Array} */
                        groups[name] = [];
                    }
                    groups[name].push({
                        /** @type {Function} */
                        data : object,
                        callback : item
                    });
                }
            }
            /**
             * @param {string} name
             * @param {Function} callback
             * @return {undefined}
             */
            function add(name, callback) {
                if (!testSource[name]) {
                    /** @type {Array} */
                    testSource[name] = [];
                }
                testSource[name].push(callback);
                if (groups[name]) {
                    groups[name].forEach(function(data) {
                        return callback(data.data, data.callback);
                    });
                }
            }
            var testSource = {};
            var groups = {};
            return{
                /** @type {function (string, Function, Object): undefined} */
                emit : emit,
                /** @type {function (string, Function): undefined} */
                on : add
            };
        }
        var selector = require("babel-runtime/core-js/get-iterator");
        var elem = Event(selector);
        var type = require("babel-runtime/helpers/classCallCheck");
        var event = Event(type);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var i = require("lib/config");
        /**
         * @return {undefined}
         */
        var opt_fromIndex = function() {
        };
        /**
         * @return {undefined}
         */
        var MessageHelperImpl = function Dispatcher() {
            var self = this;
            (0, event["default"])(this, Dispatcher);
            this._listeners = {};
            this._queue = {};
            /**
             * @param {string} event
             * @param {?} obj
             * @return {undefined}
             */
            this.fire = function(event, obj) {
                var fromIndex = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : opt_fromIndex;
                var target = arguments[3];
                var assertions = self._listeners[event] || [];
                if (assertions.length) {
                    assertions.forEach(function(forOwn) {
                        return forOwn(obj, fromIndex, target);
                    });
                } else {
                    self._queue[event] = self._queue[event] || [];
                    self._queue[event].push({
                        content : obj,
                        callback : fromIndex,
                        sender : target
                    });
                }
            };
            /**
             * @param {string} type
             * @param {Function} src
             * @return {undefined}
             */
            this.unlisten = function(type, src) {
                var sources = self._listeners[type] || [];
                var s = sources.indexOf(src);
                if (s !== -1) {
                    if (1 === sources.length) {
                        delete self._listeners[type];
                    } else {
                        sources.splice(s, 1);
                    }
                }
            };
            /**
             * @param {string} type
             * @param {?} listener
             * @return {undefined}
             */
            this.listenOnce = function(type, listener) {
                /**
                 * @param {?} event
                 * @param {?} callback
                 * @param {?} handler
                 * @return {undefined}
                 */
                var types = function on(event, callback, handler) {
                    self.unlisten(type, on);
                    if (listener) {
                        listener(event, callback, handler);
                    }
                };
                self.listen(type, types);
            };
            /**
             * @param {string} type
             * @param {string} keepData
             * @return {undefined}
             */
            this.listen = function(type, keepData) {
                self._listeners[type] = self._listeners[type] || [];
                if (self._listeners[type].indexOf(keepData) === -1) {
                    self._listeners[type].push(keepData);
                }
                var destElements = self._queue[type] || [];
                if (destElements.length) {
                    /** @type {boolean} */
                    var callback2 = true;
                    /** @type {boolean} */
                    var _didIteratorError = false;
                    var bulk = void 0;
                    try {
                        var res;
                        var exports = (0, elem["default"])(destElements);
                        for (;!(callback2 = (res = exports.next()).done);callback2 = true) {
                            var data = res.value;
                            try {
                                keepData(data.content, data.callback, data.sender);
                            } catch (key) {
                                console.error("exception during proccesing buffered messages", key);
                            }
                        }
                    } catch (fn) {
                        /** @type {boolean} */
                        _didIteratorError = true;
                        bulk = fn;
                    } finally {
                        try {
                            if (!callback2) {
                                if (exports["return"]) {
                                    exports["return"]();
                                }
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw bulk;
                            }
                        }
                    }
                    delete self._queue[type];
                }
            };
        };
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.MessageHelperImpl = MessageHelperImpl;
        expectedNumberOfNonCommentArgs.safariBridgeId = "forge-bridge" + i.getUuid();
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getSafariActiveTab = dispatchContext;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getSafariActiveTabUrl = connect;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.emitter = module;
    }, {
        "babel-runtime/core-js/get-iterator" : 14,
        "babel-runtime/helpers/classCallCheck" : 27,
        "lib/config" : 167
    }],
    164 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function $(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {Object} client
         * @param {Function} selector
         * @return {?}
         */
        function initialize(client, selector) {
            return{
                get : client.get.bind(client),
                set : client.set.bind(client),
                getAll : client.getAll.bind(client),
                remove : client.remove.bind(client),
                /**
                 * @return {?}
                 */
                removeAll : function() {
                    return init(this, void 0, void 0, elem["default"].mark(function end() {
                        var result;
                        return elem["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return self.next = 2, client.getAll();
                                    case 2:
                                        return result = self.sent, self.next = 5, client.removeAll();
                                    case 5:
                                        return self.next = 7, c["default"].all((0, type["default"])(result).filter(selector).map(function(expectedNumberOfNonCommentArgs) {
                                            return client.set(expectedNumberOfNonCommentArgs, result[expectedNumberOfNonCommentArgs]);
                                        }));
                                    case 7:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            };
        }
        var one = require("babel-runtime/helpers/classCallCheck");
        var column = $(one);
        var dom = require("babel-runtime/helpers/createClass");
        var h = $(dom);
        var selector = require("babel-runtime/regenerator");
        var elem = $(selector);
        var path = require("babel-runtime/core-js/object/keys");
        var type = $(path);
        var json = require("babel-runtime/core-js/promise");
        var c = $(json);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} opt_attributes
         * @param {(Element|string)} nodeLength
         * @param {Text} element
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, opt_attributes, nodeLength, element) {
            return new (nodeLength || (nodeLength = c["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(element.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} type
                 * @return {undefined}
                 */
                function callback(type) {
                    try {
                        done(element["throw"](type));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new nodeLength(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((element = element.apply(expectedNumberOfNonCommentArgs, opt_attributes || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var response;
        var util = require("stdlib");
        var _ = require("lodash");
        !function(e) {
            /** @type {string} */
            e[e.success = 0] = "success";
            /** @type {string} */
            e[e.successWithEmpty = 1] = "successWithEmpty";
            /** @type {string} */
            e[e.alreadyMigrated = 2] = "alreadyMigrated";
        }(response = expectedNumberOfNonCommentArgs.StorageMigrationResult || (expectedNumberOfNonCommentArgs.StorageMigrationResult = {}));
        var special;
        !function(dataAndEvents) {
            /** @type {string} */
            dataAndEvents[dataAndEvents.nonEmptyMigration = 0] = "nonEmptyMigration";
            /** @type {string} */
            dataAndEvents[dataAndEvents.emptyMigration = 1] = "emptyMigration";
        }(special || (special = {}));
        /** @type {function (Object, Function): ?} */
        expectedNumberOfNonCommentArgs.createMigrationAwareApi = initialize;
        var StorageMigration = function() {
            /**
             * @param {string} newValue
             * @param {Array} aValue
             * @param {Object} element
             * @return {undefined}
             */
            function setValue(newValue, aValue, element) {
                var arr = this;
                var _destValuesToKeep = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                (0, column["default"])(this, setValue);
                /** @type {string} */
                this._name = newValue;
                /** @type {Array} */
                this._source = aValue;
                /** @type {Object} */
                this._destination = element;
                this._destValuesToKeep = _destValuesToKeep;
                /** @type {string} */
                this._migrationFlagSuccessfulValue = "ok";
                /** @type {string} */
                this._migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c";
                /** @type {string} */
                this._migrationFlagKey = "__migration-" + this._migrationFlagUniqueKey + ":(" + this._name + ")";
                /** @type {boolean} */
                this._migrationInProgress = false;
                this.migrationAwareDestination = initialize(this._destination, function(completed) {
                    return completed === arr._migrationFlagKey;
                });
            }
            return(0, h["default"])(setValue, [{
                key : "_getMigrated",
                /**
                 * @return {?}
                 */
                value : function() {
                    var arr = this;
                    return this._destination.get(this._migrationFlagKey).then(function(completed) {
                        return completed === arr._migrationFlagSuccessfulValue;
                    });
                }
            }, {
                key : "_setMigrated",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, elem["default"].mark(function startServer() {
                        var code;
                        return elem["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return self.next = 2, this._destination.set(this._migrationFlagKey, this._migrationFlagSuccessfulValue);
                                    case 2:
                                        return self.next = 4, this._destination.get(this._migrationFlagKey);
                                    case 4:
                                        if (code = self.sent, code === this._migrationFlagSuccessfulValue) {
                                            /** @type {number} */
                                            self.next = 7;
                                            break;
                                        }
                                        throw new Error("Could not verify status write, actual value: " + code);;
                                    case 7:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, startServer, this);
                    }));
                }
            }, {
                key : "_runMigration",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, elem["default"].mark(function end() {
                        var target;
                        var selector;
                        var that = this;
                        return elem["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return util.assert(!this._migrationInProgress, "migration already in progress"), this._migrationInProgress = true, self.prev = 2, self.next = 5, this._source.getAll();
                                    case 5:
                                        return target = self.sent, selector = 0 === (0, type["default"])(target).length, self.next = 9, c["default"].all(this._destValuesToKeep.map(function(part) {
                                            return that._destination.get(part).then(function(value) {
                                                if (null !== value) {
                                                    /** @type {string} */
                                                    target[part] = value;
                                                }
                                            });
                                        }));
                                    case 9:
                                        return self.next = 11, this._destination.removeAll();
                                    case 11:
                                        return self.next = 13, c["default"].all((0, type["default"])(target).filter(function(methodName) {
                                            return null !== target[methodName];
                                        }).map(function(expectedNumberOfNonCommentArgs) {
                                            return that._destination.set(expectedNumberOfNonCommentArgs, target[expectedNumberOfNonCommentArgs]);
                                        }));
                                    case 13:
                                        return self.t0 = _, self.t1 = target, self.next = 17, this._destination.getAll();
                                    case 17:
                                        if (self.t2 = self.sent, self.t0.isEqual.call(self.t0, self.t1, self.t2)) {
                                            /** @type {number} */
                                            self.next = 20;
                                            break;
                                        }
                                        throw new Error("Could not verify write");;
                                    case 20:
                                        return this._migrationInProgress = false, self.abrupt("return", selector ? special.emptyMigration : special.nonEmptyMigration);
                                    case 24:
                                        throw self.prev = 24, self.t3 = self["catch"](2), this._migrationInProgress = false, self.t3;;
                                    case 28:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, end, this, [[2, 24]]);
                    }));
                }
            }, {
                key : "ensureMigrationCompleted",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, elem["default"].mark(function end() {
                        var type;
                        var msg;
                        return elem["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return self.next = 2, this._getMigrated();
                                    case 2:
                                        if (!self.sent) {
                                            /** @type {number} */
                                            self.next = 6;
                                            break;
                                        }
                                        return self.abrupt("return", response.alreadyMigrated);
                                    case 6:
                                        return self.next = 8, this._runMigration();
                                    case 8:
                                        return type = self.sent, self.next = 11, this._setMigrated();
                                    case 11:
                                        self.t0 = type;
                                        /** @type {number} */
                                        self.next = self.t0 === special.nonEmptyMigration ? 14 : self.t0 === special.emptyMigration ? 15 : 16;
                                        break;
                                    case 14:
                                        return self.abrupt("return", response.success);
                                    case 15:
                                        return self.abrupt("return", response.successWithEmpty);
                                    case 16:
                                        throw msg = type, new Error("Match not exhaustive: " + type);;
                                    case 18:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            }]), setValue;
        }();
        expectedNumberOfNonCommentArgs.StorageMigration = StorageMigration;
    }, {
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/regenerator" : 35,
        lodash : "lodash",
        stdlib : 201
    }],
    165 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var type = require("babel-runtime/helpers/classCallCheck");
        var event = Event(type);
        var nodes = require("babel-runtime/helpers/createClass");
        var result = Event(nodes);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var store = require("../chrome-util");
        var config = require("stdlib");
        var ChromeTabsApiImpl = function() {
            /**
             * @return {undefined}
             */
            function onTimeout() {
                (0, event["default"])(this, onTimeout);
                /** @type {string} */
                this.kind = "web-extension";
            }
            return(0, result["default"])(onTimeout, [{
                key : "open",
                /**
                 * @param {string} name
                 * @param {string} color
                 * @return {?}
                 */
                value : function(name, color) {
                    return config.SafePromise.create(function(cb, newValue) {
                        chrome.tabs.create({
                            url : name,
                            active : color
                        }, function(outErr) {
                            store.handleChromeError(function() {
                                return cb(outErr);
                            }, newValue);
                        });
                    });
                }
            }, {
                key : "updateCurrent",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    return config.SafePromise.create(function(cb, newValue) {
                        chrome.tabs.update({
                            url : name
                        }, function(outErr) {
                            store.handleChromeError(function() {
                                return cb(outErr);
                            }, newValue);
                        });
                    });
                }
            }, {
                key : "getActiveTab",
                /**
                 * @return {?}
                 */
                value : function() {
                    return config.SafePromise.create(function(fn, newValue) {
                        var model = chrome.tabs;
                        model.query({
                            active : true,
                            lastFocusedWindow : true
                        }, function(context) {
                            store.handleChromeError(function() {
                                if (context && context.length) {
                                    fn(context[0]);
                                } else {
                                    model.query({
                                        active : true
                                    }, function(context) {
                                        store.handleChromeError(function() {
                                            fn(context[0]);
                                        }, newValue);
                                    });
                                }
                            }, newValue);
                        });
                    });
                }
            }, {
                key : "getAllTabs",
                /**
                 * @return {?}
                 */
                value : function() {
                    return config.SafePromise.create(function(cb, newValue) {
                        return chrome.tabs.query({}, function(outErr) {
                            return store.handleChromeError(function() {
                                return cb(outErr);
                            }, newValue);
                        });
                    });
                }
            }, {
                key : "getActiveTabUrl",
                /**
                 * @return {?}
                 */
                value : function() {
                    var myOtherTabView = this;
                    return config.SafePromise.create(function(callback, newValue) {
                        return myOtherTabView.getActiveTab().then(function(req) {
                            return store.handleChromeError(function() {
                                return callback(req && req.url);
                            }, newValue);
                        });
                    });
                }
            }, {
                key : "onActiveTabChange",
                /**
                 * @param {string} name
                 * @param {?} newValue
                 * @return {undefined}
                 */
                value : function(name, newValue) {
                    var myOtherTabView = this;
                    /**
                     * @param {?} opts
                     * @return {undefined}
                     */
                    var parseOptions = function(opts) {
                        store.handleChromeError(function() {
                            if (opts) {
                                name(opts);
                            }
                        }, newValue);
                    };
                    chrome.tabs.onActivated.addListener(function(details) {
                        return chrome.tabs.get(details.tabId, function(options_) {
                            return parseOptions(options_);
                        });
                    });
                    chrome.tabs.onUpdated.addListener(function(part, request) {
                        myOtherTabView.getActiveTab().then(function(elem) {
                            if (elem) {
                                if (elem.id === part) {
                                    if (request.url || (request.favIconUrl || "complete" === request.status)) {
                                        chrome.tabs.get(part, function(options_) {
                                            return parseOptions(options_);
                                        });
                                    }
                                }
                            }
                        });
                    });
                    chrome.windows.onFocusChanged.addListener(function(windowId) {
                        return chrome.tabs.query({
                            active : true,
                            windowId : windowId,
                            lastFocusedWindow : true
                        }, function(dataAndEvents) {
                            return parseOptions(dataAndEvents[0]);
                        });
                    });
                    this.getActiveTab().then(function(options_) {
                        return parseOptions(options_);
                    });
                }
            }, {
                key : "reload",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    return config.SafePromise.create(function(cb, newValue) {
                        /**
                         * @return {?}
                         */
                        var reset = function() {
                            return store.handleChromeError(function() {
                                return cb();
                            }, newValue);
                        };
                        if (name) {
                            chrome.tabs.reload(name, {}, reset);
                        } else {
                            chrome.tabs.reload(reset);
                        }
                    });
                }
            }]), onTimeout;
        }();
        expectedNumberOfNonCommentArgs.ChromeTabsApiImpl = ChromeTabsApiImpl;
    }, {
        "../chrome-util" : 156,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        stdlib : 201
    }],
    166 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} s
         * @return {?}
         */
        function i(s) {
            return s && s.__esModule ? s : {
                "default" : s
            };
        }
        var selector = $("babel-runtime/helpers/defineProperty");
        var elem = i(selector);
        var c = $("babel-runtime/regenerator");
        var h = i(c);
        var obj = $("babel-runtime/core-js/object/keys");
        var keys = i(obj);
        var key = $("babel-runtime/core-js/promise");
        var paths = i(key);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} config
         * @param {Text} self
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, args, config, self) {
            return new (config || (config = paths["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(self.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function callback(e) {
                    try {
                        done(self["throw"](e));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new config(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var t = $("stdlib");
        var Wraith = $("./storage-migration");
        var emptyJ = $("./message/content");
        expectedNumberOfNonCommentArgs.hacksForCompatibility = emptyJ.hacksForCompatibility;
        var $spy = $("./message/bg");
        expectedNumberOfNonCommentArgs.bgPreload = $spy.bgPreload;
        var preferencesApi;
        !function(options) {
            /**
             * @return {?}
             */
            function rmDir() {
                /** @type {boolean} */
                value = true;
                var deferred = t.SafePromise.createCompletionSource();
                return promise = deferred.promise, migrationAwareDestination.ensureMigrationCompleted().then(function(expectedNumberOfNonCommentArgs) {
                    return deferred.resolve(true), paths["default"].resolve(expectedNumberOfNonCommentArgs);
                }, function(silent) {
                    return deferred.resolve(false), paths["default"].reject(silent);
                });
            }
            /**
             * @param {string} name
             * @return {?}
             */
            function method(name) {
                return function() {
                    /** @type {number} */
                    var expectedNumberOfNonCommentArgs = arguments.length;
                    /** @type {Array} */
                    var args = Array(expectedNumberOfNonCommentArgs);
                    /** @type {number} */
                    var $_i = 0;
                    for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                        args[$_i] = arguments[$_i];
                    }
                    return t.assert(value === true, "supposed to run data migration before accessing prefs with web-extensions API"), promise.then(function(one) {
                        var expectedNumberOfNonCommentArgs = one ? migrationAwareDestination.migrationAwareDestination : options.windowLocalStorage;
                        return expectedNumberOfNonCommentArgs[name].apply(expectedNumberOfNonCommentArgs, args);
                    });
                };
            }
            options.windowLocalStorage = {
                /**
                 * @param {string} key
                 * @return {?}
                 */
                get : function(key) {
                    return t.SafePromise.sync(function() {
                        return window.localStorage.getItem(key);
                    });
                },
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @param {string} key
                 * @return {?}
                 */
                set : function(expectedNumberOfNonCommentArgs, key) {
                    return t.SafePromise.sync(function() {
                        return window.localStorage.setItem(expectedNumberOfNonCommentArgs, key);
                    });
                },
                /**
                 * @return {?}
                 */
                getAll : function() {
                    return t.SafePromise.sync(function() {
                        var employees = {};
                        return(0, keys["default"])(window.localStorage).forEach(function(i) {
                            /** @type {(null|string)} */
                            employees[i] = window.localStorage.getItem(i);
                        }), employees;
                    });
                },
                /**
                 * @param {?} key
                 * @return {?}
                 */
                remove : function(key) {
                    return t.SafePromise.sync(function() {
                        return window.localStorage.removeItem(key);
                    });
                },
                /**
                 * @return {?}
                 */
                removeAll : function() {
                    return t.SafePromise.sync(function() {
                        return window.localStorage.clear();
                    });
                }
            };
            options.browserStorageLocal = {
                /**
                 * @param {string} cur
                 * @return {?}
                 */
                get : function(cur) {
                    return init(this, void 0, void 0, h["default"].mark(function next() {
                        var words;
                        return h["default"].wrap(function(stream) {
                            for (;;) {
                                switch(stream.prev = stream.next) {
                                    case 0:
                                        return stream.next = 2, firefox.storage.local.get(cur);
                                    case 2:
                                        return words = stream.sent, stream.abrupt("return", words.hasOwnProperty(cur) ? words[cur] : null);
                                    case 4:
                                        ;
                                    case "end":
                                        return stream.stop();
                                }
                            }
                        }, next, this);
                    }));
                },
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @param {string} key
                 * @return {?}
                 */
                set : function(expectedNumberOfNonCommentArgs, key) {
                    return firefox.storage.local.set((0, elem["default"])({}, expectedNumberOfNonCommentArgs, key));
                },
                /**
                 * @return {?}
                 */
                getAll : function() {
                    return firefox.storage.local.get(null);
                },
                /**
                 * @param {?} key
                 * @return {?}
                 */
                remove : function(key) {
                    return firefox.storage.local.remove(key);
                },
                /**
                 * @return {?}
                 */
                removeAll : function() {
                    return init(this, void 0, void 0, h["default"].mark(function end() {
                        return h["default"].wrap(function(current) {
                            for (;;) {
                                switch(current.prev = current.next) {
                                    case 0:
                                        return current.next = 2, firefox.storage.local.clear();
                                    case 2:
                                        ;
                                    case "end":
                                        return current.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            };
            var migrationAwareDestination = new Wraith.StorageMigration("firefoxLocalStorageToExtApi", options.windowLocalStorage, options.browserStorageLocal, ["version"]);
            var promise = paths["default"].resolve(false);
            /** @type {boolean} */
            var value = false;
            /** @type {function (): ?} */
            options.ensureMigrationCompleted = rmDir;
            options.migrationAware = {
                get : method("get"),
                set : method("set"),
                getAll : method("getAll"),
                remove : method("remove"),
                removeAll : method("removeAll")
            };
        }(preferencesApi = expectedNumberOfNonCommentArgs.preferencesApi || (expectedNumberOfNonCommentArgs.preferencesApi = {}));
    }, {
        "./message/bg" : 161,
        "./message/content" : 162,
        "./storage-migration" : 164,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/regenerator" : 35,
        stdlib : 201
    }],
    167 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} name
         * @return {?}
         */
        function ondata(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        var name = $("babel-runtime/helpers/toConsumableArray");
        var obj = ondata(name);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var link = $("spark-md5");
        var sandbox = $("config");
        var self = $("./newConfig");
        expectedNumberOfNonCommentArgs.isTestsMode = self.isTestsMode;
        expectedNumberOfNonCommentArgs.getVersion = self.getVersion;
        expectedNumberOfNonCommentArgs.getUuid = self.getUuid;
        expectedNumberOfNonCommentArgs.ENV = self.ENV;
        expectedNumberOfNonCommentArgs.URLS = self.URLS;
        expectedNumberOfNonCommentArgs.GRAMMARLY_DOMAIN = self.GRAMMARLY_DOMAIN;
        expectedNumberOfNonCommentArgs.appName = self.appName;
        expectedNumberOfNonCommentArgs.gnarAppName = self.gnarAppName;
        expectedNumberOfNonCommentArgs.GNAR = sandbox.getGlobal().appConfig.gnar;
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.news = ["The G logo gets out of the way when you're typing", "Switch between American and British English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface"];
        expectedNumberOfNonCommentArgs.newsId = expectedNumberOfNonCommentArgs.news.length && link.hash(expectedNumberOfNonCommentArgs.news.join("\n"));
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.userFields = ["id", "email", "firstName", "anonymous", "type", "subscriptionFree", "experiments", "isTest", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors", "referral"];
        expectedNumberOfNonCommentArgs.userFields.push("token");
        /** @type {string} */
        expectedNumberOfNonCommentArgs.nextVerClass = "gr_ver_2";
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.grammarlyAttrs = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor"];
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.restrictedAttrs = [].concat((0, obj["default"])(expectedNumberOfNonCommentArgs.grammarlyAttrs), ["readonly", "disabled"]);
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.customFieldsRestrictedAttrs = ["pm-container", ["class", "ProseMirror"], "data-synchrony", ["data-gramm", "false"], ["class", "redactor-layer"], ["class", "redactor-editor"], ["class", "redactor_box"], ["aria-label", "Search Facebook"]];
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.allRestrictedAttrs = [].concat((0, obj["default"])(expectedNumberOfNonCommentArgs.restrictedAttrs), (0, obj["default"])(expectedNumberOfNonCommentArgs.customFieldsRestrictedAttrs));
        /** @type {string} */
        expectedNumberOfNonCommentArgs.restrictedParentAttrs = "[data-reactid]";
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.externalEvents = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix", "enable-email-perception"];
        /** @type {boolean} */
        expectedNumberOfNonCommentArgs.development = "127.0.0.1:3117" === document.location.host;
    }, {
        "./newConfig" : 172,
        "babel-runtime/helpers/toConsumableArray" : 33,
        config : 151,
        "spark-md5" : "spark-md5"
    }],
    168 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} data
         * @return {?}
         */
        function fire(data) {
            return data && data.__esModule ? data : {
                "default" : data
            };
        }
        /**
         * @return {undefined}
         */
        function subscribe() {
            var console = {
                log : config._f
            };
            methods.forEach(function(name) {
                console[name] = old[name];
            });
            scope.console = console;
        }
        /**
         * @return {undefined}
         */
        function bind() {
            nodes.on("bg-log", function(expectation) {
                var expectedNumberOfNonCommentArgs;
                (expectedNumberOfNonCommentArgs = console)[expectation.method].apply(expectedNumberOfNonCommentArgs, ["BG LOG"].concat((0, __exports__["default"])(expectation.args)));
            });
        }
        /**
         * @return {undefined}
         */
        function log() {
            bind();
            var console = {};
            methods.concat("log").forEach(function(name) {
                /**
                 * @return {undefined}
                 */
                console[name] = function() {
                    /** @type {number} */
                    var expectedNumberOfNonCommentArgs = arguments.length;
                    /** @type {Array} */
                    var args = Array(expectedNumberOfNonCommentArgs);
                    /** @type {number} */
                    var $_i = 0;
                    for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                        args[$_i] = arguments[$_i];
                    }
                    try {
                        canvasPath.push({
                            method : name,
                            args : args
                        });
                        old[name]((0, item["default"])(args));
                    } catch (e) {
                    }
                };
            });
            scope.console = console;
        }
        /**
         * @return {?}
         */
        function e() {
            /** @type {Array} */
            var result = canvasPath.concat();
            return canvasPath.length = 0, result;
        }
        var args = require("babel-runtime/core-js/json/stringify");
        var item = fire(args);
        var memory = require("babel-runtime/helpers/toConsumableArray");
        var __exports__ = fire(memory);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var config = require("./util");
        var nodes = require("./message");
        /** @type {Array} */
        var methods = ["info", "warn", "error", "time", "timeEnd", "debug"];
        /** @type {Window} */
        var scope = window;
        /** @type {(Console|null)} */
        var old = console;
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.disableConsoleLog = subscribe;
        /** @type {Array} */
        var canvasPath = [];
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.setSeleniumCompatibility = log;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.flushLog = e;
    }, {
        "./message" : 171,
        "./util" : 198,
        "babel-runtime/core-js/json/stringify" : 16,
        "babel-runtime/helpers/toConsumableArray" : 33
    }],
    169 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function create(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {string} js
         * @param {Object} root
         * @return {?}
         */
        function highlight(js, root) {
            var tempDiv = (root || document).createElement("div");
            return tempDiv.innerHTML = filter.sanitize(js.trim()), tempDiv.firstElementChild;
        }
        /**
         * @param {?} el
         * @param {HTMLElement} global
         * @param {?} tagName
         * @return {?}
         */
        function init(el, global, tagName) {
            var name = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "div";
            /** @type {HTMLElement} */
            var root = global;
            var self = root[tagName] = root[tagName] || {};
            if (!self.el) {
                self.el = root.ownerDocument.createElement(name);
                root.appendChild(self.el);
            }
            var comp = t.render(el, self.el);
            return null === self.remove && (self.remove = function() {
                delete root[tagName];
                root.removeChild(self.el);
                t.unmountComponentAtNode(self.el);
            }), {
                component : comp,
                remove : self.remove.bind(self),
                el : self.el
            };
        }
        /**
         * @param {Object} inSender
         * @param {undefined} callback
         * @return {?}
         */
        function enter(inSender, callback) {
            var x = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1E3;
            /** @type {number} */
            var diffX = 0;
            /** @type {Object} */
            var c = inSender;
            for (;c.parentNode && diffX < x;) {
                if ("string" !== typeof callback && callback === c) {
                    return true;
                }
                if (c.id === callback || c === callback) {
                    return true;
                }
                c = c.parentNode;
            }
            return false;
        }
        /**
         * @param {Element} element
         * @param {?} target
         * @return {?}
         */
        function hasClass(element, target) {
            return!(!element || void 0 === element.className) && element.classList.contains(target);
        }
        /**
         * @param {HTMLElement} elm
         * @param {?} name
         * @return {?}
         */
        function removeClass(elm, name) {
            if (elm && elm.classList) {
                return elm.classList.remove(name);
            }
        }
        /**
         * @param {Element} node
         * @param {string} name
         * @return {?}
         */
        function addClass(node, name) {
            if (node) {
                if (name.indexOf(" ") === -1) {
                    return node.classList.add(name);
                }
                var codeSegments = name.split(" ");
                /** @type {number} */
                var i = 0;
                for (;i < codeSegments.length;i++) {
                    node.classList.add(codeSegments[i]);
                }
            }
        }
        /**
         * @param {Element} node
         * @param {?} opt_condition
         * @param {string} c
         * @return {undefined}
         */
        function toggleClass(node, opt_condition, c) {
            if (opt_condition) {
                addClass(node, c);
            } else {
                removeClass(node, c);
            }
        }
        /**
         * @param {Node} node
         * @param {?} selector
         * @return {?}
         */
        function query(node, selector) {
            var pn = node.parentNode;
            for (;null !== pn;) {
                if (matchesSelector(pn, selector)) {
                    return pn;
                }
                pn = pn.parentNode;
            }
            return false;
        }
        /**
         * @param {Node} target
         * @return {?}
         */
        function onBlur(target) {
            var pn = target.parentNode;
            for (;null !== pn;) {
                if (finishEditing(pn)) {
                    return pn;
                }
                pn = pn.parentNode;
            }
            return false;
        }
        /**
         * @param {Element} node
         * @return {?}
         */
        function finishEditing(node) {
            return "true" === node.contentEditable || "plaintext-only" === node.contentEditable;
        }
        /**
         * @param {Object} node
         * @param {?} elem
         * @return {?}
         */
        function matchesSelector(node, elem) {
            if (!node) {
                return false;
            }
            var f = node.matches || (node.msMatchesSelector || (node.matchesSelector || (node.webkitMatchesSelector || node.mozMatchesSelector)));
            return!!f && f.apply(node, [elem]);
        }
        /**
         * @param {?} elem
         * @return {?}
         */
        function isXML(elem) {
            return document.activeElement && "IFRAME" === document.activeElement.tagName ? elem === elem.ownerDocument.activeElement : document.activeElement && "BODY" === document.activeElement.tagName ? elem === document.activeElement : elem === document.activeElement;
        }
        /**
         * @param {string} object
         * @param {string} keepData
         * @param {Function} callback
         * @param {Function} s
         * @return {?}
         */
        function bind(object, keepData, callback, s) {
            var bool = arguments.length > 4 && (void 0 !== arguments[4] && arguments[4]);
            if (null !== object) {
                /** @type {string} */
                var elem = object;
                if ("string" !== typeof keepData) {
                    return _.each(keepData, function(which, type) {
                        bind(elem, type, which, s);
                    });
                }
                if (callback) {
                    var value = elem[key] || [];
                    return elem[key] = value, s ? (elem[key] = value.filter(function(listener) {
                        return!(listener.event === keepData && listener.cb === callback);
                    }), elem.removeEventListener(keepData, callback, bool)) : (value.push({
                        event : keepData,
                        /** @type {Function} */
                        cb : callback
                    }), elem.addEventListener(keepData, callback, bool)), {
                        el : elem,
                        event : keepData,
                        /** @type {Function} */
                        cb : callback,
                        bubble : bool
                    };
                }
            }
        }
        /**
         * @param {string} destination
         * @param {string} type
         * @param {Function} which
         * @param {?} protoProps
         * @return {undefined}
         */
        function extend(destination, type, which, protoProps) {
            /** @type {string} */
            var result = destination;
            if (type || null === result[key]) {
                bind(result, type, which, true, protoProps);
            } else {
                result[key].forEach(function(options) {
                    return extend(result, options.event, options.cb, options.bubble);
                });
            }
        }
        /**
         * @param {string} name
         * @param {Function} func
         * @param {Object} b
         * @return {?}
         */
        function add(name, func, b) {
            var expectedNumberOfNonCommentArgs = this;
            return this.addEventListener(name, func, b), {
                /**
                 * @return {?}
                 */
                off : function() {
                    return callback.apply(expectedNumberOfNonCommentArgs, [name, func, b]);
                }
            };
        }
        /**
         * @param {string} name
         * @param {Function} func
         * @param {Object} context
         * @return {undefined}
         */
        function callback(name, func, context) {
            this.removeEventListener(name, func, context);
        }
        /**
         * @param {string} name
         * @param {Function} func
         * @return {undefined}
         */
        function once(name, func) {
            var expectedNumberOfNonCommentArgs = this;
            /**
             * @param {?} fn
             * @return {undefined}
             */
            var attachKey = function ready(fn) {
                func(fn);
                callback.call(expectedNumberOfNonCommentArgs, name, ready);
            };
            add.call(this, name, attachKey);
        }
        /**
         * @param {string} name
         * @param {Function} config
         * @return {undefined}
         */
        function trigger(name, config) {
            /** @type {(Event|null)} */
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(name, true, true, config);
            this.dispatchEvent(evt);
        }
        /**
         * @param {HTMLElement} node
         * @return {?}
         */
        function find_text_nodes_helper(node) {
            var style = getComputedStyle(node, void 0);
            return "none" !== style.getPropertyValue("display") && ("hidden" !== style.getPropertyValue("visibility") && node.clientHeight > 0);
        }
        /**
         * @return {?}
         */
        function get() {
            /** @type {number} */
            var expectedNumberOfNonCommentArgs = arguments.length;
            /** @type {Array} */
            var args = Array(expectedNumberOfNonCommentArgs);
            /** @type {number} */
            var $_i = 0;
            for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                args[$_i] = arguments[$_i];
            }
            return args.reduce(function(flat, el) {
                return flat.concat(_.isObject(el) ? (0, m["default"])(el).filter(function(methodname) {
                    return el[methodname];
                }) : el);
            }, []).filter(function(retval) {
                return Boolean(retval);
            }).join(" ");
        }
        /**
         * @param {string} name
         * @param {number} value
         * @return {?}
         */
        function maybeAddPx(name, value) {
            return "number" !== typeof value || cssNumber[dasherize(name)] ? value : value + "px";
        }
        /**
         * @param {string} s
         * @return {?}
         */
        function camelize(s) {
            return s.replace(/-+(.)?/g, function(dataAndEvents, chr) {
                return chr ? chr.toUpperCase() : "";
            });
        }
        /**
         * @param {?} str
         * @return {?}
         */
        function encode(str) {
            return _.transform(str, function(store, value, name) {
                return store[camelize(name)] = value;
            });
        }
        /**
         * @param {string} str
         * @return {?}
         */
        function dasherize(str) {
            return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        /**
         * @param {Element} el
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {boolean} value
         * @return {?}
         */
        function css(el, expectedNumberOfNonCommentArgs, value) {
            if (arguments.length < 3) {
                /** @type {Element} */
                var element = el;
                if (!element) {
                    return;
                }
                var computedStyle = getComputedStyle(element, "");
                if ("string" === typeof expectedNumberOfNonCommentArgs) {
                    return element.style[camelize(expectedNumberOfNonCommentArgs)] || computedStyle.getPropertyValue(expectedNumberOfNonCommentArgs);
                }
                if (_.isArray(expectedNumberOfNonCommentArgs)) {
                    var computed = {};
                    return _.each(expectedNumberOfNonCommentArgs, function(property, dataAndEvents) {
                        computed[camelize(property)] = element.style[camelize(property)] || computedStyle.getPropertyValue(property);
                    }), computed;
                }
            }
            /** @type {string} */
            var cssText = "";
            if (_.isString(expectedNumberOfNonCommentArgs)) {
                if (value || 0 === value) {
                    /** @type {string} */
                    cssText = dasherize(expectedNumberOfNonCommentArgs) + ":" + maybeAddPx(expectedNumberOfNonCommentArgs, value);
                } else {
                    el.style.removeProperty(dasherize(expectedNumberOfNonCommentArgs));
                }
            } else {
                /** @type {Object} */
                expectedNumberOfNonCommentArgs = expectedNumberOfNonCommentArgs;
                var key;
                for (key in expectedNumberOfNonCommentArgs) {
                    if (expectedNumberOfNonCommentArgs[key] || 0 === expectedNumberOfNonCommentArgs[key]) {
                        cssText += dasherize(key) + ":" + maybeAddPx(key, expectedNumberOfNonCommentArgs[key]) + ";";
                    } else {
                        el.style.removeProperty(dasherize(key));
                    }
                }
            }
            return el.style.cssText += ";" + cssText;
        }
        /**
         * @param {string} el
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        function bindEvents(el, expectedNumberOfNonCommentArgs) {
            if (expectedNumberOfNonCommentArgs && el) {
                var opacity = css(el, (0, m["default"])(expectedNumberOfNonCommentArgs));
                return css(el, expectedNumberOfNonCommentArgs), function() {
                    return css(el, opacity);
                };
            }
        }
        /**
         * @param {Node} node
         * @param {?} el
         * @return {?}
         */
        function visit(node, el) {
            var pn = node.parentNode;
            for (;null !== pn;) {
                if (pn.tagName === el) {
                    return pn;
                }
                pn = pn.parentNode;
            }
            return null;
        }
        /**
         * @param {Node} elem
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        function nth(elem, i, a) {
            var cur = elem.parentNode;
            for (;null !== cur;) {
                if (cur.dataset && (cur.dataset[i] && cur.dataset[i] === a)) {
                    return cur;
                }
                cur = cur.parentNode;
            }
        }
        /**
         * @param {Element} el
         * @param {?} selector
         * @return {?}
         */
        function remove(el, selector) {
            return hasClass(el, selector) ? el : parent(el, selector);
        }
        /**
         * @param {Element} elem
         * @param {?} selector
         * @return {?}
         */
        function parent(elem, selector) {
            var parent = elem.parentNode;
            for (;null !== parent;) {
                if (hasClass(parent, selector)) {
                    return parent;
                }
                parent = parent.parentNode;
            }
            return false;
        }
        /**
         * @param {Object} el
         * @param {?} value
         * @return {?}
         */
        function wrap(el, value) {
            if (!el) {
                return false;
            }
            /** @type {Object} */
            var node = el;
            for (;node.parentNode;) {
                if (hasClass(node, value)) {
                    return node;
                }
                node = node.parentNode;
            }
            return false;
        }
        /**
         * @return {?}
         */
        function _forEach() {
            var depth = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return depth ? _forEach.call(this.parentNode, --depth) : this;
        }
        /**
         * @param {Object} m3
         * @param {undefined} f
         * @return {?}
         */
        function tryIt(m3, f) {
            if (!m3) {
                return false;
            }
            /** @type {Object} */
            var c = m3;
            for (;c.parentNode;) {
                if (f === c.parentNode) {
                    return c;
                }
                c = c.parentNode;
            }
            return false;
        }
        /**
         * @param {?} node
         * @param {Node} referenceEl
         * @return {undefined}
         */
        function insertAfter(node, referenceEl) {
            var parent = referenceEl.parentNode;
            if (null === parent) {
                throw new util.AssertionError("Expected non-null parent");
            }
            if (parent.lastChild === referenceEl) {
                parent.appendChild(node);
            } else {
                parent.insertBefore(node, referenceEl.nextSibling);
            }
        }
        /**
         * @param {?} dataAndEvents
         * @param {Node} t
         * @return {undefined}
         */
        function insertBefore(dataAndEvents, t) {
            util.assertNonNull(t.parentNode, "parent node").insertBefore(dataAndEvents, t);
        }
        /**
         * @param {Object} element
         * @param {Object} elem
         * @return {?}
         */
        function next(element, elem) {
            elem = elem || document;
            /** @type {Object} */
            var target = element;
            for (;target;) {
                if (target === elem) {
                    return true;
                }
                target = target.parentNode;
            }
            return false;
        }
        /**
         * @param {?} event
         * @return {undefined}
         */
        function simulateKeyEvent(event) {
            var evt = void 0;
            var win = void 0;
            var Events = {
                ctrl : false,
                meta : false,
                shift : false,
                alt : false
            };
            var e = _.extend(Events, event);
            try {
                evt = e.el.ownerDocument.createEvent("KeyEvents");
                win = e.el.ownerDocument.defaultView;
                evt.initKeyEvent(e.type, true, true, win, e.ctrl, e.alt, e.shift, e.meta, 0, 0);
            } catch (err) {
                evt = e.el.ownerDocument.createEvent("UIEvents");
                evt.initUIEvent.bind(evt)(void 0, true, true, window, 1);
                /** @type {number} */
                evt.keyCode = 0;
                /** @type {number} */
                evt.which = 0;
                /** @type {number} */
                evt.charCode = 0;
                evt.ctrlKey = e.ctrl;
                evt.altKey = e.alt;
                evt.shiftKey = e.shift;
                evt.metaKey = e.meta;
            }
            e.el.dispatchEvent(evt);
        }
        /**
         * @param {Object} scope
         * @return {?}
         */
        function isPageHidden(scope) {
            return "undefined" !== typeof scope.hidden ? scope.hidden : "undefined" !== typeof scope.mozHidden ? scope.mozHidden : "undefined" !== typeof scope.webkitHidden ? scope.webkitHidden : "undefined" !== typeof scope.msHidden && scope.msHidden;
        }
        /**
         * @param {Object} o
         * @return {?}
         */
        function _pageVisibility(o) {
            return "undefined" !== typeof o.hidden ? "visibilitychange" : "undefined" !== typeof o.mozHidden ? "mozvisibilitychange" : "undefined" !== typeof o.webkitHidden ? "webkitvisibilitychange" : "undefined" !== typeof o.msHidden && "msvisibilitychange";
        }
        /**
         * @return {?}
         */
        function transform() {
            var doc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            return "undefined" !== typeof doc.body.style.transform ? "transform" : "undefined" !== typeof doc.body.style.WebkitTransform ? "WebkitTransform" : "undefined" !== typeof doc.body.style.MozTransform ? "MozTransform" : void 0;
        }
        /**
         * @param {Window} w
         * @return {?}
         */
        function newSize(w) {
            return w.getSelection() || {};
        }
        /**
         * @param {Node} element
         * @return {?}
         */
        function style(element) {
            if (element) {
                var doc = element.ownerDocument;
                if (doc) {
                    var parent = doc.defaultView || window;
                    if (parent) {
                        var classes = parent.getComputedStyle(element, void 0);
                        if (classes) {
                            /** @type {number} */
                            var len = arguments.length;
                            /** @type {Array} */
                            var args = Array(len > 1 ? len - 1 : 0);
                            /** @type {number} */
                            var i = 1;
                            for (;i < len;i++) {
                                args[i - 1] = arguments[i];
                            }
                            return 1 === args.length ? classes.getPropertyValue(args[0]) : args.reduce(function(deepDataAndEvents, prop) {
                                return(0, conf["default"])({}, deepDataAndEvents, (0, elem["default"])({}, prop, classes.getPropertyValue(prop)));
                            }, {});
                        }
                    }
                }
            }
        }
        /**
         * @param {string} str
         * @return {?}
         */
        function rethrow(str) {
            return str.split(" ").map(function(dataAndEvents) {
                return "." !== dataAndEvents[0] ? "." + dataAndEvents : dataAndEvents;
            }).join("").trim();
        }
        /**
         * @param {string} paths
         * @return {?}
         */
        function flatten(paths) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var args = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                args[i - 1] = arguments[i];
            }
            if (args.length > 0) {
                /** @type {Array} */
                var rulesets = [];
                return rulesets.push(flatten(paths)), args.forEach(function(paths) {
                    return rulesets.push(flatten(paths));
                }), rulesets.join(", ");
            }
            return paths = paths.split(", ").map(function(dataAndEvents) {
                return "." !== dataAndEvents[0] ? "." + dataAndEvents : dataAndEvents;
            }).join(", ").trim(), paths + ", " + paths + " *";
        }
        /**
         * @return {?}
         */
        function getBrowser() {
            /** @type {Element} */
            var el = document.createElement("fakeelement");
            var testSource = {
                animation : "animationend",
                MozAnimation : "animationend",
                WebkitAnimation : "webkitAnimationEnd"
            };
            var name;
            for (name in testSource) {
                if (void 0 !== el.style[name]) {
                    return testSource[name];
                }
            }
        }
        /**
         * @return {?}
         */
        function getTransitionEvent() {
            /** @type {Element} */
            var el = document.createElement("fakeelement");
            var transitions = {
                transition : "transitionend",
                MozTransition : "transitionend",
                WebkitTransition : "webkitTransitionEnd"
            };
            var t;
            for (t in transitions) {
                if (transitions.hasOwnProperty(t) && void 0 !== el.style[t]) {
                    return transitions[t];
                }
            }
        }
        /**
         * @param {Document} d
         * @return {undefined}
         */
        function load(d) {
            if ("undefined" !== typeof window.GR_INLINE_STYLES) {
                var target = d.createElement("style");
                target.innerHTML = window.GR_INLINE_STYLES;
                try {
                    d.querySelector("head").appendChild(target);
                } catch (name) {
                    console.log("can't append style", name);
                }
            }
        }
        /**
         * @param {Element} obj
         * @param {?} text
         * @return {undefined}
         */
        function createOption(obj, text) {
            obj.setAttribute("data-gramm_id", text);
            obj.setAttribute("data-gramm", "true");
        }
        /**
         * @param {string} name
         * @return {undefined}
         */
        function dispatchEvent(name) {
            var detail = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            /** @type {(Event|null)} */
            var e = document.createEvent("CustomEvent");
            e.initCustomEvent(name + "-gr", true, true, detail);
            document.dispatchEvent(e);
        }
        /**
         * @param {?} e
         * @param {?} range
         * @return {undefined}
         */
        function fn(e, range) {
            var selection = e.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
        /**
         * @param {Object} sel
         * @param {Object} selection
         * @return {undefined}
         */
        function select(sel, selection) {
            var range = sel.createRange();
            range.setStart(selection.anchorNode, selection.anchorOffset);
            range.setEnd(selection.focusNode, selection.focusOffset);
            fn(sel, range);
        }
        /**
         * @param {Object} el
         * @param {?} selector
         * @return {?}
         */
        function $$(el, selector) {
            return null === el ? null : matchesSelector(el, selector) ? el : el.querySelector(selector) || $$(el.parentElement, selector);
        }
        var selector = require("babel-runtime/helpers/defineProperty");
        var elem = create(selector);
        var data = require("babel-runtime/core-js/object/assign");
        var conf = create(data);
        var html = require("babel-runtime/core-js/object/keys");
        var m = create(html);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var t = require("react-dom");
        var _ = require("lodash");
        var handler = require("./util");
        var util = require("stdlib");
        var filter = require("dompurify");
        /** @type {function (string, Object): ?} */
        expectedNumberOfNonCommentArgs.createEl = highlight;
        /** @type {function (?, HTMLElement, ?): ?} */
        expectedNumberOfNonCommentArgs.renderReactWithParent = init;
        /** @type {function (Object, undefined): ?} */
        expectedNumberOfNonCommentArgs.inEl = enter;
        /** @type {function (Element, ?): ?} */
        expectedNumberOfNonCommentArgs.hasClass = hasClass;
        /** @type {function (HTMLElement, ?): ?} */
        expectedNumberOfNonCommentArgs.removeClass = removeClass;
        /** @type {function (Element, string): ?} */
        expectedNumberOfNonCommentArgs.addClass = addClass;
        /** @type {function (Element, ?, string): undefined} */
        expectedNumberOfNonCommentArgs.toggleClass = toggleClass;
        /** @type {function (Node, ?): ?} */
        expectedNumberOfNonCommentArgs.getParentBySel = query;
        /** @type {function (Node): ?} */
        expectedNumberOfNonCommentArgs.parentIsContentEditable = onBlur;
        /** @type {function (Element): ?} */
        expectedNumberOfNonCommentArgs.isContentEditable = finishEditing;
        /** @type {function (Object, ?): ?} */
        expectedNumberOfNonCommentArgs.matchesSelector = matchesSelector;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.isFocused = isXML;
        var key = handler.guid();
        /** @type {function (string, string, Function, Function): ?} */
        expectedNumberOfNonCommentArgs.listen = bind;
        /** @type {function (string, string, Function, ?): undefined} */
        expectedNumberOfNonCommentArgs.unlisten = extend;
        /** @type {function (string, Function, Object): ?} */
        expectedNumberOfNonCommentArgs.on = add;
        /** @type {function (string, Function, Object): undefined} */
        expectedNumberOfNonCommentArgs.off = callback;
        /** @type {function (string, Function): undefined} */
        expectedNumberOfNonCommentArgs.once = once;
        /** @type {function (string, Function): undefined} */
        expectedNumberOfNonCommentArgs.emit = trigger;
        /** @type {function (HTMLElement): ?} */
        expectedNumberOfNonCommentArgs.isVisible = find_text_nodes_helper;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.cs = get;
        var cssNumber = {
            "column-count" : 1,
            columns : 1,
            "font-weight" : 1,
            "line-height" : 1,
            opacity : 1,
            "z-index" : 1,
            zoom : 1
        };
        /** @type {function (string, number): ?} */
        expectedNumberOfNonCommentArgs.maybeAddPx = maybeAddPx;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.camelize = camelize;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.camelizeAttrs = encode;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.dasherize = dasherize;
        /** @type {function (Element, Object, boolean): ?} */
        expectedNumberOfNonCommentArgs.css = css;
        /** @type {function (string, Object): ?} */
        expectedNumberOfNonCommentArgs.setCustomCss = bindEvents;
        /** @type {function (Node, ?): ?} */
        expectedNumberOfNonCommentArgs.getParentByTag = visit;
        /** @type {function (Node, ?, ?): ?} */
        expectedNumberOfNonCommentArgs.getParentByData = nth;
        /** @type {function (Element, ?): ?} */
        expectedNumberOfNonCommentArgs.resolveEl = remove;
        /** @type {function (Element, ?): ?} */
        expectedNumberOfNonCommentArgs.getParent = parent;
        /** @type {function (Object, ?): ?} */
        expectedNumberOfNonCommentArgs.parentHasClass = wrap;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getParentByDepth = _forEach;
        /** @type {function (Object, undefined): ?} */
        expectedNumberOfNonCommentArgs.isParent = tryIt;
        /** @type {function (?, Node): undefined} */
        expectedNumberOfNonCommentArgs.insertAfter = insertAfter;
        /** @type {function (?, Node): undefined} */
        expectedNumberOfNonCommentArgs.insertBefore = insertBefore;
        /** @type {function (Object, Object): ?} */
        expectedNumberOfNonCommentArgs.elementInDocument = next;
        /** @type {function (?): undefined} */
        expectedNumberOfNonCommentArgs.runKeyEvent = simulateKeyEvent;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.docHidden = isPageHidden;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.visibilityEvent = _pageVisibility;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.transformProp = transform;
        /** @type {function (Window): ?} */
        expectedNumberOfNonCommentArgs.getDocSelection = newSize;
        /** @type {function (Node): ?} */
        expectedNumberOfNonCommentArgs.compStyle = style;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.classSelector = rethrow;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.selectorAll = flatten;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.whichAnimationEndEvent = getBrowser;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.transitionEndEventName = getTransitionEvent;
        /** @type {function (Document): undefined} */
        expectedNumberOfNonCommentArgs.addIframeCss = load;
        /** @type {function (Element, ?): undefined} */
        expectedNumberOfNonCommentArgs.setGRAttributes = createOption;
        /** @type {function (string): undefined} */
        expectedNumberOfNonCommentArgs.emitDomEvent = dispatchEvent;
        /** @type {function (?, ?): undefined} */
        expectedNumberOfNonCommentArgs.addRange = fn;
        /** @type {function (Object, Object): undefined} */
        expectedNumberOfNonCommentArgs.setDomRange = select;
        /** @type {function (Object, ?): ?} */
        expectedNumberOfNonCommentArgs.closestEl = $$;
    }, {
        "./util" : 198,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/helpers/defineProperty" : 29,
        dompurify : "dompurify",
        lodash : "lodash",
        "react-dom" : "react-dom",
        stdlib : 201
    }],
    170 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {Object} t
         * @return {?}
         */
        function delay(t) {
            var oldq = this;
            var sibling = t.tabs;
            return config.SafePromise.create(function(cb) {
                return setup(oldq, void 0, void 0, event["default"].mark(function end() {
                    var tref;
                    var r;
                    return event["default"].wrap(function(self) {
                        for (;;) {
                            switch(self.prev = self.next) {
                                case 0:
                                    return tref = setTimeout(function() {
                                        return sibling.getActiveTabUrl().then(cb);
                                    }, 2E3), self.next = 3, sibling.getActiveTabUrl();
                                case 3:
                                    r = self.sent;
                                    clearTimeout(tref);
                                    cb(r);
                                case 6:
                                    ;
                                case "end":
                                    return self.stop();
                            }
                        }
                    }, end, this);
                }));
            });
        }
        /**
         * @param {Object} el
         * @return {?}
         */
        function s(el) {
            var target = el && el.ownerDocument || document;
            var root = target.location || target.defaultView.location;
            return root ? replace(root.hostname) : "";
        }
        /**
         * @param {Object} callback
         * @return {?}
         */
        function getNext(callback) {
            return groupedSelectors["default"].race([delay(callback).then(fn), d.delay(1E4).then(function() {
                throw new Error("Request to tabs.getCurrentTabUrl rejected by timeout");
            })]);
        }
        /**
         * @param {?} u
         * @return {?}
         */
        function fn(u) {
            if (d.isFF() && /^about:/.test(u)) {
                return u;
            }
            /** @type {Element} */
            var a = document.createElement("a");
            return a.href = u, replace(a.hostname);
        }
        /**
         * @param {Object} parentNode
         * @return {?}
         */
        function checkLocation(parentNode) {
            var target = parentNode && parentNode.ownerDocument || document;
            var loc = target.location || target.defaultView.location;
            return loc ? loc.pathname + loc.search : "";
        }
        /**
         * @return {?}
         */
        function load() {
            /** @type {RegExp} */
            var regexp = new RegExp("^(?:[a-z]+:)?//", "i");
            /** @type {string} */
            var path = "";
            /** @type {NodeList} */
            var codeSegments = document.getElementsByTagName("link");
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
                var anchor = codeSegments[i];
                /** @type {string} */
                var str = '"' + anchor.getAttribute("rel") + '"';
                /** @type {RegExp} */
                var pat = /(\"icon )|( icon\")|(\"icon\")|( icon )/i;
                if (str.search(pat) !== -1) {
                    path = anchor.getAttribute("href");
                }
            }
            return path || (path = "favicon.ico"), regexp.test(path) ? path : "/" !== path[0] ? "//" + document.location.host + document.location.pathname + path : "//" + document.location.host + path;
        }
        var type = require("babel-runtime/regenerator");
        var event = Event(type);
        var complete = require("babel-runtime/core-js/promise");
        var groupedSelectors = Event(complete);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} selector
         * @param {Text} self
         * @return {?}
         */
        var setup = function(expectedNumberOfNonCommentArgs, args, selector, self) {
            return new (selector || (selector = groupedSelectors["default"]))(function(success, indexOf) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        next(self.next(optgroup));
                    } catch (dontCloseTags) {
                        indexOf(dontCloseTags);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function loop(e) {
                    try {
                        next(self["throw"](e));
                    } catch (dontCloseTags) {
                        indexOf(dontCloseTags);
                    }
                }
                /**
                 * @param {Object} event
                 * @return {undefined}
                 */
                function next(event) {
                    if (event.done) {
                        success(event.value);
                    } else {
                        (new selector(function(f) {
                            f(event.value);
                        })).then(handler, loop);
                    }
                }
                next((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var d = require("./util");
        var Block = require("./page-config/defaults");
        var config = require("stdlib");
        /**
         * @param {string} idx
         * @return {?}
         */
        var replace = function(idx) {
            return idx.replace("www.", "");
        };
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.currentUrl = delay;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.getDomain = s;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.promiseGetDomain = getNext;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.domainFromUrl = fn;
        /**
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.isFacebookSite = function() {
            return Block.FACEBOOK_SITES.includes(s());
        };
        /**
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.isJiraSite = function() {
            return/\.atlassian\.net/.test(s());
        };
        /**
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.isBlackboardSite = function() {
            return/\.blackboard\.com/.test(s());
        };
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.getUrl = checkLocation;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getFavicon = load;
    }, {
        "./page-config/defaults" : 176,
        "./util" : 198,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/regenerator" : 35,
        stdlib : 201
    }],
    171 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        (function(message) {
            /**
             * @param {?} s
             * @return {?}
             */
            function walk(s) {
                return s && s.__esModule ? s : {
                    "default" : s
                };
            }
            /**
             * @param {string} optgroup
             * @param {Function} callback
             * @return {undefined}
             */
            function one(optgroup, callback) {
                /**
                 * @return {undefined}
                 */
                function func() {
                    off(optgroup, func);
                    /** @type {number} */
                    var expectedNumberOfNonCommentArgs = arguments.length;
                    /** @type {Array} */
                    var args = Array(expectedNumberOfNonCommentArgs);
                    /** @type {number} */
                    var $_i = 0;
                    for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                        args[$_i] = arguments[$_i];
                    }
                    callback.apply(this, args);
                }
                Class(optgroup, func);
            }
            /**
             * @param {string} name
             * @param {Function} func
             * @return {?}
             */
            function Class(name, func) {
                if ("__bgerror" === name) {
                    return void obj.on("__bgerror", func);
                }
                var spec = old[name] = old[name] || [];
                if (spec.push(func), 1 === spec.length) {
                    try {
                        self.listen(name, function() {
                            /** @type {boolean} */
                            var callback2 = true;
                            /** @type {boolean} */
                            var _didIteratorError = false;
                            var bulk = void 0;
                            try {
                                var elem;
                                var ret = (0, result["default"])(spec);
                                for (;!(callback2 = (elem = ret.next()).done);callback2 = true) {
                                    var parent = elem.value;
                                    parent.apply(void 0, arguments);
                                }
                            } catch (fn) {
                                /** @type {boolean} */
                                _didIteratorError = true;
                                bulk = fn;
                            } finally {
                                try {
                                    if (!callback2) {
                                        if (ret["return"]) {
                                            ret["return"]();
                                        }
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw bulk;
                                    }
                                }
                            }
                        });
                    } catch (error) {
                        expectedNumberOfNonCommentArgs.emitError(error);
                    }
                }
            }
            /**
             * @param {string} name
             * @param {Function} func
             * @return {?}
             */
            function off(name, func) {
                if ("__bgerror" === name) {
                    return void obj.off("__bgerror", func);
                }
                var set = old[name];
                if (set) {
                    var index = set.indexOf(func);
                    if (index !== -1) {
                        set.splice(index, 1);
                    }
                    if (0 === set.length) {
                        delete old[name];
                    }
                }
            }
            /**
             * @param {string} event
             * @return {undefined}
             */
            function update(event) {
                try {
                    switch(self.kind) {
                        case "background-message-api":
                            self.broadcast(event, {});
                            break;
                        default:
                            throw new Error("emitTabs can be used only on background");;
                    }
                } catch (error) {
                    expectedNumberOfNonCommentArgs.emitError(error);
                }
            }
            /**
             * @param {?} stream
             * @param {?} errorCallback
             * @return {undefined}
             */
            function write(stream, errorCallback) {
                var eventData = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                var target = arguments[3];
                var result = target || function() {
                };
                try {
                    if (!stream) {
                        throw TypeError("emitTo can't be used without destination point");
                    }
                    switch(self.kind) {
                        case "background-message-api":
                            self.sendTo(stream, errorCallback, eventData, result);
                            break;
                        default:
                            throw new Error("emitTo can be used only on background");;
                    }
                } catch (error) {
                    expectedNumberOfNonCommentArgs.emitError(error);
                }
            }
            /**
             * @param {string} type
             * @param {string} name
             * @return {undefined}
             */
            function prop(type, name) {
                try {
                    self.toFocused(type, name);
                } catch (error) {
                    expectedNumberOfNonCommentArgs.emitError(error);
                }
            }
            /**
             * @param {string} type
             * @param {string} name
             * @param {Function} prop
             * @return {undefined}
             */
            function resolve(type, name, prop) {
                try {
                    switch(self.kind) {
                        case "content-script-message-api":
                            self.broadcastBackground(type, name, prop);
                            break;
                        default:
                            throw new Error("emitBackground can be used only in content script");;
                    }
                } catch (error) {
                    expectedNumberOfNonCommentArgs.emitError(error);
                }
            }
            /**
             * @param {string} type
             * @return {?}
             */
            function setup(type) {
                var key = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                var selector = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1E4;
                var a = new h["default"](function(which, next) {
                    try {
                        switch(self.kind) {
                            case "content-script-message-api":
                                self.broadcastBackground(type, key, which, next);
                                break;
                            default:
                                throw new Error("promiseBackground can be used only on client scripts");;
                        }
                    } catch (e) {
                        next(e);
                        expectedNumberOfNonCommentArgs.emitError(e);
                    }
                });
                return h["default"].race([a, config.delay(selector).then(function() {
                    throw new Error("Request to bg page (" + self + ") rejected by timeout");
                })]);
            }
            var c = require("babel-runtime/core-js/promise");
            var h = walk(c);
            var nodes = require("babel-runtime/core-js/get-iterator");
            var result = walk(nodes);
            Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
                value : true
            });
            var _ = require("lodash");
            var flag = require("emitter");
            var config = require("./util");
            var handler = require("./dom");
            var Block = require("extension-api");
            var e = message && (message.env && message.env.SANDBOX) ? {
                message : {
                    broadcastBackground : config._f,
                    listen : config._f,
                    toFocused : config._f
                }
            } : Block.getGlobalExtensionApi();
            var self = e.message;
            var obj = flag({});
            var old = {};
            expectedNumberOfNonCommentArgs.emitError = _.throttle(function(header) {
                return obj.emit("__bgerror", header);
            }, 1E3);
            if (config.isBg()) {
                handler.listen(document, "grammarly:offline", function() {
                    return expectedNumberOfNonCommentArgs.emitError("proxy dead");
                }, void 0);
            }
            /** @type {function (string, Function): undefined} */
            expectedNumberOfNonCommentArgs.one = one;
            /** @type {function (string, Function): ?} */
            expectedNumberOfNonCommentArgs.on = Class;
            /** @type {function (string, Function): ?} */
            expectedNumberOfNonCommentArgs.off = off;
            /** @type {function (string): undefined} */
            expectedNumberOfNonCommentArgs.emitTabs = update;
            /** @type {function (?, ?): undefined} */
            expectedNumberOfNonCommentArgs.emitTo = write;
            /** @type {function (string, string): undefined} */
            expectedNumberOfNonCommentArgs.emitFocusedTab = prop;
            /** @type {function (string, string, Function): undefined} */
            expectedNumberOfNonCommentArgs.emitBackground = resolve;
            /** @type {function (string): ?} */
            expectedNumberOfNonCommentArgs.promiseBackground = setup;
        }).call(this, require("_process"));
    }, {
        "./dom" : 169,
        "./util" : 198,
        _process : 140,
        "babel-runtime/core-js/get-iterator" : 14,
        "babel-runtime/core-js/promise" : 24,
        emitter : "emitter",
        "extension-api" : 159,
        lodash : "lodash"
    }],
    172 : [function(Application, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @return {?}
         */
        function isTestsMode() {
            return!!window.__extensionTestsMode;
        }
        /**
         * @return {?}
         */
        function dispatcher() {
            return self.appConfig.extensionId;
        }
        /**
         * @return {?}
         */
        function getMaxSupportedCssHeight() {
            return "firefox" === self.bundleInfo.browser;
        }
        /**
         * @return {?}
         */
        function handler() {
            return "chrome" === self.bundleInfo.browser;
        }
        /**
         * @return {?}
         */
        function c() {
            return "safari" === self.bundleInfo.browser;
        }
        /**
         * @return {?}
         */
        function dispose() {
            return "edge" === self.bundleInfo.browser;
        }
        /**
         * @return {?}
         */
        function setupScroller() {
            return self.systemInfo.os.isWindows;
        }
        /**
         * @return {?}
         */
        function fn() {
            return "bg" === self.bundleInfo.context;
        }
        /**
         * @return {?}
         */
        function init() {
            return "popup" === self.bundleInfo.context;
        }
        /**
         * @return {?}
         */
        function runTest() {
            return fn() || init();
        }
        /**
         * @return {?}
         */
        function browser() {
            return self.bundleInfo.browser;
        }
        /**
         * @return {?}
         */
        function getVersion() {
            return self.buildInfo.version;
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var sandbox = Application("config");
        var self = sandbox.getGlobal();
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isTestsMode = isTestsMode;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getUuid = dispatcher;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isFF = getMaxSupportedCssHeight;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isChrome = handler;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isSafari = c;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isEdge = dispose;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isWindows = setupScroller;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isBg = fn;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isPopup = init;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isBgOrPopup = runTest;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getBrowser = browser;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getVersion = getVersion;
        expectedNumberOfNonCommentArgs.ENV = self.bundleInfo.env;
        expectedNumberOfNonCommentArgs.URLS = self.appConfig.url;
        expectedNumberOfNonCommentArgs.appName = self.appConfig.felog.appName;
        expectedNumberOfNonCommentArgs.gnarAppName = self.appConfig.gnar.appName;
        expectedNumberOfNonCommentArgs.GRAMMARLY_DOMAIN = self.appConfig.url.grammarlyDomain;
    }, {
        config : 151
    }],
    173 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function parseInt(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        var one = require("babel-runtime/core-js/object/keys");
        var column = parseInt(one);
        var nodes = require("babel-runtime/core-js/object/get-prototype-of");
        var result = parseInt(nodes);
        var g = require("babel-runtime/helpers/classCallCheck");
        var ret = parseInt(g);
        var text = require("babel-runtime/helpers/createClass");
        var type = parseInt(text);
        var b = require("babel-runtime/helpers/possibleConstructorReturn");
        var bp = parseInt(b);
        var json = require("babel-runtime/helpers/inherits");
        var h = parseInt(json);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var lang = require("lib/util");
        var request = require("./defaults");
        var module = require("lib/location");
        var Block = require("./config-loader");
        var Config = function(deepDataAndEvents) {
            /**
             * @param {?} last
             * @return {?}
             */
            function process(last) {
                (0, ret["default"])(this, process);
                var config = (0, bp["default"])(this, (process.__proto__ || (0, result["default"])(process)).call(this, last));
                return config.invalidate = function() {
                    return config.load();
                }, config;
            }
            return(0, h["default"])(process, deepDataAndEvents), (0, type["default"])(process, [{
                key : "getByPage",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    var nType = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : module.getUrl();
                    if (name) {
                        var itemName = (0, column["default"])(name).find(function(expected) {
                            return(new RegExp(expected)).test(nType);
                        });
                        return itemName ? name[itemName] : void 0;
                    }
                }
            }, {
                key : "get",
                /**
                 * @param {string} name
                 * @param {?} newValue
                 * @return {?}
                 */
                value : function(name, newValue) {
                    var page = this.config.pageConfig[name] || (this.config.subdomains.find(function(s) {
                        return(new RegExp("\\." + lang.escapeRegExp(s.domain) + "$")).test(name);
                    }) || this.config.partials.find(function(res) {
                        return name.includes(res.domain);
                    }));
                    if (page && page.enabled === false) {
                        return page;
                    }
                    var index = this.getByPage(page && page.pages, newValue);
                    var i = index || (page || {});
                    return i.enabled = i.enabled !== false, i;
                }
            }, {
                key : "toReload",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    return 0 === name.indexOf("http") && request.SITES_TO_RELOAD.some(function(B) {
                        return name.includes(B);
                    });
                }
            }]), process;
        }(Block.ConfigLoader);
        expectedNumberOfNonCommentArgs.Config = Config;
    }, {
        "./config-loader" : 174,
        "./defaults" : 176,
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/location" : 170,
        "lib/util" : 198
    }],
    174 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var reset = $("babel-runtime/regenerator");
        var __exports__ = Event(reset);
        var target = $("babel-runtime/helpers/classCallCheck");
        var targets = Event(target);
        var selector = $("babel-runtime/helpers/createClass");
        var elem = Event(selector);
        var type = $("babel-runtime/core-js/promise");
        var event = Event(type);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} opt_attributes
         * @param {(Element|string)} nodeLength
         * @param {Text} element
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, opt_attributes, nodeLength, element) {
            return new (nodeLength || (nodeLength = event["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(element.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} type
                 * @return {undefined}
                 */
                function callback(type) {
                    try {
                        done(element["throw"](type));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new nodeLength(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((element = element.apply(expectedNumberOfNonCommentArgs, opt_attributes || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var $window = $("./localforage");
        var collection = $("lib/request");
        var emptyJ = $("lib/config");
        var _this = $("lib/tracking");
        var $spy = $("./meta");
        var obj = $("./utils");
        var $src = $("./decorator");
        var dd = $("lib/profiler");
        /** @type {number} */
        var timedout = 6E4;
        /** @type {string} */
        var str = "Config missed";
        /** @type {string} */
        var msg = "Config malformed";
        var ConfigLoader = function() {
            /**
             * @param {?} elem
             * @return {undefined}
             */
            function restoreScript(elem) {
                (0, targets["default"])(this, restoreScript);
                this._prefs = elem;
            }
            return(0, elem["default"])(restoreScript, [{
                key : "init",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, __exports__["default"].mark(function end() {
                        var config;
                        return __exports__["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return dd.Profiler.start("pageConfig_init"), config = void 0, self.next = 4, this.isSkipConfig();
                                    case 4:
                                        if (!self.sent) {
                                            /** @type {number} */
                                            self.next = 8;
                                            break;
                                        }
                                        console.warn("Config: use default config in DEBUG mode (skipConfig=true)");
                                        /** @type {number} */
                                        self.next = 11;
                                        break;
                                    case 8:
                                        return self.next = 10, this.loadFromStorage();
                                    case 10:
                                        config = self.sent;
                                    case 11:
                                        return this.config = config ? config : {}, self.next = 14, (new $spy.Meta).load();
                                    case 14:
                                        return this.meta = self.sent, dd.Profiler.stop("pageConfig_init"), self.abrupt("return", this);
                                    case 17:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            }, {
                key : "isSkipConfig",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, __exports__["default"].mark(function end() {
                        return __exports__["default"].wrap(function(stream) {
                            for (;;) {
                                switch(stream.prev = stream.next) {
                                    case 0:
                                        if (stream.t0 = false, !stream.t0) {
                                            /** @type {number} */
                                            stream.next = 5;
                                            break;
                                        }
                                        return stream.next = 4, this._prefs.get("skipConfig");
                                    case 4:
                                        stream.t0 = stream.sent;
                                    case 5:
                                        return stream.abrupt("return", stream.t0);
                                    case 6:
                                        ;
                                    case "end":
                                        return stream.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            }, {
                key : "load",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, __exports__["default"].mark(function end() {
                        var result;
                        var n;
                        var i;
                        var sec;
                        return __exports__["default"].wrap(function(current) {
                            for (;;) {
                                switch(current.prev = current.next) {
                                    case 0:
                                        if (result = this.meta.config, n = result.date, i = result.interval, !(n + i > Date.now())) {
                                            /** @type {number} */
                                            current.next = 5;
                                            break;
                                        }
                                        return sec = (n + i - Date.now()) / 1E3 / 60, console.info("Config: next update in " + sec.toFixed(2) + " m"), current.abrupt("return");
                                    case 5:
                                        return console.info("Config: going to update config from CDN..."), current.abrupt("return", this.updateFromCDN());
                                    case 7:
                                        ;
                                    case "end":
                                        return current.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            }, {
                key : "updateFromCDN",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, __exports__["default"].mark(function next() {
                        var type;
                        var keys;
                        return __exports__["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return type = void 0, self.prev = 1, self.next = 4, collection.fetch(emptyJ.URLS.pageConfigUrl, {
                                            timeout : timedout
                                        });
                                    case 4:
                                        if (type = self.sent, obj.isValid(type)) {
                                            /** @type {number} */
                                            self.next = 7;
                                            break;
                                        }
                                        throw new Error(msg);;
                                    case 7:
                                        this.config = type;
                                        this.save(type);
                                        /** @type {number} */
                                        self.next = 17;
                                        break;
                                    case 11:
                                        /** @type {number} */
                                        self.prev = 11;
                                        self.t0 = self["catch"](1);
                                        _this.logger.pageConfigCDNError(self.t0.message);
                                        /** @type {string} */
                                        keys = "Config: can't get valid config - " + self.t0.message;
                                        console.warn(keys, type);
                                        this.saveOnError(keys);
                                    case 17:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, next, this, [[1, 11]]);
                    }));
                }
            }, {
                key : "loadFromStorage",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, __exports__["default"].mark(function next() {
                        var e;
                        return __exports__["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        return self.prev = 0, self.next = 3, $window.localforage.getItem("config");
                                    case 3:
                                        if (e = self.sent) {
                                            /** @type {number} */
                                            self.next = 6;
                                            break;
                                        }
                                        throw new Error(str);;
                                    case 6:
                                        if (obj.isValid(e)) {
                                            /** @type {number} */
                                            self.next = 8;
                                            break;
                                        }
                                        throw new Error(msg);;
                                    case 8:
                                        return console.info("Config: loaded from local storage successfully"), self.abrupt("return", e);
                                    case 12:
                                        return self.prev = 12, self.t0 = self["catch"](0), str === self.t0.message || _this.logger.pageConfigLocalStorageError(self.t0.message, self.t0.name), console.warn("Config: cannot get valid config from storage: " + self.t0), self.abrupt("return", void 0);
                                    case 17:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, next, this, [[0, 12]]);
                    }));
                }
            }, {
                key : "save",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    var interval = name.interval;
                    var protocolVersion = name.protocolVersion;
                    var ver = name.version;
                    $window.localforage.setItem("config", name);
                    this.fireVersionUpdate(ver, this.meta.config.version);
                    this.meta.set({
                        date : this.getCurrentTimestamp(),
                        status : "success",
                        interval : interval,
                        protocolVersion : protocolVersion,
                        version : ver
                    });
                    console.info("Config: new config saved to local storage successfully:", name.version, name);
                }
            }, {
                key : "saveOnError",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    var options = this.meta.config;
                    var interval = options.interval;
                    var protocolVersion = options.protocolVersion;
                    var version = options.version;
                    this.meta.set({
                        date : this.getCurrentTimestamp(),
                        status : "failed",
                        interval : interval,
                        protocolVersion : protocolVersion,
                        version : version,
                        info : name
                    });
                }
            }, {
                key : "fireVersionUpdate",
                /**
                 * @param {string} name
                 * @param {undefined} deepDataAndEvents
                 * @return {undefined}
                 */
                value : function(name, deepDataAndEvents) {
                    if (name) {
                        if (deepDataAndEvents !== name) {
                            _this.logger.pageConfigUpdated(deepDataAndEvents, name);
                        }
                    }
                }
            }, {
                key : "getCurrentTimestamp",
                /**
                 * @return {?}
                 */
                value : function() {
                    return Date.now();
                }
            }, {
                key : "config",
                /**
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {undefined}
                 */
                set : function(expectedNumberOfNonCommentArgs) {
                    expectedNumberOfNonCommentArgs = expectedNumberOfNonCommentArgs || {};
                    this._config = $src.decorateConfig(expectedNumberOfNonCommentArgs);
                },
                /**
                 * @return {?}
                 */
                get : function() {
                    return this._config;
                }
            }]), restoreScript;
        }();
        expectedNumberOfNonCommentArgs.ConfigLoader = ConfigLoader;
    }, {
        "./decorator" : 175,
        "./localforage" : 178,
        "./meta" : 179,
        "./utils" : 180,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/regenerator" : 35,
        "lib/config" : 167,
        "lib/profiler" : 181,
        "lib/request" : 182,
        "lib/tracking" : 192
    }],
    175 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function $(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {string} keepData
         * @return {?}
         */
        function get_mangled(keepData) {
            var pageConfig = lodash.merge({
                pageConfig : {}
            }, keepData);
            return pageConfig.pageConfig || (pageConfig.pageConfig = {}), pageConfig;
        }
        /**
         * @param {Object} element
         * @return {?}
         */
        function decorate(element) {
            return input.decorate(element);
        }
        var path = require("babel-runtime/helpers/defineProperty");
        var type = $(path);
        var nodes = require("babel-runtime/core-js/object/keys");
        var result = $(nodes);
        var selector = require("babel-runtime/core-js/object/assign");
        var elem = $(selector);
        var style = require("babel-runtime/helpers/classCallCheck");
        var target = $(style);
        var one = require("babel-runtime/helpers/createClass");
        var column = $(one);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var module = require("../config");
        var Block = require("./defaults");
        var assert = require("../util");
        var lodash = require("lodash");
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.deepCopyWithDefault = get_mangled;
        var input = function() {
            /**
             * @return {undefined}
             */
            function onTimeout() {
                (0, target["default"])(this, onTimeout);
            }
            return(0, column["default"])(onTimeout, null, [{
                key : "decorate",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    return name = name || {}, name = this.filterByVersion(name), name = this.withDefault(name), name = this.parseBooleans(name), name = this.parseBrowserValues(name), name = this.filterInvalidPageRegexp(name), name = this.collectSubdomains(name), name = this.collectPartials(name);
                }
            }, {
                key : "withDefault",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    name = get_mangled(name);
                    var obj1 = Block.PAGE_CONFIG && Block.PAGE_CONFIG.pageConfig || {};
                    if (!Block.OVERRIDE_PAGE_CONFIG) {
                        ({});
                    }
                    return name.pageConfig = lodash.merge({}, obj1, name.pageConfig), name;
                }
            }, {
                key : "filterByVersion",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    var gotErr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : module.getVersion();
                    name = get_mangled(name);
                    var ret = name.pageConfig;
                    return name.pageConfig = (0, result["default"])(ret).filter(function(i) {
                        var cfg = ret[i];
                        var ver = cfg.version;
                        return!ver || ("*" === ver || 1 !== assert.versionComparator(gotErr, ver));
                    }).reduce(function(deepDataAndEvents, $conditional) {
                        return(0, elem["default"])({}, deepDataAndEvents, (0, type["default"])({}, $conditional, name.pageConfig[$conditional]));
                    }, {}), name;
                }
            }, {
                key : "parseBooleans",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    function array(value) {
                        return!(value === false || "false" === value);
                    }
                    /**
                     * @param {?} arg
                     * @return {?}
                     */
                    function $(arg) {
                        return!!arg && array(arg);
                    }
                    name = get_mangled(name);
                    var state = name.pageConfig;
                    return(0, result["default"])(state).forEach(function(n) {
                        if (!state[n]) {
                            state[n] = {};
                        }
                        var o = state[n];
                        o.enabled = array(o.enabled);
                        o.matchInclusions = $(o.matchInclusions);
                        o.matchSubdomains = $(o.matchSubdomains);
                        if (o.pages) {
                            (0, result["default"])(o.pages).forEach(function(i) {
                                o.pages[i].enabled = array(o.pages[i].enabled);
                            });
                        }
                    }), name;
                }
            }, {
                key : "parseBrowserValues",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    var core_rnotwhite = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : assert.getBrowser();
                    name = get_mangled(name);
                    var commands = name.pageConfig;
                    return(0, result["default"])(commands).map(function(name) {
                        var options = commands[name] && commands[name].disabledBrowsers;
                        if (options) {
                            if (options.includes(core_rnotwhite)) {
                                /** @type {boolean} */
                                commands[name].enabled = false;
                            }
                        }
                    }), name;
                }
            }, {
                key : "filterInvalidPageRegexp",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    name = get_mangled(name);
                    var proto = name.pageConfig;
                    return(0, result["default"])(proto).forEach(function(fnName) {
                        var fn = proto[fnName];
                        if (fn.pages) {
                            fn.pages = (0, result["default"])(fn.pages).filter(function(punctuation) {
                                try {
                                    return new RegExp(punctuation);
                                } catch (e) {
                                    return false;
                                }
                            }).reduce(function(deepDataAndEvents, key) {
                                return(0, elem["default"])({}, deepDataAndEvents, (0, type["default"])({}, key, fn.pages[key]));
                            }, {});
                        }
                    }), name;
                }
            }, {
                key : "collectSubdomains",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    name = get_mangled(name);
                    var ret = name.pageConfig;
                    /** @type {Array} */
                    name.subdomains = [];
                    try {
                        name.subdomains = (0, result["default"])(ret).filter(function(fnName) {
                            return ret[fnName].matchSubdomains;
                        }).map(function(lang) {
                            return(0, elem["default"])({
                                domain : lang
                            }, ret[lang]);
                        });
                    } catch (err) {
                        console.warn("Cannot collect subdomains from config");
                    }
                    return name;
                }
            }, {
                key : "collectPartials",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    name = get_mangled(name);
                    var ret = name.pageConfig;
                    /** @type {Array} */
                    name.partials = [];
                    try {
                        name.partials = (0, result["default"])(ret).filter(function(fnName) {
                            return ret[fnName].matchInclusions;
                        }).map(function(lang) {
                            return(0, elem["default"])({
                                domain : lang
                            }, ret[lang]);
                        });
                    } catch (err) {
                        console.warn("Cannot collect partials from config");
                    }
                    return name;
                }
            }]), onTimeout;
        }();
        expectedNumberOfNonCommentArgs.RawConfigDecorator = input;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.decorateConfig = decorate;
    }, {
        "../config" : 167,
        "../util" : 198,
        "./defaults" : 176,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/defineProperty" : 29,
        lodash : "lodash"
    }],
    176 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var tpl;
        var type = require("babel-runtime/helpers/defineProperty");
        var event = Event(type);
        var selector = require("babel-runtime/helpers/toConsumableArray");
        var elem = Event(selector);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var util = require("lodash");
        var rep = require("lib/config");
        /** @type {string} */
        expectedNumberOfNonCommentArgs.PROTOCOL_VERSION = "1.0";
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.SITES_TO_RELOAD = ["inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com"];
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.FACEBOOK_SITES = ["facebook.com", "messenger.com", "work.fb.com", "business.facebook.com"];
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.HTML_GHOST_SITES = ["twitter.com"].concat((0, elem["default"])(expectedNumberOfNonCommentArgs.FACEBOOK_SITES));
        expectedNumberOfNonCommentArgs.CUSTOM_UNSUPPORTED_MESSAGES = {
            "drive.google.com" : {
                title : "Google Drive",
                message : 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + rep.URLS.app + '">Grammarly Editor</a>.'
            },
            "docs.google.com" : {
                title : "Google Drive",
                message : 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + rep.URLS.app + '">Grammarly Editor</a>.'
            },
            "chrome.google.com" : {
                title : "Web Store"
            }
        };
        /** @type {number} */
        var PAGE_CONFIG_DEFAULT_INTERVAL = 18E5;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.PAGE_CONFIG_DEFAULT_INTERVAL = PAGE_CONFIG_DEFAULT_INTERVAL;
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.PAGE_CONFIG_UPDATE_INTERVALS = [6E5, expectedNumberOfNonCommentArgs.PAGE_CONFIG_DEFAULT_INTERVAL, 36E5, 108E5, 432E5, 864E5, 31536E6];
        expectedNumberOfNonCommentArgs.OVERRIDE_PAGE_CONFIG = {};
        expectedNumberOfNonCommentArgs.PAGE_CONFIG_INTERNAL = (tpl = {
            version : {
                enabled : false,
                servicePage : true
            },
            extensions : {
                enabled : false,
                servicePage : true
            },
            settings : {
                enabled : false,
                servicePage : true
            },
            "com.safari.grammarlyspellcheckergrammarchecker" : {
                enabled : false,
                matchInclusions : true,
                servicePage : true
            }
        }, (0, event["default"])(tpl, "app." + rep.GRAMMARLY_DOMAIN, {
            enabled : false,
            grammarlyEditor : true
        }), (0, event["default"])(tpl, "linkedin.com", {
            pages : {
                "/messaging" : {
                    afterReplaceEvents : ["input"]
                }
            }
        }), (0, event["default"])(tpl, "plus.google.com", {
            afterReplaceEvents : ["keyup"],
            minFieldHeight : 0,
            minFieldWidth : 0
        }), (0, event["default"])(tpl, "facebook.com", {
            minFieldHeight : 0,
            fields : [{
                name : "caption_text"
            }]
        }), (0, event["default"])(tpl, "mail.google.com", {
            fields : [{
                name : "to"
            }, {
                name : "cc"
            }, {
                name : "bcc"
            }, {
                className : "vO"
            }],
            subframes : false
        }), (0, event["default"])(tpl, "drive.google.com", {
            track : true
        }), (0, event["default"])(tpl, "docs.google.com", {
            track : true
        }), (0, event["default"])(tpl, "app.asana.com", {
            fields : [{
                className : "task-row-text-input"
            }]
        }), (0, event["default"])(tpl, "tumblr.com", {
            fields : [{
                attr : ["aria-label", "Post title"]
            }, {
                attr : ["aria-label", "Type or paste a URL"]
            }]
        }), (0, event["default"])(tpl, "chrome.google.com", {
            dontShowDisabledBadge : true
        }), (0, event["default"])(tpl, "airbnb.com", {
            fields : [{
                attr : ["id", "question"]
            }]
        }), tpl);
        var sourceProperty = {
            "hootsuite.com" : {
                enabled : false
            },
            "chrome.google.com" : {
                enabled : false
            },
            "facebook.com" : {
                enabled : true,
                pages : {
                    ".*/notes" : {
                        enabled : false
                    }
                }
            },
            "onedrive.live.com" : {
                enabled : false
            },
            "docs.com" : {
                enabled : false
            },
            "sp.docs.com" : {
                enabled : false
            },
            "docs.google.com" : {
                enabled : false
            },
            "drive.google.com" : {
                enabled : false
            },
            "texteditor.nsspot.net" : {
                enabled : false
            },
            "jsbin.com" : {
                enabled : false
            },
            "jsfiddle.net" : {
                enabled : false
            },
            "quora.com" : {
                enabled : false
            },
            "paper.dropbox.com" : {
                enabled : false
            },
            "mail.live.com" : {
                enabled : false,
                matchInclusions : true
            },
            "imperavi.com" : {
                enabled : false
            },
            "usecanvas.com" : {
                enabled : false
            }
        };
        expectedNumberOfNonCommentArgs.PAGE_CONFIG = {
            pageConfig : util.merge({}, sourceProperty, expectedNumberOfNonCommentArgs.PAGE_CONFIG_INTERNAL)
        };
    }, {
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/helpers/toConsumableArray" : 33,
        "lib/config" : 167,
        lodash : "lodash"
    }],
    177 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var jasmine = require("./config-base");
        var Block = require("universal/bg/prefs");
        var nodes = require("extension-api");
        var name = new Block.PrefsImpl(nodes.getGlobalExtensionApi().preferences);
        expectedNumberOfNonCommentArgs.pageConfig = new jasmine.Config(name);
    }, {
        "./config-base" : 173,
        "extension-api" : 159,
        "universal/bg/prefs" : 204
    }],
    178 : [function(proceed, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        var value = proceed("babel-runtime/core-js/promise");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /** @type {string} */
        var errorName = "Grammarly";
        /** @type {number} */
        var CORDOVA_JS_BUILD_LABEL = 1;
        /** @type {string} */
        var publicInterfaceName = "configuration";
        var client = void 0;
        try {
            client = proceed("localforage");
            client.config({
                name : errorName,
                version : CORDOVA_JS_BUILD_LABEL,
                size : 4194304,
                storeName : publicInterfaceName
            });
        } catch (key) {
            console.error("Fallback to memory storage", key);
            var $cookies = {};
            client = {
                /**
                 * @param {string} key
                 * @return {?}
                 */
                getItem : function(key) {
                    return iterator["default"].resolve($cookies[key]);
                },
                /**
                 * @param {string} key
                 * @param {Object} expectedNumberOfNonCommentArgs
                 * @return {?}
                 */
                setItem : function(key, expectedNumberOfNonCommentArgs) {
                    return $cookies[key] = expectedNumberOfNonCommentArgs, iterator["default"].resolve(expectedNumberOfNonCommentArgs);
                },
                /**
                 * @return {undefined}
                 */
                clear : function() {
                    $cookies = {};
                    iterator["default"].resolve(true);
                }
            };
        }
        expectedNumberOfNonCommentArgs.localforage = client;
    }, {
        "babel-runtime/core-js/promise" : 24,
        localforage : "localforage"
    }],
    179 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function create(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var type = $("babel-runtime/regenerator");
        var socket = create(type);
        var html = $("babel-runtime/helpers/classCallCheck");
        var m = create(html);
        var selector = $("babel-runtime/helpers/createClass");
        var elem = create(selector);
        var obj = $("babel-runtime/core-js/promise");
        var keys = create(obj);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} path
         * @param {Text} self
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, args, path, self) {
            return new (path || (path = keys["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(self.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function callback(e) {
                    try {
                        done(self["throw"](e));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new path(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var $window = $("./localforage");
        var me = $("./utils");
        /** @type {string} */
        var storageKey = "lastConfigUpdate";
        var Meta = function() {
            /**
             * @return {undefined}
             */
            function onTimeout() {
                (0, m["default"])(this, onTimeout);
            }
            return(0, elem["default"])(onTimeout, [{
                key : "load",
                /**
                 * @return {?}
                 */
                value : function() {
                    return init(this, void 0, void 0, socket["default"].mark(function end() {
                        var expectedNumberOfNonCommentArgs;
                        return socket["default"].wrap(function(stream) {
                            for (;;) {
                                switch(stream.prev = stream.next) {
                                    case 0:
                                        return stream.next = 2, $window.localforage.getItem(storageKey);
                                    case 2:
                                        return expectedNumberOfNonCommentArgs = stream.sent, this.set(expectedNumberOfNonCommentArgs), stream.abrupt("return", this);
                                    case 5:
                                        ;
                                    case "end":
                                        return stream.stop();
                                }
                            }
                        }, end, this);
                    }));
                }
            }, {
                key : "set",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    var self = name || {};
                    var protocolVersion = self.protocolVersion;
                    var v = self.version;
                    var status = self.status;
                    var info = self.info;
                    var d = self.date;
                    var i = self.interval;
                    return this._meta = {
                        date : Number(d) || 0,
                        interval : me.getInterval(Number(i)),
                        protocolVersion : protocolVersion,
                        version : v,
                        status : status,
                        info : info
                    }, $window.localforage.setItem(storageKey, this._meta);
                }
            }, {
                key : "config",
                /**
                 * @return {?}
                 */
                get : function() {
                    return this._meta;
                }
            }]), onTimeout;
        }();
        expectedNumberOfNonCommentArgs.Meta = Meta;
    }, {
        "./localforage" : 178,
        "./utils" : 180,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/regenerator" : 35
    }],
    180 : [function(parse, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} options
         * @return {?}
         */
        function readFile(options) {
            return options && options.__esModule ? options : {
                "default" : options
            };
        }
        /**
         * @param {Function} type
         * @return {?}
         */
        function isValid(type) {
            if (type && (type.pageConfig && ((0, input["default"])(type).length && ((0, input["default"])(type.pageConfig).length && (!type.protocolVersion || type.protocolVersion === obj.PROTOCOL_VERSION))))) {
                return true;
            }
        }
        /**
         * @param {number} until
         * @return {?}
         */
        function dir(until) {
            return obj.PAGE_CONFIG_UPDATE_INTERVALS.includes(until) ? until : obj.PAGE_CONFIG_DEFAULT_INTERVAL;
        }
        var url = parse("babel-runtime/core-js/object/keys");
        var input = readFile(url);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var obj = parse("./defaults");
        /** @type {function (Function): ?} */
        expectedNumberOfNonCommentArgs.isValid = isValid;
        /** @type {function (number): ?} */
        expectedNumberOfNonCommentArgs.getInterval = dir;
    }, {
        "./defaults" : 176,
        "babel-runtime/core-js/object/keys" : 22
    }],
    181 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} selector
         * @return {?}
         */
        function $(selector) {
            return selector && selector.__esModule ? selector : {
                "default" : selector
            };
        }
        var html = require("babel-runtime/regenerator");
        var h = $(html);
        var selector = require("babel-runtime/helpers/classCallCheck");
        var elem = $(selector);
        var nodes = require("babel-runtime/helpers/createClass");
        var result = $(nodes);
        var target = require("babel-runtime/core-js/promise");
        var type = $(target);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} opt_attributes
         * @param {(Element|string)} nodeLength
         * @param {Text} element
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, opt_attributes, nodeLength, element) {
            return new (nodeLength || (nodeLength = type["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(element.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} type
                 * @return {undefined}
                 */
                function callback(type) {
                    try {
                        done(element["throw"](type));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new nodeLength(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((element = element.apply(expectedNumberOfNonCommentArgs, opt_attributes || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var element = require("lib/timers");
        var common = require("lib/tracking");
        var Profiler = function() {
            /**
             * @return {undefined}
             */
            function initialize() {
                var cb = this;
                (0, elem["default"])(this, initialize);
                this.timings = {};
                /**
                 * @param {string} eventName
                 * @return {?}
                 */
                this.track = function(eventName) {
                    /** @type {number} */
                    var len = arguments.length;
                    /** @type {Array} */
                    var args = Array(len > 1 ? len - 1 : 0);
                    /** @type {number} */
                    var i = 1;
                    for (;i < len;i++) {
                        args[i - 1] = arguments[i];
                    }
                    return init(cb, void 0, void 0, h["default"].mark(function end() {
                        return h["default"].wrap(function(current) {
                            for (;;) {
                                switch(current.prev = current.next) {
                                    case 0:
                                        return current.abrupt("return", this._track.apply(this, [false, eventName].concat(args)));
                                    case 1:
                                        ;
                                    case "end":
                                        return current.stop();
                                }
                            }
                        }, end, this);
                    }));
                };
                /**
                 * @param {?} c
                 * @return {?}
                 */
                this.trackAsync = function(c) {
                    /** @type {number} */
                    var len = arguments.length;
                    /** @type {Array} */
                    var args = Array(len > 1 ? len - 1 : 0);
                    /** @type {number} */
                    var i = 1;
                    for (;i < len;i++) {
                        args[i - 1] = arguments[i];
                    }
                    return init(cb, void 0, void 0, h["default"].mark(function end() {
                        return h["default"].wrap(function(current) {
                            for (;;) {
                                switch(current.prev = current.next) {
                                    case 0:
                                        return current.abrupt("return", this._track.apply(this, [true, c].concat(args)));
                                    case 1:
                                        ;
                                    case "end":
                                        return current.stop();
                                }
                            }
                        }, end, this);
                    }));
                };
                /**
                 * @param {boolean} requested
                 * @param {Function} n
                 * @return {?}
                 */
                this._track = function(requested, n) {
                    /** @type {number} */
                    var len = arguments.length;
                    /** @type {Array} */
                    var a = Array(len > 2 ? len - 2 : 0);
                    /** @type {number} */
                    var i = 2;
                    for (;i < len;i++) {
                        a[i - 2] = arguments[i];
                    }
                    return init(cb, void 0, void 0, h["default"].mark(function initialize() {
                        var o;
                        return h["default"].wrap(function(self) {
                            for (;;) {
                                switch(self.prev = self.next) {
                                    case 0:
                                        if (o = n.name + (requested ? "__sync" : ""), element.timers.start(o), self.prev = 2, !requested) {
                                            /** @type {number} */
                                            self.next = 8;
                                            break;
                                        }
                                        return self.next = 6, n.apply(void 0, a);
                                    case 6:
                                        /** @type {number} */
                                        self.next = 9;
                                        break;
                                    case 8:
                                        n.apply(void 0, a);
                                    case 9:
                                        /** @type {number} */
                                        self.next = 14;
                                        break;
                                    case 11:
                                        throw self.prev = 11, self.t0 = self["catch"](2), self.t0;;
                                    case 14:
                                        return self.prev = 14, this.timings[o] = element.timers.stop(o), self.finish(14);
                                    case 17:
                                        ;
                                    case "end":
                                        return self.stop();
                                }
                            }
                        }, initialize, this, [[2, 11, 14, 17]]);
                    }));
                };
            }
            return(0, result["default"])(initialize, [{
                key : "start",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    element.timers.start(name);
                }
            }, {
                key : "stop",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this.timings[name] = element.timers.stop(name);
                }
            }], [{
                key : "start",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    element.timers.start(name);
                }
            }, {
                key : "stop",
                /**
                 * @param {string} name
                 * @return {?}
                 */
                value : function(name) {
                    var otherKey = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3E4;
                    var key = element.timers.stop(name);
                    return key > otherKey && (console.warn("profiler_" + name + "_time_exceeded", key), "pageConfig_init" === name && common.logger.tooLongPageConfigInit(key), "updateUser" === name && common.logger.tooLongUserUpdateTime(key)), key;
                }
            }]), initialize;
        }();
        expectedNumberOfNonCommentArgs.Profiler = Profiler;
    }, {
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/regenerator" : 35,
        "lib/timers" : 186,
        "lib/tracking" : 192
    }],
    182 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {Object} req
         * @return {?}
         */
        function request(req) {
            if (req.data && ((req.query || "post" !== req.method) && (req.url += "?" + log(req.data))), req.data && ("post" === req.method && (!req.query && !req.body))) {
                try {
                    req.body = (0, iterator["default"])(req.data);
                } catch (type) {
                    req.body = {};
                    console.warn(type);
                }
                req.headers = req.headers || {};
                req.headers["Content-Type"] = req.headers["Content-Type"] || "application/json";
                delete req.data;
            }
            return req.credentials = "include", req;
        }
        /**
         * @param {?} query
         * @return {?}
         */
        function fetch(query) {
            var args = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return args.url = query, request(args), data.isBg() || Block.isTestsMode() ? resolve(args) : helper.promiseBackground("fetch", args).then(function(result) {
                if (_.isObject(result) && result.error) {
                    throw new Error(result.error);
                }
                return result;
            });
        }
        /**
         * @param {Object} options
         * @return {?}
         */
        function resolve(options) {
            /**
             * @param {Object} response
             * @return {?}
             */
            function next(response) {
                return response.ok ? response[options.isText ? "text" : "json"]() : response.text().then(function(reqData) {
                    throw{
                        name : "RequestError",
                        body : reqData,
                        statusCode : response.status,
                        message : response.statusText
                    };
                });
            }
            var url = options.url;
            return delete options.url, url ? p["default"].race([window.fetch(url, options).then(next).then(function(data) {
                if ("string" !== typeof data && (data && data.error)) {
                    throw new Error(data.error);
                }
                return data;
            }), data.delay(options.timeout || utf8).then(function() {
                throw new Error("Fetch request to " + url + " rejected by timeout");
            })]) : p["default"].reject(new Error("Url is not defined in fetch request"));
        }
        /**
         * @param {Object} obj
         * @return {?}
         */
        function log(obj) {
            /** @type {string} */
            var out = "";
            /**
             * @param {string} name
             * @return {undefined}
             */
            var serialize = function(name) {
                if (Array.isArray(obj[name])) {
                    if (obj[name].length) {
                        var k = obj[name].map(function(value) {
                            return name + "=" + value;
                        }).join("&");
                        out += "" + (out.length ? "&" : "") + k;
                    }
                } else {
                    out += "" + (out.length ? "&" : "") + name + "=" + encodeURIComponent(obj[name]);
                }
            };
            var i;
            for (i in obj) {
                serialize(i);
            }
            return out;
        }
        var prop = require("babel-runtime/core-js/promise");
        var p = lookupIterator(prop);
        var value = require("babel-runtime/core-js/json/stringify");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var _ = require("lodash");
        var data = require("./util");
        var Block = require("./config");
        var helper = require("./message");
        /** @type {number} */
        var utf8 = 1E4;
        if (data.isBg()) {
            helper.on("fetch", function(unknown, done) {
                return resolve(unknown).then(done, function(err) {
                    return done({
                        error : err.message
                    });
                });
            });
        }
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.transformOptions = request;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.fetch = fetch;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.paramStr = log;
    }, {
        "./config" : 167,
        "./message" : 171,
        "./util" : 198,
        "babel-runtime/core-js/json/stringify" : 16,
        "babel-runtime/core-js/promise" : 24,
        lodash : "lodash"
    }],
    183 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function parse(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {Object} child
         * @param {Function} func
         * @return {?}
         */
        function exports(child, func) {
            /**
             * @return {undefined}
             */
            function f() {
                var elem = child.getState();
                if (!_.isEmpty(elem)) {
                    if (!_.isEqual(this_date_components, elem)) {
                        this_date_components = elem;
                        func(elem);
                    }
                }
            }
            var this_date_components = void 0;
            return helper.asyncCall(f), child.subscribe(f);
        }
        var selector = require("babel-runtime/helpers/defineProperty");
        var elem = parse(selector);
        var url = require("babel-runtime/core-js/object/assign");
        var result = parse(url);
        var string = require("babel-runtime/core-js/object/keys");
        var ast = parse(string);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var _ = require("lodash");
        var helper = require("lib/util");
        /** @type {function (Object, Function): ?} */
        expectedNumberOfNonCommentArgs.observeStore = exports;
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {?} cb
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.bindActions = function(expectedNumberOfNonCommentArgs, cb) {
            return(0, ast["default"])(expectedNumberOfNonCommentArgs).filter(function(timeoutKey) {
                return expectedNumberOfNonCommentArgs[timeoutKey];
            }).reduce(function(deepDataAndEvents, method) {
                return(0, result["default"])(deepDataAndEvents, (0, elem["default"])({}, method, function() {
                    var args = expectedNumberOfNonCommentArgs[method].apply(expectedNumberOfNonCommentArgs, arguments);
                    var sync = "undefined" === typeof args.sync || args.sync;
                    return cb((0, result["default"])({}, args, {
                        sync : sync
                    }));
                }));
            }, {});
        };
    }, {
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/helpers/defineProperty" : 29,
        "lib/util" : 198,
        lodash : "lodash"
    }],
    184 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {Function} now
         * @return {?}
         */
        function create(now) {
            var _params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var callback = arguments[2];
            /**
             * @return {?}
             */
            var init = function() {
                var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : event;
                var test = arguments[1];
                var d = data.page || (data.config || {});
                var domain = d.domain;
                return test.sync && router.emitBackground("dispatch", (0, iterator["default"])({}, test, {
                    domain : domain
                })), test.type === type ? (0, iterator["default"])({}, data, test.data) : callback ? callback(data, test) : data;
            };
            var that = ret.createStore(init, {}, ret.applyMiddleware(rreturn));
            var actions = self.bindActions((0, iterator["default"])({}, Block.pureActions, _params), that.dispatch);
            return router.on("state", function(task) {
                nodes.asyncCall(function() {
                    return that.dispatch({
                        type : type,
                        data : task
                    });
                }, 0);
            }), self.observeStore(that, now), {
                store : that,
                actions : actions
            };
        }
        var value = require("babel-runtime/core-js/object/assign");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var getActual = require("redux-logger");
        var ret = require("redux");
        var router = require("lib/message");
        var Block = require("universal/bg/store");
        var self = require("./helpers");
        var nodes = require("../util");
        var rreturn = getActual({
            level : "debug",
            /**
             * @return {?}
             */
            collapsed : function() {
                return true;
            },
            /**
             * @return {?}
             */
            predicate : function() {
                return false;
            }
        });
        /** @type {string} */
        var type = "store/SYNC";
        var event = {
            page : {},
            connection : {}
        };
        /** @type {function (Function): ?} */
        expectedNumberOfNonCommentArgs.createMirrorStore = create;
    }, {
        "../util" : 198,
        "./helpers" : 183,
        "babel-runtime/core-js/object/assign" : 17,
        "lib/message" : 171,
        redux : "redux",
        "redux-logger" : "redux-logger",
        "universal/bg/store" : 214
    }],
    185 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} node
         * @return {?}
         */
        function walk(node) {
            return node && node.__esModule ? node : {
                "default" : node
            };
        }
        /**
         * @return {undefined}
         */
        function create() {
            /**
             * @param {string} type
             * @return {undefined}
             */
            function Class(type) {
                self.listen(document, type, function(element) {
                    var length = element.value;
                    utils.emitBackground(type, length);
                });
            }
            /**
             * @param {?} cl
             * @return {?}
             */
            function stringify(cl) {
                /** @type {Array} */
                var numbers = [];
                return(0, result["default"])(cl, function(dataAndEvents, i) {
                    if ("object" === ("undefined" === typeof i ? "undefined" : (0, type["default"])(i)) && null !== i) {
                        if (numbers.indexOf(i) !== -1) {
                            return;
                        }
                        numbers.push(i);
                    }
                    return i;
                });
            }
            /**
             * @return {undefined}
             */
            function which() {
                self.emitDomEvent("console-log", stringify(Block.flushLog()));
            }
            /**
             * @return {undefined}
             */
            function scripts() {
                utils.emitBackground("get-tracker-log", {}, function(funcToCall) {
                    return self.emitDomEvent("tracker-log", funcToCall);
                });
            }
            /**
             * @return {undefined}
             */
            function functionStub() {
                utils.emitBackground("get-capi-log", {}, function(funcToCall) {
                    return self.emitDomEvent("capi-log", funcToCall);
                });
            }
            /**
             * @return {undefined}
             */
            function method() {
                utils.emitBackground("get-extid", {}, function(funcToCall) {
                    return self.emitDomEvent("extid", funcToCall);
                });
            }
            /**
             * @return {undefined}
             */
            function elems() {
                utils.emitBackground("get-localforage", {}, function(funcToCall) {
                    return self.emitDomEvent("localforage", funcToCall);
                });
            }
            /**
             * @param {Object} field
             * @return {undefined}
             */
            function callback(field) {
                utils.emitBackground("set-localforage", {
                    key : field.key,
                    value : field.value
                }, function(funcToCall) {
                    return self.emitDomEvent("localforage", funcToCall);
                });
            }
            /**
             * @param {Object} type
             * @return {undefined}
             */
            function prop(type) {
                var key = type.key;
                utils.emitBackground("get-pref", {
                    key : key
                }, function(x) {
                    return self.emitDomEvent("pref", {
                        key : key,
                        value : x
                    });
                });
            }
            /**
             * @param {Object} property
             * @return {undefined}
             */
            function result(property) {
                var name = property.key;
                var value = property.value;
                utils.emitBackground("set-pref", {
                    key : name,
                    value : value
                });
            }
            /**
             * @return {undefined}
             */
            function func() {
                utils.emitBackground("get-ff-uuid", {}, function(funcToCall) {
                    return self.emitDomEvent("ff-uuid", funcToCall);
                });
            }
            ["bg-reload", "reset", "qa-relogin", "disable-auth", "enable-auth", "disable-defs", "enable-defs", "disable-domain", "enable-domain", "uninstall", "set-popup-url", "set-premium-user", "set-fake-capi", "run-fake-capi", "disable-send-state-to-tabs", "enable-send-state-to-tabs"].forEach(Class);
            self.listen(document, "get-extid", method);
            self.listen(document, "get-ff-uuid", func);
            self.listen(document, "get-capi-log", functionStub);
            self.listen(document, "get-tracker-log", scripts);
            self.listen(document, "get-console-log", which);
            self.listen(document, "get-localforage", elems);
            self.listen(document, "set-localforage", callback);
            self.listen(document, "get-pref", prop);
            self.listen(document, "set-prefs", result);
        }
        var tree = require("babel-runtime/helpers/typeof");
        var type = walk(tree);
        var nodes = require("babel-runtime/core-js/json/stringify");
        var result = walk(nodes);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var self = require("./dom");
        var utils = require("./message");
        var Block = require("./console");
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.api = create;
    }, {
        "./console" : 168,
        "./dom" : 169,
        "./message" : 171,
        "babel-runtime/core-js/json/stringify" : 16,
        "babel-runtime/helpers/typeof" : 34
    }],
    186 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var cache = {};
        expectedNumberOfNonCommentArgs.timers = {
            /**
             * @param {string} label
             * @return {undefined}
             */
            start : function(label) {
                /** @type {number} */
                cache[label] = Date.now();
            },
            /**
             * @param {string} label
             * @return {?}
             */
            stop : function(label) {
                var $label = this.passed(label);
                return delete cache[label], $label;
            },
            /**
             * @param {?} id
             * @return {?}
             */
            passed : function(id) {
                return id && cache[id] ? Date.now() - cache[id] : 0;
            }
        };
    }, {}],
    187 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} context
         * @return {?}
         */
        function getAll(context) {
            return context && context.__esModule ? context : {
                "default" : context
            };
        }
        /**
         * @return {?}
         */
        function cb() {
            var value = window.fetch.bind(window);
            var log = Block.LoggingImpl.DefaultLogAppender.createRootLogger("gnar", Block.Logging.LogLevel.INFO, new Block.LoggingImpl.GetFelogClient(defaults.URLS.newFelog, defaults.appName, defaults.getVersion(), defaults.ENV, value));
            var text = Block.TimeSeriesImpl.MetricsStorage.createRoot("gnar", defaults.URLS.newFelog, value);
            var tokenizer = new $G.BackendStorage(value, module.GNAR.url);
            var ContainerIdManager = new $G.ChromeCookieStorage(module.GNAR.url, module.GNAR.domain);
            var webExtensionsCookieStorage = new $G.WebExtensionsCookieStorage(module.GNAR.url, module.GNAR.domain);
            var cidManager = new $G.ContainerIdManager(d.isChrome() ? ContainerIdManager : d.isFF() ? webExtensionsCookieStorage : tokenizer, [new $G.CookieStorage(module.GNAR.domain), new $G.LocalStorage, new $G.MemoryStorage], log.getLogger("containerId"), text.getCounter("containerId"), d.isChrome() ? 1E3 : 5E3);
            return new $G.GnarClientImpl(module.GNAR.url, defaults.gnarAppName, module.getVersion(), value, cidManager, log, text, true);
        }
        /**
         * @return {?}
         */
        function init() {
            return setup(this, void 0, void 0, __exports__["default"].mark(function end() {
                return __exports__["default"].wrap(function(current) {
                    for (;;) {
                        switch(current.prev = current.next) {
                            case 0:
                                try {
                                    config.tracker().gnar = cb();
                                } catch (ex) {
                                    common.logger.gnarClientInitFail(ex && ex.message);
                                }
                                ;
                            case 1:
                                ;
                            case "end":
                                return current.stop();
                        }
                    }
                }, end, this);
            }));
        }
        /**
         * @param {?} collection
         * @return {undefined}
         */
        function process(collection) {
            /**
             * @param {string} callback
             * @param {?} thisObj
             * @return {undefined}
             */
            function filter(callback, thisObj) {
                if (thisObj) {
                    if (callback) {
                        makeIterator(callback, null);
                        makeIterator(callback, thisObj, extendedOptionsWithExpiresDate);
                    }
                }
            }
            var e = collection.dapi;
            var domain = url.getDomain();
            var extendedOptionsWithExpiresDate = {
                path : "/",
                domain : domain,
                expires : new Date((new Date).setFullYear((new Date).getFullYear() + 1))
            };
            filter("__fngrprnt__", e);
        }
        var clone = require("babel-runtime/regenerator");
        var __exports__ = getAll(clone);
        var nodes = require("babel-runtime/core-js/promise");
        var result = getAll(nodes);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} opt_attributes
         * @param {Text} self
         * @return {?}
         */
        var setup = function(expectedNumberOfNonCommentArgs, args, opt_attributes, self) {
            return new (opt_attributes || (opt_attributes = result["default"]))(function(iterator, fail) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(self.next(optgroup));
                    } catch (ex) {
                        fail(ex);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function ok(e) {
                    try {
                        done(self["throw"](e));
                    } catch (ex) {
                        fail(ex);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new opt_attributes(function(iterator) {
                            iterator(x.value);
                        })).then(handler, ok);
                    }
                }
                done((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var makeIterator = require("cookie");
        var url = require("../location");
        var defaults = require("../config");
        var d = require("../util");
        var module = require("../config");
        var config = require("./tracker");
        var common = require("./logger");
        var $G = require("@grammarly-npm/gnarclientweb");
        var Block = require("@grammarly-npm/telemetry.ts");
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.init = init;
        /** @type {function (?): undefined} */
        expectedNumberOfNonCommentArgs.processCookiesFromGrammarly = process;
        /**
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.getContainerIdOrUndefined = function() {
            return setup(void 0, void 0, void 0, __exports__["default"].mark(function end() {
                return __exports__["default"].wrap(function(stream) {
                    for (;;) {
                        switch(stream.prev = stream.next) {
                            case 0:
                                return stream.prev = 0, stream.next = 3, config.tracker().gnar.getContainerId();
                            case 3:
                                return stream.abrupt("return", stream.sent);
                            case 6:
                                return stream.prev = 6, stream.t0 = stream["catch"](0), stream.abrupt("return", void 0);
                            case 9:
                                ;
                            case "end":
                                return stream.stop();
                        }
                    }
                }, end, this, [[0, 6]]);
            }));
        };
    }, {
        "../config" : 167,
        "../location" : 170,
        "../util" : 198,
        "./logger" : 193,
        "./tracker" : 196,
        "@grammarly-npm/gnarclientweb" : 3,
        "@grammarly-npm/telemetry.ts" : 6,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/regenerator" : 35,
        cookie : "cookie"
    }],
    188 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function h(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {undefined}
         */
        function parse(expectedNumberOfNonCommentArgs) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var result = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                result[i - 1] = arguments[i];
            }
            /**
             * @param {string} name
             * @return {undefined}
             */
            var callback = function(name) {
                console.warn("tracking call " + expectedNumberOfNonCommentArgs + " failed, reason: ", name);
            };
            if (Block.isBg()) {
                Block.asyncCall(function() {
                    var _ref1;
                    try {
                        switch(send(expectedNumberOfNonCommentArgs, result), expectedNumberOfNonCommentArgs) {
                            case options.CALL_HANDLER_ID:
                                var message = result[0];
                                /** @type {Array.<?>} */
                                var otherArgs = result.slice(1);
                                (_ref1 = options.methods)[message].apply(_ref1, (0, conf["default"])(otherArgs));
                                break;
                            default:
                                check(expectedNumberOfNonCommentArgs, result);
                        }
                    } catch (STOP) {
                        callback(STOP);
                    }
                }, 20);
            } else {
                /** @type {number} */
                var quietMillis = 1E4;
                var timeout = void 0;
                /**
                 * @return {?}
                 */
                var add = function() {
                    return clearInterval(timeout);
                };
                /**
                 * @param {string} res
                 * @return {undefined}
                 */
                var finish = function(res) {
                    add();
                    callback(res);
                };
                /** @type {number} */
                timeout = window.setTimeout(function() {
                    return finish("timeout call through bg page");
                }, quietMillis);
                self.emitBackground("tracking-call", {
                    msg : expectedNumberOfNonCommentArgs,
                    data : result
                }, add);
            }
        }
        /**
         * @param {string} pair
         * @param {Array} r
         * @return {?}
         */
        function check(pair, r) {
            var parents = pair.split(".");
            var method = parents.pop();
            var expectedNumberOfNonCommentArgs = parents.reduce(function(meta, a) {
                return a in meta ? meta[a] : {};
            }, config.tracker());
            return expectedNumberOfNonCommentArgs && (method && expectedNumberOfNonCommentArgs[method]) ? void expectedNumberOfNonCommentArgs[method].apply(expectedNumberOfNonCommentArgs, (0, conf["default"])(r)) : console.error("No method " + pair + " in tracker object");
        }
        /**
         * @param {string} e
         * @param {?} target
         * @return {undefined}
         */
        function send(e, target) {
            console.info(e, target);
        }
        /**
         * @return {?}
         */
        function removex() {
            /** @type {Array.<?>} */
            var result = models.slice(0);
            return models.length = 0, result;
        }
        var doc = require("babel-runtime/core-js/object/assign");
        var data = (h(doc), require("babel-runtime/helpers/toConsumableArray"));
        var conf = h(data);
        var selector = require("babel-runtime/core-js/object/keys");
        var elem = h(selector);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var options;
        var self = require("../message");
        var Block = require("../util");
        var config = require("./tracker");
        var object = require("./felogPixel");
        var player = require("../config");
        var entities = require("./felogClient");
        var c = require("lib/request");
        !function(n) {
            var methods;
            var self = Block.isBg() ? new entities.DefaultFelogClient(player.URLS.newFelog, player.appName, player.getVersion(), player.ENV, c.fetch.bind(window)) : void 0;
            !function(exports) {
                /**
                 * @param {?} ev
                 * @param {string} funcToCall
                 * @param {string} millis
                 * @param {?} options
                 * @return {undefined}
                 */
                function setup(ev, funcToCall, millis, options) {
                    if (!self) {
                        throw Error("felogClient unavailable");
                    }
                    self.sendEvent(ev, funcToCall, millis, options)["catch"](function(dataAndEvents) {
                        return object.sendEventPixel(ev, funcToCall, millis, options, self.getContext());
                    });
                }
                /**
                 * @param {?} property
                 * @param {string} funcToCall
                 * @param {string} millis
                 * @param {?} context
                 * @return {undefined}
                 */
                function getAll(property, funcToCall, millis, context) {
                    if (!self) {
                        throw Error("felogClient unavailable");
                    }
                    self.sendUsageEvent(property, funcToCall, millis, context)["catch"](function(dataAndEvents) {
                        return object.sendEventPixel(property, funcToCall, millis);
                    });
                }
                /**
                 * @param {?} owner
                 * @return {undefined}
                 */
                function remove(owner) {
                    if (self) {
                        self.setUserId(owner);
                    }
                }
                /**
                 * @param {string} isXML
                 * @return {undefined}
                 */
                function find(isXML) {
                    if (self) {
                        self.setContainerId(isXML);
                    }
                }
                /** @type {function (?, string, string, ?): undefined} */
                exports.sendFelog = setup;
                /** @type {function (?, string, string, ?): undefined} */
                exports.sendFelogUsageEvent = getAll;
                /** @type {function (?): undefined} */
                exports.setUserId = remove;
                /** @type {function (string): undefined} */
                exports.setContainerId = find;
            }(methods = n.methods || (n.methods = {}));
            /** @type {string} */
            n.CALL_HANDLER_ID = "tracking/RPC";
        }(options || (options = {}));
        expectedNumberOfNonCommentArgs.callBgPage = (0, elem["default"])(options.methods).reduce(function(safe, i) {
            return safe[i] = function() {
                /** @type {number} */
                var expectedNumberOfNonCommentArgs = arguments.length;
                /** @type {Array} */
                var args = Array(expectedNumberOfNonCommentArgs);
                /** @type {number} */
                var $_i = 0;
                for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                    args[$_i] = arguments[$_i];
                }
                return parse.apply(void 0, [options.CALL_HANDLER_ID, i].concat(args));
            }, safe;
        }, {});
        /** @type {Array} */
        var models = [];
        /** @type {function (Object): undefined} */
        expectedNumberOfNonCommentArgs.call = parse;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getLog = removex;
    }, {
        "../config" : 167,
        "../message" : 171,
        "../util" : 198,
        "./felogClient" : 190,
        "./felogPixel" : 191,
        "./tracker" : 196,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/helpers/toConsumableArray" : 33,
        "lib/request" : 182
    }],
    189 : [function(proceed, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {?} opt_noCache
         * @param {string} service
         * @param {?} serviceName
         * @param {string} url
         * @param {Object} keepData
         * @param {string} m
         * @param {string} millis
         * @param {Object} id
         * @param {Object} config
         * @return {?}
         */
        function send(opt_noCache, service, serviceName, url, keepData, m, millis, id, config) {
            var obj = {
                message : m,
                logger : keepData,
                level : result.toFelogString(millis),
                application : opt_noCache,
                version : service,
                userId : config && config.userId,
                containerId : config && config.containerId,
                env : serviceName
            };
            return id && (obj.extra = id), url + "/log?json=" + encodeURIComponent((0, iterator["default"])(obj));
        }
        /**
         * @param {string} application
         * @param {string} config
         * @param {?} key
         * @param {string} url
         * @param {Object} target
         * @param {string} data
         * @param {string} name
         * @param {?} callback
         * @return {?}
         */
        function initialize(application, config, key, url, target, data, name, callback) {
            var obj = {
                message : data,
                logger : target,
                level : result.toFelogString(name),
                application : application,
                version : config,
                env : key,
                extra_usage : callback
            };
            return url + "/log?json=" + encodeURIComponent((0, iterator["default"])(obj));
        }
        var value = proceed("babel-runtime/core-js/json/stringify");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var result;
        !function(logging) {
            /** @type {string} */
            logging[logging.INFO = 0] = "INFO";
            /** @type {string} */
            logging[logging.WARN = 1] = "WARN";
            /** @type {string} */
            logging[logging.ERROR = 2] = "ERROR";
        }(result = expectedNumberOfNonCommentArgs.LogLevel || (expectedNumberOfNonCommentArgs.LogLevel = {}));
        (function(logging) {
            /**
             * @param {string} url
             * @return {?}
             */
            function initialize(url) {
                switch(url) {
                    case logging.INFO:
                        return "INFO";
                    case logging.WARN:
                        return "WARN";
                    case logging.ERROR:
                        return "ERROR";
                    default:
                        throw new TypeError("Unrecognized log level " + url);;
                }
            }
            /** @type {function (string): ?} */
            logging.toFelogString = initialize;
        })(result = expectedNumberOfNonCommentArgs.LogLevel || (expectedNumberOfNonCommentArgs.LogLevel = {}));
        /** @type {function (?, string, ?, string, Object, string, string, Object, Object): ?} */
        expectedNumberOfNonCommentArgs.felogRequestUrl = send;
        /** @type {function (string, string, ?, string, Object, string, string, ?): ?} */
        expectedNumberOfNonCommentArgs.felogUsageRequestUrl = initialize;
    }, {
        "babel-runtime/core-js/json/stringify" : 16
    }],
    190 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var ready = require("babel-runtime/core-js/object/assign");
        var ret = $(ready);
        var selector = require("babel-runtime/helpers/classCallCheck");
        var elem = $(selector);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var Block = require("@grammarly-npm/telemetry.ts/lib/timeseries_impl");
        var path = require("./felog");
        var nodes = require("lib/util");
        var DefaultFelogClient = function() {
            /**
             * @param {(Function|string)} opt_rightAlign
             * @param {?} clear
             * @param {?} backend
             * @param {?} x
             * @param {?} postProcess
             * @return {undefined}
             */
            function Renderer(opt_rightAlign, clear, backend, x, postProcess) {
                (0, elem["default"])(this, Renderer);
                /** @type {(Function|string)} */
                this._baseUrl = opt_rightAlign;
                this._appName = clear;
                this._appVersion = backend;
                this._env = x;
                this._fetch = postProcess;
                this._context = {
                    userId : void 0,
                    containerId : void 0
                };
                this._metrics = Block.MetricsStorage.createRoot(this._env + "." + this._appName, this._baseUrl, this._fetch);
            }
            return(0, update["default"])(Renderer, [{
                key : "setUserId",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._context = (0, ret["default"])({}, this._context, {
                        userId : name
                    });
                }
            }, {
                key : "setContainerId",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._context = (0, ret["default"])({}, this._context, {
                        containerId : name
                    });
                }
            }, {
                key : "getContext",
                /**
                 * @return {?}
                 */
                value : function() {
                    return this._context;
                }
            }, {
                key : "sendEvent",
                /**
                 * @param {string} name
                 * @param {string} y
                 * @param {string} millis
                 * @param {Object} attr
                 * @return {?}
                 */
                value : function(name, y, millis, attr) {
                    return this._fetch(path.felogRequestUrl(this._appName, this._appVersion, this._env, this._baseUrl, name, y, millis, attr, this._context), {
                        mode : "no-cors",
                        method : "get",
                        cache : "no-cache"
                    }).then(function(dataAndEvents) {
                    })["catch"](function(dataAndEvents) {
                    });
                }
            }, {
                key : "sendUsageEvent",
                /**
                 * @param {string} name
                 * @param {string} f
                 * @param {string} y2
                 * @param {Object} item
                 * @return {?}
                 */
                value : function(name, f, y2, item) {
                    var restoreScript = {
                        domain : item.domain,
                        accountType : item.accountType,
                        fieldType : item.fieldType,
                        fieldSupported : item.fieldSupported
                    };
                    if (this._context.containerId || this._context.userId) {
                        var suiteView = (this._context.containerId || this._context.userId) + item.domain;
                        restoreScript.groupInfo = nodes.normalizedHashCode(suiteView, 1E9);
                    }
                    return this._fetch(path.felogUsageRequestUrl(this._appName, this._appVersion, this._env, this._baseUrl, name, f, y2, restoreScript), {
                        mode : "no-cors",
                        method : "get",
                        cache : "no-cache"
                    }).then(function(dataAndEvents) {
                    })["catch"](function(dataAndEvents) {
                    });
                }
            }, {
                key : "sendCounter",
                /**
                 * @param {string} name
                 * @param {number} x
                 * @return {undefined}
                 */
                value : function(name, x) {
                    this._metrics.getCounter(name).increment(x);
                }
            }, {
                key : "sendTimer",
                /**
                 * @param {string} name
                 * @param {number} deepDataAndEvents
                 * @return {undefined}
                 */
                value : function(name, deepDataAndEvents) {
                    this._metrics.getTimer(name).recordTime(deepDataAndEvents);
                }
            }]), Renderer;
        }();
        expectedNumberOfNonCommentArgs.DefaultFelogClient = DefaultFelogClient;
    }, {
        "./felog" : 189,
        "@grammarly-npm/telemetry.ts/lib/timeseries_impl" : 11,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "lib/util" : 198
    }],
    191 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} name
         * @return {?}
         */
        function removeNode(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        /**
         * @param {?} name
         * @param {string} funcToCall
         * @param {string} millis
         * @param {?} namespace
         * @param {Object} overrides
         * @return {?}
         */
        function initialize(name, funcToCall, millis, namespace, overrides) {
            /** @type {Element} */
            var image = document.createElement("img");
            return image.src = util.felogRequestUrl(args.appName, args.getVersion(), args.ENV, args.URLS.newFelog, name, funcToCall, millis, namespace, overrides), options["default"].resolve();
        }
        var node = require("babel-runtime/core-js/promise");
        var options = removeNode(node);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var args = require("../newConfig");
        var util = require("./felog");
        /** @type {function (?, string, string, ?, Object): ?} */
        expectedNumberOfNonCommentArgs.sendEventPixel = initialize;
    }, {
        "../newConfig" : 172,
        "./felog" : 189,
        "babel-runtime/core-js/promise" : 24
    }],
    192 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} name
         * @return {?}
         */
        function ondata(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        /**
         * @return {undefined}
         */
        function setup() {
            var container = $("./bgonly");
            var scrollTop = container.init;
            var header = container.processCookiesFromGrammarly;
            scrollTop()["catch"](function(dataAndEvents) {
                return _self.logger.bgTrackingInitFail();
            });
            windowEventHandlers = $("./on").on;
            res.on("tracking-fire", function(payload) {
                var id = payload.msg;
                var data = payload.data;
                return slice.apply(void 0, [id].concat((0, obj["default"])(data)));
            });
            res.on("tracker-init", header);
            res.on("tracking-call", function(payload) {
                var id = payload.msg;
                var data = payload.data;
                var fn5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m._f;
                task.call.apply(task, [id].concat((0, obj["default"])(data)));
                fn5();
            });
            slice("activity-ping");
        }
        /**
         * @param {string} e
         * @return {?}
         */
        function slice(e) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var args = Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
                args[i - 1] = arguments[i];
            }
            if (m.isBg()) {
                if (!windowEventHandlers[e]) {
                    return console.error("No handler specified for message: " + e);
                }
                m.asyncCall(function() {
                    var expectedNumberOfNonCommentArgs;
                    return(expectedNumberOfNonCommentArgs = windowEventHandlers)[e].apply(expectedNumberOfNonCommentArgs, args);
                }, 20);
            } else {
                res.emitBackground("tracking-fire", {
                    msg : e,
                    data : args
                });
            }
        }
        /**
         * @return {undefined}
         */
        function ajax() {
            /**
             * @return {undefined}
             */
            function rsc() {
                a++;
                if (a > b) {
                    clearInterval(ival);
                }
                var encoding = {
                    gnar : d("gnar_containerId"),
                    dapi : d("__fngrprnt__")
                };
                clearInterval(ival);
                res.emitBackground("tracker-init", encoding);
            }
            /** @type {number} */
            var a = 0;
            var d = $("cookie");
            if (d["default"]) {
                d = d["default"];
            }
            /** @type {number} */
            var ival = setInterval(rsc, 500);
            /** @type {number} */
            var b = 10;
        }
        var name = $("babel-runtime/helpers/toConsumableArray");
        var obj = ondata(name);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var m = $("../util");
        var res = $("../message");
        var task = $("./call");
        var _self = $("./logger");
        expectedNumberOfNonCommentArgs.logger = _self.logger;
        var events = $("./call");
        expectedNumberOfNonCommentArgs.call = events.call;
        expectedNumberOfNonCommentArgs.getLog = events.getLog;
        var windowEventHandlers = {};
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.initBg = setup;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.fire = slice;
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.initContentScript = ajax;
    }, {
        "../message" : 171,
        "../util" : 198,
        "./bgonly" : 187,
        "./call" : 188,
        "./logger" : 193,
        "./on" : 194,
        "babel-runtime/helpers/toConsumableArray" : 33,
        cookie : "cookie"
    }],
    193 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @return {undefined}
         */
        function addEventListener() {
            window.addEventListener("error", function(walkers) {
                return expectedNumberOfNonCommentArgs.logger.unhandledBgPageException(walkers);
            });
            window.addEventListener("unhandledrejection", function(walkers) {
                return expectedNumberOfNonCommentArgs.logger.unhandledBgPageRejection(walkers);
            });
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var module = require("./call");
        var nodes = require("./telemetry");
        var Block = require("../newConfig");
        expectedNumberOfNonCommentArgs.logger = new nodes.Telemetry(module.callBgPage.sendFelog.bind(module.callBgPage), module.callBgPage.sendFelogUsageEvent.bind(module.callBgPage), module.callBgPage.setUserId.bind(module.callBgPage), module.callBgPage.setContainerId.bind(module.callBgPage));
        if (Block.isBg()) {
            console.info("Installing unhandled error loggers...");
            addEventListener();
        }
    }, {
        "../newConfig" : 172,
        "./call" : 188,
        "./telemetry" : 195
    }],
    194 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function walk(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        var r20;
        var ctor = require("babel-runtime/helpers/defineProperty");
        var t = walk(ctor);
        var nodes = require("babel-runtime/regenerator");
        var result = walk(nodes);
        var ast = require("babel-runtime/helpers/slicedToArray");
        var ret = walk(ast);
        var child = require("babel-runtime/core-js/promise");
        var h = walk(child);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} opt_attributes
         * @param {Text} self
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, args, opt_attributes, self) {
            return new (opt_attributes || (opt_attributes = h["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(self.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function callback(e) {
                    try {
                        done(self["throw"](e));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new opt_attributes(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var Block = require("../util");
        var $ = require("./call");
        var common = require("./logger");
        var preferences = require("universal/bg/prefs");
        var helper = require("extension-api");
        expectedNumberOfNonCommentArgs.on = (r20 = {}, (0, t["default"])(r20, "activity-ping", function() {
        }), (0, t["default"])(r20, "daily-ping", function(p, s) {
            return init(this, void 0, void 0, result["default"].mark(function next() {
                var namespace;
                var string;
                var _args;
                var args;
                var arg;
                var x;
                var y;
                return result["default"].wrap(function(stream) {
                    for (;;) {
                        switch(stream.prev = stream.next) {
                            case 0:
                                if (p) {
                                    /** @type {number} */
                                    stream.next = 2;
                                    break;
                                }
                                return stream.abrupt("return");
                            case 2:
                                return $.call("gnar.pingMaybe"), namespace = new preferences.PrefsImpl(helper.getGlobalExtensionApi().preferences), stream.next = 6, namespace.get("pingDate");
                            case 6:
                                if (string = stream.sent, "string" !== typeof string && (string = ""), _args = string.split("|"), args = (0, ret["default"])(_args, 2), arg = args[0], x = args[1], y = s ? "cookiesDisabled" : p, !(arg && (arg > Date.now() && x === y))) {
                                    /** @type {number} */
                                    stream.next = 12;
                                    break;
                                }
                                return stream.abrupt("return");
                            case 12:
                                return common.logger.dailyPing(), stream.next = 15, namespace.set("pingDate", [Block.getNextPingDate(), y].join("|"));
                            case 15:
                                ;
                            case "end":
                                return stream.stop();
                        }
                    }
                }, next, this);
            }));
        }), (0, t["default"])(r20, "app_signin_success", function(labelPlacement) {
            $.call("gnar.track", "userLoginForm/accepted", {
                placement : labelPlacement
            });
        }), (0, t["default"])(r20, "app_signup_success", function(labelPlacement) {
            $.call("gnar.track", "userAccountSignupForm/accepted", {
                placement : labelPlacement
            });
        }), (0, t["default"])(r20, "signin-error", function(e) {
            /** @type {string} */
            e.errorType = "Server-Side";
            $.call("gnar.track", "userLoginForm/rejected");
        }), (0, t["default"])(r20, "signup-error", function(e) {
            /** @type {string} */
            e.errorType = "Server-Side";
            $.call("gnar.track", "userAccountSignupForm/rejected");
        }), (0, t["default"])(r20, "upgrade-after-register", function() {
            return init(this, void 0, void 0, result["default"].mark(function end() {
                return result["default"].wrap(function(current) {
                    for (;;) {
                        switch(current.prev = current.next) {
                            case 0:
                                $.call("gnar.track", "Account_Type_Selected");
                            case 1:
                                ;
                            case "end":
                                return current.stop();
                        }
                    }
                }, end, this);
            }));
        }), (0, t["default"])(r20, "hook-clicked", function(deepDataAndEvents) {
            $.call("gnar.track", "upgradeHookClicked", {
                placement : deepDataAndEvents
            });
            common.logger.userUpgradeClick(deepDataAndEvents);
        }), (0, t["default"])(r20, "correct-btn-clicked", function() {
            $.call("gnar.track", "gbuttonClicked");
            common.logger.gButtonClick();
        }), (0, t["default"])(r20, "btn-disable-in-field", function(deepDataAndEvents) {
            $.call("gnar.track", "checkingInFieldToggled", {
                /** @type {Function} */
                enabled : deepDataAndEvents
            });
            common.logger.checkingToggledInField(deepDataAndEvents);
        }), (0, t["default"])(r20, "button-change-state", function() {
        }), (0, t["default"])(r20, "login-attempt", function(labelPlacement) {
            $.call("gnar.track", "signInClicked", {
                placement : labelPlacement
            });
        }), (0, t["default"])(r20, "show-dictionary", function() {
            $.call("gnar.track", "showDictionary");
        }), (0, t["default"])(r20, "referral-shown", function(labelPlacement) {
            $.call("gnar.track", "referral/referralNotificationShown", {
                placement : labelPlacement
            });
        }), (0, t["default"])(r20, "referral-clicked", function(labelPlacement) {
            $.call("gnar.track", "referral/referralButtonClicked", {
                placement : labelPlacement
            });
        }), (0, t["default"])(r20, "tab-connected", function(filter, options, event, deepDataAndEvents, dataAndEvents) {
            var enabled = options.enabled;
            var related = event.cookiesDisabled;
            this["daily-ping"](filter.id, related);
            if (!enabled) {
                if (!(dataAndEvents === true)) {
                    common.logger.disabledTabLoad(deepDataAndEvents, filter.type);
                }
            }
        }), (0, t["default"])(r20, "session-invalidate", function(depMap, account, err, deepDataAndEvents, dataAndEvents) {
            var id = depMap.id;
            var depId = depMap.anonymous;
            var wrapper = depMap.isTest;
            if (id !== account.id) {
                $.call("gnar.setUser", id, wrapper);
                this["daily-ping"](id, deepDataAndEvents);
            }
            if (err) {
                common.logger.sessionInvalidated(err, id !== account.id);
            }
            if (account.email) {
                if (!account.anonymous) {
                    if (depId) {
                        common.logger.unexpectedAnonymous({
                            email : account.email,
                            token : account.token,
                            grauth : account.grauth,
                            tokenEqualsGrauth : account.token === account.grauth,
                            cookiesDisabled : deepDataAndEvents,
                            reason : err
                        });
                    }
                }
            }
        }), (0, t["default"])(r20, "set-dapi-prop", function(deepDataAndEvents, dataName) {
            if ("dialectWeak" === deepDataAndEvents) {
                $.call("gnar.track", "languageWeakPreference", {
                    dialect : dataName
                });
            }
            common.logger.dapiPropInitialized(deepDataAndEvents, dataName);
        }), (0, t["default"])(r20, "change-dialect", function(part) {
            var language = part.language;
            var body = part.dialectWeak;
            var data = {
                language : language
            };
            if (body) {
                /** @type {boolean} */
                data.sameAsWeak = language === body;
            }
            $.call("gnar.track", "languageStrongPreference", data);
        }), (0, t["default"])(r20, "change-defs", function(options) {
            $.call("gnar.track", "definitionsToggled", options);
            common.logger.toggleExtensionDefs(options.enabled);
        }), (0, t["default"])(r20, "checking-toggled", function(options) {
            $.call("gnar.track", "checkingToggled", options);
            common.logger.toggleExtension(options.enabled, options.placement);
        }), (0, t["default"])(r20, "disable-until-next-visit", function() {
            $.call("gnar.track", "disableUntilNextVisit");
            common.logger.disableUntilNextVisit();
        }), (0, t["default"])(r20, "disable-button-click", function() {
            $.call("gnar.track", "disableButtonClick");
            common.logger.disableButtonClick();
        }), (0, t["default"])(r20, "popup-open", function() {
            $.call("gnar.track", "browserToolbarButtonClicked");
        }), (0, t["default"])(r20, "popup-open-on-unsupported", function() {
            $.call("gnar.track", "browserToolbarButtonClicked/unsupported");
        }), (0, t["default"])(r20, "cookie-overflow", function(pixelWidth, deepDataAndEvents) {
            common.logger.cookieOverflow(pixelWidth, deepDataAndEvents);
        }), (0, t["default"])(r20, "premium-popup-show", function() {
            $.call("gnar.track", "upgradeReferralPopupShown");
        }), (0, t["default"])(r20, "premium-popup-upgrade-click", function() {
            $.call("gnar.track", "upgradeReferralPremiumBtnClicked");
        }), (0, t["default"])(r20, "premium-popup-referral-click", function() {
            $.call("gnar.track", "upgradeReferralInviteBtnClicked");
        }), (0, t["default"])(r20, "email-perception-popup-show", function(dataAndEvents) {
            $.call("gnar.track", "askForFeedback-popup-show", {
                isFirstShown : dataAndEvents
            });
            common.logger.emailPerceptionPopupShow();
        }), (0, t["default"])(r20, "email-perception-popup-cancel", function(dataAndEvents) {
            $.call("gnar.track", "askForFeedback-popup-cancel", {
                isFirstShown : dataAndEvents
            });
            common.logger.emailPerceptionPopupCancel();
        }), (0, t["default"])(r20, "email-perception-button-hover", function() {
            $.call("gnar.track", "askForFeedback-button-hover");
            common.logger.emailPerceptiongButtonHover();
        }), (0, t["default"])(r20, "email-perception-learn-more-click", function() {
            $.call("gnar.track", "emailPerceptionOptInLearnMore-button-click");
        }), (0, t["default"])(r20, "email-perception-disable-click", function() {
            $.call("gnar.track", "dontShowEmailPerceptionAgain-button-click");
        }), (0, t["default"])(r20, "onboarding-popup-show", function() {
            $.call("gnar.track", "onboarding-popup-show");
            common.logger.onboardingPopupShow();
        }), (0, t["default"])(r20, "onboarding-popup-cancel", function() {
            $.call("gnar.track", "onboarding-popup-cancel");
            common.logger.onboardingPopupCancel();
        }), (0, t["default"])(r20, "onboardingTutorial-popup-show", function() {
            $.call("gnar.track", "onboardingTutorial-popup-show");
            common.logger.onboardingTutorialShow();
        }), (0, t["default"])(r20, "onboardingTutorialNext-button-click", function() {
            $.call("gnar.track", "onboardingTutorialNext-button-click");
        }), (0, t["default"])(r20, "onboardingTutorialPersonalize-button-click", function() {
            $.call("gnar.track", "onboardingTutorialPersonalize-button-click");
        }), (0, t["default"])(r20, "onboardingTutorialSave-button-click", function() {
            $.call("gnar.track", "onboardingTutorialSave-button-click");
        }), (0, t["default"])(r20, "onboardingTutorialLetsWrite-button-click", function() {
            $.call("gnar.track", "onboardingTutorialLetsWrite-button-click");
        }), r20);
    }, {
        "../util" : 198,
        "./call" : 188,
        "./logger" : 193,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/helpers/slicedToArray" : 32,
        "babel-runtime/regenerator" : 35,
        "extension-api" : 159,
        "universal/bg/prefs" : 204
    }],
    195 : [function(parse, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function String(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        var obj = parse("babel-runtime/core-js/json/stringify");
        var h = String(obj);
        var arg = parse("babel-runtime/helpers/classCallCheck");
        var type = String(arg);
        var url = parse("babel-runtime/helpers/createClass");
        var result = String(url);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var $$Log = parse("./felog");
        /** @type {number} */
        var onComplete = 0.1;
        /** @type {number} */
        var which = 0.05;
        var Telemetry = function() {
            /**
             * @param {?} dataAndEvents
             * @param {?} deepDataAndEvents
             * @param {?} events
             * @param {?} keepData
             * @return {undefined}
             */
            function clone(dataAndEvents, deepDataAndEvents, events, keepData) {
                var self = this;
                (0, type["default"])(this, clone);
                this._sendFelog = dataAndEvents;
                this._sendFelogUsage = deepDataAndEvents;
                this._setUserId = events;
                this._setContainerId = keepData;
                /**
                 * @return {undefined}
                 */
                this.pageLoadTimeout = function() {
                    self._send("cs.connection.failover.pageLoad.timeout", "content script init failed", $$Log.LogLevel.ERROR);
                };
                /**
                 * @return {undefined}
                 */
                this.appLoadTimeout = function() {
                    self._send("cs.connection.failover.appLoad.timeout", "extension init timed out", $$Log.LogLevel.ERROR);
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.differentStateDomain = function(dataAndEvents) {
                    self._send("cs.state.differentDomain", "received state for different domain", $$Log.LogLevel.INFO, {
                        stateDomain : dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.restoredBgConnection = function(dataAndEvents) {
                    self._send("cs.connection.bg.restored", "bg page connection restored", $$Log.LogLevel.INFO, {
                        timeWithoutConnection : dataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.initWithoutBgConnection = function() {
                    self._send("cs.connection.bg.disconnected", "no connection to bg page", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.fetchDefinitionsFail = function() {
                    self._send("cs.connection.api.definition.failed", "definitions fetch failed", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {number} delay
                 * @return {undefined}
                 */
                this.infinityCheckResetFail = function(delay) {
                    self._send("cs.connection.infiniteCheck.failed", "infinite check reset failed", $$Log.LogLevel.ERROR, {
                        delay : delay
                    });
                };
                /**
                 * @param {?} keepData
                 * @return {undefined}
                 */
                this.tooLongPageConfigInit = function(keepData) {
                    self._send("cs.pageConfig.init.exceeded", "page config init timeout", $$Log.LogLevel.WARN, {
                        initTime : keepData
                    });
                };
                /**
                 * @param {?} keepData
                 * @return {undefined}
                 */
                this.tooLongUserUpdateTime = function(keepData) {
                    self._send("bg.state.user.update.exceeded", "user state update took too long", $$Log.LogLevel.WARN, {
                        updateTime : keepData
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.lostBgPageConnection = function() {
                    self._send("cs.gbutton.bg\u0421onnection.lost", "gbutton connection to bg page lost", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                this.restoreBgPageConnection = function(time) {
                    self._send("cs.gbutton.bg\u0421onnection.restored", "gbutton connection to bg page restored", $$Log.LogLevel.INFO, {
                        time : time
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.badCursorPosition = function() {
                    self._send("cs.editor.badCursorPosition", "incorrect cursor position in grammarly-editor", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.cursorJump = function() {
                    self._send("cs.editor.cursorJump", "cursor jump detected", $$Log.LogLevel.WARN);
                };
                /**
                 * @return {undefined}
                 */
                this.signinOpen = function() {
                    self._send("cs.signin.open", "sign in dialog opened", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.signinClose = function(dataAndEvents) {
                    self._send("cs.signin.close", "sign in dialog closed", $$Log.LogLevel.INFO, {
                        openTime : dataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.tabReloadClick = function() {
                    self._send("cs.gbutton.reload.click", "gbutton reload clicked", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {string} output
                 * @param {Blob} errorName
                 * @return {undefined}
                 */
                this.popupLoadError = function(output, errorName) {
                    self._send("cs.popup.load.error", "could not open pop-up editor", $$Log.LogLevel.ERROR, {
                        message : output,
                        name : errorName
                    });
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.loginNoBgPageConnection = function(output) {
                    self._send("debug.cs.connection.signin.bg.timeout", "can not connect to bg page on login", $$Log.LogLevel.INFO, {
                        message : output
                    });
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.pageConfigCDNError = function(output) {
                    self._send("cs.pageConfig.cdn.error", "could not read page config", $$Log.LogLevel.ERROR, {
                        message : output
                    });
                };
                /**
                 * @param {string} output
                 * @param {string} errorName
                 * @return {undefined}
                 */
                this.pageConfigLocalStorageError = function(output, errorName) {
                    self._send("cs.pageConfig.localStorage.error", "could not read page config from localStorage", $$Log.LogLevel.INFO, {
                        message : output,
                        name : errorName
                    });
                };
                /**
                 * @param {number} deepDataAndEvents
                 * @param {Object} keepData
                 * @return {undefined}
                 */
                this.pageConfigUpdated = function(deepDataAndEvents, keepData) {
                    self._send("cs.pageConfig.updated", "page config updated", $$Log.LogLevel.INFO, {
                        oldVersion : deepDataAndEvents,
                        newVersion : keepData
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.settingsPopupTimeout = function() {
                    self._send("settings.popup.init.timeout", "settings popup open timeout", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {?} keepData
                 * @return {undefined}
                 */
                this.settingsUsupportedShow = function(keepData) {
                    self._send("settings.popup.state.unsupported.show", "page unsupported message shown", $$Log.LogLevel.INFO, {
                        popupType : keepData
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.settingsPopupToggled = function(dataAndEvents) {
                    self._send("settings.popup.experiment.toggle", "settings popup disabled/enabled for experiment on /personalize page", $$Log.LogLevel.INFO, {
                        isPopupDisabled : dataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.socketBgError = function() {
                    self._send("bg.socket.error", "bg page socket error", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {?} dataAndEvents
                 * @param {?} deepDataAndEvents
                 * @return {undefined}
                 */
                this.capiNotAuthorizedLoop = function(dataAndEvents, deepDataAndEvents) {
                    self._send("debug.socket.notAuthorizedLoop", "could not authenticate on capi and auth", $$Log.LogLevel.INFO, {
                        authDegradation : dataAndEvents,
                        cookiesDisabled : deepDataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.socketDisabledCookie = function() {
                    self._send("debug.socket.disabledCookies", "disabled cookies after failed authentication", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.socketBgRestored = function(dataAndEvents) {
                    self._send("debug.bg.socket.restored", "capi session restored", $$Log.LogLevel.INFO, {
                        tryCount : dataAndEvents
                    });
                };
                /**
                 * @param {string} oauth_token
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.socketBgReconnectFail = function(oauth_token, dataAndEvents) {
                    self._send("bg.socket.reconnect.fail", "could not restore ws connection", $$Log.LogLevel.WARN, {
                        token : oauth_token,
                        tryCount : dataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.socketCsError = function() {
                    self._send("cs.socket.error", "content script socket error", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.soketCsErrorMsg = function(output) {
                    self._send("cs.socket.errorMsg", "capi error", $$Log.LogLevel.WARN, {
                        message : output
                    });
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.gnarClientInitFail = function(output) {
                    self._send("gnar.bg.tracking.gnar.init.fail", "gnar init failed", $$Log.LogLevel.WARN, {
                        message : output
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.bgTrackingInitFail = function() {
                    self._send("debug.tracking.init.fail", "bg page tracking library init failed", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.dailyPing = function() {
                    self._send("debug.dailyPing", "daily ping", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} deepDataAndEvents
                 * @return {undefined}
                 */
                this.userUpgradeClick = function(deepDataAndEvents) {
                    self._send("cs.ui.action.upgradeClick", "upgrade hook clicked", $$Log.LogLevel.INFO, {
                        placement : deepDataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.gButtonClick = function() {
                    self._send("cs.ui.gbutton.click", "gbutton clicked", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {Function} deepDataAndEvents
                 * @return {undefined}
                 */
                this.checkingToggledInField = function(deepDataAndEvents) {
                    self._send("cs.ui.gbutton.toggleInField", "checking toggled in field", $$Log.LogLevel.INFO, {
                        /** @type {Function} */
                        enabled : deepDataAndEvents
                    });
                };
                /**
                 * @param {string} err
                 * @param {boolean} dataAndEvents
                 * @return {undefined}
                 */
                this.sessionInvalidated = function(err, dataAndEvents) {
                    self._send("bg.session.invalidated", "user session invalidated", $$Log.LogLevel.INFO, {
                        reason : err,
                        userChanged : dataAndEvents
                    });
                };
                /**
                 * @param {?} opt_attributes
                 * @return {undefined}
                 */
                this.unexpectedAnonymous = function(opt_attributes) {
                    self._send("debug.bg.session.unexpectedAnonymous", "user changed to anonymous", $$Log.LogLevel.INFO, opt_attributes);
                };
                /**
                 * @param {string} deepDataAndEvents
                 * @param {?} i
                 * @return {undefined}
                 */
                this.dapiPropInitialized = function(deepDataAndEvents, i) {
                    self._send("bg.settings.dapi.prop.init", "save property to the DAPI", $$Log.LogLevel.INFO, {
                        name : deepDataAndEvents,
                        value : i
                    });
                };
                /**
                 * @param {string} fieldName
                 * @param {?} reqData
                 * @return {undefined}
                 */
                this.getDapiPropError = function(fieldName, reqData) {
                    self._send("bg.connection.dapi.getProp.error", "could not get dapi property", $$Log.LogLevel.WARN, {
                        property : fieldName,
                        body : reqData
                    });
                };
                /**
                 * @param {string} fieldName
                 * @param {?} reqData
                 * @return {undefined}
                 */
                this.setDapiPropError = function(fieldName, reqData) {
                    self._send("bg.connection.dapi.setProp.error", "could not set dapi property", $$Log.LogLevel.WARN, {
                        property : fieldName,
                        body : reqData
                    });
                };
                /**
                 * @param {Function} _enabled
                 * @return {undefined}
                 */
                this.toggleExtensionDefs = function(_enabled) {
                    self._send("bg.settings.definitions.toggle", "definitions toggled for domain", $$Log.LogLevel.INFO, {
                        /** @type {Function} */
                        enabled : _enabled
                    });
                };
                /**
                 * @param {boolean} _enabled
                 * @param {?} labelPlacement
                 * @return {undefined}
                 */
                this.toggleExtension = function(_enabled, labelPlacement) {
                    self._send("bg.settings.extension.toggle", "extension toggled for domain", $$Log.LogLevel.INFO, {
                        enabled : _enabled,
                        placement : labelPlacement
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.disableUntilNextVisit = function() {
                    self._send("cs.gbutton.disableUntilNextVisit", "extension temporary disabled on the current tab", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.disableButtonClick = function() {
                    self._send("cs.gbutton.disableButtonClick", "clicked on disable button in gButton", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {number} size
                 * @param {?} deepDataAndEvents
                 * @return {undefined}
                 */
                this.cookieOverflow = function(size, deepDataAndEvents) {
                    self._send("debug.bg.state.cookie.overflow", "cookie is too big", $$Log.LogLevel.INFO, {
                        size : size,
                        biggestCookie : deepDataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.externalChangePlan = function() {
                    self._send("bg.api.external.changePlan", "plan changed from editor", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.externalChangeDialect = function() {
                    self._send("bg.api.external.changeDialect", "dialect changed from editor", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.externalChangeUser = function() {
                    self._send("bg.api.external.changeUsed", "user changed from editor", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.externalLogout = function() {
                    self._send("bg.api.external.logout", "user logged out form editor", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.externalEnableEmailPerception = function() {
                    self._send("bg.api.external.enableEmailPerception", "user enabled email perception feature on the funnel", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {string} output
                 * @param {Array} stack
                 * @return {undefined}
                 */
                this.bgPageStartFail = function(output, stack) {
                    self._send("bg.start.fail", "bg page start failed", $$Log.LogLevel.ERROR, {
                        message : output,
                        stack : stack
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.bgPageInitTimeout = function(dataAndEvents) {
                    self._send("bg.state.start.timeout", "bg page init timeout", $$Log.LogLevel.WARN, {
                        initTime : dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.bgPageInitFail = function(dataAndEvents) {
                    self._send("bg.state.init.fail", "bg page init failed", $$Log.LogLevel.ERROR, {
                        initAttempts : dataAndEvents
                    });
                };
                /**
                 * @param {?} currentVersion
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.extensionUpdated = function(currentVersion, dataAndEvents) {
                    self._send("bg.state.updated", "extension updated", $$Log.LogLevel.INFO, {
                        currentVersion : currentVersion,
                        previousVersion : dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.extensionUpdateFail = function(dataAndEvents) {
                    self._send("bg.state.update.fail", "extension update failed", $$Log.LogLevel.INFO, {
                        previousVersion : dataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.cannotGetInstallSource = function() {
                    self._send("bg.getSource.fail", "failed to get extension install source", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {string} key
                 * @return {undefined}
                 */
                this.extensionInstall = function(key) {
                    self._send("bg.state.install", "extension installed", $$Log.LogLevel.INFO, {
                        source : key
                    });
                };
                /**
                 * @param {number} newVersion
                 * @return {undefined}
                 */
                this.chromeForcedToUpdate = function(newVersion) {
                    self._send("bg.chrome.forcedToUpdate", "chrome forced update", $$Log.LogLevel.INFO, {
                        newVersion : newVersion
                    });
                };
                /**
                 * @param {string} output
                 * @param {string} paramType
                 * @return {undefined}
                 */
                this.chromeContentScriptLoadError = function(output, paramType) {
                    self._send("bg.chrome.cs.load.error", "content script execution error", $$Log.LogLevel.WARN, {
                        message : output,
                        type : paramType
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.reloadNotificationShow = function() {
                    self._send("bg.ui.notification.tabsReload.show", "extension reload notification shown", $$Log.LogLevel.WARN);
                };
                /**
                 * @return {undefined}
                 */
                this.reloadNotificationClick = function() {
                    self._send("bg.ui.notification.tabsReload.click", "reload notification clicked", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} err
                 * @param {Object} reqData
                 * @param {number} statusCode
                 * @return {undefined}
                 */
                this.fetchUserFail = function(err, reqData, statusCode) {
                    self._send("bg.user.fetch.fail", "failed to update user", $$Log.LogLevel.WARN, {
                        body : reqData,
                        statusCode : statusCode,
                        reason : err
                    });
                };
                /**
                 * @param {?} reqData
                 * @param {number} statusCode
                 * @return {undefined}
                 */
                this.fetchMimicFail = function(reqData, statusCode) {
                    self._send("bg.user.mimic.fail", "mimic request failed", $$Log.LogLevel.WARN, {
                        body : reqData,
                        statusCode : statusCode
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.fetchCookieFail = function() {
                    self._send("bg.cookie.fail", "could not get grauth from cookie", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {?} reqData
                 * @param {number} statusCode
                 * @return {undefined}
                 */
                this.fetchSettingsFail = function(reqData, statusCode) {
                    self._send("bg.user.settings.fail", "could not get settings from auth", $$Log.LogLevel.WARN, {
                        body : reqData,
                        statusCode : statusCode
                    });
                };
                /**
                 * @param {?} canceled
                 * @return {undefined}
                 */
                this.frequentCookieChanges = function(canceled) {
                    self._send("debug.cookie.onChange.error", "cookie change too frequent", $$Log.LogLevel.INFO, {
                        canceled : canceled
                    });
                };
                /**
                 * @param {string} errorName
                 * @return {undefined}
                 */
                this.initializePropFromDapi = function(errorName) {
                    self._send("bg.state.dapi.prop.initialize", "set property from dapi", $$Log.LogLevel.INFO, {
                        name : errorName
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.emailPerceptionPopupShow = function() {
                    self._send("cs.emailPerception.popup.show", "show email perception popup on gmail/inbox domain", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.emailPerceptionPopupCancel = function() {
                    self._send("cs.emailPerception.popup.cancel", "user canceled email perception popup on gmail/inbox", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.emailPerceptiongButtonHover = function() {
                    self._send("cs.emailPerception.gbutton.hover", "user hovered gButton and ask for feedback btn is shown on gmail/inbox", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.onboardingPopupShow = function() {
                    self._send("cs.onboarding.popup.show", "show onboarding popup to user after first time extension install", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.onboardingPopupCancel = function() {
                    self._send("cs.onboarding.popup.cancel", "user canceled onboarding popup", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.onboardingTutorialShow = function() {
                    self._send("cs.onboarding.tutorial.show", "opened onboarding dialog after popup", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.onboardingVideoLoaded = function() {
                    self._send("cs.onboarding.tutorial.video.loaded", "load video data for onboarding tutorial", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} reqData
                 * @return {undefined}
                 */
                this.saveEmailFeedbackError = function(reqData) {
                    self._send("bg.emailfeedback.save.error", "failed to save email feedback", $$Log.LogLevel.INFO, {
                        body : reqData
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.incognitoInit = function() {
                    self._send("bg.incognito.init", "extension initialized in incognito mode", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.disabledCookiesInit = function() {
                    self._send("bg.cookie.disabled", "extension initialized with disabled cookies", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.proxyInit = function() {
                    self._sendWithProbability(which, "proxy.init", "proxy script initialized", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {Object} _port
                 * @param {Error} err
                 * @return {undefined}
                 */
                this.proxyPortDisconnected = function(_port, err) {
                    self._sendWithProbability(which, "proxy.disconnect", "proxy port disconnected", $$Log.LogLevel.INFO, {
                        port : _port,
                        error : err
                    });
                };
                /**
                 * @param {Object} obj
                 * @return {undefined}
                 */
                this.unhandledBgPageException = function(obj) {
                    self._send("bg.unhandledException", "unhandled exception on background page", $$Log.LogLevel.ERROR, {
                        message : obj.error ? obj.error.message : obj.message
                    });
                };
                /**
                 * @param {Object} obj
                 * @return {undefined}
                 */
                this.unhandledBgPageRejection = function(obj) {
                    self._send("bg.unhandledRejection", "unhandled promise rejection on background page", $$Log.LogLevel.ERROR, {
                        message : null !== obj.reason ? "string" === typeof obj.reason ? obj.reason : obj.reason.message : void 0
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.storageMigrationSucceeded = function() {
                    self._send("bg.storageMigration.success", "storage migration succeeded", $$Log.LogLevel.INFO, {});
                };
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                this.storageMigrationFailed = function(e) {
                    self._send("bg.storageMigration.failure", "storage migration failed", $$Log.LogLevel.ERROR, {
                        message : e && e.message
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.cardShowAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.card.show", "show card action", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.cardHideAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.card.hide", "hide card action", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.cardReplacementAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.card.replacement", "click on the replacement in the card", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.cardAddToDictAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.card.addToDict", "click add to dictionary button in the card", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.cardIgnoreAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.card.ignore", "click ignore button in the card", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.synonymCardShowAction = function(dataAndEvents) {
                    self._sendWithProbability(onComplete, "cs.editor.synonym.show", "show synonymous card action", $$Log.LogLevel.INFO, {
                        notFoundCard : dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.synonymCardHideAction = function(dataAndEvents) {
                    self._sendWithProbability(onComplete, "cs.editor.synonym.hide", "hide synonymous card action", $$Log.LogLevel.INFO, {
                        notFoundCard : dataAndEvents
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.synonymReplacementAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.synonym.replacement", "click on the replacement in the synonym", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.dictCardShowAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.dict.show", "show dictionary card action", $$Log.LogLevel.INFO);
                };
                /**
                 * @return {undefined}
                 */
                this.dictCardHideAction = function() {
                    self._sendWithProbability(onComplete, "cs.editor.dict.hide", "hide dictionary card action", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {?} dataAndEvents
                 * @param {?} deepDataAndEvents
                 * @return {undefined}
                 */
                this.couldNotParseTransform = function(dataAndEvents, deepDataAndEvents) {
                    self._send("cs.cards.transforms.parse.error", "Could not parse transform in inline cards", $$Log.LogLevel.WARN, {
                        transformHTML : dataAndEvents,
                        fallbackParseSuccessful : deepDataAndEvents
                    });
                };
                /**
                 * @param {string} deepDataAndEvents
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.disabledTabLoad = function(deepDataAndEvents, dataAndEvents) {
                    self._sendUsage("usage.loadOnDisabledTab", "tab load event with disabled extension", $$Log.LogLevel.INFO, {
                        domain : deepDataAndEvents,
                        accountType : dataAndEvents
                    });
                };
                /**
                 * @param {string} domain
                 * @param {?} res
                 * @param {?} inType
                 * @param {?} req
                 * @return {undefined}
                 */
                this.initSession = function(domain, res, inType, req) {
                    self._sendUsage("usage.session.init", "init in the field", $$Log.LogLevel.INFO, {
                        domain : domain,
                        accountType : res,
                        fieldType : inType,
                        fieldSupported : req
                    });
                };
                /**
                 * @param {string} domain
                 * @param {?} dataAndEvents
                 * @param {?} inType
                 * @return {undefined}
                 */
                this.cardFirstInteraction = function(domain, dataAndEvents, inType) {
                    self._sendUsage("usage.card.interaction", "interaction with card in the field", $$Log.LogLevel.INFO, {
                        domain : domain,
                        accountType : dataAndEvents,
                        fieldType : inType
                    });
                };
            }
            return(0, result["default"])(clone, [{
                key : "_send",
                /**
                 * @param {string} type
                 * @param {string} newValue
                 * @param {?} thisValue
                 * @param {string} func
                 * @return {undefined}
                 */
                value : function(type, newValue, thisValue, func) {
                    var name = void 0;
                    try {
                        name = (0, h["default"])(func);
                    } catch (ex) {
                        /** @type {string} */
                        name = "Failed to stringify event properties: '" + ex + "', '" + (ex && ex.message) + "'";
                        console.warn(name, "for " + newValue + "@" + type);
                    }
                    try {
                        this._sendFelog(type, newValue, thisValue, null !== func ? {
                            json : name
                        } : void 0);
                    } catch (error) {
                        console.warn("Failed to send felog for " + newValue + "@" + type + ": '" + error + "', '" + (error && error.message) + "'");
                    }
                }
            }, {
                key : "_sendUsage",
                /**
                 * @param {string} name
                 * @param {?} newValue
                 * @param {?} thisValue
                 * @param {?} factor
                 * @return {undefined}
                 */
                value : function(name, newValue, thisValue, factor) {
                    this._sendFelogUsage(name, newValue, thisValue, factor);
                }
            }, {
                key : "_sendWithProbability",
                /**
                 * @param {string} name
                 * @param {string} req
                 * @param {string} o
                 * @param {?} callback
                 * @param {?} newValue
                 * @return {undefined}
                 */
                value : function(name, req, o, callback, newValue) {
                    if (name > Math.random()) {
                        this._send(req, o, callback, newValue);
                    }
                }
            }, {
                key : "setUserId",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._setUserId(name);
                }
            }, {
                key : "setContainerId",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._setContainerId(name);
                }
            }, {
                key : "notificationShown",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._send("cs.notification.show", "show notification on the page", $$Log.LogLevel.INFO, {
                        type : name
                    });
                }
            }, {
                key : "notificationHide",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    this._send("cs.notification.hide", "hide notification on the page", $$Log.LogLevel.INFO, {
                        type : name
                    });
                }
            }]), clone;
        }();
        expectedNumberOfNonCommentArgs.Telemetry = Telemetry;
    }, {
        "./felog" : 189,
        "babel-runtime/core-js/json/stringify" : 16,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28
    }],
    196 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @return {?}
         */
        function value() {
            return window.tracker = window.tracker || {}, window.tracker;
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.tracker = value;
    }, {}],
    197 : [function(requestAnimFrame, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {string} url
         * @param {string} code
         * @return {?}
         */
        function show(url, code) {
            return url + "=" + encodeURIComponent(code);
        }
        /**
         * @param {string} funcToCall
         * @param {string} condition
         * @return {?}
         */
        function callFunc(funcToCall, condition) {
            return show("utm_medium", "internal") + "&" + show("utm_source", funcToCall) + "&" + show("utm_campaign", condition);
        }
        /**
         * @param {string} funcToCall
         * @param {string} condition
         * @return {?}
         */
        function testLoop(funcToCall, condition) {
            return req.URLS.signup + "?" + callFunc(funcToCall, condition);
        }
        /**
         * @return {?}
         */
        function showCenteredOverlay() {
            return req.URLS.signin + "?" + show("utm_medium", "internal");
        }
        /**
         * @return {?}
         */
        function startGame() {
            return req.URLS.resetPassword + "?" + show("utm_medium", "internal");
        }
        /**
         * @return {?}
         */
        function showNext() {
            return req.URLS.terms + "?" + show("utm_medium", "internal");
        }
        /**
         * @return {?}
         */
        function showCommentAdd() {
            return req.URLS.policy + "?" + show("utm_medium", "internal");
        }
        /**
         * @param {string} funcToCall
         * @param {string} condition
         * @return {?}
         */
        function testWatchMultiple(funcToCall, condition) {
            return req.URLS.upgrade + "?" + callFunc(funcToCall, condition);
        }
        /**
         * @return {?}
         */
        function loadFunc() {
            return req.URLS.welcomeC + "?" + show("utm_medium", "navigation");
        }
        /**
         * @return {?}
         */
        function showFullMapPreview() {
            /** @type {string} */
            var navigation = req.URLS.authCreatePage + "/?extension_install=true";
            return navigation + "&" + show("utm_medium", "navigation");
        }
        /**
         * @param {string} dataAndEvents
         * @param {string} funcToCall
         * @param {string} condition
         * @return {?}
         */
        function testWatchedByMultiple(dataAndEvents, funcToCall, condition) {
            return dataAndEvents + "&" + callFunc(funcToCall, condition);
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var req = requestAnimFrame("./newConfig");
        /** @type {function (string, string): ?} */
        expectedNumberOfNonCommentArgs.getSignUpURL = testLoop;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getSignInURL = showCenteredOverlay;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getResetPasswordURL = startGame;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getTermsURL = showNext;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getPrivatePolicyURL = showCommentAdd;
        /** @type {function (string, string): ?} */
        expectedNumberOfNonCommentArgs.getUpgradeURL = testWatchMultiple;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getExtensionSuccessURL = loadFunc;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getAuthCreatePageURL = showFullMapPreview;
        /** @type {function (string, string, string): ?} */
        expectedNumberOfNonCommentArgs.addParamsToUpgradeURL = testWatchedByMultiple;
    }, {
        "./newConfig" : 172
    }],
    198 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {?} selector
         * @return {?}
         */
        function hasClass(selector) {
            /** @type {boolean} */
            var OPERA_QSAPI = ["freeeeeeee@grammarly.com", "premiumuser@grammarly.com"].indexOf(selector) !== -1;
            return!OPERA_QSAPI && /^.*@grammarly.com$/.test(selector);
        }
        /**
         * @return {?}
         */
        function onSet() {
            return window.chrome && (window.chrome.runtime && window.chrome.runtime.lastError);
        }
        /**
         * @param {Object} obj
         * @return {?}
         */
        function isFunction(obj) {
            return!!(obj && (obj.constructor && (obj.call && obj.apply)));
        }
        /**
         * @param {?} key
         * @param {undefined} ms
         * @return {?}
         */
        function set(key, ms) {
            /**
             * @return {undefined}
             */
            function promise() {
                /**
                 * @return {undefined}
                 */
                function fn() {
                    resolve();
                    key();
                }
                /**
                 * @return {undefined}
                 */
                function resolve() {
                    /** @type {number} */
                    var id = setTimeout(fn, ms);
                    /** @type {number} */
                    values[key] = id;
                }
                resolve();
            }
            var values = set.items = set.items || {};
            var to = values[key];
            if (to || ms) {
                return to && !ms ? (clearTimeout(to), void delete values[key]) : void promise();
            }
        }
        /**
         * @param {?} files
         * @return {undefined}
         */
        function json(files) {
            set(files);
        }
        /**
         * @return {?}
         */
        function S4() {
            return(65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        /**
         * @return {?}
         */
        function guid() {
            return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
        }
        /**
         * @return {undefined}
         */
        function f() {
        }
        /**
         * @return {?}
         */
        function returnTrue() {
            return true;
        }
        /**
         * @return {undefined}
         */
        function reload() {
            if (window.chrome && (window.chrome.runtime && window.chrome.runtime.reload)) {
                window.chrome.runtime.reload();
            } else {
                window.location.reload();
            }
        }
        /**
         * @param {Object} doc
         * @return {?}
         */
        function load(doc) {
            if (doc.location) {
                /** @type {boolean} */
                var program = "mail.google.com" === doc.location.host;
                var inverse = doc.querySelector("iframe#js_frame") && doc.querySelector("iframe#sound_frame");
                return program || inverse;
            }
        }
        /**
         * @param {?} qualifier
         * @return {?}
         */
        function assert(qualifier) {
            return/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\.\/0-9=?A-Z^_`a-z{|}~]+$/.test(qualifier);
        }
        /**
         * @param {?} str
         * @return {?}
         */
        function removeNonASCII(str) {
            return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        /**
         * @param {number} var_args
         * @param {Array} opt_attributes
         * @return {?}
         */
        function createDom(var_args, opt_attributes) {
            return opt_attributes[1 === var_args ? 0 : 1];
        }
        /**
         * @param {?} value
         * @return {?}
         */
        function stub(value) {
            return _.transform(value, function(b, g) {
                return b[g] = f;
            });
        }
        /**
         * @param {Function} fun
         * @param {Function} matcherFunction
         * @param {boolean} d
         * @return {?}
         */
        function e(fun, matcherFunction, d) {
            var expectedNumberOfNonCommentArgs = {};
            /**
             * @return {?}
             */
            var s = function() {
                var key = "_memoize_" + (matcherFunction ? matcherFunction.apply(this, arguments) : arguments[0]);
                return window.hasOwnProperty.call(expectedNumberOfNonCommentArgs, key) ? expectedNumberOfNonCommentArgs[key] : (d && setTimeout(function() {
                    delete expectedNumberOfNonCommentArgs[key];
                }, d), expectedNumberOfNonCommentArgs[key] = fun.apply(this, arguments));
            };
            return s;
        }
        /**
         * @param {?} res
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        function onSuccess(res, expectedNumberOfNonCommentArgs) {
            return(0, result["default"])(expectedNumberOfNonCommentArgs).reduce(function(deepDataAndEvents, method) {
                return(0, h["default"])({}, deepDataAndEvents, (0, elem["default"])({}, method, function() {
                    /** @type {number} */
                    var expectedNumberOfNonCommentArgs = arguments.length;
                    /** @type {Array} */
                    var args = Array(expectedNumberOfNonCommentArgs);
                    /** @type {number} */
                    var $_i = 0;
                    for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                        args[$_i] = arguments[$_i];
                    }
                    return res.then(function() {
                        return expectedNumberOfNonCommentArgs[method].apply(expectedNumberOfNonCommentArgs, args);
                    });
                }));
            }, {});
        }
        /**
         * @param {?} callback
         * @return {?}
         */
        function close(callback) {
            return new options["default"](function(basis) {
                return callback(basis);
            });
        }
        /**
         * @param {number} min
         * @param {number} max
         * @return {?}
         */
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        /**
         * @param {number} wait
         * @return {?}
         */
        function delay(wait) {
            return new options["default"](function(fnc) {
                return setTimeout(fnc, wait);
            });
        }
        /**
         * @param {?} val
         * @return {?}
         */
        function formatDate(val) {
            if (val) {
                /** @type {Date} */
                var date = new Date(val);
                if ("Invalid Date" !== date.toString()) {
                    return monthsLong[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
                }
            }
        }
        /**
         * @param {?} extend
         * @return {?}
         */
        function create(extend) {
            /**
             * @return {undefined}
             */
            var Type = function() {
            };
            return Type.prototype = extend(), Type;
        }
        /**
         * @return {?}
         */
        function update() {
            /**
             * @param {string} name
             * @return {?}
             */
            function func(name) {
                return name.split(".").map(function(arg) {
                    return Number(arg) || 0;
                });
            }
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            var name = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            var a = func(n);
            var b = func(name);
            var otherArgs = Array(Math.abs(a.length - b.length)).fill(0);
            if (a.length > b.length ? b.push.apply(b, (0, option["default"])(otherArgs)) : a.push.apply(a, (0, option["default"])(otherArgs)), a.every(function(elem, i) {
                    return elem === b[i];
                })) {
                return 0;
            }
            /** @type {number} */
            var i = 0;
            var aLength = a.length;
            for (;i < aLength;i++) {
                if (a[i] > b[i]) {
                    return 1;
                }
                if (a[i] < b[i]) {
                    return-1;
                }
            }
            return-1;
        }
        /**
         * @return {?}
         */
        function Wysiwyg() {
            return init(this, void 0, void 0, item["default"].mark(function init() {
                return item["default"].wrap(function(stream) {
                    for (;;) {
                        switch(stream.prev = stream.next) {
                            case 0:
                                if (d.isChrome() || d.isFF()) {
                                    /** @type {number} */
                                    stream.next = 2;
                                    break;
                                }
                                return stream.abrupt("return", null);
                            case 2:
                                return stream.prev = 2, stream.next = 5, options["default"].race([new options["default"](function(url) {
                                    return window.chrome.runtime.sendMessage("ping", url);
                                }), delay(1E4).then(function(dataAndEvents) {
                                    return "timeouted";
                                })]);
                            case 5:
                                return stream.abrupt("return", stream.sent);
                            case 8:
                                return stream.prev = 8, stream.t0 = stream["catch"](2), stream.abrupt("return", "orphaned");
                            case 11:
                                ;
                            case "end":
                                return stream.stop();
                        }
                    }
                }, init, this, [[2, 8]]);
            }));
        }
        /**
         * @param {Function} func
         * @return {undefined}
         */
        function once(func) {
            var backoff = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            setTimeout(func, backoff);
        }
        /**
         * @return {?}
         */
        function exports() {
            /**
             * @param {?} key
             * @return {undefined}
             */
            function flush(key) {
                if (arr.length > 0) {
                    var i = arr.shift();
                    i(key);
                } else {
                    if (id) {
                        keys.push(key);
                    } else {
                        keys[0] = key;
                    }
                }
            }
            /**
             * @return {?}
             */
            function process() {
                return keys.length ? options["default"].resolve(keys.shift()) : new options["default"](function(chunk) {
                    return arr.push(chunk);
                });
            }
            var req = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var index = req.buffered;
            var id = void 0 === index || index;
            /** @type {Array} */
            var keys = [];
            /** @type {Array} */
            var arr = [];
            return{
                /** @type {function (): ?} */
                take : process,
                /** @type {function (?): undefined} */
                put : flush
            };
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        function parseResponse(obj) {
            var base = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
            if (!obj) {
                return NaN;
            }
            var r = md5.createHash("superfasthash");
            return parseInt(r.hash(obj), 16) % base;
        }
        /**
         * @param {Event} e
         * @return {?}
         */
        function onkeypress(e) {
            return e.which || (e.charCode || (e.keyCode || 0));
        }
        /**
         * @param {string} text
         * @param {(Node|string)} dataAndEvents
         * @return {?}
         */
        function clone(text, dataAndEvents) {
            return text = text.replace(baseEntitiesRegex, "<br>" + tokenizeEvaluate).replace(r20, "<br>"), dataAndEvents && (text = text.replace(cx, tokenizeEvaluate)), text;
        }
        /**
         * @param {string} stuff
         * @return {?}
         */
        function trim(stuff) {
            return stuff.replace(/^\s+/, "");
        }
        /**
         * @param {string} requestUrl
         * @return {?}
         */
        function removeNonWord(requestUrl) {
            return requestUrl.replace(/\s+$/, "");
        }
        /**
         * @return {?}
         */
        function process() {
            /** @type {Date} */
            var currentTime = new Date;
            return currentTime.getHours() > 2 && currentTime.setDate(currentTime.getDate() + 1), currentTime.setHours(3), currentTime.setMinutes(Math.floor(60 * Math.random())), currentTime.getTime();
        }
        /**
         * @param {string} str
         * @return {?}
         */
        function escapeRegExp(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var helper = require("babel-runtime/regenerator");
        var item = $(helper);
        var items = require("babel-runtime/helpers/toConsumableArray");
        var option = $(items);
        var selector = require("babel-runtime/helpers/defineProperty");
        var elem = $(selector);
        var c = require("babel-runtime/core-js/object/assign");
        var h = $(c);
        var nodes = require("babel-runtime/core-js/object/keys");
        var result = $(nodes);
        var dom = require("babel-runtime/core-js/promise");
        var options = $(dom);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} config
         * @param {Text} self
         * @return {?}
         */
        var init = function(expectedNumberOfNonCommentArgs, args, config, self) {
            return new (config || (config = options["default"]))(function(iterator, $timeout) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(self.next(optgroup));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function callback(e) {
                    try {
                        done(self["throw"](e));
                    } catch (later) {
                        $timeout(later);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new config(function(iterator) {
                            iterator(x.value);
                        })).then(handler, callback);
                    }
                }
                done((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var _ = require("lodash");
        var md5 = require("non-crypto-hash");
        var d = require("./newConfig");
        var browser = require("./newConfig");
        expectedNumberOfNonCommentArgs.isTestsMode = browser.isTestsMode;
        expectedNumberOfNonCommentArgs.getBrowser = browser.getBrowser;
        expectedNumberOfNonCommentArgs.isBg = browser.isBg;
        expectedNumberOfNonCommentArgs.isBgOrPopup = browser.isBgOrPopup;
        expectedNumberOfNonCommentArgs.isChrome = browser.isChrome;
        expectedNumberOfNonCommentArgs.isFF = browser.isFF;
        expectedNumberOfNonCommentArgs.isPopup = browser.isPopup;
        expectedNumberOfNonCommentArgs.isSafari = browser.isSafari;
        expectedNumberOfNonCommentArgs.isEdge = browser.isEdge;
        expectedNumberOfNonCommentArgs.isWindows = browser.isWindows;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.isGrammarlyEmail = hasClass;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.chromeBgError = onSet;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.isFunction = isFunction;
        /** @type {function (?, undefined): ?} */
        expectedNumberOfNonCommentArgs.interval = set;
        (function(pressed) {
            pressed.items = {};
        })(set = expectedNumberOfNonCommentArgs.interval || (expectedNumberOfNonCommentArgs.interval = {}));
        /** @type {function (?): undefined} */
        expectedNumberOfNonCommentArgs.cancelInterval = json;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.guid = guid;
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs._f = f;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs._F = returnTrue;
        /** @type {function (): undefined} */
        expectedNumberOfNonCommentArgs.bgPageReload = reload;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.isGmail = load;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.isValidEmail = assert;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.formatNumber = removeNonASCII;
        /** @type {function (number, Array): ?} */
        expectedNumberOfNonCommentArgs.declension = createDom;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.stub = stub;
        /** @type {function (Function, Function, boolean): ?} */
        expectedNumberOfNonCommentArgs.memoize = e;
        /** @type {function (?, Object): ?} */
        expectedNumberOfNonCommentArgs.syncWait = onSuccess;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.promisify = close;
        /** @type {function (number, number): ?} */
        expectedNumberOfNonCommentArgs.getRandomIntInclusive = random;
        /** @type {function (number): ?} */
        expectedNumberOfNonCommentArgs.delay = delay;
        /** @type {Array} */
        var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.formatDate = formatDate;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.createClass = create;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.versionComparator = update;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.isBgAlive = Wysiwyg;
        /** @type {function (Function): undefined} */
        expectedNumberOfNonCommentArgs.asyncCall = once;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.createChannel = exports;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.normalizedHashCode = parseResponse;
        /** @type {function (Event): ?} */
        expectedNumberOfNonCommentArgs.keyCode = onkeypress;
        /** @type {RegExp} */
        expectedNumberOfNonCommentArgs.NBSP_RE = new RegExp(String.fromCharCode(160), "g");
        /** @type {string} */
        var tokenizeEvaluate = String.fromCharCode(160);
        /** @type {RegExp} */
        var r20 = /\n/g;
        /** @type {RegExp} */
        var cx = /\s$/g;
        /** @type {RegExp} */
        var baseEntitiesRegex = new RegExp("\n" + String.fromCharCode(32), "g");
        /** @type {function (string, (Node|string)): ?} */
        expectedNumberOfNonCommentArgs.br = clone;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.trimLeft = trim;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.trimRight = removeNonWord;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.SECOND = 1E3;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.MINUTE = 60 * expectedNumberOfNonCommentArgs.SECOND;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.HOUR = 60 * expectedNumberOfNonCommentArgs.MINUTE;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.DAY = 24 * expectedNumberOfNonCommentArgs.HOUR;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.ESC_KEY = 27;
        /** @type {number} */
        expectedNumberOfNonCommentArgs.ENTER_KEY = 13;
        /**
         * @param {?} object
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.pastDays = function(object) {
            return Math.round(Math.abs(+new Date - +new Date(object)) / expectedNumberOfNonCommentArgs.DAY);
        };
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.getNextPingDate = process;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.escapeRegExp = escapeRegExp;
    }, {
        "./newConfig" : 172,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/helpers/toConsumableArray" : 33,
        "babel-runtime/regenerator" : 35,
        lodash : "lodash",
        "non-crypto-hash" : "non-crypto-hash"
    }],
    199 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {Function} fn
         * @param {Array} array
         * @return {?}
         */
        function init(fn, array) {
            var expectedNumberOfNonCommentArgs;
            return(expectedNumberOfNonCommentArgs = []).concat.apply(expectedNumberOfNonCommentArgs, (0, c["default"])(array.map(fn)));
        }
        /**
         * @param {?} callback
         * @param {?} failing_message
         * @param {Array} codeSegments
         * @return {?}
         */
        function report(callback, failing_message, codeSegments) {
            /** @type {Array} */
            var eventPath = [failing_message];
            var cur = failing_message;
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
                cur = callback(cur, codeSegments[i]);
                eventPath.push(cur);
            }
            return eventPath;
        }
        /**
         * @param {Array} versions
         * @return {?}
         */
        function max(versions) {
            return versions.reduce(function(date2, date1) {
                return date1 > date2 ? date1 : date2;
            }, versions[0]);
        }
        /**
         * @param {Array} list
         * @param {?} cb
         * @return {?}
         */
        function write(list, cb) {
            return 0 === list.length ? void 0 : list.reduce(function(dataAndEvents, arg) {
                var keyName = cb(arg);
                return keyName > dataAndEvents[1] ? [arg, keyName] : dataAndEvents;
            }, [list[0], cb(list[0])])[0];
        }
        /**
         * @param {Object} array
         * @return {?}
         */
        function nlargest(array) {
            return array.slice().reverse();
        }
        /**
         * @param {?} fn
         * @param {Array} a
         * @return {?}
         */
        function param(fn, a) {
            /** @type {Array} */
            var t = [];
            /** @type {Array} */
            var target = [];
            /** @type {number} */
            var k = 0;
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var i = 0;
            for (;i < a.length;i++) {
                if (fn(a[i])) {
                    t[k++] = a[i];
                } else {
                    target[j++] = a[i];
                }
            }
            return[t, target];
        }
        /**
         * @param {number} size
         * @param {string} filter
         * @return {?}
         */
        function parse(size, filter) {
            if (size < 1) {
                throw new Error("Invalid chunk size, expected > 0");
            }
            if (0 === filter.length) {
                return[[]];
            }
            /** @type {Array} */
            var resp = [];
            /** @type {number} */
            var i = 0;
            for (;i < Math.ceil(filter.length / size);i++) {
                resp.push(filter.slice(i * size, (i + 1) * size));
            }
            return resp;
        }
        /**
         * @param {?} fn
         * @param {?} item
         * @return {?}
         */
        function clean(fn, item) {
            /** @type {Array} */
            var ret = [];
            var elems = fn(item);
            for (;void 0 !== elems;) {
                ret.push(elems[0]);
                elems = fn(elems[1]);
            }
            return ret;
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Object} width
         * @return {?}
         */
        function map(expectedNumberOfNonCommentArgs, width) {
            return void 0 !== width ? (0, event["default"])(Array(width - expectedNumberOfNonCommentArgs), function(deepDataAndEvents, dataAndEvents) {
                return dataAndEvents + expectedNumberOfNonCommentArgs;
            }) : (0, event["default"])(Array(expectedNumberOfNonCommentArgs), function(dataAndEvents, result) {
                return result;
            });
        }
        var type = require("babel-runtime/core-js/array/from");
        var event = Event(type);
        var complete = require("babel-runtime/helpers/toConsumableArray");
        var c = Event(complete);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /** @type {function (Function, Array): ?} */
        expectedNumberOfNonCommentArgs.flatMap = init;
        /** @type {function (?, ?, Array): ?} */
        expectedNumberOfNonCommentArgs.scan = report;
        /** @type {function (Array): ?} */
        expectedNumberOfNonCommentArgs.maximum = max;
        /** @type {function (Array, ?): ?} */
        expectedNumberOfNonCommentArgs.maximumBy = write;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.reverse = nlargest;
        /** @type {function (?, Array): ?} */
        expectedNumberOfNonCommentArgs.partition = param;
        /** @type {function (number, string): ?} */
        expectedNumberOfNonCommentArgs.chunkBySize = parse;
        /** @type {function (?, ?): ?} */
        expectedNumberOfNonCommentArgs.unfold = clean;
        /** @type {function (Object, Object): ?} */
        expectedNumberOfNonCommentArgs.range = map;
    }, {
        "babel-runtime/core-js/array/from" : 13,
        "babel-runtime/helpers/toConsumableArray" : 33
    }],
    200 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {boolean} guard
         * @param {string} msg
         * @return {undefined}
         */
        function assert(guard, msg) {
            if (!guard) {
                throw new AssertionError(msg);
            }
        }
        /**
         * @param {number} event
         * @param {string} obj
         * @return {?}
         */
        function fix(event, obj) {
            if (null === event) {
                throw new AssertionError(function() {
                    return obj ? "Expected " + obj + " to be non-null" : "Expected non-null";
                });
            }
            return event;
        }
        var complete = require("babel-runtime/core-js/object/get-prototype-of");
        var c = Event(complete);
        var selector = require("babel-runtime/helpers/classCallCheck");
        var elem = Event(selector);
        var type = require("babel-runtime/helpers/possibleConstructorReturn");
        var event = Event(type);
        var target = require("babel-runtime/helpers/inherits");
        var targets = Event(target);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var AssertionError = function(_super) {
            /**
             * @param {string} e
             * @return {?}
             */
            function process(e) {
                return(0, elem["default"])(this, process), (0, event["default"])(this, (process.__proto__ || (0, c["default"])(process)).call(this, "Assertion failed: " + (e ? "string" === typeof e ? e : e() : "(unnamed)")));
            }
            return(0, targets["default"])(process, _super), process;
        }(Error);
        expectedNumberOfNonCommentArgs.AssertionError = AssertionError;
        /** @type {function (boolean, string): undefined} */
        expectedNumberOfNonCommentArgs.assert = assert;
        /** @type {function (number, string): ?} */
        expectedNumberOfNonCommentArgs.assertNonNull = fix;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31
    }],
    201 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function parseInt(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {Array} opt_attributes
         * @param {?} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        function debug(opt_attributes, expectedNumberOfNonCommentArgs) {
            return opt_attributes.some(function(dataAndEvents) {
                return dataAndEvents === expectedNumberOfNonCommentArgs;
            }) ? expectedNumberOfNonCommentArgs : void 0;
        }
        /**
         * @param {(Array|string)} attributes
         * @param {string} parts
         * @param {boolean} charset
         * @return {?}
         */
        function parse(attributes, parts, charset) {
            var models = debug(attributes, parts);
            if (void 0 !== models) {
                return models;
            }
            throw new TypeError('Unrecognized string union value "' + parts + '"' + (charset ? " for " + charset : ""));
        }
        /**
         * @param {string} name
         * @return {?}
         */
        function it(name) {
            throw new Test(name);
        }
        /**
         * @param {string} value
         * @return {?}
         */
        function compare(value) {
            /** @type {number} */
            var state = parseInt(value, 10);
            return isNaN(state) ? void 0 : state;
        }
        /**
         * @param {string} isXML
         * @param {string} year
         * @return {?}
         */
        function find(isXML, year) {
            var result = compare(isXML);
            if (void 0 !== result) {
                return result;
            }
            throw new Error("Expected a number string, got '" + isXML + "'" + (void 0 !== year ? " for " + year : ""));
        }
        /**
         * @param {Function} format
         * @param {Function} finish
         * @return {?}
         */
        function exports(format, finish) {
            try {
                return format();
            } catch (err) {
                return finish(err);
            }
        }
        var b = require("babel-runtime/core-js/object/get-prototype-of");
        var bp = parseInt(b);
        var nodes = require("babel-runtime/helpers/possibleConstructorReturn");
        var result = parseInt(nodes);
        var one = require("babel-runtime/helpers/inherits");
        var column = parseInt(one);
        var m = require("babel-runtime/helpers/classCallCheck");
        var row = parseInt(m);
        var text = require("babel-runtime/helpers/createClass");
        var type = parseInt(text);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var chai = require("./assert");
        expectedNumberOfNonCommentArgs.assert = chai.assert;
        expectedNumberOfNonCommentArgs.assertNonNull = chai.assertNonNull;
        expectedNumberOfNonCommentArgs.AssertionError = chai.AssertionError;
        var Block = require("./promise");
        expectedNumberOfNonCommentArgs.SafePromise = Block.SafePromise;
        var helper = require("./array");
        expectedNumberOfNonCommentArgs.Arr = helper;
        var inspect = require("./object");
        expectedNumberOfNonCommentArgs.Obj = inspect;
        var Global = function() {
            /**
             * @param {(Object|number)} elem
             * @return {undefined}
             */
            function restoreScript(elem) {
                (0, row["default"])(this, restoreScript);
                /** @type {(Object|number)} */
                this._getFallbackValue = elem;
            }
            return(0, type["default"])(restoreScript, [{
                key : "init",
                /**
                 * @param {Object} name
                 * @return {undefined}
                 */
                value : function(name) {
                    if (void 0 !== this._value) {
                        throw new Error("Global value already initialized.");
                    }
                    /** @type {Object} */
                    this._value = name;
                }
            }, {
                key : "get",
                /**
                 * @return {?}
                 */
                value : function() {
                    if (void 0 === this._value) {
                        if (void 0 === this._getFallbackValue) {
                            throw new Error("Global value not initialized and no fallback value provided.");
                        }
                        this._value = this._getFallbackValue();
                    }
                    return this._value;
                }
            }]), restoreScript;
        }();
        expectedNumberOfNonCommentArgs.Global = Global;
        /** @type {function (Array, ?): ?} */
        expectedNumberOfNonCommentArgs.optionalStringUnion = debug;
        /** @type {function ((Array|string), string, boolean): ?} */
        expectedNumberOfNonCommentArgs.assertStringUnion = parse;
        var Test = function(_super) {
            /**
             * @param {boolean} domain
             * @return {?}
             */
            function value(domain) {
                return(0, row["default"])(this, value), (0, result["default"])(this, (value.__proto__ || (0, bp["default"])(value)).call(this, "Matching not exhaustive" + (domain ? ": unexpected value " + domain : "")));
            }
            return(0, column["default"])(value, _super), value;
        }(Error);
        expectedNumberOfNonCommentArgs.MatchingNotExhaustiveError = Test;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.assertNever = it;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.optionalIntString = compare;
        /** @type {function (string, string): ?} */
        expectedNumberOfNonCommentArgs.assertIntString = find;
        /** @type {function (Function, Function): ?} */
        expectedNumberOfNonCommentArgs.try_ = exports;
    }, {
        "./array" : 199,
        "./assert" : 200,
        "./object" : 202,
        "./promise" : 203,
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31
    }],
    202 : [function(proceed, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @param {Function} handler
         * @param {Array} contacts
         * @return {?}
         */
        function onSuccess(handler, contacts) {
            var curJson = {};
            return(0, iterator["default"])(contacts).forEach(function(key) {
                return curJson[key] = handler(key, contacts[key]);
            }), curJson;
        }
        /**
         * @param {Function} callback
         * @param {Array} options
         * @return {?}
         */
        function close(callback, options) {
            var internalValues = {};
            return(0, iterator["default"])(options).forEach(function(key) {
                if (callback(key, options[key])) {
                    internalValues[key] = options[key];
                }
            }), internalValues;
        }
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @return {?}
         */
        function values(expectedNumberOfNonCommentArgs) {
            return(0, iterator["default"])(expectedNumberOfNonCommentArgs).map(function(timeoutKey) {
                return expectedNumberOfNonCommentArgs[timeoutKey];
            });
        }
        /**
         * @param {Array} collection
         * @return {?}
         */
        function pluck(collection) {
            return(0, iterator["default"])(collection).map(function(method) {
                return[method, collection[method]];
            });
        }
        var value = proceed("babel-runtime/core-js/object/keys");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /** @type {function (Function, Array): ?} */
        expectedNumberOfNonCommentArgs.map = onSuccess;
        /** @type {function (Function, Array): ?} */
        expectedNumberOfNonCommentArgs.filter = close;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.values = values;
        /** @type {function (Array): ?} */
        expectedNumberOfNonCommentArgs.pairs = pluck;
    }, {
        "babel-runtime/core-js/object/keys" : 22
    }],
    203 : [function(proceed, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        var value = proceed("babel-runtime/core-js/promise");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var SafePromise;
        !function(calendar) {
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            function create(expectedNumberOfNonCommentArgs) {
                return new iterator["default"](expectedNumberOfNonCommentArgs);
            }
            /**
             * @return {?}
             */
            function makeRequest() {
                var resolveWith = void 0;
                var error = void 0;
                var getPromise = new iterator["default"](function(dataAndEvents, err) {
                    /** @type {(number|string)} */
                    resolveWith = dataAndEvents;
                    /** @type {(number|string)} */
                    error = err;
                });
                return{
                    promise : getPromise,
                    /**
                     * @param {Object} expectedNumberOfNonCommentArgs
                     * @return {undefined}
                     */
                    resolve : function(expectedNumberOfNonCommentArgs) {
                        resolveWith(expectedNumberOfNonCommentArgs);
                    },
                    /**
                     * @param {Object} silent
                     * @return {undefined}
                     */
                    reject : function(silent) {
                        error(silent);
                    }
                };
            }
            /**
             * @param {Function} cb
             * @return {?}
             */
            function sync(cb) {
                return create(function(callback, dataAndEvents) {
                    return callback(cb());
                });
            }
            /** @type {function (Object): ?} */
            calendar.create = create;
            /** @type {function (): ?} */
            calendar.createCompletionSource = makeRequest;
            /** @type {function (Function): ?} */
            calendar.sync = sync;
        }(SafePromise = expectedNumberOfNonCommentArgs.SafePromise || (expectedNumberOfNonCommentArgs.SafePromise = {}));
    }, {
        "babel-runtime/core-js/promise" : 24
    }],
    204 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var dom = require("babel-runtime/core-js/json/stringify");
        var h = $(dom);
        var selector = require("babel-runtime/core-js/object/keys");
        var elem = $(selector);
        var helper = require("babel-runtime/helpers/typeof");
        var update = $(helper);
        var tag = require("babel-runtime/helpers/defineProperty");
        var elements = $(tag);
        var items = require("babel-runtime/core-js/object/assign");
        var option = $(items);
        var form = require("babel-runtime/helpers/classCallCheck");
        var type = $(form);
        var nodes = require("babel-runtime/regenerator");
        var result = $(nodes);
        var ready = require("babel-runtime/core-js/promise");
        var ret = $(ready);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} opt_attributes
         * @param {(Element|string)} lastArrayIdSentFromServer
         * @param {Text} next
         * @return {?}
         */
        var then = function(expectedNumberOfNonCommentArgs, opt_attributes, lastArrayIdSentFromServer, next) {
            return new (lastArrayIdSentFromServer || (lastArrayIdSentFromServer = ret["default"]))(function(iterator, fail) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function done(optgroup) {
                    try {
                        reject(next.next(optgroup));
                    } catch (ex) {
                        fail(ex);
                    }
                }
                /**
                 * @param {?} msg
                 * @return {undefined}
                 */
                function ok(msg) {
                    try {
                        reject(next["throw"](msg));
                    } catch (ex) {
                        fail(ex);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function reject(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new lastArrayIdSentFromServer(function(iterator) {
                            iterator(x.value);
                        })).then(done, ok);
                    }
                }
                reject((next = next.apply(expectedNumberOfNonCommentArgs, opt_attributes || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        /**
         * @param {string} elem
         * @param {Node} data_user
         * @return {?}
         */
        var empty = function(elem, data_user) {
            return then(void 0, void 0, void 0, result["default"].mark(function end() {
                var data;
                return result["default"].wrap(function(self) {
                    for (;;) {
                        switch(self.prev = self.next) {
                            case 0:
                                return self.prev = 0, self.next = 3, data_user.get(elem);
                            case 3:
                                if (data = self.sent, "undefined" !== data) {
                                    /** @type {number} */
                                    self.next = 8;
                                    break;
                                }
                                return self.abrupt("return", void 0);
                            case 8:
                                return self.abrupt("return", data && JSON.parse(data));
                            case 9:
                                /** @type {number} */
                                self.next = 19;
                                break;
                            case 11:
                                if (self.prev = 11, self.t0 = self["catch"](0), !self.t0 || !self.t0.toString().includes("SyntaxError")) {
                                    /** @type {number} */
                                    self.next = 18;
                                    break;
                                }
                                throw data_user.remove(elem), new Error("'" + elem + "' has unparseable value, removing");;
                            case 18:
                                throw self.t0;;
                            case 19:
                                ;
                            case "end":
                                return self.stop();
                        }
                    }
                }, end, this, [[0, 11]]);
            }));
        };
        /**
         * @param {Object} contentHTML
         * @return {undefined}
         */
        var PrefsImpl = function initialize(contentHTML) {
            var self = this;
            (0, type["default"])(this, initialize);
            /** @type {Object} */
            this._api = contentHTML;
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            this.get = function(expectedNumberOfNonCommentArgs) {
                return then(self, void 0, void 0, result["default"].mark(function initialize() {
                    var _;
                    var i;
                    var c;
                    var self = this;
                    return result["default"].wrap(function(self) {
                        for (;;) {
                            switch(self.prev = self.next) {
                                case 0:
                                    if (_ = Array.isArray(expectedNumberOfNonCommentArgs), i = void 0, self.prev = 2, !_) {
                                        /** @type {number} */
                                        self.next = 11;
                                        break;
                                    }
                                    return expectedNumberOfNonCommentArgs = expectedNumberOfNonCommentArgs, self.next = 7, ret["default"].all(expectedNumberOfNonCommentArgs.map(function(dest) {
                                        return empty(dest, self._api);
                                    }));
                                case 7:
                                    c = self.sent;
                                    i = expectedNumberOfNonCommentArgs.reduce(function(deepDataAndEvents, opt_obj2, eventName) {
                                        return(0, option["default"])(deepDataAndEvents, (0, elements["default"])({}, opt_obj2, c[eventName]));
                                    }, {});
                                    /** @type {number} */
                                    self.next = 15;
                                    break;
                                case 11:
                                    return expectedNumberOfNonCommentArgs = expectedNumberOfNonCommentArgs, self.next = 14, empty(expectedNumberOfNonCommentArgs, this._api);
                                case 14:
                                    i = self.sent;
                                case 15:
                                    /** @type {number} */
                                    self.next = 21;
                                    break;
                                case 17:
                                    /** @type {number} */
                                    self.prev = 17;
                                    self.t0 = self["catch"](2);
                                    if (_) {
                                        i = {};
                                    }
                                    console.warn("prefs get error:", self.t0);
                                case 21:
                                    return self.abrupt("return", i);
                                case 22:
                                    ;
                                case "end":
                                    return self.stop();
                            }
                        }
                    }, initialize, this, [[2, 17]]);
                }));
            };
            /**
             * @param {Object} expectedNumberOfNonCommentArgs
             * @param {string} key
             * @return {?}
             */
            this.set = function(expectedNumberOfNonCommentArgs, key) {
                return then(self, void 0, void 0, result["default"].mark(function test() {
                    var record = this;
                    return result["default"].wrap(function(node) {
                        for (;;) {
                            switch(node.prev = node.next) {
                                case 0:
                                    if (null === expectedNumberOfNonCommentArgs || "object" !== ("undefined" === typeof expectedNumberOfNonCommentArgs ? "undefined" : (0, update["default"])(expectedNumberOfNonCommentArgs))) {
                                        /** @type {number} */
                                        node.next = 5;
                                        break;
                                    }
                                    return node.next = 3, ret["default"].all((0, elem["default"])(expectedNumberOfNonCommentArgs).map(function(name) {
                                        return record.set(name, expectedNumberOfNonCommentArgs[name]);
                                    }));
                                case 3:
                                    /** @type {number} */
                                    node.next = 14;
                                    break;
                                case 5:
                                    return node.prev = 5, key = void 0 === key ? "undefined" : (0, h["default"])(key), node.next = 9, this._api.set(expectedNumberOfNonCommentArgs, key);
                                case 9:
                                    /** @type {number} */
                                    node.next = 14;
                                    break;
                                case 11:
                                    /** @type {number} */
                                    node.prev = 11;
                                    node.t0 = node["catch"](5);
                                    console.warn("prefs set error", node.t0);
                                case 14:
                                    ;
                                case "end":
                                    return node.stop();
                            }
                        }
                    }, test, this, [[5, 11]]);
                }));
            };
            /**
             * @return {?}
             */
            this.all = function() {
                return then(self, void 0, void 0, result["default"].mark(function end() {
                    var target;
                    var name;
                    var src;
                    return result["default"].wrap(function(self) {
                        for (;;) {
                            switch(self.prev = self.next) {
                                case 0:
                                    return self.next = 2, this._api.getAll();
                                case 2:
                                    target = self.sent;
                                    for (name in target) {
                                        if ("undefined" === target[name]) {
                                            target[name] = void 0;
                                        } else {
                                            try {
                                                src = target[name];
                                                /** @type {*} */
                                                target[name] = src && JSON.parse(src);
                                            } catch (e) {
                                            }
                                        }
                                    }
                                    return self.abrupt("return", target);
                                case 5:
                                    ;
                                case "end":
                                    return self.stop();
                            }
                        }
                    }, end, this);
                }));
            };
            /**
             * @param {?} key
             * @return {?}
             */
            this.remove = function(key) {
                try {
                    return self._api.remove(key);
                } catch (name) {
                    return console.warn("prefs remove error", name), ret["default"].resolve();
                }
            };
            /**
             * @return {?}
             */
            this.clearAll = function() {
                try {
                    return self._api.removeAll()["catch"](function(key) {
                        return console.warn("prefs clearAll error", key);
                    });
                } catch (key) {
                    return console.warn("prefs clearAll error", key), ret["default"].resolve();
                }
            };
        };
        /** @type {function (Object): undefined} */
        expectedNumberOfNonCommentArgs.PrefsImpl = PrefsImpl;
    }, {
        "babel-runtime/core-js/json/stringify" : 16,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/core-js/object/keys" : 22,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/helpers/typeof" : 34,
        "babel-runtime/regenerator" : 35
    }],
    205 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        var value = require("babel-runtime/core-js/object/assign");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var helper = require("./user/actions");
        var nodes = require("./settings/actions");
        var Block = require("./connection/actions");
        expectedNumberOfNonCommentArgs.pureActions = (0, iterator["default"])({}, helper, Block, nodes);
    }, {
        "./connection/actions" : 206,
        "./settings/actions" : 208,
        "./user/actions" : 212,
        "babel-runtime/core-js/object/assign" : 17
    }],
    206 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {boolean} textStatus
         * @return {?}
         */
        function error(textStatus) {
            return{
                type : expectedNumberOfNonCommentArgs.t.UPDATE_CONNECTION,
                data : textStatus
            };
        }
        /**
         * @param {?} o
         * @return {?}
         */
        function compileNode(o) {
            return{
                type : expectedNumberOfNonCommentArgs.t.ONLINE_STATE,
                online : o
            };
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.t = {
            UPDATE_CONNECTION : "connection/UPDATE_CONNECTION",
            ONLINE_STATE : "connection/ONLINE_STATE"
        };
        /** @type {function (boolean): ?} */
        expectedNumberOfNonCommentArgs.updateConnection = error;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.onlineConnection = compileNode;
    }, {}],
    207 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function h(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @return {?}
         */
        function show() {
            var best = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : expectedNumberOfNonCommentArgs.defaultConnection;
            var element = arguments[1];
            var type = element.type;
            var names = element.data;
            var online = element.online;
            switch(type) {
                case i18n.t.ONLINE_STATE:
                    return(0, elem["default"])({}, best, {
                        online : online
                    });
                case i18n.t.UPDATE_CONNECTION:
                    return(0, elem["default"])({}, best, names);
                default:
                    return best;
            }
        }
        var selector = require("babel-runtime/core-js/object/assign");
        var elem = h(selector);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var i18n = require("./actions");
        expectedNumberOfNonCommentArgs.defaultConnection = {
            networkOffline : !window.navigator.onLine,
            cookiesDisabled : navigator.cookieEnabled === false,
            online : true
        };
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.connectionReducer = show;
    }, {
        "./actions" : 206,
        "babel-runtime/core-js/object/assign" : 17
    }],
    208 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} textStatus
         * @param {Object} request
         * @return {?}
         */
        function error(textStatus, request) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SET_DAPI_PROP,
                propKey : textStatus,
                data : request
            };
        }
        /**
         * @param {Object} task
         * @return {?}
         */
        function build(task) {
            return{
                type : expectedNumberOfNonCommentArgs.t.CHANGE_WEAK_DIALECT,
                data : task
            };
        }
        /**
         * @param {boolean} z
         * @return {?}
         */
        function getQuatertionFromEuler(z) {
            return{
                type : expectedNumberOfNonCommentArgs.t.CHANGE_STRONG_DIALECT,
                data : z
            };
        }
        /**
         * @param {boolean} b
         * @return {?}
         */
        function selector_sortOrder(b) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SETTINGS_INITIAL,
                data : b
            };
        }
        /**
         * @param {Function} o
         * @return {?}
         */
        function compileNode(o) {
            return{
                type : expectedNumberOfNonCommentArgs.t.TOGGLE_DEFS,
                /** @type {Function} */
                enabledDefs : o
            };
        }
        /**
         * @param {Function} value
         * @param {string} b
         * @return {?}
         */
        function fn(value, b) {
            return{
                type : expectedNumberOfNonCommentArgs.t.TOGGLE_SITE,
                domain : b,
                /** @type {Function} */
                enabled : value
            };
        }
        /**
         * @param {Object} task
         * @param {string} domain
         * @return {?}
         */
        function run(task, domain) {
            return{
                type : expectedNumberOfNonCommentArgs.t.TOGGLE_FIELD,
                domain : domain,
                data : task
            };
        }
        /**
         * @return {?}
         */
        function scanPunctuator() {
            return{
                type : expectedNumberOfNonCommentArgs.t.SEEN_NEWS
            };
        }
        /**
         * @return {?}
         */
        function buildRule() {
            return{
                type : expectedNumberOfNonCommentArgs.t.SHOW_ONBOARDING
            };
        }
        /**
         * @return {?}
         */
        function compileOptions() {
            return{
                type : expectedNumberOfNonCommentArgs.t.SEEN_ONBOARDING
            };
        }
        /**
         * @param {boolean} recurring
         * @return {?}
         */
        function scheduleFunction(recurring) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SHOW_NEWS,
                showNews : recurring
            };
        }
        /**
         * @return {?}
         */
        function findIndex() {
            return{
                type : expectedNumberOfNonCommentArgs.t.SEEN_REFERRALS
            };
        }
        /**
         * @return {?}
         */
        function escaped() {
            return{
                type : expectedNumberOfNonCommentArgs.t.CLICK_REFERRALS
            };
        }
        /**
         * @param {?} dataAndEvents
         * @return {?}
         */
        function clone(dataAndEvents) {
            return{
                type : expectedNumberOfNonCommentArgs.t.TOGGLE_POPUP,
                isPopupDisabled : dataAndEvents
            };
        }
        /**
         * @param {string} domain
         * @return {?}
         */
        function create(domain) {
            return{
                type : expectedNumberOfNonCommentArgs.t.ENABLE_EMAIL_FEEDBACK,
                domain : domain
            };
        }
        /**
         * @param {Object} obj
         * @return {?}
         */
        function shuffle(obj) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SAVE_ANONYMOUS_PROPERTIES,
                props : obj
            };
        }
        /**
         * @param {?} failing_message
         * @return {?}
         */
        function report(failing_message) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SEEN_EMAIL_PERCEPTION_POPUP,
                seenEmailPerceptionPopupDate : failing_message
            };
        }
        /**
         * @return {?}
         */
        function kw() {
            return{
                type : expectedNumberOfNonCommentArgs.t.SET_EMAIL_PERCEPTION_POPUP_STATE,
                emailPerceptionPopupEnabled : false
            };
        }
        /**
         * @return {?}
         */
        function scanVarargLiteral() {
            return{
                type : expectedNumberOfNonCommentArgs.t.SET_EMAIL_PERCEPTION_POPUP_STATE,
                emailPerceptionPopupEnabled : true
            };
        }
        /**
         * @param {string} title
         * @param {?} id
         * @return {?}
         */
        function test(title, id) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SAVE_FEEDBACK_DATA,
                subject : title,
                docId : id
            };
        }
        /**
         * @return {?}
         */
        function diff_cleanupSemanticScore_() {
            return{
                type : expectedNumberOfNonCommentArgs.t.DISABLE_ON_TAB
            };
        }
        /**
         * @param {string} domain
         * @return {?}
         */
        function request(domain) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SHOW_DISABLE_REMINDER,
                domain : domain
            };
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.t = {
            SETTINGS_INITIAL : "settings/SETTINGS_INITIAL",
            TOGGLE_DEFS : "settings/TOGGLE_DEFS",
            TOGGLE_SITE : "settings/TOGGLE_SITE",
            TOGGLE_FIELD : "settings/TOGGLE_FIELD",
            TOGGLE_POPUP : "settings/TOGGLE_POPUP",
            DISABLE_ON_TAB : "settings/DISABLE_ON_TAB",
            SHOW_DISABLE_REMINDER : "settings/SHOW_DISABLE_REMINDER",
            SHOW_NEWS : "settings/SHOW_NEWS",
            SEEN_NEWS : "settings/SEEN_NEWS",
            SEEN_REFERRALS : "settings/SEEN_REFERRALS",
            CLICK_REFERRALS : "settings/CLICK_REFERRALS",
            SHOW_ONBOARDING : "settings/SHOW_ONBOARDING",
            SEEN_ONBOARDING : "settings/SEEN_ONBOARDING",
            SET_DAPI_PROP : "settings/SET_DAPI_PROP",
            CHANGE_WEAK_DIALECT : "settings/CHANGE_WEAK_DIALECT",
            CHANGE_STRONG_DIALECT : "settings/CHANGE_STRONG_DIALECT",
            SAVE_ANONYMOUS_PROPERTIES : "settings/SAVE_ANONYMOUS_PROPERTIES",
            ENABLE_EMAIL_FEEDBACK : "settings/ENABLE_EMAIL_FEEDBACK",
            SAVE_FEEDBACK_DATA : "settings/SAVE_FEEDBACK_DATA",
            SEEN_EMAIL_PERCEPTION_POPUP : "settings/EMAIL_PERCEPTION_POPUP_SEEN",
            SET_EMAIL_PERCEPTION_POPUP_STATE : "settings/SET_EMAIL_PERCEPTION_POPUP_STATE"
        };
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.DAPI_ACTIONS = [expectedNumberOfNonCommentArgs.t.CHANGE_WEAK_DIALECT, expectedNumberOfNonCommentArgs.t.CHANGE_STRONG_DIALECT];
        /** @type {Array} */
        expectedNumberOfNonCommentArgs.CACHED_ACTIONS = [expectedNumberOfNonCommentArgs.t.TOGGLE_DEFS, expectedNumberOfNonCommentArgs.t.TOGGLE_SITE, expectedNumberOfNonCommentArgs.t.TOGGLE_FIELD, expectedNumberOfNonCommentArgs.t.SEEN_NEWS, expectedNumberOfNonCommentArgs.t.SEEN_REFERRALS, expectedNumberOfNonCommentArgs.t.CLICK_REFERRALS, expectedNumberOfNonCommentArgs.t.SHOW_ONBOARDING, expectedNumberOfNonCommentArgs.t.SEEN_ONBOARDING, expectedNumberOfNonCommentArgs.t.SEEN_EMAIL_PERCEPTION_POPUP, expectedNumberOfNonCommentArgs.t.SET_EMAIL_PERCEPTION_POPUP_STATE,
            expectedNumberOfNonCommentArgs.t.SHOW_DISABLE_REMINDER];
        /** @type {function (?, Object): ?} */
        expectedNumberOfNonCommentArgs.setDapiProp = error;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.changeWeakDialect = build;
        /** @type {function (boolean): ?} */
        expectedNumberOfNonCommentArgs.changeStrongDialect = getQuatertionFromEuler;
        /** @type {function (boolean): ?} */
        expectedNumberOfNonCommentArgs.initialSettings = selector_sortOrder;
        /** @type {function (Function): ?} */
        expectedNumberOfNonCommentArgs.toggleDefs = compileNode;
        /** @type {function (Function, string): ?} */
        expectedNumberOfNonCommentArgs.toggleSite = fn;
        /** @type {function (Object, string): ?} */
        expectedNumberOfNonCommentArgs.toggleField = run;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.seenNews = scanPunctuator;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.showOnboarding = buildRule;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.seenOnboarding = compileOptions;
        /** @type {function (boolean): ?} */
        expectedNumberOfNonCommentArgs.showNews = scheduleFunction;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.seenReferrals = findIndex;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.clickReferrals = escaped;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.togglePopup = clone;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.enableEmailFeedback = create;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.saveAnonymousProps = shuffle;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.seenEmailPerceptionPopup = report;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.disableEmailPerceptionPopup = kw;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.enableEmailPerceptionPopup = scanVarargLiteral;
        /** @type {function (string, ?): ?} */
        expectedNumberOfNonCommentArgs.saveFeedbackData = test;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.disableOnTab = diff_cleanupSemanticScore_;
        /** @type {function (string): ?} */
        expectedNumberOfNonCommentArgs.showDisableReminder = request;
    }, {}],
    209 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} s
         * @return {?}
         */
        function walk(s) {
            return s && s.__esModule ? s : {
                "default" : s
            };
        }
        /**
         * @return {?}
         */
        function update() {
            var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var options = arguments[1];
            var type = options.type;
            var value = options.data;
            var computed = void 0 === value ? {} : value;
            var domain = options.domain;
            var async = options.enabledDefs;
            var enabled = options.enabled;
            var successCb = options.showNews;
            var thisArg = options.isPopupDisabled;
            var stackStartFunction = options.seenEmailPerceptionPopupDate;
            var bench = options.emailPerceptionPopupEnabled;
            var which = options.propKey;
            var r20 = data[domain] || {};
            switch(type) {
                case i18n.t.SETTINGS_INITIAL:
                    return(0, result["default"])({}, data, computed);
                case i18n.t.TOGGLE_DEFS:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            enabledDefs : async
                        })
                    });
                case i18n.t.TOGGLE_SITE:
                    return(0, result["default"])({}, data, (0, h["default"])({}, domain, (0, result["default"])({}, r20, {
                        enabled : enabled,
                        disabledDate : enabled === true ? null : Date.now()
                    })));
                case i18n.t.TOGGLE_FIELD:
                    return(0, result["default"])({}, data, (0, h["default"])({}, domain, (0, result["default"])({}, data[domain], {
                        disabledFields : (0, result["default"])({}, r20.disabledFields, computed)
                    })));
                case i18n.t.ENABLE_EMAIL_FEEDBACK:
                    return(0, result["default"])({}, data, (0, h["default"])({}, domain, (0, result["default"])({}, data[domain], {
                        emailFeedbackEnabled : true
                    })));
                case i18n.t.SHOW_NEWS:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            showNews : successCb
                        })
                    });
                case i18n.t.SHOW_ONBOARDING:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            showOnboarding : true
                        })
                    });
                case i18n.t.SEEN_ONBOARDING:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            showOnboarding : false
                        })
                    });
                case i18n.t.SEEN_EMAIL_PERCEPTION_POPUP:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            seenEmailPerceptionPopupDate : stackStartFunction
                        })
                    });
                case i18n.t.SET_EMAIL_PERCEPTION_POPUP_STATE:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            emailPerceptionPopupEnabled : bench
                        })
                    });
                case i18n.t.SEEN_NEWS:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            seenNewsVersion : Block.newsId
                        })
                    });
                case i18n.t.TOGGLE_POPUP:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            isPopupDisabled : thisArg
                        })
                    });
                case i18n.t.SEEN_REFERRALS:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            referralNewsBadge : true
                        })
                    });
                case i18n.t.CLICK_REFERRALS:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, {
                            referralWasClicked : true
                        })
                    });
                case i18n.t.SET_DAPI_PROP:
                    return(0, result["default"])({}, data, {
                        common : (0, result["default"])({}, data.common, (0, h["default"])({}, which, computed))
                    });
                case i18n.t.SHOW_DISABLE_REMINDER:
                    return(0, result["default"])({}, data, (0, h["default"])({}, domain, (0, result["default"])({}, r20, {
                        disabledDate : Date.now()
                    })));
                default:
                    return data;
            }
        }
        var c = require("babel-runtime/helpers/defineProperty");
        var h = walk(c);
        var nodes = require("babel-runtime/core-js/object/assign");
        var result = walk(nodes);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var Block = require("lib/config");
        var i18n = require("./actions");
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.settingsReducer = update;
    }, {
        "./actions" : 208,
        "babel-runtime/core-js/object/assign" : 17,
        "babel-runtime/helpers/defineProperty" : 29,
        "lib/config" : 167
    }],
    210 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {boolean} textStatus
         * @return {?}
         */
        function error(textStatus) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SET_ACTIVE_TAB,
                data : textStatus
            };
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.t = {
            SET_ACTIVE_TAB : "tabs/SET_ACTIVE_TAB"
        };
        /** @type {function (boolean): ?} */
        expectedNumberOfNonCommentArgs.setActiveTab = error;
    }, {}],
    211 : [function(proceed, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @return {?}
         */
        function show() {
            var best = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var event = arguments[1];
            var type = event.type;
            var active = event.data;
            switch(type) {
                case val.t.SET_ACTIVE_TAB:
                    return(0, iterator["default"])({}, best, {
                        active : active
                    });
                default:
                    return best;
            }
        }
        var value = proceed("babel-runtime/core-js/object/assign");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var val = proceed("./actions");
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.tabsReducer = show;
    }, {
        "./actions" : 210,
        "babel-runtime/core-js/object/assign" : 17
    }],
    212 : [function(dataAndEvents, deepDataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {Object} textStatus
         * @return {?}
         */
        function error(textStatus) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SET_USER,
                data : textStatus
            };
        }
        /**
         * @param {Object} task
         * @return {?}
         */
        function fn(task) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SET_SETTINGS,
                data : task
            };
        }
        /**
         * @param {?} x
         * @return {?}
         */
        function sign(x) {
            return{
                type : expectedNumberOfNonCommentArgs.t.SESSION_INVALIDATE,
                reason : x
            };
        }
        /**
         * @return {?}
         */
        function scanPunctuator() {
            return{
                type : expectedNumberOfNonCommentArgs.t.INC_FIXED
            };
        }
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        expectedNumberOfNonCommentArgs.t = {
            SET_USER : "user/SET_USER",
            SET_SETTINGS : "user/SET_SETTINGS",
            SESSION_INVALIDATE : "user/SESSION_INVALIDATE",
            INC_FIXED : "user/INC_FIXED"
        };
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.setUser = error;
        /** @type {function (Object): ?} */
        expectedNumberOfNonCommentArgs.setSettings = fn;
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.sessionInvalidate = sign;
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.incFixed = scanPunctuator;
    }, {}],
    213 : [function(proceed, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @return {?}
         */
        function show() {
            var best = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : expectedNumberOfNonCommentArgs.defaultUser;
            var event = arguments[1];
            var type = event.type;
            var value = event.data;
            var config = void 0 === value ? {} : value;
            switch(type) {
                case val.t.SET_USER:
                    return config;
                case val.t.SET_SETTINGS:
                    return(0, iterator["default"])({}, best, {
                        settings : config
                    });
                case val.t.INC_FIXED:
                    var fixed_errors = best.fixed_errors + 1;
                    return(0, iterator["default"])({}, best, {
                        fixed_errors : fixed_errors
                    });
                default:
                    return best;
            }
        }
        var value = proceed("babel-runtime/core-js/object/assign");
        var iterator = lookupIterator(value);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var val = proceed("./actions");
        expectedNumberOfNonCommentArgs.defaultUser = {
            anonymous : true,
            premium : false
        };
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.userReducer = show;
    }, {
        "./actions" : 212,
        "babel-runtime/core-js/object/assign" : 17
    }],
    214 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} name
         * @return {?}
         */
        function func(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        /**
         * @param {?} msg
         * @return {?}
         */
        function debug(msg) {
            var removeListener = device.combineReducers({
                user : subject.userReducer,
                tabs : emptyJ.tabsReducer,
                settings : opts.settingsReducer,
                connection : self.connectionReducer
            });
            var proplist = log({
                level : "debug",
                colors : {
                    /**
                     * @return {?}
                     */
                    title : function() {
                        return "green";
                    }
                }
            });
            return device.createStore(removeListener, {}, device.applyMiddleware(msg, proplist));
        }
        var obj = $("babel-runtime/regenerator");
        var keys = func(obj);
        var node = $("babel-runtime/helpers/createClass");
        var events = func(node);
        var name = $("babel-runtime/helpers/classCallCheck");
        var item = func(name);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var log = $("redux-logger");
        var device = $("redux");
        var history = $("redux-saga");
        var self = $("./state/connection/reducer");
        var opts = $("./state/settings/reducer");
        var subject = $("./state/user/reducer");
        var emptyJ = $("./state/tabs/reducer");
        var $spy = $("lib/config");
        var ctx = $("./state/actions");
        var $src = $("./state/actions");
        expectedNumberOfNonCommentArgs.pureActions = $src.pureActions;
        var root = $("redux-saga/effects");
        var $window = $("lib/page-config");
        /**
         * @param {Object} details
         * @param {?} failing_message
         * @return {undefined}
         */
        var AuthSagaRunners = function report(details, failing_message) {
            var me = this;
            (0, item["default"])(this, report);
            /** @type {Object} */
            this._store = details;
            this._userSagas = failing_message;
            /**
             * @return {?}
             */
            this.refreshUser = function() {
                var proxy;
                /** @type {number} */
                var expectedNumberOfNonCommentArgs = arguments.length;
                /** @type {Array} */
                var args = Array(expectedNumberOfNonCommentArgs);
                /** @type {number} */
                var $_i = 0;
                for (;$_i < expectedNumberOfNonCommentArgs;$_i++) {
                    args[$_i] = arguments[$_i];
                }
                return(proxy = me._store).runSaga.apply(proxy, [me._userSagas.externalUpdateUser.bind(me._userSagas)].concat(args)).done;
            };
            /**
             * @param {string} object
             * @return {?}
             */
            this.signin = function(object) {
                return me._store.runSaga(me._userSagas.authRequest.bind(me._userSagas), $spy.URLS.authSignin, object, "app_signin_success").done;
            };
            /**
             * @param {?} done
             * @return {?}
             */
            this.signup = function(done) {
                return me._store.runSaga(me._userSagas.authRequest.bind(me._userSagas), $spy.URLS.authSignup, done, "app_signup_success").done;
            };
        };
        /** @type {function (Object, ?): undefined} */
        expectedNumberOfNonCommentArgs.AuthSagaRunners = AuthSagaRunners;
        var StoreControllerImpl = function() {
            /**
             * @param {?} next
             * @param {?} emitter
             * @param {?} event
             * @param {?} path
             * @return {undefined}
             */
            function update(next, emitter, event, path) {
                var _this = this;
                (0, item["default"])(this, update);
                this._userSagas = next;
                this._settingsSagas = emitter;
                this._tabsSagas = event;
                this._connectionSagas = path;
                var data = history["default"](next.start.bind(next), emitter.start.bind(emitter), path.start.bind(path));
                this.store = debug(data);
                this.runSaga = data.run;
                /**
                 * @return {?}
                 */
                this.initStore = function() {
                    return data.run(_this._startupFlow.bind(_this)).done.then(function() {
                        _this.store.subscribe(function() {
                            return data.run(event.sendStateToTabs.bind(event));
                        });
                    });
                };
                this.actions = device.bindActionCreators(ctx.pureActions, this.store.dispatch);
            }
            return(0, events["default"])(update, [{
                key : "_startupFlow",
                value : keys["default"].mark(function end() {
                    return keys["default"].wrap(function(current) {
                        for (;;) {
                            switch(current.prev = current.next) {
                                case 0:
                                    return current.next = 2, [root.call([this._settingsSagas, this._settingsSagas.setInitialSettings]), root.call([$window.pageConfig, $window.pageConfig.init]), root.call([this._userSagas, this._userSagas.updateUser], {
                                        failoverFromCache : true
                                    })];
                                case 2:
                                    return current.next = 4, root.fork([this._connectionSagas, this._connectionSagas.monitorIsIncognito]);
                                case 4:
                                    return current.next = 6, root.call([this._tabsSagas, this._tabsSagas.start]);
                                case 6:
                                    ;
                                case "end":
                                    return current.stop();
                            }
                        }
                    }, end, this);
                })
            }]), update;
        }();
        expectedNumberOfNonCommentArgs.StoreControllerImpl = StoreControllerImpl;
    }, {
        "./state/actions" : 205,
        "./state/connection/reducer" : 207,
        "./state/settings/reducer" : 209,
        "./state/tabs/reducer" : 211,
        "./state/user/reducer" : 213,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/regenerator" : 35,
        "lib/config" : 167,
        "lib/page-config" : 177,
        redux : "redux",
        "redux-logger" : "redux-logger",
        "redux-saga" : "redux-saga",
        "redux-saga/effects" : 141
    }],
    215 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var ready = require("babel-runtime/core-js/object/get-prototype-of");
        var ret = $(ready);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var selector = require("babel-runtime/helpers/createClass");
        var elem = $(selector);
        var json = require("babel-runtime/helpers/possibleConstructorReturn");
        var obj = $(json);
        var helper = require("babel-runtime/helpers/inherits");
        var update = $(helper);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var assert = require("lib/dom");
        var args = require("lib/config");
        var test = require("lib/request");
        var o = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        var Footer = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                (0, result["default"])(this, value);
                var me = (0, obj["default"])(this, (value.__proto__ || (0, ret["default"])(value)).apply(this, arguments));
                return me.addDocument = function() {
                    /**
                     * @param {string} type
                     * @return {undefined}
                     */
                    function execute(type) {
                        console.error("request failed", type);
                    }
                    /**
                     * @param {string} type
                     * @return {undefined}
                     */
                    var Context = function(type) {
                        /** @type {string} */
                        var camelKey = args.URLS.docs + "/" + type;
                        me.props.openUrl(camelKey);
                    };
                    return test.fetch(args.URLS.docsApi, {
                        data : {
                            content : ""
                        },
                        method : "post",
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    }).then(function(li) {
                        var ul = li.id;
                        return Context(ul);
                    })["catch"](execute);
                }, me;
            }
            return(0, update["default"])(value, deepDataAndEvents), (0, elem["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    return dom.createElement("div", {
                        className : o.footer
                    }, dom.createElement("span", {
                        onClick : this.addDocument,
                        className : assert.cs(o.new_document, o.footer_btn)
                    }, "New Document"), dom.createElement("a", {
                        href : args.URLS.app,
                        target : "_blank",
                        className : assert.cs(o.my_grammarly, o.footer_btn)
                    }, "My Grammarly"));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.Footer = Footer;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/config" : 167,
        "lib/dom" : 169,
        "lib/request" : 182,
        react : "react"
    }],
    216 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var Y = require("lib/dom");
        var rep = require("lib/config");
        var Block = require("lib/util");
        var o = {
            header : "_0cc899-header",
            logo : "_0cc899-logo",
            chrome : "_0cc899-chrome",
            safari : "_0cc899-safari",
            firefox : "_0cc899-firefox"
        };
        /**
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.Header = function() {
            return dom.createElement("div", {
                className : o.header
            }, dom.createElement("a", {
                target : "_blank",
                href : rep.URLS.app,
                className : Y.cs(o.logo, o[Block.getBrowser()])
            }));
        };
    }, {
        "lib/config" : 167,
        "lib/dom" : 169,
        "lib/util" : 198,
        react : "react"
    }],
    217 : [function($sanitize, dataAndEvents, deepDataAndEvents) {
        /** @type {(Element|null)} */
        window.IS_POPUP = document.querySelector(".popup");
        if (window.IS_POPUP) {
            $sanitize("./popup");
        }
    }, {
        "./popup" : 219
    }],
    218 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function parseInt(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @return {undefined}
         */
        function close() {
            self.emitDomEvent("close-popup");
        }
        /**
         * @return {undefined}
         */
        function resize() {
            var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var force = options.force;
            self.emitDomEvent("update-window-size", {
                force : force
            });
        }
        /**
         * @param {string} key
         * @return {undefined}
         */
        function fn(key) {
            collection.emitBackground("open-url", key);
            close();
        }
        /**
         * @param {Object} res
         * @param {Object} status
         * @return {undefined}
         */
        function success(res, status) {
            /**
             * @param {?} elem
             * @return {?}
             */
            var restoreScript = function(elem) {
                return elem;
            };
            /**
             * @param {?} m3
             * @param {?} force
             * @return {?}
             */
            var c = function(m3, force) {
                return{
                    actions : status
                };
            };
            var type = data.connect(restoreScript, c)(arg);
            flash.render(view.createElement(data.Provider, {
                store : res
            }, view.createElement(type, {
                /** @type {function (): undefined} */
                close : close,
                /** @type {function (): undefined} */
                resize : resize,
                /** @type {function (string): undefined} */
                openUrl : fn
            })), document.querySelector(".popup"));
        }
        var name = $("babel-runtime/helpers/toConsumableArray");
        var h = parseInt(name);
        var entry = $("babel-runtime/core-js/object/get-prototype-of");
        var ret = parseInt(entry);
        var b = $("babel-runtime/helpers/classCallCheck");
        var bp = parseInt(b);
        var style = $("babel-runtime/helpers/createClass");
        var target = parseInt(style);
        var val = $("babel-runtime/helpers/possibleConstructorReturn");
        var type = parseInt(val);
        var date = $("babel-runtime/helpers/inherits");
        var result = parseInt(date);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var view = $("react");
        var flash = $("react-dom");
        var data = $("react-redux");
        var self = $("lib/dom");
        var collection = $("lib/message");
        var _this = $("lib/tracking");
        var that = $("./signin");
        var opt = $("./settings");
        var el = $("./unsupported");
        var arg = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                return(0, bp["default"])(this, value), (0, type["default"])(this, (value.__proto__ || (0, ret["default"])(value)).apply(this, arguments));
            }
            return(0, result["default"])(value, deepDataAndEvents), (0, target["default"])(value, [{
                key : "componentDidUpdate",
                /**
                 * @return {undefined}
                 */
                value : function() {
                    this.props.resize();
                }
            }, {
                key : "componentDidMount",
                /**
                 * @return {undefined}
                 */
                value : function() {
                    var ret = this;
                    this.props.resize({
                        force : true
                    });
                    self.on.call(flash.findDOMNode(this), "click", function(evt) {
                        var t = evt.target;
                        var rreturn = "A" === t.nodeName ? t : t.parentNode && "A" === t.parentNode.nodeName ? t.parentNode : null;
                        if (rreturn) {
                            evt.preventDefault();
                            ret.processHrefClick(rreturn);
                        }
                    });
                }
            }, {
                key : "componentWillMount",
                /**
                 * @return {undefined}
                 */
                value : function() {
                    self.on.call(document, "popup-open", this.props.resize);
                }
            }, {
                key : "processHrefClick",
                /**
                 * @param {string} name
                 * @return {undefined}
                 */
                value : function(name) {
                    var current = name.href;
                    var data = name.dataset;
                    var param = data.fire;
                    if (param) {
                        var ary = param.split(", ");
                        _this.fire.apply(_this, [ary[0]].concat((0, h["default"])(ary.splice(1))));
                    }
                    if (current) {
                        fn(current);
                    }
                }
            }, {
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var context = this.props;
                    var parentModuleMap = context.user.anonymous;
                    var config = context.config;
                    var data = config.enabled;
                    var params = config.servicePage;
                    var parentName = parentModuleMap ? view.createElement(that.SigninComponent, null) : data || params ? view.createElement(opt.SettingsComponent, context) : view.createElement(el.UnsupportedComponent, context);
                    return view.createElement("div", null, parentName);
                }
            }]), value;
        }(view.Component);
        expectedNumberOfNonCommentArgs.MainView = arg;
        /** @type {function (Object, Object): undefined} */
        expectedNumberOfNonCommentArgs.renderMainView = success;
    }, {
        "./settings" : 222,
        "./signin" : 228,
        "./unsupported" : 230,
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "babel-runtime/helpers/toConsumableArray" : 33,
        "lib/dom" : 169,
        "lib/message" : 171,
        "lib/tracking" : 192,
        react : "react",
        "react-dom" : "react-dom",
        "react-redux" : "react-redux"
    }],
    219 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default" : value
            };
        }
        /**
         * @return {?}
         */
        function init() {
            return setup(this, void 0, void 0, iterator["default"].mark(function end() {
                var isInitialized;
                var that;
                var node;
                var text;
                return iterator["default"].wrap(function(current) {
                    for (;;) {
                        switch(current.prev = current.next) {
                            case 0:
                                /** @type {boolean} */
                                isInitialized = false;
                                span.addClass(document.documentElement, browser.getBrowser());
                                if (browser.isWindows()) {
                                    span.addClass(document.documentElement, "windows");
                                }
                                that = emptyJ.createMirrorStore(function(dataAndEvents) {
                                    if (!isInitialized) {
                                        /** @type {boolean} */
                                        isInitialized = true;
                                        initialize(node, text);
                                    }
                                });
                                node = that.store;
                                text = that.actions;
                                tab.emitBackground("tab-connected", {
                                    tab : "popup"
                                });
                                browser.asyncCall(function() {
                                    return!isInitialized && _self.logger.settingsPopupTimeout();
                                }, 2E3);
                            case 6:
                                ;
                            case "end":
                                return current.stop();
                        }
                    }
                }, end, this);
            }));
        }
        /**
         * @param {Object} options
         * @param {Object} data
         * @return {undefined}
         */
        function debug(options, data) {
            var event = options.config;
            var session = options.user;
            var obj = options.settings;
            var enabled = event.enabled;
            _self.fire("popup-open");
            if (!session.anonymous) {
                if (enabled) {
                    if (obj.showNews) {
                        data.seenNews();
                    }
                    if (session.referral) {
                        _self.fire("referral-shown", "menu");
                        if (!obj.referralNewsBadge) {
                            data.seenReferrals();
                        }
                    }
                } else {
                    _self.fire("popup-open-on-unsupported");
                }
            }
        }
        /**
         * @param {string} name
         * @param {Object} type
         * @return {undefined}
         */
        function initialize(name, type) {
            console.warn("RENDER FROM", name, type);
            frame.renderMainView(name, type);
            if (browser.isSafari()) {
                document.addEventListener("popup-open", function() {
                    debug(name.getState(), type);
                    tab.emitBackground("tab-connected", {
                        tab : "popup"
                    });
                });
            } else {
                debug(name.getState(), type);
            }
        }
        var value = $("babel-runtime/regenerator");
        var iterator = lookupIterator(value);
        var obj = $("babel-runtime/core-js/promise");
        var keys = lookupIterator(obj);
        /**
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Array} args
         * @param {(Element|string)} opt_attributes
         * @param {Text} self
         * @return {?}
         */
        var setup = function(expectedNumberOfNonCommentArgs, args, opt_attributes, self) {
            return new (opt_attributes || (opt_attributes = keys["default"]))(function(iterator, fail) {
                /**
                 * @param {string} optgroup
                 * @return {undefined}
                 */
                function handler(optgroup) {
                    try {
                        done(self.next(optgroup));
                    } catch (ex) {
                        fail(ex);
                    }
                }
                /**
                 * @param {?} e
                 * @return {undefined}
                 */
                function ok(e) {
                    try {
                        done(self["throw"](e));
                    } catch (ex) {
                        fail(ex);
                    }
                }
                /**
                 * @param {Object} x
                 * @return {undefined}
                 */
                function done(x) {
                    if (x.done) {
                        iterator(x.value);
                    } else {
                        (new opt_attributes(function(iterator) {
                            iterator(x.value);
                        })).then(handler, ok);
                    }
                }
                done((self = self.apply(expectedNumberOfNonCommentArgs, args || [])).next());
            });
        };
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var span = $("lib/dom");
        var tab = $("lib/message");
        var _self = $("lib/tracking");
        var emptyJ = $("lib/store-mirror");
        var browser = $("lib/util");
        var frame = $("./main-view");
        init()["catch"](function(e) {
            return console.log("EROROR: POPUP INIT", e.message);
        });
        /** @type {function (): ?} */
        expectedNumberOfNonCommentArgs.init = init;
        /** @type {function (Object, Object): undefined} */
        expectedNumberOfNonCommentArgs.track = debug;
    }, {
        "./main-view" : 218,
        "babel-runtime/core-js/promise" : 24,
        "babel-runtime/regenerator" : 35,
        "lib/dom" : 169,
        "lib/message" : 171,
        "lib/store-mirror" : 184,
        "lib/test-api" : 185,
        "lib/tracking" : 192,
        "lib/util" : 198
    }],
    220 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var selector = require("babel-runtime/core-js/object/get-prototype-of");
        var elem = $(selector);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        var json = require("babel-runtime/helpers/possibleConstructorReturn");
        var obj = $(json);
        var c = require("babel-runtime/helpers/inherits");
        var h = $(c);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var self = require("lib/dom");
        var m = require("lib/tracking");
        var item = {
            select_checkbox : "_a7c193-select_checkbox",
            checkbox : "_a7c193-checkbox",
            checkbox_check : "_a7c193-checkbox_check",
            checkbox_check_round : "_a7c193-checkbox_check_round"
        };
        var el = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        var DefsSwitcher = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                (0, result["default"])(this, value);
                var me = (0, obj["default"])(this, (value.__proto__ || (0, elem["default"])(value)).apply(this, arguments));
                return me.onEnableDefsClick = function(event) {
                    var lookupIterator = me.props.toggleDefs;
                    var value = event.target.checked;
                    lookupIterator(value);
                    m.fire("change-defs", {
                        enabled : value
                    });
                }, me;
            }
            return(0, h["default"])(value, deepDataAndEvents), (0, update["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var checked = this.props.enabledDefs;
                    var cls = self.cs(el.def_switcher, el.line, el.setting_item, checked ? el.on : el.off);
                    return dom.createElement("div", {
                        className : cls
                    }, dom.createElement("label", {
                        className : item.select_checkbox
                    }, "Show Definitions and Synonyms ", dom.createElement("br", null), "via Double Clicks (All Sites)", dom.createElement("input", {
                        className : item.checkbox,
                        onChange : this.onEnableDefsClick,
                        checked : checked,
                        type : "checkbox"
                    }), dom.createElement("div", {
                        className : item.checkbox_check
                    }, dom.createElement("div", {
                        className : item.checkbox_check_round
                    }))), dom.createElement("div", {
                        className : el.short_border
                    }));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.DefsSwitcher = DefsSwitcher;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        "lib/tracking" : 192,
        react : "react"
    }],
    221 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var selector = require("babel-runtime/core-js/object/get-prototype-of");
        var elem = $(selector);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        var json = require("babel-runtime/helpers/possibleConstructorReturn");
        var obj = $(json);
        var c = require("babel-runtime/helpers/inherits");
        var h = $(c);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var t = {
            line : "_177733-line",
            dialect_switcher : "_177733-dialect_switcher",
            select : "_177733-select",
            selectWrap : "_177733-selectWrap"
        };
        var assert = require("lib/dom");
        var model = require("lib/tracking");
        /** @type {string} */
        var origValue = "american";
        /** @type {string} */
        var progress = "british";
        var DialectLine = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                (0, result["default"])(this, value);
                var me = (0, obj["default"])(this, (value.__proto__ || (0, elem["default"])(value)).apply(this, arguments));
                return me.onDialectChange = function(evt) {
                    var props = me.props;
                    var predicate = props.changeStrongDialect;
                    var length = props.dialectWeak;
                    var d = evt.target.value;
                    predicate(d);
                    model.fire("change-dialect", {
                        language : d,
                        dialectWeak : length
                    });
                }, me;
            }
            return(0, h["default"])(value, deepDataAndEvents), (0, update["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var x = this.props.dialectStrong || (this.props.dialectWeak || origValue);
                    var cls = assert.cs(t.line, t.dialect_switcher);
                    return dom.createElement("div", {
                        className : cls
                    }, dom.createElement("span", null, "I write in"), dom.createElement("div", {
                        className : t.selectWrap
                    }, dom.createElement("select", {
                        className : t.select,
                        onChange : this.onDialectChange,
                        value : x
                    }, dom.createElement("option", {
                        value : origValue
                    }, "American English"), dom.createElement("option", {
                        value : progress
                    }, "British English"))));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.DialectLine = DialectLine;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        "lib/tracking" : 192,
        react : "react"
    }],
    222 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} name
         * @return {?}
         */
        function $(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        var tmpl = require("babel-runtime/helpers/defineProperty");
        var type = $(tmpl);
        var selector = require("babel-runtime/core-js/object/get-prototype-of");
        var elem = $(selector);
        var children = require("babel-runtime/helpers/classCallCheck");
        var c = $(children);
        var header = require("babel-runtime/helpers/createClass");
        var opts = $(header);
        var iframe = require("babel-runtime/helpers/possibleConstructorReturn");
        var i = $(iframe);
        var use = require("babel-runtime/helpers/inherits");
        var p = $(use);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var nodes = require("lib/dom");
        var child = require("../header");
        var data = require("../footer");
        var node = require("./news");
        var defaults = require("./settings-content");
        var o = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        var SettingsComponent = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                return(0, c["default"])(this, value), (0, i["default"])(this, (value.__proto__ || (0, elem["default"])(value)).apply(this, arguments));
            }
            return(0, p["default"])(value, deepDataAndEvents), (0, opts["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var r20;
                    var self = this.props;
                    var options = self.user;
                    var settings = self.settings;
                    var cfg = self.config;
                    var activeTab = self.activeTab;
                    var actions = self.actions;
                    var len = self.openUrl;
                    var cls = nodes.cs(o.gr_popup_settings, options.premium ? o.upgraded : o.free, (r20 = {}, (0, type["default"])(r20, o.not_supported, !cfg.enabled), (0, type["default"])(r20, o.no_fixes, !options.fixed_errors || isNaN(options.fixed_errors)), (0, type["default"])(r20, o.show_news, settings.showNews && cfg.enabled), (0, type["default"])(r20, o.has_favicon, !!activeTab.favIconUrl), r20));
                    return dom.createElement("div", {
                        className : cls
                    }, dom.createElement("div", {
                        className : o.content
                    }, dom.createElement(child.Header, null), dom.createElement(node.News, {
                        showNews : actions.showNews
                    }), dom.createElement(defaults.SettingsContent, {
                        actions : actions,
                        activeTab : activeTab,
                        config : cfg,
                        settings : settings,
                        user : options
                    }), dom.createElement(data.Footer, {
                        openUrl : len
                    })));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.SettingsComponent = SettingsComponent;
    }, {
        "../footer" : 215,
        "../header" : 216,
        "./news" : 223,
        "./settings-content" : 225,
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        react : "react"
    }],
    223 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var ready = require("babel-runtime/core-js/object/get-prototype-of");
        var ret = $(ready);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        var json = require("babel-runtime/helpers/possibleConstructorReturn");
        var obj = $(json);
        var selector = require("babel-runtime/helpers/inherits");
        var elem = $(selector);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var properties = require("spark-md5");
        var assert = require("lib/dom");
        var cmd = require("lib/config");
        var res = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        var News = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                (0, result["default"])(this, value);
                var me = (0, obj["default"])(this, (value.__proto__ || (0, ret["default"])(value)).apply(this, arguments));
                return me.closeNews = function() {
                    me.props.showNews(false);
                }, me;
            }
            return(0, elem["default"])(value, deepDataAndEvents), (0, update["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    return dom.createElement("div", {
                        className : assert.cs(res.line, res.news)
                    }, dom.createElement("div", {
                        onClick : this.closeNews,
                        className : res.close_news
                    }), dom.createElement("div", {
                        className : res.news_content
                    }, dom.createElement("h2", null, "What's new in this update:"), dom.createElement("ul", null, cmd.news.map(function(id) {
                        return dom.createElement("li", {
                            key : properties.hash(id)
                        }, id);
                    }))));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.News = News;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/config" : 167,
        "lib/dom" : 169,
        react : "react",
        "spark-md5" : "spark-md5"
    }],
    224 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var selector = require("babel-runtime/core-js/object/get-prototype-of");
        var elem = $(selector);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        var json = require("babel-runtime/helpers/possibleConstructorReturn");
        var obj = $(json);
        var c = require("babel-runtime/helpers/inherits");
        var h = $(c);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var assert = require("lib/dom");
        var Block = require("lib/config");
        var jQuery = require("lib/util");
        var item = {
            wrap : "_adb6eb-wrap",
            line : "_adb6eb-line",
            description : "_adb6eb-description",
            inviteLink : "_adb6eb-inviteLink",
            popupLine : "_adb6eb-popupLine",
            newLabel : "_adb6eb-newLabel",
            popupLink : "_adb6eb-popupLink"
        };
        var ReferralLine = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                return(0, result["default"])(this, value), (0, obj["default"])(this, (value.__proto__ || (0, elem["default"])(value)).apply(this, arguments));
            }
            return(0, h["default"])(value, deepDataAndEvents), (0, update["default"])(value, [{
                key : "isRibbonShow",
                /**
                 * @return {?}
                 */
                value : function() {
                    var event = this.props;
                    var cur = event.extensionInstallDate;
                    var which = event.registrationDate;
                    return which && jQuery.pastDays(which) < 14 || cur && jQuery.pastDays(cur) < 7;
                }
            }, {
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    return dom.createElement("div", null, dom.createElement("div", {
                        className : assert.cs("setting_item", item.popupLine)
                    }, dom.createElement("div", {
                        className : "short_border top"
                    }), this.isRibbonShow() && dom.createElement("span", {
                        className : item.newLabel
                    }, "New"), dom.createElement("span", null, "Get Premium for Free"), dom.createElement("a", {
                        href : Block.URLS.referral,
                        "data-fire" : "referral-clicked, menu",
                        target : "_blank",
                        className : item.popupLink
                    }, "Invite Friends")));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.ReferralLine = ReferralLine;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/config" : 167,
        "lib/dom" : 169,
        "lib/util" : 198,
        react : "react"
    }],
    225 : [function($, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var t = $("react");
        var opt = $("./summary");
        var input = $("./dialect-line");
        var item = $("./referral-line");
        var field = $("./defs-switcher");
        var that = $("./site-switcher");
        /**
         * @param {Object} self
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.SettingsContent = function(self) {
            var len = self.actions;
            var tab = self.activeTab;
            var options = self.config;
            var settings = self.settings;
            var session = self.user;
            return t.createElement("div", null, t.createElement(that.SiteSwitcher, {
                domain : options.domain,
                toggleSite : len.toggleSite,
                enabledInConfig : options.enabled,
                enabledInSettings : settings.enabled,
                favicon : tab.favIconUrl
            }), t.createElement(field.DefsSwitcher, {
                enabledDefs : settings.enabledDefs,
                toggleDefs : len.toggleDefs
            }), t.createElement(input.DialectLine, {
                changeStrongDialect : len.changeStrongDialect,
                dialectStrong : settings.dialectStrong,
                dialectWeak : settings.dialectWeak
            }), t.createElement(opt.Summary, {
                user : session
            }), session.referral && t.createElement(item.ReferralLine, {
                extensionInstallDate : session.extensionInstallDate,
                registrationDate : session.registrationDate
            }));
        };
    }, {
        "./defs-switcher" : 220,
        "./dialect-line" : 221,
        "./referral-line" : 224,
        "./site-switcher" : 226,
        "./summary" : 227,
        react : "react"
    }],
    226 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var ready = require("babel-runtime/core-js/object/get-prototype-of");
        var ret = $(ready);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        var selector = require("babel-runtime/helpers/possibleConstructorReturn");
        var elem = $(selector);
        var c = require("babel-runtime/helpers/inherits");
        var h = $(c);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var self = require("lib/dom");
        var m = require("lib/tracking");
        var el = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        var item = {
            select_checkbox : "_a7c193-select_checkbox",
            checkbox : "_a7c193-checkbox",
            checkbox_check : "_a7c193-checkbox_check",
            checkbox_check_round : "_a7c193-checkbox_check_round"
        };
        var SiteSwitcher = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                (0, result["default"])(this, value);
                var self = (0, elem["default"])(this, (value.__proto__ || (0, ret["default"])(value)).apply(this, arguments));
                return self.onEnableGrammarClick = function(event) {
                    var op = self.props;
                    var extend = op.toggleSite;
                    var oldconfig = op.domain;
                    var value = event.target.checked;
                    extend(value, oldconfig);
                    m.fire("checking-toggled", {
                        enabled : value,
                        placement : "toolbar"
                    });
                }, self;
            }
            return(0, h["default"])(value, deepDataAndEvents), (0, update["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var options = this.props;
                    var type = options.enabledInConfig;
                    var value = options.enabledInSettings;
                    var icon = options.favicon;
                    var domain = options.domain;
                    var attrNames = value && type;
                    /** @type {string} */
                    var _args = type ? "Check for Grammar and Spelling" : "Checking is not supported";
                    var cls = self.cs(el.site_switcher, el.line, el.setting_item, attrNames ? el.on : el.off);
                    return dom.createElement("div", {
                        className : cls
                    }, dom.createElement("label", {
                        className : item.select_checkbox
                    }, _args, dom.createElement("br", null), " ", dom.createElement("span", {
                        className : el.domain
                    }, dom.createElement("span", {
                        className : el.thin_text
                    }, "on"), "\u00a0", dom.createElement("span", {
                        className : el.favicon
                    }, dom.createElement("img", {
                        width : "16px",
                        height : "16px",
                        src : icon
                    })), domain), dom.createElement("input", {
                        className : item.checkbox,
                        onChange : this.onEnableGrammarClick,
                        checked : attrNames,
                        type : "checkbox"
                    }), dom.createElement("div", {
                        className : self.cs(item.checkbox_check, el.checkbox_check)
                    }, dom.createElement("div", {
                        className : item.checkbox_check_round
                    }))), dom.createElement("div", {
                        className : el.short_border
                    }));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.SiteSwitcher = SiteSwitcher;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        "lib/tracking" : 192,
        react : "react"
    }],
    227 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        var selector = require("babel-runtime/core-js/object/get-prototype-of");
        var elem = $(selector);
        var nodes = require("babel-runtime/helpers/classCallCheck");
        var result = $(nodes);
        var helper = require("babel-runtime/helpers/createClass");
        var update = $(helper);
        var dom = require("babel-runtime/helpers/possibleConstructorReturn");
        var h = $(dom);
        var items = require("babel-runtime/helpers/inherits");
        var option = $(items);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dh = require("react");
        var assert = require("lib/dom");
        var Block = require("lib/url");
        var self = require("lib/util");
        var res = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        var Summary = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                return(0, result["default"])(this, value), (0, h["default"])(this, (value.__proto__ || (0, elem["default"])(value)).apply(this, arguments));
            }
            return(0, option["default"])(value, deepDataAndEvents), (0, update["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var js = this.props.user;
                    var parentModuleMap = js.premium;
                    var type = js.registrationDate;
                    var valueData = js.fixed_errors;
                    /** @type {string} */
                    var parentName = parentModuleMap ? "critical and advanced" : "critical";
                    var number = !valueData || isNaN(valueData) ? 0 : valueData;
                    var toggleLink2 = "0" === self.formatNumber(number) ? "No" : self.formatNumber(number);
                    var detailFragment = self.declension(number, ["fix", "fixes"]);
                    var charset = self.formatDate(type);
                    /** @type {string} */
                    var failureMessage = charset ? "since " + charset : "";
                    return dh.createElement("div", {
                        className : assert.cs(res.line, res.summary)
                    }, dh.createElement("div", {
                        className : res.errors
                    }, dh.createElement("span", {
                        className : assert.cs(res.count, res.lblCount)
                    }, toggleLink2), dh.createElement("span", {
                        className : res.descr
                    }, parentName, " ", dh.createElement("span", {
                        className : res.errorsLbl
                    }, detailFragment), " ", dh.createElement("span", {
                        className : res.since
                    }, failureMessage))), dh.createElement("div", {
                        className : res.upgrade
                    }, dh.createElement("a", {
                        href : Block.getUpgradeURL("upHook", "settingsToolbar"),
                        "data-fire" : "hook-clicked, settings_toolbar",
                        target : "_blank",
                        className : res.upgrade_title
                    }, "Go Premium to enable advanced fixes")));
                }
            }]), value;
        }(dh.Component);
        expectedNumberOfNonCommentArgs.Summary = Summary;
    }, {
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        "lib/url" : 197,
        "lib/util" : 198,
        react : "react"
    }],
    228 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} name
         * @return {?}
         */
        function walk(name) {
            return name && name.__esModule ? name : {
                "default" : name
            };
        }
        var nodes = require("babel-runtime/core-js/object/get-prototype-of");
        var result = walk(nodes);
        var tree = require("babel-runtime/helpers/classCallCheck");
        var type = walk(tree);
        var i = require("babel-runtime/helpers/createClass");
        var c = walk(i);
        var data = require("babel-runtime/helpers/possibleConstructorReturn");
        var conf = walk(data);
        var main = require("babel-runtime/helpers/inherits");
        var settings = walk(main);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var $ = require("lib/dom");
        var Block = require("lib/url");
        var child = require("./header");
        var options = {
            signin : "_eb0767-signin",
            banner : "_eb0767-banner",
            descr : "_eb0767-descr",
            descr_title : "_eb0767-descr_title",
            buttons : "_eb0767-buttons",
            button : "_eb0767-button",
            auth_button : "_eb0767-auth_button",
            sign_up : "_eb0767-sign_up",
            free : "_eb0767-free",
            footer : "_eb0767-footer",
            signin_link : "_eb0767-signin_link"
        };
        var SigninComponent = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                return(0, type["default"])(this, value), (0, conf["default"])(this, (value.__proto__ || (0, result["default"])(value)).apply(this, arguments));
            }
            return(0, settings["default"])(value, deepDataAndEvents), (0, c["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    return dom.createElement("div", {
                        className : options.signin
                    }, dom.createElement(child.Header, null), dom.createElement("div", {
                        className : options.content
                    }, dom.createElement("div", {
                        className : options.banner
                    }, "Grammarly is active, but", dom.createElement("br", null), "key features are missing"), dom.createElement("div", {
                        className : options.descr
                    }, dom.createElement("div", {
                        className : options.descr_title
                    }, "Sign up now to unlock the following:"), dom.createElement("ul", null, dom.createElement("li", null, "Enable/disable on preferred websites"), dom.createElement("li", null, "Store your personal dictionary"), dom.createElement("li", null, "Save and access your work from any computer"), dom.createElement("li", null, "Get weekly writing statistics and tips"))), dom.createElement("div", {
                        className : options.buttons
                    }, dom.createElement("a", {
                        href : Block.getSignUpURL("signupHook", "toolbarMenu"),
                        "data-fire" : "login-attempt, settings_toolbar_sign_up",
                        target : "__blank",
                        className : $.cs(options.button, options.auth_button),
                        role : "button"
                    }, dom.createElement("span", {
                        className : options.sign_up
                    }, "Sign Up"), dom.createElement("span", {
                        className : options.free
                    }, "It's free")))), dom.createElement("div", {
                        className : options.footer
                    }, dom.createElement("div", {
                        className : options.login_text
                    }, "Already have an account? ", dom.createElement("a", {
                        href : Block.getSignInURL(),
                        "data-fire" : "login-attempt, settings_toolbar_sign_in",
                        target : "__blank",
                        className : options.signin_link
                    }, "Log in"))));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.SigninComponent = SigninComponent;
    }, {
        "./header" : 216,
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        "lib/url" : 197,
        react : "react"
    }],
    229 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var assert = require("lib/dom");
        var args = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        /**
         * @return {?}
         */
        var parseUri = function() {
            var label = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return assert.cs(args.line, args.unsupported_item, label);
        };
        /**
         * @param {Object} config
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.DefaultUnsupportedComponent = function(config) {
            var file = config.favicon;
            var content = config.domain;
            var styles = config.customTitle;
            var offsetB = styles ? dom.createElement("span", null, " ", styles, " Not Supported") : dom.createElement("span", null, " ", dom.createElement("span", {
                className : args.domain
            }, content), " is Not Supported");
            return dom.createElement("div", {
                className : parseUri()
            }, dom.createElement("span", {
                className : args.unsupported_title
            }, dom.createElement("span", {
                className : args.favicon
            }, dom.createElement("img", {
                width : "16px",
                height : "16px",
                src : file
            })), offsetB), dom.createElement("br", null), dom.createElement("span", null, "For technical reasons, we currently do not check your text on this version of\u00a0", dom.createElement("span", {
                className : assert.cs(args.domain, args.domain_in_details)
            }, content)));
        };
        /**
         * @param {Object} config
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.CustomUnsupportedComponent = function(config) {
            var file = config.favicon;
            var target = config.domain;
            var data = config.customMessage;
            var method = data.message;
            var type = data.title;
            var obj = void 0 === type ? target : type;
            return dom.createElement("div", {
                className : parseUri(args.unsupported_permanently)
            }, dom.createElement("span", {
                className : args.unsupported_title
            }, dom.createElement("span", {
                className : args.favicon
            }, dom.createElement("img", {
                width : "16px",
                height : "16px",
                src : file
            })), " ", obj, " Not Supported"), dom.createElement("br", null), dom.createElement("span", {
                dangerouslySetInnerHTML : {
                    __html : method
                }
            }));
        };
        /**
         * @param {Object} config
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.TemporaryUnsupportedComponent = function(config) {
            var file = config.favicon;
            var content = config.domain;
            return dom.createElement("div", {
                className : parseUri(args.unsupported_temporary)
            }, dom.createElement("span", {
                className : args.unsupported_title
            }, "Checking Down on ", dom.createElement("span", {
                className : args.favicon
            }, dom.createElement("img", {
                width : "16px",
                height : "16px",
                src : file
            })), " ", dom.createElement("span", {
                className : args.domain
            }, content)), dom.createElement("br", null), dom.createElement("span", null, "There appears to be a temporary glitch affecting Grammarly's performance on\u00a0", dom.createElement("span", {
                className : assert.cs(args.domain, args.domain_in_details)
            }, content), ". Functionality should return soon."));
        };
        /**
         * @return {?}
         */
        expectedNumberOfNonCommentArgs.GrammarlyUnsupportedComponent = function() {
            return dom.createElement("div", {
                className : parseUri(args.unsupported_grammarly)
            }, dom.createElement("span", {
                className : "diamond"
            }), dom.createElement("span", {
                className : "unsupported_title"
            }, "You Can't Improve on Perfection"), dom.createElement("br", null), dom.createElement("span", null, "Naturally, Grammarly's browser extension is disabled while you use the Grammarly Editor."));
        };
    }, {
        "lib/dom" : 169,
        react : "react"
    }],
    230 : [function(require, dataAndEvents, expectedNumberOfNonCommentArgs) {
        /**
         * @param {?} type
         * @return {?}
         */
        function $(type) {
            return type && type.__esModule ? type : {
                "default" : type
            };
        }
        /**
         * @param {?} opts
         * @return {?}
         */
        function init(opts) {
            var domain = opts.domain;
            var timeout = opts.favIconUrl;
            var success = opts.temporary;
            var silent = opts.grammarlyEditor;
            var data = config.CUSTOM_UNSUPPORTED_MESSAGES[domain];
            var name = void 0;
            var result = void 0;
            return silent ? (name = "grammarly_editor", result = dom.createElement(child.GrammarlyUnsupportedComponent, null)) : data && data.message ? (name = "custom_message", result = dom.createElement(child.CustomUnsupportedComponent, {
                customMessage : data,
                favicon : timeout,
                domain : domain
            })) : success ? (name = "temporary", result = dom.createElement(child.TemporaryUnsupportedComponent, {
                favicon : timeout,
                domain : domain
            })) : (name = "default", result = dom.createElement(child.DefaultUnsupportedComponent, {
                favicon : timeout,
                domain : domain,
                customTitle : data && data.title
            })), common.logger.settingsUsupportedShow(name), result;
        }
        var ready = require("babel-runtime/helpers/defineProperty");
        var ret = $(ready);
        var nodes = require("babel-runtime/core-js/object/get-prototype-of");
        var result = $(nodes);
        var selector = require("babel-runtime/helpers/classCallCheck");
        var elem = $(selector);
        var json = require("babel-runtime/helpers/createClass");
        var obj = $(json);
        var c = require("babel-runtime/helpers/possibleConstructorReturn");
        var h = $(c);
        var helper = require("babel-runtime/helpers/inherits");
        var update = $(helper);
        Object.defineProperty(expectedNumberOfNonCommentArgs, "__esModule", {
            value : true
        });
        var dom = require("react");
        var common = require("lib/tracking");
        var assert = require("lib/dom");
        var config = require("lib/page-config/defaults");
        var data = require("../header");
        var node = require("../footer");
        var child = require("./components");
        var o = {
            safari : "safari",
            "gr-popup-wrapper" : "gr-popup-wrapper",
            windows : "windows",
            setting_item : "setting_item",
            errors : "errors",
            descr : "descr",
            thin_text : "thin_text",
            footer : "footer",
            gr_popup_settings : "gr_popup_settings",
            footer_btn : "footer_btn",
            line : "line",
            short_border : "short_border",
            top : "top",
            show_news : "show_news",
            news : "news",
            news_content : "news_content",
            close_news : "close_news",
            not_supported : "not_supported",
            checkbox_check : "checkbox_check",
            site_switcher : "site_switcher",
            upgrade : "upgrade",
            def_switcher : "def_switcher",
            on : "on",
            off : "off",
            upgraded : "upgraded",
            content : "content",
            summary : "summary",
            since : "since",
            has_favicon : "has_favicon",
            favicon : "favicon",
            domain : "domain",
            no_fixes : "no_fixes",
            lblCount : "lblCount",
            upgrade_title : "upgrade_title",
            my_grammarly : "my_grammarly",
            new_document : "new_document",
            unsupported_site : "unsupported_site",
            unsupported_item : "unsupported_item",
            unsupported_title : "unsupported_title",
            domain_in_details : "domain_in_details",
            unsupported_temporary : "unsupported_temporary",
            unsupported_permanently : "unsupported_permanently",
            unsupported_grammarly : "unsupported_grammarly",
            diamond : "diamond"
        };
        /** @type {function (?): ?} */
        expectedNumberOfNonCommentArgs.getUnsupportedComponent = init;
        var UnsupportedComponent = function(deepDataAndEvents) {
            /**
             * @return {?}
             */
            function value() {
                return(0, elem["default"])(this, value), (0, h["default"])(this, (value.__proto__ || (0, result["default"])(value)).apply(this, arguments));
            }
            return(0, update["default"])(value, deepDataAndEvents), (0, obj["default"])(value, [{
                key : "render",
                /**
                 * @return {?}
                 */
                value : function() {
                    var me = this.props;
                    var opt = me.config;
                    var domain = opt.domain;
                    var ajax = opt.temporary;
                    var _type = opt.grammarlyEditor;
                    var retval = me.activeTab.favIconUrl;
                    var cls = assert.cs(o.gr_popup_settings, (0, ret["default"])({}, o.has_favicon, Boolean(retval)));
                    var md = init({
                        domain : domain,
                        favIconUrl : retval,
                        temporary : ajax,
                        grammarlyEditor : _type
                    });
                    return dom.createElement("div", {
                        className : cls
                    }, dom.createElement("div", {
                        className : assert.cs(o.content, o.unsupported_site)
                    }, dom.createElement(data.Header, null), md, dom.createElement(node.Footer, {
                        openUrl : this.props.openUrl
                    })));
                }
            }]), value;
        }(dom.Component);
        expectedNumberOfNonCommentArgs.UnsupportedComponent = UnsupportedComponent;
    }, {
        "../footer" : 215,
        "../header" : 216,
        "./components" : 229,
        "babel-runtime/core-js/object/get-prototype-of" : 21,
        "babel-runtime/helpers/classCallCheck" : 27,
        "babel-runtime/helpers/createClass" : 28,
        "babel-runtime/helpers/defineProperty" : 29,
        "babel-runtime/helpers/inherits" : 30,
        "babel-runtime/helpers/possibleConstructorReturn" : 31,
        "lib/dom" : 169,
        "lib/page-config/defaults" : 176,
        "lib/tracking" : 192,
        react : "react"
    }]
}, {}, [147]);
