import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { DiscoveryRoutingModule } from "./discovery-routing.module";
import { DiscoveryComponent } from "./discovery.component";

@NgModule({
    imports: [
        NativeScriptModule,
        DiscoveryRoutingModule
    ],
    declarations: [
        DiscoveryComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DiscoveryModule { }
