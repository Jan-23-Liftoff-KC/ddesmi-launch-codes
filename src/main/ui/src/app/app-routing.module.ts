import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListingDetailsComponent } from "./listing-details/listing-details.component";

const routes: Routes = [
    {path: "properties/all", component: ListingDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};
export const routingComponents = [ListingDetailsComponent]

