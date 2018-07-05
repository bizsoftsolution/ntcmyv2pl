import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { State } from '../models/State';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<State>('Save_State').subscribe(x => {
      console.log(x);
      this.SaveState(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<State>('Delete_State').subscribe(x => {
      console.log(x);
      this.DeleteState(x, true);
    });
  }
  isValid(state: State): boolean {
    if (!state.Name || state.Name === '') {
      return false;
    }  if (!state.CountryId || state.CountryId === null || state.CountryId === 0) {
      return false;
    }  else {
      return true;
    }
  }

  SaveState(state: State, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.stateList.find(x => x.Id === state.Id);
      if (!d) {
        d = new State();
        this.AppLib.stateList = this.AppLib.stateList.filter(
          x => x.Id !== 0
        );
        this.AppLib.stateList.push(d);
        this.AppLib.stateList.push(new State());
      }
      d.Id = state.Id;
      d.Name = state.Name;
      d.CountryId = state.CountryId;
    } else {
      console.log(state);
      if (!this.isValid(state)) {
        return;
      }
      this.AppLib.con.invoke('Save_State', state).then(x => {
        if (state.Id !== x) {
          if (x !== 0) {
            this.AppLib.stateList.push(new State());
          }
        }
        state.Id = x;
      });
    }
  }

  DeleteState(state: State, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.stateList = this.AppLib.stateList.filter(
        x => x.Id !== state.Id
      );
    } else {
      if (confirm(`Are you delete this ${state.Name}?`)) {
        this.AppLib.con.invoke('Delete_State', state.Id).then(x => {
          if (x === true) {
            this.AppLib.stateList = this.AppLib.stateList.filter(
              y => y.Id !== state.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
