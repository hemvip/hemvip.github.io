# Database Schema

| Table name | Schema |
| ---------- | ------ |
| studies    |        |
| team       |        |

## MongoDB Database

Visit MongoDB create Cluster and import schema

### Studies

```json
{
  "status": "finish",
  "name": "Pairwise Comparison of Gesture Generation AI Model Studies",
  "prolific_userid": "662b614c61935111d01484bf",
  "prolific_studyid": "665971ec91884faf5b5284d7",
  "prolific_sessionid": "076s0uhyloc",
  "completion_code": "CMTN9LUK",
  "total_actions": [
    "Click Start",
    "Click Right Better",
    "Click Next",
    "Click Next",
    "Click Next",
    "Click Next",
    "Click Next",
    "Click Previous",
    "Click Equal",
    "Click Next"
  ],
  "pages": [
    {
      "pageid": "3242342",
      "type": "generic",
      "name": "Startup guide to participate gesture generation study",
      "content": "",
      "selected": {
        "value": 0,
        "label": ""
      },
      "actions": ["Click Start"]
    },
    {
      "pageid": "3242342",
      "type": "video",
      "name": "Page 1 of Y",
      "content": "How human-like was the agent in this video?",
      "selected": {
        "value": 9,
        "label": "Right better"
      },
      "actions": ["Click Play"],
      "videos": [
        {
          "teamid": "123123",
          "inputid": "56567342159353489347",
          "value": 4,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        },
        {
          "teamid": "645634",
          "inputid": "56567342159353489347",
          "value": 9,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        }
      ]
    },
    {
      "pageid": "3242342",
      "type": "video",
      "name": "Page 1 of Y",
      "content": "How human-like was the agent in this video?",
      "selected": {
        "value": 9,
        "label": "Right better"
      },
      "actions": ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
      "videos": [
        {
          "teamid": "123123",
          "inputid": "56567342159353489347",
          "value": 4,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        },
        {
          "teamid": "645634",
          "inputid": "56567342159353489347",
          "value": 9,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        }
      ]
    },
    {
      "pageid": "3242342",
      "type": "video",
      "name": "Page 1 of Y",
      "content": "How human-like was the agent in this video?",
      "selected": {
        "value": 9,
        "label": "Right better"
      },
      "actions": ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
      "videos": [
        {
          "teamid": "123123",
          "inputid": "56567342159353489347",
          "value": 4,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        },
        {
          "teamid": "645634",
          "inputid": "56567342159353489347",
          "value": 9,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        }
      ]
    },
    {
      "pageid": "3242342",
      "type": "video",
      "name": "Page 1 of Y",
      "content": "How human-like was the agent in this video?",
      "selected": {
        "value": 9,
        "label": "Right better"
      },
      "actions": ["Click Play"],
      "videos": [
        {
          "teamid": "123123",
          "inputid": "56567342159353489347",
          "value": 4,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        },
        {
          "teamid": "645634",
          "inputid": "56567342159353489347",
          "value": 9,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        }
      ]
    },
    {
      "pageid": "3242342",
      "type": "video",
      "name": "Page 1 of Y",
      "content": "How human-like was the agent in this video?",
      "selected": {
        "value": 9,
        "label": "Right better"
      },
      "actions": ["Click Play", "Click Pause", "Click Left Better", "Click Right Better"],
      "videos": [
        {
          "teamid": "123123",
          "inputid": "56567342159353489347",
          "value": 4,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        },
        {
          "teamid": "645634",
          "inputid": "56567342159353489347",
          "value": 9,
          "url": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
        }
      ]
    },
    {
      "pageid": "3242342",
      "type": "finish",
      "name": "Finish page",
      "content": "",
      "selected": {
        "value": 0,
        "label": ""
      },
      "actions": ["Click Finish"]
    }
  ]
}
```

### Team

```json
{
  "name": "Team name 1",
  "id": "o23u4o234u",
  "submissions": [
    {
      "id": "2399798734",
      "inputid": "234sdaerger44332234",
      "video": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
    },
    {
      "id": "2399798734",
      "inputid": "234sdaerger44332234",
      "video": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
    },
    {
      "id": "2399798734",
      "inputid": "234sdaerger44332234",
      "video": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
    },
    {
      "id": "2399798734",
      "inputid": "234sdaerger44332234",
      "video": "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4"
    }
  ]
}
```
