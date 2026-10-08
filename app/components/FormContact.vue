<script setup>
const inputClass =
  "block w-full mt-1 border-gray-300 rounded-md shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200/50";

const objets = [
  "Garde à vue",
  "Convocation police ou gendarmerie",
  "Convocation au tribunal",
  "Mineur",
  "Aménagement de peine",
  "Autre",
];
const creneaux = ["Dès que possible", "Matin", "Après-midi", "Soirée"];
const sources = [
  "Recherche Google",
  "Recommandation",
  "Ancien client",
  "Annuaire ou plateforme",
  "Autre",
];
</script>

<template>
  <div id="formulaire" class="w-full px-4 mx-auto scroll-mt-24">
    <h2 class="text-2xl font-semibold text-center text-black md:text-3xl">
      Être rappelé par le cabinet
    </h2>
    <form
      name="contactform"
      method="POST"
      action="/merci"
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
            <span class="text-black">Nom et prénom *</span>
            <input
              type="text"
              name="fullname"
              autocomplete="name"
              required
              :class="inputClass"
            />
          </label>
          <label class="block">
            <span class="text-black">Téléphone *</span>
            <input
              type="tel"
              name="telephone"
              autocomplete="tel"
              required
              :class="inputClass"
            />
          </label>
          <label class="block">
            <span class="text-black">Email (facultatif)</span>
            <input
              type="email"
              name="email"
              autocomplete="email"
              :class="inputClass"
            />
          </label>
          <label class="block">
            <span class="text-black">Objet de la demande *</span>
            <select name="objet" required :class="inputClass">
              <option value="" disabled selected>Choisir…</option>
              <option v-for="objet in objets" :key="objet" :value="objet">
                {{ objet }}
              </option>
            </select>
          </label>
          <label class="block">
            <span class="text-black">Créneau souhaité pour être rappelé *</span>
            <select name="creneau" required :class="inputClass">
              <option value="" disabled selected>Choisir…</option>
              <option
                v-for="creneau in creneaux"
                :key="creneau"
                :value="creneau"
              >
                {{ creneau }}
              </option>
            </select>
          </label>
          <label class="block">
            <span class="text-black">Précisions (facultatif)</span>
            <textarea name="precisions" rows="2" :class="inputClass"></textarea>
          </label>
          <label class="block">
            <span class="text-black"
              >Comment avez-vous connu le cabinet ? (facultatif)</span
            >
            <select name="source" :class="inputClass">
              <option value="" selected>—</option>
              <option v-for="source in sources" :key="source" :value="source">
                {{ source }}
              </option>
            </select>
          </label>
          <p class="text-base text-gray-600">* Champs obligatoires</p>
          <button
            type="submit"
            class="px-4 py-2 text-black transition duration-75 bg-white border border-gray-300 rounded-md hover:bg-black hover:text-white focus:ring-3"
          >
            Être rappelé
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
