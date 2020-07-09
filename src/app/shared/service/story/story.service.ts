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

	// getHeadlinesByCountry(country: string): Observable<any> {
	// 	return this.http.get(`${this.apiUrl}top-headlines?country=${country}`, { headers: this.httpHeader });
	// }

	// getHeadlinesByCategory(country: string): Observable<any> {
	// 	return this.http.get(`${this.apiUrl}top-headlines?category=${country}`, { headers: this.httpHeader });
	// }

	// searchNews(query: string): Observable<any> {
	// 	return this.http.get(`${this.apiUrl}top-headlines?q=${query}`, { headers: this.httpHeader });
	// }

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
		return this.http.get(`${config.topheadlines}?country=${country}${searchQuery}`, {
			headers: this.httpHeader
		});
	}

	/**
	 * 
	 * @param query 
	 * @param domain 
	 * @param excludeDomains 
	 * @param from 
	 * @param to 
	 * @param language 
	 * @param sortBy 
	 * @param pageSize 
	 * @param page 
	 */
	getEverything(
		query: string,
		sources?: string[],
		domains?: string[],
		excludeDomains?: string[],
		from?: string,
		to?: string,
		language?: string,
		sortBy?: string,
		pageSize?: string,
		page?: string
	): Observable<any> {
		query = query.replace(/\s/g, '+');
		let searchQuery = '';
		searchQuery = sources && sources.length > 0 ? searchQuery + '&sources=' + sources.toString() : searchQuery;
		searchQuery = domains ? searchQuery + '&domains=' + domains.toString() : searchQuery;
		searchQuery = excludeDomains ? searchQuery + '&excludeDomains=' + excludeDomains.toString() : searchQuery;
		searchQuery = from ? searchQuery + '&from=' + from : searchQuery;
		searchQuery = to ? searchQuery + '&to=' + to : searchQuery;
		searchQuery = language ? searchQuery + '&language=' + language : searchQuery;
		searchQuery = sortBy ? searchQuery + '&sortBy=' + sortBy : searchQuery;
		searchQuery = pageSize ? searchQuery + '&pageSize=' + pageSize : searchQuery;
		searchQuery = page ? searchQuery + '&page=' + page : searchQuery;

		return this.http.get(`${config.everything}?q=${query}${searchQuery}`, {
			headers: this.httpHeader
		});
	}
	getSources(category?: string, language?: string, country?: string): Observable<any> {
		let searchQuery = '';
		searchQuery = category ? searchQuery + '&category=' + category : searchQuery;
		searchQuery = language ? searchQuery + '&language=' + language : searchQuery;
		searchQuery = country ? searchQuery + '&country=' + country : searchQuery;
		return this.http.get(`${config.sources}${searchQuery}`, {
			headers: this.httpHeader
		});
	}
}
