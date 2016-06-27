///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module my.app {
    import ActionBarActivity = android.app.ActionBarActivity;
    import Bundle = android.os.Bundle;

    export class Page2Activity extends ActionBarActivity{

        protected onCreate(savedInstanceState?:Bundle):void {
            super.onCreate(savedInstanceState);

            this.setTitle('Page2');

        }
    }
}