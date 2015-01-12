//= require bootstrap
//= require underscore.js

var map;
var infowindow;
var myLat, myLong;
var currentPhotoIndex = 0;
var photos = photos = [




{
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh3.googleusercontent.com/-3cH8dj30DHw/U51iBSWYRHI/AAAAAAAAzFA/GCbP8HZv7Kk/w500-h500-s0/photo.jpg"
  },
  {
    "address": "La Casita - Gastown 101 West Cordova Street Vancouver Greater Vancouver British Columbia Canada V6B 1E1",
    "url": "https://lh3.googleusercontent.com/-8d7lNwzzHrE/VHkJNMnxUoI/AAAAAAABMIU/-dWk-Xhux2g/w500-h500-s0/photo.jpg"
  },
{
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh6.googleusercontent.com/-yoKTJXfPIa4/U51g5YHXr-I/AAAAAAAAzEI/JrQtD1zZuNI/w500-h500-s0/photo.jpg"
  },
  {
    "address": "Nuba in Gastown 207 West Hastings Street Vancouver Greater Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh4.googleusercontent.com/-AZUlDR9CC2w/UzsVz3LhiDI/AAAAAAAApxI/87t7fLv3_JQ/w500-h500-s0/photo.jpg"
  },

{
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh6.googleusercontent.com/-p4I25em4gFg/U51ngDG8R9I/AAAAAAAAzFw/sSvjIw_-JSM/w500-h500-s0/photo.jpg"
  },

{
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh4.googleusercontent.com/-MQT8lzLBE1E/U51hejg401I/AAAAAAAAzE8/6s_CR05YXhw/w500-h500-s0/photo.jpg"
  },
{
    "address": "The Charles Bar 136 West Cordova Street Vancouver British Columbia Canada V6B 5A7",
    "url": "https://lh5.googleusercontent.com/-iX_xGxxjlLE/Ukxz2ZYfcBI/AAAAAAAAMLg/TVCFlPTAz6g/w500-h500-s0/photo.jpg"
  },
  {
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh5.googleusercontent.com/-P-14f_7jEv0/U51hbLOT9CI/AAAAAAAAzEw/mulCy5IW_jo/w500-h500-s0/photo.jpg"
  },
{
    "address": "The Charles Bar 136 West Cordova Street Vancouver British Columbia Canada V6B 5A7",
    "url": "https://lh3.googleusercontent.com/-a7tJfHXHxus/Ukx0DTEtk0I/AAAAAAAAMMY/tQ0imkgdrDw/w500-h500-s0/photo.jpg"
  },
{
    "address": "Tim Hortons 108 West Pender Street Vancouver British Columbia Canada V6B 0K4",
    "url": "https://lh5.googleusercontent.com/-_5IhUZfkBM0/VE53DlrkyWI/AAAAAAABJHc/J7ly0elrWS4/w500-h500-s0/photo.jpg"
  },
  {
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh6.googleusercontent.com/-NYR8zaDhpWY/U51hMQ4rZCI/AAAAAAAAzEg/ikEE9iqOTa0/w500-h500-s0/photo.jpg"
  },
{
    "address": "Tim Hortons 108 West Pender Street Vancouver British Columbia Canada V6B 0K4",
    "url": "https://lh4.googleusercontent.com/-1aXI4Dx6zMA/VE53CEmx0HI/AAAAAAABJHM/AtAwt20fgCc/w500-h500-s0/photo.jpg"
  },
  {
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh6.googleusercontent.com/-65bjPzAh-1g/U51hXgBOf6I/AAAAAAAAzEs/yB1sumToONo/w500-h500-s0/photo.jpg"
  },
{
    "address": "Tim Hortons 108 West Pender Street Vancouver British Columbia Canada V6B 0K4",
    "url": "https://lh4.googleusercontent.com/-QtgSQC_EZg0/VE53FMJB6nI/AAAAAAABJHs/BrxDi5uFwY8/w500-h500-s0/photo.jpg"
  },
  {
    "address": "Catch 122 Cafe Bistro 122 West Hastings Street Vancouver British Columbia Canada V6B 1G8",
    "url": "https://lh5.googleusercontent.com/-0SY-EU41ErI/U51pJ4Ww7FI/AAAAAAAAAAc/Dylwu7DBZFg/w500-h500-s0/catch122.jpg"
  },
  {
    "address": "La Taqueria Pinche Taco Shop 322 West Hastings Street Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh6.googleusercontent.com/-6WY4_1y954Y/T8qnr3XA9sI/AAAAAAAAOOc/xJ1Y7Hc15YE/w500-h500-s0/La%2BTaqueria"
  },
{
    "address": "The Charles Bar 136 West Cordova Street Vancouver British Columbia Canada V6B 5A7",
    "url": "https://lh3.googleusercontent.com/-D-JsdiOkAmI/Ukx0FXzxfmI/AAAAAAAAMMg/rfQxnJlB-ls/w500-h500-s0/photo.jpg"
  },
{
    "address": "Tim Hortons 108 West Pender Street Vancouver British Columbia Canada V6B 0K4",
    "url": "https://lh6.googleusercontent.com/-021zXmuBZn0/VE52_iZBo1I/AAAAAAABJG0/YyHv_tQ2Ads/w500-h500-s0/photo.jpg"
  },

{
    "address": "The Charles Bar 136 West Cordova Street Vancouver British Columbia Canada V6B 5A7",
    "url": "https://lh5.googleusercontent.com/-AGzSA2dhhyY/Ukxz9z61mAI/AAAAAAAAMMA/9P0thVOUV_I/w500-h500-s0/photo.jpg"
  },  

{
    "address": "Revel Room 238 Abbott Street Vancouver Greater Vancouver British Columbia Canada V6B 2K8",
    "url": "https://lh6.googleusercontent.com/-404cynJ2_us/UfCbJw-a7ZI/AAAAAAAACIw/JF7LH5DgL2Y/w500-h500-s0/2013-07-24"
  },
  
  {
    "address": "La Casita - Gastown 101 West Cordova Street Vancouver Greater Vancouver British Columbia Canada V6B 1E1",
    "url": "https://lh4.googleusercontent.com/-iK5_6wZOhBo/VG-uYuL-7HI/AAAAAAABLhY/Z44OB1xs3-0/w500-h500-s0/photo.jpg"
  },

  
  
 {
    "address": "Nuba in Gastown 207 West Hastings Street Vancouver Greater Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh5.googleusercontent.com/-TkC4YdmEG14/UzsV0FXd0vI/AAAAAAAApxQ/NZkNG45Y5dQ/w500-h500-s0/photo.jpg"
  },
  {
    "address": "Tim Hortons 108 West Pender Street Vancouver British Columbia Canada V6B 0K4",
    "url": "https://lh6.googleusercontent.com/-zYRZOZPNe0w/VE53C5WI3CI/AAAAAAABJHU/6RzgnxxbNKk/w500-h500-s0/photo.jpg"
  },

  

  {
    "address": "Nuba in Gastown 207 West Hastings Street Vancouver Greater Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh6.googleusercontent.com/-szgoQQw6SfM/Uyn4Mfz7lnI/AAAAAAAAn1E/N3qMteBNKy0/w500-h500-s0/photo.jpg"
  },
  
  {
    "address": "Nuba in Gastown 207 West Hastings Street Vancouver Greater Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh3.googleusercontent.com/-p4X6wKBomtg/U7GdEj8HgdI/AAAAAAAAABQ/wBONTW3-6zU/w500-h500-s0/856782_10152354769519533_495034784_o.jpg"
  },
 
  {
    "address": "La Taqueria Pinche Taco Shop 322 West Hastings Street Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh3.googleusercontent.com/-V276GnakhOw/ULeEG1vwVUI/AAAAAAAAALI/WSUTZ27zU40/w500-h500-s0/la_taqueria_pinche.jpg"
  },
  
  

  {
    "address": "Nuba in Gastown 207 West Hastings Street Vancouver Greater Vancouver British Columbia Canada V6B 1K6",
    "url": "https://lh4.googleusercontent.com/-OFDSyKMOKl8/Uyn4JWzVl-I/AAAAAAAAn08/sFLBSRPTP7o/w500-h500-s0/photo.jpg"
  },

];
goodfood = [];
var badfood = [];
var notfood = [];
var nextImage = 0;
var nearbyPlaces = [];
var minPriceLevel = 0;
var firstPlace;
var hasLoadedFirstImage = false;



