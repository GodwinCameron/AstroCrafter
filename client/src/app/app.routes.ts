import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PlanetComponent } from './routes/planet/planet.component';
import { InfoComponent } from './routes/info/info.component';
import { LoginComponent } from './routes/login/login.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "planet", component: PlanetComponent},
    { path: "info", component: InfoComponent},
    { path: "login", component: LoginComponent},
    { path: "", redirectTo: "/home", pathMatch: "full" },
];
