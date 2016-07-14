///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R.ts"/>

module my.app {
    import ActionBarActivity = android.app.ActionBarActivity;
    import View = android.view.View;
    import Bundle = android.os.Bundle;

    export class MainActivity extends ActionBarActivity{

        protected onCreate(savedInstanceState?:Bundle):void {
            super.onCreate(savedInstanceState);

            this.setContentView(R.layout.activity_main);
        }
    }
}