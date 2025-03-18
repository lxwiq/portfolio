import type { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Home
  { path: 'projects', component: ProjectsPageComponent }, // Projects
  { path: 'about', component: AboutPageComponent }, // About
  { path: '**', component: NotFoundPageComponent }, // 404
];
