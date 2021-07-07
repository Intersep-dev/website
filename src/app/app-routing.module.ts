import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternsonboardingComponent } from './main/internsonboarding/internsonboarding.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'forms', component: InternsonboardingComponent },
  { path: 'home' , component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
