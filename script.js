$(document).ready(function(){
  var today = new Date();
  var year = today.getFullYear();
				  
	document.getElementById("copyright").innerHTML = "Copyright &copy; " + year + " Fady Yecob All rights reserved.";
				  
	$( "#sendMailButton" ).click(function() {
		 var name = $('#nameForm').val();
		 var email = $('#emailForm').val();
		 var company = $('#companyForm').val();
		 var text = $('#textForm').val();
								 
		 if (name == null || email == null || text == null || name == "" || email == "" || text == "") {
			window.alert("Please fill in all the required information.")
			return
		 }
								 
		 var mailButton = $('#sendMailButton');
								 
		 var templateParams = {
			 from_name: name,
			 company: company,
			 reply_to: email,
			 message_html: text
		 };
		 
		 mailButton.prop('disabled', true);
								 
		mailButton.prop('value', 'Sending...');
		 emailjs.send('gmail', 'template_foxrWcuP', templateParams)
		 .then(function(response) {
			   mailButton.prop('value', 'Message sent!');
			   window.alert("Message sent! We'll get back to you as soon as possible!");
			   }, function(error) {
			   mailButton.prop('disabled', false);
			   window.alert("Couldn't send the form, try again later.");
			});
	});
                  
  $( "#lightModeButton" ).click(function() {
    document.documentElement.style.setProperty('--primaryColor', "rgb(242, 242, 242)");
    document.documentElement.style.setProperty('--primaryColorTransparent', "rgba(50, 50, 50, 0.8)");
//    document.documentElement.style.setProperty('--primaryColorPartlyTransparent', "rgba(242, 242, 242, 0.95)");

//    document.documentElement.style.setProperty('--tintColor', "rgb(0, 122, 255)");
//    document.documentElement.style.setProperty('--highlightTintColor', "rgb(0, 122, 255)");
//    document.documentElement.style.setProperty('--highlightColor', "rgb(0, 122, 255)");
                                
    document.documentElement.style.setProperty('--backgroundColorTransparent', "rgba(255, 255, 255, 0.5)");
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--foregroundColor', 'black');
                                
    $(".icon").css("filter", "invert(100%)");
                               
  });
				  
	var isPlaying = true;
	var pausePlay = document.getElementById("pausePlay");
  $('#pause').click(function() {
	if (isPlaying) {
		pausePlay.src = 'icons/play.png';
		$('.imageCarousel').slick('slickPause');
		isPlaying = false;
	} else {
		pausePlay.src = 'icons/pause.png';
		$('.imageCarousel').slick('slickPlay');
		isPlaying = true;
	}
					
  });
				  
				  
  var testimonialsIsPlaying = true;
  var testimonialsPausePlay = document.getElementById("testimonialsPausePlay");
  $('#testimonialsPause').click(function() {
        if (testimonialsIsPlaying) {
            testimonialsPausePlay.src = 'icons/play.png';
            $('.testimonialCarousel').slick('slickPause');
            testimonialsIsPlaying = false;
        } else {
            testimonialsPausePlay.src = 'icons/pause.png';
            $('.testimonialCarousel').slick('slickPlay');
            testimonialsIsPlaying = true;
        }
					
	});
		
  $('.testimonialCarousel').slick({
      dots: true,
      customPaging: function(slider, i) {
      // this example would render "tabs" with titles
            return '<span style="width:100%;height:100%;"> <img class="slick-dot" style="width:100%;height:100%;" src="icons/dot.png"></img></span>';
      },
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('#testimonialsPrev'),
		nextArrow: $('#testimonialsNext'),
		autoplay: false,
		autoplaySpeed: 3500,
		adaptiveHeight:true,
		responsive: [
					 {
					 breakpoint: 1024,
					 settings: {
					 slidesToShow: 2,
					 slidesToScroll: 1,
					 centerMode: true,
					 infinite: true
					 }
					 },
					 {
					 breakpoint: 600,
					 settings: {
					 slidesToShow: 2,
					 centerMode: false,
					 slidesToScroll: 1
					 }
					 },
					 {
					 breakpoint: 480,
					 settings: {
					 slidesToShow: 1,
					 centerMode: false,
					 slidesToScroll: 1
					 }
					 }
					 // You can unslick at a given breakpoint now by adding:
					 // settings: "unslick"
					 // instead of a settings object
					 ]
		});

				  
  $('.imageCarousel').slick({
	 infinite: true,
    dots: true,
    customPaging: function(slider, i) {
    // this example would render "tabs" with titles
    return '<span style="width:100%;height:100%;"> <img class="slick-dot" style="width:100%;height:100%;" src="icons/dot.png"></img></span>';
    },
	 speed: 500,
     lazyLoad: 'ondemand',
	 slidesToShow: 3,
	 slidesToScroll: 1,
	 prevArrow: $('#carouselPrev'),
	 nextArrow: $('#carouselNext'),
	 autoplay: true,
	 autoplaySpeed: 3500,
	 adaptiveHeight:true,
	 responsive: [
		  {
		  breakpoint: 1024,
		  settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true
		  }
		  },
		  {
		  breakpoint: 600,
		  settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		  }
		  },
		  {
		  breakpoint: 480,
		  settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		  }
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		  ]
 });
 
 
 var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');
                  
    var modalPopup = null;
    var shadowDiv = null;
                  
                  
    $( ".showMore" ).click(function() {
                        
        document.body.style.overflow = 'hidden';
                           
        modalPopup = $(this).parent().clone();
                         
        modalPopup.appendTo($(".imageCarousel").parent());
        modalPopup.removeAttr("style");
                         
         modalPopup.addClass('box_full');
                           
        modalPopup.children('.closeBox').show();
                           
                         
         shadowDiv = document.createElement( "div" )
         shadowDiv.className = "modal";
                           
            $(".imageCarousel").parent().append(shadowDiv)
                        
             $( ".modal" ).click(function() {
                 modalPopup.css( {transform:  "scale(0.1)",
                                   transition: "all .7s ease-in-out"
                } );
                 
                setTimeout(function(){
                           modalPopup.remove();
                           shadowDiv.remove();
                           
                           document.body.style.overflow = 'auto';
                    }, 500);
                                 
             });
                           
           $( ".closeBox" ).click(function() {
              modalPopup.css( {transform:  "scale(0.1)",
                             transition: "all .7s ease-in-out"
                    } );
              
              setTimeout(function(){
                         modalPopup.remove();
                         shadowDiv.remove();
                         
                         document.body.style.overflow = 'auto';
                }, 500);
          
          });
    });
                
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
}
    });
               
});
