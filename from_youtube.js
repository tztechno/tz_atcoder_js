(function () {
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length
        ? { done: !1, value: a[b++] }
        : { done: !0 };
    };
  }

  var l =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };

  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof n && n,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }

  var p = ba(this);

  function r(a, b) {
    if (b)
      a: {
        var c = p;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        null != b &&
          b != d &&
          l(c, a, { configurable: !0, writable: !0, value: b });
      }
  }

  r("Symbol", function (a) {
    function b(f) {
      if (this instanceof b)
        throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, h) {
      this.g = f;
      l(this, "description", { configurable: !0, writable: !0, value: h });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_",
      e = 0;
    return b;
  });

  r("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = p[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        l(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ca(aa(this));
          },
        });
    }
    return a;
  });

  function ca(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }

  function u(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }

  r("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return u(this, function (b, c) {
            return [b, c];
          });
        };
  });

  r("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return u(this, function (b) {
            return b;
          });
        };
  });
})();
