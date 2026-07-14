"use client"

import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING, DEFAULT_OPTION, JUICE_MOTION, JUICE_SPEECH, JUICE_SEAMLESS_HL, JUICE_SEAMLESS_SPEECH, JUICE_SEAMLESS_DYADIC, JUICE_SEAMLESS_SEMANTIC } from "@/config/constants"
import { useCurrentPage } from "@/contexts/experiment"
import { useSelected } from "@/contexts/selected"

export function JuiceBoard({ currentPage, study }) {
    const { addAction } = useActionRecorder()
    const { options, juiceOptions, juiceOtherReason, selectJuiceOption, specifyJuiceOtherReason } = useSelected()
    const page = useCurrentPage(currentPage)
    const isEqualSelected = !options[page.id] || options[page.id] === DEFAULT_OPTION.equal
    const selectedJuiceOptions = juiceOptions[page.id] || []
    const currentJuiceOtherReason = juiceOtherReason[page.id] || ""

    const handleCheckboxChange = (optionValue) => {
        const updatedOptions = selectedJuiceOptions.includes(optionValue)
            ? selectedJuiceOptions.filter((item) => item !== optionValue)
            : [...selectedJuiceOptions, optionValue]

        selectJuiceOption(updatedOptions, currentPage)
        addAction(`${DEFAULT_ACTION_STRING.updateJuiceSelection} {${updatedOptions.join(", ")}}`, currentPage)
    }

    const handleOtherReasonBlur = () => {
        addAction(`${DEFAULT_ACTION_STRING.updateJuiceOtherReason} {${currentJuiceOtherReason}}`, currentPage)
    }

    const handleOtherReasonChange = (e) => {
        specifyJuiceOtherReason(e.target.value, currentPage)
    }

    let juiceOptionsList = []
    if (study.type === "pairwise-humanlikeness") {
        juiceOptionsList = [
            {
                label: "Unrealistic motion (glitches/artefacts, limbs/body penetrating each other, physically impossible motion)",
                optionValue: JUICE_MOTION.unrealistic,
            },
            {
                label: "The smoothness of the motion",
                optionValue: JUICE_MOTION.smoothness,
            },
            {
                label: "The amount and intensity of motion",
                optionValue: JUICE_MOTION.amountIntensity,
            },
            {
                label: "Recognisable gestures",
                optionValue: JUICE_MOTION.recognisableGestures,
            },
            {
                label: "Other (Please specify factors not listed above):",
                optionValue: JUICE_MOTION.other,
            },
        ]
    } else if (study.type === "mismatch-speech") {
        juiceOptionsList = [
            {
                label: "Fit the rhythm and timing of the speech better",
                optionValue: JUICE_SPEECH.fitRhythmTiming,
            },
            {
                label: "Emphasised the correct part (or parts) of the speech",
                optionValue: JUICE_SPEECH.emphasizeCorrectParts,
            },
            {
                label: "Better matched the content and meaning of the speech",
                optionValue: JUICE_SPEECH.betterMatchContentMeaning,
            },
            {
                label: "Better fit for the emotion of the speech",
                optionValue: JUICE_SPEECH.betterFitForEmotion,
            },
            {
                label: "Other (Please specify factors not listed above):",
                optionValue: JUICE_SPEECH.other,
            },
        ]
    } else if (study.type === "seamless-humanlikeness") {
        // Same options as the beat2 realism study (pairwise-humanlikeness), but the
        // "Unrealistic motion" option is split into penetration vs glitch artefacts.
        juiceOptionsList = [
            {
                label: "Limbs or body penetrating each other, or physically impossible motion",
                optionValue: JUICE_SEAMLESS_HL.penetration,
            },
            {
                label: "Glitches or artefacts (e.g. glitching wrists and fingers)",
                optionValue: JUICE_SEAMLESS_HL.artefacts,
            },
            {
                label: "The smoothness of the motion",
                optionValue: JUICE_SEAMLESS_HL.smoothness,
            },
            {
                label: "The amount and intensity of motion",
                optionValue: JUICE_SEAMLESS_HL.amountIntensity,
            },
            {
                label: "Recognisable gestures",
                optionValue: JUICE_SEAMLESS_HL.recognisableGestures,
            },
            {
                label: "Other (Please specify factors not listed above):",
                optionValue: JUICE_SEAMLESS_HL.other,
            },
        ]
    } else if (study.type === "seamless-speech-mismatch") {
        juiceOptionsList = [
            {
                label: "Fit the rhythm and timing of the speech better",
                optionValue: JUICE_SEAMLESS_SPEECH.fitRhythmTiming,
            },
            {
                label: "Emphasised the correct part (or parts) of the speech",
                optionValue: JUICE_SEAMLESS_SPEECH.emphasizeCorrectParts,
            },
            {
                label: "Better matched the content and meaning of the speech",
                optionValue: JUICE_SEAMLESS_SPEECH.betterMatchContentMeaning,
            },
            {
                label: "Better fit for the emotion of the speech",
                optionValue: JUICE_SEAMLESS_SPEECH.betterFitForEmotion,
            },
            {
                label: "Other (Please specify factors not listed above):",
                optionValue: JUICE_SEAMLESS_SPEECH.other,
            },
        ]
    } else if (study.type === "seamless-dyadic-mismatch") {
        juiceOptionsList = [
            {
                label: "Better turn-taking (motion respects who is speaking vs. listening)",
                optionValue: JUICE_SEAMLESS_DYADIC.turnTaking,
            },
            {
                label: "Reacts to the other person at the right moments",
                optionValue: JUICE_SEAMLESS_DYADIC.reactsAtRightMoments,
            },
            {
                label: "More natural listening cues (nodding, small \"I'm following you\" movements)",
                optionValue: JUICE_SEAMLESS_DYADIC.listeningCues,
            },
            {
                label: "Coordinated movements with the other person (e.g., mirroring motion and poses, mimicry)",
                optionValue: JUICE_SEAMLESS_DYADIC.coordinatedMovements,
            },
            {
                label: "Other (Please specify factors not listed above):",
                optionValue: JUICE_SEAMLESS_DYADIC.other,
            },
        ]
    } else if (study.type === "seamless-semantic-mismatch") {
        // TODO: final JUICE option list for Seamless Semantic Mismatch.
        juiceOptionsList = [
            {
                label: "Other (Please specify factors not listed above):",
                optionValue: JUICE_SEAMLESS_SEMANTIC.other,
            },
        ]
    } else {
        console.error("Unknown study type:", study.type)
        return <div>Error JUICE: Unknown study type</div>
    }

    return (
        <div
            className="flex"
            style={{
                marginLeft: "8em",
                backgroundColor: isEqualSelected ? "#f0f0f0" : "transparent",
            }}
        >
            <div className="flex flex-col gap-2 mt-2">
                {juiceOptionsList.map((option, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        <label style={{ userSelect: "none" }}>
                            <input
                                type="checkbox"
                                checked={selectedJuiceOptions.includes(option.optionValue)}
                                onChange={() => handleCheckboxChange(option.optionValue)}
                                disabled={isEqualSelected}
                            style={{marginRight: "8px"}}/>
                            {option.label}
                        </label>
                        {option.label.startsWith("Other") && (
                            <textarea
                                className="p-1 border rounded"
                                placeholder="Please specify reason..."
                                value={currentJuiceOtherReason}
                                onChange={handleOtherReasonChange}
                                onBlur={handleOtherReasonBlur}
                                disabled={isEqualSelected}
                                style={{
                                    position: "absolute",
                                    backgroundColor: "#dddddd",
                                    borderColor: "black",
                                    top: "-0.5em",
                                    left: "22em",
                                    marginLeft: "24px",
                                    width: "64em",
                                    height: "2em",
                                    resize: "none",
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
