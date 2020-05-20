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
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		StoryComponent,
		HeadlinesComponent,
		StoryListComponent,
		SearchComponent,
		FilterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
