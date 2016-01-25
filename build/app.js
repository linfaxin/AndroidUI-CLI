var my;
(function (my) {
    var app;
    (function (app) {
        var R;
        (function (R) {
            R.id = {
                "textView": "textView"
            };
        })(R = app.R || (app.R = {}));
    })(app = my.app || (my.app = {}));
})(my || (my = {}));
var my;
(function (my) {
    var app;
    (function (app) {
        var R;
        (function (R) {
            const _layout_data = {
                "activity_main": "<framelayout>\n    <textview android:text=\"Hello world\" android:gravity=\"center\" android:textSize=\"20sp\" id=\"textView\"></textview>\n</framelayout>"
            };
            const _tempDiv = document.createElement('div');
            class layout {
                static getLayoutData(layoutRef) {
                    if (!layoutRef)
                        return null;
                    layoutRef = layoutRef.replace('/', '.').split('.').pop();
                    if (!_layout_data[layoutRef])
                        return null;
                    _tempDiv.innerHTML = _layout_data[layoutRef];
                    let data = _tempDiv.firstElementChild;
                    _tempDiv.removeChild(data);
                    return data;
                }
            }
            layout.activity_main = '@layout/activity_main';
            R.layout = layout;
            android.content.res.Resources.buildLayoutFinder = (refString) => {
                return layout.getLayoutData(refString);
            };
        })(R = app.R || (app.R = {}));
    })(app = my.app || (my.app = {}));
})(my || (my = {}));
var my;
(function (my) {
    var app;
    (function (app) {
        var Activity = android.app.Activity;
        class MainActivity extends Activity {
            onCreate(savedInstanceState) {
                super.onCreate(savedInstanceState);
                this.setContentView(app.R.layout.activity_main);
            }
        }
        app.MainActivity = MainActivity;
    })(app = my.app || (my.app = {}));
})(my || (my = {}));
//# sourceMappingURL=app.js.map