<template>
  <div class="w-full px-4 mx-auto">
    <h3 class="text-2xl font-semibold text-center text-black md:text-3xl">
      Nous contacter
    </h3>
    <form
      name="contactform"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <div class="mx-auto mt-8 text-lg">
        <div class="grid grid-cols-1 gap-6">
          <p class="hidden">
            <input type="hidden" name="form-name" value="contactform" />
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>
          <label class="block">
            <span class="text-black">Nom et prénom</span>
            <input
              type="text"
              name="fullname"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200/50"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-black">Email</span>
            <input
              type="email"
              name="email"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200/50"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-black">Téléphone</span>
            <input
              type="tel"
              name="telephone"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200/50"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-black">Votre message</span>
            <textarea
              name="message"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200/50"
              rows="4"
            ></textarea>
          </label>
          <button
            type="submit"
            class="px-4 py-2 text-black transition duration-75 bg-white border border-gray-300 rounded-md hover:bg-black hover:text-white focus:ring-3"
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
