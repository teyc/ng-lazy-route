import { RouterModule, Routes } from "@angular/router";
import { UiParentComponent } from "../ui-parent.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{path: '', component: UiParentComponent  }]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UiParentRoutingModule { }