<template>
  <section class="map w-full">
    <div class="flex flex-wrap bg-gray-100  p-10">
      <div class="w-full ">
        <input
          ref="input"
          v-model="locationName"
          class="appearance-none block w-full bg-white text-black text-lg rounded p-5 font-fat leading-tight shadow-lg focus:outline-none focus:shadow-indoor focus:text-indoor"
          type="text"
          placeholder="Votre adresse complète"
        />
      </div>
    </div>
    <div ref="map" class="map-main px-10 bg-gray-100" />
    <div ref="infoContent" class="map-info" >
        <span class="map-info__title font-fat text-2xl text-indoor text-center w-full block">{{ placeName }}</span>
        <span class="font-simple text-md text-gray-400 text-center block">{{ placeAddress }}</span>
    </div>


  </section>
</template>
<script lang="ts">
    import Vue from 'vue'
    import { mapGetters} from 'vuex'
    import loadGoogleMapsApi from 'load-google-maps-api'
    declare const gmap: any;
    export default Vue.extend({
        
        name: 'Map',
        data() {
            return {
                coord: {
                    lat:'43.604500',
                    lng:'1.444000'
                },
                locationName:'',
                locationAddress:'',
                locationCoordinate:{},
                placeIcon:'',
                placeName:'',
                placeAddress:'',
                defaultZoom: 14,
                gmap: {},
                map:'',
                imagee: {},
                mapService:'',
                mapAutoComplete:'',
                mapInfoWindow:'',
                mapMarker:'',
                location: {
                    street_number: "",
                    rue: "",
                    city: "",
                    area: "",
                    zipcode: "",
                    country: "",
                },
            }
        },
        computed: {
            ...mapGetters({profil: 'profil'}),         
        },
        mounted() {
            this.initMap()
        },
        methods: {  
            async initMap() {
                this.imagee = {
                    url: "/marker.png",
                };
                this.gmap = await loadGoogleMapsApi({
                    key: process.env.NUXT_ENV_GOOGLE_PLACES_KEY,
                    libraries: ['places'],
                    language: 'fr'
                });
                // Initialize
                this.mapAutoComplete = new (this as any).gmap.places.Autocomplete(this.$refs.input);
                this.map = new (this as any).gmap.Map(this.$refs.map, {
                    center: new (this as any).gmap.LatLng(this.coord.lat, this.coord.lng),
                    zoom: this.defaultZoom,
                    mapTypeControl: false,
                    clickableIcons: false,
                    streetViewControl: false,
                    mapId: "c0d1867fdf8faa9",
                    scrollwheel: false,
                    heading: 320,
                    tilt: 80,

                });
 
                this.mapInfoWindow = new (this as any).gmap.InfoWindow();
                this.mapMarker = new (this as any).gmap.Marker({
                    map: this.map,
                    icon: this.imagee,
                });
                // For auto-complete
                this.initAutoComplete();
                // For getting map info in clicking map
                this.mapService = new (this as any).gmap.places.PlacesService(this.map);
                (this as any).map.addListener('click', this.handleClickPOI.bind(this));
            },

            initAutoComplete() {
                //(this as any).mapAutoComplete.bindTo('bounds', (this as any).map);
                (this as any).mapAutoComplete.setFields([
                    'address_components',
                    'geometry',
                    'icon',
                    'name',
                    'formatted_address'
                ]);
                (this as any).mapInfoWindow.setContent(this.$refs.infoContent);
                (this as any).mapAutoComplete.addListener('place_changed', () => {
                    this.onClickLocation();
                });
            },
            onClickLocation() {
                (this as any).mapInfoWindow.close();
                (this as any).mapMarker.setVisible(false);
                const place = (this as any).mapAutoComplete.getPlace();
                for (var i = 0; i < place.address_components.length; i++) {
                    var component = place.address_components[i];
                    for (var j = 0; j < component.types.length; j++) {
                        if (component.types[j] == "postal_code") { 
                            this.location.zipcode = component.long_name   
                            console.log(this.location.zipcode )                   
                        }                
                        if (component.types[j] == "country") {
                            this.location.country = component.long_name   
                            console.log(this.location.country )                    
                        }
                        if (component.types[j] == "street_number") {
                            this.location.street_number = component.long_name       
                            console.log(this.location.street_number )                   
                        }
                        if (component.types[j] == "route") {
                            this.location.rue = component.long_name  
                            console.log(this.location.rue )                     
                        }
                        if (component.types[j] == "administrative_area_level_1") {
                            this.location.area = component.long_name   
                            console.log(this.location.area )                    
                        }
                        if (component.types[j] == "locality") {
                            this.location.city = component.long_name   
                            console.log(this.location.city )                    
                        }
                    };
                };
                if (place.geometry.viewport) {
                    (this as any).map.fitBounds(place.geometry.viewport);
                } else {
                    (this as any).map.setCenter(place.geometry.location);
                };
                (this as any).mapMarker.setPosition(place.geometry.location);
                (this as any).mapMarker.setVisible(true);
                // Display info window
                this.placeIcon = "/marker.png";
                this.placeName = place.name;
                this.placeAddress = place.formatted_address;
                (this as any).mapInfoWindow.open(this.map, this.mapMarker);
                this.locationName = place.name;
                this.locationAddress = place.formatted_address;
                this.locationCoordinate = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                this.updateLocation();
            },
            handleClickPOI(e: any) {
                const self = this;

                if (e.placeId) {
                    (this as any).mapService.getDetails({ placeId: e.placeId }, (
                        place: any,
                        status: string
                    ) => {
                        if (status === 'OK') {
                            self.locationName = place.name;
                            self.locationAddress = place.formatted_address;
                            self.locationCoordinate = {
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng()
                            };
                            self.updateLocation();
                        }
                    });
                }
            },
            updateLocation() {
                this.$emit('onChangeLocation', {
                    name: this.locationName,
                    address: this.locationAddress,
                    loc: this.location,
                    coordinate: this.locationCoordinate
                });
            }
        }   
    })
</script>
<style scooped>

    .map {
        width: 100%;
    }
    .map-main {
        width: 100%;
        height: 400px;
    }
    .map-info__icon {
        display: inline-block;
        width: 16px;
        height: 16px;
    }
    .map-info__title {
        font-weight: bold;
    }
</style>