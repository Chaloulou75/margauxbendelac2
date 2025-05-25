<template>
    <div
        class="flex flex-col items-center justify-start w-full h-auto max-w-full px-2 py-8 mx-auto mb-auto md:px-8 md:items-start"
    >
        <h1
            class="mb-4 text-3xl font-thin text-center text-black sr-only md:mb-8 md:text-left"
        >
            Revue de Presse
        </h1>

        <div
            class="grid h-auto grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 place-items-start"
        >
            <div
                class="flex flex-col items-start py-2 transition duration-100 md:shadow-lg md:px-6 md:py-4"
            >
                <h2
                    class="justify-center mb-4 text-2xl font-semibold text-black md:text-3xl"
                >
                    Public Senat
                </h2>
                <h3
                    class="justify-center mb-4 text-2xl font-semibold text-black md:text-3xl"
                >
                    Avocates: défend-on différemment quand on est une femme
                </h3>
                <div class="w-full mx-auto mb-4 aspect-w-16 aspect-h-9">
                    <LazyVideoPublicSenat />
                </div>
                <a
                    href="
https://www.publicsenat.fr/emission/un-monde-en-doc/avocates-defend-on-differemment-quand-on-est-une-femme-216173"
                    target="_blank"
                    rel="noreferrer"
                    class="mb-4 text-xl text-black md:text-2xl hover:underline"
                >
                    www.publicsenat.fr
                </a>
                <p class="mb-3 text-xl text-black md:text-2xl md:mb-5">
                    Interroger nos sociétés, ses fractures, ses espoirs… C'est
                    l'objectif des documentaires que propose Public Sénat toutes
                    les semaines. Pour débattre et mettre en perspective
                    l'oeuvre diffusée en première partie de soirée les samedis,
                    Rebecca Fitoussi anime une discussion avec des spécialistes
                    pendant une demi-heure.
                </p>
            </div>
            <div class="flex flex-col gap-4 md:gap-12">
                <div
                    class="flex flex-col items-start py-2 transition duration-100 md:shadow-lg md:px-6 md:py-4"
                >
                    <h2
                        class="mb-4 text-2xl font-semibold text-black md:text-3xl"
                    >
                        Mediapart
                    </h2>
                    <h3
                        class="justify-center mb-4 text-2xl font-semibold text-black md:text-3xl"
                    >
                        Harcèlement : radiés de l’université, deux enseignants
                        toulousains ... | Mediapart
                    </h3>
                    <a
                        href="
https://www.mediapart.fr/journal/france/271022/harcelement-radies-de-l-universite-deux-enseignants-toulousains-relaxes-en-appel"
                        target="_blank"
                        rel="noreferrer"
                        class="mb-4 text-xl text-black md:text-2xl hover:underline"
                    >
                        www.mediapart.fr
                    </a>
                    <p class="mb-3 text-xl text-black md:text-2xl md:mb-5">
                        Violences sexistes et sexuelles. Harcèlement : radiés de
                        l’université, deux enseignants toulousains relaxés en
                        appel Malgré dix-sept témoignages d’étudiants, deux
                        enseignants de l ...
                    </p>
                </div>
                <div
                    class="flex flex-col items-start py-2 transition duration-100 md:shadow-lg md:px-6 md:py-4"
                >
                    <h2
                        class="mb-4 text-2xl font-semibold text-black md:text-3xl"
                    >
                        France Info
                    </h2>
                    <h3
                        class="justify-center mb-4 text-2xl font-semibold text-black md:text-3xl"
                    >
                        Un professeur de l'université Paris-Nanterre mis en
                        examen pour des violences sexuelles... | France Info
                    </h3>
                    <a
                        href="https://www.franceinfo.fr/societe/harcelement-sexuel/info-franceinfo-un-professeur-de-l-universite-paris-nanterre-mis-en-examen-pour-des-violences-sexuelles_7252374.html"
                        target="_blank"
                        rel="noreferrer"
                        class="mb-4 text-xl text-black md:text-2xl hover:underline"
                    >
                        www.franceinfo.fr
                    </a>
                    <p class="mb-3 text-xl text-black md:text-2xl md:mb-5">
                        Mis en cause par plusieurs étudiantes, dont l'une
                        l'accuse de viols et agression sexuelle en 2019, cet
                        enseignant-chercheur dément tous les faits qui lui sont
                        reprochés. Une enquête administrative est également
                        ouverte au sein de cette faculté.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
