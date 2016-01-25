///<reference path="../../androidui-sdk/android-ui.d.ts"/>
module my.app.R {
    const _layout_data = {
        "activity_main": "<FrameLayout xmlns=\"android\" xmlns:android=\"http://schemas.android.com/apk/res/android\">\n    <TextView\n            android:id=\"textView\"\n            android:text=\"Hello world\"\n            android:gravity=\"center\"\n            android:textSize=\"20sp\"\n    />\n</FrameLayout>"
};
    const _tempDiv = document.createElement('div');

    export class layout{
        static getLayoutData(layoutRef:string):HTMLElement{
            if(!layoutRef) return null;
            layoutRef = layoutRef.replace('/', '.').split('.').pop();
            if(!_layout_data[layoutRef]) return null;
            _tempDiv.innerHTML = _layout_data[layoutRef];
            let data = <HTMLElement>_tempDiv.firstElementChild;
            _tempDiv.removeChild(data);
            return data;
        }
        
        static activity_main = '@layout/activity_main';
    }
    android.content.res.Resources.buildLayoutFinder = (refString:string)=>{
        return layout.getLayoutData(refString)
    }
}