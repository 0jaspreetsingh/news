import { IpInfoService } from './shared/service/ipInfo/ip-info.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ne-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';

  constructor(private ipInfoService:IpInfoService) { }

  ngOnInit(): void {
    this.ipInfoService.getIpInfo().subscribe(data=>{
      console.log(data);
    });
  }
}
