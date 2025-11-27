import { QuickStartPage } from 'quickstart';
import {CourseLearning} from 'learning';
import { KnowledgeMap} from 'map';

@Entry
@Component
struct Index {
  //当前页签索引变量
  @State currentIndex:number=0;
  private tabsController:TabsController=new TabsController();
  //自定义TabBar，便于插入图标
  @Builder
  tabBarBuilder(title:string,targetIndex:number,selectedIcon:Resource,unselectIcon:Resource){
    Column(){
      Image(this.currentIndex==targetIndex?selectedIcon:unselectIcon)
        .width(24)
        .height(24)
      Text(title)
        .fontFamily('HarmonyHeiTi-Medium')
        .fontSize(10)
        .fontColor(this.currentIndex==targetIndex?'#0A59F7':'rgba(0,0,0,0.60)')
        .textAlign(TextAlign.Center)
        .lineHeight(14)
        .fontWeight(500)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
    //导航栏高亮颜色跟随
    .onClick(()=>{
      //更新当前页签索引
      this.currentIndex=targetIndex;
      //改变TabContent 显示内容
      this.tabsController.changeIndex(targetIndex);
    })
  }
  build() {
    Tabs({barPosition:BarPosition.End,controller:this.tabsController}){//控制导航栏位置
      TabContent(){
        QuickStartPage()
      }
      .tabBar(this.tabBarBuilder('快速入门',0,$r('app.media.ic_01_on'),$r('app.media.ic_01_off')))
      TabContent(){
        CourseLearning()
      }
      .tabBar(this.tabBarBuilder('课程学习',1,$r('app.media.ic_02_on'),$r('app.media.ic_02_off')))
      TabContent(){
        KnowledgeMap()
      }
      .tabBar(this.tabBarBuilder('知识地图',2,$r('app.media.ic_03_on'),$r('app.media.ic_03_off')))
    }
    .scrollable(false)//Tabs无法横向滑动
    .vertical(false)//非纵向导航条
    .divider({//将TabBar和TabContent进行分割
      strokeWidth:0.5,
      color:'#0D182431'
    })
    .backgroundColor('#F1F3F5')
    .padding({top:36,bottom:28})
  }
}