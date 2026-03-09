<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Clash of Piglins',
				singleProjectDate: 'Septembre à Décembre 2025',
				singleProjectTag: 'Application / IA',
			},
			projectImages: [
				{
					id: 1,
					title: 'Menu',
					img: require('@/assets/images/Clash_of_Piglin/launcher.png'),
				},
				{
					id: 2,
					title: 'Sélection d\'unités',
					img: require('@/assets/images/Clash_of_Piglin/selection.png'),
				},
				{
					id: 3,
					title: 'Partie en cours',
					img: require('@/assets/images/Clash_of_Piglin/game_view.png'),
				}
			],
			projectInfo: {
				clientHeading: 'Réalisé pour :',
				companyInfos: [
					{
						id: 1,
						title: 'Nom ',
						details: 'IUT du Littoral Côte d\'Opale',
					},
					{
						id: 2,
						title: 'Website ',
						details: 'https://www.iut-littoral.fr',
					},
					{
						id: 3,
						title: 'Téléphone ',
						details: '03 21 19 06 00',
					},
				],
				technologies: [
					{
						title: 'Outils, Technologies & Architecture',
						techs: [
							'Python',
							'Github',
							'Architecture MVC',
							'CI/CD'
						],
					},
				],
				projectDetailsHeading: 'Description',
				projectDetails: [
					{
						id: 1,
						details:
							'Un jeu de stratégie et management en 2D en temps réel, inspiré par l\'univers de Minecraft, réalisé entièrement en quelques semaines par une équipe de 6 développeurs dans le cadre d\'un projet universitaire. Réalisé avec Pygame. Utilise des IA individuelles pour contrôler les différentes unités. ',
					}
				]
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

	</div>
</template>

<style scoped></style>
