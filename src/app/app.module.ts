import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { FormsModule } from '@angular/forms';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStoryComponent,
    SprintCalculatorComponent,
    SprintCalculatorComponent,
    StoryListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
