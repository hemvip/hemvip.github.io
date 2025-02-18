export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export const DEFAULT_THEME = {
	darkMode: true,
	direction: "ltr",
}

export const N_MIN_FAILED_ATTENTION_CHECK = 3

export const DEFAULT_OPTION = {
	unselect: "",
	clearlyLeft: "LeftClearlyBetter",
	slightlyLeft: "LeftSlightlyBetter",
	equal: "TheyAreEqual",
	slightlyRight: "RightSlightlyBetter",
	clearlyRight: "RightClearlyBetter",
}

export const DEFAULT_ACTION_STRING = {
	clickStart: "Click Start",
	clickFinish: "Click Finish",

	clickClearlyLeft: "Click Left Clearly Better",
	clickSlightlyLeft: "Click Left Slightly Better",
	clickEqual: "Click Equal",
	clickSlightlyRight: "Click Right Slightly Better",
	clickClearlyRight: "Click Right Clearly Better",

	clickPrev: "Click Previous",
	clickNext: "Click Next",
	clickFinish: "Click Finish",

	playVideoLeft: "Click Play Video Left",
	playVideoRight: "Click Play Video Right",

	pauseVideoLeft: "Pause Video Left",
	pauseVideoRight: "Pause Video Right",

	seekedVideoLeft: "Seeked Video Left",
	seekedVideoRight: "Seeked Video Right",

	finishVideoLeft: "Finish Video Left",
	finishVideoRight: "Finish Video Right",

	skipLeft: "Skip Left",
	skipRight: "Skip Right",
}

export const OPTION_SELECT = [
	DEFAULT_ACTION_STRING.clickClearlyLeft,
	DEFAULT_ACTION_STRING.clickSlightlyLeft,
	DEFAULT_ACTION_STRING.clickEqual,
	DEFAULT_ACTION_STRING.clickSlightlyRight,
	DEFAULT_ACTION_STRING.clickClearlyRight,
]

export const DEFAULT_STUDY = {
	id: 32,
	status: "started",
	name: "Pairwise Comparison of Gesture Generation Studies",
	time_start: "2025-02-12 11:07:55",
	type: "pairwise-human-likeness",
	global_actions: "[]",
	file_created: "4_pairwise human-likeness studies.csv",
	prolific_sessionid: "029ehzyhcpkp",
	prolific_studyid: "665971ec91884faf5b5284d7",
	prolific_userid: "662b614c61935111d01484bf",
	completion_code: "CMTN9LUK",
	fail_code: "C70GVE95",
}

