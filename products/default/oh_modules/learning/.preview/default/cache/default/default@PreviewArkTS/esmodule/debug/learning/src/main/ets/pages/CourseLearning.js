if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import webview from '@ohos:web.webview';
export class CourseLearning extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.webviewController = new webview.WebviewController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.webviewController !== undefined) {
            this.webviewController = params.webviewController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/learning/src/main/ets/pages/CourseLearning.ets(7:5)", "learning");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //测试：src:'http://www.huawei.com'
            Web.create({ src: { "id": 0, "type": 30000, params: ['course_learning/index.html'], "bundleName": "com.huawei.quickstart", "moduleName": "learning" }, controller: this.webviewController });
            Web.debugLine("features/learning/src/main/ets/pages/CourseLearning.ets(9:7)", "learning");
            //测试：src:'http://www.huawei.com'
            Web.domStorageAccess(true);
        }, Web);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "CourseLearning", new CourseLearning(undefined, {}));
    previewComponent();
}
else {
}
//# sourceMappingURL=CourseLearning.js.map