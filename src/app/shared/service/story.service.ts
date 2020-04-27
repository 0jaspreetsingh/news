import { Injectable } from '@angular/core';
import { configUrl } from 'app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StoryService {
	apiUrl: string = configUrl.newsApiUrl;

	httpHeader = new HttpHeaders().set('Authorization', `Bearer ${configUrl.newsApiKey}`);

	constructor(private http: HttpClient) {}

	getHeadlinesByCountry(country: string): Observable<any> {
		return this.http.get(`${this.apiUrl}top-headlines?country=${country}`, { headers: this.httpHeader });
	}
}
