import {RouterModule, Routes} from "@angular/router";
import {BaconComponent} from "./components/bacon-component";
import {HomeComponent} from "./components/home-component";
import {BaconService} from "./services/bacon-service";
import {ImageComponent} from "./components/image-component";

export const allAppComponents = [BaconComponent, HomeComponent, ImageComponent];

export const routes: Routes = [
	{path: "bacon", component: BaconComponent},
	{path: "image", component: ImageComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [BaconService];

export const routing = RouterModule.forRoot(routes);