if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    currentIndex?: number;
    tabsController?: TabsController;
}
import { QuickStartPage } from "@bundle:com.huawei.quickstart/default@quickstart/Index";
import { CourseLearning } from "@bundle:com.huawei.quickstart/default@learning/Index";
import { KnowledgeMap } from "@bundle:com.huawei.quickstart/default@map/Index";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //当前页签索引变量
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private tabsController: TabsController;
    //自定义TabBar，便于插入图标
    tabBarBuilder(title: string, targetIndex: number, selectedIcon: Resource, unselectIcon: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/Index.ets(14:5)", "default");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
            Column.onClick(() => {
                //更新当前页签索引
                this.currentIndex = targetIndex;
                //改变TabContent 显示内容
                this.tabsController.changeIndex(targetIndex);
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex == targetIndex ? selectedIcon : unselectIcon);
            Image.debugLine("products/default/src/main/ets/pages/Index.ets(15:7)", "default");
            Image.width(24);
            Image.height(24);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("products/default/src/main/ets/pages/Index.ets(18:7)", "default");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(10);
            Text.fontColor(this.currentIndex == targetIndex ? '#0A59F7' : 'rgba(0,0,0,0.60)');
            Text.textAlign(TextAlign.Center);
            Text.lineHeight(14);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End, controller: this.tabsController });
            Tabs.debugLine("products/default/src/main/ets/pages/Index.ets(39:5)", "default");
            Tabs.scrollable(false);
            Tabs.vertical(false);
            Tabs.divider({
                strokeWidth: 0.5,
                color: '#0D182431'
            });
            Tabs.backgroundColor('#F1F3F5');
            Tabs.padding({ top: 36, bottom: 28 });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new QuickStartPage(this, {}, undefined, elmtId, () => { }, { page: "products/default/src/main/ets/pages/Index.ets", line: 41, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "QuickStartPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBarBuilder.call(this, '快速入门', 0, { "id": 16777225, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, { "id": 16777233, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                } });
            TabContent.debugLine("products/default/src/main/ets/pages/Index.ets(40:7)", "default");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new CourseLearning(this, {}, undefined, elmtId, () => { }, { page: "products/default/src/main/ets/pages/Index.ets", line: 45, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "CourseLearning" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBarBuilder.call(this, '课程学习', 1, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, { "id": 16777234, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                } });
            TabContent.debugLine("products/default/src/main/ets/pages/Index.ets(44:7)", "default");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new KnowledgeMap(this, {}, undefined, elmtId, () => { }, { page: "products/default/src/main/ets/pages/Index.ets", line: 49, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "KnowledgeMap" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBarBuilder.call(this, '知识地图', 2, { "id": 16777219, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, { "id": 16777226, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                } });
            TabContent.debugLine("products/default/src/main/ets/pages/Index.ets(48:7)", "default");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.quickstart", moduleName: "default", pagePath: "pages/Index", pageFullPath: "products/default/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
