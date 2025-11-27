import {webview} from '@kit.ArkWeb';
@Preview
@Component
export struct CourseLearning{
  private webviewController:webview.WebviewController = new webview.WebviewController();
  build(){
    Column(){
      //测试：src:'http://www.huawei.com'
      Web({src:$rawfile('course_learning/index.html'),controller:this.webviewController})
        .domStorageAccess(true)
    }
  }
}