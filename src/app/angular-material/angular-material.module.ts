import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
		MatChipsModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatListModule,
		MatExpansionModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule
	],
	exports: [
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatChipsModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatListModule,
		MatExpansionModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule
	]
})
export class AngularMaterialModule {}
