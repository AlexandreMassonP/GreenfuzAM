<template>
    <section>             
      <!-- Filters -->
      <div :class="{'shadow-indoor': this.targetCat === 'indoor', 'shadow-outdoor': this.targetCat === 'outdoor', 'shadow-resine': this.targetCat === 'resine', 'shadow-lg': this.targetCat === ''}"  aria-labelledby="filter-heading" class="z-10 rounded-b-xl grid items-center sticky top-20 bg-white mb-10 border-b border-gray-200">
        <div class="relative  py-4">
          <div class="w-full mx-auto flex space-x-1 space-y-1 text-sm">
            <div class="w-full text-center">
                <a :class="{'border-gray-400': this.targetCat === '' || this.targetCat === ''}" @click="targetAll()" class="mm-sm:w-max mm-sm:flex mm-sm:mx-auto mm-sm:mb-4 select-none cursor-pointer ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium  text-gray-600 border-2 ">
                  <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-gray-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Tous
                </a>
                <a :class="{'border-indoor': this.targetCat === 'indoor' || this.targetCat === ''}" @click="targetIndoor()" class=" mm-sm:mb-4 select-none cursor-pointer ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium  text-gray-600 border-2 ">
                  <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-indoor" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Indoor
                </a>
                <a :class="{'border-resine': this.targetCat === 'resine' || this.targetCat === ''}" @click="targetResine()" class=" mm-sm:mb-4 select-none cursor-pointer ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium  text-gray-600 border-2">
                  <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-resine" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Résine
                </a>
                <a :class="{'border-outdoor': this.targetCat === 'outdoor' || this.targetCat === ''}" @click="targetOutdoor()" class=" mm-sm:mb-4 select-none cursor-pointer ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium  text-gray-600 border-2">
                  <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-outdoor" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Outdoor
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      targetCat: '',
    }
  },
  methods: {
    ...mapActions({
        playLighterFlick: 'playLighterFlick'
    }),
    targetAll() {
      this.targetCat = ''
      this.$store.dispatch('filterProducts', {id: ''})
      this.playLighterFlick()
    },
    targetOutdoor() {
      this.targetCat = 'outdoor'
      this.$store.dispatch('filterProducts', {id: 'outdoor'})
      this.playLighterFlick()
    },
    targetResine() {
      this.targetCat = 'resine'
      this.$store.dispatch('filterProducts', {id: 'resine'})
      this.playLighterFlick()
    },
    targetIndoor() {
      this.targetCat = 'indoor'
      this.$store.dispatch('filterProducts', {id: 'indoor'})
      this.playLighterFlick()
    },
  },
};
</script>