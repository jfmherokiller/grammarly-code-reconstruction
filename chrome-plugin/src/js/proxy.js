! function e$$12(t, n, r) {
    /**
     * @param {string} o
     * @param {?} dx
     * @return {?}
     */
    function s(o, dx) {
        if (!n[o]) {
            if (!t[o]) {
                var i = "function" == typeof require && require;
                if (!dx && i) {
                    return i(o, true);
                }
                if (a) {
                    return a(o, true);
                }
                /** @type {Error} */
                var err = new Error("Cannot find module '" + o + "'");
                throw err.code = "MODULE_NOT_FOUND", err;
            }
            var module_ = n[o] = {
                exports: {}
            };
            t[o][0].call(module_.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, module_, module_.exports, e$$12, t, n, r);
        }
        return n[o].exports;
    }
    var a = "function" == typeof require && require;
    /** @type {number} */
    var o = 0;
    for (; o < r.length; o++) {
        s(r[o]);
    }
    return s;
}({
    1: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/array/from"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/array/from": 22
    }],
    2: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/get-iterator"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/get-iterator": 23
    }],
    3: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/is-iterable"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/is-iterable": 24
    }],
    4: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/json/stringify"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/json/stringify": 25
    }],
    5: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/object/assign"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/object/assign": 26
    }],
    6: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/object/create"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/object/create": 27
    }],
    7: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/object/define-property"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/object/define-property": 28
    }],
    8: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/object/get-prototype-of"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/object/get-prototype-of": 29
    }],
    9: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/object/keys"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/object/keys": 30
    }],
    10: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/object/set-prototype-of"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/object/set-prototype-of": 31
    }],
    11: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/promise"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/promise": 32
    }],
    12: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/symbol"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/symbol": 33
    }],
    13: [function($sanitize, module, dataAndEvents) {
        module.exports = {
            "default": $sanitize("core-js/library/fn/symbol/iterator"),
            __esModule: true
        };
    }, {
        "core-js/library/fn/symbol/iterator": 34
    }],
    14: [function(dataAndEvents, deepDataAndEvents, __exports__) {
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
    15: [function(neighbours, dataAndEvents, __exports__) {
        /**
         * @param {Object} value
         * @return {?}
         */
        function url(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var tile = neighbours("../core-js/object/define-property");
        var tileUrl = url(tile);
        __exports__["default"] = function() {
            /**
             * @param {Function} value
             * @param {Array} obj
             * @return {undefined}
             */
            function defineProperty(value, obj) {
                /** @type {number} */
                var i = 0;
                for (; i < obj.length; i++) {
                    var property = obj[i];
                    property.enumerable = property.enumerable || false;
                    /** @type {boolean} */
                    property.configurable = true;
                    if ("value" in property) {
                        /** @type {boolean} */
                        property.writable = true;
                    }
                    (0, tileUrl["default"])(value, property.key, property);
                }
            }
            return function(ctor, element, key) {
                return element && defineProperty(ctor.prototype, element), key && defineProperty(ctor, key), ctor;
            };
        }();
    }, {
        "../core-js/object/define-property": 7
    }],
    16: [function(proceed, dataAndEvents, __exports__) {
        /**
         * @param {string} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var value = proceed("../core-js/object/define-property");
        var iterator = lookupIterator(value);
        /**
         * @param {Object} obj
         * @param {?} key
         * @param {string} value
         * @return {?}
         */
        __exports__["default"] = function(obj, key, value) {
            return key in obj ? (0, iterator["default"])(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            }) : obj[key] = value, obj;
        };
    }, {
        "../core-js/object/define-property": 7
    }],
    17: [function(require, dataAndEvents, __exports__) {
        /**
         * @param {Object} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default": type
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var type = require("../core-js/object/set-prototype-of");
        var event = Event(type);
        var complete = require("../core-js/object/create");
        var c = Event(complete);
        var selector = require("../helpers/typeof");
        var elem = Event(selector);
        /**
         * @param {Object} ret
         * @param {Object} b
         * @return {undefined}
         */
        __exports__["default"] = function(ret, b) {
            if ("function" != typeof b && null !== b) {
                throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof b ? "undefined" : (0, elem["default"])(b)));
            }
            ret.prototype = (0, c["default"])(b && b.prototype, {
                constructor: {
                    value: ret,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (b) {
                if (event["default"]) {
                    (0, event["default"])(ret, b);
                } else {
                    /** @type {Object} */
                    ret.__proto__ = b;
                }
            }
        };
    }, {
        "../core-js/object/create": 6,
        "../core-js/object/set-prototype-of": 10,
        "../helpers/typeof": 21
    }],
    18: [function(proceed, dataAndEvents, __exports__) {
        /**
         * @param {Object} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default": value
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
            return !callback || "object" !== ("undefined" == typeof callback ? "undefined" : (0, iterator["default"])(callback)) && "function" != typeof callback ? dataAndEvents : callback;
        };
    }, {
        "../helpers/typeof": 21
    }],
    19: [function(get, dataAndEvents, __exports__) {
        /**
         * @param {string} id
         * @return {?}
         */
        function require(id) {
            return id && id.__esModule ? id : {
                "default": id
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var id = get("../core-js/is-iterable");
        var map = require(id);
        var data = get("../core-js/get-iterator");
        var conf = require(data);
        __exports__["default"] = function() {
            /**
             * @param {Object} name
             * @param {number} height
             * @return {?}
             */
            function add(name, height) {
                /** @type {Array} */
                var parent = [];
                /** @type {boolean} */
                var callback2 = true;
                /** @type {boolean} */
                var r = false;
                var bulk = void 0;
                try {
                    var p;
                    var ret = (0, conf["default"])(name);
                    for (; !(callback2 = (p = ret.next()).done) && (parent.push(p.value), !height || parent.length !== height); callback2 = true) {}
                } catch (fn) {
                    /** @type {boolean} */
                    r = true;
                    bulk = fn;
                } finally {
                    try {
                        if (!callback2) {
                            if (ret["return"]) {
                                ret["return"]();
                            }
                        }
                    } finally {
                        if (r) {
                            throw bulk;
                        }
                    }
                }
                return parent;
            }
            return function(optgroup, v) {
                if (Array.isArray(optgroup)) {
                    return optgroup;
                }
                if ((0, map["default"])(Object(optgroup))) {
                    return add(optgroup, v);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, {
        "../core-js/get-iterator": 2,
        "../core-js/is-iterable": 3
    }],
    20: [function(proceed, dataAndEvents, __exports__) {
        /**
         * @param {Object} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var value = proceed("../core-js/array/from");
        var iterator = lookupIterator(value);
        /**
         * @param {Object} optgroup
         * @return {?}
         */
        __exports__["default"] = function(optgroup) {
            if (Array.isArray(optgroup)) {
                /** @type {number} */
                var name = 0;
                /** @type {Array} */
                var old = Array(optgroup.length);
                for (; name < optgroup.length; name++) {
                    old[name] = optgroup[name];
                }
                return old;
            }
            return (0, iterator["default"])(optgroup);
        };
    }, {
        "../core-js/array/from": 1
    }],
    21: [function(require, dataAndEvents, __exports__) {
        /**
         * @param {Object} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default": type
            };
        }
        /** @type {boolean} */
        __exports__.__esModule = true;
        var complete = require("../core-js/symbol/iterator");
        var c = Event(complete);
        var type = require("../core-js/symbol");
        var schema = Event(type);
        /** @type {function (boolean): ?} */
        var ownProp = "function" == typeof schema["default"] && "symbol" == typeof c["default"] ? function(attr) {
            return typeof attr;
        } : function(attr) {
            return attr && ("function" == typeof schema["default"] && (attr.constructor === schema["default"] && attr !== schema["default"].prototype)) ? "symbol" : typeof attr;
        };
        /** @type {function (boolean): ?} */
        __exports__["default"] = "function" == typeof schema["default"] && "symbol" === ownProp(c["default"]) ? function(protoProps) {
            return "undefined" == typeof protoProps ? "undefined" : ownProp(protoProps);
        } : function(protoProps) {
            return protoProps && ("function" == typeof schema["default"] && (protoProps.constructor === schema["default"] && protoProps !== schema["default"].prototype)) ? "symbol" : "undefined" == typeof protoProps ? "undefined" : ownProp(protoProps);
        };
    }, {
        "../core-js/symbol": 12,
        "../core-js/symbol/iterator": 13
    }],
    22: [function($sanitize, opts, dataAndEvents) {
        $sanitize("../../modules/es6.string.iterator");
        $sanitize("../../modules/es6.array.from");
        opts.exports = $sanitize("../../modules/_core").Array.from;
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.array.from": 110,
        "../../modules/es6.string.iterator": 120
    }],
    23: [function(factory, module, dataAndEvents) {
        factory("../modules/web.dom.iterable");
        factory("../modules/es6.string.iterator");
        module.exports = factory("../modules/core.get-iterator");
    }, {
        "../modules/core.get-iterator": 108,
        "../modules/es6.string.iterator": 120,
        "../modules/web.dom.iterable": 124
    }],
    24: [function(factory, module, dataAndEvents) {
        factory("../modules/web.dom.iterable");
        factory("../modules/es6.string.iterator");
        module.exports = factory("../modules/core.is-iterable");
    }, {
        "../modules/core.is-iterable": 109,
        "../modules/es6.string.iterator": 120,
        "../modules/web.dom.iterable": 124
    }],
    25: [function($sanitize, module, dataAndEvents) {
        var S = $sanitize("../../modules/_core");
        var newArgs = S.JSON || (S.JSON = {
            /** @type {function (this:JSONType, *, (Array.<string>|function (string, *): *|null)=, (number|string)=): string} */
            stringify: JSON.stringify
        });
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return newArgs.stringify.apply(newArgs, arguments);
        };
    }, {
        "../../modules/_core": 42
    }],
    26: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.assign");
        module.exports = $sanitize("../../modules/_core").Object.assign;
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.assign": 112
    }],
    27: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.create");
        var handler = $sanitize("../../modules/_core").Object;
        /**
         * @param {Object} name
         * @param {Object} ast
         * @return {?}
         */
        module.exports = function(name, ast) {
            return handler.create(name, ast);
        };
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.create": 113
    }],
    28: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.define-property");
        var t = $sanitize("../../modules/_core").Object;
        /**
         * @param {Object} name
         * @param {Object} ast
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(name, ast, opt_attributes) {
            return t.defineProperty(name, ast, opt_attributes);
        };
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.define-property": 114
    }],
    29: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.get-prototype-of");
        module.exports = $sanitize("../../modules/_core").Object.getPrototypeOf;
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.get-prototype-of": 115
    }],
    30: [function($sanitize, config, dataAndEvents) {
        $sanitize("../../modules/es6.object.keys");
        config.exports = $sanitize("../../modules/_core").Object.keys;
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.keys": 116
    }],
    31: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.object.set-prototype-of");
        module.exports = $sanitize("../../modules/_core").Object.setPrototypeOf;
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.set-prototype-of": 117
    }],
    32: [function(require, module, dataAndEvents) {
        require("../modules/es6.object.to-string");
        require("../modules/es6.string.iterator");
        require("../modules/web.dom.iterable");
        require("../modules/es6.promise");
        module.exports = require("../modules/_core").Promise;
    }, {
        "../modules/_core": 42,
        "../modules/es6.object.to-string": 118,
        "../modules/es6.promise": 119,
        "../modules/es6.string.iterator": 120,
        "../modules/web.dom.iterable": 124
    }],
    33: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.symbol");
        $sanitize("../../modules/es6.object.to-string");
        $sanitize("../../modules/es7.symbol.async-iterator");
        $sanitize("../../modules/es7.symbol.observable");
        module.exports = $sanitize("../../modules/_core").Symbol;
    }, {
        "../../modules/_core": 42,
        "../../modules/es6.object.to-string": 118,
        "../../modules/es6.symbol": 121,
        "../../modules/es7.symbol.async-iterator": 122,
        "../../modules/es7.symbol.observable": 123
    }],
    34: [function($sanitize, module, dataAndEvents) {
        $sanitize("../../modules/es6.string.iterator");
        $sanitize("../../modules/web.dom.iterable");
        module.exports = $sanitize("../../modules/_wks-ext").f("iterator");
    }, {
        "../../modules/_wks-ext": 105,
        "../../modules/es6.string.iterator": 120,
        "../../modules/web.dom.iterable": 124
    }],
    35: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            if ("function" != typeof name) {
                throw TypeError(name + " is not a function!");
            }
            return name;
        };
    }, {}],
    36: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @return {undefined}
         */
        module.exports = function() {};
    }, {}],
    37: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @param {string} ary
         * @return {?}
         */
        module.exports = function(name, key, opt_attributes, ary) {
            if (!(name instanceof key) || void 0 !== ary && ary in name) {
                throw TypeError(opt_attributes + ": incorrect invocation!");
            }
            return name;
        };
    }, {}],
    38: [function(require, module, dataAndEvents) {
        var inspect = require("./_is-object");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            if (!inspect(name)) {
                throw TypeError(name + " is not an object!");
            }
            return name;
        };
    }, {
        "./_is-object": 62
    }],
    39: [function(require, module, dataAndEvents) {
        var tmpl = require("./_to-iobject");
        var assert = require("./_to-length");
        var debug = require("./_to-index");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return function(options, string, msg) {
                var x;
                var args = tmpl(options);
                var ms = assert(args.length);
                var id = debug(msg, ms);
                if (name && string != string) {
                    for (; ms > id;) {
                        if (x = args[id++], x != x) {
                            return true;
                        }
                    }
                } else {
                    for (; ms > id; id++) {
                        if ((name || id in args) && args[id] === string) {
                            return name || (id || 0);
                        }
                    }
                }
                return !name && -1;
            };
        };
    }, {
        "./_to-index": 97,
        "./_to-iobject": 99,
        "./_to-length": 100
    }],
    40: [function(require, module, dataAndEvents) {
        var getActual = require("./_cof");
        var camelKey = require("./_wks")("toStringTag");
        /** @type {boolean} */
        var nativeIsArray = "Arguments" == getActual(function() {
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
            } catch (n) {}
        };
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            var obj;
            var data;
            var hash;
            return void 0 === name ? "Undefined" : null === name ? "Null" : "string" == typeof(data = dataAttr(obj = Object(name), camelKey)) ? data : nativeIsArray ? getActual(obj) : "Object" == (hash = getActual(obj)) && "function" == typeof obj.callee ? "Arguments" : hash;
        };
    }, {
        "./_cof": 41,
        "./_wks": 106
    }],
    41: [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {function (this:*): string} */
        var toString = {}.toString;
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return toString.call(name).slice(8, -1);
        };
    }, {}],
    42: [function(dataAndEvents, $, deepDataAndEvents) {
        var o = $.exports = {
            version: "2.4.0"
        };
        if ("number" == typeof __e) {
            __e = o;
        }
    }, {}],
    43: [function(require, module, dataAndEvents) {
        var t = require("./_object-dp");
        var getActual = require("./_property-desc");
        /**
         * @param {Object} name
         * @param {Object} ast
         * @param {?} opt_attributes
         * @return {undefined}
         */
        module.exports = function(name, ast, opt_attributes) {
            if (ast in name) {
                t.f(name, ast, getActual(0, opt_attributes));
            } else {
                name[ast] = opt_attributes;
            }
        };
    }, {
        "./_object-dp": 75,
        "./_property-desc": 86
    }],
    44: [function(require, module, dataAndEvents) {
        var inspect = require("./_a-function");
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(name, key, opt_attributes) {
            if (inspect(name), void 0 === key) {
                return name;
            }
            switch (opt_attributes) {
                case 1:
                    return function(loc) {
                        return name.call(key, loc);
                    };
                case 2:
                    return function(loc, element) {
                        return name.call(key, loc, element);
                    };
                case 3:
                    return function(loc, element, capture) {
                        return name.call(key, loc, element, capture);
                    };
            }
            return function() {
                return name.apply(key, arguments);
            };
        };
    }, {
        "./_a-function": 35
    }],
    45: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            if (void 0 == name) {
                throw TypeError("Can't call method on  " + name);
            }
            return name;
        };
    }, {}],
    46: [function($sanitize, module, dataAndEvents) {
        /** @type {boolean} */
        module.exports = !$sanitize("./_fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                /**
                 * @return {?}
                 */
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_fails": 51
    }],
    47: [function(require, module, dataAndEvents) {
        var isObject = require("./_is-object");
        var doc = require("./_global").document;
        var is_defun = isObject(doc) && isObject(doc.createElement);
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return is_defun ? doc.createElement(name) : {};
        };
    }, {
        "./_global": 53,
        "./_is-object": 62
    }],
    48: [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {Array.<string>} */
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}],
    49: [function(require, module, dataAndEvents) {
        var inspect = require("./_object-keys");
        var b = require("./_object-gops");
        var cfg = require("./_object-pie");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            var str = inspect(name);
            var next = b.f;
            if (next) {
                var v;
                var items = next(name);
                var filter = cfg.f;
                /** @type {number} */
                var index = 0;
                for (; items.length > index;) {
                    if (filter.call(name, v = items[index++])) {
                        str.push(v);
                    }
                }
            }
            return str;
        };
    }, {
        "./_object-gops": 80,
        "./_object-keys": 83,
        "./_object-pie": 84
    }],
    50: [function(require, module, dataAndEvents) {
        var item = require("./_global");
        var helper = require("./_core");
        var is = require("./_ctx");
        var debug = require("./_hide");
        /** @type {string} */
        var j = "prototype";
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        var proxy = function(name, key, opt_attributes) {
            var i;
            var dest;
            var val;
            /** @type {number} */
            var d = name & proxy.F;
            /** @type {number} */
            var args = name & proxy.G;
            /** @type {number} */
            var isComposite = name & proxy.S;
            /** @type {number} */
            var stream = name & proxy.P;
            /** @type {number} */
            var source = name & proxy.B;
            /** @type {number} */
            var isPattern = name & proxy.W;
            var arr2 = args ? helper : helper[key] || (helper[key] = {});
            var arr = arr2[j];
            var obj = args ? item : isComposite ? item[key] : (item[key] || {})[j];
            if (args) {
                /** @type {Object} */
                opt_attributes = key;
            }
            for (i in opt_attributes) {
                dest = !d && (obj && void 0 !== obj[i]);
                if (!(dest && i in arr2)) {
                    val = dest ? obj[i] : opt_attributes[i];
                    arr2[i] = args && "function" != typeof obj[i] ? opt_attributes[i] : source && dest ? is(val, item) : isPattern && obj[i] == val ? function(second) {
                        /**
                         * @param {string} elem
                         * @param {string} returnDom
                         * @param {string} arr
                         * @return {?}
                         */
                        var first = function(elem, returnDom, arr) {
                            if (this instanceof second) {
                                switch (arguments.length) {
                                    case 0:
                                        return new second;
                                    case 1:
                                        return new second(elem);
                                    case 2:
                                        return new second(elem, returnDom);
                                }
                                return new second(elem, returnDom, arr);
                            }
                            return second.apply(this, arguments);
                        };
                        return first[j] = second[j], first;
                    }(val) : stream && "function" == typeof val ? is(Function.call, val) : val;
                    if (stream) {
                        (arr2.virtual || (arr2.virtual = {}))[i] = val;
                        if (name & proxy.R) {
                            if (arr) {
                                if (!arr[i]) {
                                    debug(arr, i, val);
                                }
                            }
                        }
                    }
                }
            }
        };
        /** @type {number} */
        proxy.F = 1;
        /** @type {number} */
        proxy.G = 2;
        /** @type {number} */
        proxy.S = 4;
        /** @type {number} */
        proxy.P = 8;
        /** @type {number} */
        proxy.B = 16;
        /** @type {number} */
        proxy.W = 32;
        /** @type {number} */
        proxy.U = 64;
        /** @type {number} */
        proxy.R = 128;
        /** @type {function (Object, Object, ?): undefined} */
        module.exports = proxy;
    }, {
        "./_core": 42,
        "./_ctx": 44,
        "./_global": 53,
        "./_hide": 55
    }],
    51: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            try {
                return !!name();
            } catch (t) {
                return true;
            }
        };
    }, {}],
    52: [function(require, module, e) {
        var getActual = require("./_ctx");
        var test = require("./_iter-call");
        var swap = require("./_is-array-iter");
        var objDisplay = require("./_an-object");
        var assert = require("./_to-length");
        var inspect = require("./core.get-iterator-method");
        var resultUS = {};
        var resultCommaDecimal = {};
        /** @type {function (Object, Object, ?, string, boolean): ?} */
        e = module.exports = function(name, key, opt_attributes, args, program) {
            var l;
            var p;
            var curr;
            var result;
            var formatter = program ? function() {
                return name;
            } : inspect(name);
            var fn = getActual(opt_attributes, args, key ? 2 : 1);
            /** @type {number} */
            var i = 0;
            if ("function" != typeof formatter) {
                throw TypeError(name + " is not iterable!");
            }
            if (swap(formatter)) {
                l = assert(name.length);
                for (; l > i; i++) {
                    if (result = key ? fn(objDisplay(p = name[i])[0], p[1]) : fn(name[i]), result === resultUS || result === resultCommaDecimal) {
                        return result;
                    }
                }
            } else {
                curr = formatter.call(name);
                for (; !(p = curr.next()).done;) {
                    if (result = test(curr, fn, p.value, key), result === resultUS || result === resultCommaDecimal) {
                        return result;
                    }
                }
            }
        };
        e.BREAK = resultUS;
        e.RETURN = resultCommaDecimal;
    }, {
        "./_an-object": 38,
        "./_ctx": 44,
        "./_is-array-iter": 60,
        "./_iter-call": 63,
        "./_to-length": 100,
        "./core.get-iterator-method": 107
    }],
    53: [function(dataAndEvents, module, deepDataAndEvents) {
        var o = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        if ("number" == typeof __g) {
            __g = o;
        }
    }, {}],
    54: [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {function (this:Object, *): boolean} */
        var has = {}.hasOwnProperty;
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            return has.call(name, key);
        };
    }, {}],
    55: [function(require, module, dataAndEvents) {
        var t = require("./_object-dp");
        var getActual = require("./_property-desc");
        /** @type {function (Object, Object, ?): ?} */
        module.exports = require("./_descriptors") ? function(name, ast, opt_attributes) {
            return t.f(name, ast, getActual(1, opt_attributes));
        } : function(name, key, opt_attributes) {
            return name[key] = opt_attributes, name;
        };
    }, {
        "./_descriptors": 46,
        "./_object-dp": 75,
        "./_property-desc": 86
    }],
    56: [function($sanitize, module, dataAndEvents) {
        module.exports = $sanitize("./_global").document && document.documentElement;
    }, {
        "./_global": 53
    }],
    57: [function($sanitize, module, dataAndEvents) {
        /** @type {boolean} */
        module.exports = !$sanitize("./_descriptors") && !$sanitize("./_fails")(function() {
            return 7 != Object.defineProperty($sanitize("./_dom-create")("div"), "a", {
                /**
                 * @return {?}
                 */
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_descriptors": 46,
        "./_dom-create": 47,
        "./_fails": 51
    }],
    58: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @param {Array} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(name, key, opt_attributes) {
            /** @type {boolean} */
            var o = void 0 === opt_attributes;
            switch (key.length) {
                case 0:
                    return o ? name() : name.call(opt_attributes);
                case 1:
                    return o ? name(key[0]) : name.call(opt_attributes, key[0]);
                case 2:
                    return o ? name(key[0], key[1]) : name.call(opt_attributes, key[0], key[1]);
                case 3:
                    return o ? name(key[0], key[1], key[2]) : name.call(opt_attributes, key[0], key[1], key[2]);
                case 4:
                    return o ? name(key[0], key[1], key[2], key[3]) : name.call(opt_attributes, key[0], key[1], key[2], key[3]);
            }
            return name.apply(opt_attributes, key);
        };
    }, {}],
    59: [function($sanitize, module, dataAndEvents) {
        var ondata = $sanitize("./_cof");
        /** @type {Function} */
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(name) {
            return "String" == ondata(name) ? name.split("") : Object(name);
        };
    }, {
        "./_cof": 41
    }],
    60: [function(values, module, dataAndEvents) {
        var v = values("./_iterators");
        var i = values("./_wks")("iterator");
        var ap = Array.prototype;
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return void 0 !== name && (v.Array === name || ap[i] === name);
        };
    }, {
        "./_iterators": 68,
        "./_wks": 106
    }],
    61: [function($sanitize, module, dataAndEvents) {
        var ondata = $sanitize("./_cof");
        /** @type {function (*): boolean} */
        module.exports = Array.isArray || function(name) {
            return "Array" == ondata(name);
        };
    }, {
        "./_cof": 41
    }],
    62: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return "object" == typeof name ? null !== name : "function" == typeof name;
        };
    }, {}],
    63: [function(require, module, dataAndEvents) {
        var getActual = require("./_an-object");
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @param {string} index
         * @return {?}
         */
        module.exports = function(name, key, opt_attributes, index) {
            try {
                return index ? key(getActual(opt_attributes)[0], opt_attributes[1]) : key(opt_attributes);
            } catch (i) {
                var prop = name["return"];
                throw void 0 !== prop && getActual(prop.call(name)), i;
            }
        };
    }, {
        "./_an-object": 38
    }],
    64: [function(require, module, dataAndEvents) {
        var getActual = require("./_object-create");
        var objDisplay = require("./_property-desc");
        var inspect = require("./_set-to-string-tag");
        var proto = {};
        require("./_hide")(proto, require("./_wks")("iterator"), function() {
            return this;
        });
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        module.exports = function(name, key, opt_attributes) {
            name.prototype = getActual(proto, {
                next: objDisplay(1, opt_attributes)
            });
            inspect(name, key + " Iterator");
        };
    }, {
        "./_hide": 55,
        "./_object-create": 74,
        "./_property-desc": 86,
        "./_set-to-string-tag": 91,
        "./_wks": 106
    }],
    65: [function(require, module, dataAndEvents) {
        var Block = require("./_library");
        var inspect = require("./_export");
        var merge = require("./_redefine");
        var b = require("./_hide");
        var a = require("./_has");
        var target = require("./_iterators");
        var getActual = require("./_iter-create");
        var each = require("./_set-to-string-tag");
        var objDisplay = require("./_object-gpo");
        var locals = require("./_wks")("iterator");
        /** @type {boolean} */
        var retval = !([].keys && "next" in [].keys());
        /** @type {string} */
        var tail = "@@iterator";
        /** @type {string} */
        var text = "keys";
        /** @type {string} */
        var length = "values";
        /**
         * @return {?}
         */
        var copy = function() {
            return this;
        };
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @param {string} ary
         * @param {Function} input
         * @param {string} raw
         * @param {string} chai
         * @return {?}
         */
        module.exports = function(name, key, opt_attributes, ary, input, raw, chai) {
            getActual(opt_attributes, key, ary);
            var obj;
            var child;
            var self;
            /**
             * @param {string} key
             * @return {?}
             */
            var callback = function(key) {
                if (!retval && key in ret) {
                    return ret[key];
                }
                switch (key) {
                    case text:
                        return function() {
                            return new opt_attributes(this, key);
                        };
                    case length:
                        return function() {
                            return new opt_attributes(this, key);
                        };
                }
                return function() {
                    return new opt_attributes(this, key);
                };
            };
            /** @type {string} */
            var i = key + " Iterator";
            /** @type {boolean} */
            var err = input == length;
            /** @type {boolean} */
            var lists = false;
            var ret = name.prototype;
            var value = ret[locals] || (ret[tail] || input && ret[input]);
            var result = value || callback(input);
            var entries = input ? err ? callback("entries") : result : void 0;
            var newValue = "Array" == key ? ret.entries || value : value;
            if (newValue && (self = objDisplay(newValue.call(new name)), self !== Object.prototype && (each(self, i, true), Block || (a(self, locals) || b(self, locals, copy)))), err && (value && (value.name !== length && (lists = true, result = function() {
                    return value.call(this);
                }))), Block && !chai || (!retval && (!lists && ret[locals]) || b(ret, locals, result)), target[key] = result, target[i] = copy, input) {
                if (obj = {
                        values: err ? result : callback(length),
                        keys: raw ? result : callback(text),
                        entries: entries
                    }, chai) {
                    for (child in obj) {
                        if (!(child in ret)) {
                            merge(ret, child, obj[child]);
                        }
                    }
                } else {
                    inspect(inspect.P + inspect.F * (retval || lists), key, obj);
                }
            }
            return obj;
        };
    }, {
        "./_export": 50,
        "./_has": 54,
        "./_hide": 55,
        "./_iter-create": 64,
        "./_iterators": 68,
        "./_library": 70,
        "./_object-gpo": 81,
        "./_redefine": 88,
        "./_set-to-string-tag": 91,
        "./_wks": 106
    }],
    66: [function($sanitize, module, dataAndEvents) {
        var prop = $sanitize("./_wks")("iterator");
        /** @type {boolean} */
        var defaultMessage = false;
        try {
            var optgroup = [7][prop]();
            /**
             * @return {undefined}
             */
            optgroup["return"] = function() {
                /** @type {boolean} */
                defaultMessage = true;
            };
            Array.from(optgroup, function() {
                throw 2;
            });
        } catch (s) {}
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
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
                    return {
                        done: str = true
                    };
                };
                /**
                 * @return {?}
                 */
                originalEvent[prop] = function() {
                    return stream;
                };
                name(originalEvent);
            } catch (c) {}
            return str;
        };
    }, {
        "./_wks": 106
    }],
    67: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            return {
                value: key,
                done: !!name
            };
        };
    }, {}],
    68: [function(dataAndEvents, module, deepDataAndEvents) {
        module.exports = {};
    }, {}],
    69: [function(require, module, dataAndEvents) {
        var getActual = require("./_object-keys");
        var inspect = require("./_to-iobject");
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            var node;
            var obj = inspect(name);
            var nodes = getActual(obj);
            var len = nodes.length;
            /** @type {number} */
            var i = 0;
            for (; len > i;) {
                if (obj[node = nodes[i++]] === key) {
                    return node;
                }
            }
        };
    }, {
        "./_object-keys": 83,
        "./_to-iobject": 99
    }],
    70: [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {boolean} */
        module.exports = true;
    }, {}],
    71: [function(topic, module, dataAndEvents) {
        var ast = topic("./_uid")("meta");
        var out = topic("./_is-object");
        var reportError = topic("./_has");
        var setDescriptor = topic("./_object-dp").f;
        /** @type {number} */
        var O = 0;
        /** @type {function (Object): boolean} */
        var indexOf = Object.isExtensible || function() {
            return true;
        };
        /** @type {boolean} */
        var u = !topic("./_fails")(function() {
            return indexOf(Object.preventExtensions({}));
        });
        /**
         * @param {Object} optgroup
         * @return {undefined}
         */
        var isString = function(optgroup) {
            setDescriptor(optgroup, ast, {
                value: {
                    i: "O" + ++O,
                    w: {}
                }
            });
        };
        /**
         * @param {string} e
         * @param {?} idt
         * @return {?}
         */
        var toString = function(e, idt) {
            if (!out(e)) {
                return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            }
            if (!reportError(e, ast)) {
                if (!indexOf(e)) {
                    return "F";
                }
                if (!idt) {
                    return "E";
                }
                isString(e);
            }
            return e[ast].i;
        };
        /**
         * @param {Object} data
         * @param {?} view
         * @return {?}
         */
        var push = function(data, view) {
            if (!reportError(data, ast)) {
                if (!indexOf(data)) {
                    return true;
                }
                if (!view) {
                    return false;
                }
                isString(data);
            }
            return data[ast].w;
        };
        /**
         * @param {Object} e
         * @return {?}
         */
        var error = function(e) {
            return u && (NEED.NEED && (indexOf(e) && (!reportError(e, ast) && isString(e)))), e;
        };
        var NEED = module.exports = {
            KEY: ast,
            NEED: false,
            /** @type {function (string, ?): ?} */
            fastKey: toString,
            /** @type {function (Object, ?): ?} */
            getWeak: push,
            /** @type {function (Object): ?} */
            onFreeze: error
        };
    }, {
        "./_fails": 51,
        "./_has": 54,
        "./_is-object": 62,
        "./_object-dp": 75,
        "./_uid": 103
    }],
    72: [function(require, module, dataAndEvents) {
        var global = require("./_global");
        var self = require("./_task").set;
        var Response = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var context = global.Promise;
        /** @type {boolean} */
        var a = "process" == require("./_cof")(process);
        /**
         * @return {?}
         */
        module.exports = function() {
            var v;
            var ret;
            var done;
            /**
             * @return {undefined}
             */
            var finish = function() {
                var d;
                var headers;
                if (a) {
                    if (d = process.domain) {
                        d.exit();
                    }
                }
                for (; v;) {
                    headers = v.fn;
                    v = v.next;
                    try {
                        headers();
                    } catch (i) {
                        throw v ? done() : ret = void 0, i;
                    }
                }
                ret = void 0;
                if (d) {
                    d.enter();
                }
            };
            if (a) {
                /**
                 * @return {undefined}
                 */
                done = function() {
                    process.nextTick(finish);
                };
            } else {
                if (Response) {
                    /** @type {boolean} */
                    var iterations = true;
                    /** @type {Text} */
                    var node = document.createTextNode("");
                    (new Response(finish)).observe(node, {
                        characterData: true
                    });
                    /**
                     * @return {undefined}
                     */
                    done = function() {
                        /** @type {boolean} */
                        node.data = iterations = !iterations;
                    };
                } else {
                    if (context && context.resolve) {
                        var promise = context.resolve();
                        /**
                         * @return {undefined}
                         */
                        done = function() {
                            promise.then(finish);
                        };
                    } else {
                        /**
                         * @return {undefined}
                         */
                        done = function() {
                            self.call(global, finish);
                        };
                    }
                }
            }
            return function(fn) {
                var next = {
                    fn: fn,
                    next: void 0
                };
                if (ret) {
                    ret.next = next;
                }
                if (!v) {
                    v = next;
                    done();
                }
                ret = next;
            };
        };
    }, {
        "./_cof": 41,
        "./_global": 53,
        "./_task": 96
    }],
    73: [function(require, module, dataAndEvents) {
        var toArray = require("./_object-keys");
        var item = require("./_object-gops");
        var cfg = require("./_object-pie");
        var color = require("./_to-object");
        var inspect = require("./_iobject");
        var getNames_ = Object.assign;
        module.exports = !getNames_ || require("./_fails")(function() {
            var camelKey = {};
            var ast = {};
            var unlock = Symbol();
            /** @type {string} */
            var view = "abcdefghijklmnopqrst";
            return camelKey[unlock] = 7, view.split("").forEach(function(testname) {
                /** @type {string} */
                ast[testname] = testname;
            }), 7 != getNames_({}, camelKey)[unlock] || Object.keys(getNames_({}, ast)).join("") != view;
        }) ? function(name, key) {
            var c = color(name);
            /** @type {number} */
            var argLength = arguments.length;
            /** @type {number} */
            var current = 1;
            var element = item.f;
            var filter = cfg.f;
            for (; argLength > current;) {
                var v;
                var optgroup = inspect(arguments[current++]);
                var second = element ? toArray(optgroup).concat(element(optgroup)) : toArray(optgroup);
                var l = second.length;
                /** @type {number} */
                var i = 0;
                for (; l > i;) {
                    if (filter.call(optgroup, v = second[i++])) {
                        c[v] = optgroup[v];
                    }
                }
            }
            return c;
        } : getNames_;
    }, {
        "./_fails": 51,
        "./_iobject": 59,
        "./_object-gops": 80,
        "./_object-keys": 83,
        "./_object-pie": 84,
        "./_to-object": 101
    }],
    74: [function(require, module, dataAndEvents) {
        var factory = require("./_an-object");
        var inspect = require("./_object-dps");
        var nodes = require("./_enum-bug-keys");
        var n = require("./_shared-key")("IE_PROTO");
        /**
         * @return {undefined}
         */
        var context = function() {};
        /** @type {string} */
        var exports = "prototype";
        /**
         * @return {?}
         */
        var run = function() {
            var d;
            var ifr = require("./_dom-create")("iframe");
            var i = nodes.length;
            /** @type {string} */
            var prefix = "<";
            /** @type {string} */
            var name = ">";
            /** @type {string} */
            ifr.style.display = "none";
            require("./_html").appendChild(ifr);
            /** @type {string} */
            ifr.src = "javascript:";
            d = ifr.contentWindow.document;
            d.open();
            d.write(prefix + "script" + name + "document.F=Object" + prefix + "/script" + name);
            d.close();
            run = d.F;
            for (; i--;) {
                delete run[exports][nodes[i]];
            }
            return run();
        };
        /** @type {function ((Object|null), (Object|null)=): Object} */
        module.exports = Object.create || function(name, key) {
            var out;
            return null !== name ? (context[exports] = factory(name), out = new context, context[exports] = null, out[n] = name) : out = run(), void 0 === key ? out : inspect(out, key);
        };
    }, {
        "./_an-object": 38,
        "./_dom-create": 47,
        "./_enum-bug-keys": 48,
        "./_html": 56,
        "./_object-dps": 76,
        "./_shared-key": 92
    }],
    75: [function(require, dataAndEvents, entry) {
        var inspect = require("./_an-object");
        var Block = require("./_ie8-dom-define");
        var walk = require("./_to-primitive");
        /** @type {function (Object, string, Object): Object} */
        var ondata = Object.defineProperty;
        /** @type {Function} */
        entry.f = require("./_descriptors") ? Object.defineProperty : function(name, ast, opt_attributes) {
            if (inspect(name), ast = walk(ast, true), inspect(opt_attributes), Block) {
                try {
                    return ondata(name, ast, opt_attributes);
                } catch (c) {}
            }
            if ("get" in opt_attributes || "set" in opt_attributes) {
                throw TypeError("Accessors not supported!");
            }
            return "value" in opt_attributes && (name[ast] = opt_attributes.value), name;
        };
    }, {
        "./_an-object": 38,
        "./_descriptors": 46,
        "./_ie8-dom-define": 57,
        "./_to-primitive": 102
    }],
    76: [function(require, module, dataAndEvents) {
        var keys = require("./_object-dp");
        var inspect = require("./_an-object");
        var i = require("./_object-keys");
        /** @type {Function} */
        module.exports = require("./_descriptors") ? Object.defineProperties : function(name, key) {
            inspect(name);
            var f;
            var faces = i(key);
            var count = faces.length;
            /** @type {number} */
            var offset = 0;
            for (; count > offset;) {
                keys.f(name, f = faces[offset++], key[f]);
            }
            return name;
        };
    }, {
        "./_an-object": 38,
        "./_descriptors": 46,
        "./_object-dp": 75,
        "./_object-keys": 83
    }],
    77: [function(require, dataAndEvents, entry) {
        var module = require("./_object-pie");
        var store = require("./_property-desc");
        var expect = require("./_to-iobject");
        var i = require("./_to-primitive");
        var inspect = require("./_has");
        var Block = require("./_ie8-dom-define");
        /** @type {function (Object, string): (ObjectPropertyDescriptor|undefined)} */
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        /** @type {Function} */
        entry.f = require("./_descriptors") ? getOwnPropertyDescriptor : function(name, key) {
            if (name = expect(name), key = i(key, true), Block) {
                try {
                    return getOwnPropertyDescriptor(name, key);
                } catch (n) {}
            }
            if (inspect(name, key)) {
                return store(!module.f.call(name, key), name[key]);
            }
        };
    }, {
        "./_descriptors": 46,
        "./_has": 54,
        "./_ie8-dom-define": 57,
        "./_object-pie": 84,
        "./_property-desc": 86,
        "./_to-iobject": 99,
        "./_to-primitive": 102
    }],
    78: [function(get_func, mod, dataAndEvents) {
        var func = get_func("./_to-iobject");
        var $ = get_func("./_object-gopn").f;
        /** @type {function (this:*): string} */
        var toString = {}.toString;
        /** @type {Array} */
        var el = "object" == typeof window && (window && Object.getOwnPropertyNames) ? Object.getOwnPropertyNames(window) : [];
        /**
         * @param {Object} optgroup
         * @return {?}
         */
        var next = function(optgroup) {
            try {
                return $(optgroup);
            } catch (t) {
                return el.slice();
            }
        };
        /**
         * @param {Object} name
         * @return {?}
         */
        mod.exports.f = function(name) {
            return el && "[object Window]" == toString.call(name) ? next(name) : $(func(name));
        };
    }, {
        "./_object-gopn": 79,
        "./_to-iobject": 99
    }],
    79: [function(toArray, dataAndEvents, entry) {
        var ondata = toArray("./_object-keys-internal");
        var val = toArray("./_enum-bug-keys").concat("length", "prototype");
        /** @type {function (Object): Array.<string>} */
        entry.f = Object.getOwnPropertyNames || function(name) {
            return ondata(name, val);
        };
    }, {
        "./_enum-bug-keys": 48,
        "./_object-keys-internal": 82
    }],
    80: [function(dataAndEvents, deepDataAndEvents, object) {
        object.f = Object.getOwnPropertySymbols;
    }, {}],
    81: [function($sanitize, module, dataAndEvents) {
        var hasKey = $sanitize("./_has");
        var get_mangled = $sanitize("./_to-object");
        var type = $sanitize("./_shared-key")("IE_PROTO");
        var objectProto = Object.prototype;
        /** @type {function (Object): (Object|null)} */
        module.exports = Object.getPrototypeOf || function(name) {
            return name = get_mangled(name), hasKey(name, type) ? name[type] : "function" == typeof name.constructor && name instanceof name.constructor ? name.constructor.prototype : name instanceof Object ? objectProto : null;
        };
    }, {
        "./_has": 54,
        "./_shared-key": 92,
        "./_to-object": 101
    }],
    82: [function(require, module, dataAndEvents) {
        var getActual = require("./_has");
        var inspect = require("./_to-iobject");
        var callback = require("./_array-includes")(false);
        var e = require("./_shared-key")("IE_PROTO");
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            var i;
            var obj = inspect(name);
            /** @type {number} */
            var bs = 0;
            /** @type {Array} */
            var errors = [];
            for (i in obj) {
                if (i != e) {
                    if (getActual(obj, i)) {
                        errors.push(i);
                    }
                }
            }
            for (; key.length > bs;) {
                if (getActual(obj, i = key[bs++])) {
                    if (!~callback(errors, i)) {
                        errors.push(i);
                    }
                }
            }
            return errors;
        };
    }, {
        "./_array-includes": 39,
        "./_has": 54,
        "./_shared-key": 92,
        "./_to-iobject": 99
    }],
    83: [function(proceed, module, dataAndEvents) {
        var ondata = proceed("./_object-keys-internal");
        var val = proceed("./_enum-bug-keys");
        /** @type {function (Object): Array.<string>} */
        module.exports = Object.keys || function(name) {
            return ondata(name, val);
        };
    }, {
        "./_enum-bug-keys": 48,
        "./_object-keys-internal": 82
    }],
    84: [function(dataAndEvents, deepDataAndEvents, entry) {
        /** @type {function (this:Object, string): boolean} */
        entry.f = {}.propertyIsEnumerable;
    }, {}],
    85: [function(require, module, dataAndEvents) {
        var inspect = require("./_export");
        var util = require("./_core");
        var getActual = require("./_fails");
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {undefined}
         */
        module.exports = function(name, key) {
            var value = (util.Object || {})[name] || Object[name];
            var cookies = {};
            cookies[name] = key(value);
            inspect(inspect.S + inspect.F * getActual(function() {
                value(1);
            }), "Object", cookies);
        };
    }, {
        "./_core": 42,
        "./_export": 50,
        "./_fails": 51
    }],
    86: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            return {
                enumerable: !(1 & name),
                configurable: !(2 & name),
                writable: !(4 & name),
                value: key
            };
        };
    }, {}],
    87: [function(require, module, dataAndEvents) {
        var inspect = require("./_hide");
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @return {?}
         */
        module.exports = function(name, key, opt_attributes) {
            var k;
            for (k in key) {
                if (opt_attributes && name[k]) {
                    name[k] = key[k];
                } else {
                    inspect(name, k, key[k]);
                }
            }
            return name;
        };
    }, {
        "./_hide": 55
    }],
    88: [function(factory, module, dataAndEvents) {
        module.exports = factory("./_hide");
    }, {
        "./_hide": 55
    }],
    89: [function(require, c, dataAndEvents) {
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
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(value, err, func) {
                try {
                    func = require("./_ctx")(Function.call, require("./_object-gopd").f(Object.prototype, "__proto__").set, 2);
                    func(value, []);
                    /** @type {boolean} */
                    err = !(value instanceof Array);
                } catch (r) {
                    /** @type {boolean} */
                    err = true;
                }
                return function(object, callback) {
                    return forOwn(object, callback), err ? object.__proto__ = callback : func(object, callback), object;
                };
            }({}, false) : void 0),
            /** @type {function (Object, Object): undefined} */
            check: forOwn
        };
    }, {
        "./_an-object": 38,
        "./_ctx": 44,
        "./_is-object": 62,
        "./_object-gopd": 77
    }],
    90: [function(require, module, dataAndEvents) {
        var map = require("./_global");
        var helper = require("./_core");
        var doc = require("./_object-dp");
        var Block = require("./_descriptors");
        var ast = require("./_wks")("species");
        /**
         * @param {Object} name
         * @return {undefined}
         */
        module.exports = function(name) {
            var optgroup = "function" == typeof helper[name] ? helper[name] : map[name];
            if (Block) {
                if (optgroup) {
                    if (!optgroup[ast]) {
                        doc.f(optgroup, ast, {
                            configurable: true,
                            /**
                             * @return {?}
                             */
                            get: function() {
                                return this;
                            }
                        });
                    }
                }
            }
        };
    }, {
        "./_core": 42,
        "./_descriptors": 46,
        "./_global": 53,
        "./_object-dp": 75,
        "./_wks": 106
    }],
    91: [function(require, module, dataAndEvents) {
        var inspect = require("./_object-dp").f;
        var getActual = require("./_has");
        var ast = require("./_wks")("toStringTag");
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @return {undefined}
         */
        module.exports = function(name, key, opt_attributes) {
            if (name) {
                if (!getActual(name = opt_attributes ? name : name.prototype, ast)) {
                    inspect(name, ast, {
                        configurable: true,
                        value: key
                    });
                }
            }
        };
    }, {
        "./_has": 54,
        "./_object-dp": 75,
        "./_wks": 106
    }],
    92: [function($sanitize, module, dataAndEvents) {
        var context = $sanitize("./_shared")("keys");
        var definition = $sanitize("./_uid");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return context[name] || (context[name] = definition(name));
        };
    }, {
        "./_shared": 93,
        "./_uid": 103
    }],
    93: [function(createElement, module, dataAndEvents) {
        var o = createElement("./_global");
        /** @type {string} */
        var oride = "__core-js_shared__";
        var old = o[oride] || (o[oride] = {});
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return old[name] || (old[name] = {});
        };
    }, {
        "./_global": 53
    }],
    94: [function(require, module, dataAndEvents) {
        var inspect = require("./_an-object");
        var getActual = require("./_a-function");
        var part = require("./_wks")("species");
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            var obj;
            var bCtor = inspect(name).constructor;
            return void 0 === bCtor || void 0 == (obj = inspect(bCtor)[part]) ? key : getActual(obj);
        };
    }, {
        "./_a-function": 35,
        "./_an-object": 38,
        "./_wks": 106
    }],
    95: [function(getCallback, module, dataAndEvents) {
        var getIndex = getCallback("./_to-integer");
        var callback = getCallback("./_defined");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return function(value, prevId) {
                var headers;
                var s;
                /** @type {string} */
                var source = String(callback(value));
                var index = getIndex(prevId);
                /** @type {number} */
                var len = source.length;
                return index < 0 || index >= len ? name ? "" : void 0 : (headers = source.charCodeAt(index), headers < 55296 || (headers > 56319 || (index + 1 === len || ((s = source.charCodeAt(index + 1)) < 56320 || s > 57343))) ? name ? source.charAt(index) : headers : name ? source.slice(index, index + 2) : (headers - 55296 << 10) + (s - 56320) + 65536);
            };
        };
    }, {
        "./_defined": 45,
        "./_to-integer": 98
    }],
    96: [function(require, c, dataAndEvents) {
        var callback;
        var channel;
        var thisArg;
        var bind = require("./_ctx");
        var getActual = require("./_invoke");
        var xml = require("./_html");
        var inspect = require("./_dom-create");
        var global = require("./_global");
        var process = global.process;
        var pass = global.setImmediate;
        var Benchmark = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        /** @type {number} */
        var pdataCur = 0;
        var buf = {};
        /** @type {string} */
        var onreadystatechange = "onreadystatechange";
        /**
         * @return {undefined}
         */
        var self = function() {
            /** @type {number} */
            var key = +this;
            if (buf.hasOwnProperty(key)) {
                var pp = buf[key];
                delete buf[key];
                pp();
            }
        };
        /**
         * @param {MessageEvent} ev
         * @return {undefined}
         */
        var onmessage = function(ev) {
            self.call(ev.data);
        };
        if (!(pass && Benchmark)) {
            /**
             * @param {Object} name
             * @return {?}
             */
            pass = function(name) {
                /** @type {Array} */
                var args = [];
                /** @type {number} */
                var i = 1;
                for (; arguments.length > i;) {
                    args.push(arguments[i++]);
                }
                return buf[++pdataCur] = function() {
                    getActual("function" == typeof name ? name : Function(name), args);
                }, callback(pdataCur), pdataCur;
            };
            /**
             * @param {Object} name
             * @return {undefined}
             */
            Benchmark = function(name) {
                delete buf[name];
            };
            if ("process" == require("./_cof")(process)) {
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
                    if (global.addEventListener && ("function" == typeof postMessage && !global.importScripts)) {
                        /**
                         * @param {string} value
                         * @return {undefined}
                         */
                        callback = function(value) {
                            global.postMessage(value + "", "*");
                        };
                        global.addEventListener("message", onmessage, false);
                    } else {
                        /** @type {function (number): undefined} */
                        callback = onreadystatechange in inspect("script") ? function(value) {
                            /**
                             * @return {undefined}
                             */
                            xml.appendChild(inspect("script"))[onreadystatechange] = function() {
                                xml.removeChild(this);
                                self.call(value);
                            };
                        } : function(data) {
                            setTimeout(bind(self, data, 1), 0);
                        };
                    }
                }
            }
        }
        c.exports = {
            set: pass,
            clear: Benchmark
        };
    }, {
        "./_cof": 41,
        "./_ctx": 44,
        "./_dom-create": 47,
        "./_global": 53,
        "./_html": 56,
        "./_invoke": 58
    }],
    97: [function($filter, module, dataAndEvents) {
        var capitalize = $filter("./_to-integer");
        /** @type {function (...[*]): number} */
        var log = Math.max;
        /** @type {function (...[*]): number} */
        var inspect = Math.min;
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            return name = capitalize(name), name < 0 ? log(name + key, 0) : inspect(name, key);
        };
    }, {
        "./_to-integer": 98
    }],
    98: [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {function (*): number} */
        var ceil = Math.ceil;
        /** @type {function (*): number} */
        var floor = Math.floor;
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return isNaN(name = +name) ? 0 : (name > 0 ? floor : ceil)(name);
        };
    }, {}],
    99: [function(require, module, dataAndEvents) {
        var set = require("./_iobject");
        var inspect = require("./_defined");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return set(inspect(name));
        };
    }, {
        "./_defined": 45,
        "./_iobject": 59
    }],
    100: [function(require, module, dataAndEvents) {
        var inspect = require("./_to-integer");
        /** @type {function (...[*]): number} */
        var nativeMin = Math.min;
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return name > 0 ? nativeMin(inspect(name), 9007199254740991) : 0;
        };
    }, {
        "./_to-integer": 98
    }],
    101: [function(require, module, dataAndEvents) {
        var inspect = require("./_defined");
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return Object(inspect(name));
        };
    }, {
        "./_defined": 45
    }],
    102: [function(require, module, dataAndEvents) {
        var inspect = require("./_is-object");
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        module.exports = function(name, key) {
            if (!inspect(name)) {
                return name;
            }
            var toString;
            var m;
            if (key && ("function" == typeof(toString = name.toString) && !inspect(m = toString.call(name)))) {
                return m;
            }
            if ("function" == typeof(toString = name.valueOf) && !inspect(m = toString.call(name))) {
                return m;
            }
            if (!key && ("function" == typeof(toString = name.toString) && !inspect(m = toString.call(name)))) {
                return m;
            }
            throw TypeError("Can't convert object to primitive value");
        };
    }, {
        "./_is-object": 62
    }],
    103: [function(dataAndEvents, module, deepDataAndEvents) {
        /** @type {number} */
        var count = 0;
        /** @type {number} */
        var id = Math.random();
        /**
         * @param {Object} name
         * @return {?}
         */
        module.exports = function(name) {
            return "Symbol(".concat(void 0 === name ? "" : name, ")_", (++count + id).toString(36));
        };
    }, {}],
    104: [function(require, module, dataAndEvents) {
        var nodes = require("./_global");
        var runtime = require("./_core");
        var Block = require("./_library");
        var keys = require("./_wks-ext");
        var getter = require("./_object-dp").f;
        /**
         * @param {Object} name
         * @return {undefined}
         */
        module.exports = function(name) {
            var optgroup = runtime.Symbol || (runtime.Symbol = Block ? {} : nodes.Symbol || {});
            if (!("_" == name.charAt(0))) {
                if (!(name in optgroup)) {
                    getter(optgroup, name, {
                        value: keys.f(name)
                    });
                }
            }
        };
    }, {
        "./_core": 42,
        "./_global": 53,
        "./_library": 70,
        "./_object-dp": 75,
        "./_wks-ext": 105
    }],
    105: [function(trim, dataAndEvents, el) {
        el.f = trim("./_wks");
    }, {
        "./_wks": 106
    }],
    106: [function(inspect, module, dataAndEvents) {
        var store = inspect("./_shared")("wks");
        var str = inspect("./_uid");
        var conditions = inspect("./_global").Symbol;
        /** @type {boolean} */
        var style = "function" == typeof conditions;
        /** @type {function (Object): ?} */
        var self = module.exports = function(name) {
            return store[name] || (store[name] = style && conditions[name] || (style ? conditions : str)("Symbol." + name));
        };
        self.store = store;
    }, {
        "./_global": 53,
        "./_shared": 93,
        "./_uid": 103
    }],
    107: [function(require, module, dataAndEvents) {
        var getActual = require("./_classof");
        var implementation = require("./_wks")("iterator");
        var objectTypes = require("./_iterators");
        /** @type {function (Object): ?} */
        module.exports = require("./_core").getIteratorMethod = function(obj) {
            if (void 0 != obj) {
                return obj[implementation] || (obj["@@iterator"] || objectTypes[getActual(obj)]);
            }
        };
    }, {
        "./_classof": 40,
        "./_core": 42,
        "./_iterators": 68,
        "./_wks": 106
    }],
    108: [function(require, module, dataAndEvents) {
        var getName = require("./_an-object");
        var filter = require("./core.get-iterator-method");
        /** @type {function (string): ?} */
        module.exports = require("./_core").getIterator = function(elem) {
            var matched = filter(elem);
            if ("function" != typeof matched) {
                throw TypeError(elem + " is not iterable!");
            }
            return getName(matched.call(elem));
        };
    }, {
        "./_an-object": 38,
        "./_core": 42,
        "./core.get-iterator-method": 107
    }],
    109: [function(require, module, dataAndEvents) {
        var helper = require("./_classof");
        var func = require("./_wks")("iterator");
        var tags = require("./_iterators");
        /** @type {function (Object): ?} */
        module.exports = require("./_core").isIterable = function(optgroup) {
            var t = Object(optgroup);
            return void 0 !== t[func] || ("@@iterator" in t || tags.hasOwnProperty(helper(t)));
        };
    }, {
        "./_classof": 40,
        "./_core": 42,
        "./_iterators": 68,
        "./_wks": 106
    }],
    110: [function(require, dataAndEvents, deepDataAndEvents) {
        var makeIterator = require("./_ctx");
        var expr = require("./_export");
        var create = require("./_to-object");
        var merge = require("./_iter-call");
        var getActual = require("./_is-array-iter");
        var assert = require("./_to-length");
        var isArray = require("./_create-property");
        var filter = require("./core.get-iterator-method");
        expr(expr.S + expr.F * !require("./_iter-detect")(function(optgroup) {
            Array.from(optgroup);
        }), "Array", {
            /**
             * @param {Object} name
             * @return {?}
             */
            from: function(name) {
                var val;
                var first;
                var input;
                var ret;
                var elem = create(name);
                var type = "function" == typeof this ? this : Array;
                /** @type {number} */
                var len = arguments.length;
                var callback = len > 1 ? arguments[1] : void 0;
                /** @type {boolean} */
                var isFunction = void 0 !== callback;
                /** @type {number} */
                var i = 0;
                var matched = filter(elem);
                if (isFunction && (callback = makeIterator(callback, len > 2 ? arguments[2] : void 0, 2)), void 0 == matched || type == Array && getActual(matched)) {
                    val = assert(elem.length);
                    first = new type(val);
                    for (; val > i; i++) {
                        isArray(first, i, isFunction ? callback(elem[i], i) : elem[i]);
                    }
                } else {
                    ret = matched.call(elem);
                    first = new type;
                    for (; !(input = ret.next()).done; i++) {
                        isArray(first, i, isFunction ? merge(ret, callback, [input.value, i], true) : input.value);
                    }
                }
                return first.length = i, first;
            }
        });
    }, {
        "./_create-property": 43,
        "./_ctx": 44,
        "./_export": 50,
        "./_is-array-iter": 60,
        "./_iter-call": 63,
        "./_iter-detect": 66,
        "./_to-length": 100,
        "./_to-object": 101,
        "./core.get-iterator-method": 107
    }],
    111: [function(require, module, dataAndEvents) {
        var isArray = require("./_add-to-unscopables");
        var _ = require("./_iter-step");
        var nodes = require("./_iterators");
        var getActual = require("./_to-iobject");
        module.exports = require("./_iter-define")(Array, "Array", function(obj, dataAndEvents) {
            this._t = getActual(obj);
            /** @type {number} */
            this._i = 0;
            /** @type {(number|string)} */
            this._k = dataAndEvents;
        }, function() {
            var _col = this._t;
            var incoming = this._k;
            /** @type {number} */
            var _ty = this._i++;
            return !_col || _ty >= _col.length ? (this._t = void 0, _(1)) : "keys" == incoming ? _(0, _ty) : "values" == incoming ? _(0, _col[_ty]) : _(0, [_ty, _col[_ty]]);
        }, "values");
        nodes.Arguments = nodes.Array;
        isArray("keys");
        isArray("values");
        isArray("entries");
    }, {
        "./_add-to-unscopables": 36,
        "./_iter-define": 65,
        "./_iter-step": 67,
        "./_iterators": 68,
        "./_to-iobject": 99
    }],
    112: [function(parser, dataAndEvents, deepDataAndEvents) {
        var expr = parser("./_export");
        expr(expr.S + expr.F, "Object", {
            assign: parser("./_object-assign")
        });
    }, {
        "./_export": 50,
        "./_object-assign": 73
    }],
    113: [function(require, dataAndEvents, deepDataAndEvents) {
        var isKind = require("./_export");
        isKind(isKind.S, "Object", {
            create: require("./_object-create")
        });
    }, {
        "./_export": 50,
        "./_object-create": 74
    }],
    114: [function(parser, dataAndEvents, deepDataAndEvents) {
        var expr = parser("./_export");
        expr(expr.S + expr.F * !parser("./_descriptors"), "Object", {
            defineProperty: parser("./_object-dp").f
        });
    }, {
        "./_descriptors": 46,
        "./_export": 50,
        "./_object-dp": 75
    }],
    115: [function(require, dataAndEvents, deepDataAndEvents) {
        var HOP = require("./_to-object");
        var getActual = require("./_object-gpo");
        require("./_object-sap")("getPrototypeOf", function() {
            return function(walkers) {
                return getActual(HOP(walkers));
            };
        });
    }, {
        "./_object-gpo": 81,
        "./_object-sap": 85,
        "./_to-object": 101
    }],
    116: [function(require, dataAndEvents, deepDataAndEvents) {
        var getActual = require("./_to-object");
        var assert = require("./_object-keys");
        require("./_object-sap")("keys", function() {
            return function(obj) {
                return assert(getActual(obj));
            };
        });
    }, {
        "./_object-keys": 83,
        "./_object-sap": 85,
        "./_to-object": 101
    }],
    117: [function(require, dataAndEvents, deepDataAndEvents) {
        var isKind = require("./_export");
        isKind(isKind.S, "Object", {
            setPrototypeOf: require("./_set-proto").set
        });
    }, {
        "./_export": 50,
        "./_set-proto": 89
    }],
    118: [function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {}, {}],
    119: [function(f, dataAndEvents, deepDataAndEvents) {
        var Moment;
        var Deferred;
        var option;
        var _isFocused = f("./_library");
        var global = f("./_global");
        var $ = f("./_ctx");
        var status = f("./_classof");
        var square = f("./_export");
        var isWrapper = f("./_is-object");
        var __bind = f("./_a-function");
        var value = f("./_an-instance");
        var each = f("./_for-of");
        var callback = f("./_species-constructor");
        var setter = f("./_task").set;
        var flush = f("./_microtask")();
        /** @type {string} */
        var i = "Promise";
        var unescape = global.TypeError;
        var process = global.process;
        var model = global[i];
        process = global.process;
        /** @type {boolean} */
        var domain = "process" == status(process);
        /**
         * @return {undefined}
         */
        var resolved = function() {};
        /** @type {boolean} */
        var _tryInitOnFocus = !! function() {
            try {
                var promise = model.resolve(1);
                /** @type {function (?): undefined} */
                var n = (promise.constructor = {})[f("./_wks")("species")] = function(require) {
                    require(resolved, resolved);
                };
                return (domain || "function" == typeof PromiseRejectionEvent) && promise.then(resolved) instanceof n;
            } catch (o) {}
        }();
        /**
         * @param {number} type
         * @param {number} name
         * @return {?}
         */
        var when = function(type, name) {
            return type === name || type === model && name === option;
        };
        /**
         * @param {?} object
         * @return {?}
         */
        var unwrap = function(object) {
            var length;
            return !(!isWrapper(object) || "function" != typeof(length = object.then)) && length;
        };
        /**
         * @param {?} resolve
         * @return {?}
         */
        var then = function(resolve) {
            return when(model, resolve) ? new Promise(resolve) : new Deferred(resolve);
        };
        /** @type {function (?): undefined} */
        var Promise = Deferred = function(promise) {
            var text;
            var doneResults;
            this.promise = new promise(function(textAlt, data) {
                if (void 0 !== text || void 0 !== doneResults) {
                    throw unescape("Bad Promise constructor");
                }
                text = textAlt;
                doneResults = data;
            });
            this.resolve = __bind(text);
            this.reject = __bind(doneResults);
        };
        /**
         * @param {Function} func
         * @return {?}
         */
        var call = function(func) {
            try {
                func();
            } catch (err) {
                return {
                    error: err
                };
            }
        };
        /**
         * @param {?} b
         * @param {boolean} recurring
         * @return {undefined}
         */
        var fn = function(b, recurring) {
            if (!b._n) {
                /** @type {boolean} */
                b._n = true;
                var items = b._c;
                flush(function() {
                    var v = b._v;
                    /** @type {boolean} */
                    var caseSensitive = 1 == b._s;
                    /** @type {number} */
                    var index = 0;
                    /**
                     * @param {Object} result
                     * @return {undefined}
                     */
                    var finish = function(result) {
                        var optgroup;
                        var cb;
                        var $ = caseSensitive ? result.ok : result.fail;
                        var resolve = result.resolve;
                        var callback = result.reject;
                        var domain = result.domain;
                        try {
                            if ($) {
                                if (!caseSensitive) {
                                    if (2 == b._h) {
                                        start(b);
                                    }
                                    /** @type {number} */
                                    b._h = 1;
                                }
                                if ($ === true) {
                                    optgroup = v;
                                } else {
                                    if (domain) {
                                        domain.enter();
                                    }
                                    optgroup = $(v);
                                    if (domain) {
                                        domain.exit();
                                    }
                                }
                                if (optgroup === result.promise) {
                                    callback(unescape("Promise-chain cycle"));
                                } else {
                                    if (cb = unwrap(optgroup)) {
                                        cb.call(optgroup, resolve, callback);
                                    } else {
                                        resolve(optgroup);
                                    }
                                }
                            } else {
                                callback(v);
                            }
                        } catch (e) {
                            callback(e);
                        }
                    };
                    for (; items.length > index;) {
                        finish(items[index++]);
                    }
                    /** @type {Array} */
                    b._c = [];
                    /** @type {boolean} */
                    b._n = false;
                    if (recurring) {
                        if (!b._h) {
                            ready(b);
                        }
                    }
                });
            }
        };
        /**
         * @param {?} data
         * @return {undefined}
         */
        var ready = function(data) {
            setter.call(global, function() {
                var object;
                var cancelAnimationFrame;
                var console;
                var err = data._v;
                if (test(data) && (object = call(function() {
                        if (domain) {
                            process.emit("unhandledRejection", err, data);
                        } else {
                            if (cancelAnimationFrame = global.onunhandledrejection) {
                                cancelAnimationFrame({
                                    promise: data,
                                    reason: err
                                });
                            } else {
                                if (console = global.console) {
                                    if (console.error) {
                                        console.error("Unhandled promise rejection", err);
                                    }
                                }
                            }
                        }
                    }), data._h = domain || test(data) ? 2 : 1), data._a = void 0, object) {
                    throw object.error;
                }
            });
        };
        /**
         * @param {?} t
         * @return {?}
         */
        var test = function(t) {
            if (1 == t._h) {
                return false;
            }
            var next;
            var items = t._a || t._c;
            /** @type {number} */
            var index = 0;
            for (; items.length > index;) {
                if (next = items[index++], next.fail || !test(next.promise)) {
                    return false;
                }
            }
            return true;
        };
        /**
         * @param {Object} args
         * @return {undefined}
         */
        var start = function(args) {
            setter.call(global, function() {
                var onError;
                if (domain) {
                    process.emit("rejectionHandled", args);
                } else {
                    if (onError = global.onrejectionhandled) {
                        onError({
                            promise: args,
                            reason: args._v
                        });
                    }
                }
            });
        };
        /**
         * @param {?} block
         * @return {undefined}
         */
        var add = function(block) {
            var config = this;
            if (!config._d) {
                /** @type {boolean} */
                config._d = true;
                config = config._w || config;
                config._v = block;
                /** @type {number} */
                config._s = 2;
                if (!config._a) {
                    config._a = config._c.slice();
                }
                fn(config, true);
            }
        };
        /**
         * @param {string} b
         * @return {undefined}
         */
        var step = function(b) {
            var self;
            var a = this;
            if (!a._d) {
                /** @type {boolean} */
                a._d = true;
                a = a._w || a;
                try {
                    if (a === b) {
                        throw unescape("Promise can't be resolved itself");
                    }
                    if (self = unwrap(b)) {
                        flush(function() {
                            var options = {
                                _w: a,
                                _d: false
                            };
                            try {
                                self.call(b, $(step, options, 1), $(add, options, 1));
                            } catch (modelsToAdd) {
                                add.call(options, modelsToAdd);
                            }
                        });
                    } else {
                        /** @type {string} */
                        a._v = b;
                        /** @type {number} */
                        a._s = 1;
                        fn(a, false);
                    }
                } catch (modelsToAdd) {
                    add.call({
                        _w: a,
                        _d: false
                    }, modelsToAdd);
                }
            }
        };
        if (!_tryInitOnFocus) {
            /**
             * @param {Object} name
             * @return {undefined}
             */
            model = function(name) {
                value(this, model, i, "_h");
                __bind(name);
                Moment.call(this);
                try {
                    name($(step, this, 1), $(add, this, 1));
                } catch (modelsToAdd) {
                    add.call(this, modelsToAdd);
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
            Moment.prototype = f("./_redefine-all")(model.prototype, {
                /**
                 * @param {Object} resolved
                 * @param {Object} onReject
                 * @return {?}
                 */
                then: function(resolved, onReject) {
                    var test = then(callback(this, model));
                    return test.ok = "function" != typeof resolved || resolved, test.fail = "function" == typeof onReject && onReject, test.domain = domain ? process.domain : void 0, this._c.push(test), this._a && this._a.push(test), this._s && fn(this, false), test.promise;
                },
                /**
                 * @param {Object} callback
                 * @return {?}
                 */
                "catch": function(callback) {
                    return this.then(void 0, callback);
                }
            });
            /**
             * @return {undefined}
             */
            Promise = function() {
                var rc1 = new Moment;
                this.promise = rc1;
                this.resolve = $(step, rc1, 1);
                this.reject = $(add, rc1, 1);
            };
        }
        square(square.G + square.W + square.F * !_tryInitOnFocus, {
            Promise: model
        });
        f("./_set-to-string-tag")(model, i);
        f("./_set-species")(i);
        option = f("./_core")[i];
        square(square.S + square.F * !_tryInitOnFocus, i, {
            /**
             * @param {?} reason
             * @return {?}
             */
            reject: function(reason) {
                var createDeferred = then(this);
                var reject = createDeferred.reject;
                return reject(reason), createDeferred.promise;
            }
        });
        square(square.S + square.F * (_isFocused || !_tryInitOnFocus), i, {
            /**
             * @param {Object} name
             * @return {?}
             */
            resolve: function(name) {
                if (name instanceof model && when(name.constructor, this)) {
                    return name;
                }
                var promise = then(this);
                var resolve = promise.resolve;
                return resolve(name), promise.promise;
            }
        });
        square(square.S + square.F * !(_tryInitOnFocus && f("./_iter-detect")(function(value) {
            model.all(value)["catch"](resolved);
        })), i, {
            /**
             * @param {?} obj
             * @return {?}
             */
            all: function(obj) {
                var resolved = this;
                var deferred = then(resolved);
                var resolver = deferred.resolve;
                var reject = deferred.reject;
                var r = call(function() {
                    /** @type {Array} */
                    var rvar = [];
                    /** @type {number} */
                    var i = 0;
                    /** @type {number} */
                    var s = 1;
                    each(obj, false, function(optgroup) {
                        /** @type {number} */
                        var unlock = i++;
                        /** @type {boolean} */
                        var a = false;
                        rvar.push(void 0);
                        s++;
                        resolved.resolve(optgroup).then(function(data) {
                            if (!a) {
                                /** @type {boolean} */
                                a = true;
                                rvar[unlock] = data;
                                if (!--s) {
                                    resolver(rvar);
                                }
                            }
                        }, reject);
                    });
                    if (!--s) {
                        resolver(rvar);
                    }
                });
                return r && reject(r.error), deferred.promise;
            },
            /**
             * @param {?} initial
             * @return {?}
             */
            race: function(initial) {
                var resolved = this;
                var deferred = then(resolved);
                var reject = deferred.reject;
                var r = call(function() {
                    each(initial, false, function(optgroup) {
                        resolved.resolve(optgroup).then(deferred.resolve, reject);
                    });
                });
                return r && reject(r.error), deferred.promise;
            }
        });
    }, {
        "./_a-function": 35,
        "./_an-instance": 37,
        "./_classof": 40,
        "./_core": 42,
        "./_ctx": 44,
        "./_export": 50,
        "./_for-of": 52,
        "./_global": 53,
        "./_is-object": 62,
        "./_iter-detect": 66,
        "./_library": 70,
        "./_microtask": 72,
        "./_redefine-all": 87,
        "./_set-species": 90,
        "./_set-to-string-tag": 91,
        "./_species-constructor": 94,
        "./_task": 96,
        "./_wks": 106
    }],
    120: [function($sanitize, dataAndEvents, deepDataAndEvents) {
        var filter = $sanitize("./_string-at")(true);
        $sanitize("./_iter-define")(String, "String", function(opt_message) {
            /** @type {string} */
            this._t = String(opt_message);
            /** @type {number} */
            this._i = 0;
        }, function() {
            var val;
            var arr = this._t;
            var i = this._i;
            return i >= arr.length ? {
                value: void 0,
                done: true
            } : (val = filter(arr, i), this._i += val.length, {
                value: val,
                done: false
            });
        });
    }, {
        "./_iter-define": 65,
        "./_string-at": 95
    }],
    121: [function(require, dataAndEvents, deepDataAndEvents) {
        var opts = require("./_global");
        var func = require("./_has");
        var deep = require("./_descriptors");
        var node = require("./_export");
        var inspect = require("./_redefine");
        var KEY = require("./_meta").KEY;
        var getActual = require("./_fails");
        var toObject = require("./_shared");
        var isUndefined = require("./_set-to-string-tag");
        var nodes = require("./_uid");
        var parse = require("./_wks");
        var argv = require("./_wks-ext");
        var helper = require("./_wks-define");
        var b = require("./_keyof");
        var assert = require("./_enum-keys");
        var isString = require("./_is-array");
        var normalize = require("./_an-object");
        var encodeURIComponent = require("./_to-iobject");
        var trim = require("./_to-primitive");
        var value = require("./_property-desc");
        var expect = require("./_object-create");
        var module = require("./_object-gopn-ext");
        var state = require("./_object-gopd");
        var $ = require("./_object-dp");
        var toString = require("./_object-keys");
        var print = state.f;
        var has = $.f;
        var String = module.f;
        var options = opts.Symbol;
        var context = opts.JSON;
        var fn = context && context.stringify;
        /** @type {string} */
        var key = "prototype";
        var ast = parse("_hidden");
        var x = parse("toPrimitive");
        /** @type {function (this:Object, string): boolean} */
        var propertyIsEnumerable = {}.propertyIsEnumerable;
        var self = toObject("symbol-registry");
        var object = toObject("symbols");
        var rvar = toObject("op-symbols");
        var optgroup = Object[key];
        /** @type {boolean} */
        var symbol = "function" == typeof options;
        var duration = opts.QObject;
        /** @type {boolean} */
        var copy = !duration || (!duration[key] || !duration[key].findChild);
        var defineProperty = deep && getActual(function() {
            return 7 != expect(has({}, "a", {
                /**
                 * @return {?}
                 */
                get: function() {
                    return has(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(name, ast, opt_attributes) {
            var attributes = print(optgroup, ast);
            if (attributes) {
                delete optgroup[ast];
            }
            has(name, ast, opt_attributes);
            if (attributes) {
                if (name !== optgroup) {
                    has(optgroup, ast, attributes);
                }
            }
        } : has;
        /**
         * @param {(number|string)} value
         * @return {?}
         */
        var callback = function(value) {
            var self = object[value] = expect(options[key]);
            return self._k = value, self;
        };
        /** @type {function (Object): ?} */
        var _extend = symbol && "symbol" == typeof options.iterator ? function(opt_attributes) {
            return "symbol" == typeof opt_attributes;
        } : function(opt_attributes) {
            return opt_attributes instanceof options;
        };
        /**
         * @param {Object} name
         * @param {Object} key
         * @param {?} opt_attributes
         * @return {?}
         */
        var get = function(name, key, opt_attributes) {
            return name === optgroup && get(rvar, key, opt_attributes), normalize(name), key = trim(key, true), normalize(opt_attributes), func(object, key) ? (opt_attributes.enumerable ? (func(name, ast) && (name[ast][key] && (name[ast][key] = false)), opt_attributes = expect(opt_attributes, {
                enumerable: value(0, false)
            })) : (func(name, ast) || has(name, ast, value(1, {})), name[ast][key] = true), defineProperty(name, key, opt_attributes)) : has(name, key, opt_attributes);
        };
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        var set = function(name, key) {
            normalize(name);
            var className;
            var classNames = assert(key = encodeURIComponent(key));
            /** @type {number} */
            var i = 0;
            var len = classNames.length;
            for (; len > i;) {
                get(name, className = classNames[i++], key[className]);
            }
            return name;
        };
        /**
         * @param {Object} name
         * @param {Object} ast
         * @return {?}
         */
        var name = function(name, ast) {
            return void 0 === ast ? expect(name) : set(expect(name), ast);
        };
        /**
         * @param {Object} name
         * @return {?}
         */
        var next = function(name) {
            /** @type {boolean} */
            var t = propertyIsEnumerable.call(this, name = trim(name, true));
            return !(this === optgroup && (func(object, name) && !func(rvar, name))) && (!(t || (!func(this, name) || (!func(object, name) || func(this, ast) && this[ast][name]))) || t);
        };
        /**
         * @param {Object} name
         * @param {Object} key
         * @return {?}
         */
        var f = function(name, key) {
            if (name = encodeURIComponent(name), key = trim(key, true), name !== optgroup || (!func(object, key) || func(rvar, key))) {
                var descriptor = print(name, key);
                return !descriptor || (!func(object, key) || (func(name, ast) && name[ast][key] || (descriptor.enumerable = true))), descriptor;
            }
        };
        /**
         * @param {Object} name
         * @return {?}
         */
        var add = function(name) {
            var copies;
            var h = String(encodeURIComponent(name));
            /** @type {Array} */
            var out = [];
            /** @type {number} */
            var i = 0;
            for (; h.length > i;) {
                if (!func(object, copies = h[i++])) {
                    if (!(copies == ast)) {
                        if (!(copies == KEY)) {
                            out.push(copies);
                        }
                    }
                }
            }
            return out;
        };
        /**
         * @param {Object} name
         * @return {?}
         */
        var listener = function(name) {
            var key;
            /** @type {boolean} */
            var prefix = name === optgroup;
            var path = String(prefix ? rvar : encodeURIComponent(name));
            /** @type {Array} */
            var values = [];
            /** @type {number} */
            var idx = 0;
            for (; path.length > idx;) {
                if (!!func(object, key = path[idx++])) {
                    if (!(prefix && !func(optgroup, key))) {
                        values.push(object[key]);
                    }
                }
            }
            return values;
        };
        if (!symbol) {
            /**
             * @return {?}
             */
            options = function() {
                if (this instanceof options) {
                    throw TypeError("Symbol is not a constructor!");
                }
                var camelKey = nodes(arguments.length > 0 ? arguments[0] : void 0);
                /**
                 * @param {Object} name
                 * @return {undefined}
                 */
                var add = function(name) {
                    if (this === optgroup) {
                        add.call(rvar, name);
                    }
                    if (func(this, ast)) {
                        if (func(this[ast], camelKey)) {
                            /** @type {boolean} */
                            this[ast][camelKey] = false;
                        }
                    }
                    defineProperty(this, camelKey, value(1, name));
                };
                return deep && (copy && defineProperty(optgroup, camelKey, {
                    configurable: true,
                    /** @type {function (Object): undefined} */
                    set: add
                })), callback(camelKey);
            };
            inspect(options[key], "toString", function() {
                return this._k;
            });
            /** @type {function (Object, Object): ?} */
            state.f = f;
            /** @type {function (Object, Object, ?): ?} */
            $.f = get;
            /** @type {function (Object): ?} */
            require("./_object-gopn").f = module.f = add;
            /** @type {function (Object): ?} */
            require("./_object-pie").f = next;
            /** @type {function (Object): ?} */
            require("./_object-gops").f = listener;
            if (deep) {
                if (!require("./_library")) {
                    inspect(optgroup, "propertyIsEnumerable", next, true);
                }
            }
            /**
             * @param {Object} name
             * @return {?}
             */
            argv.f = function(name) {
                return callback(parse(name));
            };
        }
        node(node.G + node.W + node.F * !symbol, {
            Symbol: options
        });
        /** @type {Array.<string>} */
        var str = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",");
        /** @type {number} */
        var chars = 0;
        for (; str.length > chars;) {
            parse(str[chars++]);
        }
        str = toString(parse.store);
        /** @type {number} */
        chars = 0;
        for (; str.length > chars;) {
            helper(str[chars++]);
        }
        node(node.S + node.F * !symbol, "Symbol", {
            /**
             * @param {Object} optgroup
             * @return {?}
             */
            "for": function(optgroup) {
                return func(self, optgroup += "") ? self[optgroup] : self[optgroup] = options(optgroup);
            },
            /**
             * @param {string} attributes
             * @return {?}
             */
            keyFor: function(attributes) {
                if (_extend(attributes)) {
                    return b(self, attributes);
                }
                throw TypeError(attributes + " is not a symbol!");
            },
            /**
             * @return {undefined}
             */
            useSetter: function() {
                /** @type {boolean} */
                copy = true;
            },
            /**
             * @return {undefined}
             */
            useSimple: function() {
                /** @type {boolean} */
                copy = false;
            }
        });
        node(node.S + node.F * !symbol, "Object", {
            /** @type {function (Object, Object): ?} */
            create: name,
            /** @type {function (Object, Object, ?): ?} */
            defineProperty: get,
            /** @type {function (Object, Object): ?} */
            defineProperties: set,
            /** @type {function (Object, Object): ?} */
            getOwnPropertyDescriptor: f,
            /** @type {function (Object): ?} */
            getOwnPropertyNames: add,
            /** @type {function (Object): ?} */
            getOwnPropertySymbols: listener
        });
        if (context) {
            node(node.S + node.F * (!symbol || getActual(function() {
                var optgroup = options();
                return "[null]" != fn([optgroup]) || ("{}" != fn({
                    a: optgroup
                }) || "{}" != fn(Object(optgroup)));
            })), "JSON", {
                /**
                 * @param {Object} attributes
                 * @return {?}
                 */
                stringify: function(attributes) {
                    if (void 0 !== attributes && !_extend(attributes)) {
                        var data;
                        var callback;
                        /** @type {Array} */
                        var args = [attributes];
                        /** @type {number} */
                        var i = 1;
                        for (; arguments.length > i;) {
                            args.push(arguments[i++]);
                        }
                        return data = args[1], "function" == typeof data && (callback = data), !callback && isString(data) || (data = function(key, data) {
                            if (callback && (data = callback.call(this, key, data)), !_extend(data)) {
                                return data;
                            }
                        }), args[1] = data, fn.apply(context, args);
                    }
                }
            });
        }
        if (!options[key][x]) {
            require("./_hide")(options[key], x, options[key].valueOf);
        }
        isUndefined(options, "Symbol");
        isUndefined(Math, "Math", true);
        isUndefined(opts.JSON, "JSON", true);
    }, {
        "./_an-object": 38,
        "./_descriptors": 46,
        "./_enum-keys": 49,
        "./_export": 50,
        "./_fails": 51,
        "./_global": 53,
        "./_has": 54,
        "./_hide": 55,
        "./_is-array": 61,
        "./_keyof": 69,
        "./_library": 70,
        "./_meta": 71,
        "./_object-create": 74,
        "./_object-dp": 75,
        "./_object-gopd": 77,
        "./_object-gopn": 79,
        "./_object-gopn-ext": 78,
        "./_object-gops": 80,
        "./_object-keys": 83,
        "./_object-pie": 84,
        "./_property-desc": 86,
        "./_redefine": 88,
        "./_set-to-string-tag": 91,
        "./_shared": 93,
        "./_to-iobject": 99,
        "./_to-primitive": 102,
        "./_uid": 103,
        "./_wks": 106,
        "./_wks-define": 104,
        "./_wks-ext": 105
    }],
    122: [function($sanitize, dataAndEvents, deepDataAndEvents) {
        $sanitize("./_wks-define")("asyncIterator");
    }, {
        "./_wks-define": 104
    }],
    123: [function($sanitize, dataAndEvents, deepDataAndEvents) {
        $sanitize("./_wks-define")("observable");
    }, {
        "./_wks-define": 104
    }],
    124: [function(require, dataAndEvents, deepDataAndEvents) {
        require("./es6.array.iterator");
        var events = require("./_global");
        var getActual = require("./_hide");
        var nodes = require("./_iterators");
        var args = require("./_wks")("toStringTag");
        /** @type {Array} */
        var layerNames = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"];
        /** @type {number} */
        var i = 0;
        for (; i < 5; i++) {
            var name = layerNames[i];
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
        "./_global": 53,
        "./_hide": 55,
        "./_iterators": 68,
        "./_wks": 106,
        "./es6.array.iterator": 111
    }],
    125: [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @return {?}
         */
        function none() {
            throw new Error("setTimeout has not been defined");
        }
        /**
         * @return {?}
         */
        function start() {
            throw new Error("clearTimeout has not been defined");
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function requestAnimationFrame(fn) {
            if (display === setTimeout) {
                return setTimeout(fn, 0);
            }
            if ((display === none || !display) && setTimeout) {
                return display = setTimeout, setTimeout(fn, 0);
            }
            try {
                return display(fn, 0);
            } catch (t) {
                try {
                    return display.call(null, fn, 0);
                } catch (t) {
                    return display.call(this, fn, 0);
                }
            }
        }
        /**
         * @param {?} id
         * @return {?}
         */
        function cancelAnimationFrame(id) {
            if (state === clearTimeout) {
                return clearTimeout(id);
            }
            if ((state === start || !state) && clearTimeout) {
                return state = clearTimeout, clearTimeout(id);
            }
            try {
                return state(id);
            } catch (t) {
                try {
                    return state.call(null, id);
                } catch (t) {
                    return state.call(this, id);
                }
            }
        }
        /**
         * @return {undefined}
         */
        function update() {
            if (b) {
                if (received) {
                    /** @type {boolean} */
                    b = false;
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
            if (!b) {
                var id = requestAnimationFrame(update);
                /** @type {boolean} */
                b = true;
                var length = data.length;
                for (; length;) {
                    received = data;
                    /** @type {Array} */
                    data = [];
                    for (; ++index < length;) {
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
                b = false;
                cancelAnimationFrame(id);
            }
        }
        /**
         * @param {Function} options
         * @param {Object} array
         * @return {undefined}
         */
        function Animation(options, array) {
            /** @type {Function} */
            this.fun = options;
            /** @type {Object} */
            this.array = array;
        }
        /**
         * @return {undefined}
         */
        function tmp() {}
        var display;
        var state;
        var process = module.exports = {};
        ! function() {
            try {
                /** @type {Function} */
                display = "function" == typeof setTimeout ? setTimeout : none;
            } catch (e) {
                /** @type {function (): ?} */
                display = none;
            }
            try {
                /** @type {Function} */
                state = "function" == typeof clearTimeout ? clearTimeout : start;
            } catch (e) {
                /** @type {function (): ?} */
                state = start;
            }
        }();
        var received;
        /** @type {Array} */
        var data = [];
        /** @type {boolean} */
        var b = false;
        /** @type {number} */
        var index = -1;
        /**
         * @param {Function} callback
         * @return {undefined}
         */
        process.nextTick = function(callback) {
            /** @type {Array} */
            var x = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                /** @type {number} */
                var i = 1;
                for (; i < arguments.length; i++) {
                    x[i - 1] = arguments[i];
                }
            }
            data.push(new Animation(callback, x));
            if (!(1 !== data.length)) {
                if (!b) {
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
    126: [function($, dataAndEvents, optgroup) {
        /**
         * @param {Object} type
         * @return {?}
         */
        function select(type) {
            return type && type.__esModule ? type : {
                "default": type
            };
        }
        /**
         * @return {undefined}
         */
        function initialize() {
            /**
             * @param {Event} event
             * @return {undefined}
             */
            function handler(event) {
                var message = event.detail;
                var n = message.name;
                var parameters = message.data;
                if (oSpace) {
                    oSpace[n].postMessage(parameters);
                }
            }
            /**
             * @return {undefined}
             */
            function onTouchEnd() {
                document.dispatchEvent(new CustomEvent("grammarly:pong"));
                document.dispatchEvent(new CustomEvent("grammarly:reset"));
            }
            /**
             * @param {string} msg
             * @return {?}
             */
            function cb(msg) {
                var r20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return document.dispatchEvent(new CustomEvent("grammarly:message", {
                    detail: (0, elem["default"])({
                        event: msg
                    }, r20)
                }));
            }
            /**
             * @return {undefined}
             */
            function completed() {
                document.removeEventListener("grammarly:action", handler);
                document.removeEventListener("grammarly:ping", onTouchEnd);
                document.removeEventListener("grammarly:reset", completed);
                /** @type {null} */
                oSpace = null;
            }
            /**
             * @param {string} name
             * @return {?}
             */
            function initialize(name) {
                var self = o.runtime.connect({
                    name: name
                });
                return self.onMessage.addListener(function(msg) {
                    return cb("message", {
                        msg: msg,
                        name: name
                    });
                }), self.onDisconnect.addListener(function() {
                    console.warn("port malfunction " + name);
                    var err = o.runtime.lastError;
                    rparentsprev.proxyPortDisconnected(name, err && err.message || "port malfunction: " + name);
                    completed();
                    document.dispatchEvent(new CustomEvent("grammarly:error", {
                        detail: {
                            event: "disconnect",
                            name: name
                        }
                    }));
                }), self;
            }
            var oSpace = [self.ports.bridge, self.ports.background, self.ports.broadcast].reduce(function(deepDataAndEvents, node) {
                return (0, elem["default"])({}, deepDataAndEvents, (0, keys["default"])({}, node, initialize(node)));
            }, {});
            document.addEventListener("grammarly:action", handler);
            document.addEventListener("grammarly:ping", onTouchEnd);
            document.dispatchEvent(new CustomEvent("grammarly:proxyports"));
            document.addEventListener("grammarly:proxyports", completed);
            rparentsprev.proxyInit();
        }
        var obj = $("babel-runtime/helpers/defineProperty");
        var keys = select(obj);
        var selector = $("babel-runtime/core-js/object/assign");
        var elem = select(selector);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var sandbox = $("config");
        sandbox.initGlobal("chrome", "cs");
        var emptyJ = $("lib/tracking/felogPixel");
        var $spy = $("lib/tracking/telemetry");
        var self = $("extension-api/interface");
        var o = window.chrome || window.firefox;
        var rparentsprev = new $spy.Telemetry(emptyJ.sendEventPixel, function() {}, function() {}, function() {});
        if ("loading" === document.readyState) {
            document.addEventListener("DOMContentLoaded", initialize, false);
        } else {
            initialize();
        }
    }, {
        "babel-runtime/core-js/object/assign": 5,
        "babel-runtime/helpers/defineProperty": 16,
        config: 130,
        "extension-api/interface": 135,
        "lib/tracking/felogPixel": 138,
        "lib/tracking/telemetry": 139
    }],
    127: [function(require, dataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var o;
        var nodes = require("stdlib");
        var config = require("./url");
        var module = require("./services");
        ! function(exports) {
            /**
             * @param {Object} name
             * @param {string} key
             * @param {?} opt_attributes
             * @return {?}
             */
            function create(name, key, opt_attributes) {
                var ast = "prod" === key ? "https://f-log-extension.grammarly.io" : "qa" === key || "dev" === key ? "https://127.0.0.1:8000" : nodes.assertNever(key);
                var camelKey = "prod" === key ? optgroup : "qa" === key || "dev" === key ? "qagr.io" : nodes.assertNever(key);
                return {
                    url: config.UrlConfig.create(optgroup, ast, opt_attributes),
                    gnar: module.GnarConfig.create(name, camelKey),
                    felog: module.FelogConfig.create(name),
                    extensionId: extensionId
                };
            }
            /** @type {string} */
            var extensionId = "87677a2c52b84ad3a151a4a72f5bd3c4";
            /** @type {string} */
            var optgroup = "grammarly.com";
            /** @type {function (Object, string, ?): ?} */
            exports.create = create;
        }(o = optgroup.AppConfig || (optgroup.AppConfig = {}));
    }, {
        "./services": 132,
        "./url": 134,
        stdlib: 142
    }],
    128: [function(format, dataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var o;
        var f = format("stdlib");
        ! function(exports) {
            /**
             * @param {Object} name
             * @param {Object} key
             * @param {?} opt_attributes
             * @param {string} index
             * @param {string} code
             * @param {string} type
             * @param {string} id
             * @return {?}
             */
            function setup(name, key, opt_attributes, index, code, type, id) {
                var num = void 0 !== type && void 0 !== id ? type : "UNVERSIONED";
                /** @type {string} */
                var l = name + "." + key + "." + opt_attributes;
                /** @type {string} */
                var min = ["prod" !== code ? code : null, num !== index ? num : null].filter(function(dataAndEvents) {
                    return !!dataAndEvents;
                }).join(".");
                return {
                    version: l,
                    fullVersion: l + "-" + [index, min].filter(function(g) {
                        return "" !== g;
                    }).join("/"),
                    commitHash: id,
                    gitBranch: type
                };
            }
            /**
             * @param {string} o
             * @param {Object} opt_attributes
             * @param {Object} browser
             * @return {?}
             */
            function detectBrowser(o, opt_attributes, browser) {
                try {
                    switch (o) {
                        case "safari":
                            switch (opt_attributes) {
                                case "bg":
                                    ;
                                case "popup":
                                    return browser.safari.extension.displayVersion;
                                default:
                                    return;
                            };
                        case "chrome":
                            return browser.chrome.runtime.getManifest().version;
                        case "firefox":
                            return browser.firefox.runtime.getManifest().version;
                        case "edge":
                            return browser.edge.runtime.getManifest().version;
                        default:
                            return f.assertNever(o);
                    }
                } catch (m) {
                    return void console.error("Could not get extension version from manifest", m);
                }
            }
            /** @type {function (Object, Object, ?, string, string, string, string): ?} */
            exports.create = setup;
            /** @type {function (string, Object, Object): ?} */
            exports.getManifestVersion = detectBrowser;
        }(o = optgroup.BuildInfo || (optgroup.BuildInfo = {}));
    }, {
        stdlib: 142
    }],
    129: [function($sanitize, dataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var o;
        var data_priv = $sanitize("stdlib");
        ! function(exports) {
            /**
             * @param {Object} name
             * @return {?}
             */
            function fn(name) {
                return data_priv.optionalStringUnion(["chrome", "safari", "firefox", "edge"], name);
            }
            /**
             * @param {Object} w
             * @return {?}
             */
            function detect(w) {
                return w.chrome && /google/i.test(w.navigator.vendor) ? "chrome" : w.navigator.userAgent.indexOf("Firefox") !== -1 ? "firefox" : /^((?!chrome).)*safari/i.test(w.navigator.userAgent) ? "safari" : "Netscape" === w.navigator.appName && w.navigator.appVersion.indexOf("Edge") > -1 ? "edge" : void 0;
            }
            /** @type {function (Object): ?} */
            exports.create = fn;
            /** @type {function (Object): ?} */
            exports.detect = detect;
        }(o = optgroup.TargetBrowser || (optgroup.TargetBrowser = {}));
        var i;
        ! function(exports) {
            /**
             * @param {Object} name
             * @return {?}
             */
            function create(name) {
                return data_priv.optionalStringUnion(["dev", "prod", "qa"], name);
            }
            /** @type {function (Object): ?} */
            exports.create = create;
        }(i = optgroup.TargetEnv || (optgroup.TargetEnv = {}));
        var s;
        ! function(exports) {
            /**
             * @param {Object} name
             * @return {?}
             */
            function create(name) {
                return data_priv.optionalStringUnion(["bg", "cs", "popup"], name);
            }
            /**
             * @param {Object} obj
             * @param {string} name
             * @return {?}
             */
            function rename(obj, name) {
                /**
                 * @return {?}
                 */
                function init() {
                    try {
                        return obj.safari.extension.globalPage.contentWindow !== obj;
                    } catch (t) {
                        return false;
                    }
                }
                /** @type {boolean} */
                var bulk = !!obj.IS_BG;
                var length = "safari" === name ? init() : !!obj.IS_POPUP;
                return bulk ? "bg" : length ? "popup" : "cs";
            }
            /** @type {function (Object): ?} */
            exports.create = create;
            /** @type {function (Object, string): ?} */
            exports.detect = rename;
        }(s = optgroup.TargetContext || (optgroup.TargetContext = {}));
        var c;
        ! function(d) {
            /**
             * @param {Object} name
             * @param {Object} key
             * @param {?} opt_attributes
             * @return {?}
             */
            function data(name, key, opt_attributes) {
                return {
                    browser: name,
                    env: key,
                    context: opt_attributes
                };
            }
            /** @type {function (Object, Object, ?): ?} */
            d.create = data;
        }(c = optgroup.BundleInfo || (optgroup.BundleInfo = {}));
    }, {
        stdlib: 142
    }],
    130: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {Object} iterable
         * @return {undefined}
         */
        function enumerate(iterable) {
            var key;
            for (key in iterable) {
                if (!optgroup.hasOwnProperty(key)) {
                    optgroup[key] = iterable[key];
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
         * @param {Object} optgroup
         * @param {Object} ast
         * @param {(Object|boolean|number|string)} last
         * @return {undefined}
         */
        function process(optgroup, ast, last) {
            proto.init(config.MainConfig.create(optgroup, ast, last || config.ProcessEnv.fromBrowserify()));
            window.GR_CFG = proto.get();
        }
        Object.defineProperty(optgroup, "__esModule", {
            value: true
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
            var optgroup = header.assertNonNull(drop.TargetBrowser.detect(window), "runtime-detected browser type");
            var _$ = config.MainConfig.create(optgroup, drop.TargetContext.detect(window, optgroup), config.ProcessEnv.fromBrowserify());
            return window.GR_CFG = _$, _$;
        });
        /** @type {function (): ?} */
        optgroup.getGlobal = match;
        /** @type {function (Object, Object, (Object|boolean|number|string)): undefined} */
        optgroup.initGlobal = process;
    }, {
        "./app": 127,
        "./build": 128,
        "./bundle": 129,
        "./mainConfig": 131,
        "./services": 132,
        "./system": 133,
        "./url": 134,
        stdlib: 142
    }],
    131: [function($, dataAndEvents, optgroup) {
        (function(p) {
            /**
             * @param {Object} value
             * @return {?}
             */
            function h(value) {
                return value && value.__esModule ? value : {
                    "default": value
                };
            }
            var selector = $("babel-runtime/helpers/slicedToArray");
            var elem = h(selector);
            Object.defineProperty(optgroup, "__esModule", {
                value: true
            });
            var s;
            var $window = $("./app");
            var book = $("./build");
            var game = $("./system");
            var article = $("./bundle");
            var block = $("stdlib");
            ! function(exports) {
                /**
                 * @param {Object} name
                 * @param {Object} key
                 * @param {?} opt_attributes
                 * @param {string} property
                 * @param {?} c
                 * @param {string} target
                 * @param {string} attr
                 * @return {?}
                 */
                function has(name, key, opt_attributes, property, c, target, attr) {
                    return {
                        env: name,
                        major_number: key,
                        build_number: opt_attributes,
                        release_number: property,
                        git_branch: c,
                        git_commit: target,
                        popup_url: attr
                    };
                }
                /**
                 * @return {?}
                 */
                function filter() {
                    return has("prod", "14", "794", "1083", p.env.GIT_BRANCH, "9a2e211e63c063be2ea48c13d2448ef885669f14", "https://s3.amazonaws.com/grammarly_neweditor/index/1.0.87-browserplugin_2.0/popup.html");
                }
                /** @type {function (Object, Object, ?, string, ?, string, string): ?} */
                exports.create = has;
                /** @type {function (): ?} */
                exports.fromBrowserify = filter;
            }(s = optgroup.ProcessEnv || (optgroup.ProcessEnv = {}));
            var d;
            ! function(exports) {
                /**
                 * @param {Object} name
                 * @param {Object} attributes
                 * @param {?} opt_attributes
                 * @return {?}
                 */
                function setup(name, attributes, opt_attributes) {
                    var node = void 0;
                    if (opt_attributes.env) {
                        var fragment = article.TargetEnv.create(opt_attributes.env);
                        if (void 0 !== fragment) {
                            node = fragment;
                        } else {
                            console.warn("*** process.env.ENV is invalid ('" + opt_attributes.env + "'), assuming 'prod' env");
                            /** @type {string} */
                            node = "prod";
                        }
                    } else {
                        console.warn("*** process.env.ENV is not defined, assuming 'prod' env");
                        /** @type {string} */
                        node = "prod";
                    }
                    var ast = block.assertNonNull(node, "ENV env var OR a fallback value");
                    /** @type {Array.<?>} */
                    var e = [opt_attributes.major_number, opt_attributes.build_number, opt_attributes.release_number].map(block.optionalIntString);
                    var event = void 0;
                    if (3 === e.length && e.every(function(dataAndEvents) {
                            return void 0 !== dataAndEvents;
                        })) {
                        /** @type {Array.<?>} */
                        event = e;
                    } else {
                        var tasks = (book.BuildInfo.getManifestVersion(name, attributes, window) || "").split(".").map(block.optionalIntString);
                        event = 3 === tasks.length && tasks.every(function(dataAndEvents) {
                            return void 0 !== dataAndEvents;
                        }) ? tasks : [4, 0, 2];
                    }
                    var originalEvent = event;
                    var ranges = (0, elem["default"])(originalEvent, 3);
                    var optgroup = ranges[0];
                    var camelKey = ranges[1];
                    var gl = ranges[2];
                    return {
                        buildInfo: book.BuildInfo.create(optgroup, camelKey, gl, name, ast, opt_attributes.git_branch, opt_attributes.git_commit),
                        bundleInfo: article.BundleInfo.create(name, ast, attributes),
                        appConfig: $window.AppConfig.create(name, ast, opt_attributes.popup_url),
                        systemInfo: game.SystemInfo.create(name, window)
                    };
                }
                /** @type {function (Object, Object, ?): ?} */
                exports.create = setup;
            }(d = optgroup.MainConfig || (optgroup.MainConfig = {}));
        }).call(this, $("_process"));
    }, {
        "./app": 127,
        "./build": 128,
        "./bundle": 129,
        "./system": 133,
        _process: 125,
        "babel-runtime/helpers/slicedToArray": 19,
        stdlib: 142
    }],
    132: [function(require, dataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var o;
        var assert = require("stdlib");
        ! function(d) {
            /**
             * @param {Object} name
             * @param {Object} key
             * @return {?}
             */
            function data(name, key) {
                return {
                    appName: assert.assertNonNull(browser[name], "gnar app name"),
                    url: "https://gnar." + key,
                    domain: "." + key
                };
            }
            var browser = {
                chrome: "chromeExt",
                firefox: "firefoxExt",
                safari: "safariExt",
                edge: "edgeExt"
            };
            /** @type {function (Object, Object): ?} */
            d.create = data;
        }(o = optgroup.GnarConfig || (optgroup.GnarConfig = {}));
        var i;
        ! function(exports) {
            /**
             * @param {Object} name
             * @return {?}
             */
            function create(name) {
                return {
                    appName: assert.assertNonNull(browser[name], "felog app name")
                };
            }
            var browser = {
                chrome: "extensionChrome",
                firefox: "extensionFirefox",
                safari: "extensionSafari",
                edge: "extensionEdge"
            };
            /** @type {function (Object): ?} */
            exports.create = create;
        }(i = optgroup.FelogConfig || (optgroup.FelogConfig = {}));
    }, {
        stdlib: 142
    }],
    133: [function(require, dataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var Class;
        var drop = require("./bundle");
        var Block = require("stdlib");
        ! function(exports) {
            /**
             * @param {Object} name
             * @param {Object} key
             * @return {?}
             */
            function get(name, key) {
                var paramType = drop.TargetBrowser.detect(key) || "other";
                return {
                    type: paramType,
                    isWE: "firefox" === name ? Block.try_(function() {
                        return !!firefox.runtime;
                    }, function(dataAndEvents) {
                        return false;
                    }) : "chrome" === name || "edge" === name
                };
            }
            /** @type {function (Object, Object): ?} */
            exports.create = get;
        }(Class = optgroup.BrowserInfo || (optgroup.BrowserInfo = {}));
        var keys;
        ! function(exports) {
            /**
             * @param {Object} name
             * @return {?}
             */
            function create(name) {
                return {
                    isWindows: name.navigator.appVersion.indexOf("Win") !== -1
                };
            }
            /** @type {function (Object): ?} */
            exports.create = create;
        }(keys = optgroup.OsInfo || (optgroup.OsInfo = {}));
        var c;
        ! function(exports) {
            /**
             * @param {Object} name
             * @param {Object} key
             * @return {?}
             */
            function create(name, key) {
                return {
                    browser: Class.create(name, key),
                    os: keys.create(key)
                };
            }
            /** @type {function (Object, Object): ?} */
            exports.create = create;
        }(c = optgroup.SystemInfo || (optgroup.SystemInfo = {}));
    }, {
        "./bundle": 129,
        stdlib: 142
    }],
    134: [function(dataAndEvents, deepDataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var o;
        ! function(exports) {
            /**
             * @param {Object} name
             * @param {Object} key
             * @param {?} opt_attributes
             * @return {?}
             */
            function init(name, key, opt_attributes) {
                /** @type {string} */
                var authPath = "https://www." + name;
                /** @type {string} */
                var propname = "https://data." + name;
                /** @type {string} */
                var rootPath = "https://app." + name;
                /** @type {string} */
                var appPathRoute = "https://auth." + name + "/v3";
                /** @type {string} */
                var newPath = "https://emailfeedback." + name;
                return {
                    app: rootPath,
                    appPersonalDictionary: rootPath + "/profile/dictionary",
                    capi: "wss://capi." + name + "/freews",
                    dapiMimic: propname + "/api/mimic",
                    dapiProps: propname + "/api/props",
                    editorDictionary: rootPath + "/profile/dictionary",
                    dictionary: "https://capi." + name + "/api/defs",
                    docs: rootPath + "/docs",
                    docsApi: "https://dox." + name + "/documents",
                    authCreatePage: appPathRoute + "/redirect-anonymous?location=" + authPath + "/after_install_page",
                    userOrAnonymous: appPathRoute + "/user/oranonymous",
                    authSignin: appPathRoute + "/login",
                    authSignup: appPathRoute + "/signup",
                    signin: authPath + "/signin",
                    signup: authPath + "/signup",
                    resetPassword: authPath + "/resetpassword",
                    saveEmailFeedback: newPath + "/api/feedback/",
                    newFelog: key,
                    referral: authPath + "/referral?page=extension",
                    welcomeC: authPath + "/extension-success",
                    upgrade: authPath + "/upgrade",
                    uninstall: authPath + "/extension-uninstall",
                    terms: authPath + "/terms",
                    policy: authPath + "/privacy-policy",
                    pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json",
                    popupUrl: opt_attributes,
                    grammarlyDomain: name
                };
            }
            /** @type {function (Object, Object, ?): ?} */
            exports.create = init;
        }(o = optgroup.UrlConfig || (optgroup.UrlConfig = {}));
    }, {}],
    135: [function(dataAndEvents, deepDataAndEvents, optgroup) {
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        optgroup.ports = {
            bridge: "bridge",
            background: "message:to-priv",
            broadcast: "message:to-non-priv"
        };
    }, {}],
    136: [function(Application, dataAndEvents, optgroup) {
        /**
         * @return {?}
         */
        function isTestsMode() {
            return !!window.__extensionTestsMode;
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
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var sandbox = Application("config");
        var self = sandbox.getGlobal();
        /** @type {function (): ?} */
        optgroup.isTestsMode = isTestsMode;
        /** @type {function (): ?} */
        optgroup.getUuid = dispatcher;
        /** @type {function (): ?} */
        optgroup.isFF = getMaxSupportedCssHeight;
        /** @type {function (): ?} */
        optgroup.isChrome = handler;
        /** @type {function (): ?} */
        optgroup.isSafari = c;
        /** @type {function (): ?} */
        optgroup.isEdge = dispose;
        /** @type {function (): ?} */
        optgroup.isWindows = setupScroller;
        /** @type {function (): ?} */
        optgroup.isBg = fn;
        /** @type {function (): ?} */
        optgroup.isPopup = init;
        /** @type {function (): ?} */
        optgroup.isBgOrPopup = runTest;
        /** @type {function (): ?} */
        optgroup.getBrowser = browser;
        /** @type {function (): ?} */
        optgroup.getVersion = getVersion;
        optgroup.ENV = self.bundleInfo.env;
        optgroup.URLS = self.appConfig.url;
        optgroup.appName = self.appConfig.felog.appName;
        optgroup.gnarAppName = self.appConfig.gnar.appName;
        optgroup.GRAMMARLY_DOMAIN = self.appConfig.url.grammarlyDomain;
    }, {
        config: 130
    }],
    137: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {Object} value
         * @return {?}
         */
        function isUndefinedOrNull(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        /**
         * @param {?} opt_noCache
         * @param {string} service
         * @param {Object} opt_headers
         * @param {string} url
         * @param {Object} var_args
         * @param {string} output
         * @param {string} serviceName
         * @param {Object} data
         * @param {Object} config
         * @return {?}
         */
        function send(opt_noCache, service, opt_headers, url, var_args, output, serviceName, data, config) {
            var obj = {
                message: output,
                logger: var_args,
                level: path.toFelogString(serviceName),
                application: opt_noCache,
                version: service,
                userId: config && config.userId,
                containerId: config && config.containerId,
                env: opt_headers
            };
            return data && (obj.extra = data), url + "/log?json=" + encodeURIComponent((0, keys["default"])(obj));
        }
        /**
         * @param {?} app
         * @param {string} config
         * @param {Object} allBindingsAccessor
         * @param {string} url
         * @param {Object} logger
         * @param {string} output
         * @param {string} baseUrl
         * @param {?} depMaps
         * @return {?}
         */
        function init(app, config, allBindingsAccessor, url, logger, output, baseUrl, depMaps) {
            var obj = {
                message: output,
                logger: logger,
                level: path.toFelogString(baseUrl),
                application: app,
                version: config,
                env: allBindingsAccessor,
                extra_usage: depMaps
            };
            return url + "/log?json=" + encodeURIComponent((0, keys["default"])(obj));
        }
        var b = require("babel-runtime/core-js/json/stringify");
        var keys = isUndefinedOrNull(b);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var path;
        ! function(logging) {
            /** @type {string} */
            logging[logging.INFO = 0] = "INFO";
            /** @type {string} */
            logging[logging.WARN = 1] = "WARN";
            /** @type {string} */
            logging[logging.ERROR = 2] = "ERROR";
        }(path = optgroup.LogLevel || (optgroup.LogLevel = {}));
        (function(logging) {
            /**
             * @param {string} name
             * @return {?}
             */
            function initialize(name) {
                switch (name) {
                    case logging.INFO:
                        return "INFO";
                    case logging.WARN:
                        return "WARN";
                    case logging.ERROR:
                        return "ERROR";
                    default:
                        throw new TypeError("Unrecognized log level " + name);;
                }
            }
            /** @type {function (string): ?} */
            logging.toFelogString = initialize;
        })(path = optgroup.LogLevel || (optgroup.LogLevel = {}));
        /** @type {function (?, string, Object, string, Object, string, string, Object, Object): ?} */
        optgroup.felogRequestUrl = send;
        /** @type {function (?, string, Object, string, Object, string, string, ?): ?} */
        optgroup.felogUsageRequestUrl = init;
    }, {
        "babel-runtime/core-js/json/stringify": 4
    }],
    138: [function(valueAccessor, dataAndEvents, optgroup) {
        /**
         * @param {Object} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        /**
         * @param {Object} styles
         * @param {string} callback
         * @param {string} serviceName
         * @param {Object} er
         * @param {Object} data
         * @return {?}
         */
        function done(styles, callback, serviceName, er, data) {
            /** @type {Element} */
            var img = document.createElement("img");
            return img.src = that.felogRequestUrl(args.appName, args.getVersion(), args.ENV, args.URLS.newFelog, styles, callback, serviceName, er, data), iterator["default"].resolve();
        }
        var value = valueAccessor("babel-runtime/core-js/promise");
        var iterator = lookupIterator(value);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var args = valueAccessor("../newConfig");
        var that = valueAccessor("./felog");
        /** @type {function (Object, string, string, Object, Object): ?} */
        optgroup.sendEventPixel = done;
    }, {
        "../newConfig": 136,
        "./felog": 137,
        "babel-runtime/core-js/promise": 11
    }],
    139: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {Object} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default": type
            };
        }
        var target = require("babel-runtime/core-js/json/stringify");
        var targets = Event(target);
        var type = require("babel-runtime/helpers/classCallCheck");
        var event = Event(type);
        var selector = require("babel-runtime/helpers/createClass");
        var elem = Event(selector);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var $$Log = require("./felog");
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
                (0, event["default"])(this, clone);
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
                        stateDomain: dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.restoredBgConnection = function(dataAndEvents) {
                    self._send("cs.connection.bg.restored", "bg page connection restored", $$Log.LogLevel.INFO, {
                        timeWithoutConnection: dataAndEvents
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
                        delay: delay
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.tooLongPageConfigInit = function(dataAndEvents) {
                    self._send("cs.pageConfig.init.exceeded", "page config init timeout", $$Log.LogLevel.WARN, {
                        initTime: dataAndEvents
                    });
                };
                /**
                 * @param {?} date
                 * @return {undefined}
                 */
                this.tooLongUserUpdateTime = function(date) {
                    self._send("bg.state.user.update.exceeded", "user state update took too long", $$Log.LogLevel.WARN, {
                        updateTime: date
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
                        time: time
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
                        openTime: dataAndEvents
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
                 * @param {string} errorName
                 * @return {undefined}
                 */
                this.popupLoadError = function(output, errorName) {
                    self._send("cs.popup.load.error", "could not open pop-up editor", $$Log.LogLevel.ERROR, {
                        message: output,
                        name: errorName
                    });
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.loginNoBgPageConnection = function(output) {
                    self._send("debug.cs.connection.signin.bg.timeout", "can not connect to bg page on login", $$Log.LogLevel.INFO, {
                        message: output
                    });
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.pageConfigCDNError = function(output) {
                    self._send("cs.pageConfig.cdn.error", "could not read page config", $$Log.LogLevel.ERROR, {
                        message: output
                    });
                };
                /**
                 * @param {string} output
                 * @param {string} errorName
                 * @return {undefined}
                 */
                this.pageConfigLocalStorageError = function(output, errorName) {
                    self._send("cs.pageConfig.localStorage.error", "could not read page config from localStorage", $$Log.LogLevel.INFO, {
                        message: output,
                        name: errorName
                    });
                };
                /**
                 * @param {number} ver
                 * @param {number} newVersion
                 * @return {undefined}
                 */
                this.pageConfigUpdated = function(ver, newVersion) {
                    self._send("cs.pageConfig.updated", "page config updated", $$Log.LogLevel.INFO, {
                        oldVersion: ver,
                        newVersion: newVersion
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.settingsPopupTimeout = function() {
                    self._send("settings.popup.init.timeout", "settings popup open timeout", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.settingsUsupportedShow = function(dataAndEvents) {
                    self._send("settings.popup.state.unsupported.show", "page unsupported message shown", $$Log.LogLevel.INFO, {
                        popupType: dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.settingsPopupToggled = function(dataAndEvents) {
                    self._send("settings.popup.experiment.toggle", "settings popup disabled/enabled for experiment on /personalize page", $$Log.LogLevel.INFO, {
                        isPopupDisabled: dataAndEvents
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
                        authDegradation: dataAndEvents,
                        cookiesDisabled: deepDataAndEvents
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
                        tryCount: dataAndEvents
                    });
                };
                /**
                 * @param {string} oauth_token
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.socketBgReconnectFail = function(oauth_token, dataAndEvents) {
                    self._send("bg.socket.reconnect.fail", "could not restore ws connection", $$Log.LogLevel.WARN, {
                        token: oauth_token,
                        tryCount: dataAndEvents
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
                        message: output
                    });
                };
                /**
                 * @param {string} output
                 * @return {undefined}
                 */
                this.gnarClientInitFail = function(output) {
                    self._send("gnar.bg.tracking.gnar.init.fail", "gnar init failed", $$Log.LogLevel.WARN, {
                        message: output
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
                 * @param {?} labelPlacement
                 * @return {undefined}
                 */
                this.userUpgradeClick = function(labelPlacement) {
                    self._send("cs.ui.action.upgradeClick", "upgrade hook clicked", $$Log.LogLevel.INFO, {
                        placement: labelPlacement
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.gButtonClick = function() {
                    self._send("cs.ui.gbutton.click", "gbutton clicked", $$Log.LogLevel.INFO);
                };
                /**
                 * @param {boolean} _enabled
                 * @return {undefined}
                 */
                this.checkingToggledInField = function(_enabled) {
                    self._send("cs.ui.gbutton.toggleInField", "checking toggled in field", $$Log.LogLevel.INFO, {
                        enabled: _enabled
                    });
                };
                /**
                 * @param {string} err
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.sessionInvalidated = function(err, dataAndEvents) {
                    self._send("bg.session.invalidated", "user session invalidated", $$Log.LogLevel.INFO, {
                        reason: err,
                        userChanged: dataAndEvents
                    });
                };
                /**
                 * @param {?} a3
                 * @return {undefined}
                 */
                this.unexpectedAnonymous = function(a3) {
                    self._send("debug.bg.session.unexpectedAnonymous", "user changed to anonymous", $$Log.LogLevel.INFO, a3);
                };
                /**
                 * @param {string} errorName
                 * @param {Object} x
                 * @return {undefined}
                 */
                this.dapiPropInitialized = function(errorName, x) {
                    self._send("bg.settings.dapi.prop.init", "save property to the DAPI", $$Log.LogLevel.INFO, {
                        name: errorName,
                        value: x
                    });
                };
                /**
                 * @param {string} fieldName
                 * @param {Object} reqData
                 * @return {undefined}
                 */
                this.getDapiPropError = function(fieldName, reqData) {
                    self._send("bg.connection.dapi.getProp.error", "could not get dapi property", $$Log.LogLevel.WARN, {
                        property: fieldName,
                        body: reqData
                    });
                };
                /**
                 * @param {string} fieldName
                 * @param {Object} reqData
                 * @return {undefined}
                 */
                this.setDapiPropError = function(fieldName, reqData) {
                    self._send("bg.connection.dapi.setProp.error", "could not set dapi property", $$Log.LogLevel.WARN, {
                        property: fieldName,
                        body: reqData
                    });
                };
                /**
                 * @param {boolean} _enabled
                 * @return {undefined}
                 */
                this.toggleExtensionDefs = function(_enabled) {
                    self._send("bg.settings.definitions.toggle", "definitions toggled for domain", $$Log.LogLevel.INFO, {
                        enabled: _enabled
                    });
                };
                /**
                 * @param {boolean} _enabled
                 * @param {?} labelPlacement
                 * @return {undefined}
                 */
                this.toggleExtension = function(_enabled, labelPlacement) {
                    self._send("bg.settings.extension.toggle", "extension toggled for domain", $$Log.LogLevel.INFO, {
                        enabled: _enabled,
                        placement: labelPlacement
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
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.cookieOverflow = function(size, dataAndEvents) {
                    self._send("debug.bg.state.cookie.overflow", "cookie is too big", $$Log.LogLevel.INFO, {
                        size: size,
                        biggestCookie: dataAndEvents
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
                        message: output,
                        stack: stack
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.bgPageInitTimeout = function(dataAndEvents) {
                    self._send("bg.state.start.timeout", "bg page init timeout", $$Log.LogLevel.WARN, {
                        initTime: dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.bgPageInitFail = function(dataAndEvents) {
                    self._send("bg.state.init.fail", "bg page init failed", $$Log.LogLevel.ERROR, {
                        initAttempts: dataAndEvents
                    });
                };
                /**
                 * @param {?} currentVersion
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.extensionUpdated = function(currentVersion, dataAndEvents) {
                    self._send("bg.state.updated", "extension updated", $$Log.LogLevel.INFO, {
                        currentVersion: currentVersion,
                        previousVersion: dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.extensionUpdateFail = function(dataAndEvents) {
                    self._send("bg.state.update.fail", "extension update failed", $$Log.LogLevel.INFO, {
                        previousVersion: dataAndEvents
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
                        source: key
                    });
                };
                /**
                 * @param {number} newVersion
                 * @return {undefined}
                 */
                this.chromeForcedToUpdate = function(newVersion) {
                    self._send("bg.chrome.forcedToUpdate", "chrome forced update", $$Log.LogLevel.INFO, {
                        newVersion: newVersion
                    });
                };
                /**
                 * @param {string} output
                 * @param {string} paramType
                 * @return {undefined}
                 */
                this.chromeContentScriptLoadError = function(output, paramType) {
                    self._send("bg.chrome.cs.load.error", "content script execution error", $$Log.LogLevel.WARN, {
                        message: output,
                        type: paramType
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
                 * @param {string} err
                 * @param {Object} reqData
                 * @param {number} statusCode
                 * @return {undefined}
                 */
                this.fetchUserFail = function(err, reqData, statusCode) {
                    self._send("bg.user.fetch.fail", "failed to update user", $$Log.LogLevel.WARN, {
                        body: reqData,
                        statusCode: statusCode,
                        reason: err
                    });
                };
                /**
                 * @param {Object} reqData
                 * @param {number} statusCode
                 * @return {undefined}
                 */
                this.fetchMimicFail = function(reqData, statusCode) {
                    self._send("bg.user.mimic.fail", "mimic request failed", $$Log.LogLevel.WARN, {
                        body: reqData,
                        statusCode: statusCode
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.fetchCookieFail = function() {
                    self._send("bg.cookie.fail", "could not get grauth from cookie", $$Log.LogLevel.WARN);
                };
                /**
                 * @param {Object} reqData
                 * @param {number} statusCode
                 * @return {undefined}
                 */
                this.fetchSettingsFail = function(reqData, statusCode) {
                    self._send("bg.user.settings.fail", "could not get settings from auth", $$Log.LogLevel.WARN, {
                        body: reqData,
                        statusCode: statusCode
                    });
                };
                /**
                 * @param {?} canceled
                 * @return {undefined}
                 */
                this.frequentCookieChanges = function(canceled) {
                    self._send("debug.cookie.onChange.error", "cookie change too frequent", $$Log.LogLevel.INFO, {
                        canceled: canceled
                    });
                };
                /**
                 * @param {string} errorName
                 * @return {undefined}
                 */
                this.initializePropFromDapi = function(errorName) {
                    self._send("bg.state.dapi.prop.initialize", "set property from dapi", $$Log.LogLevel.INFO, {
                        name: errorName
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
                        body: reqData
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
                 * @param {string} keepData
                 * @param {string} err
                 * @return {undefined}
                 */
                this.proxyPortDisconnected = function(keepData, err) {
                    self._sendWithProbability(which, "proxy.disconnect", "proxy port disconnected", $$Log.LogLevel.INFO, {
                        port: keepData,
                        error: err
                    });
                };
                /**
                 * @param {Object} err
                 * @return {undefined}
                 */
                this.unhandledBgPageException = function(err) {
                    self._send("bg.unhandledException", "unhandled exception on background page", $$Log.LogLevel.ERROR, {
                        message: err.error ? err.error.message : err.message
                    });
                };
                /**
                 * @param {Object} err
                 * @return {undefined}
                 */
                this.unhandledBgPageRejection = function(err) {
                    self._send("bg.unhandledRejection", "unhandled promise rejection on background page", $$Log.LogLevel.ERROR, {
                        message: null != err.reason ? "string" == typeof err.reason ? err.reason : err.reason.message : void 0
                    });
                };
                /**
                 * @return {undefined}
                 */
                this.storageMigrationSucceeded = function() {
                    self._send("bg.storageMigration.success", "storage migration succeeded", $$Log.LogLevel.INFO, {});
                };
                /**
                 * @param {string} e
                 * @return {undefined}
                 */
                this.storageMigrationFailed = function(e) {
                    self._send("bg.storageMigration.failure", "storage migration failed", $$Log.LogLevel.ERROR, {
                        message: e && e.message
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
                        notFoundCard: dataAndEvents
                    });
                };
                /**
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.synonymCardHideAction = function(dataAndEvents) {
                    self._sendWithProbability(onComplete, "cs.editor.synonym.hide", "hide synonymous card action", $$Log.LogLevel.INFO, {
                        notFoundCard: dataAndEvents
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
                        transformHTML: dataAndEvents,
                        fallbackParseSuccessful: deepDataAndEvents
                    });
                };
                /**
                 * @param {string} domain
                 * @param {?} dataAndEvents
                 * @return {undefined}
                 */
                this.disabledTabLoad = function(domain, dataAndEvents) {
                    self._sendUsage("usage.loadOnDisabledTab", "tab load event with disabled extension", $$Log.LogLevel.INFO, {
                        domain: domain,
                        accountType: dataAndEvents
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
                        domain: domain,
                        accountType: res,
                        fieldType: inType,
                        fieldSupported: req
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
                        domain: domain,
                        accountType: dataAndEvents,
                        fieldType: inType
                    });
                };
            }
            return (0, elem["default"])(clone, [{
                key: "_send",
                /**
                 * @param {string} f
                 * @param {string} newValue
                 * @param {?} thisValue
                 * @param {string} data
                 * @return {undefined}
                 */
                value: function(f, newValue, thisValue, data) {
                    var message = void 0;
                    try {
                        message = (0, targets["default"])(data);
                    } catch (ex) {
                        /** @type {string} */
                        message = "Failed to stringify event properties: '" + ex + "', '" + (ex && ex.message) + "'";
                        console.warn(message, "for " + newValue + "@" + f);
                    }
                    try {
                        this._sendFelog(f, newValue, thisValue, null != data ? {
                            json: message
                        } : void 0);
                    } catch (error) {
                        console.warn("Failed to send felog for " + newValue + "@" + f + ": '" + error + "', '" + (error && error.message) + "'");
                    }
                }
            }, {
                key: "_sendUsage",
                /**
                 * @param {?} newValue
                 * @param {?} thisValue
                 * @param {?} factor
                 * @param {?} newVal
                 * @return {undefined}
                 */
                value: function(newValue, thisValue, factor, newVal) {
                    this._sendFelogUsage(newValue, thisValue, factor, newVal);
                }
            }, {
                key: "_sendWithProbability",
                /**
                 * @param {number} thisValue
                 * @param {?} code
                 * @param {?} x
                 * @param {?} callback
                 * @param {?} newValue
                 * @return {undefined}
                 */
                value: function(thisValue, code, x, callback, newValue) {
                    if (thisValue > Math.random()) {
                        this._send(code, x, callback, newValue);
                    }
                }
            }, {
                key: "setUserId",
                /**
                 * @param {?} newValue
                 * @return {undefined}
                 */
                value: function(newValue) {
                    this._setUserId(newValue);
                }
            }, {
                key: "setContainerId",
                /**
                 * @param {?} newValue
                 * @return {undefined}
                 */
                value: function(newValue) {
                    this._setContainerId(newValue);
                }
            }, {
                key: "notificationShown",
                /**
                 * @param {string} event
                 * @return {undefined}
                 */
                value: function(event) {
                    this._send("cs.notification.show", "show notification on the page", $$Log.LogLevel.INFO, {
                        type: event
                    });
                }
            }, {
                key: "notificationHide",
                /**
                 * @param {string} event
                 * @return {undefined}
                 */
                value: function(event) {
                    this._send("cs.notification.hide", "hide notification on the page", $$Log.LogLevel.INFO, {
                        type: event
                    });
                }
            }]), clone;
        }();
        optgroup.Telemetry = Telemetry;
    }, {
        "./felog": 137,
        "babel-runtime/core-js/json/stringify": 4,
        "babel-runtime/helpers/classCallCheck": 14,
        "babel-runtime/helpers/createClass": 15
    }],
    140: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {Object} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default": type
            };
        }
        /**
         * @param {Function} scripts
         * @param {Array} async
         * @return {?}
         */
        function init(scripts, async) {
            var _ref1;
            return (_ref1 = []).concat.apply(_ref1, (0, c["default"])(async.map(scripts)));
        }
        /**
         * @param {?} callback
         * @param {?} elem
         * @param {Array} items
         * @return {?}
         */
        function swap(callback, elem, items) {
            /** @type {Array} */
            var eventPath = [elem];
            var cur = elem;
            /** @type {number} */
            var i = 0;
            for (; i < items.length; i++) {
                cur = callback(cur, items[i]);
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
         * @param {Array} array
         * @param {?} pred
         * @return {?}
         */
        function filter(array, pred) {
            return 0 === array.length ? void 0 : array.reduce(function(maxDim, node) {
                var dim = pred(node);
                return dim > maxDim[1] ? [node, dim] : maxDim;
            }, [array[0], pred(array[0])])[0];
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
            var target = [];
            /** @type {Array} */
            var vec = [];
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var resLength = 0;
            /** @type {number} */
            var i = 0;
            for (; i < a.length; i++) {
                if (fn(a[i])) {
                    target[j++] = a[i];
                } else {
                    vec[resLength++] = a[i];
                }
            }
            return [target, vec];
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
                return [
                    []
                ];
            }
            /** @type {Array} */
            var resp = [];
            /** @type {number} */
            var i = 0;
            for (; i < Math.ceil(filter.length / size); i++) {
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
            for (; void 0 !== elems;) {
                ret.push(elems[0]);
                elems = fn(elems[1]);
            }
            return ret;
        }
        /**
         * @param {number} col
         * @param {number} width
         * @return {?}
         */
        function create(col, width) {
            return void 0 !== width ? (0, event["default"])(Array(width - col), function(dataAndEvents, x) {
                return x + col;
            }) : (0, event["default"])(Array(col), function(dataAndEvents, els) {
                return els;
            });
        }
        var type = require("babel-runtime/core-js/array/from");
        var event = Event(type);
        var complete = require("babel-runtime/helpers/toConsumableArray");
        var c = Event(complete);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        /** @type {function (Function, Array): ?} */
        optgroup.flatMap = init;
        /** @type {function (?, ?, Array): ?} */
        optgroup.scan = swap;
        /** @type {function (Array): ?} */
        optgroup.maximum = max;
        /** @type {function (Array, ?): ?} */
        optgroup.maximumBy = filter;
        /** @type {function (Object): ?} */
        optgroup.reverse = nlargest;
        /** @type {function (?, Array): ?} */
        optgroup.partition = param;
        /** @type {function (number, string): ?} */
        optgroup.chunkBySize = parse;
        /** @type {function (?, ?): ?} */
        optgroup.unfold = clean;
        /** @type {function (number, number): ?} */
        optgroup.range = create;
    }, {
        "babel-runtime/core-js/array/from": 1,
        "babel-runtime/helpers/toConsumableArray": 20
    }],
    141: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {string} type
         * @return {?}
         */
        function Event(type) {
            return type && type.__esModule ? type : {
                "default": type
            };
        }
        /**
         * @param {?} guard
         * @param {?} msg
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
            if (null == event) {
                throw new AssertionError(function() {
                    return obj ? "Expected " + obj + " to be non-null" : "Expected non-null";
                });
            }
            return event;
        }
        var complete = require("babel-runtime/core-js/object/get-prototype-of");
        var c = Event(complete);
        var target = require("babel-runtime/helpers/classCallCheck");
        var targets = Event(target);
        var selector = require("babel-runtime/helpers/possibleConstructorReturn");
        var elem = Event(selector);
        var type = require("babel-runtime/helpers/inherits");
        var event = Event(type);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var AssertionError = function(_super) {
            /**
             * @param {string} e
             * @return {?}
             */
            function process(e) {
                return (0, targets["default"])(this, process), (0, elem["default"])(this, (process.__proto__ || (0, c["default"])(process)).call(this, "Assertion failed: " + (e ? "string" == typeof e ? e : e() : "(unnamed)")));
            }
            return (0, event["default"])(process, _super), process;
        }(Error);
        optgroup.AssertionError = AssertionError;
        /** @type {function (?, ?): undefined} */
        optgroup.assert = assert;
        /** @type {function (number, string): ?} */
        optgroup.assertNonNull = fix;
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 8,
        "babel-runtime/helpers/classCallCheck": 14,
        "babel-runtime/helpers/inherits": 17,
        "babel-runtime/helpers/possibleConstructorReturn": 18
    }],
    142: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {Object} selector
         * @return {?}
         */
        function jQuery(selector) {
            return selector && selector.__esModule ? selector : {
                "default": selector
            };
        }
        /**
         * @param {Array} opt_attributes
         * @param {?} keepData
         * @return {?}
         */
        function pred(opt_attributes, keepData) {
            return opt_attributes.some(function(dataAndEvents) {
                return dataAndEvents === keepData;
            }) ? keepData : void 0;
        }
        /**
         * @param {(Array|string)} value
         * @param {string} key
         * @param {boolean} charset
         * @return {?}
         */
        function filter(value, key, charset) {
            var values = pred(value, key);
            if (void 0 !== values) {
                return values;
            }
            throw new TypeError('Unrecognized string union value "' + key + '"' + (charset ? " for " + charset : ""));
        }
        /**
         * @param {string} label
         * @return {?}
         */
        function callback(label) {
            throw new YAMLException(label);
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
         * @param {Function} func
         * @param {Function} add
         * @return {?}
         */
        function after(func, add) {
            try {
                return func();
            } catch (prefix) {
                return add(prefix);
            }
        }
        var b = require("babel-runtime/core-js/object/get-prototype-of");
        var keys = jQuery(b);
        var html = require("babel-runtime/helpers/possibleConstructorReturn");
        var c = jQuery(html);
        var selector = require("babel-runtime/helpers/inherits");
        var elem = jQuery(selector);
        var tag = require("babel-runtime/helpers/classCallCheck");
        var elements = jQuery(tag);
        var target = require("babel-runtime/helpers/createClass");
        var targets = jQuery(target);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var chai = require("./assert");
        optgroup.assert = chai.assert;
        optgroup.assertNonNull = chai.assertNonNull;
        optgroup.AssertionError = chai.AssertionError;
        var nodes = require("./promise");
        optgroup.SafePromise = nodes.SafePromise;
        var Block = require("./array");
        optgroup.Arr = Block;
        var helper = require("./object");
        optgroup.Obj = helper;
        var Global = function() {
            /**
             * @param {(Object|number)} elem
             * @return {undefined}
             */
            function restoreScript(elem) {
                (0, elements["default"])(this, restoreScript);
                /** @type {(Object|number)} */
                this._getFallbackValue = elem;
            }
            return (0, targets["default"])(restoreScript, [{
                key: "init",
                /**
                 * @param {number} newValue
                 * @return {undefined}
                 */
                value: function(newValue) {
                    if (void 0 !== this._value) {
                        throw new Error("Global value already initialized.");
                    }
                    /** @type {number} */
                    this._value = newValue;
                }
            }, {
                key: "get",
                /**
                 * @return {?}
                 */
                value: function() {
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
        optgroup.Global = Global;
        /** @type {function (Array, ?): ?} */
        optgroup.optionalStringUnion = pred;
        /** @type {function ((Array|string), string, boolean): ?} */
        optgroup.assertStringUnion = filter;
        var YAMLException = function(_super) {
            /**
             * @param {boolean} domain
             * @return {?}
             */
            function value(domain) {
                return (0, elements["default"])(this, value), (0, c["default"])(this, (value.__proto__ || (0, keys["default"])(value)).call(this, "Matching not exhaustive" + (domain ? ": unexpected value " + domain : "")));
            }
            return (0, elem["default"])(value, _super), value;
        }(Error);
        optgroup.MatchingNotExhaustiveError = YAMLException;
        /** @type {function (string): ?} */
        optgroup.assertNever = callback;
        /** @type {function (string): ?} */
        optgroup.optionalIntString = compare;
        /** @type {function (string, string): ?} */
        optgroup.assertIntString = find;
        /** @type {function (Function, Function): ?} */
        optgroup.try_ = after;
    }, {
        "./array": 140,
        "./assert": 141,
        "./object": 143,
        "./promise": 144,
        "babel-runtime/core-js/object/get-prototype-of": 8,
        "babel-runtime/helpers/classCallCheck": 14,
        "babel-runtime/helpers/createClass": 15,
        "babel-runtime/helpers/inherits": 17,
        "babel-runtime/helpers/possibleConstructorReturn": 18
    }],
    143: [function(require, dataAndEvents, optgroup) {
        /**
         * @param {string} value
         * @return {?}
         */
        function appendModelPrefix(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        /**
         * @param {Function} callback
         * @param {Array} results
         * @return {?}
         */
        function initialize(callback, results) {
            var employees = {};
            return (0, fullOtherName["default"])(results).forEach(function(i) {
                return employees[i] = callback(i, results[i]);
            }), employees;
        }
        /**
         * @param {Function} cb
         * @param {Array} data
         * @return {?}
         */
        function emit(cb, data) {
            var cache = {};
            return (0, fullOtherName["default"])(data).forEach(function(prop) {
                if (cb(prop, data[prop])) {
                    cache[prop] = data[prop];
                }
            }), cache;
        }
        /**
         * @param {Object} name
         * @return {?}
         */
        function values(name) {
            return (0, fullOtherName["default"])(name).map(function(timeoutKey) {
                return name[timeoutKey];
            });
        }
        /**
         * @param {Array} collection
         * @return {?}
         */
        function pluck(collection) {
            return (0, fullOtherName["default"])(collection).map(function(method) {
                return [method, collection[method]];
            });
        }
        var other = require("babel-runtime/core-js/object/keys");
        var fullOtherName = appendModelPrefix(other);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        /** @type {function (Function, Array): ?} */
        optgroup.map = initialize;
        /** @type {function (Function, Array): ?} */
        optgroup.filter = emit;
        /** @type {function (Object): ?} */
        optgroup.values = values;
        /** @type {function (Array): ?} */
        optgroup.pairs = pluck;
    }, {
        "babel-runtime/core-js/object/keys": 9
    }],
    144: [function(proceed, dataAndEvents, optgroup) {
        /**
         * @param {Object} value
         * @return {?}
         */
        function lookupIterator(value) {
            return value && value.__esModule ? value : {
                "default": value
            };
        }
        var value = proceed("babel-runtime/core-js/promise");
        var iterator = lookupIterator(value);
        Object.defineProperty(optgroup, "__esModule", {
            value: true
        });
        var s;
        ! function(calendar) {
            /**
             * @param {Object} name
             * @return {?}
             */
            function create(name) {
                return new iterator["default"](name);
            }
            /**
             * @return {?}
             */
            function makeRequest() {
                var next = void 0;
                var eb = void 0;
                var getPromise = new iterator["default"](function(ng, dataAndEvents) {
                    /** @type {(number|string)} */
                    next = ng;
                    /** @type {(number|string)} */
                    eb = dataAndEvents;
                });
                return {
                    promise: getPromise,
                    /**
                     * @param {Object} name
                     * @return {undefined}
                     */
                    resolve: function(name) {
                        next(name);
                    },
                    /**
                     * @param {?} reason
                     * @return {undefined}
                     */
                    reject: function(reason) {
                        eb(reason);
                    }
                };
            }
            /**
             * @param {?} cb
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
            /** @type {function (?): ?} */
            calendar.sync = sync;
        }(s = optgroup.SafePromise || (optgroup.SafePromise = {}));
    }, {
        "babel-runtime/core-js/promise": 11
    }]
}, {}, [126]);