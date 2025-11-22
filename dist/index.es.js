(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;font-size:var(--d3w-font-size, 16px);line-height:var(--d3w-line-height, 1.25);font-family:var(--d3w-font-family, system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);font-weight:var(--d3w-font-weight, 400)}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1279t_47{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_1279t_47 ._title_1279t_59{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1279t_47 ._label_1279t_67{fill:var(--color-text);stroke:none}._widget_1279t_47 ._lit_1279t_72{fill:var(--color-lit)}._button_1279t_76>._symbol_1279t_76,._radio_1279t_77>._radiobutton_1279t_77>._symbol_1279t_76{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83,._toggle_1279t_84._selected_1279t_83,._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83._lit_1279t_72{fill:var(--color-selected)}._widget_1279t_47 ._symbol_1279t_76._lit_1279t_72{fill:var(--color-lit-symbol)}._slider_1279t_93>._track_1279t_93,._toggle_1279t_84>._track_1279t_93{pointer-events:none}._slider_1279t_93>._track_overlay_1279t_98,._toggle_1279t_84>._track_overlay_1279t_98{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1279t_93>._handle_1279t_106,._toggle_1279t_84>._handle_1279t_106{fill:var(--color-handle)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function qt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Hr(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ze(t) {
  let n, e, r;
  t.length !== 2 ? (n = qt, e = (s, u) => qt(t(s), u), r = (s, u) => t(s) - u) : (n = t === qt || t === Hr ? t : Br, e = t, r = t);
  function i(s, u, f = 0, c = s.length) {
    if (f < c) {
      if (n(u, u) !== 0) return c;
      do {
        const l = f + c >>> 1;
        e(s[l], u) < 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function o(s, u, f = 0, c = s.length) {
    if (f < c) {
      if (n(u, u) !== 0) return c;
      do {
        const l = f + c >>> 1;
        e(s[l], u) <= 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function a(s, u, f = 0, c = s.length) {
    const l = i(s, u, f, c - 1);
    return l > f && r(s[l - 1], u) > -r(s[l], u) ? l - 1 : l;
  }
  return { left: i, center: a, right: o };
}
function Br() {
  return 0;
}
function Gr(t) {
  return t === null ? NaN : +t;
}
const Ur = Ze(qt), Yr = Ur.right;
Ze(Gr).center;
const Kr = Math.sqrt(50), Vr = Math.sqrt(10), jr = Math.sqrt(2);
function Ut(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Kr ? 10 : o >= Vr ? 5 : o >= jr ? 2 : 1;
  let s, u, f;
  return i < 0 ? (f = Math.pow(10, -i) / a, s = Math.round(t * f), u = Math.round(n * f), s / f < t && ++s, u / f > n && --u, f = -f) : (f = Math.pow(10, i) * a, s = Math.round(t / f), u = Math.round(n / f), s * f < t && ++s, u * f > n && --u), u < s && 0.5 <= e && e < 2 ? Ut(t, n, e * 2) : [s, u, f];
}
function Zr(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? Ut(n, t, e) : Ut(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let f = 0; f < s; ++f) u[f] = (o - f) / -a;
    else for (let f = 0; f < s; ++f) u[f] = (o - f) * a;
  else if (a < 0) for (let f = 0; f < s; ++f) u[f] = (i + f) / -a;
  else for (let f = 0; f < s; ++f) u[f] = (i + f) * a;
  return u;
}
function xn(t, n, e) {
  return n = +n, t = +t, e = +e, Ut(t, n, e)[2];
}
function Wr(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? xn(n, t, e) : xn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ct(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Jr(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Qr = { value: () => {
} };
function Ln() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Ht(e);
}
function Ht(t) {
  this._ = t;
}
function ti(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Ht.prototype = Ln.prototype = {
  constructor: Ht,
  on: function(t, n) {
    var e = this._, r = ti(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = ni(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ie(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ie(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Ht(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function ni(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ie(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Qr, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var bn = "http://www.w3.org/1999/xhtml";
const oe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: bn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function en(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), oe.hasOwnProperty(n) ? { space: oe[n], local: t } : t;
}
function ei(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === bn && n.documentElement.namespaceURI === bn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ri(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function We(t) {
  var n = en(t);
  return (n.local ? ri : ei)(n);
}
function ii() {
}
function Xn(t) {
  return t == null ? ii : function() {
    return this.querySelector(t);
  };
}
function oi(t) {
  typeof t != "function" && (t = Xn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, f, c = 0; c < a; ++c)
      (u = o[c]) && (f = t.call(u, u.__data__, c, o)) && ("__data__" in u && (f.__data__ = u.__data__), s[c] = f);
  return new I(r, this._parents);
}
function ai(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function si() {
  return [];
}
function Je(t) {
  return t == null ? si : function() {
    return this.querySelectorAll(t);
  };
}
function ui(t) {
  return function() {
    return ai(t.apply(this, arguments));
  };
}
function fi(t) {
  typeof t == "function" ? t = ui(t) : t = Je(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, f = 0; f < s; ++f)
      (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
  return new I(r, i);
}
function Qe(t) {
  return function() {
    return this.matches(t);
  };
}
function tr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var li = Array.prototype.find;
function ci(t) {
  return function() {
    return li.call(this.children, t);
  };
}
function hi() {
  return this.firstElementChild;
}
function pi(t) {
  return this.select(t == null ? hi : ci(typeof t == "function" ? t : tr(t)));
}
var di = Array.prototype.filter;
function gi() {
  return Array.from(this.children);
}
function yi(t) {
  return function() {
    return di.call(this.children, t);
  };
}
function _i(t) {
  return this.selectAll(t == null ? gi : yi(typeof t == "function" ? t : tr(t)));
}
function mi(t) {
  typeof t != "function" && (t = Qe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, f = 0; f < a; ++f)
      (u = o[f]) && t.call(u, u.__data__, f, o) && s.push(u);
  return new I(r, this._parents);
}
function nr(t) {
  return new Array(t.length);
}
function vi() {
  return new I(this._enter || this._groups.map(nr), this._parents);
}
function Yt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Yt.prototype = {
  constructor: Yt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function wi(t) {
  return function() {
    return t;
  };
}
function xi(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, f = o.length; a < f; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Yt(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function bi(t, n, e, r, i, o, a) {
  var s, u, f = /* @__PURE__ */ new Map(), c = n.length, l = o.length, h = new Array(c), y;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = y = a.call(u, u.__data__, s, n) + "", f.has(y) ? i[s] = u : f.set(y, u));
  for (s = 0; s < l; ++s)
    y = a.call(t, o[s], s, o) + "", (u = f.get(y)) ? (r[s] = u, u.__data__ = o[s], f.delete(y)) : e[s] = new Yt(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && f.get(h[s]) === u && (i[s] = u);
}
function Mi(t) {
  return t.__data__;
}
function $i(t, n) {
  if (!arguments.length) return Array.from(this, Mi);
  var e = n ? bi : xi, r = this._parents, i = this._groups;
  typeof t != "function" && (t = wi(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), f = 0; f < o; ++f) {
    var c = r[f], l = i[f], h = l.length, y = Ti(t.call(c, c && c.__data__, f, r)), p = y.length, d = s[f] = new Array(p), w = a[f] = new Array(p), b = u[f] = new Array(h);
    e(c, l, d, w, b, y, n);
    for (var g = 0, M = 0, _, v; g < p; ++g)
      if (_ = d[g]) {
        for (g >= M && (M = g + 1); !(v = w[M]) && ++M < p; ) ;
        _._next = v || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = u, a;
}
function Ti(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ai() {
  return new I(this._exit || this._groups.map(nr), this._parents);
}
function Si(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ei(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var f = e[u], c = r[u], l = f.length, h = s[u] = new Array(l), y, p = 0; p < l; ++p)
      (y = f[p] || c[p]) && (h[p] = y);
  for (; u < i; ++u)
    s[u] = e[u];
  return new I(s, this._parents);
}
function Pi() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Ni(t) {
  t || (t = Ii);
  function n(l, h) {
    return l && h ? t(l.__data__, h.__data__) : !l - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), f, c = 0; c < s; ++c)
      (f = a[c]) && (u[c] = f);
    u.sort(n);
  }
  return new I(i, this._parents).order();
}
function Ii(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function zi() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Oi() {
  return Array.from(this);
}
function Ci() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ki() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Ri() {
  return !this.node();
}
function Fi(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Di(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Li(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Xi(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function qi(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Hi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Bi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Gi(t, n) {
  var e = en(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Li : Di : typeof n == "function" ? e.local ? Bi : Hi : e.local ? qi : Xi)(e, n));
}
function er(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ui(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yi(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Ki(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Vi(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ui : typeof n == "function" ? Ki : Yi)(t, n, e ?? "")) : ct(this.node(), t);
}
function ct(t, n) {
  return t.style.getPropertyValue(n) || er(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ji(t) {
  return function() {
    delete this[t];
  };
}
function Zi(t, n) {
  return function() {
    this[t] = n;
  };
}
function Wi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Ji(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ji : typeof n == "function" ? Wi : Zi)(t, n)) : this.node()[t];
}
function rr(t) {
  return t.trim().split(/^|\s+/);
}
function qn(t) {
  return t.classList || new ir(t);
}
function ir(t) {
  this._node = t, this._names = rr(t.getAttribute("class") || "");
}
ir.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function or(t, n) {
  for (var e = qn(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function ar(t, n) {
  for (var e = qn(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Qi(t) {
  return function() {
    or(this, t);
  };
}
function to(t) {
  return function() {
    ar(this, t);
  };
}
function no(t, n) {
  return function() {
    (n.apply(this, arguments) ? or : ar)(this, t);
  };
}
function eo(t, n) {
  var e = rr(t + "");
  if (arguments.length < 2) {
    for (var r = qn(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? no : n ? Qi : to)(e, n));
}
function ro() {
  this.textContent = "";
}
function io(t) {
  return function() {
    this.textContent = t;
  };
}
function oo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ao(t) {
  return arguments.length ? this.each(t == null ? ro : (typeof t == "function" ? oo : io)(t)) : this.node().textContent;
}
function so() {
  this.innerHTML = "";
}
function uo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function fo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function lo(t) {
  return arguments.length ? this.each(t == null ? so : (typeof t == "function" ? fo : uo)(t)) : this.node().innerHTML;
}
function co() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ho() {
  return this.each(co);
}
function po() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function go() {
  return this.each(po);
}
function yo(t) {
  var n = typeof t == "function" ? t : We(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function _o() {
  return null;
}
function mo(t, n) {
  var e = typeof t == "function" ? t : We(t), r = n == null ? _o : typeof n == "function" ? n : Xn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function vo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function wo() {
  return this.each(vo);
}
function xo() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function bo() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Mo(t) {
  return this.select(t ? bo : xo);
}
function $o(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function To(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ao(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function So(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Eo(t, n, e) {
  return function() {
    var r = this.__on, i, o = To(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Po(t, n, e) {
  var r = Ao(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, f = s.length, c; u < f; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Eo : So, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function sr(t, n, e) {
  var r = er(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function No(t, n) {
  return function() {
    return sr(this, t, n);
  };
}
function Io(t, n) {
  return function() {
    return sr(this, t, n.apply(this, arguments));
  };
}
function zo(t, n) {
  return this.each((typeof n == "function" ? Io : No)(t, n));
}
function* Oo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ur = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function It() {
  return new I([[document.documentElement]], ur);
}
function Co() {
  return this;
}
I.prototype = It.prototype = {
  constructor: I,
  select: oi,
  selectAll: fi,
  selectChild: pi,
  selectChildren: _i,
  filter: mi,
  data: $i,
  enter: vi,
  exit: Ai,
  join: Si,
  merge: Ei,
  selection: Co,
  order: Pi,
  sort: Ni,
  call: zi,
  nodes: Oi,
  node: Ci,
  size: ki,
  empty: Ri,
  each: Fi,
  attr: Gi,
  style: Vi,
  property: Ji,
  classed: eo,
  text: ao,
  html: lo,
  raise: ho,
  lower: go,
  append: yo,
  insert: mo,
  remove: wo,
  clone: Mo,
  datum: $o,
  on: Po,
  dispatch: zo,
  [Symbol.iterator]: Oo
};
function S(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], ur);
}
function ko(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ae(t, n) {
  if (t = ko(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ro = { passive: !1 }, Tt = { capture: !0, passive: !1 };
function dn(t) {
  t.stopImmediatePropagation();
}
function ft(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Fo(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", ft, Tt);
  "onselectstart" in n ? e.on("selectstart.drag", ft, Tt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Do(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", ft, Tt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const kt = (t) => () => t;
function Mn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: f,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: f, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Mn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Lo(t) {
  return !t.ctrlKey && !t.button;
}
function Xo() {
  return this.parentNode;
}
function qo(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Ho() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bo() {
  var t = Lo, n = Xo, e = qo, r = Ho, i = {}, o = Ln("start", "drag", "end"), a = 0, s, u, f, c, l = 0;
  function h(_) {
    _.on("mousedown.drag", y).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Ro).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(_, v) {
    if (!(c || !t.call(this, _, v))) {
      var T = M(this, n.call(this, _, v), _, v, "mouse");
      T && (S(_.view).on("mousemove.drag", p, Tt).on("mouseup.drag", d, Tt), Fo(_.view), dn(_), f = !1, s = _.clientX, u = _.clientY, T("start", _));
    }
  }
  function p(_) {
    if (ft(_), !f) {
      var v = _.clientX - s, T = _.clientY - u;
      f = v * v + T * T > l;
    }
    i.mouse("drag", _);
  }
  function d(_) {
    S(_.view).on("mousemove.drag mouseup.drag", null), Do(_.view, f), ft(_), i.mouse("end", _);
  }
  function w(_, v) {
    if (t.call(this, _, v)) {
      var T = _.changedTouches, A = n.call(this, _, v), E = T.length, L, G;
      for (L = 0; L < E; ++L)
        (G = M(this, A, _, v, T[L].identifier, T[L])) && (dn(_), G("start", _, T[L]));
    }
  }
  function b(_) {
    var v = _.changedTouches, T = v.length, A, E;
    for (A = 0; A < T; ++A)
      (E = i[v[A].identifier]) && (ft(_), E("drag", _, v[A]));
  }
  function g(_) {
    var v = _.changedTouches, T = v.length, A, E;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), A = 0; A < T; ++A)
      (E = i[v[A].identifier]) && (dn(_), E("end", _, v[A]));
  }
  function M(_, v, T, A, E, L) {
    var G = o.copy(), x = ae(L || T, v), X, P, O;
    if ((O = e.call(_, new Mn("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: E,
      active: a,
      x: x[0],
      y: x[1],
      dx: 0,
      dy: 0,
      dispatch: G
    }), A)) != null)
      return X = O.x - x[0] || 0, P = O.y - x[1] || 0, function Ot(W, Q, st) {
        var z = x, pn;
        switch (W) {
          case "start":
            i[E] = Ot, pn = a++;
            break;
          case "end":
            delete i[E], --a;
          // falls through
          case "drag":
            x = ae(st || Q, v), pn = a;
            break;
        }
        G.call(
          W,
          _,
          new Mn(W, {
            sourceEvent: Q,
            subject: O,
            target: h,
            identifier: E,
            active: pn,
            x: x[0] + X,
            y: x[1] + P,
            dx: x[0] - z[0],
            dy: x[1] - z[1],
            dispatch: G
          }),
          A
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : kt(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : kt(_), h) : n;
  }, h.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : kt(_), h) : e;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : kt(!!_), h) : r;
  }, h.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (l = (_ = +_) * _, h) : Math.sqrt(l);
  }, h;
}
function Hn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function fr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function zt() {
}
var At = 0.7, Kt = 1 / At, lt = "\\s*([+-]?\\d+)\\s*", St = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", q = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Go = /^#([0-9a-f]{3,8})$/, Uo = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), Yo = new RegExp(`^rgb\\(${q},${q},${q}\\)$`), Ko = new RegExp(`^rgba\\(${lt},${lt},${lt},${St}\\)$`), Vo = new RegExp(`^rgba\\(${q},${q},${q},${St}\\)$`), jo = new RegExp(`^hsl\\(${St},${q},${q}\\)$`), Zo = new RegExp(`^hsla\\(${St},${q},${q},${St}\\)$`), se = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Hn(zt, rt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ue,
  // Deprecated! Use color.formatHex.
  formatHex: ue,
  formatHex8: Wo,
  formatHsl: Jo,
  formatRgb: fe,
  toString: fe
});
function ue() {
  return this.rgb().formatHex();
}
function Wo() {
  return this.rgb().formatHex8();
}
function Jo() {
  return lr(this).formatHsl();
}
function fe() {
  return this.rgb().formatRgb();
}
function rt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Go.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? le(n) : e === 3 ? new N(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Rt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Rt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Uo.exec(t)) ? new N(n[1], n[2], n[3], 1) : (n = Yo.exec(t)) ? new N(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ko.exec(t)) ? Rt(n[1], n[2], n[3], n[4]) : (n = Vo.exec(t)) ? Rt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = jo.exec(t)) ? pe(n[1], n[2] / 100, n[3] / 100, 1) : (n = Zo.exec(t)) ? pe(n[1], n[2] / 100, n[3] / 100, n[4]) : se.hasOwnProperty(t) ? le(se[t]) : t === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function le(t) {
  return new N(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Rt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new N(t, n, e, r);
}
function Qo(t) {
  return t instanceof zt || (t = rt(t)), t ? (t = t.rgb(), new N(t.r, t.g, t.b, t.opacity)) : new N();
}
function $n(t, n, e, r) {
  return arguments.length === 1 ? Qo(t) : new N(t, n, e, r ?? 1);
}
function N(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Hn(N, $n, fr(zt, {
  brighter(t) {
    return t = t == null ? Kt : Math.pow(Kt, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? At : Math.pow(At, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new N(et(this.r), et(this.g), et(this.b), Vt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ce,
  // Deprecated! Use color.formatHex.
  formatHex: ce,
  formatHex8: ta,
  formatRgb: he,
  toString: he
}));
function ce() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}`;
}
function ta() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}${nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function he() {
  const t = Vt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Vt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function et(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function nt(t) {
  return t = et(t), (t < 16 ? "0" : "") + t.toString(16);
}
function pe(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new k(t, n, e, r);
}
function lr(t) {
  if (t instanceof k) return new k(t.h, t.s, t.l, t.opacity);
  if (t instanceof zt || (t = rt(t)), !t) return new k();
  if (t instanceof k) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new k(a, s, u, t.opacity);
}
function na(t, n, e, r) {
  return arguments.length === 1 ? lr(t) : new k(t, n, e, r ?? 1);
}
function k(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Hn(k, na, fr(zt, {
  brighter(t) {
    return t = t == null ? Kt : Math.pow(Kt, t), new k(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? At : Math.pow(At, t), new k(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new N(
      gn(t >= 240 ? t - 240 : t + 120, i, r),
      gn(t, i, r),
      gn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new k(de(this.h), Ft(this.s), Ft(this.l), Vt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Vt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${de(this.h)}, ${Ft(this.s) * 100}%, ${Ft(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function de(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ft(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function gn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Bn = (t) => () => t;
function ea(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ra(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ia(t) {
  return (t = +t) == 1 ? cr : function(n, e) {
    return e - n ? ra(n, e, t) : Bn(isNaN(n) ? e : n);
  };
}
function cr(t, n) {
  var e = n - t;
  return e ? ea(t, e) : Bn(isNaN(t) ? n : t);
}
const jt = function t(n) {
  var e = ia(n);
  function r(i, o) {
    var a = e((i = $n(i)).r, (o = $n(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), f = cr(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = f(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function oa(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function aa(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function sa(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Gn(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function ua(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function C(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function fa(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Gn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Tn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yn = new RegExp(Tn.source, "g");
function la(t) {
  return function() {
    return t;
  };
}
function ca(t) {
  return function(n) {
    return t(n) + "";
  };
}
function hr(t, n) {
  var e = Tn.lastIndex = yn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = Tn.exec(t)) && (i = yn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: C(r, i) })), e = yn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? ca(u[0].x) : la(n) : (n = u.length, function(f) {
    for (var c = 0, l; c < n; ++c) s[(l = u[c]).i] = l.x(f);
    return s.join("");
  });
}
function Gn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Bn(n) : (e === "number" ? C : e === "string" ? (r = rt(n)) ? (n = r, jt) : hr : n instanceof rt ? jt : n instanceof Date ? ua : aa(n) ? oa : Array.isArray(n) ? sa : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? fa : C)(t, n);
}
function ha(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ge = 180 / Math.PI, An = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * ge,
    skewX: Math.atan(u) * ge,
    scaleX: a,
    scaleY: s
  };
}
var Dt;
function pa(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? An : pr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function da(t) {
  return t == null || (Dt || (Dt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Dt.setAttribute("transform", t), !(t = Dt.transform.baseVal.consolidate())) ? An : (t = t.matrix, pr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function dr(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, c, l, h, y, p) {
    if (f !== l || c !== h) {
      var d = y.push("translate(", null, n, null, e);
      p.push({ i: d - 4, x: C(f, l) }, { i: d - 2, x: C(c, h) });
    } else (l || h) && y.push("translate(" + l + n + h + e);
  }
  function a(f, c, l, h) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), h.push({ i: l.push(i(l) + "rotate(", null, r) - 2, x: C(f, c) })) : c && l.push(i(l) + "rotate(" + c + r);
  }
  function s(f, c, l, h) {
    f !== c ? h.push({ i: l.push(i(l) + "skewX(", null, r) - 2, x: C(f, c) }) : c && l.push(i(l) + "skewX(" + c + r);
  }
  function u(f, c, l, h, y, p) {
    if (f !== l || c !== h) {
      var d = y.push(i(y) + "scale(", null, ",", null, ")");
      p.push({ i: d - 4, x: C(f, l) }, { i: d - 2, x: C(c, h) });
    } else (l !== 1 || h !== 1) && y.push(i(y) + "scale(" + l + "," + h + ")");
  }
  return function(f, c) {
    var l = [], h = [];
    return f = t(f), c = t(c), o(f.translateX, f.translateY, c.translateX, c.translateY, l, h), a(f.rotate, c.rotate, l, h), s(f.skewX, c.skewX, l, h), u(f.scaleX, f.scaleY, c.scaleX, c.scaleY, l, h), f = c = null, function(y) {
      for (var p = -1, d = h.length, w; ++p < d; ) l[(w = h[p]).i] = w.x(y);
      return l.join("");
    };
  };
}
var ga = dr(pa, "px, ", "px)", "deg)"), ya = dr(da, ", ", ")", ")"), ht = 0, xt = 0, vt = 0, gr = 1e3, Zt, bt, Wt = 0, it = 0, rn = 0, Et = typeof performance == "object" && performance.now ? performance : Date, yr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Un() {
  return it || (yr(_a), it = Et.now() + rn);
}
function _a() {
  it = 0;
}
function Jt() {
  this._call = this._time = this._next = null;
}
Jt.prototype = _r.prototype = {
  constructor: Jt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Un() : +e) + (n == null ? 0 : +n), !this._next && bt !== this && (bt ? bt._next = this : Zt = this, bt = this), this._call = t, this._time = e, Sn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Sn());
  }
};
function _r(t, n, e) {
  var r = new Jt();
  return r.restart(t, n, e), r;
}
function ma() {
  Un(), ++ht;
  for (var t = Zt, n; t; )
    (n = it - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --ht;
}
function ye() {
  it = (Wt = Et.now()) + rn, ht = xt = 0;
  try {
    ma();
  } finally {
    ht = 0, wa(), it = 0;
  }
}
function va() {
  var t = Et.now(), n = t - Wt;
  n > gr && (rn -= n, Wt = t);
}
function wa() {
  for (var t, n = Zt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Zt = e);
  bt = t, Sn(r);
}
function Sn(t) {
  if (!ht) {
    xt && (xt = clearTimeout(xt));
    var n = t - it;
    n > 24 ? (t < 1 / 0 && (xt = setTimeout(ye, t - Et.now() - rn)), vt && (vt = clearInterval(vt))) : (vt || (Wt = Et.now(), vt = setInterval(va, gr)), ht = 1, yr(ye));
  }
}
function _e(t, n, e) {
  var r = new Jt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var xa = Ln("start", "end", "cancel", "interrupt"), ba = [], mr = 0, me = 1, En = 2, Bt = 3, ve = 4, Pn = 5, Gt = 6;
function on(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ma(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: xa,
    tween: ba,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: mr
  });
}
function Yn(t, n) {
  var e = F(t, n);
  if (e.state > mr) throw new Error("too late; already scheduled");
  return e;
}
function B(t, n) {
  var e = F(t, n);
  if (e.state > Bt) throw new Error("too late; already running");
  return e;
}
function F(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ma(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = _r(o, 0, e.time);
  function o(f) {
    e.state = me, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var c, l, h, y;
    if (e.state !== me) return u();
    for (c in r)
      if (y = r[c], y.name === e.name) {
        if (y.state === Bt) return _e(a);
        y.state === ve ? (y.state = Gt, y.timer.stop(), y.on.call("interrupt", t, t.__data__, y.index, y.group), delete r[c]) : +c < n && (y.state = Gt, y.timer.stop(), y.on.call("cancel", t, t.__data__, y.index, y.group), delete r[c]);
      }
    if (_e(function() {
      e.state === Bt && (e.state = ve, e.timer.restart(s, e.delay, e.time), s(f));
    }), e.state = En, e.on.call("start", t, t.__data__, e.index, e.group), e.state === En) {
      for (e.state = Bt, i = new Array(h = e.tween.length), c = 0, l = -1; c < h; ++c)
        (y = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++l] = y);
      i.length = l + 1;
    }
  }
  function s(f) {
    for (var c = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(u), e.state = Pn, 1), l = -1, h = i.length; ++l < h; )
      i[l].call(t, c);
    e.state === Pn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Gt, e.timer.stop(), delete r[n];
    for (var f in r) return;
    delete t.__transition;
  }
}
function $a(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > En && r.state < Pn, r.state = Gt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Ta(t) {
  return this.each(function() {
    $a(this, t);
  });
}
function Aa(t, n) {
  var e, r;
  return function() {
    var i = B(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Sa(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = B(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === f && i.push(s);
    }
    o.tween = i;
  };
}
function Ea(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = F(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Aa : Sa)(e, t, n));
}
function Kn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = B(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return F(i, r).value[n];
  };
}
function vr(t, n) {
  var e;
  return (typeof n == "number" ? C : n instanceof rt ? jt : (e = rt(n)) ? (n = e, jt) : hr)(t, n);
}
function Pa(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Na(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ia(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function za(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Oa(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Ca(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function ka(t, n) {
  var e = en(t), r = e === "transform" ? ya : vr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ca : Oa)(e, r, Kn(this, "attr." + t, n)) : n == null ? (e.local ? Na : Pa)(e) : (e.local ? za : Ia)(e, r, n));
}
function Ra(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Fa(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Da(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Fa(t, o)), e;
  }
  return i._value = n, i;
}
function La(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ra(t, o)), e;
  }
  return i._value = n, i;
}
function Xa(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = en(t);
  return this.tween(e, (r.local ? Da : La)(r, n));
}
function qa(t, n) {
  return function() {
    Yn(this, t).delay = +n.apply(this, arguments);
  };
}
function Ha(t, n) {
  return n = +n, function() {
    Yn(this, t).delay = n;
  };
}
function Ba(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? qa : Ha)(n, t)) : F(this.node(), n).delay;
}
function Ga(t, n) {
  return function() {
    B(this, t).duration = +n.apply(this, arguments);
  };
}
function Ua(t, n) {
  return n = +n, function() {
    B(this, t).duration = n;
  };
}
function Ya(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ga : Ua)(n, t)) : F(this.node(), n).duration;
}
function Ka(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    B(this, t).ease = n;
  };
}
function Va(t) {
  var n = this._id;
  return arguments.length ? this.each(Ka(n, t)) : F(this.node(), n).ease;
}
function ja(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    B(this, t).ease = e;
  };
}
function Za(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ja(this._id, t));
}
function Wa(t) {
  typeof t != "function" && (t = Qe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, f = 0; f < a; ++f)
      (u = o[f]) && t.call(u, u.__data__, f, o) && s.push(u);
  return new K(r, this._parents, this._name, this._id);
}
function Ja(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], f = e[s], c = u.length, l = a[s] = new Array(c), h, y = 0; y < c; ++y)
      (h = u[y] || f[y]) && (l[y] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new K(a, this._parents, this._name, this._id);
}
function Qa(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function ts(t, n, e) {
  var r, i, o = Qa(n) ? Yn : B;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function ns(t, n) {
  var e = this._id;
  return arguments.length < 2 ? F(this.node(), e).on.on(t) : this.each(ts(e, t, n));
}
function es(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function rs() {
  return this.on("end.remove", es(this._id));
}
function is(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Xn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, f = o[a] = new Array(u), c, l, h = 0; h < u; ++h)
      (c = s[h]) && (l = t.call(c, c.__data__, h, s)) && ("__data__" in c && (l.__data__ = c.__data__), f[h] = l, on(f[h], n, e, h, f, F(c, e)));
  return new K(o, this._parents, n, e);
}
function os(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Je(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], f = u.length, c, l = 0; l < f; ++l)
      if (c = u[l]) {
        for (var h = t.call(c, c.__data__, l, u), y, p = F(c, e), d = 0, w = h.length; d < w; ++d)
          (y = h[d]) && on(y, n, e, d, h, p);
        o.push(h), a.push(c);
      }
  return new K(o, a, n, e);
}
var as = It.prototype.constructor;
function ss() {
  return new as(this._groups, this._parents);
}
function us(t, n) {
  var e, r, i;
  return function() {
    var o = ct(this, t), a = (this.style.removeProperty(t), ct(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function wr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function fs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = ct(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ls(t, n, e) {
  var r, i, o;
  return function() {
    var a = ct(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), ct(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function cs(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = B(this, t), f = u.on, c = u.value[o] == null ? s || (s = wr(n)) : void 0;
    (f !== e || i !== c) && (r = (e = f).copy()).on(a, i = c), u.on = r;
  };
}
function hs(t, n, e) {
  var r = (t += "") == "transform" ? ga : vr;
  return n == null ? this.styleTween(t, us(t, r)).on("end.style." + t, wr(t)) : typeof n == "function" ? this.styleTween(t, ls(t, r, Kn(this, "style." + t, n))).each(cs(this._id, t)) : this.styleTween(t, fs(t, r, n), e).on("end.style." + t, null);
}
function ps(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ds(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && ps(t, a, e)), r;
  }
  return o._value = n, o;
}
function gs(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, ds(t, n, e ?? ""));
}
function ys(t) {
  return function() {
    this.textContent = t;
  };
}
function _s(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function ms(t) {
  return this.tween("text", typeof t == "function" ? _s(Kn(this, "text", t)) : ys(t == null ? "" : t + ""));
}
function vs(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function ws(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && vs(i)), n;
  }
  return r._value = t, r;
}
function xs(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, ws(t));
}
function bs() {
  for (var t = this._name, n = this._id, e = xr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, f = 0; f < s; ++f)
      if (u = a[f]) {
        var c = F(u, n);
        on(u, t, e, f, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new K(r, this._parents, t, e);
}
function Ms() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var f = B(this, r), c = f.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), f.on = n;
    }), i === 0 && o();
  });
}
var $s = 0;
function K(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function xr() {
  return ++$s;
}
var U = It.prototype;
K.prototype = {
  constructor: K,
  select: is,
  selectAll: os,
  selectChild: U.selectChild,
  selectChildren: U.selectChildren,
  filter: Wa,
  merge: Ja,
  selection: ss,
  transition: bs,
  call: U.call,
  nodes: U.nodes,
  node: U.node,
  size: U.size,
  empty: U.empty,
  each: U.each,
  on: ns,
  attr: ka,
  attrTween: Xa,
  style: hs,
  styleTween: gs,
  text: ms,
  textTween: xs,
  remove: rs,
  tween: Ea,
  delay: Ba,
  duration: Ya,
  ease: Va,
  easeVarying: Za,
  end: Ms,
  [Symbol.iterator]: U[Symbol.iterator]
};
function Ts(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var As = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ts
};
function Ss(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Es(t) {
  var n, e;
  t instanceof K ? (n = t._id, t = t._name) : (n = xr(), (e = As).time = Un(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, f = 0; f < s; ++f)
      (u = a[f]) && on(u, t, n, f, a, e || Ss(u, n));
  return new K(r, this._parents, t, n);
}
It.prototype.interrupt = Ta;
It.prototype.transition = Es;
const Nn = Math.PI, In = 2 * Nn, tt = 1e-6, Ps = In - tt;
function br(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Ns(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return br;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Mr {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? br : Ns(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, f = i - e, c = a - n, l = s - e, h = c * c + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > tt) if (!(Math.abs(l * u - f * c) > tt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let y = r - a, p = i - s, d = u * u + f * f, w = y * y + p * p, b = Math.sqrt(d), g = Math.sqrt(h), M = o * Math.tan((Nn - Math.acos((d + h - w) / (2 * b * g))) / 2), _ = M / g, v = M / b;
      Math.abs(_ - 1) > tt && this._append`L${n + _ * c},${e + _ * l}`, this._append`A${o},${o},0,0,${+(l * y > c * p)},${this._x1 = n + v * u},${this._y1 = e + v * f}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), f = n + s, c = e + u, l = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${f},${c}` : (Math.abs(this._x1 - f) > tt || Math.abs(this._y1 - c) > tt) && this._append`L${f},${c}`, r && (h < 0 && (h = h % In + In), h > Ps ? this._append`A${r},${r},0,1,${l},${n - s},${e - u}A${r},${r},0,1,${l},${this._x1 = f},${this._y1 = c}` : h > tt && this._append`A${r},${r},0,${+(h >= Nn)},${l},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function D() {
  return new Mr();
}
D.prototype = Mr.prototype;
function Is(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Qt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function pt(t) {
  return t = Qt(Math.abs(t)), t ? t[1] : NaN;
}
function zs(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Os(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Cs = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function tn(t) {
  if (!(n = Cs.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Vn({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
tn.prototype = Vn.prototype;
function Vn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Vn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ks(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var $r;
function Rs(t, n) {
  var e = Qt(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - ($r = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Qt(t, Math.max(0, n + o - 1))[0];
}
function we(t, n) {
  var e = Qt(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const xe = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Is,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => we(t * 100, n),
  r: we,
  s: Rs,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function be(t) {
  return t;
}
var Me = Array.prototype.map, $e = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Fs(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? be : zs(Me.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? be : Os(Me.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(l) {
    l = tn(l);
    var h = l.fill, y = l.align, p = l.sign, d = l.symbol, w = l.zero, b = l.width, g = l.comma, M = l.precision, _ = l.trim, v = l.type;
    v === "n" ? (g = !0, v = "g") : xe[v] || (M === void 0 && (M = 12), _ = !0, v = "g"), (w || h === "0" && y === "=") && (w = !0, h = "0", y = "=");
    var T = d === "$" ? e : d === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", A = d === "$" ? r : /[%p]/.test(v) ? a : "", E = xe[v], L = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function G(x) {
      var X = T, P = A, O, Ot, W;
      if (v === "c")
        P = E(x) + P, x = "";
      else {
        x = +x;
        var Q = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? u : E(Math.abs(x), M), _ && (x = ks(x)), Q && +x == 0 && p !== "+" && (Q = !1), X = (Q ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + X, P = (v === "s" ? $e[8 + $r / 3] : "") + P + (Q && p === "(" ? ")" : ""), L) {
          for (O = -1, Ot = x.length; ++O < Ot; )
            if (W = x.charCodeAt(O), 48 > W || W > 57) {
              P = (W === 46 ? i + x.slice(O + 1) : x.slice(O)) + P, x = x.slice(0, O);
              break;
            }
        }
      }
      g && !w && (x = n(x, 1 / 0));
      var st = X.length + x.length + P.length, z = st < b ? new Array(b - st + 1).join(h) : "";
      switch (g && w && (x = n(z + x, z.length ? b - P.length : 1 / 0), z = ""), y) {
        case "<":
          x = X + x + P + z;
          break;
        case "=":
          x = X + z + x + P;
          break;
        case "^":
          x = z.slice(0, st = z.length >> 1) + X + x + P + z.slice(st);
          break;
        default:
          x = z + X + x + P;
          break;
      }
      return o(x);
    }
    return G.toString = function() {
      return l + "";
    }, G;
  }
  function c(l, h) {
    var y = f((l = tn(l), l.type = "f", l)), p = Math.max(-8, Math.min(8, Math.floor(pt(h) / 3))) * 3, d = Math.pow(10, -p), w = $e[8 + p / 3];
    return function(b) {
      return y(d * b) + w;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var Lt, an, Tr;
Ds({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ds(t) {
  return Lt = Fs(t), an = Lt.format, Tr = Lt.formatPrefix, Lt;
}
function Ls(t) {
  return Math.max(0, -pt(Math.abs(t)));
}
function Xs(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(pt(n) / 3))) * 3 - pt(Math.abs(t)));
}
function qs(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, pt(n) - pt(t)) + 1;
}
function Hs(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Bs(t) {
  return function() {
    return t;
  };
}
function Gs(t) {
  return +t;
}
var Te = [0, 1];
function ut(t) {
  return t;
}
function zn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Bs(isNaN(n) ? NaN : 0.5);
}
function Us(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ys(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = zn(i, r), o = e(a, o)) : (r = zn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ks(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = zn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Yr(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Vs(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function js() {
  var t = Te, n = Te, e = Gn, r, i, o, a = ut, s, u, f;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== ut && (a = Us(t[0], t[h - 1])), s = h > 2 ? Ks : Ys, u = f = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return l.invert = function(h) {
    return a(i((f || (f = s(n, t.map(r), C)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Gs), c()) : t.slice();
  }, l.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, l.rangeRound = function(h) {
    return n = Array.from(h), e = ha, c();
  }, l.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : ut, c()) : a !== ut;
  }, l.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, l.unknown = function(h) {
    return arguments.length ? (o = h, l) : o;
  }, function(h, y) {
    return r = h, i = y, c();
  };
}
function Zs() {
  return js()(ut, ut);
}
function Ws(t, n, e, r) {
  var i = Wr(t, n, e), o;
  switch (r = tn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Xs(i, a)) && (r.precision = o), Tr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = qs(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ls(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return an(r);
}
function Js(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Zr(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Ws(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, f, c = 10;
    for (s < a && (f = a, a = s, s = f, f = i, i = o, o = f); c-- > 0; ) {
      if (f = xn(a, s, e), f === u)
        return r[i] = a, r[o] = s, n(r);
      if (f > 0)
        a = Math.floor(a / f) * f, s = Math.ceil(s / f) * f;
      else if (f < 0)
        a = Math.ceil(a * f) / f, s = Math.floor(s * f) / f;
      else
        break;
      u = f;
    }
    return t;
  }, t;
}
function dt() {
  var t = Zs();
  return t.copy = function() {
    return Vs(t, dt());
  }, Hs.apply(t, arguments), Js(t);
}
function Mt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Mt.prototype = {
  constructor: Mt,
  scale: function(t) {
    return t === 1 ? this : new Mt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Mt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Mt.prototype;
var Ar = typeof global == "object" && global && global.Object === Object && global, Qs = typeof self == "object" && self && self.Object === Object && self, V = Ar || Qs || Function("return this")(), H = V.Symbol, Sr = Object.prototype, tu = Sr.hasOwnProperty, nu = Sr.toString, wt = H ? H.toStringTag : void 0;
function eu(t) {
  var n = tu.call(t, wt), e = t[wt];
  try {
    t[wt] = void 0;
    var r = !0;
  } catch {
  }
  var i = nu.call(t);
  return r && (n ? t[wt] = e : delete t[wt]), i;
}
var ru = Object.prototype, iu = ru.toString;
function ou(t) {
  return iu.call(t);
}
var au = "[object Null]", su = "[object Undefined]", Ae = H ? H.toStringTag : void 0;
function _t(t) {
  return t == null ? t === void 0 ? su : au : Ae && Ae in Object(t) ? eu(t) : ou(t);
}
function gt(t) {
  return t != null && typeof t == "object";
}
var uu = "[object Symbol]";
function sn(t) {
  return typeof t == "symbol" || gt(t) && _t(t) == uu;
}
function Er(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var R = Array.isArray, Se = H ? H.prototype : void 0, Ee = Se ? Se.toString : void 0;
function Pr(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return Er(t, Pr) + "";
  if (sn(t))
    return Ee ? Ee.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var fu = /\s/;
function lu(t) {
  for (var n = t.length; n-- && fu.test(t.charAt(n)); )
    ;
  return n;
}
var cu = /^\s+/;
function hu(t) {
  return t && t.slice(0, lu(t) + 1).replace(cu, "");
}
function yt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Pe = NaN, pu = /^[-+]0x[0-9a-f]+$/i, du = /^0b[01]+$/i, gu = /^0o[0-7]+$/i, yu = parseInt;
function _u(t) {
  if (typeof t == "number")
    return t;
  if (sn(t))
    return Pe;
  if (yt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = yt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = hu(t);
  var e = du.test(t);
  return e || gu.test(t) ? yu(t.slice(2), e ? 2 : 8) : pu.test(t) ? Pe : +t;
}
var mu = 1 / 0, vu = 17976931348623157e292;
function _n(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = _u(t), t === mu || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * vu;
  }
  return t === t ? t : 0;
}
function wu(t) {
  return t;
}
var xu = "[object AsyncFunction]", bu = "[object Function]", Mu = "[object GeneratorFunction]", $u = "[object Proxy]";
function Nr(t) {
  if (!yt(t))
    return !1;
  var n = _t(t);
  return n == bu || n == Mu || n == xu || n == $u;
}
var mn = V["__core-js_shared__"], Ne = function() {
  var t = /[^.]+$/.exec(mn && mn.keys && mn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Tu(t) {
  return !!Ne && Ne in t;
}
var Au = Function.prototype, Su = Au.toString;
function at(t) {
  if (t != null) {
    try {
      return Su.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Eu = /[\\^$.*+?()[\]{}|]/g, Pu = /^\[object .+?Constructor\]$/, Nu = Function.prototype, Iu = Object.prototype, zu = Nu.toString, Ou = Iu.hasOwnProperty, Cu = RegExp(
  "^" + zu.call(Ou).replace(Eu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ku(t) {
  if (!yt(t) || Tu(t))
    return !1;
  var n = Nr(t) ? Cu : Pu;
  return n.test(at(t));
}
function Ru(t, n) {
  return t == null ? void 0 : t[n];
}
function mt(t, n) {
  var e = Ru(t, n);
  return ku(e) ? e : void 0;
}
var On = mt(V, "WeakMap"), Fu = 9007199254740991, Du = /^(?:0|[1-9]\d*)$/;
function jn(t, n) {
  var e = typeof t;
  return n = n ?? Fu, !!n && (e == "number" || e != "symbol" && Du.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Zn(t, n) {
  return t === n || t !== t && n !== n;
}
var Lu = 9007199254740991;
function Wn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Lu;
}
function un(t) {
  return t != null && Wn(t.length) && !Nr(t);
}
function Xu(t, n, e) {
  if (!yt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? un(e) && jn(n, e.length) : r == "string" && n in e) ? Zn(e[n], t) : !1;
}
var qu = Object.prototype;
function Hu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || qu;
  return t === e;
}
function Bu(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Gu = "[object Arguments]";
function Ie(t) {
  return gt(t) && _t(t) == Gu;
}
var Ir = Object.prototype, Uu = Ir.hasOwnProperty, Yu = Ir.propertyIsEnumerable, Jn = Ie(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ie : function(t) {
  return gt(t) && Uu.call(t, "callee") && !Yu.call(t, "callee");
};
function Ku() {
  return !1;
}
var zr = typeof exports == "object" && exports && !exports.nodeType && exports, ze = zr && typeof module == "object" && module && !module.nodeType && module, Vu = ze && ze.exports === zr, Oe = Vu ? V.Buffer : void 0, ju = Oe ? Oe.isBuffer : void 0, Cn = ju || Ku, Zu = "[object Arguments]", Wu = "[object Array]", Ju = "[object Boolean]", Qu = "[object Date]", tf = "[object Error]", nf = "[object Function]", ef = "[object Map]", rf = "[object Number]", of = "[object Object]", af = "[object RegExp]", sf = "[object Set]", uf = "[object String]", ff = "[object WeakMap]", lf = "[object ArrayBuffer]", cf = "[object DataView]", hf = "[object Float32Array]", pf = "[object Float64Array]", df = "[object Int8Array]", gf = "[object Int16Array]", yf = "[object Int32Array]", _f = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", vf = "[object Uint16Array]", wf = "[object Uint32Array]", $ = {};
$[hf] = $[pf] = $[df] = $[gf] = $[yf] = $[_f] = $[mf] = $[vf] = $[wf] = !0;
$[Zu] = $[Wu] = $[lf] = $[Ju] = $[cf] = $[Qu] = $[tf] = $[nf] = $[ef] = $[rf] = $[of] = $[af] = $[sf] = $[uf] = $[ff] = !1;
function xf(t) {
  return gt(t) && Wn(t.length) && !!$[_t(t)];
}
function bf(t) {
  return function(n) {
    return t(n);
  };
}
var Or = typeof exports == "object" && exports && !exports.nodeType && exports, $t = Or && typeof module == "object" && module && !module.nodeType && module, Mf = $t && $t.exports === Or, vn = Mf && Ar.process, Ce = function() {
  try {
    var t = $t && $t.require && $t.require("util").types;
    return t || vn && vn.binding && vn.binding("util");
  } catch {
  }
}(), ke = Ce && Ce.isTypedArray, Cr = ke ? bf(ke) : xf, $f = Object.prototype, Tf = $f.hasOwnProperty;
function Af(t, n) {
  var e = R(t), r = !e && Jn(t), i = !e && !r && Cn(t), o = !e && !r && !i && Cr(t), a = e || r || i || o, s = a ? Bu(t.length, String) : [], u = s.length;
  for (var f in t)
    Tf.call(t, f) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    jn(f, u))) && s.push(f);
  return s;
}
function Sf(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Ef = Sf(Object.keys, Object), Pf = Object.prototype, Nf = Pf.hasOwnProperty;
function If(t) {
  if (!Hu(t))
    return Ef(t);
  var n = [];
  for (var e in Object(t))
    Nf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Qn(t) {
  return un(t) ? Af(t) : If(t);
}
var zf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Of = /^\w*$/;
function te(t, n) {
  if (R(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || sn(t) ? !0 : Of.test(t) || !zf.test(t) || n != null && t in Object(n);
}
var Pt = mt(Object, "create");
function Cf() {
  this.__data__ = Pt ? Pt(null) : {}, this.size = 0;
}
function kf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Rf = "__lodash_hash_undefined__", Ff = Object.prototype, Df = Ff.hasOwnProperty;
function Lf(t) {
  var n = this.__data__;
  if (Pt) {
    var e = n[t];
    return e === Rf ? void 0 : e;
  }
  return Df.call(n, t) ? n[t] : void 0;
}
var Xf = Object.prototype, qf = Xf.hasOwnProperty;
function Hf(t) {
  var n = this.__data__;
  return Pt ? n[t] !== void 0 : qf.call(n, t);
}
var Bf = "__lodash_hash_undefined__";
function Gf(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Pt && n === void 0 ? Bf : n, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Cf;
ot.prototype.delete = kf;
ot.prototype.get = Lf;
ot.prototype.has = Hf;
ot.prototype.set = Gf;
function Uf() {
  this.__data__ = [], this.size = 0;
}
function fn(t, n) {
  for (var e = t.length; e--; )
    if (Zn(t[e][0], n))
      return e;
  return -1;
}
var Yf = Array.prototype, Kf = Yf.splice;
function Vf(t) {
  var n = this.__data__, e = fn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Kf.call(n, e, 1), --this.size, !0;
}
function jf(t) {
  var n = this.__data__, e = fn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Zf(t) {
  return fn(this.__data__, t) > -1;
}
function Wf(t, n) {
  var e = this.__data__, r = fn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function j(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
j.prototype.clear = Uf;
j.prototype.delete = Vf;
j.prototype.get = jf;
j.prototype.has = Zf;
j.prototype.set = Wf;
var Nt = mt(V, "Map");
function Jf() {
  this.size = 0, this.__data__ = {
    hash: new ot(),
    map: new (Nt || j)(),
    string: new ot()
  };
}
function Qf(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function ln(t, n) {
  var e = t.__data__;
  return Qf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function tl(t) {
  var n = ln(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function nl(t) {
  return ln(this, t).get(t);
}
function el(t) {
  return ln(this, t).has(t);
}
function rl(t, n) {
  var e = ln(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function Z(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = Jf;
Z.prototype.delete = tl;
Z.prototype.get = nl;
Z.prototype.has = el;
Z.prototype.set = rl;
var il = "Expected a function";
function ne(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(il);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (ne.Cache || Z)(), e;
}
ne.Cache = Z;
var ol = 500;
function al(t) {
  var n = ne(t, function(r) {
    return e.size === ol && e.clear(), r;
  }), e = n.cache;
  return n;
}
var sl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ul = /\\(\\)?/g, fl = al(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(sl, function(e, r, i, o) {
    n.push(i ? o.replace(ul, "$1") : r || e);
  }), n;
});
function ll(t) {
  return t == null ? "" : Pr(t);
}
function kr(t, n) {
  return R(t) ? t : te(t, n) ? [t] : fl(ll(t));
}
function cn(t) {
  if (typeof t == "string" || sn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Rr(t, n) {
  n = kr(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[cn(n[e++])];
  return e && e == r ? t : void 0;
}
function cl(t, n, e) {
  var r = t == null ? void 0 : Rr(t, n);
  return r === void 0 ? e : r;
}
function Fr(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Re = H ? H.isConcatSpreadable : void 0;
function hl(t) {
  return R(t) || Jn(t) || !!(Re && t && t[Re]);
}
function pl(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = hl), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Fr(i, s) : i[i.length] = s;
  }
  return i;
}
function dl(t) {
  var n = t == null ? 0 : t.length;
  return n ? pl(t) : [];
}
function gl() {
  this.__data__ = new j(), this.size = 0;
}
function yl(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function _l(t) {
  return this.__data__.get(t);
}
function ml(t) {
  return this.__data__.has(t);
}
var vl = 200;
function wl(t, n) {
  var e = this.__data__;
  if (e instanceof j) {
    var r = e.__data__;
    if (!Nt || r.length < vl - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new Z(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function Y(t) {
  var n = this.__data__ = new j(t);
  this.size = n.size;
}
Y.prototype.clear = gl;
Y.prototype.delete = yl;
Y.prototype.get = _l;
Y.prototype.has = ml;
Y.prototype.set = wl;
function xl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function bl() {
  return [];
}
var Ml = Object.prototype, $l = Ml.propertyIsEnumerable, Fe = Object.getOwnPropertySymbols, Tl = Fe ? function(t) {
  return t == null ? [] : (t = Object(t), xl(Fe(t), function(n) {
    return $l.call(t, n);
  }));
} : bl;
function Al(t, n, e) {
  var r = n(t);
  return R(t) ? r : Fr(r, e(t));
}
function De(t) {
  return Al(t, Qn, Tl);
}
var kn = mt(V, "DataView"), Rn = mt(V, "Promise"), Fn = mt(V, "Set"), Le = "[object Map]", Sl = "[object Object]", Xe = "[object Promise]", qe = "[object Set]", He = "[object WeakMap]", Be = "[object DataView]", El = at(kn), Pl = at(Nt), Nl = at(Rn), Il = at(Fn), zl = at(On), J = _t;
(kn && J(new kn(new ArrayBuffer(1))) != Be || Nt && J(new Nt()) != Le || Rn && J(Rn.resolve()) != Xe || Fn && J(new Fn()) != qe || On && J(new On()) != He) && (J = function(t) {
  var n = _t(t), e = n == Sl ? t.constructor : void 0, r = e ? at(e) : "";
  if (r)
    switch (r) {
      case El:
        return Be;
      case Pl:
        return Le;
      case Nl:
        return Xe;
      case Il:
        return qe;
      case zl:
        return He;
    }
  return n;
});
var Ge = V.Uint8Array, Ol = "__lodash_hash_undefined__";
function Cl(t) {
  return this.__data__.set(t, Ol), this;
}
function kl(t) {
  return this.__data__.has(t);
}
function nn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new Z(); ++n < e; )
    this.add(t[n]);
}
nn.prototype.add = nn.prototype.push = Cl;
nn.prototype.has = kl;
function Rl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Fl(t, n) {
  return t.has(n);
}
var Dl = 1, Ll = 2;
function Dr(t, n, e, r, i, o) {
  var a = e & Dl, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var f = o.get(t), c = o.get(n);
  if (f && c)
    return f == n && c == t;
  var l = -1, h = !0, y = e & Ll ? new nn() : void 0;
  for (o.set(t, n), o.set(n, t); ++l < s; ) {
    var p = t[l], d = n[l];
    if (r)
      var w = a ? r(d, p, l, n, t, o) : r(p, d, l, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (y) {
      if (!Rl(n, function(b, g) {
        if (!Fl(y, g) && (p === b || i(p, b, e, r, o)))
          return y.push(g);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === d || i(p, d, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Xl(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function ql(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Hl = 1, Bl = 2, Gl = "[object Boolean]", Ul = "[object Date]", Yl = "[object Error]", Kl = "[object Map]", Vl = "[object Number]", jl = "[object RegExp]", Zl = "[object Set]", Wl = "[object String]", Jl = "[object Symbol]", Ql = "[object ArrayBuffer]", tc = "[object DataView]", Ue = H ? H.prototype : void 0, wn = Ue ? Ue.valueOf : void 0;
function nc(t, n, e, r, i, o, a) {
  switch (e) {
    case tc:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Ql:
      return !(t.byteLength != n.byteLength || !o(new Ge(t), new Ge(n)));
    case Gl:
    case Ul:
    case Vl:
      return Zn(+t, +n);
    case Yl:
      return t.name == n.name && t.message == n.message;
    case jl:
    case Wl:
      return t == n + "";
    case Kl:
      var s = Xl;
    case Zl:
      var u = r & Hl;
      if (s || (s = ql), t.size != n.size && !u)
        return !1;
      var f = a.get(t);
      if (f)
        return f == n;
      r |= Bl, a.set(t, n);
      var c = Dr(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case Jl:
      if (wn)
        return wn.call(t) == wn.call(n);
  }
  return !1;
}
var ec = 1, rc = Object.prototype, ic = rc.hasOwnProperty;
function oc(t, n, e, r, i, o) {
  var a = e & ec, s = De(t), u = s.length, f = De(n), c = f.length;
  if (u != c && !a)
    return !1;
  for (var l = u; l--; ) {
    var h = s[l];
    if (!(a ? h in n : ic.call(n, h)))
      return !1;
  }
  var y = o.get(t), p = o.get(n);
  if (y && p)
    return y == n && p == t;
  var d = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++l < u; ) {
    h = s[l];
    var b = t[h], g = n[h];
    if (r)
      var M = a ? r(g, b, h, n, t, o) : r(b, g, h, t, n, o);
    if (!(M === void 0 ? b === g || i(b, g, e, r, o) : M)) {
      d = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (d && !w) {
    var _ = t.constructor, v = n.constructor;
    _ != v && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof v == "function" && v instanceof v) && (d = !1);
  }
  return o.delete(t), o.delete(n), d;
}
var ac = 1, Ye = "[object Arguments]", Ke = "[object Array]", Xt = "[object Object]", sc = Object.prototype, Ve = sc.hasOwnProperty;
function uc(t, n, e, r, i, o) {
  var a = R(t), s = R(n), u = a ? Ke : J(t), f = s ? Ke : J(n);
  u = u == Ye ? Xt : u, f = f == Ye ? Xt : f;
  var c = u == Xt, l = f == Xt, h = u == f;
  if (h && Cn(t)) {
    if (!Cn(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new Y()), a || Cr(t) ? Dr(t, n, e, r, i, o) : nc(t, n, u, e, r, i, o);
  if (!(e & ac)) {
    var y = c && Ve.call(t, "__wrapped__"), p = l && Ve.call(n, "__wrapped__");
    if (y || p) {
      var d = y ? t.value() : t, w = p ? n.value() : n;
      return o || (o = new Y()), i(d, w, e, r, o);
    }
  }
  return h ? (o || (o = new Y()), oc(t, n, e, r, i, o)) : !1;
}
function ee(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !gt(t) && !gt(n) ? t !== t && n !== n : uc(t, n, e, r, ee, i);
}
var fc = 1, lc = 2;
function cc(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], f = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new Y(), l;
      if (!(l === void 0 ? ee(f, u, fc | lc, r, c) : l))
        return !1;
    }
  }
  return !0;
}
function Lr(t) {
  return t === t && !yt(t);
}
function hc(t) {
  for (var n = Qn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Lr(i)];
  }
  return n;
}
function Xr(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function pc(t) {
  var n = hc(t);
  return n.length == 1 && n[0][2] ? Xr(n[0][0], n[0][1]) : function(e) {
    return e === t || cc(e, t, n);
  };
}
function dc(t, n) {
  return t != null && n in Object(t);
}
function gc(t, n, e) {
  n = kr(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = cn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Wn(i) && jn(a, i) && (R(t) || Jn(t)));
}
function yc(t, n) {
  return t != null && gc(t, n, dc);
}
var _c = 1, mc = 2;
function vc(t, n) {
  return te(t) && Lr(n) ? Xr(cn(t), n) : function(e) {
    var r = cl(e, t);
    return r === void 0 && r === n ? yc(e, t) : ee(n, r, _c | mc);
  };
}
function wc(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function xc(t) {
  return function(n) {
    return Rr(n, t);
  };
}
function bc(t) {
  return te(t) ? wc(cn(t)) : xc(t);
}
function Mc(t) {
  return typeof t == "function" ? t : t == null ? wu : typeof t == "object" ? R(t) ? vc(t[0], t[1]) : pc(t) : bc(t);
}
function $c(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var Tc = $c();
function Ac(t, n) {
  return t && Tc(t, n, Qn);
}
function Sc(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!un(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ec = Sc(Ac);
function Pc(t, n) {
  var e = -1, r = un(t) ? Array(t.length) : [];
  return Ec(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function je(t, n) {
  var e = R(t) ? Er : Pc;
  return e(t, Mc(n));
}
var Nc = Math.ceil, Ic = Math.max;
function zc(t, n, e, r) {
  for (var i = -1, o = Ic(Nc((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Oc(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Xu(n, e, r) && (e = r = void 0), n = _n(n), e === void 0 ? (e = n, n = 0) : e = _n(e), r = r === void 0 ? n < e ? 1 : -1 : _n(r), zc(n, e, r);
  };
}
var Cc = Oc();
const uh = (t, n, e = 12, r = 12) => {
  const i = dt().domain([0, e]).range([0, t]), o = dt().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Cc((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, f) {
      typeof u == "number" && (u = [u]), typeof f == "number" && (f = [f]);
      const c = dl(je(f, function(l) {
        return je(
          u,
          function(h) {
            return { x: i(h), y: o(l) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, kc = "_widget_1279t_47", Rc = "_title_1279t_59", Fc = "_label_1279t_67", Dc = "_lit_1279t_72", Lc = "_button_1279t_76", Xc = "_symbol_1279t_76", qc = "_radio_1279t_77", Hc = "_radiobutton_1279t_77", Bc = "_selected_1279t_83", Gc = "_toggle_1279t_84", Uc = "_slider_1279t_93", Yc = "_track_1279t_93", Kc = "_track_overlay_1279t_98", Vc = "_handle_1279t_106", m = {
  widget: kc,
  title: Rc,
  label: Fc,
  lit: Dc,
  button: Lc,
  symbol: Xc,
  radio: qc,
  radiobutton: Hc,
  selected: Bc,
  toggle: Gc,
  slider: Uc,
  track: Yc,
  track_overlay: Kc,
  handle: Vc
}, hn = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, re = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, jc = (t = 1) => {
  const n = D();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Zc = (t = 1) => {
  const n = D(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Wc = (t = 1) => {
  const n = D();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Jc = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = D();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Qc = (t = 1) => {
  const n = D(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], f = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + f[0], u[1] + f[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, th = (t = 1) => {
  const n = D(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, nh = (t = 1) => {
  const n = D(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], f = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + f[0], u[1] + f[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, eh = (t = 1) => {
  var n = D(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, rh = (t = 1) => {
  const n = D(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Dn = (t) => {
  switch (t) {
    case "play":
      return jc;
    case "forward":
      return Zc;
    case "back":
      return Wc;
    case "pause":
      return Jc;
    case "reload":
      return Qc;
    case "capture":
      return th;
    case "rewind":
      return nh;
    case "stop":
      return eh;
    case "push":
      return rh;
  }
}, fh = () => {
  const t = "button";
  var n = hn(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, f = function(p) {
  }, c = ["play"], l = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return f = p, this;
      f(p);
    },
    actions: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    click: function() {
      l = (l + 1) % c.length, f(), S(this.parentNode).select("." + m.symbol).attr("d", Dn(c[l])(r * e));
    },
    press: function(p) {
      l = (l + 1) % c.length, f(), p.select("#button_" + n).select("." + m.symbol).attr("d", Dn(c[l])(r * e));
    }
  };
}, lh = () => {
  const t = "slider", n = an(".3f");
  var e = hn(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", f = 4, c = null, l = function(g) {
  }, h = function(g) {
  }, y = [0, 1], p = 0, d = null, w = dt().domain(y).range([0, r]).clamp(!0);
  const b = function(g, M, _ = y) {
    const v = g.select("#slider_" + e);
    w.domain(_), p = M, v.selectAll("." + m.handle).transition().attr("cx", w(M)), a && v.select("." + m.label).text(d + " = " + n(p)), l(), h();
  };
  return {
    type: t,
    scale: w,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    labelpadding: function(g) {
      return typeof g > "u" ? f : (f = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return l = g, this;
      l(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    range: function(g) {
      return typeof g > "u" ? y : (y = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: b,
    click: b
  };
}, ch = () => {
  const t = "toggle";
  var n = hn(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(l) {
  }, u = 0;
  return {
    type: t,
    id: function(l) {
      return typeof l > "u" ? n : (n = l, this);
    },
    size: function(l) {
      return typeof l > "u" ? e : (e = l, this);
    },
    position: function(l) {
      return typeof l > "u" ? r : (r = l, this);
    },
    x: function(l) {
      return typeof l > "u" ? r.x : (r.x = l, this);
    },
    y: function(l) {
      return typeof l > "u" ? r.y : (r.y = l, this);
    },
    label: function(l) {
      return typeof l > "u" ? i : (i = l, this);
    },
    labelposition: function(l) {
      return typeof l > "u" ? o : (o = l, this);
    },
    fontsize: function(l) {
      return typeof l > "u" ? a : (a = l, this);
    },
    update: function(l) {
      if (typeof l == "function")
        return s = l, this;
      s(l);
    },
    value: function(l) {
      return typeof l > "u" ? u : (u = l, this);
    },
    click: function() {
      u = !u;
      const l = S(this.parentNode);
      l.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), l.classed(m.selected, u), s();
    },
    reset: function(l, h) {
      u = h;
      const y = l.select("#toggle_" + n);
      y.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), y.classed(m.selected, u), s();
    }
  };
}, hh = () => {
  const t = "radio";
  var n = hn(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", f = null, c = function(d) {
  }, l = [], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    buttonsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    buttonpadding: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    orientation: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return c = d, this;
      c(d);
    },
    choices: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function(d, w) {
      h = w, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (b) => b == h), c();
    },
    reset: function(d, w) {
      h = w, d.select("#radio_" + n).selectAll("." + m.symbol).classed(m.selected, (b) => b == h), c();
    }
  };
}, ih = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", Dn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = re(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, qr = (t, n) => {
  const e = D();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, oh = (t, n) => {
  const e = an(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const f = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (b) => {
    const g = b && b.sourceEvent ? b.sourceEvent : b;
    return g ? g.clientX != null ? g.clientX : g.touches && g.touches.length ? g.touches[0].clientX : g.changedTouches && g.changedTouches.length ? g.changedTouches[0].clientX : null : null;
  }, l = (b, g) => {
    const M = c(b);
    if (M == null) return null;
    const _ = g.getBoundingClientRect(), v = M - _.left, T = g.width && g.width.baseVal ? g.width.baseVal.value : _.width, A = _.width ? T / _.width : 1;
    return v * A - f;
  };
  s.append("path").attr("d", qr(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * f).attr("height", 2 * f).attr("transform", "translate(" + -f + "," + -f + ")").attr("class", m.track_overlay).on("click", function(b) {
    const g = l(b, this);
    if (g == null) return;
    const M = Math.max(0, Math.min(t.size(), g));
    t.value(a.invert(M)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Bo().on("drag", function(b) {
      const g = l(b, this);
      if (g == null) return;
      const M = Math.max(0, Math.min(t.size(), g));
      t.value(a.invert(M)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var h, y, p, d = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? y = t.labelposition().match(/bottom/i) != null ? Ct([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Ct([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : y = t.labelposition().match(/bottom/i) != null ? Ct([t.girth() / 2, t.knob()]) + 7 + w : -Ct([t.girth() / 2, t.knob()]) - 7 - w, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, p = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", p).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + y + ")"), u;
}, ah = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", qr(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = re(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, sh = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Jr(a), u = dt().domain([0, a - 1]).range([0, t.size()]), f = dt().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + f(w) + ")" : "translate(" + u(w) + ",0)");
  var y, p;
  t.shape() == "rect" ? (y = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (y = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), y.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), p.attr("class", m.symbol), p.filter((w) => w == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const d = re(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(w, b) {
    return t.choices()[b];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, ph = (t, n) => {
  switch (t.type) {
    case "button":
      return ih(t);
    case "slider":
      return oh(t);
    case "radio":
      return sh(t);
    case "toggle":
      return ah(t);
  }
};
export {
  fh as button,
  uh as grid,
  hh as radio,
  lh as slider,
  m as styles,
  ch as toggle,
  ph as widget
};
