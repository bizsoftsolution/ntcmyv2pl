import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  title = 'app';
  name: string[];

  isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        this.isMobile.Android() ||
        this.isMobile.BlackBerry() ||
        this.isMobile.iOS() ||
        this.isMobile.Opera() ||
        this.isMobile.Windows()
      );
    }
  };


  DatePicker() {
    $( '.awe-calendar:not(.from, .to)' ).datepicker({
        prevText: '<i class="lotus-icon-left-arrow"></i>',
        nextText: '<i class="lotus-icon-right-arrow"></i>',
        buttonImageOnly: false
    });

    /* Datepicker from - to */
    $( '.awe-calendar.from' ).datepicker({
        prevText: '<i class="lotus-icon-left-arrow"></i>',
        nextText: '<i class="lotus-icon-right-arrow"></i>',
        buttonImageOnly: false,
        minDate: 0,
        onClose: function( selectedDate ) {
            // tslint:disable-next-line:prefer-const
            let newDate = new Date(selectedDate),
                // tslint:disable-next-line:prefer-const
                tomorrow =  new Date(newDate.getTime() + 24 * 60 * 60 * 1000),
                // tslint:disable-next-line:prefer-const
                nextDate = (tomorrow.getMonth() + 1) + '/' + tomorrow.getDate() + '/' + tomorrow.getFullYear();
            $( '.awe-calendar.to' ).datepicker('option', 'minDate', nextDate).focus();
        }
    });
    $( '.awe-calendar.to' ).datepicker({
        prevText: '<i class="lotus-icon-left-arrow"></i>',
        nextText: '<i class="lotus-icon-right-arrow"></i>',
        buttonImageOnly: false,
        minDate: 0,
        onClose: function( selectedDate ) {
        }
    });
}


  ngAfterViewInit(): void {
    this.DatePicker();
  }
}

