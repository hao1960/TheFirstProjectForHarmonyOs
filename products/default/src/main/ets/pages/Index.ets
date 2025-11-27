import { QuickStartPage } from 'quickstart';
import {CourseLearning} from 'learning';
import { KnowledgeMap, KnowledgeMapContent } from 'map';

@Entry
@Component
struct Index {
  build() {
    Column() {
      //QuickStartPage()
      //CourseLearning()
      //KnowledgeMap()
      KnowledgeMapContent()
    }
    .backgroundColor('#F1F3F5')
    .padding({ top: 36, bottom: 28 })
  }
}