export const DEFAULT_PAGES = [
	{
		id: 0,
		type: "generic",
		name: "Pairwise Comparison of Gesture Generation Studies",
		question: "",
		selected: "",
		actions: "",
		options: "",
		system1: "NA",
		system2: "SB",
		video1: 0,
		video2: 0,
		studyid: 0,
	},
	{
		id: 136,
		type: "video",
		name: "Page 1 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "NA",
		system2: "SB",
		video1: {
			id: 43,
			inputcode: "1_wayne_0_1_1-segment_1",
			systemname: "NA",
			createdat: "2025-02-10 03:18:14",
			path: "videos/original/NA/1739157491243-1_wayne_0_1_1-segment_1.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/NA/1739157491243-1_wayne_0_1_1-segment_1.mp4",
			systemid: "7.0",
		},
		video2: {
			id: 73,
			inputcode: "1_wayne_0_1_1-segment_1",
			systemname: "SB",
			createdat: "2025-02-10 03:23:06",
			path: "videos/original/SB/1739157783502-1_wayne_0_1_1-segment_1.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157783502-1_wayne_0_1_1-segment_1.mp4",
			systemid: "12.0",
		},
		studyid: 32,
	},
	{
		id: 137,
		type: "video",
		name: "Page 2 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SA",
		system2: "BA",
		video1: {
			id: 62,
			inputcode: "1_wayne_0_2_2-segment_2",
			systemname: "SA",
			createdat: "2025-02-10 03:22:08",
			path: "videos/original/SA/1739157724687-1_wayne_0_2_2-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SA/1739157724687-1_wayne_0_2_2-segment_2.mp4",
			systemid: "11.0",
		},
		video2: {
			id: 52,
			inputcode: "1_wayne_0_2_2-segment_2",
			systemname: "BA",
			createdat: "2025-02-10 03:19:59",
			path: "videos/original/BA/1739157596002-1_wayne_0_2_2-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/BA/1739157596002-1_wayne_0_2_2-segment_2.mp4",
			systemid: "8.0",
		},
		studyid: 32,
	},
	{
		id: 138,
		type: "video",
		name: "Page 3 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SZ",
		system2: "NA",
		video1: {
			id: 91,
			inputcode: "1_wayne_0_3_3-segment_3",
			systemname: "SZ",
			createdat: "2025-02-10 03:38:59",
			path: "videos/original/SZ/1739158735758-1_wayne_0_3_3-segment_3.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SZ/1739158735758-1_wayne_0_3_3-segment_3.mp4",
			systemid: "14.0",
		},
		video2: {
			id: 41,
			inputcode: "1_wayne_0_3_3-segment_3",
			systemname: "NA",
			createdat: "2025-02-10 03:18:14",
			path: "videos/original/NA/1739157490283-1_wayne_0_3_3-segment_3.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/NA/1739157490283-1_wayne_0_3_3-segment_3.mp4",
			systemid: "7.0",
		},
		studyid: 32,
	},
	{
		id: 139,
		type: "video",
		name: "Page 4 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SB",
		system2: "SA",
		video1: {
			id: 70,
			inputcode: "1_wayne_0_4_4-segment_1",
			systemname: "SB",
			createdat: "2025-02-10 03:23:06",
			path: "videos/original/SB/1739157781847-1_wayne_0_4_4-segment_1.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157781847-1_wayne_0_4_4-segment_1.mp4",
			systemid: "12.0",
		},
		video2: {
			id: 60,
			inputcode: "1_wayne_0_4_4-segment_1",
			systemname: "SA",
			createdat: "2025-02-10 03:22:07",
			path: "videos/original/SA/1739157723625-1_wayne_0_4_4-segment_1.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SA/1739157723625-1_wayne_0_4_4-segment_1.mp4",
			systemid: "11.0",
		},
		studyid: 32,
	},
	{
		id: 140,
		type: "video",
		name: "Page 5 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "BA",
		system2: "SB",
		video1: {
			id: 49,
			inputcode: "1_wayne_0_5_5-segment_2",
			systemname: "BA",
			createdat: "2025-02-10 03:19:58",
			path: "videos/original/BA/1739157594376-1_wayne_0_5_5-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/BA/1739157594376-1_wayne_0_5_5-segment_2.mp4",
			systemid: "8.0",
		},
		video2: {
			id: 69,
			inputcode: "1_wayne_0_5_5-segment_2",
			systemname: "SB",
			createdat: "2025-02-10 03:23:05",
			path: "videos/original/SB/1739157781336-1_wayne_0_5_5-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157781336-1_wayne_0_5_5-segment_2.mp4",
			systemid: "12.0",
		},
		studyid: 32,
	},
	{
		id: 141,
		type: "video",
		name: "Page 6 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SB",
		system2: "SA",
		video1: {
			id: 68,
			inputcode: "2_scott_0_1_1-segment_4",
			systemname: "SB",
			createdat: "2025-02-10 03:23:05",
			path: "videos/original/SB/1739157780832-2_scott_0_1_1-segment_4.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157780832-2_scott_0_1_1-segment_4.mp4",
			systemid: "12.0",
		},
		video2: {
			id: 58,
			inputcode: "2_scott_0_1_1-segment_4",
			systemname: "SA",
			createdat: "2025-02-10 03:22:07",
			path: "videos/original/SA/1739157722468-2_scott_0_1_1-segment_4.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SA/1739157722468-2_scott_0_1_1-segment_4.mp4",
			systemid: "11.0",
		},
		studyid: 32,
	},
	{
		id: 142,
		type: "video",
		name: "Page 7 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "BA",
		system2: "SZ",
		video1: {
			id: 47,
			inputcode: "2_scott_0_2_2-segment_2",
			systemname: "BA",
			createdat: "2025-02-10 03:19:58",
			path: "videos/original/BA/1739157593230-2_scott_0_2_2-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/BA/1739157593230-2_scott_0_2_2-segment_2.mp4",
			systemid: "8.0",
		},
		video2: {
			id: 87,
			inputcode: "2_scott_0_2_2-segment_2",
			systemname: "SZ",
			createdat: "2025-02-10 03:38:58",
			path: "videos/original/SZ/1739158733147-2_scott_0_2_2-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SZ/1739158733147-2_scott_0_2_2-segment_2.mp4",
			systemid: "14.0",
		},
		studyid: 32,
	},
	{
		id: 143,
		type: "video",
		name: "Page 8 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "NA",
		system2: "SB",
		video1: {
			id: 36,
			inputcode: "2_scott_0_3_3-segment_1",
			systemname: "NA",
			createdat: "2025-02-10 03:18:12",
			path: "videos/original/NA/1739157487772-2_scott_0_3_3-segment_1.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/NA/1739157487772-2_scott_0_3_3-segment_1.mp4",
			systemid: "7.0",
		},
		video2: {
			id: 66,
			inputcode: "2_scott_0_3_3-segment_1",
			systemname: "SB",
			createdat: "2025-02-10 03:23:04",
			path: "videos/original/SB/1739157779838-2_scott_0_3_3-segment_1.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157779838-2_scott_0_3_3-segment_1.mp4",
			systemid: "12.0",
		},
		studyid: 32,
	},
	{
		id: 144,
		type: "video",
		name: "Page 9 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SA",
		system2: "BA",
		video1: {
			id: 64,
			inputcode: "2_scott_0_4_4-segment_2",
			systemname: "SA",
			createdat: "2025-02-10 03:22:08",
			path: "videos/original/SA/1739157725678-2_scott_0_4_4-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SA/1739157725678-2_scott_0_4_4-segment_2.mp4",
			systemid: "11.0",
		},
		video2: {
			id: 54,
			inputcode: "2_scott_0_4_4-segment_2",
			systemname: "BA",
			createdat: "2025-02-10 03:20:00",
			path: "videos/original/BA/1739157596982-2_scott_0_4_4-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/BA/1739157596982-2_scott_0_4_4-segment_2.mp4",
			systemid: "8.0",
		},
		studyid: 32,
	},
	{
		id: 145,
		type: "video",
		name: "Page 10 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SZ",
		system2: "NA",
		video1: {
			id: 95,
			inputcode: "2_scott_0_5_5-segment_4",
			systemname: "SZ",
			createdat: "2025-02-10 03:39:02",
			path: "videos/original/SZ/1739158737998-2_scott_0_5_5-segment_4.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SZ/1739158737998-2_scott_0_5_5-segment_4.mp4",
			systemid: "14.0",
		},
		video2: {
			id: 45,
			inputcode: "2_scott_0_5_5-segment_4",
			systemname: "NA",
			createdat: "2025-02-10 03:18:15",
			path: "videos/original/NA/1739157492230-2_scott_0_5_5-segment_4.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/NA/1739157492230-2_scott_0_5_5-segment_4.mp4",
			systemid: "7.0",
		},
		studyid: 32,
	},
	{
		id: 146,
		type: "video",
		name: "Page 11 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SB",
		system2: "SA",
		video1: {
			id: 74,
			inputcode: "2_scott_0_4_4-segment_2",
			systemname: "SB",
			createdat: "2025-02-10 03:23:07",
			path: "videos/original/SB/1739157784002-2_scott_0_4_4-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157784002-2_scott_0_4_4-segment_2.mp4",
			systemid: "12.0",
		},
		video2: {
			id: 64,
			inputcode: "2_scott_0_4_4-segment_2",
			systemname: "SA",
			createdat: "2025-02-10 03:22:08",
			path: "videos/original/SA/1739157725678-2_scott_0_4_4-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SA/1739157725678-2_scott_0_4_4-segment_2.mp4",
			systemid: "11.0",
		},
		studyid: 32,
	},
	{
		id: 147,
		type: "video",
		name: "Page 12 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "BA",
		system2: "SZ",
		video1: {
			id: 49,
			inputcode: "1_wayne_0_5_5-segment_2",
			systemname: "BA",
			createdat: "2025-02-10 03:19:58",
			path: "videos/original/BA/1739157594376-1_wayne_0_5_5-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/BA/1739157594376-1_wayne_0_5_5-segment_2.mp4",
			systemid: "8.0",
		},
		video2: {
			id: 89,
			inputcode: "1_wayne_0_5_5-segment_2",
			systemname: "SZ",
			createdat: "2025-02-10 03:38:59",
			path: "videos/original/SZ/1739158734471-1_wayne_0_5_5-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SZ/1739158734471-1_wayne_0_5_5-segment_2.mp4",
			systemid: "14.0",
		},
		studyid: 32,
	},
	{
		id: 148,
		type: "video",
		name: "Page 13 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "NA",
		system2: "SB",
		video1: {
			id: 41,
			inputcode: "1_wayne_0_3_3-segment_3",
			systemname: "NA",
			createdat: "2025-02-10 03:18:14",
			path: "videos/original/NA/1739157490283-1_wayne_0_3_3-segment_3.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/NA/1739157490283-1_wayne_0_3_3-segment_3.mp4",
			systemid: "7.0",
		},
		video2: {
			id: 71,
			inputcode: "1_wayne_0_3_3-segment_3",
			systemname: "SB",
			createdat: "2025-02-10 03:23:06",
			path: "videos/original/SB/1739157782339-1_wayne_0_3_3-segment_3.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SB/1739157782339-1_wayne_0_3_3-segment_3.mp4",
			systemid: "12.0",
		},
		studyid: 32,
	},
	{
		id: 149,
		type: "video",
		name: "Page 14 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SA",
		system2: "BA",
		video1: {
			id: 58,
			inputcode: "2_scott_0_1_1-segment_4",
			systemname: "SA",
			createdat: "2025-02-10 03:22:07",
			path: "videos/original/SA/1739157722468-2_scott_0_1_1-segment_4.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SA/1739157722468-2_scott_0_1_1-segment_4.mp4",
			systemid: "11.0",
		},
		video2: {
			id: 48,
			inputcode: "2_scott_0_1_1-segment_4",
			systemname: "BA",
			createdat: "2025-02-10 03:19:58",
			path: "videos/original/BA/1739157593874-2_scott_0_1_1-segment_4.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/BA/1739157593874-2_scott_0_1_1-segment_4.mp4",
			systemid: "8.0",
		},
		studyid: 32,
	},
	{
		id: 150,
		type: "video",
		name: "Page 15 of 15",
		question: "Which one of this is better?",
		selected: "{}",
		actions: "[]",
		options: [
			{
				option: "Left Clearly Better",
				value: -2,
			},
			{
				option: "Left Slightly Better",
				value: -1,
			},
			{
				option: "Equal",
				value: 0,
			},
			{
				option: "Left Slightly Better",
				value: 1,
			},
			{
				option: "Left Clearly Better",
				value: 2,
			},
		],
		system1: "SZ",
		system2: "NA",
		video1: {
			id: 92,
			inputcode: "1_wayne_0_2_2-segment_2",
			systemname: "SZ",
			createdat: "2025-02-10 03:39:00",
			path: "videos/original/SZ/1739158736315-1_wayne_0_2_2-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/SZ/1739158736315-1_wayne_0_2_2-segment_2.mp4",
			systemid: "14.0",
		},
		video2: {
			id: 42,
			inputcode: "1_wayne_0_2_2-segment_2",
			systemname: "NA",
			createdat: "2025-02-10 03:18:14",
			path: "videos/original/NA/1739157490761-1_wayne_0_2_2-segment_2.mp4",
			url: "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev/videos/original/NA/1739157490761-1_wayne_0_2_2-segment_2.mp4",
			systemid: "7.0",
		},
		studyid: 32,
	},
	{
		id: 0,
		type: "finish",
		name: "Pairwise Comparison of Gesture Generation Studies",
		question: "",
		selected: "",
		actions: "",
		options: "",
		system1: "NA",
		system2: "SB",
		video1: 0,
		video2: 0,
		studyid: 0,
	},
]

