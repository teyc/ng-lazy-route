import { NgModule } from '@angular/core';
import { UiParentComponent } from './ui-parent.component';
import { UiChildModule } from 'projects/ui-child/src/public-api';
import { UiParentRoutingModule } from './ui-parent/ui-parent-routing.module';



@NgModule({
  declarations: [
    UiParentComponent
  ],
  imports: [
    UiParentRoutingModule,
    UiChildModule
  ],
  exports: [
  ]
})
export class UiParentModule { }
