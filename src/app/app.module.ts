import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSelectModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

import { ApplibService } from './services/applib.service';
import { PropertyService } from './services/property.service';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { HallDetailsComponent } from './components/hall-details/hall-details.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { HolidayService } from './services/holiday.service';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import {
  SignalRModule,
  SignalRConnection,
  SignalRConfiguration
} from 'ng2-signalr';

import { PropertyTableComponent } from './property-table/property-table.component';
import { PropertyComponent } from './components/property/property.component';
import { CompanyDetailComponent } from './Components/company-detail/company-detail.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { LoginComponent } from './components/login/login.component';
import { RoomTypeComponent } from './components/room-type/room-type.component';
import { TariffTypeComponent } from './components/tariff-type/tariff-type.component';
import { TariffDetailsComponent } from './components/tariff-details/tariff-details.component';


export function createconfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'NTCServerHub';
  c.url = 'https://www.ntc.my/SLSR';
  // c.url = 'http://www.ntc.my/NTCWeb.SLSR';
  c.logging = true;

  c.executeErrorsInZone = false;
  c.executeEventsInZone = true;
  c.executeStatusChangeInZone = true;
  return c;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    RoomDetailsComponent,
    HallDetailsComponent,
    HolidayComponent,
    MemberListComponent,
    PropertyTableComponent,
    PropertyComponent,
    CompanyDetailComponent,
    UserTypeComponent,
    UserAccountComponent,
    LoginComponent,
    RoomTypeComponent,
    TariffTypeComponent,
    TariffDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    SignalRModule.forRoot(createconfig),
    BsDatepickerModule.forRoot()
  ],
  providers: [ApplibService, PropertyService, HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
