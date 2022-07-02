import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ToolsandmaterialsComponent } from './toolsandmaterials/toolsandmaterials.component';
import { TechnicaltipsComponent } from './technicaltips/technicaltips.component';
import { InterestinglinksComponent } from './interestinglinks/interestinglinks.component';
import { BulbindexComponent } from './bulbindex/bulbindex.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'tools_and_materials', component: ToolsandmaterialsComponent},
  {path: 'technical_tips', component: TechnicaltipsComponent},
  {path: 'interesting_links', component: InterestinglinksComponent},
  {path: 'bulb_list', component: BulbindexComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
