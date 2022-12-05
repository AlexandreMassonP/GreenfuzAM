<template>
  <div class="rounded-b-xl">
    <div class="mx-auto bg-white pt-10 pb-20 px-5 md:px-10 text-center xl:flex xl:flex-row-reverse justify-between items-center">
      <div class="flex-auto px-5">
         <img class="transition-all mx-auto w-auto object-contain object-center" :src="require('~/assets/img/linememe-5.png')" />
      </div>
      <div class="flex-auto pt-5"> 
        <h2 class="text-4xl font-fat text-black md:text-5xl">
          Inscrivez-vous à notre newsletter !
        </h2>
        <p class="mt-5 text-sm font-simple text-gray-500">
          Nous nous soucions de la protection de vos données.
          <nuxt-link to="/politique-de-confidentialite" class="font-medium underline text-indoor">
             Lisez notre Politique de Confidentialité !
          </nuxt-link> 
        </p>
        <form class="md:flex max-w-md mx-auto rounded-xl md:shadow-indoor mt-10">
          <input class="mm-sm:rounded-t-xl mm-sm:rounded-b-none mm-sm:shadow-indoor w-full text-black text-center py-3 px-5 border-b focus:outline-none rounded-l-xl" type="" placeholder="Votre adresse email" value="" />
          <div class="mm-sm:flex-shrink-0">
            <button type="submit" class="mm-sm:rounded-b-xl mm-sm:rounded-t-none mm-sm:shadow-indoor rounded-r-xl w-full flex items-center justify-center py-3 px-5 text-md uppercase font-elegant text-white bg-indoor hover:text-black hover:bg-gray-300 ring-transparent outline-none shadow-lg">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>