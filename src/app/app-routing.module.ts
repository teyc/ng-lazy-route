import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('../../projects/ui-parent/src/lib/ui-parent/ui-parent.module').then(m => m.UiParentModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
