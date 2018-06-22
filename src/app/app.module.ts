import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './backend/navbar/navbar.component';
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
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

import { ApplibService } from './services/applib.service';
import { PropertyService } from './services/property.service';
import { RoomDetailsComponent } from './backend/room-details/room-details.component';
import { HallDetailsComponent } from './backend/hall-details/hall-details.component';
import { HolidayComponent } from './backend/holiday/holiday.component';
import { MemberListComponent } from './backend/member-list/member-list.component';
import { HolidayService } from './services/holiday.service';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';

import {
  SignalRModule,
  SignalRConnection,
  SignalRConfiguration
} from 'ng2-signalr';

import { PropertyTableComponent } from './backend/property-table/property-table.component';
import { PropertyComponent } from './backend/property/property.component';
import { CompanyDetailComponent } from './backend/company-detail/company-detail.component';
import { UserTypeComponent } from './backend/user-type/user-type.component';
import { UserAccountComponent } from './backend/user-account/user-account.component';
import { LoginComponent } from './backend/login/login.component';
import { RoomTypeComponent } from './backend/room-type/room-type.component';
import { TariffTypeComponent } from './backend/tariff-type/tariff-type.component';
import { TariffDetailsComponent } from './backend/tariff-details/tariff-details.component';
import { HomeComponent } from './frontend/home/home.component';
import { HeaderComponent } from './frontend/header/header.component';
import { HallTypeComponent } from './backend/hall-type/hall-type.component';
import { HallSlotComponent } from './backend/hall-slot/hall-slot.component';
import { AuditoriumComponent } from './backend/auditorium/auditorium.component';
import { PromoCodeDetailsComponent } from './backend/promo-code-details/promo-code-details.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { AboutusComponent } from './frontend/aboutus/aboutus.component';


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
    TariffDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HallTypeComponent,
    HallSlotComponent,
    AuditoriumComponent,
    PromoCodeDetailsComponent,
    AboutusComponent
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
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [ApplibService, PropertyService, HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
