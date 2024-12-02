import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WatchlistPage } from './tab2.page';
import { WatchlistPageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, WatchlistPageRoutingModule],
  declarations: [WatchlistPage],
})
export class WatchlistPageModule {}
