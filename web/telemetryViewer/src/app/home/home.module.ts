import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SimplelistComponent } from '../components/simplelist/simplelist.component';
import { ChartComponent } from '../components/chart/chart.component';
import { GmapComponent } from '../components/gmap/gmap.component';

import { AgmCoreModule } from '@agm/core';
import { UhfComponent } from '../components/uhf/uhf.component';
import { PacketsComponent } from '../components/packets/packets.component';
import { SpfComponent } from '../components/spf/spf.component';
import { Can0Component } from '../components/can0/can0.component';
import { BaseComponent } from '../components/base/base.component';
import { SensorComponent } from '../components/sensor/sensor.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgmCoreModule
  ],
  declarations: [
    HomePage,
    SimplelistComponent,
    ChartComponent,
    GmapComponent,
    UhfComponent,
    PacketsComponent,
    SpfComponent,
    Can0Component,
    BaseComponent,
    SensorComponent,
  ]
})
export class HomePageModule {}
