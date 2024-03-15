import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { TwoComponent } from './two/two.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TmtComponent } from './tmt/tmt.component';

export const routes: Routes = [
    {path: "", component:TwoComponent},
    { path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "tmt", component:TmtComponent},
];
