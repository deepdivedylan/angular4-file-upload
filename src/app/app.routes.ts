import {RouterModule, Routes} from "@angular/router";
import {BaconComponent} from "./components/bacon-component";
import {HomeComponent} from "./components/home-component";
import {BaconService} from "./services/bacon-service";
import {ImageComponent} from "./components/image-component";
import {FileSelectDirective} from "ng2-file-upload";

export const allAppComponents = [BaconComponent, HomeComponent, ImageComponent, FileSelectDirective];

export const routes: Routes = [
	{path: "bacon", component: BaconComponent},
	{path: "image", component: ImageComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [BaconService];

export const routing = RouterModule.forRoot(routes);