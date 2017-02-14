import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { GithubComponent }  from './components/github.component';
import { MilestoneComponent }  from './components/milestone.component';

const appRoutes: Routes = [
  { path: 'milestone', component: MilestoneComponent},
  { path: 'github', component: GithubComponent},
  { path: '', redirectTo: 'github', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    GithubComponent,
    MilestoneComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