// ======================FINDS CURRENT LOCATION =======================

function initiate_geolocation() {                    //function is grabbing lat & long based on users location using html5 function
  // for development
  myLat = 49.282023099999996;
  myLong = -123.1084264;

  // myLat = 43.6672585;
  // myLong = -79.3857813;
  
  var currentLocation = new google.maps.LatLng(myLat, myLong);  

  var request = {                                             // creating variable and assigning search results
    location: currentLocation,
    // radius: 20000,
    minPriceLevel : minPriceLevel,
    types: ['restaurant'],
    rankBy: google.maps.places.RankBy.DISTANCE
  };
  var service = new google.maps.places.PlacesService(document.getElementById('hidden-thing'));  // ????
  service.nearbySearch(request, callback);

  // for production
  /* navigator.geolocation.getCurrentPosition(function(position){   // browser asks user to approve getting location
    
    // myLat = position.coords.latitude;
    // myLong = position.coords.longitude;

    var currentLocation = new google.maps.LatLng(myLat, myLong);  // WE THINK this is generating the map and assigning to myLocation

    var request = {                                             // creating variable and assigning search results
      location: currentLocation,
      radius: 120,
      types: ['restaurant']
    };
    //infowindow = new google.maps.InfoWindow();                  // infoWindow shown when you click on pin in the map
    var service = new google.maps.places.PlacesService(document.getElementById('hidden-thing'));  // ????
    service.nearbySearch(request, callback);                    // Think that nearbySearch  is a google function which takes 2 params request and callback
  }); */
};

