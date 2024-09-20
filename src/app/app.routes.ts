import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {EditComponent} from "./edit/edit.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: 'employees/:id/edit', component: EditComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class AppRoutes { }
