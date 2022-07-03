import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ToolsandmaterialsComponent } from './toolsandmaterials/toolsandmaterials.component';
import { TechnicaltipsComponent } from './technicaltips/technicaltips.component';
import { InterestinglinksComponent } from './interestinglinks/interestinglinks.component';
import { BulbindexComponent } from './bulbindex/bulbindex.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    AboutmeComponent,
    ToolsandmaterialsComponent,
    TechnicaltipsComponent,
    InterestinglinksComponent,
    BulbindexComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