function callback(results, status, pagination) {                         //function takes results & status

  if (status == google.maps.places.PlacesServiceStatus.OK) {      //if the API call works (getting data back then...)
    nextNearbyPlaceIndex = 0;                                     //set nextNearbyPlaceIndex = 0  ALSO DOING THIS ABOVE NOT SURE WHY
                    
    results = _.reject(results, function(place) {
      return place.photos == undefined
    });
    // debugger
    nearbyPlaces = nearbyPlaces.concat(results);
    console.log(nearbyPlaces)

    populatePhotos(function(photos){               // ADD IF STATEMENT
      hasLoadedFirstImage = true;
      console.log("got: " + photos.length);
      
      $.each(photos, function(index, photo){
        loadImage(photo, index); 
      });

      activatejTinder();
      
      if (pagination.hasNextPage){ 
         pagination.nextPage();
        // initiate_geolocation();
      }
    }, function(){
      alert("OH NO! You're nowhere near restaurants. Are you at Knight and 54th?");
      //do something else
    });                                         // calls the function above  line 48
  }
}

function checkGoodfood() {
    if (goodfood.length == 4) {
      $( "button" ).remove();
      $( ".instruction" ).remove();
      $( "#tinderslide" ).remove();
      $.each(goodfood, function( index, value ) {
      var elemental = $('<li><img data-addresses="' + value.addresses + '" src="' + value.url + '"/></li>');
      
      

      $( ".goodfood-container #favorites" ).append(elemental);
      $( ".goodfood-container #favorites" ).css("display","block");
      $( ".after-instruction" ).show();
   
      });


      $(".goodfood-container #favorites img").on('click', function (e) {
        window.location = "https://maps.google.ca/maps?q=" + e.target.getAttribute('data-addresses');
      });
    }
  }



