import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageHomeComponent} from './page-home/page-home.component';


const routes: Routes = [
  {path: '', component: PageHomeComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
