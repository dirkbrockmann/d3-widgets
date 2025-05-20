import { scaleLinear as B, select as v, format as kt, pointer as le, drag as ce, max as k, range as he } from "d3";
var Kt = typeof global == "object" && global && global.Object === Object && global, pe = typeof self == "object" && self && self.Object === Object && self, A = Kt || pe || Function("return this")(), x = A.Symbol, Xt = Object.prototype, de = Xt.hasOwnProperty, ye = Xt.toString, G = x ? x.toStringTag : void 0;
function ge(t) {
  var e = de.call(t, G), n = t[G];
  try {
    t[G] = void 0;
    var r = !0;
  } catch {
  }
  var o = ye.call(t);
  return r && (e ? t[G] = n : delete t[G]), o;
}
var _e = Object.prototype, be = _e.toString;
function me(t) {
  return be.call(t);
}
var ve = "[object Null]", Te = "[object Undefined]", Tt = x ? x.toStringTag : void 0;
function D(t) {
  return t == null ? t === void 0 ? Te : ve : Tt && Tt in Object(t) ? ge(t) : me(t);
}
function j(t) {
  return t != null && typeof t == "object";
}
var we = "[object Symbol]";
function Z(t) {
  return typeof t == "symbol" || j(t) && D(t) == we;
}
function Zt(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; )
    o[n] = e(t[n], n, t);
  return o;
}
var $ = Array.isArray, wt = x ? x.prototype : void 0, $t = wt ? wt.toString : void 0;
function Yt(t) {
  if (typeof t == "string")
    return t;
  if ($(t))
    return Zt(t, Yt) + "";
  if (Z(t))
    return $t ? $t.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var $e = /\s/;
function Me(t) {
  for (var e = t.length; e-- && $e.test(t.charAt(e)); )
    ;
  return e;
}
var xe = /^\s+/;
function Pe(t) {
  return t && t.slice(0, Me(t) + 1).replace(xe, "");
}
function N(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Mt = NaN, Ae = /^[-+]0x[0-9a-f]+$/i, Oe = /^0b[01]+$/i, ze = /^0o[0-7]+$/i, Se = parseInt;
function Ee(t) {
  if (typeof t == "number")
    return t;
  if (Z(t))
    return Mt;
  if (N(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = N(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Pe(t);
  var n = Oe.test(t);
  return n || ze.test(t) ? Se(t.slice(2), n ? 2 : 8) : Ae.test(t) ? Mt : +t;
}
var Ie = 1 / 0, Ce = 17976931348623157e292;
function tt(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Ee(t), t === Ie || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Ce;
  }
  return t === t ? t : 0;
}
function Re(t) {
  return t;
}
var Le = "[object AsyncFunction]", je = "[object Function]", Ne = "[object GeneratorFunction]", De = "[object Proxy]";
function Qt(t) {
  if (!N(t))
    return !1;
  var e = D(t);
  return e == je || e == Ne || e == Le || e == De;
}
var et = A["__core-js_shared__"], xt = function() {
  var t = /[^.]+$/.exec(et && et.keys && et.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Fe(t) {
  return !!xt && xt in t;
}
var Ge = Function.prototype, Ue = Ge.toString;
function L(t) {
  if (t != null) {
    try {
      return Ue.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Be = /[\\^$.*+?()[\]{}|]/g, He = /^\[object .+?Constructor\]$/, qe = Function.prototype, ke = Object.prototype, Ke = qe.toString, Xe = ke.hasOwnProperty, Ze = RegExp(
  "^" + Ke.call(Xe).replace(Be, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ye(t) {
  if (!N(t) || Fe(t))
    return !1;
  var e = Qt(t) ? Ze : He;
  return e.test(L(t));
}
function Qe(t, e) {
  return t == null ? void 0 : t[e];
}
function F(t, e) {
  var n = Qe(t, e);
  return Ye(n) ? n : void 0;
}
var it = F(A, "WeakMap"), Je = 9007199254740991, We = /^(?:0|[1-9]\d*)$/;
function ht(t, e) {
  var n = typeof t;
  return e = e ?? Je, !!e && (n == "number" || n != "symbol" && We.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function pt(t, e) {
  return t === e || t !== t && e !== e;
}
var Ve = 9007199254740991;
function dt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ve;
}
function Y(t) {
  return t != null && dt(t.length) && !Qt(t);
}
function tn(t, e, n) {
  if (!N(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Y(n) && ht(e, n.length) : r == "string" && e in n) ? pt(n[e], t) : !1;
}
var en = Object.prototype;
function nn(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || en;
  return t === n;
}
function rn(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var on = "[object Arguments]";
function Pt(t) {
  return j(t) && D(t) == on;
}
var Jt = Object.prototype, sn = Jt.hasOwnProperty, an = Jt.propertyIsEnumerable, yt = Pt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Pt : function(t) {
  return j(t) && sn.call(t, "callee") && !an.call(t, "callee");
};
function un() {
  return !1;
}
var Wt = typeof exports == "object" && exports && !exports.nodeType && exports, At = Wt && typeof module == "object" && module && !module.nodeType && module, fn = At && At.exports === Wt, Ot = fn ? A.Buffer : void 0, ln = Ot ? Ot.isBuffer : void 0, ot = ln || un, cn = "[object Arguments]", hn = "[object Array]", pn = "[object Boolean]", dn = "[object Date]", yn = "[object Error]", gn = "[object Function]", _n = "[object Map]", bn = "[object Number]", mn = "[object Object]", vn = "[object RegExp]", Tn = "[object Set]", wn = "[object String]", $n = "[object WeakMap]", Mn = "[object ArrayBuffer]", xn = "[object DataView]", Pn = "[object Float32Array]", An = "[object Float64Array]", On = "[object Int8Array]", zn = "[object Int16Array]", Sn = "[object Int32Array]", En = "[object Uint8Array]", In = "[object Uint8ClampedArray]", Cn = "[object Uint16Array]", Rn = "[object Uint32Array]", m = {};
m[Pn] = m[An] = m[On] = m[zn] = m[Sn] = m[En] = m[In] = m[Cn] = m[Rn] = !0;
m[cn] = m[hn] = m[Mn] = m[pn] = m[xn] = m[dn] = m[yn] = m[gn] = m[_n] = m[bn] = m[mn] = m[vn] = m[Tn] = m[wn] = m[$n] = !1;
function Ln(t) {
  return j(t) && dt(t.length) && !!m[D(t)];
}
function jn(t) {
  return function(e) {
    return t(e);
  };
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, U = Vt && typeof module == "object" && module && !module.nodeType && module, Nn = U && U.exports === Vt, nt = Nn && Kt.process, zt = function() {
  try {
    var t = U && U.require && U.require("util").types;
    return t || nt && nt.binding && nt.binding("util");
  } catch {
  }
}(), St = zt && zt.isTypedArray, te = St ? jn(St) : Ln, Dn = Object.prototype, Fn = Dn.hasOwnProperty;
function Gn(t, e) {
  var n = $(t), r = !n && yt(t), o = !n && !r && ot(t), i = !n && !r && !o && te(t), s = n || r || o || i, a = s ? rn(t.length, String) : [], f = a.length;
  for (var p in t)
    Fn.call(t, p) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    ht(p, f))) && a.push(p);
  return a;
}
function Un(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Bn = Un(Object.keys, Object), Hn = Object.prototype, qn = Hn.hasOwnProperty;
function kn(t) {
  if (!nn(t))
    return Bn(t);
  var e = [];
  for (var n in Object(t))
    qn.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function gt(t) {
  return Y(t) ? Gn(t) : kn(t);
}
var Kn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xn = /^\w*$/;
function _t(t, e) {
  if ($(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Z(t) ? !0 : Xn.test(t) || !Kn.test(t) || e != null && t in Object(e);
}
var H = F(Object, "create");
function Zn() {
  this.__data__ = H ? H(null) : {}, this.size = 0;
}
function Yn(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Qn = "__lodash_hash_undefined__", Jn = Object.prototype, Wn = Jn.hasOwnProperty;
function Vn(t) {
  var e = this.__data__;
  if (H) {
    var n = e[t];
    return n === Qn ? void 0 : n;
  }
  return Wn.call(e, t) ? e[t] : void 0;
}
var tr = Object.prototype, er = tr.hasOwnProperty;
function nr(t) {
  var e = this.__data__;
  return H ? e[t] !== void 0 : er.call(e, t);
}
var rr = "__lodash_hash_undefined__";
function ir(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = H && e === void 0 ? rr : e, this;
}
function R(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
R.prototype.clear = Zn;
R.prototype.delete = Yn;
R.prototype.get = Vn;
R.prototype.has = nr;
R.prototype.set = ir;
function or() {
  this.__data__ = [], this.size = 0;
}
function Q(t, e) {
  for (var n = t.length; n--; )
    if (pt(t[n][0], e))
      return n;
  return -1;
}
var sr = Array.prototype, ar = sr.splice;
function ur(t) {
  var e = this.__data__, n = Q(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : ar.call(e, n, 1), --this.size, !0;
}
function fr(t) {
  var e = this.__data__, n = Q(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function lr(t) {
  return Q(this.__data__, t) > -1;
}
function cr(t, e) {
  var n = this.__data__, r = Q(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function O(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
O.prototype.clear = or;
O.prototype.delete = ur;
O.prototype.get = fr;
O.prototype.has = lr;
O.prototype.set = cr;
var q = F(A, "Map");
function hr() {
  this.size = 0, this.__data__ = {
    hash: new R(),
    map: new (q || O)(),
    string: new R()
  };
}
function pr(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function J(t, e) {
  var n = t.__data__;
  return pr(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function dr(t) {
  var e = J(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function yr(t) {
  return J(this, t).get(t);
}
function gr(t) {
  return J(this, t).has(t);
}
function _r(t, e) {
  var n = J(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function z(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
z.prototype.clear = hr;
z.prototype.delete = dr;
z.prototype.get = yr;
z.prototype.has = gr;
z.prototype.set = _r;
var br = "Expected a function";
function bt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(br);
  var n = function() {
    var r = arguments, o = e ? e.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var s = t.apply(this, r);
    return n.cache = i.set(o, s) || i, s;
  };
  return n.cache = new (bt.Cache || z)(), n;
}
bt.Cache = z;
var mr = 500;
function vr(t) {
  var e = bt(t, function(r) {
    return n.size === mr && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Tr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wr = /\\(\\)?/g, $r = vr(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Tr, function(n, r, o, i) {
    e.push(o ? i.replace(wr, "$1") : r || n);
  }), e;
});
function Mr(t) {
  return t == null ? "" : Yt(t);
}
function ee(t, e) {
  return $(t) ? t : _t(t, e) ? [t] : $r(Mr(t));
}
function W(t) {
  if (typeof t == "string" || Z(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function ne(t, e) {
  e = ee(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[W(e[n++])];
  return n && n == r ? t : void 0;
}
function xr(t, e, n) {
  var r = t == null ? void 0 : ne(t, e);
  return r === void 0 ? n : r;
}
function re(t, e) {
  for (var n = -1, r = e.length, o = t.length; ++n < r; )
    t[o + n] = e[n];
  return t;
}
var Et = x ? x.isConcatSpreadable : void 0;
function Pr(t) {
  return $(t) || yt(t) || !!(Et && t && t[Et]);
}
function Ar(t, e, n, r, o) {
  var i = -1, s = t.length;
  for (n || (n = Pr), o || (o = []); ++i < s; ) {
    var a = t[i];
    n(a) ? re(o, a) : o[o.length] = a;
  }
  return o;
}
function Or(t) {
  var e = t == null ? 0 : t.length;
  return e ? Ar(t) : [];
}
function zr() {
  this.__data__ = new O(), this.size = 0;
}
function Sr(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Er(t) {
  return this.__data__.get(t);
}
function Ir(t) {
  return this.__data__.has(t);
}
var Cr = 200;
function Rr(t, e) {
  var n = this.__data__;
  if (n instanceof O) {
    var r = n.__data__;
    if (!q || r.length < Cr - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new z(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function P(t) {
  var e = this.__data__ = new O(t);
  this.size = e.size;
}
P.prototype.clear = zr;
P.prototype.delete = Sr;
P.prototype.get = Er;
P.prototype.has = Ir;
P.prototype.set = Rr;
function Lr(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, o = 0, i = []; ++n < r; ) {
    var s = t[n];
    e(s, n, t) && (i[o++] = s);
  }
  return i;
}
function jr() {
  return [];
}
var Nr = Object.prototype, Dr = Nr.propertyIsEnumerable, It = Object.getOwnPropertySymbols, Fr = It ? function(t) {
  return t == null ? [] : (t = Object(t), Lr(It(t), function(e) {
    return Dr.call(t, e);
  }));
} : jr;
function Gr(t, e, n) {
  var r = e(t);
  return $(t) ? r : re(r, n(t));
}
function Ct(t) {
  return Gr(t, gt, Fr);
}
var st = F(A, "DataView"), at = F(A, "Promise"), ut = F(A, "Set"), Rt = "[object Map]", Ur = "[object Object]", Lt = "[object Promise]", jt = "[object Set]", Nt = "[object WeakMap]", Dt = "[object DataView]", Br = L(st), Hr = L(q), qr = L(at), kr = L(ut), Kr = L(it), S = D;
(st && S(new st(new ArrayBuffer(1))) != Dt || q && S(new q()) != Rt || at && S(at.resolve()) != Lt || ut && S(new ut()) != jt || it && S(new it()) != Nt) && (S = function(t) {
  var e = D(t), n = e == Ur ? t.constructor : void 0, r = n ? L(n) : "";
  if (r)
    switch (r) {
      case Br:
        return Dt;
      case Hr:
        return Rt;
      case qr:
        return Lt;
      case kr:
        return jt;
      case Kr:
        return Nt;
    }
  return e;
});
var Ft = A.Uint8Array, Xr = "__lodash_hash_undefined__";
function Zr(t) {
  return this.__data__.set(t, Xr), this;
}
function Yr(t) {
  return this.__data__.has(t);
}
function X(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new z(); ++e < n; )
    this.add(t[e]);
}
X.prototype.add = X.prototype.push = Zr;
X.prototype.has = Yr;
function Qr(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Jr(t, e) {
  return t.has(e);
}
var Wr = 1, Vr = 2;
function ie(t, e, n, r, o, i) {
  var s = n & Wr, a = t.length, f = e.length;
  if (a != f && !(s && f > a))
    return !1;
  var p = i.get(t), g = i.get(e);
  if (p && g)
    return p == e && g == t;
  var u = -1, d = !0, _ = n & Vr ? new X() : void 0;
  for (i.set(t, e), i.set(e, t); ++u < a; ) {
    var l = t[u], c = e[u];
    if (r)
      var b = s ? r(c, l, u, e, t, i) : r(l, c, u, t, e, i);
    if (b !== void 0) {
      if (b)
        continue;
      d = !1;
      break;
    }
    if (_) {
      if (!Qr(e, function(h, T) {
        if (!Jr(_, T) && (l === h || o(l, h, n, r, i)))
          return _.push(T);
      })) {
        d = !1;
        break;
      }
    } else if (!(l === c || o(l, c, n, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), d;
}
function ti(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, o) {
    n[++e] = [o, r];
  }), n;
}
function ei(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var ni = 1, ri = 2, ii = "[object Boolean]", oi = "[object Date]", si = "[object Error]", ai = "[object Map]", ui = "[object Number]", fi = "[object RegExp]", li = "[object Set]", ci = "[object String]", hi = "[object Symbol]", pi = "[object ArrayBuffer]", di = "[object DataView]", Gt = x ? x.prototype : void 0, rt = Gt ? Gt.valueOf : void 0;
function yi(t, e, n, r, o, i, s) {
  switch (n) {
    case di:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case pi:
      return !(t.byteLength != e.byteLength || !i(new Ft(t), new Ft(e)));
    case ii:
    case oi:
    case ui:
      return pt(+t, +e);
    case si:
      return t.name == e.name && t.message == e.message;
    case fi:
    case ci:
      return t == e + "";
    case ai:
      var a = ti;
    case li:
      var f = r & ni;
      if (a || (a = ei), t.size != e.size && !f)
        return !1;
      var p = s.get(t);
      if (p)
        return p == e;
      r |= ri, s.set(t, e);
      var g = ie(a(t), a(e), r, o, i, s);
      return s.delete(t), g;
    case hi:
      if (rt)
        return rt.call(t) == rt.call(e);
  }
  return !1;
}
var gi = 1, _i = Object.prototype, bi = _i.hasOwnProperty;
function mi(t, e, n, r, o, i) {
  var s = n & gi, a = Ct(t), f = a.length, p = Ct(e), g = p.length;
  if (f != g && !s)
    return !1;
  for (var u = f; u--; ) {
    var d = a[u];
    if (!(s ? d in e : bi.call(e, d)))
      return !1;
  }
  var _ = i.get(t), l = i.get(e);
  if (_ && l)
    return _ == e && l == t;
  var c = !0;
  i.set(t, e), i.set(e, t);
  for (var b = s; ++u < f; ) {
    d = a[u];
    var h = t[d], T = e[d];
    if (r)
      var E = s ? r(T, h, d, e, t, i) : r(h, T, d, t, e, i);
    if (!(E === void 0 ? h === T || o(h, T, n, r, i) : E)) {
      c = !1;
      break;
    }
    b || (b = d == "constructor");
  }
  if (c && !b) {
    var w = t.constructor, I = e.constructor;
    w != I && "constructor" in t && "constructor" in e && !(typeof w == "function" && w instanceof w && typeof I == "function" && I instanceof I) && (c = !1);
  }
  return i.delete(t), i.delete(e), c;
}
var vi = 1, Ut = "[object Arguments]", Bt = "[object Array]", K = "[object Object]", Ti = Object.prototype, Ht = Ti.hasOwnProperty;
function wi(t, e, n, r, o, i) {
  var s = $(t), a = $(e), f = s ? Bt : S(t), p = a ? Bt : S(e);
  f = f == Ut ? K : f, p = p == Ut ? K : p;
  var g = f == K, u = p == K, d = f == p;
  if (d && ot(t)) {
    if (!ot(e))
      return !1;
    s = !0, g = !1;
  }
  if (d && !g)
    return i || (i = new P()), s || te(t) ? ie(t, e, n, r, o, i) : yi(t, e, f, n, r, o, i);
  if (!(n & vi)) {
    var _ = g && Ht.call(t, "__wrapped__"), l = u && Ht.call(e, "__wrapped__");
    if (_ || l) {
      var c = _ ? t.value() : t, b = l ? e.value() : e;
      return i || (i = new P()), o(c, b, n, r, i);
    }
  }
  return d ? (i || (i = new P()), mi(t, e, n, r, o, i)) : !1;
}
function mt(t, e, n, r, o) {
  return t === e ? !0 : t == null || e == null || !j(t) && !j(e) ? t !== t && e !== e : wi(t, e, n, r, mt, o);
}
var $i = 1, Mi = 2;
function xi(t, e, n, r) {
  var o = n.length, i = o;
  if (t == null)
    return !i;
  for (t = Object(t); o--; ) {
    var s = n[o];
    if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
      return !1;
  }
  for (; ++o < i; ) {
    s = n[o];
    var a = s[0], f = t[a], p = s[1];
    if (s[2]) {
      if (f === void 0 && !(a in t))
        return !1;
    } else {
      var g = new P(), u;
      if (!(u === void 0 ? mt(p, f, $i | Mi, r, g) : u))
        return !1;
    }
  }
  return !0;
}
function oe(t) {
  return t === t && !N(t);
}
function Pi(t) {
  for (var e = gt(t), n = e.length; n--; ) {
    var r = e[n], o = t[r];
    e[n] = [r, o, oe(o)];
  }
  return e;
}
function se(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Ai(t) {
  var e = Pi(t);
  return e.length == 1 && e[0][2] ? se(e[0][0], e[0][1]) : function(n) {
    return n === t || xi(n, t, e);
  };
}
function Oi(t, e) {
  return t != null && e in Object(t);
}
function zi(t, e, n) {
  e = ee(e, t);
  for (var r = -1, o = e.length, i = !1; ++r < o; ) {
    var s = W(e[r]);
    if (!(i = t != null && n(t, s)))
      break;
    t = t[s];
  }
  return i || ++r != o ? i : (o = t == null ? 0 : t.length, !!o && dt(o) && ht(s, o) && ($(t) || yt(t)));
}
function Si(t, e) {
  return t != null && zi(t, e, Oi);
}
var Ei = 1, Ii = 2;
function Ci(t, e) {
  return _t(t) && oe(e) ? se(W(t), e) : function(n) {
    var r = xr(n, t);
    return r === void 0 && r === e ? Si(n, t) : mt(e, r, Ei | Ii);
  };
}
function Ri(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Li(t) {
  return function(e) {
    return ne(e, t);
  };
}
function ji(t) {
  return _t(t) ? Ri(W(t)) : Li(t);
}
function Ni(t) {
  return typeof t == "function" ? t : t == null ? Re : typeof t == "object" ? $(t) ? Ci(t[0], t[1]) : Ai(t) : ji(t);
}
function Di(t) {
  return function(e, n, r) {
    for (var o = -1, i = Object(e), s = r(e), a = s.length; a--; ) {
      var f = s[++o];
      if (n(i[f], f, i) === !1)
        break;
    }
    return e;
  };
}
var Fi = Di();
function Gi(t, e) {
  return t && Fi(t, e, gt);
}
function Ui(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Y(n))
      return t(n, r);
    for (var o = n.length, i = -1, s = Object(n); ++i < o && r(s[i], i, s) !== !1; )
      ;
    return n;
  };
}
var Bi = Ui(Gi);
function Hi(t, e) {
  var n = -1, r = Y(t) ? Array(t.length) : [];
  return Bi(t, function(o, i, s) {
    r[++n] = e(o, i, s);
  }), r;
}
function qt(t, e) {
  var n = $(t) ? Zt : Hi;
  return n(t, Ni(e));
}
var qi = Math.ceil, ki = Math.max;
function Ki(t, e, n, r) {
  for (var o = -1, i = ki(qi((e - t) / (n || 1)), 0), s = Array(i); i--; )
    s[++o] = t, t += n;
  return s;
}
function Xi(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && tn(e, n, r) && (n = r = void 0), e = tt(e), n === void 0 ? (n = e, e = 0) : n = tt(n), r = r === void 0 ? e < n ? 1 : -1 : tt(r), Ki(e, n, r);
  };
}
var Zi = Xi();
const Po = (t, e, n = 12, r = 12) => {
  const o = B().domain([0, n]).range([0, t]), i = B().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Zi((n + 1) * (r + 1)).map(function(f) {
        return { m: f % (n + 1), n: Math.floor(f / (n + 1)), x: o(f % (n + 1)), y: i(Math.floor(f / (n + 1))) };
      });
    },
    position: function(f, p) {
      typeof f == "number" && (f = [f]), typeof p == "number" && (p = [p]);
      const g = Or(qt(p, function(u) {
        return qt(
          f,
          function(d) {
            return { x: o(d), y: i(u) };
          }
        );
      }));
      return g.length == 1 ? g[0] : g;
    }
  };
}, Yi = "ZsjJN__widget", Qi = "Oqi6w__title", Ji = "SY5DA__label", Wi = "ZVyCH__lit", Vi = "_3sIQE__button", to = "M4bkH__symbol", eo = "wv92E__radio", no = "JaGYU__radiobutton", ro = "I-cbw__selected", io = "OB8QK__toggle", oo = "pwO-4__slider", so = "rgo2U__track", ao = "gK-a9__track_overlay", uo = "UpjNp__handle", y = {
  widget: Yi,
  title: Qi,
  label: Ji,
  lit: Wi,
  button: Vi,
  symbol: to,
  radio: eo,
  radiobutton: no,
  selected: ro,
  toggle: io,
  slider: oo,
  track: so,
  track_overlay: ao,
  handle: uo
}, V = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let o = 0; o < 10; ++o)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, vt = (t, e, n) => {
  var r, o, i, s;
  switch (n) {
    case "top":
      r = 0, o = -e / 2 - 5, i = "middle", s = "bottom";
      break;
    case "bottom":
      r = 0, o = e / 2 + 5, i = "middle", s = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, o = 0, i = "end", s = "middle";
      break;
    case "right":
      r = t / 2 + 5, o = 0, i = "start", s = "middle";
      break;
    default:
      r = 0, o = e / 2 + 5, i = "middle", s = "hanging";
  }
  return { x: r, y: o, anchor: i, valign: s };
}, ft = Math.PI, lt = 2 * ft, C = 1e-6, fo = lt - C;
function ae(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function lo(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return ae;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let o = 1, i = r.length; o < i; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class ue {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? ae : lo(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, o) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(e, n, r, o, i, s) {
    this._append`C${+e},${+n},${+r},${+o},${this._x1 = +i},${this._y1 = +s}`;
  }
  arcTo(e, n, r, o, i) {
    if (e = +e, n = +n, r = +r, o = +o, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let s = this._x1, a = this._y1, f = r - e, p = o - n, g = s - e, u = a - n, d = g * g + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (d > C) if (!(Math.abs(u * f - p * g) > C) || !i)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let _ = r - s, l = o - a, c = f * f + p * p, b = _ * _ + l * l, h = Math.sqrt(c), T = Math.sqrt(d), E = i * Math.tan((ft - Math.acos((c + d - b) / (2 * h * T))) / 2), w = E / T, I = E / h;
      Math.abs(w - 1) > C && this._append`L${e + w * g},${n + w * u}`, this._append`A${i},${i},0,0,${+(u * _ > g * l)},${this._x1 = e + I * f},${this._y1 = n + I * p}`;
    }
  }
  arc(e, n, r, o, i, s) {
    if (e = +e, n = +n, r = +r, s = !!s, r < 0) throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(o), f = r * Math.sin(o), p = e + a, g = n + f, u = 1 ^ s, d = s ? o - i : i - o;
    this._x1 === null ? this._append`M${p},${g}` : (Math.abs(this._x1 - p) > C || Math.abs(this._y1 - g) > C) && this._append`L${p},${g}`, r && (d < 0 && (d = d % lt + lt), d > fo ? this._append`A${r},${r},0,1,${u},${e - a},${n - f}A${r},${r},0,1,${u},${this._x1 = p},${this._y1 = g}` : d > C && this._append`A${r},${r},0,${+(d >= ft)},${u},${this._x1 = e + r * Math.cos(i)},${this._y1 = n + r * Math.sin(i)}`);
  }
  rect(e, n, r, o) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function M() {
  return new ue();
}
M.prototype = ue.prototype;
const co = (t = 1) => {
  const e = M();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, ho = (t = 1) => {
  const e = M(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, po = (t = 1) => {
  const e = M();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, yo = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = M();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, go = (t = 1) => {
  const e = M(), n = Math.PI / 2.5, r = n / 2, o = 2 * Math.PI - n / 2, i = 0.5, s = 0.6, a = 0.6, f = [t * (1 - i / 2) * Math.cos(o), t * (1 - i / 2) * Math.sin(o)], p = [t * a * Math.cos(o + Math.PI / 2), t * a * Math.sin(o + Math.PI / 2)];
  return e.moveTo(t * Math.cos(o), t * Math.sin(o)), e.arc(0, 0, t, o, r, !0), e.lineTo(t * (1 - i) * Math.cos(r), t * (1 - i) * Math.sin(r)), e.arc(0, 0, t * (1 - i), r, o, !1), e.lineTo(t * (1 - s - i / 2) * Math.cos(o), t * (1 - s - i / 2) * Math.sin(o)), e.lineTo(f[0] + p[0], f[1] + p[1]), e.lineTo(t * (1 + s - i / 2) * Math.cos(o), t * (1 + s - i / 2) * Math.sin(o)), e.closePath(), e.toString();
}, _o = (t = 1) => {
  const e = M(), n = Math.PI / 10, r = t / 2, o = Math.PI - n, i = n, s = -n, a = Math.PI + n;
  return e.arc(0, 0, r, a, s), e.lineTo(t, r * Math.sin(a)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(a)), e.closePath(), e.arc(0, 0, r, i, o), e.lineTo(-t, r * Math.sin(o)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(o)), e.closePath(), e.toString();
}, bo = (t = 1) => {
  const e = M(), n = Math.PI / 2.5, r = n / 2 + Math.PI, o = 2 * Math.PI - n / 2 + Math.PI, i = 0.5, s = 0.6, a = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, o, !1), e.lineTo(t * (1 - i) * Math.cos(o), t * (1 - i) * Math.sin(o)), e.arc(0, 0, t * (1 - i), o, r, !0), e.lineTo(t * (1 - s - i / 2) * Math.cos(r), t * (1 - s - i / 2) * Math.sin(r));
  var f = [t * (1 - i / 2) * Math.cos(r), t * (1 - i / 2) * Math.sin(r)], p = [t * a * Math.cos(r + Math.PI / 2), t * a * Math.sin(r + Math.PI / 2)];
  return e.lineTo(f[0] + p[0], f[1] + p[1]), e.lineTo(t * (1 + s - i / 2) * Math.cos(r), t * (1 + s - i / 2) * Math.sin(r)), e.closePath(), e.toString();
}, mo = (t = 1) => {
  var e = M(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, vo = (t = 1) => {
  const e = M(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, ct = (t) => {
  switch (t) {
    case "play":
      return co;
    case "forward":
      return ho;
    case "back":
      return po;
    case "pause":
      return yo;
    case "reload":
      return go;
    case "capture":
      return _o;
    case "rewind":
      return bo;
    case "stop":
      return mo;
    case "push":
      return vo;
  }
}, Ao = () => {
  const t = "button";
  var e = V(), n = 50, r = 0.3, o = "round", i = { x: 0, y: 0 }, s = null, a = "bottom", f = null, p = function(l) {
  }, g = ["play"], u = 0;
  return {
    type: t,
    id: function(l) {
      return typeof l > "u" ? e : (e = l, this);
    },
    size: function(l) {
      return typeof l > "u" ? n : (n = l, this);
    },
    symbolsize: function(l) {
      return typeof l > "u" ? r : (r = l, this);
    },
    shape: function(l) {
      return typeof l > "u" ? o : (o = l, this);
    },
    position: function(l) {
      return typeof l > "u" ? i : (i = l, this);
    },
    x: function(l) {
      return typeof l > "u" ? i.x : (i.x = l, this);
    },
    y: function(l) {
      return typeof l > "u" ? i.y : (i.y = l, this);
    },
    label: function(l) {
      return typeof l > "u" ? s : (s = l, this);
    },
    labelposition: function(l) {
      return typeof l > "u" ? a : (a = l, this);
    },
    fontsize: function(l) {
      return typeof l > "u" ? f : (f = l, this);
    },
    update: function(l) {
      if (typeof l == "function")
        return p = l, this;
      p(l);
    },
    actions: function(l) {
      return typeof l > "u" ? g : (g = l, this);
    },
    value: function(l) {
      return typeof l > "u" ? u : (u = l, this);
    },
    click: function() {
      u = (u + 1) % g.length, p(), v(this.parentNode).select("." + y.symbol).attr("d", ct(g[u])(r * n));
    },
    press: function(l) {
      u = (u + 1) % g.length, p(), l.select("#button_" + e).select("." + y.symbol).attr("d", ct(g[u])(r * n));
    }
  };
}, Oo = () => {
  const t = "slider", e = kt(".3f");
  var n = V(), r = 100, o = 8, i = 10, s = !1, a = { x: 0, y: 0 }, f = "top-left", p = null, g = function(h) {
  }, u = function(h) {
  }, d = [0, 1], _ = 0, l = null, c = B().domain(d).range([0, r]).clamp(!0);
  const b = function(h, T, E = d) {
    const w = h.select("#slider_" + n);
    c.domain(E), _ = T, w.selectAll("." + y.handle).transition().attr("cx", c(T)), s && w.select("." + y.label).text(l + " = " + e(_)), g(), u();
  };
  return {
    type: t,
    scale: c,
    id: function(h) {
      return typeof h > "u" ? n : (n = h, this);
    },
    label: function(h) {
      return typeof h > "u" ? l : (l = h, this);
    },
    size: function(h) {
      return typeof h > "u" ? r : (r = h, this);
    },
    girth: function(h) {
      return typeof h > "u" ? o : (o = h, this);
    },
    knob: function(h) {
      return typeof h > "u" ? i : (i = h, this);
    },
    show: function(h) {
      return typeof h > "u" ? s : (s = h, this);
    },
    position: function(h) {
      return typeof h > "u" ? a : (a = h, this);
    },
    x: function(h) {
      return typeof h > "u" ? a.x : (a.x = h, this);
    },
    y: function(h) {
      return typeof h > "u" ? a.y : (a.y = h, this);
    },
    labelposition: function(h) {
      return typeof h > "u" ? f : (f = h, this);
    },
    fontsize: function(h) {
      return typeof h > "u" ? p : (p = h, this);
    },
    update: function(h) {
      if (typeof h == "function")
        return g = h, this;
      g(h);
    },
    update_end: function(h) {
      if (typeof h == "function")
        return u = h, this;
      u(h);
    },
    range: function(h) {
      return typeof h > "u" ? d : (d = h, this);
    },
    value: function(h) {
      return typeof h > "u" ? _ : (_ = h, this);
    },
    reset: b,
    click: b
  };
}, zo = () => {
  const t = "toggle";
  var e = V(), n = 10, r = { x: 0, y: 0 }, o = null, i = "top", s = null, a = function(u) {
  }, f = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? s : (s = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return a = u, this;
      a(u);
    },
    value: function(u) {
      return typeof u > "u" ? f : (f = u, this);
    },
    click: function() {
      f = !f;
      const u = v(this.parentNode);
      u.select("." + y.handle).transition().attr("cx", f ? 2 * n : 0), u.classed(y.selected, f), a();
    },
    reset: function(u, d) {
      f = d;
      const _ = u.select("#toggle_" + e);
      _.selectAll("." + y.handle).transition().attr("cx", f ? 2 * n : 0), _.classed(y.selected, f), a();
    }
  };
}, So = () => {
  const t = "radio";
  var e = V(), n = 100, r = 20, o = 0.3, i = "round", s = "vertical", a = { x: 0, y: 0 }, f = "right", p = null, g = function(c) {
  }, u = [], d = 0;
  return {
    type: t,
    id: function(c) {
      return typeof c > "u" ? e : (e = c, this);
    },
    size: function(c) {
      return typeof c > "u" ? n : (n = c, this);
    },
    buttonsize: function(c) {
      return typeof c > "u" ? r : (r = c, this);
    },
    buttonpadding: function(c) {
      return typeof c > "u" ? o : (o = c, this);
    },
    orientation: function(c) {
      return typeof c > "u" ? s : (s = c, this);
    },
    shape: function(c) {
      return typeof c > "u" ? i : (i = c, this);
    },
    position: function(c) {
      return typeof c > "u" ? a : (a = c, this);
    },
    x: function(c) {
      return typeof c > "u" ? a.x : (a.x = c, this);
    },
    y: function(c) {
      return typeof c > "u" ? a.y : (a.y = c, this);
    },
    labelposition: function(c) {
      return typeof c > "u" ? f : (f = c, this);
    },
    fontsize: function(c) {
      return typeof c > "u" ? p : (p = c, this);
    },
    update: function(c) {
      if (typeof c == "function")
        return g = c, this;
      g(c);
    },
    choices: function(c) {
      return typeof c > "u" ? u : (u = c, this);
    },
    value: function(c) {
      return typeof c > "u" ? d : (d = c, this);
    },
    click: function(c, b) {
      d = b, v(this.parentNode).selectAll("." + y.symbol).classed(y.selected, (h) => h == d), g();
    },
    reset: function(c, b) {
      d = b, c.select("#radio_" + e).selectAll("." + y.symbol).classed(y.selected, (h) => h == d), g();
    }
  };
}, To = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), o = t.labelposition(), i = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = v(i).attr("class", y.widget + " " + y.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var a;
  if (t.shape() == "rect" ? a = s.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : a = s.append("circle").attr("r", t.size() / 2), a.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    v(this).classed(y.lit, !0), v(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    v(this).classed(y.lit, !1), v(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), s.append("path").attr("d", ct(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const f = vt(t.size(), t.size(), o);
    s.append("text").text(r).attr("class", y.label).style("text-anchor", f.anchor).style("font-size", t.fontsize()).style("alignment-baseline", f.valign).attr("transform", "translate(" + f.x + "," + f.y + ")");
  }
  return i;
}, fe = (t, e) => {
  const n = M();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, wo = (t, e) => {
  const n = kt(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const o = t.range, i = t.size();
  t.label();
  const s = t.scale;
  var a;
  const f = document.createElementNS("http://www.w3.org/2000/svg", "g");
  a = v(f).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), s.domain(o()).range([0, i]).clamp(!0);
  const p = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  a.append("path").attr("d", fe(t.size(), t.girth())).attr("class", y.track), a.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", s(t.value())), a.append("rect").attr("width", t.size() + 2 * p).attr("height", 2 * p).attr("transform", "translate(" + -p + "," + -p + ")").attr("class", y.track_overlay).on("click", function(l) {
    const c = le(l, this)[0];
    t.value(s.invert(c)), t.update(), t.update_end(), a.selectAll("." + y.handle).attr("cx", s(t.value())), t.show() && a.select("." + y.label).text(t.label() + " = " + n(t.value()));
  }).call(
    ce().on("drag", function(l) {
      t.value(s.invert(l.x)), t.update(), a.selectAll("." + y.handle).attr("cx", s(t.value())), t.show() && a.select("." + y.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(l) {
      t.update_end();
    })
  );
  var g, u, d, _ = "bottom";
  return t.fontsize && (u = t.labelposition().match(/bottom/i) != null ? k([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -k([t.girth() / 2, t.knob()]) - t.fontsize() / 2), u = t.labelposition().match(/bottom/i) != null ? k([t.girth() / 2, t.knob()]) + 7 : -k([t.girth() / 2, t.knob()]) - 7, g = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, d = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", _ = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", a.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", y.label).style("text-anchor", d).style("alignment-baseline", _).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + g + "," + u + ")"), f;
}, $o = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), o = t.label(), i = t.labelposition(), s = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = v(s).attr("class", y.widget + " " + y.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (a.append("path").attr("d", fe(2 * t.size(), 2 * t.size())).attr("class", y.track), a.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), a.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), o) {
    const f = vt(4 * t.size(), 2 * t.size(), i);
    a.append("text").text(o).attr("class", y.label).style("text-anchor", f.anchor).style("font-size", t.fontsize()).style("alignment-baseline", f.valign).attr("transform", "translate(" + (f.x + r) + "," + f.y + ")");
  }
  return s;
}, Mo = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), o = t.buttonsize(), i = t.buttonsize() * (1 - t.buttonpadding()), s = t.choices().length, a = he(s), f = B().domain([0, s - 1]).range([0, t.size()]), p = B().domain([0, s - 1]).range([0, t.size()]), g = document.createElementNS("http://www.w3.org/2000/svg", "g"), d = v(g).attr("class", y.widget + " " + y.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(a).enter().append("g").attr("class", y.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + p(b) + ")" : "translate(" + f(b) + ",0)");
  var _, l;
  t.shape() == "rect" ? (_ = d.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")"), l = d.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")")) : (_ = d.append("circle").attr("r", o / 2), l = d.append("circle").attr("r", i / 2)), _.attr("class", y.background).on("mouseover", function() {
    v(this).classed(y.lit, !0), v(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    v(this).classed(y.lit, !1), v(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), l.attr("class", y.symbol), l.filter((b) => b == t.value()).classed(y.selected, !0), d.on("click", t.click);
  const c = vt(t.buttonsize(), t.buttonsize(), r);
  return d.append("text").attr("class", y.label).text(function(b, h) {
    return t.choices()[h];
  }).attr("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")").style("font-size", t.fontsize()).attr("text-anchor", c.anchor), g;
}, Eo = (t, e) => {
  switch (t.type) {
    case "button":
      return To(t);
    case "slider":
      return wo(t);
    case "radio":
      return Mo(t);
    case "toggle":
      return $o(t);
  }
}, Io = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches, Co = (t) => {
  if (!window.matchMedia) return;
  const e = window.matchMedia("(prefers-color-scheme: dark)");
  t(e.matches), e.addEventListener ? e.addEventListener("change", (n) => t(n.matches)) : e.addListener((n) => t(n.matches));
}, Ro = (t) => t === !0 || t !== !1 && !document.documentElement.classList.contains("dark") ? (document.documentElement.classList.add("dark"), !0) : (document.documentElement.classList.remove("dark"), !1);
export {
  Ao as button,
  Po as grid,
  Io as isDarkMode,
  So as radio,
  Oo as slider,
  y as styles,
  zo as toggle,
  Ro as toggleDarkMode,
  Co as watchColorScheme,
  Eo as widget
};
