import { Routes } from '@angular/router';
import { DashboardComponent } from './components/molecules/dashboard/dashboard.component';
import { LoginComponent } from './components/molecules/login/login.component';
import { PetGridComponent } from './components/molecules/pet-grid/pet-grid.component';
import { PetComponent } from './components/molecules/pet/pet.component';
import { SalesComponent } from './components/molecules/sales/sales.component';
import { UserComponent } from './components/molecules/user/user.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: PetGridComponent, },
      { path: 'pet', component: PetComponent, },
      { path: 'user', component: UserComponent, },
      { path: 'history', component: SalesComponent, }
    ]
  },

];