export const DEFAULT_SCREEN_CONFIG = {
	id: 1,
	status: "started",
	name: "Pairwise Comparison of Gesture Generation Studies",
	prolific_userid: "662b614c61935111d01484bf",
	prolific_studyid: "665971ec91884faf5b5284d7",
	prolific_sessionid: "03mr59tj5bmv",
	completion_code: "CMTN9LUK",
	total_actions: ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
	pages: [
		{
			pageid: "3242342",
			type: "generic",
			name: "Startup guide to participate gesture generation study",
			content: "",
			selected: {
				value: 0,
				label: "",
			},
			actions: ["Click Start"],
		},
		{
			pageid: "3242342",
			type: "video",
			name: "Page 1 of Y",
			content: "How human-like was the agent in this video?",
			selected: {
				value: 9,
				label: "Right better",
			},
			actions: ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
			videos: [
				{
					teamid: "123123",
					inputid: "56567342159353489347",
					value: 4,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
				{
					teamid: "645634",
					inputid: "56567342159353489347",
					value: 9,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
			],
		},
		{
			pageid: "3242342",
			type: "video",
			name: "Page 1 of Y",
			content: "How human-like was the agent in this video?",
			selected: {
				value: 9,
				label: "Right better",
			},
			actions: ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
			videos: [
				{
					teamid: "123123",
					inputid: "56567342159353489347",
					value: 4,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
				{
					teamid: "645634",
					inputid: "56567342159353489347",
					value: 9,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
			],
		},
		{
			pageid: "3242342",
			type: "video",
			name: "Page 1 of Y",
			content: "How human-like was the agent in this video?",
			selected: {
				value: 9,
				label: "Right better",
			},
			actions: ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
			videos: [
				{
					teamid: "123123",
					inputid: "56567342159353489347",
					value: 4,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
				{
					teamid: "645634",
					inputid: "56567342159353489347",
					value: 9,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
			],
		},
		{
			pageid: "3242342",
			type: "video",
			name: "Page 1 of Y",
			content: "How human-like was the agent in this video?",
			selected: {
				value: 9,
				label: "Right better",
			},
			actions: ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
			videos: [
				{
					teamid: "123123",
					inputid: "56567342159353489347",
					value: 4,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
				{
					teamid: "645634",
					inputid: "56567342159353489347",
					value: 9,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
			],
		},
		{
			pageid: "3242342",
			type: "video",
			name: "Page 1 of Y",
			content: "How human-like was the agent in this video?",
			selected: {
				value: 9,
				label: "Right better",
			},
			actions: ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
			videos: [
				{
					teamid: "123123",
					inputid: "56567342159353489347",
					value: 4,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
				{
					teamid: "645634",
					inputid: "56567342159353489347",
					value: 9,
					url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
				},
			],
		},
		{
			pageid: "3242342",
			type: "finish",
			name: "Finish page",
			content: "",
			selected: {
				value: 0,
				label: "",
			},
			actions: ["Click Finish"],
		},
	],
}

export const DEEP_OBJECT_KEYS = Object.entries(DEFAULT_STUDY)
	.map(([key, value]) => {
		const isObject = value && typeof value === "object" && !Array.isArray(value)
		if (isObject) {
			return key
		}
	})
	.filter(Boolean)
