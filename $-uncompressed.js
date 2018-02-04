(function() {
    Element.prototype.$ = $;
    Window.prototype.isWindow = true;
    function $(e, f) {
        if(typeof e=="object"){
            return e;
        }
        var a;
        if (f == "debug" || f == "debugger") debugger;
        if (e.substring(0, 1) == "<") {
            var b = document.createElement('div');
            b.innerHTML = e;
            a = b.children;
        } else {
            if (this.isWindow) {
                a = document.querySelectorAll(e);
            } else {
                a = this.querySelectorAll(e);
            }
        }

        if (!f) { //default
            if (a.length == 1) {
                a = a[0];
            } else if (a.length == 0) {
                a = null;
            } else if (a.length < 1) {} else {
                return a;
            }
        } else if (f == 1 || f == "first" || f == "element") { //get a single element
            a = a[0];
        } else if (f == "last") { //last
            a = a[a.length - 1];
        } else if (f == "all" || f == 2 || f == "array") { //array
            if (e.substring(0, 1) == "#") {

            }
        } else { //default
            if (a.length == 1) {
                a = a[0];
            } else if (a.length == 0) {
                a = null;
            } else if (a.length < 1) {} else {
                return a;
            }
        }

        if (a && a.length) {
            a = [].slice.call(a);
        }

        return a;
    }
    window.$ = $;
}());
