///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R.ts"/>

module my.app {
    import Activity = android.app.Activity;
    import Bundle = android.os.Bundle;

    export class MainActivity extends Activity{

        protected onCreate(savedInstanceState?:Bundle):void {
            super.onCreate(savedInstanceState);

            this.setContentView(R.layout.activity_main);
        }
    }
}