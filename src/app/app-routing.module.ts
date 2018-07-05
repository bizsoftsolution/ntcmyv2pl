import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HolidayComponent } from './backend/holiday/holiday.component';
import { HallDetailsComponent } from './backend/hall-details/hall-details.component';
import { RoomDetailsComponent } from './backend/room-details/room-details.component';
import { MemberListComponent } from './backend/member-list/member-list.component';
import { PropertyTableComponent } from './backend/property-table/property-table.component';
import { CompanyDetailComponent } from './backend/company-detail/company-detail.component';
import { PropertyComponent } from './backend/property/property.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './backend/navbar/navbar.component';
import { RoomTypeComponent } from './backend/room-type/room-type.component';
import { TariffTypeComponent } from './backend/tariff-type/tariff-type.component';
import { TariffDetailsComponent } from './backend/tariff-details/tariff-details.component';
import { HallTypeComponent } from './backend/hall-type/hall-type.component';
import { HallSlotComponent } from './backend/hall-slot/hall-slot.component';
import { AuditoriumComponent } from './backend/auditorium/auditorium.component';
import { PromoCodeDetailsComponent } from './backend/promo-code-details/promo-code-details.component';
import { AboutusComponent } from './frontend/aboutus/aboutus.component';
import { LoginComponent } from './backend/login/login.component';
import { HallTariffDetailsComponent } from './backend/hall-tariff-details/hall-tariff-details.component';
import { HomeComponent } from './frontend/home/home.component';
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

const routes: Routes = [
  { path: 'appComp', component: AppComponent },
  { path: 'menu', component: NavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'auditorium', component: AuditoriumComponent },
  { path: 'hall-type', component: HallTypeComponent },
  { path: 'hall-tariff-details', component: HallTariffDetailsComponent },
  { path: 'hall-slot', component: HallSlotComponent },
  { path: 'hall-details', component: HallDetailsComponent },
  { path: 'room-details', component: RoomDetailsComponent },
  { path: 'member-list', component: MemberListComponent },
  { path: 'property-table', component: PropertyTableComponent },
  { path: 'company', component: CompanyDetailComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'room-type', component: RoomTypeComponent },
  { path: 'tariff-type', component: TariffTypeComponent },
  { path: 'tariff-details', component: TariffDetailsComponent },
  { path: 'promo-code-details', component: PromoCodeDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'tariff', component: TariffComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'room-booking', component: RoomBookingComponent },
  { path: 'choose-room', component: ChooseRoomComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'hall-booking', component: HallBookingComponent },
  { path: 'choose-hall', component: ChooseHallComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
