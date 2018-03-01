var ChungTool = ChungTool || {};
var simpleShow = simpleShow || {};
var simpleHide = simpleHide || {};

(function() {




    function isIOS() {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            return true;
        } else {
            return false;
        }
    }

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    function isOnline() {
        if (window.location.protocol == 'file:') {
            console.log('在本機端喔');
            return false;
        } else {
            return true;
        }
    }

    function c_simpleShow(el, during) {
        if (isNull(during)) {
            during = 0.3;
        }
        el.each(function() {
            var t = $(this);
            t.removeClass('hide');
            TweenMax.killTweensOf(t);
            var tl = new TimelineMax();
            tl.set(t, {
                    autoAlpha: 0
                })
                .to(t, during, {
                    autoAlpha: 1
                });
        });
    }

    function c_simpleHide(el, during) {
        if (isNull(during)) {
            during = 0.3;
        }
        el.each(function() {
            var t = $(this);
            var tl = new TimelineMax();
            TweenMax.killTweensOf(t);
            tl.to(t, during, {
                    autoAlpha: 0
                })
                .call(function() {
                    t.addClass('hide');
                });
        })
        // console.log(123)
    }

    function isNull(val) {
        return (typeof(val) === "undefined")
    }

    function initLimitText() {
        $('.limitTxt').each(function() {
            var t = $(this);
            var limitNum = parseInt(t.attr('data-limitTxtNum'), 10);
            var showBtn = (t.attr('data-showBtn') == 'true') ? true : false;

            if (!isNull(limitNum)) {

                var str = t.text(); // Getting the text
                str = str.replace(/ {2,}/g, ' ');
                str = str.replace(/\n\s*\n/g, '\n');

                if (str.length > limitNum) {

                    var strtemp = '<span class="hide">' + str.substr(limitNum, str.length) + '</span><a href="#" class="seeMoreContentBtn">more</a>';
                    str = str.substr(0, limitNum) + '<i class="dot"> ...</i>';

                    if (showBtn) {
                        str += strtemp;
                    }

                    t.html(str);
                }
            }
        });

        $('.seeMoreContentBtn').on('click', function(e) {
            e.preventDefault();
            $(this).addClass('hide').siblings('.hide').removeClass('hide').siblings('.dot').addClass('hide');
        });

    }

    function addSwipeEvent(t, funcL, funcR) {
        // var touchObj = document.getElementById("index_banner_swipe");
        var start_x;
        var end_x;

        t.get(0).addEventListener('touchstart', touchStart, false);
        t.get(0).addEventListener('touchmove', touchMove, false);
        t.get(0).addEventListener('touchend', touchSwipe);

        function touchStart(event) {
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控

            console.log(123);
            start_x = event.targetTouches[0].pageX;
            //alert(start_x);
        }

        function touchMove(event) {
            event.preventDefault();
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            end_x = event.targetTouches[0].pageX;
            //alert(end_x - start_x);
        }

        function touchSwipe(event) {
            if (end_x - start_x > 60) {
                funcR();

            } else if (end_x - start_x < -60) {
                funcL();
            }
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    /* 清除以prefix開頭的所有class*/
    function removeClassWithFilter(elemt, prefix) {
        elemt.each(function(i, el) {
            var classes = el.className.split(" ").filter(function(c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
    };

    /* 回傳以prefix開頭的class拿掉以prefix開頭後的文字*/
    function returnClassNameWithFilter(elemt, prefix) {
        var arr;
        elemt.each(function(i, el) {
            arr = el.className.split(" ").filter(function(c) {
                return c.lastIndexOf(prefix, 0) == 0;
            });
        });

        $.each(arr, function(index, value) {
            arr[index] = value.replace(prefix, "");
        })
        return arr;
    };

    /* 用來算中英混合的長度 */
    function txtByteLength(str) {

        if (str == null) return 0;
        if (typeof str != "string") {
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g, "01").length;

    }

    function maxlengthInpout(el, num) {
        el.on('keyup', function() {
            //get the limit from maxlength attribute  
            var limit = num;
            //get the current text inside the textarea  
            var text = $(this).val();
            //count the number of characters in the text  
            var chars = text.length;

            console.log(chars);
            //check if there are more characters then allowed  
            if (chars > limit) {
                //and if there are use substr to get the text before the limit  
                var new_text = text.substr(0, limit);

                //and change the current text with the new text  
                $(this).val(new_text);
            }
        });
    }



    function addYouTube(el, vid) {
        el.empty().append('<iframe allowfullscreen="" frameborder="0" height="100%" width="100%" src="http://www.youtube.com/embed/' + vid + '?rel=0&autoplay=1"></iframe>');
    }

    function getDivBgImage(el) {
        return el.css('background-image').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    }

    function replayCssAni(el, className) {
        el.removeClass(className);
        el.offset().width = el.offset().width;
        el.addClass(className);

    }

    function int(s) {
        return parseInt(s, 10);
    }

    // $.fn.enterKey = function(fnc) {
    //     return this.each(function() {
    //         $(this).keypress(function(ev) {
    //             var keycode = (ev.keyCode ? ev.keyCode : ev.which);
    //             if (keycode == '13') {
    //                 fnc.call(this, ev);
    //             }
    //         })
    //     })
    // }


    function getAtagElement() {
        var element = document.getElementById('share-a-tag');
        if (element === null) {
            element = document.createElement('a');
            element.style = "display: none;";
            element.id = 'share-a-tag';
            element.target = "_blank";
            document.getElementsByTagName('body')[0].appendChild(element);
        }
        return element;
    };

    function shareToLine(s) {
        var element = getAtagElement();
        element.href = 'http://line.naver.jp/R/msg/text/?' + encodeURIComponent(s);

        element.click();

    }

    function pageScrollAni(top) {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: top
        }, 300);
    }

    function isPhone() {
        testExp = new RegExp('Android|webOS|iPhone|iPad|' +
            'BlackBerry|Windows Phone|' +
            'Opera Mini|IEMobile|Mobile',
            'i');
        return (testExp.test(navigator.userAgent))
    }

    function lockScroll() {

        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        ];
        var html = jQuery('body'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        $(document.body).on("touchmove", preventScroll);
    }

    function unLockScroll() {
        var html = jQuery('body');
        var scrollPosition = html.data('scroll-position');

        if (!isNull(scrollPosition)) {
            html.css('overflow', html.data('previous-overflow'));
            window.scrollTo(scrollPosition[0], scrollPosition[1]);
            $(document.body).off("touchmove", preventScroll);
        }


    }

    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // scrollTop() ie 都只會傳回0
    function windoePosTop() {
        return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
    }

    function addSwipeUpDownEvent(el, upFunc, downFunc) {
        // var touchObj = document.getElementById("index_banner_swipe");
        var start_y;
        var end_y;
        var t = el;

        t.get(0).addEventListener('touchstart', touchStart, false);
        t.get(0).addEventListener('touchmove', touchMove, false);
        t.get(0).addEventListener('touchend', touchSwipe);

        function touchStart(event) {

            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            start_y = end_y = event.targetTouches[0].pageY;

        }

        function touchMove(event) {
            if ($(window).width() > 768) {
                event.preventDefault();
            }
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            end_y = event.targetTouches[0].pageY;
            t.css('margin-top', end_y - start_y);
        }

        function touchSwipe(event) {


            t.css('margin-top', 0);
            if (end_y - start_y > 100) {
                upFunc();

            } else if (end_y - start_y < -100) {
                downFunc();
            }
        }
    }

    function addWheelEvent(el, upFunc, downFunc) {
        ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
            function b(b) {
                var g = b || window.event,
                    h = i.call(arguments, 1),
                    j = 0,
                    l = 0,
                    m = 0,
                    n = 0,
                    o = 0,
                    p = 0;
                if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");
                        j *= q, m *= q, l *= q
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");
                        j *= r, m *= r, l *= r
                    }
                    if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();
                        o = b.clientX - s.left, p = b.clientY - s.top
                    }
                    return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                }
            }

            function c() { f = null }

            function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 }
            var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                i = Array.prototype.slice;
            if (a.event.fixHooks)
                for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            var k = a.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener)
                        for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                    else this.onmousewheel = b;
                    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                    else this.onmousewheel = null;
                    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function(b) {
                    var c = a(b),
                        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                    return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                },
                getPageHeight: function(b) { return a(b).height() },
                settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
            };
            a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } })
        });
        (function() {
            var t;
            t = "undefined" != typeof exports && null !== exports ? exports : this, t.Lethargy = function() {
                function t(t, s, i, l) { this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != s ? 1 + Math.abs(s) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != l ? l : 150, this.lastUpDeltas = function() { var t, s, i; for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) i.push(null); return i }.call(this), this.lastDownDeltas = function() { var t, s, i; for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) i.push(null); return i }.call(this), this.deltasTimestamp = function() { var t, s, i; for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) i.push(null); return i }.call(this) }
                return t.prototype.check = function(t) { var s; return t = t.originalEvent || t, null != t.wheelDelta ? s = t.wheelDelta : null != t.deltaY ? s = -40 * t.deltaY : (null != t.detail || 0 === t.detail) && (s = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), s > 0 ? (this.lastUpDeltas.push(s), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(s), this.lastDownDeltas.shift(), this.isInertia(-1)) }, t.prototype.isInertia = function(t) { var s, i, l, a, e, n, h; return s = -1 === t ? this.lastDownDeltas : this.lastUpDeltas, null === s[0] ? t : this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && s[0] === s[2 * this.stability - 1] ? !1 : (l = s.slice(0, this.stability), i = s.slice(this.stability, 2 * this.stability), h = l.reduce(function(t, s) { return t + s }), e = i.reduce(function(t, s) { return t + s }), n = h / l.length, a = e / i.length, Math.abs(n) < Math.abs(a * this.tolerance) && this.sensitivity < Math.abs(a) ? t : !1) }, t.prototype.showLastUpDeltas = function() { return this.lastUpDeltas }, t.prototype.showLastDownDeltas = function() { return this.lastDownDeltas }, t
            }()
        }).call(this);
        var lethargy = new Lethargy();
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
        var scrollable = true;
        var timer = null;

        el.mousewheel(function(e) {
            e.preventDefault()
            e.stopPropagation();
            var result = lethargy.check(e);
            // console.log(event.deltaX, event.deltaY, event.deltaFactor);




            // console.log(result)

            if (result !== false) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }

                timer = setTimeout(function() {
                    // console.log('done');
                    timer = null;
                    scrollable = true;
                }, 100);


                if (!scrollable) {
                    return
                } else {
                    scrollable = false;
                }

                if (result == 1) {
                    upFunc();
                    // switchPage(ChungTool.returnClassNameWithFilter(mom, 'channel_') * 1 - 1);

                } else {
                    downFunc();

                    // switchPage(ChungTool.returnClassNameWithFilter(mom, 'channel_') * 1 + 1);
                }
            }


        });


    }

    function isIe() {
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {

            return true;
        } else {

            return false;
        }

    }

    function scrollReachEnd(el) {
        return (el.scrollTop() + el.innerHeight() >= el[0].scrollHeight)
    }

    function scrollReachTop(el) {
        return (el.scrollTop() == 0)
    }


    function checkIdle(delay, func, func2) {
        idleTimer = null;
        idleState = false;
        idleWait = delay;

        $('*').bind('touchend touchmove touchstart', function() {


            clearTimeout(idleTimer);

            if (idleState == true) {
                func2();
            }

            idleState = false;

            idleTimer = setTimeout(function() {

                // Idle Event
                func();

                idleState = true;
            }, idleWait);
        });

        $("body").trigger("touchend");
    }

    ChungTool.checkIdle = checkIdle;
    ChungTool.scrollReachTop = scrollReachTop;
    ChungTool.scrollReachEnd = scrollReachEnd;
    ChungTool.isIe = isIe;
    ChungTool.addWheelEvent = addWheelEvent;

    ChungTool.addSwipeUpDownEvent = addSwipeUpDownEvent;

    ChungTool.windoePosTop = windoePosTop;
    ChungTool.lockScroll = lockScroll;
    ChungTool.unLockScroll = unLockScroll;
    ChungTool.isPhone = isPhone;

    ChungTool.pageScrollAni = pageScrollAni;
    //shareToLine
    ChungTool.shareToLine = shareToLine;
    //a tag
    ChungTool.getAtagElement = getAtagElement;
    // 轉成數字
    ChungTool.int = int;
    // 重跑css animation
    ChungTool.replayCssAni = replayCssAni;
    // 取得背景圖案
    ChungTool.getDivBgImage = getDivBgImage;
    // 加 youtube 到 el 裡
    ChungTool.addYouTube = addYouTube;
    // 限制input的最大輸入數
    ChungTool.maxlengthInpout = maxlengthInpout;
    // 計算中英文的長度 (中文2英文1)
    ChungTool.txtByteLength = txtByteLength;
    // 移除特定開頭的class
    ChungTool.removeClassWithFilter = removeClassWithFilter;
    // 回傳以prefix開頭的class拿掉以prefix開頭後的文字 
    ChungTool.returnClassNameWithFilter = returnClassNameWithFilter;
    ChungTool.capitalizeFirstLetter = capitalizeFirstLetter;
    ChungTool.addSwipeEvent = addSwipeEvent;
    ChungTool.initLimitText = initLimitText;
    ChungTool.getUrlParameter = getUrlParameter;
    ChungTool.isOnline = isOnline;
    ChungTool.isNull = isNull;
    ChungTool.isIOS = isIOS;
    simpleShow = c_simpleShow;
    simpleHide = c_simpleHide;


})();