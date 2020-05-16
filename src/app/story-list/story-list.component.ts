import { IpInfoService } from './../shared/service/ipInfo/ip-info.service';
import { StoryService } from './../shared/service/story/story.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ne-story-list',
	templateUrl: './story-list.component.html',
	styleUrls: [ './story-list.component.css' ]
})
export class StoryListComponent implements OnInit {
	category = '';
	pageNumber = 2;
	stories: any;

	constructor(private storyService: StoryService, private ipInfoService: IpInfoService) {}

	ngOnInit(): void {
		this.ipInfoService.getRegion().subscribe((region) => {
			this.storyService.getHeadlines(region, undefined, 5, this.pageNumber).subscribe((stories) => {
				this.stories = stories.articles;
			});
		});
	}
}
