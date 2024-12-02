import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';

import { Tab1PageRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, Tab1PageRoutingModule],
  declarations: [MoviesPage],
})
export class MoviesPageModule {}
