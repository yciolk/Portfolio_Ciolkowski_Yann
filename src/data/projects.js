// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Stage - Développeur Fullstack (Stygma)',
		page: "stage_stygma",
		category: 'Web / Application',
		img: require('@/assets/images/stage_stygma/Screen_app_1.png'),
	},
	{
		id: 2,
		title: 'Clash of Piglin',
		page: "clash_of_piglin",
		category: 'Application / IA',
		img: require('@/assets/images/Clash_of_Piglin/game_view.png'),
	},
];

export default projects;
