import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'app.constants';

@Injectable({
	providedIn: 'root'
})
export class IpInfoService {
	apiUrl: string = config.ipInfoUrl;

	ipInfo: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

	region: BehaviorSubject<string> = new BehaviorSubject<string>('us');

	constructor(private http: HttpClient) {}

	getIpInfo(): Observable<any> {
		return this.http.get(this.apiUrl).pipe(
			map((info) => {
				this.ipInfo.next(info);
				return info;
			})
		);
	}

	getipInfoSubject(): Observable<any> {
		return this.ipInfo.asObservable();
	}

	setIpinfoSubject(data: any) {
		this.ipInfo.next(data);
	}

	getRegion(): Observable<string> {
		return this.region.asObservable();
	}

	setRegion(data: string) {
		this.region.next(data);
	}
}
