import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//App Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';


// const routes: Routes = [
// 	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
// 	{ path: 'dashboard', component: DashboardComponent },
// 	{ path: 'detail/:id', component: HeroDetailComponent },
// 	{ path: 'heroes', component: HeroesComponent }
// ];


const appRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },

	{ path: 'users', component: UsersComponent },
	{ path: 'users/new', component: UserFormComponent },
	{ path: 'users/:id', component: UserFormComponent },

	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({

	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/