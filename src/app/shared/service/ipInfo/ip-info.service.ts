import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'app.constants';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {
	apiUrl: string = config.ipInfoUrl;

	constructor(private http: HttpClient) {}

	getIpInfo(): Observable<any> {
		return this.http.get(this.apiUrl);
	}
}
