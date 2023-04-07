import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorTableComponent } from './components/tutor-table/tutor-table.component';

const routes: Routes = [
  {path: '', redirectTo: 'tutor', pathMatch:'full'},
  { 
    path:'tutor',
    component: TutorTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
