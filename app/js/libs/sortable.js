// /*! Sortable 1.0.1 - MIT | git://github.com/rubaxa/Sortable.git */
// !function(a){"use strict";"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a():"undefined"!=typeof Package?Sortable=a():window.Sortable=a()}(function(){"use strict";function a(a,b){this.el=a,this.options=b=b||{};var d={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(a,b){a.setData("Text",b.textContent)},dropBubble:!1,dragoverBubble:!1};for(var e in d)!(e in b)&&(b[e]=d[e]);var g=b.group;g&&"object"==typeof g||(g=b.group={name:g}),["pull","put"].forEach(function(a){a in g||(g[a]=!0)}),L.forEach(function(d){b[d]=c(this,b[d]||M),f(a,d.substr(2).toLowerCase(),b[d])},this),a[E]=g.name+" "+(g.put.join?g.put.join(" "):"");for(var h in this)"_"===h.charAt(0)&&(this[h]=c(this,this[h]));f(a,"mousedown",this._onTapStart),f(a,"touchstart",this._onTapStart),I&&f(a,"selectstart",this._onTapStart),f(a,"dragover",this._onDragOver),f(a,"dragenter",this._onDragOver),P.push(this._onDragOver),b.store&&this.sort(b.store.get(this))}function b(a){s&&s.state!==a&&(i(s,"display",a?"none":""),!a&&s.state&&t.insertBefore(s,q),s.state=a)}function c(a,b){var c=O.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(O.call(arguments)))}}function d(a,b,c){if(a){c=c||G,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")\\s","g");do if(">*"===d&&a.parentNode===c||(""===d||a.nodeName.toUpperCase()==d)&&(!b.length||((" "+a.className+" ").match(e)||[]).length==b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function e(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function f(a,b,c){a.addEventListener(b,c,!1)}function g(a,b,c){a.removeEventListener(b,c,!1)}function h(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function i(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return G.defaultView&&G.defaultView.getComputedStyle?c=G.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function j(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function k(a){a.draggable=!1}function l(){J=!1}function m(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5&&c}function n(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function o(a){for(var b=0;a&&(a=a.previousElementSibling)&&"TEMPLATE"!==a.nodeName.toUpperCase();)b++;return b}function p(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}var q,r,s,t,u,v,w,x,y,z,A,B,C,D={},E="Sortable"+(new Date).getTime(),F=window,G=F.document,H=F.parseInt,I=!!G.createElement("div").dragDrop,J=!1,K=function(a,b,c,d,e,f){var g=G.createEvent("Event");g.initEvent(b,!0,!0),g.item=c||a,g.from=d||a,g.clone=s,g.oldIndex=e,g.newIndex=f,a.dispatchEvent(g)},L="onAdd onUpdate onRemove onStart onEnd onFilter onSort".split(" "),M=function(){},N=Math.abs,O=[].slice,P=[];return a.prototype={constructor:a,_dragStarted:function(){h(q,this.options.ghostClass,!0),a.active=this,K(t,"start",q,t,y)},_onTapStart:function(a){var b=a.type,c=a.touches&&a.touches[0],e=(c||a).target,g=e,h=this.options,i=this.el,l=h.filter;if(!("mousedown"===b&&0!==a.button||h.disabled)){if(h.handle&&(e=d(e,h.handle,i)),e=d(e,h.draggable,i),y=o(e),"function"==typeof l){if(l.call(this,a,e,this))return K(g,"filter",e,i,y),void a.preventDefault()}else if(l&&(l=l.split(",").some(function(a){return a=d(g,a.trim(),i),a?(K(a,"filter",e,i,y),!0):void 0})))return void a.preventDefault();if(e&&!q&&e.parentNode===i){"selectstart"===b&&e.dragDrop(),B=a,t=this.el,q=e,v=q.nextSibling,A=this.options.group,q.draggable=!0,h.ignore.split(",").forEach(function(a){j(e,a.trim(),k)}),c&&(B={target:e,clientX:c.clientX,clientY:c.clientY},this._onDragStart(B,!0),a.preventDefault()),f(G,"mouseup",this._onDrop),f(G,"touchend",this._onDrop),f(G,"touchcancel",this._onDrop),f(q,"dragend",this),f(t,"dragstart",this._onDragStart),f(G,"dragover",this);try{G.selection?G.selection.empty():window.getSelection().removeAllRanges()}catch(m){}}}},_emulateDragOver:function(){if(C){i(r,"display","none");var a=G.elementFromPoint(C.clientX,C.clientY),b=a,c=this.options.group.name,d=P.length;if(b)do{if((" "+b[E]+" ").indexOf(c)>-1){for(;d--;)P[d]({clientX:C.clientX,clientY:C.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);i(r,"display","")}},_onTouchMove:function(a){if(B){var b=a.touches[0],c=b.clientX-B.clientX,d=b.clientY-B.clientY,e="translate3d("+c+"px,"+d+"px,0)";C=b,i(r,"webkitTransform",e),i(r,"mozTransform",e),i(r,"msTransform",e),i(r,"transform",e),this._onDrag(b),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),"clone"==A.pull&&(s=q.cloneNode(!0),i(s,"display","none"),t.insertBefore(s,q)),b){var e,g=q.getBoundingClientRect(),h=i(q);r=q.cloneNode(!0),i(r,"top",g.top-H(h.marginTop,10)),i(r,"left",g.left-H(h.marginLeft,10)),i(r,"width",g.width),i(r,"height",g.height),i(r,"opacity","0.8"),i(r,"position","fixed"),i(r,"zIndex","100000"),t.appendChild(r),e=r.getBoundingClientRect(),i(r,"width",2*g.width-e.width),i(r,"height",2*g.height-e.height),f(G,"touchmove",this._onTouchMove),f(G,"touchend",this._onDrop),f(G,"touchcancel",this._onDrop),this._loopId=setInterval(this._emulateDragOver,150)}else c&&(c.effectAllowed="move",d.setData&&d.setData.call(this,c,q)),f(G,"drop",this);if(u=d.scroll,u===!0){u=t;do if(u.offsetWidth<u.scrollWidth||u.offsetHeight<u.scrollHeight)break;while(u=u.parentNode)}setTimeout(this._dragStarted,0)},_onDrag:p(function(a){if(t&&this.options.scroll){var b,c,d=this.options,e=d.scrollSensitivity,f=d.scrollSpeed,g=a.clientX,h=a.clientY,i=window.innerWidth,j=window.innerHeight,k=(e>=i-g)-(e>=g),l=(e>=j-h)-(e>=h);k||l?b=F:u&&(b=u,c=u.getBoundingClientRect(),k=(N(c.right-g)<=e)-(N(c.left-g)<=e),l=(N(c.bottom-h)<=e)-(N(c.top-h)<=e)),(D.vx!==k||D.vy!==l||D.el!==b)&&(D.el=b,D.vx=k,D.vy=l,clearInterval(D.pid),b&&(D.pid=setInterval(function(){b===F?F.scrollTo(F.scrollX+k*f,F.scrollY+l*f):(l&&(b.scrollTop+=l*f),k&&(b.scrollLeft+=k*f))},24)))}},30),_onDragOver:function(a){var c,e,f,g=this.el,h=this.options,j=h.group,k=j.put,n=A===j,o=h.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!h.dragoverBubble&&a.stopPropagation()),!J&&A&&(n?o||(f=!t.contains(q)):A.pull&&k&&(A.name===j.name||k.indexOf&&~k.indexOf(A.name)))&&(void 0===a.rootEl||a.rootEl===this.el)){if(c=d(a.target,h.draggable,g),e=q.getBoundingClientRect(),f)return b(!0),void(s||v?t.insertBefore(q,s||v):o||t.appendChild(q));if(0===g.children.length||g.children[0]===r||g===a.target&&(c=m(g,a))){if(c){if(c.animated)return;u=c.getBoundingClientRect()}b(n),g.appendChild(q),this._animate(e,q),c&&this._animate(u,c)}else if(c&&!c.animated&&c!==q&&void 0!==c.parentNode[E]){w!==c&&(w=c,x=i(c));var p,u=c.getBoundingClientRect(),y=u.right-u.left,z=u.bottom-u.top,B=/left|right|inline/.test(x.cssFloat+x.display),C=c.offsetWidth>q.offsetWidth,D=c.offsetHeight>q.offsetHeight,F=(B?(a.clientX-u.left)/y:(a.clientY-u.top)/z)>.5,G=c.nextElementSibling;J=!0,setTimeout(l,30),b(n),p=B?c.previousElementSibling===q&&!C||F&&C:G!==q&&!D||F&&D,p&&!G?g.appendChild(q):c.parentNode.insertBefore(q,p?G:c),this._animate(e,q),this._animate(u,c)}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();i(b,"transition","none"),i(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,i(b,"transition","all "+c+"ms"),i(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=setTimeout(function(){i(b,"transition",""),b.animated=!1},c)}},_offUpEvents:function(){g(G,"mouseup",this._onDrop),g(G,"touchmove",this._onTouchMove),g(G,"touchend",this._onDrop),g(G,"touchcancel",this._onDrop)},_onDrop:function(b){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(D.pid),g(G,"drop",this),g(G,"dragover",this),g(c,"dragstart",this._onDragStart),this._offUpEvents(),b&&(b.preventDefault(),!d.dropBubble&&b.stopPropagation(),r&&r.parentNode.removeChild(r),q&&(g(q,"dragend",this),k(q),h(q,this.options.ghostClass,!1),t!==q.parentNode?(z=o(q),K(q.parentNode,"sort",q,t,y,z),K(t,"sort",q,t,y,z),K(q,"add",q,t,y,z),K(t,"remove",q,t,y,z)):(s&&s.parentNode.removeChild(s),q.nextSibling!==v&&(z=o(q),K(t,"update",q,t,y,z),K(t,"sort",q,t,y,z))),a.active&&K(t,"end",q,t,y,z)),t=q=r=v=s=B=C=w=x=A=a.active=null,this.save())},handleEvent:function(a){var b=a.type;"dragover"===b?(this._onDrag(a),e(a)):("drop"===b||"dragend"===b)&&this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,e=0,f=c.length;f>e;e++)a=c[e],d(a,this.options.draggable,this.el)&&b.push(a.getAttribute("data-id")||n(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,e){var f=c.children[e];d(f,this.options.draggable,c)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return d(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:void(c[a]=b)},destroy:function(){var a=this.el,b=this.options;L.forEach(function(c){g(a,c.substr(2).toLowerCase(),b[c])}),g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"selectstart",this._onTapStart),g(a,"dragover",this._onDragOver),g(a,"dragenter",this._onDragOver),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),P.splice(P.indexOf(this._onDragOver),1),this._onDrop(),this.el=null}},a.utils={on:f,off:g,css:i,find:j,bind:c,is:function(a,b){return!!d(a,b,a)},throttle:p,closest:d,toggleClass:h,dispatchEvent:K,index:o},a.version="1.0.1",a.create=function(b,c){return new a(b,c)},a});

