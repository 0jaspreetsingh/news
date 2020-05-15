import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/service/story/story.service';

@Component({
  selector: 'ne-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  headlines = [];

  constructor(private storyService: StoryService) {}

	ngOnInit(): void {
		this.storyService.getHeadlinesByCountry('us').subscribe((data) => {
      console.log(data);
			this.headlines = data.articles;
		});
	}

}
