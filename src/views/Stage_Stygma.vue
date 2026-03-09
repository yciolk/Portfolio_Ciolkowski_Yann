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
				singleProjectTitle: 'Stage - Développeur Fullstack (Stygma)',
				singleProjectDate: 'Avril - Juin 2025',
				singleProjectTag: 'Web / Application',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/stage_stygma/Screen_app_1.png'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/stage_stygma/Screen_app_8.png'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/stage_stygma/Screen_app_10.png'),
				},
			],
			projectInfo: {
				clientHeading: 'Réalisé pour : ',
				companyInfos: [
					{
						id: 1,
						title: 'Nom ',
						details: 'Stygma',
					},
					{
						id: 2,
						title: 'Services ',
						details: 'ESN réalisant développement de sites web et applications diverses.',
					}
				],
				technologies: [
					{
						title: 'Outils, Technologies et Architectures',
						techs: [
							'Vue.js',
							'TypeScript',
							'Vue.js',
							'Prisma',
							'API Rest',
							'CI/CD', 
							'Architecture MVC'
						],
					},
				],
				projectDetailsHeading: 'Description',
				projectDetails: [
					{
						id: 1,
						details:
							'Stage de 8 semaines dans la micro-ESN Stygma, durant lequel ma mission fut de travailler sur la mise en place de plusieurs pages web et applications pour le compte d\'un établissement de restauration. Une expérience de développement FullStack en Vue.js et TypeScript, ainsi que de conception, réalisation et gestion de base de données (Prisma), et découverte et implémentation de technologie récente (librairie BetterAuth).',
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
