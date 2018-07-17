import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HolidayComponent } from './backend/holiday/holiday.component';


import { MemberListComponent } from './backend/member-list/member-list.component';
import { PropertyTableComponent } from './backend/property-table/property-table.component';
import { CompanyDetailComponent } from './backend/company-detail/company-detail.component';
import { PropertyComponent } from './backend/property/property.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './backend/navbar/navbar.component';

import { HallSlotComponent } from './backend/hall-slot/hall-slot.component';
import { AuditoriumComponent } from './backend/auditorium/auditorium.component';
import { PromoCodeDetailsComponent } from './backend/promo-code-details/promo-code-details.component';
import { AboutusComponent } from './frontend/aboutus/aboutus.component';
import { LoginComponent } from './backend/login/login.component';

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
import { HallSlotEditComponent } from './hall-slot-edit/hall-slot-edit.component';


import { PropertyEditComponent } from './property-edit/property-edit.component';

import { PromoCodeDetailEditComponent } from './promo-code-detail-edit/promo-code-detail-edit.component';

import { RoomDetailEditComponent } from './room-detail-edit/room-detail-edit.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemDetailEditComponent } from './item-detail-edit/item-detail-edit.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { BookingMasterComponent } from './backend/booking-master/booking-master.component';
import { BookingMasterEditComponent } from './backend/booking-master-edit/booking-master-edit.component';
import { BookingRoomEditComponent } from './backend/booking-room-edit/booking-room-edit.component';
import { BookingHallEditComponent } from './backend/booking-hall-edit/booking-hall-edit.component';
import { RoomMasterComponent } from './backend/room-master/room-master.component';
import { RoomMasterEditComponent } from './backend/room-master-edit/room-master-edit.component';
import { HallMasterComponent } from './hall-master/hall-master.component';
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
import { RegisterMemberComponent } from './frontend/register-member/register-member.component';
import { HallofunityGalleryComponent } from './frontend/hallofunity-gallery/hallofunity-gallery.component';
import { NtcMemberComponent } from './ntc-member/ntc-member.component';
import { NtcMemberEditComponent } from './backend/ntc-member-edit/ntc-member-edit.component';

const AdminRoutes: Routes = [ { path: 'menu', component: NavbarComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'holiday', component: HolidayComponent },
{ path: 'holidayEdit/:id', component: HolidayEditComponent },
{ path: 'auditorium', component: AuditoriumComponent },
{ path: 'auditoriumEdit/:id', component: AuditoriumEditComponent },

{ path: 'hall-slot', component: HallSlotComponent },
{ path: 'hallslotEdit/:id', component: HallSlotEditComponent },


{ path: 'member-list', component: MemberListComponent },
{ path: 'property-table', component: PropertyTableComponent },
{ path: 'company', component: CompanyDetailComponent },
{ path: 'property', component: PropertyComponent },
{ path: 'propertyEdit/:id', component: PropertyEditComponent },

{ path: 'promo-code-details', component: PromoCodeDetailsComponent },
{ path: 'promoCodeDetailEdit/:id', component: PromoCodeDetailEditComponent },
{path: 'roomDetail', component: RoomDetailComponent},
{ path: 'roomDetailEdit/:id', component: RoomDetailEditComponent},
{path: 'itemDetail', component: ItemDetailComponent},
{path: 'itemDetailEdit/:id', component: ItemDetailEditComponent},
{path: 'booking-master', component: BookingMasterComponent},
{path: 'bookingMasterEdit/:id', component: BookingMasterEditComponent},
{path: 'bookingRoomEdit', component: BookingRoomEditComponent},
{path: 'bookingHallEdit', component: BookingHallEditComponent},
{path: 'roomMaster', component: RoomMasterComponent},
{path: 'roomMasterEdit/:id', component: RoomMasterEditComponent},
{path: 'hallMaster', component: HallMasterComponent},
{path: 'hallMasterEdit/:id', component: HallMasterEditComponent},
{path: 'Register', component: RegisterMemberComponent},
{path: 'ntcMember', component: NtcMemberComponent},
{path: 'ntcMemberEdit/:id', component: NtcMemberEditComponent},
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
{ path: 'goldenarowanaGallery', component: GoldenarowanaComponent },
{ path: 'articGallery', component: ArticGalleryComponent },
{ path: 'pacificGallery', component: PacificGalleryComponent },
{ path: 'parkingGallery', component: ParkingGalleryComponent },
{ path: 'playgroundGallery', component: PlaygroundGalleryComponent },
{ path: 'ntcGallery', component: NtcGalleryComponent },
{ path: 'bluearowanaGallery', component: BluearowanaGalleryComponent },
{ path: 'harmonyGallery', component: HarmonyComponent },
{ path: 'solidarityGallery', component: SolidarityGalleryComponent },
{ path: 'atlanticGallery', component: AtlanticGalleryComponent },
{ path: 'cafeteriaGallery', component: CafeteriaGalleryComponent },
{ path: 'hallofunityGallery', component: HallofunityGalleryComponent },
{ path: 'Register', component: RegisterMemberComponent },
{ path: 'MemberProfile', component: RegisterMemberComponent },
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
