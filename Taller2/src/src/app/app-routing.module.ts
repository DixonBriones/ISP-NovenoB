import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './guards/auth.guard';
import { CheckeloginGuard } from './guards/checkelogin.guard';

import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NewsEditorComponent } from './components/news-editor/news-editor.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { TransparencyComponent } from './components/transparency/transparency.component';
import { VolunteerDetailsComponent } from './components/volunteer-details/volunteer-details.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { OpinionDetailsComponent } from './components/opinion-details/opinion-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'noticia', pathMatch:'full'},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckeloginGuard]
  },
  {
    path: 'noticia',
    component: NewsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transparencia',
    component: TransparencyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'voluntario',
    component: VolunteerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'noticia/editor',
    component: NewsEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'noticia/editor/:id',
    component: NewsEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'voluntario/:id',
    component: VolunteerDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'opinion',
    component: OpinionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'opinion/:id',
    component: OpinionDetailsComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
