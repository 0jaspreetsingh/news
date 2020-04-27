import { IpInfoService } from './../shared/service/ip-info/ip-info.service';
import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/service/story/story.service';

@Component({
  selector: 'ne-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private storyService:StoryService,private ipInfoService:IpInfoService) { }

  ngOnInit(): void {
    this.storyService.getHeadlinesByCountry('us').subscribe(data=>{
      console.log(data);
    });
    this.ipInfoService.getIpInfo().subscribe(data=>{
      console.log(data);
    });
  }



}
