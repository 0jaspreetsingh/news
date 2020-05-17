import { IpInfoService } from './../shared/service/ipInfo/ip-info.service';
import { StoryService } from './../shared/service/story/story.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { getCountryName } from 'src/assets/isoCountries';

@Component({
	selector: 'ne-story-list',
	templateUrl: './story-list.component.html',
	styleUrls: [ './story-list.component.css' ]
})
export class StoryListComponent implements OnInit {
	category = '';
	pageNumber = 2;
	stories: any;
	pageSize = 5;
	// pageEvent: PageEvent;
	totalResults;
	timeout;
	isLoading = false;
	countryName;
	isPaginatedResultsLoading = false;


	constructor(private storyService: StoryService, private ipInfoService: IpInfoService) {}

	ngOnInit(): void {
		this.isLoading = true;
		this.ipInfoService.getRegion().subscribe((region) => {
			this.storyService
				.getHeadlines(region, this.category, this.pageSize, this.pageNumber)
				.subscribe((stories) => {
					this.stories = stories.articles;
					this.totalResults = stories.totalResults - 5;
					this.isLoading = false;
				});
			this.countryName = getCountryName(region);
		});
	}

	onPageChange(event: PageEvent) {
		this.isLoading = true;
		this.isPaginatedResultsLoading = true;
		clearTimeout(this.timeout);
		console.log(event);
		this.timeout = setTimeout(() => {
			console.log('waiting');
			this.ipInfoService.getRegion().subscribe((region) => {
				this.storyService
					.getHeadlines(region, this.category, this.pageSize, event.pageIndex + this.pageNumber)
					.subscribe((stories) => {
						this.stories = stories.articles;
						this.totalResults = stories.totalResults - 5;
						this.isLoading = false;
						this.isPaginatedResultsLoading = false;
						const scrolledToElement = document.getElementById('0');
						if (scrolledToElement) {
							scrolledToElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
						}
					});
			});
		}, 500);
		// this.ipInfoService.getRegion().subscribe((region) => {
		// 	this.storyService
		// 		.getHeadlines(region, undefined, this.pageSize, event.pageIndex + this.pageNumber)
		// 		.subscribe((stories) => {
		// 			this.stories = stories.articles;
		// 			this.totalResults = stories.totalResults - 5;
		// 		});
		// });
	}

	updateResultsWithCategory(category: string) {
		this.isLoading = true;
		this.category = category;
		this.ipInfoService.getRegion().subscribe((region) => {
			this.storyService
				.getHeadlines(region, this.category, this.pageSize, this.pageNumber)
				.subscribe((stories) => {
					this.stories = stories.articles;
					this.totalResults = stories.totalResults - 5;
					this.isLoading = false;
				});
		});
	}
}
