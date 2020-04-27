import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/service/story.service';

@Component({
  selector: 'ne-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private storyService:StoryService) { }

  ngOnInit(): void {
    this.storyService.getHeadlinesByCountry('us').subscribe(data=>{
      console.log(data);
    });
  }



}
