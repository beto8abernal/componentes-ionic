import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitiPageRoutingModule } from './infiniti-routing.module';

import { InfinitiPage } from './infiniti.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitiPage]
})
export class InfinitiPageModule {}
