import { Routes } from '@angular/router';
import { CompanyProfileComponent } from './features/company-profile/company-profile.component';

export const routes: Routes = [
    { path: '', component: CompanyProfileComponent },
    { path: 'profile', component: CompanyProfileComponent }
];
