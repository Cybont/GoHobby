import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { DiscoveryRoutingModule } from "./discovery-routing.module";
import { DiscoveryComponent } from "./discovery.component";

@NgModule({
    imports: [
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
