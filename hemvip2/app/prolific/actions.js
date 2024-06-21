"use server"

import axios from "axios"
// import DataSender from "@/webmushra/business/DataSender"
// import ErrorHandler from "@/webmushra/business/ErrorHandler"
// import PageManager from "@/webmushra/business/PageManager"
// import Localizer from "@/webmushra/misc/Localizer"
// import Session from "@/webmushra/datamodel/Session"
// import PageTemplateRenderer from "@/webmushra/business/PageTemplateRenderer"
// import { addPagesToPageManager } from "./page-manager"
import clientPromise from "@/server/mongodb"
import { z } from "zod"

const studySchema = z.object({
  prolificid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "Invalid PROLIFIC_PID format" }),
  studyid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "Invalid STUDY_ID format" }),
  sessionid: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, { message: "Invalid SESSION_ID format" }),
})

export async function fetchStudy({ prolificid, studyid, sessionid }) {
  const result = studySchema.safeParse({ prolificid, studyid, sessionid })

  // Check if the validation is successful
  if (result.success) {
    try {
      const client = await clientPromise
      const db = client.db("hemvip")

      const filter = {
        status: "started",
        prolific_userid: prolificid,
        prolific_studyid: studyid,
        prolific_sessionid: sessionid,
      }

      const result = await db.collection("studies").findOne(filter)
      // console.log("result", result)

      if (result) {
        delete result._id
        // console.log(result)
        return {
          errors: null,
          success: true,
          data: result,
          msg: "Success to start a study",
        }
      } else {
        return {
          errors: null,
          success: true,
          data: null,
          msg: "All study is complete",
        }
      }
    } catch (error) {
      console.log(error)
      return {
        errors: error,
        success: false,
        data: null,
        msg: "Internal server error",
      }
    }
  } else {
    // If validation errors, map them into an object
    let serverErrors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    )
    return {
      errors: serverErrors,
      success: false,
      data: null,
      msg: "Failed to parse proflificid, studyid, sessionid",
    }
  }
}

export async function finishStudy({
  prolificid,
  studyid,
  sessionid,
  actions,
  screenActions,
  studySelections,
  code,
}) {
  const result = studySchema.safeParse({ prolificid, studyid, sessionid })

  if (result.success) {
    try {
      const client = await clientPromise
      const db = client.db("hemvip")

      const filter = {
        status: "started",
        prolific_userid: prolificid,
        prolific_studyid: studyid,
        prolific_sessionid: sessionid,
      }

      // console.log("server collection.finishStudy")
      const study = await db.collection("studies").findOne(filter)
      const newPage = study.pages.map((page, index) => {
        return {
          actions: screenActions[index],
          selected: studySelections[index],
          ...page,
        }
      })
      console.log("newPage", newPage)
      // const newPage = study.pages

      // console.log(study.pages)
      const updateStudy = {
        $set: {
          status: "finish", // New status
          prolific_userid: prolificid, // New prolific_userid
          prolific_studyid: studyid, // New prolific_studyid
          prolific_sessionid: sessionid, // New prolific_sessionid
          completion_code: code,
          total_actions: actions,
        },
      }

      const result = await db
        .collection("studies")
        .updateOne(filter, updateStudy)

      console.log("result", result)
      if (result) {
        delete result._id
        return {
          errors: null,
          success: true,
          data: result,
          msg: "Success to start a study",
        }
      } else {
        return {
          errors: null,
          success: true,
          data: null,
          msg: "All study is complete",
        }
      }
    } catch (error) {
      console.log(error)
      return {
        errors: error,
        success: false,
        data: null,
        msg: "Internal server error",
      }
    }
  } else {
    // If validation errors, map them into an object
    let serverErrors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    )
    return {
      errors: serverErrors,
      success: false,
      data: null,
      msg: "Failed to parse proflificid, studyid, sessionid",
    }
  }
}
