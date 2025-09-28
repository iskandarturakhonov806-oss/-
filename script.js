// Скриптҳои пурраи Google
(function(){
    var _g = {
        kEI: 'wOTOaNGMGMzJwN4P0d7KyQE',
        kEXPI: '31',
        kBL: 'Mwtx',
        kOPI: 89978449
    };
    
    (function(){
        var a;
        ((a = window.google) == null ? 0 : a.stvsc) ? google.kEI = _g.kEI : window.google = _g;
    }).call(this);
})();

(function(){
    google.sn = 'webhp';
    google.kHL = 'tg';
})();

// Функсияҳои асосии Google
(function(){
    var g = this || self;
    function k() {
        return window.google && window.google.kOPI || null;
    }
    
    var l, m = [];
    function n(a) {
        for(var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));) a = a.parentNode;
        return b || l;
    }
    
    // ... дигар функсияҳо
})();

// Функсияҳои иловагии Google
(function(){
    google.y = {};
    google.sy = {};
    
    function e(a, b, c) {
        if(a) var d = a.id;
        else {
            do d = Math.random(); while(c[d]);
        }
        c[d] = [a, b];
    }
    
    var f;
    (f = google).x || (f.x = function(a, b) {
        e(a, b, google.y);
    });
    
    // ... дигар функсияҳо
})();

// Функсияҳои event handling
(function(){
    document.documentElement.addEventListener("submit", function(b) {
        var a;
        if(a = b.target) {
            var c = a.getAttribute("data-submitfalse");
            a = c === "1" || c === "q" && !a.elements.q.value ? !0 : !1;
        } else a = !1;
        a && (b.preventDefault(), b.stopPropagation());
    }, !0);

    // ... дигар event handlers
})();

// Охири JavaScript
