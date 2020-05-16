import { IpInfoService } from './../shared/service/ipInfo/ip-info.service';
import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/service/story/story.service';

@Component({
	selector: 'ne-headlines',
	templateUrl: './headlines.component.html',
	styleUrls: [ './headlines.component.css' ]
})
export class HeadlinesComponent implements OnInit {
	headlines: any;

	constructor(private storyService: StoryService, private ipInfoService: IpInfoService) {}

	ngOnInit(): void {
		this.ipInfoService.getRegion().subscribe((region) => {
			// console.log(ipInfo);
			if (region) {
				this.storyService.getHeadlines(region, undefined, 5, undefined).subscribe((data) => {
					console.log(data);
					this.headlines = data.articles;
				});
			}
		});
	}

	goToFullStory(url: string): void {
		window.open(url);
	}
}
