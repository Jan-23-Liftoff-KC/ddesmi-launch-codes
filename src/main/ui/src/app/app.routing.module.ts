import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ListingDetailsComponent } from "./listing-details/listing-details.component";
import { ListingEditComponent } from "./listing-edit/listing-edit.component";
import { Listing } from "./listing/listing";

const routes: Routes = [
    {path: "properties/{id}", component: ListingEditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

