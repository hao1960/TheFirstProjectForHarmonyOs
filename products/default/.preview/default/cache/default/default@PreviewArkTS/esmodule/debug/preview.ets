struct preview{build(){Column(){
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
    })}}