( () => {
    var e = {
        363: function(e, t, n) {
            var o, r;
            !function() {
                "use strict";
                o = function() {
                    var e = function() {}
                      , t = "undefined"
                      , n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
                      , o = ["trace", "debug", "info", "warn", "error"]
                      , r = {}
                      , i = null;
                    function c(e, t) {
                        var n = e[t];
                        if ("function" == typeof n.bind)
                            return n.bind(e);
                        try {
                            return Function.prototype.bind.call(n, e)
                        } catch (t) {
                            return function() {
                                return Function.prototype.apply.apply(n, [e, arguments])   
                            }
                        }
                    }
                    function l() {
                        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
                          console.trace && console.trace()
                    }
                    function s(o) {
                        return "debug" === o && (o = "log"),
                        typeof console !== t && ("trace" === o && n ? l : void 0 !== console[o] ? c(console, o) : void 0 !== console.log ? c(console, "log") : e)
                    }

                     function a() {
                        for (var n = this.getLevel(), r = 0; r < o.length; r++) {
                            var i = o[r];
                            this[i] = r < n ? e : this.methodFactory(i, n, this.name)
                        }
                     if (this.log = this.debug,
                        typeof console === t && n < this.levels.SILENT)
                            return "No console available for logging"
                    }
                    function u(e) {
                        return function() {
                            typeof console !== t && (a.call(this),
                            this[e].apply(this, arguments))
                        }
