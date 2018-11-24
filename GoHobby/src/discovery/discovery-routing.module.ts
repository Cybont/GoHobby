import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DiscoveryComponent } from "./discovery.component";

const routes: Routes = [
    { path: "", component: DiscoveryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DiscoveryRoutingModule { }
