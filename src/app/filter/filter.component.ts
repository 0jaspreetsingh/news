import { StoryService } from './../shared/service/story/story.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'ne-filter',
	templateUrl: './filter.component.html',
	styleUrls: [ './filter.component.css' ]
})
export class FilterComponent implements OnInit {
	//demo data
	filterData: any = { category: 'entertainment' };

	isLoading = false;

	sources: any;

	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<FilterComponent>,
		private storyService: StoryService
	) {}

	ngOnInit(): void {
		this.isLoading = true;
		this.storyService.getSources().subscribe((data) => {
			this.sources = data;
			console.log(this.sources);
			this.isLoading = false;
		});
		this.createEmptyForm();
	}

	createEmptyForm() {
		this.form = this.fb.group({
			sources: [ '' ],
			domains: [ '' ],
			from: [],
			to: [],
			language: [ '' ],
			sortBy: [ '' ]
		});
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
