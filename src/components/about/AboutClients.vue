<script>
export default {
	data: () => {
		return {
			clientsHeading: 'Mon parcours en vidéo',
			youtubeVideoId: 'teYfQOWOpME?feature=share',
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="mt-10 sm:mt-14 w-full">
			<div class="relative w-full" style="padding-bottom: 56.25%">
				<iframe
					class="absolute top-0 left-0 w-full h-full rounded-lg"
					:src="`https://www.youtube.com/embed/${youtubeVideoId}`"
					title="Mon parcours en vidéo"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
</template>