/**!
 * Sortable
 * @author  RubaXa   <trash@rubaxa.org>
 * @license MIT
 */


(function (factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        define(factory);
    }
    else if (typeof module != "undefined" && typeof module.exports != "undefined") {
        module.exports = factory();
    }
    else if (typeof Package !== "undefined") {
        Sortable = factory();  // export for Meteor.js
    }
    else {
        /* jshint sub:true */
        window["Sortable"] = factory();
    }
})(function () {
    "use strict";

    var dragEl,
        ghostEl,
        cloneEl,
        rootEl,
        nextEl,

        scrollEl,
        scrollParentEl,

        lastEl,
        lastCSS,

        oldIndex,
        newIndex,

        activeGroup,
        autoScroll = {},

        tapEvt,
        touchEvt,

        expando = 'Sortable' + (new Date).getTime(),

        win = window,
        document = win.document,
        parseInt = win.parseInt,

        supportDraggable = !!('draggable' in document.createElement('div')),


        _silent = false,

        _dispatchEvent = function (rootEl, name, targetEl, fromEl, startIndex, newIndex) {
            var evt = document.createEvent('Event');

            evt.initEvent(name, true, true);

            evt.item = targetEl || rootEl;
            evt.from = fromEl || rootEl;
            evt.clone = cloneEl;

            evt.oldIndex = startIndex;
            evt.newIndex = newIndex;

            rootEl.dispatchEvent(evt);
        },

        _customEvents = 'onAdd onUpdate onRemove onStart onEnd onFilter onSort'.split(' '),

        noop = function () {},

        abs = Math.abs,
        slice = [].slice,

        touchDragOverListeners = [],

        _autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
            // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
            if (rootEl && options.scroll) {
                var el,
                    rect,
                    sens = options.scrollSensitivity,
                    speed = options.scrollSpeed,

                    x = evt.clientX,
                    y = evt.clientY,

                    winWidth = window.innerWidth,
                    winHeight = window.innerHeight,

                    vx,
                    vy
                ;

                // Delect scrollEl
                if (scrollParentEl !== rootEl) {
                    scrollEl = options.scroll;
                    scrollParentEl = rootEl;

                    if (scrollEl === true) {
                        scrollEl = rootEl;

                        do {
                            if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
                                (scrollEl.offsetHeight < scrollEl.scrollHeight)
                            ) {
                                break;
                            }
                            /* jshint boss:true */
                        } while (scrollEl = scrollEl.parentNode);
                    }
                }

                if (scrollEl) {
                    el = scrollEl;
                    rect = scrollEl.getBoundingClientRect();
                    vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
                    vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
                }


                if (!(vx || vy)) {
                    vx = (winWidth - x <= sens) - (x <= sens);
                    vy = (winHeight - y <= sens) - (y <= sens);

                    /* jshint expr:true */
                    (vx || vy) && (el = win);
                }


                if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
                    autoScroll.el = el;
                    autoScroll.vx = vx;
                    autoScroll.vy = vy;

                    clearInterval(autoScroll.pid);

                    if (el) {
                        autoScroll.pid = setInterval(function () {
                            if (el === win) {
                                win.scrollTo(win.scrollX + vx * speed, win.scrollY + vy * speed);
                            } else {
                                vy && (el.scrollTop += vy * speed);
                                vx && (el.scrollLeft += vx * speed);
                            }
                        }, 24);
                    }
                }
            }
        }, 30)
    ;



    /**
     * @class  Sortable
     * @param  {HTMLElement}  el
     * @param  {Object}       [options]
     */
    function Sortable(el, options) {
        this.el = el; // root element
        this.options = options = (options || {});


        // Default options
        var defaults = {
            group: Math.random(),
            sort: true,
            disabled: false,
            store: null,
            handle: null,
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
            ghostClass: 'sortable-ghost',
            ignore: 'a, img',
            filter: null,
            animation: 0,
            setData: function (dataTransfer, dragEl) {
                dataTransfer.setData('Text', dragEl.textContent);
            },
            dropBubble: false,
            dragoverBubble: false
        };


        // Set default options
        for (var name in defaults) {
            !(name in options) && (options[name] = defaults[name]);
        }


        var group = options.group;

        if (!group || typeof group != 'object') {
            group = options.group = { name: group };
        }


        ['pull', 'put'].forEach(function (key) {
            if (!(key in group)) {
                group[key] = true;
            }
        });


        // Define events
        _customEvents.forEach(function (name) {
            options[name] = _bind(this, options[name] || noop);
            _on(el, name.substr(2).toLowerCase(), options[name]);
        }, this);


        // Export options
        options.groups = ' ' + group.name + (group.put.join ? ' ' + group.put.join(' ') : '') + ' ';
        el[expando] = options;


        // Bind all private methods
        for (var fn in this) {
            if (fn.charAt(0) === '_') {
                this[fn] = _bind(this, this[fn]);
            }
        }


        // Bind events
        _on(el, 'mousedown', this._onTapStart);
        _on(el, 'touchstart', this._onTapStart);

        _on(el, 'dragover', this);
        _on(el, 'dragenter', this);

        touchDragOverListeners.push(this._onDragOver);

        // Restore sorting
        options.store && this.sort(options.store.get(this));
    }


    Sortable.prototype = /** @lends Sortable.prototype */ {
        constructor: Sortable,


        _dragStarted: function () {
            if (rootEl && dragEl) {
                // Apply effect
                _toggleClass(dragEl, this.options.ghostClass, true);

                Sortable.active = this;

                // Drag start event
                _dispatchEvent(rootEl, 'start', dragEl, rootEl, oldIndex);
            }
        },


        _onTapStart: function (/**Event|TouchEvent*/evt) {
            var type = evt.type,
                touch = evt.touches && evt.touches[0],
                target = (touch || evt).target,
                originalTarget = target,
                options =  this.options,
                el = this.el,
                filter = options.filter;

            if (type === 'mousedown' && evt.button !== 0 || options.disabled) {
                return; // only left button or enabled
            }

            target = _closest(target, options.draggable, el);

            if (!target) {
                return;
            }

            // get the index of the dragged element within its parent
            oldIndex = _index(target);

            // Check filter
            if (typeof filter === 'function') {
                if (filter.call(this, evt, target, this)) {
                    _dispatchEvent(originalTarget, 'filter', target, el, oldIndex);
                    evt.preventDefault();
                    return; // cancel dnd
                }
            }
            else if (filter) {
                filter = filter.split(',').some(function (criteria) {
                    criteria = _closest(originalTarget, criteria.trim(), el);

                    if (criteria) {
                        _dispatchEvent(criteria, 'filter', target, el, oldIndex);
                        return true;
                    }
                });

                if (filter) {
                    evt.preventDefault();
                    return; // cancel dnd
                }
            }


            if (options.handle && !_closest(originalTarget, options.handle, el)) {
                return;
            }


            // Prepare `dragstart`
            if (target && !dragEl && (target.parentNode === el)) {
                tapEvt = evt;

                rootEl = this.el;
                dragEl = target;
                nextEl = dragEl.nextSibling;
                activeGroup = this.options.group;

                dragEl.draggable = true;

                // Disable "draggable"
                options.ignore.split(',').forEach(function (criteria) {
                    _find(target, criteria.trim(), _disableDraggable);
                });

                if (touch) {
                    // Touch device support
                    tapEvt = {
                        target: target,
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    };

                    this._onDragStart(tapEvt, 'touch');
                    evt.preventDefault();
                }

                _on(document, 'mouseup', this._onDrop);
                _on(document, 'touchend', this._onDrop);
                _on(document, 'touchcancel', this._onDrop);

                _on(dragEl, 'dragend', this);
                _on(rootEl, 'dragstart', this._onDragStart);

                if (!supportDraggable) {
                    this._onDragStart(tapEvt, true);
                }

                try {
                    if (document.selection) {
                        document.selection.empty();
                    } else {
                        window.getSelection().removeAllRanges();
                    }
                } catch (err) {
                }
            }
        },

        _emulateDragOver: function () {
            if (touchEvt) {
                _css(ghostEl, 'display', 'none');

                var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
                    parent = target,
                    groupName = ' ' + this.options.group.name + '',
                    i = touchDragOverListeners.length;

                if (parent) {
                    do {
                        if (parent[expando] && parent[expando].groups.indexOf(groupName) > -1) {
                            while (i--) {
                                touchDragOverListeners[i]({
                                    clientX: touchEvt.clientX,
                                    clientY: touchEvt.clientY,
                                    target: target,
                                    rootEl: parent
                                });
                            }

                            break;
                        }

                        target = parent; // store last element
                    }
                    /* jshint boss:true */
                    while (parent = parent.parentNode);
                }

                _css(ghostEl, 'display', '');
            }
        },


        _onTouchMove: function (/**TouchEvent*/evt) {
            if (tapEvt) {
                var touch = evt.touches ? evt.touches[0] : evt,
                    dx = touch.clientX - tapEvt.clientX,
                    dy = touch.clientY - tapEvt.clientY,
                    translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

                touchEvt = touch;

                _css(ghostEl, 'webkitTransform', translate3d);
                _css(ghostEl, 'mozTransform', translate3d);
                _css(ghostEl, 'msTransform', translate3d);
                _css(ghostEl, 'transform', translate3d);

                evt.preventDefault();
            }
        },


        _onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
            var dataTransfer = evt.dataTransfer,
                options = this.options;

            this._offUpEvents();

            if (activeGroup.pull == 'clone') {
                cloneEl = dragEl.cloneNode(true);
                _css(cloneEl, 'display', 'none');
                rootEl.insertBefore(cloneEl, dragEl);
            }

            if (useFallback) {
                var rect = dragEl.getBoundingClientRect(),
                    css = _css(dragEl),
                    ghostRect;

                ghostEl = dragEl.cloneNode(true);

                _css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
                _css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
                _css(ghostEl, 'width', rect.width);
                _css(ghostEl, 'height', rect.height);
                _css(ghostEl, 'opacity', '0.8');
                _css(ghostEl, 'position', 'fixed');
                _css(ghostEl, 'zIndex', '100000');

                rootEl.appendChild(ghostEl);

                // Fixing dimensions.
                ghostRect = ghostEl.getBoundingClientRect();
                _css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
                _css(ghostEl, 'height', rect.height * 2 - ghostRect.height);

                if (useFallback === 'touch') {
                    // Bind touch events
                    _on(document, 'touchmove', this._onTouchMove);
                    _on(document, 'touchend', this._onDrop);
                    _on(document, 'touchcancel', this._onDrop);
                } else {
                    // Old brwoser
                    _on(document, 'mousemove', this._onTouchMove);
                    _on(document, 'mouseup', this._onDrop);
                }

                this._loopId = setInterval(this._emulateDragOver, 150);
            }
            else {
                if (dataTransfer) {
                    dataTransfer.effectAllowed = 'move';
                    options.setData && options.setData.call(this, dataTransfer, dragEl);
                }

                _on(document, 'drop', this);
            }

            setTimeout(this._dragStarted, 0);
        },

        _onDragOver: function (/**Event*/evt) {
            var el = this.el,
                target,
                dragRect,
                revert,
                options = this.options,
                group = options.group,
                groupPut = group.put,
                isOwner = (activeGroup === group),
                canSort = options.sort;

            if (!dragEl) {
                return;
            }

            if (evt.preventDefault !== void 0) {
                evt.preventDefault();
                !options.dragoverBubble && evt.stopPropagation();
            }

            if (activeGroup && !options.disabled &&
                (isOwner
                    ? canSort || (revert = !rootEl.contains(dragEl))
                    : activeGroup.pull && groupPut && (
                        (activeGroup.name === group.name) || // by Name
                        (groupPut.indexOf && ~groupPut.indexOf(activeGroup.name)) // by Array
                    )
                ) &&
                (evt.rootEl === void 0 || evt.rootEl === this.el)
            ) {
                // Smart auto-scrolling
                _autoScroll(evt, options, this.el);

                if (_silent) {
                    return;
                }

                target = _closest(evt.target, options.draggable, el);
                dragRect = dragEl.getBoundingClientRect();


                if (revert) {
                    _cloneHide(true);

                    if (cloneEl || nextEl) {
                        rootEl.insertBefore(dragEl, cloneEl || nextEl);
                    }
                    else if (!canSort) {
                        rootEl.appendChild(dragEl);
                    }

                    return;
                }


                if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
                    (el === evt.target) && (target = _ghostInBottom(el, evt))
                ) {
                    if (target) {
                        if (target.animated) {
                            return;
                        }
                        targetRect = target.getBoundingClientRect();
                    }

                    _cloneHide(isOwner);

                    el.appendChild(dragEl);
                    this._animate(dragRect, dragEl);
                    target && this._animate(targetRect, target);
                }
                else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
                    if (lastEl !== target) {
                        lastEl = target;
                        lastCSS = _css(target);
                    }


                    var targetRect = target.getBoundingClientRect(),
                        width = targetRect.right - targetRect.left,
                        height = targetRect.bottom - targetRect.top,
                        floating = /left|right|inline/.test(lastCSS.cssFloat + lastCSS.display),
                        isWide = (target.offsetWidth > dragEl.offsetWidth),
                        isLong = (target.offsetHeight > dragEl.offsetHeight),
                        halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
                        nextSibling = target.nextElementSibling,
                        after
                    ;

                    _silent = true;
                    setTimeout(_unsilent, 30);

                    _cloneHide(isOwner);

                    if (floating) {
                        after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
                    } else {
                        after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
                    }

                    if (after && !nextSibling) {
                        el.appendChild(dragEl);
                    } else {
                        target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                    }

                    this._animate(dragRect, dragEl);
                    this._animate(targetRect, target);
                }
            }
        },

        _animate: function (prevRect, target) {
            var ms = this.options.animation;

            if (ms) {
                var currentRect = target.getBoundingClientRect();

                _css(target, 'transition', 'none');
                _css(target, 'transform', 'translate3d('
                    + (prevRect.left - currentRect.left) + 'px,'
                    + (prevRect.top - currentRect.top) + 'px,0)'
                );

                target.offsetWidth; // repaint

                _css(target, 'transition', 'all ' + ms + 'ms');
                _css(target, 'transform', 'translate3d(0,0,0)');

                clearTimeout(target.animated);
                target.animated = setTimeout(function () {
                    _css(target, 'transition', '');
                    _css(target, 'transform', '');
                    target.animated = false;
                }, ms);
            }
        },

        _offUpEvents: function () {
            _off(document, 'mouseup', this._onDrop);
            _off(document, 'touchmove', this._onTouchMove);
            _off(document, 'touchend', this._onDrop);
            _off(document, 'touchcancel', this._onDrop);
        },

        _onDrop: function (/**Event*/evt) {
            var el = this.el,
                options = this.options;

            clearInterval(this._loopId);
            clearInterval(autoScroll.pid);

            // Unbind events
            _off(document, 'drop', this);
            _off(document, 'mousemove', this._onTouchMove);
            _off(el, 'dragstart', this._onDragStart);

            this._offUpEvents();

            if (evt) {
                evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();

                ghostEl && ghostEl.parentNode.removeChild(ghostEl);

                if (dragEl) {
                    _off(dragEl, 'dragend', this);

                    _disableDraggable(dragEl);
                    _toggleClass(dragEl, this.options.ghostClass, false);

                    if (rootEl !== dragEl.parentNode) {
                        newIndex = _index(dragEl);

                        // drag from one list and drop into another
                        _dispatchEvent(dragEl.parentNode, 'sort', dragEl, rootEl, oldIndex, newIndex);
                        _dispatchEvent(rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);

                        // Add event
                        _dispatchEvent(dragEl, 'add', dragEl, rootEl, oldIndex, newIndex);

                        // Remove event
                        _dispatchEvent(rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);
                    }
                    else {
                        // Remove clone
                        cloneEl && cloneEl.parentNode.removeChild(cloneEl);

                        if (dragEl.nextSibling !== nextEl) {
                            // Get the index of the dragged element within its parent
                            newIndex = _index(dragEl);

                            // drag & drop within the same list
                            _dispatchEvent(rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
                            _dispatchEvent(rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
                        }
                    }

                    // Drag end event
                    Sortable.active && _dispatchEvent(rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);
                }

                // Nulling
                rootEl =
                dragEl =
                ghostEl =
                nextEl =
                cloneEl =

                scrollEl =
                scrollParentEl =

                tapEvt =
                touchEvt =

                lastEl =
                lastCSS =

                activeGroup =
                Sortable.active = null;

                // Save sorting
                this.save();
            }
        },


        handleEvent: function (/**Event*/evt) {
            var type = evt.type;

            if (type === 'dragover' || type === 'dragenter') {
                this._onDragOver(evt);
                _globalDragOver(evt);
            }
            else if (type === 'drop' || type === 'dragend') {
                this._onDrop(evt);
            }
        },


        /**
         * Serializes the item into an array of string.
         * @returns {String[]}
         */
        toArray: function () {
            var order = [],
                el,
                children = this.el.children,
                i = 0,
                n = children.length;

            for (; i < n; i++) {
                el = children[i];
                if (_closest(el, this.options.draggable, this.el)) {
                    order.push(el.getAttribute('data-id') || _generateId(el));
                }
            }

            return order;
        },


        /**
         * Sorts the elements according to the array.
         * @param  {String[]}  order  order of the items
         */
        sort: function (order) {
            var items = {}, rootEl = this.el;

            this.toArray().forEach(function (id, i) {
                var el = rootEl.children[i];

                if (_closest(el, this.options.draggable, rootEl)) {
                    items[id] = el;
                }
            }, this);

            order.forEach(function (id) {
                if (items[id]) {
                    rootEl.removeChild(items[id]);
                    rootEl.appendChild(items[id]);
                }
            });
        },


        /**
         * Save the current sorting
         */
        save: function () {
            var store = this.options.store;
            store && store.set(this);
        },


        /**
         * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
         * @param   {HTMLElement}  el
         * @param   {String}       [selector]  default: `options.draggable`
         * @returns {HTMLElement|null}
         */
        closest: function (el, selector) {
            return _closest(el, selector || this.options.draggable, this.el);
        },


        /**
         * Set/get option
         * @param   {string} name
         * @param   {*}      [value]
         * @returns {*}
         */
        option: function (name, value) {
            var options = this.options;

            if (value === void 0) {
                return options[name];
            } else {
                options[name] = value;
            }
        },


        /**
         * Destroy
         */
        destroy: function () {
            var el = this.el, options = this.options;

            _customEvents.forEach(function (name) {
                _off(el, name.substr(2).toLowerCase(), options[name]);
            });

            _off(el, 'mousedown', this._onTapStart);
            _off(el, 'touchstart', this._onTapStart);

            _off(el, 'dragover', this);
            _off(el, 'dragenter', this);

            //remove draggable attributes
            Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
                el.removeAttribute('draggable');
            });

            touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

            this._onDrop();

            this.el = null;
        }
    };


    function _cloneHide(state) {
        if (cloneEl && (cloneEl.state !== state)) {
            _css(cloneEl, 'display', state ? 'none' : '');
            !state && cloneEl.state && rootEl.insertBefore(cloneEl, dragEl);
            cloneEl.state = state;
        }
    }


    function _bind(ctx, fn) {
        var args = slice.call(arguments, 2);
        return  fn.bind ? fn.bind.apply(fn, [ctx].concat(args)) : function () {
            return fn.apply(ctx, args.concat(slice.call(arguments)));
        };
    }


    function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
        if (el) {
            ctx = ctx || document;
            selector = selector.split('.');

            var tag = selector.shift().toUpperCase(),
                re = new RegExp('\\s(' + selector.join('|') + ')\\s', 'g');

            do {
                if (
                    (tag === '>*' && el.parentNode === ctx) || (
                        (tag === '' || el.nodeName.toUpperCase() == tag) &&
                        (!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
                    )
                ) {
                    return el;
                }
            }
            while (el !== ctx && (el = el.parentNode));
        }

        return null;
    }


    function _globalDragOver(/**Event*/evt) {
        evt.dataTransfer.dropEffect = 'move';
        evt.preventDefault();
    }


    function _on(el, event, fn) {
        el.addEventListener(event, fn, false);
    }


    function _off(el, event, fn) {
        el.removeEventListener(event, fn, false);
    }


    function _toggleClass(el, name, state) {
        if (el) {
            if (el.classList) {
                el.classList[state ? 'add' : 'remove'](name);
            }
            else {
                var className = (' ' + el.className + ' ').replace(/\s+/g, ' ').replace(' ' + name + ' ', '');
                el.className = className + (state ? ' ' + name : '');
            }
        }
    }


    function _css(el, prop, val) {
        var style = el && el.style;

        if (style) {
            if (val === void 0) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    val = document.defaultView.getComputedStyle(el, '');
                }
                else if (el.currentStyle) {
                    val = el.currentStyle;
                }

                return prop === void 0 ? val : val[prop];
            }
            else {
                if (!(prop in style)) {
                    prop = '-webkit-' + prop;
                }

                style[prop] = val + (typeof val === 'string' ? '' : 'px');
            }
        }
    }


    function _find(ctx, tagName, iterator) {
        if (ctx) {
            var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

            if (iterator) {
                for (; i < n; i++) {
                    iterator(list[i], i);
                }
            }

            return list;
        }

        return [];
    }


    function _disableDraggable(el) {
        el.draggable = false;
    }


    function _unsilent() {
        _silent = false;
    }


    /** @returns {HTMLElement|false} */
    function _ghostInBottom(el, evt) {
        var lastEl = el.lastElementChild, rect = lastEl.getBoundingClientRect();
        return (evt.clientY - (rect.top + rect.height) > 5) && lastEl; // min delta
    }


    /**
     * Generate id
     * @param   {HTMLElement} el
     * @returns {String}
     * @private
     */
    function _generateId(el) {
        var str = el.tagName + el.className + el.src + el.href + el.textContent,
            i = str.length,
            sum = 0;

        while (i--) {
            sum += str.charCodeAt(i);
        }

        return sum.toString(36);
    }

    /**
     * Returns the index of an element within its parent
     * @param el
     * @returns {number}
     * @private
     */
    function _index(/**HTMLElement*/el) {
        var index = 0;
        while (el && (el = el.previousElementSibling)) {
            if (el.nodeName.toUpperCase() !== 'TEMPLATE') {
                index++;
            }
        }
        return index;
    }

    function _throttle(callback, ms) {
        var args, _this;

        return function () {
            if (args === void 0) {
                args = arguments;
                _this = this;

                setTimeout(function () {
                    if (args.length === 1) {
                        callback.call(_this, args[0]);
                    } else {
                        callback.apply(_this, args);
                    }

                    args = void 0;
                }, ms);
            }
        };
    }


    // Export utils
    Sortable.utils = {
        on: _on,
        off: _off,
        css: _css,
        find: _find,
        bind: _bind,
        is: function (el, selector) {
            return !!_closest(el, selector, el);
        },
        throttle: _throttle,
        closest: _closest,
        toggleClass: _toggleClass,
        dispatchEvent: _dispatchEvent,
        index: _index
    };


    Sortable.version = '1.1.1';


    /**
     * Create sortable instance
     * @param {HTMLElement}  el
     * @param {Object}      [options]
     */
    Sortable.create = function (el, options) {
        return new Sortable(el, options);
    };

    // Export
    return Sortable;
});



