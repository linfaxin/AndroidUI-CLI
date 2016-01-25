"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
            var _layout_data = {
                "activity_main": "<FrameLayout xmlns=\"android\" xmlns:android=\"http://schemas.android.com/apk/res/android\">\n    <TextView\n            android:id=\"textView\"\n            android:text=\"Hello world\"\n            android:gravity=\"center\"\n            android:textSize=\"20sp\"\n    />\n</FrameLayout>"
            };
            var _tempDiv = document.createElement('div');

            var layout = function () {
                function layout() {
                    _classCallCheck(this, layout);
                }

                _createClass(layout, null, [{
                    key: "getLayoutData",
                    value: function getLayoutData(layoutRef) {
                        if (!layoutRef) return null;
                        layoutRef = layoutRef.replace('/', '.').split('.').pop();
                        if (!_layout_data[layoutRef]) return null;
                        _tempDiv.innerHTML = _layout_data[layoutRef];
                        var data = _tempDiv.firstElementChild;
                        _tempDiv.removeChild(data);
                        return data;
                    }
                }]);

                return layout;
            }();

            layout.activity_main = '@layout/activity_main';
            R.layout = layout;
            android.content.res.Resources.buildLayoutFinder = function (refString) {
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

        var MainActivity = function (_Activity) {
            _inherits(MainActivity, _Activity);

            function MainActivity() {
                _classCallCheck(this, MainActivity);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(MainActivity).apply(this, arguments));
            }

            _createClass(MainActivity, [{
                key: "onCreate",
                value: function onCreate(savedInstanceState) {
                    _get(Object.getPrototypeOf(MainActivity.prototype), "onCreate", this).call(this, savedInstanceState);
                    this.setContentView(app.R.layout.activity_main);
                }
            }]);

            return MainActivity;
        }(Activity);

        app.MainActivity = MainActivity;
    })(app = my.app || (my.app = {}));
})(my || (my = {}));
//# sourceMappingURL=app.js.map

//# sourceMappingURL=app.es5.js.map