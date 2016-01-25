var my;
(function (my) {
    var app;
    (function (app) {
        var R;
        (function (R) {
            R.id = {};
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
                "activity_main": "<FrameLayout xmlns=\"android\" xmlns:android=\"http://schemas.android.com/apk/res/android\">\n    <TextView\n            android:id=\"textView\"\n            android:text=\"Hello world\"\n            android:gravity=\"center\"\n            android:textSize=\"20sp\"\n    />\n</FrameLayout>"
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