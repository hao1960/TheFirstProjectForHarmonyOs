if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
//类型与图标映射
const TypeMapIcon = {
    '指南': 'app.media.ic_guide',
    '准备': 'app.media.ic_prepare',
    '学习与获取证书': 'app.media.ic_medals',
    '视频教程': 'app.media.ic_video',
};
export class KnowledgeMapContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__section = new SynchedPropertyObjectOneWayPU(params.section, this, "section");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
        this.__section.reset(params.section);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__section.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__section.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get section() {
        return this.__section.get();
    }
    set section(newValue) {
        this.__section.set(newValue);
    }
    //区域3：builder自定义函数
    KnowledgeBlockLine(knowledgeBaseItem, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(55:5)", "map");
            Row.width('100%');
            Row.height(64);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //显示图标
            Image.create({ "id": -1, "type": -1, params: [TypeMapIcon[knowledgeBaseItem.type]], "bundleName": "com.huawei.quickstart", "moduleName": "map" });
            Image.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(57:7)", "map");
            //显示图标
            Image.width(20);
            //显示图标
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(61:7)", "map");
            //标题
            Column.alignItems(HorizontalAlign.Start);
            //标题
            Column.margin({ left: 18 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(knowledgeBaseItem.title);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(62:9)", "map");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(16);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //类型
            Text.create(knowledgeBaseItem.type);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(67:9)", "map");
            //类型
            Text.fontFamily('HarmonyHeiTi');
            //类型
            Text.fontSize(14);
            //类型
            Text.fontWeight(400);
        }, Text);
        //类型
        Text.pop();
        //标题
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(74:7)", "map");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //箭头图标
            Image.create({ "id": 50331652, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "map" });
            Image.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(76:7)", "map");
            //箭头图标
            Image.width(12);
            //箭头图标
            Image.height(24);
        }, Image);
        Row.pop();
    }
    //区域4
    KnowledgeBlock(material, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(87:5)", "map");
            Column.width('100%');
            Column.margin({ top: 28 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //副标题
            Text.create(material.subtitle);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(89:7)", "map");
            //副标题
            Text.fontFamily('HarmonyHeiTi-Medium');
            //副标题
            Text.fontSize(14);
            //副标题
            Text.fontWeight(500);
            //副标题
            Text.margin({ bottom: 8 });
        }, Text);
        //副标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 12 });
            List.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(94:7)", "map");
            List.backgroundColor(Color.White);
            List.borderRadius(16);
            List.padding({ left: 12, right: 12 });
            List.divider({
                strokeWidth: 0.5,
                startMargin: 38,
                endMargin: 0,
                color: '#F2F2F2'
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(96:11)", "map");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.KnowledgeBlockLine.bind(this)(item);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, material.knowledgeBase, forEachItemGenFunction, (item, index) => item.title, true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(116:5)", "map");
            Scroll.align(Alignment.TopStart);
            Scroll.constraintSize({ minHeight: '100%' });
            Scroll.edgeEffect(EdgeEffect.Spring);
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Auto);
            Scroll.backgroundColor('#F1F3F5');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(117:7)", "map");
            Column.alignItems(HorizontalAlign.Start);
            Column.padding({
                top: 12,
                left: 16,
                bottom: 12,
                right: 16
            });
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.section?.title);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(118:9)", "map");
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(20);
            Text.fontWeight(700);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.section?.brief);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeContent.ets(123:9)", "map");
            Text.fontFamily('HarmonyHeiTi');
            Text.fontSize(12);
            Text.fontColor('rgba(0,0,0,0,60)');
            Text.textAlign(TextAlign.JUSTIFY);
            Text.fontWeight(400);
            Text.margin({ top: 12 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //循环渲染区域3
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const material = _item;
                this.KnowledgeBlock.bind(this)(material);
            };
            this.forEachUpdateFunction(elmtId, this.section?.materials, forEachItemGenFunction, (material, index) => material.subtitle, false, true);
        }, ForEach);
        //循环渲染区域3
        ForEach.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=KnowledgeContent.js.map