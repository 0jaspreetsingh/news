import { Injectable } from '@angular/core';
import { config } from 'app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StoryService {
	apiUrl: string = config.newsApiUrl;

	httpHeader = new HttpHeaders().set('Authorization', `Bearer ${config.newsApiKey}`);

	constructor(private http: HttpClient) {}

	getHeadlinesByCountry(country: string): Observable<any> {
		return this.http.get(`${this.apiUrl}top-headlines?country=${country}`, { headers: this.httpHeader });
  }
  
  getHeadlinesByCategory(country: string): Observable<any> {
		return this.http.get(`${this.apiUrl}top-headlines?category=${country}`, { headers: this.httpHeader });
  }
  
  searchNews(query: string): Observable<any> {
		return this.http.get(`${this.apiUrl}top-headlines?q=${query}`, { headers: this.httpHeader });
	}
}
