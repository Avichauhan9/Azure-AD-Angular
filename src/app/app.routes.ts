import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [MsalGuard] },
];
