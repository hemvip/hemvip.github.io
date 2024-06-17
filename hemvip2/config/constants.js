import { isValidElement } from "react"

export const DEFAULT_THEME = {
  darkMode: true,
  direction: "ltr",
}

export const DEFAULT_OPTION = {
  unselect: "",
  left: "Left Better",
  equal: "Equal",
  right: "Right Better",
}

export const DEFAULT_ACTION_STRING = {
  clickStart: "Click Start",
  clickFinish: "Click Finish",

  clickLeft: "Click Left Better",
  clickEqual: "Click Equal",
  clickRight: "Click Right Better",

  clickPrev: "Click Previous",
  clickNext: "Click Next",
  clickFinish: "Click Finish",

  playVideoLeft: "Click Play Video Left",
  playVideoRight: "Click Play Video Right",

  pauseVideoLeft: "Pause Video Left",
  pauseVideoRight: "Pause Video Right",

  seekedVideoLeft: "Seeked Video Left",
  seekedVideoRight: "Seeked Video Right",
}

export const DEFAULT_SCREEN_CONFIG = {
  _id: {
    $oid: "66614ba1b4d88f207832a4d1",
  },
  status: "started",
  name: "Pairwise Comparison of Gesture Generation AI Model Studies",
  prolific_userid: "662b614c61935111d01484bf",
  prolific_studyid: "665971ec91884faf5b5284d7",
  prolific_sessionid: "03mr59tj5bmv",
  completion_code: "CMTN9LUK",
  total_actions: [
    "Click Play",
    "Click Pause",
    "Click Left Better",
    "Click Right Better",
  ],
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
      actions: [
        "Click Play",
        "Click Pause",
        "Click Left Better",
        "Click Right Better",
      ],
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
      actions: [
        "Click Play",
        "Click Pause",
        "Click Left Better",
        "Click Right Better",
      ],
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
      actions: [
        "Click Play",
        "Click Pause",
        "Click Left Better",
        "Click Right Better",
      ],
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
      actions: [
        "Click Play",
        "Click Pause",
        "Click Left Better",
        "Click Right Better",
      ],
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
      actions: [
        "Click Play",
        "Click Pause",
        "Click Left Better",
        "Click Right Better",
      ],
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

export const DEEP_OBJECT_KEYS = Object.entries(DEFAULT_SCREEN_CONFIG)
  .map(([key, value]) => {
    const isObject = value && typeof value === "object" && !Array.isArray(value)
    if (isObject) {
      return key
    }
  })
  .filter(Boolean)
