(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[9], {
    1098: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return vc
        }
        ));
        var r, c, a, i, s, o, u, j, b, l, d, f, p, O, h, x, m, g, v, y, w, k, S, C, z, I, A, E, L, D, T, M, F, N, H, B, R, P, K, Q, W, U, V, Y, q, J, _, X, Z, G, $, ee, te, ne, re, ce, ae, ie, se, oe, ue, je, be, le, de, fe, pe, Oe, he, xe, me, ge, ve, ye, we, ke, Se, Ce, ze, Ie, Ae, Ee = n(2), Le = n.n(Ee), De = n(12), Te = n(33), Me = n(54), Fe = n(0), Ne = n.n(Fe), He = n(3), Be = n(19), Re = n(46), Pe = Ne.a.createContext({
            mostRecentLotteryNumber: 0,
            historyError: !1,
            historyData: []
        }), Ke = n(10), Qe = n.n(Ke), We = n(754), Ue = n(64), Ve = n(312), Ye = n(314), qe = n(313), Je = n(763), _e = n(17), Xe = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n) {
                var r, c, a, i, s, o, u, j, b;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = Object(Ue.b)(),
                            c = new r.eth.Contract(Ve,Object(_e.i)()),
                            a = new We.b(t),
                            i = [],
                            !(n.length > 100)) {
                                e.next = 13;
                                break
                            }
                            s = 0,
                            o = Le.a.mark((function e() {
                                var t, r, o, u;
                                return Le.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return t = n.slice(100 * s, 100 * (s + 1)),
                                            r = t.map((function(e) {
                                                return [e[0].toLowerCase(), a.encodeFunctionData(e[1], e[2])]
                                            }
                                            )),
                                            e.next = 4,
                                            c.methods.aggregate(r).call();
                                        case 4:
                                            o = e.sent,
                                            u = o.returnData,
                                            s++,
                                            i = i.concat(u.map((function(e, n) {
                                                return a.decodeFunctionResult(t[n][1], e)
                                            }
                                            )));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ));
                        case 7:
                            if (!(s < n.length / 100)) {
                                e.next = 11;
                                break
                            }
                            return e.delegateYield(o(), "t0", 9);
                        case 9:
                            e.next = 7;
                            break;
                        case 11:
                            e.next = 19;
                            break;
                        case 13:
                            return u = n.map((function(e) {
                                return [e[0].toLowerCase(), a.encodeFunctionData(e[1], e[2])]
                            }
                            )),
                            e.next = 16,
                            c.methods.aggregate(u).call();
                        case 16:
                            j = e.sent,
                            b = j.returnData,
                            i = b.map((function(e, t) {
                                return a.decodeFunctionResult(n[t][1], e)
                            }
                            ));
                        case 19:
                            return e.abrupt("return", i);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(), Ze = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n, r, c) {
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.abrupt("return", t.methods.multiBuy(new Qe.a(n).times(new Qe.a(10).pow(18)).toString(), r).send({
                                from: c
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 4:
                            return e.prev = 4,
                            e.t0 = e.catch(0),
                            e.abrupt("return", console.error(e.t0));
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 4]])
            }
            )));
            return function(t, n, r, c) {
                return e.apply(this, arguments)
            }
        }(), Ge = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n, r, c) {
                var a, i, s, o, u, j, b, l, d, f;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (e.t0 = c,
                            e.t0) {
                                e.next = 5;
                                break
                            }
                            return e.next = 4,
                            t.methods.issueIndex().call();
                        case 4:
                            e.t0 = e.sent;
                        case 5:
                            return a = e.t0,
                            e.next = 8,
                            $e(n, r);
                        case 8:
                            return i = e.sent,
                            s = Array.apply(null, {
                                length: i
                            }).map((function(e, t) {
                                return [n.options.address, "tokenOfOwnerByIndex", [r, t]]
                            }
                            )),
                            e.next = 12,
                            Xe(Ye, s);
                        case 12:
                            return o = e.sent,
                            u = o.map((function(e) {
                                return e.toString()
                            }
                            )),
                            j = u.map((function(e) {
                                return [n.options.address, "getLotteryIssueIndex", [e]]
                            }
                            )),
                            e.next = 17,
                            Xe(Ye, j);
                        case 17:
                            return b = e.sent,
                            l = [],
                            b.forEach(function() {
                                var e = Object(De.a)(Le.a.mark((function e(t, n) {
                                    return Le.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                new Qe.a(t).eq(a) && l.push(u[n]);
                                            case 1:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()),
                            d = l.map((function(e) {
                                return [n.options.address, "getLotteryNumbers", [e]]
                            }
                            )),
                            e.next = 23,
                            Xe(Ye, d);
                        case 23:
                            return f = e.sent,
                            e.next = 26,
                            at(t);
                        case 26:
                            return e.abrupt("return", f);
                        case 27:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, c) {
                return e.apply(this, arguments)
            }
        }(), $e = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n) {
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.balanceOf(n).call());
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(), et = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n, r) {
                var c, a, i, s, o, u, j, b, l, d;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.methods.issueIndex().call();
                        case 2:
                            return e.next = 4,
                            $e(n, r);
                        case 4:
                            return c = e.sent,
                            a = Array.apply(null, {
                                length: c
                            }).map((function(e, t) {
                                return [n.options.address, "tokenOfOwnerByIndex", [r, t]]
                            }
                            )),
                            e.next = 8,
                            Xe(Ye, a);
                        case 8:
                            return i = e.sent,
                            s = i.map((function(e) {
                                return e.toString()
                            }
                            )),
                            o = s.map((function(e) {
                                return [n.options.address, "getClaimStatus", [e]]
                            }
                            )),
                            e.next = 13,
                            Xe(Ye, o);
                        case 13:
                            return u = e.sent,
                            j = s.filter((function(e, t) {
                                return !u[t][0]
                            }
                            )),
                            b = j.map((function(e) {
                                return [t.options.address, "getRewardView", [e]]
                            }
                            )),
                            e.next = 18,
                            Xe(qe, b);
                        case 18:
                            return l = e.sent,
                            d = [],
                            l.forEach((function(e, t) {
                                e > 0 && d.push(j[t])
                            }
                            )),
                            d.length > 200 && (d = d.slice(0, 200)),
                            e.prev = 22,
                            e.abrupt("return", t.methods.multiClaim(d).send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 26:
                            return e.prev = 26,
                            e.t0 = e.catch(22),
                            e.abrupt("return", console.error(e.t0));
                        case 29:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[22, 26]])
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }(), tt = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n, r) {
                var c, a, i, s, o, u, j, b, l, d, f, p, O, h;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.methods.issueIndex().call();
                        case 3:
                            return c = e.sent,
                            e.next = 6,
                            $e(n, r);
                        case 6:
                            return a = e.sent,
                            i = Array.apply(null, {
                                length: a
                            }).map((function(e, t) {
                                return [n.options.address, "tokenOfOwnerByIndex", [r, t]]
                            }
                            )),
                            e.next = 10,
                            Xe(Ye, i);
                        case 10:
                            return s = e.sent,
                            o = s.map((function(e) {
                                return e.toString()
                            }
                            )),
                            u = o.map((function(e) {
                                return [n.options.address, "getLotteryIssueIndex", [e]]
                            }
                            )),
                            e.next = 15,
                            Xe(Ye, u);
                        case 15:
                            return j = e.sent,
                            b = o.map((function(e) {
                                return [n.options.address, "getClaimStatus", [e]]
                            }
                            )),
                            e.next = 19,
                            Xe(Ye, b);
                        case 19:
                            return l = e.sent,
                            e.next = 22,
                            at(t);
                        case 22:
                            return d = e.sent,
                            f = [],
                            j.forEach(function() {
                                var e = Object(De.a)(Le.a.mark((function e(t, n) {
                                    return Le.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                (d || t.toString() !== c) && (l[n][0] || f.push(o[n]));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()),
                            p = f.map((function(e) {
                                return [t.options.address, "getRewardView", [e]]
                            }
                            )),
                            e.next = 28,
                            Xe(qe, p);
                        case 28:
                            return O = e.sent,
                            h = O.reduce((function(e, t) {
                                return Qe.a.sum(e, t)
                            }
                            ), Qe()(0)),
                            e.abrupt("return", h);
                        case 33:
                            e.prev = 33,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 36:
                            return e.abrupt("return", Qe()(0));
                        case 37:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 33]])
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }(), nt = function() {
            var e = Object(De.a)(Le.a.mark((function e(t) {
                var n;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.methods.issueIndex().call();
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", t.methods.getTotalRewards(n).call());
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), rt = function() {
            var e = Object(De.a)(Le.a.mark((function e(t) {
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.maxNumber().call());
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), ct = function() {
            var e = Object(De.a)(Le.a.mark((function e(t) {
                var n;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.methods.issueIndex().call();
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), at = function() {
            var e = Object(De.a)(Le.a.mark((function e(t) {
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.drawed().call());
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), it = function() {
            var e = Object(De.a)(Le.a.mark((function e(t, n) {
                var r, c;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.methods.issueIndex().call();
                        case 2:
                            return r = e.sent,
                            e.next = 5,
                            t.methods.drawed().call();
                        case 5:
                            return e.sent || (r -= 1),
                            e.prev = 7,
                            e.next = 10,
                            t.methods.historyAmount(r, 5 - n).call();
                        case 10:
                            return c = e.sent,
                            e.abrupt("return", c / 1e18 / Je.g);
                        case 14:
                            e.prev = 14,
                            e.t0 = e.catch(7),
                            console.error(e.t0);
                        case 17:
                            return e.abrupt("return", 0);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[7, 14]])
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(), st = function() {
            var e = Object(De.a)(Le.a.mark((function e(t) {
                var n, r, c, a, i;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.methods.issueIndex().call();
                        case 2:
                            return n = e.sent,
                            r = [],
                            e.next = 6,
                            t.methods.drawed().call();
                        case 6:
                            if ((c = e.sent) || 0 !== parseInt(n, 10)) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", [0, 0, 0, 0]);
                        case 9:
                            if (c) {
                                e.next = 22;
                                break
                            }
                            a = 0;
                        case 11:
                            if (!(a < 4)) {
                                e.next = 20;
                                break
                            }
                            return e.t0 = r,
                            e.next = 15,
                            t.methods.historyNumbers(n - 1, a).call();
                        case 15:
                            e.t1 = +e.sent.toString(),
                            e.t0.push.call(e.t0, e.t1);
                        case 17:
                            a++,
                            e.next = 11;
                            break;
                        case 20:
                            e.next = 32;
                            break;
                        case 22:
                            i = 0;
                        case 23:
                            if (!(i < 4)) {
                                e.next = 32;
                                break
                            }
                            return e.t2 = r,
                            e.next = 27,
                            t.methods.winningNumbers(i).call();
                        case 27:
                            e.t3 = +e.sent.toString(),
                            e.t2.push.call(e.t2, e.t3);
                        case 29:
                            i++,
                            e.next = 23;
                            break;
                        case 32:
                            return e.abrupt("return", r);
                        case 33:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), ot = n(201), ut = n(759), jt = n(204), bt = n(214), lt = function() {
            var e = Object(Fe.useState)(!0)
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , c = Object(Re.c)().account
              , a = Object(ut.g)();
            return Object(Fe.useEffect)((function() {
                c && a && function() {
                    var e = Object(De.a)(Le.a.mark((function e() {
                        var t;
                        return Le.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    at(a);
                                case 2:
                                    t = e.sent,
                                    r(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [c, a]),
            n
        }, dt = function() {
            var e = Object(Fe.useState)((new Date).getTime())
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1];
            return Object(Fe.useEffect)((function() {
                var e = setInterval((function() {
                    r((function(e) {
                        return e + 1e3
                    }
                    ))
                }
                ), 1e3);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            n
        }, ft = n(816), pt = [2, 14], Ot = function(e) {
            var t, n = new Date(e), r = n.getUTCHours(), c = function(e) {
                switch (!0) {
                case e < pt[0] || e >= pt[1]:
                    return pt[0];
                case e < pt[1]:
                    return pt[1];
                default:
                    return 0
                }
            }(r);
            if (2 === c && r >= 2 && r <= 23) {
                var a = new Date(e)
                  , i = a.getUTCDate() + 1;
                a.setUTCDate(i),
                t = a.setUTCHours(c, 0, 0, 0)
            } else
                t = n.setUTCHours(c, 0, 0, 0);
            return t
        }, ht = function(e, t) {
            return "".concat(parseInt(e), "h, ").concat(parseInt(t), "m")
        }, xt = function(e) {
            var t = function(e) {
                return 36e5 * (parseInt(e / 36e5) + 1)
            }(e) - e
              , n = Object(ft.a)(t / 1e3).minutes
              , r = Object(ft.a)(t / 1e3).hours;
            return ht(r, n)
        }, mt = function(e) {
            return 100 - (Ot(e) - e) / 432e5 * 100
        }, gt = n(8), vt = He.e.div(r || (r = Object(Me.a)(["\n  display: block;\n  width: 100%;\n"]))), yt = He.e.div(c || (c = Object(Me.a)(["\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]))), wt = He.e.div(a || (a = Object(Me.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]))), kt = Object(He.e)(Be.db)(i || (i = Object(Me.a)(["\n  margin-right: 16px;\n"]))), St = function() {
            var e = Object(ot.a)()
              , t = lt()
              , n = dt()
              , r = xt(n)
              , c = function(e) {
                var t = Ot(e) - e
                  , n = Object(ft.a)(t / 1e3).minutes
                  , r = Object(ft.a)(t / 1e3).hours;
                return ht(r, n)
            }(n);
            return Object(gt.jsxs)(vt, {
                children: [Object(gt.jsx)(Be.X, {
                    primaryStep: mt(n),
                    secondaryStep: 1 / 12 * 100,
                    showProgressBunny: !0
                }), Object(gt.jsxs)(yt, {
                    children: [Object(gt.jsx)(kt, {
                        fontSize: "20px",
                        bold: !0,
                        color: "contrast",
                        children: t ? r : c
                    }), Object(gt.jsx)(Be.db, {
                        fontSize: "20px",
                        bold: !0,
                        color: "invertedContrast",
                        children: e(0, t ? "Until ticket sale" : "Until lottery draw")
                    })]
                }), t && Object(gt.jsx)(wt, {
                    children: Object(gt.jsxs)(Be.db, {
                        color: "invertedContrast",
                        children: [c, " ", e(0, "Until lottery draw")]
                    })
                })]
            })
        }, Ct = Object(He.e)(Be.F).attrs({
            as: "h1",
            size: "xl"
        })(s || (s = Object(Me.a)(["\n  color: ", ";\n  margin-bottom: 24px;\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        )), zt = Object(He.e)(Be.db)(o || (o = Object(Me.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))), It = He.e.div(u || (u = Object(Me.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n"]))), At = Object(He.e)(bt.a)(j || (j = Object(Me.a)(["\n  display: flex;\n\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), Et = He.e.div(b || (b = Object(Me.a)(["\n  flex: 1;\n  padding-right: 0;\n\n  ", " {\n    padding-right: 24px;\n  }\n\n  ", " {\n    padding-right: 32px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), Lt = He.e.div(l || (l = Object(Me.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 0;\n  margin-top: 16px;\n\n  ", " {\n    margin-top: 0;\n    padding-left: 24px;\n  }\n\n  ", " {\n    padding-left: 32px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), Dt = function() {
            var e = Object(ot.a)();
            return Object(gt.jsx)(It, {
                children: Object(gt.jsxs)(At, {
                    children: [Object(gt.jsxs)(Et, {
                        children: [Object(gt.jsx)(Ct, {
                            children: e(708, "The CAKE Lottery")
                        }), Object(gt.jsx)(zt, {
                            children: e(710, "Buy tickets with CAKE")
                        }), Object(gt.jsx)(zt, {
                            children: e(712, "Win if 2, 3, or 4 of your ticket numbers match!")
                        })]
                    }), Object(gt.jsx)(Lt, {
                        children: Object(gt.jsx)(St, {})
                    })]
                })
            })
        }, Tt = He.e.div(d || (d = Object(Me.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        )), Mt = n(760), Ft = n(125), Nt = function() {
            var e = Object(Fe.useState)(new Qe.a(0))
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , c = Object(Fe.useState)(!1)
              , a = Object(Te.a)(c, 2)
              , i = a[0]
              , s = a[1]
              , o = Object(Re.c)().account
              , u = Object(ut.h)()
              , j = Object(ut.g)()
              , b = Object(Fe.useCallback)(Object(De.a)(Le.a.mark((function e() {
                var t;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return s(!0),
                            e.next = 3,
                            tt(j, u, o);
                        case 3:
                            t = e.sent,
                            r(t),
                            s(!1);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [o, j, u]);
            return Object(Fe.useEffect)((function() {
                o && j && u && b()
            }
            ), [o, b, j, u]),
            {
                claimLoading: i,
                claimAmount: n
            }
        }, Ht = function() {
            var e = Object(Fe.useState)([0, 0, 0, 0])
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , c = Object(ut.g)()
              , a = Object(Ft.a)().fastRefresh;
            return Object(Fe.useEffect)((function() {
                c && function() {
                    var e = Object(De.a)(Le.a.mark((function e() {
                        var t;
                        return Le.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    st(c);
                                case 2:
                                    t = e.sent,
                                    r(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [a, c, r]),
            n
        }, Bt = function(e) {
            var t = Object(Fe.useState)(0)
              , n = Object(Te.a)(t, 2)
              , r = n[0]
              , c = n[1]
              , a = Object(ut.g)()
              , i = Object(Ft.a)().fastRefresh;
            return Object(Fe.useEffect)((function() {
                a && function() {
                    var t = Object(De.a)(Le.a.mark((function t() {
                        var n;
                        return Le.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    it(a, e);
                                case 2:
                                    n = t.sent,
                                    c(n);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [a, e, i]),
            r
        }, Rt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , t = Object(Fe.useState)([])
              , n = Object(Te.a)(t, 2)
              , r = n[0]
              , c = n[1]
              , a = Object(Re.c)()
              , i = a.account
              , s = Object(ut.h)()
              , o = Object(ut.g)()
              , u = Object(Ft.a)()
              , j = u.fastRefresh;
            return Object(Fe.useEffect)((function() {
                i && o && s && function() {
                    var t = Object(De.a)(Le.a.mark((function t() {
                        var n;
                        return Le.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Ge(o, s, i, e);
                                case 2:
                                    n = t.sent,
                                    c(n);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [i, o, s, j, e]),
            r
        }, Pt = He.e.div(f || (f = Object(Me.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #ddd;\n  border-bottom: 8px solid #ddd;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))), Kt = function() {
            return Object(gt.jsx)(Pt, {})
        }, Qt = He.e.div(p || (p = Object(Me.a)(["\n  color: #ff8c28;\n"]))), Wt = He.e.div(O || (O = Object(Me.a)(["\n  text-align: center;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), Ut = Object(He.e)(Be.k)(h || (h = Object(Me.a)(["\n  margin-top: ", "px;\n"])), (function(e) {
            return e.theme.spacing[2]
        }
        )), Vt = function(e) {
            var t = e.myTicketNumbers
              , n = e.onDismiss
              , r = e.from
              , c = Ht()
              , a = Object(ot.a)()
              , i = Object(Fe.useCallback)((function(e) {
                for (var t = 0, n = c.length - 1; n >= 0; n--)
                    c[n] == e[n] && t++;
                return t
            }
            ), [c])
              , s = t.map((function(e, t) {
                if (i(e[0]) > 1 && "buy" !== r) {
                    var n = new Array(i(e[0]) + 1).join("\ud83e\udd11");
                    return Object(gt.jsxs)(Qt, {
                        children: [n, e.toString(), n]
                    }, t)
                }
                return Object(gt.jsx)("p", {
                    children: e.toString()
                }, t)
            }
            ));
            return Object(gt.jsxs)(Be.R, {
                title: a(490, "My Tickets (Total: ".concat(t.length, ")"), {
                    TICKETS: t.length
                }),
                onDismiss: n,
                children: [Object(gt.jsx)(Wt, {
                    children: Object(gt.jsx)("h2", {
                        children: s
                    })
                }), Object(gt.jsx)(Ut, {
                    variant: "secondary",
                    onClick: n,
                    children: a(438, "Close")
                })]
            })
        }, Yt = He.e.div(x || (x = Object(Me.a)(["\n  display: flex;\n  align-items: baseline;\n"]))), qt = He.e.div(m || (m = Object(Me.a)(["\n  margin-bottom: 16px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))), Jt = He.e.div(g || (g = Object(Me.a)(["\n  margin-top: ", "px;\n"])), (function(e) {
            return e.theme.spacing[3]
        }
        )), _t = He.e.div(v || (v = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))), Xt = Object(He.e)(Be.k)(y || (y = Object(Me.a)(["\n  margin-top: ", "px;\n"])), (function(e) {
            return e.theme.spacing[1]
        }
        )), Zt = function() {
            var e = Object(Fe.useState)(!1)
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , c = Object(ot.a)()
              , a = Nt()
              , i = a.claimLoading
              , s = a.claimAmount
              , o = function() {
                var e = Object(Re.c)().account
                  , t = Object(ut.g)()
                  , n = Object(ut.h)();
                return {
                    onMultiClaim: Object(Fe.useCallback)(Object(De.a)(Le.a.mark((function r() {
                        var c;
                        return Le.a.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0,
                                    r.next = 3,
                                    et(t, n, e);
                                case 3:
                                    return c = r.sent,
                                    r.abrupt("return", c);
                                case 7:
                                    return r.prev = 7,
                                    r.t0 = r.catch(0),
                                    r.abrupt("return", !1);
                                case 10:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, null, [[0, 7]])
                    }
                    ))), [e, t, n])
                }
            }().onMultiClaim
              , u = Rt()
              , j = Object(Be.rb)(Object(gt.jsx)(Vt, {
                myTicketNumbers: u,
                from: "buy"
            }))
              , b = Object(Te.a)(j, 1)[0]
              , l = Object(Fe.useCallback)(Object(De.a)(Le.a.mark((function e() {
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            r(!0),
                            e.next = 4,
                            o();
                        case 4:
                            e.sent && r(!1),
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            ))), [o, r])
              , d = Object(Mt.a)(s).toFixed(2);
            return Object(gt.jsxs)(_t, {
                children: [Object(gt.jsx)(qt, {
                    children: Object(gt.jsx)(Be.kb, {})
                }), Object(gt.jsx)(Be.F, {
                    as: "h3",
                    size: "lg",
                    color: "secondary",
                    children: c(660, "You won!")
                }), i && Object(gt.jsx)(Kt, {}), !i && Object(gt.jsx)(gt.Fragment, {
                    children: Object(gt.jsxs)(Yt, {
                        children: [Object(gt.jsx)(Be.F, {
                            as: "h4",
                            size: "xl",
                            style: {
                                marginRight: "6px"
                            },
                            children: d
                        }), Object(gt.jsx)(Be.F, {
                            as: "h4",
                            size: "lg",
                            children: "CAKE"
                        })]
                    })
                }), Object(gt.jsx)(Jt, {
                    children: Object(gt.jsx)(Be.k, {
                        width: "100%",
                        disabled: n,
                        onClick: l,
                        children: c(1056, "Collect")
                    })
                }), Object(gt.jsx)(Xt, {
                    variant: "text",
                    onClick: b,
                    children: c(432, "View your tickets")
                })]
            })
        }, Gt = He.e.div(w || (w = Object(Me.a)(["\n  display: flex;\n"]))), $t = He.e.div(k || (k = Object(Me.a)(["\n  display: flex;\n  flex-direction: column;\n"]))), en = Object(He.e)(Be.db)(S || (S = Object(Me.a)(["\n  padding-left: 12px;\n"]))), tn = He.e.img(C || (C = Object(Me.a)(["\n  margin-right: 6px;\n\n  ", " {\n    margin-right: 20px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), nn = Object(He.e)(Be.k)(z || (z = Object(Me.a)(["\n  padding: 0 12px;\n  height: unset;\n"]))), rn = function() {
            var e = Object(ot.a)()
              , t = Rt()
              , n = Object(Be.rb)(Object(gt.jsx)(Vt, {
                myTicketNumbers: t,
                from: "buy"
            }))
              , r = Object(Te.a)(n, 1)[0];
            return Object(gt.jsxs)(Gt, {
                children: [Object(gt.jsx)(tn, {
                    src: "/images/no-prize.svg",
                    alt: "no prizes won"
                }), Object(gt.jsxs)($t, {
                    children: [Object(gt.jsx)(en, {
                        color: "textDisabled",
                        children: e(726, "Sorry, no prizes to collect")
                    }), Object(gt.jsx)(nn, {
                        variant: "text",
                        onClick: r,
                        children: e(432, "View your tickets")
                    })]
                })]
            })
        }, cn = Object(He.e)(Be.o)(I || (I = Object(Me.a)(["\n  ", "\n"])), (function(e) {
            return e.isDisabled ? "  \n        margin-top: 16px;\n        background-color: unset;\n        box-shadow: unset;\n        border: 1px solid ".concat(e.theme.colors.textDisabled, ";\n\n        ").concat(e.theme.mediaQueries.sm, " {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg, " {\n          margin-top: 32px;\n        }\n        ") : ""
        }
        )), an = function() {
            var e = Nt().claimAmount
              , t = Object(Mt.a)(e) > 0;
            return Object(gt.jsx)(cn, {
                isDisabled: !t,
                isActive: t,
                children: Object(gt.jsx)(Be.p, {
                    children: t ? Object(gt.jsx)(Zt, {}) : Object(gt.jsx)(rn, {})
                })
            })
        }, sn = n(764), on = Object(He.e)(Be.p)(A || (A = Object(Me.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))), un = Object(He.e)(Be.F)(E || (E = Object(Me.a)(["\n  margin: 16px 0;\n"]))), jn = He.e.div(L || (L = Object(Me.a)(["\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))), bn = function() {
            var e = Object(ot.a)();
            return Object(gt.jsx)(Be.o, {
                isActive: !0,
                children: Object(gt.jsxs)(on, {
                    children: [Object(gt.jsx)(jn, {
                        children: Object(gt.jsx)(Be.eb, {})
                    }), Object(gt.jsx)(un, {
                        size: "md",
                        children: e(1080, "Unlock wallet to access lottery")
                    }), Object(gt.jsx)(sn.a, {})]
                })
            })
        }, ln = n(817), dn = n(770), fn = n(781), pn = function(e) {
            var t = Object(Fe.useState)(!1)
              , n = Object(Te.a)(t, 2)
              , r = n[0]
              , c = n[1]
              , a = Object(fn.b)().onApprove;
            return {
                handleApprove: Object(Fe.useCallback)(Object(De.a)(Le.a.mark((function t() {
                    return Le.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                c(!0),
                                t.next = 4,
                                a();
                            case 4:
                                t.sent || c(!1),
                                e(),
                                t.next = 12;
                                break;
                            case 9:
                                t.prev = 9,
                                t.t0 = t.catch(0),
                                console.error(t.t0);
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 9]])
                }
                ))), [a, e]),
                requestedApproval: r
            }
        }, On = He.e.div(D || (D = Object(Me.a)([""]))), hn = He.e.div(T || (T = Object(Me.a)(["\n  width: ", "px;\n"])), (function(e) {
            return e.theme.spacing[3]
        }
        )), xn = He.e.div(M || (M = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n"]))), mn = He.e.div(F || (F = Object(Me.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), gn = He.e.span(N || (N = Object(Me.a)(["\n  color: ", ";\n  font-weight: 700;\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), vn = function(e) {
            var t = e.max
              , n = e.symbol
              , r = e.availableSymbol
              , c = e.onChange
              , a = e.onSelectMax
              , i = e.value
              , s = Object(ot.a)();
            return Object(gt.jsxs)(On, {
                children: [Object(gt.jsxs)(Be.E, {
                    alignItems: "center",
                    children: [Object(gt.jsx)(Be.J, {
                        onChange: c,
                        placeholder: "0",
                        value: i
                    }), Object(gt.jsxs)(xn, {
                        children: [Object(gt.jsx)(gn, {
                            children: n
                        }), Object(gt.jsx)(hn, {}), Object(gt.jsx)("div", {
                            children: Object(gt.jsx)(Be.k, {
                                size: "sm",
                                onClick: a,
                                children: s(452, "Max")
                            })
                        })]
                    })]
                }), Object(gt.jsx)(mn, {
                    children: s(454, "".concat(t.toLocaleString(), " ").concat(r, " Available"))
                })]
            })
        }, yn = n(769), wn = function(e) {
            var t, n = e.max, r = e.onDismiss, c = Object(Fe.useState)("1"), a = Object(Te.a)(c, 2), i = a[0], s = a[1], o = Object(Fe.useState)(!1), u = Object(Te.a)(o, 2), j = u[0], b = u[1], l = Object(Fe.useState)(!1), d = Object(Te.a)(l, 2)[1], f = Object(ot.a)(), p = Object(Fe.useMemo)((function() {
                return Object(Mt.b)(n)
            }
            ), [n]), O = Object(Fe.useMemo)((function() {
                return parseInt(Object(Mt.b)(n.div(Je.g)), 10)
            }
            ), [n]), h = function() {
                var e = Object(Re.c)().account
                  , t = Object(ut.g)();
                return {
                    onMultiBuy: Object(Fe.useCallback)(function() {
                        var n = Object(De.a)(Le.a.mark((function n(r, c) {
                            var a;
                            return Le.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0,
                                        n.next = 3,
                                        Ze(t, r, c, e);
                                    case 3:
                                        return a = n.sent,
                                        n.abrupt("return", a);
                                    case 7:
                                        return n.prev = 7,
                                        n.t0 = n.catch(0),
                                        n.abrupt("return", !1);
                                    case 10:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[0, 7]])
                        }
                        )));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }(), [e, t])
                }
            }().onMultiBuy, x = function() {
                var e = Object(Fe.useState)(5)
                  , t = Object(Te.a)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , c = Object(ut.g)()
                  , a = Object(Fe.useCallback)(Object(De.a)(Le.a.mark((function e() {
                    var t;
                    return Le.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                rt(c);
                            case 2:
                                t = e.sent,
                                r(t);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [c]);
                return Object(Fe.useEffect)((function() {
                    c && a()
                }
                ), [c, a]),
                n
            }(), m = Object(Fe.useCallback)(Object(De.a)(Le.a.mark((function e() {
                var t, n;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            d(!0),
                            t = parseInt(i),
                            n = Array.apply(null, {
                                length: t
                            }).map((function() {
                                return [Math.floor(Math.random() * x) + 1, Math.floor(Math.random() * x) + 1, Math.floor(Math.random() * x) + 1, Math.floor(Math.random() * x) + 1]
                            }
                            )),
                            e.next = 6,
                            h(Je.g.toString(), n);
                        case 6:
                            e.sent && d(!1),
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 10]])
            }
            ))), [h, d, x, i]), g = Object(Fe.useCallback)((function() {
                Number(O) > Je.f ? s(Je.f.toString()) : s(O.toString())
            }
            ), [O]);
            return Object(gt.jsxs)(Be.R, {
                title: f(450, "Enter amount of tickets to buy"),
                onDismiss: r,
                children: [Object(gt.jsx)(vn, {
                    value: i,
                    onSelectMax: g,
                    onChange: function(e) {
                        return s(e.currentTarget.value)
                    },
                    max: p,
                    symbol: "TICKET",
                    availableSymbol: "CAKE"
                }), Object(gt.jsx)("div", {
                    children: Object(gt.jsx)(kn, {
                        children: f(999, "1 Ticket = ".concat(Je.g, " CAKE"), {
                            num: Je.g
                        })
                    })
                }), Object(gt.jsxs)("div", {
                    children: [Object(gt.jsx)(Cn, {
                        children: f(478, "Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.")
                    }), Object(gt.jsx)(Sn, {
                        children: f(460, "You will spend: ".concat((t = i,
                        +t * Je.g), " CAKE"))
                    })]
                }), Object(gt.jsxs)(yn.a, {
                    children: [Object(gt.jsx)(Be.k, {
                        width: "100%",
                        variant: "secondary",
                        onClick: r,
                        children: f(462, "Cancel")
                    }), Object(gt.jsx)(Be.k, {
                        id: "lottery-buy-complete",
                        width: "100%",
                        disabled: j || parseInt(i) > Number(O) || parseInt(i) > Je.f || parseInt(i) < 1,
                        onClick: Object(De.a)(Le.a.mark((function e() {
                            return Le.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return b(!0),
                                        e.next = 3,
                                        m();
                                    case 3:
                                        b(!1),
                                        r();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))),
                        children: j ? f(488, "Pending Confirmation") : f(464, "Confirm")
                    })]
                })]
            })
        }, kn = He.e.div(H || (H = Object(Me.a)(["\n  margin-left: 0.4em;\n  font-size: 14px;\n  font-weight: 600;\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), Sn = He.e.div(B || (B = Object(Me.a)(["\n  margin-top: 1em;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), Cn = He.e.div(R || (R = Object(Me.a)(["\n  margin-top: 1em;\n  margin-left: 0.4em;\n  color: #ed4b9e;\n"]))), zn = He.e.div(P || (P = Object(Me.a)(["\n  text-align: left;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), In = function(e) {
            var t = e.onDismiss
              , n = Object(ot.a)();
            return Object(gt.jsxs)(Be.R, {
                title: n(466, "Warning"),
                onDismiss: t,
                children: [Object(gt.jsxs)(zn, {
                    children: [n(468, "Lottery ticket purchases are final."), Object(gt.jsx)("br", {}), n(470, "Your CAKE will not be returned to you after you spend it to buy tickets."), Object(gt.jsx)("br", {}), n(472, "Tickets are only valid for one lottery draw, and will be burned after the draw."), Object(gt.jsx)("br", {}), n(474, "Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.")]
                }), Object(gt.jsx)(yn.a, {
                    children: Object(gt.jsx)(Be.k, {
                        width: "100%",
                        onClick: t,
                        children: n(476, "I understand")
                    })
                })]
            })
        }, An = He.e.div(K || (K = Object(Me.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n\n  ", " {\n    justify-content: space-between;\n  }\n"])), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), En = function() {
            var e = Object(ot.a)()
              , t = Object(ln.b)()
              , n = lt()
              , r = Object(dn.a)(Object(_e.d)())
              , c = Rt()
              , a = c.length
              , i = Object(Be.rb)(Object(gt.jsx)(Vt, {
                myTicketNumbers: c,
                from: "buy"
            }))
              , s = Object(Te.a)(i, 1)[0]
              , o = Object(Be.rb)(Object(gt.jsx)(In, {}))
              , u = Object(Te.a)(o, 1)[0]
              , j = Object(Be.rb)(Object(gt.jsx)(wn, {
                max: r,
                tokenName: "CAKE"
            }))
              , b = Object(Te.a)(j, 1)[0]
              , l = pn(u)
              , d = l.handleApprove
              , f = l.requestedApproval;
            return Object(gt.jsx)(An, {
                children: n ? Object(gt.jsxs)(Be.k, {
                    disabled: !0,
                    children: [" ", e(874, "On sale soon")]
                }) : t.toNumber() ? Object(gt.jsxs)(gt.Fragment, {
                    children: [Object(gt.jsx)(Be.k, {
                        style: {
                            marginRight: "8px"
                        },
                        width: "100%",
                        disabled: 0 === a,
                        variant: "secondary",
                        onClick: s,
                        children: e(432, "View your tickets")
                    }), Object(gt.jsx)(Be.k, {
                        id: "lottery-buy-start",
                        width: "100%",
                        onClick: b,
                        children: e(430, "Buy ticket")
                    })]
                }) : Object(gt.jsxs)(gt.Fragment, {
                    children: [Object(gt.jsx)(Be.k, {
                        width: "100%",
                        disabled: !0,
                        children: e(432, "View your tickets")
                    }), Object(gt.jsx)(Be.k, {
                        width: "100%",
                        disabled: f,
                        onClick: d,
                        children: e(494, "Approve CAKE")
                    })]
                })
            })
        }, Ln = Object(He.e)(Be.o)(Q || (Q = Object(Me.a)(["\n  ", "\n"])), (function(e) {
            return e.isSecondCard ? "  \n        margin-top: 16px;\n\n        ".concat(e.theme.mediaQueries.sm, " {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg, " {\n          margin-top: 32px;\n        }\n        ") : ""
        }
        )), Dn = He.e.div(W || (W = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n"]))), Tn = He.e.div(U || (U = Object(Me.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))), Mn = He.e.div(V || (V = Object(Me.a)(["\n  display: flex;\n  flex-direction: column;\n"]))), Fn = function(e) {
            var t = e.isSecondCard
              , n = void 0 !== t && t
              , r = Object(ot.a)()
              , c = lt()
              , a = Rt().length
              , i = dt()
              , s = c && xt(i);
            return Object(gt.jsx)(Ln, {
                isSecondCard: n,
                children: Object(gt.jsxs)(Be.p, {
                    children: [Object(gt.jsxs)(Dn, {
                        children: [Object(gt.jsx)(Tn, {
                            children: Object(gt.jsx)(Be.fb, {})
                        }), c ? Object(gt.jsxs)(Mn, {
                            children: [Object(gt.jsx)(Be.db, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: r(870, "Until ticket sale:")
                            }), Object(gt.jsx)(Be.F, {
                                size: "lg",
                                children: s
                            })]
                        }) : Object(gt.jsxs)(Mn, {
                            children: [Object(gt.jsx)(Be.db, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: r(724, "Your tickets for this round")
                            }), Object(gt.jsx)(Be.F, {
                                size: "lg",
                                children: a
                            })]
                        })]
                    }), Object(gt.jsx)(En, {})]
                })
            })
        }, Nn = n(804), Hn = He.e.div(Y || (Y = Object(Me.a)(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-template-rows: repeat(4, auto);\n"])), (function(e) {
            return e.pastDraw ? 3 : 2
        }
        )), Bn = Object(He.e)(Be.db)(q || (q = Object(Me.a)(["\n  text-align: right;\n"]))), Rn = Object(He.e)(Be.F)(J || (J = Object(Me.a)(["\n  text-align: right;\n"]))), Pn = He.e.div(_ || (_ = Object(Me.a)(["\n  margin-bottom: ", ";\n"])), (function(e) {
            return e.marginBottom ? e.marginBottom : "10px"
        }
        )), Kn = Object(He.e)(Pn)(X || (X = Object(Me.a)(["\n  transform: translate(-40%, 0%);\n"]))), Qn = function(e) {
            var t = e.lotteryPrizeAmount
              , n = void 0 === t ? 0 : t
              , r = e.pastDraw
              , c = void 0 !== r && r
              , a = e.jackpotMatches
              , i = e.twoTicketMatches
              , s = e.threeTicketMatches
              , o = +(n / 100 * 50).toFixed(0)
              , u = +(n / 100 * 20).toFixed(0)
              , j = +(n / 100 * 10).toFixed(0)
              , b = +(n / 100 * 20).toFixed(0)
              , l = Object(ot.a)();
            return Object(gt.jsxs)(Hn, {
                pastDraw: c,
                children: [Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Be.db, {
                        fontSize: "14px",
                        color: "textSubtle",
                        children: l(756, "No. Matched")
                    })
                }), c && Object(gt.jsx)(Kn, {
                    children: Object(gt.jsx)(Bn, {
                        fontSize: "14px",
                        color: "textSubtle",
                        children: l(754, "Winners")
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Bn, {
                        fontSize: "14px",
                        color: "textSubtle",
                        children: l(752, "Prize Pot")
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Be.F, {
                        size: "md",
                        children: "4"
                    })
                }), c && Object(gt.jsx)(Kn, {
                    children: Object(gt.jsx)(Rn, {
                        size: "md",
                        children: a
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Rn, {
                        size: "md",
                        children: o.toLocaleString()
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Be.db, {
                        bold: !0,
                        children: "3"
                    })
                }), c && Object(gt.jsx)(Kn, {
                    children: Object(gt.jsx)(Bn, {
                        bold: !0,
                        children: s
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Bn, {
                        children: u.toLocaleString()
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Be.db, {
                        children: "2"
                    })
                }), c && Object(gt.jsx)(Kn, {
                    children: Object(gt.jsx)(Bn, {
                        children: i
                    })
                }), Object(gt.jsx)(Pn, {
                    children: Object(gt.jsx)(Bn, {
                        children: j.toLocaleString()
                    })
                }), Object(gt.jsx)(Pn, {
                    marginBottom: "0",
                    children: Object(gt.jsxs)(Be.db, {
                        children: [l(999, "".concat(c ? "Burned" : "To burn")), ":"]
                    })
                }), c ? Object(gt.jsxs)(gt.Fragment, {
                    children: [Object(gt.jsx)(Pn, {
                        marginBottom: "0"
                    }), Object(gt.jsx)(Pn, {
                        marginBottom: "0",
                        children: Object(gt.jsx)(Bn, {
                            children: b.toLocaleString()
                        })
                    })]
                }) : Object(gt.jsx)(Pn, {
                    marginBottom: "0",
                    children: Object(gt.jsx)(Bn, {
                        children: b.toLocaleString()
                    })
                })]
            })
        }, Wn = He.e.div(Z || (Z = Object(Me.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"]))), Un = He.e.div(G || (G = Object(Me.a)(["\n  display: flex;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), Vn = He.e.div($ || ($ = Object(Me.a)(["\n  display: flex;\n"]))), Yn = He.e.div(ee || (ee = Object(Me.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))), qn = He.e.div(te || (te = Object(Me.a)(["\n  display: flex;\n  flex-direction: column;\n"]))), Jn = He.e.div(ne || (ne = Object(Me.a)(["\n  height: ", ";\n\n  ", " {\n    height: 100%;\n  }\n"])), (function(e) {
            return e.showFooter ? "100%" : "0px"
        }
        ), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), _n = function() {
            var e = Object(ot.a)()
              , t = Object(Re.c)().account
              , n = Object(Fe.useState)(!1)
              , r = Object(Te.a)(n, 2)
              , c = r[0]
              , a = r[1]
              , i = +Object(Mt.a)(function() {
                var e = Object(Fe.useState)(new Qe.a(0))
                  , t = Object(Te.a)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , c = Object(ut.g)()
                  , a = Object(Ft.a)().fastRefresh;
                return Object(Fe.useEffect)((function() {
                    c && function() {
                        var e = Object(De.a)(Le.a.mark((function e() {
                            var t;
                            return Le.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        nt(c);
                                    case 2:
                                        t = e.sent,
                                        r(new Qe.a(t));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }
                ), [c, a]),
                n
            }()).toFixed(0)
              , s = i.toLocaleString()
              , o = Object(Fe.useContext)(Pe).currentLotteryNumber;
            return Object(gt.jsxs)(Be.o, {
                children: [Object(gt.jsxs)(Be.p, {
                    children: [t && Object(gt.jsxs)(Be.E, {
                        mb: "16px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        style: {
                            height: "20px"
                        },
                        children: [0 === o && Object(gt.jsx)(Be.ab, {
                            height: 20,
                            width: 56
                        }), o > 0 && Object(gt.jsx)(gt.Fragment, {
                            children: Object(gt.jsx)(Be.db, {
                                fontSize: "12px",
                                style: {
                                    fontWeight: 600
                                },
                                children: e(720, "Round #".concat(o), {
                                    num: o
                                })
                            })
                        })]
                    }), Object(gt.jsxs)(Wn, {
                        children: [Object(gt.jsxs)(Vn, {
                            children: [Object(gt.jsx)(Yn, {
                                children: Object(gt.jsx)(Be.V, {})
                            }), Object(gt.jsxs)(qn, {
                                children: [Object(gt.jsx)(Be.db, {
                                    fontSize: "14px",
                                    color: "textSubtle",
                                    children: e(722, "Total Pot:")
                                }), Object(gt.jsxs)(Be.F, {
                                    size: "lg",
                                    children: [s, " CAKE"]
                                })]
                            })]
                        }), Object(gt.jsx)(Un, {
                            children: Object(gt.jsx)(Nn.a, {
                                onClick: function() {
                                    return a(!c)
                                },
                                expanded: c
                            })
                        })]
                    })]
                }), Object(gt.jsx)(Jn, {
                    showFooter: c,
                    children: Object(gt.jsx)(Be.q, {
                        children: Object(gt.jsx)(Qn, {
                            lotteryPrizeAmount: i
                        })
                    })
                })]
            })
        }, Xn = He.e.a(re || (re = Object(Me.a)(["\n  margin-top: 1em;\n  text-decoration: none;\n  color: #25beca;\n"]))), Zn = He.e.div(ce || (ce = Object(Me.a)(["\n  margin-top: 1em;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n"]))), Gn = He.e.div(ae || (ae = Object(Me.a)(["\n  margin-top: -2.3em;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))), $n = He.e.div(ie || (ie = Object(Me.a)(["\n  margin-top: -2.3em;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]))), er = He.e.div(se || (se = Object(Me.a)(["\n  text-align: center;\n"]))), tr = He.e.div(oe || (oe = Object(Me.a)(["\n  text-align: center;\n  margin-left: -1.2em;\n\n  @media (max-width: 600) {\n    margin-left: -0.2em;\n  }\n"]))), nr = He.e.div(ue || (ue = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n"]))), rr = He.e.div(je || (je = Object(Me.a)(["\n  margin-top: 1em;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))), cr = He.e.div(be || (be = Object(Me.a)(["\n  text-align: center;\n  align-items: center;\n"]))), ar = He.e.div(le || (le = Object(Me.a)(["\n  text-align: center;\n  align-items: center;\n  padding-left: 2px;\n  padding-right: 2px;\n"]))), ir = He.e.div(de || (de = Object(Me.a)(["\n  padding: 10px;\n  border-radius: 12px;\n  background: linear-gradient(180deg, #54dade 0%, #24c7d6 76.22%);\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  margin: 10px;\n  margin-bottom: 7px;\n  width: 40px;\n\n  @media (min-width: 768px) {\n    font-size: 40px;\n    margin: 20px;\n    width: 60px;\n  }\n"]))), sr = He.e.div(fe || (fe = Object(Me.a)(["\n  /* padding: 10px; */\n  border-radius: 12px;\n  margin: 16px 20px;\n  width: 60px;\n"]))), or = He.e.div(pe || (pe = Object(Me.a)(["\n  padding-top: 10px;\n  padding-left: 10px;\n  border-radius: 12px;\n  margin: 20px;\n  width: 20px;\n"]))), ur = He.e.div(Oe || (Oe = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))), jr = He.e.div(he || (he = Object(Me.a)([""]))), br = He.e.div(xe || (xe = Object(Me.a)(["\n  color: ", ";\n  font-size: 24px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 1000;\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        )), lr = He.e.div(me || (me = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))), dr = function() {
            var e = Object(Re.c)().account
              , t = Ht()
              , n = lt()
              , r = Bt(4)
              , c = Bt(3)
              , a = Bt(2)
              , i = Object(ot.a)();
            return Object(gt.jsx)(jr, {
                children: Object(gt.jsx)(Be.o, {
                    children: Object(gt.jsx)(Be.p, {
                        children: Object(gt.jsxs)(lr, {
                            children: [Object(gt.jsxs)(ur, {
                                children: [Object(gt.jsx)(br, {
                                    children: e && n ? "\ud83e\udd73".concat(i(570, "Winning Numbers This Round"), "\ud83e\udd73") : i(572, "Latest Winning Numbers")
                                }), Object(gt.jsx)("br", {})]
                            }), Object(gt.jsx)(Zn, {
                                children: t.map((function(e, t) {
                                    return Object(gt.jsx)(ir, {
                                        children: Object(gt.jsx)(cr, {
                                            children: e
                                        })
                                    }, t)
                                }
                                ))
                            }), Object(gt.jsxs)(Gn, {
                                children: [Object(gt.jsx)(sr, {
                                    children: Object(gt.jsx)(tr, {
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 1@2x.png",
                                            alt: "Number 1",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                }), Object(gt.jsx)(sr, {
                                    children: Object(gt.jsx)(er, {
                                        style: {
                                            marginLeft: "-1.2em"
                                        },
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 2@2x.png",
                                            alt: "Number 2",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                }), Object(gt.jsx)(sr, {
                                    children: Object(gt.jsx)(er, {
                                        style: {
                                            marginLeft: "-1.2em"
                                        },
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 3@2x.png",
                                            alt: "Number 3",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                }), Object(gt.jsx)(sr, {
                                    children: Object(gt.jsx)(er, {
                                        style: {
                                            marginLeft: "-1.2em"
                                        },
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 4@2x.png",
                                            alt: "Number 4",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                })]
                            }), Object(gt.jsxs)($n, {
                                children: [Object(gt.jsx)(or, {
                                    children: Object(gt.jsx)(tr, {
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 1@2x.png",
                                            alt: "Number 1",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                }), Object(gt.jsx)(or, {
                                    children: Object(gt.jsx)(er, {
                                        style: {
                                            marginLeft: "-1.2em"
                                        },
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 2@2x.png",
                                            alt: "Number 2",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                }), Object(gt.jsx)(or, {
                                    children: Object(gt.jsx)(er, {
                                        style: {
                                            marginLeft: "-1.2em"
                                        },
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 3@2x.png",
                                            alt: "Number 3",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                }), Object(gt.jsx)(or, {
                                    children: Object(gt.jsx)(er, {
                                        style: {
                                            marginLeft: "-1.2em"
                                        },
                                        children: Object(gt.jsx)(Be.I, {
                                            src: "/images/sign bunny 4@2x.png",
                                            alt: "Number 4",
                                            width: 200,
                                            height: 150,
                                            responsive: !0
                                        })
                                    })
                                })]
                            }), Object(gt.jsxs)(rr, {
                                children: [Object(gt.jsxs)(nr, {
                                    children: [Object(gt.jsx)(ar, {
                                        children: i(442, "Tickets matching 4 numbers:")
                                    }), Object(gt.jsx)(ar, {
                                        children: Object(gt.jsx)("strong", {
                                            children: r
                                        })
                                    })]
                                }), Object(gt.jsxs)(nr, {
                                    children: [Object(gt.jsx)(ar, {
                                        children: i(444, "Tickets matching 3 numbers:")
                                    }), Object(gt.jsx)(ar, {
                                        children: Object(gt.jsx)("strong", {
                                            children: c
                                        })
                                    })]
                                }), Object(gt.jsxs)(nr, {
                                    children: [Object(gt.jsx)(ar, {
                                        children: i(446, "Tickets matching 2 numbers:")
                                    }), Object(gt.jsx)(ar, {
                                        children: Object(gt.jsx)("strong", {
                                            children: a
                                        })
                                    })]
                                })]
                            }), Object(gt.jsx)(Xn, {
                                href: "https://api.pancakeswap.com/api/lottery?page=0&pageSize=25",
                                target: "_blank",
                                children: i(448, "Export recent winning numbers")
                            })]
                        })
                    })
                })
            })
        }, fr = He.e.div(ge || (ge = Object(Me.a)(["\n  max-width: 500px;\n  margin: 0 auto 40px;\n  display: flex;\n  flex-direction: column;\n"]))), pr = Object(He.e)(Be.F)(ve || (ve = Object(Me.a)(["\n  margin: 16px 0;\n"]))), Or = Object(He.e)(Be.I)(ye || (ye = Object(Me.a)(["\n  align-self: center;\n"]))), hr = Object(He.e)(Be.K)(we || (we = Object(Me.a)(["\n  align-self: center;\n  margin-top: 16px;\n"]))), xr = function() {
            var e = Object(ot.a)();
            return Object(gt.jsxs)(fr, {
                children: [Object(gt.jsx)(Or, {
                    src: "/images/pancake-lottery-bunny.png",
                    alt: "lottery bunny",
                    width: 163,
                    height: 140
                }), Object(gt.jsx)(pr, {
                    size: "lg",
                    as: "h3",
                    color: "secondary",
                    children: e(632, "How it works")
                }), Object(gt.jsx)(Be.db, {
                    fontSize: "16px",
                    children: e(999, "Spend CAKE to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!")
                }), Object(gt.jsx)(hr, {
                    href: "https://docs.pancakeswap.finance/lottery-1",
                    children: "Read more"
                })]
            })
        }, mr = Object(He.e)(Be.e)(ke || (ke = Object(Me.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), gr = He.e.div(Se || (Se = Object(Me.a)(["\n  display: flex;\n  flex-direction: ", ";\n"])), (function(e) {
            return e.isAWin ? "column" : "column-reverse"
        }
        )), vr = function() {
            var e = Object(Re.c)().account
              , t = Nt().claimAmount
              , n = Object(Mt.a)(t) > 0;
            return Object(gt.jsxs)(gt.Fragment, {
                children: [Object(gt.jsxs)(mr, {
                    children: [Object(gt.jsx)("div", {
                        children: Object(gt.jsx)(_n, {})
                    }), Object(gt.jsx)(gr, {
                        isAWin: n,
                        children: e ? Object(gt.jsxs)(gt.Fragment, {
                            children: [Object(gt.jsx)(an, {}), Object(gt.jsx)(Fn, {
                                isSecondCard: n
                            })]
                        }) : Object(gt.jsx)(bn, {})
                    })]
                }), Object(gt.jsx)(xr, {}), Object(gt.jsx)(dr, {})]
            })
        }, yr = n(16), wr = function() {
            var e = Object(De.a)(Le.a.mark((function e(t) {
                var n, r;
                return Le.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            fetch("https://api.pancakeswap.com/api/singleLottery?lotteryNumber=".concat(t));
                        case 3:
                            return n = e.sent,
                            e.next = 6,
                            n.json();
                        case 6:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 10:
                            throw e.prev = 10,
                            e.t0 = e.catch(0),
                            new Error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 10]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), kr = He.e.div(Ce || (Ce = Object(Me.a)(["\n  margin-bottom: 24px;\n"]))), Sr = He.e.div(ze || (ze = Object(Me.a)(["\n  position: relative;\n"]))), Cr = He.e.div(Ie || (Ie = Object(Me.a)(["\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: auto;\n"]))), zr = function(e) {
            var t = e.initialLotteryNumber
              , n = e.onSubmit
              , r = Object(Fe.useState)(t)
              , c = Object(Te.a)(r, 2)
              , a = c[0]
              , i = c[1]
              , s = Object(Fe.useState)(!1)
              , o = Object(Te.a)(s, 2)
              , u = o[0]
              , j = o[1]
              , b = Object(ot.a)();
            return Object(gt.jsxs)(kr, {
                children: [Object(gt.jsx)(Be.db, {
                    children: b(742, "Select lottery number:")
                }), Object(gt.jsx)("form", {
                    onSubmit: function(e) {
                        e.preventDefault(),
                        n(a)
                    },
                    children: Object(gt.jsxs)(Sr, {
                        children: [Object(gt.jsx)(Be.J, {
                            value: a,
                            type: "number",
                            isWarning: u,
                            max: t,
                            onChange: function(e) {
                                var n = parseInt(e.currentTarget.value, 10);
                                j(n > t),
                                i(n)
                            }
                        }), Object(gt.jsx)(Cr, {
                            children: Object(gt.jsx)(Be.k, {
                                type: "submit",
                                scale: "sm",
                                disabled: u,
                                children: b(744, "Search")
                            })
                        })]
                    })
                })]
            })
        }, Ir = function(e) {
            var t = e.error;
            return Object(gt.jsx)(Be.db, {
                p: "24px",
                children: t.message
            })
        }, Ar = n(766), Er = He.e.div(Ae || (Ae = Object(Me.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))), Lr = function(e) {
            var t = e.valueToDisplay
              , n = e.children
              , r = e.Icon
              , c = Object(Ar.a)(e, ["valueToDisplay", "children", "Icon"]);
            return Object(gt.jsxs)(Be.E, Object(yr.a)(Object(yr.a)({}, c), {}, {
                children: [r && Object(gt.jsx)(Er, {
                    children: Object(gt.jsx)(r, {})
                }), Object(gt.jsxs)(Be.E, {
                    flexDirection: "column",
                    children: [Object(gt.jsx)(Be.db, {
                        fontSize: "14px",
                        color: "textSubtle",
                        children: n
                    }), Object(gt.jsx)(Be.F, {
                        size: "lg",
                        children: t
                    })]
                })]
            }))
        };
        Lr.defaultProps = {
            valueToDisplay: "",
            Icon: function() {
                return Object(gt.jsx)("div", {})
            },
            children: ""
        };
        var Dr, Tr, Mr, Fr, Nr, Hr, Br, Rr, Pr, Kr, Qr, Wr, Ur, Vr, Yr, qr = Lr, Jr = He.e.div(Dr || (Dr = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n\n  & > div {\n    flex: 1;\n    width: 100%;\n  }\n"]))), _r = Object(He.e)(Be.L)(Tr || (Tr = Object(Me.a)(["\n  align-items: center;\n  display: flex;\n  height: 48px;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n"]))), Xr = function(e) {
            var t = e.contractLink
              , n = e.lotteryNumber
              , r = Object(ot.a)()
              , c = Rt(n)
              , a = c.length
              , i = Object(Be.rb)(Object(gt.jsx)(Vt, {
                myTicketNumbers: c,
                from: "buy"
            }))
              , s = Object(Te.a)(i, 1)[0];
            return Object(Re.c)().account ? Object(gt.jsxs)(Jr, {
                children: [Object(gt.jsx)("div", {
                    children: Object(gt.jsx)(Be.k, {
                        disabled: 0 === a,
                        onClick: s,
                        width: "100%",
                        children: r(432, "View your tickets")
                    })
                }), Object(gt.jsx)("div", {
                    children: Object(gt.jsx)(_r, {
                        href: t,
                        children: r(356, "View on BscScan")
                    })
                })]
            }) : Object(gt.jsx)(Jr, {
                children: Object(gt.jsx)(sn.a, {})
            })
        }, Zr = function(e) {
            if (!e)
                return {};
            var t = new Date(e)
              , n = t.toDateString();
            return {
                hours: t.getUTCHours(),
                monthAndDay: n.split(" ").splice(1, 2).join(" ")
            }
        }, Gr = He.e.div(Mr || (Mr = Object(Me.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))), $r = function(e) {
            var t = e.timeValue
              , n = Zr(t)
              , r = n.monthAndDay
              , c = n.hours;
            return Object(gt.jsx)(Gr, {
                children: Object(gt.jsxs)(Be.db, {
                    fontSize: "14px",
                    children: [r, ", ", c, ":00 UTC"]
                })
            })
        }, ec = He.e.div(Fr || (Fr = Object(Me.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))), tc = Object(He.e)(qr)(Nr || (Nr = Object(Me.a)(["\n  margin-bottom: ", "px;\n"])), (function(e) {
            return e.theme.spacing[4]
        }
        )), nc = function(e) {
            var t = e.data
              , n = Object(ot.a)()
              , r = t.contractLink
              , c = t.jackpotTicket
              , a = t.lotteryDate
              , i = t.lotteryNumber
              , s = t.lotteryNumbers
              , o = t.match1Ticket
              , u = t.match2Ticket
              , j = t.match3Ticket
              , b = t.poolSize;
            return !t.error && t && Object(gt.jsxs)(gt.Fragment, {
                children: [Object(gt.jsx)(Be.p, {
                    children: Object(gt.jsxs)(ec, {
                        children: [Object(gt.jsx)($r, {
                            timeValue: a
                        }), Object(gt.jsxs)(Be.F, {
                            size: "md",
                            mb: "24px",
                            children: ["Round #", i]
                        }), Object(gt.jsx)(tc, {
                            valueToDisplay: "".concat(s[0], ", ").concat(s[1], ", ").concat(s[2], ", ").concat(s[3]),
                            Icon: Be.fb,
                            children: n(999, "Winning numbers")
                        }), Object(gt.jsx)(qr, {
                            valueToDisplay: n(999, "".concat(b.toLocaleString(), " CAKE")),
                            Icon: Be.V,
                            children: n(999, "Total prizes")
                        })]
                    })
                }), Object(gt.jsxs)(Be.q, {
                    children: [Object(gt.jsx)(Qn, {
                        lotteryPrizeAmount: b,
                        jackpotMatches: c,
                        oneTicketMatches: o,
                        twoTicketMatches: u,
                        threeTicketMatches: j,
                        pastDraw: !0
                    }), Object(gt.jsx)(Xr, {
                        contractLink: r,
                        lotteryNumber: i
                    })]
                })]
            })
        }, rc = function(e) {
            var t = e.error
              , n = e.data;
            return Object(gt.jsx)(Be.o, {
                children: t.message ? Object(gt.jsx)(Ir, {
                    error: t
                }) : Object(gt.jsx)(nc, {
                    data: n
                })
            })
        }, cc = function() {
            var e = Object(Fe.useState)(!0)
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , c = Object(Fe.useState)(null)
              , a = Object(Te.a)(c, 2)
              , i = a[0]
              , s = a[1]
              , o = Object(Fe.useState)(null)
              , u = Object(Te.a)(o, 2)
              , j = u[0]
              , b = u[1]
              , l = Object(Fe.useContext)(Pe).mostRecentLotteryNumber;
            return Object(Fe.useEffect)((function() {
                l > 0 && function() {
                    var e = Object(De.a)(Le.a.mark((function e() {
                        var t;
                        return Le.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    r(!0),
                                    e.next = 4,
                                    wr(l);
                                case 4:
                                    t = e.sent,
                                    s(t),
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(0),
                                    b(e.t0);
                                case 11:
                                    return e.prev = 11,
                                    r(!1),
                                    e.finish(11);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8, 11, 14]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [l, s, r, b]),
            {
                isLoading: n,
                data: i,
                mostRecentLotteryNumber: l,
                error: j
            }
        }, ac = He.e.div(Hr || (Hr = Object(Me.a)(["\n  display: flex;\n  flex-direction: column;\n"]))), ic = Object(He.e)(Be.p)(Br || (Br = Object(Me.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 552px; // height of final card\n"]))), sc = function() {
            var e = Object(Fe.useState)({
                roundData: null,
                error: {
                    message: null,
                    type: null
                },
                isInitialized: !1,
                isLoading: !0
            })
              , t = Object(Te.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , c = cc()
              , a = c.data
              , i = c.mostRecentLotteryNumber
              , s = Object(ot.a)()
              , o = n.roundData
              , u = n.error
              , j = n.isInitialized
              , b = n.isLoading;
            Object(Fe.useEffect)((function() {
                a && r((function(e) {
                    return Object(yr.a)(Object(yr.a)({}, e), {}, {
                        isLoading: !1,
                        isInitialized: !0,
                        roundData: a
                    })
                }
                ))
            }
            ), [a, r]);
            var l = function() {
                var e = Object(De.a)(Le.a.mark((function e(t) {
                    return Le.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                r((function(e) {
                                    return Object(yr.a)(Object(yr.a)({}, e), {}, {
                                        isLoading: !0
                                    })
                                }
                                )),
                                wr(t).then((function(e) {
                                    e.error ? r((function(e) {
                                        return Object(yr.a)(Object(yr.a)({}, e), {}, {
                                            error: {
                                                message: s(1076, "The lottery number you provided does not exist"),
                                                type: "out of range"
                                            },
                                            isLoading: !1,
                                            isInitialized: !0
                                        })
                                    }
                                    )) : r((function(t) {
                                        return Object(yr.a)(Object(yr.a)({}, t), {}, {
                                            error: {
                                                message: null,
                                                type: null
                                            },
                                            roundData: e,
                                            isLoading: !1,
                                            isInitialized: !0
                                        })
                                    }
                                    ))
                                }
                                )).catch((function() {
                                    r((function(e) {
                                        return Object(yr.a)(Object(yr.a)({}, e), {}, {
                                            error: {
                                                message: s(1078, "Error fetching data"),
                                                type: "api"
                                            },
                                            isLoading: !1,
                                            isInitialized: !0
                                        })
                                    }
                                    ))
                                }
                                ));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return Object(gt.jsxs)(ac, {
                children: [Object(gt.jsx)(zr, {
                    initialLotteryNumber: i,
                    onSubmit: l
                }), !j || b ? Object(gt.jsx)(Be.o, {
                    children: Object(gt.jsx)(ic, {
                        children: Object(gt.jsx)(Kt, {})
                    })
                }) : Object(gt.jsx)(rc, {
                    error: u,
                    data: o
                })]
            })
        }, oc = Object(Fe.lazy)((function() {
            return Promise.all([n.e(1), n.e(16), n.e(18)]).then(n.bind(null, 1097))
        }
        )), uc = He.e.div(Rr || (Rr = Object(Me.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))), jc = function() {
            var e = Object(Fe.useContext)(Pe)
              , t = e.historyData
              , n = e.historyError
              , r = function(e) {
                return t.map((function(t) {
                    return t[e]
                }
                )).reverse()
            }
              , c = function(e) {
                return {
                    borderColor: e.color,
                    fill: !1,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 10
                }
            }
              , a = {
                labels: r("lotteryNumber"),
                datasets: [Object(yr.a)({
                    label: "Pool Size",
                    data: r("poolSize"),
                    yAxisID: "y-axis-pool"
                }, c({
                    color: "#8F80BA"
                })), Object(yr.a)({
                    label: "Burned",
                    data: r("burned"),
                    yAxisID: "y-axis-burned"
                }, c({
                    color: "#1FC7D4"
                }))]
            }
              , i = function(e) {
                return {
                    borderCapStyle: "round",
                    gridLines: {
                        display: !1
                    },
                    ticks: {
                        fontFamily: "Kanit, sans-serif",
                        fontColor: e.color,
                        fontSize: 14,
                        lineHeight: e.lineHeight,
                        maxRotation: 0,
                        beginAtZero: !0,
                        autoSkipPadding: 15,
                        userCallback: function(e) {
                            return e.toLocaleString()
                        }
                    }
                }
            }
              , s = {
                legend: {
                    display: !1
                },
                scales: {
                    yAxes: [Object(yr.a)({
                        type: "linear",
                        display: !0,
                        position: "left",
                        id: "y-axis-pool"
                    }, i({
                        color: "#8f80ba",
                        lineHeight: 1.6
                    })), Object(yr.a)({
                        type: "linear",
                        display: !0,
                        position: "right",
                        id: "y-axis-burned"
                    }, i({
                        color: "#1FC7D4",
                        lineHeight: 1.5
                    }))],
                    xAxes: [Object(yr.a)({}, i({
                        color: "#452A7A",
                        lineHeight: 1
                    }))]
                }
            };
            return Object(gt.jsxs)(gt.Fragment, {
                children: [n && Object(gt.jsx)(uc, {
                    children: Object(gt.jsx)(Be.db, {
                        children: "Error fetching data"
                    })
                }), !n && t.length > 1 ? Object(gt.jsx)(Fe.Suspense, {
                    fallback: Object(gt.jsx)("div", {
                        children: "Loading..."
                    }),
                    children: Object(gt.jsx)(oc, {
                        data: a,
                        options: s,
                        type: "line"
                    })
                }) : Object(gt.jsx)(uc, {
                    children: Object(gt.jsx)(Kt, {})
                })]
            })
        }, bc = He.e.div(Pr || (Pr = Object(Me.a)(["\n  display: flex;\n  margin: 36px 0 28px;\n"]))), lc = He.e.div(Kr || (Kr = Object(Me.a)(["\n  display: flex;\n  margin-right: 18px;\n  align-items: center;\n"]))), dc = He.e.div(Qr || (Qr = Object(Me.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: ", ";\n  margin-right: 6px;\n"])), (function(e) {
            var t = e.isPoolSize;
            return e.theme.colors[t ? "textSubtle" : "primary"]
        }
        )), fc = function() {
            var e = Object(ot.a)();
            return Object(gt.jsxs)(bc, {
                children: [Object(gt.jsxs)(lc, {
                    children: [Object(gt.jsx)(dc, {
                        isPoolSize: !0
                    }), Object(gt.jsx)(Be.db, {
                        children: e(748, "Pool Size")
                    })]
                }), Object(gt.jsxs)(lc, {
                    children: [Object(gt.jsx)(dc, {}), Object(gt.jsx)(Be.db, {
                        children: e(750, "Burned")
                    })]
                })]
            })
        }, pc = function() {
            var e = Object(ot.a)();
            return Object(gt.jsx)(Be.o, {
                children: Object(gt.jsxs)(Be.p, {
                    children: [Object(gt.jsx)(Be.F, {
                        size: "md",
                        children: e(746, "History")
                    }), Object(gt.jsx)(fc, {}), Object(gt.jsx)(jc, {})]
                })
            })
        }, Oc = Object(He.e)(Be.e)(Wr || (Wr = Object(Me.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), hc = He.e.div(Ur || (Ur = Object(Me.a)(["\n  display: flex;\n  flex-direction: column;\n"]))), xc = He.e.div(Vr || (Vr = Object(Me.a)(["\n  display: flex;\n  margin-top: 32px;\n  justify-content: center;\n"]))), mc = function() {
            return Object(gt.jsxs)(Oc, {
                children: [Object(gt.jsx)(sc, {}), Object(gt.jsxs)(hc, {
                    children: [Object(gt.jsx)(pc, {}), Object(gt.jsx)(xc, {
                        children: Object(gt.jsx)("img", {
                            src: "/images/pancake-lottery-bunny.png",
                            alt: "lottery bunny"
                        })
                    })]
                })]
            })
        }, gc = He.e.div(Yr || (Yr = Object(Me.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 32px;\n"]))), vc = function() {
            var e = Object(ut.g)()
              , t = Object(Re.c)().account
              , n = Object(ot.a)()
              , r = Object(Fe.useState)(0)
              , c = Object(Te.a)(r, 2)
              , a = c[0]
              , i = c[1]
              , s = Object(Fe.useState)([])
              , o = Object(Te.a)(s, 2)
              , u = o[0]
              , j = o[1]
              , b = Object(Fe.useState)(!1)
              , l = Object(Te.a)(b, 2)
              , d = l[0]
              , f = l[1]
              , p = Object(Fe.useState)(0)
              , O = Object(Te.a)(p, 2)
              , h = O[0]
              , x = O[1]
              , m = Object(Fe.useState)(1)
              , g = Object(Te.a)(m, 2)
              , v = g[0]
              , y = g[1];
            Object(Fe.useEffect)((function() {
                fetch("https://api.pancakeswap.com/api/lotteryHistory").then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    return j(e)
                }
                )).catch((function() {
                    f(!0)
                }
                ))
            }
            ), []),
            Object(Fe.useEffect)((function() {
                t && e && function() {
                    var t = Object(De.a)(Le.a.mark((function t() {
                        var n, r;
                        return Le.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    ct(e);
                                case 2:
                                    n = t.sent,
                                    r = n - 1,
                                    x(n),
                                    y(r);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [t, e]);
            return Object(gt.jsxs)(gt.Fragment, {
                children: [Object(gt.jsx)(Dt, {}), Object(gt.jsxs)(jt.a, {
                    children: [Object(gt.jsx)(gc, {
                        children: Object(gt.jsxs)(Be.l, {
                            activeIndex: a,
                            onItemClick: function(e) {
                                i(e)
                            },
                            scale: "sm",
                            variant: "subtle",
                            children: [Object(gt.jsx)(Be.m, {
                                children: n(716, "Next draw")
                            }), Object(gt.jsx)(Be.m, {
                                children: n(718, "Past draws")
                            })]
                        })
                    }), Object(gt.jsx)(Tt, {}), Object(gt.jsx)(Pe.Provider, {
                        value: {
                            historyError: d,
                            historyData: u,
                            mostRecentLotteryNumber: v,
                            currentLotteryNumber: h
                        },
                        children: 0 === a ? Object(gt.jsx)(vr, {}) : Object(gt.jsx)(mc, {})
                    })]
                })]
            })
        }
    },
    759: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return i
        }
        )),
        n.d(t, "e", (function() {
            return s
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return u
        }
        )),
        n.d(t, "j", (function() {
            return j
        }
        )),
        n.d(t, "l", (function() {
            return b
        }
        )),
        n.d(t, "g", (function() {
            return l
        }
        )),
        n.d(t, "h", (function() {
            return d
        }
        )),
        n.d(t, "i", (function() {
            return f
        }
        )),
        n.d(t, "m", (function() {
            return p
        }
        )),
        n.d(t, "k", (function() {
            return O
        }
        )),
        n.d(t, "b", (function() {
            return h
        }
        )),
        n.d(t, "d", (function() {
            return x
        }
        ));
        var r = n(0)
          , c = n(761)
          , a = n(71)
          , i = function(e) {
            var t = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.f)(e, t)
            }
            ), [e, t])
        }
          , s = function(e) {
            var t = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.a)(e, t)
            }
            ), [e, t])
        }
          , o = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.d)(e)
            }
            ), [e])
        }
          , u = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.b)(e)
            }
            ), [e])
        }
          , j = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.j)(e)
            }
            ), [e])
        }
          , b = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.l)(e)
            }
            ), [e])
        }
          , l = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.g)(e)
            }
            ), [e])
        }
          , d = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.h)(e)
            }
            ), [e])
        }
          , f = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.i)(e)
            }
            ), [e])
        }
          , p = function(e) {
            var t = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.m)(e, t)
            }
            ), [e, t])
        }
          , O = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.k)(e)
            }
            ), [e])
        }
          , h = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.c)(e)
            }
            ), [e])
        }
          , x = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(a.e)(e)
            }
            ), [e])
        }
    },
    760: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var r = n(10)
          , c = n.n(r)
          , a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
              , n = new c.a(e).dividedBy(new c.a(10).pow(t));
            return n.toNumber()
        }
          , i = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return e.dividedBy(new c.a(10).pow(t)).toFixed()
        }
    },
    761: function(e, t, n) {
        "use strict";
        var r = n(33)
          , c = n(0)
          , a = n(154)
          , i = n.n(a)
          , s = n(46)
          , o = n(64);
        t.a = function() {
            var e = Object(s.c)().library
              , t = Object(c.useRef)(e)
              , n = Object(c.useState)(e ? new i.a(e) : Object(o.b)())
              , a = Object(r.a)(n, 2)
              , u = a[0]
              , j = a[1];
            return Object(c.useEffect)((function() {
                e !== t.current && (j(e ? new i.a(e) : Object(o.b)()),
                t.current = e)
            }
            ), [e]),
            u
        }
    },
    763: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return c
        }
        )),
        n.d(t, "e", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return s
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "f", (function() {
            return u
        }
        )),
        n.d(t, "g", (function() {
            return j
        }
        ));
        var r = n(771);
        r.a.config({
            EXPONENTIAL_AT: 1e3,
            DECIMAL_PLACES: 80
        });
        new r.a(20);
        var c = new r.a(10512e3)
          , a = 3
          , i = "https://fishswap.app"
          , s = "https://dex.fishswap.app"
          , o = "".concat(s, "/#/add")
          , u = ("".concat(s, "/#/pool"),
        50)
          , j = 1
    },
    764: function(e, t, n) {
        "use strict";
        var r = n(16)
          , c = (n(0),
        n(19))
          , a = n(127)
          , i = n(201)
          , s = n(8);
        t.a = function(e) {
            var t = Object(i.a)()
              , n = Object(a.a)()
              , o = n.login
              , u = n.logout
              , j = Object(c.tb)(o, u).onPresentConnectModal;
            return Object(s.jsx)(c.k, Object(r.a)(Object(r.a)({
                onClick: j
            }, e), {}, {
                children: t(292, "Unlock Wallet")
            }))
        }
    },
    765: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        )),
        n.d(t, "i", (function() {
            return j
        }
        )),
        n.d(t, "d", (function() {
            return b
        }
        )),
        n.d(t, "e", (function() {
            return l
        }
        )),
        n.d(t, "j", (function() {
            return d
        }
        )),
        n.d(t, "f", (function() {
            return f
        }
        )),
        n.d(t, "c", (function() {
            return p
        }
        )),
        n.d(t, "b", (function() {
            return O
        }
        )),
        n.d(t, "g", (function() {
            return h
        }
        )),
        n.d(t, "h", (function() {
            return x
        }
        ));
        var r = n(2)
          , c = n.n(r)
          , a = n(12)
          , i = n(10)
          , s = n.n(i)
          , o = n(775)
          , u = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.approve(n.options.address, o.a.constants.MaxUint256).send({
                                from: r
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , j = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r, a) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit(n, new s.a(r).times(new s.a(10).pow(18)).toString()).send({
                                from: a
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, c) {
                return e.apply(this, arguments)
            }
        }()
          , b = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit(new s.a(n).times(new s.a(10).pow(18)).toString()).send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , l = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit().send({
                                from: r,
                                value: new s.a(n).times(new s.a(10).pow(18)).toString()
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , d = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r, a) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.withdraw(n, new s.a(r).times(new s.a(10).pow(18)).toString()).send({
                                from: a
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, c) {
                return e.apply(this, arguments)
            }
        }()
          , f = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC" !== t.options.address) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 2:
                            if ("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" !== t.options.address) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 4:
                            return e.abrupt("return", t.methods.withdraw(new s.a(n).times(new s.a(10).pow(18)).toString()).send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , p = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , O = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n, r) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit(n, "0").send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , h = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit("0").send({
                                from: n
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , x = function() {
            var e = Object(a.a)(c.a.mark((function e(t, n) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit().send({
                                from: n,
                                value: new s.a(0)
                            }).on("transactionHash", (function(e) {
                                return e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
    },
    766: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (null == e)
                return {};
            var n, r, c = function(e, t) {
                if (null == e)
                    return {};
                var n, r, c = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (c[n] = e[n]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n])
            }
            return c
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    },
    769: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r, c, a, i = n(54), s = n(0), o = n.n(s), u = n(3), j = n(8), b = u.e.div(r || (r = Object(i.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        )), l = function(e) {
            var t, n = e.size, r = void 0 === n ? "md" : n, c = Object(s.useContext)(u.a).spacing;
            switch (r) {
            case "lg":
                t = c[6];
                break;
            case "sm":
                t = c[2];
                break;
            case "md":
            default:
                t = c[4]
            }
            return Object(j.jsx)(b, {
                size: t
            })
        }, d = u.e.div(c || (c = Object(i.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px 0;\n"])), (function(e) {
            return e.theme.colors.primaryDark
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        )), f = u.e.div(a || (a = Object(i.a)(["\n  flex: 1;\n"]))), p = function(e) {
            var t = e.children
              , n = o.a.Children.toArray(t).length;
            return Object(j.jsx)(d, {
                children: o.a.Children.map(t, (function(e, t) {
                    return Object(j.jsxs)(j.Fragment, {
                        children: [Object(j.jsx)(f, {
                            children: e
                        }), t < n - 1 && Object(j.jsx)(l, {})]
                    })
                }
                ))
            })
        }
    },
    770: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return f
        }
        )),
        n.d(t, "b", (function() {
            return p
        }
        ));
        var r = n(2)
          , c = n.n(r)
          , a = n(12)
          , i = n(33)
          , s = n(0)
          , o = n(10)
          , u = n.n(o)
          , j = n(46)
          , b = n(71)
          , l = n(761)
          , d = n(125)
          , f = function() {
            var e = Object(d.a)().slowRefresh
              , t = Object(s.useState)()
              , n = Object(i.a)(t, 2)
              , r = n[0]
              , o = n[1];
            return Object(s.useEffect)((function() {
                function e() {
                    return (e = Object(a.a)(c.a.mark((function e() {
                        var t, n;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(b.d)(),
                                    e.next = 3,
                                    t.methods.totalSupply().call();
                                case 3:
                                    n = e.sent,
                                    o(new u.a(n));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }
            ), [e]),
            r
        }
          , p = function(e) {
            var t = Object(s.useState)(new u.a(0))
              , n = Object(i.a)(t, 2)
              , r = n[0]
              , o = n[1]
              , j = Object(d.a)().slowRefresh
              , f = Object(l.a)();
            return Object(s.useEffect)((function() {
                (function() {
                    var t = Object(a.a)(c.a.mark((function t() {
                        var n, r;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(b.a)(e, f),
                                    t.next = 3,
                                    n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                case 3:
                                    r = t.sent,
                                    o(new u.a(r));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                )()()
            }
            ), [f, e, j]),
            r
        };
        t.a = function(e) {
            var t = Object(s.useState)(new u.a(0))
              , n = Object(i.a)(t, 2)
              , r = n[0]
              , o = n[1]
              , f = Object(j.c)().account
              , p = Object(l.a)()
              , O = Object(d.a)().fastRefresh;
            return Object(s.useEffect)((function() {
                f && function() {
                    var t = Object(a.a)(c.a.mark((function t() {
                        var n, r;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(b.a)(e, p),
                                    t.next = 3,
                                    n.methods.balanceOf(f).call();
                                case 3:
                                    r = t.sent,
                                    o(new u.a(r));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [f, e, p, O]),
            r
        }
    },
    781: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        )),
        n.d(t, "c", (function() {
            return d
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        ));
        var r = n(2)
          , c = n.n(r)
          , a = n(12)
          , i = n(0)
          , s = n(46)
          , o = (n(775),
        n(32))
          , u = n(84)
          , j = n(765)
          , b = n(759)
          , l = function(e) {
            var t = Object(o.b)()
              , n = Object(s.c)().account
              , r = Object(b.i)();
            return {
                onApprove: Object(i.useCallback)(Object(a.a)(c.a.mark((function a() {
                    var i;
                    return c.a.wrap((function(c) {
                        for (; ; )
                            switch (c.prev = c.next) {
                            case 0:
                                return c.prev = 0,
                                c.next = 3,
                                Object(j.a)(e, r, n);
                            case 3:
                                return i = c.sent,
                                t(Object(u.b)(n)),
                                c.abrupt("return", i);
                            case 8:
                                return c.prev = 8,
                                c.t0 = c.catch(0),
                                c.abrupt("return", !1);
                            case 11:
                            case "end":
                                return c.stop()
                            }
                    }
                    ), a, null, [[0, 8]])
                }
                ))), [n, t, e, r])
            }
        }
          , d = function(e, t) {
            var n = Object(o.b)()
              , r = Object(s.c)().account
              , l = Object(b.m)(t);
            return {
                onApprove: Object(i.useCallback)(Object(a.a)(c.a.mark((function a() {
                    var i;
                    return c.a.wrap((function(c) {
                        for (; ; )
                            switch (c.prev = c.next) {
                            case 0:
                                return c.prev = 0,
                                c.next = 3,
                                Object(j.a)(e, l, r);
                            case 3:
                                return i = c.sent,
                                n(Object(u.h)(t, r)),
                                c.abrupt("return", i);
                            case 8:
                                return c.prev = 8,
                                c.t0 = c.catch(0),
                                c.abrupt("return", !1);
                            case 11:
                            case "end":
                                return c.stop()
                            }
                    }
                    ), a, null, [[0, 8]])
                }
                ))), [r, n, e, l, t])
            }
        }
          , f = function() {
            var e = Object(s.c)().account
              , t = Object(b.c)()
              , n = Object(b.g)();
            return {
                onApprove: Object(i.useCallback)(Object(a.a)(c.a.mark((function r() {
                    var a;
                    return c.a.wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                return r.prev = 0,
                                r.next = 3,
                                Object(j.a)(t, n, e);
                            case 3:
                                return a = r.sent,
                                r.abrupt("return", a);
                            case 7:
                                return r.prev = 7,
                                r.t0 = r.catch(0),
                                r.abrupt("return", !1);
                            case 10:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r, null, [[0, 7]])
                }
                ))), [e, t, n])
            }
        }
    },
    804: function(e, t, n) {
        "use strict";
        var r, c = n(54), a = (n(0),
        n(3)), i = n(19), s = n(8), o = a.e.div(r || (r = Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), u = function(e) {
            var t = e.onClick
              , n = e.expanded;
            return Object(s.jsxs)(o, {
                "aria-label": "Hide or show expandable content",
                role: "button",
                onClick: function() {
                    return t()
                },
                children: [Object(s.jsx)(i.db, {
                    color: "primary",
                    bold: !0,
                    children: n ? "Hide" : "Details"
                }), n ? Object(s.jsx)(i.A, {}) : Object(s.jsx)(i.x, {})]
            })
        };
        u.defaultProps = {
            expanded: !1
        },
        t.a = u
    },
    816: function(e, t, n) {
        "use strict";
        var r = 3600
          , c = 86400
          , a = 2629800
          , i = 31557600;
        t.a = function(e) {
            var t = e
              , n = {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            return t >= i && (n.years = Math.floor(t / i),
            t -= n.years * i),
            t >= a && (n.months = Math.floor(t / a),
            t -= n.months * a),
            t >= c && (n.days = Math.floor(t / c),
            t -= n.days * c),
            t >= r && (n.hours = Math.floor(t / r),
            t -= n.hours * r),
            t >= 60 && (n.minutes = Math.floor(t / 60),
            t -= 60 * n.minutes),
            n.seconds = t,
            n
        }
    },
    817: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return d
        }
        )),
        n.d(t, "a", (function() {
            return f
        }
        ));
        var r = n(2)
          , c = n.n(r)
          , a = n(12)
          , i = n(33)
          , s = n(0)
          , o = n(10)
          , u = n.n(o)
          , j = n(46)
          , b = n(17)
          , l = n(759)
          , d = function() {
            var e = Object(s.useState)(new u.a(0))
              , t = Object(i.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , o = Object(j.c)().account
              , d = Object(l.c)();
            return Object(s.useEffect)((function() {
                var e = function() {
                    var e = Object(a.a)(c.a.mark((function e() {
                        var t;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    d.methods.allowance(o, Object(b.f)()).call();
                                case 2:
                                    t = e.sent,
                                    r(new u.a(t));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                o && e();
                var t = setInterval(e, 1e4);
                return function() {
                    return clearInterval(t)
                }
            }
            ), [o, d]),
            n
        }
          , f = function(e, t, n) {
            var r = Object(j.c)().account
              , o = Object(s.useState)(new u.a(0))
              , b = Object(i.a)(o, 2)
              , l = b[0]
              , d = b[1];
            return Object(s.useEffect)((function() {
                (function() {
                    var n = Object(a.a)(c.a.mark((function n() {
                        var a;
                        return c.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0,
                                    n.next = 3,
                                    e.methods.allowance(r, t).call();
                                case 3:
                                    a = n.sent,
                                    d(new u.a(a)),
                                    n.next = 10;
                                    break;
                                case 7:
                                    n.prev = 7,
                                    n.t0 = n.catch(0),
                                    console.error(n.t0);
                                case 10:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[0, 7]])
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }
                )()()
            }
            ), [r, t, e, n]),
            l
        }
    }
}]);
//# sourceMappingURL=9.0e66390b.chunk.js.map
