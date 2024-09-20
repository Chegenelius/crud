import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {EditComponent} from "./edit/edit.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppComponent} from "./app.component";


@NgModule({
    declarations: [
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    exports: [
        EditComponent
    ]
})
export class AppModule { }
