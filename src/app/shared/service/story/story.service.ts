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

	/**
	 * 
	 * @param country 
	 * @param category 
	 * @param pageSize 
	 * @param page 
	 */
	getHeadlines(country: string, category?: string, pageSize?: number, page?: number): Observable<any> {
		let searchQuery = '';
		searchQuery = category ? searchQuery + '&category=' + category : searchQuery;
		searchQuery = pageSize ? searchQuery + '&pageSize=' + pageSize : searchQuery;
		searchQuery = page ? searchQuery + '&page=' + page : searchQuery;
		return this.http.get(`${this.apiUrl}top-headlines?country=${country}${searchQuery}`, {
			headers: this.httpHeader
		});
	}
}
