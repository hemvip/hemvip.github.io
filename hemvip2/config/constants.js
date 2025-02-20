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
