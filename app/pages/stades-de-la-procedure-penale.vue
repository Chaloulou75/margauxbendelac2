<script setup>
useSeoMeta({
  title: "Les stades de la procédure pénale",
  description:
    "Audition libre, garde à vue, comparution immédiate, instruction, assises, aménagement de peine : à quel stade vous vous trouvez, et vers quelle page aller.",
  ogTitle: "Les stades de la procédure pénale",
  ogDescription:
    "Audition libre, garde à vue, comparution immédiate, instruction, assises, aménagement de peine : à quel stade vous vous trouvez, et vers quelle page aller.",
  ogUrl: "https://www.bendelac-avocat.com/stades-de-la-procedure-penale",
  ogImage: "https://www.bendelac-avocat.com/img/margaux.jpg",
  twitterCard: "summary",
});

// Les anciens identifiants d'ancre sont conservés pour les liens existants.
const etapes = [
  {
    label: "Convocation au commissariat ou à la gendarmerie",
    to: "/convocation-commissariat-gendarmerie",
  },
  {
    label: "Audition libre",
    to: "/convocation-commissariat-gendarmerie",
    id: "audition-libre",
  },
  { label: "Garde à vue", to: "/garde-a-vue-avocat", id: "garde-a-vue" },
  {
    label: "Garde à vue ou retenue d’un mineur",
    to: "/avocat-penal-mineurs",
  },
  {
    label: "Composition pénale",
    to: "/convocation-commissariat-gendarmerie",
    id: "composition-penale",
  },
  {
    label: "Comparution sur reconnaissance préalable de culpabilité",
    to: "/convocation-tribunal-correctionnel",
    id: "comparution-culpabilite",
  },
  {
    label: "Comparution immédiate",
    to: "/convocation-tribunal-correctionnel",
    id: "comparution-immediate",
  },
  {
    label: "Convocation devant le tribunal correctionnel",
    to: "/convocation-tribunal-correctionnel",
    id: "audience-correctionnel",
  },
  {
    label: "Appel d’un jugement correctionnel",
    to: "/convocation-tribunal-correctionnel",
  },
  {
    label: "Mise en examen et instruction",
    to: "/cour-assises-instruction",
    id: "mise-en-examen",
  },
  {
    label: "Contrôle judiciaire et détention provisoire",
    to: "/cour-assises-instruction",
    id: "placement-controle",
  },
  {
    label: "Cour criminelle départementale et cour d’assises",
    to: "/cour-assises-instruction",
    id: "audience-assises",
  },
  {
    label: "Procédures devant le juge des enfants",
    to: "/avocat-penal-mineurs",
  },
  {
    label: "Aménagement de peine",
    to: "/amenagement-de-peine",
    id: "amenagement-peine",
  },
];
</script>

<template>
  <div class="page-content">
    <h1>Les stades de la procédure pénale</h1>
    <p>
      Une procédure pénale se déroule par étapes, et chacune a ses délais, ses
      règles et ses conséquences. Repérez ci-dessous l’étape où vous vous
      trouvez.
    </p>
    <p>
      Le cabinet intervient à chacun de ces stades, pour les personnes mises en
      cause comme pour les victimes. Pour une situation en cours, contactez le
      cabinet : <PhoneLink />.
    </p>

    <h2>Les étapes, dans l’ordre de la procédure</h2>
    <ol class="list-decimal">
      <li v-for="etape in etapes" :key="etape.label" :id="etape.id">
        <NuxtLink :to="etape.to">{{ etape.label }}</NuxtLink>
      </li>
    </ol>

    <h2>Joindre le cabinet</h2>
    <p>
      Pour une garde à vue, un déferrement ou une audience imminente :
      <PhoneLink />. Pour une convocation à une date ultérieure, le
      <NuxtLink to="/contact#formulaire"
        >formulaire « Être rappelé par le cabinet »</NuxtLink
      >
      permet d’exposer la situation et d’indiquer un créneau. Chaque dossier
      fait l’objet d’un devis personnalisé, établi après un premier échange sur
      la situation.
    </p>
  </div>
</template>
