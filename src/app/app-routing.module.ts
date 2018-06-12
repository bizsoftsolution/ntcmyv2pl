import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './components/property/property.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { HallDetailsComponent } from './components/hall-details/hall-details.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { MemberListComponent } from './components/member-list/member-list.component';

const routes: Routes = [
  {path : '', redirectTo: '', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'property', component: PropertyComponent},
  { path: 'holiday', component: HolidayComponent},
  { path: 'hall-details', component: HallDetailsComponent},
  { path: 'room-details', component: RoomDetailsComponent},
  { path: 'member-list', component: MemberListComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
