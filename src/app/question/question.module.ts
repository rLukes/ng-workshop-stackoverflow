import { FormsModule } from "@angular/forms";
import { QuestionsViewComponent } from "./../questions-view/questions-view.component";
import { QuestionsNewComponent } from "./../questions-new/questions-new.component";
import { QuestionsIndexComponent } from "./../questions-index/questions-index.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    QuestionsIndexComponent,
    QuestionsNewComponent,
    QuestionsViewComponent
  ],
  imports: [FormsModule],
  exports: [
    QuestionsIndexComponent,
    QuestionsNewComponent,
    QuestionsViewComponent
  ]
})
export class QuestionModule {}
