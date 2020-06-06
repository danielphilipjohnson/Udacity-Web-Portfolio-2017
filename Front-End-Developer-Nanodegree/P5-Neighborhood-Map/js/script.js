var deselected = false;
var markers = [];

var locations = [
    ['Sennen', 50.0722231, -5.6989485, 4, 'visited'],
    ['Porthcurno', 50.0452198, -5.6652907, 5, 'visited'],
    ['Minack Theatre', 50.040004, -5.6611024, 3, 'notvisited'],
    ['Botallack', 50.1326477, -5.6927381, 2, 'visited'],
    ['St Ives', 50.2106736, -5.5054389, 1, 'visited'],
    ['Hayle', 50.1849164, -5.4455896, 6, 'visited'],
    ['Gwithian', 50.219449, -5.388760, 7, 'visited'],
    ['Marazion', 50.1277873, -5.4836227, 8, 'notvisited'],
    ['Penzance', 50.1196207, -5.5781513, 9, 'notvisited'],
    ['Porthgwarra', 50.0371557, -5.6743855, 10, 'visited'],
    ['Mousehole', 50.082786, -5.5493099, 11, 'notvisited'],
    ['Lamorna', 50.0672073, -5.5727157, 12, 'notvisited'],
    ['St Just', 50.126777, -5.695046, 13, 'notvisited'],
    ['Newlyn', 50.1020977, -5.5698346, 14, 'notvisited'],
    ['Zennor', 50.1910438, -5.5734626, 15, 'notvisited'],
    ['Porthleven', 50.0872088, -5.334227, 17, 'visited']
];

// Adds specified markers to the map and push to the marker array.
function addMarkers(locations, selectedtype = "all") {
    // go over every location
    for (i = 0; i < locations.length; i++) {
        // fetch all the selected types from locations and add a marker
        if (locations[i][4] == selectedtype || selectedtype == 'all') {
            var marker = new google.maps.Marker({
                position: { lat: locations[i][1], lng: locations[i][2] },
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                    $('.list-menu').click(function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    })
                    $('aside').removeClass('menu-hidden');
                    locationInfo(locations[i]);
                }
            })(marker, i));
            markers.push(marker);
        }
    }
}

function addMarker(location, type = "all") {
    if (location[4] == type || type == 'all') {
        var marker = new google.maps.Marker({
            position: { lat: location[1], lng: location[2] },
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(location[0]);
                infowindow.open(map, marker);
                $('.list-menu').click(function() {
                    infowindow.setContent(location[0])
                    infowindow.open(map, marker);
                });
                $('aside').removeClass('menu-hidden');
                locationInfo(location);
            }
        })(marker));
        markers.push(marker);
    }
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(50.085871, -5.7108391),
        mapTypeId: 'terrain'
    });
    //on start add info windos and set all markers
    infowindow = new google.maps.InfoWindow();
    addMarkers(locations);
}

// Knockout
var PlacesModel = function() {
        this.places = ko.observableArray([
            { name: 'Hayle', type: 'visited' },
            { name: 'St ives', type: 'visited' },
            { name: 'Sennen', type: 'visited' },
            { name: 'Porthgwarra', type: 'visited' },
            { name: 'Penzance', type: 'notvisited' },
            { name: 'Bottallack', type: 'visited' },
            { name: 'St Buryan', type: 'visited' },
            { name: 'Gwithian', type: 'visited' },
            { name: 'Porthcurno', type: 'visited' },
            { name: 'Mousehole', type: 'notvisited' },
            { name: 'Lamorna', type: 'notvisited' },
            { name: 'St Just', type: 'notvisited' },
            { name: 'Newlyn', type: 'notvisited' },
            { name: 'Zennor', type: 'notvisited' },
            { name: 'Marazion', type: 'notvisited' },
            { name: 'Porthleven', type: 'visited' },
            { name: 'Minack Theatre', type: 'visited' }
        ]);
        this.typeToShow = ko.observable('all');
        this.displayAdvancedOptions = ko.observable(false);
        this.placesToShow = ko.computed(function() {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = this.typeToShow();
                if (desiredType == 'all' && deselected) {
                    deleteMarkers();
                    addMarkers(locations);
                    return this.places();
                }
                if (desiredType == 'all') {
                    return this.places();
                }
                return ko.utils.arrayFilter(this.places(), function(place) {
                    // if planet is blah add a marker 
                    if (desiredType == 'notvisited') {
                        deselected = true;
                        deleteMarkers();
                        addMarkers(locations, 'notvisited');
                    }
                    if (desiredType == 'visited') {
                        deselected = true;
                        deleteMarkers();
                        addMarkers(locations, 'visited');
                    }

                    return place.type == desiredType;
                })
            }, this)
            // Animation callbacks for the planets list
        this.showPlacesElement = function(elem) { if (elem.nodeType === 1) $(elem).hide().slideDown(); }
        this.hidePlacesElement = function(elem) { if (elem.nodeType === 1) $(elem).slideUp(function() { $(elem).remove(); }) }
    }
    // Here's a custom Knockout binding that makes elements shown/hidden via jQuery's fadeIn()/fadeOut() methods
    // Could be stored in a separate utility library
