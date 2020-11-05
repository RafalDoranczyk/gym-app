import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import dayjs from "dayjs";
import { ActionTypes } from "./interfaces/actions";
import { LogbookReducerState, Measurements } from "./interfaces/reducer";
import * as types from "./actionTypes";

const giveDateInCorrectStringFormat = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const findMatchingDateIndex = (payload: Measurements[], date: string) => {
  return payload.findIndex((i) => i.createdAt === date);
};

const calcLastUpdateInDays = (dateString: string) => {
  return dayjs().diff(dateString, "day");
};

export const initialState: LogbookReducerState = {
  allMeasurements: [],
  mealsToFoodDay: [],
  isMeasurementsNeverUpdated: false,
  isSelectedDateMatch: false,
  lastMeasurementsUpdate: {
    dateString: "",
    days: 0,
  },
  selectedDate: giveDateInCorrectStringFormat(new Date()),
};

const logbookReducer = produce(
  (draft: WritableDraft<LogbookReducerState>, action: ActionTypes) => {
    switch (action.type) {
      case types.FETCH_USER_MEASUREMENTS_SUCCESS:
        {
          const measurements = action.payload.data;
          draft.allMeasurements = measurements;
          const latestMeasurements = measurements[0];
          const { createdAt } = latestMeasurements;
          draft.isSelectedDateMatch =
            findMatchingDateIndex(measurements, draft.selectedDate) !== -1;
          draft.lastMeasurementsUpdate = {
            dateString: createdAt,
            days: calcLastUpdateInDays(createdAt),
          };
          if (measurements.length === 1) {
            const isLatestMeasurementsZero = Object.values(latestMeasurements)
              .filter((i) => typeof i === "number")
              .every((i) => i === 0);
            if (isLatestMeasurementsZero)
              draft.isMeasurementsNeverUpdated = true;
          }
        }
        break;
      case types.CREATE_OR_UPDATE_USER_MEASUREMENTS_SUCCESS:
        {
          const { data } = action.payload;
          const index = draft.allMeasurements.findIndex(
            (i) => i.createdAt === data.createdAt
          );
          if (draft.isMeasurementsNeverUpdated) {
            draft.isMeasurementsNeverUpdated = false;
          }
          if (index !== -1) {
            draft.allMeasurements[index] = data;
          } else {
            draft.allMeasurements.push(data);
            draft.isSelectedDateMatch = true;
            draft.lastMeasurementsUpdate = {
              dateString: giveDateInCorrectStringFormat(new Date()),
              days: draft.lastMeasurementsUpdate.days + 1,
            };
          }
        }
        break;
      case types.HANDLE_SELECTED_DATE:
        draft.selectedDate = giveDateInCorrectStringFormat(
          new Date(action.payload)
        );
        break;
        case types.HANDLE_DATE_MATCH:
          draft.isSelectedDateMatch = action.payload
    }
  },
  initialState
);

export default logbookReducer;
