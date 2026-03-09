<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Étudiant en 3ème année DUT informatique parcours "Réalisation d’applications : conception, développement, validation", je recherche des occasions de pratiquer le développement logiciel, notamment le Back-End et le FullStack, en entreprise pour pratiquer en situation réelle les compétences travaillées lors de ma formation. Motivé, je suis prêt à m\'investir pleinement dans les projets que l\'on me confie, qu\'ils soient à réaliser en solitaire ou dans une équipe, en français ou en anglais.',
				},
				{
					id: 2,
					bio:
						'Actuellement en recherche d\'un stage de 14 à 16 semaines, démarrant début avril 2026.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/photo_yann_format_pro.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
