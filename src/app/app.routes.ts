import { Routes } from '@angular/router';
import { AboutComponent } from './Mycomponents/about/about.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { SideNavComponent } from './Mycomponents/side-nav/side-nav.component';
import { DashboardComponent } from './Mycomponents/dashboard/dashboard.component';
import { IncomeComponent } from './Mycomponents/income/income.component';
import { ExpenseComponent } from './Mycomponents/expense/expense.component';
import { HistoryComponent } from './Mycomponents/history/history.component';
import { ProfileComponent } from './Mycomponents/profile/profile.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'login', component: LoginComponent},
    { path: 'sidenav', component: SideNavComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'income', component: IncomeComponent},
    { path: 'expense', component: ExpenseComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'profile', component: ProfileComponent}
  ];
