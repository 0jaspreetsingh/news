import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatChipsModule
	],
	exports: [
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatChipsModule
	]
})
export class AngularMaterialModule {}
