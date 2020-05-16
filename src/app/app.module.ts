import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { StoryComponent } from './story/story.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadlinesComponent } from './headlines/headlines.component';
import { StoryListComponent } from './story-list/story-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    HeadlinesComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
