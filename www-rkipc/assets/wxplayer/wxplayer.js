function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "JJlS": [function (require, module, exports) {
    "use strict";

    var e = Object.prototype.hasOwnProperty,
        t = "~";

    function n() {}

    function r(e, t, n) {
      this.fn = e, this.context = t, this.once = n || !1;
    }

    function o(e, n, o, s, i) {
      if ("function" != typeof o) throw new TypeError("The listener must be a function");
      var c = new r(o, s || e, i),
          f = t ? t + n : n;
      return e._events[f] ? e._events[f].fn ? e._events[f] = [e._events[f], c] : e._events[f].push(c) : (e._events[f] = c, e._eventsCount++), e;
    }

    function s(e, t) {
      0 == --e._eventsCount ? e._events = new n() : delete e._events[t];
    }

    function i() {
      this._events = new n(), this._eventsCount = 0;
    }

    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (t = !1)), i.prototype.eventNames = function () {
      var n,
          r,
          o = [];
      if (0 === this._eventsCount) return o;

      for (r in n = this._events) {
        e.call(n, r) && o.push(t ? r.slice(1) : r);
      }

      return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(n)) : o;
    }, i.prototype.listeners = function (e) {
      var n = t ? t + e : e,
          r = this._events[n];
      if (!r) return [];
      if (r.fn) return [r.fn];

      for (var o = 0, s = r.length, i = new Array(s); o < s; o++) {
        i[o] = r[o].fn;
      }

      return i;
    }, i.prototype.listenerCount = function (e) {
      var n = t ? t + e : e,
          r = this._events[n];
      return r ? r.fn ? 1 : r.length : 0;
    }, i.prototype.emit = function (e, n, r, o, s, i) {
      var c = t ? t + e : e;
      if (!this._events[c]) return !1;
      var f,
          u,
          a = this._events[c],
          l = arguments.length;

      if (a.fn) {
        switch (a.once && this.removeListener(e, a.fn, void 0, !0), l) {
          case 1:
            return a.fn.call(a.context), !0;

          case 2:
            return a.fn.call(a.context, n), !0;

          case 3:
            return a.fn.call(a.context, n, r), !0;

          case 4:
            return a.fn.call(a.context, n, r, o), !0;

          case 5:
            return a.fn.call(a.context, n, r, o, s), !0;

          case 6:
            return a.fn.call(a.context, n, r, o, s, i), !0;
        }

        for (u = 1, f = new Array(l - 1); u < l; u++) {
          f[u - 1] = arguments[u];
        }

        a.fn.apply(a.context, f);
      } else {
        var v,
            h = a.length;

        for (u = 0; u < h; u++) {
          switch (a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l) {
            case 1:
              a[u].fn.call(a[u].context);
              break;

            case 2:
              a[u].fn.call(a[u].context, n);
              break;

            case 3:
              a[u].fn.call(a[u].context, n, r);
              break;

            case 4:
              a[u].fn.call(a[u].context, n, r, o);
              break;

            default:
              if (!f) for (v = 1, f = new Array(l - 1); v < l; v++) {
                f[v - 1] = arguments[v];
              }
              a[u].fn.apply(a[u].context, f);
          }
        }
      }

      return !0;
    }, i.prototype.on = function (e, t, n) {
      return o(this, e, t, n, !1);
    }, i.prototype.once = function (e, t, n) {
      return o(this, e, t, n, !0);
    }, i.prototype.removeListener = function (e, n, r, o) {
      var i = t ? t + e : e;
      if (!this._events[i]) return this;
      if (!n) return s(this, i), this;
      var c = this._events[i];
      if (c.fn) c.fn !== n || o && !c.once || r && c.context !== r || s(this, i);else {
        for (var f = 0, u = [], a = c.length; f < a; f++) {
          (c[f].fn !== n || o && !c[f].once || r && c[f].context !== r) && u.push(c[f]);
        }

        u.length ? this._events[i] = 1 === u.length ? u[0] : u : s(this, i);
      }
      return this;
    }, i.prototype.removeAllListeners = function (e) {
      var r;
      return e ? (r = t ? t + e : e, this._events[r] && s(this, r)) : (this._events = new n(), this._eventsCount = 0), this;
    }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = t, i.EventEmitter = i, "undefined" != typeof module && (module.exports = i);
  }, {}],
  "XLqW": [function (require, module, exports) {
    "use strict";

    exports.byteLength = u, exports.toByteArray = i, exports.fromByteArray = d;

    for (var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) {
      r[o] = n[o], t[n.charCodeAt(o)] = o;
    }

    function h(r) {
      var t = r.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var e = r.indexOf("=");
      return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4];
    }

    function u(r) {
      var t = h(r),
          e = t[0],
          n = t[1];
      return 3 * (e + n) / 4 - n;
    }

    function c(r, t, e) {
      return 3 * (t + e) / 4 - e;
    }

    function i(r) {
      var n,
          o,
          a = h(r),
          u = a[0],
          i = a[1],
          f = new e(c(r, u, i)),
          A = 0,
          d = i > 0 ? u - 4 : u;

      for (o = 0; o < d; o += 4) {
        n = t[r.charCodeAt(o)] << 18 | t[r.charCodeAt(o + 1)] << 12 | t[r.charCodeAt(o + 2)] << 6 | t[r.charCodeAt(o + 3)], f[A++] = n >> 16 & 255, f[A++] = n >> 8 & 255, f[A++] = 255 & n;
      }

      return 2 === i && (n = t[r.charCodeAt(o)] << 2 | t[r.charCodeAt(o + 1)] >> 4, f[A++] = 255 & n), 1 === i && (n = t[r.charCodeAt(o)] << 10 | t[r.charCodeAt(o + 1)] << 4 | t[r.charCodeAt(o + 2)] >> 2, f[A++] = n >> 8 & 255, f[A++] = 255 & n), f;
    }

    function f(t) {
      return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
    }

    function A(r, t, e) {
      for (var n, o = [], a = t; a < e; a += 3) {
        n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), o.push(f(n));
      }

      return o.join("");
    }

    function d(t) {
      for (var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383) {
        a.push(A(t, h, h + 16383 > u ? u : h + 16383));
      }

      return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("");
    }

    t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
  }, {}],
  "dl1O": [function (require, module, exports) {
    exports.read = function (a, o, t, r, h) {
      var M,
          p,
          w = 8 * h - r - 1,
          f = (1 << w) - 1,
          e = f >> 1,
          i = -7,
          N = t ? h - 1 : 0,
          n = t ? -1 : 1,
          s = a[o + N];

      for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8) {
        ;
      }

      for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8) {
        ;
      }

      if (0 === M) M = 1 - e;else {
        if (M === f) return p ? NaN : 1 / 0 * (s ? -1 : 1);
        p += Math.pow(2, r), M -= e;
      }
      return (s ? -1 : 1) * p * Math.pow(2, M - r);
    }, exports.write = function (a, o, t, r, h, M) {
      var p,
          w,
          f,
          e = 8 * M - h - 1,
          i = (1 << e) - 1,
          N = i >> 1,
          n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          s = r ? 0 : M - 1,
          u = r ? 1 : -1,
          l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;

      for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8) {
        ;
      }

      for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8) {
        ;
      }

      a[t + s - u] |= 128 * l;
    };
  }, {}],
  "ajR1": [function (require, module, exports) {
    var r = {}.toString;

    module.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, {}],
  "AIJW": [function (require, module, exports) {
    var global = arguments[3];

    var t = arguments[3],
        r = require("base64-js"),
        e = require("ieee754"),
        n = require("isarray");

    function i() {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (r) {
        return !1;
      }
    }

    function o() {
      return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function u(t, r) {
      if (o() < r) throw new RangeError("Invalid typed array length");
      return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = f.prototype : (null === t && (t = new f(r)), t.length = r), t;
    }

    function f(t, r, e) {
      if (!(f.TYPED_ARRAY_SUPPORT || _instanceof(this, f))) return new f(t, r, e);

      if ("number" == typeof t) {
        if ("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string");
        return c(this, t);
      }

      return s(this, t, r, e);
    }

    function s(t, r, e, n) {
      if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && _instanceof(r, ArrayBuffer) ? g(t, r, e, n) : "string" == typeof r ? l(t, r, e) : y(t, r);
    }

    function h(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative');
    }

    function a(t, r, e, n) {
      return h(r), r <= 0 ? u(t, r) : void 0 !== e ? "string" == typeof n ? u(t, r).fill(e, n) : u(t, r).fill(e) : u(t, r);
    }

    function c(t, r) {
      if (h(r), t = u(t, r < 0 ? 0 : 0 | w(r)), !f.TYPED_ARRAY_SUPPORT) for (var e = 0; e < r; ++e) {
        t[e] = 0;
      }
      return t;
    }

    function l(t, r, e) {
      if ("string" == typeof e && "" !== e || (e = "utf8"), !f.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
      var n = 0 | v(r, e),
          i = (t = u(t, n)).write(r, e);
      return i !== n && (t = t.slice(0, i)), t;
    }

    function p(t, r) {
      var e = r.length < 0 ? 0 : 0 | w(r.length);
      t = u(t, e);

      for (var n = 0; n < e; n += 1) {
        t[n] = 255 & r[n];
      }

      return t;
    }

    function g(t, r, e, n) {
      if (r.byteLength, e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds");
      if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
      return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), f.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = f.prototype : t = p(t, r), t;
    }

    function y(t, r) {
      if (f.isBuffer(r)) {
        var e = 0 | w(r.length);
        return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t);
      }

      if (r) {
        if ("undefined" != typeof ArrayBuffer && _instanceof(r.buffer, ArrayBuffer) || "length" in r) return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r);
        if ("Buffer" === r.type && n(r.data)) return p(t, r.data);
      }

      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }

    function w(t) {
      if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
      return 0 | t;
    }

    function d(t) {
      return +t != t && (t = 0), f.alloc(+t);
    }

    function v(t, r) {
      if (f.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || _instanceof(t, ArrayBuffer))) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var e = t.length;
      if (0 === e) return 0;

      for (var n = !1;;) {
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return e;

          case "utf8":
          case "utf-8":
          case void 0:
            return $(t).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * e;

          case "hex":
            return e >>> 1;

          case "base64":
            return K(t).length;

          default:
            if (n) return $(t).length;
            r = ("" + r).toLowerCase(), n = !0;
        }
      }
    }

    function E(t, r, e) {
      var n = !1;
      if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
      if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
      if ((e >>>= 0) <= (r >>>= 0)) return "";

      for (t || (t = "utf8");;) {
        switch (t) {
          case "hex":
            return x(this, r, e);

          case "utf8":
          case "utf-8":
            return Y(this, r, e);

          case "ascii":
            return L(this, r, e);

          case "latin1":
          case "binary":
            return D(this, r, e);

          case "base64":
            return S(this, r, e);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return C(this, r, e);

          default:
            if (n) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), n = !0;
        }
      }
    }

    function b(t, r, e) {
      var n = t[r];
      t[r] = t[e], t[e] = n;
    }

    function R(t, r, e, n, i) {
      if (0 === t.length) return -1;

      if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
        if (i) return -1;
        e = t.length - 1;
      } else if (e < 0) {
        if (!i) return -1;
        e = 0;
      }

      if ("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r)) return 0 === r.length ? -1 : _(t, r, e, n, i);
      if ("number" == typeof r) return r &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : _(t, [r], e, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }

    function _(t, r, e, n, i) {
      var o,
          u = 1,
          f = t.length,
          s = r.length;

      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || r.length < 2) return -1;
        u = 2, f /= 2, s /= 2, e /= 2;
      }

      function h(t, r) {
        return 1 === u ? t[r] : t.readUInt16BE(r * u);
      }

      if (i) {
        var a = -1;

        for (o = e; o < f; o++) {
          if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
            if (-1 === a && (a = o), o - a + 1 === s) return a * u;
          } else -1 !== a && (o -= o - a), a = -1;
        }
      } else for (e + s > f && (e = f - s), o = e; o >= 0; o--) {
        for (var c = !0, l = 0; l < s; l++) {
          if (h(t, o + l) !== h(r, l)) {
            c = !1;
            break;
          }
        }

        if (c) return o;
      }

      return -1;
    }

    function A(t, r, e, n) {
      e = Number(e) || 0;
      var i = t.length - e;
      n ? (n = Number(n)) > i && (n = i) : n = i;
      var o = r.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      n > o / 2 && (n = o / 2);

      for (var u = 0; u < n; ++u) {
        var f = parseInt(r.substr(2 * u, 2), 16);
        if (isNaN(f)) return u;
        t[e + u] = f;
      }

      return u;
    }

    function m(t, r, e, n) {
      return Q($(r, t.length - e), t, e, n);
    }

    function P(t, r, e, n) {
      return Q(G(r), t, e, n);
    }

    function T(t, r, e, n) {
      return P(t, r, e, n);
    }

    function B(t, r, e, n) {
      return Q(K(r), t, e, n);
    }

    function U(t, r, e, n) {
      return Q(H(r, t.length - e), t, e, n);
    }

    function S(t, e, n) {
      return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
    }

    function Y(t, r, e) {
      e = Math.min(t.length, e);

      for (var n = [], i = r; i < e;) {
        var o,
            u,
            f,
            s,
            h = t[i],
            a = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
        if (i + c <= e) switch (c) {
          case 1:
            h < 128 && (a = h);
            break;

          case 2:
            128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s);
            break;

          case 3:
            o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (a = s);
            break;

          case 4:
            o = t[i + 1], u = t[i + 2], f = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (a = s);
        }
        null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += c;
      }

      return O(n);
    }

    exports.Buffer = f, exports.SlowBuffer = d, exports.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), exports.kMaxLength = o(), f.poolSize = 8192, f._augment = function (t) {
      return t.__proto__ = f.prototype, t;
    }, f.from = function (t, r, e) {
      return s(null, t, r, e);
    }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
      value: null,
      configurable: !0
    })), f.alloc = function (t, r, e) {
      return a(null, t, r, e);
    }, f.allocUnsafe = function (t) {
      return c(null, t);
    }, f.allocUnsafeSlow = function (t) {
      return c(null, t);
    }, f.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, f.compare = function (t, r) {
      if (!f.isBuffer(t) || !f.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
      if (t === r) return 0;

      for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i) {
        if (t[i] !== r[i]) {
          e = t[i], n = r[i];
          break;
        }
      }

      return e < n ? -1 : n < e ? 1 : 0;
    }, f.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;

        default:
          return !1;
      }
    }, f.concat = function (t, r) {
      if (!n(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return f.alloc(0);
      var e;
      if (void 0 === r) for (r = 0, e = 0; e < t.length; ++e) {
        r += t[e].length;
      }
      var i = f.allocUnsafe(r),
          o = 0;

      for (e = 0; e < t.length; ++e) {
        var u = t[e];
        if (!f.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
        u.copy(i, o), o += u.length;
      }

      return i;
    }, f.byteLength = v, f.prototype._isBuffer = !0, f.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var r = 0; r < t; r += 2) {
        b(this, r, r + 1);
      }

      return this;
    }, f.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var r = 0; r < t; r += 4) {
        b(this, r, r + 3), b(this, r + 1, r + 2);
      }

      return this;
    }, f.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var r = 0; r < t; r += 8) {
        b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
      }

      return this;
    }, f.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments);
    }, f.prototype.equals = function (t) {
      if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === f.compare(this, t);
    }, f.prototype.inspect = function () {
      var t = "",
          r = exports.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
    }, f.prototype.compare = function (t, r, e, n, i) {
      if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
      if (n >= i && r >= e) return 0;
      if (n >= i) return -1;
      if (r >= e) return 1;
      if (this === t) return 0;

      for (var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), c = 0; c < s; ++c) {
        if (h[c] !== a[c]) {
          o = h[c], u = a[c];
          break;
        }
      }

      return o < u ? -1 : u < o ? 1 : 0;
    }, f.prototype.includes = function (t, r, e) {
      return -1 !== this.indexOf(t, r, e);
    }, f.prototype.indexOf = function (t, r, e) {
      return R(this, t, r, e, !0);
    }, f.prototype.lastIndexOf = function (t, r, e) {
      return R(this, t, r, e, !1);
    }, f.prototype.write = function (t, r, e, n) {
      if (void 0 === r) n = "utf8", e = this.length, r = 0;else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;else {
        if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0);
      }
      var i = this.length - r;
      if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");

      for (var o = !1;;) {
        switch (n) {
          case "hex":
            return A(this, t, r, e);

          case "utf8":
          case "utf-8":
            return m(this, t, r, e);

          case "ascii":
            return P(this, t, r, e);

          case "latin1":
          case "binary":
            return T(this, t, r, e);

          case "base64":
            return B(this, t, r, e);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return U(this, t, r, e);

          default:
            if (o) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), o = !0;
        }
      }
    }, f.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var I = 4096;

    function O(t) {
      var r = t.length;
      if (r <= I) return String.fromCharCode.apply(String, t);

      for (var e = "", n = 0; n < r;) {
        e += String.fromCharCode.apply(String, t.slice(n, n += I));
      }

      return e;
    }

    function L(t, r, e) {
      var n = "";
      e = Math.min(t.length, e);

      for (var i = r; i < e; ++i) {
        n += String.fromCharCode(127 & t[i]);
      }

      return n;
    }

    function D(t, r, e) {
      var n = "";
      e = Math.min(t.length, e);

      for (var i = r; i < e; ++i) {
        n += String.fromCharCode(t[i]);
      }

      return n;
    }

    function x(t, r, e) {
      var n = t.length;
      (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);

      for (var i = "", o = r; o < e; ++o) {
        i += Z(t[o]);
      }

      return i;
    }

    function C(t, r, e) {
      for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) {
        i += String.fromCharCode(n[o] + 256 * n[o + 1]);
      }

      return i;
    }

    function M(t, r, e) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
    }

    function k(t, r, e, n, i, o) {
      if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
      if (e + n > t.length) throw new RangeError("Index out of range");
    }

    function N(t, r, e, n) {
      r < 0 && (r = 65535 + r + 1);

      for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) {
        t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
      }
    }

    function z(t, r, e, n) {
      r < 0 && (r = 4294967295 + r + 1);

      for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) {
        t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255;
      }
    }

    function F(t, r, e, n, i, o) {
      if (e + n > t.length) throw new RangeError("Index out of range");
      if (e < 0) throw new RangeError("Index out of range");
    }

    function j(t, r, n, i, o) {
      return o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), e.write(t, r, n, i, 23, 4), n + 4;
    }

    function q(t, r, n, i, o) {
      return o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), e.write(t, r, n, i, 52, 8), n + 8;
    }

    f.prototype.slice = function (t, r) {
      var e,
          n = this.length;
      if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t), f.TYPED_ARRAY_SUPPORT) (e = this.subarray(t, r)).__proto__ = f.prototype;else {
        var i = r - t;
        e = new f(i, void 0);

        for (var o = 0; o < i; ++o) {
          e[o] = this[o + t];
        }
      }
      return e;
    }, f.prototype.readUIntLE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) {
        n += this[t + o] * i;
      }

      return n;
    }, f.prototype.readUIntBE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);) {
        n += this[t + --r] * i;
      }

      return n;
    }, f.prototype.readUInt8 = function (t, r) {
      return r || M(t, 1, this.length), this[t];
    }, f.prototype.readUInt16LE = function (t, r) {
      return r || M(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, f.prototype.readUInt16BE = function (t, r) {
      return r || M(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, f.prototype.readUInt32LE = function (t, r) {
      return r || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, f.prototype.readUInt32BE = function (t, r) {
      return r || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, f.prototype.readIntLE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) {
        n += this[t + o] * i;
      }

      return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
    }, f.prototype.readIntBE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) {
        o += this[t + --n] * i;
      }

      return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
    }, f.prototype.readInt8 = function (t, r) {
      return r || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, f.prototype.readInt16LE = function (t, r) {
      r || M(t, 2, this.length);
      var e = this[t] | this[t + 1] << 8;
      return 32768 & e ? 4294901760 | e : e;
    }, f.prototype.readInt16BE = function (t, r) {
      r || M(t, 2, this.length);
      var e = this[t + 1] | this[t] << 8;
      return 32768 & e ? 4294901760 | e : e;
    }, f.prototype.readInt32LE = function (t, r) {
      return r || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, f.prototype.readInt32BE = function (t, r) {
      return r || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, f.prototype.readFloatLE = function (t, r) {
      return r || M(t, 4, this.length), e.read(this, t, !0, 23, 4);
    }, f.prototype.readFloatBE = function (t, r) {
      return r || M(t, 4, this.length), e.read(this, t, !1, 23, 4);
    }, f.prototype.readDoubleLE = function (t, r) {
      return r || M(t, 8, this.length), e.read(this, t, !0, 52, 8);
    }, f.prototype.readDoubleBE = function (t, r) {
      return r || M(t, 8, this.length), e.read(this, t, !1, 52, 8);
    }, f.prototype.writeUIntLE = function (t, r, e, n) {
      (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
      var i = 1,
          o = 0;

      for (this[r] = 255 & t; ++o < e && (i *= 256);) {
        this[r + o] = t / i & 255;
      }

      return r + e;
    }, f.prototype.writeUIntBE = function (t, r, e, n) {
      (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
      var i = e - 1,
          o = 1;

      for (this[r + i] = 255 & t; --i >= 0 && (o *= 256);) {
        this[r + i] = t / o & 255;
      }

      return r + e;
    }, f.prototype.writeUInt8 = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1;
    }, f.prototype.writeUInt16LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2;
    }, f.prototype.writeUInt16BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2;
    }, f.prototype.writeUInt32LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : z(this, t, r, !0), r + 4;
    }, f.prototype.writeUInt32BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4;
    }, f.prototype.writeIntLE = function (t, r, e, n) {
      if (t = +t, r |= 0, !n) {
        var i = Math.pow(2, 8 * e - 1);
        k(this, t, r, e, i - 1, -i);
      }

      var o = 0,
          u = 1,
          f = 0;

      for (this[r] = 255 & t; ++o < e && (u *= 256);) {
        t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
      }

      return r + e;
    }, f.prototype.writeIntBE = function (t, r, e, n) {
      if (t = +t, r |= 0, !n) {
        var i = Math.pow(2, 8 * e - 1);
        k(this, t, r, e, i - 1, -i);
      }

      var o = e - 1,
          u = 1,
          f = 0;

      for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);) {
        t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
      }

      return r + e;
    }, f.prototype.writeInt8 = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1;
    }, f.prototype.writeInt16LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2;
    }, f.prototype.writeInt16BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2;
    }, f.prototype.writeInt32LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : z(this, t, r, !0), r + 4;
    }, f.prototype.writeInt32BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4;
    }, f.prototype.writeFloatLE = function (t, r, e) {
      return j(this, t, r, !0, e);
    }, f.prototype.writeFloatBE = function (t, r, e) {
      return j(this, t, r, !1, e);
    }, f.prototype.writeDoubleLE = function (t, r, e) {
      return q(this, t, r, !0, e);
    }, f.prototype.writeDoubleBE = function (t, r, e) {
      return q(this, t, r, !1, e);
    }, f.prototype.copy = function (t, r, e, n) {
      if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (r < 0) throw new RangeError("targetStart out of bounds");
      if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
      if (n < 0) throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
      var i,
          o = n - e;
      if (this === t && e < r && r < n) for (i = o - 1; i >= 0; --i) {
        t[i + r] = this[i + e];
      } else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
        t[i + r] = this[i + e];
      } else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
      return o;
    }, f.prototype.fill = function (t, r, e, n) {
      if ("string" == typeof t) {
        if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), 1 === t.length) {
          var i = t.charCodeAt(0);
          i < 256 && (t = i);
        }

        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
        if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
      } else "number" == typeof t && (t &= 255);

      if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
      if (e <= r) return this;
      var o;
      if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t) for (o = r; o < e; ++o) {
        this[o] = t;
      } else {
        var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
            s = u.length;

        for (o = 0; o < e - r; ++o) {
          this[o + r] = u[o % s];
        }
      }
      return this;
    };
    var V = /[^+\/0-9A-Za-z-_]/g;

    function X(t) {
      if ((t = J(t).replace(V, "")).length < 2) return "";

      for (; t.length % 4 != 0;) {
        t += "=";
      }

      return t;
    }

    function J(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }

    function Z(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }

    function $(t, r) {
      var e;
      r = r || 1 / 0;

      for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
        if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
          if (!i) {
            if (e > 56319) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            if (u + 1 === n) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            i = e;
            continue;
          }

          if (e < 56320) {
            (r -= 3) > -1 && o.push(239, 191, 189), i = e;
            continue;
          }

          e = 65536 + (i - 55296 << 10 | e - 56320);
        } else i && (r -= 3) > -1 && o.push(239, 191, 189);

        if (i = null, e < 128) {
          if ((r -= 1) < 0) break;
          o.push(e);
        } else if (e < 2048) {
          if ((r -= 2) < 0) break;
          o.push(e >> 6 | 192, 63 & e | 128);
        } else if (e < 65536) {
          if ((r -= 3) < 0) break;
          o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128);
        } else {
          if (!(e < 1114112)) throw new Error("Invalid code point");
          if ((r -= 4) < 0) break;
          o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128);
        }
      }

      return o;
    }

    function G(t) {
      for (var r = [], e = 0; e < t.length; ++e) {
        r.push(255 & t.charCodeAt(e));
      }

      return r;
    }

    function H(t, r) {
      for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u) {
        n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n);
      }

      return o;
    }

    function K(t) {
      return r.toByteArray(X(t));
    }

    function Q(t, r, e, n) {
      for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) {
        r[i + e] = t[i];
      }

      return i;
    }

    function W(t) {
      return t != t;
    }
  }, {
    "base64-js": "XLqW",
    "ieee754": "dl1O",
    "isarray": "ajR1",
    "buffer": "AIJW"
  }],
  "SLEA": [function (require, module, exports) {
    "use strict";

    function t(t, e) {
      if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
    }

    function e(t, e) {
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }

    function i(t, i, a) {
      return i && e(t.prototype, i), a && e(t, a), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var a = function a(t, e) {
      return setTimeout(t, e);
    };

    a.cancel = function (t) {
      clearTimeout(t);
    };

    var n = function () {
      function e() {
        t(this, e), this.extra = 0, this.timestamp = 0, this.interval = 1e3 / 60, this.callbacks = [], this.handler = a(this._tick.bind(this), this.interval);
      }

      return i(e, [{
        key: "setFps",
        value: function value(t) {
          t && (this.interval = 1e3 / t);
        }
      }, {
        key: "add",
        value: function value(t) {
          this.callbacks.push(t);
        }
      }, {
        key: "remove",
        value: function value(t) {
          for (var e = this.callbacks.length - 1; e >= 0; e--) {
            this.callbacks[e] == t && this.callbacks.splice(e, 1);
          }
        }
      }, {
        key: "destroy",
        value: function value() {
          a.cancel(this.handler), this.handler = null, this.callbacks = [];
        }
      }, {
        key: "_tick",
        value: function value() {
          var t = this._now();

          this.timestamp || (this.timestamp = t);
          var e = this.extra,
              i = t - this.timestamp + e,
              n = Math.floor(i / this.interval);

          if ((e = i - this.interval * n) >= this.interval / 1.5 && (n = Math.ceil(i / this.interval), e = 0), n) {
            for (var s = 0; s < this.callbacks.length; s++) {
              for (var r = 0; r < n; r++) {
                this.callbacks[s](t - this.timestamp);
              }
            }

            this.extra = e, this.timestamp = t;
          }

          this.handler = a(this._tick.bind(this), this.interval);
        }
      }, {
        key: "_now",
        value: function value() {
          return window.performance && window.performance.now ? window.performance.now() : +new Date();
        }
      }]), e;
    }(),
        s = n;

    exports.default = s;
  }, {}],
  "Bm0n": [function (require, module, exports) {
    "function" == typeof Object.create ? module.exports = function (t, e) {
      e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }));
    } : module.exports = function (t, e) {
      if (e) {
        t.super_ = e;

        var o = function o() {};

        o.prototype = e.prototype, t.prototype = new o(), t.prototype.constructor = t;
      }
    };
  }, {}],
  "ACyo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("eventemitter3")),
        t = r(require("inherits"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = {
      isWeChat: function isWeChat() {
        return /MicroMessenger/i.test(window.navigator.userAgent);
      },
      workerify: function workerify(r) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            i = this.getFuncBody(r.toString());

        function o(t) {
          var r = this;
          e.default.call(this), this.id = 0, this.resolves = [];
          var s = new Blob([i], {
            type: "text/javascript"
          });
          this.url = URL.createObjectURL(s), this.worker = new Worker(this.url), this.worker.onmessage = function (e) {
            var t = e.data,
                s = t.id,
                i = t.data,
                o = t.destroy,
                n = t.type;
            if (o) r.resolves = [], URL.revokeObjectURL(r.url), r.worker.terminate(), r.worker = null;else if ("event" == n) r.emit(i.type, i.data);else for (var a = r.resolves.length - 1; a >= 0; a--) {
              if (s == r.resolves[a].id) {
                r.resolves[a].resolve(i), r.resolves.splice(a, 1);
                break;
              }
            }
          }, this.worker.postMessage({
            type: "constructor",
            id: this.id++,
            data: t
          });
        }

        (0, t.default)(o, e.default);

        for (var n = function n(e) {
          var t = s[e];

          o.prototype[t] = function (e) {
            var r = this;
            return new Promise(function (s, i) {
              var o = r.id++;
              r.resolves.push({
                id: o,
                resolve: s,
                reject: i
              }), r.worker && r.worker.postMessage({
                type: t,
                id: o,
                data: e
              });
            });
          };
        }, a = 0; a < s.length; a++) {
          n(a);
        }

        return o;
      },
      getFuncBody: function getFuncBody(e) {
        return e.trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
      }
    };
    exports.default = s;
  }, {
    "eventemitter3": "JJlS",
    "inherits": "Bm0n"
  }],
  "f7mc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("buffer"),
        e = o(require("eventemitter3"));

    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function i(t, e) {
      if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
    }

    function r(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    function u(t, e, o) {
      return e && r(t.prototype, e), o && r(t, o), t;
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && a(t, e);
    }

    function a(t, e) {
      return (a = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function c(t) {
      var e = f();
      return function () {
        var o,
            n = h(t);

        if (e) {
          var i = h(this).constructor;
          o = Reflect.construct(n, arguments, i);
        } else o = n.apply(this, arguments);

        return d(this, o);
      };
    }

    function d(t, e) {
      return !e || "object" !== n(e) && "function" != typeof e ? l(t) : e;
    }

    function l(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function f() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }

    function h(t) {
      return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var m = window.webkitAudioContext || window.AudioContext,
        y = function (o) {
      s(r, e.default);
      var n = c(r);

      function r(e) {
        var o,
            u = e.volume,
            s = e.muted;
        return i(this, r), (o = n.call(this)).duration = 0, o.state = "blocked", o.blockedCurrTime = 0, o.skimmedTime = 0, o.vol = u, o.muted = s, o.context = new m(), o.gainNode = o.context.createGain(), o.gainNode.gain.value = o.muted ? 0 : o.vol, o.gainNode.connect(o.context.destination), o.audioSrcNodes = [], o.playStartedAt = 0, o.totalTimeScheduled = 0, o.data = t.Buffer.alloc(0), o;
      }

      return u(r, [{
        key: "setBlockedCurrTime",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          this.blockedCurrTime = t;

          for (var e = 0; e < this.audioSrcNodes.length; e++) {
            if (t <= 1e3 * this.audioSrcNodes[e].timestamp) {
              this.audioSrcNodes.splice(0, e ? e - 1 : 0).forEach(function (t) {
                var e = t.source;
                e.onended = null, e.disconnect();
              });
              break;
            }
          }
        }
      }, {
        key: "unblock",
        value: function value(t) {
          if ("blocked" == this.state) {
            this.state = "running", this.resume(), this.setBlockedCurrTime(t), this.playStartedAt = 0, this.totalTimeScheduled = 0;

            for (var e = 0; e < this.audioSrcNodes.length; e++) {
              var o = this.audioSrcNodes[e],
                  n = o.source,
                  i = o.timestamp,
                  r = o.duration;
              n.onended = null, n.disconnect();
              var u = this.context.createBufferSource();

              if (u.onended = this._onAudioBufferEnded.bind(this), !this.playStartedAt) {
                var s = this.context,
                    a = s.currentTime,
                    c = s.baseLatency,
                    d = s.sampleRate,
                    l = r + (c || 128 / d);
                this.playStartedAt = a + l;
              }

              u.buffer = n.buffer;

              try {
                u.connect(this.gainNode), u.start(this.totalTimeScheduled + this.playStartedAt, e ? 0 : t / 1e3 - i);
              } catch (f) {}

              this.audioSrcNodes[e].source = u, this.audioSrcNodes[e].timestamp = this.totalTimeScheduled, this.totalTimeScheduled += r;
            }
          }
        }
      }, {
        key: "getAvaiableDuration",
        value: function value() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function value() {
          return this.context ? "blocked" == this.state ? this.blockedCurrTime : this.context.currentTime - this.playStartedAt + this.skimmedTime : 0;
        }
      }, {
        key: "volume",
        value: function value(t) {
          return null != t && (this.vol = t, this.gainNode.gain.value = this.muted ? 0 : t), this.vol;
        }
      }, {
        key: "mute",
        value: function value(t) {
          return null != t && (this.muted = t, this.gainNode.gain.value = this.muted ? 0 : this.vol), this.muted;
        }
      }, {
        key: "pause",
        value: function value() {
          if ("paused" != this.state) return this.state = "paused", this.context ? this.context.suspend() : Promise.resolve();
        }
      }, {
        key: "resume",
        value: function value() {
          if ("running" != this.state) return this.state = "running", this.context ? this.context.resume() : Promise.resolve();
        }
      }, {
        key: "decode",
        value: function value(e) {
          var o = this;
          return e.length && (e = t.Buffer.from(e), this.data = t.Buffer.concat([this.data, e]), this.context) ? new Promise(function (t) {
            o.context.decodeAudioData(o.data.buffer, function (e) {
              o._onDecodeSuccess(e), t();
            }, function (e) {
              o._onDecodeError(e), t();
            });
          }) : Promise.resolve();
        }
      }, {
        key: "destroy",
        value: function value() {
          this.removeAllListeners(), this.context && (this.context.close(), this.context = null), this.data = null, this.gainNode = null, this.audioSrcNodes = [], this.state = "destroy";
        }
      }, {
        key: "_onDecodeSuccess",
        value: function value(e) {
          var o = this.context.createBufferSource();

          if (o.onended = this._onAudioBufferEnded.bind(this), !this.playStartedAt) {
            var n = e.duration,
                i = this.context,
                r = i.currentTime,
                u = i.baseLatency,
                s = i.sampleRate,
                a = n + (u || 128 / s);
            this.playStartedAt = r + a;
          }

          if (o.buffer = e, "running" == this.state) try {
            o.connect(this.gainNode), o.start(this.totalTimeScheduled + this.playStartedAt);
          } catch (c) {}
          this.audioSrcNodes.push({
            source: o,
            duration: e.duration,
            timestamp: this.totalTimeScheduled
          }), this.totalTimeScheduled += e.duration, this.duration += e.duration, this.data = t.Buffer.alloc(0), this.emit("decode:success");
        }
      }, {
        key: "_onDecodeError",
        value: function value(t) {
          this.emit("decode:error", t);
        }
      }, {
        key: "_onAudioBufferEnded",
        value: function value() {
          this.audioSrcNodes.shift().source.disconnect();
        }
      }]), r;
    }(),
        p = y;

    exports.default = p;
  }, {
    "buffer": "AIJW",
    "eventemitter3": "JJlS"
  }],
  "RrKo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e(require("./browser"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function r(t, e) {
      if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
    }

    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function u(t, e, n) {
      return e && o(t.prototype, e), n && o(t, n), t;
    }

    function i(t, e, n) {
      return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var r = c(t, e);

        if (r) {
          var o = Object.getOwnPropertyDescriptor(r, e);
          return o.get ? o.get.call(n) : o.value;
        }
      })(t, e, n || t);
    }

    function c(t, e) {
      for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = v(t));) {
        ;
      }

      return t;
    }

    function f(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && l(t, e);
    }

    function l(t, e) {
      return (l = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function a(t) {
      var e = y();
      return function () {
        var n,
            r = v(t);

        if (e) {
          var o = v(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);

        return s(this, n);
      };
    }

    function s(t, e) {
      return !e || "object" !== n(e) && "function" != typeof e ? p(t) : e;
    }

    function p(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function y() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }

    function v(t) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var h = [];
    document.addEventListener("WeixinJSBridgeReady", function () {
      setTimeout(function t() {
        h.length && WeixinJSBridge.invoke("getNetworkType", {}, h.shift()), setTimeout(t, 1e3 / 60);
      }, 1e3 / 60);
    }, !1);

    var b = function (e) {
      f(o, t.default);
      var n = a(o);

      function o(t) {
        var e;
        return r(this, o), (e = n.call(this, t)).resume(), e;
      }

      return u(o, [{
        key: "setBlockedCurrTime",
        value: function value() {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        }
      }, {
        key: "unblock",
        value: function value(t) {}
      }, {
        key: "volume",
        value: function value(t) {
          var e = this;
          if (!t) return this.volume;
          h.push(function () {
            i(v(o.prototype), "volume", e).call(e, t);
          });
        }
      }, {
        key: "mute",
        value: function value(t) {
          var e = this;
          if (null == t) return this.muted;
          h.push(function () {
            i(v(o.prototype), "mute", e).call(e, t);
          });
        }
      }, {
        key: "pause",
        value: function value() {
          var t = this;
          return new Promise(function (e) {
            h.push(function () {
              i(v(o.prototype), "pause", t).call(t), e();
            });
          });
        }
      }, {
        key: "resume",
        value: function value() {
          var t = this;
          return new Promise(function (e) {
            h.push(function () {
              i(v(o.prototype), "resume", t).call(t), e();
            });
          });
        }
      }]), o;
    }(),
        m = b;

    exports.default = m;
  }, {
    "./browser": "f7mc"
  }],
  "Howj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("../util/util")),
        t = u(require("./browser")),
        r = u(require("./wechat"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(u) {
      return e.default.isWeChat() ? new r.default(u) : new t.default(u);
    }

    var i = a;
    exports.default = i;
  }, {
    "../util/util": "ACyo",
    "./browser": "f7mc",
    "./wechat": "RrKo"
  }],
  "ILxu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("buffer"),
        t = a(require("eventemitter3")),
        i = a(require("../util/ticker")),
        s = a(require("../sound/sound")),
        r = a(require("../util/util"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function o(e, t) {
      if (!_instanceof(e, t)) throw new TypeError("Cannot call a class as a function");
    }

    function h(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    function u(e, t, i) {
      return t && h(e.prototype, t), i && h(e, i), e;
    }

    function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && f(e, t);
    }

    function f(e, t) {
      return (f = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function c(e) {
      var t = g();
      return function () {
        var i,
            s = p(e);

        if (t) {
          var r = p(this).constructor;
          i = Reflect.construct(s, arguments, r);
        } else i = s.apply(this, arguments);

        return m(this, i);
      };
    }

    function m(e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? l(e) : t;
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function g() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function p(e) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var v = function (a) {
      d(h, t.default);
      var n = c(h);

      function h(e) {
        var t,
            a = e.volume,
            u = void 0 === a ? 1 : a,
            d = e.muted,
            f = void 0 !== d && d,
            c = e.preloadTime,
            m = void 0 === c ? 1e3 : c,
            g = e.bufferingTime,
            p = void 0 === g ? 3e3 : g,
            v = e.cacheSegmentCount,
            b = void 0 === v ? 128 : v;
        e.hasVideo, e.hasAudio;
        return o(this, h), (t = n.call(this)).averageUnitDuration = 0, t.averageDecodeCost = 0, t.soundHeadSliced = !1, t.framerate = 1e3 / 24, t.isDecodeEnded = !1, t.state = "created", t.baseTime = 0, t.blocked = !r.default.isWeChat(), t.hasVideo = !0, t.hasAudio = !0, t.frames = [], t.audios = [], t.currentTime = 0, t.bufferingIndex = -1, t.minBufferingTime = m, t.bufferingTime = p, t.cacheSegmentCount = b, t.ticker = new i.default(), t.sound = new s.default({
          volume: u,
          muted: f
        }), t.codec = new H264Codec(), t.tickHandler = t._onTickHandler.bind(l(t)), t.ticker.add(t.tickHandler), t.codec.onmessage = t._onCodecMsgHandler.bind(l(t)), t;
      }

      return u(h, [{
        key: "getAvaiableDuration",
        value: function value() {
          return this.hasAudio && this.sound ? 1e3 * this.sound.getAvaiableDuration() : this.hasVideo && this.frames.length ? this.frames[this.frames.length - 1].timestamp : 0;
        }
      }, {
        key: "getCurrentTime",
        value: function value() {
          return this.hasAudio ? this.currentTime = this.sound ? 1e3 * this.sound.getCurrentTime() : 0 : this.hasVideo || (this.currentTime = 0), this.currentTime;
        }
      }, {
        key: "setCurrentTime",
        value: function value(e) {
          this.currentTime = e;
        }
      }, {
        key: "process",
        value: function value(e) {
          this.codec && this.codec.decode(e);
        }
      }, {
        key: "unblock",
        value: function value() {
          r.default.isWeChat() || this.sound && (this.blocked = !1, this.sound.unblock(0));
        }
      }, {
        key: "volume",
        value: function value(e) {
          if (null == e) return this.sound ? this.sound.volume() : 0;
          this.sound && this.sound.volume(e);
        }
      }, {
        key: "mute",
        value: function value(e) {
          if (null == e) return !this.sound || this.sound.mute();
          this.sound && this.sound.mute(e);
        }
      }, {
        key: "pause",
        value: function value() {
          "pasued" != this.state && (this.sound && this.sound.pause(), this.ticker && this.ticker.remove(this.tickHandler), this.state = "paused");
        }
      }, {
        key: "resume",
        value: function value() {
          "playing" != this.state && (this.sound && this.sound.resume(), this.ticker && this.ticker.add(this.tickHandler), this.state = "playing");
        }
      }, {
        key: "destroy",
        value: function value() {
          this.removeAllListeners(), this.ticker && this.ticker.destroy(), this.sound && this.sound.destroy(), this.codec && this.codec.destroy(), this.frames = [], this.audios = [], this.ticker = null, this.sound = null, this.codec = null, this.state = "destroy";
        }
      }, {
        key: "_onTickHandler",
        value: function value() {
          if ("created" != this.state) {
            if (this.hasAudio && this.hasVideo) {
              var e = 0,
                  t = 0;

              if (this.currentTime = this.getCurrentTime(), this.frames.length) {
                t = this.frames.length - 1;
                var i = this.frames[t].timestamp;
                if (-1 == this.bufferingIndex) this.bufferingIndex = t, e = i - this.currentTime;else if (this.frames[this.bufferingIndex]) {
                  e = i - this.frames[this.bufferingIndex].timestamp;
                }
              }

              if (!this.frames.length || !this.isDecodeEnded && e && e < this.minBufferingTime) return "buffering" != this.state && this.emit("buffering"), this.sound.pause(), void (this.state = "buffering");
              if (this.currentTime && (this.minBufferingTime = this.bufferingTime), this.bufferingIndex = -1, "buffering" != this.state && this.sound.resume(), this.blocked || !this.currentTime) return;
              this.frames.length >= 1.5 * this.cacheSegmentCount ? this.ticker.setFps(3 * this.framerate) : this.frames.length < this.cacheSegmentCount / 3 ? this.ticker.setFps(this.framerate / 1.5) : this.ticker.setFps(this.framerate);

              for (var s = 0; s < this.frames.length; s++) {
                var r = this.frames[s].timestamp,
                    a = this.currentTime - r;

                if (Math.abs(a) <= 25) {
                  this.emit("frame", this.frames[s]), this.frames.splice(0, s + 1);
                  break;
                }
              }
            } else if (this.hasAudio) {
              var n = 1e3 * this.sound.getAvaiableDuration(),
                  o = this.bufferingTime;
              this.currentTime = this.getCurrentTime(), "preload" != this.state && this.currentTime > 0 && n - this.currentTime < o && (this.state = "preload", this.emit("preload"));
            } else if (this.hasVideo) {
              if (!this.isDecodeEnded && "buffering" == this.state) return;
              !this.isDecodeEnded && this.frames.length < this.cacheSegmentCount / 3 && this.ticker.setFps(this.framerate / 1.5);
              var h = this.frames.shift();
              h && (this.currentTime = h.timestamp, this.emit("frame", h), this.sound && this.sound.setBlockedCurrTime(this.currentTime));
            }

            var u = Number.MAX_SAFE_INTEGER;

            if (this.hasVideo && this.frames.length) {
              var d = this.frames.length - 1,
                  f = this.currentTime;
              u = this.frames[d].timestamp - f;
            }

            if (!this.isDecodeEnded && "buffering" != this.state && this.hasVideo && !this.hasAudio && u < this.bufferingTime) return this.state = "buffering", void this.emit("buffering");
            this.hasVideo && "preload" != this.state && "buffering" != this.state && (this.frames.length < this.cacheSegmentCount || u < 1.3 * this.averageDecodeCost) && (this.state = "preload", this.emit("preload"));
          }
        }
      }, {
        key: "_onCodecMsgHandler",
        value: function value(t) {
          if ("destroy" != this.state) switch (t.type) {
            case "ready":
              this.emit("buffering");
              break;

            case "header":
              var i = t.data,
                  s = i.hasVideo,
                  r = i.hasAudio;
              this.hasVideo = s, this.hasAudio = r, this.hasAudio || (this.sound.destroy(), this.sound = null), this.emit("header", t.data);
              break;

            case "mediaInfo":
              try {
                t.data = JSON.parse(t.data);
              } catch (C) {}

              var a = t.data.onMetaData || [];
              if (this.ticker) for (var n = 0; n < a.length; n++) {
                var o = a[n].framerate;

                if (o) {
                  this.framerate = o, this.ticker.setFps(o);
                  break;
                }
              }
              this.emit("mediaInfo", t.data);
              break;

            case "video":
              var h = t.data,
                  u = h.timestamp,
                  d = h.width,
                  f = h.height,
                  c = h.stride0,
                  m = h.stride1,
                  l = h.buffer;
              this.baseTime || (this.baseTime = u), this.frames.push({
                data: e.Buffer.from(new Uint8Array(l)),
                timestamp: u - this.baseTime,
                width: d,
                height: f,
                stride0: c,
                stride1: m
              });
              break;

            case "audio":
              var g = t.data,
                  p = g.timestamp,
                  v = g.buffer;
              this.baseTime || (this.baseTime = p), this.audios.push(e.Buffer.from(new Uint8Array(v)));
              break;

            case "decode":
              ("buffering" == this.state || this.hasVideo && "playing" != this.state && "paused" != this.state || !this.hasVideo && this.hasAudio && "playing" != this.state && "paused" != this.state) && (this.emit("playing"), this.state = "playing"), this.ticker.setFps(this.framerate);
              var b = t.data,
                  y = b.consume,
                  k = b.duration;

              if (this.averageDecodeCost ? (this.averageDecodeCost += y, this.averageDecodeCost /= 2) : this.averageDecodeCost = y, this.averageUnitDuration ? (this.averageUnitDuration += k, this.averageUnitDuration /= 2) : this.averageUnitDuration = k, this.emit("performance", {
                averageDecodeCost: this.averageDecodeCost,
                averageUnitDuration: this.averageUnitDuration
              }), this.hasAudio) {
                if (this.currentTime = this.getCurrentTime(), !this.soundHeadSliced) {
                  if (this.soundHeadSliced = !0, this.frames.length) {
                    var T = this.frames.shift();
                    this.emit("frame", T);
                  }

                  this.sound.decode(e.Buffer.concat(this.audios.splice(0, 32)));
                }

                this.sound.decode(e.Buffer.concat(this.audios)), this.audios = [];
              }

              break;

            case "complete":
              this.isDecodeEnded = !0, this.state = "decodeEnded", this.emit("decodeEnded");
          }
        }
      }]), h;
    }(),
        b = v;

    exports.default = b;
  }, {
    "buffer": "AIJW",
    "eventemitter3": "JJlS",
    "../util/ticker": "SLEA",
    "../sound/sound": "Howj",
    "../util/util": "ACyo"
  }],
  "Monm": [function (require, module, exports) {
    "use strict";

    function t() {
      var t = !1;

      try {
        t = !!new SharedArrayBuffer(0);
      } catch (r) {}

      function e(e, a, n) {
        if ((!n || n - a > e.length) && (n = e.length), t) {
          var r = new SharedArrayBuffer(n - a),
              s = new Uint8Array(r);
          return s.set(e.subarray(a, n)), s;
        }

        return e.subarray(a, n);
      }

      function a(t) {
        var e = t.url,
            a = t.chunkSize,
            n = void 0 === a ? 262144 : a;
        this.url = e, this.done = !1, this.reader = null, this.chunkSize = n, this.data = new Uint8Array(0);
      }

      a.prototype.hasData = function () {
        return !this.done || this.done && this.data.length;
      }, a.prototype.read = function () {
        var t = this;
        return this.data.length < this.chunkSize ? this.done ? this._getChunk() : this._request().then(function () {
          return t._getChunk();
        }) : this._getChunk();
      }, a.prototype.cancel = function () {
        this.data = null, this.reader = null, this.done = !0;
      }, a.prototype._getChunk = function () {
        var t = this;
        return new Promise(function (a) {
          var n = e(t.data, 0, t.chunkSize);
          t.data = e(t.data, t.data.length <= t.chunkSize ? t.data.length : t.chunkSize), a(n);
        });
      }, a.prototype._request = function () {
        var t = this;
        return this.reader ? this.reader.read().then(function (e) {
          var a,
              n,
              r,
              s = e.value,
              i = e.done;
          if (s = new Uint8Array(s || 0), t.data = (a = t.data, n = s, (r = new Uint8Array(a.length + n.length)).set(new Uint8Array(a), 0), r.set(new Uint8Array(n), a.length), r), i) t.done = !0;else if (t.data.length < t.chunkSize) return t._request();
        }) : fetch(this.url, {
          method: "GET"
        }).then(function (e) {
          var a = e.status,
              n = e.statusText;
          return a < 200 || a > 299 ? e.text().then(function (t) {
            self.postMessage({
              type: "event",
              data: {
                type: "loadError",
                data: {
                  status: a,
                  statusText: n,
                  detail: t
                }
              }
            });
          }) : (self.postMessage({
            type: "event",
            data: {
              type: "loadSuccess"
            }
          }), t.reader = e.body.getReader(), t._request());
        }).catch(function (t) {
          self.postMessage({
            type: "event",
            data: {
              type: "loadError",
              data: {
                status: -1,
                statusText: "unknown error",
                detail: t
              }
            }
          });
        });
      };
      var n = null;

      self.onmessage = function (t) {
        var e = t.data,
            r = e.type,
            s = e.id,
            i = e.data;
        "constructor" == r ? (n = new a(i), self.postMessage({
          id: s
        })) : "hasData" == r ? self.postMessage({
          id: s,
          data: !!n && n.hasData()
        }) : "read" == r ? n ? n.read().then(function (t) {
          t = new Uint8Array(t), self.postMessage({
            id: s,
            data: t
          }, [t.buffer]);
        }) : self.postMessage({
          id: s,
          data: new Uint8Array(0)
        }) : "cancel" == r && (n && n.cancel(), self.postMessage({
          id: s,
          destroy: !0
        }));
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "DaV8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("buffer"),
        e = r(require("eventemitter3"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function o(t, e) {
      if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
    }

    function u(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    function i(t, e, r) {
      return e && u(t.prototype, e), r && u(t, r), t;
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && c(t, e);
    }

    function c(t, e) {
      return (c = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function f(t) {
      var e = h();
      return function () {
        var r,
            n = y(t);

        if (e) {
          var o = y(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);

        return s(this, r);
      };
    }

    function s(t, e) {
      return !e || "object" !== n(e) && "function" != typeof e ? l(t) : e;
    }

    function l(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function h() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }

    function y(t) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var d = 3,
        p = !1;

    try {
      p = !!new SharedArrayBuffer(0);
    } catch (v) {}

    var x = function (r) {
      a(u, e.default);
      var n = f(u);

      function u(t) {
        var e,
            r = t.url,
            i = t.chunkSize,
            a = void 0 === i ? 262144 : i;
        return o(this, u), (e = n.call(this)).url = r, e.chunkSize = a, e.startIndex = 0, e.downloadSize = 0, e.done = !1, e.xhr = null, e.emitted = !1, e;
      }

      return i(u, [{
        key: "hasData",
        value: function value() {
          return !this.done;
        }
      }, {
        key: "read",
        value: function value() {
          return this.done ? Promise.resolve(new t.Buffer(0)) : this._request();
        }
      }, {
        key: "cancel",
        value: function value() {
          this.xhr && (this.xhr.abort(), this.xhr = null), this.done = !0;
        }
      }, {
        key: "_request",
        value: function value() {
          for (var t = this, e = !1, r = this._fetch(), n = function n(_n) {
            r = r.then(function (r) {
              if (e || (e = !0, t.downloadSize += r.length, r.length < t.chunkSize && (t.done = !0)), p) {
                var n = new SharedArrayBuffer(r.byteLength),
                    o = new Uint8Array(n);
                o.set(r), r = o;
              }

              return r;
            }).catch(function (e) {
              if (_n >= d - 1) throw t.emitted || (t.emitted = !0, t.emit("loadError", e)), e;
              return t._fetch();
            });
          }, o = 0; o < d; o++) {
            n(o);
          }

          return r;
        }
      }, {
        key: "_fetch",
        value: function value() {
          var t = this;
          return new Promise(function (e, r) {
            var n = t.startIndex + t.chunkSize;
            t.xhr = new XMLHttpRequest(), t.xhr.open("GET", t.url), t.xhr.responseType = "arraybuffer", t.xhr.setRequestHeader("Range", "bytes=".concat(t.startIndex, "-").concat(n)), t.xhr.onerror = function (t) {
              r({
                status: -1,
                statusText: "unknown error",
                detail: t
              });
            }, t.xhr.onload = function () {
              4 == t.xhr.readyState && (t.xhr.status >= 200 && t.xhr.status <= 299 ? (t.emitted || (t.emitted = !0, t.emit("loadSuccess")), t.startIndex = n + 1, e(new Uint8Array(t.xhr.response))) : r({
                status: t.xhr.status,
                statusText: t.xhr.statusText,
                detail: String.fromCharCode.apply(null, new Uint8Array(t.xhr.response))
              }));
            }, t.xhr.send();
          });
        }
      }]), u;
    }(),
        b = x;

    exports.default = b;
  }, {
    "buffer": "AIJW",
    "eventemitter3": "JJlS"
  }],
  "TytF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./stream")),
        r = u(require("./chunk")),
        t = u(require("../util/util"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(u) {
      var a = u.type,
          n = void 0 === a ? "chunk" : a,
          d = u.opt;
      return "chunk" == n ? new r.default(d) : new (t.default.workerify(e.default, ["read", "cancel", "hasData"]))(d);
    }

    var n = a;
    exports.default = n;
  }, {
    "./stream": "Monm",
    "./chunk": "DaV8",
    "../util/util": "ACyo"
  }],
  "VXbF": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if (!_instanceof(e, t)) throw new TypeError("Cannot call a class as a function");
    }

    function t(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }

    function r(e, r, a) {
      return r && t(e.prototype, r), a && t(e, a), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var a = function () {
      function t(r) {
        e(this, t), this.$canvas = r, this.contextGL = null, this.shaderProgram = null, this.texturePosBuffer = null, this.yTextureRef = null, this.uTextureRef = null, this.vTextureRef = null, this._initContextGL(), this.contextGL && (this._initProgram(), this._initBuffers(), this._initTextures());
      }

      return r(t, [{
        key: "drawNextOutputPicture",
        value: function value(e, t, r) {
          var a = this.yTextureRef,
              n = this.uTextureRef,
              i = this.vTextureRef,
              o = this.contextGL;
          o.pixelStorei(o.UNPACK_ALIGNMENT, 1), o.viewport(0, 0, e, t);
          var u = r,
              l = e * t,
              s = u.subarray(0, l);
          o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, a), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, e, t, 0, o.LUMINANCE, o.UNSIGNED_BYTE, s);
          var T = e * t / 4,
              f = u.subarray(l, l + T);
          o.activeTexture(o.TEXTURE1), o.bindTexture(o.TEXTURE_2D, n), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, e / 2, t / 2, 0, o.LUMINANCE, o.UNSIGNED_BYTE, f);
          var x = T,
              c = u.subarray(l + T, l + T + x);
          o.activeTexture(o.TEXTURE2), o.bindTexture(o.TEXTURE_2D, i), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, e / 2, t / 2, 0, o.LUMINANCE, o.UNSIGNED_BYTE, c), o.drawArrays(o.TRIANGLE_STRIP, 0, 4);
        }
      }, {
        key: "destroy",
        value: function value() {
          try {
            this.contextGL.getExtension("WEBGL_lose_context").loseContext();
          } catch (e) {}

          this.$canvas = null, this.contextGL = null, this.shaderProgram = null, this.texturePosBuffer = null, this.yTextureRef = null, this.uTextureRef = null, this.vTextureRef = null;
        }
      }, {
        key: "_initContextGL",
        value: function value() {
          for (var e = this.$canvas, t = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], r = null, a = 0; !r && a < t.length;) {
            var n = t[a];

            try {
              r = e.getContext(n);
            } catch (i) {
              r = null;
            }

            r && "function" == typeof r.getParameter || (r = null), ++a;
          }

          this.contextGL = r;
        }
      }, {
        key: "_initProgram",
        value: function value() {
          var e = this.contextGL,
              t = e.createShader(e.VERTEX_SHADER);
          e.shaderSource(t, "\n    attribute vec4 vertexPos;\n    attribute vec4 texturePos;\n    varying vec2 textureCoord;\n    void main(){\n        gl_Position = vertexPos; \n        textureCoord = texturePos.xy;\n    }\n    "), e.compileShader(t), e.getShaderParameter(t, e.COMPILE_STATUS) || console.log("Vertex shader failed to compile: " + e.getShaderInfoLog(t));
          var r = e.createShader(e.FRAGMENT_SHADER);
          e.shaderSource(r, "\n    precision highp float;\n    varying highp vec2 textureCoord;\n    uniform sampler2D ySampler;\n    uniform sampler2D uSampler;\n    uniform sampler2D vSampler;\n    const mat4 YUV2RGB = mat4(\n        1.1643828125, 0, 1.59602734375, -.87078515625,\n        1.1643828125, -.39176171875, -.81296875, .52959375,\n        1.1643828125, 2.017234375, 0, -1.081390625,\n        0, 0, 0, 1\n    );\n\n    void main(void) {\n        highp float y = texture2D(ySampler,  textureCoord).r;\n        highp float u = texture2D(uSampler,  textureCoord).r;\n        highp float v = texture2D(vSampler,  textureCoord).r;\n        gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;\n    }\n    "), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) || console.log("Fragment shader failed to compile: " + e.getShaderInfoLog(r));
          var a = e.createProgram();
          e.attachShader(a, t), e.attachShader(a, r), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) || console.log("Program failed to compile: " + e.getProgramInfoLog(a)), e.useProgram(a), this.shaderProgram = a;
        }
      }, {
        key: "_initBuffers",
        value: function value() {
          var e = this.contextGL,
              t = this.shaderProgram,
              r = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, r), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), e.STATIC_DRAW);
          var a = e.getAttribLocation(t, "vertexPos");
          e.enableVertexAttribArray(a), e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0);
          var n = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), e.STATIC_DRAW);
          var i = e.getAttribLocation(t, "texturePos");
          e.enableVertexAttribArray(i), e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0), this.texturePosBuffer = n;
        }
      }, {
        key: "_initTextures",
        value: function value() {
          var e = this.contextGL,
              t = this.shaderProgram,
              r = this._initTexture(),
              a = e.getUniformLocation(t, "ySampler");

          e.uniform1i(a, 0), this.yTextureRef = r;

          var n = this._initTexture(),
              i = e.getUniformLocation(t, "uSampler");

          e.uniform1i(i, 1), this.uTextureRef = n;

          var o = this._initTexture(),
              u = e.getUniformLocation(t, "vSampler");

          e.uniform1i(u, 2), this.vTextureRef = o;
        }
      }, {
        key: "_initTexture",
        value: function value() {
          var e = this.contextGL,
              t = e.createTexture();
          return e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), t;
        }
      }], [{
        key: "isSupport",
        value: function value() {
          for (var e = document.createElement("canvas"), t = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], r = null, a = 0; !r && a < t.length;) {
            var n = t[a];

            try {
              r = e.getContext(n, {
                preserveDrawingBuffer: !0
              });
            } catch (i) {
              r = null;
            }

            r && "function" == typeof r.getParameter || (r = null), ++a;
          }

          return !!r;
        }
      }]), t;
    }(),
        n = a;

    exports.default = n;
  }, {}],
  "Focm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = o(require("eventemitter3")),
        t = o(require("./processor/processor")),
        i = o(require("./loader/loader")),
        r = o(require("./drawer/drawer")),
        n = o(require("./util/util"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(e) {
      return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function a(e, t) {
      if (!_instanceof(e, t)) throw new TypeError("Cannot call a class as a function");
    }

    function u(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function d(e, t, i) {
      return t && u(e.prototype, t), i && u(e, i), e;
    }

    function h(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && c(e, t);
    }

    function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function l(e) {
      var t = m();
      return function () {
        var i,
            r = y(e);

        if (t) {
          var n = y(this).constructor;
          i = Reflect.construct(r, arguments, n);
        } else i = r.apply(this, arguments);

        return p(this, i);
      };
    }

    function p(e, t) {
      return !t || "object" !== s(t) && "function" != typeof t ? f(e) : t;
    }

    function f(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function m() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function y(e) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function v(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var w = {
      created: "created",
      play: "play",
      playing: "playing",
      buffering: "buffering",
      paused: "paused",
      resumed: "resumed",
      ended: "ended",
      stopped: "stopped",
      destroyed: "destroyed"
    },
        b = 100,
        g = function (n) {
      h(s, e.default);
      var o = l(s);

      function s(e) {
        var t,
            i = e.url,
            r = void 0 === i ? "" : i,
            n = e.$container,
            u = e.hasVideo,
            d = void 0 === u || u,
            h = e.hasAudio,
            c = void 0 === h || h,
            l = e.volume,
            p = void 0 === l ? 1 : l,
            f = e.muted,
            m = void 0 !== f && f,
            y = e.autoplay,
            v = void 0 !== y && y,
            b = e.loop,
            g = void 0 !== b && b,
            k = e.isLive,
            _ = void 0 !== k && k,
            E = e.chunkSize,
            T = void 0 === E ? 262144 : E,
            A = e.preloadTime,
            S = void 0 === A ? 1e3 : A,
            P = e.bufferingTime,
            I = void 0 === P ? 3e3 : P,
            D = e.cacheSegmentCount,
            L = void 0 === D ? 128 : D,
            O = e.customLoader,
            C = void 0 === O ? null : O;

        return a(this, s), (t = o.call(this)).url = r, t.$container = n, t.width = n.width, t.height = n.height, t.hasVideo = d, t.hasAudio = c, t.vol = p, t.muted = m, t.duration = 0, t.autoplay = v, t.loop = g, t.isLive = _, t.chunkSize = T, t.preloadTime = S, t.bufferingTime = I, t.cacheSegmentCount = L, t.customLoader = C, t.timeUpdateTimer = null, t.isInitlize = !1, t.isDecodeEnd = !1, t.isEnd = !1, t.state = w.created, t.timestapmArr = [], t.autoplay && t.play(), t;
      }

      return d(s, [{
        key: "play",
        value: function value() {
          this.state == w.destroyed || this.isInitlize || (this._init4play(), this.processor.unblock(0)), this.emit("play");
        }
      }, {
        key: "clearCanvas",
        value: function value() {
          var e = this.$container.getContext("webgl");
          e.clear(e.DEPTH_BUFFER_BIT | e.COLOR_BUFFER_BIT);
        }
      }, {
        key: "pause",
        value: function value() {
          if (this.isLive) throw new Error("Live stream can't be paused,please call stop() instead.");
          this.processor && (this.state = w.paused, this.processor.pause(), this.emit("paused"));
        }
      }, {
        key: "resume",
        value: function value() {
          if (this.isLive) throw new Error("Because live stream can't be paused, so can't be resumed,please call play() instead.");
          this.processor && (this.processor.resume(), this.emit("resumed"));
        }
      }, {
        key: "volume",
        value: function value(e) {
          if (this.processor) return this.processor.volume(e);
        }
      }, {
        key: "mute",
        value: function value(e) {
          if (this.processor) return this.processor.mute(e);
        }
      }, {
        key: "stop",
        value: function value() {
          this.state = w.stopped, this.isInitlize = !1, this.timestapmArr.length = 0, clearInterval(this.timeUpdateTimer), this.processor && (this.processor.destroy(), this.processor = null), this.loader && (this.loader.removeAllListeners(), this.loader.cancel(), this.loader = null), this.emit("stopped");
        }
      }, {
        key: "destroy",
        value: function value() {
          this.stop(), this.removeAllListeners(), this.drawer && (this.drawer.destroy(), this.drawer = null), this.state = w.destroyed;
        }
      }, {
        key: "currentTime",
        value: function value(e) {
          if (null == e) {
            if (this.processor) return this.processor.getCurrentTime();
            this.processor && this.processor.setCurrentTime(e);
          }
        }
      }, {
        key: "getAvaiableDuration",
        value: function value() {
          return this.processor ? this.processor.getAvaiableDuration() : 0;
        }
      }, {
        key: "getDuration",
        value: function value() {
          return this.duration;
        }
      }, {
        key: "_init4play",
        value: function value() {
          var e = this;

          function n() {
            this.timestapmArr.length >= 3 && this.timestapmArr.shift(), this.timestapmArr.push(this.currentTime()), this.isEnd = this.currentTime() >= this.getDuration() && this.getDuration() > 0;
            var e = this.timestapmArr.length;
            this.isEnd = 3 == e && this.isDecodeEnd && this.timestapmArr[0] == this.timestapmArr[e - 1], this.isEnd && this.state != w.ended && (this.emit("ended"), this.state = w.ended), this.isEnd ? (this.emit("timeUpdate", this.getDuration()), this.loop && (this.stop(), this.play())) : this.emit("timeUpdate", this.currentTime() < 0 ? 0 : this.currentTime());
          }

          clearInterval(this.timeUpdateTimer), this.isDecodeEnd = !1, this.isEnd = !1, n.call(this), this.timeUpdateTimer = setInterval(n.bind(this), b), this.drawer = this.drawer ? this.drawer : new r.default(this.$container), this.loader = new (this.customLoader ? this.customLoader : i.default)({
            type: this.isLive ? "stream" : "chunk",
            opt: {
              url: this.url,
              chunkSize: this.chunkSize
            }
          }), this.loader.on("loadError", function (t) {
            return e.emit("loadError", t);
          }), this.loader.on("loadSuccess", function () {
            e.emit("loadSuccess");
          }), this.processor = new t.default({
            volume: this.vol,
            muted: this.muted,
            preloadTime: this.preloadTime,
            bufferingTime: this.bufferingTime,
            cacheSegmentCount: this.cacheSegmentCount,
            hasVideo: this.hasVideo,
            hasAudio: this.hasAudio
          }), this.processor.on("mediaInfo", this._onMediaInfoHandler.bind(this)), this.processor.on("frame", this._onFrameHandler.bind(this)), this.processor.on("buffering", this._onBufferingHandler.bind(this)), this.processor.on("preload", this._onPreloadHandler.bind(this)), this.processor.on("playing", this._onPlayingHandler.bind(this)), this.processor.on("decodeEnded", this._onDecodeEndHandler.bind(this)), this.processor.on("performance", function (t) {
            return e.emit("performance", t);
          }), this.isInitlize = !0;
        }
      }, {
        key: "_onMediaInfoHandler",
        value: function value(e) {
          for (var t = e.onMetaData, i = void 0 === t ? [] : t, r = 0; r < i.length; r++) {
            "duration" in i[r] ? this.duration = 1e3 * i[r].duration : "width" in i[r] ? this.width = this.$container.width = i[r].width : "height" in i[r] && (this.height = this.$container.height = i[r].height);
          }

          this.emit("mediaInfo", e);
        }
      }, {
        key: "_onFrameHandler",
        value: function value(e) {
          var t = e.width,
              i = e.height,
              r = e.data;
          this.drawer && (this.$container.width = t, this.$container.height = i, this.drawer.drawNextOutputPicture(t, i, r));
        }
      }, {
        key: "_onBufferingHandler",
        value: function value() {
          var e = this;
          this.loader && (this.state = w.buffering, this.emit("buffering"), this.loader.read().then(function (t) {
            t.length && e.processor.process(t);
          }));
        }
      }, {
        key: "_onPreloadHandler",
        value: function value() {
          var e = this;
          this.loader && this.loader.read().then(function (t) {
            t.length && e.processor.process(t);
          });
        }
      }, {
        key: "_onPlayingHandler",
        value: function value() {
          this.state != w.playing && (this.state = w.playing, this.emit("playing"));
        }
      }, {
        key: "_onDecodeEndHandler",
        value: function value() {
          this.isDecodeEnd = !0;
        }
      }], [{
        key: "isSupport",
        value: function value() {
          return !!(!/UCBrowser|Quark/.test(window.navigator.userAgent) && window.fetch && window.ReadableStream && window.Promise && window.URL && window.URL.createObjectURL && window.Blob && window.Worker && (new Audio().canPlayType("audio/mp2;").replace(/^no$/, "") || true) && (window.AudioContext || window.webkitAudioContext) && r.default.isSupport());
        }
      }, {
        key: "ready",
        value: function value(e) {
          return s.isSupport() ? new Promise(function (t, i) {
            var r = window.WebAssembly ? e.wasmUrl : e.asmUrl,
                n = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("script");
            o.onload = function () {
              t(new s(e)), s.isInited = !0;
            }, o.onerror = function (e) {
              return i(e);
            }, o.src = "".concat(r), o.type = "text/javascript", n.appendChild(o);
          }) : Promise.reject(new Error("your browser do not support WXInlinePlayer."));
        }
      }]), s;
    }();

    v(g, "isInited", !1), window.WXInlinePlayer = g;
    var k = g;
    exports.default = k;
  }, {
    "eventemitter3": "JJlS",
    "./processor/processor": "ILxu",
    "./loader/loader": "TytF",
    "./drawer/drawer": "VXbF",
    "./util/util": "ACyo"
  }]
}, {}, ["Focm"], null);