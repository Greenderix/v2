<template>
  <section>
      <div class="map">
          <client-only>
              <v-map :zoom=" options.minZoom" :center="center">
                  <l-tile-layer :url="map"></l-tile-layer>
                    <v-marker-cluster>

                          <template v-for="(object, i) in objects">

                            <v-marker @click="ShowMarker(object)"  :lat-lng="[object.longitude, object.latitude]" :key="i"></v-marker>
                          </template>


                    </v-marker-cluster>
              </v-map>
          </client-only>
      </div>
    <div>
      
    </div>
  </section>
<!--  <div>-->
<!--    {{objects}}-->
<!--  </div>-->
</template>

<script>
import axios from "axios";
export default {

  data: () => ({
    objects: [],
    objectItem: null,
    options: {
        minZoom: 3,
        maxZoom: 18,
    },
    center: [60, 0],
    map: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}),
methods: {
  async resp(){
    try{
      await axios.get("/api/objects").then(response => (this.objects = response.data));
      console.log(this.objects)
    }
    catch (e) {
      console.log(e)
    }
  },
  async ShowMarker(object){
    if (this.objectItem == null) {
      this.objectItem = object;
    } else {
      this.objectItem = object;
    }

  }
},

mounted() {
  // axios.get("/api/objects").then(response => (this.objects = response));
  this.resp()


}
}
</script>

<style>
  .map {
    width: 100%;
    height: 100vh;
  }
  .marker-cluster-small {
    background-color: rgba(181, 226, 140, 0.6);
  }
  .marker-cluster-small div {
    background-color: rgba(110, 204, 57, 0.6);
  }

  .marker-cluster-medium {
    background-color: rgba(241, 211, 87, 0.6);
  }
  .marker-cluster-medium div {
    background-color: rgba(240, 194, 12, 0.6);
  }

  .marker-cluster-large {
    background-color: rgba(253, 156, 115, 0.6);
  }
  .marker-cluster-large div {
    background-color: rgba(241, 128, 23, 0.6);
  }

  /* IE 6-8 fallback colors */
  .leaflet-oldie .marker-cluster-small {
    background-color: rgb(181, 226, 140);
  }
  .leaflet-oldie .marker-cluster-small div {
    background-color: rgb(110, 204, 57);
  }

  .leaflet-oldie .marker-cluster-medium {
    background-color: rgb(241, 211, 87);
  }
  .leaflet-oldie .marker-cluster-medium div {
    background-color: rgb(240, 194, 12);
  }

  .leaflet-oldie .marker-cluster-large {
    background-color: rgb(253, 156, 115);
  }
  .leaflet-oldie .marker-cluster-large div {
    background-color: rgb(241, 128, 23);
  }

  .marker-cluster {
    background-clip: padding-box;
    border-radius: 20px;
  }
  .marker-cluster div {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;

    text-align: center;
    border-radius: 15px;
    font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  .marker-cluster span {
    line-height: 30px;
  }
</style>
