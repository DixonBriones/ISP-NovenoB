import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';



import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsComponent } from './components/news/news.component';
import { NewsEditorComponent } from './components/news-editor/news-editor.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { TransparencyComponent } from './components/transparency/transparency.component';
import { VolunteerDetailsComponent } from './components/volunteer-details/volunteer-details.component';
import { LoginComponent } from './components/login/login.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { OpinionDetailsComponent } from './components/opinion-details/opinion-details.component';
import { NoticiaComponent } from './noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NewsComponent,
    NewsEditorComponent,
    VolunteerComponent,
    TransparencyComponent,
    VolunteerDetailsComponent,
    LoginComponent,
    OpinionComponent,
    OpinionDetailsComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NgxPaginationModule,
    FormsModule,
    PdfViewerModule

  ],
  providers: [ 
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
