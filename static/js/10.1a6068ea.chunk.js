(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[10], {
    1101: function(e, t, n) {
        "use strict";
        n.r(t);
        var r, c, i, a, o, s, u, b, d, l, j, f, p, O, x, m, h = n(0), g = n(34), v = n(214), w = n(54), y = n(3), S = n(94), k = n(19), A = n(8), C = y.e.div(r || (r = Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))), I = function() {
            var e = Object(g.i)()
              , t = e.url
              , n = e.isExact;
            return Object(A.jsx)(C, {
                children: Object(A.jsxs)(k.l, {
                    activeIndex: n ? 0 : 1,
                    scale: "sm",
                    variant: "subtle",
                    children: [Object(A.jsx)(k.m, {
                        as: S.a,
                        to: "".concat(t),
                        children: "Next IFO"
                    }), Object(A.jsx)(k.m, {
                        as: S.a,
                        to: "".concat(t, "/history"),
                        children: "Past IFOs"
                    })]
                })
            })
        }, E = n(201), D = Object(y.e)(k.F).attrs({
            as: "h1",
            size: "xl"
        })(c || (c = Object(w.a)(["\n  color: ", ";\n  margin-bottom: 24px;\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        )), T = Object(y.e)(k.db)(i || (i = Object(w.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))), B = y.e.div(a || (a = Object(w.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))), F = function() {
            var e = Object(E.a)();
            return Object(A.jsx)(B, {
                children: Object(A.jsxs)(v.a, {
                    children: [Object(A.jsx)(D, {
                        children: e(500, "IFO: Initial Farm Offerings")
                    }), Object(A.jsx)(T, {
                        children: e(502, "Buy new tokens with a brand new token sale model.")
                    })]
                })
            })
        }, M = n(210), P = n(46), L = n(764), z = n(2), R = n.n(z), N = n(12), _ = n(33), U = n(10), q = n.n(U), K = n(763), Q = n(807), H = n(759), W = n(126), G = function(e, t, n) {
            return 0 === e ? "idle" : e < t ? "coming_soon" : e >= t && e <= n ? "live" : e > n ? "finished" : "idle"
        }, V = function(e) {
            var t = e.address
              , n = e.releaseBlockNumber
              , r = Object(h.useState)({
                status: "idle",
                blocksRemaining: 0,
                secondsUntilStart: 0,
                progress: 5,
                secondsUntilEnd: 0,
                raisingAmount: new q.a(0),
                totalAmount: new q.a(0),
                startBlockNum: 0,
                endBlockNum: 0
            })
              , c = Object(_.a)(r, 2)
              , i = c[0]
              , a = c[1]
              , o = Object(Q.a)()
              , s = Object(H.f)(t);
            return Object(h.useEffect)((function() {
                (function() {
                    var e = Object(N.a)(R.a.mark((function e() {
                        var t, r, c, i, u, b, d, l, j, f, p, O;
                        return R.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Object(W.a)([s.methods.startBlock().call, s.methods.endBlock().call, s.methods.raisingAmount().call, s.methods.totalAmount().call]);
                                case 2:
                                    t = e.sent,
                                    r = Object(_.a)(t, 4),
                                    c = r[0],
                                    i = r[1],
                                    u = r[2],
                                    b = r[3],
                                    d = parseInt(c, 10),
                                    l = parseInt(i, 10),
                                    j = G(o, d, l),
                                    f = l - d,
                                    O = o > d ? (o - d) / f * 100 : (o - n) / (d - n) * 100,
                                    a({
                                        secondsUntilEnd: (p = l - o) * K.e,
                                        secondsUntilStart: (d - o) * K.e,
                                        raisingAmount: new q.a(u),
                                        totalAmount: new q.a(b),
                                        status: j,
                                        progress: O,
                                        blocksRemaining: p,
                                        startBlockNum: d,
                                        endBlockNum: l
                                    });
                                case 15:
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
                }
                )()()
            }
            ), [t, o, s, n, a]),
            i
        }, J = Object(y.e)(k.E)(o || (o = Object(w.a)(["\n  & > div {\n    flex: 1;\n  }\n"]))), Y = Object(y.e)(k.F).attrs({
            as: "h3",
            size: "lg"
        })(s || (s = Object(w.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))), X = Object(y.e)(k.db)(u || (u = Object(w.a)(["\n  color: ", ";\n  font-size: 14px;\n  text-align: right;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        )), $ = function(e) {
            var t = e.ifoId
              , n = e.name
              , r = e.subTitle;
            return Object(A.jsxs)(J, {
                mb: "24px",
                alignItems: "center",
                children: [Object(A.jsx)("img", {
                    src: "/images/ifos/".concat(t, ".svg"),
                    alt: t,
                    width: "64px",
                    height: "64px"
                }), Object(A.jsxs)("div", {
                    children: [Object(A.jsx)(Y, {
                        children: n
                    }), Object(A.jsx)(X, {
                        children: r
                    })]
                })]
            })
        }, Z = y.e.div(b || (b = Object(w.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        )), ee = Object(y.e)(k.db)(d || (d = Object(w.a)(["\n  flex: 1;\n"]))), te = function(e) {
            var t = e.ifo
              , n = e.publicIfoData
              , r = Object(h.useState)(!1)
              , c = Object(_.a)(r, 2)
              , i = c[0]
              , a = c[1]
              , o = Object(E.a)()
              , s = t.description
              , u = t.cakeToBurn
              , b = t.projectSiteUrl
              , d = t.launchDate
              , l = t.launchTime
              , j = t.saleAmount
              , f = t.raiseAmount
              , p = n.raisingAmount
              , O = n.totalAmount;
            return Object(A.jsxs)(k.q, {
                children: [Object(A.jsx)(k.k, {
                    variant: "text",
                    onClick: function() {
                        return a(!i)
                    },
                    width: "100%",
                    endIcon: i ? Object(A.jsx)(k.A, {
                        color: "primary",
                        width: "24px"
                    }) : Object(A.jsx)(k.x, {
                        color: "primary",
                        width: "24px"
                    }),
                    children: i ? o(1066, "Hide") : o(658, "Details")
                }), i && Object(A.jsxs)(A.Fragment, {
                    children: [Object(A.jsx)(k.db, {
                        as: "p",
                        color: "textSubtle",
                        my: "24px",
                        children: s
                    }), Object(A.jsxs)(k.h, {
                        mb: "24px",
                        children: [Object(A.jsxs)(Z, {
                            children: [Object(A.jsx)(ee, {
                                children: o(582, "Launch Time")
                            }), Object(A.jsxs)(k.db, {
                                children: [d, ",", Object(A.jsx)(k.K, {
                                    href: "https://www.timeanddate.com/worldclock/singapore/singapore",
                                    target: "blank",
                                    rel: "noopener noreferrer",
                                    ml: "4px",
                                    style: {
                                        display: "inline"
                                    },
                                    children: l
                                })]
                            })]
                        }), Object(A.jsxs)(Z, {
                            children: [Object(A.jsx)(ee, {
                                children: o(584, "For Sale")
                            }), Object(A.jsx)(k.db, {
                                children: j
                            })]
                        }), Object(A.jsxs)(Z, {
                            children: [Object(A.jsx)(ee, {
                                children: o(999, "To raise (USD)")
                            }), Object(A.jsx)(k.db, {
                                children: f
                            })]
                        }), Object(A.jsxs)(Z, {
                            children: [Object(A.jsx)(ee, {
                                children: o(586, "CAKE to burn (USD)")
                            }), Object(A.jsx)(k.db, {
                                children: u
                            })]
                        }), Object(A.jsxs)(Z, {
                            children: [Object(A.jsx)(ee, {
                                children: o(999, "Total raised (% of target)")
                            }), Object(A.jsx)(k.db, {
                                children: "".concat(O.div(p).times(100).toFixed(2), "%")
                            })]
                        })]
                    }), Object(A.jsx)(k.L, {
                        href: b,
                        style: {
                            margin: "auto"
                        },
                        children: o(412, "View project site")
                    })]
                })]
            })
        }, ne = n(16), re = n(817), ce = function(e) {
            var t = Object(h.useState)({
                isPendingTx: !1,
                offeringTokenBalance: new q.a(0),
                refundingAmount: new q.a(0),
                userInfo: {
                    amount: new q.a(0),
                    claimed: !1
                }
            })
              , n = Object(_.a)(t, 2)
              , r = n[0]
              , c = n[1]
              , i = e.address
              , a = e.currencyAddress
              , o = r.isPendingTx
              , s = Object(P.c)().account
              , u = Object(H.f)(i)
              , b = Object(H.e)(a)
              , d = Object(re.a)(b, i, o);
            return Object(h.useEffect)((function() {
                s && function() {
                    var e = Object(N.a)(R.a.mark((function e() {
                        var t, n, r, i, a;
                        return R.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Object(W.a)([u.methods.getOfferingAmount(s).call, u.methods.userInfo(s).call, u.methods.getRefundingAmount(s).call]);
                                case 2:
                                    t = e.sent,
                                    n = Object(_.a)(t, 3),
                                    r = n[0],
                                    i = n[1],
                                    a = n[2],
                                    c((function(e) {
                                        return Object(ne.a)(Object(ne.a)({}, e), {}, {
                                            offeringTokenBalance: new q.a(r),
                                            refundingAmount: new q.a(a),
                                            userInfo: {
                                                amount: new q.a(i.amount),
                                                claimed: i.claimed
                                            }
                                        })
                                    }
                                    ));
                                case 8:
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
            ), [s, u, c]),
            Object(ne.a)(Object(ne.a)({}, r), {}, {
                allowance: d,
                contract: u,
                setPendingTx: function(e) {
                    return c((function(t) {
                        return Object(ne.a)(Object(ne.a)({}, t), {}, {
                            isPendingTx: e
                        })
                    }
                    ))
                },
                addUserContributedAmount: function(e) {
                    c((function(t) {
                        return Object(ne.a)(Object(ne.a)({}, t), {}, {
                            userInfo: Object(ne.a)(Object(ne.a)({}, t.userInfo), {}, {
                                amount: t.userInfo.amount.plus(e)
                            })
                        })
                    }
                    ))
                },
                setIsClaimed: function() {
                    c((function(e) {
                        return Object(ne.a)(Object(ne.a)({}, e), {}, {
                            userInfo: Object(ne.a)(Object(ne.a)({}, e.userInfo), {}, {
                                claimed: !0
                            })
                        })
                    }
                    ))
                }
            })
        }, ie = n(760), ae = n(48), oe = n(775), se = n(766), ue = Object(y.e)(k.h)(l || (l = Object(w.a)(["\n  background: ", ";\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2) inset;\n  border-radius: ", ";\n  padding: 8px 16px;\n"])), (function(e) {
            return e.theme.colors.input
        }
        ), (function(e) {
            return e.theme.radii.default
        }
        )), be = function(e) {
            var t = e.title
              , n = e.max
              , r = e.symbol
              , c = e.onChange
              , i = e.onSelectMax
              , a = e.value
              , o = Object(se.a)(e, ["title", "max", "symbol", "onChange", "onSelectMax", "value"])
              , s = Object(E.a)()
              , u = n.toFixed(6);
            return Object(A.jsxs)(ue, Object(ne.a)(Object(ne.a)({}, o), {}, {
                children: [Object(A.jsxs)(k.E, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "8px",
                    children: [Object(A.jsx)(k.db, {
                        fontSize: "14px",
                        children: t
                    }), Object(A.jsx)(k.db, {
                        fontSize: "14px",
                        children: s(999, "Balance: ".concat(u), {
                            num: u
                        })
                    })]
                }), Object(A.jsxs)(k.E, {
                    alignItems: "center",
                    children: [Object(A.jsx)(k.J, {
                        onChange: c,
                        placeholder: "0",
                        value: a
                    }), Object(A.jsxs)(k.E, {
                        alignItems: "center",
                        children: [i && Object(A.jsx)(k.k, {
                            scale: "sm",
                            onClick: i,
                            mr: "8px",
                            children: s(452, "Max")
                        }), Object(A.jsx)(k.db, {
                            children: r
                        })]
                    })]
                })]
            }))
        }, de = n(770), le = n(786), je = n(787), fe = function(e) {
            var t = e.currency
              , n = e.contract
              , r = e.currencyAddress
              , c = e.onDismiss
              , i = e.onSuccess
              , a = Object(h.useState)("")
              , o = Object(_.a)(a, 2)
              , s = o[0]
              , u = o[1]
              , b = Object(P.c)().account
              , d = Object(H.e)(r)
              , l = Object(ie.a)(Object(de.a)(r))
              , j = Object(E.a)()
              , f = new q.a(s).times(new q.a(10).pow(18))
              , p = Object(je.a)({
                onRequiresApproval: function() {
                    var e = Object(N.a)(R.a.mark((function e() {
                        var t, r;
                        return R.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    d.methods.allowance(b, n.options.address).call();
                                case 3:
                                    return t = e.sent,
                                    r = new q.a(t),
                                    e.abrupt("return", r.gt(0));
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(0),
                                    e.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onApprove: function() {
                    return d.methods.approve(n.options.address, oe.a.constants.MaxUint256).send({
                        from: b
                    })
                },
                onConfirm: function() {
                    return n.methods.deposit(f.toString()).send({
                        from: b
                    })
                },
                onSuccess: function() {
                    var e = Object(N.a)(R.a.mark((function e() {
                        return R.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    c(),
                                    i(f);
                                case 2:
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
                }()
            })
              , O = p.isApproving
              , x = p.isApproved
              , m = p.isConfirmed
              , g = p.isConfirming
              , v = p.handleApprove
              , w = p.handleConfirm;
            return Object(A.jsx)(k.R, {
                title: "Contribute ".concat(t),
                onDismiss: c,
                children: Object(A.jsxs)(k.h, {
                    width: "344px",
                    children: [Object(A.jsx)(be, {
                        title: j(999, "Contribute"),
                        value: s,
                        onChange: function(e) {
                            return u(e.currentTarget.value)
                        },
                        symbol: t,
                        max: l,
                        onSelectMax: function() {
                            return u(l.toString())
                        },
                        mb: "24px"
                    }), Object(A.jsx)(le.a, {
                        isApproveDisabled: m || g || x,
                        isApproving: O,
                        isConfirmDisabled: !x || m || f.isNaN() || f.eq(0),
                        isConfirming: g,
                        onApprove: v,
                        onConfirm: w
                    }), Object(A.jsx)(k.L, {
                        href: "https://https://dex.fishswap.app/#/add/ETH/0x13c2d9b130E0830f79B41FDFb158B83875baf7FF",
                        style: {
                            margin: "16px auto 0"
                        },
                        children: "Get ".concat(t)
                    })]
                })
            })
        }, pe = function(e) {
            var t = e.userAmount
              , n = e.raisingAmount
              , r = Object(E.a)()
              , c = t.div(n).times(100).toNumber().toLocaleString(void 0, {
                maximumFractionDigits: 2
            });
            return Object(A.jsx)(k.db, {
                fontSize: "14px",
                color: "textSubtle",
                children: r(999, "".concat(c, "% of total"), {
                    num: c
                })
            })
        }, Oe = function(e) {
            var t = e.ifo
              , n = e.contract
              , r = e.userInfo
              , c = e.isPendingTx
              , i = e.publicIfoData
              , a = e.addUserContributedAmount
              , o = t.currency
              , s = t.currencyAddress
              , u = i.raisingAmount
              , b = Object(E.a)()
              , d = Object(ie.a)(r.amount)
              , l = Object(ae.r)().toastSuccess
              , j = Object(k.rb)(Object(A.jsx)(fe, {
                currency: o,
                contract: n,
                currencyAddress: s,
                onSuccess: function(e) {
                    l("Success!", "You have contributed ".concat(Object(ie.a)(e), " CAKE-BNB LP tokens to this IFO!")),
                    a(e)
                }
            }), !1)
              , f = Object(_.a)(j, 1)[0];
            return Object(A.jsxs)(k.h, {
                children: [Object(A.jsxs)(k.E, {
                    mb: "4px",
                    children: [Object(A.jsx)(k.db, {
                        as: "span",
                        bold: !0,
                        fontSize: "12px",
                        mr: "4px",
                        textTransform: "uppercase",
                        children: "CAKE-BNB LP"
                    }), Object(A.jsx)(k.db, {
                        as: "span",
                        color: "textSubtle",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        bold: !0,
                        children: "Committed"
                    })]
                }), Object(A.jsxs)(k.E, {
                    alignItems: "center",
                    children: [Object(A.jsx)(k.h, {
                        style: {
                            flex: 1
                        },
                        pr: "8px",
                        children: Object(A.jsx)(k.db, {
                            bold: !0,
                            fontSize: "20px",
                            children: d.toFixed(4)
                        })
                    }), Object(A.jsx)(k.k, {
                        onClick: f,
                        disabled: c,
                        children: b(999, "Contribute")
                    })]
                }), Object(A.jsx)(pe, {
                    userAmount: r.amount,
                    raisingAmount: u
                })]
            })
        }, xe = function(e) {
            var t = e.children
              , n = Object(se.a)(e, ["children"]);
            return Object(A.jsx)(k.h, Object(ne.a)(Object(ne.a)({
                minHeight: "18px"
            }, n), {}, {
                children: Object(A.jsx)(k.db, {
                    color: "textSubtle",
                    fontSize: "12px",
                    children: t
                })
            }))
        }, me = function(e) {
            var t = e.token
              , n = e.balance
              , r = Object(ae.i)(t)
              , c = !!r && n > 0
              , i = r * n;
            return Object(A.jsx)(xe, {
                children: c && "~$".concat(i.toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }))
            })
        }, he = y.e.div(j || (j = Object(w.a)(["\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: repeat(2, 1fr);\n  margin-bottom: 24px;\n"]))), ge = function(e) {
            var t = e.ifo
              , n = e.contract
              , r = e.userInfo
              , c = e.isPendingTx
              , i = e.setPendingTx
              , a = e.offeringTokenBalance
              , o = e.refundingAmount
              , s = e.setIsClaimed
              , u = Object(E.a)()
              , b = Object(P.c)().account
              , d = r.amount.gt(0)
              , l = !r.claimed && a.gt(0)
              , j = Object(ie.a)(r.amount)
              , f = Object(ie.a)(o).toFixed(r.amount.eq(0) ? 0 : 4)
              , p = t.tokenSymbol
              , O = t.tokenDecimals
              , x = Object(ie.a)(a, O)
              , m = Object(ae.r)()
              , h = m.toastError
              , g = m.toastSuccess
              , v = a.gt(0)
              , w = function() {
                var e = Object(N.a)(R.a.mark((function e() {
                    return R.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                i(!0),
                                e.next = 4,
                                n.methods.harvest().send({
                                    from: b
                                });
                            case 4:
                                s(),
                                g("Success!", "You have successfully claimed your rewards."),
                                e.next = 12;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                h("Error", null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message),
                                console.error(e.t0);
                            case 12:
                                return e.prev = 12,
                                i(!1),
                                e.finish(12);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8, 12, 15]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return Object(A.jsxs)(A.Fragment, {
                children: [Object(A.jsxs)(he, {
                    children: [Object(A.jsxs)(k.h, {
                        children: [Object(A.jsxs)(k.E, {
                            mb: "4px",
                            children: [Object(A.jsx)(k.db, {
                                as: "span",
                                bold: !0,
                                fontSize: "12px",
                                mr: "4px",
                                textTransform: "uppercase",
                                children: "LP Tokens"
                            }), Object(A.jsx)(k.db, {
                                as: "span",
                                color: "textSubtle",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                bold: !0,
                                children: "Committed"
                            })]
                        }), Object(A.jsx)(k.db, {
                            fontSize: "20px",
                            bold: !0,
                            color: a.gt(0) ? "text" : "textDisabled",
                            children: j.toFixed(r.amount.eq(0) ? 0 : 4)
                        }), Object(A.jsxs)(xe, {
                            children: [v && l && u(999, "".concat(f, " to reclaim"), {
                                num: f
                            }), v && !l && u(999, "".concat(f, " reclaimed"), {
                                num: f
                            })]
                        })]
                    }), Object(A.jsxs)(k.h, {
                        children: [Object(A.jsxs)(k.E, {
                            mb: "4px",
                            children: [Object(A.jsx)(k.db, {
                                as: "span",
                                bold: !0,
                                fontSize: "12px",
                                mr: "4px",
                                textTransform: "uppercase",
                                children: p
                            }), !l && v ? Object(A.jsx)(k.db, {
                                as: "span",
                                color: "textSubtle",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                bold: !0,
                                children: "Claimed"
                            }) : Object(A.jsx)(k.db, {
                                as: "span",
                                color: "textSubtle",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                bold: !0,
                                children: "To Claim"
                            })]
                        }), Object(A.jsx)(k.db, {
                            fontSize: "20px",
                            bold: !0,
                            color: a.gt(0) ? "text" : "textDisabled",
                            children: x.toFixed(a.eq(0) ? 0 : 4)
                        }), l && Object(A.jsx)(me, {
                            token: p,
                            balance: x
                        })]
                    })]
                }), d ? Object(A.jsx)(k.k, {
                    onClick: w,
                    disabled: c || !l,
                    width: "100%",
                    mb: "24px",
                    isLoading: c,
                    endIcon: c ? Object(A.jsx)(k.d, {
                        spin: !0,
                        color: "currentColor"
                    }) : null,
                    children: u(999, l ? "Claim" : "Claimed")
                }) : Object(A.jsx)(k.k, {
                    disabled: !0,
                    width: "100%",
                    mb: "24px",
                    children: u(999, "Nothing to Claim")
                }), Object(A.jsx)(k.db, {
                    mt: "4px",
                    children: u(999, "You'll be refunded any excess tokens when you claim")
                })]
            })
        }, ve = function() {
            return Object(A.jsxs)(k.h, {
                children: [Object(A.jsx)(k.ab, {
                    height: "18px",
                    mb: "4px",
                    width: "30%"
                }), Object(A.jsx)(k.ab, {
                    height: "48px",
                    mb: "2px"
                }), Object(A.jsx)(k.ab, {
                    height: "19px",
                    width: "15%"
                })]
            })
        }, we = function() {
            return Object(A.jsxs)(A.Fragment, {
                children: [Object(A.jsxs)(k.E, {
                    mb: "24px",
                    children: [Object(A.jsxs)(k.h, {
                        width: "50%",
                        height: "52px",
                        children: [Object(A.jsx)(k.ab, {
                            height: "18px",
                            mb: "4px",
                            width: "70%"
                        }), Object(A.jsx)(k.ab, {
                            height: "30px",
                            width: "20%"
                        })]
                    }), Object(A.jsxs)(k.h, {
                        width: "50%",
                        height: "52px",
                        children: [Object(A.jsx)(k.ab, {
                            height: "18px",
                            mb: "4px",
                            width: "70%"
                        }), Object(A.jsx)(k.ab, {
                            height: "30px",
                            width: "20%"
                        })]
                    })]
                }), Object(A.jsx)(k.ab, {
                    height: "48px",
                    mb: "24px"
                }), Object(A.jsx)(k.ab, {
                    height: "48px",
                    mt: "4px"
                })]
            })
        }, ye = function(e) {
            var t = e.ifo
              , n = e.publicIfoData
              , r = ce(t)
              , c = r.isPendingTx
              , i = r.offeringTokenBalance
              , a = r.refundingAmount
              , o = r.userInfo
              , s = r.contract
              , u = r.setPendingTx
              , b = r.addUserContributedAmount
              , d = r.setIsClaimed;
            return Object(P.c)().account ? Object(A.jsxs)(A.Fragment, {
                children: [t.isActive && "idle" === n.status && Object(A.jsx)(ve, {}), !t.isActive && "idle" === n.status && Object(A.jsx)(we, {}), "live" === n.status && Object(A.jsx)(Oe, {
                    ifo: t,
                    contract: s,
                    userInfo: o,
                    isPendingTx: c,
                    publicIfoData: n,
                    addUserContributedAmount: b
                }), "finished" === n.status && Object(A.jsx)(ge, {
                    ifo: t,
                    contract: s,
                    userInfo: o,
                    isPendingTx: c,
                    setPendingTx: u,
                    offeringTokenBalance: i,
                    refundingAmount: a,
                    setIsClaimed: d
                })]
            }) : Object(A.jsx)(L.a, {})
        }, Se = function(e) {
            var t = e.progress;
            return Object(A.jsx)(k.h, {
                mb: "16px",
                children: Object(A.jsx)(k.X, {
                    primaryStep: t
                })
            })
        }, ke = n(816), Ae = y.e.div(f || (f = Object(w.a)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))), Ce = y.e.div(p || (p = Object(w.a)(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        )), Ie = function(e) {
            var t = e.status
              , n = e.secondsUntilStart
              , r = e.secondsUntilEnd
              , c = e.block
              , i = Object(E.a)()
              , a = "coming_soon" === t ? n : r
              , o = Object(ke.a)(a)
              , s = "coming_soon" === t ? "start" : "finish";
            return "idle" === t ? Object(A.jsx)(k.E, {
                alignItems: "center",
                justifyContent: "center",
                mb: "24px",
                height: "24px",
                children: i(656, "Loading...")
            }) : Object(A.jsxs)(Ae, {
                children: [Object(A.jsx)(Ce, {
                    children: "".concat(o.days, "d, ").concat(o.hours, "h, ").concat(o.minutes, "m until ").concat(s)
                }), Object(A.jsx)(k.K, {
                    href: "https://bscscan.com/block/countdown/".concat(c),
                    target: "blank",
                    rel: "noopener noreferrer",
                    ml: "8px",
                    children: "(blocks)"
                })]
            })
        }, Ee = Object(y.e)(k.o)(O || (O = Object(w.a)(["\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])), (function(e) {
            var t = e.ifoId;
            return "url('/images/ifos/".concat(t, "-bg.svg')")
        }
        )), De = function(e) {
            var t = e.ifo
              , n = t.id
              , r = t.name
              , c = t.subTitle
              , i = V(t)
              , a = Object(P.c)().account
              , o = Object(E.a)()
              , s = function(e, t) {
                return "coming_soon" === e ? Object(A.jsx)(k.s, {
                    variantColor: "textDisabled",
                    text: t(999, "Coming Soon")
                }) : "live" === e ? Object(A.jsx)(k.s, {
                    variantColor: "primary",
                    text: t(999, "LIVE NOW!")
                }) : null
            }(i.status, o);
            return Object(A.jsxs)(Ee, {
                ifoId: n,
                ribbon: s,
                isActive: "live" === i.status,
                children: [Object(A.jsxs)(k.p, {
                    children: [Object(A.jsx)($, {
                        ifoId: n,
                        name: r,
                        subTitle: c
                    }), "finished" !== i.status && t.isActive && Object(A.jsxs)(A.Fragment, {
                        children: [Object(A.jsx)(Se, {
                            progress: i.progress
                        }), Object(A.jsx)(Ie, {
                            status: i.status,
                            secondsUntilStart: i.secondsUntilStart,
                            secondsUntilEnd: i.secondsUntilEnd,
                            block: i.startBlockNum
                        })]
                    }), a ? Object(A.jsx)(ye, {
                        ifo: t,
                        publicIfoData: i
                    }) : Object(A.jsx)(L.a, {
                        width: "100%"
                    })]
                }), Object(A.jsx)(te, {
                    ifo: t,
                    publicIfoData: i
                })]
            })
        }, Te = Object(y.e)(k.F).attrs({
            size: "lg"
        })(x || (x = Object(w.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        )), Be = y.e.div(m || (m = Object(w.a)(["\n  align-items: start;\n  border-top: 2px solid ", ";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  ", " {\n    grid-template-columns: ", ";\n  }\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        ), (function(e) {
            return e.theme.mediaQueries.md
        }
        ), (function(e) {
            var t = e.isSingle;
            return "repeat(".concat(t ? 1 : 2, ", 1fr)")
        }
        ));
        Be.defaultProps = {
            isSingle: !1
        };
        var Fe, Me, Pe = Be, Le = Object(y.e)(k.e)(Fe || (Fe = Object(w.a)(["\n  border-top: 2px solid ", ";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  ", " {\n    grid-template-columns: 1fr 1fr;\n  }\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        ), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), ze = y.e.ul(Me || (Me = Object(w.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])), (function(e) {
            return e.theme.colors.text
        }
        )), Re = M.b.find((function(e) {
            return e.isActive
        }
        )), Ne = function() {
            var e = Object(E.a)();
            return Object(A.jsxs)("div", {
                children: [Object(A.jsx)(Pe, {
                    isSingle: !0,
                    children: Object(A.jsx)(De, {
                        ifo: Re
                    })
                }), Object(A.jsxs)(Le, {
                    children: [Object(A.jsxs)("div", {
                        children: [Object(A.jsx)(Te, {
                            as: "h2",
                            children: e(592, "How to take part")
                        }), Object(A.jsxs)(k.F, {
                            mb: "16px",
                            children: [e(594, "Before Sale"), ":"]
                        }), Object(A.jsxs)(ze, {
                            children: [Object(A.jsx)("li", {
                                children: e(596, "Buy CAKE and BNB tokens")
                            }), Object(A.jsx)("li", {
                                children: e(598, "Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity")
                            })]
                        }), Object(A.jsxs)(k.E, {
                            mb: "16px",
                            children: [Object(A.jsx)(k.L, {
                                href: "https://dex.fishswap.app/#/swap",
                                mr: "16px",
                                children: e(1060, "Buy LOCK")
                            }), Object(A.jsx)(k.L, {
                                href: "https://dex.fishswap.app/#/add/ETH/0x13c2d9b130E0830f79B41FDFb158B83875baf7FF",
                                children: e(1062, "Get LP tokens")
                            })]
                        }), Object(A.jsxs)(k.F, {
                            mb: "16px",
                            children: [e(600, "During Sale"), ":"]
                        }), Object(A.jsx)(ze, {
                            children: Object(A.jsx)("li", {
                                children: e(602, "While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens")
                            })
                        }), Object(A.jsxs)(k.F, {
                            mb: "16px",
                            children: [e(604, "After Sale"), ":"]
                        }), Object(A.jsxs)(ze, {
                            children: [Object(A.jsx)("li", {
                                children: e(606, "Claim the tokens you bought, along with any unspent funds.")
                            }), Object(A.jsx)("li", {
                                children: e(608, "Done!")
                            })]
                        }), Object(A.jsx)(k.db, {
                            as: "div",
                            pt: "16px",
                            children: Object(A.jsx)(k.k, {
                                as: "a",
                                variant: "secondary",
                                href: "https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering",
                                children: e(610, "Read more")
                            })
                        })]
                    }), Object(A.jsxs)("div", {
                        children: [Object(A.jsx)(k.I, {
                            src: "/images/ifo-bunny.svg",
                            alt: "ifo bunny",
                            width: 436,
                            height: 406,
                            responsive: !0
                        }), Object(A.jsxs)("div", {
                            children: [Object(A.jsx)(Te, {
                                as: "h2",
                                children: e(512, "Want to launch your own IFO?")
                            }), Object(A.jsx)(k.db, {
                                mb: 3,
                                children: e(514, "Launch your project with LockSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.")
                            }), Object(A.jsx)(k.k, {
                                as: "a",
                                href: "https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform",
                                external: !0,
                                children: e(516, "Apply to launch")
                            })]
                        })]
                    })]
                })]
            })
        }, _e = M.b.filter((function(e) {
            return !e.isActive
        }
        )), Ue = function() {
            return Object(A.jsx)(Pe, {
                children: _e.map((function(e) {
                    return Object(A.jsx)(De, {
                        ifo: e
                    }, e.id)
                }
                ))
            })
        };
        t.default = function() {
            var e = Object(g.i)().path;
            return Object(A.jsxs)(A.Fragment, {
                children: [Object(A.jsx)(F, {}), Object(A.jsxs)(v.a, {
                    children: [Object(A.jsx)(I, {}), Object(A.jsx)(g.b, {
                        exact: !0,
                        path: "".concat(e),
                        children: Object(A.jsx)(Ne, {})
                    }), Object(A.jsx)(g.b, {
                        path: "".concat(e, "/history"),
                        children: Object(A.jsx)(Ue, {})
                    })]
                })]
            })
        }
    },
    759: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return a
        }
        )),
        n.d(t, "e", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return s
        }
        )),
        n.d(t, "a", (function() {
            return u
        }
        )),
        n.d(t, "j", (function() {
            return b
        }
        )),
        n.d(t, "l", (function() {
            return d
        }
        )),
        n.d(t, "g", (function() {
            return l
        }
        )),
        n.d(t, "h", (function() {
            return j
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
            return x
        }
        )),
        n.d(t, "d", (function() {
            return m
        }
        ));
        var r = n(0)
          , c = n(761)
          , i = n(71)
          , a = function(e) {
            var t = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.f)(e, t)
            }
            ), [e, t])
        }
          , o = function(e) {
            var t = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.a)(e, t)
            }
            ), [e, t])
        }
          , s = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.d)(e)
            }
            ), [e])
        }
          , u = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.b)(e)
            }
            ), [e])
        }
          , b = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.j)(e)
            }
            ), [e])
        }
          , d = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.l)(e)
            }
            ), [e])
        }
          , l = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.g)(e)
            }
            ), [e])
        }
          , j = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.h)(e)
            }
            ), [e])
        }
          , f = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.i)(e)
            }
            ), [e])
        }
          , p = function(e) {
            var t = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.m)(e, t)
            }
            ), [e, t])
        }
          , O = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.k)(e)
            }
            ), [e])
        }
          , x = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.c)(e)
            }
            ), [e])
        }
          , m = function() {
            var e = Object(c.a)();
            return Object(r.useMemo)((function() {
                return Object(i.e)(e)
            }
            ), [e])
        }
    },
    760: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        ));
        var r = n(10)
          , c = n.n(r)
          , i = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
              , n = new c.a(e).dividedBy(new c.a(10).pow(t));
            return n.toNumber()
        }
          , a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return e.dividedBy(new c.a(10).pow(t)).toFixed()
        }
    },
    761: function(e, t, n) {
        "use strict";
        var r = n(33)
          , c = n(0)
          , i = n(154)
          , a = n.n(i)
          , o = n(46)
          , s = n(64);
        t.a = function() {
            var e = Object(o.c)().library
              , t = Object(c.useRef)(e)
              , n = Object(c.useState)(e ? new a.a(e) : Object(s.b)())
              , i = Object(r.a)(n, 2)
              , u = i[0]
              , b = i[1];
            return Object(c.useEffect)((function() {
                e !== t.current && (b(e ? new a.a(e) : Object(s.b)()),
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
            return i
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return s
        }
        )),
        n.d(t, "f", (function() {
            return u
        }
        )),
        n.d(t, "g", (function() {
            return b
        }
        ));
        var r = n(771);
        r.a.config({
            EXPONENTIAL_AT: 1e3,
            DECIMAL_PLACES: 80
        });
        new r.a(20);
        var c = new r.a(10512e3)
          , i = 3
          , a = "https://fishswap.app"
          , o = "https://dex.fishswap.app"
          , s = "".concat(o, "/#/add")
          , u = ("".concat(o, "/#/pool"),
        50)
          , b = 1
    },
    764: function(e, t, n) {
        "use strict";
        var r = n(16)
          , c = (n(0),
        n(19))
          , i = n(127)
          , a = n(201)
          , o = n(8);
        t.a = function(e) {
            var t = Object(a.a)()
              , n = Object(i.a)()
              , s = n.login
              , u = n.logout
              , b = Object(c.tb)(s, u).onPresentConnectModal;
            return Object(o.jsx)(c.k, Object(r.a)(Object(r.a)({
                onClick: b
            }, e), {}, {
                children: t(292, "Unlock Wallet")
            }))
        }
    },
    766: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (null == e)
                return {};
            var n, r, c = function(e, t) {
                if (null == e)
                    return {};
                var n, r, c = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (c[n] = e[n]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n])
            }
            return c
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
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
          , i = n(12)
          , a = n(33)
          , o = n(0)
          , s = n(10)
          , u = n.n(s)
          , b = n(46)
          , d = n(71)
          , l = n(761)
          , j = n(125)
          , f = function() {
            var e = Object(j.a)().slowRefresh
              , t = Object(o.useState)()
              , n = Object(a.a)(t, 2)
              , r = n[0]
              , s = n[1];
            return Object(o.useEffect)((function() {
                function e() {
                    return (e = Object(i.a)(c.a.mark((function e() {
                        var t, n;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(d.d)(),
                                    e.next = 3,
                                    t.methods.totalSupply().call();
                                case 3:
                                    n = e.sent,
                                    s(new u.a(n));
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
            var t = Object(o.useState)(new u.a(0))
              , n = Object(a.a)(t, 2)
              , r = n[0]
              , s = n[1]
              , b = Object(j.a)().slowRefresh
              , f = Object(l.a)();
            return Object(o.useEffect)((function() {
                (function() {
                    var t = Object(i.a)(c.a.mark((function t() {
                        var n, r;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(d.a)(e, f),
                                    t.next = 3,
                                    n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                case 3:
                                    r = t.sent,
                                    s(new u.a(r));
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
            ), [f, e, b]),
            r
        };
        t.a = function(e) {
            var t = Object(o.useState)(new u.a(0))
              , n = Object(a.a)(t, 2)
              , r = n[0]
              , s = n[1]
              , f = Object(b.c)().account
              , p = Object(l.a)()
              , O = Object(j.a)().fastRefresh;
            return Object(o.useEffect)((function() {
                f && function() {
                    var t = Object(i.a)(c.a.mark((function t() {
                        var n, r;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(d.a)(e, p),
                                    t.next = 3,
                                    n.methods.balanceOf(f).call();
                                case 3:
                                    r = t.sent,
                                    s(new u.a(r));
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
    786: function(e, t, n) {
        "use strict";
        var r, c, i, a = n(54), o = (n(0),
        n(3)), s = n(19), u = n(201), b = n(8), d = Object(o.e)(s.k)(r || (r = Object(a.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n    width: auto;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), l = {
            width: "24px",
            color: "textDisabled"
        }, j = Object(o.e)(s.z).attrs(l)(c || (c = Object(a.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), f = Object(o.e)(s.x).attrs(l)(i || (i = Object(a.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), p = Object(b.jsx)(s.d, {
            spin: !0,
            color: "currentColor"
        });
        t.a = function(e) {
            var t = e.isApproveDisabled
              , n = e.isApproving
              , r = e.isConfirming
              , c = e.isConfirmDisabled
              , i = e.onApprove
              , a = e.onConfirm
              , o = Object(u.a)();
            return Object(b.jsxs)(s.E, {
                py: "8px",
                flexDirection: ["column", null, "row"],
                alignItems: "center",
                children: [Object(b.jsx)(d, {
                    disabled: t,
                    onClick: i,
                    endIcon: n ? p : void 0,
                    isLoading: n,
                    children: n ? o(800, "Approving") : o(564, "Approve")
                }), Object(b.jsx)(j, {}), Object(b.jsx)(f, {}), Object(b.jsx)(d, {
                    onClick: a,
                    disabled: c,
                    isLoading: r,
                    endIcon: r ? p : void 0,
                    children: r ? o(802, "Confirming") : o(464, "Confirm")
                })]
            })
        }
    },
    787: function(e, t, n) {
        "use strict";
        var r = n(33)
          , c = n(16)
          , i = n(0)
          , a = n(75)
          , o = n(46)
          , s = n(48)
          , u = {
            approvalState: "idle",
            approvalReceipt: null,
            approvalError: null,
            confirmState: "idle",
            confirmReceipt: null,
            confirmError: null
        }
          , b = function(e, t) {
            switch (t.type) {
            case "requires_approval":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    approvalState: "success"
                });
            case "approve_sending":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    approvalState: "loading"
                });
            case "approve_receipt":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    approvalState: "success",
                    approvalReceipt: t.payload
                });
            case "approve_error":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    approvalState: "fail",
                    approvalError: t.payload
                });
            case "confirm_sending":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    confirmState: "loading"
                });
            case "confirm_receipt":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    confirmState: "success",
                    confirmReceipt: t.payload
                });
            case "confirm_error":
                return Object(c.a)(Object(c.a)({}, e), {}, {
                    confirmState: "fail",
                    confirmError: t.payload
                });
            default:
                return e
            }
        };
        t.a = function(e) {
            var t = e.onApprove
              , n = e.onConfirm
              , c = e.onRequiresApproval
              , d = e.onSuccess
              , l = void 0 === d ? a.noop : d
              , j = Object(o.c)().account
              , f = Object(i.useReducer)(b, u)
              , p = Object(r.a)(f, 2)
              , O = p[0]
              , x = p[1]
              , m = Object(i.useRef)(c)
              , h = Object(s.r)().toastError;
            return Object(i.useEffect)((function() {
                j && m.current && m.current().then((function(e) {
                    e && x({
                        type: "requires_approval"
                    })
                }
                ))
            }
            ), [j, m, x]),
            {
                isApproving: "loading" === O.approvalState,
                isApproved: "success" === O.approvalState,
                isConfirming: "loading" === O.confirmState,
                isConfirmed: "success" === O.confirmState,
                approvalReceipt: O.approvalReceipt,
                approvalError: O.approvalError,
                confirmReceipt: O.confirmReceipt,
                confirmError: O.confirmError,
                handleApprove: function() {
                    t().on("sending", (function() {
                        x({
                            type: "approve_sending"
                        })
                    }
                    )).on("receipt", (function(e) {
                        x({
                            type: "approve_receipt",
                            payload: e
                        })
                    }
                    )).on("error", (function(e) {
                        x({
                            type: "approve_error",
                            payload: e
                        }),
                        console.error("An error occurred approving transaction:", e),
                        h("An error occurred approving transaction")
                    }
                    ))
                },
                handleConfirm: function() {
                    n().on("sending", (function() {
                        x({
                            type: "confirm_sending"
                        })
                    }
                    )).on("receipt", (function(e) {
                        x({
                            type: "confirm_receipt",
                            payload: e
                        }),
                        l(O)
                    }
                    )).on("error", (function(e) {
                        x({
                            type: "confirm_error",
                            payload: e
                        }),
                        console.error("An error occurred confirming transaction:", e),
                        h("An error occurred confirming transaction")
                    }
                    ))
                }
            }
        }
    },
    807: function(e, t, n) {
        "use strict";
        var r = n(0)
          , c = n(225);
        t.a = function() {
            return Object(r.useContext)(c.a)
        }
    },
    816: function(e, t, n) {
        "use strict";
        var r = 3600
          , c = 86400
          , i = 2629800
          , a = 31557600;
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
            return t >= a && (n.years = Math.floor(t / a),
            t -= n.years * a),
            t >= i && (n.months = Math.floor(t / i),
            t -= n.months * i),
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
            return j
        }
        )),
        n.d(t, "a", (function() {
            return f
        }
        ));
        var r = n(2)
          , c = n.n(r)
          , i = n(12)
          , a = n(33)
          , o = n(0)
          , s = n(10)
          , u = n.n(s)
          , b = n(46)
          , d = n(17)
          , l = n(759)
          , j = function() {
            var e = Object(o.useState)(new u.a(0))
              , t = Object(a.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , s = Object(b.c)().account
              , j = Object(l.c)();
            return Object(o.useEffect)((function() {
                var e = function() {
                    var e = Object(i.a)(c.a.mark((function e() {
                        var t;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    j.methods.allowance(s, Object(d.f)()).call();
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
                s && e();
                var t = setInterval(e, 1e4);
                return function() {
                    return clearInterval(t)
                }
            }
            ), [s, j]),
            n
        }
          , f = function(e, t, n) {
            var r = Object(b.c)().account
              , s = Object(o.useState)(new u.a(0))
              , d = Object(a.a)(s, 2)
              , l = d[0]
              , j = d[1];
            return Object(o.useEffect)((function() {
                (function() {
                    var n = Object(i.a)(c.a.mark((function n() {
                        var i;
                        return c.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0,
                                    n.next = 3,
                                    e.methods.allowance(r, t).call();
                                case 3:
                                    i = n.sent,
                                    j(new u.a(i)),
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
//# sourceMappingURL=10.1a6068ea.chunk.js.map
