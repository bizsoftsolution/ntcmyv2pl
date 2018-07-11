import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HolidayComponent } from './backend/holiday/holiday.component';
import { HallDetailsComponent } from './backend/hall-details/hall-details.component';

import { MemberListComponent } from './backend/member-list/member-list.component';
import { PropertyTableComponent } from './backend/property-table/property-table.component';
import { CompanyDetailComponent } from './backend/company-detail/company-detail.component';
import { PropertyComponent } from './backend/property/property.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './backend/navbar/navbar.component';
import { RoomTypeComponent } from './backend/room-type/room-type.component';

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
import { MainAdminComponent } from './main-admin/main-admin.component';
import { AuthAdminGuard } from './auth-admin.guard';
import { HolidayEditComponent } from './holiday-edit/holiday-edit.component';
import { AuditoriumEditComponent } from './auditorium-edit/auditorium-edit.component';
import { HallTypeEditComponent } from './hall-type-edit/hall-type-edit.component';
import { HallTariffDetailEditComponent } from './hall-tariff-detail-edit/hall-tariff-detail-edit.component';
import { HallSlotEditComponent } from './hall-slot-edit/hall-slot-edit.component';
import { RoomTypeEditComponent } from './room-type-edit/room-type-edit.component';


import { PropertyEditComponent } from './property-edit/property-edit.component';
import { TariffDetailEditComponent } from './tariff-detail-edit/tariff-detail-edit.component';
import { PromoCodeDetailEditComponent } from './promo-code-detail-edit/promo-code-detail-edit.component';

import { RoomTypeDetailEditComponent } from './room-type-detail-edit/room-type-detail-edit.component';
import { RommTypeDetailComponent } from './backend/romm-type-detail/romm-type-detail.component';
import { RoomDetailEditComponent } from './room-detail-edit/room-detail-edit.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemDetailEditComponent } from './item-detail-edit/item-detail-edit.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { BookingMasterComponent } from './backend/booking-master/booking-master.component';
import { BookingMasterEditComponent } from './backend/booking-master-edit/booking-master-edit.component';

const AdminRoutes: Routes = [ { path: 'menu', component: NavbarComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'holiday', component: HolidayComponent },
{ path: 'holidayEdit/:id', component: HolidayEditComponent },
{ path: 'auditorium', component: AuditoriumComponent },
{ path: 'auditoriumEdit/:id', component: AuditoriumEditComponent },
{ path: 'hall-type', component: HallTypeComponent },
{ path: 'hallTypeEdit/:id', component: HallTypeEditComponent },
{ path: 'hall-tariff-details', component: HallTariffDetailsComponent },
{ path: 'hallTariffDetailEdit/:id', component: HallTariffDetailEditComponent },
{ path: 'hall-slot', component: HallSlotComponent },
{ path: 'hallslotEdit/:id', component: HallSlotEditComponent },
{ path: 'hall-details', component: HallDetailsComponent },

{ path: 'member-list', component: MemberListComponent },
{ path: 'property-table', component: PropertyTableComponent },
{ path: 'company', component: CompanyDetailComponent },
{ path: 'property', component: PropertyComponent },
{ path: 'propertyEdit/:id', component: PropertyEditComponent },
{ path: 'room-type', component: RoomTypeComponent },
{ path: 'roomTypeEdit/:id', component: RoomTypeEditComponent },
{ path: 'tariff-details', component: TariffDetailsComponent },
{ path: 'tarifDetailsEdit/:id', component: TariffDetailEditComponent },
{path: 'roomTypeDetail', component: RommTypeDetailComponent},
{path: 'roomTypeDetailEdit/:id', component: RoomTypeDetailEditComponent},
{ path: 'promo-code-details', component: PromoCodeDetailsComponent },
{ path: 'promoCodeDetailEdit/:id', component: PromoCodeDetailEditComponent },
{path: 'roomDetail', component: RoomDetailComponent},
{ path: 'roomDetailEdit/:id', component: RoomDetailEditComponent},
{path: 'itemDetail', component: ItemDetailComponent},
{path: 'itemDetailEdit/:id', component: ItemDetailEditComponent},
{path: 'booking-master', component: BookingMasterComponent},
{path: 'bookingMasterEdit/:id', component: BookingMasterEditComponent},
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }];

const PublicRoutes: Routes = [ { path: 'aboutus', component: AboutusComponent },
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
{ path: '', redirectTo: 'home', pathMatch: 'full' }];

const routes: Routes = [
{path: '', component: MainComponent, children: PublicRoutes},
{path: 'Admin', component: MainAdminComponent, children: AdminRoutes, canActivate: [AuthAdminGuard]},
{ path: 'login', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
