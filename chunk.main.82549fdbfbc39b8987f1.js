/*! For license information please see chunk.main.82549fdbfbc39b8987f1.js.LICENSE */
(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [0],
    [
        function (e, t) {
            var n = {};
            (n.MathJax = n),
                document.getElementById &&
                    document.childNodes &&
                    document.createElement &&
                    ((n && n.Hub) ||
                        ((n.isPacked = !0),
                        (n.version = "2.7.5"),
                        (n.fileversion = "2.7.5"),
                        (n.cdnVersion = "2.7.5"),
                        (n.cdnFileVersions = {}),
                        (function (e) {
                            var t = n[e];
                            t || (t = n[e] = {});
                            var i = [],
                                o = function (e) {
                                    var t = e.constructor;
                                    for (var n in (t || (t = function () {}),
                                    e))
                                        "constructor" !== n &&
                                            e.hasOwnProperty(n) &&
                                            (t[n] = e[n]);
                                    return t;
                                };
                            (t.Object = o({
                                constructor: function () {
                                    return arguments.callee.Init.call(
                                        this,
                                        arguments
                                    );
                                },
                                Subclass: function (e, t) {
                                    var n = function () {
                                        return arguments.callee.Init.call(
                                            this,
                                            arguments
                                        );
                                    };
                                    return (
                                        (n.SUPER = this),
                                        (n.Init = this.Init),
                                        (n.Subclass = this.Subclass),
                                        (n.Augment = this.Augment),
                                        (n.protoFunction = this.protoFunction),
                                        (n.can = this.can),
                                        (n.has = this.has),
                                        (n.isa = this.isa),
                                        (n.prototype = new this(i)),
                                        (n.prototype.constructor = n),
                                        n.Augment(e, t),
                                        n
                                    );
                                },
                                Init: function (e) {
                                    var t = this;
                                    return 1 === e.length && e[0] === i
                                        ? t
                                        : (t instanceof e.callee ||
                                              (t = new e.callee(i)),
                                          t.Init.apply(t, e) || t);
                                },
                                Augment: function (e, t) {
                                    var n;
                                    if (null != e) {
                                        for (n in e)
                                            e.hasOwnProperty(n) &&
                                                this.protoFunction(n, e[n]);
                                        e.toString !==
                                            this.prototype.toString &&
                                            e.toString !== {}.toString &&
                                            this.protoFunction(
                                                "toString",
                                                e.toString
                                            );
                                    }
                                    if (null != t)
                                        for (n in t)
                                            t.hasOwnProperty(n) &&
                                                (this[n] = t[n]);
                                    return this;
                                },
                                protoFunction: function (e, t) {
                                    (this.prototype[e] = t),
                                        "function" === typeof t &&
                                            (t.SUPER = this.SUPER.prototype);
                                },
                                prototype: {
                                    Init: function () {},
                                    SUPER: function (e) {
                                        return e.callee.SUPER;
                                    },
                                    can: function (e) {
                                        return "function" === typeof this[e];
                                    },
                                    has: function (e) {
                                        return "undefined" !== typeof this[e];
                                    },
                                    isa: function (e) {
                                        return (
                                            e instanceof Object &&
                                            this instanceof e
                                        );
                                    },
                                },
                                can: function (e) {
                                    return this.prototype.can.call(this, e);
                                },
                                has: function (e) {
                                    return this.prototype.has.call(this, e);
                                },
                                isa: function (e) {
                                    for (var t = this; t; ) {
                                        if (t === e) return !0;
                                        t = t.SUPER;
                                    }
                                    return !1;
                                },
                                SimpleSUPER: o({
                                    constructor: function (e) {
                                        return this.SimpleSUPER.define(e);
                                    },
                                    define: function (e) {
                                        var t = {};
                                        if (null != e) {
                                            for (var n in e)
                                                e.hasOwnProperty(n) &&
                                                    (t[n] = this.wrap(n, e[n]));
                                            e.toString !==
                                                this.prototype.toString &&
                                                e.toString !== {}.toString &&
                                                (t.toString = this.wrap(
                                                    "toString",
                                                    e.toString
                                                ));
                                        }
                                        return t;
                                    },
                                    wrap: function (e, t) {
                                        if (
                                            "function" !== typeof t ||
                                            !t
                                                .toString()
                                                .match(/\.\s*SUPER\s*\(/)
                                        )
                                            return t;
                                        var n = function n() {
                                            this.SUPER = n.SUPER[e];
                                            try {
                                                var i = t.apply(
                                                    this,
                                                    arguments
                                                );
                                            } catch (o) {
                                                throw (delete this.SUPER, o);
                                            }
                                            return delete this.SUPER, i;
                                        };
                                        return (
                                            (n.toString = function () {
                                                return t.toString.apply(
                                                    t,
                                                    arguments
                                                );
                                            }),
                                            n
                                        );
                                    },
                                }),
                            })),
                                (t.Object.isArray =
                                    Array.isArray ||
                                    function (e) {
                                        return (
                                            "[object Array]" ===
                                            Object.prototype.toString.call(e)
                                        );
                                    }),
                                (t.Object.Array = Array);
                        })("MathJax"),
                        (function (e) {
                            var t = n.MathJax;
                            t || (t = n.MathJax = {});
                            var i = t.Object.isArray,
                                o = function e(t) {
                                    var n = function () {
                                        return arguments.callee.execute.apply(
                                            arguments.callee,
                                            arguments
                                        );
                                    };
                                    for (var i in e.prototype)
                                        e.prototype.hasOwnProperty(i) &&
                                            (n[i] =
                                                "undefined" !== typeof t[i]
                                                    ? t[i]
                                                    : e.prototype[i]);
                                    return (
                                        (n.toString = e.prototype.toString), n
                                    );
                                };
                            o.prototype = {
                                isCallback: !0,
                                hook: function () {},
                                data: [],
                                object: window,
                                execute: function () {
                                    if (!this.called || this.autoReset)
                                        return (
                                            (this.called = !this.autoReset),
                                            this.hook.apply(
                                                this.object,
                                                this.data.concat(
                                                    [].slice.call(arguments, 0)
                                                )
                                            )
                                        );
                                },
                                reset: function () {
                                    delete this.called;
                                },
                                toString: function () {
                                    return this.hook.toString.apply(
                                        this.hook,
                                        arguments
                                    );
                                },
                            };
                            var r = function (e) {
                                    return (
                                        "function" === typeof e && e.isCallback
                                    );
                                },
                                s = function (e) {
                                    return eval.call(window, e);
                                },
                                a = function () {
                                    if (
                                        (s("var __TeSt_VaR__ = 1"),
                                        window.__TeSt_VaR__)
                                    )
                                        try {
                                            delete window.__TeSt_VaR__;
                                        } catch (e) {
                                            window.__TeSt_VaR__ = null;
                                        }
                                    else
                                        s = window.execScript
                                            ? function (e) {
                                                  (t.__code = e),
                                                      (e =
                                                          "try {MathJax.__result = eval(MathJax.__code)} catch(err) {MathJax.__result = err}"),
                                                      window.execScript(e);
                                                  var n = t.__result;
                                                  if (
                                                      (delete t.__result,
                                                      delete t.__code,
                                                      n instanceof Error)
                                                  )
                                                      throw n;
                                                  return n;
                                              }
                                            : function (e) {
                                                  (t.__code = e),
                                                      (e =
                                                          "try {MathJax.__result = eval(MathJax.__code)} catch(err) {MathJax.__result = err}");
                                                  var n =
                                                      document.getElementsByTagName(
                                                          "head"
                                                      )[0];
                                                  n || (n = document.body);
                                                  var i =
                                                      document.createElement(
                                                          "script"
                                                      );
                                                  i.appendChild(
                                                      document.createTextNode(e)
                                                  ),
                                                      n.appendChild(i),
                                                      n.removeChild(i);
                                                  var o = t.__result;
                                                  if (
                                                      (delete t.__result,
                                                      delete t.__code,
                                                      o instanceof Error)
                                                  )
                                                      throw o;
                                                  return o;
                                              };
                                    a = null;
                                },
                                l = function (e, t) {
                                    if (
                                        (arguments.length > 1 &&
                                            (e =
                                                2 === arguments.length &&
                                                "function" !==
                                                    typeof arguments[0] &&
                                                arguments[0] instanceof
                                                    Object &&
                                                "number" === typeof arguments[1]
                                                    ? [].slice.call(e, t)
                                                    : [].slice.call(
                                                          arguments,
                                                          0
                                                      )),
                                        i(e) &&
                                            1 === e.length &&
                                            "function" === typeof e[0] &&
                                            (e = e[0]),
                                        "function" === typeof e)
                                    )
                                        return e.execute === o.prototype.execute
                                            ? e
                                            : o({ hook: e });
                                    if (i(e)) {
                                        if (
                                            "string" === typeof e[0] &&
                                            e[1] instanceof Object &&
                                            "function" === typeof e[1][e[0]]
                                        )
                                            return o({
                                                hook: e[1][e[0]],
                                                object: e[1],
                                                data: e.slice(2),
                                            });
                                        if ("function" === typeof e[0])
                                            return o({
                                                hook: e[0],
                                                data: e.slice(1),
                                            });
                                        if ("function" === typeof e[1])
                                            return o({
                                                hook: e[1],
                                                object: e[0],
                                                data: e.slice(2),
                                            });
                                    } else {
                                        if ("string" === typeof e)
                                            return (
                                                a && a(),
                                                o({ hook: s, data: [e] })
                                            );
                                        if (e instanceof Object) return o(e);
                                        if ("undefined" === typeof e)
                                            return o({});
                                    }
                                    throw Error(
                                        "Can't make callback from given data"
                                    );
                                },
                                u = function (e, t) {
                                    (e = l(e)).called || (h(e, t), t.pending++);
                                },
                                c = function () {
                                    var e = this.signal;
                                    delete this.signal,
                                        (this.execute = this.oldExecute),
                                        delete this.oldExecute;
                                    var t = this.execute.apply(this, arguments);
                                    if (r(t) && !t.called) h(t, e);
                                    else
                                        for (
                                            var n = 0, i = e.length;
                                            n < i;
                                            n++
                                        )
                                            e[n].pending--,
                                                e[n].pending <= 0 &&
                                                    e[n].call();
                                },
                                h = function (e, t) {
                                    i(t) || (t = [t]),
                                        e.signal
                                            ? 1 === t.length
                                                ? e.signal.push(t[0])
                                                : (e.signal =
                                                      e.signal.concat(t))
                                            : ((e.oldExecute = e.execute),
                                              (e.execute = c),
                                              (e.signal = t));
                                },
                                d = function (e) {
                                    (e = l(e)).pending = 0;
                                    for (
                                        var t = 1, n = arguments.length;
                                        t < n;
                                        t++
                                    )
                                        arguments[t] && u(arguments[t], e);
                                    if (0 === e.pending) {
                                        var i = e();
                                        r(i) && (e = i);
                                    }
                                    return e;
                                },
                                p = n.Object.Subclass({
                                    Init: function (e) {
                                        (this.hooks = []),
                                            (this.remove = []),
                                            (this.reset = e),
                                            (this.running = !1);
                                    },
                                    Add: function (e, t) {
                                        null == t && (t = 10),
                                            r(e) || (e = l(e)),
                                            (e.priority = t);
                                        for (
                                            var n = this.hooks.length;
                                            n > 0 &&
                                            t < this.hooks[n - 1].priority;

                                        )
                                            n--;
                                        return this.hooks.splice(n, 0, e), e;
                                    },
                                    Remove: function (e) {
                                        for (
                                            var t = 0, n = this.hooks.length;
                                            t < n;
                                            t++
                                        )
                                            if (this.hooks[t] === e)
                                                return void (this.running
                                                    ? this.remove.push(t)
                                                    : this.hooks.splice(t, 1));
                                    },
                                    Execute: function () {
                                        var e = [{}];
                                        this.running = !0;
                                        for (
                                            var t = 0, n = this.hooks.length;
                                            t < n;
                                            t++
                                        ) {
                                            this.reset && this.hooks[t].reset();
                                            var i = this.hooks[t].apply(
                                                window,
                                                arguments
                                            );
                                            r(i) && !i.called && e.push(i);
                                        }
                                        return (
                                            (this.running = !1),
                                            this.remove.length &&
                                                this.RemovePending(),
                                            1 === e.length
                                                ? null
                                                : 2 === e.length
                                                ? e[1]
                                                : d.apply({}, e)
                                        );
                                    },
                                    RemovePending: function () {
                                        this.remove = this.remove.sort();
                                        for (
                                            var e = this.remove.length - 1;
                                            e >= 0;
                                            e--
                                        )
                                            this.hooks.splice(e, 1);
                                        this.remove = [];
                                    },
                                }),
                                f = t.Object.Subclass({
                                    Init: function () {
                                        (this.pending = this.running = 0),
                                            (this.queue = []),
                                            this.Push.apply(this, arguments);
                                    },
                                    Push: function () {
                                        for (
                                            var e, t = 0, n = arguments.length;
                                            t < n;
                                            t++
                                        )
                                            (e = l(arguments[t])) !==
                                                arguments[t] ||
                                                e.called ||
                                                (e = l(["wait", this, e])),
                                                this.queue.push(e);
                                        return (
                                            this.running ||
                                                this.pending ||
                                                this.Process(),
                                            e
                                        );
                                    },
                                    Process: function (e) {
                                        for (
                                            ;
                                            !this.running &&
                                            !this.pending &&
                                            this.queue.length;

                                        ) {
                                            var t = this.queue[0];
                                            (e = this.queue.slice(1)),
                                                (this.queue = []),
                                                this.Suspend();
                                            var n = t();
                                            this.Resume(),
                                                e.length &&
                                                    (this.queue = e.concat(
                                                        this.queue
                                                    )),
                                                r(n) && !n.called && u(n, this);
                                        }
                                    },
                                    Suspend: function () {
                                        this.running++;
                                    },
                                    Resume: function () {
                                        this.running && this.running--;
                                    },
                                    call: function () {
                                        this.Process.apply(this, arguments);
                                    },
                                    wait: function (e) {
                                        return e;
                                    },
                                }),
                                m = f.Subclass(
                                    {
                                        Init: function (e) {
                                            f.prototype.Init.call(this),
                                                (this.name = e),
                                                (this.posted = []),
                                                (this.listeners = p(!0)),
                                                (this.posting = !1),
                                                (this.callback = null);
                                        },
                                        Post: function (e, t, n) {
                                            if (
                                                ((t = l(t)),
                                                this.posting || this.pending)
                                            )
                                                this.Push([
                                                    "Post",
                                                    this,
                                                    e,
                                                    t,
                                                    n,
                                                ]);
                                            else {
                                                (this.callback = t),
                                                    t.reset(),
                                                    n || this.posted.push(e),
                                                    this.Suspend(),
                                                    (this.posting = !0);
                                                var i =
                                                    this.listeners.Execute(e);
                                                r(i) && !i.called && u(i, this),
                                                    this.Resume(),
                                                    (this.posting = !1),
                                                    this.pending || this.call();
                                            }
                                            return t;
                                        },
                                        Clear: function (e) {
                                            return (
                                                (e = l(e)),
                                                this.posting || this.pending
                                                    ? (e = this.Push([
                                                          "Clear",
                                                          this,
                                                          e,
                                                      ]))
                                                    : ((this.posted = []), e()),
                                                e
                                            );
                                        },
                                        call: function () {
                                            this.callback(this), this.Process();
                                        },
                                        Interest: function (e, t, n) {
                                            if (
                                                ((e = l(e)),
                                                this.listeners.Add(e, n),
                                                !t)
                                            )
                                                for (
                                                    var i = 0,
                                                        o = this.posted.length;
                                                    i < o;
                                                    i++
                                                ) {
                                                    e.reset();
                                                    var s = e(this.posted[i]);
                                                    r(s) &&
                                                        i ===
                                                            this.posted.length -
                                                                1 &&
                                                        u(s, this);
                                                }
                                            return e;
                                        },
                                        NoInterest: function (e) {
                                            this.listeners.Remove(e);
                                        },
                                        MessageHook: function (e, t, n) {
                                            (t = l(t)),
                                                this.hooks ||
                                                    ((this.hooks = {}),
                                                    this.Interest([
                                                        "ExecuteHooks",
                                                        this,
                                                    ])),
                                                this.hooks[e] ||
                                                    (this.hooks[e] = p(!0)),
                                                this.hooks[e].Add(t, n);
                                            for (
                                                var i = 0,
                                                    o = this.posted.length;
                                                i < o;
                                                i++
                                            )
                                                this.posted[i] == e &&
                                                    (t.reset(),
                                                    t(this.posted[i]));
                                            return (t.msg = e), t;
                                        },
                                        ExecuteHooks: function (e) {
                                            var t = i(e) ? e[0] : e;
                                            return this.hooks[t]
                                                ? this.hooks[t].Execute(e)
                                                : null;
                                        },
                                        RemoveHook: function (e) {
                                            this.hooks[e.msg].Remove(e);
                                        },
                                    },
                                    {
                                        signals: {},
                                        find: function (e) {
                                            return (
                                                m.signals[e] ||
                                                    (m.signals[e] = new m(e)),
                                                m.signals[e]
                                            );
                                        },
                                    }
                                );
                            (t.Callback = t.CallBack = l),
                                (t.Callback.Delay = function (e, t) {
                                    return (
                                        ((t = l(t)).timeout = setTimeout(t, e)),
                                        t
                                    );
                                }),
                                (t.Callback.After = d),
                                (t.Callback.Queue = f),
                                (t.Callback.Signal = m.find),
                                (t.Callback.Hooks = p),
                                (t.Callback.ExecuteHooks = function (e, t, n) {
                                    if (!e) return null;
                                    i(e) || (e = [e]),
                                        i(t) || (t = null == t ? [] : [t]);
                                    for (
                                        var o = p(n), r = 0, s = e.length;
                                        r < s;
                                        r++
                                    )
                                        o.Add(e[r]);
                                    return o.Execute.apply(o, t);
                                });
                        })(),
                        (function (e) {
                            var t = n[e];
                            t || (t = n[e] = {});
                            var i =
                                    "Apple Computer, Inc." ===
                                        navigator.vendor &&
                                    "undefined" === typeof navigator.vendorSub,
                                o = 0,
                                r = function (e) {
                                    return (
                                        document.styleSheets &&
                                            document.styleSheets.length > o &&
                                            (o = document.styleSheets.length),
                                        e ||
                                            (e =
                                                document.head ||
                                                document.getElementsByTagName(
                                                    "head"
                                                )[0]) ||
                                            (e = document.body),
                                        e
                                    );
                                },
                                s = [],
                                a = function () {
                                    for (var e = 0, n = s.length; e < n; e++)
                                        t.Ajax.head.removeChild(s[e]);
                                    s = [];
                                },
                                l = {
                                    MathJax: "",
                                    a11y: "[MathJax]/extensions/a11y",
                                    Contrib:
                                        "https://cdn.mathjax.org/mathjax/contrib",
                                };
                            t.Ajax = {
                                loaded: {},
                                loading: {},
                                loadHooks: {},
                                timeout: 15e3,
                                styleDelay: 1,
                                config: { root: "", path: l },
                                params: {},
                                STATUS: { OK: 1, ERROR: -1 },
                                fileURL: function (e) {
                                    for (
                                        var t;
                                        (t = e.match(/^\[([-._a-z0-9]+)\]/i)) &&
                                        l.hasOwnProperty(t[1]);

                                    )
                                        e =
                                            (l[t[1]] || this.config.root) +
                                            e.substr(t[1].length + 2);
                                    return e;
                                },
                                fileName: function (t) {
                                    var n = this.config.root;
                                    t.substr(0, n.length) === n &&
                                        (t =
                                            "[" + e + "]" + t.substr(n.length));
                                    do {
                                        var i = !1;
                                        for (var o in l)
                                            if (
                                                l.hasOwnProperty(o) &&
                                                l[o] &&
                                                t.substr(0, l[o].length) ===
                                                    l[o]
                                            ) {
                                                (t =
                                                    "[" +
                                                    o +
                                                    "]" +
                                                    t.substr(l[o].length)),
                                                    (i = !0);
                                                break;
                                            }
                                    } while (i);
                                    return t;
                                },
                                fileRev: function (e) {
                                    var n =
                                        t.cdnFileVersions[e] ||
                                        t.cdnVersion ||
                                        "";
                                    return n && (n = "?V=" + n), n;
                                },
                                urlRev: function (e) {
                                    return this.fileURL(e) + this.fileRev(e);
                                },
                                Require: function (e, n) {
                                    var i;
                                    if (
                                        ((n = t.Callback(n)),
                                        e instanceof Object)
                                    )
                                        for (var o in e)
                                            e.hasOwnProperty(o) &&
                                                ((i = o.toUpperCase()),
                                                (e = e[o]));
                                    else i = e.split(/\./).pop().toUpperCase();
                                    if (
                                        this.params.noContrib &&
                                        "[Contrib]" === e.substr(0, 9)
                                    )
                                        n(this.STATUS.ERROR);
                                    else if (
                                        ((e = this.fileURL(e)), this.loaded[e])
                                    )
                                        n(this.loaded[e]);
                                    else {
                                        var r = {};
                                        (r[i] = e), this.Load(r, n);
                                    }
                                    return n;
                                },
                                Load: function (e, n) {
                                    var i;
                                    if (
                                        ((n = t.Callback(n)),
                                        e instanceof Object)
                                    )
                                        for (var o in e)
                                            e.hasOwnProperty(o) &&
                                                ((i = o.toUpperCase()),
                                                (e = e[o]));
                                    else i = e.split(/\./).pop().toUpperCase();
                                    if (
                                        ((e = this.fileURL(e)), this.loading[e])
                                    )
                                        this.addHook(e, n);
                                    else {
                                        if (
                                            ((this.head = r(this.head)),
                                            !this.loader[i])
                                        )
                                            throw Error(
                                                "Can't load files of type " + i
                                            );
                                        this.loader[i].call(this, e, n);
                                    }
                                    return n;
                                },
                                LoadHook: function (e, n, i) {
                                    if (
                                        ((n = t.Callback(n)),
                                        e instanceof Object)
                                    )
                                        for (var o in e)
                                            e.hasOwnProperty(o) && (e = e[o]);
                                    return (
                                        (e = this.fileURL(e)),
                                        this.loaded[e]
                                            ? n(this.loaded[e])
                                            : this.addHook(e, n, i),
                                        n
                                    );
                                },
                                addHook: function (e, t, i) {
                                    this.loadHooks[e] ||
                                        (this.loadHooks[e] =
                                            n.Callback.Hooks()),
                                        this.loadHooks[e].Add(t, i),
                                        (t.file = e);
                                },
                                removeHook: function (e) {
                                    this.loadHooks[e.file] &&
                                        (this.loadHooks[e.file].Remove(e),
                                        this.loadHooks[e.file].hooks.length ||
                                            delete this.loadHooks[e.file]);
                                },
                                Preloading: function () {
                                    for (
                                        var e = 0, t = arguments.length;
                                        e < t;
                                        e++
                                    ) {
                                        var n = this.fileURL(arguments[e]);
                                        this.loading[n] ||
                                            (this.loading[n] = {
                                                preloaded: !0,
                                            });
                                    }
                                },
                                loader: {
                                    JS: function (e, n) {
                                        var i = this.fileName(e),
                                            o =
                                                document.createElement(
                                                    "script"
                                                ),
                                            r = t.Callback([
                                                "loadTimeout",
                                                this,
                                                e,
                                            ]);
                                        (this.loading[e] = {
                                            callback: n,
                                            timeout: setTimeout(
                                                r,
                                                this.timeout
                                            ),
                                            status: this.STATUS.OK,
                                            script: o,
                                        }),
                                            (this.loading[e].message =
                                                t.Message.File(i)),
                                            (o.onerror = r),
                                            (o.type = "text/javascript"),
                                            (o.src = e + this.fileRev(i)),
                                            this.head.appendChild(o);
                                    },
                                    CSS: function (e, n) {
                                        var i = this.fileName(e),
                                            o = document.createElement("link");
                                        (o.rel = "stylesheet"),
                                            (o.type = "text/css"),
                                            (o.href = e + this.fileRev(i)),
                                            (this.loading[e] = {
                                                callback: n,
                                                message: t.Message.File(i),
                                                status: this.STATUS.OK,
                                            }),
                                            this.head.appendChild(o),
                                            this.timer.create.call(
                                                this,
                                                [this.timer.file, e],
                                                o
                                            );
                                    },
                                },
                                timer: {
                                    create: function (e, n) {
                                        return (
                                            (e = t.Callback(e)),
                                            "STYLE" === n.nodeName &&
                                            n.styleSheet &&
                                            "undefined" !==
                                                typeof n.styleSheet.cssText
                                                ? e(this.STATUS.OK)
                                                : window.chrome &&
                                                  "LINK" === n.nodeName
                                                ? e(this.STATUS.OK)
                                                : i
                                                ? this.timer.start(
                                                      this,
                                                      [
                                                          this.timer
                                                              .checkSafari2,
                                                          o++,
                                                          e,
                                                      ],
                                                      this.styleDelay
                                                  )
                                                : this.timer.start(
                                                      this,
                                                      [
                                                          this.timer
                                                              .checkLength,
                                                          n,
                                                          e,
                                                      ],
                                                      this.styleDelay
                                                  ),
                                            e
                                        );
                                    },
                                    start: function (e, n, i, o) {
                                        ((n = t.Callback(n)).execute =
                                            this.execute),
                                            (n.time = this.time),
                                            (n.STATUS = e.STATUS),
                                            (n.timeout = o || e.timeout),
                                            (n.delay = n.total = i || 0),
                                            i ? setTimeout(n, i) : n();
                                    },
                                    time: function (e) {
                                        return (
                                            (this.total += this.delay),
                                            (this.delay = Math.floor(
                                                1.05 * this.delay + 5
                                            )),
                                            this.total >= this.timeout
                                                ? (e(this.STATUS.ERROR), 1)
                                                : 0
                                        );
                                    },
                                    file: function (e, n) {
                                        n < 0
                                            ? t.Ajax.loadTimeout(e)
                                            : t.Ajax.loadComplete(e);
                                    },
                                    execute: function () {
                                        this.hook.call(
                                            this.object,
                                            this,
                                            this.data[0],
                                            this.data[1]
                                        );
                                    },
                                    checkSafari2: function (e, t, n) {
                                        e.time(n) ||
                                            (document.styleSheets.length > t &&
                                            document.styleSheets[t].cssRules &&
                                            document.styleSheets[t].cssRules
                                                .length
                                                ? n(e.STATUS.OK)
                                                : setTimeout(e, e.delay));
                                    },
                                    checkLength: function (e, n, i) {
                                        if (!e.time(i)) {
                                            var o = 0,
                                                r = n.sheet || n.styleSheet;
                                            try {
                                                (r.cssRules || r.rules || [])
                                                    .length > 0 && (o = 1);
                                            } catch (s) {
                                                s.message.match(
                                                    /protected variable|restricted URI/
                                                )
                                                    ? (o = 1)
                                                    : s.message.match(
                                                          /Security error/
                                                      ) && (o = 1);
                                            }
                                            o
                                                ? setTimeout(
                                                      t.Callback([
                                                          i,
                                                          e.STATUS.OK,
                                                      ]),
                                                      0
                                                  )
                                                : setTimeout(e, e.delay);
                                        }
                                    },
                                },
                                loadComplete: function (e) {
                                    e = this.fileURL(e);
                                    var n = this.loading[e];
                                    return (
                                        n && !n.preloaded
                                            ? (t.Message.Clear(n.message),
                                              clearTimeout(n.timeout),
                                              n.script &&
                                                  (0 === s.length &&
                                                      setTimeout(a, 0),
                                                  s.push(n.script)),
                                              (this.loaded[e] = n.status),
                                              delete this.loading[e],
                                              this.addHook(e, n.callback))
                                            : (n && delete this.loading[e],
                                              (this.loaded[e] = this.STATUS.OK),
                                              (n = { status: this.STATUS.OK })),
                                        this.loadHooks[e]
                                            ? this.loadHooks[e].Execute(
                                                  n.status
                                              )
                                            : null
                                    );
                                },
                                loadTimeout: function (e) {
                                    this.loading[e].timeout &&
                                        clearTimeout(this.loading[e].timeout),
                                        (this.loading[e].status =
                                            this.STATUS.ERROR),
                                        this.loadError(e),
                                        this.loadComplete(e);
                                },
                                loadError: function (e) {
                                    t.Message.Set(
                                        [
                                            "LoadFailed",
                                            "File failed to load: %1",
                                            e,
                                        ],
                                        null,
                                        2e3
                                    ),
                                        t.Hub.signal.Post([
                                            "file load error",
                                            e,
                                        ]);
                                },
                                Styles: function (e, n) {
                                    var i = this.StyleString(e);
                                    if ("" === i) (n = t.Callback(n))();
                                    else {
                                        var o = document.createElement("style");
                                        (o.type = "text/css"),
                                            (this.head = r(this.head)),
                                            this.head.appendChild(o),
                                            o.styleSheet &&
                                            "undefined" !==
                                                typeof o.styleSheet.cssText
                                                ? (o.styleSheet.cssText = i)
                                                : o.appendChild(
                                                      document.createTextNode(i)
                                                  ),
                                            (n = this.timer.create.call(
                                                this,
                                                n,
                                                o
                                            ));
                                    }
                                    return n;
                                },
                                StyleString: function (e) {
                                    if ("string" === typeof e) return e;
                                    var n,
                                        i,
                                        o = "";
                                    for (n in e)
                                        if (e.hasOwnProperty(n))
                                            if ("string" === typeof e[n])
                                                o += n + " {" + e[n] + "}\n";
                                            else if (t.Object.isArray(e[n]))
                                                for (
                                                    var r = 0;
                                                    r < e[n].length;
                                                    r++
                                                )
                                                    ((i = {})[n] = e[n][r]),
                                                        (o +=
                                                            this.StyleString(
                                                                i
                                                            ));
                                            else if (
                                                "@media" === n.substr(0, 6)
                                            )
                                                o +=
                                                    n +
                                                    " {" +
                                                    this.StyleString(e[n]) +
                                                    "}\n";
                                            else if (null != e[n]) {
                                                for (var s in ((i = []), e[n]))
                                                    e[n].hasOwnProperty(s) &&
                                                        null != e[n][s] &&
                                                        (i[i.length] =
                                                            s + ": " + e[n][s]);
                                                o +=
                                                    n +
                                                    " {" +
                                                    i.join("; ") +
                                                    "}\n";
                                            }
                                    return o;
                                },
                            };
                        })("MathJax"),
                        (n.HTML = {
                            Element: function (e, t, i) {
                                var o,
                                    r = document.createElement(e);
                                if (t) {
                                    if (t.hasOwnProperty("style")) {
                                        var s = t.style;
                                        for (o in ((t.style = {}), s))
                                            s.hasOwnProperty(o) &&
                                                (t.style[
                                                    o.replace(
                                                        /-([a-z])/g,
                                                        this.ucMatch
                                                    )
                                                ] = s[o]);
                                    }
                                    for (o in (n.Hub.Insert(r, t), t))
                                        ("role" !== o &&
                                            "aria-" !== o.substr(0, 5)) ||
                                            r.setAttribute(o, t[o]);
                                }
                                if (i) {
                                    n.Object.isArray(i) || (i = [i]);
                                    for (var a = 0, l = i.length; a < l; a++)
                                        n.Object.isArray(i[a])
                                            ? r.appendChild(
                                                  this.Element(
                                                      i[a][0],
                                                      i[a][1],
                                                      i[a][2]
                                                  )
                                              )
                                            : "script" === e
                                            ? this.setScript(r, i[a])
                                            : r.appendChild(
                                                  document.createTextNode(i[a])
                                              );
                                }
                                return r;
                            },
                            ucMatch: function (e, t) {
                                return t.toUpperCase();
                            },
                            addElement: function (e, t, n, i) {
                                return e.appendChild(this.Element(t, n, i));
                            },
                            TextNode: function (e) {
                                return document.createTextNode(e);
                            },
                            addText: function (e, t) {
                                return e.appendChild(this.TextNode(t));
                            },
                            setScript: function (e, t) {
                                if (this.setScriptBug) e.text = t;
                                else {
                                    for (; e.firstChild; )
                                        e.removeChild(e.firstChild);
                                    this.addText(e, t);
                                }
                            },
                            getScript: function (e) {
                                return ("" === e.text ? e.innerHTML : e.text)
                                    .replace(/^\s+/, "")
                                    .replace(/\s+$/, "");
                            },
                            Cookie: {
                                prefix: "mjx",
                                expires: 365,
                                Set: function (e, t) {
                                    var n = [];
                                    if (t)
                                        for (var i in t)
                                            t.hasOwnProperty(i) &&
                                                n.push(
                                                    i +
                                                        ":" +
                                                        t[i]
                                                            .toString()
                                                            .replace(/&/g, "&&")
                                                );
                                    var o =
                                        this.prefix +
                                        "." +
                                        e +
                                        "=" +
                                        escape(n.join("&;"));
                                    if (this.expires) {
                                        var r = new Date();
                                        r.setDate(r.getDate() + this.expires),
                                            (o +=
                                                "; expires=" + r.toGMTString());
                                    }
                                    try {
                                        document.cookie = o + "; path=/";
                                    } catch (s) {}
                                },
                                Get: function (e, t) {
                                    t || (t = {});
                                    var n,
                                        i = new RegExp(
                                            "(?:^|;\\s*)" +
                                                this.prefix +
                                                "\\." +
                                                e +
                                                "=([^;]*)(?:;|$)"
                                        );
                                    try {
                                        n = i.exec(document.cookie);
                                    } catch (l) {}
                                    if (n && "" !== n[1])
                                        for (
                                            var o = unescape(n[1]).split("&;"),
                                                r = 0,
                                                s = o.length;
                                            r < s;
                                            r++
                                        ) {
                                            var a = (n =
                                                o[r].match(
                                                    /([^:]+):(.*)/
                                                ))[2].replace(/&&/g, "&");
                                            "true" === a
                                                ? (a = !0)
                                                : "false" === a
                                                ? (a = !1)
                                                : a.match(
                                                      /^-?(\d+(\.\d+)?|\.\d+)$/
                                                  ) && (a = parseFloat(a)),
                                                (t[n[1]] = a);
                                        }
                                    return t;
                                },
                            },
                        }),
                        (n.Localization = {
                            locale: "en",
                            directory: "[MathJax]/localization",
                            strings: {
                                ar: {
                                    menuTitle:
                                        "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                                },
                                ast: { menuTitle: "asturianu" },
                                bg: {
                                    menuTitle:
                                        "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
                                },
                                bcc: {
                                    menuTitle: "\u0628\u0644\u0648\u0686\u06cc",
                                },
                                br: { menuTitle: "brezhoneg" },
                                ca: { menuTitle: "catal\xe0" },
                                cdo: {
                                    menuTitle:
                                        "M\xecng-d\u0115\u0324ng-ng\u1e73\u0304",
                                },
                                cs: { menuTitle: "\u010de\u0161tina" },
                                da: { menuTitle: "dansk" },
                                de: { menuTitle: "Deutsch" },
                                diq: { menuTitle: "Zazaki" },
                                en: { menuTitle: "English", isLoaded: !0 },
                                eo: { menuTitle: "Esperanto" },
                                es: { menuTitle: "espa\xf1ol" },
                                fa: {
                                    menuTitle: "\u0641\u0627\u0631\u0633\u06cc",
                                },
                                fi: { menuTitle: "suomi" },
                                fr: { menuTitle: "fran\xe7ais" },
                                gl: { menuTitle: "galego" },
                                he: {
                                    menuTitle: "\u05e2\u05d1\u05e8\u05d9\u05ea",
                                },
                                ia: { menuTitle: "interlingua" },
                                it: { menuTitle: "italiano" },
                                ja: { menuTitle: "\u65e5\u672c\u8a9e" },
                                kn: {
                                    menuTitle: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
                                },
                                ko: { menuTitle: "\ud55c\uad6d\uc5b4" },
                                lb: { menuTitle: "L\xebtzebuergesch" },
                                lki: { menuTitle: "\u0644\u06d5\u06a9\u06cc" },
                                lt: { menuTitle: "lietuvi\u0173" },
                                mk: {
                                    menuTitle:
                                        "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
                                },
                                nl: { menuTitle: "Nederlands" },
                                oc: { menuTitle: "occitan" },
                                pl: { menuTitle: "polski" },
                                pt: { menuTitle: "portugu\xeas" },
                                "pt-br": {
                                    menuTitle: "portugu\xeas do Brasil",
                                },
                                ru: {
                                    menuTitle:
                                        "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
                                },
                                sco: { menuTitle: "Scots" },
                                scn: { menuTitle: "sicilianu" },
                                sk: { menuTitle: "sloven\u010dina" },
                                sl: { menuTitle: "sloven\u0161\u010dina" },
                                sv: { menuTitle: "svenska" },
                                th: { menuTitle: "\u0e44\u0e17\u0e22" },
                                tr: { menuTitle: "T\xfcrk\xe7e" },
                                uk: {
                                    menuTitle:
                                        "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
                                },
                                vi: { menuTitle: "Ti\u1ebfng Vi\u1ec7t" },
                                "zh-hans": {
                                    menuTitle:
                                        "\u4e2d\u6587\uff08\u7b80\u4f53\uff09",
                                },
                                "zh-hant": { menuTitle: "\u6c49\u8bed" },
                            },
                            pattern:
                                /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g,
                            SPLIT:
                                3 === "axb".split(/(x)/).length
                                    ? function (e, t) {
                                          return e.split(t);
                                      }
                                    : function (e, t) {
                                          var n,
                                              i = [],
                                              o = 0;
                                          for (
                                              t.lastIndex = 0;
                                              (n = t.exec(e));

                                          )
                                              i.push(e.substr(o, n.index - o)),
                                                  i.push.apply(i, n.slice(1)),
                                                  (o = n.index + n[0].length);
                                          return i.push(e.substr(o)), i;
                                      },
                            _: function (e, t) {
                                return n.Object.isArray(t)
                                    ? this.processSnippet(e, t)
                                    : this.processString(
                                          this.lookupPhrase(e, t),
                                          [].slice.call(arguments, 2)
                                      );
                            },
                            processString: function (e, t, i) {
                                var o,
                                    r,
                                    s = n.Object.isArray;
                                for (o = 0, r = t.length; o < r; o++)
                                    i &&
                                        s(t[o]) &&
                                        (t[o] = this.processSnippet(i, t[o]));
                                var a = this.SPLIT(e, this.pattern);
                                for (o = 1, r = a.length; o < r; o += 2) {
                                    var l = a[o].charAt(0);
                                    if (l >= "0" && l <= "9")
                                        (a[o] = t[a[o] - 1]),
                                            "number" === typeof a[o] &&
                                                (a[o] = this.number(a[o]));
                                    else if ("{" === l)
                                        if (
                                            (l = a[o].substr(1)) >= "0" &&
                                            l <= "9"
                                        )
                                            (a[o] =
                                                t[
                                                    a[o].substr(
                                                        1,
                                                        a[o].length - 2
                                                    ) - 1
                                                ]),
                                                "number" === typeof a[o] &&
                                                    (a[o] = this.number(a[o]));
                                        else {
                                            var u = a[o].match(
                                                /^\{([a-z]+):%(\d+)\|(.*)\}$/
                                            );
                                            if (u)
                                                if ("plural" === u[1]) {
                                                    var c = t[u[2] - 1];
                                                    if (
                                                        "undefined" === typeof c
                                                    )
                                                        a[o] = "???";
                                                    else {
                                                        c = this.plural(c) - 1;
                                                        var h = u[3]
                                                            .replace(
                                                                /(^|[^%])(%%)*%\|/g,
                                                                "$1$2%\uefef"
                                                            )
                                                            .split(/\|/);
                                                        c >= 0 && c < h.length
                                                            ? (a[o] =
                                                                  this.processString(
                                                                      h[
                                                                          c
                                                                      ].replace(
                                                                          /\uEFEF/g,
                                                                          "|"
                                                                      ),
                                                                      t,
                                                                      i
                                                                  ))
                                                            : (a[o] = "???");
                                                    }
                                                } else a[o] = "%" + a[o];
                                        }
                                    null == a[o] && (a[o] = "???");
                                }
                                if (!i) return a.join("");
                                var d = [],
                                    p = "";
                                for (o = 0; o < r; o++)
                                    (p += a[o]),
                                        ++o < r &&
                                            (s(a[o])
                                                ? (d.push(p),
                                                  (d = d.concat(a[o])),
                                                  (p = ""))
                                                : (p += a[o]));
                                return "" !== p && d.push(p), d;
                            },
                            processSnippet: function (e, t) {
                                for (
                                    var i = [], o = 0, r = t.length;
                                    o < r;
                                    o++
                                )
                                    if (n.Object.isArray(t[o])) {
                                        var s = t[o];
                                        if ("string" === typeof s[1]) {
                                            var a = s[0];
                                            n.Object.isArray(a) || (a = [e, a]);
                                            var l = this.lookupPhrase(a, s[1]);
                                            i = i.concat(
                                                this.processMarkdown(
                                                    l,
                                                    s.slice(2),
                                                    e
                                                )
                                            );
                                        } else
                                            n.Object.isArray(s[1])
                                                ? (i = i.concat(
                                                      this.processSnippet.apply(
                                                          this,
                                                          s
                                                      )
                                                  ))
                                                : s.length >= 3
                                                ? i.push([
                                                      s[0],
                                                      s[1],
                                                      this.processSnippet(
                                                          e,
                                                          s[2]
                                                      ),
                                                  ])
                                                : i.push(t[o]);
                                    } else i.push(t[o]);
                                return i;
                            },
                            markdownPattern:
                                /(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/,
                            processMarkdown: function (e, t, i) {
                                for (
                                    var o,
                                        r = [],
                                        s = e.split(this.markdownPattern),
                                        a = s[0],
                                        l = 1,
                                        u = s.length;
                                    l < u;
                                    l += 8
                                )
                                    s[l + 1]
                                        ? ((o = this.processString(
                                              s[l + 2],
                                              t,
                                              i
                                          )),
                                          n.Object.isArray(o) || (o = [o]),
                                          (o = [
                                              ["b", "i", "i"][
                                                  s[l + 1].length - 1
                                              ],
                                              {},
                                              o,
                                          ]),
                                          3 === s[l + 1].length &&
                                              (o = ["b", {}, o]))
                                        : s[l + 3]
                                        ? ((o = this.processString(
                                              s[l + 4]
                                                  .replace(/^\s/, "")
                                                  .replace(/\s$/, ""),
                                              t,
                                              i
                                          )),
                                          n.Object.isArray(o) || (o = [o]),
                                          (o = ["code", {}, o]))
                                        : s[l + 5]
                                        ? ((o = this.processString(
                                              s[l + 5],
                                              t,
                                              i
                                          )),
                                          n.Object.isArray(o) || (o = [o]),
                                          (o = [
                                              "a",
                                              {
                                                  href: this.processString(
                                                      s[l + 6],
                                                      t
                                                  ),
                                                  target: "_blank",
                                              },
                                              o,
                                          ]))
                                        : ((a += s[l]), (o = null)),
                                        o &&
                                            ((r = this.concatString(
                                                r,
                                                a,
                                                t,
                                                i
                                            )).push(o),
                                            (a = "")),
                                        "" !== s[l + 7] && (a += s[l + 7]);
                                return (r = this.concatString(r, a, t, i));
                            },
                            concatString: function (e, t, i, o) {
                                return (
                                    "" != t &&
                                        ((t = this.processString(t, i, o)),
                                        n.Object.isArray(t) || (t = [t]),
                                        (e = e.concat(t))),
                                    e
                                );
                            },
                            lookupPhrase: function (e, t, i) {
                                i || (i = "_"),
                                    n.Object.isArray(e) &&
                                        ((i = e[0] || "_"), (e = e[1] || ""));
                                var o = this.loadDomain(i);
                                o && n.Hub.RestartAfter(o);
                                var r = this.strings[this.locale];
                                if (r && r.domains && i in r.domains) {
                                    var s = r.domains[i];
                                    s.strings &&
                                        e in s.strings &&
                                        (t = s.strings[e]);
                                }
                                return t;
                            },
                            loadFile: function (e, t, i) {
                                ((i = n.Callback(i)),
                                (e = t.file || e).match(/\.js$/) ||
                                    (e += ".js"),
                                e.match(/^([a-z]+:|\[MathJax\])/)) ||
                                    (e =
                                        (this.strings[this.locale].directory ||
                                            this.directory +
                                                "/" +
                                                this.locale ||
                                            "[MathJax]/localization/" +
                                                this.locale) +
                                        "/" +
                                        e);
                                var o = n.Ajax.Require(e, function () {
                                    return (t.isLoaded = !0), i();
                                });
                                return o.called ? null : o;
                            },
                            loadDomain: function (e, t) {
                                var i,
                                    o = this.strings[this.locale];
                                if (o) {
                                    if (
                                        !o.isLoaded &&
                                        (i = this.loadFile(this.locale, o))
                                    )
                                        return n.Callback.Queue(i, [
                                            "loadDomain",
                                            this,
                                            e,
                                        ]).Push(t || {});
                                    if (o.domains && e in o.domains) {
                                        var r = o.domains[e];
                                        if (
                                            !r.isLoaded &&
                                            (i = this.loadFile(e, r))
                                        )
                                            return n.Callback.Queue(i).Push(t);
                                    }
                                }
                                return n.Callback(t)();
                            },
                            Try: function (e) {
                                (e = n.Callback(e)).autoReset = !0;
                                try {
                                    e();
                                } catch (t) {
                                    if (!t.restart) throw t;
                                    n.Callback.After(
                                        ["Try", this, e],
                                        t.restart
                                    );
                                }
                            },
                            resetLocale: function (e) {
                                if (e) {
                                    for (
                                        e = e.toLowerCase();
                                        !this.strings[e];

                                    ) {
                                        var t = e.lastIndexOf("-");
                                        if (-1 === t) return;
                                        e = e.substring(0, t);
                                    }
                                    var i = this.strings[e].remap;
                                    (this.locale = i || e),
                                        n.Callback.Signal("Hub").Post([
                                            "Locale Reset",
                                            this.locale,
                                        ]);
                                }
                            },
                            setLocale: function (e) {
                                this.resetLocale(e),
                                    n.Menu && this.loadDomain("MathMenu");
                            },
                            addTranslation: function (e, t, i) {
                                var o = this.strings[e],
                                    r = !1;
                                o || ((o = this.strings[e] = {}), (r = !0)),
                                    o.domains || (o.domains = {}),
                                    t &&
                                        (o.domains[t] || (o.domains[t] = {}),
                                        (o = o.domains[t])),
                                    n.Hub.Insert(o, i),
                                    r &&
                                        n.Menu.menu &&
                                        n.Menu.CreateLocaleMenu();
                            },
                            setCSS: function (e) {
                                var t = this.strings[this.locale];
                                return (
                                    t &&
                                        (t.fontFamily &&
                                            (e.style.fontFamily = t.fontFamily),
                                        t.fontDirection &&
                                            ((e.style.direction =
                                                t.fontDirection),
                                            "rtl" === t.fontDirection &&
                                                (e.style.textAlign = "right"))),
                                    e
                                );
                            },
                            fontFamily: function () {
                                var e = this.strings[this.locale];
                                return e ? e.fontFamily : null;
                            },
                            fontDirection: function () {
                                var e = this.strings[this.locale];
                                return e ? e.fontDirection : null;
                            },
                            plural: function (e) {
                                var t = this.strings[this.locale];
                                return t && t.plural
                                    ? t.plural(e)
                                    : 1 == e
                                    ? 1
                                    : 2;
                            },
                            number: function (e) {
                                var t = this.strings[this.locale];
                                return t && t.number ? t.number(e) : e;
                            },
                        }),
                        (n.Message = {
                            ready: !1,
                            log: [{}],
                            current: null,
                            textNodeBug:
                                ("Apple Computer, Inc." === navigator.vendor &&
                                    "undefined" ===
                                        typeof navigator.vendorSub) ||
                                (window.hasOwnProperty &&
                                    window.hasOwnProperty("konqueror")),
                            styles: {
                                "#MathJax_Message": {
                                    position: "fixed",
                                    left: "1px",
                                    bottom: "2px",
                                    "background-color": "#E6E6E6",
                                    border: "1px solid #959595",
                                    margin: "0px",
                                    padding: "2px 8px",
                                    "z-index": "102",
                                    color: "black",
                                    "font-size": "80%",
                                    width: "auto",
                                    "white-space": "nowrap",
                                },
                                "#MathJax_MSIE_Frame": {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "0px",
                                    "z-index": 101,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "0px",
                                },
                            },
                            browsers: {
                                MSIE: function (e) {
                                    (n.Message.msieFixedPositionBug =
                                        (document.documentMode || 0) < 7),
                                        n.Message.msieFixedPositionBug &&
                                            (n.Hub.config.styles[
                                                "#MathJax_Message"
                                            ].position = "absolute"),
                                        (n.Message.quirks =
                                            "BackCompat" ===
                                            document.compatMode);
                                },
                                Chrome: function (e) {
                                    (n.Hub.config.styles[
                                        "#MathJax_Message"
                                    ].bottom = "1.5em"),
                                        (n.Hub.config.styles[
                                            "#MathJax_Message"
                                        ].left = "1em");
                                },
                            },
                            Init: function (e) {
                                if (
                                    (e && (this.ready = !0),
                                    !document.body || !this.ready)
                                )
                                    return !1;
                                if (
                                    (this.div &&
                                        null == this.div.parentNode &&
                                        ((this.div =
                                            document.getElementById(
                                                "MathJax_Message"
                                            )),
                                        (this.text = this.div
                                            ? this.div.firstChild
                                            : null)),
                                    !this.div)
                                ) {
                                    var t = document.body;
                                    this.msieFixedPositionBug &&
                                        window.attachEvent &&
                                        ((t = this.frame =
                                            this.addDiv(
                                                document.body
                                            )).removeAttribute("id"),
                                        (t.style.position = "absolute"),
                                        (t.style.border =
                                            t.style.margin =
                                            t.style.padding =
                                                "0px"),
                                        (t.style.zIndex = "101"),
                                        (t.style.height = "0px"),
                                        ((t = this.addDiv(t)).id =
                                            "MathJax_MSIE_Frame"),
                                        window.attachEvent(
                                            "onscroll",
                                            this.MoveFrame
                                        ),
                                        window.attachEvent(
                                            "onresize",
                                            this.MoveFrame
                                        ),
                                        this.MoveFrame()),
                                        (this.div = this.addDiv(t)),
                                        (this.div.style.display = "none");
                                }
                                return (
                                    this.text ||
                                        (this.text = this.div.appendChild(
                                            document.createTextNode("")
                                        )),
                                    !0
                                );
                            },
                            addDiv: function (e) {
                                var t = document.createElement("div");
                                return (
                                    (t.id = "MathJax_Message"),
                                    e.firstChild
                                        ? e.insertBefore(t, e.firstChild)
                                        : e.appendChild(t),
                                    t
                                );
                            },
                            MoveFrame: function () {
                                var e = n.Message.quirks
                                        ? document.body
                                        : document.documentElement,
                                    t = n.Message.frame;
                                (t.style.left = e.scrollLeft + "px"),
                                    (t.style.top = e.scrollTop + "px"),
                                    (t.style.width = e.clientWidth + "px"),
                                    ((t = t.firstChild).style.height =
                                        e.clientHeight + "px");
                            },
                            localize: function (e) {
                                return n.Localization._(e, e);
                            },
                            filterText: function (e, t, i) {
                                return (
                                    "simple" === n.Hub.config.messageStyle &&
                                        ("LoadFile" === i
                                            ? (this.loading ||
                                                  (this.loading =
                                                      this.localize("Loading") +
                                                      " "),
                                              (e = this.loading),
                                              (this.loading += "."))
                                            : "ProcessMath" === i
                                            ? (this.processing ||
                                                  (this.processing =
                                                      this.localize(
                                                          "Processing"
                                                      ) + " "),
                                              (e = this.processing),
                                              (this.processing += "."))
                                            : "TypesetMath" === i &&
                                              (this.typesetting ||
                                                  (this.typesetting =
                                                      this.localize(
                                                          "Typesetting"
                                                      ) + " "),
                                              (e = this.typesetting),
                                              (this.typesetting += "."))),
                                    e
                                );
                            },
                            clearCounts: function () {
                                delete this.loading,
                                    delete this.processing,
                                    delete this.typesetting;
                            },
                            Set: function (e, t, i) {
                                null == t &&
                                    ((t = this.log.length), (this.log[t] = {}));
                                var o = "";
                                if (n.Object.isArray(e)) {
                                    (o = e[0]),
                                        n.Object.isArray(o) && (o = o[1]);
                                    try {
                                        e = n.Localization._.apply(
                                            n.Localization,
                                            e
                                        );
                                    } catch (r) {
                                        if (!r.restart) throw r;
                                        if (!r.restart.called)
                                            return (
                                                null == this.log[t].restarted &&
                                                    (this.log[t].restarted = 0),
                                                this.log[t].restarted++,
                                                delete this.log[t].cleared,
                                                n.Callback.After(
                                                    ["Set", this, e, t, i],
                                                    r.restart
                                                ),
                                                t
                                            );
                                    }
                                }
                                return (
                                    this.timer &&
                                        (clearTimeout(this.timer),
                                        delete this.timer),
                                    (this.log[t].text = e),
                                    (this.log[t].filteredText = e =
                                        this.filterText(e, t, o)),
                                    "undefined" === typeof this.log[t].next &&
                                        ((this.log[t].next = this.current),
                                        null != this.current &&
                                            (this.log[this.current].prev = t),
                                        (this.current = t)),
                                    this.current === t &&
                                        "none" !== n.Hub.config.messageStyle &&
                                        (this.Init()
                                            ? (this.textNodeBug
                                                  ? (this.div.innerHTML = e)
                                                  : (this.text.nodeValue = e),
                                              (this.div.style.display = ""),
                                              this.status &&
                                                  ((window.status = ""),
                                                  delete this.status))
                                            : ((window.status = e),
                                              (this.status = !0))),
                                    this.log[t].restarted &&
                                        (this.log[t].cleared && (i = 0),
                                        0 === --this.log[t].restarted &&
                                            delete this.log[t].cleared),
                                    i
                                        ? setTimeout(
                                              n.Callback(["Clear", this, t]),
                                              i
                                          )
                                        : 0 == i && this.Clear(t, 0),
                                    t
                                );
                            },
                            Clear: function (e, t) {
                                null != this.log[e].prev &&
                                    (this.log[this.log[e].prev].next =
                                        this.log[e].next),
                                    null != this.log[e].next &&
                                        (this.log[this.log[e].next].prev =
                                            this.log[e].prev),
                                    this.current === e &&
                                        ((this.current = this.log[e].next),
                                        this.text
                                            ? (null == this.div.parentNode &&
                                                  this.Init(),
                                              null == this.current
                                                  ? (this.timer &&
                                                        (clearTimeout(
                                                            this.timer
                                                        ),
                                                        delete this.timer),
                                                    null == t && (t = 600),
                                                    0 === t
                                                        ? this.Remove()
                                                        : (this.timer =
                                                              setTimeout(
                                                                  n.Callback([
                                                                      "Remove",
                                                                      this,
                                                                  ]),
                                                                  t
                                                              )))
                                                  : "none" !==
                                                        n.Hub.config
                                                            .messageStyle &&
                                                    (this.textNodeBug
                                                        ? (this.div.innerHTML =
                                                              this.log[
                                                                  this.current
                                                              ].filteredText)
                                                        : (this.text.nodeValue =
                                                              this.log[
                                                                  this.current
                                                              ].filteredText)),
                                              this.status &&
                                                  ((window.status = ""),
                                                  delete this.status))
                                            : this.status &&
                                              (window.status =
                                                  null == this.current
                                                      ? ""
                                                      : this.log[this.current]
                                                            .text)),
                                    delete this.log[e].next,
                                    delete this.log[e].prev,
                                    delete this.log[e].filteredText,
                                    this.log[e].restarted &&
                                        (this.log[e].cleared = !0);
                            },
                            Remove: function () {
                                (this.text.nodeValue = ""),
                                    (this.div.style.display = "none");
                            },
                            File: function (e) {
                                return this.Set(
                                    ["LoadFile", "Loading %1", e],
                                    null,
                                    null
                                );
                            },
                            Log: function () {
                                for (
                                    var e = [], t = 1, n = this.log.length;
                                    t < n;
                                    t++
                                )
                                    e[t] = this.log[t].text;
                                return e.join("\n");
                            },
                        }),
                        (n.Hub = {
                            config: {
                                root: "",
                                config: [],
                                styleSheets: [],
                                styles: {
                                    ".MathJax_Preview": { color: "#888" },
                                },
                                jax: [],
                                extensions: [],
                                preJax: null,
                                postJax: null,
                                displayAlign: "center",
                                displayIndent: "0",
                                preRemoveClass: "MathJax_Preview",
                                showProcessingMessages: !0,
                                messageStyle: "normal",
                                delayStartupUntil: "none",
                                skipStartupTypeset: !1,
                                elements: [],
                                positionToHash: !0,
                                showMathMenu: !0,
                                showMathMenuMSIE: !0,
                                menuSettings: {
                                    zoom: "None",
                                    CTRL: !1,
                                    ALT: !1,
                                    CMD: !1,
                                    Shift: !1,
                                    discoverable: !1,
                                    zscale: "200%",
                                    renderer: null,
                                    font: "Auto",
                                    context: "MathJax",
                                    locale: null,
                                    mpContext: !1,
                                    mpMouse: !1,
                                    texHints: !0,
                                    FastPreview: null,
                                    assistiveMML: null,
                                    inTabOrder: !0,
                                    semantics: !1,
                                },
                                errorSettings: {
                                    message: [
                                        "[",
                                        [
                                            "MathProcessingError",
                                            "Math Processing Error",
                                        ],
                                        "]",
                                    ],
                                    style: {
                                        color: "#CC0000",
                                        "font-style": "italic",
                                    },
                                },
                                ignoreMMLattributes: {},
                            },
                            preProcessors: n.Callback.Hooks(!0),
                            inputJax: {},
                            outputJax: { order: {} },
                            processSectionDelay: 50,
                            processUpdateTime: 250,
                            processUpdateDelay: 10,
                            signal: n.Callback.Signal("Hub"),
                            Config: function (e) {
                                this.Insert(this.config, e),
                                    this.config.Augment &&
                                        this.Augment(this.config.Augment);
                            },
                            CombineConfig: function (e, t) {
                                for (
                                    var n,
                                        i,
                                        o = this.config,
                                        r = 0,
                                        s = (e = e.split(/\./)).length;
                                    r < s;
                                    r++
                                )
                                    o[(n = e[r])] || (o[n] = {}),
                                        (i = o),
                                        (o = o[n]);
                                return (i[n] = o = this.Insert(t, o)), o;
                            },
                            Register: {
                                PreProcessor: function () {
                                    return n.Hub.preProcessors.Add.apply(
                                        n.Hub.preProcessors,
                                        arguments
                                    );
                                },
                                MessageHook: function () {
                                    return n.Hub.signal.MessageHook.apply(
                                        n.Hub.signal,
                                        arguments
                                    );
                                },
                                StartupHook: function () {
                                    return n.Hub.Startup.signal.MessageHook.apply(
                                        n.Hub.Startup.signal,
                                        arguments
                                    );
                                },
                                LoadHook: function () {
                                    return n.Ajax.LoadHook.apply(
                                        n.Ajax,
                                        arguments
                                    );
                                },
                            },
                            UnRegister: {
                                PreProcessor: function (e) {
                                    n.Hub.preProcessors.Remove(e);
                                },
                                MessageHook: function (e) {
                                    n.Hub.signal.RemoveHook(e);
                                },
                                StartupHook: function (e) {
                                    n.Hub.Startup.signal.RemoveHook(e);
                                },
                                LoadHook: function (e) {
                                    n.Ajax.removeHook(e);
                                },
                            },
                            getAllJax: function (e) {
                                for (
                                    var t = [],
                                        n = this.elementScripts(e),
                                        i = 0,
                                        o = n.length;
                                    i < o;
                                    i++
                                )
                                    n[i].MathJax &&
                                        n[i].MathJax.elementJax &&
                                        t.push(n[i].MathJax.elementJax);
                                return t;
                            },
                            getJaxByType: function (e, t) {
                                for (
                                    var n = [],
                                        i = this.elementScripts(t),
                                        o = 0,
                                        r = i.length;
                                    o < r;
                                    o++
                                )
                                    i[o].MathJax &&
                                        i[o].MathJax.elementJax &&
                                        i[o].MathJax.elementJax.mimeType ===
                                            e &&
                                        n.push(i[o].MathJax.elementJax);
                                return n;
                            },
                            getJaxByInputType: function (e, t) {
                                for (
                                    var n = [],
                                        i = this.elementScripts(t),
                                        o = 0,
                                        r = i.length;
                                    o < r;
                                    o++
                                )
                                    i[o].MathJax &&
                                        i[o].MathJax.elementJax &&
                                        i[o].type &&
                                        i[o].type.replace(/ *;(.|\s)*/, "") ===
                                            e &&
                                        n.push(i[o].MathJax.elementJax);
                                return n;
                            },
                            getJaxFor: function (e) {
                                if (
                                    ("string" === typeof e &&
                                        (e = document.getElementById(e)),
                                    e && e.MathJax)
                                )
                                    return e.MathJax.elementJax;
                                if (this.isMathJaxNode(e)) {
                                    for (
                                        e.isMathJax || (e = e.firstChild);
                                        e && !e.jaxID;

                                    )
                                        e = e.parentNode;
                                    if (e)
                                        return n.OutputJax[
                                            e.jaxID
                                        ].getJaxFromMath(e);
                                }
                                return null;
                            },
                            isJax: function (e) {
                                if (
                                    ("string" === typeof e &&
                                        (e = document.getElementById(e)),
                                    this.isMathJaxNode(e))
                                )
                                    return 1;
                                if (
                                    e &&
                                    "script" === (e.tagName || "").toLowerCase()
                                ) {
                                    if (e.MathJax)
                                        return e.MathJax.state ===
                                            n.ElementJax.STATE.PROCESSED
                                            ? 1
                                            : -1;
                                    if (
                                        e.type &&
                                        this.inputJax[
                                            e.type.replace(/ *;(.|\s)*/, "")
                                        ]
                                    )
                                        return -1;
                                }
                                return 0;
                            },
                            isMathJaxNode: function (e) {
                                return (
                                    !!e &&
                                    (e.isMathJax ||
                                        "MathJax_MathML" ===
                                            (e.className || ""))
                                );
                            },
                            setRenderer: function (e, t) {
                                if (e) {
                                    var i = n.OutputJax[e];
                                    if (i) {
                                        (this.config.menuSettings.renderer = e),
                                            null == t && (t = "jax/mml"),
                                            i.isUnknown && i.Register(t);
                                        var o = this.outputJax;
                                        return o[t] &&
                                            o[t].length &&
                                            e !== o[t][0].id
                                            ? (o[t].unshift(i),
                                              this.signal.Post([
                                                  "Renderer Selected",
                                                  e,
                                              ]))
                                            : null;
                                    }
                                    (n.OutputJax[e] = n.OutputJax({
                                        id: "unknown",
                                        version: "1.0.0",
                                        isUnknown: !0,
                                    })),
                                        (this.config.menuSettings.renderer =
                                            "");
                                    var r =
                                        "[MathJax]/jax/output/" +
                                        e +
                                        "/config.js";
                                    return n.Ajax.Require(r, [
                                        "setRenderer",
                                        this,
                                        e,
                                        t,
                                    ]);
                                }
                            },
                            Queue: function () {
                                return this.queue.Push.apply(
                                    this.queue,
                                    arguments
                                );
                            },
                            Typeset: function (e, t) {
                                if (!n.isReady) return null;
                                var i = this.elementCallback(e, t);
                                if (i.count)
                                    var o = n.Callback.Queue(
                                        ["PreProcess", this, i.elements],
                                        ["Process", this, i.elements]
                                    );
                                return o.Push(i.callback);
                            },
                            PreProcess: function (e, t) {
                                var i = this.elementCallback(e, t),
                                    o = n.Callback.Queue();
                                if (i.count) {
                                    var r =
                                        1 === i.count
                                            ? [i.elements]
                                            : i.elements;
                                    o.Push([
                                        "Post",
                                        this.signal,
                                        ["Begin PreProcess", i.elements],
                                    ]);
                                    for (var s = 0, a = r.length; s < a; s++)
                                        r[s] &&
                                            o.Push([
                                                "Execute",
                                                this.preProcessors,
                                                r[s],
                                            ]);
                                    o.Push([
                                        "Post",
                                        this.signal,
                                        ["End PreProcess", i.elements],
                                    ]);
                                }
                                return o.Push(i.callback);
                            },
                            Process: function (e, t) {
                                return this.takeAction("Process", e, t);
                            },
                            Update: function (e, t) {
                                return this.takeAction("Update", e, t);
                            },
                            Reprocess: function (e, t) {
                                return this.takeAction("Reprocess", e, t);
                            },
                            Rerender: function (e, t) {
                                return this.takeAction("Rerender", e, t);
                            },
                            takeAction: function (e, t, i) {
                                var o = this.elementCallback(t, i),
                                    r = o.elements,
                                    s = n.Callback.Queue([
                                        "Clear",
                                        this.signal,
                                    ]),
                                    a = {
                                        scripts: [],
                                        start: new Date().getTime(),
                                        i: 0,
                                        j: 0,
                                        jax: {},
                                        jaxIDs: [],
                                    };
                                if (o.count) {
                                    var l = [
                                        "Delay",
                                        n.Callback,
                                        this.processSectionDelay,
                                    ];
                                    l[2] || (l = {}),
                                        s.Push(
                                            ["clearCounts", n.Message],
                                            [
                                                "Post",
                                                this.signal,
                                                ["Begin " + e, r],
                                            ],
                                            [
                                                "Post",
                                                this.signal,
                                                ["Begin Math", r, e],
                                            ],
                                            ["prepareScripts", this, e, r, a],
                                            [
                                                "Post",
                                                this.signal,
                                                ["Begin Math Input", r, e],
                                            ],
                                            ["processInput", this, a],
                                            [
                                                "Post",
                                                this.signal,
                                                ["End Math Input", r, e],
                                            ],
                                            l,
                                            [
                                                "prepareOutput",
                                                this,
                                                a,
                                                "preProcess",
                                            ],
                                            l,
                                            [
                                                "Post",
                                                this.signal,
                                                ["Begin Math Output", r, e],
                                            ],
                                            ["processOutput", this, a],
                                            [
                                                "Post",
                                                this.signal,
                                                ["End Math Output", r, e],
                                            ],
                                            l,
                                            [
                                                "prepareOutput",
                                                this,
                                                a,
                                                "postProcess",
                                            ],
                                            l,
                                            [
                                                "Post",
                                                this.signal,
                                                ["End Math", r, e],
                                            ],
                                            [
                                                "Post",
                                                this.signal,
                                                ["End " + e, r],
                                            ],
                                            ["clearCounts", n.Message]
                                        );
                                }
                                return s.Push(o.callback);
                            },
                            scriptAction: {
                                Process: function (e) {},
                                Update: function (e) {
                                    var t = e.MathJax.elementJax;
                                    t && t.needsUpdate()
                                        ? (t.Remove(!0),
                                          (e.MathJax.state = t.STATE.UPDATE))
                                        : (e.MathJax.state = t.STATE.PROCESSED);
                                },
                                Reprocess: function (e) {
                                    var t = e.MathJax.elementJax;
                                    t &&
                                        (t.Remove(!0),
                                        (e.MathJax.state = t.STATE.UPDATE));
                                },
                                Rerender: function (e) {
                                    var t = e.MathJax.elementJax;
                                    t &&
                                        (t.Remove(!0),
                                        (e.MathJax.state = t.STATE.OUTPUT));
                                },
                            },
                            prepareScripts: function (e, t, i) {
                                if (!arguments.callee.disabled)
                                    for (
                                        var o = this.elementScripts(t),
                                            r = n.ElementJax.STATE,
                                            s = 0,
                                            a = o.length;
                                        s < a;
                                        s++
                                    ) {
                                        var l = o[s];
                                        l.type &&
                                            this.inputJax[
                                                l.type.replace(/ *;(.|\n)*/, "")
                                            ] &&
                                            (l.MathJax &&
                                                (l.MathJax.elementJax &&
                                                    l.MathJax.elementJax
                                                        .hover &&
                                                    n.Extension.MathEvents.Hover.ClearHover(
                                                        l.MathJax.elementJax
                                                    ),
                                                l.MathJax.state !== r.PENDING &&
                                                    this.scriptAction[e](l)),
                                            l.MathJax ||
                                                (l.MathJax = {
                                                    state: r.PENDING,
                                                }),
                                            l.MathJax.error &&
                                                delete l.MathJax.error,
                                            l.MathJax.state !== r.PROCESSED &&
                                                i.scripts.push(l));
                                    }
                            },
                            checkScriptSiblings: function (e) {
                                if (!e.MathJax.checked) {
                                    var t = this.config,
                                        n = e.previousSibling;
                                    if (n && "#text" === n.nodeName) {
                                        var i,
                                            o,
                                            r = e.nextSibling;
                                        r &&
                                            "#text" !== r.nodeName &&
                                            (r = null),
                                            t.preJax &&
                                                ("string" === typeof t.preJax &&
                                                    (t.preJax = new RegExp(
                                                        t.preJax + "$"
                                                    )),
                                                (i = n.nodeValue.match(
                                                    t.preJax
                                                ))),
                                            t.postJax &&
                                                r &&
                                                ("string" ===
                                                    typeof t.postJax &&
                                                    (t.postJax = new RegExp(
                                                        "^" + t.postJax
                                                    )),
                                                (o = r.nodeValue.match(
                                                    t.postJax
                                                ))),
                                            !i ||
                                                (t.postJax && !o) ||
                                                ((n.nodeValue =
                                                    n.nodeValue.replace(
                                                        t.preJax,
                                                        i.length > 1 ? i[1] : ""
                                                    )),
                                                (n = null)),
                                            !o ||
                                                (t.preJax && !i) ||
                                                (r.nodeValue =
                                                    r.nodeValue.replace(
                                                        t.postJax,
                                                        o.length > 1 ? o[1] : ""
                                                    )),
                                            n &&
                                                !n.nodeValue.match(/\S/) &&
                                                (n = n.previousSibling);
                                    }
                                    t.preRemoveClass &&
                                        n &&
                                        n.className === t.preRemoveClass &&
                                        (e.MathJax.preview = n),
                                        (e.MathJax.checked = 1);
                                }
                            },
                            processInput: function (e) {
                                var t,
                                    i,
                                    o,
                                    r = n.ElementJax.STATE,
                                    s = e.scripts.length;
                                try {
                                    for (; e.i < s; )
                                        if ((i = e.scripts[e.i]))
                                            if (
                                                ((o = i.previousSibling) &&
                                                    "MathJax_Error" ===
                                                        o.className &&
                                                    o.parentNode.removeChild(o),
                                                i.parentNode &&
                                                    i.MathJax &&
                                                    i.MathJax.state !==
                                                        r.PROCESSED)
                                            ) {
                                                if (
                                                    i.MathJax.elementJax &&
                                                    i.MathJax.state !== r.UPDATE
                                                )
                                                    i.MathJax.state ===
                                                        r.OUTPUT &&
                                                        this.saveScript(
                                                            i.MathJax
                                                                .elementJax,
                                                            e,
                                                            i,
                                                            r
                                                        );
                                                else {
                                                    this.checkScriptSiblings(i);
                                                    var a = i.type.replace(
                                                            / *;(.|\s)*/,
                                                            ""
                                                        ),
                                                        l = this.inputJax[a];
                                                    if (
                                                        "function" ===
                                                        typeof (t = l.Process(
                                                            i,
                                                            e
                                                        ))
                                                    ) {
                                                        if (t.called) continue;
                                                        this.RestartAfter(t);
                                                    }
                                                    (t = t.Attach(i, l.id)),
                                                        this.saveScript(
                                                            t,
                                                            e,
                                                            i,
                                                            r
                                                        ),
                                                        this.postInputHooks.Execute(
                                                            t,
                                                            l.id,
                                                            i
                                                        );
                                                }
                                                e.i++;
                                                var u = new Date().getTime();
                                                u - e.start >
                                                    this.processUpdateTime &&
                                                    e.i < e.scripts.length &&
                                                    ((e.start = u),
                                                    this.RestartAfter(
                                                        n.Callback.Delay(1)
                                                    ));
                                            } else e.i++;
                                        else e.i++;
                                } catch (c) {
                                    return this.processError(c, e, "Input");
                                }
                                return (
                                    e.scripts.length &&
                                        this.config.showProcessingMessages &&
                                        n.Message.Set(
                                            [
                                                "ProcessMath",
                                                "Processing math: %1%%",
                                                100,
                                            ],
                                            0
                                        ),
                                    (e.start = new Date().getTime()),
                                    (e.i = e.j = 0),
                                    null
                                );
                            },
                            postInputHooks: n.Callback.Hooks(!0),
                            saveScript: function (e, t, n, i) {
                                if (!this.outputJax[e.mimeType])
                                    throw (
                                        ((n.MathJax.state = i.UPDATE),
                                        Error(
                                            "No output jax registered for " +
                                                e.mimeType
                                        ))
                                    );
                                (e.outputJax =
                                    this.outputJax[e.mimeType][0].id),
                                    t.jax[e.outputJax] ||
                                        (0 === t.jaxIDs.length
                                            ? (t.jax[e.outputJax] = t.scripts)
                                            : (1 === t.jaxIDs.length &&
                                                  (t.jax[t.jaxIDs[0]] =
                                                      t.scripts.slice(0, t.i)),
                                              (t.jax[e.outputJax] = [])),
                                        t.jaxIDs.push(e.outputJax)),
                                    t.jaxIDs.length > 1 &&
                                        t.jax[e.outputJax].push(n),
                                    (n.MathJax.state = i.OUTPUT);
                            },
                            prepareOutput: function (e, t) {
                                for (; e.j < e.jaxIDs.length; ) {
                                    var i = e.jaxIDs[e.j],
                                        o = n.OutputJax[i];
                                    if (o[t])
                                        try {
                                            var r = o[t](e);
                                            if ("function" === typeof r) {
                                                if (r.called) continue;
                                                this.RestartAfter(r);
                                            }
                                        } catch (s) {
                                            return (
                                                s.restart ||
                                                    (n.Message.Set(
                                                        [
                                                            "PrepError",
                                                            "Error preparing %1 output (%2)",
                                                            i,
                                                            t,
                                                        ],
                                                        null,
                                                        600
                                                    ),
                                                    (n.Hub.lastPrepError = s),
                                                    e.j++),
                                                n.Callback.After(
                                                    [
                                                        "prepareOutput",
                                                        this,
                                                        e,
                                                        t,
                                                    ],
                                                    s.restart
                                                )
                                            );
                                        }
                                    e.j++;
                                }
                                return null;
                            },
                            processOutput: function (e) {
                                var t,
                                    i = n.ElementJax.STATE,
                                    o = e.scripts.length;
                                try {
                                    for (; e.i < o; )
                                        if (
                                            (t = e.scripts[e.i]) &&
                                            t.parentNode &&
                                            t.MathJax &&
                                            !t.MathJax.error
                                        ) {
                                            var r = t.MathJax.elementJax;
                                            if (r) {
                                                !1 !==
                                                    n.OutputJax[
                                                        r.outputJax
                                                    ].Process(t, e) &&
                                                    ((t.MathJax.state =
                                                        i.PROCESSED),
                                                    t.MathJax.preview &&
                                                        ((t.MathJax.preview.innerHTML =
                                                            ""),
                                                        (t.MathJax.preview.style.display =
                                                            "none")),
                                                    this.signal.Post([
                                                        "New Math",
                                                        r.inputID,
                                                    ])),
                                                    e.i++;
                                                var s = new Date().getTime();
                                                s - e.start >
                                                    this.processUpdateTime &&
                                                    e.i < e.scripts.length &&
                                                    ((e.start = s),
                                                    this.RestartAfter(
                                                        n.Callback.Delay(
                                                            this
                                                                .processUpdateDelay
                                                        )
                                                    ));
                                            } else e.i++;
                                        } else e.i++;
                                } catch (a) {
                                    return this.processError(a, e, "Output");
                                }
                                return (
                                    e.scripts.length &&
                                        this.config.showProcessingMessages &&
                                        (n.Message.Set(
                                            [
                                                "TypesetMath",
                                                "Typesetting math: %1%%",
                                                100,
                                            ],
                                            0
                                        ),
                                        n.Message.Clear(0)),
                                    (e.i = e.j = 0),
                                    null
                                );
                            },
                            processMessage: function (e, t) {
                                var i = Math.floor(
                                        (e.i / e.scripts.length) * 100
                                    ),
                                    o =
                                        "Output" === t
                                            ? [
                                                  "TypesetMath",
                                                  "Typesetting math: %1%%",
                                              ]
                                            : [
                                                  "ProcessMath",
                                                  "Processing math: %1%%",
                                              ];
                                this.config.showProcessingMessages &&
                                    n.Message.Set(o.concat(i), 0);
                            },
                            processError: function (e, t, i) {
                                if (!e.restart) {
                                    if (!this.config.errorSettings.message)
                                        throw e;
                                    this.formatError(t.scripts[t.i], e), t.i++;
                                }
                                return (
                                    this.processMessage(t, i),
                                    n.Callback.After(
                                        ["process" + i, this, t],
                                        e.restart
                                    )
                                );
                            },
                            formatError: function (e, t) {
                                var i = function (e, t, i, o) {
                                        return n.Localization._(e, t, i, o);
                                    },
                                    o =
                                        i(
                                            "ErrorMessage",
                                            "Error: %1",
                                            t.message
                                        ) + "\n";
                                (t.sourceURL || t.fileName) &&
                                    (o +=
                                        "\n" +
                                        i(
                                            "ErrorFile",
                                            "file: %1",
                                            t.sourceURL || t.fileName
                                        )),
                                    (t.line || t.lineNumber) &&
                                        (o +=
                                            "\n" +
                                            i(
                                                "ErrorLine",
                                                "line: %1",
                                                t.line || t.lineNumber
                                            )),
                                    (o +=
                                        "\n\n" +
                                        i(
                                            "ErrorTips",
                                            "Debugging tips: use %1, inspect %2 in the browser console",
                                            "'unpacked/MathJax.js'",
                                            "'MathJax.Hub.lastError'"
                                        )),
                                    (e.MathJax.error = n.OutputJax.Error.Jax(
                                        o,
                                        e
                                    )),
                                    e.MathJax.elementJax &&
                                        (e.MathJax.error.inputID =
                                            e.MathJax.elementJax.inputID);
                                var r = this.config.errorSettings,
                                    s = i(r.messageId, r.message),
                                    a = n.HTML.Element(
                                        "span",
                                        {
                                            className: "MathJax_Error",
                                            jaxID: "Error",
                                            isMathJax: !0,
                                            id:
                                                e.MathJax.error.inputID +
                                                "-Frame",
                                        },
                                        [["span", null, s]]
                                    );
                                n.Ajax.Require(
                                    "[MathJax]/extensions/MathEvents.js",
                                    function () {
                                        var t = n.Extension.MathEvents.Event,
                                            i = n.Hub;
                                        (a.oncontextmenu = t.Menu),
                                            (a.onmousedown = t.Mousedown),
                                            (a.onkeydown = t.Keydown),
                                            (a.tabIndex = i.getTabOrder(
                                                i.getJaxFor(e)
                                            ));
                                    }
                                );
                                var l = document.getElementById(a.id);
                                l && l.parentNode.removeChild(l),
                                    e.parentNode &&
                                        e.parentNode.insertBefore(a, e),
                                    e.MathJax.preview &&
                                        ((e.MathJax.preview.innerHTML = ""),
                                        (e.MathJax.preview.style.display =
                                            "none")),
                                    (this.lastError = t),
                                    this.signal.Post([
                                        "Math Processing Error",
                                        e,
                                        t,
                                    ]);
                            },
                            RestartAfter: function (e) {
                                throw this.Insert(Error("restart"), {
                                    restart: n.Callback(e),
                                });
                            },
                            elementCallback: function (e, t) {
                                if (
                                    null == t &&
                                    (n.Object.isArray(e) ||
                                        "function" === typeof e)
                                )
                                    try {
                                        n.Callback(e), (t = e), (e = null);
                                    } catch (r) {}
                                null == e && (e = this.config.elements || []),
                                    this.isHTMLCollection(e) &&
                                        (e = this.HTMLCollection2Array(e)),
                                    n.Object.isArray(e) || (e = [e]);
                                for (
                                    var i = 0, o = (e = [].concat(e)).length;
                                    i < o;
                                    i++
                                )
                                    "string" === typeof e[i] &&
                                        (e[i] = document.getElementById(e[i]));
                                return (
                                    document.body ||
                                        (document.body =
                                            document.getElementsByTagName(
                                                "body"
                                            )[0]),
                                    0 == e.length && e.push(document.body),
                                    t || (t = {}),
                                    {
                                        count: e.length,
                                        elements: 1 === e.length ? e[0] : e,
                                        callback: t,
                                    }
                                );
                            },
                            elementScripts: function (e) {
                                var t = [];
                                if (
                                    n.Object.isArray(e) ||
                                    this.isHTMLCollection(e)
                                ) {
                                    for (var i = 0, o = e.length; i < o; i++) {
                                        for (var r = 0, s = 0; s < i && !r; s++)
                                            r = e[s].contains(e[i]);
                                        r ||
                                            t.push.apply(
                                                t,
                                                this.elementScripts(e[i])
                                            );
                                    }
                                    return t;
                                }
                                return (
                                    "string" === typeof e &&
                                        (e = document.getElementById(e)),
                                    document.body ||
                                        (document.body =
                                            document.getElementsByTagName(
                                                "body"
                                            )[0]),
                                    null == e && (e = document.body),
                                    null != e.tagName &&
                                    "script" === e.tagName.toLowerCase()
                                        ? [e]
                                        : ((t =
                                              e.getElementsByTagName("script")),
                                          this.msieHTMLCollectionBug &&
                                              (t =
                                                  this.HTMLCollection2Array(t)),
                                          t)
                                );
                            },
                            isHTMLCollection: function (e) {
                                return (
                                    "HTMLCollection" in window &&
                                    "object" === typeof e &&
                                    e instanceof HTMLCollection
                                );
                            },
                            HTMLCollection2Array: function (e) {
                                if (!this.msieHTMLCollectionBug)
                                    return [].slice.call(e);
                                for (
                                    var t = [], n = 0, i = e.length;
                                    n < i;
                                    n++
                                )
                                    t[n] = e[n];
                                return t;
                            },
                            Insert: function (e, t) {
                                for (var i in t)
                                    t.hasOwnProperty(i) &&
                                        ("object" !== typeof t[i] ||
                                        n.Object.isArray(t[i]) ||
                                        ("object" !== typeof e[i] &&
                                            "function" !== typeof e[i])
                                            ? (e[i] = t[i])
                                            : this.Insert(e[i], t[i]));
                                return e;
                            },
                            getTabOrder: function (e) {
                                return this.config.menuSettings.inTabOrder
                                    ? 0
                                    : -1;
                            },
                            SplitList:
                                "trim" in String.prototype
                                    ? function (e) {
                                          return e.trim().split(/\s+/);
                                      }
                                    : function (e) {
                                          return e
                                              .replace(/^\s+/, "")
                                              .replace(/\s+$/, "")
                                              .split(/\s+/);
                                      },
                        }),
                        n.Hub.Insert(n.Hub.config.styles, n.Message.styles),
                        n.Hub.Insert(n.Hub.config.styles, {
                            ".MathJax_Error": n.Hub.config.errorSettings.style,
                        }),
                        (n.Extension = {}),
                        (n.Hub.Configured = n.Callback({})),
                        (n.Hub.Startup = {
                            script: "",
                            queue: n.Callback.Queue(),
                            signal: n.Callback.Signal("Startup"),
                            params: {},
                            Config: function () {
                                if (
                                    (this.queue.Push([
                                        "Post",
                                        this.signal,
                                        "Begin Config",
                                    ]),
                                    n.AuthorConfig &&
                                        n.AuthorConfig.root &&
                                        (n.Ajax.config.root =
                                            n.AuthorConfig.root),
                                    this.params.locale &&
                                        (n.Localization.resetLocale(
                                            this.params.locale
                                        ),
                                        (n.Hub.config.menuSettings.locale =
                                            this.params.locale)),
                                    this.params.config)
                                )
                                    for (
                                        var e = this.params.config.split(/,/),
                                            t = 0,
                                            i = e.length;
                                        t < i;
                                        t++
                                    )
                                        e[t].match(/\.js$/) || (e[t] += ".js"),
                                            this.queue.Push([
                                                "Require",
                                                n.Ajax,
                                                this.URL("config", e[t]),
                                            ]);
                                this.queue.Push([
                                    "Config",
                                    n.Hub,
                                    n.AuthorConfig,
                                ]),
                                    this.script.match(/\S/) &&
                                        this.queue.Push(this.script + ";\n1;"),
                                    this.queue.Push(
                                        ["ConfigDelay", this],
                                        ["ConfigBlocks", this],
                                        [
                                            function (e) {
                                                return e.loadArray(
                                                    n.Hub.config.config,
                                                    "config",
                                                    null,
                                                    !0
                                                );
                                            },
                                            this,
                                        ],
                                        ["Post", this.signal, "End Config"]
                                    );
                            },
                            ConfigDelay: function () {
                                var e =
                                    this.params.delayStartupUntil ||
                                    n.Hub.config.delayStartupUntil;
                                return "onload" === e
                                    ? this.onload
                                    : "configured" === e
                                    ? n.Hub.Configured
                                    : e;
                            },
                            ConfigBlocks: function () {
                                for (
                                    var e =
                                            document.getElementsByTagName(
                                                "script"
                                            ),
                                        t = n.Callback.Queue(),
                                        i = 0,
                                        o = e.length;
                                    i < o;
                                    i++
                                ) {
                                    var r = String(e[i].type).replace(/ /g, "");
                                    r.match(/^text\/x-mathjax-config(;.*)?$/) &&
                                        !r.match(/;executed=true/) &&
                                        ((e[i].type += ";executed=true"),
                                        t.Push(e[i].innerHTML + ";\n1;"));
                                }
                                return t.Push(function () {
                                    n.Ajax.config.root = n.Hub.config.root;
                                });
                            },
                            Cookie: function () {
                                return this.queue.Push(
                                    ["Post", this.signal, "Begin Cookie"],
                                    [
                                        "Get",
                                        n.HTML.Cookie,
                                        "menu",
                                        n.Hub.config.menuSettings,
                                    ],
                                    [
                                        function (e) {
                                            var t = e.menuSettings;
                                            t.locale &&
                                                n.Localization.resetLocale(
                                                    t.locale
                                                );
                                            var i = e.menuSettings.renderer,
                                                o = e.jax;
                                            if (i) {
                                                var r = "output/" + i;
                                                o.sort();
                                                for (
                                                    var s = 0, a = o.length;
                                                    s < a &&
                                                    "output/" !==
                                                        o[s].substr(0, 7);
                                                    s++
                                                );
                                                if (s == a - 1) o.pop();
                                                else
                                                    for (; s < a; ) {
                                                        if (o[s] === r) {
                                                            o.splice(s, 1);
                                                            break;
                                                        }
                                                        s++;
                                                    }
                                                o.unshift(r);
                                            }
                                            null != t.CHTMLpreview &&
                                                (null == t.FastPreview &&
                                                    (t.FastPreview =
                                                        t.CHTMLpreview),
                                                delete t.CHTMLpreview),
                                                t.FastPreview &&
                                                    !n.Extension[
                                                        "fast-preview"
                                                    ] &&
                                                    n.Hub.config.extensions.push(
                                                        "fast-preview.js"
                                                    ),
                                                e.menuSettings.assistiveMML &&
                                                    !n.Extension.AssistiveMML &&
                                                    n.Hub.config.extensions.push(
                                                        "AssistiveMML.js"
                                                    );
                                        },
                                        n.Hub.config,
                                    ],
                                    ["Post", this.signal, "End Cookie"]
                                );
                            },
                            Styles: function () {
                                return this.queue.Push(
                                    ["Post", this.signal, "Begin Styles"],
                                    [
                                        "loadArray",
                                        this,
                                        n.Hub.config.styleSheets,
                                        "config",
                                    ],
                                    ["Styles", n.Ajax, n.Hub.config.styles],
                                    ["Post", this.signal, "End Styles"]
                                );
                            },
                            Jax: function () {
                                for (
                                    var e = n.Hub.config,
                                        t = n.Hub.outputJax,
                                        i = 0,
                                        o = e.jax.length,
                                        r = 0;
                                    i < o;
                                    i++
                                ) {
                                    var s = e.jax[i].substr(7);
                                    "output/" === e.jax[i].substr(0, 7) &&
                                        null == t.order[s] &&
                                        ((t.order[s] = r), r++);
                                }
                                return n.Callback.Queue().Push(
                                    ["Post", this.signal, "Begin Jax"],
                                    [
                                        "loadArray",
                                        this,
                                        e.jax,
                                        "jax",
                                        "config.js",
                                    ],
                                    ["Post", this.signal, "End Jax"]
                                );
                            },
                            Extensions: function () {
                                return n.Callback.Queue().Push(
                                    ["Post", this.signal, "Begin Extensions"],
                                    [
                                        "loadArray",
                                        this,
                                        n.Hub.config.extensions,
                                        "extensions",
                                    ],
                                    ["Post", this.signal, "End Extensions"]
                                );
                            },
                            Message: function () {
                                n.Message.Init(!0);
                            },
                            Menu: function () {
                                var e,
                                    t = n.Hub.config.menuSettings,
                                    i = n.Hub.outputJax;
                                for (var o in i)
                                    if (i.hasOwnProperty(o) && i[o].length) {
                                        e = i[o];
                                        break;
                                    }
                                e &&
                                    e.length &&
                                    (t.renderer &&
                                        t.renderer !== e[0].id &&
                                        e.unshift(n.OutputJax[t.renderer]),
                                    (t.renderer = e[0].id));
                            },
                            Hash: function () {
                                if (
                                    n.Hub.config.positionToHash &&
                                    document.location.hash &&
                                    document.body &&
                                    document.body.scrollIntoView
                                ) {
                                    var e = decodeURIComponent(
                                            document.location.hash.substr(1)
                                        ),
                                        t = document.getElementById(e);
                                    if (!t)
                                        for (
                                            var i =
                                                    document.getElementsByTagName(
                                                        "a"
                                                    ),
                                                o = 0,
                                                r = i.length;
                                            o < r;
                                            o++
                                        )
                                            if (i[o].name === e) {
                                                t = i[o];
                                                break;
                                            }
                                    if (t) {
                                        for (; !t.scrollIntoView; )
                                            t = t.parentNode;
                                        (t = this.HashCheck(t)) &&
                                            t.scrollIntoView &&
                                            setTimeout(function () {
                                                t.scrollIntoView(!0);
                                            }, 1);
                                    }
                                }
                            },
                            HashCheck: function (e) {
                                var t = n.Hub.getJaxFor(e);
                                return (
                                    t &&
                                        n.OutputJax[t.outputJax].hashCheck &&
                                        (e =
                                            n.OutputJax[t.outputJax].hashCheck(
                                                e
                                            )),
                                    e
                                );
                            },
                            MenuZoom: function () {
                                n.Hub.config.showMathMenu &&
                                    (n.Extension.MathMenu
                                        ? setTimeout(
                                              n.Callback([
                                                  "loadDomain",
                                                  n.Localization,
                                                  "MathMenu",
                                              ]),
                                              1e3
                                          )
                                        : setTimeout(function () {
                                              n.Callback.Queue(
                                                  [
                                                      "Require",
                                                      n.Ajax,
                                                      "[MathJax]/extensions/MathMenu.js",
                                                      {},
                                                  ],
                                                  [
                                                      "loadDomain",
                                                      n.Localization,
                                                      "MathMenu",
                                                  ]
                                              );
                                          }, 1e3),
                                    n.Extension.MathZoom ||
                                        setTimeout(
                                            n.Callback([
                                                "Require",
                                                n.Ajax,
                                                "[MathJax]/extensions/MathZoom.js",
                                                {},
                                            ]),
                                            2e3
                                        ));
                            },
                            onLoad: function () {
                                var e = (this.onload = n.Callback(function () {
                                    n.Hub.Startup.signal.Post("onLoad");
                                }));
                                if (document.body && document.readyState)
                                    if (n.Hub.Browser.isMSIE) {
                                        if ("complete" === document.readyState)
                                            return [e];
                                    } else if (
                                        "loading" !== document.readyState
                                    )
                                        return [e];
                                return (
                                    window.addEventListener
                                        ? (window.addEventListener(
                                              "load",
                                              e,
                                              !1
                                          ),
                                          this.params.noDOMContentEvent ||
                                              window.addEventListener(
                                                  "DOMContentLoaded",
                                                  e,
                                                  !1
                                              ))
                                        : window.attachEvent
                                        ? window.attachEvent("onload", e)
                                        : (window.onload = e),
                                    e
                                );
                            },
                            Typeset: function (e, t) {
                                return n.Hub.config.skipStartupTypeset
                                    ? function () {}
                                    : this.queue.Push(
                                          [
                                              "Post",
                                              this.signal,
                                              "Begin Typeset",
                                          ],
                                          ["Typeset", n.Hub, e, t],
                                          ["Post", this.signal, "End Typeset"]
                                      );
                            },
                            URL: function (e, t) {
                                return (
                                    t.match(/^([a-z]+:\/\/|\[|\/)/) ||
                                        (t = "[MathJax]/" + e + "/" + t),
                                    t
                                );
                            },
                            loadArray: function (e, t, i, o) {
                                if (
                                    e &&
                                    (n.Object.isArray(e) || (e = [e]), e.length)
                                ) {
                                    for (
                                        var r,
                                            s = n.Callback.Queue(),
                                            a = {},
                                            l = 0,
                                            u = e.length;
                                        l < u;
                                        l++
                                    )
                                        (r = this.URL(t, e[l])),
                                            i && (r += "/" + i),
                                            o
                                                ? s.Push([
                                                      "Require",
                                                      n.Ajax,
                                                      r,
                                                      a,
                                                  ])
                                                : s.Push(n.Ajax.Require(r, a));
                                    return s.Push({});
                                }
                                return null;
                            },
                        }),
                        (function (e) {
                            var t = n[e],
                                i = "[" + e + "]",
                                o = t.Hub,
                                r = t.Ajax,
                                s = t.Callback,
                                a = n.Object.Subclass(
                                    {
                                        JAXFILE: "jax.js",
                                        require: null,
                                        config: {},
                                        Init: function (e, t) {
                                            return 0 === arguments.length
                                                ? this
                                                : this.constructor.Subclass(
                                                      e,
                                                      t
                                                  )();
                                        },
                                        Augment: function (e, t) {
                                            var n = this.constructor,
                                                i = {};
                                            if (null != e) {
                                                for (var r in e)
                                                    e.hasOwnProperty(r) &&
                                                        ("function" ===
                                                        typeof e[r]
                                                            ? n.protoFunction(
                                                                  r,
                                                                  e[r]
                                                              )
                                                            : (i[r] = e[r]));
                                                e.toString !==
                                                    n.prototype.toString &&
                                                    e.toString !==
                                                        {}.toString &&
                                                    n.protoFunction(
                                                        "toString",
                                                        e.toString
                                                    );
                                            }
                                            return (
                                                o.Insert(n.prototype, i),
                                                n.Augment(null, t),
                                                this
                                            );
                                        },
                                        Translate: function (e, t) {
                                            throw Error(
                                                this.directory +
                                                    "/" +
                                                    this.JAXFILE +
                                                    " failed to define the Translate() method"
                                            );
                                        },
                                        Register: function (e) {},
                                        Config: function () {
                                            (this.config = o.CombineConfig(
                                                this.id,
                                                this.config
                                            )),
                                                this.config.Augment &&
                                                    this.Augment(
                                                        this.config.Augment
                                                    );
                                        },
                                        Startup: function () {},
                                        loadComplete: function (e) {
                                            if ("config.js" === e)
                                                return r.loadComplete(
                                                    this.directory + "/" + e
                                                );
                                            var t = s.Queue();
                                            return (
                                                t.Push(
                                                    o.Register.StartupHook(
                                                        "End Config",
                                                        {}
                                                    ),
                                                    [
                                                        "Post",
                                                        o.Startup.signal,
                                                        this.id + " Jax Config",
                                                    ],
                                                    ["Config", this],
                                                    [
                                                        "Post",
                                                        o.Startup.signal,
                                                        this.id +
                                                            " Jax Require",
                                                    ],
                                                    [
                                                        function (e) {
                                                            return n.Hub.Startup.loadArray(
                                                                e.require,
                                                                this.directory
                                                            );
                                                        },
                                                        this,
                                                    ],
                                                    [
                                                        function (e, t) {
                                                            return n.Hub.Startup.loadArray(
                                                                e.extensions,
                                                                "extensions/" +
                                                                    t
                                                            );
                                                        },
                                                        this.config || {},
                                                        this.id,
                                                    ],
                                                    [
                                                        "Post",
                                                        o.Startup.signal,
                                                        this.id +
                                                            " Jax Startup",
                                                    ],
                                                    ["Startup", this],
                                                    [
                                                        "Post",
                                                        o.Startup.signal,
                                                        this.id + " Jax Ready",
                                                    ]
                                                ),
                                                this.copyTranslate &&
                                                    t.Push([
                                                        function (e) {
                                                            (e.preProcess =
                                                                e.preTranslate),
                                                                (e.Process =
                                                                    e.Translate),
                                                                (e.postProcess =
                                                                    e.postTranslate);
                                                        },
                                                        this.constructor
                                                            .prototype,
                                                    ]),
                                                t.Push([
                                                    "loadComplete",
                                                    r,
                                                    this.directory + "/" + e,
                                                ])
                                            );
                                        },
                                    },
                                    {
                                        id: "Jax",
                                        version: "2.7.5",
                                        directory: i + "/jax",
                                        extensionDir: i + "/extensions",
                                    }
                                );
                            (t.InputJax = a.Subclass(
                                {
                                    elementJax: "mml",
                                    sourceMenuTitle: [
                                        "Original",
                                        "Original Form",
                                    ],
                                    copyTranslate: !0,
                                    Process: function (e, n) {
                                        var i,
                                            a = s.Queue(),
                                            l = this.elementJax;
                                        t.Object.isArray(l) || (l = [l]);
                                        for (
                                            var u = 0, c = l.length;
                                            u < c;
                                            u++
                                        )
                                            (i =
                                                t.ElementJax.directory +
                                                "/" +
                                                l[u] +
                                                "/" +
                                                this.JAXFILE),
                                                this.require
                                                    ? t.Object.isArray(
                                                          this.require
                                                      ) ||
                                                      (this.require = [
                                                          this.require,
                                                      ])
                                                    : (this.require = []),
                                                this.require.push(i),
                                                a.Push(r.Require(i));
                                        i = this.directory + "/" + this.JAXFILE;
                                        var h = a.Push(r.Require(i));
                                        return (
                                            h.called ||
                                                (this.constructor.prototype.Process =
                                                    function () {
                                                        if (!h.called) return h;
                                                        throw Error(
                                                            i +
                                                                " failed to load properly"
                                                        );
                                                    }),
                                            (l = o.outputJax["jax/" + l[0]]) &&
                                                a.Push(
                                                    r.Require(
                                                        l[0].directory +
                                                            "/" +
                                                            this.JAXFILE
                                                    )
                                                ),
                                            a.Push({})
                                        );
                                    },
                                    needsUpdate: function (e) {
                                        var n = e.SourceElement();
                                        return (
                                            e.originalText !==
                                            t.HTML.getScript(n)
                                        );
                                    },
                                    Register: function (e) {
                                        o.inputJax || (o.inputJax = {}),
                                            (o.inputJax[e] = this);
                                    },
                                },
                                {
                                    id: "InputJax",
                                    version: "2.7.5",
                                    directory: a.directory + "/input",
                                    extensionDir: a.extensionDir,
                                }
                            )),
                                (t.OutputJax = a.Subclass(
                                    {
                                        copyTranslate: !0,
                                        preProcess: function (e) {
                                            var t,
                                                n =
                                                    this.directory +
                                                    "/" +
                                                    this.JAXFILE;
                                            return (
                                                (this.constructor.prototype.preProcess =
                                                    function (e) {
                                                        if (!t.called) return t;
                                                        throw Error(
                                                            n +
                                                                " failed to load properly"
                                                        );
                                                    }),
                                                (t = r.Require(n))
                                            );
                                        },
                                        Process: function (e) {
                                            throw Error(
                                                this.id +
                                                    " output jax failed to load properly"
                                            );
                                        },
                                        Register: function (e) {
                                            var n = o.outputJax;
                                            n[e] || (n[e] = []),
                                                n[e].length &&
                                                (this.id ===
                                                    o.config.menuSettings
                                                        .renderer ||
                                                    (n.order[this.id] || 0) <
                                                        (n.order[n[e][0].id] ||
                                                            0))
                                                    ? n[e].unshift(this)
                                                    : n[e].push(this),
                                                this.require
                                                    ? t.Object.isArray(
                                                          this.require
                                                      ) ||
                                                      (this.require = [
                                                          this.require,
                                                      ])
                                                    : (this.require = []),
                                                this.require.push(
                                                    t.ElementJax.directory +
                                                        "/" +
                                                        e.split(/\//)[1] +
                                                        "/" +
                                                        this.JAXFILE
                                                );
                                        },
                                        Remove: function (e) {},
                                    },
                                    {
                                        id: "OutputJax",
                                        version: "2.7.5",
                                        directory: a.directory + "/output",
                                        extensionDir: a.extensionDir,
                                        fontDir:
                                            i +
                                            (t.isPacked ? "" : "/..") +
                                            "/fonts",
                                        imageDir:
                                            i +
                                            (t.isPacked ? "" : "/..") +
                                            "/images",
                                    }
                                )),
                                (t.ElementJax = a.Subclass(
                                    {
                                        Init: function (e, t) {
                                            return this.constructor.Subclass(
                                                e,
                                                t
                                            );
                                        },
                                        inputJax: null,
                                        outputJax: null,
                                        inputID: null,
                                        originalText: "",
                                        mimeType: "",
                                        sourceMenuTitle: [
                                            "MathMLcode",
                                            "MathML Code",
                                        ],
                                        Text: function (e, n) {
                                            var i = this.SourceElement();
                                            return (
                                                t.HTML.setScript(i, e),
                                                (i.MathJax.state =
                                                    this.STATE.UPDATE),
                                                o.Update(i, n)
                                            );
                                        },
                                        Reprocess: function (e) {
                                            var t = this.SourceElement();
                                            return (
                                                (t.MathJax.state =
                                                    this.STATE.UPDATE),
                                                o.Reprocess(t, e)
                                            );
                                        },
                                        Update: function (e) {
                                            return this.Rerender(e);
                                        },
                                        Rerender: function (e) {
                                            var t = this.SourceElement();
                                            return (
                                                (t.MathJax.state =
                                                    this.STATE.OUTPUT),
                                                o.Process(t, e)
                                            );
                                        },
                                        Remove: function (e) {
                                            this.hover &&
                                                this.hover.clear(this),
                                                t.OutputJax[
                                                    this.outputJax
                                                ].Remove(this),
                                                e ||
                                                    (o.signal.Post([
                                                        "Remove Math",
                                                        this.inputID,
                                                    ]),
                                                    this.Detach());
                                        },
                                        needsUpdate: function () {
                                            return t.InputJax[
                                                this.inputJax
                                            ].needsUpdate(this);
                                        },
                                        SourceElement: function () {
                                            return document.getElementById(
                                                this.inputID
                                            );
                                        },
                                        Attach: function (e, n) {
                                            var i = e.MathJax.elementJax;
                                            return (
                                                e.MathJax.state ===
                                                this.STATE.UPDATE
                                                    ? i.Clone(this)
                                                    : ((i =
                                                          e.MathJax.elementJax =
                                                              this),
                                                      e.id
                                                          ? (this.inputID =
                                                                e.id)
                                                          : ((e.id =
                                                                this.inputID =
                                                                    t.ElementJax.GetID()),
                                                            (this.newID = 1))),
                                                (i.originalText =
                                                    t.HTML.getScript(e)),
                                                (i.inputJax = n),
                                                i.root &&
                                                    (i.root.inputID =
                                                        i.inputID),
                                                i
                                            );
                                        },
                                        Detach: function () {
                                            var e = this.SourceElement();
                                            if (e) {
                                                try {
                                                    delete e.MathJax;
                                                } catch (t) {
                                                    e.MathJax = null;
                                                }
                                                this.newID && (e.id = "");
                                            }
                                        },
                                        Clone: function (e) {
                                            var t;
                                            for (t in this)
                                                this.hasOwnProperty(t) &&
                                                    "undefined" ===
                                                        typeof e[t] &&
                                                    "newID" !== t &&
                                                    delete this[t];
                                            for (t in e)
                                                e.hasOwnProperty(t) &&
                                                    ("undefined" ===
                                                        typeof this[t] ||
                                                        (this[t] !== e[t] &&
                                                            "inputID" !== t)) &&
                                                    (this[t] = e[t]);
                                        },
                                    },
                                    {
                                        id: "ElementJax",
                                        version: "2.7.5",
                                        directory: a.directory + "/element",
                                        extensionDir: a.extensionDir,
                                        ID: 0,
                                        STATE: {
                                            PENDING: 1,
                                            PROCESSED: 2,
                                            UPDATE: 3,
                                            OUTPUT: 4,
                                        },
                                        GetID: function () {
                                            return (
                                                this.ID++,
                                                "MathJax-Element-" + this.ID
                                            );
                                        },
                                        Subclass: function () {
                                            var e = a.Subclass.apply(
                                                this,
                                                arguments
                                            );
                                            return (
                                                (e.loadComplete =
                                                    this.prototype.loadComplete),
                                                e
                                            );
                                        },
                                    }
                                )),
                                (t.ElementJax.prototype.STATE =
                                    t.ElementJax.STATE),
                                (t.OutputJax.Error = {
                                    id: "Error",
                                    version: "2.7.5",
                                    config: {},
                                    errors: 0,
                                    ContextMenu: function () {
                                        return t.Extension.MathEvents.Event.ContextMenu.apply(
                                            t.Extension.MathEvents.Event,
                                            arguments
                                        );
                                    },
                                    Mousedown: function () {
                                        return t.Extension.MathEvents.Event.AltContextMenu.apply(
                                            t.Extension.MathEvents.Event,
                                            arguments
                                        );
                                    },
                                    getJaxFromMath: function (e) {
                                        return (e.nextSibling.MathJax || {})
                                            .error;
                                    },
                                    Jax: function (e, t) {
                                        var i =
                                            n.Hub.inputJax[
                                                t.type.replace(/ *;(.|\s)*/, "")
                                            ];
                                        return (
                                            this.errors++,
                                            {
                                                inputJax: (i || { id: "Error" })
                                                    .id,
                                                outputJax: "Error",
                                                inputID:
                                                    "MathJax-Error-" +
                                                    this.errors,
                                                sourceMenuTitle: [
                                                    "ErrorMessage",
                                                    "Error Message",
                                                ],
                                                sourceMenuFormat: "Error",
                                                originalText:
                                                    n.HTML.getScript(t),
                                                errorText: e,
                                            }
                                        );
                                    },
                                }),
                                (t.InputJax.Error = {
                                    id: "Error",
                                    version: "2.7.5",
                                    config: {},
                                    sourceMenuTitle: [
                                        "Original",
                                        "Original Form",
                                    ],
                                });
                        })("MathJax"),
                        (function (e) {
                            var t = n[e];
                            t || (t = n[e] = {});
                            var i = t.Hub,
                                o = i.Startup,
                                r = i.config,
                                s =
                                    document.head ||
                                    document.getElementsByTagName("head")[0];
                            s || (s = document.childNodes[0]);
                            var a = (
                                document.documentElement || document
                            ).getElementsByTagName("script");
                            0 === a.length &&
                                s.namespaceURI &&
                                (a = document.getElementsByTagNameNS(
                                    s.namespaceURI,
                                    "script"
                                ));
                            for (
                                var l = new RegExp(
                                        "(^|/)" + e + "\\.js(\\?.*)?$"
                                    ),
                                    u = a.length - 1;
                                u >= 0;
                                u--
                            )
                                if ((a[u].src || "").match(l)) {
                                    if (
                                        ((o.script = a[u].innerHTML), RegExp.$2)
                                    )
                                        for (
                                            var c = RegExp.$2
                                                    .substr(1)
                                                    .split(/\&/),
                                                h = 0,
                                                d = c.length;
                                            h < d;
                                            h++
                                        ) {
                                            var p = c[h].match(/(.*)=(.*)/);
                                            p
                                                ? (o.params[unescape(p[1])] =
                                                      unescape(p[2]))
                                                : (o.params[c[h]] = !0);
                                        }
                                    (r.root = a[u].src.replace(
                                        /(^|\/)[^\/]*(\?.*)?$/,
                                        ""
                                    )),
                                        (t.Ajax.config.root = r.root),
                                        (t.Ajax.params = o.params);
                                    break;
                                }
                            var f = navigator.userAgent,
                                m = {
                                    isMac:
                                        "Mac" ===
                                        navigator.platform.substr(0, 3),
                                    isPC:
                                        "Win" ===
                                        navigator.platform.substr(0, 3),
                                    isMSIE:
                                        "ActiveXObject" in window &&
                                        "clipboardData" in window,
                                    isEdge:
                                        "MSGestureEvent" in window &&
                                        "chrome" in window &&
                                        null == window.chrome.loadTimes,
                                    isFirefox:
                                        !!f.match(/Gecko\//) &&
                                        !f.match(/like Gecko/),
                                    isSafari:
                                        !!f.match(/ (Apple)?WebKit\//) &&
                                        !f.match(/ like iPhone /) &&
                                        (!window.chrome ||
                                            null == window.chrome.app),
                                    isChrome:
                                        "chrome" in window &&
                                        null != window.chrome.loadTimes,
                                    isOpera:
                                        "opera" in window &&
                                        null != window.opera.version,
                                    isKonqueror:
                                        "konqueror" in window &&
                                        "KDE" == navigator.vendor,
                                    versionAtLeast: function (e) {
                                        for (
                                            var t = this.version.split("."),
                                                n = 0,
                                                i = (e = new String(e).split(
                                                    "."
                                                )).length;
                                            n < i;
                                            n++
                                        )
                                            if (t[n] != e[n])
                                                return (
                                                    parseInt(t[n] || "0") >=
                                                    parseInt(e[n])
                                                );
                                        return !0;
                                    },
                                    Select: function (e) {
                                        var t = e[i.Browser];
                                        return t ? t(i.Browser) : null;
                                    },
                                },
                                g = f
                                    .replace(/^Mozilla\/(\d+\.)+\d+ /, "")
                                    .replace(
                                        /[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i,
                                        ""
                                    )
                                    .replace(
                                        /Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/,
                                        ""
                                    );
                            for (var x in ((i.Browser = i.Insert(
                                i.Insert(new String("Unknown"), {
                                    version: "0.0",
                                }),
                                m
                            )),
                            m))
                                if (
                                    m.hasOwnProperty(x) &&
                                    m[x] &&
                                    "is" === x.substr(0, 2)
                                ) {
                                    if (
                                        "Mac" === (x = x.slice(2)) ||
                                        "PC" === x
                                    )
                                        continue;
                                    i.Browser = i.Insert(new String(x), m);
                                    var v = new RegExp(
                                        ".*(Version/| Trident/.*; rv:)((?:\\d+\\.)+\\d+)|.*(" +
                                            x +
                                            ")" +
                                            ("MSIE" == x ? " " : "/") +
                                            "((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)"
                                    ).exec(g) || ["", "", "", "unknown", "0.0"];
                                    (i.Browser.name =
                                        "" != v[1] ? x : v[3] || v[5]),
                                        (i.Browser.version =
                                            v[2] || v[4] || v[6]);
                                    break;
                                }
                            try {
                                i.Browser.Select({
                                    Safari: function (e) {
                                        var t = parseInt(
                                            String(e.version).split(".")[0]
                                        );
                                        t > 85 && (e.webkit = e.version),
                                            t >= 538
                                                ? (e.version = "8.0")
                                                : t >= 537
                                                ? (e.version = "7.0")
                                                : t >= 536
                                                ? (e.version = "6.0")
                                                : t >= 534
                                                ? (e.version = "5.1")
                                                : t >= 533
                                                ? (e.version = "5.0")
                                                : t >= 526
                                                ? (e.version = "4.0")
                                                : t >= 525
                                                ? (e.version = "3.1")
                                                : t > 500
                                                ? (e.version = "3.0")
                                                : t > 400
                                                ? (e.version = "2.0")
                                                : t > 85 && (e.version = "1.0"),
                                            (e.webkit =
                                                navigator.appVersion.match(
                                                    /WebKit\/(\d+)\./
                                                )[1]),
                                            (e.isMobile =
                                                null !=
                                                navigator.appVersion.match(
                                                    /Mobile/i
                                                )),
                                            (e.noContextMenu = e.isMobile);
                                    },
                                    Firefox: function (e) {
                                        if (
                                            ("0.0" === e.version ||
                                                null == f.match(/Firefox/)) &&
                                            "Gecko" === navigator.product
                                        ) {
                                            var t = f.match(
                                                /[\/ ]rv:(\d+\.\d.*?)[\) ]/
                                            );
                                            if (t) e.version = t[1];
                                            else {
                                                var n = (
                                                    navigator.buildID ||
                                                    navigator.productSub ||
                                                    "0"
                                                ).substr(0, 8);
                                                n >= "20111220"
                                                    ? (e.version = "9.0")
                                                    : n >= "20111120"
                                                    ? (e.version = "8.0")
                                                    : n >= "20110927"
                                                    ? (e.version = "7.0")
                                                    : n >= "20110816"
                                                    ? (e.version = "6.0")
                                                    : n >= "20110621"
                                                    ? (e.version = "5.0")
                                                    : n >= "20110320"
                                                    ? (e.version = "4.0")
                                                    : n >= "20100121"
                                                    ? (e.version = "3.6")
                                                    : n >= "20090630"
                                                    ? (e.version = "3.5")
                                                    : n >= "20080617"
                                                    ? (e.version = "3.0")
                                                    : n >= "20061024" &&
                                                      (e.version = "2.0");
                                            }
                                        }
                                        e.isMobile =
                                            null !=
                                                navigator.appVersion.match(
                                                    /Android/i
                                                ) ||
                                            null != f.match(/ Fennec\//) ||
                                            null != f.match(/Mobile/);
                                    },
                                    Chrome: function (e) {
                                        e.noContextMenu = e.isMobile =
                                            !!navigator.userAgent.match(
                                                / Mobile[ \/]/
                                            );
                                    },
                                    Opera: function (e) {
                                        e.version = opera.version();
                                    },
                                    Edge: function (e) {
                                        e.isMobile =
                                            !!navigator.userAgent.match(
                                                / Phone/
                                            );
                                    },
                                    MSIE: function (e) {
                                        if (
                                            ((e.isMobile =
                                                !!navigator.userAgent.match(
                                                    / Phone/
                                                )),
                                            (e.isIE9 = !(
                                                !document.documentMode ||
                                                (!window.performance &&
                                                    !window.msPerformance)
                                            )),
                                            (n.HTML.setScriptBug =
                                                !e.isIE9 ||
                                                document.documentMode < 9),
                                            (n.Hub.msieHTMLCollectionBug =
                                                document.documentMode < 9),
                                            document.documentMode < 10 &&
                                                !o.params.NoMathPlayer)
                                        ) {
                                            try {
                                                new ActiveXObject(
                                                    "MathPlayer.Factory.1"
                                                ),
                                                    (e.hasMathPlayer = !0);
                                            } catch (i) {}
                                            try {
                                                if (e.hasMathPlayer) {
                                                    var t =
                                                        document.createElement(
                                                            "object"
                                                        );
                                                    (t.id = "mathplayer"),
                                                        (t.classid =
                                                            "clsid:32F66A20-7614-11D4-BD11-00104BD3F987"),
                                                        s.appendChild(t),
                                                        document.namespaces.add(
                                                            "m",
                                                            "http://www.w3.org/1998/Math/MathML"
                                                        ),
                                                        (e.mpNamespace = !0),
                                                        !document.readyState ||
                                                            ("loading" !==
                                                                document.readyState &&
                                                                "interactive" !==
                                                                    document.readyState) ||
                                                            (document.write(
                                                                '<?import namespace="m" implementation="#MathPlayer">'
                                                            ),
                                                            (e.mpImported =
                                                                !0));
                                                } else
                                                    document.namespaces.add(
                                                        "mjx_IE_fix",
                                                        "http://www.w3.org/1999/xlink"
                                                    );
                                            } catch (i) {}
                                        }
                                    },
                                });
                            } catch (b) {}
                            i.Browser.Select(n.Message.browsers),
                                t.AuthorConfig &&
                                    "function" ===
                                        typeof t.AuthorConfig.AuthorInit &&
                                    t.AuthorConfig.AuthorInit(),
                                (i.queue = t.Callback.Queue()),
                                i.queue.Push(
                                    ["Post", o.signal, "Begin"],
                                    ["Config", o],
                                    ["Cookie", o],
                                    ["Styles", o],
                                    ["Message", o],
                                    function () {
                                        return t.Callback.Queue(
                                            o.Jax(),
                                            o.Extensions()
                                        ).Push({});
                                    },
                                    ["Menu", o],
                                    o.onLoad(),
                                    function () {
                                        n.isReady = !0;
                                    },
                                    ["Typeset", o],
                                    ["Hash", o],
                                    ["MenuZoom", o],
                                    ["Post", o.signal, "End"]
                                );
                        })("MathJax"))),
                (e.exports = n);
        },
        ,
        ,
        ,
        ,
        ,
        function (e, t, n) {
            "use strict";
            (function (t) {
                !(function (t) {
                    var n = {
                        newline: /^\n+/,
                        code: /^( {4}[^\n]+\n*)+/,
                        fences: g,
                        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                        nptable: g,
                        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                        table: g,
                        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                        paragraph:
                            /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
                        text: /^[^\n]+/,
                    };
                    function i(e) {
                        (this.tokens = []),
                            (this.tokens.links = Object.create(null)),
                            (this.options = e || M.defaults),
                            (this.rules = n.normal),
                            this.options.pedantic
                                ? (this.rules = n.pedantic)
                                : this.options.gfm &&
                                  (this.options.tables
                                      ? (this.rules = n.tables)
                                      : (this.rules = n.gfm));
                    }
                    (n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
                        (n._title =
                            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
                        (n.def = d(n.def)
                            .replace("label", n._label)
                            .replace("title", n._title)
                            .getRegex()),
                        (n.bullet = /(?:[*+-]|\d{1,9}\.)/),
                        (n.item =
                            /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
                        (n.item = d(n.item, "gm")
                            .replace(/bull/g, n.bullet)
                            .getRegex()),
                        (n.list = d(n.list)
                            .replace(/bull/g, n.bullet)
                            .replace(
                                "hr",
                                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
                            )
                            .replace("def", "\\n+(?=" + n.def.source + ")")
                            .getRegex()),
                        (n._tag =
                            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
                        (n._comment = /<!--(?!-?>)[\s\S]*?-->/),
                        (n.html = d(n.html, "i")
                            .replace("comment", n._comment)
                            .replace("tag", n._tag)
                            .replace(
                                "attribute",
                                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
                            )
                            .getRegex()),
                        (n.paragraph = d(n.paragraph)
                            .replace("hr", n.hr)
                            .replace("heading", n.heading)
                            .replace("lheading", n.lheading)
                            .replace("tag", n._tag)
                            .getRegex()),
                        (n.blockquote = d(n.blockquote)
                            .replace("paragraph", n.paragraph)
                            .getRegex()),
                        (n.normal = x({}, n)),
                        (n.gfm = x({}, n.normal, {
                            fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                            paragraph: /^/,
                            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
                        })),
                        (n.gfm.paragraph = d(n.paragraph)
                            .replace(
                                "(?!",
                                "(?!" +
                                    n.gfm.fences.source.replace("\\1", "\\2") +
                                    "|" +
                                    n.list.source.replace("\\1", "\\3") +
                                    "|"
                            )
                            .getRegex()),
                        (n.tables = x({}, n.gfm, {
                            nptable:
                                /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
                        })),
                        (n.pedantic = x({}, n.normal, {
                            html: d(
                                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
                            )
                                .replace("comment", n._comment)
                                .replace(
                                    /tag/g,
                                    "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                                )
                                .getRegex(),
                            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                        })),
                        (i.rules = n),
                        (i.lex = function (e, t) {
                            return new i(t).lex(e);
                        }),
                        (i.prototype.lex = function (e) {
                            return (
                                (e = e
                                    .replace(/\r\n|\r/g, "\n")
                                    .replace(/\t/g, "    ")
                                    .replace(/\u00a0/g, " ")
                                    .replace(/\u2424/g, "\n")),
                                this.token(e, !0)
                            );
                        }),
                        (i.prototype.token = function (e, t) {
                            var i, o, r, s, a, l, u, c, h, d, p, f, m, g, x, y;
                            for (e = e.replace(/^ +$/gm, ""); e; )
                                if (
                                    ((r = this.rules.newline.exec(e)) &&
                                        ((e = e.substring(r[0].length)),
                                        1 < r[0].length &&
                                            this.tokens.push({
                                                type: "space",
                                            })),
                                    (r = this.rules.code.exec(e)))
                                )
                                    (e = e.substring(r[0].length)),
                                        (r = r[0].replace(/^ {4}/gm, "")),
                                        this.tokens.push({
                                            type: "code",
                                            text: this.options.pedantic
                                                ? r
                                                : b(r, "\n"),
                                        });
                                else if ((r = this.rules.fences.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: "code",
                                            lang: r[2] ? r[2].trim() : r[2],
                                            text: r[3] || "",
                                        });
                                else if ((r = this.rules.heading.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: "heading",
                                            depth: r[1].length,
                                            text: r[2],
                                        });
                                else if (
                                    (r = this.rules.nptable.exec(e)) &&
                                    (l = {
                                        type: "table",
                                        header: v(
                                            r[1].replace(/^ *| *\| *$/g, "")
                                        ),
                                        align: r[2]
                                            .replace(/^ *|\| *$/g, "")
                                            .split(/ *\| */),
                                        cells: r[3]
                                            ? r[3]
                                                  .replace(/\n$/, "")
                                                  .split("\n")
                                            : [],
                                    }).header.length === l.align.length
                                ) {
                                    for (
                                        e = e.substring(r[0].length), p = 0;
                                        p < l.align.length;
                                        p++
                                    )
                                        /^ *-+: *$/.test(l.align[p])
                                            ? (l.align[p] = "right")
                                            : /^ *:-+: *$/.test(l.align[p])
                                            ? (l.align[p] = "center")
                                            : /^ *:-+ *$/.test(l.align[p])
                                            ? (l.align[p] = "left")
                                            : (l.align[p] = null);
                                    for (p = 0; p < l.cells.length; p++)
                                        l.cells[p] = v(
                                            l.cells[p],
                                            l.header.length
                                        );
                                    this.tokens.push(l);
                                } else if ((r = this.rules.hr.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({ type: "hr" });
                                else if ((r = this.rules.blockquote.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: "blockquote_start",
                                        }),
                                        (r = r[0].replace(/^ *> ?/gm, "")),
                                        this.token(r, t),
                                        this.tokens.push({
                                            type: "blockquote_end",
                                        });
                                else if ((r = this.rules.list.exec(e))) {
                                    for (
                                        e = e.substring(r[0].length),
                                            u = {
                                                type: "list_start",
                                                ordered: (g =
                                                    1 < (s = r[2]).length),
                                                start: g ? +s : "",
                                                loose: !1,
                                            },
                                            this.tokens.push(u),
                                            i = !(c = []),
                                            m = (r = r[0].match(
                                                this.rules.item
                                            )).length,
                                            p = 0;
                                        p < m;
                                        p++
                                    )
                                        (d = (l = r[p]).length),
                                            ~(l = l.replace(
                                                /^ *([*+-]|\d+\.) */,
                                                ""
                                            )).indexOf("\n ") &&
                                                ((d -= l.length),
                                                (l = this.options.pedantic
                                                    ? l.replace(/^ {1,4}/gm, "")
                                                    : l.replace(
                                                          new RegExp(
                                                              "^ {1," + d + "}",
                                                              "gm"
                                                          ),
                                                          ""
                                                      ))),
                                            p !== m - 1 &&
                                                ((a = n.bullet.exec(
                                                    r[p + 1]
                                                )[0]),
                                                (1 < s.length
                                                    ? 1 === a.length
                                                    : 1 < a.length ||
                                                      (this.options
                                                          .smartLists &&
                                                          a !== s)) &&
                                                    ((e =
                                                        r
                                                            .slice(p + 1)
                                                            .join("\n") + e),
                                                    (p = m - 1))),
                                            (o = i || /\n\n(?!\s*$)/.test(l)),
                                            p !== m - 1 &&
                                                ((i =
                                                    "\n" ===
                                                    l.charAt(l.length - 1)),
                                                o || (o = i)),
                                            o && (u.loose = !0),
                                            (y = void 0),
                                            (x = /^\[[ xX]\] /.test(l)) &&
                                                ((y = " " !== l[1]),
                                                (l = l.replace(
                                                    /^\[[ xX]\] +/,
                                                    ""
                                                ))),
                                            (h = {
                                                type: "list_item_start",
                                                task: x,
                                                checked: y,
                                                loose: o,
                                            }),
                                            c.push(h),
                                            this.tokens.push(h),
                                            this.token(l, !1),
                                            this.tokens.push({
                                                type: "list_item_end",
                                            });
                                    if (u.loose)
                                        for (m = c.length, p = 0; p < m; p++)
                                            c[p].loose = !0;
                                    this.tokens.push({ type: "list_end" });
                                } else if ((r = this.rules.html.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: this.options.sanitize
                                                ? "paragraph"
                                                : "html",
                                            pre:
                                                !this.options.sanitizer &&
                                                ("pre" === r[1] ||
                                                    "script" === r[1] ||
                                                    "style" === r[1]),
                                            text: r[0],
                                        });
                                else if (t && (r = this.rules.def.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        r[3] &&
                                            (r[3] = r[3].substring(
                                                1,
                                                r[3].length - 1
                                            )),
                                        (f = r[1]
                                            .toLowerCase()
                                            .replace(/\s+/g, " ")),
                                        this.tokens.links[f] ||
                                            (this.tokens.links[f] = {
                                                href: r[2],
                                                title: r[3],
                                            });
                                else if (
                                    (r = this.rules.table.exec(e)) &&
                                    (l = {
                                        type: "table",
                                        header: v(
                                            r[1].replace(/^ *| *\| *$/g, "")
                                        ),
                                        align: r[2]
                                            .replace(/^ *|\| *$/g, "")
                                            .split(/ *\| */),
                                        cells: r[3]
                                            ? r[3]
                                                  .replace(/\n$/, "")
                                                  .split("\n")
                                            : [],
                                    }).header.length === l.align.length
                                ) {
                                    for (
                                        e = e.substring(r[0].length), p = 0;
                                        p < l.align.length;
                                        p++
                                    )
                                        /^ *-+: *$/.test(l.align[p])
                                            ? (l.align[p] = "right")
                                            : /^ *:-+: *$/.test(l.align[p])
                                            ? (l.align[p] = "center")
                                            : /^ *:-+ *$/.test(l.align[p])
                                            ? (l.align[p] = "left")
                                            : (l.align[p] = null);
                                    for (p = 0; p < l.cells.length; p++)
                                        l.cells[p] = v(
                                            l.cells[p].replace(
                                                /^ *\| *| *\| *$/g,
                                                ""
                                            ),
                                            l.header.length
                                        );
                                    this.tokens.push(l);
                                } else if ((r = this.rules.lheading.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: "heading",
                                            depth: "=" === r[2] ? 1 : 2,
                                            text: r[1],
                                        });
                                else if (
                                    t &&
                                    (r = this.rules.paragraph.exec(e))
                                )
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: "paragraph",
                                            text:
                                                "\n" ===
                                                r[1].charAt(r[1].length - 1)
                                                    ? r[1].slice(0, -1)
                                                    : r[1],
                                        });
                                else if ((r = this.rules.text.exec(e)))
                                    (e = e.substring(r[0].length)),
                                        this.tokens.push({
                                            type: "text",
                                            text: r[0],
                                        });
                                else if (e)
                                    throw new Error(
                                        "Infinite loop on byte: " +
                                            e.charCodeAt(0)
                                    );
                            return this.tokens;
                        });
                    var o = {
                        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                        url: g,
                        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                        link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
                        reflink:
                            /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                        em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                        br: /^( {2,}|\\)\n(?!\s*$)/,
                        del: g,
                        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
                    };
                    function r(e, t) {
                        if (
                            ((this.options = t || M.defaults),
                            (this.links = e),
                            (this.rules = o.normal),
                            (this.renderer = this.options.renderer || new s()),
                            (this.renderer.options = this.options),
                            !this.links)
                        )
                            throw new Error(
                                "Tokens array requires a `links` property."
                            );
                        this.options.pedantic
                            ? (this.rules = o.pedantic)
                            : this.options.gfm &&
                              (this.options.breaks
                                  ? (this.rules = o.breaks)
                                  : (this.rules = o.gfm));
                    }
                    function s(e) {
                        this.options = e || M.defaults;
                    }
                    function a() {}
                    function l(e) {
                        (this.tokens = []),
                            (this.token = null),
                            (this.options = e || M.defaults),
                            (this.options.renderer =
                                this.options.renderer || new s()),
                            (this.renderer = this.options.renderer),
                            (this.renderer.options = this.options),
                            (this.slugger = new u());
                    }
                    function u() {
                        this.seen = {};
                    }
                    function c(e, t) {
                        if (t) {
                            if (c.escapeTest.test(e))
                                return e.replace(c.escapeReplace, function (e) {
                                    return c.replacements[e];
                                });
                        } else if (c.escapeTestNoEncode.test(e))
                            return e.replace(
                                c.escapeReplaceNoEncode,
                                function (e) {
                                    return c.replacements[e];
                                }
                            );
                        return e;
                    }
                    function h(e) {
                        return e.replace(
                            /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
                            function (e, t) {
                                return "colon" === (t = t.toLowerCase())
                                    ? ":"
                                    : "#" === t.charAt(0)
                                    ? "x" === t.charAt(1)
                                        ? String.fromCharCode(
                                              parseInt(t.substring(2), 16)
                                          )
                                        : String.fromCharCode(+t.substring(1))
                                    : "";
                            }
                        );
                    }
                    function d(e, t) {
                        return (
                            (e = e.source || e),
                            (t = t || ""),
                            {
                                replace: function (t, n) {
                                    return (
                                        (n = (n = n.source || n).replace(
                                            /(^|[^\[])\^/g,
                                            "$1"
                                        )),
                                        (e = e.replace(t, n)),
                                        this
                                    );
                                },
                                getRegex: function () {
                                    return new RegExp(e, t);
                                },
                            }
                        );
                    }
                    function p(e, t, n) {
                        if (e) {
                            try {
                                var i = decodeURIComponent(h(n))
                                    .replace(/[^\w:]/g, "")
                                    .toLowerCase();
                            } catch (e) {
                                return null;
                            }
                            if (
                                0 === i.indexOf("javascript:") ||
                                0 === i.indexOf("vbscript:") ||
                                0 === i.indexOf("data:")
                            )
                                return null;
                        }
                        t &&
                            !m.test(n) &&
                            (n = (function (e, t) {
                                return (
                                    f[" " + e] ||
                                        (/^[^:]+:\/*[^/]*$/.test(e)
                                            ? (f[" " + e] = e + "/")
                                            : (f[" " + e] = b(e, "/", !0))),
                                    (e = f[" " + e]),
                                    "//" === t.slice(0, 2)
                                        ? e.replace(/:[\s\S]*/, ":") + t
                                        : "/" === t.charAt(0)
                                        ? e.replace(
                                              /(:\/*[^/]*)[\s\S]*/,
                                              "$1"
                                          ) + t
                                        : e + t
                                );
                            })(t, n));
                        try {
                            n = encodeURI(n).replace(/%25/g, "%");
                        } catch (e) {
                            return null;
                        }
                        return n;
                    }
                    (o._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"),
                        (o.em = d(o.em)
                            .replace(/punctuation/g, o._punctuation)
                            .getRegex()),
                        (o._escapes =
                            /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
                        (o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
                        (o._email =
                            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
                        (o.autolink = d(o.autolink)
                            .replace("scheme", o._scheme)
                            .replace("email", o._email)
                            .getRegex()),
                        (o._attribute =
                            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
                        (o.tag = d(o.tag)
                            .replace("comment", n._comment)
                            .replace("attribute", o._attribute)
                            .getRegex()),
                        (o._label =
                            /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/),
                        (o._href =
                            /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/),
                        (o._title =
                            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
                        (o.link = d(o.link)
                            .replace("label", o._label)
                            .replace("href", o._href)
                            .replace("title", o._title)
                            .getRegex()),
                        (o.reflink = d(o.reflink)
                            .replace("label", o._label)
                            .getRegex()),
                        (o.normal = x({}, o)),
                        (o.pedantic = x({}, o.normal, {
                            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                            link: d(/^!?\[(label)\]\((.*?)\)/)
                                .replace("label", o._label)
                                .getRegex(),
                            reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                                .replace("label", o._label)
                                .getRegex(),
                        })),
                        (o.gfm = x({}, o.normal, {
                            escape: d(o.escape)
                                .replace("])", "~|])")
                                .getRegex(),
                            _extended_email:
                                /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                            _backpedal:
                                /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                            del: /^~+(?=\S)([\s\S]*?\S)~+/,
                            text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
                        })),
                        (o.gfm.url = d(o.gfm.url, "i")
                            .replace("email", o.gfm._extended_email)
                            .getRegex()),
                        (o.breaks = x({}, o.gfm, {
                            br: d(o.br).replace("{2,}", "*").getRegex(),
                            text: d(o.gfm.text)
                                .replace(/\{2,\}/g, "*")
                                .getRegex(),
                        })),
                        (r.rules = o),
                        (r.output = function (e, t, n) {
                            return new r(t, n).output(e);
                        }),
                        (r.prototype.output = function (e) {
                            for (var t, n, i, o, s, a, l = ""; e; )
                                if ((s = this.rules.escape.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (l += c(s[1]));
                                else if ((s = this.rules.tag.exec(e)))
                                    !this.inLink && /^<a /i.test(s[0])
                                        ? (this.inLink = !0)
                                        : this.inLink &&
                                          /^<\/a>/i.test(s[0]) &&
                                          (this.inLink = !1),
                                        !this.inRawBlock &&
                                        /^<(pre|code|kbd|script)(\s|>)/i.test(
                                            s[0]
                                        )
                                            ? (this.inRawBlock = !0)
                                            : this.inRawBlock &&
                                              /^<\/(pre|code|kbd|script)(\s|>)/i.test(
                                                  s[0]
                                              ) &&
                                              (this.inRawBlock = !1),
                                        (e = e.substring(s[0].length)),
                                        (l += this.options.sanitize
                                            ? this.options.sanitizer
                                                ? this.options.sanitizer(s[0])
                                                : c(s[0])
                                            : s[0]);
                                else if ((s = this.rules.link.exec(e))) {
                                    var u = y(s[2], "()");
                                    if (-1 < u) {
                                        var h =
                                            s[0].length -
                                            (s[2].length - u) -
                                            (s[3] || "").length;
                                        (s[2] = s[2].substring(0, u)),
                                            (s[0] = s[0]
                                                .substring(0, h)
                                                .trim()),
                                            (s[3] = "");
                                    }
                                    (e = e.substring(s[0].length)),
                                        (this.inLink = !0),
                                        (i = s[2]),
                                        (o = this.options.pedantic
                                            ? (t =
                                                  /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(
                                                      i
                                                  ))
                                                ? ((i = t[1]), t[3])
                                                : ""
                                            : s[3]
                                            ? s[3].slice(1, -1)
                                            : ""),
                                        (i = i
                                            .trim()
                                            .replace(/^<([\s\S]*)>$/, "$1")),
                                        (l += this.outputLink(s, {
                                            href: r.escapes(i),
                                            title: r.escapes(o),
                                        })),
                                        (this.inLink = !1);
                                } else if (
                                    (s = this.rules.reflink.exec(e)) ||
                                    (s = this.rules.nolink.exec(e))
                                ) {
                                    if (
                                        ((e = e.substring(s[0].length)),
                                        (t = (s[2] || s[1]).replace(
                                            /\s+/g,
                                            " "
                                        )),
                                        !(t = this.links[t.toLowerCase()]) ||
                                            !t.href)
                                    ) {
                                        (l += s[0].charAt(0)),
                                            (e = s[0].substring(1) + e);
                                        continue;
                                    }
                                    (this.inLink = !0),
                                        (l += this.outputLink(s, t)),
                                        (this.inLink = !1);
                                } else if ((s = this.rules.strong.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (l += this.renderer.strong(
                                            this.output(
                                                s[4] || s[3] || s[2] || s[1]
                                            )
                                        ));
                                else if ((s = this.rules.em.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (l += this.renderer.em(
                                            this.output(
                                                s[6] ||
                                                    s[5] ||
                                                    s[4] ||
                                                    s[3] ||
                                                    s[2] ||
                                                    s[1]
                                            )
                                        ));
                                else if ((s = this.rules.code.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (l += this.renderer.codespan(
                                            c(s[2].trim(), !0)
                                        ));
                                else if ((s = this.rules.br.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (l += this.renderer.br());
                                else if ((s = this.rules.del.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (l += this.renderer.del(
                                            this.output(s[1])
                                        ));
                                else if ((s = this.rules.autolink.exec(e)))
                                    (e = e.substring(s[0].length)),
                                        (i =
                                            "@" === s[2]
                                                ? "mailto:" +
                                                  (n = c(this.mangle(s[1])))
                                                : (n = c(s[1]))),
                                        (l += this.renderer.link(i, null, n));
                                else if (
                                    this.inLink ||
                                    !(s = this.rules.url.exec(e))
                                ) {
                                    if ((s = this.rules.text.exec(e)))
                                        (e = e.substring(s[0].length)),
                                            this.inRawBlock
                                                ? (l += this.renderer.text(
                                                      s[0]
                                                  ))
                                                : (l += this.renderer.text(
                                                      c(this.smartypants(s[0]))
                                                  ));
                                    else if (e)
                                        throw new Error(
                                            "Infinite loop on byte: " +
                                                e.charCodeAt(0)
                                        );
                                } else {
                                    if ("@" === s[2])
                                        i = "mailto:" + (n = c(s[0]));
                                    else {
                                        for (
                                            ;
                                            (a = s[0]),
                                                (s[0] =
                                                    this.rules._backpedal.exec(
                                                        s[0]
                                                    )[0]),
                                                a !== s[0];

                                        );
                                        (n = c(s[0])),
                                            (i =
                                                "www." === s[1]
                                                    ? "http://" + n
                                                    : n);
                                    }
                                    (e = e.substring(s[0].length)),
                                        (l += this.renderer.link(i, null, n));
                                }
                            return l;
                        }),
                        (r.escapes = function (e) {
                            return e ? e.replace(r.rules._escapes, "$1") : e;
                        }),
                        (r.prototype.outputLink = function (e, t) {
                            var n = t.href,
                                i = t.title ? c(t.title) : null;
                            return "!" !== e[0].charAt(0)
                                ? this.renderer.link(n, i, this.output(e[1]))
                                : this.renderer.image(n, i, c(e[1]));
                        }),
                        (r.prototype.smartypants = function (e) {
                            return this.options.smartypants
                                ? e
                                      .replace(/---/g, "\u2014")
                                      .replace(/--/g, "\u2013")
                                      .replace(
                                          /(^|[-\u2014/(\[{"\s])'/g,
                                          "$1\u2018"
                                      )
                                      .replace(/'/g, "\u2019")
                                      .replace(
                                          /(^|[-\u2014/(\[{\u2018\s])"/g,
                                          "$1\u201c"
                                      )
                                      .replace(/"/g, "\u201d")
                                      .replace(/\.{3}/g, "\u2026")
                                : e;
                        }),
                        (r.prototype.mangle = function (e) {
                            if (!this.options.mangle) return e;
                            for (var t, n = "", i = e.length, o = 0; o < i; o++)
                                (t = e.charCodeAt(o)),
                                    0.5 < Math.random() &&
                                        (t = "x" + t.toString(16)),
                                    (n += "&#" + t + ";");
                            return n;
                        }),
                        (s.prototype.code = function (e, t, n) {
                            var i = (t || "").match(/\S*/)[0];
                            if (this.options.highlight) {
                                var o = this.options.highlight(e, i);
                                null != o && o !== e && ((n = !0), (e = o));
                            }
                            return i
                                ? '<pre><code class="' +
                                      this.options.langPrefix +
                                      c(i, !0) +
                                      '">' +
                                      (n ? e : c(e, !0)) +
                                      "</code></pre>\n"
                                : "<pre><code>" +
                                      (n ? e : c(e, !0)) +
                                      "</code></pre>";
                        }),
                        (s.prototype.blockquote = function (e) {
                            return "<blockquote>\n" + e + "</blockquote>\n";
                        }),
                        (s.prototype.html = function (e) {
                            return e;
                        }),
                        (s.prototype.heading = function (e, t, n, i) {
                            return this.options.headerIds
                                ? "<h" +
                                      t +
                                      ' id="' +
                                      this.options.headerPrefix +
                                      i.slug(n) +
                                      '">' +
                                      e +
                                      "</h" +
                                      t +
                                      ">\n"
                                : "<h" + t + ">" + e + "</h" + t + ">\n";
                        }),
                        (s.prototype.hr = function () {
                            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                        }),
                        (s.prototype.list = function (e, t, n) {
                            var i = t ? "ol" : "ul";
                            return (
                                "<" +
                                i +
                                (t && 1 !== n ? ' start="' + n + '"' : "") +
                                ">\n" +
                                e +
                                "</" +
                                i +
                                ">\n"
                            );
                        }),
                        (s.prototype.listitem = function (e) {
                            return "<li>" + e + "</li>\n";
                        }),
                        (s.prototype.checkbox = function (e) {
                            return (
                                "<input " +
                                (e ? 'checked="" ' : "") +
                                'disabled="" type="checkbox"' +
                                (this.options.xhtml ? " /" : "") +
                                "> "
                            );
                        }),
                        (s.prototype.paragraph = function (e) {
                            return "<p>" + e + "</p>\n";
                        }),
                        (s.prototype.table = function (e, t) {
                            return (
                                t && (t = "<tbody>" + t + "</tbody>"),
                                "<table>\n<thead>\n" +
                                    e +
                                    "</thead>\n" +
                                    t +
                                    "</table>\n"
                            );
                        }),
                        (s.prototype.tablerow = function (e) {
                            return "<tr>\n" + e + "</tr>\n";
                        }),
                        (s.prototype.tablecell = function (e, t) {
                            var n = t.header ? "th" : "td";
                            return (
                                (t.align
                                    ? "<" + n + ' align="' + t.align + '">'
                                    : "<" + n + ">") +
                                e +
                                "</" +
                                n +
                                ">\n"
                            );
                        }),
                        (s.prototype.strong = function (e) {
                            return "<strong>" + e + "</strong>";
                        }),
                        (s.prototype.em = function (e) {
                            return "<em>" + e + "</em>";
                        }),
                        (s.prototype.codespan = function (e) {
                            return "<code>" + e + "</code>";
                        }),
                        (s.prototype.br = function () {
                            return this.options.xhtml ? "<br/>" : "<br>";
                        }),
                        (s.prototype.del = function (e) {
                            return "<del>" + e + "</del>";
                        }),
                        (s.prototype.link = function (e, t, n) {
                            if (
                                null ===
                                (e = p(
                                    this.options.sanitize,
                                    this.options.baseUrl,
                                    e
                                ))
                            )
                                return n;
                            var i = '<a href="' + c(e) + '"';
                            return (
                                t && (i += ' title="' + t + '"'),
                                i + ">" + n + "</a>"
                            );
                        }),
                        (s.prototype.image = function (e, t, n) {
                            if (
                                null ===
                                (e = p(
                                    this.options.sanitize,
                                    this.options.baseUrl,
                                    e
                                ))
                            )
                                return n;
                            var i = '<img src="' + e + '" alt="' + n + '"';
                            return (
                                t && (i += ' title="' + t + '"'),
                                i + (this.options.xhtml ? "/>" : ">")
                            );
                        }),
                        (s.prototype.text = function (e) {
                            return e;
                        }),
                        (a.prototype.strong =
                            a.prototype.em =
                            a.prototype.codespan =
                            a.prototype.del =
                            a.prototype.text =
                                function (e) {
                                    return e;
                                }),
                        (a.prototype.link = a.prototype.image =
                            function (e, t, n) {
                                return "" + n;
                            }),
                        (a.prototype.br = function () {
                            return "";
                        }),
                        (l.parse = function (e, t) {
                            return new l(t).parse(e);
                        }),
                        (l.prototype.parse = function (e) {
                            (this.inline = new r(e.links, this.options)),
                                (this.inlineText = new r(
                                    e.links,
                                    x({}, this.options, { renderer: new a() })
                                )),
                                (this.tokens = e.reverse());
                            for (var t = ""; this.next(); ) t += this.tok();
                            return t;
                        }),
                        (l.prototype.next = function () {
                            return (this.token = this.tokens.pop());
                        }),
                        (l.prototype.peek = function () {
                            return this.tokens[this.tokens.length - 1] || 0;
                        }),
                        (l.prototype.parseText = function () {
                            for (
                                var e = this.token.text;
                                "text" === this.peek().type;

                            )
                                e += "\n" + this.next().text;
                            return this.inline.output(e);
                        }),
                        (l.prototype.tok = function () {
                            switch (this.token.type) {
                                case "space":
                                    return "";
                                case "hr":
                                    return this.renderer.hr();
                                case "heading":
                                    return this.renderer.heading(
                                        this.inline.output(this.token.text),
                                        this.token.depth,
                                        h(
                                            this.inlineText.output(
                                                this.token.text
                                            )
                                        ),
                                        this.slugger
                                    );
                                case "code":
                                    return this.renderer.code(
                                        this.token.text,
                                        this.token.lang,
                                        this.token.escaped
                                    );
                                case "table":
                                    var e,
                                        t,
                                        n,
                                        i,
                                        o = "",
                                        r = "";
                                    for (
                                        n = "", e = 0;
                                        e < this.token.header.length;
                                        e++
                                    )
                                        n += this.renderer.tablecell(
                                            this.inline.output(
                                                this.token.header[e]
                                            ),
                                            {
                                                header: !0,
                                                align: this.token.align[e],
                                            }
                                        );
                                    for (
                                        o += this.renderer.tablerow(n), e = 0;
                                        e < this.token.cells.length;
                                        e++
                                    ) {
                                        for (
                                            t = this.token.cells[e],
                                                n = "",
                                                i = 0;
                                            i < t.length;
                                            i++
                                        )
                                            n += this.renderer.tablecell(
                                                this.inline.output(t[i]),
                                                {
                                                    header: !1,
                                                    align: this.token.align[i],
                                                }
                                            );
                                        r += this.renderer.tablerow(n);
                                    }
                                    return this.renderer.table(o, r);
                                case "blockquote_start":
                                    for (
                                        r = "";
                                        "blockquote_end" !== this.next().type;

                                    )
                                        r += this.tok();
                                    return this.renderer.blockquote(r);
                                case "list_start":
                                    r = "";
                                    for (
                                        var s = this.token.ordered,
                                            a = this.token.start;
                                        "list_end" !== this.next().type;

                                    )
                                        r += this.tok();
                                    return this.renderer.list(r, s, a);
                                case "list_item_start":
                                    r = "";
                                    var l = this.token.loose,
                                        u = this.token.checked,
                                        c = this.token.task;
                                    for (
                                        this.token.task &&
                                        (r += this.renderer.checkbox(u));
                                        "list_item_end" !== this.next().type;

                                    )
                                        r +=
                                            l || "text" !== this.token.type
                                                ? this.tok()
                                                : this.parseText();
                                    return this.renderer.listitem(r, c, u);
                                case "html":
                                    return this.renderer.html(this.token.text);
                                case "paragraph":
                                    return this.renderer.paragraph(
                                        this.inline.output(this.token.text)
                                    );
                                case "text":
                                    return this.renderer.paragraph(
                                        this.parseText()
                                    );
                                default:
                                    var d =
                                        'Token with "' +
                                        this.token.type +
                                        '" type was not found.';
                                    if (!this.options.silent)
                                        throw new Error(d);
                            }
                        }),
                        (u.prototype.slug = function (e) {
                            var t = e
                                .toLowerCase()
                                .trim()
                                .replace(
                                    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                                    ""
                                )
                                .replace(/\s/g, "-");
                            if (this.seen.hasOwnProperty(t))
                                for (
                                    var n = t;
                                    this.seen[n]++,
                                        (t = n + "-" + this.seen[n]),
                                        this.seen.hasOwnProperty(t);

                                );
                            return (this.seen[t] = 0), t;
                        }),
                        (c.escapeTest = /[&<>"']/),
                        (c.escapeReplace = /[&<>"']/g),
                        (c.replacements = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                        }),
                        (c.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
                        (c.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
                    var f = {},
                        m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                    function g() {}
                    function x(e) {
                        for (var t, n, i = 1; i < arguments.length; i++)
                            for (n in (t = arguments[i]))
                                Object.prototype.hasOwnProperty.call(t, n) &&
                                    (e[n] = t[n]);
                        return e;
                    }
                    function v(e, t) {
                        var n = e
                                .replace(/\|/g, function (e, t, n) {
                                    for (
                                        var i = !1, o = t;
                                        0 <= --o && "\\" === n[o];

                                    )
                                        i = !i;
                                    return i ? "|" : " |";
                                })
                                .split(/ \|/),
                            i = 0;
                        if (n.length > t) n.splice(t);
                        else for (; n.length < t; ) n.push("");
                        for (; i < n.length; i++)
                            n[i] = n[i].trim().replace(/\\\|/g, "|");
                        return n;
                    }
                    function b(e, t, n) {
                        if (0 === e.length) return "";
                        for (var i = 0; i < e.length; ) {
                            var o = e.charAt(e.length - i - 1);
                            if (o !== t || n) {
                                if (o === t || !n) break;
                                i++;
                            } else i++;
                        }
                        return e.substr(0, e.length - i);
                    }
                    function y(e, t) {
                        if (-1 === e.indexOf(t[1])) return -1;
                        for (var n = 0, i = 0; i < e.length; i++)
                            if ("\\" === e[i]) i++;
                            else if (e[i] === t[0]) n++;
                            else if (e[i] === t[1] && --n < 0) return i;
                        return -1;
                    }
                    function M(e, t, n) {
                        if (null == e)
                            throw new Error(
                                "marked(): input parameter is undefined or null"
                            );
                        if ("string" != typeof e)
                            throw new Error(
                                "marked(): input parameter is of type " +
                                    Object.prototype.toString.call(e) +
                                    ", string expected"
                            );
                        if (n || "function" == typeof t) {
                            n || ((n = t), (t = null));
                            var o,
                                r,
                                s = (t = x({}, M.defaults, t || {})).highlight,
                                a = 0;
                            try {
                                o = i.lex(e, t);
                            } catch (e) {
                                return n(e);
                            }
                            r = o.length;
                            var u = function (e) {
                                if (e) return (t.highlight = s), n(e);
                                var i;
                                try {
                                    i = l.parse(o, t);
                                } catch (i) {
                                    e = i;
                                }
                                return (t.highlight = s), e ? n(e) : n(null, i);
                            };
                            if (!s || s.length < 3) return u();
                            if ((delete t.highlight, !r)) return u();
                            for (; a < o.length; a++)
                                !(function (e) {
                                    "code" !== e.type
                                        ? --r || u()
                                        : s(e.text, e.lang, function (t, n) {
                                              return t
                                                  ? u(t)
                                                  : null == n || n === e.text
                                                  ? --r || u()
                                                  : ((e.text = n),
                                                    (e.escaped = !0),
                                                    void (--r || u()));
                                          });
                                })(o[a]);
                        } else
                            try {
                                return (
                                    t && (t = x({}, M.defaults, t)),
                                    l.parse(i.lex(e, t), t)
                                );
                            } catch (e) {
                                if (
                                    ((e.message +=
                                        "\nPlease report this to https://github.com/markedjs/marked."),
                                    (t || M.defaults).silent)
                                )
                                    return (
                                        "<p>An error occurred:</p><pre>" +
                                        c(e.message + "", !0) +
                                        "</pre>"
                                    );
                                throw e;
                            }
                    }
                    (g.exec = g),
                        (M.options = M.setOptions =
                            function (e) {
                                return x(M.defaults, e), M;
                            }),
                        (M.getDefaults = function () {
                            return {
                                baseUrl: null,
                                breaks: !1,
                                gfm: !0,
                                headerIds: !0,
                                headerPrefix: "",
                                highlight: null,
                                langPrefix: "language-",
                                mangle: !0,
                                pedantic: !1,
                                renderer: new s(),
                                sanitize: !1,
                                sanitizer: null,
                                silent: !1,
                                smartLists: !1,
                                smartypants: !1,
                                tables: !0,
                                xhtml: !1,
                            };
                        }),
                        (M.defaults = M.getDefaults()),
                        (M.Parser = l),
                        (M.parser = l.parse),
                        (M.Renderer = s),
                        (M.TextRenderer = a),
                        (M.Lexer = i),
                        (M.lexer = i.lex),
                        (M.InlineLexer = r),
                        (M.inlineLexer = r.output),
                        (M.Slugger = u),
                        (M.parse = M),
                        (e.exports = M);
                })(this || ("undefined" != typeof window && window));
            }.call(this, n(3)));
        },
        ,
        ,
        function (e, t, n) {
            "use strict";
            var i;
            (i = function () {
                return (function (e) {
                    var t = {};
                    function n(i) {
                        if (t[i]) return t[i].exports;
                        var o = (t[i] = { i: i, l: !1, exports: {} });
                        return (
                            e[i].call(o.exports, o, o.exports, n),
                            (o.l = !0),
                            o.exports
                        );
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function (e, t, i) {
                            n.o(e, t) ||
                                Object.defineProperty(e, t, {
                                    enumerable: !0,
                                    get: i,
                                });
                        }),
                        (n.r = function (e) {
                            "undefined" !== typeof Symbol &&
                                Symbol.toStringTag &&
                                Object.defineProperty(e, Symbol.toStringTag, {
                                    value: "Module",
                                }),
                                Object.defineProperty(e, "__esModule", {
                                    value: !0,
                                });
                        }),
                        (n.t = function (e, t) {
                            if ((1 & t && (e = n(e)), 8 & t)) return e;
                            if (
                                4 & t &&
                                "object" === typeof e &&
                                e &&
                                e.__esModule
                            )
                                return e;
                            var i = Object.create(null);
                            if (
                                (n.r(i),
                                Object.defineProperty(i, "default", {
                                    enumerable: !0,
                                    value: e,
                                }),
                                2 & t && "string" != typeof e)
                            )
                                for (var o in e)
                                    n.d(
                                        i,
                                        o,
                                        function (t) {
                                            return e[t];
                                        }.bind(null, o)
                                    );
                            return i;
                        }),
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                          return e.default;
                                      }
                                    : function () {
                                          return e;
                                      };
                            return n.d(t, "a", t), t;
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (n.p = ""),
                        n((n.s = 0))
                    );
                })([
                    function (e, t, n) {
                        var i =
                                "function" === typeof Symbol &&
                                "symbol" === typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" === typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
                                      },
                            o = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        (i.enumerable = i.enumerable || !1),
                                            (i.configurable = !0),
                                            "value" in i && (i.writable = !0),
                                            Object.defineProperty(e, i.key, i);
                                    }
                                }
                                return function (t, n, i) {
                                    return (
                                        n && e(t.prototype, n), i && e(t, i), t
                                    );
                                };
                            })(),
                            r = l(n(1)),
                            s = l(n(3)),
                            a = l(n(4));
                        function l(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var u = (function (e) {
                            function t(e, n) {
                                !(function (e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                })(this, t);
                                var i = (function (e, t) {
                                    if (!e)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        );
                                    return !t ||
                                        ("object" !== typeof t &&
                                            "function" !== typeof t)
                                        ? e
                                        : t;
                                })(
                                    this,
                                    (
                                        t.__proto__ || Object.getPrototypeOf(t)
                                    ).call(this)
                                );
                                return i.resolveOptions(n), i.listenClick(e), i;
                            }
                            return (
                                (function (e, t) {
                                    if ("function" !== typeof t && null !== t)
                                        throw new TypeError(
                                            "Super expression must either be null or a function, not " +
                                                typeof t
                                        );
                                    (e.prototype = Object.create(
                                        t && t.prototype,
                                        {
                                            constructor: {
                                                value: e,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0,
                                            },
                                        }
                                    )),
                                        t &&
                                            (Object.setPrototypeOf
                                                ? Object.setPrototypeOf(e, t)
                                                : (e.__proto__ = t));
                                })(t, e),
                                o(
                                    t,
                                    [
                                        {
                                            key: "resolveOptions",
                                            value: function () {
                                                var e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : {};
                                                (this.action =
                                                    "function" ===
                                                    typeof e.action
                                                        ? e.action
                                                        : this.defaultAction),
                                                    (this.target =
                                                        "function" ===
                                                        typeof e.target
                                                            ? e.target
                                                            : this
                                                                  .defaultTarget),
                                                    (this.text =
                                                        "function" ===
                                                        typeof e.text
                                                            ? e.text
                                                            : this.defaultText),
                                                    (this.container =
                                                        "object" ===
                                                        i(e.container)
                                                            ? e.container
                                                            : document.body);
                                            },
                                        },
                                        {
                                            key: "listenClick",
                                            value: function (e) {
                                                var t = this;
                                                this.listener = (0, a.default)(
                                                    e,
                                                    "click",
                                                    function (e) {
                                                        return t.onClick(e);
                                                    }
                                                );
                                            },
                                        },
                                        {
                                            key: "onClick",
                                            value: function (e) {
                                                var t =
                                                    e.delegateTarget ||
                                                    e.currentTarget;
                                                this.clipboardAction &&
                                                    (this.clipboardAction =
                                                        null),
                                                    (this.clipboardAction =
                                                        new r.default({
                                                            action: this.action(
                                                                t
                                                            ),
                                                            target: this.target(
                                                                t
                                                            ),
                                                            text: this.text(t),
                                                            container:
                                                                this.container,
                                                            trigger: t,
                                                            emitter: this,
                                                        }));
                                            },
                                        },
                                        {
                                            key: "defaultAction",
                                            value: function (e) {
                                                return c("action", e);
                                            },
                                        },
                                        {
                                            key: "defaultTarget",
                                            value: function (e) {
                                                var t = c("target", e);
                                                if (t)
                                                    return document.querySelector(
                                                        t
                                                    );
                                            },
                                        },
                                        {
                                            key: "defaultText",
                                            value: function (e) {
                                                return c("text", e);
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                this.listener.destroy(),
                                                    this.clipboardAction &&
                                                        (this.clipboardAction.destroy(),
                                                        (this.clipboardAction =
                                                            null));
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            key: "isSupported",
                                            value: function () {
                                                var e =
                                                        arguments.length > 0 &&
                                                        void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : ["copy", "cut"],
                                                    t =
                                                        "string" === typeof e
                                                            ? [e]
                                                            : e,
                                                    n =
                                                        !!document.queryCommandSupported;
                                                return (
                                                    t.forEach(function (e) {
                                                        n =
                                                            n &&
                                                            !!document.queryCommandSupported(
                                                                e
                                                            );
                                                    }),
                                                    n
                                                );
                                            },
                                        },
                                    ]
                                ),
                                t
                            );
                        })(s.default);
                        function c(e, t) {
                            var n = "data-clipboard-" + e;
                            if (t.hasAttribute(n)) return t.getAttribute(n);
                        }
                        e.exports = u;
                    },
                    function (e, t, n) {
                        var i,
                            o =
                                "function" === typeof Symbol &&
                                "symbol" === typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" === typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
                                      },
                            r = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        (i.enumerable = i.enumerable || !1),
                                            (i.configurable = !0),
                                            "value" in i && (i.writable = !0),
                                            Object.defineProperty(e, i.key, i);
                                    }
                                }
                                return function (t, n, i) {
                                    return (
                                        n && e(t.prototype, n), i && e(t, i), t
                                    );
                                };
                            })(),
                            s = n(2),
                            a = (i = s) && i.__esModule ? i : { default: i },
                            l = (function () {
                                function e(t) {
                                    !(function (e, t) {
                                        if (!(e instanceof t))
                                            throw new TypeError(
                                                "Cannot call a class as a function"
                                            );
                                    })(this, e),
                                        this.resolveOptions(t),
                                        this.initSelection();
                                }
                                return (
                                    r(e, [
                                        {
                                            key: "resolveOptions",
                                            value: function () {
                                                var e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : {};
                                                (this.action = e.action),
                                                    (this.container =
                                                        e.container),
                                                    (this.emitter = e.emitter),
                                                    (this.target = e.target),
                                                    (this.text = e.text),
                                                    (this.trigger = e.trigger),
                                                    (this.selectedText = "");
                                            },
                                        },
                                        {
                                            key: "initSelection",
                                            value: function () {
                                                this.text
                                                    ? this.selectFake()
                                                    : this.target &&
                                                      this.selectTarget();
                                            },
                                        },
                                        {
                                            key: "selectFake",
                                            value: function () {
                                                var e = this,
                                                    t =
                                                        "rtl" ==
                                                        document.documentElement.getAttribute(
                                                            "dir"
                                                        );
                                                this.removeFake(),
                                                    (this.fakeHandlerCallback =
                                                        function () {
                                                            return e.removeFake();
                                                        }),
                                                    (this.fakeHandler =
                                                        this.container.addEventListener(
                                                            "click",
                                                            this
                                                                .fakeHandlerCallback
                                                        ) || !0),
                                                    (this.fakeElem =
                                                        document.createElement(
                                                            "textarea"
                                                        )),
                                                    (this.fakeElem.style.fontSize =
                                                        "12pt"),
                                                    (this.fakeElem.style.border =
                                                        "0"),
                                                    (this.fakeElem.style.padding =
                                                        "0"),
                                                    (this.fakeElem.style.margin =
                                                        "0"),
                                                    (this.fakeElem.style.position =
                                                        "absolute"),
                                                    (this.fakeElem.style[
                                                        t ? "right" : "left"
                                                    ] = "-9999px");
                                                var n =
                                                    window.pageYOffset ||
                                                    document.documentElement
                                                        .scrollTop;
                                                (this.fakeElem.style.top =
                                                    n + "px"),
                                                    this.fakeElem.setAttribute(
                                                        "readonly",
                                                        ""
                                                    ),
                                                    (this.fakeElem.value =
                                                        this.text),
                                                    this.container.appendChild(
                                                        this.fakeElem
                                                    ),
                                                    (this.selectedText = (0,
                                                    a.default)(this.fakeElem)),
                                                    this.copyText();
                                            },
                                        },
                                        {
                                            key: "removeFake",
                                            value: function () {
                                                this.fakeHandler &&
                                                    (this.container.removeEventListener(
                                                        "click",
                                                        this.fakeHandlerCallback
                                                    ),
                                                    (this.fakeHandler = null),
                                                    (this.fakeHandlerCallback =
                                                        null)),
                                                    this.fakeElem &&
                                                        (this.container.removeChild(
                                                            this.fakeElem
                                                        ),
                                                        (this.fakeElem = null));
                                            },
                                        },
                                        {
                                            key: "selectTarget",
                                            value: function () {
                                                (this.selectedText = (0,
                                                a.default)(this.target)),
                                                    this.copyText();
                                            },
                                        },
                                        {
                                            key: "copyText",
                                            value: function () {
                                                var e = void 0;
                                                try {
                                                    e = document.execCommand(
                                                        this.action
                                                    );
                                                } catch (t) {
                                                    e = !1;
                                                }
                                                this.handleResult(e);
                                            },
                                        },
                                        {
                                            key: "handleResult",
                                            value: function (e) {
                                                this.emitter.emit(
                                                    e ? "success" : "error",
                                                    {
                                                        action: this.action,
                                                        text: this.selectedText,
                                                        trigger: this.trigger,
                                                        clearSelection:
                                                            this.clearSelection.bind(
                                                                this
                                                            ),
                                                    }
                                                );
                                            },
                                        },
                                        {
                                            key: "clearSelection",
                                            value: function () {
                                                this.trigger &&
                                                    this.trigger.focus(),
                                                    window
                                                        .getSelection()
                                                        .removeAllRanges();
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                this.removeFake();
                                            },
                                        },
                                        {
                                            key: "action",
                                            set: function () {
                                                var e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : "copy";
                                                if (
                                                    ((this._action = e),
                                                    "copy" !== this._action &&
                                                        "cut" !== this._action)
                                                )
                                                    throw new Error(
                                                        'Invalid "action" value, use either "copy" or "cut"'
                                                    );
                                            },
                                            get: function () {
                                                return this._action;
                                            },
                                        },
                                        {
                                            key: "target",
                                            set: function (e) {
                                                if (void 0 !== e) {
                                                    if (
                                                        !e ||
                                                        "object" !==
                                                            ("undefined" ===
                                                            typeof e
                                                                ? "undefined"
                                                                : o(e)) ||
                                                        1 !== e.nodeType
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" value, use a valid Element'
                                                        );
                                                    if (
                                                        "copy" ===
                                                            this.action &&
                                                        e.hasAttribute(
                                                            "disabled"
                                                        )
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                                        );
                                                    if (
                                                        "cut" === this.action &&
                                                        (e.hasAttribute(
                                                            "readonly"
                                                        ) ||
                                                            e.hasAttribute(
                                                                "disabled"
                                                            ))
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                                        );
                                                    this._target = e;
                                                }
                                            },
                                            get: function () {
                                                return this._target;
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })();
                        e.exports = l;
                    },
                    function (e, t) {
                        e.exports = function (e) {
                            var t;
                            if ("SELECT" === e.nodeName)
                                e.focus(), (t = e.value);
                            else if (
                                "INPUT" === e.nodeName ||
                                "TEXTAREA" === e.nodeName
                            ) {
                                var n = e.hasAttribute("readonly");
                                n || e.setAttribute("readonly", ""),
                                    e.select(),
                                    e.setSelectionRange(0, e.value.length),
                                    n || e.removeAttribute("readonly"),
                                    (t = e.value);
                            } else {
                                e.hasAttribute("contenteditable") && e.focus();
                                var i = window.getSelection(),
                                    o = document.createRange();
                                o.selectNodeContents(e),
                                    i.removeAllRanges(),
                                    i.addRange(o),
                                    (t = i.toString());
                            }
                            return t;
                        };
                    },
                    function (e, t) {
                        function n() {}
                        (n.prototype = {
                            on: function (e, t, n) {
                                var i = this.e || (this.e = {});
                                return (
                                    (i[e] || (i[e] = [])).push({
                                        fn: t,
                                        ctx: n,
                                    }),
                                    this
                                );
                            },
                            once: function (e, t, n) {
                                var i = this;
                                function o() {
                                    i.off(e, o), t.apply(n, arguments);
                                }
                                return (o._ = t), this.on(e, o, n);
                            },
                            emit: function (e) {
                                for (
                                    var t = [].slice.call(arguments, 1),
                                        n = (
                                            (this.e || (this.e = {}))[e] || []
                                        ).slice(),
                                        i = 0,
                                        o = n.length;
                                    i < o;
                                    i++
                                )
                                    n[i].fn.apply(n[i].ctx, t);
                                return this;
                            },
                            off: function (e, t) {
                                var n = this.e || (this.e = {}),
                                    i = n[e],
                                    o = [];
                                if (i && t)
                                    for (var r = 0, s = i.length; r < s; r++)
                                        i[r].fn !== t &&
                                            i[r].fn._ !== t &&
                                            o.push(i[r]);
                                return (
                                    o.length ? (n[e] = o) : delete n[e], this
                                );
                            },
                        }),
                            (e.exports = n);
                    },
                    function (e, t, n) {
                        var i = n(5),
                            o = n(6);
                        e.exports = function (e, t, n) {
                            if (!e && !t && !n)
                                throw new Error("Missing required arguments");
                            if (!i.string(t))
                                throw new TypeError(
                                    "Second argument must be a String"
                                );
                            if (!i.fn(n))
                                throw new TypeError(
                                    "Third argument must be a Function"
                                );
                            if (i.node(e))
                                return (function (e, t, n) {
                                    return (
                                        e.addEventListener(t, n),
                                        {
                                            destroy: function () {
                                                e.removeEventListener(t, n);
                                            },
                                        }
                                    );
                                })(e, t, n);
                            if (i.nodeList(e))
                                return (function (e, t, n) {
                                    return (
                                        Array.prototype.forEach.call(
                                            e,
                                            function (e) {
                                                e.addEventListener(t, n);
                                            }
                                        ),
                                        {
                                            destroy: function () {
                                                Array.prototype.forEach.call(
                                                    e,
                                                    function (e) {
                                                        e.removeEventListener(
                                                            t,
                                                            n
                                                        );
                                                    }
                                                );
                                            },
                                        }
                                    );
                                })(e, t, n);
                            if (i.string(e))
                                return (function (e, t, n) {
                                    return o(document.body, e, t, n);
                                })(e, t, n);
                            throw new TypeError(
                                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                            );
                        };
                    },
                    function (e, t) {
                        (t.node = function (e) {
                            return (
                                void 0 !== e &&
                                e instanceof HTMLElement &&
                                1 === e.nodeType
                            );
                        }),
                            (t.nodeList = function (e) {
                                var n = Object.prototype.toString.call(e);
                                return (
                                    void 0 !== e &&
                                    ("[object NodeList]" === n ||
                                        "[object HTMLCollection]" === n) &&
                                    "length" in e &&
                                    (0 === e.length || t.node(e[0]))
                                );
                            }),
                            (t.string = function (e) {
                                return (
                                    "string" === typeof e || e instanceof String
                                );
                            }),
                            (t.fn = function (e) {
                                return (
                                    "[object Function]" ===
                                    Object.prototype.toString.call(e)
                                );
                            });
                    },
                    function (e, t, n) {
                        var i = n(7);
                        function o(e, t, n, i, o) {
                            var s = r.apply(this, arguments);
                            return (
                                e.addEventListener(n, s, o),
                                {
                                    destroy: function () {
                                        e.removeEventListener(n, s, o);
                                    },
                                }
                            );
                        }
                        function r(e, t, n, o) {
                            return function (n) {
                                (n.delegateTarget = i(n.target, t)),
                                    n.delegateTarget && o.call(e, n);
                            };
                        }
                        e.exports = function (e, t, n, i, r) {
                            return "function" === typeof e.addEventListener
                                ? o.apply(null, arguments)
                                : "function" === typeof n
                                ? o.bind(null, document).apply(null, arguments)
                                : ("string" === typeof e &&
                                      (e = document.querySelectorAll(e)),
                                  Array.prototype.map.call(e, function (e) {
                                      return o(e, t, n, i, r);
                                  }));
                        };
                    },
                    function (e, t) {
                        var n = 9;
                        if (
                            "undefined" !== typeof Element &&
                            !Element.prototype.matches
                        ) {
                            var i = Element.prototype;
                            i.matches =
                                i.matchesSelector ||
                                i.mozMatchesSelector ||
                                i.msMatchesSelector ||
                                i.oMatchesSelector ||
                                i.webkitMatchesSelector;
                        }
                        e.exports = function (e, t) {
                            for (; e && e.nodeType !== n; ) {
                                if (
                                    "function" === typeof e.matches &&
                                    e.matches(t)
                                )
                                    return e;
                                e = e.parentNode;
                            }
                        };
                    },
                ]);
            }),
                (e.exports = i());
        },
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, n) {
            e.exports = n(26);
        },
        function (e, t, n) {},
        function (e, t, n) {},
        function (e, t, n) {},
        function (e, t, n) {},
        function (e, t, n) {},
        ,
        ,
        ,
        ,
        function (e, t, n) {
            "use strict";
            n.r(t);
            n(8);
            var i = n(4),
                o = (n(17), n(18), n(19), n(20), n(21), n(0)),
                r = n.n(o);
            !(function (e, t, n, i, o) {
                var s = "2.7.5",
                    a = r.a.Callback.Signal("menu");
                r.a.Extension.MathMenu = { version: s, signal: a };
                var l,
                    u,
                    c,
                    h = function (e) {
                        return r.a.Localization._.apply(
                            r.a.Localization,
                            [["MathMenu", e]].concat(
                                [].slice.call(arguments, 1)
                            )
                        );
                    },
                    d = r.a.Object.isArray,
                    p = e.Browser.isPC,
                    f = e.Browser.isMSIE,
                    m = (document.documentMode || 0) > 8,
                    g = p ? null : "5px",
                    x = e.CombineConfig("MathMenu", {
                        delay: 150,
                        showRenderer: !0,
                        showMathPlayer: !0,
                        showFontMenu: !1,
                        showContext: !1,
                        showDiscoverable: !1,
                        showLocale: !0,
                        showLocaleURL: !1,
                        semanticsAnnotations: {
                            TeX: ["TeX", "LaTeX", "application/x-tex"],
                            StarMath: ["StarMath 5.0"],
                            Maple: ["Maple"],
                            ContentMathML: [
                                "MathML-Content",
                                "application/mathml-content+xml",
                            ],
                            OpenMath: ["OpenMath"],
                        },
                        windowSettings: {
                            status: "no",
                            toolbar: "no",
                            locationbar: "no",
                            menubar: "no",
                            directories: "no",
                            personalbar: "no",
                            resizable: "yes",
                            scrollbars: "yes",
                            width: 400,
                            height: 300,
                            left: Math.round((screen.width - 400) / 2),
                            top: Math.round((screen.height - 300) / 3),
                        },
                        styles: {
                            "#MathJax_About": {
                                position: "fixed",
                                left: "50%",
                                width: "auto",
                                "text-align": "center",
                                border: "3px outset",
                                padding: "1em 2em",
                                "background-color": "#DDDDDD",
                                color: "black",
                                cursor: "default",
                                "font-family": "message-box",
                                "font-size": "120%",
                                "font-style": "normal",
                                "text-indent": 0,
                                "text-transform": "none",
                                "line-height": "normal",
                                "letter-spacing": "normal",
                                "word-spacing": "normal",
                                "word-wrap": "normal",
                                "white-space": "nowrap",
                                float: "none",
                                "z-index": 201,
                                "border-radius": "15px",
                                "-webkit-border-radius": "15px",
                                "-moz-border-radius": "15px",
                                "-khtml-border-radius": "15px",
                                "box-shadow": "0px 10px 20px #808080",
                                "-webkit-box-shadow": "0px 10px 20px #808080",
                                "-moz-box-shadow": "0px 10px 20px #808080",
                                "-khtml-box-shadow": "0px 10px 20px #808080",
                                filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",
                            },
                            "#MathJax_About.MathJax_MousePost": {
                                outline: "none",
                            },
                            ".MathJax_Menu": {
                                position: "absolute",
                                "background-color": "white",
                                color: "black",
                                width: "auto",
                                padding: p ? "2px" : "5px 0px",
                                border: "1px solid #CCCCCC",
                                margin: 0,
                                cursor: "default",
                                font: "menu",
                                "text-align": "left",
                                "text-indent": 0,
                                "text-transform": "none",
                                "line-height": "normal",
                                "letter-spacing": "normal",
                                "word-spacing": "normal",
                                "word-wrap": "normal",
                                "white-space": "nowrap",
                                float: "none",
                                "z-index": 201,
                                "border-radius": g,
                                "-webkit-border-radius": g,
                                "-moz-border-radius": g,
                                "-khtml-border-radius": g,
                                "box-shadow": "0px 10px 20px #808080",
                                "-webkit-box-shadow": "0px 10px 20px #808080",
                                "-moz-box-shadow": "0px 10px 20px #808080",
                                "-khtml-box-shadow": "0px 10px 20px #808080",
                                filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",
                            },
                            ".MathJax_MenuItem": {
                                padding: p ? "2px 2em" : "1px 2em",
                                background: "transparent",
                            },
                            ".MathJax_MenuArrow": {
                                position: "absolute",
                                right: ".5em",
                                "padding-top": ".25em",
                                color: "#666666",
                                "font-family": f ? "'Arial unicode MS'" : null,
                                "font-size": ".75em",
                            },
                            ".MathJax_MenuActive .MathJax_MenuArrow": {
                                color: "white",
                            },
                            ".MathJax_MenuArrow.RTL": {
                                left: ".5em",
                                right: "auto",
                            },
                            ".MathJax_MenuCheck": {
                                position: "absolute",
                                left: ".7em",
                                "font-family": f ? "'Arial unicode MS'" : null,
                            },
                            ".MathJax_MenuCheck.RTL": {
                                right: ".7em",
                                left: "auto",
                            },
                            ".MathJax_MenuRadioCheck": {
                                position: "absolute",
                                left: p ? "1em" : ".7em",
                            },
                            ".MathJax_MenuRadioCheck.RTL": {
                                right: p ? "1em" : ".7em",
                                left: "auto",
                            },
                            ".MathJax_MenuLabel": {
                                padding: p
                                    ? "2px 2em 4px 1.33em"
                                    : "1px 2em 3px 1.33em",
                                "font-style": "italic",
                            },
                            ".MathJax_MenuRule": {
                                "border-top": p
                                    ? "1px solid #CCCCCC"
                                    : "1px solid #DDDDDD",
                                margin: p ? "4px 1px 0px" : "4px 3px",
                            },
                            ".MathJax_MenuDisabled": { color: "GrayText" },
                            ".MathJax_MenuActive": {
                                "background-color": p ? "Highlight" : "#606872",
                                color: p ? "HighlightText" : "white",
                            },
                            ".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus":
                                {
                                    "background-color": "#E8E8E8",
                                },
                            ".MathJax_ContextMenu:focus": { outline: "none" },
                            ".MathJax_ContextMenu .MathJax_MenuItem:focus": {
                                outline: "none",
                            },
                            "#MathJax_AboutClose": {
                                top: ".2em",
                                right: ".2em",
                            },
                            ".MathJax_Menu .MathJax_MenuClose": {
                                top: "-10px",
                                left: "-10px",
                            },
                            ".MathJax_MenuClose": {
                                position: "absolute",
                                cursor: "pointer",
                                display: "inline-block",
                                border: "2px solid #AAA",
                                "border-radius": "18px",
                                "-webkit-border-radius": "18px",
                                "-moz-border-radius": "18px",
                                "-khtml-border-radius": "18px",
                                "font-family": "'Courier New',Courier",
                                "font-size": "24px",
                                color: "#F0F0F0",
                            },
                            ".MathJax_MenuClose span": {
                                display: "block",
                                "background-color": "#AAA",
                                border: "1.5px solid",
                                "border-radius": "18px",
                                "-webkit-border-radius": "18px",
                                "-moz-border-radius": "18px",
                                "-khtml-border-radius": "18px",
                                "line-height": 0,
                                padding: "8px 0 6px",
                            },
                            ".MathJax_MenuClose:hover": {
                                color: "white!important",
                                border: "2px solid #CCC!important",
                            },
                            ".MathJax_MenuClose:hover span": {
                                "background-color": "#CCC!important",
                            },
                            ".MathJax_MenuClose:hover:focus": {
                                outline: "none",
                            },
                        },
                    });
                e.Register.StartupHook("MathEvents Ready", function () {
                    (l = r.a.Extension.MathEvents.Event.False),
                        (u = r.a.Extension.MathEvents.Hover),
                        (c = r.a.Extension.MathEvents.Event.KEY);
                });
                var v = r.a.Object.Subclass(
                        {
                            Keydown: function (e, t) {
                                switch (e.keyCode) {
                                    case c.ESCAPE:
                                        this.Remove(e, t);
                                        break;
                                    case c.RIGHT:
                                        this.Right(e, t);
                                        break;
                                    case c.LEFT:
                                        this.Left(e, t);
                                        break;
                                    case c.UP:
                                        this.Up(e, t);
                                        break;
                                    case c.DOWN:
                                        this.Down(e, t);
                                        break;
                                    case c.RETURN:
                                    case c.SPACE:
                                        this.Space(e, t);
                                        break;
                                    default:
                                        return;
                                }
                                return l(e);
                            },
                            Escape: function (e, t) {},
                            Right: function (e, t) {},
                            Left: function (e, t) {},
                            Up: function (e, t) {},
                            Down: function (e, t) {},
                            Space: function (e, t) {},
                        },
                        {}
                    ),
                    b = (r.a.Menu = v.Subclass(
                        {
                            version: s,
                            items: [],
                            posted: !1,
                            title: null,
                            margin: 5,
                            Init: function (e) {
                                this.items = [].slice.call(arguments, 0);
                            },
                            With: function (t) {
                                return t && e.Insert(this, t), this;
                            },
                            Post: function (e, n, i) {
                                e || (e = window.event || {});
                                var o =
                                    document.getElementById(
                                        "MathJax_MenuFrame"
                                    );
                                o ||
                                    ((o = b.Background(this)),
                                    delete y.lastItem,
                                    delete y.lastMenu,
                                    delete b.skipUp,
                                    a.Post(["post", b.jax]),
                                    (b.isRTL =
                                        "rtl" ===
                                        r.a.Localization.fontDirection()));
                                var s = t.Element("div", {
                                    onmouseup: b.Mouseup,
                                    ondblclick: l,
                                    ondragstart: l,
                                    onselectstart: l,
                                    oncontextmenu: l,
                                    menuItem: this,
                                    className: "MathJax_Menu",
                                    onkeydown: b.Keydown,
                                    role: "menu",
                                });
                                ("contextmenu" !== e.type &&
                                    "mouseover" !== e.type) ||
                                    (s.className += " MathJax_ContextMenu"),
                                    i || r.a.Localization.setCSS(s);
                                for (
                                    var u = 0, c = this.items.length;
                                    u < c;
                                    u++
                                )
                                    this.items[u].Create(s);
                                b.isMobile &&
                                    t.addElement(
                                        s,
                                        "span",
                                        {
                                            className: "MathJax_MenuClose",
                                            menu: n,
                                            ontouchstart: b.Close,
                                            ontouchend: l,
                                            onmousedown: b.Close,
                                            onmouseup: l,
                                        },
                                        [["span", {}, "\xd7"]]
                                    ),
                                    o.appendChild(s),
                                    (this.posted = !0),
                                    s.offsetWidth &&
                                        (s.style.width =
                                            s.offsetWidth + 2 + "px");
                                var h = e.pageX,
                                    d = e.pageY,
                                    f = document.body.getBoundingClientRect(),
                                    m = window.getComputedStyle
                                        ? window.getComputedStyle(document.body)
                                        : { marginLeft: "0px" },
                                    g =
                                        f.right -
                                        Math.min(0, f.left) +
                                        parseFloat(m.marginLeft);
                                if (
                                    (!h &&
                                        !d &&
                                        "clientX" in e &&
                                        ((h =
                                            e.clientX +
                                            document.body.scrollLeft +
                                            document.documentElement
                                                .scrollLeft),
                                        (d =
                                            e.clientY +
                                            document.body.scrollTop +
                                            document.documentElement
                                                .scrollTop)),
                                    n)
                                ) {
                                    var v = "left",
                                        M = n.offsetWidth;
                                    for (
                                        h = b.isMobile ? 30 : M - 2, d = 0;
                                        n && n !== o;

                                    )
                                        (h += n.offsetLeft),
                                            (d += n.offsetTop),
                                            (n = n.parentNode);
                                    b.isMobile ||
                                        (((b.isRTL &&
                                            h - M - s.offsetWidth >
                                                this.margin) ||
                                            (!b.isRTL &&
                                                h + s.offsetWidth >
                                                    g - this.margin)) &&
                                            ((v = "right"),
                                            (h = Math.max(
                                                this.margin,
                                                h - M - s.offsetWidth + 6
                                            )))),
                                        p ||
                                            ((s.style[
                                                "borderRadiusTop" + v
                                            ] = 0),
                                            (s.style[
                                                "WebkitBorderRadiusTop" + v
                                            ] = 0),
                                            (s.style[
                                                "MozBorderRadiusTop" + v
                                            ] = 0),
                                            (s.style[
                                                "KhtmlBorderRadiusTop" + v
                                            ] = 0));
                                } else {
                                    var w = b.CurrentNode() || e.target;
                                    if (
                                        ("keydown" === e.type || (!h && !d)) &&
                                        w
                                    ) {
                                        var S =
                                                window.pageXOffset ||
                                                document.documentElement
                                                    .scrollLeft,
                                            k =
                                                window.pageYOffset ||
                                                document.documentElement
                                                    .scrollTop,
                                            E = w.getBoundingClientRect();
                                        (h = (E.right + E.left) / 2 + S),
                                            (d = (E.bottom + E.top) / 2 + k);
                                    }
                                    h + s.offsetWidth > g - this.margin &&
                                        (h = g - s.offsetWidth - this.margin),
                                        b.isMobile &&
                                            ((h = Math.max(
                                                5,
                                                h -
                                                    Math.floor(
                                                        s.offsetWidth / 2
                                                    )
                                            )),
                                            (d -= 20)),
                                        (b.skipUp = e.isContextMenu);
                                }
                                (s.style.left = h + "px"),
                                    (s.style.top = d + "px"),
                                    document.selection &&
                                        document.selection.empty &&
                                        document.selection.empty();
                                var T =
                                        window.pageXOffset ||
                                        document.documentElement.scrollLeft,
                                    C =
                                        window.pageYOffset ||
                                        document.documentElement.scrollTop;
                                return (
                                    b.Focus(s),
                                    "keydown" === e.type &&
                                        ((b.skipMouseoverFromKey = !0),
                                        setTimeout(function () {
                                            delete b.skipMouseoverFromKey;
                                        }, x.delay)),
                                    window.scrollTo(T, C),
                                    l(e)
                                );
                            },
                            Remove: function (e, t) {
                                a.Post(["unpost", b.jax]);
                                var n =
                                    document.getElementById(
                                        "MathJax_MenuFrame"
                                    );
                                return (
                                    n &&
                                        (n.parentNode.removeChild(n),
                                        this.msieFixedPositionBug &&
                                            detachEvent("onresize", b.Resize)),
                                    b.jax.hover &&
                                        (delete b.jax.hover.nofade,
                                        u.UnHover(b.jax)),
                                    b.Unfocus(t),
                                    "mousedown" === e.type &&
                                        b.CurrentNode().blur(),
                                    l(e)
                                );
                            },
                            Find: function (e) {
                                return this.FindN(
                                    1,
                                    e,
                                    [].slice.call(arguments, 1)
                                );
                            },
                            FindId: function (e) {
                                return this.FindN(
                                    0,
                                    e,
                                    [].slice.call(arguments, 1)
                                );
                            },
                            FindN: function (e, t, n) {
                                for (
                                    var i = 0, o = this.items.length;
                                    i < o;
                                    i++
                                )
                                    if (this.items[i].name[e] === t)
                                        return n.length
                                            ? this.items[i].submenu
                                                ? this.items[i].submenu.FindN(
                                                      e,
                                                      n[0],
                                                      n.slice(1)
                                                  )
                                                : null
                                            : this.items[i];
                                return null;
                            },
                            IndexOf: function (e) {
                                return this.IndexOfN(1, e);
                            },
                            IndexOfId: function (e) {
                                return this.IndexOfN(0, e);
                            },
                            IndexOfN: function (e, t) {
                                for (
                                    var n = 0, i = this.items.length;
                                    n < i;
                                    n++
                                )
                                    if (this.items[n].name[e] === t) return n;
                                return null;
                            },
                            Right: function (e, t) {
                                b.Right(e, t);
                            },
                            Left: function (e, t) {
                                b.Left(e, t);
                            },
                            Up: function (e, t) {
                                var n = t.lastChild;
                                n.menuItem.Activate(e, n);
                            },
                            Down: function (e, t) {
                                var n = t.firstChild;
                                n.menuItem.Activate(e, n);
                            },
                            Space: function (e, t) {
                                this.Remove(e, t);
                            },
                        },
                        {
                            config: x,
                            Remove: function (e) {
                                return b.Event(e, this, "Remove");
                            },
                            Mouseover: function (e) {
                                return b.Event(e, this, "Mouseover");
                            },
                            Mouseout: function (e) {
                                return b.Event(e, this, "Mouseout");
                            },
                            Mousedown: function (e) {
                                return b.Event(e, this, "Mousedown");
                            },
                            Mouseup: function (e) {
                                return b.Event(e, this, "Mouseup");
                            },
                            Keydown: function (e) {
                                return b.Event(e, this, "Keydown");
                            },
                            Touchstart: function (e) {
                                return b.Event(e, this, "Touchstart");
                            },
                            Touchend: function (e) {
                                return b.Event(e, this, "Touchend");
                            },
                            Close: function (e) {
                                return b.Event(
                                    e,
                                    this.menu || this.parentNode,
                                    this.menu ? "Touchend" : "Remove"
                                );
                            },
                            Event: function (e, t, n, i) {
                                if (b.skipMouseover && "Mouseover" === n && !i)
                                    return l(e);
                                if (b.skipMouseoverFromKey && "Mouseover" === n)
                                    return delete b.skipMouseoverFromKey, l(e);
                                if (b.skipUp) {
                                    if (n.match(/Mouseup|Touchend/))
                                        return delete b.skipUp, l(e);
                                    ("Touchstart" === n ||
                                        ("Mousedown" === n &&
                                            !b.skipMousedown)) &&
                                        delete b.skipUp;
                                }
                                e || (e = window.event);
                                var o = t.menuItem;
                                return o && o[n] ? o[n](e, t) : null;
                            },
                            BGSTYLE: {
                                position: "absolute",
                                left: 0,
                                top: 0,
                                "z-index": 200,
                                width: "100%",
                                height: "100%",
                                border: 0,
                                padding: 0,
                                margin: 0,
                            },
                            Background: function (e) {
                                var n = t.addElement(
                                        document.body,
                                        "div",
                                        {
                                            style: this.BGSTYLE,
                                            id: "MathJax_MenuFrame",
                                        },
                                        [
                                            [
                                                "div",
                                                {
                                                    style: this.BGSTYLE,
                                                    menuItem: e,
                                                    onmousedown: this.Remove,
                                                },
                                            ],
                                        ]
                                    ),
                                    i = n.firstChild;
                                return (
                                    b.msieBackgroundBug &&
                                        ((i.style.backgroundColor = "white"),
                                        (i.style.filter = "alpha(opacity=0)")),
                                    b.msieFixedPositionBug
                                        ? ((n.width = n.height = 0),
                                          this.Resize(),
                                          attachEvent("onresize", this.Resize))
                                        : (i.style.position = "fixed"),
                                    n
                                );
                            },
                            Resize: function () {
                                setTimeout(b.SetWH, 0);
                            },
                            SetWH: function () {
                                var e =
                                    document.getElementById(
                                        "MathJax_MenuFrame"
                                    );
                                e &&
                                    (((e = e.firstChild).style.width =
                                        e.style.height =
                                            "1px"),
                                    (e.style.width =
                                        document.body.scrollWidth + "px"),
                                    (e.style.height =
                                        document.body.scrollHeight + "px"));
                            },
                            posted: !1,
                            active: null,
                            GetNode: function (e) {
                                var t = document.getElementById(
                                    e.inputID + "-Frame"
                                );
                                return t.isMathJax ? t : t.firstChild;
                            },
                            CurrentNode: function () {
                                return b.GetNode(b.jax);
                            },
                            AllNodes: function () {
                                for (
                                    var e,
                                        t = r.a.Hub.getAllJax(),
                                        n = [],
                                        i = 0;
                                    (e = t[i]);
                                    i++
                                )
                                    n.push(b.GetNode(e));
                                return n;
                            },
                            ActiveNode: function () {
                                return b.active;
                            },
                            FocusNode: function (e) {
                                (b.active = e), e.focus();
                            },
                            Focus: function (e) {
                                b.posted
                                    ? (b.ActiveNode().tabIndex = -1)
                                    : b.Activate(e),
                                    (e.tabIndex = 0),
                                    b.FocusNode(e);
                            },
                            Activate: function (e, t) {
                                b.UnsetTabIndex(), (b.posted = !0);
                            },
                            Unfocus: function () {
                                (b.ActiveNode().tabIndex = -1),
                                    b.SetTabIndex(),
                                    b.FocusNode(b.CurrentNode()),
                                    (b.posted = !1);
                            },
                            MoveHorizontal: function (e, t, n) {
                                if (e.shiftKey) {
                                    var i = b.AllNodes(),
                                        o = i.length;
                                    if (0 !== o) {
                                        var s =
                                            i[
                                                b.Mod(
                                                    n(
                                                        b.IndexOf(
                                                            i,
                                                            b.CurrentNode()
                                                        )
                                                    ),
                                                    o
                                                )
                                            ];
                                        s !== b.CurrentNode() &&
                                            (b.menu.Remove(e, t),
                                            (b.jax = r.a.Hub.getJaxFor(s)),
                                            b.FocusNode(s),
                                            b.menu.Post(null));
                                    }
                                }
                            },
                            Right: function (e, t) {
                                b.MoveHorizontal(e, t, function (e) {
                                    return e + 1;
                                });
                            },
                            Left: function (e, t) {
                                b.MoveHorizontal(e, t, function (e) {
                                    return e - 1;
                                });
                            },
                            UnsetTabIndex: function () {
                                for (
                                    var e, t = b.AllNodes(), n = 0;
                                    (e = t[n]);
                                    n++
                                )
                                    e.tabIndex > 0 &&
                                        (e.oldTabIndex = e.tabIndex),
                                        (e.tabIndex = -1);
                            },
                            SetTabIndex: function () {
                                for (
                                    var t, n = b.AllNodes(), i = 0;
                                    (t = n[i]);
                                    i++
                                )
                                    void 0 !== t.oldTabIndex
                                        ? ((t.tabIndex = t.oldTabIndex),
                                          delete t.oldTabIndex)
                                        : (t.tabIndex = e.getTabOrder(t));
                            },
                            Mod: function (e, t) {
                                return ((e % t) + t) % t;
                            },
                            IndexOf: Array.prototype.indexOf
                                ? function (e, t, n) {
                                      return e.indexOf(t, n);
                                  }
                                : function (e, t, n) {
                                      for (
                                          var i = n || 0, o = e.length;
                                          i < o;
                                          i++
                                      )
                                          if (t === e[i]) return i;
                                      return -1;
                                  },
                            saveCookie: function () {
                                t.Cookie.Set("menu", this.cookie);
                            },
                            getCookie: function () {
                                this.cookie = t.Cookie.Get("menu");
                            },
                        }
                    ));
                r.a.Menu.NAV = v;
                var y = (b.ITEM = v.Subclass(
                    {
                        name: "",
                        node: null,
                        menu: null,
                        Attributes: function (t) {
                            return e.Insert(
                                {
                                    onmouseup: b.Mouseup,
                                    ondragstart: l,
                                    onselectstart: l,
                                    onselectend: l,
                                    ontouchstart: b.Touchstart,
                                    ontouchend: b.Touchend,
                                    className: "MathJax_MenuItem",
                                    role: this.role,
                                    menuItem: this,
                                },
                                t
                            );
                        },
                        Create: function (e) {
                            if (!this.hidden) {
                                var n = this.Attributes(),
                                    i = this.Label(n, e);
                                t.addElement(e, "div", n, i);
                            }
                        },
                        Name: function () {
                            return h(this.name[0], this.name[1]);
                        },
                        Mouseover: function (e, t) {
                            t.parentNode === b.ActiveNode().parentNode &&
                                this.Deactivate(b.ActiveNode()),
                                this.Activate(e, t);
                        },
                        Mouseout: function (e, t) {
                            this.Deactivate(t);
                        },
                        Mouseup: function (e, t) {
                            return this.Remove(e, t);
                        },
                        DeactivateSubmenus: function (e) {
                            for (
                                var t =
                                        document.getElementById(
                                            "MathJax_MenuFrame"
                                        ).childNodes,
                                    n = y.GetMenuNode(e).childNodes,
                                    i = 0,
                                    o = n.length;
                                i < o;
                                i++
                            ) {
                                var r = n[i].menuItem;
                                r &&
                                    r.submenu &&
                                    r.submenu.posted &&
                                    r !== e.menuItem &&
                                    r.Deactivate(n[i]);
                            }
                            this.RemoveSubmenus(e, t);
                        },
                        RemoveSubmenus: function (e, t) {
                            for (
                                var n =
                                    (t =
                                        t ||
                                        document.getElementById(
                                            "MathJax_MenuFrame"
                                        ).childNodes).length - 1;
                                n >= 0 &&
                                y.GetMenuNode(e).menuItem !== t[n].menuItem;

                            )
                                (t[n].menuItem.posted = !1),
                                    t[n].parentNode.removeChild(t[n]),
                                    n--;
                        },
                        Touchstart: function (e, t) {
                            return this.TouchEvent(e, t, "Mousedown");
                        },
                        Touchend: function (e, t) {
                            return this.TouchEvent(e, t, "Mouseup");
                        },
                        TouchEvent: function (e, t, n) {
                            return (
                                this !== y.lastItem &&
                                    (y.lastMenu &&
                                        b.Event(e, y.lastMenu, "Mouseout"),
                                    b.Event(e, t, "Mouseover", !0),
                                    (y.lastItem = this),
                                    (y.lastMenu = t)),
                                this.nativeTouch ? null : (b.Event(e, t, n), !1)
                            );
                        },
                        Remove: function (e, t) {
                            return (t = t.parentNode.menuItem).Remove(e, t);
                        },
                        With: function (t) {
                            return t && e.Insert(this, t), this;
                        },
                        isRTL: function () {
                            return b.isRTL;
                        },
                        rtlClass: function () {
                            return this.isRTL() ? " RTL" : "";
                        },
                    },
                    {
                        GetMenuNode: function (e) {
                            return e.parentNode;
                        },
                    }
                ));
                (b.ENTRY = b.ITEM.Subclass({
                    role: "menuitem",
                    Attributes: function (t) {
                        return (
                            (t = e.Insert(
                                {
                                    onmouseover: b.Mouseover,
                                    onmouseout: b.Mouseout,
                                    onmousedown: b.Mousedown,
                                    onkeydown: b.Keydown,
                                    "aria-disabled": !!this.disabled,
                                },
                                t
                            )),
                            (t = this.SUPER(arguments).Attributes.call(
                                this,
                                t
                            )),
                            this.disabled &&
                                (t.className += " MathJax_MenuDisabled"),
                            t
                        );
                    },
                    MoveVertical: function (e, t, n) {
                        for (
                            var i,
                                o = y.GetMenuNode(t),
                                r = [],
                                s = 0,
                                a = o.menuItem.items;
                            (i = a[s]);
                            s++
                        )
                            i.hidden || r.push(i);
                        var l = b.IndexOf(r, this);
                        if (-1 !== l) {
                            var u = r.length,
                                c = o.childNodes;
                            do {
                                l = b.Mod(n(l), u);
                            } while (
                                r[l].hidden ||
                                !c[l].role ||
                                "separator" === c[l].role
                            );
                            this.Deactivate(t), r[l].Activate(e, c[l]);
                        }
                    },
                    Up: function (e, t) {
                        this.MoveVertical(e, t, function (e) {
                            return e - 1;
                        });
                    },
                    Down: function (e, t) {
                        this.MoveVertical(e, t, function (e) {
                            return e + 1;
                        });
                    },
                    Right: function (e, t) {
                        this.MoveHorizontal(e, t, b.Right, !this.isRTL());
                    },
                    Left: function (e, t) {
                        this.MoveHorizontal(e, t, b.Left, this.isRTL());
                    },
                    MoveHorizontal: function (e, t, n, i) {
                        var o = y.GetMenuNode(t);
                        if (
                            (o.menuItem === b.menu && e.shiftKey && n(e, t), !i)
                        ) {
                            o.menuItem !== b.menu && this.Deactivate(t);
                            for (
                                var r = o.previousSibling.childNodes,
                                    s = r.length;
                                s--;

                            ) {
                                var a = r[s];
                                if (
                                    a.menuItem.submenu &&
                                    a.menuItem.submenu === o.menuItem
                                ) {
                                    b.Focus(a);
                                    break;
                                }
                            }
                            this.RemoveSubmenus(t);
                        }
                    },
                    Space: function (e, t) {
                        this.Mouseup(e, t);
                    },
                    Activate: function (e, t) {
                        this.Deactivate(t),
                            this.disabled ||
                                (t.className += " MathJax_MenuActive"),
                            this.DeactivateSubmenus(t),
                            b.Focus(t);
                    },
                    Deactivate: function (e) {
                        e.className = e.className.replace(
                            / MathJax_MenuActive/,
                            ""
                        );
                    },
                })),
                    (b.ITEM.COMMAND = b.ENTRY.Subclass({
                        action: function () {},
                        Init: function (e, t, n) {
                            d(e) || (e = [e, e]),
                                (this.name = e),
                                (this.action = t),
                                this.With(n);
                        },
                        Label: function (e, t) {
                            return [this.Name()];
                        },
                        Mouseup: function (e, t) {
                            return (
                                this.disabled ||
                                    (this.Remove(e, t),
                                    a.Post(["command", this]),
                                    this.action.call(this, e)),
                                l(e)
                            );
                        },
                    })),
                    (b.ITEM.SUBMENU = b.ENTRY.Subclass({
                        submenu: null,
                        marker: "\u25ba",
                        markerRTL: "\u25c4",
                        Attributes: function (t) {
                            return (
                                (t = e.Insert({ "aria-haspopup": "true" }, t)),
                                (t = this.SUPER(arguments).Attributes.call(
                                    this,
                                    t
                                ))
                            );
                        },
                        Init: function (e, t) {
                            d(e) || (e = [e, e]), (this.name = e);
                            var n = 1;
                            t instanceof b.ITEM || (this.With(t), n++),
                                (this.submenu = b.apply(
                                    b,
                                    [].slice.call(arguments, n)
                                ));
                        },
                        Label: function (e, t) {
                            return (
                                (this.submenu.posted = !1),
                                [
                                    this.Name() + " ",
                                    [
                                        "span",
                                        {
                                            className:
                                                "MathJax_MenuArrow" +
                                                this.rtlClass(),
                                        },
                                        [
                                            this.isRTL()
                                                ? this.markerRTL
                                                : this.marker,
                                        ],
                                    ],
                                ]
                            );
                        },
                        Timer: function (e, t) {
                            this.ClearTimer(),
                                (e = {
                                    type: e.type,
                                    clientX: e.clientX,
                                    clientY: e.clientY,
                                }),
                                (this.timer = setTimeout(
                                    i(["Mouseup", this, e, t]),
                                    x.delay
                                ));
                        },
                        ClearTimer: function () {
                            this.timer && clearTimeout(this.timer);
                        },
                        Touchend: function (e, t) {
                            var n = this.submenu.posted,
                                i = this.SUPER(arguments).Touchend.apply(
                                    this,
                                    arguments
                                );
                            return (
                                n &&
                                    (this.Deactivate(t),
                                    delete y.lastItem,
                                    delete y.lastMenu),
                                i
                            );
                        },
                        Mouseout: function (e, t) {
                            this.submenu.posted || this.Deactivate(t),
                                this.ClearTimer();
                        },
                        Mouseover: function (e, t) {
                            this.Activate(e, t);
                        },
                        Mouseup: function (e, t) {
                            return (
                                this.disabled ||
                                    (this.submenu.posted
                                        ? this.DeactivateSubmenus(t)
                                        : (this.ClearTimer(),
                                          this.submenu.Post(e, t, this.ltr),
                                          b.Focus(t))),
                                l(e)
                            );
                        },
                        Activate: function (e, t) {
                            this.disabled ||
                                (this.Deactivate(t),
                                (t.className += " MathJax_MenuActive")),
                                this.submenu.posted ||
                                    (this.DeactivateSubmenus(t),
                                    b.isMobile || this.Timer(e, t)),
                                b.Focus(t);
                        },
                        MoveVertical: function (e, t, n) {
                            this.ClearTimer(),
                                this.SUPER(arguments).MoveVertical.apply(
                                    this,
                                    arguments
                                );
                        },
                        MoveHorizontal: function (e, t, n, i) {
                            if (i) {
                                if (!this.disabled)
                                    if (this.submenu.posted) {
                                        var o =
                                            y.GetMenuNode(t).nextSibling
                                                .childNodes;
                                        o.length > 0 &&
                                            this.submenu.items[0].Activate(
                                                e,
                                                o[0]
                                            );
                                    } else this.Activate(e, t);
                            } else
                                this.SUPER(arguments).MoveHorizontal.apply(
                                    this,
                                    arguments
                                );
                        },
                    })),
                    (b.ITEM.RADIO = b.ENTRY.Subclass({
                        variable: null,
                        marker: p ? "\u25cf" : "\u2713",
                        role: "menuitemradio",
                        Attributes: function (t) {
                            var n =
                                x.settings[this.variable] === this.value
                                    ? "true"
                                    : "false";
                            return (
                                (t = e.Insert({ "aria-checked": n }, t)),
                                (t = this.SUPER(arguments).Attributes.call(
                                    this,
                                    t
                                ))
                            );
                        },
                        Init: function (e, t, n) {
                            d(e) || (e = [e, e]),
                                (this.name = e),
                                (this.variable = t),
                                this.With(n),
                                null == this.value &&
                                    (this.value = this.name[0]);
                        },
                        Label: function (e, t) {
                            var n = {
                                className:
                                    "MathJax_MenuRadioCheck" + this.rtlClass(),
                            };
                            return (
                                x.settings[this.variable] !== this.value &&
                                    (n = { style: { display: "none" } }),
                                [["span", n, [this.marker]], " " + this.Name()]
                            );
                        },
                        Mouseup: function (e, t) {
                            if (!this.disabled) {
                                for (
                                    var n = t.parentNode.childNodes,
                                        i = 0,
                                        o = n.length;
                                    i < o;
                                    i++
                                ) {
                                    var r = n[i].menuItem;
                                    r &&
                                        r.variable === this.variable &&
                                        (n[i].firstChild.style.display =
                                            "none");
                                }
                                (t.firstChild.display = ""),
                                    (x.settings[this.variable] = this.value),
                                    (b.cookie[this.variable] =
                                        x.settings[this.variable]),
                                    b.saveCookie(),
                                    a.Post(["radio button", this]);
                            }
                            return (
                                this.Remove(e, t),
                                this.action &&
                                    !this.disabled &&
                                    this.action.call(b, this),
                                l(e)
                            );
                        },
                    })),
                    (b.ITEM.CHECKBOX = b.ENTRY.Subclass({
                        variable: null,
                        marker: "\u2713",
                        role: "menuitemcheckbox",
                        Attributes: function (t) {
                            var n = x.settings[this.variable]
                                ? "true"
                                : "false";
                            return (
                                (t = e.Insert({ "aria-checked": n }, t)),
                                (t = this.SUPER(arguments).Attributes.call(
                                    this,
                                    t
                                ))
                            );
                        },
                        Init: function (e, t, n) {
                            d(e) || (e = [e, e]),
                                (this.name = e),
                                (this.variable = t),
                                this.With(n);
                        },
                        Label: function (e, t) {
                            var n = {
                                className:
                                    "MathJax_MenuCheck" + this.rtlClass(),
                            };
                            return (
                                x.settings[this.variable] ||
                                    (n = { style: { display: "none" } }),
                                [["span", n, [this.marker]], " " + this.Name()]
                            );
                        },
                        Mouseup: function (e, t) {
                            return (
                                this.disabled ||
                                    ((t.firstChild.display = x.settings[
                                        this.variable
                                    ]
                                        ? "none"
                                        : ""),
                                    (x.settings[this.variable] =
                                        !x.settings[this.variable]),
                                    (b.cookie[this.variable] =
                                        x.settings[this.variable]),
                                    b.saveCookie(),
                                    a.Post(["checkbox", this])),
                                this.Remove(e, t),
                                this.action &&
                                    !this.disabled &&
                                    this.action.call(b, this),
                                l(e)
                            );
                        },
                    })),
                    (b.ITEM.LABEL = b.ENTRY.Subclass({
                        role: "menuitem",
                        Init: function (e, t) {
                            d(e) || (e = [e, e]), (this.name = e), this.With(t);
                        },
                        Label: function (e, t) {
                            return (
                                (e.className += " MathJax_MenuLabel"),
                                [this.Name()]
                            );
                        },
                        Activate: function (e, t) {
                            this.Deactivate(t), b.Focus(t);
                        },
                        Mouseup: function (e, t) {},
                    })),
                    (b.ITEM.RULE = b.ITEM.Subclass({
                        role: "separator",
                        Attributes: function (t) {
                            return (
                                (t = e.Insert(
                                    { "aria-orientation": "vertical" },
                                    t
                                )),
                                (t = this.SUPER(arguments).Attributes.call(
                                    this,
                                    t
                                ))
                            );
                        },
                        Label: function (e, t) {
                            return (e.className += " MathJax_MenuRule"), null;
                        },
                    })),
                    (b.About = function (n) {
                        var i = b.About.GetFont(),
                            o = b.About.GetFormat(),
                            s = ["MathJax.js v" + r.a.fileversion, ["br"]];
                        s.push([
                            "div",
                            {
                                style: {
                                    "border-top": "groove 2px",
                                    margin: ".25em 0",
                                },
                            },
                        ]),
                            b.About.GetJax(s, r.a.InputJax, [
                                "InputJax",
                                "%1 Input Jax v%2",
                            ]),
                            b.About.GetJax(s, r.a.OutputJax, [
                                "OutputJax",
                                "%1 Output Jax v%2",
                            ]),
                            b.About.GetJax(s, r.a.ElementJax, [
                                "ElementJax",
                                "%1 Element Jax v%2",
                            ]),
                            s.push([
                                "div",
                                {
                                    style: {
                                        "border-top": "groove 2px",
                                        margin: ".25em 0",
                                    },
                                },
                            ]),
                            b.About.GetJax(
                                s,
                                r.a.Extension,
                                ["Extension", "%1 Extension v%2"],
                                !0
                            ),
                            s.push(
                                [
                                    "div",
                                    {
                                        style: {
                                            "border-top": "groove 2px",
                                            margin: ".25em 0",
                                        },
                                    },
                                ],
                                [
                                    "center",
                                    {},
                                    [
                                        e.Browser +
                                            " v" +
                                            e.Browser.version +
                                            (o
                                                ? " \u2014 " +
                                                  h(o.replace(/ /g, ""), o)
                                                : ""),
                                    ],
                                ]
                            ),
                            (b.About.div = b.Background(b.About));
                        var a = t.addElement(
                            b.About.div,
                            "div",
                            {
                                id: "MathJax_About",
                                tabIndex: 0,
                                onkeydown: b.About.Keydown,
                            },
                            [
                                [
                                    "b",
                                    { style: { fontSize: "120%" } },
                                    ["MathJax"],
                                ],
                                " v" + r.a.version,
                                ["br"],
                                h(i.replace(/ /g, ""), "using " + i),
                                ["br"],
                                ["br"],
                                [
                                    "span",
                                    {
                                        style: {
                                            display: "inline-block",
                                            "text-align": "left",
                                            "font-size": "80%",
                                            "max-height": "20em",
                                            overflow: "auto",
                                            "background-color": "#E4E4E4",
                                            padding: ".4em .6em",
                                            border: "1px inset",
                                        },
                                        tabIndex: 0,
                                    },
                                    s,
                                ],
                                ["br"],
                                ["br"],
                                [
                                    "a",
                                    { href: "http://www.mathjax.org/" },
                                    ["www.mathjax.org"],
                                ],
                                [
                                    "span",
                                    {
                                        className: "MathJax_MenuClose",
                                        id: "MathJax_AboutClose",
                                        onclick: b.About.Remove,
                                        onkeydown: b.About.Keydown,
                                        tabIndex: 0,
                                        role: "button",
                                        "aria-label": h(
                                            "CloseAboutDialog",
                                            "Close about MathJax dialog"
                                        ),
                                    },
                                    [["span", {}, "\xd7"]],
                                ],
                            ]
                        );
                        "mouseup" === n.type &&
                            (a.className += " MathJax_MousePost"),
                            a.focus(),
                            r.a.Localization.setCSS(a);
                        var l = document.documentElement || {},
                            u =
                                window.innerHeight ||
                                l.clientHeight ||
                                l.scrollHeight ||
                                0;
                        b.prototype.msieAboutBug
                            ? ((a.style.width = "20em"),
                              (a.style.position = "absolute"),
                              (a.style.left =
                                  Math.floor(
                                      (document.documentElement.scrollWidth -
                                          a.offsetWidth) /
                                          2
                                  ) + "px"),
                              (a.style.top =
                                  Math.floor((u - a.offsetHeight) / 3) +
                                  document.body.scrollTop +
                                  "px"))
                            : ((a.style.marginLeft =
                                  Math.floor(-a.offsetWidth / 2) + "px"),
                              (a.style.top =
                                  Math.floor((u - a.offsetHeight) / 3) + "px"));
                    }),
                    (b.About.Remove = function (e) {
                        b.About.div &&
                            (document.body.removeChild(b.About.div),
                            delete b.About.div);
                    }),
                    (b.About.Keydown = function (e) {
                        (e.keyCode !== c.ESCAPE &&
                            ("MathJax_AboutClose" !== this.id ||
                                (e.keyCode !== c.SPACE &&
                                    e.keyCode !== c.RETURN))) ||
                            (b.About.Remove(e), b.CurrentNode().focus(), l(e));
                    }),
                    (b.About.GetJax = function (e, t, n, i) {
                        var o = [];
                        for (var r in t)
                            t.hasOwnProperty(r) &&
                                t[r] &&
                                ((i && t[r].version) ||
                                    (t[r].isa && t[r].isa(t))) &&
                                o.push(
                                    h(n[0], n[1], t[r].id || r, t[r].version)
                                );
                        o.sort();
                        for (var s = 0, a = o.length; s < a; s++)
                            e.push(o[s], ["br"]);
                        return e;
                    }),
                    (b.About.GetFont = function () {
                        var e = r.a.Hub.outputJax["jax/mml"][0] || {};
                        return (
                            ({
                                SVG: "web SVG",
                                CommonHTML: "web TeX",
                                "HTML-CSS": e.imgFonts
                                    ? "image"
                                    : (e.webFonts ? "web" : "local") +
                                      " " +
                                      e.fontInUse,
                            }[e.id] || "generic") + " fonts"
                        );
                    }),
                    (b.About.GetFormat = function () {
                        var e = r.a.Hub.outputJax["jax/mml"][0] || {};
                        if ("HTML-CSS" === e.id && e.webFonts && !e.imgFonts)
                            return (
                                e.allowWebFonts.replace(/otf/, "woff or otf") +
                                " fonts"
                            );
                    }),
                    (b.Help = function (e) {
                        n.Require(
                            "[MathJax]/extensions/HelpDialog.js",
                            function () {
                                r.a.Extension.Help.Dialog({ type: e.type });
                            }
                        );
                    }),
                    (b.ShowSource = function (e) {
                        e || (e = window.event);
                        var t = { screenX: e.screenX, screenY: e.screenY };
                        if (b.jax)
                            if ("MathML" === this.format) {
                                var o = r.a.ElementJax.mml;
                                if (
                                    o &&
                                    "undefined" !==
                                        typeof o.mbase.prototype.toMathML
                                )
                                    try {
                                        b.ShowSource.Text(
                                            b.jax.root.toMathML("", b.jax),
                                            e
                                        );
                                    } catch (a) {
                                        if (!a.restart) throw a;
                                        i.After(
                                            [this, b.ShowSource, t],
                                            a.restart
                                        );
                                    }
                                else if (!n.loadingToMathML)
                                    return (
                                        (n.loadingToMathML = !0),
                                        b.ShowSource.Window(e),
                                        void i.Queue(
                                            n.Require(
                                                "[MathJax]/extensions/toMathML.js"
                                            ),
                                            function () {
                                                delete n.loadingToMathML,
                                                    o.mbase.prototype
                                                        .toMathML ||
                                                        (o.mbase.prototype.toMathML =
                                                            function () {});
                                            },
                                            [this, b.ShowSource, t]
                                        )
                                    );
                            } else if ("Error" === this.format)
                                b.ShowSource.Text(b.jax.errorText, e);
                            else if (x.semanticsAnnotations[this.format]) {
                                var s = b.jax.root.getAnnotation(this.format);
                                s.data[0] &&
                                    b.ShowSource.Text(s.data[0].toString());
                            } else {
                                if (null == b.jax.originalText)
                                    return void alert(
                                        h(
                                            "NoOriginalForm",
                                            "No original form available"
                                        )
                                    );
                                b.ShowSource.Text(b.jax.originalText, e);
                            }
                    }),
                    (b.ShowSource.Window = function (e) {
                        if (!b.ShowSource.w) {
                            var t = [],
                                n = x.windowSettings;
                            for (var i in n)
                                n.hasOwnProperty(i) && t.push(i + "=" + n[i]);
                            b.ShowSource.w = window.open(
                                "",
                                "_blank",
                                t.join(",")
                            );
                        }
                        return b.ShowSource.w;
                    }),
                    (b.ShowSource.Text = function (e, t) {
                        var n = b.ShowSource.Window(t);
                        delete b.ShowSource.w,
                            (e = (e = e.replace(/^\s*/, "").replace(/\s*$/, ""))
                                .replace(/&/g, "&amp;")
                                .replace(/</g, "&lt;")
                                .replace(/>/g, "&gt;"));
                        var i = h("EqSource", "MathJax Equation Source");
                        if (b.isMobile)
                            n.document.open(),
                                n.document.write(
                                    "<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>" +
                                        i +
                                        "</title></head><body style='font-size:85%'>"
                                ),
                                n.document.write("<pre>" + e + "</pre>"),
                                n.document.write(
                                    "<hr><input type='button' value='" +
                                        h("Close", "Close") +
                                        "' onclick='window.close()' />"
                                ),
                                n.document.write("</body></html>"),
                                n.document.close();
                        else {
                            n.document.open(),
                                n.document.write(
                                    "<html><head><title>" +
                                        i +
                                        "</title></head><body style='font-size:85%'>"
                                ),
                                n.document.write(
                                    "<table><tr><td><pre>" +
                                        e +
                                        "</pre></td></tr></table>"
                                ),
                                n.document.write("</body></html>"),
                                n.document.close();
                            var o = n.document.body.firstChild;
                            setTimeout(function () {
                                var e,
                                    i,
                                    r,
                                    s = n.outerHeight - n.innerHeight || 30,
                                    a = n.outerWidth - n.innerWidth || 30;
                                (a = Math.max(
                                    140,
                                    Math.min(
                                        Math.floor(0.5 * screen.width),
                                        o.offsetWidth + a + 25
                                    )
                                )),
                                    (s = Math.max(
                                        40,
                                        Math.min(
                                            Math.floor(0.5 * screen.height),
                                            o.offsetHeight + s + 25
                                        )
                                    )),
                                    b.prototype.msieHeightBug && (s += 35),
                                    n.resizeTo(a, s);
                                try {
                                    r = t.screenX;
                                } catch (l) {}
                                t &&
                                    null != r &&
                                    ((e = Math.max(
                                        0,
                                        Math.min(
                                            t.screenX - Math.floor(a / 2),
                                            screen.width - a - 20
                                        )
                                    )),
                                    (i = Math.max(
                                        0,
                                        Math.min(
                                            t.screenY - Math.floor(s / 2),
                                            screen.height - s - 20
                                        )
                                    )),
                                    n.moveTo(e, i));
                            }, 50);
                        }
                    }),
                    (b.Scale = function () {
                        var t,
                            n,
                            i = [
                                "CommonHTML",
                                "HTML-CSS",
                                "SVG",
                                "NativeMML",
                                "PreviewHTML",
                            ],
                            r = i.length,
                            s = 100;
                        for (t = 0; t < r; t++)
                            if ((n = o[i[t]])) {
                                s = n.config.scale;
                                break;
                            }
                        var a = prompt(
                            h(
                                "ScaleMath",
                                "Scale all mathematics (compared to surrounding text) by"
                            ),
                            s + "%"
                        );
                        if (a)
                            if (a.match(/^\s*\d+(\.\d*)?\s*%?\s*$/))
                                if ((a = parseFloat(a))) {
                                    if (a !== s) {
                                        for (t = 0; t < r; t++)
                                            (n = o[i[t]]) &&
                                                (n.config.scale = a);
                                        (b.cookie.scale = e.config.scale = a),
                                            b.saveCookie(),
                                            e.Queue(["Rerender", e]);
                                    }
                                } else
                                    alert(
                                        h(
                                            "NonZeroScale",
                                            "The scale should not be zero"
                                        )
                                    );
                            else
                                alert(
                                    h(
                                        "PercentScale",
                                        "The scale should be a percentage (e.g., 120%%)"
                                    )
                                );
                    }),
                    (b.Zoom = function () {
                        r.a.Extension.MathZoom ||
                            n.Require("[MathJax]/extensions/MathZoom.js");
                    }),
                    (b.Renderer = function () {
                        var n = e.outputJax["jax/mml"];
                        if (n[0] !== x.settings.renderer) {
                            var i,
                                o,
                                r = e.Browser,
                                s = b.Renderer.Messages;
                            switch (x.settings.renderer) {
                                case "NativeMML":
                                    x.settings.warnedMML ||
                                        (r.isChrome &&
                                        "24." !== r.version.substr(0, 3)
                                            ? (i = s.MML.WebKit)
                                            : r.isSafari &&
                                              !r.versionAtLeast("5.0")
                                            ? (i = s.MML.WebKit)
                                            : r.isMSIE
                                            ? r.hasMathPlayer ||
                                              (i = s.MML.MSIE)
                                            : (i = r.isEdge
                                                  ? s.MML.WebKit
                                                  : s.MML[r]),
                                        (o = "warnedMML"));
                                    break;
                                case "SVG":
                                    x.settings.warnedSVG ||
                                        (r.isMSIE && !m && (i = s.SVG.MSIE));
                            }
                            if (i) {
                                if (
                                    ((i = h(i[0], i[1])),
                                    (i += "\n\n"),
                                    (i += h(
                                        "SwitchAnyway",
                                        "Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"
                                    )),
                                    (b.cookie.renderer = n[0].id),
                                    b.saveCookie(),
                                    !confirm(i))
                                )
                                    return (
                                        (b.cookie.renderer =
                                            x.settings.renderer =
                                                t.Cookie.Get("menu").renderer),
                                        void b.saveCookie()
                                    );
                                o && (b.cookie.warned = x.settings.warned = !0),
                                    (b.cookie.renderer = x.settings.renderer),
                                    b.saveCookie();
                            }
                            e.Queue(
                                [
                                    "setRenderer",
                                    e,
                                    x.settings.renderer,
                                    "jax/mml",
                                ],
                                ["Rerender", e]
                            );
                        }
                    }),
                    (b.Renderer.Messages = {
                        MML: {
                            WebKit: [
                                "WebkitNativeMMLWarning",
                                "Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable.",
                            ],
                            MSIE: [
                                "MSIENativeMMLWarning",
                                "Internet Explorer requires the MathPlayer plugin in order to process MathML output.",
                            ],
                            Opera: [
                                "OperaNativeMMLWarning",
                                "Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly.",
                            ],
                            Safari: [
                                "SafariNativeMMLWarning",
                                "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly.",
                            ],
                            Firefox: [
                                "FirefoxNativeMMLWarning",
                                "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly.",
                            ],
                        },
                        SVG: {
                            MSIE: [
                                "MSIESVGWarning",
                                "SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly.",
                            ],
                        },
                    }),
                    (b.AssistiveMML = function (e, t) {
                        var i = r.a.Extension.AssistiveMML;
                        i
                            ? r.a.Hub.Queue([
                                  (x.settings.assistiveMML ? "Add" : "Remove") +
                                      "AssistiveMathML",
                                  i,
                              ])
                            : t ||
                              n.Require(
                                  "[MathJax]/extensions/AssistiveMML.js",
                                  ["AssistiveMML", b, e, !0]
                              );
                    }),
                    (b.Font = function () {
                        o["HTML-CSS"] && document.location.reload();
                    }),
                    (b.Locale = function () {
                        r.a.Localization.setLocale(x.settings.locale),
                            r.a.Hub.Queue(["Reprocess", r.a.Hub]);
                    }),
                    (b.LoadLocale = function () {
                        var e = prompt(
                            h("LoadURL", "Load translation data from this URL:")
                        );
                        e &&
                            (e.match(/\.js$/) ||
                                alert(
                                    h(
                                        "BadURL",
                                        "The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"
                                    )
                                ),
                            n.Require(e, function (t) {
                                t != n.STATUS.OK &&
                                    alert(
                                        h(
                                            "BadData",
                                            "Failed to load translation data from %1",
                                            e
                                        )
                                    );
                            }));
                    }),
                    (b.MPEvents = function (e) {
                        var t = x.settings.discoverable,
                            n = b.MPEvents.Messages;
                        if (m)
                            !t &&
                                "Menu Events" === e.name[1] &&
                                x.settings.mpContext &&
                                alert(h.apply(h, n.IE9warning));
                        else {
                            if (
                                x.settings.mpMouse &&
                                !confirm(h.apply(h, n.IE8warning))
                            )
                                return (
                                    delete b.cookie.mpContext,
                                    delete x.settings.mpContext,
                                    delete b.cookie.mpMouse,
                                    delete x.settings.mpMouse,
                                    void b.saveCookie()
                                );
                            (x.settings.mpContext = x.settings.mpMouse),
                                (b.cookie.mpContext = b.cookie.mpMouse =
                                    x.settings.mpMouse),
                                b.saveCookie(),
                                r.a.Hub.Queue(["Rerender", r.a.Hub]);
                        }
                    }),
                    (b.MPEvents.Messages = {
                        IE8warning: [
                            "IE8warning",
                            "This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?",
                        ],
                        IE9warning: [
                            "IE9warning",
                            "The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead.",
                        ],
                    }),
                    e.Browser.Select({
                        MSIE: function (e) {
                            var t = "BackCompat" === document.compatMode,
                                n =
                                    e.versionAtLeast("8.0") &&
                                    document.documentMode > 7;
                            b.Augment({
                                margin: 20,
                                msieBackgroundBug:
                                    (document.documentMode || 0) < 9,
                                msieFixedPositionBug: t || !n,
                                msieAboutBug: t,
                                msieHeightBug: (document.documentMode || 0) < 9,
                            }),
                                m &&
                                    (delete x.styles["#MathJax_About"].filter,
                                    delete x.styles[".MathJax_Menu"].filter);
                        },
                        Firefox: function (e) {
                            (b.skipMouseover =
                                e.isMobile && e.versionAtLeast("6.0")),
                                (b.skipMousedown = e.isMobile);
                        },
                    }),
                    (b.isMobile = e.Browser.isMobile),
                    (b.noContextMenu = e.Browser.noContextMenu),
                    (b.CreateLocaleMenu = function () {
                        if (b.menu) {
                            var e = b.menu.Find("Language").submenu,
                                t = e.items,
                                n = [],
                                i = r.a.Localization.strings;
                            for (var o in i) i.hasOwnProperty(o) && n.push(o);
                            (n = n.sort()), (e.items = []);
                            for (var s = 0, a = n.length; s < a; s++) {
                                var l = i[n[s]].menuTitle;
                                l ? (l += " (" + n[s] + ")") : (l = n[s]),
                                    e.items.push(
                                        y.RADIO([n[s], l], "locale", {
                                            action: b.Locale,
                                        })
                                    );
                            }
                            e.items.push(t[t.length - 2], t[t.length - 1]);
                        }
                    }),
                    (b.CreateAnnotationMenu = function () {
                        if (b.menu) {
                            var e = b.menu.Find(
                                    "Show Math As",
                                    "Annotation"
                                ).submenu,
                                t = x.semanticsAnnotations;
                            for (var n in t)
                                t.hasOwnProperty(n) &&
                                    e.items.push(
                                        y.COMMAND([n, n], b.ShowSource, {
                                            hidden: !0,
                                            nativeTouch: !0,
                                            format: n,
                                        })
                                    );
                        }
                    }),
                    e.Register.StartupHook("End Config", function () {
                        (x.settings = e.config.menuSettings),
                            "undefined" !== typeof x.settings.showRenderer &&
                                (x.showRenderer = x.settings.showRenderer),
                            "undefined" !== typeof x.settings.showFontMenu &&
                                (x.showFontMenu = x.settings.showFontMenu),
                            "undefined" !== typeof x.settings.showContext &&
                                (x.showContext = x.settings.showContext),
                            b.getCookie(),
                            (b.menu = b(
                                y.SUBMENU(
                                    ["Show", "Show Math As"],
                                    y.COMMAND(
                                        ["MathMLcode", "MathML Code"],
                                        b.ShowSource,
                                        {
                                            nativeTouch: !0,
                                            format: "MathML",
                                        }
                                    ),
                                    y.COMMAND(
                                        ["Original", "Original Form"],
                                        b.ShowSource,
                                        {
                                            nativeTouch: !0,
                                        }
                                    ),
                                    y.SUBMENU(["Annotation", "Annotation"], {
                                        disabled: !0,
                                    }),
                                    y.RULE(),
                                    y.CHECKBOX(
                                        [
                                            "texHints",
                                            "Show TeX hints in MathML",
                                        ],
                                        "texHints"
                                    ),
                                    y.CHECKBOX(
                                        [
                                            "semantics",
                                            "Add original form as annotation",
                                        ],
                                        "semantics"
                                    )
                                ),
                                y.RULE(),
                                y.SUBMENU(
                                    ["Settings", "Math Settings"],
                                    y.SUBMENU(
                                        ["ZoomTrigger", "Zoom Trigger"],
                                        y.RADIO(["Hover", "Hover"], "zoom", {
                                            action: b.Zoom,
                                        }),
                                        y.RADIO(["Click", "Click"], "zoom", {
                                            action: b.Zoom,
                                        }),
                                        y.RADIO(
                                            ["DoubleClick", "Double-Click"],
                                            "zoom",
                                            {
                                                action: b.Zoom,
                                            }
                                        ),
                                        y.RADIO(["NoZoom", "No Zoom"], "zoom", {
                                            value: "None",
                                        }),
                                        y.RULE(),
                                        y.LABEL([
                                            "TriggerRequires",
                                            "Trigger Requires:",
                                        ]),
                                        y.CHECKBOX(
                                            e.Browser.isMac
                                                ? ["Option", "Option"]
                                                : ["Alt", "Alt"],
                                            "ALT"
                                        ),
                                        y.CHECKBOX(
                                            ["Command", "Command"],
                                            "CMD",
                                            {
                                                hidden: !e.Browser.isMac,
                                            }
                                        ),
                                        y.CHECKBOX(
                                            ["Control", "Control"],
                                            "CTRL",
                                            {
                                                hidden: e.Browser.isMac,
                                            }
                                        ),
                                        y.CHECKBOX(["Shift", "Shift"], "Shift")
                                    ),
                                    y.SUBMENU(
                                        ["ZoomFactor", "Zoom Factor"],
                                        y.RADIO("125%", "zscale"),
                                        y.RADIO("133%", "zscale"),
                                        y.RADIO("150%", "zscale"),
                                        y.RADIO("175%", "zscale"),
                                        y.RADIO("200%", "zscale"),
                                        y.RADIO("250%", "zscale"),
                                        y.RADIO("300%", "zscale"),
                                        y.RADIO("400%", "zscale")
                                    ),
                                    y.RULE(),
                                    y.SUBMENU(
                                        ["Renderer", "Math Renderer"],
                                        { hidden: !x.showRenderer },
                                        y.RADIO(
                                            ["HTML-CSS", "HTML-CSS"],
                                            "renderer",
                                            {
                                                action: b.Renderer,
                                            }
                                        ),
                                        y.RADIO(
                                            ["CommonHTML", "Common HTML"],
                                            "renderer",
                                            {
                                                action: b.Renderer,
                                                value: "CommonHTML",
                                            }
                                        ),
                                        y.RADIO(
                                            ["PreviewHTML", "Preview HTML"],
                                            "renderer",
                                            {
                                                action: b.Renderer,
                                                value: "PreviewHTML",
                                            }
                                        ),
                                        y.RADIO(
                                            ["MathML", "MathML"],
                                            "renderer",
                                            {
                                                action: b.Renderer,
                                                value: "NativeMML",
                                            }
                                        ),
                                        y.RADIO(["SVG", "SVG"], "renderer", {
                                            action: b.Renderer,
                                        }),
                                        y.RADIO(
                                            ["PlainSource", "Plain Source"],
                                            "renderer",
                                            {
                                                action: b.Renderer,
                                                value: "PlainSource",
                                            }
                                        ),
                                        y.RULE(),
                                        y.CHECKBOX(
                                            ["FastPreview", "Fast Preview"],
                                            "FastPreview"
                                        )
                                    ),
                                    y.SUBMENU(
                                        "MathPlayer",
                                        {
                                            hidden:
                                                !e.Browser.isMSIE ||
                                                !x.showMathPlayer,
                                            disabled: !e.Browser.hasMathPlayer,
                                        },
                                        y.LABEL([
                                            "MPHandles",
                                            "Let MathPlayer Handle:",
                                        ]),
                                        y.CHECKBOX(
                                            ["MenuEvents", "Menu Events"],
                                            "mpContext",
                                            {
                                                action: b.MPEvents,
                                                hidden: !m,
                                            }
                                        ),
                                        y.CHECKBOX(
                                            ["MouseEvents", "Mouse Events"],
                                            "mpMouse",
                                            {
                                                action: b.MPEvents,
                                                hidden: !m,
                                            }
                                        ),
                                        y.CHECKBOX(
                                            [
                                                "MenuAndMouse",
                                                "Mouse and Menu Events",
                                            ],
                                            "mpMouse",
                                            { action: b.MPEvents, hidden: m }
                                        )
                                    ),
                                    y.SUBMENU(
                                        ["FontPrefs", "Font Preference"],
                                        { hidden: !x.showFontMenu },
                                        y.LABEL([
                                            "ForHTMLCSS",
                                            "For HTML-CSS:",
                                        ]),
                                        y.RADIO(["Auto", "Auto"], "font", {
                                            action: b.Font,
                                        }),
                                        y.RULE(),
                                        y.RADIO(
                                            ["TeXLocal", "TeX (local)"],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            ["TeXWeb", "TeX (web)"],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            ["TeXImage", "TeX (image)"],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RULE(),
                                        y.RADIO(
                                            ["STIXLocal", "STIX (local)"],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            ["STIXWeb", "STIX (web)"],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RULE(),
                                        y.RADIO(
                                            [
                                                "AsanaMathWeb",
                                                "Asana Math (web)",
                                            ],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            [
                                                "GyrePagellaWeb",
                                                "Gyre Pagella (web)",
                                            ],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            [
                                                "GyreTermesWeb",
                                                "Gyre Termes (web)",
                                            ],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            [
                                                "LatinModernWeb",
                                                "Latin Modern (web)",
                                            ],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        ),
                                        y.RADIO(
                                            ["NeoEulerWeb", "Neo Euler (web)"],
                                            "font",
                                            {
                                                action: b.Font,
                                            }
                                        )
                                    ),
                                    y.SUBMENU(
                                        ["ContextMenu", "Contextual Menu"],
                                        { hidden: !x.showContext },
                                        y.RADIO(
                                            ["MathJax", "MathJax"],
                                            "context"
                                        ),
                                        y.RADIO(
                                            ["Browser", "Browser"],
                                            "context"
                                        )
                                    ),
                                    y.COMMAND(
                                        ["Scale", "Scale All Math ..."],
                                        b.Scale
                                    ),
                                    y.RULE().With({
                                        hidden: !x.showDiscoverable,
                                        name: ["", "discover_rule"],
                                    }),
                                    y.CHECKBOX(
                                        ["Discoverable", "Highlight on Hover"],
                                        "discoverable",
                                        { hidden: !x.showDiscoverable }
                                    )
                                ),
                                y.SUBMENU(
                                    ["Accessibility", "Accessibility"],
                                    y.CHECKBOX(
                                        ["AssistiveMML", "Assistive MathML"],
                                        "assistiveMML",
                                        { action: b.AssistiveMML }
                                    ),
                                    y.CHECKBOX(
                                        ["InTabOrder", "Include in Tab Order"],
                                        "inTabOrder"
                                    )
                                ),
                                y.SUBMENU(
                                    ["Locale", "Language"],
                                    { hidden: !x.showLocale, ltr: !0 },
                                    y.RADIO("en", "locale", {
                                        action: b.Locale,
                                    }),
                                    y.RULE().With({
                                        hidden: !x.showLocaleURL,
                                        name: ["", "localURL_rule"],
                                    }),
                                    y.COMMAND(
                                        ["LoadLocale", "Load from URL ..."],
                                        b.LoadLocale,
                                        {
                                            hidden: !x.showLocaleURL,
                                        }
                                    )
                                ),
                                y.RULE(),
                                y.COMMAND(["About", "About MathJax"], b.About),
                                y.COMMAND(["Help", "MathJax Help"], b.Help)
                            )),
                            b.isMobile &&
                                (function () {
                                    var e = x.settings,
                                        t = b.menu.Find(
                                            "Math Settings",
                                            "Zoom Trigger"
                                        ).submenu;
                                    (t.items[0].disabled = t.items[1].disabled =
                                        !0),
                                        ("Hover" !== e.zoom &&
                                            "Click" != e.zoom) ||
                                            (e.zoom = "None"),
                                        (t.items = t.items.slice(0, 4)),
                                        navigator.appVersion.match(
                                            /[ (]Android[) ]/
                                        ) &&
                                            b.ITEM.SUBMENU.Augment({
                                                marker: "\xbb",
                                            });
                                })(),
                            b.CreateLocaleMenu(),
                            b.CreateAnnotationMenu();
                    }),
                    (b.showRenderer = function (e) {
                        (b.cookie.showRenderer = x.showRenderer = e),
                            b.saveCookie(),
                            (b.menu.Find(
                                "Math Settings",
                                "Math Renderer"
                            ).hidden = !e);
                    }),
                    (b.showMathPlayer = function (e) {
                        (b.cookie.showMathPlayer = x.showMathPlayer = e),
                            b.saveCookie(),
                            (b.menu.Find("Math Settings", "MathPlayer").hidden =
                                !e);
                    }),
                    (b.showFontMenu = function (e) {
                        (b.cookie.showFontMenu = x.showFontMenu = e),
                            b.saveCookie(),
                            (b.menu.Find(
                                "Math Settings",
                                "Font Preference"
                            ).hidden = !e);
                    }),
                    (b.showContext = function (e) {
                        (b.cookie.showContext = x.showContext = e),
                            b.saveCookie(),
                            (b.menu.Find(
                                "Math Settings",
                                "Contextual Menu"
                            ).hidden = !e);
                    }),
                    (b.showDiscoverable = function (e) {
                        (b.cookie.showDiscoverable = x.showDiscoverable = e),
                            b.saveCookie(),
                            (b.menu.Find(
                                "Math Settings",
                                "Highlight on Hover"
                            ).hidden = !e),
                            (b.menu.Find(
                                "Math Settings",
                                "discover_rule"
                            ).hidden = !e);
                    }),
                    (b.showLocale = function (e) {
                        (b.cookie.showLocale = x.showLocale = e),
                            b.saveCookie(),
                            (b.menu.Find("Language").hidden = !e);
                    }),
                    r.a.Hub.Register.StartupHook(
                        "HTML-CSS Jax Ready",
                        function () {
                            r.a.OutputJax["HTML-CSS"].config.imageFont ||
                                (b.menu.Find(
                                    "Math Settings",
                                    "Font Preference",
                                    "TeX (image)"
                                ).disabled = !0);
                        }
                    ),
                    i.Queue(
                        e.Register.StartupHook("End Config", {}),
                        ["Styles", n, x.styles],
                        ["Post", e.Startup.signal, "MathMenu Ready"],
                        ["loadComplete", n, "[MathJax]/extensions/MathMenu.js"]
                    );
            })(r.a.Hub, r.a.HTML, r.a.Ajax, r.a.CallBack, r.a.OutputJax),
                (function (e, t, n, i, o) {
                    var s,
                        a,
                        l,
                        u = e.CombineConfig("MathZoom", {
                            styles: {
                                "#MathJax_Zoom": {
                                    position: "absolute",
                                    "background-color": "#F0F0F0",
                                    overflow: "auto",
                                    display: "block",
                                    "z-index": 301,
                                    padding: ".5em",
                                    border: "1px solid black",
                                    margin: 0,
                                    "font-weight": "normal",
                                    "font-style": "normal",
                                    "text-align": "left",
                                    "text-indent": 0,
                                    "text-transform": "none",
                                    "line-height": "normal",
                                    "letter-spacing": "normal",
                                    "word-spacing": "normal",
                                    "word-wrap": "normal",
                                    "white-space": "nowrap",
                                    float: "none",
                                    "-webkit-box-sizing": "content-box",
                                    "-moz-box-sizing": "content-box",
                                    "box-sizing": "content-box",
                                    "box-shadow": "5px 5px 15px #AAAAAA",
                                    "-webkit-box-shadow":
                                        "5px 5px 15px #AAAAAA",
                                    "-moz-box-shadow": "5px 5px 15px #AAAAAA",
                                    "-khtml-box-shadow": "5px 5px 15px #AAAAAA",
                                    filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",
                                },
                                "#MathJax_ZoomOverlay": {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    "z-index": 300,
                                    display: "inline-block",
                                    width: "100%",
                                    height: "100%",
                                    border: 0,
                                    padding: 0,
                                    margin: 0,
                                    "background-color": "white",
                                    opacity: 0,
                                    filter: "alpha(opacity=0)",
                                },
                                "#MathJax_ZoomFrame": {
                                    position: "relative",
                                    display: "inline-block",
                                    height: 0,
                                    width: 0,
                                },
                                "#MathJax_ZoomEventTrap": {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    "z-index": 302,
                                    display: "inline-block",
                                    border: 0,
                                    padding: 0,
                                    margin: 0,
                                    "background-color": "white",
                                    opacity: 0,
                                    filter: "alpha(opacity=0)",
                                },
                            },
                        });
                    r.a.Hub.Register.StartupHook(
                        "MathEvents Ready",
                        function () {
                            (l = r.a.Extension.MathEvents.Event),
                                (s = r.a.Extension.MathEvents.Event.False),
                                (a = r.a.Extension.MathEvents.Hover);
                        }
                    );
                    var c = (r.a.Extension.MathZoom = {
                        version: "2.7.5",
                        settings: e.config.menuSettings,
                        scrollSize: 18,
                        HandleEvent: function (e, t, n) {
                            return (
                                !(!c.settings.CTRL || e.ctrlKey) ||
                                !(!c.settings.ALT || e.altKey) ||
                                !(!c.settings.CMD || e.metaKey) ||
                                !(!c.settings.Shift || e.shiftKey) ||
                                !c[t] ||
                                c[t](e, n)
                            );
                        },
                        Click: function (e, t) {
                            if ("Click" === this.settings.zoom)
                                return this.Zoom(e, t);
                        },
                        DblClick: function (e, t) {
                            if (
                                "Double-Click" === this.settings.zoom ||
                                "DoubleClick" === this.settings.zoom
                            )
                                return this.Zoom(e, t);
                        },
                        Hover: function (e, t) {
                            return (
                                "Hover" === this.settings.zoom &&
                                (this.Zoom(e, t), !0)
                            );
                        },
                        Zoom: function (n, i) {
                            this.Remove(),
                                a.ClearHoverTimer(),
                                l.ClearSelection();
                            var o = r.a.OutputJax[i.jaxID],
                                c = o.getJaxFromMath(i);
                            c.hover && a.UnHover(c);
                            var h = this.findContainer(i),
                                d = Math.floor(0.85 * h.clientWidth),
                                p = Math.max(
                                    document.body.clientHeight,
                                    document.documentElement.clientHeight
                                );
                            "visible" !== this.getOverflow(h) &&
                                (p = Math.min(h.clientHeight, p)),
                                (p = Math.floor(0.85 * p));
                            var f = t.Element(
                                    "span",
                                    { id: "MathJax_ZoomFrame" },
                                    [
                                        [
                                            "span",
                                            {
                                                id: "MathJax_ZoomOverlay",
                                                onmousedown: this.Remove,
                                            },
                                        ],
                                        [
                                            "span",
                                            {
                                                id: "MathJax_Zoom",
                                                onclick: this.Remove,
                                                style: {
                                                    visibility: "hidden",
                                                    fontSize:
                                                        this.settings.zscale,
                                                },
                                            },
                                            [
                                                [
                                                    "span",
                                                    {
                                                        style: {
                                                            display:
                                                                "inline-block",
                                                            "white-space":
                                                                "nowrap",
                                                        },
                                                    },
                                                ],
                                            ],
                                        ],
                                    ]
                                ),
                                m = f.lastChild,
                                g = m.firstChild,
                                x = f.firstChild;
                            i.parentNode.insertBefore(f, i),
                                i.parentNode.insertBefore(i, f),
                                g.addEventListener &&
                                    g.addEventListener(
                                        "mousedown",
                                        this.Remove,
                                        !0
                                    );
                            var v = m.offsetWidth || m.clientWidth;
                            if (
                                ((d -= v),
                                (p -= v),
                                (m.style.maxWidth = d + "px"),
                                (m.style.maxHeight = p + "px"),
                                this.msieTrapEventBug)
                            ) {
                                var b = t.Element("span", {
                                    id: "MathJax_ZoomEventTrap",
                                    onmousedown: this.Remove,
                                });
                                f.insertBefore(b, m);
                            }
                            if (this.msieZIndexBug) {
                                var y = t.addElement(document.body, "img", {
                                    src: "about:blank",
                                    id: "MathJax_ZoomTracker",
                                    width: 0,
                                    height: 0,
                                    style: {
                                        width: 0,
                                        height: 0,
                                        position: "relative",
                                    },
                                });
                                (f.style.position = "relative"),
                                    (f.style.zIndex =
                                        u.styles["#MathJax_ZoomOverlay"][
                                            "z-index"
                                        ]),
                                    (f = y);
                            }
                            var M = o.Zoom(c, g, i, d, p);
                            return (
                                this.msiePositionBug &&
                                    (this.msieSizeBug &&
                                        ((m.style.height = M.zH + "px"),
                                        (m.style.width = M.zW + "px")),
                                    m.offsetHeight > p &&
                                        ((m.style.height = p + "px"),
                                        (m.style.width =
                                            M.zW + this.scrollSize + "px")),
                                    m.offsetWidth > d &&
                                        ((m.style.width = d + "px"),
                                        (m.style.height =
                                            M.zH + this.scrollSize + "px"))),
                                this.operaPositionBug &&
                                    (m.style.width = Math.min(d, M.zW) + "px"),
                                m.offsetWidth > v &&
                                    m.offsetWidth - v < d &&
                                    m.offsetHeight - v < p &&
                                    (m.style.overflow = "visible"),
                                this.Position(m, M),
                                this.msieTrapEventBug &&
                                    ((b.style.height = m.clientHeight + "px"),
                                    (b.style.width = m.clientWidth + "px"),
                                    (b.style.left =
                                        parseFloat(m.style.left) +
                                        m.clientLeft +
                                        "px"),
                                    (b.style.top =
                                        parseFloat(m.style.top) +
                                        m.clientTop +
                                        "px")),
                                (m.style.visibility = ""),
                                "Hover" === this.settings.zoom &&
                                    (x.onmouseover = this.Remove),
                                window.addEventListener
                                    ? addEventListener(
                                          "resize",
                                          this.Resize,
                                          !1
                                      )
                                    : window.attachEvent
                                    ? attachEvent("onresize", this.Resize)
                                    : ((this.onresize = window.onresize),
                                      (window.onresize = this.Resize)),
                                e.signal.Post(["math zoomed", c]),
                                s(n)
                            );
                        },
                        Position: function (e, t) {
                            e.style.display = "none";
                            var n = this.Resize(),
                                i = n.x,
                                o = n.y,
                                r = t.mW;
                            e.style.display = "";
                            var s = -r - Math.floor((e.offsetWidth - r) / 2),
                                a = t.Y;
                            (e.style.left = Math.max(s, 10 - i) + "px"),
                                (e.style.top = Math.max(a, 10 - o) + "px"),
                                c.msiePositionBug || c.SetWH();
                        },
                        Resize: function (e) {
                            c.onresize && c.onresize(e);
                            var t =
                                    document.getElementById(
                                        "MathJax_ZoomFrame"
                                    ),
                                n = document.getElementById(
                                    "MathJax_ZoomOverlay"
                                ),
                                i = c.getXY(t),
                                o = c.findContainer(t);
                            if ("visible" !== c.getOverflow(o)) {
                                n.scroll_parent = o;
                                var r = c.getXY(o);
                                (i.x -= r.x),
                                    (i.y -= r.y),
                                    (r = c.getBorder(o)),
                                    (i.x -= r.x),
                                    (i.y -= r.y);
                            }
                            return (
                                (n.style.left = -i.x + "px"),
                                (n.style.top = -i.y + "px"),
                                c.msiePositionBug
                                    ? setTimeout(c.SetWH, 0)
                                    : c.SetWH(),
                                i
                            );
                        },
                        SetWH: function () {
                            var e = document.getElementById(
                                "MathJax_ZoomOverlay"
                            );
                            if (e) {
                                e.style.display = "none";
                                var t =
                                    e.scroll_parent ||
                                    document.documentElement ||
                                    document.body;
                                (e.style.width = t.scrollWidth + "px"),
                                    (e.style.height =
                                        Math.max(
                                            t.clientHeight,
                                            t.scrollHeight
                                        ) + "px"),
                                    (e.style.display = "");
                            }
                        },
                        findContainer: function (e) {
                            for (
                                e = e.parentNode;
                                e.parentNode &&
                                e !== document.body &&
                                "visible" === c.getOverflow(e);

                            )
                                e = e.parentNode;
                            return e;
                        },
                        getOverflow: window.getComputedStyle
                            ? function (e) {
                                  return getComputedStyle(e).overflow;
                              }
                            : function (e) {
                                  return (
                                      e.currentStyle || { overflow: "visible" }
                                  ).overflow;
                              },
                        getBorder: function (e) {
                            var t = { thin: 1, medium: 2, thick: 3 },
                                n = window.getComputedStyle
                                    ? getComputedStyle(e)
                                    : e.currentStyle || {
                                          borderLeftWidth: 0,
                                          borderTopWidth: 0,
                                      },
                                i = n.borderLeftWidth,
                                o = n.borderTopWidth;
                            return {
                                x: (i = t[i] ? t[i] : parseInt(i)),
                                y: (o = t[o] ? t[o] : parseInt(o)),
                            };
                        },
                        getXY: function (e) {
                            var t,
                                n = 0,
                                i = 0;
                            for (t = e; t.offsetParent; )
                                (n += t.offsetLeft), (t = t.offsetParent);
                            for (
                                c.operaPositionBug &&
                                    (e.style.border = "1px solid"),
                                    t = e;
                                t.offsetParent;

                            )
                                (i += t.offsetTop), (t = t.offsetParent);
                            return (
                                c.operaPositionBug && (e.style.border = ""),
                                { x: n, y: i }
                            );
                        },
                        Remove: function (n) {
                            var i =
                                document.getElementById("MathJax_ZoomFrame");
                            if (i) {
                                var o = r.a.OutputJax[
                                    i.previousSibling.jaxID
                                ].getJaxFromMath(i.previousSibling);
                                if (
                                    (e.signal.Post(["math unzoomed", o]),
                                    i.parentNode.removeChild(i),
                                    (i = document.getElementById(
                                        "MathJax_ZoomTracker"
                                    )) && i.parentNode.removeChild(i),
                                    c.operaRefreshBug)
                                ) {
                                    var a = t.addElement(document.body, "div", {
                                        style: {
                                            position: "fixed",
                                            left: 0,
                                            top: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "white",
                                            opacity: 0,
                                        },
                                        id: "MathJax_OperaDiv",
                                    });
                                    document.body.removeChild(a);
                                }
                                window.removeEventListener
                                    ? removeEventListener(
                                          "resize",
                                          c.Resize,
                                          !1
                                      )
                                    : window.detachEvent
                                    ? detachEvent("onresize", c.Resize)
                                    : ((window.onresize = c.onresize),
                                      delete c.onresize);
                            }
                            return s(n);
                        },
                    });
                    e.Browser.Select({
                        MSIE: function (e) {
                            var t = document.documentMode || 0,
                                n = t >= 9;
                            (c.msiePositionBug = !n),
                                (c.msieSizeBug =
                                    e.versionAtLeast("7.0") &&
                                    (!document.documentMode ||
                                        7 === t ||
                                        8 === t)),
                                (c.msieZIndexBug = t <= 7),
                                (c.msieInlineBlockAlignBug = t <= 7),
                                (c.msieTrapEventBug = !window.addEventListener),
                                "BackCompat" === document.compatMode &&
                                    (c.scrollSize = 52),
                                n && delete u.styles["#MathJax_Zoom"].filter;
                        },
                        Opera: function (e) {
                            (c.operaPositionBug = !0), (c.operaRefreshBug = !0);
                        },
                    }),
                        (c.topImg = c.msieInlineBlockAlignBug
                            ? t.Element("img", {
                                  style: {
                                      width: 0,
                                      height: 0,
                                      position: "relative",
                                  },
                                  src: "about:blank",
                              })
                            : t.Element("span", {
                                  style: {
                                      width: 0,
                                      height: 0,
                                      display: "inline-block",
                                  },
                              })),
                        (c.operaPositionBug || c.msieTopBug) &&
                            (c.topImg.style.border = "1px solid"),
                        r.a.Callback.Queue(
                            [
                                "StartupHook",
                                r.a.Hub.Register,
                                "Begin Styles",
                                {},
                            ],
                            ["Styles", n, u.styles],
                            ["Post", e.Startup.signal, "MathZoom Ready"],
                            [
                                "loadComplete",
                                n,
                                "[MathJax]/extensions/MathZoom.js",
                            ]
                        );
                })(
                    r.a.Hub,
                    r.a.HTML,
                    r.a.Ajax,
                    r.a.OutputJax["HTML-CSS"],
                    r.a.OutputJax.NativeMML
                );
            var s = r.a,
                a = n(9),
                l = n.n(a),
                u = n(1),
                c = n.n(u),
                h = {
                    doctitle: "markdown-reader",
                    subtitle: "Lightweight Markdown Documentation System",
                    index: "README.md",
                    summary: "summary.md",
                },
                d = n(5),
                p = n.n(d),
                f = function (e) {
                    var t;
                    return p.a.async(function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.next = 2), p.a.awrap(fetch(e));
                                case 2:
                                    if (!(t = n.sent).ok) {
                                        n.next = 7;
                                        break;
                                    }
                                    return n.abrupt("return", t.text());
                                case 7:
                                    throw new Error("fetch failed" + e);
                                case 8:
                                case "end":
                                    return n.stop();
                            }
                    });
                },
                m = n(2),
                g = n.n(m),
                x = n(10),
                v = n.n(x),
                b = n(11),
                y = n.n(b),
                M = n(12),
                w = n.n(M),
                S = n(13),
                k = n.n(S),
                E = n(14),
                T = n.n(E),
                C = g.a;
            g.a.registerLanguage("javascript", v.a),
                g.a.registerLanguage("typescript", y.a),
                g.a.registerLanguage("json", w.a),
                g.a.registerLanguage("xml", k.a),
                g.a.registerLanguage("css", T.a);
            var A,
                R = n(6),
                L = n.n(R),
                J = n.p;
            A =
                J.startsWith("http://") || J.startsWith("https://")
                    ? new URL(".", J)
                    : new URL(".", new URL(J, location.href));
            var _ = String(A),
                P = new Map(),
                I = new URL(h.summary, _).href,
                O = !1,
                H = (function (e) {
                    var t = {
                        sidebar_file: "sidebar.md",
                        index: "README.md",
                        content_id: e("#content"),
                        sidebar_id: e("#sidebar"),
                        edit_id: e("#edit"),
                        back_to_top_id: e("#back_to_top"),
                        loading_id: e("#loading"),
                        error_id: e("#error"),
                        search_name: e("#search"),
                        search_results_class: ".search_results",
                        fragments_class: ".fragments",
                        fragment_class: ".fragment",
                        highlight_code: !0,
                        sidebar: !0,
                        edit_button: !1,
                        back_to_top_button: !0,
                        searchbar: !0,
                        github_username: null,
                        github_repo: null,
                        run: function () {
                            t.sidebar &&
                                (function () {
                                    var t = I;
                                    f(t)
                                        .then(function (t) {
                                            return (
                                                (N.mulu = L()(t)),
                                                new Promise(function (t) {
                                                    requestAnimationFrame(
                                                        function () {
                                                            e(
                                                                N.$refs
                                                                    .我的侧边栏
                                                            ).css(
                                                                "top",
                                                                e(
                                                                    "#my\u5bfc\u822a\u680f"
                                                                ).height()
                                                            ),
                                                                e(
                                                                    N.$refs.我的侧边栏.querySelectorAll(
                                                                        "ul"
                                                                    )
                                                                ).addClass(
                                                                    "navbar-nav"
                                                                ),
                                                                e(
                                                                    N.$refs.我的侧边栏.querySelectorAll(
                                                                        "a"
                                                                    )
                                                                ).addClass(
                                                                    "mui-btn mui-btn-primary mui-btn-outlined"
                                                                ),
                                                                D().then(
                                                                    function () {
                                                                        return t();
                                                                    }
                                                                );
                                                        }
                                                    );
                                                }).then(function () {
                                                    requestAnimationFrame(
                                                        function () {
                                                            e(
                                                                "#my\u4e3b\u4f53"
                                                            ).css(
                                                                "padding-top",
                                                                e(
                                                                    "#my\u5bfc\u822a\u680f"
                                                                ).height()
                                                            ),
                                                                Array.from(
                                                                    N.$refs.我的侧边栏.querySelectorAll(
                                                                        "a"
                                                                    )
                                                                )
                                                                    .map(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            var t =
                                                                                new URL(
                                                                                    "#" +
                                                                                        e.getAttribute(
                                                                                            "href"
                                                                                        ),
                                                                                    location.href
                                                                                );
                                                                            return (
                                                                                (e.href =
                                                                                    t.href),
                                                                                t
                                                                            );
                                                                        }
                                                                    )
                                                                    .map(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return e.hash;
                                                                        }
                                                                    )
                                                                    .filter(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return e.startsWith(
                                                                                "#"
                                                                            );
                                                                        }
                                                                    )
                                                                    .map(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return e.slice(
                                                                                1
                                                                            );
                                                                        }
                                                                    )
                                                                    .forEach(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            fetch(
                                                                                new URL(
                                                                                    e.endsWith(
                                                                                        ".md"
                                                                                    )
                                                                                        ? e
                                                                                        : e +
                                                                                          ".md",
                                                                                    _
                                                                                ),
                                                                                {
                                                                                    credentials:
                                                                                        "omit",
                                                                                    body: null,
                                                                                    method: "GET",
                                                                                    mode: "cors",
                                                                                }
                                                                            );
                                                                        }
                                                                    ),
                                                                (N.showerror =
                                                                    !1);
                                                        }
                                                    );
                                                })
                                            );
                                        })
                                        .catch(function () {
                                            n(),
                                                setTimeout(function () {
                                                    i(!0);
                                                }, 5e3),
                                                (N.errorcontent =
                                                    "\u52a0\u8f7d\u5931\u8d25 " +
                                                    t),
                                                (N.showerror = !0);
                                        });
                                })(),
                                t.back_to_top_button,
                                t.edit_button,
                                t.highlight_code && C.initHighlightingOnLoad(),
                                o(),
                                window.addEventListener("hashchange", o);
                        },
                    };
                    function n() {
                        clearInterval(t.loading_interval),
                            t.loading_id.hide(),
                            e("#loadingparent").hide();
                    }
                    function i() {
                        var o =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0];
                        window.scrollTo(0, 0);
                        var r =
                            "" === location.hash
                                ? "./" + t.index
                                : location.hash.replace("#", "./");
                        if (
                            (t.loading_id.show(),
                            (t.loading_interval = setInterval(function () {
                                t.loading_id.fadeIn(1e3).fadeOut(1e3);
                            }, 2e3)),
                            !1 === o || (r = "./" + t.index),
                            (r = r.endsWith(".md") ? r : r + ".md"),
                            (r = new URL(r, _).toString()) !== N.urltext)
                        ) {
                            var a = P.get(r);
                            a
                                ? ((N.urltext = r), n(), (N.content = a))
                                : f(r)
                                      .then(function (i) {
                                          return (
                                              e(
                                                  "#collapsibleNavbar"
                                              ).removeClass("show"),
                                              e("#my\u4e3b\u4f53").css(
                                                  "padding-top",
                                                  e(
                                                      "#my\u5bfc\u822a\u680f"
                                                  ).height()
                                              ),
                                              (function (i) {
                                                  return new Promise(function (
                                                      o
                                                  ) {
                                                      t.error_id.hide(),
                                                          (i = (function (e) {
                                                              return e
                                                                  .replace(
                                                                      /&amp;#92;/g,
                                                                      "\\"
                                                                  )
                                                                  .replace(
                                                                      /&amp;#95;/g,
                                                                      "_"
                                                                  );
                                                          })(
                                                              (i = L()(
                                                                  i
                                                                      .replace(
                                                                          /\\/g,
                                                                          "&#92;"
                                                                      )
                                                                      .replace(
                                                                          /\_/g,
                                                                          "&#95;"
                                                                      )
                                                              ))
                                                          )),
                                                          (N.content = i),
                                                          requestAnimationFrame(
                                                              function () {
                                                                  n(),
                                                                      t.highlight_code &&
                                                                          Array.from(
                                                                              e(
                                                                                  "pre code"
                                                                              )
                                                                          ).forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  C.highlightBlock(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          ),
                                                                      o();
                                                              }
                                                          );
                                                  });
                                              })(i)
                                                  .then(function () {
                                                      return new Promise(
                                                          function (e) {
                                                              requestAnimationFrame(
                                                                  function () {
                                                                      if (
                                                                          s &&
                                                                          s
                                                                              .Extension[
                                                                              "Tex/AMSmath"
                                                                          ]
                                                                      ) {
                                                                          (s.Extension[
                                                                              "TeX/AMSmath"
                                                                          ].startNumber = 0),
                                                                              (s.Extension[
                                                                                  "TeX/AMSmath"
                                                                              ].labels =
                                                                                  {});
                                                                          var t =
                                                                              N
                                                                                  .$refs
                                                                                  .markdown内容;
                                                                          s.Hub.Queue(
                                                                              [
                                                                                  "Typeset",
                                                                                  s.Hub,
                                                                                  t,
                                                                              ]
                                                                          );
                                                                      }
                                                                      e();
                                                                  }
                                                              );
                                                          }
                                                      );
                                                  })
                                                  .then(function () {
                                                      return new Promise(
                                                          function (e) {
                                                              requestAnimationFrame(
                                                                  function () {
                                                                      Array.from(
                                                                          c()(
                                                                              "code.hljs"
                                                                          )
                                                                      ).forEach(
                                                                          function (
                                                                              e
                                                                          ) {
                                                                              var t =
                                                                                  "clip" +
                                                                                  "xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(
                                                                                      /[xy]/g,
                                                                                      function (
                                                                                          e
                                                                                      ) {
                                                                                          var t =
                                                                                              (16 *
                                                                                                  Math.random()) |
                                                                                              0;
                                                                                          return (
                                                                                              "x" ==
                                                                                              e
                                                                                                  ? t
                                                                                                  : (3 &
                                                                                                        t) |
                                                                                                    8
                                                                                          ).toString(
                                                                                              16
                                                                                          );
                                                                                      }
                                                                                  );
                                                                              c()(
                                                                                  e
                                                                              )
                                                                                  .attr(
                                                                                      "id",
                                                                                      t
                                                                                  )
                                                                                  .after(
                                                                                      '<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#'.concat(
                                                                                          t,
                                                                                          '">\u590d\u5236\n                                        </button>'
                                                                                      )
                                                                                  );
                                                                          }
                                                                      ),
                                                                          D(),
                                                                          setTimeout(
                                                                              function () {
                                                                                  n();
                                                                              },
                                                                              0
                                                                          ),
                                                                          (N.urltext =
                                                                              r),
                                                                          window.innerWidth <
                                                                              550 &&
                                                                              (N.xianshicebianlan =
                                                                                  !1);
                                                                      var t =
                                                                          N
                                                                              .$refs
                                                                              .markdown内容
                                                                              .innerHTML;
                                                                      P.set(
                                                                          r,
                                                                          t
                                                                      ),
                                                                          e();
                                                                  }
                                                              );
                                                          }
                                                      );
                                                  })
                                          );
                                      })
                                      .catch(function () {
                                          var e;
                                          (N.urltext =
                                              "\u52a0\u8f7d\u5931\u8d25 " + r),
                                              O ||
                                                  ((e =
                                                      "Opps! ... File not found!\n5\u79d2\u540e\u8fd4\u56de\u4e3b\u9875"),
                                                  t.error_id.html(e),
                                                  t.error_id.show(),
                                                  n(),
                                                  O ||
                                                      setTimeout(function () {
                                                          i(!0);
                                                      }, 5e3),
                                                  (O = !0),
                                                  (N.urltext =
                                                      "\u52a0\u8f7d\u5931\u8d25 " +
                                                      r));
                                      });
                        }
                    }
                    function o() {
                        var e = location.hash;
                        "search" == e.slice(2, 8) ||
                            "search" == e.slice(1, 7) ||
                            location.hash.includes("search") ||
                            i();
                    }
                    return t;
                })(c.a);
            function D() {
                return new Promise(function (e) {
                    requestAnimationFrame(function () {
                        if (window.innerWidth > 550) {
                            var t =
                                c()("#cebianlan")[0].offsetWidth -
                                c()("#contentcontainer").offset().left;
                            (t = Math.max(t, 20)),
                                c()("#contentcontainer").css({
                                    "padding-left": t + 20,
                                });
                        } else c()("#contentcontainer").css({ "padding-left": 20 });
                        e();
                    });
                });
            }
            var N,
                j = {
                    mounted: function () {
                        c()("#my\u4e3b\u4f53").css(
                            "padding-top",
                            c()("#my\u5bfc\u822a\u680f").height()
                        ),
                            D(),
                            window.addEventListener("resize", function () {
                                D();
                            }),
                            c()(function () {
                                var e = Object(i.a)(
                                        {},
                                        {
                                            doctitle: "markdown-reader",
                                            subtitle:
                                                "Lightweight Markdown Documentation System",
                                            github_username: "masx200",
                                            github_repo: "markdown-reader",
                                        },
                                        {},
                                        h
                                    ),
                                    t = e.doctitle || "Markdown Reader",
                                    n =
                                        e.subtitle ||
                                        "Lightweight Markdown Documentation System",
                                    o = e.github_username,
                                    r = e.github_repo;
                                (H.index = e.index),
                                    (document.title = t + " " + n),
                                    (N.mytitle = t),
                                    c()("#my\u4e3b\u4f53").css(
                                        "padding-top",
                                        c()("#my\u5bfc\u822a\u680f").height()
                                    ),
                                    (H.sidebar_file = "sidebar.md"),
                                    (H.github_username = o),
                                    (H.github_repo = r),
                                    (H.highlight_code = !0),
                                    H.run(),
                                    window.addEventListener(
                                        "hashchange",
                                        function () {
                                            scrollTo(0, 0),
                                                c()("#my\u4e3b\u4f53").css(
                                                    "padding-top",
                                                    c()(
                                                        "#my\u5bfc\u822a\u680f"
                                                    ).height()
                                                ),
                                                window.innerWidth < 550 &&
                                                    (N.xianshicebianlan = !1);
                                        }
                                    );
                            });
                    },
                    data: function () {
                        return {
                            mytitle: "",
                            showerror: !1,
                            errorcontent: "",
                            content: "",
                            mulu: "",
                            urltext: "",
                            xianshicebianlan: !0,
                        };
                    },
                    methods: {
                        togglecebian: function () {
                            (this.xianshicebianlan = !this.xianshicebianlan),
                                D();
                        },
                    },
                },
                F = n(15),
                z = Object(F.a)(
                    j,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { attrs: { id: "root" } }, [
                            n(
                                "div",
                                {
                                    staticClass: "container-fluid fixed-top",
                                    staticStyle: {
                                        "padding-right": "0",
                                        "padding-left": "0",
                                    },
                                    attrs: { id: "my\u5bfc\u822a\u680f" },
                                },
                                [
                                    n(
                                        "nav",
                                        {
                                            staticClass:
                                                "navbar navbar-expand-sm bg-light navbar-light",
                                            staticStyle: {
                                                "padding-right": "0",
                                                "padding-left": "0",
                                            },
                                        },
                                        [
                                            n("div", [
                                                n(
                                                    "a",
                                                    {
                                                        staticClass:
                                                            "navbar-brand navbar-brand mui-btn mui-btn-primary mui-btn-outlined",
                                                        staticStyle: {
                                                            top: "0",
                                                        },
                                                        attrs: {
                                                            href: "#README",
                                                            id: "title",
                                                        },
                                                        domProps: {
                                                            textContent: e._s(
                                                                e.mytitle
                                                            ),
                                                        },
                                                    },
                                                    [e._v("Markdon Reader")]
                                                ),
                                                e._v(" "),
                                                n(
                                                    "button",
                                                    {
                                                        staticClass:
                                                            "mui-btn mui-btn-primary mui-btn-outlined",
                                                        attrs: {
                                                            type: "button",
                                                            id: "cebianlantoggle",
                                                        },
                                                        on: {
                                                            click: e.togglecebian,
                                                        },
                                                    },
                                                    [
                                                        n("span", {
                                                            staticClass:
                                                                "navbar-toggler-icon",
                                                        }),
                                                    ]
                                                ),
                                            ]),
                                        ]
                                    ),
                                ]
                            ),
                            e._v(" "),
                            n("div", { staticClass: "container-fluid" }, [
                                n(
                                    "div",
                                    {
                                        directives: [
                                            {
                                                name: "show",
                                                rawName: "v-show",
                                                value: e.xianshicebianlan,
                                                expression: "xianshicebianlan",
                                            },
                                        ],
                                        ref: "\u6211\u7684\u4fa7\u8fb9\u680f",
                                        staticClass: "el-container",
                                        staticStyle: {
                                            border: "1px solid white",
                                            position: "fixed",
                                        },
                                        attrs: { id: "cebianlan" },
                                    },
                                    [
                                        n("aside", {
                                            staticClass: "el-aside",
                                            staticStyle: {
                                                "background-color": "white",
                                            },
                                            attrs: { id: "mynewsidelan" },
                                            domProps: {
                                                innerHTML: e._s(e.mulu),
                                            },
                                        }),
                                    ]
                                ),
                            ]),
                            e._v(" "),
                            n(
                                "div",
                                {
                                    staticClass: "container",
                                    attrs: { id: "my\u4e3b\u4f53" },
                                },
                                [
                                    e._m(0),
                                    e._v(" "),
                                    n("div", [
                                        n(
                                            "div",
                                            {
                                                attrs: {
                                                    id: "contentcontainer",
                                                },
                                            },
                                            [
                                                n("h5", {
                                                    attrs: {
                                                        id: "markdownurlsrc",
                                                    },
                                                    domProps: {
                                                        textContent: e._s(
                                                            e.urltext
                                                        ),
                                                    },
                                                }),
                                                e._v(" "),
                                                e.showerror
                                                    ? n("h5", {
                                                          attrs: {
                                                              id: "markdownerror",
                                                          },
                                                          domProps: {
                                                              textContent: e._s(
                                                                  e.errorcontent
                                                              ),
                                                          },
                                                      })
                                                    : e._e(),
                                                e._v(" "),
                                                n("div", {
                                                    ref: "markdown\u5185\u5bb9",
                                                    attrs: { id: "content" },
                                                    domProps: {
                                                        innerHTML: e._s(
                                                            e.content
                                                        ),
                                                    },
                                                }),
                                            ]
                                        ),
                                    ]),
                                    e._v(" "),
                                    n("div", { attrs: { id: "hide" } }),
                                    e._v(" "),
                                    e._m(1),
                                    e._v(" "),
                                    e._m(2),
                                ]
                            ),
                        ]);
                    },
                    [
                        function () {
                            var e = this.$createElement,
                                t = this._self._c || e;
                            return t(
                                "div",
                                { attrs: { id: "loadingparent" } },
                                [
                                    t("div", { attrs: { id: "loading" } }, [
                                        t("h1", [this._v("Loading ...")]),
                                    ]),
                                ]
                            );
                        },
                        function () {
                            var e = this.$createElement,
                                t = this._self._c || e;
                            return t(
                                "div",
                                { staticStyle: { display: "none" } },
                                [
                                    t("div", { attrs: { id: "back_to_top" } }, [
                                        this._v("top"),
                                    ]),
                                ]
                            );
                        },
                        function () {
                            var e = this.$createElement,
                                t = this._self._c || e;
                            return t("div", [
                                t("h1", { attrs: { id: "error" } }),
                            ]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                ).exports,
                B = n(7);
            (document.getElementById("root").innerHTML =
                '<div>\n<h1>loading</h1>\n<span class="mui-spinner mui-spinner-custom">\n\n</span></div>\n'),
                (function (e) {
                    e.Hub.Config({
                        tex2jax: { inlineMath: [["$", "$"]], processRefs: !0 },
                        TeX: {
                            equationNumbers: {
                                autoNumber: "all",
                                formatID: function (e) {
                                    return "(" + e + ")";
                                },
                                formatURL: function () {
                                    return null;
                                },
                            },
                        },
                    });
                })(s),
                new (0, l.a)(".btn").on("success", function (e) {
                    e.text, e.clearSelection();
                }),
                (B.a.config.devtools = !0),
                Object.assign(h, {
                    doctitle: "markdown-reader",
                    subtitle: "Lightweight Markdown Documentation System",
                    index: "README.md",
                    summary: "summary.md",
                    github_username: "masx200",
                    github_repo: "markdown-reader",
                }),
                (N = new B.a(
                    Object(i.a)({ el: document.getElementById("root") }, z)
                ));
        },
    ],
    [[16, 1, 2]],
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaHVuay5tYWluLjgyNTQ5ZmRiZmJjMzliODk4N2YxLmpzIiwic291cmNlUm9vdCI6IiJ9
