import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'category/:categoryslug', component: DetailsComponent },
  { path: 'post/:postslug', component: DetailsComponent },
  { path: '', component: ContentComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule{} 
