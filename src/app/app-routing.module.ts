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
import { HomeComponent } from './frontend/home/home.component';
import { AboutusComponent } from './frontend/aboutus/aboutus.component';
import { LoginComponent } from './backend/login/login.component';
import { HallTariffDetailsComponent } from './backend/hall-tariff-details/hall-tariff-details.component';

const routes: Routes = [
  {path: 'appComp' , component: AppComponent},
  {path: 'menu' , component: NavbarComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
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
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