ko.bindingHandlers.fadeVisible = {
    init: function(element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
        $(element).toggle(ko.utils.unwrapObservable(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
    },
    update: function(element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();
        ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
    }
}

ko.applyBindings(new PlacesModel());

// Buttons 
$('.hamburger-btn').click(function() {
    $('.places').toggleClass('places-hidden');
})

$('main').click(function(event) {
    event.stopPropagation();
    $('aside').addClass('menu-hidden');
});

$('.search-btn').click(function() {
    var myval = $('.search-input').val().trim().toLowerCase();
    if (myval.length > 1) {
        matchSearchTerm(myval);

    } else {

        $('#autocomplete').attr('placeholder', 'no match');
        $('#autocomplete').val('');
    }

    function matchSearchTerm(myval) {
        for (var i = 0; i < locations.length; i++) {
            // if it is a straight match then great XD
            if (locations[i][0].toLowerCase() == myval) {
                clearMarkers();
                addMarker(locations[i], "all");
                locationInfo(locations[i]);
                return;
            } else if (locations[i][0].toLowerCase().startsWith(myval) && myval.length > 1) {
                clearMarkers();
                addMarker(locations[i], "all");
                locationInfo(locations[i]);
                return;
            } else if (locations[i][0].toLowerCase().endsWith(myval) && myval.length > 1) {
                clearMarkers();
                addMarker(locations[i], "all");
                locationInfo(locations[i]);
                return;
            }
        }
        for (var i = 0; i < locations.length; i++) {
            var start = 0;
            var mid = 0;
            var end = myval.length;
            var midForEnd = 0;
            var endForEnds = myval.length;
            // binary search string
            while (start != end) {
                // zero to midpoint 
                mid = Math.floor(start + end / 2);
                // midpoint to end of string
                midForEnd = Math.ceil((midForEnd += endForEnds) / 2);
                var editedStr = myval.substring(start, mid);

                var seceditedStr = myval.substring(midForEnd, endForEnds);

                if (locations[i][0].toLowerCase().startsWith(editedStr) && end >= 1 && editedStr.length > 1) {
                    clearMarkers();
                    addMarker(locations[i], "all");
                    locationInfo(locations[i]);
                    end = 0;
                    return;
                } else if (locations[i][0].toLowerCase().endsWith(seceditedStr) && seceditedStr.length > 1) {
                    clearMarkers();
                    addMarker(locations[i], "all");
                    locationInfo(locations[i]);
                    return;
                }
                end = mid;
            }
        }
        $('#autocomplete').attr('placeholder', 'no match');
        $('#autocomplete').val('');
    }
});


var tags = ['Sennen', 'Porthcurno', 'Minack Theatre', 'Botallack', 'St Ives', 'Hayle',
    'Gwithan', 'Marazion', 'Penzance', 'Porthgwarra', 'Mousehole', 'Lamorna', 'St Just', 'Newlyn', 'Zennor', 'Porthleven'
];
$('#autocomplete').autocomplete({
    source: function(request, response) {
        var matcher = new RegExp('^' + $.ui.autocomplete.escapeRegex(request.term), 'i');
        response($.grep(tags, function(item) {
            return matcher.test(item);
        }))
    }
});

function locationInfo(locArr, addMarker) {
    var searchLocation = locArr[0].toLowerCase().replace(" ", "");
    $.getJSON("http://localhost:8000/json/" + searchLocation + ".json", function(data) {
        $('.place-name').html(data['query']['search'][0]['title']);
        $('#facts-text').html(data['query']['search'][0]['snippet']);
        $('#secondary-text').html(data['query']['search'][1]['snippet'] + "<a href='www.wikipedia.com'> Wikipedia</a>");
        $('.place-img').attr('src', '/img/' + searchLocation + '.jpg');
        $('.photos-responsive').attr('src', '/img/' + searchLocation + '1.jpg');
        $('aside').removeClass('menu-hidden');
        $('#autocomplete').attr('placeholder', searchLocation);
    });
}