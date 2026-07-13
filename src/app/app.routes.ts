import { Routes } from '@angular/router';
import { Affiliations } from './pages/affiliations/affiliations';
import { Certifications } from './pages/certifications/certifications';
import { Education } from './pages/education/education';
import { Experience } from './pages/experience/experience';
import { LandingComponent } from './pages/landing/landing.component';
import { Projects } from './pages/projects/projects';
import { Recommendations } from './pages/recommendations/recommendations';
import { Stack } from './pages/stack/stack';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'education', component: Education },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'stack', component: Stack },
  { path: 'certifications', component: Certifications },
  { path: 'recommendations', component: Recommendations },
  { path: 'affiliations', component: Affiliations },
];
