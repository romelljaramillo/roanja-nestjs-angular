import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { LayoutLeftComponent } from './layout-left/layout-left.component';
import { LayoutRightComponent } from './layout-right/layout-right.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { Nofound404Component } from './pages/nofound404/nofound404.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutLeftComponent,
    LayoutRightComponent,
    NotificationComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    NotificationComponent,
    LayoutContentComponent,
    Nofound404Component
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
