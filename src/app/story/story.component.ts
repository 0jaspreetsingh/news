import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from '../shared/service/story/story.service';

@Component({
	selector: 'ne-story',
	templateUrl: './story.component.html',
	styleUrls: [ './story.component.css' ]
})
export class StoryComponent implements OnInit {
	@Input('story') story: any;
	constructor(private storyService: StoryService) {}

	ngOnInit(): void {
		console.log(this.story);
		// this.storyService.getHeadlinesByCountry('us').subscribe((data) => {
		// 	console.log(data);
		// });
	}
}