/*! Ply 0.5.0 - MIT | git://github.com/rubaxa/Ply.git */
!function(a){"use strict";"function"==typeof define&&define.amd?define(a):window.Ply=a()}(function(){"use strict";function a(a){if(P)return new P(a);var b=M.Deferred();return a(b.resolve,b.reject),b}function b(a){return P?P.all(a):M.when.apply(M,a)}function c(b){return a(function(a){return a(b)})}function d(a){return a&&a.then?a:c(a)}function e(a){return"function"==typeof a}function f(a,b){if(a)for(var c in a)a.hasOwnProperty(c)&&b(a[c],c,a)}function g(a){var b={};return f(a,function(a,c){b[c]=e(a)?a:a instanceof Object?g(a):a}),b}function h(a){for(var b=Array.prototype.slice,c=b.call(arguments,1),d=0,e=c.length;e>d;d++)f(c[d],function(b,c){a[c]=b});return a}function i(a,b){try{return(b||G).querySelector(a)}catch(c){return M(a,b)[0]}}function j(a,b){return a.getElementsByTagName(b)}function k(a,b){try{a&&b&&a.appendChild(b)}catch(c){}}function l(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function m(a,b,c){var d=c.handle=c.handle||function(b){b.target||(b.target=b.srcElement||G),3===b.target.nodeType&&(b.target=b.target.parentNode),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1}),b.stopPropagation||(b.stopPropagation=function(){b.cancelBubble=!0}),c.call(a,b)};a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function n(a,b,c){var d=c.handle;d&&(a.removeEventListener?a.removeEventListener(b,d,!1):a.detachEvent("on"+b,d))}function o(a){if(null==a&&(a="div"),a.appendChild)return a;if(a.skip)return G.createDocumentFragment();"string"==typeof a&&(a={tag:a});var b,c=a.children,d=R.exec(a.tag||"");return delete a.children,a.tag=d[1]||"div",a.id=a.id||(d[2]||"").substr(1),d=(d[3]||"").split("."),d[0]=a.className||"",a.className=d.join(" "),b=G.createElement(a.tag),delete a.tag,f(a,function(c,d){if(c)if("css"===d)r(b,a.css);else if("text"===d)null!=c&&k(b,G.createTextNode(c));else if("html"===d)null!=c&&(b.innerHTML=c);else if("ply"===d)b.setAttribute(L,c);else if(d in b)try{b[d]=c}catch(e){b.setAttribute(d,c)}else/^data-/.test(d)&&b.setAttribute(d,c)}),c&&c.appendChild?k(b,c):f(c,function(a,c){a&&("string"==typeof a?a={text:a}:"object"!=typeof a&&(a={}),"string"==typeof c&&(a.tag=a.tag||c),k(b,o(a)))}),b}function p(a){for(var b,c,d=j(a,"input"),e=0,f=d.length;f>e;e++)if(b=d[e],"submit"===b.type)!c&&(c=b);else if(!/hidden|check|radio/.test(b.type)&&""==b.value){c=b;break}c||(c=j(a,"button")[0]);try{c.focus()}catch(g){}}function q(b){return s(!0),a(function(a){for(var c,d=j(b,"img"),e=d.length,f=e,g=function(){if(--f<=0){for(e=d.length;e--;)c=d[e],n(c,"load",g),n(c,"error",g);s(!1),a()}};e--;)c=d[e],c.complete?f--:(m(c,"load",g),m(c,"error",g));!f&&g()})}function r(a,b,c){if(a&&a.style&&b)if(b instanceof Object)for(var d in b)r(a,d,b[d]);else{if(void 0===c)return G.defaultView&&G.defaultView.getComputedStyle?c=G.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];S[b]?S[b](a.style,c):a.style[J[b]||b]=c}}function s(a){var b=s.get();clearTimeout(s.pid),s.pid=a?H(function(){k(G.body,b)},100):H(function(){l(b)},100)}function t(a,b){return o({css:{padding:"20px 20px 40px",display:"inline-block",position:"relative",textAlign:"left",whiteSpace:"normal",verticalAlign:"middle",transform:"translate3d(0, 0, 0)"},children:b.baseHtml?[{ply:":layer",tag:".ply-layer",className:b.mod,css:h({overflow:"hidden",position:"relative",backfaceVisibility:"hidden"},b.layer),children:[b.flags.closeBtn&&{ply:":close",tag:".ply-x",text:I.cross},{tag:".ply-inside",children:a}]}]:a})}function u(a){return o({ply:":overlay",tag:".ply-overlay",css:{top:0,left:0,right:0,bottom:0,position:"fixed"},children:[{tag:"div",css:h({width:"100%",height:"100%"},a)}]})}function v(a,b,c){a.wrapEl=o({tag:"form",css:{whiteSpace:"nowrap",zIndex:b.zIndex}}),c||(a.overlayEl=u(b.overlay),a.overlayBoxEl=a.overlayEl.firstChild,k(a.wrapEl,a.overlayEl));var d=o();r(d,{height:"100%",display:"inline-block",verticalAlign:"middle"}),k(a.wrapEl,d);var e=b.el;return a.el=e&&e.cloneNode?e.cloneNode(!0):o({html:e||""}),a.layerEl=t(a.el,b),a.contentEl=w(a.layerEl),a.context=new y(a.layerEl),k(a.wrapEl,a.layerEl),a.bodyEl=b.body&&i(b.body)||G.body,a.wrapEl.tabIndex=-1,r(a.wrapEl,{top:0,left:0,right:0,bottom:0,position:"fixed",textAlign:"center",overflow:"auto",outline:0}),a}function w(a){return a.firstChild.lastChild.firstChild}function x(a,b){b=a instanceof Object?a:b||{},b.el=b.el||a;var d=this;d.cid="c"+D++,N.zIndex++,d.options=b=h({},N,b),b.flags=h({},N.flags,b.flags),v(d,b),d.setEffect(b.effect),d.fx=function(a){return!(d.fx.queue=d.fx.queue.then(a,a).then(function(){return d}))},d.fx.queue=c(),d.on("click",":overlay",function(){d.hasFlag("closeByOverlay")&&d.closeBy("overlay")}),d.on("click",":close",function(a,b){a.preventDefault(),d.closeBy("BUTTON"===b.nodeName?"cancel":"x")}),d.options.oninit(this)}function y(a){this.el=a}function z(a,b){return null==a?{skip:!0}:("string"==typeof a&&(a={text:a}),"object"==typeof a&&(a.name=a.name||b),a)}function A(a,b,c){var d,e=A[a];return e||(a=a.split(/\s+/).slice(0,-1).join(" "),e=b&&(A[a+" [name="+b.name+"]"]||A[a+" [type="+b.type+"]"])||A[a+" *"]||A[":default"]),d=o(e(b,c)),b&&b.name&&d.setAttribute(L+"-name",b.name),d.className+=" ply-ui",d}function B(b,c){B["_"+b]=c,B[b]=function(b,d){return a(function(a,e){c(b,d,a,e)}).then(function(a){return a.appendChild||(a=A(":root",a)),a})}}function C(a,b,c,d){return b.mod=a,b.effect=b.effect||"slide",b.flags=h({closeBtn:!1},b.flags),{header:c.title,content:c.form?{"dialog-form":{children:c.form}}:{el:c.text||c},ctrls:{ok:c.ok||d.ok,cancel:c.cancel===!1?null:c.cancel||d.cancel}}}var D=1,E=function(){},F=window,G=F.document,H=F.setTimeout,I={ok:"OK",cancel:"Cancel",cross:"✖"},J=function(){var a={},b=G.createElement("div").style,c="opacity transition transform perspective transformStyle transformOrigin backfaceVisibility".split(" "),d=["Webkit","Moz","O","MS"];return f(c,function(c,e){if(a[c]=c in b&&c,!a[c])for(e=0;4>e;e++){var f=d[e]+c.charAt(0).toUpperCase()+c.substr(1);if(a[c]=f in b&&f)break}}),a}(),K={esc:27},L="data-ply",M=window.jQuery||window.Zepto||window.ender||window.$,N={zIndex:1e4,layer:{},overlay:{opacity:.6,backgroundColor:"rgb(0, 0, 0)"},flags:{closeBtn:!0,bodyScroll:!1,closeByEsc:!0,closeByOverlay:!0,hideLayerInStack:!0,visibleOverlayInStack:!1},baseHtml:!0,oninit:E,onopen:E,onclose:E,ondestroy:E,onaction:E},O=window.Promise,P=window.Deferred||O,Q=c();O&&!Q.always&&(P=function(a){var b=new O(a);return b.__proto__=this.__proto__,b},P.prototype=Object.create(O.prototype),P.prototype.constructor=P,P.prototype.then=function(a){var b=O.prototype.then.call(this,a);return b.__proto__=this.__proto__,b},P.prototype.done=function(a){return this.then(a),this},P.prototype.fail=function(a){return this["catch"](a),this},P.prototype.always=function(a){return this.then(a,a),this},["all","cast","reject","resolve"].forEach(function(a){P[a]=O[a]}));var R=/^(\w+)?(#\w+)?((?:\.[\w_-]+)*)/i,S={opacity:!J.opacity&&function(a,b){a.zoom=1,a.filter="alpha(opacity="+100*b+")"}};s.get=function(){return s.el||(s.el=o({tag:".ply-global-loading",children:{".ply-loading-spinner":!0}}))},x.fn=x.prototype={constructor:x,_activate:function(){if(!this.hasFlag("bodyScroll")){var a=this.bodyEl,b=o({css:{overflow:"auto",visibility:"hidden",height:"5px"},children:[{tag:"div",css:{height:"100px"}}]});this.__overflow=r(a,"overflow"),this.__paddingRight=r(a,"paddingRight"),k(a,b),r(a,{overflow:"hidden",paddingRight:b.offsetWidth-b.firstChild.offsetWidth+"px"}),l(b)}m(this.wrapEl,"submit",this._getHandleEvent("submit"))},_deactivate:function(){this.hasFlag("bodyScroll")||r(this.bodyEl,{overflow:this.__overflow,paddingRight:this.__paddingRight}),n(this.layerEl,"submit",this._getHandleEvent("submit"))},_getHandleEvent:function(a){var b=this,c=b.__handleEvent||(b.__handleEvent={});return c[a]||(c[a]=function(c){b._handleEvent(a,c)}),c[a]},_handleEvent:function(a,b){b.preventDefault(),this.closeBy(a)},$:function(a){return M(a,this.layerEl)},find:function(a){return i(a,this.layerEl)},applyEffect:function(a,b,c){return a=this[a]||a,a.nodeType||(c=b,b=a,a=this.layerEl),c=x.effects.get(c||this.effects),x.effects.apply.call(c,a,b)},closeBy:function(a){var b=this,c={by:a,state:"submit"===a,data:this.context.toJSON(),widget:this,context:this.context},e=(this.el,this.options.onaction(c));this.__lock||(this.__lock=!0,this.el.className+=" ply-loading",d(e).done(function(a){a!==!1&&(b.result=c,b.close())}).always(function(){b.__lock=!1,b.el.className=b.el.className.replace(/\s?ply-loading/,"")}))},on:function(a,b,c){var d=this;return c||(c=b,b=":layer"),c["_"+b]=function(a){var e=a.target;do if(1===e.nodeType&&e.getAttribute(L)===b)return c.call(d,a,e);while(e!==d.wrapEl&&(e=e.parentNode))},m(d.wrapEl,a,c["_"+b]),d},off:function(a,b,c){return c||(c=b,b="layer"),n(this.wrapEl,a,c["_"+b]||E),this},hasFlag:function(a){return!!this.options.flags[a]},setEffect:function(a){return this.effects=x.effects.get(a),this},_toggleState:function(a,c){var d=this,e=a?"open":"close",f=x.stack.last;return d.visible!=a&&(d.visible=a,d[a?"_activate":"_deactivate"](),x.stack[a?"add":"remove"](d),d.fx(function(){return q(d.wrapEl).then(function(){var g=x.stack.length===(a?1:0),h=f&&f.hasFlag("hideLayerInStack"),i=g||d.hasFlag("visibleOverlayInStack");return a?(!i&&l(d.overlayBoxEl),k(d.bodyEl,d.wrapEl),d.wrapEl.focus(),p(d.layerEl),h&&f.applyEffect("close.layer",c).then(function(){l(f.layerEl)})):(f=x.stack.last)&&(k(f.wrapEl,f.layerEl),f.hasFlag("hideLayerInStack")&&f.applyEffect("open.layer",c).then(function(){p(f.el)})),b([d.applyEffect(e+".layer",c),i&&d.applyEffect("overlayEl",e+".overlay",c)]).then(function(){a||(l(d.wrapEl),k(d.overlayEl,d.overlayBoxEl)),d.options["on"+e](d)})})})),d.fx.queue},open:function(a){return this.result=null,this._toggleState(!0,a)},close:function(a){return this._toggleState(!1,a)},_swap:function(a,c,d,e,f){var g=this;return g.visible?g.fx(function(){return q(c).then(function(){return e(),b([g.applyEffect(a,"close.layer",d),g.applyEffect(c,"open.layer",d)]).then(function(){l(a),f(),g.wrapEl.focus(),p(c)})})}):f(),g.fx.queue},swap:function(a,b){a=h({},this.options,a);var c=this,d=v({},a,!0),e=b||a.effect?x.effects.get(b||a.effect):c.effects,f=c.layerEl,g=d.layerEl;return c._swap(f,g,e,function(){k(c.bodyEl,c.wrapEl),k(c.bodyEl,d.wrapEl)},function(){l(d.wrapEl),k(c.wrapEl,g),c.el=d.el,c.layerEl=g,c.contentEl=w(g),c.context.el=g})},innerSwap:function(a,b){a=h({},this.options,a);var c=this,d=v({},a,!0),e=b||a.effect?x.effects.get(b||a.effect):c.effects,f=i(".ply-inside",d.layerEl),g=i(".ply-inside",c.layerEl);return c._swap(g,f,e,function(){r(g,{width:g.offsetWidth+"px",position:"absolute"}),k(g.parentNode,f)},E)},destroy:function(){l(this.wrapEl),this._deactivate(),x.stack.remove(this),this.visible=!1,this.options.ondestroy(this)}};var T=[],U=T.push,V=T.splice;return x.stack={_idx:{},last:null,length:0,_pop:function(a){var b=x.stack.last;a.keyCode===K.esc&&b.hasFlag("closeByEsc")&&b.closeBy("esc")},add:function(a){var b=U.call(this,a);this.last=a,this._idx[a.cid]=b-1,1===b&&m(G,"keyup",this._pop)},remove:function(a){var b=this._idx[a.cid];b>=0&&(V.call(this,b,1),delete this._idx[a.cid],this.last=this[this.length-1],this.last||n(G,"keyup",this._pop))}},x.effects={defaults:{duration:300,open:{layer:null,overlay:null},close:{layer:null,overlay:null}},setup:function(a){this.defaults=this.get(a)},set:function(a){h(this,a)},get:function(a){function b(a){var b=/^([\w_-]+)(?::(\d+%?))?(\[[^\]]+\])?/.exec(a)||[];return{name:b[1]||a,duration:b[2]||null,args:JSON.parse(b[3]||"null")||{}}}function c(c,d,e){var f=b(d),g=c[f.name]||e||{},h=f.duration||g.duration||c.duration||a.duration;return"string"==typeof g&&(g=b(g),delete g.args),/%/.test(g.duration)&&(g.duration=parseInt(g.duration,10)/100*h),g.duration=0|(g.duration||h),g}var d=g(this.defaults);if("string"==typeof a){var e=b(a);a=g(this[e.name]||{open:{},close:{}}),a.duration=e.duration||a.duration,a.open.args=e.args[0],a.close.args=e.args[1]}else if(a instanceof Array){var f=b(a[0]),h=b(a[1]),i=this[f.name],j=this[h.name];a={open:g(i&&i.open||{layer:a[0],overlay:a[0]}),close:g(j&&j.close||{layer:a[1],overlay:a[1]})},a.open.args=f.args[0],a.close.args=h.args[0]}else a instanceof Object||(a={});a.duration=0|(a.duration||d.duration);for(var k in{open:0,close:0}){var l=a[k]||d[k]||{};"string"==typeof l&&(l={layer:l}),l.layer=c(l,"layer",d[k].layer),l.overlay=c(l,"overlay",d[k].overlay),void 0===l.args&&delete l.args,a[k]=l}return a},apply:function(b,d){d=d.split(".");var h,i,j=this[d[0]],k=b.firstChild,l=[b.getAttribute("style"),k&&k.getAttribute("style")];return J.transition&&j&&(i=j[d[1]])&&(h=x.effects[i.name])&&(h.to||h.from)?(h=g(h),r(b,"transition","none"),r(k,"transition","none"),f(h.to,function(a,c,d){"&"===a&&(d[c]=r(b,c))}),e(h.from)?h.from(b,j.args):h.from&&r(b,h.from),a(function(a){h.width=b.offsetWidth,r(b,"transition","all "+i.duration+"ms"),r(k,"transition","all "+i.duration+"ms"),e(h.to)?h.to(b,j.args):r(b,h.to),H(a,i.duration)}).then(function(){b.setAttribute("style",l[0]),k&&k.setAttribute("style",l[1])})):c()}},x.effects.set({fade:{open:{layer:"fade-in:80%",overlay:"fade-in:100%"},close:{layer:"fade-out:60%",overlay:"fade-out:60%"}},scale:{open:{layer:"scale-in",overlay:"fade-in"},close:{layer:"scale-out",overlay:"fade-out"}},fall:{open:{layer:"fall-in",overlay:"fade-in"},close:{layer:"fall-out",overlay:"fade-out"}},slide:{open:{layer:"slide-in",overlay:"fade-in"},close:{layer:"slide-out",overlay:"fade-out"}},"3d-flip":{open:{layer:"3d-flip-in",overlay:"fade-in"},close:{layer:"3d-flip-out",overlay:"fade-out"}},"3d-sign":{open:{layer:"3d-sign-in",overlay:"fade-in"},close:{layer:"3d-sign-out",overlay:"fade-out"}},inner:{open:{layer:"inner-in"},close:{layer:"inner-out"}},"fade-in":{from:{opacity:0},to:{opacity:"&"}},"fade-out":{to:{opacity:0}},"slide-in":{from:{opacity:0,transform:"translateY(20%)"},to:{opacity:"&",transform:"translateY(0)"}},"slide-out":{to:{opacity:0,transform:"translateY(20%)"}},"fall-in":{from:{opacity:0,transform:"scale(1.3)"},to:{opacity:"&",transform:"scale(1)"}},"fall-out":{to:{opacity:0,transform:"scale(1.3)"}},"scale-in":{from:{opacity:0,transform:"scale(0.7)"},to:{opacity:"&",transform:"scale(1)"}},"scale-out":{to:{opacity:0,transform:"scale(0.7)"}},rotate3d:function(a,b,c,d,e){r(a,{perspective:"1300px"}),r(a.firstChild,{opacity:b,transform:"rotate"+c+"("+d+"deg)",transformStyle:"preserve-3d",transformOrigin:e?"50% 0":"50%"})},"3d-sign-in":{from:function(a){x.effects.rotate3d(a,0,"X",-60,"50% 0")},to:function(a){r(a.firstChild,{opacity:1,transform:"rotateX(0)"})}},"3d-sign-out":{from:function(a){x.effects.rotate3d(a,1,"X",0,"50% 0")},to:function(a){r(a.firstChild,{opacity:0,transform:"rotateX(-60deg)"})}},"3d-flip-in":{from:function(a,b){x.effects.rotate3d(a,0,"Y",b||-70)},to:function(a){r(a.firstChild,{opacity:1,transform:"rotateY(0)"})}},"3d-flip-out":{from:function(a){x.effects.rotate3d(a,1,"Y",0)},to:function(a,b){r(a.firstChild,{opacity:0,transform:"rotateY("+(b||70)+"deg)"})}},"inner-in":{from:function(a){r(a,"transform","translateX(100%)")},to:function(a){r(a,"transform","translateX(0%)")}},"inner-out":{from:function(a){r(a,"transform","translateX(0%)")},to:function(a){r(a,"transform","translateX(-100%)")}}}),y.fn=y.prototype={constructor:y,getEl:function(a){return this.el?i("["+L+'-name="'+a+'"]',this.el):void 0},val:function(a,b){var c="string"==typeof a?this.getEl(a):a;return c&&null==c.value&&(c=j(c,"input")[0]||j(c,"textarea")[0]||j(c,"select")[0]),c&&null!=b&&(c.value=b),c&&c.value||""},toJSON:function(){for(var a,b=this.el.querySelectorAll("["+L+"-name]"),c={},d=b.length;d--;)a=b[d],c[a.getAttribute(L+"-name")]=this.val(a);return c}},A.factory=function(a,b,c){A[a.replace(/^\s+|\s+$/g,"").replace(/\s+/g," ")]=function(d,e){var g=G.createDocumentFragment();if(null!=d||":root"===a){d=c?d:z(d),f(c?d:d.children,function(b,c){var d=((e||a)+" "+c).replace(/^:\w+\s+/,""),f=A(d,z(b,c),d);k(g,f)}),c||delete d.children;var i=b(d,g);return i.appendChild||h(i,d),i}return g}},A.factory(":default",function(a,b){return a.children=b,a}),A.factory(":root",function(a){return{tag:".ply-form",className:a.mod,children:[A(":header",a.header),A(":content",a.content),a.ctrls&&A(":default",{tag:"div.ply-footer",children:a.ctrls})]}}),A.factory(":header",function(a,b){return{tag:".ply-header",text:a.text,children:b}}),A.factory(":content",function(a,b){return{tag:".ply-content",children:b}},!0),A.factory("ok",function(a){return{ply:":ok",tag:"button.ply-ctrl.ply-ok",text:a===!0?I.ok:a}}),A.factory("cancel",function(a){return{ply:":close",tag:"button.ply-ctrl.ply-cancel",type:"reset",text:a===!0?I.cancel:a}}),B.use=function(a,b,c,d,e){B["_"+a](b,c,d,e)},B("default",function(a,b,c){c(b||{})}),B("base",function(a,b,c){c(C("base",a,b))}),B("alert",function(a,b,c){c(C("alert",a,b,{ok:!0}))}),B("confirm",function(a,b,c){c(C("confirm",a,b,{ok:!0,cancel:!0}))}),B("prompt",function(a,b,c){c(C("prompt",a,b,{ok:!0,cancel:!0}))}),A.factory("dialog-form *",function(a){return{tag:"input.ply-input",type:a.type||"text",name:a.name,value:a.value,required:!0,placeholder:a.hint||a.text}}),x.create=function(a,b,c){c||(c=b,b={});var d=B[a]||B["default"];return d(b,c).then(function(a){return new x(h(b,{el:a}))})},x.open=function(a,b,c){return x.create(a,b,c).then(function(a){return a.open()})},x.dialog=function(b,c,d){return b instanceof Object?(c=c||{},a(function(a,d){var e,g,i,j=c.initState,k=b,l={},m=function(a,b){(c.progress||E)(h({name:e.$name,index:e.$index,length:o,stack:k,current:e,widget:b},a),l)},n=function(a,b,c){var d=JSON.parse(JSON.stringify(a.data));e=a,i=!0,(a.prepare||E)(d,l),x.create(a.ui||"alert",a.options||{},d).then(function(d){var e;g?e=g[/^inner/.test(b)?"innerSwap":"swap"](d,b):(g=d,e=g.open()),e.then(function(){l[a.$name].el=g.layerEl,i=!1}),c(g)})},o=0;f(k,function(a,b){j=j||b,a.effects=a.effects||{},a.$name=b,a.$index=o++,l[b]=new x.Context}),k.$length=o,n(k[j],null,function(b){m({},b),g.options.onaction=function(b){if(i)return!1;var c=b.state||"next"===e.back,f=k[e[c?"next":"back"]];return f?(n(f,e[c?"nextEffect":"backEffect"],function(a){m(b,a)}),!1):void(b.state?a:d)(b,l)}})})):(d||(d=c||{},c={}),x.open(b,c,d).then(function(b){return a(function(a,c){b.options.onclose=function(){(b.result.state?a:c)(b.result)}})}))},x.ui=A,x.factory=B,x.lang=I,x.css=r,x.cssHooks=S,x.keys=K,x.noop=E,x.each=f,x.extend=h,x.promise=a,x.Promise=P,x.support=J,x.defaults=N,x.attrName=L,x.Context=y,x.dom={build:o,append:k,remove:l,addEvent:m,removeEvent:n},x.version="0.5.0",x});


/**
 * @author RubaXa <trash@rubaxa.org>
 * @licence MIT
 */
(function (factory) {
    'use strict';

    if (window.angular && window.Sortable) {
        factory(angular, Sortable);
    }
    else if (typeof define === 'function' && define.amd) {
        define(['angular', './Sortable'], factory);
    }
})(function (angular, Sortable) {
    'use strict';


    /**
     * @typedef   {Object}        ngSortEvent
     * @property  {*}             model      List item
     * @property  {Object|Array}  models     List of items
     * @property  {number}        oldIndex   before sort
     * @property  {number}        newIndex   after sort
     */


    angular.module('ng-sortable', [])
        .constant('$version', '0.3.5')
        .directive('ngSortable', ['$parse', function ($parse) {
            var removed,
                nextSibling;

            function getSource(el) {
                var scope = angular.element(el).scope();
                var ngRepeat = [].filter.call(el.childNodes, function (node) {
                    return (
                            (node.nodeType === 8) &&
                            (node.nodeValue.indexOf('ngRepeat:') !== -1)
                        );
                })[0];

                if (!ngRepeat) {
                    // Without ng-repeat
                    return null;
                }

                // tests: http://jsbin.com/kosubutilo/1/edit?js,output
                ngRepeat = ngRepeat.nodeValue.match(/ngRepeat:\s*(?:\(.*?,\s*)?([^\s)]+)[\s)]+in\s+([^\s|]+)/);

                var itemExpr = $parse(ngRepeat[1]);
                var itemsExpr = $parse(ngRepeat[2]);

                return {
                    item: function (el) {
                        return itemExpr(angular.element(el).scope());
                    },
                    items: function () {
                        return itemsExpr(scope);
                    }
                };
            }


            // Export
            return {
                restrict: 'AC',
                link: function (scope, $el, attrs) {
                    var el = $el[0],
                        ngSortable = attrs.ngSortable,
                        options = scope.$eval(ngSortable) || {},
                        source = getSource(el),
                        sortable
                    ;


                    function _emitEvent(/**Event*/evt, /*Mixed*/item) {
                        var name = 'on' + evt.type.charAt(0).toUpperCase() + evt.type.substr(1);

                        /* jshint expr:true */
                        options[name] && options[name]({
                            model: item,
                            models: source && source.items(),
                            oldIndex: evt.oldIndex,
                            newIndex: evt.newIndex
                        });
                    }


                    function _sync(/**Event*/evt) {
                        if (!source) {
                            // Without ng-repeat
                            return;
                        }

                        var oldIndex = evt.oldIndex,
                            newIndex = evt.newIndex,
                            items = source.items();

                        if (el !== evt.from) {
                            var prevSource = getSource(evt.from),
                                prevItems = prevSource.items();

                            oldIndex = prevItems.indexOf(prevSource.item(evt.item));
                            removed = prevItems[oldIndex];

                            if (evt.clone) {
                                evt.from.removeChild(evt.clone);
                                removed = angular.copy(removed);
                            }
                            else {
                                prevItems.splice(oldIndex, 1);
                            }

                            items.splice(newIndex, 0, removed);

                            evt.from.insertBefore(evt.item, nextSibling); // revert element
                        }
                        else {
                            items.splice(newIndex, 0, items.splice(oldIndex, 1)[0]);
                        }

                        scope.$apply();
                    }


                    sortable = Sortable.create(el, Object.keys(options).reduce(function (opts, name) {
                        opts[name] = opts[name] || options[name];
                        return opts;
                    }, {
                        onStart: function (/**Event*/evt) {
                            nextSibling = evt.item.nextSibling;
                            _emitEvent(evt);
                            scope.$apply();
                        },
                        onEnd: function (/**Event*/evt) {
                            _emitEvent(evt, removed);
                            scope.$apply();
                        },
                        onAdd: function (/**Event*/evt) {
                            _sync(evt);
                            _emitEvent(evt, removed);
                            scope.$apply();
                        },
                        onUpdate: function (/**Event*/evt) {
                            _sync(evt);
                            _emitEvent(evt, source && source.item(evt.item));
                        },
                        onRemove: function (/**Event*/evt) {
                            _emitEvent(evt, removed);
                        },
                        onSort: function (/**Event*/evt) {
                            _emitEvent(evt, source && source.item(evt.item));
                        }
                    }));

                    $el.on('$destroy', function () {
                        sortable.destroy();
                        sortable = null;
                        nextSibling = null;
                    });

                    if (ngSortable && !/{|}/.test(ngSortable)) { // todo: ugly
                        angular.forEach(['sort', 'disabled', 'draggable', 'handle', 'animation'], function (name) {
                            scope.$watch(ngSortable + '.' + name, function (value) {
                                if (value !== void 0) {
                                    options[name] = value;
                                    sortable.option(name, value);
                                }
                            });
                        });
                    }
                }
            };
        }]);
});