///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module my.app {
    import Activity = android.app.Activity;
    import ActionBarActivity = android.app.ActionBarActivity;

    export class MainActivity extends Activity{

        protected onCreate(savedInstanceState?:android.os.Bundle):void {
            super.onCreate(savedInstanceState);

            this.setContentView(R.layout.activity_main);
        }
    }
}