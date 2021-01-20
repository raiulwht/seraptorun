import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first/first.component';
import { ContentComponent } from './content/content.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'content', component: ContentComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: 'content',  pathMatch: 'full'}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule{} 
