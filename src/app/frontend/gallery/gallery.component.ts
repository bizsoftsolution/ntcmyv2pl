import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {

  /* Gallery Isotope */
GalleryIsotope() {
  if ($('.gallery').length ) {
      $('.gallery').each(function(index, el) {
          // tslint:disable-next-line:prefer-const
          let $this = $(this);
              // tslint:disable-next-line:prefer-const
              let isotope = $this.find('.gallery-isotope');
              // tslint:disable-next-line:prefer-const
              let filter = $this.find('.gallery-cat');

              if (isotope.length) {
                  // tslint:disable-next-line:no-shadowed-variable
                  const isotope_run = function(filter) {
                      isotope.isotope({
                          itemSelector: '.item-isotope',
                          filter: filter,
                          percentPosition: true,
                          masonry: { columnWidth: '.item-size'},
                          transitionDuration: '0.8s',
                          hiddenStyle: { opacity: 0 },
                          visibleStyle: { opacity: 1 }
                      });
                  };

                  filter.on('click', 'a', function(event) {
                      event.preventDefault();
                      $(this).parents('ul').find('.active').removeClass('active');
                      $(this).parent('li').addClass('active');
                      isotope_run($(this).attr('data-filter'));
                  });

                  isotope_run('*');
              }
      });
  }
}

    /* Popup Gallery */

    GalleryPopup() {

        if($('.gallery_item').length) {

            $('.gallery_item').each(function(index, el) {
                $(this).magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    mainClass: 'mfp-with-zoom',
                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: 'ease-in-out',
                    },
                    gallery: {
                        enabled: true,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-prevent-%dir% lotus-icon-%dir%-arrow"></button>',
                        tPrev: '',
                        tNext: ''
                    }
                });
            });
        }
    }

ngAfterViewInit(): void {
  this.GalleryIsotope();
  this.GalleryPopup();
}

}
