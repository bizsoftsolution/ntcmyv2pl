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

import { HomeComponent } from './frontend/home/home.component';
import { HeaderComponent } from './frontend/header/header.component';

import { HallSlotComponent } from './backend/hall-slot/hall-slot.component';
import { AuditoriumComponent } from './backend/auditorium/auditorium.component';
import { PromoCodeDetailsComponent } from './backend/promo-code-details/promo-code-details.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { AboutusComponent } from './frontend/aboutus/aboutus.component';

import { MainComponent } from './frontend/main/main.component';
import { FacilitiesComponent } from './frontend/facilities/facilities.component';
import { ContactusComponent } from './frontend/contactus/contactus.component';
import { TariffComponent } from './frontend/tariff/tariff.component';
import { RoomBookingComponent } from './frontend/room-booking/room-booking.component';
import { ChooseRoomComponent } from './frontend/choose-room/choose-room.component';
import { MyCartComponent } from './frontend/my-cart/my-cart.component';
import { HallBookingComponent } from './frontend/hall-booking/hall-booking.component';
import { ChooseHallComponent } from './frontend/choose-hall/choose-hall.component';
import { GalleryComponent } from './frontend/gallery/gallery.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { HolidayEditComponent } from './holiday-edit/holiday-edit.component';
import { HallSlotEditComponent } from './hall-slot-edit/hall-slot-edit.component';

import { AuditoriumEditComponent } from './auditorium-edit/auditorium-edit.component';

import { PromoCodeDetailEditComponent } from './promo-code-detail-edit/promo-code-detail-edit.component';

import { ActiveRecordPipe } from './active-record.pipe';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomDetailEditComponent } from './room-detail-edit/room-detail-edit.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemDetailEditComponent } from './item-detail-edit/item-detail-edit.component';
import { BookingMasterComponent } from './backend/booking-master/booking-master.component';
import { BookingMasterEditComponent } from './backend/booking-master-edit/booking-master-edit.component';
import { BookingRoomEditComponent } from './backend/booking-room-edit/booking-room-edit.component';
import { BookingHallEditComponent } from './backend/booking-hall-edit/booking-hall-edit.component';
import { RoomMasterComponent } from './backend/room-master/room-master.component';
import { HallMasterComponent } from './hall-master/hall-master.component';
import { FilterPropertyPipe } from './filter-property.pipe';
import { RoomMasterEditComponent } from './backend/room-master-edit/room-master-edit.component';
import { HallMasterEditComponent } from './hall-master-edit/hall-master-edit.component';
import { GoldenarowanaComponent } from './frontend/goldenarowana/goldenarowana.component';
import { ArticGalleryComponent } from './frontend/artic-gallery/artic-gallery.component';
import { PacificGalleryComponent } from './frontend/pacific-gallery/pacific-gallery.component';
import { ParkingGalleryComponent } from './frontend/parking-gallery/parking-gallery.component';
import { PlaygroundGalleryComponent } from './frontend/playground-gallery/playground-gallery.component';
import { NtcGalleryComponent } from './frontend/ntc-gallery/ntc-gallery.component';
import { BluearowanaGalleryComponent } from './frontend/bluearowana-gallery/bluearowana-gallery.component';
import { HarmonyComponent } from './frontend/harmony/harmony.component';
import { SolidarityGalleryComponent } from './frontend/solidarity-gallery/solidarity-gallery.component';
import { AtlanticGalleryComponent } from './frontend/atlantic-gallery/atlantic-gallery.component';
import { CafeteriaGalleryComponent } from './frontend/cafeteria-gallery/cafeteria-gallery.component';


export function createconfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'NTCServerHub';
  // c.url = 'https://www.ntc.my/SLSR';
  c.url = 'https://www.ntc.my/SLSR01';

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


    HolidayComponent,
    MemberListComponent,
    PropertyTableComponent,
    PropertyComponent,
    CompanyDetailComponent,
    UserTypeComponent,
    UserAccountComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    HallSlotComponent,
    AuditoriumComponent,
    PromoCodeDetailsComponent,
    AboutusComponent,

    MainComponent,
    FacilitiesComponent,
    ContactusComponent,
    TariffComponent,
    RoomBookingComponent,
    ChooseRoomComponent,
    MyCartComponent,
    HallBookingComponent,
    ChooseHallComponent,
    GalleryComponent,
    MainAdminComponent,
    PropertyEditComponent,
    HolidayEditComponent,
    HallSlotEditComponent,

    AuditoriumEditComponent,
    PromoCodeDetailEditComponent,

    ActiveRecordPipe,
    RoomDetailComponent,
    RoomDetailEditComponent,
    ItemDetailComponent,
    ItemDetailEditComponent,
    BookingMasterComponent,
    BookingMasterEditComponent,

    BookingMasterEditComponent,
    BookingRoomEditComponent,
    BookingHallEditComponent,
    RoomMasterComponent,
    HallMasterComponent,
    FilterPropertyPipe,
    RoomMasterEditComponent,
    HallMasterEditComponent,
    GoldenarowanaComponent,
    ArticGalleryComponent,
    PacificGalleryComponent,
    ParkingGalleryComponent,
    PlaygroundGalleryComponent,
    NtcGalleryComponent,
    BluearowanaGalleryComponent,
    HarmonyComponent,
    SolidarityGalleryComponent,
    AtlanticGalleryComponent,
    CafeteriaGalleryComponent
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
