if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class NavBarItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__navBarItem = new ObservedPropertyObjectPU({
            order: '01',
            title: '准备与学习'
        }, this, "navBarItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.navBarItem !== undefined) {
            this.navBarItem = params.navBarItem;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__navBarItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__navBarItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get navBarItem() {
        return this.__navBarItem.get();
    }
    set navBarItem(newValue) {
        this.__navBarItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/map/src/main/ets/view/NavBarItem.ets(13:5)", "map");
            Row.width('100%');
            Row.height(48);
            Row.borderRadius(16);
            Row.alignItems(VerticalAlign.Center);
            Row.padding({ left: 12, right: 12 });
            Row.backgroundColor('#F1F3F5');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.navBarItem.order);
            Text.debugLine("features/map/src/main/ets/view/NavBarItem.ets(14:7)", "map");
            Text.margin({ right: 6 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(21);
            Text.fontColor('#182431');
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(22);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.navBarItem.title);
            Text.debugLine("features/map/src/main/ets/view/NavBarItem.ets(22:7)", "map");
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(16);
            Text.fontColor('#182431');
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(22);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/map/src/main/ets/view/NavBarItem.ets(29:7)", "map");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331652, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "map" });
            Image.debugLine("features/map/src/main/ets/view/NavBarItem.ets(30:7)", "map");
            Image.width(12);
            Image.height(24);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=NavBarItem.js.map