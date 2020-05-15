import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [],
	imports: [ CommonModule, MatToolbarModule, MatIconModule, MatMenuModule ,MatButtonModule],
	exports: [ MatToolbarModule, MatIconModule, MatMenuModule,MatButtonModule ]
})
export class AngularMaterialModule {}
