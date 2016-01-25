///<reference path="../../androidui-sdk/android-ui.d.ts"/>
module my.app.R {
    const _layout_data = {
        "activity_main": "<framelayout>\n    <textview android:text=\"Hello world\" android:gravity=\"center\" android:textSize=\"20sp\" id=\"textView\"></textview>\n</framelayout>"
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