function activatejTinder() {

  $("#tinderslide").jTinder({
    onDislike: function (item) {
      // given photos, and currentPhotoIndex
      // need to find out the next photo
        // getNextImage();
        console.log('Dislike image ' + (item.index()+1));
    },
    onLike: function (item) {
        // getNextImage();

        var url = $(item).data("photoUrl");
        var addresses = ($(item).data("address"));

        // url = $("body").data("current-image-url");
        // addresses = ($("body").data("current-image-address"));
        goodfood.push({url : url, addresses : addresses});

        console.log('Like image ' + (item.index()+1));
        checkGoodfood()
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
  });
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

// ======================FINDS IMAGES ATTACHED TO BUSINESSES =======================

var priceRangeSelect = function (e) {
  e.preventDefault();
  minPriceLevel = $(this).val();
  // $('#tinderslide').children().remove();
  photos = [];
  nearbyPlaces = [];
  initiate_geolocation(); 
};


function loadImage(photo, paneNumber) {
  var pane = $("<li class=\"pane" + paneNumber + "\">" +
    "<div class=\"img\" style=\"background:url(\'" + photo.url + "\') no-repeat scroll center center;\"></div>" +
      "<div> <-- swipe --> </div>" + //" + paneNumber + "
      "<div class=\"like\"></div>" +
      "<div class=\"dislike\"></div>" +
    "</li>");
  pane.data('photoUrl', photo.url);
  pane.data('address', photo.address);

  $("#tinderslide ul").append(pane);

  // $('#tinderslide .pane' + nextImage + ' .img').css("background", "url(\"" + photo.url + "\") no-repeat scroll center center");

  // $("body").data("current-image-url", photo.url);
  // $("body").data("current-image-address", photo.address);
  // $('#tinderslide').html(elemental);  // jquery sets elem variable to html image placeholder
};

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// function getNextImage() {
//   if(nextImage < photos.length) {
//     loadImage(photos[nextImage]);
//     nextImage++;
//   } 
// }

function populatePhotos(success, error) {
  var tmpPhotos = [];
  //nearbyPlaces is an array holding all current businesses
  if(nearbyPlaces.length > 0) {
    for(var i = 0; i < nearbyPlaces.length; i++) {  
      //var place is itereating through each business
      var place = nearbyPlaces[i];
      //setting variable equal to what we need from the object
      var detailsRequest = {
        // placeId is from google API        ?????????????????????                                      
        placeId: place.place_id                                   
      };
      var detailService = new google.maps.places.PlacesService(document.getElementById('hidden-thing'));  // map shit and I think hiding it

      detailService.getDetails(detailsRequest, function(placeResult, placeServiceStatus) {    // another API call based on details request which is the placeid
        

        if(!hasLoadedFirstImage && photos.length > 0){
          success(photos);     
        }
        if (placeServiceStatus == google.maps.places.PlacesServiceStatus.OK) {                // if the data is okay
          if(placeResult && placeResult.photos) {   // Do we still need this?                                          // asking for the photo
            var address = placeResult.name + ' ' + _.inject(placeResult.address_components, function(memo, component) {
              memo.push(component.long_name);
              return memo;
            }, []).join(' ');
            for(i = 0; i < placeResult.photos.length; i++) {
              tmpPhotos.push({
                address : address,
                url : placeResult.photos[i].getUrl({                                                     // sets url to first photo with max height & width  - getUrl is a google api function 
                maxHeight: 500,
                maxWidth: 500
              })});
            }
            
          }
        }
      // photos = shuffle(tmpPhotos);

      });
console.log("photos", photos)
    }
    
  } else {
    error();
  }
}

// ====================== PICTURE SELECTORS ======== =======================

$(document).ready(function() {

    // var element = document.getElementById('tinderslide');
    // var movepic = new Hammer(element);

  // movepic.on("swip", function(ev) {
  // });

//     var myElement = document.getElementById('myElement');

// // create a simple instance
// // by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);

// // listen to events...
// mc.on("panleft panright tap press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });


  $('#price-select').on('change', priceRangeSelect);  


  // bind a click event to clicking on the #goodfood button

      // $("body").on('click', '.like' function () {                                              // sets click function on the picture. 
      //   url = $("body").data("current-image-url");
      //   addresses = ($("body").data("current-image-address"));
      //   goodfood.push({url : url, addresses : addresses});
      //    });

      console.log("goodfood", goodfood)

  // movepic.on('swiperight', function (ev) {                                              // sets click function on the picture. 
    // var elementToDrag = event.target;
    // elementToDrag.style.left = event.gesture.deltaX + 'px';

    // url = $("body").data("current-image-url");
    // addresses = ($("body").data("current-image-address"));
    // goodfood.push({url : url, addresses : addresses});

          //add your other targets here
     
    // if (goodfood.length == 4) {
    //   $( "button" ).remove();
    //   $( ".instruction" ).remove();
    //   $( "#tinderslide" ).remove();
    //   $.each(goodfood, function( index, value ) {
    //   var elem = $('<li><img data-addresses="' + value.addresses + '" src="' + value.url + '"/></li>');
      
      

    //   $( ".goodfood-container #favorites" ).append(elem);
    //   $( ".goodfood-container #favorites" ).css("display","block");
    //   $( ".after-instruction" ).show();
   
    //   });


    //   $(".goodfood-container #favorites img").on('click', function (e) {
    //     window.location = "https://maps.google.ca/maps?q=" + e.target.getAttribute('data-addresses');
    //   });
    // }
  //   getNextImage();                                                     // after click gets next nearby place
  // });

  // movepic.on('swipeleft ', function (ev) {  
  //   url = $("body").data("current-image-url");
  //   badfood.push(url);
  //   getNextImage();                                                     // after click gets next nearby place
  // });

  // $(".btn-danger").on('click', function () {                                              // sets click function on the picture. 
  //   url = $("body").data("current-image-url");
  //   badfood.push(url);
  //   getNextImage();                                                     // after click gets next nearby place
  // });


  // $(".btn-warning").on('click', function () {                                              // sets click function on the picture. 
  //   url = $("body").data("current-image-url");
  //   notfood.push(url);
  //   getNextImage();                                                     // after click gets next nearby place
  // });

  // initialize the map on load
  //google.maps.event.addDomListener(window, 'load', initiate_geolocation());
  initiate_geolocation();
// updateUI();

// 








});