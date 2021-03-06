declare var angular: ng.IAngularStatic;

let app = angular.module('app', ['ux-aspects']);

import { NgModule, forwardRef, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PageHeaderComponent} from './shared/page-header/page-header.component';
import { LeftNavigationComponent } from './shared/left-navigation/left-navigation.component';
import { ContentHeaderComponent } from './shared/content-header/content-header.component';
import './wrappers/expand-input-wrapper/ux-expand-input-ng1.directive.ts';
import { AppRoutingModule }     from './app-routing.module';
import { StatusComponent }    from './status/status.component';
import { LoginComponent }      from './login/login.component';
import { ProgressBarModule } from '@ux-aspects/ux-aspects';

// create a singleton of the upgrade adapter
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));


@NgModule({
    imports: [
        BrowserModule,
		AppRoutingModule,
        ProgressBarModule
    ],
    declarations: [
        AppComponent,
		DashboardComponent,
        PageHeaderComponent,
        LeftNavigationComponent,
        ContentHeaderComponent,
		LoginComponent,
		StatusComponent,	        
        upgradeAdapter.upgradeNg1Component('uxExpandInputNg1'),
    ]
})
export class AppModule {
    ngDoBootstrap() { }
}

 upgradeAdapter.upgradeNg1Provider('$navigationMenu');

app.directive('myApp', upgradeAdapter.downgradeNg2Component(AppComponent) as angular.IDirectiveFactory);

// bootstrap the Angular 1 application here 
upgradeAdapter.bootstrap(document.documentElement, ['app']);