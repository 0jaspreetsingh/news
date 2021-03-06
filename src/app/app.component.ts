import { CountryCodes } from './../assets/available-country-codes';
import { IpInfoService } from './shared/service/ipInfo/ip-info.service';
import { Component } from '@angular/core';
import { findFlagUrlByIso2Code } from 'country-flags-svg';
import { getCountryName } from 'src/assets/isoCountries';

@Component({
	selector: 'ne-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'news';

	selectedRegion = 'us';

	darkMode = false;

	// flagUrl = '';

	CountryCodes = CountryCodes;

	constructor(private ipInfoService: IpInfoService) {}

	ngOnInit(): void {
		this.ipInfoService.getIpInfo().subscribe((data) => {
			this.selectedRegion = data.countryCode.toLowerCase();
			this.ipInfoService.setRegion(data.countryCode);
			// this.ipInfoService.setIpinfoSubject(data);
			// console.log(data);
			// if (data && data.countryCode) {
			// 	this.ipInfoService.setRegion(data.countryCode);
			// }
			//this.flagUrl = findFlagUrlByIso2Code(data.countryCode);
			// console.log(this.flagUrl);
		});
		this.listenThemeChange();
	}

	getCountryName(code: string) {
		return getCountryName(code);
	}

	// getImageFlag(code:string){
	// 	return findFlagUrlByIso2Code(code);
	// }

	changeCountry(code: string) {
		// this.ipInfoService.
		console.log(code);
		this.ipInfoService.setRegion(code);
		this.selectedRegion = code.toLowerCase();
	}

	listenThemeChange() {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			this.darkMode = true;
		}
		window.matchMedia('(prefers-color-scheme: dark)').addListener( (e) => {
			this.darkMode = e.matches;
		});
	}
}
