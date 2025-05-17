export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export const DEFAULT_THEME = {
	darkMode: true,
	direction: "ltr",
}

export const N_MIN_FAILED_ATTENTION_CHECK = 2
export const N_MAX_SKIPPED_PAGES = 3

export const DEFAULT_OPTION = {
	unselect: "",
	clearlyLeft: "LeftClearlyBetter",
	slightlyLeft: "LeftSlightlyBetter",
	equal: "TheyAreEqual",
	slightlyRight: "RightSlightlyBetter",
	clearlyRight: "RightClearlyBetter",
}

export const JUICE_MOTION = {
	unrealistic: "UnrealisticMotion",
	smoothness: "MotionSmoothness",
	amountIntensity: "AmountIntensityOfMotion",
	recognisableGestures: "RecognisableGestures",
	other: "MotionOther",
}

export const JUICE_SPEECH = {
	fitRhythmTiming: "FitRhythmTiming",
	emphasizeCorrectParts: "EmphasizeCorrectParts",
	betterMatchContentMeaning: "BetterMatchContentMeaning",
	betterFitForEmotion: "BetterFitForEmotion",
	other: "SpeechOther",
}

export const DEFAULT_ACTION_STRING = {
	clickStart: "Click Start",
	clickFinish: "Click Finish",

	clickClearlyLeft: "Click Left Clearly Better",
	clickSlightlyLeft: "Click Left Slightly Better",
	clickEqual: "Click Equal",
	clickSlightlyRight: "Click Right Slightly Better",
	clickClearlyRight: "Click Right Clearly Better",

	updateJuiceSelection: "Update JUICE Selection",
	updateJuiceOtherReason: "Update JUICE Other Reason",

	clickPrev: "Click Previous",
	clickSkip: "Click Skip Page",
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
}

export const OPTION_SELECT = [
	DEFAULT_ACTION_STRING.clickClearlyLeft,
	DEFAULT_ACTION_STRING.clickSlightlyLeft,
	DEFAULT_ACTION_STRING.clickEqual,
	DEFAULT_ACTION_STRING.clickSlightlyRight,
	DEFAULT_ACTION_STRING.clickClearlyRight,
]

export const DEFAULT_PAIRWISE = {
	question: "In which video does the character gesture more like a real person?",
	instruction: "Below are two videos without audio of a character speaking and gesturing.",
}

export const DEFAULT_MISMATCH = {
	question: "In which video do the character’s movements fit the speech better?",
	instruction: "Below are two videos of a character speaking and gesturing. Both videos have the same motion, but different speech.",
}