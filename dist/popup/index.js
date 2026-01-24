(function () { const O = document.createElement("link").relList; if (O && O.supports && O.supports("modulepreload")) return; for (const M of document.querySelectorAll('link[rel="modulepreload"]')) d(M); new MutationObserver(M => { for (const U of M) if (U.type === "childList") for (const V of U.addedNodes) V.tagName === "LINK" && V.rel === "modulepreload" && d(V) }).observe(document, { childList: !0, subtree: !0 }); function C(M) { const U = {}; return M.integrity && (U.integrity = M.integrity), M.referrerPolicy && (U.referrerPolicy = M.referrerPolicy), M.crossOrigin === "use-credentials" ? U.credentials = "include" : M.crossOrigin === "anonymous" ? U.credentials = "omit" : U.credentials = "same-origin", U } function d(M) { if (M.ep) return; M.ep = !0; const U = C(M); fetch(M.href, U) } })(); var ic = { exports: {} }, _n = {}; var hd; function dp() { if (hd) return _n; hd = 1; var A = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment"); function C(d, M, U) { var V = null; if (U !== void 0 && (V = "" + U), M.key !== void 0 && (V = "" + M.key), "key" in M) { U = {}; for (var be in M) be !== "key" && (U[be] = M[be]) } else U = M; return M = U.ref, { $$typeof: A, type: d, key: V, ref: M !== void 0 ? M : null, props: U } } return _n.Fragment = O, _n.jsx = C, _n.jsxs = C, _n } var bd; function mp() { return bd || (bd = 1, ic.exports = dp()), ic.exports } var E = mp(), uc = { exports: {} }, Y = {}; var vd; function yp() { if (vd) return Y; vd = 1; var A = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), V = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), B = Symbol.iterator; function fe(s) { return s === null || typeof s != "object" ? null : (s = B && s[B] || s["@@iterator"], typeof s == "function" ? s : null) } var he = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, L = Object.assign, ee = {}; function xe(s, S, j) { this.props = s, this.context = S, this.refs = ee, this.updater = j || he } xe.prototype.isReactComponent = {}, xe.prototype.setState = function (s, S) { if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, s, S, "setState") }, xe.prototype.forceUpdate = function (s) { this.updater.enqueueForceUpdate(this, s, "forceUpdate") }; function vt() { } vt.prototype = xe.prototype; function Be(s, S, j) { this.props = s, this.context = S, this.refs = ee, this.updater = j || he } var ct = Be.prototype = new vt; ct.constructor = Be, L(ct, xe.prototype), ct.isPureReactComponent = !0; var wt = Array.isArray; function Qe() { } var $ = { H: null, A: null, T: null, S: null }, Le = Object.prototype.hasOwnProperty; function jt(s, S, j) { var N = j.ref; return { $$typeof: A, type: s, key: S, ref: N !== void 0 ? N : null, props: j } } function Ga(s, S) { return jt(s.type, S, s.props) } function Et(s) { return typeof s == "object" && s !== null && s.$$typeof === A } function Xe(s) { var S = { "=": "=0", ":": "=2" }; return "$" + s.replace(/[=:]/g, function (j) { return S[j] }) } var Sa = /\/+/g; function Ot(s, S) { return typeof s == "object" && s !== null && s.key != null ? Xe("" + s.key) : S.toString(36) } function _t(s) { switch (s.status) { case "fulfilled": return s.value; case "rejected": throw s.reason; default: switch (typeof s.status == "string" ? s.then(Qe, Qe) : (s.status = "pending", s.then(function (S) { s.status === "pending" && (s.status = "fulfilled", s.value = S) }, function (S) { s.status === "pending" && (s.status = "rejected", s.reason = S) })), s.status) { case "fulfilled": return s.value; case "rejected": throw s.reason } }throw s } function b(s, S, j, N, G) { var K = typeof s; (K === "undefined" || K === "boolean") && (s = null); var ne = !1; if (s === null) ne = !0; else switch (K) { case "bigint": case "string": case "number": ne = !0; break; case "object": switch (s.$$typeof) { case A: case O: ne = !0; break; case Z: return ne = s._init, b(ne(s._payload), S, j, N, G) } }if (ne) return G = G(s), ne = N === "" ? "." + Ot(s, 0) : N, wt(G) ? (j = "", ne != null && (j = ne.replace(Sa, "$&/") + "/"), b(G, S, j, "", function (El) { return El })) : G != null && (Et(G) && (G = Ga(G, j + (G.key == null || s && s.key === G.key ? "" : ("" + G.key).replace(Sa, "$&/") + "/") + ne)), S.push(G)), 1; ne = 0; var Ye = N === "" ? "." : N + ":"; if (wt(s)) for (var Te = 0; Te < s.length; Te++)N = s[Te], K = Ye + Ot(N, Te), ne += b(N, S, j, K, G); else if (Te = fe(s), typeof Te == "function") for (s = Te.call(s), Te = 0; !(N = s.next()).done;)N = N.value, K = Ye + Ot(N, Te++), ne += b(N, S, j, K, G); else if (K === "object") { if (typeof s.then == "function") return b(_t(s), S, j, N, G); throw S = String(s), Error("Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead.") } return ne } function w(s, S, j) { if (s == null) return s; var N = [], G = 0; return b(s, N, "", "", function (K) { return S.call(j, K, G++) }), N } function k(s) { if (s._status === -1) { var S = s._result; S = S(), S.then(function (j) { (s._status === 0 || s._status === -1) && (s._status = 1, s._result = j) }, function (j) { (s._status === 0 || s._status === -1) && (s._status = 2, s._result = j) }), s._status === -1 && (s._status = 0, s._result = S) } if (s._status === 1) return s._result.default; throw s._result } var oe = typeof reportError == "function" ? reportError : function (s) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var S = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s), error: s }); if (!window.dispatchEvent(S)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", s); return } console.error(s) }, de = { map: w, forEach: function (s, S, j) { w(s, function () { S.apply(this, arguments) }, j) }, count: function (s) { var S = 0; return w(s, function () { S++ }), S }, toArray: function (s) { return w(s, function (S) { return S }) || [] }, only: function (s) { if (!Et(s)) throw Error("React.Children.only expected to receive a single React element child."); return s } }; return Y.Activity = R, Y.Children = de, Y.Component = xe, Y.Fragment = C, Y.Profiler = M, Y.PureComponent = Be, Y.StrictMode = d, Y.Suspense = x, Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, Y.__COMPILER_RUNTIME = { __proto__: null, c: function (s) { return $.H.useMemoCache(s) } }, Y.cache = function (s) { return function () { return s.apply(null, arguments) } }, Y.cacheSignal = function () { return null }, Y.cloneElement = function (s, S, j) { if (s == null) throw Error("The argument must be a React element, but you passed " + s + "."); var N = L({}, s.props), G = s.key; if (S != null) for (K in S.key !== void 0 && (G = "" + S.key), S) !Le.call(S, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && S.ref === void 0 || (N[K] = S[K]); var K = arguments.length - 2; if (K === 1) N.children = j; else if (1 < K) { for (var ne = Array(K), Ye = 0; Ye < K; Ye++)ne[Ye] = arguments[Ye + 2]; N.children = ne } return jt(s.type, G, N) }, Y.createContext = function (s) { return s = { $$typeof: V, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null }, s.Provider = s, s.Consumer = { $$typeof: U, _context: s }, s }, Y.createElement = function (s, S, j) { var N, G = {}, K = null; if (S != null) for (N in S.key !== void 0 && (K = "" + S.key), S) Le.call(S, N) && N !== "key" && N !== "__self" && N !== "__source" && (G[N] = S[N]); var ne = arguments.length - 2; if (ne === 1) G.children = j; else if (1 < ne) { for (var Ye = Array(ne), Te = 0; Te < ne; Te++)Ye[Te] = arguments[Te + 2]; G.children = Ye } if (s && s.defaultProps) for (N in ne = s.defaultProps, ne) G[N] === void 0 && (G[N] = ne[N]); return jt(s, K, G) }, Y.createRef = function () { return { current: null } }, Y.forwardRef = function (s) { return { $$typeof: be, render: s } }, Y.isValidElement = Et, Y.lazy = function (s) { return { $$typeof: Z, _payload: { _status: -1, _result: s }, _init: k } }, Y.memo = function (s, S) { return { $$typeof: T, type: s, compare: S === void 0 ? null : S } }, Y.startTransition = function (s) { var S = $.T, j = {}; $.T = j; try { var N = s(), G = $.S; G !== null && G(j, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(Qe, oe) } catch (K) { oe(K) } finally { S !== null && j.types !== null && (S.types = j.types), $.T = S } }, Y.unstable_useCacheRefresh = function () { return $.H.useCacheRefresh() }, Y.use = function (s) { return $.H.use(s) }, Y.useActionState = function (s, S, j) { return $.H.useActionState(s, S, j) }, Y.useCallback = function (s, S) { return $.H.useCallback(s, S) }, Y.useContext = function (s) { return $.H.useContext(s) }, Y.useDebugValue = function () { }, Y.useDeferredValue = function (s, S) { return $.H.useDeferredValue(s, S) }, Y.useEffect = function (s, S) { return $.H.useEffect(s, S) }, Y.useEffectEvent = function (s) { return $.H.useEffectEvent(s) }, Y.useId = function () { return $.H.useId() }, Y.useImperativeHandle = function (s, S, j) { return $.H.useImperativeHandle(s, S, j) }, Y.useInsertionEffect = function (s, S) { return $.H.useInsertionEffect(s, S) }, Y.useLayoutEffect = function (s, S) { return $.H.useLayoutEffect(s, S) }, Y.useMemo = function (s, S) { return $.H.useMemo(s, S) }, Y.useOptimistic = function (s, S) { return $.H.useOptimistic(s, S) }, Y.useReducer = function (s, S, j) { return $.H.useReducer(s, S, j) }, Y.useRef = function (s) { return $.H.useRef(s) }, Y.useState = function (s) { return $.H.useState(s) }, Y.useSyncExternalStore = function (s, S, j) { return $.H.useSyncExternalStore(s, S, j) }, Y.useTransition = function () { return $.H.useTransition() }, Y.version = "19.2.3", Y } var _d; function mc() { return _d || (_d = 1, uc.exports = yp()), uc.exports } var Se = mc(), oc = { exports: {} }, Sn = {}, cc = { exports: {} }, rc = {}; var Sd; function pp() { return Sd || (Sd = 1, (function (A) { function O(b, w) { var k = b.length; b.push(w); e: for (; 0 < k;) { var oe = k - 1 >>> 1, de = b[oe]; if (0 < M(de, w)) b[oe] = w, b[k] = de, k = oe; else break e } } function C(b) { return b.length === 0 ? null : b[0] } function d(b) { if (b.length === 0) return null; var w = b[0], k = b.pop(); if (k !== w) { b[0] = k; e: for (var oe = 0, de = b.length, s = de >>> 1; oe < s;) { var S = 2 * (oe + 1) - 1, j = b[S], N = S + 1, G = b[N]; if (0 > M(j, k)) N < de && 0 > M(G, j) ? (b[oe] = G, b[N] = k, oe = N) : (b[oe] = j, b[S] = k, oe = S); else if (N < de && 0 > M(G, k)) b[oe] = G, b[N] = k, oe = N; else break e } } return w } function M(b, w) { var k = b.sortIndex - w.sortIndex; return k !== 0 ? k : b.id - w.id } if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") { var U = performance; A.unstable_now = function () { return U.now() } } else { var V = Date, be = V.now(); A.unstable_now = function () { return V.now() - be } } var x = [], T = [], Z = 1, R = null, B = 3, fe = !1, he = !1, L = !1, ee = !1, xe = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null; function ct(b) { for (var w = C(T); w !== null;) { if (w.callback === null) d(T); else if (w.startTime <= b) d(T), w.sortIndex = w.expirationTime, O(x, w); else break; w = C(T) } } function wt(b) { if (L = !1, ct(b), !he) if (C(x) !== null) he = !0, Qe || (Qe = !0, Xe()); else { var w = C(T); w !== null && _t(wt, w.startTime - b) } } var Qe = !1, $ = -1, Le = 5, jt = -1; function Ga() { return ee ? !0 : !(A.unstable_now() - jt < Le) } function Et() { if (ee = !1, Qe) { var b = A.unstable_now(); jt = b; var w = !0; try { e: { he = !1, L && (L = !1, vt($), $ = -1), fe = !0; var k = B; try { t: { for (ct(b), R = C(x); R !== null && !(R.expirationTime > b && Ga());) { var oe = R.callback; if (typeof oe == "function") { R.callback = null, B = R.priorityLevel; var de = oe(R.expirationTime <= b); if (b = A.unstable_now(), typeof de == "function") { R.callback = de, ct(b), w = !0; break t } R === C(x) && d(x), ct(b) } else d(x); R = C(x) } if (R !== null) w = !0; else { var s = C(T); s !== null && _t(wt, s.startTime - b), w = !1 } } break e } finally { R = null, B = k, fe = !1 } w = void 0 } } finally { w ? Xe() : Qe = !1 } } } var Xe; if (typeof Be == "function") Xe = function () { Be(Et) }; else if (typeof MessageChannel < "u") { var Sa = new MessageChannel, Ot = Sa.port2; Sa.port1.onmessage = Et, Xe = function () { Ot.postMessage(null) } } else Xe = function () { xe(Et, 0) }; function _t(b, w) { $ = xe(function () { b(A.unstable_now()) }, w) } A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function (b) { b.callback = null }, A.unstable_forceFrameRate = function (b) { 0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Le = 0 < b ? Math.floor(1e3 / b) : 5 }, A.unstable_getCurrentPriorityLevel = function () { return B }, A.unstable_next = function (b) { switch (B) { case 1: case 2: case 3: var w = 3; break; default: w = B }var k = B; B = w; try { return b() } finally { B = k } }, A.unstable_requestPaint = function () { ee = !0 }, A.unstable_runWithPriority = function (b, w) { switch (b) { case 1: case 2: case 3: case 4: case 5: break; default: b = 3 }var k = B; B = b; try { return w() } finally { B = k } }, A.unstable_scheduleCallback = function (b, w, k) { var oe = A.unstable_now(); switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? oe + k : oe) : k = oe, b) { case 1: var de = -1; break; case 2: de = 250; break; case 5: de = 1073741823; break; case 4: de = 1e4; break; default: de = 5e3 }return de = k + de, b = { id: Z++, callback: w, priorityLevel: b, startTime: k, expirationTime: de, sortIndex: -1 }, k > oe ? (b.sortIndex = k, O(T, b), C(x) === null && b === C(T) && (L ? (vt($), $ = -1) : L = !0, _t(wt, k - oe))) : (b.sortIndex = de, O(x, b), he || fe || (he = !0, Qe || (Qe = !0, Xe()))), b }, A.unstable_shouldYield = Ga, A.unstable_wrapCallback = function (b) { var w = B; return function () { var k = B; B = w; try { return b.apply(this, arguments) } finally { B = k } } } })(rc)), rc } var Td; function gp() { return Td || (Td = 1, cc.exports = pp()), cc.exports } var sc = { exports: {} }, ke = {}; var Ad; function hp() { if (Ad) return ke; Ad = 1; var A = mc(); function O(x) { var T = "https://react.dev/errors/" + x; if (1 < arguments.length) { T += "?args[]=" + encodeURIComponent(arguments[1]); for (var Z = 2; Z < arguments.length; Z++)T += "&args[]=" + encodeURIComponent(arguments[Z]) } return "Minified React error #" + x + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function C() { } var d = { d: { f: C, r: function () { throw Error(O(522)) }, D: C, C, L: C, m: C, X: C, S: C, M: C }, p: 0, findDOMNode: null }, M = Symbol.for("react.portal"); function U(x, T, Z) { var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: M, key: R == null ? null : "" + R, children: x, containerInfo: T, implementation: Z } } var V = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function be(x, T) { if (x === "font") return ""; if (typeof T == "string") return T === "use-credentials" ? T : "" } return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, ke.createPortal = function (x, T) { var Z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(O(299)); return U(x, T, null, Z) }, ke.flushSync = function (x) { var T = V.T, Z = d.p; try { if (V.T = null, d.p = 2, x) return x() } finally { V.T = T, d.p = Z, d.d.f() } }, ke.preconnect = function (x, T) { typeof x == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, d.d.C(x, T)) }, ke.prefetchDNS = function (x) { typeof x == "string" && d.d.D(x) }, ke.preinit = function (x, T) { if (typeof x == "string" && T && typeof T.as == "string") { var Z = T.as, R = be(Z, T.crossOrigin), B = typeof T.integrity == "string" ? T.integrity : void 0, fe = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0; Z === "style" ? d.d.S(x, typeof T.precedence == "string" ? T.precedence : void 0, { crossOrigin: R, integrity: B, fetchPriority: fe }) : Z === "script" && d.d.X(x, { crossOrigin: R, integrity: B, fetchPriority: fe, nonce: typeof T.nonce == "string" ? T.nonce : void 0 }) } }, ke.preinitModule = function (x, T) { if (typeof x == "string") if (typeof T == "object" && T !== null) { if (T.as == null || T.as === "script") { var Z = be(T.as, T.crossOrigin); d.d.M(x, { crossOrigin: Z, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0 }) } } else T == null && d.d.M(x) }, ke.preload = function (x, T) { if (typeof x == "string" && typeof T == "object" && T !== null && typeof T.as == "string") { var Z = T.as, R = be(Z, T.crossOrigin); d.d.L(x, Z, { crossOrigin: R, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0, type: typeof T.type == "string" ? T.type : void 0, fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0, referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0, imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0, imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0, media: typeof T.media == "string" ? T.media : void 0 }) } }, ke.preloadModule = function (x, T) { if (typeof x == "string") if (T) { var Z = be(T.as, T.crossOrigin); d.d.m(x, { as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0, crossOrigin: Z, integrity: typeof T.integrity == "string" ? T.integrity : void 0 }) } else d.d.m(x) }, ke.requestFormReset = function (x) { d.d.r(x) }, ke.unstable_batchedUpdates = function (x, T) { return x(T) }, ke.useFormState = function (x, T, Z) { return V.H.useFormState(x, T, Z) }, ke.useFormStatus = function () { return V.H.useHostTransitionStatus() }, ke.version = "19.2.3", ke } var wd; function bp() { if (wd) return sc.exports; wd = 1; function A() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A) } catch (O) { console.error(O) } } return A(), sc.exports = hp(), sc.exports } var jd; function vp() {
    if (jd) return Sn; jd = 1; var A = gp(), O = mc(), C = bp(); function d(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) { t += "?args[]=" + encodeURIComponent(arguments[1]); for (var a = 2; a < arguments.length; a++)t += "&args[]=" + encodeURIComponent(arguments[a]) } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function M(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) } function U(e) { var t = e, a = e; if (e.alternate) for (; t.return;)t = t.return; else { e = t; do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return; while (e) } return t.tag === 3 ? a : null } function V(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null } function be(e) { if (e.tag === 31) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null } function x(e) { if (U(e) !== e) throw Error(d(188)) } function T(e) { var t = e.alternate; if (!t) { if (t = U(e), t === null) throw Error(d(188)); return t !== e ? null : e } for (var a = e, l = t; ;) { var n = a.return; if (n === null) break; var i = n.alternate; if (i === null) { if (l = n.return, l !== null) { a = l; continue } break } if (n.child === i.child) { for (i = n.child; i;) { if (i === a) return x(n), e; if (i === l) return x(n), t; i = i.sibling } throw Error(d(188)) } if (a.return !== l.return) a = n, l = i; else { for (var u = !1, o = n.child; o;) { if (o === a) { u = !0, a = n, l = i; break } if (o === l) { u = !0, l = n, a = i; break } o = o.sibling } if (!u) { for (o = i.child; o;) { if (o === a) { u = !0, a = i, l = n; break } if (o === l) { u = !0, l = i, a = n; break } o = o.sibling } if (!u) throw Error(d(189)) } } if (a.alternate !== l) throw Error(d(190)) } if (a.tag !== 3) throw Error(d(188)); return a.stateNode.current === a ? e : t } function Z(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6) return e; for (e = e.child; e !== null;) { if (t = Z(e), t !== null) return t; e = e.sibling } return null } var R = Object.assign, B = Symbol.for("react.element"), fe = Symbol.for("react.transitional.element"), he = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), vt = Symbol.for("react.consumer"), Be = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), wt = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), jt = Symbol.for("react.activity"), Ga = Symbol.for("react.memo_cache_sentinel"), Et = Symbol.iterator; function Xe(e) { return e === null || typeof e != "object" ? null : (e = Et && e[Et] || e["@@iterator"], typeof e == "function" ? e : null) } var Sa = Symbol.for("react.client.reference"); function Ot(e) { if (e == null) return null; if (typeof e == "function") return e.$$typeof === Sa ? null : e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) { case L: return "Fragment"; case xe: return "Profiler"; case ee: return "StrictMode"; case wt: return "Suspense"; case Qe: return "SuspenseList"; case jt: return "Activity" }if (typeof e == "object") switch (e.$$typeof) { case he: return "Portal"; case Be: return e.displayName || "Context"; case vt: return (e._context.displayName || "Context") + ".Consumer"; case ct: var t = e.render; return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e; case $: return t = e.displayName || null, t !== null ? t : Ot(e.type) || "Memo"; case Le: t = e._payload, e = e._init; try { return Ot(e(t)) } catch { } }return null } var _t = Array.isArray, b = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = { pending: !1, data: null, method: null, action: null }, oe = [], de = -1; function s(e) { return { current: e } } function S(e) { 0 > de || (e.current = oe[de], oe[de] = null, de--) } function j(e, t) { de++, oe[de] = e.current, e.current = t } var N = s(null), G = s(null), K = s(null), ne = s(null); function Ye(e, t) { switch (j(K, t), j(G, e), j(N, null), t.nodeType) { case 9: case 11: e = (e = t.documentElement) && (e = e.namespaceURI) ? Yf(e) : 0; break; default: if (e = t.tagName, t = t.namespaceURI) t = Yf(t), e = Gf(t, e); else switch (e) { case "svg": e = 1; break; case "math": e = 2; break; default: e = 0 } }S(N), j(N, e) } function Te() { S(N), S(G), S(K) } function El(e) { e.memoizedState !== null && j(ne, e); var t = N.current, a = Gf(t, e.type); t !== a && (j(G, e), j(N, a)) } function Tn(e) { G.current === e && (S(N), S(G)), ne.current === e && (S(ne), gn._currentValue = k) } var Yi, pc; function Ta(e) {
        if (Yi === void 0) try { throw Error() } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/); Yi = t && t[1] || "", pc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        } return `
`+ Yi + e + pc
    } var Gi = !1; function Qi(e, t) {
        if (!e || Gi) return ""; Gi = !0; var a = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            var l = { DetermineComponentFrameRoot: function () { try { if (t) { var _ = function () { throw Error() }; if (Object.defineProperty(_.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(_, []) } catch (g) { var p = g } Reflect.construct(e, [], _) } else { try { _.call() } catch (g) { p = g } e.call(_.prototype) } } else { try { throw Error() } catch (g) { p = g } (_ = e()) && typeof _.catch == "function" && _.catch(function () { }) } } catch (g) { if (g && p && typeof g.stack == "string") return [g.stack, p.stack] } return [null, null] } }; l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"; var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name"); n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" }); var i = l.DetermineComponentFrameRoot(), u = i[0], o = i[1]; if (u && o) {
                var c = u.split(`
`), y = o.split(`
`); for (n = l = 0; l < c.length && !c[l].includes("DetermineComponentFrameRoot");)l++; for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot");)n++; if (l === c.length || n === y.length) for (l = c.length - 1, n = y.length - 1; 1 <= l && 0 <= n && c[l] !== y[n];)n--; for (; 1 <= l && 0 <= n; l--, n--)if (c[l] !== y[n]) {
                    if (l !== 1 || n !== 1) do if (l--, n--, 0 > n || c[l] !== y[n]) {
                        var h = `
`+ c[l].replace(" at new ", " at "); return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), h
                    } while (1 <= l && 0 <= n); break
                }
            }
        } finally { Gi = !1, Error.prepareStackTrace = a } return (a = e ? e.displayName || e.name : "") ? Ta(a) : ""
    } function Ld(e, t) { switch (e.tag) { case 26: case 27: case 5: return Ta(e.type); case 16: return Ta("Lazy"); case 13: return e.child !== t && t !== null ? Ta("Suspense Fallback") : Ta("Suspense"); case 19: return Ta("SuspenseList"); case 0: case 15: return Qi(e.type, !1); case 11: return Qi(e.type.render, !1); case 1: return Qi(e.type, !0); case 31: return Ta("Activity"); default: return "" } } function gc(e) {
        try { var t = "", a = null; do t += Ld(e, a), a = e, e = e.return; while (e); return t } catch (l) {
            return `
Error generating stack: `+ l.message + `
`+ l.stack
        }
    } var Li = Object.prototype.hasOwnProperty, Xi = A.unstable_scheduleCallback, Zi = A.unstable_cancelCallback, Xd = A.unstable_shouldYield, Zd = A.unstable_requestPaint, $e = A.unstable_now, Vd = A.unstable_getCurrentPriorityLevel, hc = A.unstable_ImmediatePriority, bc = A.unstable_UserBlockingPriority, An = A.unstable_NormalPriority, Kd = A.unstable_LowPriority, vc = A.unstable_IdlePriority, Jd = A.log, Wd = A.unstable_setDisableYieldValue, zl = null, Pe = null; function It(e) { if (typeof Jd == "function" && Wd(e), Pe && typeof Pe.setStrictMode == "function") try { Pe.setStrictMode(zl, e) } catch { } } var et = Math.clz32 ? Math.clz32 : $d, Id = Math.log, Fd = Math.LN2; function $d(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Id(e) / Fd | 0) | 0 } var wn = 256, jn = 262144, En = 4194304; function Aa(e) { var t = e & 42; if (t !== 0) return t; switch (e & -e) { case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: return 64; case 128: return 128; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: return e & 261888; case 262144: case 524288: case 1048576: case 2097152: return e & 3932160; case 4194304: case 8388608: case 16777216: case 33554432: return e & 62914560; case 67108864: return 67108864; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 0; default: return e } } function zn(e, t, a) { var l = e.pendingLanes; if (l === 0) return 0; var n = 0, i = e.suspendedLanes, u = e.pingedLanes; e = e.warmLanes; var o = l & 134217727; return o !== 0 ? (l = o & ~i, l !== 0 ? n = Aa(l) : (u &= o, u !== 0 ? n = Aa(u) : a || (a = o & ~e, a !== 0 && (n = Aa(a))))) : (o = l & ~i, o !== 0 ? n = Aa(o) : u !== 0 ? n = Aa(u) : a || (a = l & ~e, a !== 0 && (n = Aa(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, a = t & -t, i >= a || i === 32 && (a & 4194048) !== 0) ? t : n } function Nl(e, t) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0 } function Pd(e, t) { switch (e) { case 1: case 2: case 4: case 8: case 64: return t + 250; case 16: case 32: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t + 5e3; case 4194304: case 8388608: case 16777216: case 33554432: return -1; case 67108864: case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1 } } function _c() { var e = En; return En <<= 1, (En & 62914560) === 0 && (En = 4194304), e } function Vi(e) { for (var t = [], a = 0; 31 > a; a++)t.push(e); return t } function Hl(e, t) { e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0) } function em(e, t, a, l, n, i) { var u = e.pendingLanes; e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0; var o = e.entanglements, c = e.expirationTimes, y = e.hiddenUpdates; for (a = u & ~a; 0 < a;) { var h = 31 - et(a), _ = 1 << h; o[h] = 0, c[h] = -1; var p = y[h]; if (p !== null) for (y[h] = null, h = 0; h < p.length; h++) { var g = p[h]; g !== null && (g.lane &= -536870913) } a &= ~_ } l !== 0 && Sc(e, l, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t)) } function Sc(e, t, a) { e.pendingLanes |= t, e.suspendedLanes &= ~t; var l = 31 - et(t); e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930 } function Tc(e, t) { var a = e.entangledLanes |= t; for (e = e.entanglements; a;) { var l = 31 - et(a), n = 1 << l; n & t | e[l] & t && (e[l] |= t), a &= ~n } } function Ac(e, t) { var a = t & -t; return a = (a & 42) !== 0 ? 1 : Ki(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a } function Ki(e) { switch (e) { case 2: e = 1; break; case 8: e = 4; break; case 32: e = 16; break; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: e = 128; break; case 268435456: e = 134217728; break; default: e = 0 }return e } function Ji(e) { return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2 } function wc() { var e = w.p; return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : sd(e.type)) } function jc(e, t) { var a = w.p; try { return w.p = e, t() } finally { w.p = a } } var Ft = Math.random().toString(36).slice(2), Me = "__reactFiber$" + Ft, Ze = "__reactProps$" + Ft, Qa = "__reactContainer$" + Ft, Wi = "__reactEvents$" + Ft, tm = "__reactListeners$" + Ft, am = "__reactHandles$" + Ft, Ec = "__reactResources$" + Ft, Rl = "__reactMarker$" + Ft; function Ii(e) { delete e[Me], delete e[Ze], delete e[Wi], delete e[tm], delete e[am] } function La(e) { var t = e[Me]; if (t) return t; for (var a = e.parentNode; a;) { if (t = a[Qa] || a[Me]) { if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = Jf(e); e !== null;) { if (a = e[Me]) return a; e = Jf(e) } return t } e = a, a = e.parentNode } return null } function Xa(e) { if (e = e[Me] || e[Qa]) { var t = e.tag; if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e } return null } function Ol(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode; throw Error(d(33)) } function Za(e) { var t = e[Ec]; return t || (t = e[Ec] = { hoistableStyles: new Map, hoistableScripts: new Map }), t } function Re(e) { e[Rl] = !0 } var zc = new Set, Nc = {}; function wa(e, t) { Va(e, t), Va(e + "Capture", t) } function Va(e, t) { for (Nc[e] = t, e = 0; e < t.length; e++)zc.add(t[e]) } var lm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Hc = {}, Rc = {}; function nm(e) { return Li.call(Rc, e) ? !0 : Li.call(Hc, e) ? !1 : lm.test(e) ? Rc[e] = !0 : (Hc[e] = !0, !1) } function Nn(e, t, a) { if (nm(t)) if (a === null) e.removeAttribute(t); else { switch (typeof a) { case "undefined": case "function": case "symbol": e.removeAttribute(t); return; case "boolean": var l = t.toLowerCase().slice(0, 5); if (l !== "data-" && l !== "aria-") { e.removeAttribute(t); return } }e.setAttribute(t, "" + a) } } function Hn(e, t, a) { if (a === null) e.removeAttribute(t); else { switch (typeof a) { case "undefined": case "function": case "symbol": case "boolean": e.removeAttribute(t); return }e.setAttribute(t, "" + a) } } function xt(e, t, a, l) { if (l === null) e.removeAttribute(a); else { switch (typeof l) { case "undefined": case "function": case "symbol": case "boolean": e.removeAttribute(a); return }e.setAttributeNS(t, a, "" + l) } } function rt(e) { switch (typeof e) { case "bigint": case "boolean": case "number": case "string": case "undefined": return e; case "object": return e; default: return "" } } function Oc(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") } function im(e, t, a) { var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t); if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") { var n = l.get, i = l.set; return Object.defineProperty(e, t, { configurable: !0, get: function () { return n.call(this) }, set: function (u) { a = "" + u, i.call(this, u) } }), Object.defineProperty(e, t, { enumerable: l.enumerable }), { getValue: function () { return a }, setValue: function (u) { a = "" + u }, stopTracking: function () { e._valueTracker = null, delete e[t] } } } } function Fi(e) { if (!e._valueTracker) { var t = Oc(e) ? "checked" : "value"; e._valueTracker = im(e, t, "" + e[t]) } } function xc(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var a = t.getValue(), l = ""; return e && (l = Oc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1 } function Rn(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } } var um = /[\n"\\]/g; function st(e) { return e.replace(um, function (t) { return "\\" + t.charCodeAt(0).toString(16) + " " }) } function $i(e, t, a, l, n, i, u, o) { e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + rt(t)) : e.value !== "" + rt(t) && (e.value = "" + rt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? Pi(e, u, rt(t)) : a != null ? Pi(e, u, rt(a)) : l != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + rt(o) : e.removeAttribute("name") } function Mc(e, t, a, l, n, i, u, o) { if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || a != null) { if (!(i !== "submit" && i !== "reset" || t != null)) { Fi(e); return } a = a != null ? "" + rt(a) : "", t = t != null ? "" + rt(t) : a, o || t === e.value || (e.value = t), e.defaultValue = t } l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = o ? e.checked : !!l, e.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), Fi(e) } function Pi(e, t, a) { t === "number" && Rn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a) } function Ka(e, t, a, l) { if (e = e.options, t) { t = {}; for (var n = 0; n < a.length; n++)t["$" + a[n]] = !0; for (a = 0; a < e.length; a++)n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0) } else { for (a = "" + rt(a), t = null, n = 0; n < e.length; n++) { if (e[n].value === a) { e[n].selected = !0, l && (e[n].defaultSelected = !0); return } t !== null || e[n].disabled || (t = e[n]) } t !== null && (t.selected = !0) } } function Dc(e, t, a) { if (t != null && (t = "" + rt(t), t !== e.value && (e.value = t), a == null)) { e.defaultValue !== t && (e.defaultValue = t); return } e.defaultValue = a != null ? "" + rt(a) : "" } function Cc(e, t, a, l) { if (t == null) { if (l != null) { if (a != null) throw Error(d(92)); if (_t(l)) { if (1 < l.length) throw Error(d(93)); l = l[0] } a = l } a == null && (a = ""), t = a } a = rt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Fi(e) } function Ja(e, t) { if (t) { var a = e.firstChild; if (a && a === e.lastChild && a.nodeType === 3) { a.nodeValue = t; return } } e.textContent = t } var om = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function qc(e, t, a) { var l = t.indexOf("--") === 0; a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || om.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px" } function Uc(e, t, a) { if (t != null && typeof t != "object") throw Error(d(62)); if (e = e.style, a != null) { for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = ""); for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && qc(e, n, l) } else for (var i in t) t.hasOwnProperty(i) && qc(e, i, t[i]) } function eu(e) { if (e.indexOf("-") === -1) return !1; switch (e) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var cm = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), rm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function On(e) { return rm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e } function Mt() { } var tu = null; function au(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e } var Wa = null, Ia = null; function Bc(e) { var t = Xa(e); if (t && (e = t.stateNode)) { var a = e[Ze] || null; e: switch (e = t.stateNode, t.type) { case "input": if ($i(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) { for (a = e; a.parentNode;)a = a.parentNode; for (a = a.querySelectorAll('input[name="' + st("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) { var l = a[t]; if (l !== e && l.form === e.form) { var n = l[Ze] || null; if (!n) throw Error(d(90)); $i(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name) } } for (t = 0; t < a.length; t++)l = a[t], l.form === e.form && xc(l) } break e; case "textarea": Dc(e, a.value, a.defaultValue); break e; case "select": t = a.value, t != null && Ka(e, !!a.multiple, t, !1) } } } var lu = !1; function kc(e, t, a) { if (lu) return e(t, a); lu = !0; try { var l = e(t); return l } finally { if (lu = !1, (Wa !== null || Ia !== null) && (bi(), Wa && (t = Wa, e = Ia, Ia = Wa = null, Bc(t), e))) for (t = 0; t < e.length; t++)Bc(e[t]) } } function xl(e, t) { var a = e.stateNode; if (a === null) return null; var l = a[Ze] || null; if (l === null) return null; a = l[t]; e: switch (t) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l; break e; default: e = !1 }if (e) return null; if (a && typeof a != "function") throw Error(d(231, t, typeof a)); return a } var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nu = !1; if (Dt) try { var Ml = {}; Object.defineProperty(Ml, "passive", { get: function () { nu = !0 } }), window.addEventListener("test", Ml, Ml), window.removeEventListener("test", Ml, Ml) } catch { nu = !1 } var $t = null, iu = null, xn = null; function Yc() { if (xn) return xn; var e, t = iu, a = t.length, l, n = "value" in $t ? $t.value : $t.textContent, i = n.length; for (e = 0; e < a && t[e] === n[e]; e++); var u = a - e; for (l = 1; l <= u && t[a - l] === n[i - l]; l++); return xn = n.slice(e, 1 < l ? 1 - l : void 0) } function Mn(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 } function Dn() { return !0 } function Gc() { return !1 } function Ve(e) { function t(a, l, n, i, u) { this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = u, this.currentTarget = null; for (var o in e) e.hasOwnProperty(o) && (a = e[o], this[o] = a ? a(i) : i[o]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Dn : Gc, this.isPropagationStopped = Gc, this } return R(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var a = this.nativeEvent; a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Dn) }, stopPropagation: function () { var a = this.nativeEvent; a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Dn) }, persist: function () { }, isPersistent: Dn }), t } var ja = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, Cn = Ve(ja), Dl = R({}, ja, { view: 0, detail: 0 }), sm = Ve(Dl), uu, ou, Cl, qn = R({}, Dl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ru, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Cl && (Cl && e.type === "mousemove" ? (uu = e.screenX - Cl.screenX, ou = e.screenY - Cl.screenY) : ou = uu = 0, Cl = e), uu) }, movementY: function (e) { return "movementY" in e ? e.movementY : ou } }), Qc = Ve(qn), fm = R({}, qn, { dataTransfer: 0 }), dm = Ve(fm), mm = R({}, Dl, { relatedTarget: 0 }), cu = Ve(mm), ym = R({}, ja, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pm = Ve(ym), gm = R({}, ja, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }), hm = Ve(gm), bm = R({}, ja, { data: 0 }), Lc = Ve(bm), vm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, _m = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Sm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function Tm(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Sm[e]) ? !!t[e] : !1 } function ru() { return Tm } var Am = R({}, Dl, { key: function (e) { if (e.key) { var t = vm[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = Mn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _m[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ru, charCode: function (e) { return e.type === "keypress" ? Mn(e) : 0 }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function (e) { return e.type === "keypress" ? Mn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }), wm = Ve(Am), jm = R({}, qn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xc = Ve(jm), Em = R({}, Dl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ru }), zm = Ve(Em), Nm = R({}, ja, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hm = Ve(Nm), Rm = R({}, qn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), Om = Ve(Rm), xm = R({}, ja, { newState: 0, oldState: 0 }), Mm = Ve(xm), Dm = [9, 13, 27, 32], su = Dt && "CompositionEvent" in window, ql = null; Dt && "documentMode" in document && (ql = document.documentMode); var Cm = Dt && "TextEvent" in window && !ql, Zc = Dt && (!su || ql && 8 < ql && 11 >= ql), Vc = " ", Kc = !1; function Jc(e, t) { switch (e) { case "keyup": return Dm.indexOf(t.keyCode) !== -1; case "keydown": return t.keyCode !== 229; case "keypress": case "mousedown": case "focusout": return !0; default: return !1 } } function Wc(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null } var Fa = !1; function qm(e, t) { switch (e) { case "compositionend": return Wc(t); case "keypress": return t.which !== 32 ? null : (Kc = !0, Vc); case "textInput": return e = t.data, e === Vc && Kc ? null : e; default: return null } } function Um(e, t) { if (Fa) return e === "compositionend" || !su && Jc(e, t) ? (e = Yc(), xn = iu = $t = null, Fa = !1, e) : null; switch (e) { case "paste": return null; case "keypress": if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null; case "compositionend": return Zc && t.locale !== "ko" ? null : t.data; default: return null } } var Bm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Ic(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Bm[e.type] : t === "textarea" } function Fc(e, t, a, l) { Wa ? Ia ? Ia.push(l) : Ia = [l] : Wa = l, t = ji(t, "onChange"), 0 < t.length && (a = new Cn("onChange", "change", null, a, l), e.push({ event: a, listeners: t })) } var Ul = null, Bl = null; function km(e) { Df(e, 0) } function Un(e) { var t = Ol(e); if (xc(t)) return e } function $c(e, t) { if (e === "change") return t } var Pc = !1; if (Dt) { var fu; if (Dt) { var du = "oninput" in document; if (!du) { var er = document.createElement("div"); er.setAttribute("oninput", "return;"), du = typeof er.oninput == "function" } fu = du } else fu = !1; Pc = fu && (!document.documentMode || 9 < document.documentMode) } function tr() { Ul && (Ul.detachEvent("onpropertychange", ar), Bl = Ul = null) } function ar(e) { if (e.propertyName === "value" && Un(Bl)) { var t = []; Fc(t, Bl, e, au(e)), kc(km, t) } } function Ym(e, t, a) { e === "focusin" ? (tr(), Ul = t, Bl = a, Ul.attachEvent("onpropertychange", ar)) : e === "focusout" && tr() } function Gm(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return Un(Bl) } function Qm(e, t) { if (e === "click") return Un(t) } function Lm(e, t) { if (e === "input" || e === "change") return Un(t) } function Xm(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t } var tt = typeof Object.is == "function" ? Object.is : Xm; function kl(e, t) { if (tt(e, t)) return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1; var a = Object.keys(e), l = Object.keys(t); if (a.length !== l.length) return !1; for (l = 0; l < a.length; l++) { var n = a[l]; if (!Li.call(t, n) || !tt(e[n], t[n])) return !1 } return !0 } function lr(e) { for (; e && e.firstChild;)e = e.firstChild; return e } function nr(e, t) { var a = lr(e); e = 0; for (var l; a;) { if (a.nodeType === 3) { if (l = e + a.textContent.length, e <= t && l >= t) return { node: a, offset: t - e }; e = l } e: { for (; a;) { if (a.nextSibling) { a = a.nextSibling; break e } a = a.parentNode } a = void 0 } a = lr(a) } } function ir(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ir(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 } function ur(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var t = Rn(e.document); t instanceof e.HTMLIFrameElement;) { try { var a = typeof t.contentWindow.location.href == "string" } catch { a = !1 } if (a) e = t.contentWindow; else break; t = Rn(e.document) } return t } function mu(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") } var Zm = Dt && "documentMode" in document && 11 >= document.documentMode, $a = null, yu = null, Yl = null, pu = !1; function or(e, t, a) { var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument; pu || $a == null || $a !== Rn(l) || (l = $a, "selectionStart" in l && mu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Yl && kl(Yl, l) || (Yl = l, l = ji(yu, "onSelect"), 0 < l.length && (t = new Cn("onSelect", "select", null, t, a), e.push({ event: t, listeners: l }), t.target = $a))) } function Ea(e, t) { var a = {}; return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a } var Pa = { animationend: Ea("Animation", "AnimationEnd"), animationiteration: Ea("Animation", "AnimationIteration"), animationstart: Ea("Animation", "AnimationStart"), transitionrun: Ea("Transition", "TransitionRun"), transitionstart: Ea("Transition", "TransitionStart"), transitioncancel: Ea("Transition", "TransitionCancel"), transitionend: Ea("Transition", "TransitionEnd") }, gu = {}, cr = {}; Dt && (cr = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition); function za(e) { if (gu[e]) return gu[e]; if (!Pa[e]) return e; var t = Pa[e], a; for (a in t) if (t.hasOwnProperty(a) && a in cr) return gu[e] = t[a]; return e } var rr = za("animationend"), sr = za("animationiteration"), fr = za("animationstart"), Vm = za("transitionrun"), Km = za("transitionstart"), Jm = za("transitioncancel"), dr = za("transitionend"), mr = new Map, hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); hu.push("scrollEnd"); function St(e, t) { mr.set(e, t), wa(t, [e]) } var Bn = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e }); if (!window.dispatchEvent(t)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", e); return } console.error(e) }, ft = [], el = 0, bu = 0; function kn() { for (var e = el, t = bu = el = 0; t < e;) { var a = ft[t]; ft[t++] = null; var l = ft[t]; ft[t++] = null; var n = ft[t]; ft[t++] = null; var i = ft[t]; if (ft[t++] = null, l !== null && n !== null) { var u = l.pending; u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n } i !== 0 && yr(a, n, i) } } function Yn(e, t, a, l) { ft[el++] = e, ft[el++] = t, ft[el++] = a, ft[el++] = l, bu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l) } function vu(e, t, a, l) { return Yn(e, t, a, l), Gn(e) } function Na(e, t) { return Yn(e, null, null, t), Gn(e) } function yr(e, t, a) { e.lanes |= a; var l = e.alternate; l !== null && (l.lanes |= a); for (var n = !1, i = e.return; i !== null;)i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return; return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - et(a), e = i.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), i) : null } function Gn(e) { if (50 < rn) throw rn = 0, Ho = null, Error(d(185)); for (var t = e.return; t !== null;)e = t, t = e.return; return e.tag === 3 ? e.stateNode : null } var tl = {}; function Wm(e, t, a, l) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function at(e, t, a, l) { return new Wm(e, t, a, l) } function _u(e) { return e = e.prototype, !(!e || !e.isReactComponent) } function Ct(e, t) { var a = e.alternate; return a === null ? (a = at(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a } function pr(e, t) { e.flags &= 65011714; var a = e.alternate; return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e } function Qn(e, t, a, l, n, i) { var u = 0; if (l = e, typeof e == "function") _u(e) && (u = 1); else if (typeof e == "string") u = ep(e, a, N.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5; else e: switch (e) { case jt: return e = at(31, a, t, n), e.elementType = jt, e.lanes = i, e; case L: return Ha(a.children, n, i, t); case ee: u = 8, n |= 24; break; case xe: return e = at(12, a, t, n | 2), e.elementType = xe, e.lanes = i, e; case wt: return e = at(13, a, t, n), e.elementType = wt, e.lanes = i, e; case Qe: return e = at(19, a, t, n), e.elementType = Qe, e.lanes = i, e; default: if (typeof e == "object" && e !== null) switch (e.$$typeof) { case Be: u = 10; break e; case vt: u = 9; break e; case ct: u = 11; break e; case $: u = 14; break e; case Le: u = 16, l = null; break e }u = 29, a = Error(d(130, e === null ? "null" : typeof e, "")), l = null }return t = at(u, a, t, n), t.elementType = e, t.type = l, t.lanes = i, t } function Ha(e, t, a, l) { return e = at(7, e, l, t), e.lanes = a, e } function Su(e, t, a) { return e = at(6, e, null, t), e.lanes = a, e } function gr(e) { var t = at(18, null, null, 0); return t.stateNode = e, t } function Tu(e, t, a) { return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t } var hr = new WeakMap; function dt(e, t) { if (typeof e == "object" && e !== null) { var a = hr.get(e); return a !== void 0 ? a : (t = { value: e, source: t, stack: gc(t) }, hr.set(e, t), t) } return { value: e, source: t, stack: gc(t) } } var al = [], ll = 0, Ln = null, Gl = 0, mt = [], yt = 0, Pt = null, zt = 1, Nt = ""; function qt(e, t) { al[ll++] = Gl, al[ll++] = Ln, Ln = e, Gl = t } function br(e, t, a) { mt[yt++] = zt, mt[yt++] = Nt, mt[yt++] = Pt, Pt = e; var l = zt; e = Nt; var n = 32 - et(l) - 1; l &= ~(1 << n), a += 1; var i = 32 - et(t) + n; if (30 < i) { var u = n - n % 5; i = (l & (1 << u) - 1).toString(32), l >>= u, n -= u, zt = 1 << 32 - et(t) + n | a << n | l, Nt = i + e } else zt = 1 << i | a << n | l, Nt = e } function Au(e) { e.return !== null && (qt(e, 1), br(e, 1, 0)) } function wu(e) { for (; e === Ln;)Ln = al[--ll], al[ll] = null, Gl = al[--ll], al[ll] = null; for (; e === Pt;)Pt = mt[--yt], mt[yt] = null, Nt = mt[--yt], mt[yt] = null, zt = mt[--yt], mt[yt] = null } function vr(e, t) { mt[yt++] = zt, mt[yt++] = Nt, mt[yt++] = Pt, zt = t.id, Nt = t.overflow, Pt = e } var De = null, ye = null, P = !1, ea = null, pt = !1, ju = Error(d(519)); function ta(e) { var t = Error(d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw Ql(dt(t, e)), ju } function _r(e) { var t = e.stateNode, a = e.type, l = e.memoizedProps; switch (t[Me] = e, t[Ze] = l, a) { case "dialog": W("cancel", t), W("close", t); break; case "iframe": case "object": case "embed": W("load", t); break; case "video": case "audio": for (a = 0; a < fn.length; a++)W(fn[a], t); break; case "source": W("error", t); break; case "img": case "image": case "link": W("error", t), W("load", t); break; case "details": W("toggle", t); break; case "input": W("invalid", t), Mc(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0); break; case "select": W("invalid", t); break; case "textarea": W("invalid", t), Cc(t, l.value, l.defaultValue, l.children) }a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Bf(t.textContent, a) ? (l.popover != null && (W("beforetoggle", t), W("toggle", t)), l.onScroll != null && W("scroll", t), l.onScrollEnd != null && W("scrollend", t), l.onClick != null && (t.onclick = Mt), t = !0) : t = !1, t || ta(e, !0) } function Sr(e) { for (De = e.return; De;)switch (De.tag) { case 5: case 31: case 13: pt = !1; return; case 27: case 3: pt = !0; return; default: De = De.return } } function nl(e) { if (e !== De) return !1; if (!P) return Sr(e), P = !0, !1; var t = e.tag, a; if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Xo(e.type, e.memoizedProps)), a = !a), a && ye && ta(e), Sr(e), t === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317)); ye = Kf(e) } else if (t === 31) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317)); ye = Kf(e) } else t === 27 ? (t = ye, pa(e.type) ? (e = Wo, Wo = null, ye = e) : ye = t) : ye = De ? ht(e.stateNode.nextSibling) : null; return !0 } function Ra() { ye = De = null, P = !1 } function Eu() { var e = ea; return e !== null && (Ie === null ? Ie = e : Ie.push.apply(Ie, e), ea = null), e } function Ql(e) { ea === null ? ea = [e] : ea.push(e) } var zu = s(null), Oa = null, Ut = null; function aa(e, t, a) { j(zu, t._currentValue), t._currentValue = a } function Bt(e) { e._currentValue = zu.current, S(zu) } function Nu(e, t, a) { for (; e !== null;) { var l = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break; e = e.return } } function Hu(e, t, a, l) { var n = e.child; for (n !== null && (n.return = e); n !== null;) { var i = n.dependencies; if (i !== null) { var u = n.child; i = i.firstContext; e: for (; i !== null;) { var o = i; i = n; for (var c = 0; c < t.length; c++)if (o.context === t[c]) { i.lanes |= a, o = i.alternate, o !== null && (o.lanes |= a), Nu(i.return, a, e), l || (u = null); break e } i = o.next } } else if (n.tag === 18) { if (u = n.return, u === null) throw Error(d(341)); u.lanes |= a, i = u.alternate, i !== null && (i.lanes |= a), Nu(u, a, e), u = null } else u = n.child; if (u !== null) u.return = n; else for (u = n; u !== null;) { if (u === e) { u = null; break } if (n = u.sibling, n !== null) { n.return = u.return, u = n; break } u = u.return } n = u } } function il(e, t, a, l) { e = null; for (var n = t, i = !1; n !== null;) { if (!i) { if ((n.flags & 524288) !== 0) i = !0; else if ((n.flags & 262144) !== 0) break } if (n.tag === 10) { var u = n.alternate; if (u === null) throw Error(d(387)); if (u = u.memoizedProps, u !== null) { var o = n.type; tt(n.pendingProps.value, u.value) || (e !== null ? e.push(o) : e = [o]) } } else if (n === ne.current) { if (u = n.alternate, u === null) throw Error(d(387)); u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(gn) : e = [gn]) } n = n.return } e !== null && Hu(t, e, a, l), t.flags |= 262144 } function Xn(e) { for (e = e.firstContext; e !== null;) { if (!tt(e.context._currentValue, e.memoizedValue)) return !0; e = e.next } return !1 } function xa(e) { Oa = e, Ut = null, e = e.dependencies, e !== null && (e.firstContext = null) } function Ce(e) { return Tr(Oa, e) } function Zn(e, t) { return Oa === null && xa(e), Tr(e, t) } function Tr(e, t) { var a = t._currentValue; if (t = { context: t, memoizedValue: a, next: null }, Ut === null) { if (e === null) throw Error(d(308)); Ut = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288 } else Ut = Ut.next = t; return a } var Im = typeof AbortController < "u" ? AbortController : function () { var e = [], t = this.signal = { aborted: !1, addEventListener: function (a, l) { e.push(l) } }; this.abort = function () { t.aborted = !0, e.forEach(function (a) { return a() }) } }, Fm = A.unstable_scheduleCallback, $m = A.unstable_NormalPriority, je = { $$typeof: Be, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }; function Ru() { return { controller: new Im, data: new Map, refCount: 0 } } function Ll(e) { e.refCount--, e.refCount === 0 && Fm($m, function () { e.controller.abort() }) } var Xl = null, Ou = 0, ul = 0, ol = null; function Pm(e, t) { if (Xl === null) { var a = Xl = []; Ou = 0, ul = Co(), ol = { status: "pending", value: void 0, then: function (l) { a.push(l) } } } return Ou++, t.then(Ar, Ar), t } function Ar() { if (--Ou === 0 && Xl !== null) { ol !== null && (ol.status = "fulfilled"); var e = Xl; Xl = null, ul = 0, ol = null; for (var t = 0; t < e.length; t++)(0, e[t])() } } function ey(e, t) { var a = [], l = { status: "pending", value: null, reason: null, then: function (n) { a.push(n) } }; return e.then(function () { l.status = "fulfilled", l.value = t; for (var n = 0; n < a.length; n++)(0, a[n])(t) }, function (n) { for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)(0, a[n])(void 0) }), l } var wr = b.S; b.S = function (e, t) { cf = $e(), typeof t == "object" && t !== null && typeof t.then == "function" && Pm(e, t), wr !== null && wr(e, t) }; var Ma = s(null); function xu() { var e = Ma.current; return e !== null ? e : me.pooledCache } function Vn(e, t) { t === null ? j(Ma, Ma.current) : j(Ma, t.pool) } function jr() { var e = xu(); return e === null ? null : { parent: je._currentValue, pool: e } } var cl = Error(d(460)), Mu = Error(d(474)), Kn = Error(d(542)), Jn = { then: function () { } }; function Er(e) { return e = e.status, e === "fulfilled" || e === "rejected" } function zr(e, t, a) { switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Mt, Mt), t = a), t.status) { case "fulfilled": return t.value; case "rejected": throw e = t.reason, Hr(e), e; default: if (typeof t.status == "string") t.then(Mt, Mt); else { if (e = me, e !== null && 100 < e.shellSuspendCounter) throw Error(d(482)); e = t, e.status = "pending", e.then(function (l) { if (t.status === "pending") { var n = t; n.status = "fulfilled", n.value = l } }, function (l) { if (t.status === "pending") { var n = t; n.status = "rejected", n.reason = l } }) } switch (t.status) { case "fulfilled": return t.value; case "rejected": throw e = t.reason, Hr(e), e }throw Ca = t, cl } } function Da(e) { try { var t = e._init; return t(e._payload) } catch (a) { throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ca = a, cl) : a } } var Ca = null; function Nr() { if (Ca === null) throw Error(d(459)); var e = Ca; return Ca = null, e } function Hr(e) { if (e === cl || e === Kn) throw Error(d(483)) } var rl = null, Zl = 0; function Wn(e) { var t = Zl; return Zl += 1, rl === null && (rl = []), zr(rl, e, t) } function Vl(e, t) { t = t.props.ref, e.ref = t !== void 0 ? t : null } function In(e, t) { throw t.$$typeof === B ? Error(d(525)) : (e = Object.prototype.toString.call(t), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))) } function Rr(e) { function t(f, r) { if (e) { var m = f.deletions; m === null ? (f.deletions = [r], f.flags |= 16) : m.push(r) } } function a(f, r) { if (!e) return null; for (; r !== null;)t(f, r), r = r.sibling; return null } function l(f) { for (var r = new Map; f !== null;)f.key !== null ? r.set(f.key, f) : r.set(f.index, f), f = f.sibling; return r } function n(f, r) { return f = Ct(f, r), f.index = 0, f.sibling = null, f } function i(f, r, m) { return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < r ? (f.flags |= 67108866, r) : m) : (f.flags |= 67108866, r)) : (f.flags |= 1048576, r) } function u(f) { return e && f.alternate === null && (f.flags |= 67108866), f } function o(f, r, m, v) { return r === null || r.tag !== 6 ? (r = Su(m, f.mode, v), r.return = f, r) : (r = n(r, m), r.return = f, r) } function c(f, r, m, v) { var D = m.type; return D === L ? h(f, r, m.props.children, v, m.key) : r !== null && (r.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Le && Da(D) === r.type) ? (r = n(r, m.props), Vl(r, m), r.return = f, r) : (r = Qn(m.type, m.key, m.props, null, f.mode, v), Vl(r, m), r.return = f, r) } function y(f, r, m, v) { return r === null || r.tag !== 4 || r.stateNode.containerInfo !== m.containerInfo || r.stateNode.implementation !== m.implementation ? (r = Tu(m, f.mode, v), r.return = f, r) : (r = n(r, m.children || []), r.return = f, r) } function h(f, r, m, v, D) { return r === null || r.tag !== 7 ? (r = Ha(m, f.mode, v, D), r.return = f, r) : (r = n(r, m), r.return = f, r) } function _(f, r, m) { if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = Su("" + r, f.mode, m), r.return = f, r; if (typeof r == "object" && r !== null) { switch (r.$$typeof) { case fe: return m = Qn(r.type, r.key, r.props, null, f.mode, m), Vl(m, r), m.return = f, m; case he: return r = Tu(r, f.mode, m), r.return = f, r; case Le: return r = Da(r), _(f, r, m) }if (_t(r) || Xe(r)) return r = Ha(r, f.mode, m, null), r.return = f, r; if (typeof r.then == "function") return _(f, Wn(r), m); if (r.$$typeof === Be) return _(f, Zn(f, r), m); In(f, r) } return null } function p(f, r, m, v) { var D = r !== null ? r.key : null; if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return D !== null ? null : o(f, r, "" + m, v); if (typeof m == "object" && m !== null) { switch (m.$$typeof) { case fe: return m.key === D ? c(f, r, m, v) : null; case he: return m.key === D ? y(f, r, m, v) : null; case Le: return m = Da(m), p(f, r, m, v) }if (_t(m) || Xe(m)) return D !== null ? null : h(f, r, m, v, null); if (typeof m.then == "function") return p(f, r, Wn(m), v); if (m.$$typeof === Be) return p(f, r, Zn(f, m), v); In(f, m) } return null } function g(f, r, m, v, D) { if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return f = f.get(m) || null, o(r, f, "" + v, D); if (typeof v == "object" && v !== null) { switch (v.$$typeof) { case fe: return f = f.get(v.key === null ? m : v.key) || null, c(r, f, v, D); case he: return f = f.get(v.key === null ? m : v.key) || null, y(r, f, v, D); case Le: return v = Da(v), g(f, r, m, v, D) }if (_t(v) || Xe(v)) return f = f.get(m) || null, h(r, f, v, D, null); if (typeof v.then == "function") return g(f, r, m, Wn(v), D); if (v.$$typeof === Be) return g(f, r, m, Zn(r, v), D); In(r, v) } return null } function z(f, r, m, v) { for (var D = null, te = null, H = r, X = r = 0, F = null; H !== null && X < m.length; X++) { H.index > X ? (F = H, H = null) : F = H.sibling; var ae = p(f, H, m[X], v); if (ae === null) { H === null && (H = F); break } e && H && ae.alternate === null && t(f, H), r = i(ae, r, X), te === null ? D = ae : te.sibling = ae, te = ae, H = F } if (X === m.length) return a(f, H), P && qt(f, X), D; if (H === null) { for (; X < m.length; X++)H = _(f, m[X], v), H !== null && (r = i(H, r, X), te === null ? D = H : te.sibling = H, te = H); return P && qt(f, X), D } for (H = l(H); X < m.length; X++)F = g(H, f, X, m[X], v), F !== null && (e && F.alternate !== null && H.delete(F.key === null ? X : F.key), r = i(F, r, X), te === null ? D = F : te.sibling = F, te = F); return e && H.forEach(function (_a) { return t(f, _a) }), P && qt(f, X), D } function q(f, r, m, v) { if (m == null) throw Error(d(151)); for (var D = null, te = null, H = r, X = r = 0, F = null, ae = m.next(); H !== null && !ae.done; X++, ae = m.next()) { H.index > X ? (F = H, H = null) : F = H.sibling; var _a = p(f, H, ae.value, v); if (_a === null) { H === null && (H = F); break } e && H && _a.alternate === null && t(f, H), r = i(_a, r, X), te === null ? D = _a : te.sibling = _a, te = _a, H = F } if (ae.done) return a(f, H), P && qt(f, X), D; if (H === null) { for (; !ae.done; X++, ae = m.next())ae = _(f, ae.value, v), ae !== null && (r = i(ae, r, X), te === null ? D = ae : te.sibling = ae, te = ae); return P && qt(f, X), D } for (H = l(H); !ae.done; X++, ae = m.next())ae = g(H, f, X, ae.value, v), ae !== null && (e && ae.alternate !== null && H.delete(ae.key === null ? X : ae.key), r = i(ae, r, X), te === null ? D = ae : te.sibling = ae, te = ae); return e && H.forEach(function (fp) { return t(f, fp) }), P && qt(f, X), D } function se(f, r, m, v) { if (typeof m == "object" && m !== null && m.type === L && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) { switch (m.$$typeof) { case fe: e: { for (var D = m.key; r !== null;) { if (r.key === D) { if (D = m.type, D === L) { if (r.tag === 7) { a(f, r.sibling), v = n(r, m.props.children), v.return = f, f = v; break e } } else if (r.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Le && Da(D) === r.type) { a(f, r.sibling), v = n(r, m.props), Vl(v, m), v.return = f, f = v; break e } a(f, r); break } else t(f, r); r = r.sibling } m.type === L ? (v = Ha(m.props.children, f.mode, v, m.key), v.return = f, f = v) : (v = Qn(m.type, m.key, m.props, null, f.mode, v), Vl(v, m), v.return = f, f = v) } return u(f); case he: e: { for (D = m.key; r !== null;) { if (r.key === D) if (r.tag === 4 && r.stateNode.containerInfo === m.containerInfo && r.stateNode.implementation === m.implementation) { a(f, r.sibling), v = n(r, m.children || []), v.return = f, f = v; break e } else { a(f, r); break } else t(f, r); r = r.sibling } v = Tu(m, f.mode, v), v.return = f, f = v } return u(f); case Le: return m = Da(m), se(f, r, m, v) }if (_t(m)) return z(f, r, m, v); if (Xe(m)) { if (D = Xe(m), typeof D != "function") throw Error(d(150)); return m = D.call(m), q(f, r, m, v) } if (typeof m.then == "function") return se(f, r, Wn(m), v); if (m.$$typeof === Be) return se(f, r, Zn(f, m), v); In(f, m) } return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, r !== null && r.tag === 6 ? (a(f, r.sibling), v = n(r, m), v.return = f, f = v) : (a(f, r), v = Su(m, f.mode, v), v.return = f, f = v), u(f)) : a(f, r) } return function (f, r, m, v) { try { Zl = 0; var D = se(f, r, m, v); return rl = null, D } catch (H) { if (H === cl || H === Kn) throw H; var te = at(29, H, null, f.mode); return te.lanes = v, te.return = f, te } } } var qa = Rr(!0), Or = Rr(!1), la = !1; function Du(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null } } function Cu(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }) } function na(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null } } function ia(e, t, a) { var l = e.updateQueue; if (l === null) return null; if (l = l.shared, (le & 2) !== 0) { var n = l.pending; return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Gn(e), yr(e, null, a), t } return Yn(e, l, t, a), Gn(e) } function Kl(e, t, a) { if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) { var l = t.lanes; l &= e.pendingLanes, a |= l, t.lanes = a, Tc(e, a) } } function qu(e, t) { var a = e.updateQueue, l = e.alternate; if (l !== null && (l = l.updateQueue, a === l)) { var n = null, i = null; if (a = a.firstBaseUpdate, a !== null) { do { var u = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null }; i === null ? n = i = u : i = i.next = u, a = a.next } while (a !== null); i === null ? n = i = t : i = i.next = t } else n = i = t; a = { baseState: l.baseState, firstBaseUpdate: n, lastBaseUpdate: i, shared: l.shared, callbacks: l.callbacks }, e.updateQueue = a; return } e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t } var Uu = !1; function Jl() { if (Uu) { var e = ol; if (e !== null) throw e } } function Wl(e, t, a, l) { Uu = !1; var n = e.updateQueue; la = !1; var i = n.firstBaseUpdate, u = n.lastBaseUpdate, o = n.shared.pending; if (o !== null) { n.shared.pending = null; var c = o, y = c.next; c.next = null, u === null ? i = y : u.next = y, u = c; var h = e.alternate; h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== u && (o === null ? h.firstBaseUpdate = y : o.next = y, h.lastBaseUpdate = c)) } if (i !== null) { var _ = n.baseState; u = 0, h = y = c = null, o = i; do { var p = o.lane & -536870913, g = p !== o.lane; if (g ? (I & p) === p : (l & p) === p) { p !== 0 && p === ul && (Uu = !0), h !== null && (h = h.next = { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null }); e: { var z = e, q = o; p = t; var se = a; switch (q.tag) { case 1: if (z = q.payload, typeof z == "function") { _ = z.call(se, _, p); break e } _ = z; break e; case 3: z.flags = z.flags & -65537 | 128; case 0: if (z = q.payload, p = typeof z == "function" ? z.call(se, _, p) : z, p == null) break e; _ = R({}, _, p); break e; case 2: la = !0 } } p = o.callback, p !== null && (e.flags |= 64, g && (e.flags |= 8192), g = n.callbacks, g === null ? n.callbacks = [p] : g.push(p)) } else g = { lane: p, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (y = h = g, c = _) : h = h.next = g, u |= p; if (o = o.next, o === null) { if (o = n.shared.pending, o === null) break; g = o, o = g.next, g.next = null, n.lastBaseUpdate = g, n.shared.pending = null } } while (!0); h === null && (c = _), n.baseState = c, n.firstBaseUpdate = y, n.lastBaseUpdate = h, i === null && (n.shared.lanes = 0), sa |= u, e.lanes = u, e.memoizedState = _ } } function xr(e, t) { if (typeof e != "function") throw Error(d(191, e)); e.call(t) } function Mr(e, t) { var a = e.callbacks; if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++)xr(a[e], t) } var sl = s(null), Fn = s(0); function Dr(e, t) { e = Kt, j(Fn, e), j(sl, t), Kt = e | t.baseLanes } function Bu() { j(Fn, Kt), j(sl, sl.current) } function ku() { Kt = Fn.current, S(sl), S(Fn) } var lt = s(null), gt = null; function ua(e) { var t = e.alternate; j(Ae, Ae.current & 1), j(lt, e), gt === null && (t === null || sl.current !== null || t.memoizedState !== null) && (gt = e) } function Yu(e) { j(Ae, Ae.current), j(lt, e), gt === null && (gt = e) } function Cr(e) { e.tag === 22 ? (j(Ae, Ae.current), j(lt, e), gt === null && (gt = e)) : oa() } function oa() { j(Ae, Ae.current), j(lt, lt.current) } function nt(e) { S(lt), gt === e && (gt = null), S(Ae) } var Ae = s(0); function $n(e) { for (var t = e; t !== null;) { if (t.tag === 13) { var a = t.memoizedState; if (a !== null && (a = a.dehydrated, a === null || Ko(a) || Jo(a))) return t } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) { if ((t.flags & 128) !== 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return null; t = t.return } t.sibling.return = t.return, t = t.sibling } return null } var kt = 0, Q = null, ce = null, Ee = null, Pn = !1, fl = !1, Ua = !1, ei = 0, Il = 0, dl = null, ty = 0; function ve() { throw Error(d(321)) } function Gu(e, t) { if (t === null) return !1; for (var a = 0; a < t.length && a < e.length; a++)if (!tt(e[a], t[a])) return !1; return !0 } function Qu(e, t, a, l, n, i) { return kt = i, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = e === null || e.memoizedState === null ? bs : lo, Ua = !1, i = a(l, n), Ua = !1, fl && (i = Ur(t, a, l, n)), qr(e), i } function qr(e) { b.H = Pl; var t = ce !== null && ce.next !== null; if (kt = 0, Ee = ce = Q = null, Pn = !1, Il = 0, dl = null, t) throw Error(d(300)); e === null || ze || (e = e.dependencies, e !== null && Xn(e) && (ze = !0)) } function Ur(e, t, a, l) { Q = e; var n = 0; do { if (fl && (dl = null), Il = 0, fl = !1, 25 <= n) throw Error(d(301)); if (n += 1, Ee = ce = null, e.updateQueue != null) { var i = e.updateQueue; i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0) } b.H = vs, i = t(a, l) } while (fl); return i } function ay() { var e = b.H, t = e.useState()[0]; return t = typeof t.then == "function" ? Fl(t) : t, e = e.useState()[0], (ce !== null ? ce.memoizedState : null) !== e && (Q.flags |= 1024), t } function Lu() { var e = ei !== 0; return ei = 0, e } function Xu(e, t, a) { t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a } function Zu(e) { if (Pn) { for (e = e.memoizedState; e !== null;) { var t = e.queue; t !== null && (t.pending = null), e = e.next } Pn = !1 } kt = 0, Ee = ce = Q = null, fl = !1, Il = ei = 0, dl = null } function Ge() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Ee === null ? Q.memoizedState = Ee = e : Ee = Ee.next = e, Ee } function we() { if (ce === null) { var e = Q.alternate; e = e !== null ? e.memoizedState : null } else e = ce.next; var t = Ee === null ? Q.memoizedState : Ee.next; if (t !== null) Ee = t, ce = e; else { if (e === null) throw Q.alternate === null ? Error(d(467)) : Error(d(310)); ce = e, e = { memoizedState: ce.memoizedState, baseState: ce.baseState, baseQueue: ce.baseQueue, queue: ce.queue, next: null }, Ee === null ? Q.memoizedState = Ee = e : Ee = Ee.next = e } return Ee } function ti() { return { lastEffect: null, events: null, stores: null, memoCache: null } } function Fl(e) { var t = Il; return Il += 1, dl === null && (dl = []), e = zr(dl, e, t), t = Q, (Ee === null ? t.memoizedState : Ee.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? bs : lo), e } function ai(e) { if (e !== null && typeof e == "object") { if (typeof e.then == "function") return Fl(e); if (e.$$typeof === Be) return Ce(e) } throw Error(d(438, String(e))) } function Vu(e) { var t = null, a = Q.updateQueue; if (a !== null && (t = a.memoCache), t == null) { var l = Q.alternate; l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = { data: l.data.map(function (n) { return n.slice() }), index: 0 }))) } if (t == null && (t = { data: [], index: 0 }), a === null && (a = ti(), Q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)a[l] = Ga; return t.index++, a } function Yt(e, t) { return typeof t == "function" ? t(e) : t } function li(e) { var t = we(); return Ku(t, ce, e) } function Ku(e, t, a) { var l = e.queue; if (l === null) throw Error(d(311)); l.lastRenderedReducer = a; var n = e.baseQueue, i = l.pending; if (i !== null) { if (n !== null) { var u = n.next; n.next = i.next, i.next = u } t.baseQueue = n = i, l.pending = null } if (i = e.baseState, n === null) e.memoizedState = i; else { t = n.next; var o = u = null, c = null, y = t, h = !1; do { var _ = y.lane & -536870913; if (_ !== y.lane ? (I & _) === _ : (kt & _) === _) { var p = y.revertLane; if (p === 0) c !== null && (c = c.next = { lane: 0, revertLane: 0, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), _ === ul && (h = !0); else if ((kt & p) === p) { y = y.next, p === ul && (h = !0); continue } else _ = { lane: 0, revertLane: y.revertLane, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, c === null ? (o = c = _, u = i) : c = c.next = _, Q.lanes |= p, sa |= p; _ = y.action, Ua && a(i, _), i = y.hasEagerState ? y.eagerState : a(i, _) } else p = { lane: _, revertLane: y.revertLane, gesture: y.gesture, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, c === null ? (o = c = p, u = i) : c = c.next = p, Q.lanes |= _, sa |= _; y = y.next } while (y !== null && y !== t); if (c === null ? u = i : c.next = o, !tt(i, e.memoizedState) && (ze = !0, h && (a = ol, a !== null))) throw a; e.memoizedState = i, e.baseState = u, e.baseQueue = c, l.lastRenderedState = i } return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch] } function Ju(e) { var t = we(), a = t.queue; if (a === null) throw Error(d(311)); a.lastRenderedReducer = e; var l = a.dispatch, n = a.pending, i = t.memoizedState; if (n !== null) { a.pending = null; var u = n = n.next; do i = e(i, u.action), u = u.next; while (u !== n); tt(i, t.memoizedState) || (ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), a.lastRenderedState = i } return [i, l] } function Br(e, t, a) { var l = Q, n = we(), i = P; if (i) { if (a === void 0) throw Error(d(407)); a = a() } else a = t(); var u = !tt((ce || n).memoizedState, a); if (u && (n.memoizedState = a, ze = !0), n = n.queue, Fu(Gr.bind(null, l, n, e), [e]), n.getSnapshot !== t || u || Ee !== null && Ee.memoizedState.tag & 1) { if (l.flags |= 2048, ml(9, { destroy: void 0 }, Yr.bind(null, l, n, a, t), null), me === null) throw Error(d(349)); i || (kt & 127) !== 0 || kr(l, t, a) } return a } function kr(e, t, a) { e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Q.updateQueue, t === null ? (t = ti(), Q.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e)) } function Yr(e, t, a, l) { t.value = a, t.getSnapshot = l, Qr(t) && Lr(e) } function Gr(e, t, a) { return a(function () { Qr(t) && Lr(e) }) } function Qr(e) { var t = e.getSnapshot; e = e.value; try { var a = t(); return !tt(e, a) } catch { return !0 } } function Lr(e) { var t = Na(e, 2); t !== null && Fe(t, e, 2) } function Wu(e) { var t = Ge(); if (typeof e == "function") { var a = e; if (e = a(), Ua) { It(!0); try { a() } finally { It(!1) } } } return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: e }, t } function Xr(e, t, a, l) { return e.baseState = a, Ku(e, ce, typeof l == "function" ? l : Yt) } function ly(e, t, a, l, n) { if (ui(e)) throw Error(d(485)); if (e = t.action, e !== null) { var i = { payload: n, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (u) { i.listeners.push(u) } }; b.T !== null ? a(!0) : i.isTransition = !1, l(i), a = t.pending, a === null ? (i.next = t.pending = i, Zr(t, i)) : (i.next = a.next, t.pending = a.next = i) } } function Zr(e, t) { var a = t.action, l = t.payload, n = e.state; if (t.isTransition) { var i = b.T, u = {}; b.T = u; try { var o = a(n, l), c = b.S; c !== null && c(u, o), Vr(e, t, o) } catch (y) { Iu(e, t, y) } finally { i !== null && u.types !== null && (i.types = u.types), b.T = i } } else try { i = a(n, l), Vr(e, t, i) } catch (y) { Iu(e, t, y) } } function Vr(e, t, a) { a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (l) { Kr(e, t, l) }, function (l) { return Iu(e, t, l) }) : Kr(e, t, a) } function Kr(e, t, a) { t.status = "fulfilled", t.value = a, Jr(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Zr(e, a))) } function Iu(e, t, a) { var l = e.pending; if (e.pending = null, l !== null) { l = l.next; do t.status = "rejected", t.reason = a, Jr(t), t = t.next; while (t !== l) } e.action = null } function Jr(e) { e = e.listeners; for (var t = 0; t < e.length; t++)(0, e[t])() } function Wr(e, t) { return t } function Ir(e, t) { if (P) { var a = me.formState; if (a !== null) { e: { var l = Q; if (P) { if (ye) { t: { for (var n = ye, i = pt; n.nodeType !== 8;) { if (!i) { n = null; break t } if (n = ht(n.nextSibling), n === null) { n = null; break t } } i = n.data, n = i === "F!" || i === "F" ? n : null } if (n) { ye = ht(n.nextSibling), l = n.data === "F!"; break e } } ta(l) } l = !1 } l && (t = a[0]) } } return a = Ge(), a.memoizedState = a.baseState = t, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Wr, lastRenderedState: t }, a.queue = l, a = ps.bind(null, Q, l), l.dispatch = a, l = Wu(!1), i = ao.bind(null, Q, !1, l.queue), l = Ge(), n = { state: t, dispatch: null, action: e, pending: null }, l.queue = n, a = ly.bind(null, Q, n, i, a), n.dispatch = a, l.memoizedState = e, [t, a, !1] } function Fr(e) { var t = we(); return $r(t, ce, e) } function $r(e, t, a) { if (t = Ku(e, t, Wr)[0], e = li(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try { var l = Fl(t) } catch (u) { throw u === cl ? Kn : u } else l = t; t = we(); var n = t.queue, i = n.dispatch; return a !== t.memoizedState && (Q.flags |= 2048, ml(9, { destroy: void 0 }, ny.bind(null, n, a), null)), [l, i, e] } function ny(e, t) { e.action = t } function Pr(e) { var t = we(), a = ce; if (a !== null) return $r(t, a, e); we(), t = t.memoizedState, a = we(); var l = a.queue.dispatch; return a.memoizedState = e, [t, l, !1] } function ml(e, t, a, l) { return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Q.updateQueue, t === null && (t = ti(), Q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e } function es() { return we().memoizedState } function ni(e, t, a, l) { var n = Ge(); Q.flags |= e, n.memoizedState = ml(1 | t, { destroy: void 0 }, a, l === void 0 ? null : l) } function ii(e, t, a, l) { var n = we(); l = l === void 0 ? null : l; var i = n.memoizedState.inst; ce !== null && l !== null && Gu(l, ce.memoizedState.deps) ? n.memoizedState = ml(t, i, a, l) : (Q.flags |= e, n.memoizedState = ml(1 | t, i, a, l)) } function ts(e, t) { ni(8390656, 8, e, t) } function Fu(e, t) { ii(2048, 8, e, t) } function iy(e) { Q.flags |= 4; var t = Q.updateQueue; if (t === null) t = ti(), Q.updateQueue = t, t.events = [e]; else { var a = t.events; a === null ? t.events = [e] : a.push(e) } } function as(e) { var t = we().memoizedState; return iy({ ref: t, nextImpl: e }), function () { if ((le & 2) !== 0) throw Error(d(440)); return t.impl.apply(void 0, arguments) } } function ls(e, t) { return ii(4, 2, e, t) } function ns(e, t) { return ii(4, 4, e, t) } function is(e, t) { if (typeof t == "function") { e = e(); var a = t(e); return function () { typeof a == "function" ? a() : t(null) } } if (t != null) return e = e(), t.current = e, function () { t.current = null } } function us(e, t, a) { a = a != null ? a.concat([e]) : null, ii(4, 4, is.bind(null, t, e), a) } function $u() { } function os(e, t) { var a = we(); t = t === void 0 ? null : t; var l = a.memoizedState; return t !== null && Gu(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e) } function cs(e, t) { var a = we(); t = t === void 0 ? null : t; var l = a.memoizedState; if (t !== null && Gu(t, l[1])) return l[0]; if (l = e(), Ua) { It(!0); try { e() } finally { It(!1) } } return a.memoizedState = [l, t], l } function Pu(e, t, a) { return a === void 0 || (kt & 1073741824) !== 0 && (I & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = sf(), Q.lanes |= e, sa |= e, a) } function rs(e, t, a, l) { return tt(a, t) ? a : sl.current !== null ? (e = Pu(e, a, l), tt(e, t) || (ze = !0), e) : (kt & 42) === 0 || (kt & 1073741824) !== 0 && (I & 261930) === 0 ? (ze = !0, e.memoizedState = a) : (e = sf(), Q.lanes |= e, sa |= e, t) } function ss(e, t, a, l, n) { var i = w.p; w.p = i !== 0 && 8 > i ? i : 8; var u = b.T, o = {}; b.T = o, ao(e, !1, t, a); try { var c = n(), y = b.S; if (y !== null && y(o, c), c !== null && typeof c == "object" && typeof c.then == "function") { var h = ey(c, l); $l(e, t, h, ot(e)) } else $l(e, t, l, ot(e)) } catch (_) { $l(e, t, { then: function () { }, status: "rejected", reason: _ }, ot()) } finally { w.p = i, u !== null && o.types !== null && (u.types = o.types), b.T = u } } function uy() { } function eo(e, t, a, l) { if (e.tag !== 5) throw Error(d(476)); var n = fs(e).queue; ss(e, n, t, k, a === null ? uy : function () { return ds(e), a(l) }) } function fs(e) { var t = e.memoizedState; if (t !== null) return t; t = { memoizedState: k, baseState: k, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: k }, next: null }; var a = {}; return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: a }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t } function ds(e) { var t = fs(e); t.next === null && (t = e.alternate.memoizedState), $l(e, t.next.queue, {}, ot()) } function to() { return Ce(gn) } function ms() { return we().memoizedState } function ys() { return we().memoizedState } function oy(e) { for (var t = e.return; t !== null;) { switch (t.tag) { case 24: case 3: var a = ot(); e = na(a); var l = ia(t, e, a); l !== null && (Fe(l, t, a), Kl(l, t, a)), t = { cache: Ru() }, e.payload = t; return }t = t.return } } function cy(e, t, a) { var l = ot(); a = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, ui(e) ? gs(t, a) : (a = vu(e, t, a, l), a !== null && (Fe(a, e, l), hs(a, t, l))) } function ps(e, t, a) { var l = ot(); $l(e, t, a, l) } function $l(e, t, a, l) { var n = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }; if (ui(e)) gs(t, n); else { var i = e.alternate; if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try { var u = t.lastRenderedState, o = i(u, a); if (n.hasEagerState = !0, n.eagerState = o, tt(o, u)) return Yn(e, t, n, 0), me === null && kn(), !1 } catch { } if (a = vu(e, t, n, l), a !== null) return Fe(a, e, l), hs(a, t, l), !0 } return !1 } function ao(e, t, a, l) { if (l = { lane: 2, revertLane: Co(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }, ui(e)) { if (t) throw Error(d(479)) } else t = vu(e, a, l, 2), t !== null && Fe(t, e, 2) } function ui(e) { var t = e.alternate; return e === Q || t !== null && t === Q } function gs(e, t) { fl = Pn = !0; var a = e.pending; a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t } function hs(e, t, a) { if ((a & 4194048) !== 0) { var l = t.lanes; l &= e.pendingLanes, a |= l, t.lanes = a, Tc(e, a) } } var Pl = { readContext: Ce, use: ai, useCallback: ve, useContext: ve, useEffect: ve, useImperativeHandle: ve, useLayoutEffect: ve, useInsertionEffect: ve, useMemo: ve, useReducer: ve, useRef: ve, useState: ve, useDebugValue: ve, useDeferredValue: ve, useTransition: ve, useSyncExternalStore: ve, useId: ve, useHostTransitionStatus: ve, useFormState: ve, useActionState: ve, useOptimistic: ve, useMemoCache: ve, useCacheRefresh: ve }; Pl.useEffectEvent = ve; var bs = { readContext: Ce, use: ai, useCallback: function (e, t) { return Ge().memoizedState = [e, t === void 0 ? null : t], e }, useContext: Ce, useEffect: ts, useImperativeHandle: function (e, t, a) { a = a != null ? a.concat([e]) : null, ni(4194308, 4, is.bind(null, t, e), a) }, useLayoutEffect: function (e, t) { return ni(4194308, 4, e, t) }, useInsertionEffect: function (e, t) { ni(4, 2, e, t) }, useMemo: function (e, t) { var a = Ge(); t = t === void 0 ? null : t; var l = e(); if (Ua) { It(!0); try { e() } finally { It(!1) } } return a.memoizedState = [l, t], l }, useReducer: function (e, t, a) { var l = Ge(); if (a !== void 0) { var n = a(t); if (Ua) { It(!0); try { a(t) } finally { It(!1) } } } else n = t; return l.memoizedState = l.baseState = n, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = cy.bind(null, Q, e), [l.memoizedState, e] }, useRef: function (e) { var t = Ge(); return e = { current: e }, t.memoizedState = e }, useState: function (e) { e = Wu(e); var t = e.queue, a = ps.bind(null, Q, t); return t.dispatch = a, [e.memoizedState, a] }, useDebugValue: $u, useDeferredValue: function (e, t) { var a = Ge(); return Pu(a, e, t) }, useTransition: function () { var e = Wu(!1); return e = ss.bind(null, Q, e.queue, !0, !1), Ge().memoizedState = e, [!1, e] }, useSyncExternalStore: function (e, t, a) { var l = Q, n = Ge(); if (P) { if (a === void 0) throw Error(d(407)); a = a() } else { if (a = t(), me === null) throw Error(d(349)); (I & 127) !== 0 || kr(l, t, a) } n.memoizedState = a; var i = { value: a, getSnapshot: t }; return n.queue = i, ts(Gr.bind(null, l, i, e), [e]), l.flags |= 2048, ml(9, { destroy: void 0 }, Yr.bind(null, l, i, a, t), null), a }, useId: function () { var e = Ge(), t = me.identifierPrefix; if (P) { var a = Nt, l = zt; a = (l & ~(1 << 32 - et(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = ei++, 0 < a && (t += "H" + a.toString(32)), t += "_" } else a = ty++, t = "_" + t + "r_" + a.toString(32) + "_"; return e.memoizedState = t }, useHostTransitionStatus: to, useFormState: Ir, useActionState: Ir, useOptimistic: function (e) { var t = Ge(); t.memoizedState = t.baseState = e; var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = a, t = ao.bind(null, Q, !0, a), a.dispatch = t, [e, t] }, useMemoCache: Vu, useCacheRefresh: function () { return Ge().memoizedState = oy.bind(null, Q) }, useEffectEvent: function (e) { var t = Ge(), a = { impl: e }; return t.memoizedState = a, function () { if ((le & 2) !== 0) throw Error(d(440)); return a.impl.apply(void 0, arguments) } } }, lo = { readContext: Ce, use: ai, useCallback: os, useContext: Ce, useEffect: Fu, useImperativeHandle: us, useInsertionEffect: ls, useLayoutEffect: ns, useMemo: cs, useReducer: li, useRef: es, useState: function () { return li(Yt) }, useDebugValue: $u, useDeferredValue: function (e, t) { var a = we(); return rs(a, ce.memoizedState, e, t) }, useTransition: function () { var e = li(Yt)[0], t = we().memoizedState; return [typeof e == "boolean" ? e : Fl(e), t] }, useSyncExternalStore: Br, useId: ms, useHostTransitionStatus: to, useFormState: Fr, useActionState: Fr, useOptimistic: function (e, t) { var a = we(); return Xr(a, ce, e, t) }, useMemoCache: Vu, useCacheRefresh: ys }; lo.useEffectEvent = as; var vs = { readContext: Ce, use: ai, useCallback: os, useContext: Ce, useEffect: Fu, useImperativeHandle: us, useInsertionEffect: ls, useLayoutEffect: ns, useMemo: cs, useReducer: Ju, useRef: es, useState: function () { return Ju(Yt) }, useDebugValue: $u, useDeferredValue: function (e, t) { var a = we(); return ce === null ? Pu(a, e, t) : rs(a, ce.memoizedState, e, t) }, useTransition: function () { var e = Ju(Yt)[0], t = we().memoizedState; return [typeof e == "boolean" ? e : Fl(e), t] }, useSyncExternalStore: Br, useId: ms, useHostTransitionStatus: to, useFormState: Pr, useActionState: Pr, useOptimistic: function (e, t) { var a = we(); return ce !== null ? Xr(a, ce, e, t) : (a.baseState = e, [e, a.queue.dispatch]) }, useMemoCache: Vu, useCacheRefresh: ys }; vs.useEffectEvent = as; function no(e, t, a, l) { t = e.memoizedState, a = a(l, t), a = a == null ? t : R({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a) } var io = { enqueueSetState: function (e, t, a) { e = e._reactInternals; var l = ot(), n = na(l); n.payload = t, a != null && (n.callback = a), t = ia(e, n, l), t !== null && (Fe(t, e, l), Kl(t, e, l)) }, enqueueReplaceState: function (e, t, a) { e = e._reactInternals; var l = ot(), n = na(l); n.tag = 1, n.payload = t, a != null && (n.callback = a), t = ia(e, n, l), t !== null && (Fe(t, e, l), Kl(t, e, l)) }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var a = ot(), l = na(a); l.tag = 2, t != null && (l.callback = t), t = ia(e, l, a), t !== null && (Fe(t, e, a), Kl(t, e, a)) } }; function _s(e, t, a, l, n, i, u) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, u) : t.prototype && t.prototype.isPureReactComponent ? !kl(a, l) || !kl(n, i) : !0 } function Ss(e, t, a, l) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && io.enqueueReplaceState(t, t.state, null) } function Ba(e, t) { var a = t; if ("ref" in t) { a = {}; for (var l in t) l !== "ref" && (a[l] = t[l]) } if (e = e.defaultProps) { a === t && (a = R({}, a)); for (var n in e) a[n] === void 0 && (a[n] = e[n]) } return a } function Ts(e) { Bn(e) } function As(e) { console.error(e) } function ws(e) { Bn(e) } function oi(e, t) { try { var a = e.onUncaughtError; a(t.value, { componentStack: t.stack }) } catch (l) { setTimeout(function () { throw l }) } } function js(e, t, a) { try { var l = e.onCaughtError; l(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null }) } catch (n) { setTimeout(function () { throw n }) } } function uo(e, t, a) { return a = na(a), a.tag = 3, a.payload = { element: null }, a.callback = function () { oi(e, t) }, a } function Es(e) { return e = na(e), e.tag = 3, e } function zs(e, t, a, l) { var n = a.type.getDerivedStateFromError; if (typeof n == "function") { var i = l.value; e.payload = function () { return n(i) }, e.callback = function () { js(t, a, l) } } var u = a.stateNode; u !== null && typeof u.componentDidCatch == "function" && (e.callback = function () { js(t, a, l), typeof n != "function" && (fa === null ? fa = new Set([this]) : fa.add(this)); var o = l.stack; this.componentDidCatch(l.value, { componentStack: o !== null ? o : "" }) }) } function ry(e, t, a, l, n) { if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") { if (t = a.alternate, t !== null && il(t, a, n, !0), a = lt.current, a !== null) { switch (a.tag) { case 31: case 13: return gt === null ? vi() : a.alternate === null && _e === 0 && (_e = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Jn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([l]) : t.add(l), xo(e, l, n)), !1; case 22: return a.flags |= 65536, l === Jn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([l]) : a.add(l)), xo(e, l, n)), !1 }throw Error(d(435, a.tag)) } return xo(e, l, n), vi(), !1 } if (P) return t = lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== ju && (e = Error(d(422), { cause: l }), Ql(dt(e, a)))) : (l !== ju && (t = Error(d(423), { cause: l }), Ql(dt(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = dt(l, a), n = uo(e.stateNode, l, n), qu(e, n), _e !== 4 && (_e = 2)), !1; var i = Error(d(520), { cause: l }); if (i = dt(i, a), cn === null ? cn = [i] : cn.push(i), _e !== 4 && (_e = 2), t === null) return !0; l = dt(l, a), a = t; do { switch (a.tag) { case 3: return a.flags |= 65536, e = n & -n, a.lanes |= e, e = uo(a.stateNode, l, e), qu(a, e), !1; case 1: if (t = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (fa === null || !fa.has(i)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = Es(n), zs(n, e, a, l), qu(a, n), !1 }a = a.return } while (a !== null); return !1 } var oo = Error(d(461)), ze = !1; function qe(e, t, a, l) { t.child = e === null ? Or(t, null, a, l) : qa(t, e.child, a, l) } function Ns(e, t, a, l, n) { a = a.render; var i = t.ref; if ("ref" in l) { var u = {}; for (var o in l) o !== "ref" && (u[o] = l[o]) } else u = l; return xa(t), l = Qu(e, t, a, u, i, n), o = Lu(), e !== null && !ze ? (Xu(e, t, n), Gt(e, t, n)) : (P && o && Au(t), t.flags |= 1, qe(e, t, l, n), t.child) } function Hs(e, t, a, l, n) { if (e === null) { var i = a.type; return typeof i == "function" && !_u(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = i, Rs(e, t, i, l, n)) : (e = Qn(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e) } if (i = e.child, !go(e, n)) { var u = i.memoizedProps; if (a = a.compare, a = a !== null ? a : kl, a(u, l) && e.ref === t.ref) return Gt(e, t, n) } return t.flags |= 1, e = Ct(i, l), e.ref = t.ref, e.return = t, t.child = e } function Rs(e, t, a, l, n) { if (e !== null) { var i = e.memoizedProps; if (kl(i, l) && e.ref === t.ref) if (ze = !1, t.pendingProps = l = i, go(e, n)) (e.flags & 131072) !== 0 && (ze = !0); else return t.lanes = e.lanes, Gt(e, t, n) } return co(e, t, a, l, n) } function Os(e, t, a, l) { var n = l.children, i = e !== null ? e.memoizedState : null; if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") { if ((t.flags & 128) !== 0) { if (i = i !== null ? i.baseLanes | a : a, e !== null) { for (l = t.child = e.child, n = 0; l !== null;)n = n | l.lanes | l.childLanes, l = l.sibling; l = n & ~i } else l = 0, t.child = null; return xs(e, t, i, a, l) } if ((a & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Vn(t, i !== null ? i.cachePool : null), i !== null ? Dr(t, i) : Bu(), Cr(t); else return l = t.lanes = 536870912, xs(e, t, i !== null ? i.baseLanes | a : a, a, l) } else i !== null ? (Vn(t, i.cachePool), Dr(t, i), oa(), t.memoizedState = null) : (e !== null && Vn(t, null), Bu(), oa()); return qe(e, t, n, a), t.child } function en(e, t) { return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling } function xs(e, t, a, l, n) { var i = xu(); return i = i === null ? null : { parent: je._currentValue, pool: i }, t.memoizedState = { baseLanes: a, cachePool: i }, e !== null && Vn(t, null), Bu(), Cr(t), e !== null && il(e, t, l, !0), t.childLanes = n, null } function ci(e, t) { return t = si({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t } function Ms(e, t, a) { return qa(t, e.child, null, a), e = ci(t, t.pendingProps), e.flags |= 2, nt(t), t.memoizedState = null, e } function sy(e, t, a) { var l = t.pendingProps, n = (t.flags & 128) !== 0; if (t.flags &= -129, e === null) { if (P) { if (l.mode === "hidden") return e = ci(t, l), t.lanes = 536870912, en(null, e); if (Yu(t), (e = ye) ? (e = Vf(e, pt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Pt !== null ? { id: zt, overflow: Nt } : null, retryLane: 536870912, hydrationErrors: null }, a = gr(e), a.return = t, t.child = a, De = t, ye = null)) : e = null, e === null) throw ta(t); return t.lanes = 536870912, null } return ci(t, l) } var i = e.memoizedState; if (i !== null) { var u = i.dehydrated; if (Yu(t), n) if (t.flags & 256) t.flags &= -257, t = Ms(e, t, a); else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null; else throw Error(d(558)); else if (ze || il(e, t, a, !1), n = (a & e.childLanes) !== 0, ze || n) { if (l = me, l !== null && (u = Ac(l, a), u !== 0 && u !== i.retryLane)) throw i.retryLane = u, Na(e, u), Fe(l, e, u), oo; vi(), t = Ms(e, t, a) } else e = i.treeContext, ye = ht(u.nextSibling), De = t, P = !0, ea = null, pt = !1, e !== null && vr(t, e), t = ci(t, l), t.flags |= 4096; return t } return e = Ct(e.child, { mode: l.mode, children: l.children }), e.ref = t.ref, t.child = e, e.return = t, e } function ri(e, t) { var a = t.ref; if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816); else { if (typeof a != "function" && typeof a != "object") throw Error(d(284)); (e === null || e.ref !== a) && (t.flags |= 4194816) } } function co(e, t, a, l, n) { return xa(t), a = Qu(e, t, a, l, void 0, n), l = Lu(), e !== null && !ze ? (Xu(e, t, n), Gt(e, t, n)) : (P && l && Au(t), t.flags |= 1, qe(e, t, a, n), t.child) } function Ds(e, t, a, l, n, i) { return xa(t), t.updateQueue = null, a = Ur(t, l, a, n), qr(e), l = Lu(), e !== null && !ze ? (Xu(e, t, i), Gt(e, t, i)) : (P && l && Au(t), t.flags |= 1, qe(e, t, a, i), t.child) } function Cs(e, t, a, l, n) { if (xa(t), t.stateNode === null) { var i = tl, u = a.contextType; typeof u == "object" && u !== null && (i = Ce(u)), i = new a(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = io, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Du(t), u = a.contextType, i.context = typeof u == "object" && u !== null ? Ce(u) : tl, i.state = t.memoizedState, u = a.getDerivedStateFromProps, typeof u == "function" && (no(t, a, u, l), i.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && io.enqueueReplaceState(i, i.state, null), Wl(t, l, i, n), Jl(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0 } else if (e === null) { i = t.stateNode; var o = t.memoizedProps, c = Ba(a, o); i.props = c; var y = i.context, h = a.contextType; u = tl, typeof h == "object" && h !== null && (u = Ce(h)); var _ = a.getDerivedStateFromProps; h = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || y !== u) && Ss(t, i, l, u), la = !1; var p = t.memoizedState; i.state = p, Wl(t, l, i, n), Jl(), y = t.memoizedState, o || p !== y || la ? (typeof _ == "function" && (no(t, a, _, l), y = t.memoizedState), (c = la || _s(t, a, c, l, p, y, u)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = y), i.props = l, i.state = y, i.context = u, l = c) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1) } else { i = t.stateNode, Cu(e, t), u = t.memoizedProps, h = Ba(a, u), i.props = h, _ = t.pendingProps, p = i.context, y = a.contextType, c = tl, typeof y == "object" && y !== null && (c = Ce(y)), o = a.getDerivedStateFromProps, (y = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== _ || p !== c) && Ss(t, i, l, c), la = !1, p = t.memoizedState, i.state = p, Wl(t, l, i, n), Jl(); var g = t.memoizedState; u !== _ || p !== g || la || e !== null && e.dependencies !== null && Xn(e.dependencies) ? (typeof o == "function" && (no(t, a, o, l), g = t.memoizedState), (h = la || _s(t, a, h, l, p, g, c) || e !== null && e.dependencies !== null && Xn(e.dependencies)) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, g, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(l, g, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = g), i.props = l, i.state = g, i.context = c, l = h) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), l = !1) } return i = l, ri(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = qa(t, e.child, null, n), t.child = qa(t, null, a, n)) : qe(e, t, a, n), t.memoizedState = i.state, e = t.child) : e = Gt(e, t, n), e } function qs(e, t, a, l) { return Ra(), t.flags |= 256, qe(e, t, a, l), t.child } var ro = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }; function so(e) { return { baseLanes: e, cachePool: jr() } } function fo(e, t, a) { return e = e !== null ? e.childLanes & ~a : 0, t && (e |= ut), e } function Us(e, t, a) { var l = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, u; if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Ae.current & 2) !== 0), u && (n = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) { if (P) { if (n ? ua(t) : oa(), (e = ye) ? (e = Vf(e, pt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Pt !== null ? { id: zt, overflow: Nt } : null, retryLane: 536870912, hydrationErrors: null }, a = gr(e), a.return = t, t.child = a, De = t, ye = null)) : e = null, e === null) throw ta(t); return Jo(e) ? t.lanes = 32 : t.lanes = 536870912, null } var o = l.children; return l = l.fallback, n ? (oa(), n = t.mode, o = si({ mode: "hidden", children: o }, n), l = Ha(l, n, a, null), o.return = t, l.return = t, o.sibling = l, t.child = o, l = t.child, l.memoizedState = so(a), l.childLanes = fo(e, u, a), t.memoizedState = ro, en(null, l)) : (ua(t), mo(t, o)) } var c = e.memoizedState; if (c !== null && (o = c.dehydrated, o !== null)) { if (i) t.flags & 256 ? (ua(t), t.flags &= -257, t = yo(e, t, a)) : t.memoizedState !== null ? (oa(), t.child = e.child, t.flags |= 128, t = null) : (oa(), o = l.fallback, n = t.mode, l = si({ mode: "visible", children: l.children }, n), o = Ha(o, n, a, null), o.flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, qa(t, e.child, null, a), l = t.child, l.memoizedState = so(a), l.childLanes = fo(e, u, a), t.memoizedState = ro, t = en(null, l)); else if (ua(t), Jo(o)) { if (u = o.nextSibling && o.nextSibling.dataset, u) var y = u.dgst; u = y, l = Error(d(419)), l.stack = "", l.digest = u, Ql({ value: l, source: null, stack: null }), t = yo(e, t, a) } else if (ze || il(e, t, a, !1), u = (a & e.childLanes) !== 0, ze || u) { if (u = me, u !== null && (l = Ac(u, a), l !== 0 && l !== c.retryLane)) throw c.retryLane = l, Na(e, l), Fe(u, e, l), oo; Ko(o) || vi(), t = yo(e, t, a) } else Ko(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = c.treeContext, ye = ht(o.nextSibling), De = t, P = !0, ea = null, pt = !1, e !== null && vr(t, e), t = mo(t, l.children), t.flags |= 4096); return t } return n ? (oa(), o = l.fallback, n = t.mode, c = e.child, y = c.sibling, l = Ct(c, { mode: "hidden", children: l.children }), l.subtreeFlags = c.subtreeFlags & 65011712, y !== null ? o = Ct(y, o) : (o = Ha(o, n, a, null), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, en(null, l), l = t.child, o = e.child.memoizedState, o === null ? o = so(a) : (n = o.cachePool, n !== null ? (c = je._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = jr(), o = { baseLanes: o.baseLanes | a, cachePool: n }), l.memoizedState = o, l.childLanes = fo(e, u, a), t.memoizedState = ro, en(e.child, l)) : (ua(t), a = e.child, e = a.sibling, a = Ct(a, { mode: "visible", children: l.children }), a.return = t, a.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = a, t.memoizedState = null, a) } function mo(e, t) { return t = si({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t } function si(e, t) { return e = at(22, e, null, t), e.lanes = 0, e } function yo(e, t, a) { return qa(t, e.child, null, a), e = mo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e } function Bs(e, t, a) { e.lanes |= t; var l = e.alternate; l !== null && (l.lanes |= t), Nu(e.return, t, a) } function po(e, t, a, l, n, i) { var u = e.memoizedState; u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: a, tailMode: n, treeForkCount: i } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = a, u.tailMode = n, u.treeForkCount = i) } function ks(e, t, a) { var l = t.pendingProps, n = l.revealOrder, i = l.tail; l = l.children; var u = Ae.current, o = (u & 2) !== 0; if (o ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, j(Ae, u), qe(e, t, l, a), l = P ? Gl : 0, !o && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) { if (e.tag === 13) e.memoizedState !== null && Bs(e, a, t); else if (e.tag === 19) Bs(e, a, t); else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; e.sibling === null;) { if (e.return === null || e.return === t) break e; e = e.return } e.sibling.return = e.return, e = e.sibling } switch (n) { case "forwards": for (a = t.child, n = null; a !== null;)e = a.alternate, e !== null && $n(e) === null && (n = a), a = a.sibling; a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), po(t, !1, n, a, i, l); break; case "backwards": case "unstable_legacy-backwards": for (a = null, n = t.child, t.child = null; n !== null;) { if (e = n.alternate, e !== null && $n(e) === null) { t.child = n; break } e = n.sibling, n.sibling = a, a = n, n = e } po(t, !0, a, null, i, l); break; case "together": po(t, !1, null, null, void 0, l); break; default: t.memoizedState = null }return t.child } function Gt(e, t, a) { if (e !== null && (t.dependencies = e.dependencies), sa |= t.lanes, (a & t.childLanes) === 0) if (e !== null) { if (il(e, t, a, !1), (a & t.childLanes) === 0) return null } else return null; if (e !== null && t.child !== e.child) throw Error(d(153)); if (t.child !== null) { for (e = t.child, a = Ct(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;)e = e.sibling, a = a.sibling = Ct(e, e.pendingProps), a.return = t; a.sibling = null } return t.child } function go(e, t) { return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xn(e))) } function fy(e, t, a) { switch (t.tag) { case 3: Ye(t, t.stateNode.containerInfo), aa(t, je, e.memoizedState.cache), Ra(); break; case 27: case 5: El(t); break; case 4: Ye(t, t.stateNode.containerInfo); break; case 10: aa(t, t.type, t.memoizedProps.value); break; case 31: if (t.memoizedState !== null) return t.flags |= 128, Yu(t), null; break; case 13: var l = t.memoizedState; if (l !== null) return l.dehydrated !== null ? (ua(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Us(e, t, a) : (ua(t), e = Gt(e, t, a), e !== null ? e.sibling : null); ua(t); break; case 19: var n = (e.flags & 128) !== 0; if (l = (a & t.childLanes) !== 0, l || (il(e, t, a, !1), l = (a & t.childLanes) !== 0), n) { if (l) return ks(e, t, a); t.flags |= 128 } if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), j(Ae, Ae.current), l) break; return null; case 22: return t.lanes = 0, Os(e, t, a, t.pendingProps); case 24: aa(t, je, e.memoizedState.cache) }return Gt(e, t, a) } function Ys(e, t, a) { if (e !== null) if (e.memoizedProps !== t.pendingProps) ze = !0; else { if (!go(e, a) && (t.flags & 128) === 0) return ze = !1, fy(e, t, a); ze = (e.flags & 131072) !== 0 } else ze = !1, P && (t.flags & 1048576) !== 0 && br(t, Gl, t.index); switch (t.lanes = 0, t.tag) { case 16: e: { var l = t.pendingProps; if (e = Da(t.elementType), t.type = e, typeof e == "function") _u(e) ? (l = Ba(e, l), t.tag = 1, t = Cs(null, t, e, l, a)) : (t.tag = 0, t = co(null, t, e, l, a)); else { if (e != null) { var n = e.$$typeof; if (n === ct) { t.tag = 11, t = Ns(null, t, e, l, a); break e } else if (n === $) { t.tag = 14, t = Hs(null, t, e, l, a); break e } } throw t = Ot(e) || e, Error(d(306, t, "")) } } return t; case 0: return co(e, t, t.type, t.pendingProps, a); case 1: return l = t.type, n = Ba(l, t.pendingProps), Cs(e, t, l, n, a); case 3: e: { if (Ye(t, t.stateNode.containerInfo), e === null) throw Error(d(387)); l = t.pendingProps; var i = t.memoizedState; n = i.element, Cu(e, t), Wl(t, l, null, a); var u = t.memoizedState; if (l = u.cache, aa(t, je, l), l !== i.cache && Hu(t, [je], a, !0), Jl(), l = u.element, i.isDehydrated) if (i = { element: l, isDehydrated: !1, cache: u.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) { t = qs(e, t, l, a); break e } else if (l !== n) { n = dt(Error(d(424)), t), Ql(n), t = qs(e, t, l, a); break e } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ye = ht(e.firstChild), De = t, P = !0, ea = null, pt = !0, a = Or(t, null, l, a), t.child = a; a;)a.flags = a.flags & -3 | 4096, a = a.sibling; else { if (Ra(), l === n) { t = Gt(e, t, a); break e } qe(e, t, l, a) } t = t.child } return t; case 26: return ri(e, t), e === null ? (a = $f(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : P || (a = t.type, e = t.pendingProps, l = Ei(K.current).createElement(a), l[Me] = t, l[Ze] = e, Ue(l, a, e), Re(l), t.stateNode = l) : t.memoizedState = $f(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null; case 27: return El(t), e === null && P && (l = t.stateNode = Wf(t.type, t.pendingProps, K.current), De = t, pt = !0, n = ye, pa(t.type) ? (Wo = n, ye = ht(l.firstChild)) : ye = n), qe(e, t, t.pendingProps.children, a), ri(e, t), e === null && (t.flags |= 4194304), t.child; case 5: return e === null && P && ((n = l = ye) && (l = Gy(l, t.type, t.pendingProps, pt), l !== null ? (t.stateNode = l, De = t, ye = ht(l.firstChild), pt = !1, n = !0) : n = !1), n || ta(t)), El(t), n = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = i.children, Xo(n, i) ? l = null : u !== null && Xo(n, u) && (t.flags |= 32), t.memoizedState !== null && (n = Qu(e, t, ay, null, null, a), gn._currentValue = n), ri(e, t), qe(e, t, l, a), t.child; case 6: return e === null && P && ((e = a = ye) && (a = Qy(a, t.pendingProps, pt), a !== null ? (t.stateNode = a, De = t, ye = null, e = !0) : e = !1), e || ta(t)), null; case 13: return Us(e, t, a); case 4: return Ye(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = qa(t, null, l, a) : qe(e, t, l, a), t.child; case 11: return Ns(e, t, t.type, t.pendingProps, a); case 7: return qe(e, t, t.pendingProps, a), t.child; case 8: return qe(e, t, t.pendingProps.children, a), t.child; case 12: return qe(e, t, t.pendingProps.children, a), t.child; case 10: return l = t.pendingProps, aa(t, t.type, l.value), qe(e, t, l.children, a), t.child; case 9: return n = t.type._context, l = t.pendingProps.children, xa(t), n = Ce(n), l = l(n), t.flags |= 1, qe(e, t, l, a), t.child; case 14: return Hs(e, t, t.type, t.pendingProps, a); case 15: return Rs(e, t, t.type, t.pendingProps, a); case 19: return ks(e, t, a); case 31: return sy(e, t, a); case 22: return Os(e, t, a, t.pendingProps); case 24: return xa(t), l = Ce(je), e === null ? (n = xu(), n === null && (n = me, i = Ru(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), t.memoizedState = { parent: l, cache: n }, Du(t), aa(t, je, n)) : ((e.lanes & a) !== 0 && (Cu(e, t), Wl(t, null, null, a), Jl()), n = e.memoizedState, i = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), aa(t, je, l)) : (l = i.cache, aa(t, je, l), l !== n.cache && Hu(t, [je], a, !0))), qe(e, t, t.pendingProps.children, a), t.child; case 29: throw t.pendingProps }throw Error(d(156, t.tag)) } function Qt(e) { e.flags |= 4 } function ho(e, t, a, l, n) { if ((t = (e.mode & 32) !== 0) && (t = !1), t) { if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192; else if (yf()) e.flags |= 8192; else throw Ca = Jn, Mu } else e.flags &= -16777217 } function Gs(e, t) { if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217; else if (e.flags |= 16777216, !ld(t)) if (yf()) e.flags |= 8192; else throw Ca = Jn, Mu } function fi(e, t) { t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? _c() : 536870912, e.lanes |= t, hl |= t) } function tn(e, t) { if (!P) switch (e.tailMode) { case "hidden": t = e.tail; for (var a = null; t !== null;)t.alternate !== null && (a = t), t = t.sibling; a === null ? e.tail = null : a.sibling = null; break; case "collapsed": a = e.tail; for (var l = null; a !== null;)a.alternate !== null && (l = a), a = a.sibling; l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null } } function pe(e) { var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0; if (t) for (var n = e.child; n !== null;)a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling; else for (n = e.child; n !== null;)a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling; return e.subtreeFlags |= l, e.childLanes = a, t } function dy(e, t, a) { var l = t.pendingProps; switch (wu(t), t.tag) { case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return pe(t), null; case 1: return pe(t), null; case 3: return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Bt(je), Te(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (nl(t) ? Qt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Eu())), pe(t), null; case 26: var n = t.type, i = t.memoizedState; return e === null ? (Qt(t), i !== null ? (pe(t), Gs(t, i)) : (pe(t), ho(t, n, null, l, a))) : i ? i !== e.memoizedState ? (Qt(t), pe(t), Gs(t, i)) : (pe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Qt(t), pe(t), ho(t, n, e, l, a)), null; case 27: if (Tn(t), a = K.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Qt(t); else { if (!l) { if (t.stateNode === null) throw Error(d(166)); return pe(t), null } e = N.current, nl(t) ? _r(t) : (e = Wf(n, l, a), t.stateNode = e, Qt(t)) } return pe(t), null; case 5: if (Tn(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Qt(t); else { if (!l) { if (t.stateNode === null) throw Error(d(166)); return pe(t), null } if (i = N.current, nl(t)) _r(t); else { var u = Ei(K.current); switch (i) { case 1: i = u.createElementNS("http://www.w3.org/2000/svg", n); break; case 2: i = u.createElementNS("http://www.w3.org/1998/Math/MathML", n); break; default: switch (n) { case "svg": i = u.createElementNS("http://www.w3.org/2000/svg", n); break; case "math": i = u.createElementNS("http://www.w3.org/1998/Math/MathML", n); break; case "script": i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild); break; case "select": i = typeof l.is == "string" ? u.createElement("select", { is: l.is }) : u.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size); break; default: i = typeof l.is == "string" ? u.createElement(n, { is: l.is }) : u.createElement(n) } }i[Me] = t, i[Ze] = l; e: for (u = t.child; u !== null;) { if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode); else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) { u.child.return = u, u = u.child; continue } if (u === t) break e; for (; u.sibling === null;) { if (u.return === null || u.return === t) break e; u = u.return } u.sibling.return = u.return, u = u.sibling } t.stateNode = i; e: switch (Ue(i, n, l), n) { case "button": case "input": case "select": case "textarea": l = !!l.autoFocus; break e; case "img": l = !0; break e; default: l = !1 }l && Qt(t) } } return pe(t), ho(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null; case 6: if (e && t.stateNode != null) e.memoizedProps !== l && Qt(t); else { if (typeof l != "string" && t.stateNode === null) throw Error(d(166)); if (e = K.current, nl(t)) { if (e = t.stateNode, a = t.memoizedProps, l = null, n = De, n !== null) switch (n.tag) { case 27: case 5: l = n.memoizedProps }e[Me] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Bf(e.nodeValue, a)), e || ta(t, !0) } else e = Ei(e).createTextNode(l), e[Me] = t, t.stateNode = e } return pe(t), null; case 31: if (a = t.memoizedState, e === null || e.memoizedState !== null) { if (l = nl(t), a !== null) { if (e === null) { if (!l) throw Error(d(318)); if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(557)); e[Me] = t } else Ra(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4; pe(t), e = !1 } else a = Eu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0; if (!e) return t.flags & 256 ? (nt(t), t) : (nt(t), null); if ((t.flags & 128) !== 0) throw Error(d(558)) } return pe(t), null; case 13: if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if (n = nl(t), l !== null && l.dehydrated !== null) { if (e === null) { if (!n) throw Error(d(318)); if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317)); n[Me] = t } else Ra(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4; pe(t), n = !1 } else n = Eu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0; if (!n) return t.flags & 256 ? (nt(t), t) : (nt(t), null) } return nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), fi(t, t.updateQueue), pe(t), null); case 4: return Te(), e === null && ko(t.stateNode.containerInfo), pe(t), null; case 10: return Bt(t.type), pe(t), null; case 19: if (S(Ae), l = t.memoizedState, l === null) return pe(t), null; if (n = (t.flags & 128) !== 0, i = l.rendering, i === null) if (n) tn(l, !1); else { if (_e !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null;) { if (i = $n(e), i !== null) { for (t.flags |= 128, tn(l, !1), e = i.updateQueue, t.updateQueue = e, fi(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;)pr(a, e), a = a.sibling; return j(Ae, Ae.current & 1 | 2), P && qt(t, l.treeForkCount), t.child } e = e.sibling } l.tail !== null && $e() > gi && (t.flags |= 128, n = !0, tn(l, !1), t.lanes = 4194304) } else { if (!n) if (e = $n(i), e !== null) { if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, fi(t, e), tn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !P) return pe(t), null } else 2 * $e() - l.renderingStartTime > gi && a !== 536870912 && (t.flags |= 128, n = !0, tn(l, !1), t.lanes = 4194304); l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i) } return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = $e(), e.sibling = null, a = Ae.current, j(Ae, n ? a & 1 | 2 : a & 1), P && qt(t, l.treeForkCount), e) : (pe(t), null); case 22: case 23: return nt(t), ku(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), a = t.updateQueue, a !== null && fi(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && S(Ma), null; case 24: return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(je), pe(t), null; case 25: return null; case 30: return null }throw Error(d(156, t.tag)) } function my(e, t) { switch (wu(t), t.tag) { case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 3: return Bt(je), Te(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null; case 26: case 27: case 5: return Tn(t), null; case 31: if (t.memoizedState !== null) { if (nt(t), t.alternate === null) throw Error(d(340)); Ra() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 13: if (nt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) { if (t.alternate === null) throw Error(d(340)); Ra() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 19: return S(Ae), null; case 4: return Te(), null; case 10: return Bt(t.type), null; case 22: case 23: return nt(t), ku(), e !== null && S(Ma), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 24: return Bt(je), null; case 25: return null; default: return null } } function Qs(e, t) { switch (wu(t), t.tag) { case 3: Bt(je), Te(); break; case 26: case 27: case 5: Tn(t); break; case 4: Te(); break; case 31: t.memoizedState !== null && nt(t); break; case 13: nt(t); break; case 19: S(Ae); break; case 10: Bt(t.type); break; case 22: case 23: nt(t), ku(), e !== null && S(Ma); break; case 24: Bt(je) } } function an(e, t) { try { var a = t.updateQueue, l = a !== null ? a.lastEffect : null; if (l !== null) { var n = l.next; a = n; do { if ((a.tag & e) === e) { l = void 0; var i = a.create, u = a.inst; l = i(), u.destroy = l } a = a.next } while (a !== n) } } catch (o) { ue(t, t.return, o) } } function ca(e, t, a) { try { var l = t.updateQueue, n = l !== null ? l.lastEffect : null; if (n !== null) { var i = n.next; l = i; do { if ((l.tag & e) === e) { var u = l.inst, o = u.destroy; if (o !== void 0) { u.destroy = void 0, n = t; var c = a, y = o; try { y() } catch (h) { ue(n, c, h) } } } l = l.next } while (l !== i) } } catch (h) { ue(t, t.return, h) } } function Ls(e) { var t = e.updateQueue; if (t !== null) { var a = e.stateNode; try { Mr(t, a) } catch (l) { ue(e, e.return, l) } } } function Xs(e, t, a) { a.props = Ba(e.type, e.memoizedProps), a.state = e.memoizedState; try { a.componentWillUnmount() } catch (l) { ue(e, t, l) } } function ln(e, t) { try { var a = e.ref; if (a !== null) { switch (e.tag) { case 26: case 27: case 5: var l = e.stateNode; break; case 30: l = e.stateNode; break; default: l = e.stateNode }typeof a == "function" ? e.refCleanup = a(l) : a.current = l } } catch (n) { ue(e, t, n) } } function Ht(e, t) { var a = e.ref, l = e.refCleanup; if (a !== null) if (typeof l == "function") try { l() } catch (n) { ue(e, t, n) } finally { e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null) } else if (typeof a == "function") try { a(null) } catch (n) { ue(e, t, n) } else a.current = null } function Zs(e) { var t = e.type, a = e.memoizedProps, l = e.stateNode; try { e: switch (t) { case "button": case "input": case "select": case "textarea": a.autoFocus && l.focus(); break e; case "img": a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet) } } catch (n) { ue(e, e.return, n) } } function bo(e, t, a) { try { var l = e.stateNode; Cy(l, e.type, a, t), l[Ze] = t } catch (n) { ue(e, e.return, n) } } function Vs(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && pa(e.type) || e.tag === 4 } function vo(e) { e: for (; ;) { for (; e.sibling === null;) { if (e.return === null || Vs(e.return)) return null; e = e.return } for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) { if (e.tag === 27 && pa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e; e.child.return = e, e = e.child } if (!(e.flags & 2)) return e.stateNode } } function _o(e, t, a) { var l = e.tag; if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Mt)); else if (l !== 4 && (l === 27 && pa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for (_o(e, t, a), e = e.sibling; e !== null;)_o(e, t, a), e = e.sibling } function di(e, t, a) { var l = e.tag; if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e); else if (l !== 4 && (l === 27 && pa(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (di(e, t, a), e = e.sibling; e !== null;)di(e, t, a), e = e.sibling } function Ks(e) { var t = e.stateNode, a = e.memoizedProps; try { for (var l = e.type, n = t.attributes; n.length;)t.removeAttributeNode(n[0]); Ue(t, l, a), t[Me] = e, t[Ze] = a } catch (i) { ue(e, e.return, i) } } var Lt = !1, Ne = !1, So = !1, Js = typeof WeakSet == "function" ? WeakSet : Set, Oe = null; function yy(e, t) { if (e = e.containerInfo, Qo = Mi, e = ur(e), mu(e)) { if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd }; else e: { a = (a = e.ownerDocument) && a.defaultView || window; var l = a.getSelection && a.getSelection(); if (l && l.rangeCount !== 0) { a = l.anchorNode; var n = l.anchorOffset, i = l.focusNode; l = l.focusOffset; try { a.nodeType, i.nodeType } catch { a = null; break e } var u = 0, o = -1, c = -1, y = 0, h = 0, _ = e, p = null; t: for (; ;) { for (var g; _ !== a || n !== 0 && _.nodeType !== 3 || (o = u + n), _ !== i || l !== 0 && _.nodeType !== 3 || (c = u + l), _.nodeType === 3 && (u += _.nodeValue.length), (g = _.firstChild) !== null;)p = _, _ = g; for (; ;) { if (_ === e) break t; if (p === a && ++y === n && (o = u), p === i && ++h === l && (c = u), (g = _.nextSibling) !== null) break; _ = p, p = _.parentNode } _ = g } a = o === -1 || c === -1 ? null : { start: o, end: c } } else a = null } a = a || { start: 0, end: 0 } } else a = null; for (Lo = { focusedElem: e, selectionRange: a }, Mi = !1, Oe = t; Oe !== null;)if (t = Oe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Oe = e; else for (; Oe !== null;) { switch (t = Oe, i = t.alternate, e = t.flags, t.tag) { case 0: if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (a = 0; a < e.length; a++)n = e[a], n.ref.impl = n.nextImpl; break; case 11: case 15: break; case 1: if ((e & 1024) !== 0 && i !== null) { e = void 0, a = t, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode; try { var z = Ba(a.type, n); e = l.getSnapshotBeforeUpdate(z, i), l.__reactInternalSnapshotBeforeUpdate = e } catch (q) { ue(a, a.return, q) } } break; case 3: if ((e & 1024) !== 0) { if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) Vo(e); else if (a === 1) switch (e.nodeName) { case "HEAD": case "HTML": case "BODY": Vo(e); break; default: e.textContent = "" } } break; case 5: case 26: case 27: case 6: case 4: case 17: break; default: if ((e & 1024) !== 0) throw Error(d(163)) }if (e = t.sibling, e !== null) { e.return = t.return, Oe = e; break } Oe = t.return } } function Ws(e, t, a) { var l = a.flags; switch (a.tag) { case 0: case 11: case 15: Zt(e, a), l & 4 && an(5, a); break; case 1: if (Zt(e, a), l & 4) if (e = a.stateNode, t === null) try { e.componentDidMount() } catch (u) { ue(a, a.return, u) } else { var n = Ba(a.type, t.memoizedProps); t = t.memoizedState; try { e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate) } catch (u) { ue(a, a.return, u) } } l & 64 && Ls(a), l & 512 && ln(a, a.return); break; case 3: if (Zt(e, a), l & 64 && (e = a.updateQueue, e !== null)) { if (t = null, a.child !== null) switch (a.child.tag) { case 27: case 5: t = a.child.stateNode; break; case 1: t = a.child.stateNode }try { Mr(e, t) } catch (u) { ue(a, a.return, u) } } break; case 27: t === null && l & 4 && Ks(a); case 26: case 5: Zt(e, a), t === null && l & 4 && Zs(a), l & 512 && ln(a, a.return); break; case 12: Zt(e, a); break; case 31: Zt(e, a), l & 4 && $s(e, a); break; case 13: Zt(e, a), l & 4 && Ps(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Ay.bind(null, a), Ly(e, a)))); break; case 22: if (l = a.memoizedState !== null || Lt, !l) { t = t !== null && t.memoizedState !== null || Ne, n = Lt; var i = Ne; Lt = l, (Ne = t) && !i ? Vt(e, a, (a.subtreeFlags & 8772) !== 0) : Zt(e, a), Lt = n, Ne = i } break; case 30: break; default: Zt(e, a) } } function Is(e) { var t = e.alternate; t !== null && (e.alternate = null, Is(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null } var ge = null, Ke = !1; function Xt(e, t, a) { for (a = a.child; a !== null;)Fs(e, t, a), a = a.sibling } function Fs(e, t, a) { if (Pe && typeof Pe.onCommitFiberUnmount == "function") try { Pe.onCommitFiberUnmount(zl, a) } catch { } switch (a.tag) { case 26: Ne || Ht(a, t), Xt(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a)); break; case 27: Ne || Ht(a, t); var l = ge, n = Ke; pa(a.type) && (ge = a.stateNode, Ke = !1), Xt(e, t, a), mn(a.stateNode), ge = l, Ke = n; break; case 5: Ne || Ht(a, t); case 6: if (l = ge, n = Ke, ge = null, Xt(e, t, a), ge = l, Ke = n, ge !== null) if (Ke) try { (ge.nodeType === 9 ? ge.body : ge.nodeName === "HTML" ? ge.ownerDocument.body : ge).removeChild(a.stateNode) } catch (i) { ue(a, t, i) } else try { ge.removeChild(a.stateNode) } catch (i) { ue(a, t, i) } break; case 18: ge !== null && (Ke ? (e = ge, Xf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), jl(e)) : Xf(ge, a.stateNode)); break; case 4: l = ge, n = Ke, ge = a.stateNode.containerInfo, Ke = !0, Xt(e, t, a), ge = l, Ke = n; break; case 0: case 11: case 14: case 15: ca(2, a, t), Ne || ca(4, a, t), Xt(e, t, a); break; case 1: Ne || (Ht(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Xs(a, t, l)), Xt(e, t, a); break; case 21: Xt(e, t, a); break; case 22: Ne = (l = Ne) || a.memoizedState !== null, Xt(e, t, a), Ne = l; break; default: Xt(e, t, a) } } function $s(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) { e = e.dehydrated; try { jl(e) } catch (a) { ue(t, t.return, a) } } } function Ps(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try { jl(e) } catch (a) { ue(t, t.return, a) } } function py(e) { switch (e.tag) { case 31: case 13: case 19: var t = e.stateNode; return t === null && (t = e.stateNode = new Js), t; case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Js), t; default: throw Error(d(435, e.tag)) } } function mi(e, t) { var a = py(e); t.forEach(function (l) { if (!a.has(l)) { a.add(l); var n = wy.bind(null, e, l); l.then(n, n) } }) } function Je(e, t) { var a = t.deletions; if (a !== null) for (var l = 0; l < a.length; l++) { var n = a[l], i = e, u = t, o = u; e: for (; o !== null;) { switch (o.tag) { case 27: if (pa(o.type)) { ge = o.stateNode, Ke = !1; break e } break; case 5: ge = o.stateNode, Ke = !1; break e; case 3: case 4: ge = o.stateNode.containerInfo, Ke = !0; break e }o = o.return } if (ge === null) throw Error(d(160)); Fs(i, u, n), ge = null, Ke = !1, i = n.alternate, i !== null && (i.return = null), n.return = null } if (t.subtreeFlags & 13886) for (t = t.child; t !== null;)ef(t, e), t = t.sibling } var Tt = null; function ef(e, t) { var a = e.alternate, l = e.flags; switch (e.tag) { case 0: case 11: case 14: case 15: Je(t, e), We(e), l & 4 && (ca(3, e, e.return), an(3, e), ca(5, e, e.return)); break; case 1: Je(t, e), We(e), l & 512 && (Ne || a === null || Ht(a, a.return)), l & 64 && Lt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l)))); break; case 26: var n = Tt; if (Je(t, e), We(e), l & 512 && (Ne || a === null || Ht(a, a.return)), l & 4) { var i = a !== null ? a.memoizedState : null; if (l = e.memoizedState, a === null) if (l === null) if (e.stateNode === null) { e: { l = e.type, a = e.memoizedProps, n = n.ownerDocument || n; t: switch (l) { case "title": i = n.getElementsByTagName("title")[0], (!i || i[Rl] || i[Me] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(i, n.querySelector("head > title"))), Ue(i, l, a), i[Me] = e, Re(i), l = i; break e; case "link": var u = td("link", "href", n).get(l + (a.href || "")); if (u) { for (var o = 0; o < u.length; o++)if (i = u[o], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) { u.splice(o, 1); break t } } i = n.createElement(l), Ue(i, l, a), n.head.appendChild(i); break; case "meta": if (u = td("meta", "content", n).get(l + (a.content || ""))) { for (o = 0; o < u.length; o++)if (i = u[o], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) { u.splice(o, 1); break t } } i = n.createElement(l), Ue(i, l, a), n.head.appendChild(i); break; default: throw Error(d(468, l)) }i[Me] = e, Re(i), l = i } e.stateNode = l } else ad(n, e.type, e.stateNode); else e.stateNode = ed(n, l, e.memoizedProps); else i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? ad(n, e.type, e.stateNode) : ed(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && bo(e, e.memoizedProps, a.memoizedProps) } break; case 27: Je(t, e), We(e), l & 512 && (Ne || a === null || Ht(a, a.return)), a !== null && l & 4 && bo(e, e.memoizedProps, a.memoizedProps); break; case 5: if (Je(t, e), We(e), l & 512 && (Ne || a === null || Ht(a, a.return)), e.flags & 32) { n = e.stateNode; try { Ja(n, "") } catch (z) { ue(e, e.return, z) } } l & 4 && e.stateNode != null && (n = e.memoizedProps, bo(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (So = !0); break; case 6: if (Je(t, e), We(e), l & 4) { if (e.stateNode === null) throw Error(d(162)); l = e.memoizedProps, a = e.stateNode; try { a.nodeValue = l } catch (z) { ue(e, e.return, z) } } break; case 3: if (Hi = null, n = Tt, Tt = zi(t.containerInfo), Je(t, e), Tt = n, We(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try { jl(t.containerInfo) } catch (z) { ue(e, e.return, z) } So && (So = !1, tf(e)); break; case 4: l = Tt, Tt = zi(e.stateNode.containerInfo), Je(t, e), We(e), Tt = l; break; case 12: Je(t, e), We(e); break; case 31: Je(t, e), We(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, mi(e, l))); break; case 13: Je(t, e), We(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (pi = $e()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, mi(e, l))); break; case 22: n = e.memoizedState !== null; var c = a !== null && a.memoizedState !== null, y = Lt, h = Ne; if (Lt = y || n, Ne = h || c, Je(t, e), Ne = h, Lt = y, We(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || c || Lt || Ne || ka(e)), a = null, t = e; ;) { if (t.tag === 5 || t.tag === 26) { if (a === null) { c = a = t; try { if (i = c.stateNode, n) u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none"; else { o = c.stateNode; var _ = c.memoizedProps.style, p = _ != null && _.hasOwnProperty("display") ? _.display : null; o.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim() } } catch (z) { ue(c, c.return, z) } } } else if (t.tag === 6) { if (a === null) { c = t; try { c.stateNode.nodeValue = n ? "" : c.memoizedProps } catch (z) { ue(c, c.return, z) } } } else if (t.tag === 18) { if (a === null) { c = t; try { var g = c.stateNode; n ? Zf(g, !0) : Zf(c.stateNode, !1) } catch (z) { ue(c, c.return, z) } } } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break e; for (; t.sibling === null;) { if (t.return === null || t.return === e) break e; a === t && (a = null), t = t.return } a === t && (a = null), t.sibling.return = t.return, t = t.sibling } l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, mi(e, a)))); break; case 19: Je(t, e), We(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, mi(e, l))); break; case 30: break; case 21: break; default: Je(t, e), We(e) } } function We(e) { var t = e.flags; if (t & 2) { try { for (var a, l = e.return; l !== null;) { if (Vs(l)) { a = l; break } l = l.return } if (a == null) throw Error(d(160)); switch (a.tag) { case 27: var n = a.stateNode, i = vo(e); di(e, i, n); break; case 5: var u = a.stateNode; a.flags & 32 && (Ja(u, ""), a.flags &= -33); var o = vo(e); di(e, o, u); break; case 3: case 4: var c = a.stateNode.containerInfo, y = vo(e); _o(e, y, c); break; default: throw Error(d(161)) } } catch (h) { ue(e, e.return, h) } e.flags &= -3 } t & 4096 && (e.flags &= -4097) } function tf(e) { if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) { var t = e; tf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling } } function Zt(e, t) { if (t.subtreeFlags & 8772) for (t = t.child; t !== null;)Ws(e, t.alternate, t), t = t.sibling } function ka(e) { for (e = e.child; e !== null;) { var t = e; switch (t.tag) { case 0: case 11: case 14: case 15: ca(4, t, t.return), ka(t); break; case 1: Ht(t, t.return); var a = t.stateNode; typeof a.componentWillUnmount == "function" && Xs(t, t.return, a), ka(t); break; case 27: mn(t.stateNode); case 26: case 5: Ht(t, t.return), ka(t); break; case 22: t.memoizedState === null && ka(t); break; case 30: ka(t); break; default: ka(t) }e = e.sibling } } function Vt(e, t, a) { for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) { var l = t.alternate, n = e, i = t, u = i.flags; switch (i.tag) { case 0: case 11: case 15: Vt(n, i, a), an(4, i); break; case 1: if (Vt(n, i, a), l = i, n = l.stateNode, typeof n.componentDidMount == "function") try { n.componentDidMount() } catch (y) { ue(l, l.return, y) } if (l = i, n = l.updateQueue, n !== null) { var o = l.stateNode; try { var c = n.shared.hiddenCallbacks; if (c !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < c.length; n++)xr(c[n], o) } catch (y) { ue(l, l.return, y) } } a && u & 64 && Ls(i), ln(i, i.return); break; case 27: Ks(i); case 26: case 5: Vt(n, i, a), a && l === null && u & 4 && Zs(i), ln(i, i.return); break; case 12: Vt(n, i, a); break; case 31: Vt(n, i, a), a && u & 4 && $s(n, i); break; case 13: Vt(n, i, a), a && u & 4 && Ps(n, i); break; case 22: i.memoizedState === null && Vt(n, i, a), ln(i, i.return); break; case 30: break; default: Vt(n, i, a) }t = t.sibling } } function To(e, t) { var a = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ll(a)) } function Ao(e, t) { e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ll(e)) } function At(e, t, a, l) { if (t.subtreeFlags & 10256) for (t = t.child; t !== null;)af(e, t, a, l), t = t.sibling } function af(e, t, a, l) { var n = t.flags; switch (t.tag) { case 0: case 11: case 15: At(e, t, a, l), n & 2048 && an(9, t); break; case 1: At(e, t, a, l); break; case 3: At(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ll(e))); break; case 12: if (n & 2048) { At(e, t, a, l), e = t.stateNode; try { var i = t.memoizedProps, u = i.id, o = i.onPostCommit; typeof o == "function" && o(u, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0) } catch (c) { ue(t, t.return, c) } } else At(e, t, a, l); break; case 31: At(e, t, a, l); break; case 13: At(e, t, a, l); break; case 23: break; case 22: i = t.stateNode, u = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? At(e, t, a, l) : nn(e, t) : i._visibility & 2 ? At(e, t, a, l) : (i._visibility |= 2, yl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && To(u, t); break; case 24: At(e, t, a, l), n & 2048 && Ao(t.alternate, t); break; default: At(e, t, a, l) } } function yl(e, t, a, l, n) { for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) { var i = e, u = t, o = a, c = l, y = u.flags; switch (u.tag) { case 0: case 11: case 15: yl(i, u, o, c, n), an(8, u); break; case 23: break; case 22: var h = u.stateNode; u.memoizedState !== null ? h._visibility & 2 ? yl(i, u, o, c, n) : nn(i, u) : (h._visibility |= 2, yl(i, u, o, c, n)), n && y & 2048 && To(u.alternate, u); break; case 24: yl(i, u, o, c, n), n && y & 2048 && Ao(u.alternate, u); break; default: yl(i, u, o, c, n) }t = t.sibling } } function nn(e, t) { if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) { var a = e, l = t, n = l.flags; switch (l.tag) { case 22: nn(a, l), n & 2048 && To(l.alternate, l); break; case 24: nn(a, l), n & 2048 && Ao(l.alternate, l); break; default: nn(a, l) }t = t.sibling } } var un = 8192; function pl(e, t, a) { if (e.subtreeFlags & un) for (e = e.child; e !== null;)lf(e, t, a), e = e.sibling } function lf(e, t, a) { switch (e.tag) { case 26: pl(e, t, a), e.flags & un && e.memoizedState !== null && tp(a, Tt, e.memoizedState, e.memoizedProps); break; case 5: pl(e, t, a); break; case 3: case 4: var l = Tt; Tt = zi(e.stateNode.containerInfo), pl(e, t, a), Tt = l; break; case 22: e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = un, un = 16777216, pl(e, t, a), un = l) : pl(e, t, a)); break; default: pl(e, t, a) } } function nf(e) { var t = e.alternate; if (t !== null && (e = t.child, e !== null)) { t.child = null; do t = e.sibling, e.sibling = null, e = t; while (e !== null) } } function on(e) { var t = e.deletions; if ((e.flags & 16) !== 0) { if (t !== null) for (var a = 0; a < t.length; a++) { var l = t[a]; Oe = l, of(l, e) } nf(e) } if (e.subtreeFlags & 10256) for (e = e.child; e !== null;)uf(e), e = e.sibling } function uf(e) { switch (e.tag) { case 0: case 11: case 15: on(e), e.flags & 2048 && ca(9, e, e.return); break; case 3: on(e); break; case 12: on(e); break; case 22: var t = e.stateNode; e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, yi(e)) : on(e); break; default: on(e) } } function yi(e) { var t = e.deletions; if ((e.flags & 16) !== 0) { if (t !== null) for (var a = 0; a < t.length; a++) { var l = t[a]; Oe = l, of(l, e) } nf(e) } for (e = e.child; e !== null;) { switch (t = e, t.tag) { case 0: case 11: case 15: ca(8, t, t.return), yi(t); break; case 22: a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, yi(t)); break; default: yi(t) }e = e.sibling } } function of(e, t) { for (; Oe !== null;) { var a = Oe; switch (a.tag) { case 0: case 11: case 15: ca(8, a, t); break; case 23: case 22: if (a.memoizedState !== null && a.memoizedState.cachePool !== null) { var l = a.memoizedState.cachePool.pool; l != null && l.refCount++ } break; case 24: Ll(a.memoizedState.cache) }if (l = a.child, l !== null) l.return = a, Oe = l; else e: for (a = e; Oe !== null;) { l = Oe; var n = l.sibling, i = l.return; if (Is(l), l === a) { Oe = null; break e } if (n !== null) { n.return = i, Oe = n; break e } Oe = i } } } var gy = { getCacheForType: function (e) { var t = Ce(je), a = t.data.get(e); return a === void 0 && (a = e(), t.data.set(e, a)), a }, cacheSignal: function () { return Ce(je).controller.signal } }, hy = typeof WeakMap == "function" ? WeakMap : Map, le = 0, me = null, J = null, I = 0, ie = 0, it = null, ra = !1, gl = !1, wo = !1, Kt = 0, _e = 0, sa = 0, Ya = 0, jo = 0, ut = 0, hl = 0, cn = null, Ie = null, Eo = !1, pi = 0, cf = 0, gi = 1 / 0, hi = null, fa = null, He = 0, da = null, bl = null, Jt = 0, zo = 0, No = null, rf = null, rn = 0, Ho = null; function ot() { return (le & 2) !== 0 && I !== 0 ? I & -I : b.T !== null ? Co() : wc() } function sf() { if (ut === 0) if ((I & 536870912) === 0 || P) { var e = jn; jn <<= 1, (jn & 3932160) === 0 && (jn = 262144), ut = e } else ut = 536870912; return e = lt.current, e !== null && (e.flags |= 32), ut } function Fe(e, t, a) { (e === me && (ie === 2 || ie === 9) || e.cancelPendingCommit !== null) && (vl(e, 0), ma(e, I, ut, !1)), Hl(e, a), ((le & 2) === 0 || e !== me) && (e === me && ((le & 2) === 0 && (Ya |= a), _e === 4 && ma(e, I, ut, !1)), Rt(e)) } function ff(e, t, a) { if ((le & 6) !== 0) throw Error(d(327)); var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Nl(e, t), n = l ? _y(e, t) : Oo(e, t, !0), i = l; do { if (n === 0) { gl && !l && ma(e, t, 0, !1); break } else { if (a = e.current.alternate, i && !by(a)) { n = Oo(e, t, !1), i = !1; continue } if (n === 2) { if (i = t, e.errorRecoveryDisabledLanes & i) var u = 0; else u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0; if (u !== 0) { t = u; e: { var o = e; n = cn; var c = o.current.memoizedState.isDehydrated; if (c && (vl(o, u).flags |= 256), u = Oo(o, u, !1), u !== 2) { if (wo && !c) { o.errorRecoveryDisabledLanes |= i, Ya |= i, n = 4; break e } i = Ie, Ie = n, i !== null && (Ie === null ? Ie = i : Ie.push.apply(Ie, i)) } n = u } if (i = !1, n !== 2) continue } } if (n === 1) { vl(e, 0), ma(e, t, 0, !0); break } e: { switch (l = e, i = n, i) { case 0: case 1: throw Error(d(345)); case 4: if ((t & 4194048) !== t) break; case 6: ma(l, t, ut, !ra); break e; case 2: Ie = null; break; case 3: case 5: break; default: throw Error(d(329)) }if ((t & 62914560) === t && (n = pi + 300 - $e(), 10 < n)) { if (ma(l, t, ut, !ra), zn(l, 0, !0) !== 0) break e; Jt = t, l.timeoutHandle = Qf(df.bind(null, l, a, Ie, hi, Eo, t, ut, Ya, hl, ra, i, "Throttled", -0, 0), n); break e } df(l, a, Ie, hi, Eo, t, ut, Ya, hl, ra, i, null, -0, 0) } } break } while (!0); Rt(e) } function df(e, t, a, l, n, i, u, o, c, y, h, _, p, g) { if (e.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) { _ = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Mt }, lf(t, i, _); var z = (i & 62914560) === i ? pi - $e() : (i & 4194048) === i ? cf - $e() : 0; if (z = ap(_, z), z !== null) { Jt = i, e.cancelPendingCommit = z(_f.bind(null, e, t, i, a, l, n, u, o, c, h, _, null, p, g)), ma(e, i, u, !y); return } } _f(e, t, i, a, l, n, u, o, c) } function by(e) { for (var t = e; ;) { var a = t.tag; if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) { var n = a[l], i = n.getSnapshot; n = n.value; try { if (!tt(i(), n)) return !1 } catch { return !1 } } if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a; else { if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return !0; t = t.return } t.sibling.return = t.return, t = t.sibling } } return !0 } function ma(e, t, a, l) { t &= ~jo, t &= ~Ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes; for (var n = t; 0 < n;) { var i = 31 - et(n), u = 1 << i; l[i] = -1, n &= ~u } a !== 0 && Sc(e, a, t) } function bi() { return (le & 6) === 0 ? (sn(0), !1) : !0 } function Ro() { if (J !== null) { if (ie === 0) var e = J.return; else e = J, Ut = Oa = null, Zu(e), rl = null, Zl = 0, e = J; for (; e !== null;)Qs(e.alternate, e), e = e.return; J = null } } function vl(e, t) { var a = e.timeoutHandle; a !== -1 && (e.timeoutHandle = -1, By(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Jt = 0, Ro(), me = e, J = a = Ct(e.current, null), I = t, ie = 0, it = null, ra = !1, gl = Nl(e, t), wo = !1, hl = ut = jo = Ya = sa = _e = 0, Ie = cn = null, Eo = !1, (t & 8) !== 0 && (t |= t & 32); var l = e.entangledLanes; if (l !== 0) for (e = e.entanglements, l &= t; 0 < l;) { var n = 31 - et(l), i = 1 << n; t |= e[n], l &= ~i } return Kt = t, kn(), a } function mf(e, t) { Q = null, b.H = Pl, t === cl || t === Kn ? (t = Nr(), ie = 3) : t === Mu ? (t = Nr(), ie = 4) : ie = t === oo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, it = t, J === null && (_e = 1, oi(e, dt(t, e.current))) } function yf() { var e = lt.current; return e === null ? !0 : (I & 4194048) === I ? gt === null : (I & 62914560) === I || (I & 536870912) !== 0 ? e === gt : !1 } function pf() { var e = b.H; return b.H = Pl, e === null ? Pl : e } function gf() { var e = b.A; return b.A = gy, e } function vi() { _e = 4, ra || (I & 4194048) !== I && lt.current !== null || (gl = !0), (sa & 134217727) === 0 && (Ya & 134217727) === 0 || me === null || ma(me, I, ut, !1) } function Oo(e, t, a) { var l = le; le |= 2; var n = pf(), i = gf(); (me !== e || I !== t) && (hi = null, vl(e, t)), t = !1; var u = _e; e: do try { if (ie !== 0 && J !== null) { var o = J, c = it; switch (ie) { case 8: Ro(), u = 6; break e; case 3: case 2: case 9: case 6: lt.current === null && (t = !0); var y = ie; if (ie = 0, it = null, _l(e, o, c, y), a && gl) { u = 0; break e } break; default: y = ie, ie = 0, it = null, _l(e, o, c, y) } } vy(), u = _e; break } catch (h) { mf(e, h) } while (!0); return t && e.shellSuspendCounter++, Ut = Oa = null, le = l, b.H = n, b.A = i, J === null && (me = null, I = 0, kn()), u } function vy() { for (; J !== null;)hf(J) } function _y(e, t) { var a = le; le |= 2; var l = pf(), n = gf(); me !== e || I !== t ? (hi = null, gi = $e() + 500, vl(e, t)) : gl = Nl(e, t); e: do try { if (ie !== 0 && J !== null) { t = J; var i = it; t: switch (ie) { case 1: ie = 0, it = null, _l(e, t, i, 1); break; case 2: case 9: if (Er(i)) { ie = 0, it = null, bf(t); break } t = function () { ie !== 2 && ie !== 9 || me !== e || (ie = 7), Rt(e) }, i.then(t, t); break e; case 3: ie = 7; break e; case 4: ie = 5; break e; case 7: Er(i) ? (ie = 0, it = null, bf(t)) : (ie = 0, it = null, _l(e, t, i, 7)); break; case 5: var u = null; switch (J.tag) { case 26: u = J.memoizedState; case 5: case 27: var o = J; if (u ? ld(u) : o.stateNode.complete) { ie = 0, it = null; var c = o.sibling; if (c !== null) J = c; else { var y = o.return; y !== null ? (J = y, _i(y)) : J = null } break t } }ie = 0, it = null, _l(e, t, i, 5); break; case 6: ie = 0, it = null, _l(e, t, i, 6); break; case 8: Ro(), _e = 6; break e; default: throw Error(d(462)) } } Sy(); break } catch (h) { mf(e, h) } while (!0); return Ut = Oa = null, b.H = l, b.A = n, le = a, J !== null ? 0 : (me = null, I = 0, kn(), _e) } function Sy() { for (; J !== null && !Xd();)hf(J) } function hf(e) { var t = Ys(e.alternate, e, Kt); e.memoizedProps = e.pendingProps, t === null ? _i(e) : J = t } function bf(e) { var t = e, a = t.alternate; switch (t.tag) { case 15: case 0: t = Ds(a, t, t.pendingProps, t.type, void 0, I); break; case 11: t = Ds(a, t, t.pendingProps, t.type.render, t.ref, I); break; case 5: Zu(t); default: Qs(a, t), t = J = pr(t, Kt), t = Ys(a, t, Kt) }e.memoizedProps = e.pendingProps, t === null ? _i(e) : J = t } function _l(e, t, a, l) { Ut = Oa = null, Zu(t), rl = null, Zl = 0; var n = t.return; try { if (ry(e, n, t, a, I)) { _e = 1, oi(e, dt(a, e.current)), J = null; return } } catch (i) { if (n !== null) throw J = n, i; _e = 1, oi(e, dt(a, e.current)), J = null; return } t.flags & 32768 ? (P || l === 1 ? e = !0 : gl || (I & 536870912) !== 0 ? e = !1 : (ra = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = lt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vf(t, e)) : _i(t) } function _i(e) { var t = e; do { if ((t.flags & 32768) !== 0) { vf(t, ra); return } e = t.return; var a = dy(t.alternate, t, Kt); if (a !== null) { J = a; return } if (t = t.sibling, t !== null) { J = t; return } J = t = e } while (t !== null); _e === 0 && (_e = 5) } function vf(e, t) { do { var a = my(e.alternate, e); if (a !== null) { a.flags &= 32767, J = a; return } if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) { J = e; return } J = e = a } while (e !== null); _e = 6, J = null } function _f(e, t, a, l, n, i, u, o, c) { e.cancelPendingCommit = null; do Si(); while (He !== 0); if ((le & 6) !== 0) throw Error(d(327)); if (t !== null) { if (t === e.current) throw Error(d(177)); if (i = t.lanes | t.childLanes, i |= bu, em(e, a, i, u, o, c), e === me && (J = me = null, I = 0), bl = t, da = e, Jt = a, zo = i, No = n, rf = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, jy(An, function () { return jf(), null })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) { l = b.T, b.T = null, n = w.p, w.p = 2, u = le, le |= 4; try { yy(e, t, a) } finally { le = u, w.p = n, b.T = l } } He = 1, Sf(), Tf(), Af() } } function Sf() { if (He === 1) { He = 0; var e = da, t = bl, a = (t.flags & 13878) !== 0; if ((t.subtreeFlags & 13878) !== 0 || a) { a = b.T, b.T = null; var l = w.p; w.p = 2; var n = le; le |= 4; try { ef(t, e); var i = Lo, u = ur(e.containerInfo), o = i.focusedElem, c = i.selectionRange; if (u !== o && o && o.ownerDocument && ir(o.ownerDocument.documentElement, o)) { if (c !== null && mu(o)) { var y = c.start, h = c.end; if (h === void 0 && (h = y), "selectionStart" in o) o.selectionStart = y, o.selectionEnd = Math.min(h, o.value.length); else { var _ = o.ownerDocument || document, p = _ && _.defaultView || window; if (p.getSelection) { var g = p.getSelection(), z = o.textContent.length, q = Math.min(c.start, z), se = c.end === void 0 ? q : Math.min(c.end, z); !g.extend && q > se && (u = se, se = q, q = u); var f = nr(o, q), r = nr(o, se); if (f && r && (g.rangeCount !== 1 || g.anchorNode !== f.node || g.anchorOffset !== f.offset || g.focusNode !== r.node || g.focusOffset !== r.offset)) { var m = _.createRange(); m.setStart(f.node, f.offset), g.removeAllRanges(), q > se ? (g.addRange(m), g.extend(r.node, r.offset)) : (m.setEnd(r.node, r.offset), g.addRange(m)) } } } } for (_ = [], g = o; g = g.parentNode;)g.nodeType === 1 && _.push({ element: g, left: g.scrollLeft, top: g.scrollTop }); for (typeof o.focus == "function" && o.focus(), o = 0; o < _.length; o++) { var v = _[o]; v.element.scrollLeft = v.left, v.element.scrollTop = v.top } } Mi = !!Qo, Lo = Qo = null } finally { le = n, w.p = l, b.T = a } } e.current = t, He = 2 } } function Tf() { if (He === 2) { He = 0; var e = da, t = bl, a = (t.flags & 8772) !== 0; if ((t.subtreeFlags & 8772) !== 0 || a) { a = b.T, b.T = null; var l = w.p; w.p = 2; var n = le; le |= 4; try { Ws(e, t.alternate, t) } finally { le = n, w.p = l, b.T = a } } He = 3 } } function Af() { if (He === 4 || He === 3) { He = 0, Zd(); var e = da, t = bl, a = Jt, l = rf; (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? He = 5 : (He = 0, bl = da = null, wf(e, e.pendingLanes)); var n = e.pendingLanes; if (n === 0 && (fa = null), Ji(a), t = t.stateNode, Pe && typeof Pe.onCommitFiberRoot == "function") try { Pe.onCommitFiberRoot(zl, t, void 0, (t.current.flags & 128) === 128) } catch { } if (l !== null) { t = b.T, n = w.p, w.p = 2, b.T = null; try { for (var i = e.onRecoverableError, u = 0; u < l.length; u++) { var o = l[u]; i(o.value, { componentStack: o.stack }) } } finally { b.T = t, w.p = n } } (Jt & 3) !== 0 && Si(), Rt(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === Ho ? rn++ : (rn = 0, Ho = e) : rn = 0, sn(0) } } function wf(e, t) { (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ll(t))) } function Si() { return Sf(), Tf(), Af(), jf() } function jf() { if (He !== 5) return !1; var e = da, t = zo; zo = 0; var a = Ji(Jt), l = b.T, n = w.p; try { w.p = 32 > a ? 32 : a, b.T = null, a = No, No = null; var i = da, u = Jt; if (He = 0, bl = da = null, Jt = 0, (le & 6) !== 0) throw Error(d(331)); var o = le; if (le |= 4, uf(i.current), af(i, i.current, u, a), le = o, sn(0, !1), Pe && typeof Pe.onPostCommitFiberRoot == "function") try { Pe.onPostCommitFiberRoot(zl, i) } catch { } return !0 } finally { w.p = n, b.T = l, wf(e, t) } } function Ef(e, t, a) { t = dt(a, t), t = uo(e.stateNode, t, 2), e = ia(e, t, 2), e !== null && (Hl(e, 2), Rt(e)) } function ue(e, t, a) { if (e.tag === 3) Ef(e, e, a); else for (; t !== null;) { if (t.tag === 3) { Ef(t, e, a); break } else if (t.tag === 1) { var l = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (fa === null || !fa.has(l))) { e = dt(a, e), a = Es(2), l = ia(t, a, 2), l !== null && (zs(a, l, t, e), Hl(l, 2), Rt(l)); break } } t = t.return } } function xo(e, t, a) { var l = e.pingCache; if (l === null) { l = e.pingCache = new hy; var n = new Set; l.set(t, n) } else n = l.get(t), n === void 0 && (n = new Set, l.set(t, n)); n.has(a) || (wo = !0, n.add(a), e = Ty.bind(null, e, t, a), t.then(e, e)) } function Ty(e, t, a) { var l = e.pingCache; l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, me === e && (I & a) === a && (_e === 4 || _e === 3 && (I & 62914560) === I && 300 > $e() - pi ? (le & 2) === 0 && vl(e, 0) : jo |= a, hl === I && (hl = 0)), Rt(e) } function zf(e, t) { t === 0 && (t = _c()), e = Na(e, t), e !== null && (Hl(e, t), Rt(e)) } function Ay(e) { var t = e.memoizedState, a = 0; t !== null && (a = t.retryLane), zf(e, a) } function wy(e, t) { var a = 0; switch (e.tag) { case 31: case 13: var l = e.stateNode, n = e.memoizedState; n !== null && (a = n.retryLane); break; case 19: l = e.stateNode; break; case 22: l = e.stateNode._retryCache; break; default: throw Error(d(314)) }l !== null && l.delete(t), zf(e, a) } function jy(e, t) { return Xi(e, t) } var Ti = null, Sl = null, Mo = !1, Ai = !1, Do = !1, ya = 0; function Rt(e) { e !== Sl && e.next === null && (Sl === null ? Ti = Sl = e : Sl = Sl.next = e), Ai = !0, Mo || (Mo = !0, zy()) } function sn(e, t) { if (!Do && Ai) { Do = !0; do for (var a = !1, l = Ti; l !== null;) { if (e !== 0) { var n = l.pendingLanes; if (n === 0) var i = 0; else { var u = l.suspendedLanes, o = l.pingedLanes; i = (1 << 31 - et(42 | e) + 1) - 1, i &= n & ~(u & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0 } i !== 0 && (a = !0, Of(l, i)) } else i = I, i = zn(l, l === me ? i : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (i & 3) === 0 || Nl(l, i) || (a = !0, Of(l, i)); l = l.next } while (a); Do = !1 } } function Ey() { Nf() } function Nf() { Ai = Mo = !1; var e = 0; ya !== 0 && Uy() && (e = ya); for (var t = $e(), a = null, l = Ti; l !== null;) { var n = l.next, i = Hf(l, t); i === 0 ? (l.next = null, a === null ? Ti = n : a.next = n, n === null && (Sl = a)) : (a = l, (e !== 0 || (i & 3) !== 0) && (Ai = !0)), l = n } He !== 0 && He !== 5 || sn(e), ya !== 0 && (ya = 0) } function Hf(e, t) { for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) { var u = 31 - et(i), o = 1 << u, c = n[u]; c === -1 ? ((o & a) === 0 || (o & l) !== 0) && (n[u] = Pd(o, t)) : c <= t && (e.expiredLanes |= o), i &= ~o } if (t = me, a = I, a = zn(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (ie === 2 || ie === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Zi(l), e.callbackNode = null, e.callbackPriority = 0; if ((a & 3) === 0 || Nl(e, a)) { if (t = a & -a, t === e.callbackPriority) return t; switch (l !== null && Zi(l), Ji(a)) { case 2: case 8: a = bc; break; case 32: a = An; break; case 268435456: a = vc; break; default: a = An }return l = Rf.bind(null, e), a = Xi(a, l), e.callbackPriority = t, e.callbackNode = a, t } return l !== null && l !== null && Zi(l), e.callbackPriority = 2, e.callbackNode = null, 2 } function Rf(e, t) { if (He !== 0 && He !== 5) return e.callbackNode = null, e.callbackPriority = 0, null; var a = e.callbackNode; if (Si() && e.callbackNode !== a) return null; var l = I; return l = zn(e, e === me ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (ff(e, l, t), Hf(e, $e()), e.callbackNode != null && e.callbackNode === a ? Rf.bind(null, e) : null) } function Of(e, t) { if (Si()) return null; ff(e, t, !0) } function zy() { ky(function () { (le & 6) !== 0 ? Xi(hc, Ey) : Nf() }) } function Co() { if (ya === 0) { var e = ul; e === 0 && (e = wn, wn <<= 1, (wn & 261888) === 0 && (wn = 256)), ya = e } return ya } function xf(e) { return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : On("" + e) } function Mf(e, t) { var a = t.ownerDocument.createElement("input"); return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e } function Ny(e, t, a, l, n) { if (t === "submit" && a && a.stateNode === n) { var i = xf((n[Ze] || null).action), u = l.submitter; u && (t = (t = u[Ze] || null) ? xf(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null)); var o = new Cn("action", "action", null, l, n); e.push({ event: o, listeners: [{ instance: null, listener: function () { if (l.defaultPrevented) { if (ya !== 0) { var c = u ? Mf(n, u) : new FormData(n); eo(a, { pending: !0, data: c, method: n.method, action: i }, null, c) } } else typeof i == "function" && (o.preventDefault(), c = u ? Mf(n, u) : new FormData(n), eo(a, { pending: !0, data: c, method: n.method, action: i }, i, c)) }, currentTarget: n }] }) } } for (var qo = 0; qo < hu.length; qo++) { var Uo = hu[qo], Hy = Uo.toLowerCase(), Ry = Uo[0].toUpperCase() + Uo.slice(1); St(Hy, "on" + Ry) } St(rr, "onAnimationEnd"), St(sr, "onAnimationIteration"), St(fr, "onAnimationStart"), St("dblclick", "onDoubleClick"), St("focusin", "onFocus"), St("focusout", "onBlur"), St(Vm, "onTransitionRun"), St(Km, "onTransitionStart"), St(Jm, "onTransitionCancel"), St(dr, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), wa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), wa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), wa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), wa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), wa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), wa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Oy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fn)); function Df(e, t) { t = (t & 4) !== 0; for (var a = 0; a < e.length; a++) { var l = e[a], n = l.event; l = l.listeners; e: { var i = void 0; if (t) for (var u = l.length - 1; 0 <= u; u--) { var o = l[u], c = o.instance, y = o.currentTarget; if (o = o.listener, c !== i && n.isPropagationStopped()) break e; i = o, n.currentTarget = y; try { i(n) } catch (h) { Bn(h) } n.currentTarget = null, i = c } else for (u = 0; u < l.length; u++) { if (o = l[u], c = o.instance, y = o.currentTarget, o = o.listener, c !== i && n.isPropagationStopped()) break e; i = o, n.currentTarget = y; try { i(n) } catch (h) { Bn(h) } n.currentTarget = null, i = c } } } } function W(e, t) { var a = t[Wi]; a === void 0 && (a = t[Wi] = new Set); var l = e + "__bubble"; a.has(l) || (Cf(t, e, 2, !1), a.add(l)) } function Bo(e, t, a) { var l = 0; t && (l |= 4), Cf(a, e, l, t) } var wi = "_reactListening" + Math.random().toString(36).slice(2); function ko(e) { if (!e[wi]) { e[wi] = !0, zc.forEach(function (a) { a !== "selectionchange" && (Oy.has(a) || Bo(a, !1, e), Bo(a, !0, e)) }); var t = e.nodeType === 9 ? e : e.ownerDocument; t === null || t[wi] || (t[wi] = !0, Bo("selectionchange", !1, t)) } } function Cf(e, t, a, l) { switch (sd(t)) { case 2: var n = ip; break; case 8: n = up; break; default: n = ec }a = n.bind(null, t, a, e), n = void 0, !nu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, { capture: !0, passive: n }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, { passive: n }) : e.addEventListener(t, a, !1) } function Yo(e, t, a, l, n) { var i = l; if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ;) { if (l === null) return; var u = l.tag; if (u === 3 || u === 4) { var o = l.stateNode.containerInfo; if (o === n) break; if (u === 4) for (u = l.return; u !== null;) { var c = u.tag; if ((c === 3 || c === 4) && u.stateNode.containerInfo === n) return; u = u.return } for (; o !== null;) { if (u = La(o), u === null) return; if (c = u.tag, c === 5 || c === 6 || c === 26 || c === 27) { l = i = u; continue e } o = o.parentNode } } l = l.return } kc(function () { var y = i, h = au(a), _ = []; e: { var p = mr.get(e); if (p !== void 0) { var g = Cn, z = e; switch (e) { case "keypress": if (Mn(a) === 0) break e; case "keydown": case "keyup": g = wm; break; case "focusin": z = "focus", g = cu; break; case "focusout": z = "blur", g = cu; break; case "beforeblur": case "afterblur": g = cu; break; case "click": if (a.button === 2) break e; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": g = Qc; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": g = dm; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": g = zm; break; case rr: case sr: case fr: g = pm; break; case dr: g = Hm; break; case "scroll": case "scrollend": g = sm; break; case "wheel": g = Om; break; case "copy": case "cut": case "paste": g = hm; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": g = Xc; break; case "toggle": case "beforetoggle": g = Mm }var q = (t & 4) !== 0, se = !q && (e === "scroll" || e === "scrollend"), f = q ? p !== null ? p + "Capture" : null : p; q = []; for (var r = y, m; r !== null;) { var v = r; if (m = v.stateNode, v = v.tag, v !== 5 && v !== 26 && v !== 27 || m === null || f === null || (v = xl(r, f), v != null && q.push(dn(r, v, m))), se) break; r = r.return } 0 < q.length && (p = new g(p, z, null, a, h), _.push({ event: p, listeners: q })) } } if ((t & 7) === 0) { e: { if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && a !== tu && (z = a.relatedTarget || a.fromElement) && (La(z) || z[Qa])) break e; if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (z = a.relatedTarget || a.toElement, g = y, z = z ? La(z) : null, z !== null && (se = U(z), q = z.tag, z !== se || q !== 5 && q !== 27 && q !== 6) && (z = null)) : (g = null, z = y), g !== z)) { if (q = Qc, v = "onMouseLeave", f = "onMouseEnter", r = "mouse", (e === "pointerout" || e === "pointerover") && (q = Xc, v = "onPointerLeave", f = "onPointerEnter", r = "pointer"), se = g == null ? p : Ol(g), m = z == null ? p : Ol(z), p = new q(v, r + "leave", g, a, h), p.target = se, p.relatedTarget = m, v = null, La(h) === y && (q = new q(f, r + "enter", z, a, h), q.target = m, q.relatedTarget = se, v = q), se = v, g && z) t: { for (q = xy, f = g, r = z, m = 0, v = f; v; v = q(v))m++; v = 0; for (var D = r; D; D = q(D))v++; for (; 0 < m - v;)f = q(f), m--; for (; 0 < v - m;)r = q(r), v--; for (; m--;) { if (f === r || r !== null && f === r.alternate) { q = f; break t } f = q(f), r = q(r) } q = null } else q = null; g !== null && qf(_, p, g, q, !1), z !== null && se !== null && qf(_, se, z, q, !0) } } e: { if (p = y ? Ol(y) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var te = $c; else if (Ic(p)) if (Pc) te = Lm; else { te = Gm; var H = Ym } else g = p.nodeName, !g || g.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? y && eu(y.elementType) && (te = $c) : te = Qm; if (te && (te = te(e, y))) { Fc(_, te, a, h); break e } H && H(e, p, y), e === "focusout" && y && p.type === "number" && y.memoizedProps.value != null && Pi(p, "number", p.value) } switch (H = y ? Ol(y) : window, e) { case "focusin": (Ic(H) || H.contentEditable === "true") && ($a = H, yu = y, Yl = null); break; case "focusout": Yl = yu = $a = null; break; case "mousedown": pu = !0; break; case "contextmenu": case "mouseup": case "dragend": pu = !1, or(_, a, h); break; case "selectionchange": if (Zm) break; case "keydown": case "keyup": or(_, a, h) }var X; if (su) e: { switch (e) { case "compositionstart": var F = "onCompositionStart"; break e; case "compositionend": F = "onCompositionEnd"; break e; case "compositionupdate": F = "onCompositionUpdate"; break e }F = void 0 } else Fa ? Jc(e, a) && (F = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (F = "onCompositionStart"); F && (Zc && a.locale !== "ko" && (Fa || F !== "onCompositionStart" ? F === "onCompositionEnd" && Fa && (X = Yc()) : ($t = h, iu = "value" in $t ? $t.value : $t.textContent, Fa = !0)), H = ji(y, F), 0 < H.length && (F = new Lc(F, e, null, a, h), _.push({ event: F, listeners: H }), X ? F.data = X : (X = Wc(a), X !== null && (F.data = X)))), (X = Cm ? qm(e, a) : Um(e, a)) && (F = ji(y, "onBeforeInput"), 0 < F.length && (H = new Lc("onBeforeInput", "beforeinput", null, a, h), _.push({ event: H, listeners: F }), H.data = X)), Ny(_, e, y, a, h) } Df(_, t) }) } function dn(e, t, a) { return { instance: e, listener: t, currentTarget: a } } function ji(e, t) { for (var a = t + "Capture", l = []; e !== null;) { var n = e, i = n.stateNode; if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = xl(e, a), n != null && l.unshift(dn(e, n, i)), n = xl(e, t), n != null && l.push(dn(e, n, i))), e.tag === 3) return l; e = e.return } return [] } function xy(e) { if (e === null) return null; do e = e.return; while (e && e.tag !== 5 && e.tag !== 27); return e || null } function qf(e, t, a, l, n) { for (var i = t._reactName, u = []; a !== null && a !== l;) { var o = a, c = o.alternate, y = o.stateNode; if (o = o.tag, c !== null && c === l) break; o !== 5 && o !== 26 && o !== 27 || y === null || (c = y, n ? (y = xl(a, i), y != null && u.unshift(dn(a, y, c))) : n || (y = xl(a, i), y != null && u.push(dn(a, y, c)))), a = a.return } u.length !== 0 && e.push({ event: t, listeners: u }) } var My = /\r\n?/g, Dy = /\u0000|\uFFFD/g; function Uf(e) {
        return (typeof e == "string" ? e : "" + e).replace(My, `
`).replace(Dy, "")
    } function Bf(e, t) { return t = Uf(t), Uf(e) === t } function re(e, t, a, l, n, i) { switch (a) { case "children": typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ja(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ja(e, "" + l); break; case "className": Hn(e, "class", l); break; case "tabIndex": Hn(e, "tabindex", l); break; case "dir": case "role": case "viewBox": case "width": case "height": Hn(e, a, l); break; case "style": Uc(e, l, i); break; case "data": if (t !== "object") { Hn(e, "data", l); break } case "src": case "href": if (l === "" && (t !== "a" || a !== "href")) { e.removeAttribute(a); break } if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") { e.removeAttribute(a); break } l = On("" + l), e.setAttribute(a, l); break; case "action": case "formAction": if (typeof l == "function") { e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break } else typeof i == "function" && (a === "formAction" ? (t !== "input" && re(e, t, "name", n.name, n, null), re(e, t, "formEncType", n.formEncType, n, null), re(e, t, "formMethod", n.formMethod, n, null), re(e, t, "formTarget", n.formTarget, n, null)) : (re(e, t, "encType", n.encType, n, null), re(e, t, "method", n.method, n, null), re(e, t, "target", n.target, n, null))); if (l == null || typeof l == "symbol" || typeof l == "boolean") { e.removeAttribute(a); break } l = On("" + l), e.setAttribute(a, l); break; case "onClick": l != null && (e.onclick = Mt); break; case "onScroll": l != null && W("scroll", e); break; case "onScrollEnd": l != null && W("scrollend", e); break; case "dangerouslySetInnerHTML": if (l != null) { if (typeof l != "object" || !("__html" in l)) throw Error(d(61)); if (a = l.__html, a != null) { if (n.children != null) throw Error(d(60)); e.innerHTML = a } } break; case "multiple": e.multiple = l && typeof l != "function" && typeof l != "symbol"; break; case "muted": e.muted = l && typeof l != "function" && typeof l != "symbol"; break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "defaultValue": case "defaultChecked": case "innerHTML": case "ref": break; case "autoFocus": break; case "xlinkHref": if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") { e.removeAttribute("xlink:href"); break } a = On("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a); break; case "contentEditable": case "spellCheck": case "draggable": case "value": case "autoReverse": case "externalResourcesRequired": case "focusable": case "preserveAlpha": l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a); break; case "inert": case "allowFullScreen": case "async": case "autoPlay": case "controls": case "default": case "defer": case "disabled": case "disablePictureInPicture": case "disableRemotePlayback": case "formNoValidate": case "hidden": case "loop": case "noModule": case "noValidate": case "open": case "playsInline": case "readOnly": case "required": case "reversed": case "scoped": case "seamless": case "itemScope": l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a); break; case "capture": case "download": l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a); break; case "cols": case "rows": case "size": case "span": l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a); break; case "rowSpan": case "start": l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l); break; case "popover": W("beforetoggle", e), W("toggle", e), Nn(e, "popover", l); break; case "xlinkActuate": xt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l); break; case "xlinkArcrole": xt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l); break; case "xlinkRole": xt(e, "http://www.w3.org/1999/xlink", "xlink:role", l); break; case "xlinkShow": xt(e, "http://www.w3.org/1999/xlink", "xlink:show", l); break; case "xlinkTitle": xt(e, "http://www.w3.org/1999/xlink", "xlink:title", l); break; case "xlinkType": xt(e, "http://www.w3.org/1999/xlink", "xlink:type", l); break; case "xmlBase": xt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l); break; case "xmlLang": xt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l); break; case "xmlSpace": xt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l); break; case "is": Nn(e, "is", l); break; case "innerText": case "textContent": break; default: (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = cm.get(a) || a, Nn(e, a, l)) } } function Go(e, t, a, l, n, i) { switch (a) { case "style": Uc(e, l, i); break; case "dangerouslySetInnerHTML": if (l != null) { if (typeof l != "object" || !("__html" in l)) throw Error(d(61)); if (a = l.__html, a != null) { if (n.children != null) throw Error(d(60)); e.innerHTML = a } } break; case "children": typeof l == "string" ? Ja(e, l) : (typeof l == "number" || typeof l == "bigint") && Ja(e, "" + l); break; case "onScroll": l != null && W("scroll", e); break; case "onScrollEnd": l != null && W("scrollend", e); break; case "onClick": l != null && (e.onclick = Mt); break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "innerHTML": case "ref": break; case "innerText": case "textContent": break; default: if (!Nc.hasOwnProperty(a)) e: { if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), i = e[Ze] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof l == "function")) { typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n); break e } a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Nn(e, a, l) } } } function Ue(e, t, a) { switch (t) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "img": W("error", e), W("load", e); var l = !1, n = !1, i; for (i in a) if (a.hasOwnProperty(i)) { var u = a[i]; if (u != null) switch (i) { case "src": l = !0; break; case "srcSet": n = !0; break; case "children": case "dangerouslySetInnerHTML": throw Error(d(137, t)); default: re(e, t, i, u, a, null) } } n && re(e, t, "srcSet", a.srcSet, a, null), l && re(e, t, "src", a.src, a, null); return; case "input": W("invalid", e); var o = i = u = n = null, c = null, y = null; for (l in a) if (a.hasOwnProperty(l)) { var h = a[l]; if (h != null) switch (l) { case "name": n = h; break; case "type": u = h; break; case "checked": c = h; break; case "defaultChecked": y = h; break; case "value": i = h; break; case "defaultValue": o = h; break; case "children": case "dangerouslySetInnerHTML": if (h != null) throw Error(d(137, t)); break; default: re(e, t, l, h, a, null) } } Mc(e, i, o, c, y, u, n, !1); return; case "select": W("invalid", e), l = u = i = null; for (n in a) if (a.hasOwnProperty(n) && (o = a[n], o != null)) switch (n) { case "value": i = o; break; case "defaultValue": u = o; break; case "multiple": l = o; default: re(e, t, n, o, a, null) }t = i, a = u, e.multiple = !!l, t != null ? Ka(e, !!l, t, !1) : a != null && Ka(e, !!l, a, !0); return; case "textarea": W("invalid", e), i = n = l = null; for (u in a) if (a.hasOwnProperty(u) && (o = a[u], o != null)) switch (u) { case "value": l = o; break; case "defaultValue": n = o; break; case "children": i = o; break; case "dangerouslySetInnerHTML": if (o != null) throw Error(d(91)); break; default: re(e, t, u, o, a, null) }Cc(e, l, n, i); return; case "option": for (c in a) a.hasOwnProperty(c) && (l = a[c], l != null) && (c === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : re(e, t, c, l, a, null)); return; case "dialog": W("beforetoggle", e), W("toggle", e), W("cancel", e), W("close", e); break; case "iframe": case "object": W("load", e); break; case "video": case "audio": for (l = 0; l < fn.length; l++)W(fn[l], e); break; case "image": W("error", e), W("load", e); break; case "details": W("toggle", e); break; case "embed": case "source": case "link": W("error", e), W("load", e); case "area": case "base": case "br": case "col": case "hr": case "keygen": case "meta": case "param": case "track": case "wbr": case "menuitem": for (y in a) if (a.hasOwnProperty(y) && (l = a[y], l != null)) switch (y) { case "children": case "dangerouslySetInnerHTML": throw Error(d(137, t)); default: re(e, t, y, l, a, null) }return; default: if (eu(t)) { for (h in a) a.hasOwnProperty(h) && (l = a[h], l !== void 0 && Go(e, t, h, l, a, void 0)); return } }for (o in a) a.hasOwnProperty(o) && (l = a[o], l != null && re(e, t, o, l, a, null)) } function Cy(e, t, a, l) { switch (t) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "input": var n = null, i = null, u = null, o = null, c = null, y = null, h = null; for (g in a) { var _ = a[g]; if (a.hasOwnProperty(g) && _ != null) switch (g) { case "checked": break; case "value": break; case "defaultValue": c = _; default: l.hasOwnProperty(g) || re(e, t, g, null, l, _) } } for (var p in l) { var g = l[p]; if (_ = a[p], l.hasOwnProperty(p) && (g != null || _ != null)) switch (p) { case "type": i = g; break; case "name": n = g; break; case "checked": y = g; break; case "defaultChecked": h = g; break; case "value": u = g; break; case "defaultValue": o = g; break; case "children": case "dangerouslySetInnerHTML": if (g != null) throw Error(d(137, t)); break; default: g !== _ && re(e, t, p, g, l, _) } } $i(e, u, o, c, y, h, i, n); return; case "select": g = u = o = p = null; for (i in a) if (c = a[i], a.hasOwnProperty(i) && c != null) switch (i) { case "value": break; case "multiple": g = c; default: l.hasOwnProperty(i) || re(e, t, i, null, l, c) }for (n in l) if (i = l[n], c = a[n], l.hasOwnProperty(n) && (i != null || c != null)) switch (n) { case "value": p = i; break; case "defaultValue": o = i; break; case "multiple": u = i; default: i !== c && re(e, t, n, i, l, c) }t = o, a = u, l = g, p != null ? Ka(e, !!a, p, !1) : !!l != !!a && (t != null ? Ka(e, !!a, t, !0) : Ka(e, !!a, a ? [] : "", !1)); return; case "textarea": g = p = null; for (o in a) if (n = a[o], a.hasOwnProperty(o) && n != null && !l.hasOwnProperty(o)) switch (o) { case "value": break; case "children": break; default: re(e, t, o, null, l, n) }for (u in l) if (n = l[u], i = a[u], l.hasOwnProperty(u) && (n != null || i != null)) switch (u) { case "value": p = n; break; case "defaultValue": g = n; break; case "children": break; case "dangerouslySetInnerHTML": if (n != null) throw Error(d(91)); break; default: n !== i && re(e, t, u, n, l, i) }Dc(e, p, g); return; case "option": for (var z in a) p = a[z], a.hasOwnProperty(z) && p != null && !l.hasOwnProperty(z) && (z === "selected" ? e.selected = !1 : re(e, t, z, null, l, p)); for (c in l) p = l[c], g = a[c], l.hasOwnProperty(c) && p !== g && (p != null || g != null) && (c === "selected" ? e.selected = p && typeof p != "function" && typeof p != "symbol" : re(e, t, c, p, l, g)); return; case "img": case "link": case "area": case "base": case "br": case "col": case "embed": case "hr": case "keygen": case "meta": case "param": case "source": case "track": case "wbr": case "menuitem": for (var q in a) p = a[q], a.hasOwnProperty(q) && p != null && !l.hasOwnProperty(q) && re(e, t, q, null, l, p); for (y in l) if (p = l[y], g = a[y], l.hasOwnProperty(y) && p !== g && (p != null || g != null)) switch (y) { case "children": case "dangerouslySetInnerHTML": if (p != null) throw Error(d(137, t)); break; default: re(e, t, y, p, l, g) }return; default: if (eu(t)) { for (var se in a) p = a[se], a.hasOwnProperty(se) && p !== void 0 && !l.hasOwnProperty(se) && Go(e, t, se, void 0, l, p); for (h in l) p = l[h], g = a[h], !l.hasOwnProperty(h) || p === g || p === void 0 && g === void 0 || Go(e, t, h, p, l, g); return } }for (var f in a) p = a[f], a.hasOwnProperty(f) && p != null && !l.hasOwnProperty(f) && re(e, t, f, null, l, p); for (_ in l) p = l[_], g = a[_], !l.hasOwnProperty(_) || p === g || p == null && g == null || re(e, t, _, p, l, g) } function kf(e) { switch (e) { case "css": case "script": case "font": case "img": case "image": case "input": case "link": return !0; default: return !1 } } function qy() { if (typeof performance.getEntriesByType == "function") { for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) { var n = a[l], i = n.transferSize, u = n.initiatorType, o = n.duration; if (i && o && kf(u)) { for (u = 0, o = n.responseEnd, l += 1; l < a.length; l++) { var c = a[l], y = c.startTime; if (y > o) break; var h = c.transferSize, _ = c.initiatorType; h && kf(_) && (c = c.responseEnd, u += h * (c < o ? 1 : (o - y) / (c - y))) } if (--l, t += 8 * (i + u) / (n.duration / 1e3), e++, 10 < e) break } } if (0 < e) return t / e / 1e6 } return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5 } var Qo = null, Lo = null; function Ei(e) { return e.nodeType === 9 ? e : e.ownerDocument } function Yf(e) { switch (e) { case "http://www.w3.org/2000/svg": return 1; case "http://www.w3.org/1998/Math/MathML": return 2; default: return 0 } } function Gf(e, t) { if (e === 0) switch (t) { case "svg": return 1; case "math": return 2; default: return 0 }return e === 1 && t === "foreignObject" ? 0 : e } function Xo(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null } var Zo = null; function Uy() { var e = window.event; return e && e.type === "popstate" ? e === Zo ? !1 : (Zo = e, !0) : (Zo = null, !1) } var Qf = typeof setTimeout == "function" ? setTimeout : void 0, By = typeof clearTimeout == "function" ? clearTimeout : void 0, Lf = typeof Promise == "function" ? Promise : void 0, ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lf < "u" ? function (e) { return Lf.resolve(null).then(e).catch(Yy) } : Qf; function Yy(e) { setTimeout(function () { throw e }) } function pa(e) { return e === "head" } function Xf(e, t) { var a = t, l = 0; do { var n = a.nextSibling; if (e.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") { if (l === 0) { e.removeChild(n), jl(t); return } l-- } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++; else if (a === "html") mn(e.ownerDocument.documentElement); else if (a === "head") { a = e.ownerDocument.head, mn(a); for (var i = a.firstChild; i;) { var u = i.nextSibling, o = i.nodeName; i[Rl] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = u } } else a === "body" && mn(e.ownerDocument.body); a = n } while (a); jl(t) } function Zf(e, t) { var a = e; e = 0; do { var l = a.nextSibling; if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") { if (e === 0) break; e-- } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++; a = l } while (a) } function Vo(e) { var t = e.firstChild; for (t && t.nodeType === 10 && (t = t.nextSibling); t;) { var a = t; switch (t = t.nextSibling, a.nodeName) { case "HTML": case "HEAD": case "BODY": Vo(a), Ii(a); continue; case "SCRIPT": case "STYLE": continue; case "LINK": if (a.rel.toLowerCase() === "stylesheet") continue }e.removeChild(a) } } function Gy(e, t, a, l) { for (; e.nodeType === 1;) { var n = a; if (e.nodeName.toLowerCase() !== t.toLowerCase()) { if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break } else if (l) { if (!e[Rl]) switch (t) { case "meta": if (!e.hasAttribute("itemprop")) break; return e; case "link": if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break; if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break; return e; case "style": if (e.hasAttribute("data-precedence")) break; return e; case "script": if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break; return e; default: return e } } else if (t === "input" && e.type === "hidden") { var i = n.name == null ? null : "" + n.name; if (n.type === "hidden" && e.getAttribute("name") === i) return e } else return e; if (e = ht(e.nextSibling), e === null) break } return null } function Qy(e, t, a) { if (t === "") return null; for (; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ht(e.nextSibling), e === null)) return null; return e } function Vf(e, t) { for (; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ht(e.nextSibling), e === null)) return null; return e } function Ko(e) { return e.data === "$?" || e.data === "$~" } function Jo(e) { return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading" } function Ly(e, t) { var a = e.ownerDocument; if (e.data === "$~") e._reactRetry = t; else if (e.data !== "$?" || a.readyState !== "loading") t(); else { var l = function () { t(), a.removeEventListener("DOMContentLoaded", l) }; a.addEventListener("DOMContentLoaded", l), e._reactRetry = l } } function ht(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break; if (t === "/$" || t === "/&") return null } } return e } var Wo = null; function Kf(e) { e = e.nextSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var a = e.data; if (a === "/$" || a === "/&") { if (t === 0) return ht(e.nextSibling); t-- } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++ } e = e.nextSibling } return null } function Jf(e) { e = e.previousSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var a = e.data; if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") { if (t === 0) return e; t-- } else a !== "/$" && a !== "/&" || t++ } e = e.previousSibling } return null } function Wf(e, t, a) { switch (t = Ei(a), e) { case "html": if (e = t.documentElement, !e) throw Error(d(452)); return e; case "head": if (e = t.head, !e) throw Error(d(453)); return e; case "body": if (e = t.body, !e) throw Error(d(454)); return e; default: throw Error(d(451)) } } function mn(e) { for (var t = e.attributes; t.length;)e.removeAttributeNode(t[0]); Ii(e) } var bt = new Map, If = new Set; function zi(e) { return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument } var Wt = w.d; w.d = { f: Xy, r: Zy, D: Vy, C: Ky, L: Jy, m: Wy, X: Fy, S: Iy, M: $y }; function Xy() { var e = Wt.f(), t = bi(); return e || t } function Zy(e) { var t = Xa(e); t !== null && t.tag === 5 && t.type === "form" ? ds(t) : Wt.r(e) } var Tl = typeof document > "u" ? null : document; function Ff(e, t, a) { var l = Tl; if (l && typeof t == "string" && t) { var n = st(t); n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), If.has(n) || (If.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), Ue(t, "link", e), Re(t), l.head.appendChild(t))) } } function Vy(e) { Wt.D(e), Ff("dns-prefetch", e, null) } function Ky(e, t) { Wt.C(e, t), Ff("preconnect", e, t) } function Jy(e, t, a) { Wt.L(e, t, a); var l = Tl; if (l && e && t) { var n = 'link[rel="preload"][as="' + st(t) + '"]'; t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + st(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + st(a.imageSizes) + '"]')) : n += '[href="' + st(e) + '"]'; var i = n; switch (t) { case "style": i = Al(e); break; case "script": i = wl(e) }bt.has(i) || (e = R({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t }, a), bt.set(i, e), l.querySelector(n) !== null || t === "style" && l.querySelector(yn(i)) || t === "script" && l.querySelector(pn(i)) || (t = l.createElement("link"), Ue(t, "link", e), Re(t), l.head.appendChild(t))) } } function Wy(e, t) { Wt.m(e, t); var a = Tl; if (a && e) { var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + st(l) + '"][href="' + st(e) + '"]', i = n; switch (l) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": i = wl(e) }if (!bt.has(i) && (e = R({ rel: "modulepreload", href: e }, t), bt.set(i, e), a.querySelector(n) === null)) { switch (l) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": if (a.querySelector(pn(i))) return }l = a.createElement("link"), Ue(l, "link", e), Re(l), a.head.appendChild(l) } } } function Iy(e, t, a) { Wt.S(e, t, a); var l = Tl; if (l && e) { var n = Za(l).hoistableStyles, i = Al(e); t = t || "default"; var u = n.get(i); if (!u) { var o = { loading: 0, preload: null }; if (u = l.querySelector(yn(i))) o.loading = 5; else { e = R({ rel: "stylesheet", href: e, "data-precedence": t }, a), (a = bt.get(i)) && Io(e, a); var c = u = l.createElement("link"); Re(c), Ue(c, "link", e), c._p = new Promise(function (y, h) { c.onload = y, c.onerror = h }), c.addEventListener("load", function () { o.loading |= 1 }), c.addEventListener("error", function () { o.loading |= 2 }), o.loading |= 4, Ni(u, t, l) } u = { type: "stylesheet", instance: u, count: 1, state: o }, n.set(i, u) } } } function Fy(e, t) { Wt.X(e, t); var a = Tl; if (a && e) { var l = Za(a).hoistableScripts, n = wl(e), i = l.get(n); i || (i = a.querySelector(pn(n)), i || (e = R({ src: e, async: !0 }, t), (t = bt.get(n)) && Fo(e, t), i = a.createElement("script"), Re(i), Ue(i, "link", e), a.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, l.set(n, i)) } } function $y(e, t) { Wt.M(e, t); var a = Tl; if (a && e) { var l = Za(a).hoistableScripts, n = wl(e), i = l.get(n); i || (i = a.querySelector(pn(n)), i || (e = R({ src: e, async: !0, type: "module" }, t), (t = bt.get(n)) && Fo(e, t), i = a.createElement("script"), Re(i), Ue(i, "link", e), a.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, l.set(n, i)) } } function $f(e, t, a, l) { var n = (n = K.current) ? zi(n) : null; if (!n) throw Error(d(446)); switch (e) { case "meta": case "title": return null; case "style": return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Al(a.href), a = Za(n).hoistableStyles, l = a.get(t), l || (l = { type: "style", instance: null, count: 0, state: null }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null }; case "link": if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") { e = Al(a.href); var i = Za(n).hoistableStyles, u = i.get(e); if (u || (n = n.ownerDocument || n, u = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, u), (i = n.querySelector(yn(e))) && !i._p && (u.instance = i, u.state.loading = 5), bt.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, bt.set(e, a), i || Py(n, e, a, u.state))), t && l === null) throw Error(d(528, "")); return u } if (t && l !== null) throw Error(d(529, "")); return null; case "script": return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = wl(a), a = Za(n).hoistableScripts, l = a.get(t), l || (l = { type: "script", instance: null, count: 0, state: null }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null }; default: throw Error(d(444, e)) } } function Al(e) { return 'href="' + st(e) + '"' } function yn(e) { return 'link[rel="stylesheet"][' + e + "]" } function Pf(e) { return R({}, e, { "data-precedence": e.precedence, precedence: null }) } function Py(e, t, a, l) { e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function () { return l.loading |= 1 }), t.addEventListener("error", function () { return l.loading |= 2 }), Ue(t, "link", a), Re(t), e.head.appendChild(t)) } function wl(e) { return '[src="' + st(e) + '"]' } function pn(e) { return "script[async]" + e } function ed(e, t, a) { if (t.count++, t.instance === null) switch (t.type) { case "style": var l = e.querySelector('style[data-href~="' + st(a.href) + '"]'); if (l) return t.instance = l, Re(l), l; var n = R({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null }); return l = (e.ownerDocument || e).createElement("style"), Re(l), Ue(l, "style", n), Ni(l, a.precedence, e), t.instance = l; case "stylesheet": n = Al(a.href); var i = e.querySelector(yn(n)); if (i) return t.state.loading |= 4, t.instance = i, Re(i), i; l = Pf(a), (n = bt.get(n)) && Io(l, n), i = (e.ownerDocument || e).createElement("link"), Re(i); var u = i; return u._p = new Promise(function (o, c) { u.onload = o, u.onerror = c }), Ue(i, "link", l), t.state.loading |= 4, Ni(i, a.precedence, e), t.instance = i; case "script": return i = wl(a.src), (n = e.querySelector(pn(i))) ? (t.instance = n, Re(n), n) : (l = a, (n = bt.get(i)) && (l = R({}, a), Fo(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Re(n), Ue(n, "link", l), e.head.appendChild(n), t.instance = n); case "void": return null; default: throw Error(d(443, t.type)) } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Ni(l, a.precedence, e)); return t.instance } function Ni(e, t, a) { for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, i = n, u = 0; u < l.length; u++) { var o = l[u]; if (o.dataset.precedence === t) i = o; else if (i !== n) break } i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild)) } function Io(e, t) { e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title) } function Fo(e, t) { e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity) } var Hi = null; function td(e, t, a) { if (Hi === null) { var l = new Map, n = Hi = new Map; n.set(a, l) } else n = Hi, l = n.get(a), l || (l = new Map, n.set(a, l)); if (l.has(e)) return l; for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) { var i = a[n]; if (!(i[Rl] || i[Me] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") { var u = i.getAttribute(t) || ""; u = e + u; var o = l.get(u); o ? o.push(i) : l.set(u, [i]) } } return l } function ad(e, t, a) { e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null) } function ep(e, t, a) { if (a === 1 || t.itemProp != null) return !1; switch (e) { case "meta": case "title": return !0; case "style": if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break; return !0; case "link": if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break; return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0; case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0 }return !1 } function ld(e) { return !(e.type === "stylesheet" && (e.state.loading & 3) === 0) } function tp(e, t, a, l) { if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) { if (a.instance === null) { var n = Al(l.href), i = t.querySelector(yn(n)); if (i) { t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ri.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = i, Re(i); return } i = t.ownerDocument || t, l = Pf(l), (n = bt.get(n)) && Io(l, n), i = i.createElement("link"), Re(i); var u = i; u._p = new Promise(function (o, c) { u.onload = o, u.onerror = c }), Ue(i, "link", l), a.instance = i } e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Ri.bind(e), t.addEventListener("load", a), t.addEventListener("error", a)) } } var $o = 0; function ap(e, t) { return e.stylesheets && e.count === 0 && xi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (a) { var l = setTimeout(function () { if (e.stylesheets && xi(e, e.stylesheets), e.unsuspend) { var i = e.unsuspend; e.unsuspend = null, i() } }, 6e4 + t); 0 < e.imgBytes && $o === 0 && ($o = 62500 * qy()); var n = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && xi(e, e.stylesheets), e.unsuspend)) { var i = e.unsuspend; e.unsuspend = null, i() } }, (e.imgBytes > $o ? 50 : 800) + t); return e.unsuspend = a, function () { e.unsuspend = null, clearTimeout(l), clearTimeout(n) } } : null } function Ri() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) { if (this.stylesheets) xi(this, this.stylesheets); else if (this.unsuspend) { var e = this.unsuspend; this.unsuspend = null, e() } } } var Oi = null; function xi(e, t) { e.stylesheets = null, e.unsuspend !== null && (e.count++, Oi = new Map, t.forEach(lp, e), Oi = null, Ri.call(e)) } function lp(e, t) { if (!(t.state.loading & 4)) { var a = Oi.get(e); if (a) var l = a.get(null); else { a = new Map, Oi.set(e, a); for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) { var u = n[i]; (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (a.set(u.dataset.precedence, u), l = u) } l && a.set(null, l) } n = t.instance, u = n.getAttribute("data-precedence"), i = a.get(u) || l, i === l && a.set(null, n), a.set(u, n), this.count++, l = Ri.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4 } } var gn = { $$typeof: Be, Provider: null, Consumer: null, _currentValue: k, _currentValue2: k, _threadCount: 0 }; function np(e, t, a, l, n, i, u, o, c) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vi(0), this.hiddenUpdates = Vi(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map } function nd(e, t, a, l, n, i, u, o, c, y, h, _) { return e = new np(e, t, a, u, c, y, h, _, o), t = 1, i === !0 && (t |= 24), i = at(3, null, null, t), e.current = i, i.stateNode = e, t = Ru(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: l, isDehydrated: a, cache: t }, Du(i), e } function id(e) { return e ? (e = tl, e) : tl } function ud(e, t, a, l, n, i) { n = id(n), l.context === null ? l.context = n : l.pendingContext = n, l = na(t), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = ia(e, l, t), a !== null && (Fe(a, e, t), Kl(a, e, t)) } function od(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var a = e.retryLane; e.retryLane = a !== 0 && a < t ? a : t } } function Po(e, t) { od(e, t), (e = e.alternate) && od(e, t) } function cd(e) { if (e.tag === 13 || e.tag === 31) { var t = Na(e, 67108864); t !== null && Fe(t, e, 67108864), Po(e, 67108864) } } function rd(e) { if (e.tag === 13 || e.tag === 31) { var t = ot(); t = Ki(t); var a = Na(e, t); a !== null && Fe(a, e, t), Po(e, t) } } var Mi = !0; function ip(e, t, a, l) { var n = b.T; b.T = null; var i = w.p; try { w.p = 2, ec(e, t, a, l) } finally { w.p = i, b.T = n } } function up(e, t, a, l) { var n = b.T; b.T = null; var i = w.p; try { w.p = 8, ec(e, t, a, l) } finally { w.p = i, b.T = n } } function ec(e, t, a, l) { if (Mi) { var n = tc(l); if (n === null) Yo(e, t, l, Di, a), fd(e, l); else if (cp(n, e, t, a, l)) l.stopPropagation(); else if (fd(e, l), t & 4 && -1 < op.indexOf(e)) { for (; n !== null;) { var i = Xa(n); if (i !== null) switch (i.tag) { case 3: if (i = i.stateNode, i.current.memoizedState.isDehydrated) { var u = Aa(i.pendingLanes); if (u !== 0) { var o = i; for (o.pendingLanes |= 2, o.entangledLanes |= 2; u;) { var c = 1 << 31 - et(u); o.entanglements[1] |= c, u &= ~c } Rt(i), (le & 6) === 0 && (gi = $e() + 500, sn(0)) } } break; case 31: case 13: o = Na(i, 2), o !== null && Fe(o, i, 2), bi(), Po(i, 2) }if (i = tc(l), i === null && Yo(e, t, l, Di, a), i === n) break; n = i } n !== null && l.stopPropagation() } else Yo(e, t, l, null, a) } } function tc(e) { return e = au(e), ac(e) } var Di = null; function ac(e) { if (Di = null, e = La(e), e !== null) { var t = U(e); if (t === null) e = null; else { var a = t.tag; if (a === 13) { if (e = V(t), e !== null) return e; e = null } else if (a === 31) { if (e = be(t), e !== null) return e; e = null } else if (a === 3) { if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null; e = null } else t !== e && (e = null) } } return Di = e, null } function sd(e) { switch (e) { case "beforetoggle": case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "toggle": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 2; case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 8; case "message": switch (Vd()) { case hc: return 2; case bc: return 8; case An: case Kd: return 32; case vc: return 268435456; default: return 32 }default: return 32 } } var lc = !1, ga = null, ha = null, ba = null, hn = new Map, bn = new Map, va = [], op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function fd(e, t) { switch (e) { case "focusin": case "focusout": ga = null; break; case "dragenter": case "dragleave": ha = null; break; case "mouseover": case "mouseout": ba = null; break; case "pointerover": case "pointerout": hn.delete(t.pointerId); break; case "gotpointercapture": case "lostpointercapture": bn.delete(t.pointerId) } } function vn(e, t, a, l, n, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: a, eventSystemFlags: l, nativeEvent: i, targetContainers: [n] }, t !== null && (t = Xa(t), t !== null && cd(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e) } function cp(e, t, a, l, n) { switch (t) { case "focusin": return ga = vn(ga, e, t, a, l, n), !0; case "dragenter": return ha = vn(ha, e, t, a, l, n), !0; case "mouseover": return ba = vn(ba, e, t, a, l, n), !0; case "pointerover": var i = n.pointerId; return hn.set(i, vn(hn.get(i) || null, e, t, a, l, n)), !0; case "gotpointercapture": return i = n.pointerId, bn.set(i, vn(bn.get(i) || null, e, t, a, l, n)), !0 }return !1 } function dd(e) { var t = La(e.target); if (t !== null) { var a = U(t); if (a !== null) { if (t = a.tag, t === 13) { if (t = V(a), t !== null) { e.blockedOn = t, jc(e.priority, function () { rd(a) }); return } } else if (t === 31) { if (t = be(a), t !== null) { e.blockedOn = t, jc(e.priority, function () { rd(a) }); return } } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null; return } } } e.blockedOn = null } function Ci(e) { if (e.blockedOn !== null) return !1; for (var t = e.targetContainers; 0 < t.length;) { var a = tc(e.nativeEvent); if (a === null) { a = e.nativeEvent; var l = new a.constructor(a.type, a); tu = l, a.target.dispatchEvent(l), tu = null } else return t = Xa(a), t !== null && cd(t), e.blockedOn = a, !1; t.shift() } return !0 } function md(e, t, a) { Ci(e) && a.delete(t) } function rp() { lc = !1, ga !== null && Ci(ga) && (ga = null), ha !== null && Ci(ha) && (ha = null), ba !== null && Ci(ba) && (ba = null), hn.forEach(md), bn.forEach(md) } function qi(e, t) { e.blockedOn === t && (e.blockedOn = null, lc || (lc = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, rp))) } var Ui = null; function yd(e) { Ui !== e && (Ui = e, A.unstable_scheduleCallback(A.unstable_NormalPriority, function () { Ui === e && (Ui = null); for (var t = 0; t < e.length; t += 3) { var a = e[t], l = e[t + 1], n = e[t + 2]; if (typeof l != "function") { if (ac(l || a) === null) continue; break } var i = Xa(a); i !== null && (e.splice(t, 3), t -= 3, eo(i, { pending: !0, data: n, method: a.method, action: l }, l, n)) } })) } function jl(e) { function t(c) { return qi(c, e) } ga !== null && qi(ga, e), ha !== null && qi(ha, e), ba !== null && qi(ba, e), hn.forEach(t), bn.forEach(t); for (var a = 0; a < va.length; a++) { var l = va[a]; l.blockedOn === e && (l.blockedOn = null) } for (; 0 < va.length && (a = va[0], a.blockedOn === null);)dd(a), a.blockedOn === null && va.shift(); if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) { var n = a[l], i = a[l + 1], u = n[Ze] || null; if (typeof i == "function") u || yd(a); else if (u) { var o = null; if (i && i.hasAttribute("formAction")) { if (n = i, u = i[Ze] || null) o = u.formAction; else if (ac(n) !== null) continue } else o = u.action; typeof o == "function" ? a[l + 1] = o : (a.splice(l, 3), l -= 3), yd(a) } } } function pd() { function e(i) { i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function () { return new Promise(function (u) { return n = u }) }, focusReset: "manual", scroll: "manual" }) } function t() { n !== null && (n(), n = null), l || setTimeout(a, 20) } function a() { if (!l && !navigation.transition) { var i = navigation.currentEntry; i && i.url != null && navigation.navigate(i.url, { state: i.getState(), info: "react-transition", history: "replace" }) } } if (typeof navigation == "object") { var l = !1, n = null; return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function () { l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null) } } } function nc(e) { this._internalRoot = e } Bi.prototype.render = nc.prototype.render = function (e) { var t = this._internalRoot; if (t === null) throw Error(d(409)); var a = t.current, l = ot(); ud(a, l, e, t, null, null) }, Bi.prototype.unmount = nc.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) { this._internalRoot = null; var t = e.containerInfo; ud(e.current, 2, null, e, null, null), bi(), t[Qa] = null } }; function Bi(e) { this._internalRoot = e } Bi.prototype.unstable_scheduleHydration = function (e) { if (e) { var t = wc(); e = { blockedOn: null, target: e, priority: t }; for (var a = 0; a < va.length && t !== 0 && t < va[a].priority; a++); va.splice(a, 0, e), a === 0 && dd(e) } }; var gd = O.version; if (gd !== "19.2.3") throw Error(d(527, gd, "19.2.3")); w.findDOMNode = function (e) { var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e))); return e = T(t), e = e !== null ? Z(e) : null, e = e === null ? null : e.stateNode, e }; var sp = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: b, reconcilerVersion: "19.2.3" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!ki.isDisabled && ki.supportsFiber) try { zl = ki.inject(sp), Pe = ki } catch { } } return Sn.createRoot = function (e, t) { if (!M(e)) throw Error(d(299)); var a = !1, l = "", n = Ts, i = As, u = ws; return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = nd(e, 1, !1, null, null, a, l, null, n, i, u, pd), e[Qa] = t.current, ko(e), new nc(t) }, Sn.hydrateRoot = function (e, t, a) { if (!M(e)) throw Error(d(299)); var l = !1, n = "", i = Ts, u = As, o = ws, c = null; return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (u = a.onCaughtError), a.onRecoverableError !== void 0 && (o = a.onRecoverableError), a.formState !== void 0 && (c = a.formState)), t = nd(e, 1, !0, t, a ?? null, l, n, c, i, u, o, pd), t.context = id(null), a = t.current, l = ot(), l = Ki(l), n = na(l), n.callback = null, ia(a, n, l), a = l, t.current.lanes = a, Hl(t, a), Rt(t), e[Qa] = t.current, ko(e), new Bi(t) }, Sn.version = "19.2.3", Sn
} var Ed; function _p() { if (Ed) return oc.exports; Ed = 1; function A() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A) } catch (O) { console.error(O) } } return A(), oc.exports = vp(), oc.exports } var Sp = _p(); const Od = {
    job_apply_specific_role: {
        meta: { label: "Specific Role Application", description: "Standard application for a specific open position", category: "job_career", isPopular: !0 }, draft: {
            subject: "Application for {{Role}} - {{Your Name}}", body: `Hi {{Hiring Manager}},

I am writing to express my interest in the {{Role}} position at {{Company}}.

With experience in {{Your Skills}}, I believe I would be a strong fit for this role and could contribute meaningfully to your team.

I have attached my resume for your review and would welcome the opportunity to discuss this further.

Best regards,
{{Your Name}}`}
    }, job_apply_cold: {
        meta: { label: "Cold Application", description: "Direct inquiry for potential openings at a company", category: "job_career" }, draft: {
            subject: "Exploring opportunities at {{Company}}", body: `Hi {{Recipient Name}},

I hope you are doing well. I am reaching out to explore potential opportunities at {{Company}}.

I work as a {{Role}} with experience in {{Your Skills}} and would be interested in contributing if there is a suitable opening now or in the future.

Happy to share my resume or connect for a brief conversation.

Best regards,
{{Your Name}}`}
    }, job_apply_referral: {
        meta: { label: "Referral Application", description: "Job application mentions a mutual contact or referral", category: "job_career" }, draft: {
            subject: "Application for {{Role}} – Referred by {{Referrer Name}}", body: `Hi {{Hiring Manager}},

I was referred by {{Referrer Name}} to apply for the {{Role}} position at {{Company}}.

Based on my background in {{Your Skills}}, I believe my experience aligns well with what your team is looking for.

I have attached my resume for your consideration and would appreciate the opportunity to discuss further.

Best regards,
{{Your Name}}`}
    }, job_apply_internship: {
        meta: { label: "Internship Application", description: "Application for an internship or trainee position", category: "job_career" }, draft: {
            subject: "Internship application – {{Role}}", body: `Hi {{Hiring Manager}},

I am writing to apply for the {{Role}} internship opportunity at {{Company}}.

I am currently {{Your Current Status}} and have been building skills in {{Your Skills}}, which I am eager to apply in a practical setting.

Please find my resume attached. I would appreciate the opportunity to learn and contribute to your team.

Best regards,
{{Your Name}}`}
    }, job_apply_freelance: {
        meta: { label: "Freelance/Project Inquiry", description: "Inquiry for short-term or contract-based project work", category: "job_career" }, draft: {
            subject: "Freelance support for {{Project / Role}}", body: `Hi {{Recipient Name}},

I am reaching out to explore freelance opportunities related to {{Project / Role}} at {{Company}}.

I have experience working with {{Your Skills}} and have supported similar projects in the past.

If this is of interest, I would be happy to discuss scope, timelines, and availability.

Best regards,
{{Your Name}}`}
    }, job_apply_remote: {
        meta: { label: "Remote Role Application", description: "Applying specifically for a remote-working position", category: "job_career" }, draft: {
            subject: "Application for remote {{Role}}", body: `Hi {{Hiring Manager}},

I am writing to apply for the remote {{Role}} position at {{Company}}.

I have experience working remotely and collaborating across teams, with a strong background in {{Your Skills}}.

I have attached my resume and would welcome the opportunity to discuss how I could contribute.

Best regards,
{{Your Name}}`}
    }, job_apply_career_page_followup: {
        meta: { label: "Career Page Follow-up", description: "Checking status after applying via company portal", category: "job_career" }, draft: {
            subject: "Following up on my application – {{Role}}", body: `Hi {{Hiring Manager}},

I recently applied for the {{Role}} position through your careers page and wanted to follow up.

I am very interested in the opportunity and believe my experience in {{Your Skills}} aligns well with the role.

Thank you for your time and consideration.

Best regards,
{{Your Name}}`}
    }, recruiter_initial_outreach: {
        meta: { label: "Initial Recruiter Outreach", description: "Starting a conversation with a talent acquisition specialist", category: "job_career" }, draft: {
            subject: "Interest in opportunities at {{Company}}", body: `Hi {{Recruiter Name}},

I hope you are doing well. I am reaching out to express my interest in potential opportunities at {{Company}}.

I work as a {{Role}} with experience in {{Your Skills}} and would be glad to connect if there are relevant openings.

Best regards,
{{Your Name}}`}
    }, recruiter_response: {
        meta: { label: "Response to Recruiter", description: "Replying to a recruiter's initial message or inquiry", category: "job_career" }, draft: {
            subject: "Re: Opportunity at {{Company}}", body: `Hi {{Recruiter Name}},

Thank you for reaching out. I appreciate you considering my profile.

I would be happy to share additional details or discuss how my experience in {{Your Skills}} could be a fit.

Best regards,
{{Your Name}}`}
    }, recruiter_open_positions: {
        meta: { label: "Check Open Positions", description: "Inquiring about current openings relevant to your profile", category: "job_career" }, draft: {
            subject: "Inquiry about open positions", body: `Hi {{Recruiter Name}},

I wanted to check if there are any current or upcoming openings relevant to my background in {{Your Skills}}.

Please let me know if it would be helpful to share my resume or schedule a conversation.

Best regards,
{{Your Name}}`}
    }, recruiter_availability: {
        meta: { label: "Interview Availability", description: "Providing your schedule for a potential interview", category: "job_career" }, draft: {
            subject: "Availability for discussion", body: `Hi {{Recruiter Name}},

Thank you for your message. I am available to connect on {{Available Dates / Times}}.

Please let me know what works best for you.

Best regards,
{{Your Name}}`}
    }, recruiter_salary_discussion: {
        meta: { label: "Salary Expectations", description: "Discussing compensation during the hiring process", category: "job_career" }, draft: {
            subject: "Compensation discussion – {{Role}}", body: `Hi {{Recruiter Name}},

Thank you for raising the topic of compensation.

Based on my experience and market research, I am looking for a range of {{Expected Salary Range}}. I am open to discussion.

Best regards,
{{Your Name}}`}
    }, recruiter_location_discussion: {
        meta: { label: "Work Mode Discussion", description: "Confirming Remote/Hybrid/On-site preferences", category: "job_career" }, draft: {
            subject: "Location and work arrangement", body: `Hi {{Recruiter Name}},

Thank you for clarifying the location details for the role.

I am comfortable with {{Remote / Hybrid / On-site}} arrangements and open to discussing this further if needed.

Best regards,
{{Your Name}}`}
    }, interview_confirmation: {
        meta: { label: "Confirm Interview", description: "Finalizing the time and date for a scheduled interview", category: "job_career" }, draft: {
            subject: "Interview confirmation – {{Role}}", body: `Hi {{Interviewer Name}},

Thank you for the interview invitation. I would like to confirm my availability for the interview scheduled on {{Date and Time}}.

Looking forward to our conversation.

Best regards,
{{Your Name}}`}
    }, interview_reschedule: {
        meta: { label: "Reschedule Interview", description: "Requesting a change to a previously scheduled interview", category: "job_career" }, draft: {
            subject: "Request to reschedule interview – {{Role}}", body: `Hi {{Interviewer Name}},

Due to an unforeseen conflict, I wanted to ask if it would be possible to reschedule the interview.

I am available on {{Alternative Dates / Times}} and apologize for any inconvenience caused.

Best regards,
{{Your Name}}`}
    }, interview_thank_you: {
        meta: { label: "Post-Interview Thanks", description: "Sending a thank-you note shortly after an interview", category: "job_career" }, draft: {
            subject: "Thank you for the interview – {{Role}}", body: `Hi {{Interviewer Name}},

Thank you for taking the time to speak with me about the {{Role}} position.

I enjoyed learning more about the team and the work being done at {{Company}}. Our discussion further strengthened my interest in the role.

Best regards,
{{Your Name}}`}
    }, interview_followup: {
        meta: { label: "Interview Status Follow-up", description: "Checking status after no response following an interview", category: "job_career" }, draft: {
            subject: "Following up on interview – {{Role}}", body: `Hi {{Interviewer Name}},

I wanted to follow up regarding the interview for the {{Role}} position.

Please let me know if there are any updates or additional information I can provide.

Best regards,
{{Your Name}}`}
    }, interview_feedback_request: {
        meta: { label: "Request Feedback", description: "Asking for constructive feedback after an interview rejection", category: "job_career" }, draft: {
            subject: "Interview feedback request", body: `Hi {{Interviewer Name}},

Thank you again for the interview opportunity.

If possible, I would appreciate any feedback you could share, as it would be very helpful for my professional growth.

Best regards,
{{Your Name}}`}
    }, offer_followup: {
        meta: { label: "Offer Follow-up", description: "Checking status when waiting for a formal offer letter", category: "job_career" }, draft: {
            subject: "Following up on offer discussion", body: `Hi {{Recruiter Name}},

I wanted to follow up regarding the offer discussion for the {{Role}} position.

Please let me know if there are any updates or next steps.

Best regards,
{{Your Name}}`}
    }, offer_acceptance: {
        meta: { label: "Accept Offer", description: "Official acceptance of a provided job offer", category: "job_career" }, draft: {
            subject: "Offer acceptance – {{Role}}", body: `Hi {{Recruiter Name}},

Thank you for the offer for the {{Role}} position at {{Company}}.

I am happy to accept the offer and am excited to join the team. Please let me know the next steps.

Best regards,
{{Your Name}}`}
    }, offer_rejection: {
        meta: { label: "Decline Offer", description: "Formally declining a job offer based on other opportunities", category: "job_career" }, draft: {
            subject: "Regarding offer – {{Role}}", body: `Hi {{Recruiter Name}},

Thank you very much for the offer and for considering me for the {{Role}} position.

After careful consideration, I have decided to pursue a different opportunity. I appreciate your time and support.

Best regards,
{{Your Name}}`}
    }, networking_cold: {
        meta: { label: "Cold Networking", description: "Connecting with an industry professional for the first time", category: "job_career" }, draft: {
            subject: "Connecting regarding {{Field / Role}}", body: `Hi {{Recipient Name}},

I hope you are doing well. I came across your profile and wanted to connect.

I work as a {{Role}} and would value the opportunity to learn from your experience in {{Field}}.

Best regards,
{{Your Name}}`}
    }, networking_alumni: {
        meta: { label: "Alumni Connection", description: "Connecting with someone who attended the same school", category: "job_career" }, draft: {
            subject: "Fellow alumni connection", body: `Hi {{Recipient Name}},

I noticed that we are both alumni of {{Institution}} and wanted to reach out.

I would be glad to connect and exchange experiences if you are open to it.

Best regards,
{{Your Name}}`}
    }, networking_mutual_intro: {
        meta: { label: "Mutual Connection Intro", description: "Connecting through a mutual professional contact", category: "job_career" }, draft: {
            subject: "Introduction via {{Mutual Contact}}", body: `Hi {{Recipient Name}},

{{Mutual Contact}} suggested that I reach out to you.

I would appreciate the opportunity to connect and learn more about your work in {{Field}}.

Best regards,
{{Your Name}}`}
    }, networking_referral_request: {
        meta: { label: "Ask for Referral", description: "Requesting a job referral from a known contact", category: "job_career" }, draft: {
            subject: "Referral request – {{Role}}", body: `Hi {{Recipient Name}},

I hope you are doing well. I am currently exploring opportunities for the {{Role}} position at {{Company}}.

If you are comfortable, I would appreciate a referral or any guidance you could share.

Best regards,
{{Your Name}}`}
    }, networking_referral_thanks: {
        meta: { label: "Thank You for Referral", description: "Expressing gratitude after a contact referred you", category: "job_career" }, draft: {
            subject: "Thank you for the referral", body: `Hi {{Recipient Name}},

Thank you very much for taking the time to refer me.

I truly appreciate your support and will keep you updated.

Best regards,
{{Your Name}}`}
    }, networking_event_followup: {
        meta: { label: "Post-Event Networking", description: "Following up with someone you met at an event or conference", category: "job_career" }, draft: {
            subject: "Great connecting at {{Event Name}}", body: `Hi {{Recipient Name}},

It was great meeting you at {{Event Name}}. I enjoyed our conversation about {{Topic}}.

I would be glad to stay in touch and continue the discussion.

Best regards,
{{Your Name}}`}
    }
}, xd = {
    sales_cold_intro: {
        meta: { label: "Cold Sales Intro", description: "Friendly first-touch outreach to a new prospect", category: "sales_business", isPopular: !0 }, draft: {
            subject: "Quick question about {{company}}", body: `Hi {{recipient_name}},

I came across {{company}} and noticed {{personalized_observation}}.

We work with teams like yours to help {{value_proposition}}.

Would you be open to a brief conversation to see if this is relevant?

Best regards,
{{your_name}}`}
    }, sales_cold_soft_cta: {
        meta: { label: "Soft CTA Outreach", description: "Low-pressure outreach focused on sharing value", category: "sales_business" }, draft: {
            subject: "Thought this might be useful", body: `Hi {{recipient_name}},

I wanted to share a quick note in case this is helpful.

We support teams in {{industry_or_role}} by helping them {{value_proposition}}.

No rush at all — happy to connect if and when it makes sense.

Best regards,
{{your_name}}`}
    }, sales_cold_direct_cta: {
        meta: { label: "Direct CTA Outreach", description: "Focused outreach with a clear request for a meeting", category: "sales_business" }, draft: {
            subject: "Let’s discuss {{specific_problem}}", body: `Hi {{recipient_name}},

I’m reaching out because we help companies like {{company}} address {{specific_problem}}.

If this is something you’re currently evaluating, I’d appreciate the chance to explain how we do it.

Are you available for a short call this week?

Best regards,
{{your_name}}`}
    }, sales_problem_solution: {
        meta: { label: "Problem-Solution Pitch", description: "Highlighting a common pain point and offering a solution", category: "sales_business" }, draft: {
            subject: "Reducing {{problem_area}} at {{company}}", body: `Hi {{recipient_name}},

Many teams we work with struggle with {{problem_area}}.

We’ve helped similar companies improve this by {{solution_approach}}.

If this resonates, I’d be glad to share a few examples.

Best regards,
{{your_name}}`}
    }, sales_personalized_followup: {
        meta: { label: "Personalized Follow-up", description: "Follow-up message referencing specific context", category: "sales_business" }, draft: {
            subject: "Following up on my note", body: `Hi {{recipient_name}},

I wanted to follow up on my earlier message regarding {{topic_or_problem}}.

Let me know if this is something worth exploring or if I should reconnect at a later time.

Best regards,
{{your_name}}`}
    }, sales_followup_first: {
        meta: { label: "First Follow-up", description: "Simple follow-up to ensure initial email was seen", category: "sales_business" }, draft: {
            subject: "Quick follow-up", body: `Hi {{recipient_name}},

Just following up on my previous email in case it got missed.

Happy to provide more context or answer any questions.

Best regards,
{{your_name}}`}
    }, sales_followup_second: {
        meta: { label: "Second Follow-up", description: "Checking back in after multiple attempts", category: "sales_business" }, draft: {
            subject: "Checking back in", body: `Hi {{recipient_name}},

I wanted to check back in regarding my earlier note.

Please let me know if this is a priority right now or if there’s a better time to reconnect.

Best regards,
{{your_name}}`}
    }, sales_followup_final: {
        meta: { label: "Closing the Loop", description: "Final outreach if no interest has been shown", category: "sales_business" }, draft: {
            subject: "Closing the loop", body: `Hi {{recipient_name}},

I haven’t heard back, so I’ll assume now isn’t the right time.

Feel free to reach out in the future if this becomes relevant.

Best regards,
{{your_name}}`}
    }, sales_checking_in: {
        meta: { label: "Relationship Check-in", description: "Informal check-in with a known prospect or contact", category: "sales_business" }, draft: {
            subject: "Checking in", body: `Hi {{recipient_name}},

Just checking in to see if there have been any updates since we last connected.

Happy to continue the conversation if useful.

Best regards,
{{your_name}}`}
    }, sales_no_response: {
        meta: { label: "Last Attempt Follow-up", description: "Final try to connect before moving on", category: "sales_business" }, draft: {
            subject: "Following up one last time", body: `Hi {{recipient_name}},

I wanted to follow up once more regarding {{topic}}.

If this isn’t a fit right now, no worries at all — just wanted to close the loop.

Best regards,
{{your_name}}`}
    }, sales_post_demo: {
        meta: { label: "Post-Demo Follow-up", description: "Summarizing value and next steps after a product demo", category: "sales_business" }, draft: {
            subject: "Thanks for your time today", body: `Hi {{recipient_name}},

Thank you for taking the time to attend the demo today.

As discussed, we believe {{product_or_solution}} can help with {{key_benefit}}.

Please let me know if you have any questions or would like to discuss next steps.

Best regards,
{{your_name}}`}
    }, proposal_send: {
        meta: { label: "Send Proposal", description: "Delivering a formal business or project proposal", category: "sales_business" }, draft: {
            subject: "Proposal for {{project_or_scope}}", body: `Hi {{recipient_name}},

As discussed, please find attached the proposal for {{project_or_scope}}.

I’ve outlined the scope, timelines, and next steps for your review.

Happy to walk through it together if helpful.

Best regards,
{{your_name}}`}
    }, pricing_custom: {
        meta: { label: "Custom Pricing Proposal", description: "Discussing tailored pricing based on specific needs", category: "sales_business" }, draft: {
            subject: "Custom pricing discussion", body: `Hi {{recipient_name}},

Based on your requirements, I’ve put together a custom pricing approach.

I’d be glad to walk through the details and adjust as needed.

Best regards,
{{your_name}}`}
    }, pricing_quote_followup: {
        meta: { label: "Follow-up on Quote", description: "Checking in on a previously sent pricing quote", category: "sales_business" }, draft: {
            subject: "Following up on pricing quote", body: `Hi {{recipient_name}},

I wanted to follow up on the pricing quote shared earlier.

Please let me know if you have any questions or need additional information.

Best regards,
{{your_name}}`}
    }, pricing_negotiation: {
        meta: { label: "Negotiate Pricing", description: "Discussing terms to reach a mutually beneficial agreement", category: "sales_business" }, draft: {
            subject: "Pricing discussion", body: `Hi {{recipient_name}},

Thank you for sharing your thoughts on pricing.

I’m open to discussing options that align with your budget and requirements.

Best regards,
{{your_name}}`}
    }, pricing_discount: {
        meta: { label: "Apply Discount", description: "Providing updated pricing with terms applied", category: "sales_business" }, draft: {
            subject: "Updated pricing details", body: `Hi {{recipient_name}},

As discussed, I’ve applied an updated pricing structure reflecting the agreed discount.

Please let me know if everything looks good from your end.

Best regards,
{{your_name}}`}
    }, pricing_renewal: {
        meta: { label: "Renewal Outreach", description: "Starting the conversation for a subscription or contract renewal", category: "sales_business" }, draft: {
            subject: "Upcoming renewal discussion", body: `Hi {{recipient_name}},

I wanted to reach out regarding the upcoming renewal for {{product_or_service}}.

Happy to review usage, value, and next steps together.

Best regards,
{{your_name}}`}
    }, partnership_proposal: {
        meta: { label: "Partnership Proposal", description: "Proposing a mutually beneficial brand or business partnership", category: "sales_business" }, draft: {
            subject: "Partnership opportunity", body: `Hi {{recipient_name}},

I’d like to explore a potential partnership between {{your_company}} and {{company}}.

I believe there may be strong alignment in how we serve our customers.

Let me know if you’d be open to a conversation.

Best regards,
{{your_name}}`}
    }, collaboration_request: {
        meta: { label: "Collaboration Request", description: "Seeking a short-term or specific project collaboration", category: "sales_business" }, draft: {
            subject: "Exploring collaboration", body: `Hi {{recipient_name}},

I’m reaching out to explore a possible collaboration around {{collaboration_area}}.

If this sounds interesting, I’d be glad to discuss further.

Best regards,
{{your_name}}`}
    }, affiliate_request: {
        meta: { label: "Affiliate Partnership Inquiry", description: "Proposing an affiliate relationship for promotion", category: "sales_business" }, draft: {
            subject: "Affiliate partnership inquiry", body: `Hi {{recipient_name}},

I wanted to inquire about potential affiliate opportunities with {{company}}.

I believe our audiences may align well and create mutual value.

Best regards,
{{your_name}}`}
    }, influencer_outreach: {
        meta: { label: "Influencer Outreach", description: "Connecting with influencers for potential collaboration", category: "sales_business" }, draft: {
            subject: "Collaboration opportunity", body: `Hi {{recipient_name}},

I’ve been following your work and wanted to reach out regarding a possible collaboration.

We think there may be an opportunity to work together on {{campaign_or_topic}}.

Best regards,
{{your_name}}`}
    }, sponsorship_proposal: {
        meta: { label: "Sponsorship Proposal", description: "Proposing a sponsorship deal for an event or platform", category: "sales_business" }, draft: {
            subject: "Sponsorship opportunity", body: `Hi {{recipient_name}},

I’m reaching out to explore a potential sponsorship opportunity with {{event_or_platform}}.

I believe this could be a strong fit for both sides.

Best regards,
{{your_name}}`}
    }, co_marketing: {
        meta: { label: "Co-Marketing Inquiry", description: "Proposing combined marketing efforts between brands", category: "sales_business" }, draft: {
            subject: "Co-marketing opportunity", body: `Hi {{recipient_name}},

I wanted to explore a possible co-marketing initiative between our teams.

If this is something you’re open to, I’d be glad to discuss ideas.

Best regards,
{{your_name}}`}
    }
}, Md = {
    support_ticket_received: {
        meta: { label: "Ticket Received", description: "Confirmation that support request has been received", category: "customer_support" }, draft: {
            subject: "We’ve received your support request – {{ticket_id}}", body: `Hello {{customer_name}},

Thank you for reaching out to {{company_name}}. We’ve received your support request and created ticket {{ticket_id}}.

Our team will review your request and get back to you as soon as possible.

Best regards,
{{support_agent_name}}
{{company_name}} Support`}
    }, support_investigating: {
        meta: { label: "Investigating Issue", description: "Inform customer that the issue is under investigation", category: "customer_support" }, draft: {
            subject: "Update on your support request – {{ticket_id}}", body: `Hello {{customer_name}},

We are currently investigating the issue you reported under ticket {{ticket_id}}.

We’ll update you once we have more information. Thank you for your patience.

Regards,
{{support_agent_name}}
{{company_name}} Support`}
    }, support_request_details: {
        meta: { label: "Request More Details", description: "Ask customer for additional information", category: "customer_support" }, draft: {
            subject: "Additional information needed for ticket {{ticket_id}}", body: `Hello {{customer_name}},

To proceed with your request, we need a bit more information:

{{requested_details}}

Once we have these details, we’ll continue working on your issue.

Thank you,
{{support_agent_name}}
{{company_name}} Support`}
    }, support_resolved: {
        meta: { label: "Issue Resolved", description: "Notify customer that the issue is resolved", category: "customer_support" }, draft: {
            subject: "Your issue has been resolved – {{ticket_id}}", body: `Hello {{customer_name}},

We’re happy to inform you that your issue under ticket {{ticket_id}} has been resolved.

If you experience any further issues, feel free to reply to this email.

Best regards,
{{support_agent_name}}
{{company_name}} Support`}
    }, support_escalation: {
        meta: { label: "Issue Escalated", description: "Inform customer that issue has been escalated", category: "customer_support" }, draft: {
            subject: "Your support request has been escalated – {{ticket_id}}", body: `Hello {{customer_name}},

Your request has been escalated to our senior support team to ensure it’s handled appropriately.

We appreciate your patience and will keep you updated.

Regards,
{{support_agent_name}}
{{company_name}} Support`}
    }, support_apology: {
        meta: { label: "Apology Email", description: "Apologize for inconvenience or delay", category: "customer_support" }, draft: {
            subject: "Our apologies regarding your experience", body: `Hello {{customer_name}},

We sincerely apologize for the inconvenience you experienced.

Your feedback is important to us, and we’re taking steps to ensure this doesn’t happen again.

Thank you for your understanding,
{{support_agent_name}}
{{company_name}} Support`}
    }, billing_payment_failed: {
        meta: { label: "Payment Failed", description: "Notify customer about failed payment", category: "customer_support" }, draft: {
            subject: "Payment issue with your {{company_name}} account", body: `Hello {{customer_name}},

We were unable to process your recent payment for {{service_name}}.

Please update your payment details to avoid service interruption.

Thank you,
{{company_name}} Billing Team`}
    }, billing_invoice: {
        meta: { label: "Invoice Sent", description: "Send invoice to customer", category: "customer_support" }, draft: {
            subject: "Your invoice from {{company_name}} – {{invoice_number}}", body: `Hello {{customer_name}},

Attached is your invoice {{invoice_number}} for {{billing_period}}.

Please let us know if you have any questions.

Regards,
{{company_name}} Billing Team`}
    }, billing_refund_initiated: {
        meta: { label: "Refund Initiated", description: "Inform customer refund has been initiated", category: "customer_support" }, draft: {
            subject: "Refund initiated for {{transaction_id}}", body: `Hello {{customer_name}},

We’ve initiated a refund for transaction {{transaction_id}}.

The amount should reflect in your account within {{refund_timeline}}.

Best regards,
{{company_name}} Billing Team`}
    }, billing_refund_completed: {
        meta: { label: "Refund Completed", description: "Confirm refund completion", category: "customer_support" }, draft: {
            subject: "Refund completed – {{transaction_id}}", body: `Hello {{customer_name}},

Your refund for transaction {{transaction_id}} has been successfully completed.

Please contact us if you have any questions.

Thank you,
{{company_name}} Billing Team`}
    }, billing_subscription_cancelled: {
        meta: { label: "Subscription Cancelled", description: "Confirm subscription cancellation", category: "customer_support" }, draft: {
            subject: "Your subscription has been cancelled", body: `Hello {{customer_name}},

This email confirms that your subscription has been cancelled effective {{cancellation_date}}.

We appreciate your time with {{company_name}}.

Regards,
{{company_name}} Billing Team`}
    }, billing_subscription_renewed: {
        meta: { label: "Subscription Renewed", description: "Confirm subscription renewal", category: "customer_support" }, draft: {
            subject: "Subscription renewed successfully", body: `Hello {{customer_name}},

Your subscription has been successfully renewed and is valid until {{renewal_date}}.

Thank you for continuing with {{company_name}}.

Best regards,
{{company_name}} Billing Team`}
    }, incident_outage: {
        meta: { label: "Service Outage", description: "Notify customers of a full outage", category: "customer_support" }, draft: {
            subject: "Service outage notification", body: `Hello {{customer_name}},

We’re currently experiencing a service outage affecting {{affected_service}}.

Our team is actively working to resolve the issue.

Thank you for your patience,
{{company_name}} Team`}
    }, incident_partial_outage: {
        meta: { label: "Partial Outage", description: "Notify customers of partial service disruption", category: "customer_support" }, draft: {
            subject: "Partial service disruption notice", body: `Hello {{customer_name}},

Some users may be experiencing limited access to {{affected_service}}.

We’re working to restore full functionality as soon as possible.

Regards,
{{company_name}} Team`}
    }, incident_resolved: {
        meta: { label: "Incident Resolved", description: "Notify customers incident is resolved", category: "customer_support" }, draft: {
            subject: "Service restored", body: `Hello {{customer_name}},

The earlier service issue has been fully resolved.

Thank you for your patience during this time.

Best regards,
{{company_name}} Team`}
    }, incident_maintenance: {
        meta: { label: "Scheduled Maintenance", description: "Notify customers of planned maintenance", category: "customer_support" }, draft: {
            subject: "Scheduled maintenance notification", body: `Hello {{customer_name}},

We’ll be performing scheduled maintenance on {{maintenance_date}} between {{start_time}} and {{end_time}}.

During this period, some services may be unavailable.

Thank you,
{{company_name}} Team`}
    }
}, Dd = {
    onboarding_welcome: {
        meta: { label: "Welcome Email", description: "First greeting to a new user after signup", category: "product_saas" }, draft: {
            subject: "Welcome to {{company_name}}! 🚀", body: `Hi {{user_name}},

We're thrilled to have you here! Your account is all set up.

To get started, you can {{first_action_link}}. We've also put together a quick guide to help you hit the ground running.

If you have any questions, just reply to this email.

Best,
The {{company_name}} Team`}
    }, onboarding_setup: {
        meta: { label: "Account Setup", description: "Guide user through initial configuration", category: "product_saas" }, draft: {
            subject: "Quick tip: Finishing your account setup", body: `Hi {{user_name}},

You're almost there! To get the most out of {{company_name}}, we recommend completing these steps:

1. {{step_one}}
2. {{step_two}}

Complete your setup here: {{setup_link}}

Happy exploring!`}
    }, onboarding_verification: {
        meta: { label: "Email Verification", description: "Request user to verify their email address", category: "product_saas" }, draft: {
            subject: "Verify your email for {{company_name}}", body: `Hi {{user_name}},

Please verify your email address to secure your account and access all our features.

Click here to verify: {{verification_link}}

If you didn't create this account, you can safely ignore this email.`}
    }, onboarding_first_login: {
        meta: { label: "First Login Milestones", description: "Congratulate user on their first successful login", category: "product_saas" }, draft: {
            subject: "You've officially joined the club!", body: `Hi {{user_name}},

Great to see you logged in! We noticed you've started exploring {{feature_name}}.

How was your first experience? We'd love to hear your thoughts.

Cheers,
{{team_member_name}}`}
    }, onboarding_feature_walkthrough: {
        meta: { label: "Feature Walkthrough", description: "Introduce the core value proposition/feature", category: "product_saas" }, draft: {
            subject: "How {{feature_name}} works", body: `Hi {{user_name}},

Ready to dive deeper? Today we're highlighting {{feature_name}}.

It helps you {{value_benefit}} in just a few clicks. Check out this 2-minute walkthrough: {{video_link}}

Let us know what you think!`}
    }, trial_expiry: {
        meta: { label: "Trial Expiry Reminder", description: "Notify user that their trial period is ending", category: "product_saas" }, draft: {
            subject: "Your {{company_name}} trial ends in {{days_left}} days", body: `Hi {{user_name}},

Your free trial of {{company_name}} is wrapping up. We hope you've enjoyed using it for {{user_activity}}.

To keep your access and data, upgrade to a paid plan before {{expiry_date}}.

Upgrade now: {{pricing_link}}`}
    }, product_new_feature: {
        meta: { label: "New Feature Launch", description: "Announce a major new capability", category: "product_saas" }, draft: {
            subject: "Introducing {{feature_name}}: A better way to {{benefit}}", body: `Hi {{user_name}},

We've been working hard on something special. Say hello to {{feature_name}}!

Now you can {{feature_capability}}, helping you save time on {{task}}.

Try it out today: {{app_link}}`}
    }, product_improvement: {
        meta: { label: "Feature Enhancement", description: "Announce improvements to an existing feature", category: "product_saas" }, draft: {
            subject: "Better, faster, stronger: Updates to {{feature_name}}", body: `Hi {{user_name}},

We've listened to your feedback and made some great improvements to {{feature_name}}.

What's new:
- {{improvement_one}}
- {{improvement_two}}

Check it out in the app!`}
    }, product_bugfix: {
        meta: { label: "Bug Fix Notice", description: "Inform users that a specific issue has been resolved", category: "product_saas" }, draft: {
            subject: "Fix deployed: {{issue_description}}", body: `Hi everyone,

Quick update: We've resolved the issue regarding {{issue_description}} that some of you were experiencing.

Thanks for your patience and for reporting it!`}
    }, product_release_notes: {
        meta: { label: "Release Notes", description: "Monthly or weekly summary of all changes", category: "product_saas" }, draft: {
            subject: "Release Notes: What's new in {{month_year}}", body: `Hi {{user_name}},

Here's everything we shipped this month:

✨ New: {{item_one}}
🔧 Improved: {{item_two}}
🐛 Fixed: {{item_three}}

Read the full details on our blog: {{blog_link}}`}
    }, product_deprecation: {
        meta: { label: "Feature Deprecation", description: "Alert users that a feature will be removed", category: "product_saas" }, draft: {
            subject: "Notice: {{feature_name}} will be sunset on {{date}}", body: `Hi {{user_name}},

We're reaching out to let you know that we will be sunsetting {{feature_name}} on {{date}}.

Why? We're focusing our efforts on {{replacement_feature}} to provide a better experience.

Please let us know if you need help migrating your data.`}
    }, engagement_usage_reminder: {
        meta: { label: "Engagement Reminder", description: "Prompt inactive users to return to the product", category: "product_saas" }, draft: {
            subject: "Missing out on {{benefit}}?", body: `Hi {{user_name}},

It's been a while since we saw you! Since your last visit, {{company_name}} has helped users {{stat_success}}.

Ready to jump back in? {{login_link}}`}
    }, engagement_reactivate: {
        meta: { label: "Reactivation Offer", description: "Incentivize churned users to come back", category: "product_saas" }, draft: {
            subject: "We want you back! (Special offer inside)", body: `Hi {{user_name}},

We've missed you. To welcome you back, we're offering {{discount_percent}}% off your next {{duration}}.

Claim your offer: {{claim_link}}`}
    }, engagement_inactive: {
        meta: { label: "Inactive Account Notice", description: "Final warning for persistent inactivity", category: "product_saas" }, draft: {
            subject: "Is everything okay? Your account is inactive", body: `Hi {{user_name}},

We noticed you haven't used {{company_name}} in over {{number}} months. Is there anything we can do to help?

If we don't hear from you, we'll assume you're moving on.`}
    }, engagement_upgrade: {
        meta: { label: "Upgrade Suggestion", description: "Suggest a higher tier based on usage", category: "product_saas" }, draft: {
            subject: "Unlock more with {{plan_name}}", body: `Hi {{user_name}},

You're doing great with our {{current_plan}} plan! Did you know {{plan_name}} includes {{benefit}}?

See the difference: {{comparison_link}}`}
    }, engagement_downgrade: {
        meta: { label: "Plan Downgrade Confirmation", description: "Confirm move to a lower-tier plan", category: "product_saas" }, draft: {
            subject: "Your plan has been updated to {{plan_name}}", body: `Hi {{user_name}},

This email confirms that your subscription has been moved to the {{plan_name}} tier.

You'll still have access to {{benefit}}, but some features may be limited.`}
    }
}, Cd = {
    leave_sick: {
        meta: { label: "Sick Leave", description: "Notify manager about unexpected illness", category: "hr_internal", isPopular: !0 }, draft: {
            subject: "Sick Leave Notification - {{Your Name}}", body: `Hi {{Manager Name}},

I'm writing to inform you that I'm feeling unwell today and will be unable to work.

I plan to check my emails occasionally if urgent, but otherwise, I'll be offline resting. I hope to be back by {{expected_return_date}}.

Best regards,
{{Your Name}}`}
    }, leave_planned: {
        meta: { label: "Planned Leave Request", description: "Request for future time off or vacation", category: "hr_internal" }, draft: {
            subject: "Leave Request: {{start_date}} to {{end_date}}", body: `Hi {{Manager Name}},

I would like to request leave from {{start_date}} to {{end_date}}.

I've ensured that my current tasks are up to date, and I will hand over {{project_name}} to {{colleague_name}} before I depart.

Looking forward to your approval.

Best,
{{Your Name}}`}
    }, leave_emergency: {
        meta: { label: "Emergency Leave", description: "Urgent notification for immediate absence", category: "hr_internal" }, draft: {
            subject: "Emergency Leave Required - {{Your Name}}", body: `Hi {{Manager Name}},

An urgent personal emergency has come up, and I need to take leave starting immediately.

I expect to be away for {{duration}}. I'll provide a more detailed update as soon as I can.

Regards,
{{Your Name}}`}
    }, leave_wfh: {
        meta: { label: "Work From Home Request", description: "Notify or request to work remotely for the day", category: "hr_internal" }, draft: {
            subject: "Working from home today - {{Date}}", body: `Hi {{Manager Name}},

I'll be working from home today, {{Date}}, due to {{reason}}.

I am available as usual on Slack and via email.

Best,
{{Your Name}}`}
    }, attendance_late: {
        meta: { label: "Running Late", description: "Quick note to team about a delayed start", category: "hr_internal" }, draft: {
            subject: "Running slightly late - {{Time}}", body: `Hi Team,

I'm running about {{minutes}} minutes late this morning due to {{reason}}.

I should be online by {{expected_time}}. Apologies for any inconvenience.

Best,
{{Your Name}}`}
    }, status_daily: {
        meta: { label: "Daily Standup/Status", description: "Quick summary of yesterday's work and today's plan", category: "hr_internal" }, draft: {
            subject: "Daily Status Update - {{Date}}", body: `Hi {{Manager/Team}},

Here is my update for today:

Yesterday:
- {{completed_task_1}}
- {{completed_task_2}}

Today's Plan:
- {{planned_task_1}}
- {{planned_task_2}}

Blockers: {{blockers_if_any}}

Best regards,
{{Your Name}}`}
    }, status_weekly: {
        meta: { label: "Weekly Progress Report", description: "Comprehensive summary of weekly achievements", category: "hr_internal" }, draft: {
            subject: "Weekly Progress Report - Week of {{Date}}", body: `Hi {{Manager Name}},

Key highlights from this week:

Achievements:
- {{achievement_1}}
- {{achievement_2}}

Upcoming Priorities:
- {{priority_1}}
- {{priority_2}}

Everything is currently on track for {{project_name}}.

Best,
{{Your Name}}`}
    }, status_task_done: {
        meta: { label: "Task Completion", description: "Formal notification that a specific task is finished", category: "hr_internal" }, draft: {
            subject: "Completed: {{Task Name}}", body: `Hi {{Recipient Name}},

I've completed the task: {{Task Name}}.

You can find the results/deliverables here: {{Link/Attachment}}

Let me know if any further changes are needed.

Best,
{{Your Name}}`}
    }, status_delay: {
        meta: { label: "Project/Task Delay", description: "Proactive notification about a missed deadline", category: "hr_internal" }, draft: {
            subject: "Update on {{Task Name}} - Delayed", body: `Hi {{Recipient Name}},

I wanted to provide an update on {{Task Name}}. Unfortunately, the completion will be delayed until {{new_date}} due to {{reason}}.

I'm working to prioritize this and will keep you posted on the progress.

Regards,
{{Your Name}}`}
    }, status_blocker: {
        meta: { label: "Blocker Alert", description: "Flagging an issue that is preventing progress", category: "hr_internal" }, draft: {
            subject: "Blocker: Assistance needed for {{Task Name}}", body: `Hi {{Recipient Name}},

I'm currently blocked on {{Task Name}} because {{reason}}.

Could you please help with {{specific_request}} so I can proceed?

Thanks,
{{Your Name}}`}
    }, employment_offer_letter: {
        meta: { label: "Offer Letter Sent", description: "Formal job offer to a successful candidate", category: "hr_internal" }, draft: {
            subject: "Job Offer: {{Role}} at {{Company Name}}", body: `Dear {{Candidate Name}},

We are pleased to offer you the position of {{Role}} with {{Company Name}}.

We were very impressed with your skills and believe you will be a great addition to our team. Please find the formal offer letter and employment agreement attached.

We look forward to hearing from you.

Best regards,
{{Your Name}}
{{Company Name}} HR`}
    }, employment_joining_confirmation: {
        meta: { label: "Joining Confirmation", description: "Welcome note and confirmation for a new hire's first day", category: "hr_internal" }, draft: {
            subject: "Confirmation of Joining Date - {{Company Name}}", body: `Hi {{New Hire Name}},

We're excited to have you join us! This email confirms your start date as {{start_date}}.

On your first day, please report to {{location/link}} at {{time}}.

Welcome aboard!`}
    }, employment_onboarding: {
        meta: { label: "Onboarding Instructions", description: "Initial steps and links for a new employee", category: "hr_internal" }, draft: {
            subject: "Onboarding Checklist for {{New Hire Name}}", body: `Hi {{New Hire Name}},

Welcome to the team! To get you started, please complete the following onboarding tasks:

1. {{task_1}}
2. {{task_2}}

You can find all necessary resources here: {{onboarding_portal_link}}

Happy to help if you have any questions!`}
    }, employment_resignation: {
        meta: { label: "Resignation Letter", description: "Formal notification of intent to leave the company", category: "hr_internal" }, draft: {
            subject: "Resignation - {{Your Name}}", body: `Dear {{Manager Name}},

Please accept this email as formal notification that I am resigning from my position as {{Role}}. My last day will be {{last_day}}.

I've truly enjoyed my time at {{Company Name}} and appreciate the opportunities I've been given. I will do my best to ensure a smooth transition.

Sincerely,
{{Your Name}}`}
    }, employment_exit: {
        meta: { label: "Exit Process Note", description: "Final steps for a departing employee", category: "hr_internal" }, draft: {
            subject: "Departure Information - {{Your Name}}", body: `Hi HR Team,

As my tenure with {{Company Name}} comes to a close, I'm reaching out to confirm the final steps for my exit process.

I have completed/scheduled my exit interview for {{date}}. Please let me know if there's anything else required from my side.

Best regards,
{{Your Name}}`}
    }, employment_knowledge_transfer: {
        meta: { label: "Knowledge Transfer (KT)", description: "Handing over documents and processes to a teammate", category: "hr_internal" }, draft: {
            subject: "Knowledge Transfer: {{Project Name}}", body: `Hi {{Colleague Name}},

I've compiled all the relevant documentation and processes for {{Project Name}} to facilitate a smooth handover.

KT Document: {{Link}}
Meeting for Walkthrough: {{Date/Time}}

Please let me know if you have questions as you go through the materials.

Best,
{{Your Name}}`}
    }
}, qd = {
    meeting_request: {
        meta: { label: "Meeting Request", description: "Propose a new meeting or call", category: "meetings" }, draft: {
            subject: "Meeting Request: {{topic}}", body: `Hi {{recipient_name}},

I'd like to schedule a brief meeting to discuss {{topic}}.

Are you available on {{suggested_date}} at {{suggested_time}}? Alternatively, please let me know a time that works best for you.

Best regards,
{{your_name}}`}
    }, meeting_calendar_followup: {
        meta: { label: "Calendar Follow-up", description: "Follow up after sending a calendar invite", category: "meetings" }, draft: {
            subject: "Follow-up: Calendar invite for {{meeting_title}}", body: `Hi {{recipient_name}},

Just following up on the calendar invite I sent for our {{meeting_title}} session.

Please let me know if the time works for you or if we need to adjust anything.

Best,
{{your_name}}`}
    }, meeting_agenda: {
        meta: { label: "Meeting Agenda", description: "Share the topics to be covered in an upcoming meeting", category: "meetings" }, draft: {
            subject: "Agenda for our meeting on {{topic}}", body: `Hi Team,

Ahead of our meeting on {{date}}, here is the proposed agenda:

1. {{agenda_item_1}}
2. {{agenda_item_2}}
3. {{agenda_item_3}}

Please let me know if there's anything else you'd like to add.

See you then,
{{your_name}}`}
    }, meeting_reminder: {
        meta: { label: "Meeting Reminder", description: "Gently remind participants about an upcoming session", category: "meetings" }, draft: {
            subject: "Reminder: {{meeting_title}} starting in {{time_delta}}", body: `Hi everyone,

Just a quick reminder that our meeting regarding {{topic}} is starting in {{time_delta}}.

Join link: {{meeting_link}}

Looking forward to it!`}
    }, meeting_reschedule: {
        meta: { label: "Reschedule Meeting", description: "Request to move an existing meeting to a new time", category: "meetings" }, draft: {
            subject: "Rescheduling: {{meeting_title}}", body: `Hi {{recipient_name}},

Apologies, but I have a scheduling conflict and need to move our {{meeting_title}} session.

Would {{new_date}} at {{new_time}} work for you instead?

Sorry for the inconvenience.

Best,
{{your_name}}`}
    }, meeting_cancel: {
        meta: { label: "Cancel Meeting", description: "Notify participants that a meeting has been cancelled", category: "meetings" }, draft: {
            subject: "Cancelled: {{meeting_title}}", body: `Hi everyone,

Please note that the meeting regarding {{topic}} scheduled for {{date}} has been cancelled.

We will look to reschedule this at a later date.

Regards,
{{your_name}}`}
    }, meeting_delay: {
        meta: { label: "Meeting Delay", description: "Notify participants that the meeting will start late", category: "meetings" }, draft: {
            subject: "Slight delay: Starting {{meeting_title}} at {{new_time}}", body: `Hi Team,

I'm running a few minutes behind. We'll start the meeting at {{new_time}} instead of {{original_time}}.

Thanks for your patience!`}
    }, meeting_summary: {
        meta: { label: "Meeting Summary", description: "Brief overview of what was discussed", category: "meetings" }, draft: {
            subject: "Summary: {{meeting_title}} - {{date}}", body: `Hi Team,

Thanks for a productive session today. Here's a brief summary of what we covered:

- {{summary_point_1}}
- {{summary_point_2}}

I'll follow up shortly with specific action items.

Best,
{{your_name}}`}
    }, meeting_action_items: {
        meta: { label: "Action Items", description: "Assign tasks based on meeting outcomes", category: "meetings" }, draft: {
            subject: "Action Items from {{meeting_title}}", body: `Hi everyone,

Following our meeting on {{topic}}, here are the assigned action items:

- {{task_1}} (@{{owner_1}})
- {{task_2}} (@{{owner_2}})

Please update the status of these by {{deadline}}.

Thanks!`}
    }, meeting_next_steps: {
        meta: { label: "Next Steps", description: "Outline future plans after a successful meeting", category: "meetings" }, draft: {
            subject: "Next Steps for {{project_name}}", body: `Hi Team,

Great meeting today! Based on our discussion, here are the next steps:

1. {{step_1}}
2. {{step_2}}

Our next sync is scheduled for {{next_sync_date}}.

Best,
{{your_name}}`}
    }
}, Ud = {
    intro_self: {
        meta: { label: "Self Introduction", description: "Introduce yourself to a new person or contact", category: "personal_professional" }, draft: {
            subject: "Introduction: {{your_name}}", body: `Hi {{recipient_name}},

I'm reaching out to introduce myself. I've been following your work on {{field/topic}} and wanted to connect.

I'm a {{your_role}} and would love to learn more about your experience with {{specific_area}}.

Looking forward to connecting!

Best,
{{your_name}}`}
    }, intro_professional: {
        meta: { label: "Professional Intro", description: "A more formal introduction for business networking", category: "personal_professional" }, draft: {
            subject: "Professional Introduction - {{your_name}}", body: `Dear {{recipient_name}},

I am writing to formally introduce myself. I currently work as a {{your_role}} at {{your_company}} and have been involved in {{project/area}}.

I believe there may be alignment between our work, and I would value the opportunity to exchange professional insights.

Sincerely,
{{your_name}}`}
    }, intro_two_people: {
        meta: { label: "Intro Two People", description: "Connect two people in your network", category: "personal_professional" }, draft: {
            subject: "Connecting {{person_a_name}} and {{person_b_name}}", body: `Hi {{person_a_name}} and {{person_b_name}},

I'm writing to introduce the two of you. 

{{person_a_name}}, {{person_b_name}} is a {{person_b_role}} who is doing great work in {{person_b_area}}.

{{person_b_name}}, {{person_a_name}} is a {{person_a_role}} with deep expertise in {{person_a_area}}.

I'll let you two take it from here!

Best,
{{your_name}}`}
    }, intro_new_team: {
        meta: { label: "New Team Introduction", description: "Introduce yourself to a new team you've joined", category: "personal_professional" }, draft: {
            subject: "Hi! Introducing myself to the team", body: `Hi Team,

I'm excited to join you all as a {{your_role}}! 

I've previously worked on {{previous_experience}} and am looking forward to contributing to {{current_project}}.

Hope to meet you all soon!

Best,
{{your_name}}`}
    }, followup_after_call: {
        meta: { label: "After Call Follow-up", description: "Follow up after a discovery or catch-up call", category: "personal_professional" }, draft: {
            subject: "Great speaking with you earlier", body: `Hi {{recipient_name}},

Thank you for the call earlier! I really enjoyed our discussion about {{topic}}.

As promised, here is the {{link/info}} we talked about.

Let's keep in touch!

Best,
{{your_name}}`}
    }, followup_after_meeting: {
        meta: { label: "After Meeting Follow-up", description: "Summarize a formal meeting and next steps", category: "personal_professional" }, draft: {
            subject: "Follow-up on our meeting regarding {{topic}}", body: `Hi {{recipient_name}},

Thanks again for the meeting earlier today. It was great to align on {{key_outcome}}.

I'll be working on {{next_step}} and will have an update for you by {{date}}.

Best,
{{your_name}}`}
    }, followup_after_event: {
        meta: { label: "After Event Follow-up", description: "Follow up with someone you met at a conference or event", category: "personal_professional" }, draft: {
            subject: "Great meeting you at {{event_name}}", body: `Hi {{recipient_name}},

It was a pleasure meeting you at {{event_name}}! I enjoyed our conversation about {{topic}}.

I'd love to stay connected and perhaps grab a coffee sometime to discuss this further.

Cheers,
{{your_name}}`}
    }, followup_gentle_reminder: {
        meta: { label: "Gentle Reminder", description: "A soft nudge for an overdue response", category: "personal_professional" }, draft: {
            subject: "Quick nudge: {{topic}}", body: `Hi {{recipient_name}},

I just wanted to send a quick reminder regarding my previous email about {{topic}}.

I know things get busy, so please let me know when you have a moment to look into it.

Thanks,
{{your_name}}`}
    }, request_information: {
        meta: { label: "Request Information", description: "Ask for specific details or data", category: "personal_professional" }, draft: {
            subject: "Request for information regarding {{topic}}", body: `Hi {{recipient_name}},

I'm working on {{project}} and was hoping you could provide some information regarding {{specific_details}}.

This would greatly help me with {{purpose}}.

Thanks in advance!

Best,
{{your_name}}`}
    }, request_document: {
        meta: { label: "Request Document", description: "Ask for a file or document", category: "personal_professional" }, draft: {
            subject: "Could you please send {{document_name}}?", body: `Hi {{recipient_name}},

Could you please share the latest version of {{document_name}} with me? 

I need it for {{reason}}.

Thank you!

Best,
{{your_name}}`}
    }, request_approval: {
        meta: { label: "Request Approval", description: "Formal request for a decision or sign-off", category: "personal_professional" }, draft: {
            subject: "Approval Requested: {{task/item}}", body: `Hi {{recipient_name}},

I've completed the draft/plan for {{task/item}}. Could you please review it and provide your approval?

You can access it here: {{link}}

Please let me know if you have any feedback or if anything needs adjustment.

Best,
{{your_name}}`}
    }, request_clarification: {
        meta: { label: "Request Clarification", description: "Ask for more details on something that wasn't clear", category: "personal_professional" }, draft: {
            subject: "Clarification needed: {{topic}}", body: `Hi {{recipient_name}},

Thank you for the update on {{topic}}. I just wanted to clarify {{specific_point}}.

Could you provide a bit more detail on that?

Thanks!

Best,
{{your_name}}`}
    }
}, Bd = {
    permission_consent: {
        meta: { label: "Consent Request", description: "Ask for permission to use or share something", category: "legal_admin" }, draft: {
            subject: "Request for Consent: {{topic}}", body: `Dear {{recipient_name}},

I am writing to formally request your consent for {{action/use}}.

We intend to use {{item}} for the purpose of {{purpose}}. 

Please let us know if you have any questions or if we should proceed with a formal agreement.

Sincerely,
{{your_name}}`}
    }, permission_authorization: {
        meta: { label: "Authorization Request", description: "Request official authorization for an action", category: "legal_admin" }, draft: {
            subject: "Formal Authorization Required: {{action}}", body: `To whom it may concern,

I am requesting formal authorization to perform the following action: {{action}}.

This is necessary for {{reason}}. I have attached the relevant documentation for your review.

Please let me know the next steps for approval.

Best regards,
{{your_name}}`}
    }, nda_send: {
        meta: { label: "Send NDA", description: "Send a Non-Disclosure Agreement for signing", category: "legal_admin" }, draft: {
            subject: "Non-Disclosure Agreement: {{company_name}}", body: `Hi {{recipient_name}},

As discussed, please find attached the Non-Disclosure Agreement (NDA) for our upcoming collaboration.

Please review, sign, and return a copy at your earliest convenience so we can move forward.

Best regards,
{{your_name}}`}
    }, nda_followup: {
        meta: { label: "NDA Follow-up", description: "Follow up on an unsigned NDA", category: "legal_admin" }, draft: {
            subject: "Follow-up: Pending NDA for {{company_name}}", body: `Hi {{recipient_name}},

I'm following up on the NDA sent on {{date}}. 

We're eager to start our discussions and would appreciate it if you could return the signed copy as soon as possible.

Thanks,
{{your_name}}`}
    }, complaint_service: {
        meta: { label: "Service Complaint", description: "Formal complaint regarding a service issue", category: "legal_admin" }, draft: {
            subject: "Formal Complaint: Service issue (Ref: {{ref_number}})", body: `To the Support Team,

I am writing to express my dissatisfaction with the service I received on {{date}}.

The issue was {{issue_description}}. I would appreciate it if you could look into this and provide a resolution.

Regards,
{{your_name}}`}
    }, complaint_product: {
        meta: { label: "Product Complaint", description: "Formal complaint regarding a defective or incorrect product", category: "legal_admin" }, draft: {
            subject: "Complaint regarding product: {{product_name}}", body: `To whom it may concern,

I am writing to report an issue with the {{product_name}} I purchased on {{date}} (Order ID: {{order_id}}).

The product is {{defective/incorrect}} because {{reason}}. 

I would like to request a {{replacement/refund}}.

Sincerely,
{{your_name}}`}
    }, complaint_escalation: {
        meta: { label: "Complaint Escalation", description: "Escalate an unresolved issue to management", category: "legal_admin" }, draft: {
            subject: "Escalation: Unresolved issue (Ticket: {{ticket_id}})", body: `To the Management Team,

I am writing to escalate an ongoing issue (Ticket {{ticket_id}}) that has not been resolved to my satisfaction.

I have been in contact with support since {{date}}, but the issue {{problem_details}} remains unresolved.

I look forward to your prompt response.

Regards,
{{your_name}}`}
    }, legal_notice_response: {
        meta: { label: "Legal Notice Response", description: "Formal response to a legal inquiry or notice", category: "legal_admin" }, draft: {
            subject: "Response to Legal Notice (Ref: {{notice_ref}})", body: `Dear {{lawyer/firm_name}},

We acknowledge receipt of your notice dated {{date}}. 

We are currently reviewing the matter and will provide a formal response by {{date}}.

Sincerely,
{{your_name}}`}
    }, document_certificate: {
        meta: { label: "Certificate Request", description: "Request a formal certificate or proof", category: "legal_admin" }, draft: {
            subject: "Request for {{certificate_type}}", body: `To the Admin Department,

Could you please provide me with a {{certificate_type}} for {{purpose}}?

Let me know if you need any further information or documentation from my end.

Best regards,
{{your_name}}`}
    }, document_invoice: {
        meta: { label: "Request Invoice", description: "Request a formal invoice for a transaction", category: "legal_admin" }, draft: {
            subject: "Request for Invoice: {{service/product}}", body: `Hi Finance Team,

Could you please send the invoice for the {{service/product}} purchased on {{date}}?

Amount: {{amount}}
Transaction ID: {{transaction_id}}

Thanks!`}
    }, document_contract: {
        meta: { label: "Send Contract", description: "Send a formal business contract for review/signature", category: "legal_admin" }, draft: {
            subject: "Contract for {{project/service}}: {{company_name}}", body: `Hi {{recipient_name}},

Please find the formal agreement for {{project/service}} attached.

Please let us know if you have any questions or if you're ready to proceed with the signature.

Regards,
{{your_name}}`}
    }, document_contract_clarification: {
        meta: { label: "Contract Clarification", description: "Ask a question about a specific clause in a contract", category: "legal_admin" }, draft: {
            subject: "Question regarding {{clause_number}} in the agreement", body: `Hi {{recipient_name}},

I'm reviewing the contract for {{project}} and had a question about Section {{clause_number}} regarding {{topic}}.

Could you provide some clarification on this?

Thanks,
{{your_name}}`}
    }
}, kd = {
    campaign_promotion: {
        meta: { label: "Campaign Promotion", description: "Promote a specific campaign or limited-time event", category: "marketing_growth" }, draft: {
            subject: "Something big is coming: {{campaign_name}}", body: `Hi {{recipient_name}},

We're excited to announce our latest campaign, {{campaign_name}}! 

Stay tuned for more updates on how you can get involved and what this means for you.

Cheers,
The {{company_name}} Team`}
    }, campaign_offer: {
        meta: { label: "Special Offer", description: "Share a special offer or deal with your audience", category: "marketing_growth" }, draft: {
            subject: "Special Offer: {{offer_details}} just for you", body: `Hi {{recipient_name}},

Because you've been a valued member of our community, we're offering you {{offer_details}}.

Don't miss out! This offer ends on {{expiry_date}}.

Claim your offer: {{offer_link}}`}
    }, campaign_discount: {
        meta: { label: "Discount Announcement", description: "Announce a discount or sale to your customers", category: "marketing_growth" }, draft: {
            subject: "Get {{discount_percent}}% off with our {{sale_name}}", body: `Hi {{recipient_name}},

It's time to save! We're offering a {{discount_percent}}% discount on all our services as part of our {{sale_name}}.

Use code **{{discount_code}}** at checkout.

Shop now: {{shop_link}}`}
    }, campaign_seasonal: {
        meta: { label: "Seasonal Campaign", description: "A themed campaign for holidays or specific seasons", category: "marketing_growth" }, draft: {
            subject: "Happy {{holiday_name}} from {{company_name}}! 🎁", body: `Hi {{recipient_name}},

Wishing you a joyful {{holiday_name}}! To celebrate, we've put together some special {{products/offers}} just for you.

Check out our seasonal collection: {{collection_link}}

Warm regards,
The {{company_name}} Team`}
    }, newsletter_weekly: {
        meta: { label: "Weekly Newsletter", description: "A weekly digest of news and updates", category: "marketing_growth" }, draft: {
            subject: "{{company_name}} Weekly: This week's top stories", body: `Hi {{recipient_name}},

Here is your weekly roundup of everything happening at {{company_name}}:

1. {{news_item_1}}
2. {{news_item_2}}
3. {{news_item_3}}

Read more on our blog: {{blog_link}}`}
    }, newsletter_monthly: {
        meta: { label: "Monthly Newsletter", description: "A monthly summary of all things {{company_name}}", category: "marketing_growth" }, draft: {
            subject: "Monthly Update: What happened in {{month}}", body: `Hi {{recipient_name}},

It's been a busy month! Here's a look back at everything we've achieved together in {{month}}:

- {{milestone_1}}
- {{milestone_2}}
- {{milestone_3}}

Thanks for being part of our journey!`}
    }, newsletter_founder_note: {
        meta: { label: "Founder's Note", description: "A personal message from the founder to the community", category: "marketing_growth" }, draft: {
            subject: "A personal note from our founder", body: `Hi {{recipient_name}},

I wanted to take a moment to personally thank you for being part of the {{company_name}} community. 

Our mission has always been to {{mission_statement}}, and we couldn't do it without you.

I'd love to hear your feedback on how we're doing. Feel free to reply directly to this email.

Best,
{{founder_name}}`}
    }, newsletter_community: {
        meta: { label: "Community Update", description: "Highlight community events and contributions", category: "marketing_growth" }, draft: {
            subject: "Community Update: What's new in our circle", body: `Hi {{recipient_name}},

Our community is growing! Here's what's been happening:

- New Member Shoutout: {{member_name}}
- Featured Contribution: {{contribution_description}}
- Upcoming Meetup: {{meetup_date}}

Join the conversation: {{community_link}}`}
    }, event_invite: {
        meta: { label: "Event Invitation", description: "Invite your audience to an upcoming event", category: "marketing_growth" }, draft: {
            subject: "You're Invited: {{event_title}}", body: `Hi {{recipient_name}},

We'd love for you to join us at {{event_title}} on {{event_date}} at {{event_location/link}}.

It's going to be a great session focused on {{topic}}.

Register here: {{registration_link}}`}
    }, event_webinar: {
        meta: { label: "Webinar Announcement", description: "Promote an upcoming online webinar", category: "marketing_growth" }, draft: {
            subject: "Free Webinar: {{webinar_title}}", body: `Hi {{recipient_name}},

Join us for a free live webinar on {{webinar_title}}! 

We'll be covering:
- {{topic_1}}
- {{topic_2}}

Save your spot: {{webinar_link}}`}
    }, event_reminder: {
        meta: { label: "Event Reminder", description: "Remind registered attendees about an upcoming event", category: "marketing_growth" }, draft: {
            subject: "Don't forget: {{event_title}} is starting soon!", body: `Hi {{recipient_name}},

Just a quick reminder that {{event_title}} is happening on {{event_date}}.

We look forward to seeing you there!

Event details: {{event_link}}`}
    }, event_thank_you: {
        meta: { label: "Event Thank You", description: "Thank attendees for coming to an event", category: "marketing_growth" }, draft: {
            subject: "Thank you for attending {{event_title}}!", body: `Hi {{recipient_name}},

Thank you for joining us at {{event_title}}! We hope you found the session valuable.

In case you missed anything, here is the recording/deck: {{link}}

See you at the next one!`}
    }
}, Yd = {
    payment_reminder: {
        meta: { label: "Payment Reminder", description: "Friendly reminder about an upcoming or recent payment", category: "finance_operations" }, draft: {
            subject: "Upcoming Payment Reminder: {{service_name}}", body: `Hi {{recipient_name}},

This is a friendly reminder that your payment for {{service_name}} is due on {{due_date}}.

Amount: {{amount}}

You can manage your payments here: {{billing_link}}

Thanks!`}
    }, payment_overdue: {
        meta: { label: "Overdue Notice", description: "Alert a customer that their payment is past due", category: "finance_operations" }, draft: {
            subject: "Urgent: Your payment for {{service_name}} is overdue", body: `Hi {{recipient_name}},

Our records indicate that we haven't received your payment for {{service_name}}, which was due on {{due_date}}.

Please settle the outstanding balance of {{amount}} at your earliest convenience to avoid service interruption.

Payment Link: {{payment_link}}`}
    }, payment_confirmation: {
        meta: { label: "Payment Confirmation", description: "Confirm receipt of a successful payment", category: "finance_operations" }, draft: {
            subject: "Payment Received: Thank you!", body: `Hi {{recipient_name}},

This email confirms that we've successfully received your payment of {{amount}} for {{service_name}}.

Transaction ID: {{transaction_id}}

Your next payment is scheduled for {{next_date}}.

Best,
The Finance Team`}
    }, procurement_vendor_inquiry: {
        meta: { label: "Vendor Inquiry", description: "Initial inquiry to a potential vendor about products or services", category: "finance_operations" }, draft: {
            subject: "Inquiry regarding {{product/service}} - {{company_name}}", body: `Hi {{vendor_contact_name}},

I'm reaching out from {{company_name}} to inquire about your {{product/service}} offerings. 

We're interested in {{specific_details}} and would appreciate any pricing or catalog information you can share.

Looking forward to hearing from you.

Best,
{{your_name}}`}
    }, procurement_quotation: {
        meta: { label: "Request for Quotation", description: "Formal request for a price quote from a vendor", category: "finance_operations" }, draft: {
            subject: "RFQ: {{item_description}} - {{quantity}} units", body: `Dear {{vendor_contact_name}},

Please provide a formal quotation for the following items:

- {{item_1}} ({{quantity_1}})
- {{item_2}} ({{quantity_2}})

Please include lead times and delivery costs.

Regards,
{{your_name}}`}
    }, procurement_purchase_confirmation: {
        meta: { label: "Purchase Confirmation", description: "Confirm a purchase order sent to a vendor", category: "finance_operations" }, draft: {
            subject: "Purchase Order Confirmation: PO #{{po_number}}", body: `Hi {{vendor_contact_name}},

This email confirms our purchase of the items listed in PO #{{po_number}}. 

The signed purchase order is attached. Please let us know the expected delivery date.

Best,
{{your_name}}`}
    }, operations_service_request: {
        meta: { label: "Service Request", description: "A request for internal or external operational support", category: "finance_operations" }, draft: {
            subject: "Operational Service Request: {{task_title}}", body: `Hi {{recipient_name}},

I'm requesting operational support for {{task_title}}. 

Details:
{{details}}

Required by: {{deadline}}

Thanks for the help!`}
    }, operations_sla_update: {
        meta: { label: "SLA Update", description: "Notify stakeholders about changes to Service Level Agreements", category: "finance_operations" }, draft: {
            subject: "Notice: Update to our Service Level Agreement (SLA)", body: `Hi Team,

Please be advised that we've updated our internal SLA for {{process_name}}. 

The new response time is now {{new_time}} (previously {{old_time}}). This change is effective immediately.

Best,
Operations Team`}
    }, operations_vendor_followup: {
        meta: { label: "Vendor Follow-up", description: "Follow up with a vendor regarding an ongoing request or delivery", category: "finance_operations" }, draft: {
            subject: "Follow-up: Update on {{request_title}} / Delivery #{{ref_no}}", body: `Hi {{vendor_contact_name}},

I'm following up on the status of {{request_title}}. We're expecting {{item/delivery}} by {{expected_date}}.

Could you please provide an update on the progress?

Thanks,
{{your_name}}`}
    }
}, Gd = {
    academic_admission_inquiry: {
        meta: { label: "Admission Inquiry", description: "Inquire about admission to a course or program", category: "education" }, draft: {
            subject: "Inquiry regarding admission to {{program_name}}", body: `Dear Admissions Team,

I'm writing to express my interest in the {{program_name}} at {{institution_name}}. 

Could you please provide information regarding the admission requirements and deadlines?

Thank you,
{{your_name}}`}
    }, academic_course_enrollment: {
        meta: { label: "Course Enrollment", description: "Request to enroll in a specific academic course", category: "education" }, draft: {
            subject: "Enrollment Request: {{course_name}} (Code: {{course_code}})", body: `Hi Registrar,

I'd like to enroll in the upcoming {{course_name}} (Code: {{course_code}}). 

Please let me know if there are any prerequisites or paperwork I need to complete.

Best,
{{your_name}}`}
    }, academic_assignment_submission: {
        meta: { label: "Assignment Submission", description: "Submit your academic work or project", category: "education" }, draft: {
            subject: "Assignment Submission: {{assignment_title}} - {{your_name}}", body: `Dear {{instructor_name}},

Please find attached my submission for the {{assignment_title}}.

Let me know if you have any issues with the file.

Regards,
{{your_name}}`}
    }, academic_deadline_extension: {
        meta: { label: "Deadline Extension", description: "Request more time for an assignment or project", category: "education" }, draft: {
            subject: "Request for extension: {{assignment_title}}", body: `Dear {{instructor_name}},

I am writing to request a brief extension for the {{assignment_title}} due on {{due_date}}.

I am requesting this because {{reason}}. Would it be possible to submit it by {{new_date}} instead?

Thank you for your consideration.

Best,
{{your_name}}`}
    }, training_invitation: {
        meta: { label: "Training Invitation", description: "Invite someone to a training session or workshop", category: "education" }, draft: {
            subject: "Invitation: {{training_title}} training session", body: `Hi {{recipient_name}},

Join us for an upcoming training on {{training_title}}! 

This session will cover {{key_topics}}. Register here: {{link}}

We hope to see you there!`}
    }, training_reminder: {
        meta: { label: "Training Reminder", description: "Remind participants about an upcoming training session", category: "education" }, draft: {
            subject: "Reminder: {{training_title}} starts tomorrow!", body: `Hi everyone,

This is a quick reminder that our training session on {{training_title}} is happening tomorrow at {{time}}.

See you then! 

Link: {{meeting_link}}`}
    }, training_completion_certificate: {
        meta: { label: "Completion Certificate", description: "Deliver a certificate after successful training completion", category: "education" }, draft: {
            subject: "Congratulations! Your certificate for {{training_title}}", body: `Hi {{recipient_name}},

Congratulations on completing the {{training_title}} training!

Attached is your certificate of completion. Well done!

Regards,
{{training_team_name}}`}
    }
}, Qd = {
    generic_thank_you: {
        meta: { label: "Thank You", description: "A quick and generic thank-you note", category: "misc", isPopular: !0 }, draft: {
            subject: "Thank you!", body: `Hi {{recipient_name}},

Just wanted to send a quick thank you for your help with {{topic}}. 

Really appreciate it!

Best,
{{your_name}}`}
    }, generic_apology: {
        meta: { label: "Apology", description: "A standard apology for a mistake or delay", category: "misc" }, draft: {
            subject: "Sincere Apologies", body: `Hi {{recipient_name}},

Please accept my apologies for {{reason}}. I am working to ensure this doesn't happen again.

Thank you for your understanding.

Best,
{{your_name}}`}
    }, generic_clarification: {
        meta: { label: "Clarification Needed", description: "Request clarification on a general topic", category: "misc" }, draft: {
            subject: "Question regarding {{topic}}", body: `Hi {{recipient_name}},

I just wanted to follow up and clarify a point regarding {{topic}}. 

Could you please provide a bit more context?

Thanks!

Best,
{{your_name}}`}
    }, generic_reminder: {
        meta: { label: "General Reminder", description: "A friendly nudge for any pending matter", category: "misc" }, draft: {
            subject: "Friendly Reminder: {{topic}}", body: `Hi {{recipient_name}},

Just a quick reminder regarding {{topic}}. 

Please let me know if you've had a chance to look into it.

Best,
{{your_name}}`}
    }, generic_appreciation: {
        meta: { label: "Appreciation Note", description: "Express gratitude for someone's effort or time", category: "misc" }, draft: {
            subject: "Appreciation: {{reason}}", body: `Hi {{recipient_name}},

I just wanted to express my appreciation for {{reason}}. Your effort has made a big difference!

Thanks again,
{{your_name}}`}
    }, generic_farewell: {
        meta: { label: "Farewell Message", description: "A message to say goodbye to a team or contact", category: "misc" }, draft: {
            subject: "Farewell and Stay in Touch!", body: `Hi Team,

As I move on to my next chapter, I wanted to say thank you for the wonderful memories and experiences we shared.

It's been a pleasure working with you all. Let's stay in touch!

You can find me on LinkedIn here: {{linkedin_link}}

Warm regards,
{{your_name}}`}
    }
}, dc = { ...Od, ...xd, ...Md, ...Dd, ...Cd, ...qd, ...Ud, ...Bd, ...kd, ...Yd, ...Gd, ...Qd }, zd = { job_career: Od, sales_business: xd, customer_support: Md, product_saas: Dd, hr_internal: Cd, meetings: qd, personal_professional: Ud, legal_admin: Bd, marketing_growth: kd, finance_operations: Yd, education: Gd, misc: Qd }, Nd = { job_career: "Job & Career", sales_business: "Sales & Business", customer_support: "Customer Support", product_saas: "Product & SaaS", hr_internal: "HR & Internal", meetings: "Meetings & Scheduling", personal_professional: "Personal & Professional", legal_admin: "Legal & Admin", marketing_growth: "Marketing & Growth", finance_operations: "Finance & Operations", education: "Education & Learning", misc: "Miscellaneous" }; function Tp({ value: A, onChange: O }) { const [C, d] = Se.useState(!1), [M, U] = Se.useState(""), [V, be] = Se.useState({}), x = Se.useRef(null); Se.useEffect(() => { function B(fe) { x.current && !x.current.contains(fe.target) && d(!1) } return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B) }, []); const T = B => { be(fe => ({ ...fe, [B]: !fe[B] })) }, Z = Se.useMemo(() => { if (!M) return zd; const B = {}, fe = M.toLowerCase(); return Object.entries(zd).forEach(([he, L]) => { const ee = Object.entries(L).filter(([xe, vt]) => vt.meta.label.toLowerCase().includes(fe) || vt.meta.description?.toLowerCase().includes(fe)); ee.length > 0 && (B[he] = Object.fromEntries(ee)) }), B }, [M]); Se.useEffect(() => { if (M) { const B = {}; Object.keys(Z).forEach(fe => { B[fe] = !0 }), be(B) } }, [M, Z]); const R = A ? dc[A] : null; return E.jsxs("div", { className: "relative mb-4", ref: x, children: [E.jsx("label", { className: "block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1", children: "Select Email Template" }), E.jsxs("button", { onClick: () => d(!C), className: "w-full flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-left hover:border-blue-500 transition-all shadow-sm", children: [E.jsxs("div", { className: "flex flex-col overflow-hidden", children: [E.jsx("span", { className: "text-sm font-medium text-gray-900 dark:text-white truncate", children: R ? R.meta.label : "Choose a template..." }), R && E.jsx("span", { className: "text-xs text-gray-500 truncate", children: Nd[R.meta.category] })] }), E.jsx("svg", { className: `w-5 h-5 text-gray-400 transition-transform ${C ? "rotate-180" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: E.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), C && E.jsxs("div", { className: "absolute z-50 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200", children: [E.jsx("div", { className: "p-3 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md", children: E.jsxs("div", { className: "relative", children: [E.jsx("svg", { className: "absolute left-3 top-2.5 h-4 w-4 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: E.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }), E.jsx("input", { type: "text", autoFocus: !0, placeholder: "Search templates...", value: M, onChange: B => U(B.target.value), className: "w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" })] }) }), E.jsx("div", { className: "max-h-80 overflow-y-auto p-1 custom-scrollbar", children: Object.keys(Z).length === 0 ? E.jsxs("div", { className: "p-8 text-center text-gray-500 text-sm", children: ['No templates found for "', M, '"'] }) : Object.entries(Z).map(([B, fe]) => E.jsxs("div", { className: "mb-1", children: [E.jsxs("button", { onClick: () => T(B), className: "w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 uppercase tracking-widest transition-colors", children: [E.jsx("span", { children: Nd[B] }), E.jsx("svg", { className: `w-3 h-3 transition-transform ${V[B] ? "rotate-180" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: E.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), V[B] && E.jsx("div", { className: "mt-1 space-y-0.5", children: Object.entries(fe).map(([he, L]) => E.jsxs("button", { onClick: () => { O(he), d(!1) }, className: `w-full group text-left px-3 py-2 rounded-lg transition-all flex flex-col ${A === he ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`, children: [E.jsxs("div", { className: "flex items-center gap-2", children: [E.jsx("span", { className: `text-sm ${A === he ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"}`, children: L.meta.label }), L.meta.isPopular && E.jsx("span", { className: "px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase leading-none", children: "Popular" })] }), L.meta.description && E.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-500 line-clamp-1 group-hover:line-clamp-none transition-all", children: L.meta.description })] }, he)) })] }, B)) })] })] }) } function Ap({ value: A, onChange: O }) { return E.jsxs("div", { className: "mb-6", children: [E.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Message" }), E.jsx("textarea", { rows: 6, value: A, onChange: C => O(C.target.value), className: "w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none font-sans text-sm placeholder-gray-400 dark:placeholder-gray-500", placeholder: "Type your message here..." })] }) } const wp = { gmail: "Gmail", outlook: "Outlook", yahoo: "Yahoo", default: "Email App" }; function jp({ onClick: A, provider: O, disabled: C }) {
    return E.jsxs("button", {
        type: "button", onClick: A, disabled: C, className: `
        flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 
        text-white text-base font-bold rounded-lg shadow-lg border border-transparent
        transition-all duration-200
        focus:ring-4 focus:ring-blue-500/30 flex items-center justify-center gap-2 cursor-pointer h-12
        disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale
      `, children: [E.jsx("span", { className: C ? "opacity-50" : "", children: "🚀" }), E.jsxs("span", { children: ["Send with ", wp[O]] })]
    })
} function Hd({ value: A, onChange: O, placeholder: C, label: d, type: M = "text" }) { return E.jsxs("div", { className: "mb-4", children: [d && E.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: d }), E.jsx("input", { type: M, value: A, placeholder: C, onChange: U => O(U.target.value), className: "w-full p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500" })] }) } const fc = [{ id: "gmail", name: "Gmail", icon: "📧", color: "text-red-500" }, { id: "outlook", name: "Outlook", icon: "🔷", color: "text-blue-500" }, { id: "yahoo", name: "Yahoo", icon: "🟣", color: "text-purple-500" }, { id: "default", name: "Default", icon: "🖥️", color: "text-gray-500" }]; function Ep({ value: A, onChange: O }) { const [C, d] = Se.useState(!1), M = Se.useRef(null), U = fc.find(V => V.id === A) || fc[0]; return Se.useEffect(() => { function V(be) { M.current && !M.current.contains(be.target) && d(!1) } return document.addEventListener("mousedown", V), () => { document.removeEventListener("mousedown", V) } }, []), E.jsxs("div", { className: "relative", ref: M, children: [E.jsxs("button", { type: "button", onClick: () => d(!C), className: "h-12 px-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 outline-none w-[140px] justify-between", children: [E.jsxs("div", { className: "flex items-center gap-2 overflow-hidden", children: [E.jsx("span", { className: "text-xl", children: U.icon }), E.jsx("span", { className: "font-semibold text-sm text-gray-700 dark:text-gray-200 truncate", children: U.name })] }), E.jsx("span", { className: "text-gray-400 text-xs", children: "▼" })] }), C && E.jsx("div", { className: "absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden z-50", children: fc.map(V => E.jsxs("button", { onClick: () => { O(V.id), d(!1) }, className: `w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${A === V.id ? "bg-blue-50 dark:bg-blue-900/30" : ""}`, children: [E.jsx("span", { className: "text-lg", children: V.icon }), E.jsx("span", { className: `text-sm font-medium ${A === V.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`, children: V.name })] }, V.id)) })] }) } function zp({ initialEmail: A }) { console.log("Initial email:", A); const [O, C] = Se.useState(A || ""), [d, M] = Se.useState(!A), [U, V] = Se.useState(() => localStorage.getItem("clicksend_provider") || "gmail"), [be, x] = Se.useState(""), [T, Z] = Se.useState(""), [R, B] = Se.useState(""); Se.useEffect(() => { if (A) { C(A), M(!1); return } if (M(!0), typeof chrome < "u" && chrome.storage && chrome.storage.local) chrome.storage.local.get(["clicksend_last_recipient"], L => { if (L && L.clicksend_last_recipient) C(L.clicksend_last_recipient); else { const ee = localStorage.getItem("clicksend_last_recipient"); ee && C(ee) } M(!1) }); else { const L = localStorage.getItem("clicksend_last_recipient"); L && C(L), M(!1) } }, [A]), Se.useEffect(() => { O && (typeof chrome < "u" && chrome.storage && chrome.storage.local && chrome.storage.local.set({ clicksend_last_recipient: O }), localStorage.setItem("clicksend_last_recipient", O)) }, [O]), Se.useEffect(() => { localStorage.setItem("clicksend_provider", U) }, [U]); const fe = L => { const ee = L; if (x(ee), ee === "custom") Z(""), B(""); else if (ee && ee in dc) { const xe = dc[ee]; Z(xe.draft.subject), B(xe.draft.body) } }, he = () => { const L = encodeURIComponent; if (U === "gmail") { const ee = new URLSearchParams; ee.append("view", "cm"), ee.append("fs", "1"), O && ee.append("to", O), T && ee.append("su", T), R && ee.append("body", R), window.open(`https://mail.google.com/mail/?${ee.toString()}`, "_blank") } else if (U === "outlook") { const ee = `https://outlook.office.com/mail/deeplink/compose?to=${L(O)}&subject=${L(T)}&body=${L(R)}`; window.open(ee, "_blank") } else if (U === "yahoo") { const ee = `https://compose.mail.yahoo.com/?to=${L(O)}&subject=${L(T)}&body=${L(R)}`; window.open(ee, "_blank") } else { const ee = `mailto:${L(O)}?subject=${L(T)}&body=${L(R)}`; window.open(ee, "_self") } }; return E.jsxs("div", { className: "flex flex-col gap-4", children: [E.jsx(Hd, { label: "Recipient", value: d ? "Loading..." : O, onChange: C, placeholder: d ? "Loading email..." : "Type the email here! Example: [EMAIL_ADDRESS]", type: "email" }), E.jsx(Tp, { value: be, onChange: fe }), E.jsx(Hd, { label: "Subject", value: T, onChange: Z, placeholder: "Email subject..." }), E.jsx(Ap, { value: R, onChange: B }), E.jsxs("div", { className: "flex gap-3 mt-2 items-center", children: [E.jsx(Ep, { value: U, onChange: V }), E.jsx(jp, { onClick: he, provider: U, disabled: !O })] })] }) } function Np({ theme: A, toggleTheme: O }) { return E.jsxs("header", { className: "mb-0 text-center relative flex flex-col items-center", children: [E.jsxs("div", { className: "absolute top-0 w-full flex justify-between items-start -mt-2", children: [O && E.jsx("button", { onClick: () => { console.log("Header toggle button clicked"), O?.() }, className: "p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full -ml-2 hover:bg-gray-200 dark:hover:bg-gray-800", title: `Switch to ${A === "dark" ? "Light" : "Dark"} Mode`, children: A === "dark" ? "☀️" : "🌙" }), E.jsx("button", { onClick: () => { document.getElementById("icon-root") ? window.close() : window.dispatchEvent(new CustomEvent("CLICKSEND_REQ_CLOSE")) }, className: "p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors text-2xl font-bold cursor-pointer -mr-2 leading-none rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 w-10 h-10 flex items-center justify-center", "aria-label": "Close", children: "×" })] }), E.jsxs("div", { className: "mt-8", children: [E.jsx("h1", { className: "text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent pb-1", children: "Open SesamE-mail" }), E.jsx("p", { className: "text-gray-500 dark:text-gray-400 text-sm font-medium", children: "Send emails faster, without thinking twice" })] })] }) } function Hp({ initialEmail: A }) { const [O, C] = Se.useState(() => localStorage.getItem("theme") ? localStorage.getItem("theme") || "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); Se.useEffect(() => { console.log("useEffect applying theme:", O), localStorage.setItem("theme", O) }, [O]); const d = () => { console.log("toggleTheme called. Current theme:", O), C(M => { const U = M === "dark" ? "light" : "dark"; return console.log("Setting theme to:", U), U }) }; return E.jsx("div", { className: `w-full h-full flex flex-col font-sans overflow-hidden relative transition-colors duration-200 ${O === "dark" ? "dark" : ""}`, children: E.jsxs("div", { className: "w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white", children: [E.jsx("div", { className: "border-b border-gray-200 dark:border-gray-800 p-6 pb-4 shrink-0 transition-colors", children: E.jsx(Np, { theme: O, toggleTheme: d }) }), E.jsx("div", { className: "flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin", children: E.jsx(zp, { initialEmail: A }) })] }) }) } const yc = (A, O) => { const C = document.getElementById(A); C ? Sp.createRoot(C).render(E.jsx(Se.StrictMode, { children: E.jsx(Hp, { initialEmail: O }) })) : console.error(`Root element #${A} not found`) }; document.getElementById("icon-root") && yc("icon-root"); const Rd = document.getElementById("clicksend-root"); Rd && yc("clicksend-root", Rd.dataset.initialEmail); window.addEventListener("CLICKSEND_SHOULD_MOUNT", A => { const O = A.detail; console.log("Received CLICKSEND_SHOULD_MOUNT event", O), yc(O.containerId, O.email) });
