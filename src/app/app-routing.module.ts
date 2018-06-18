import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { HallDetailsComponent } from './components/hall-details/hall-details.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { PropertyTableComponent } from './property-table/property-table.component';
import { CompanyDetailComponent } from './Components/company-detail/company-detail.component';
import { PropertyComponent } from './components/property/property.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomTypeComponent } from './components/room-type/room-type.component';
import { TariffTypeComponent } from './components/tariff-type/tariff-type.component';
import { Navbar2Component } from './navbar2/navbar2.component';

const routes: Routes = [
  {path: 'appComp' , component: AppComponent},
  {path: 'menu' , component: NavbarComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'hall-details', component: HallDetailsComponent },
  { path: 'room-details', component: RoomDetailsComponent },
  { path: 'member-list', component: MemberListComponent },
  { path: 'property-table', component: PropertyTableComponent },
  { path: 'company', component: CompanyDetailComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'room-type', component: RoomTypeComponent },
  { path: 'tariff-type', component: TariffTypeComponent },
  { path: 'navbar2', component: Navbar2Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
