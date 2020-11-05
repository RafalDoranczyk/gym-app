import { AppThunk } from "store/interfaces";
import LogbookService from "services/logbook";
import { CreateOrUpdateMeasurementsRequest } from "services/logbook/interfaces";
import * as actions from "./actions";

export const fetchUserMeasurements = (): AppThunk => async (dispatch) => {
  dispatch(actions.fetchUserMeasurementsStart());
  try {
    const data = await LogbookService.fetchAllMeasurements();
    dispatch(actions.fetchUserMeasurementsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchUserMeasurementsError(error));
  }
};

export const createOrUpdateMeasurement = (
  payload: CreateOrUpdateMeasurementsRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.createOrUpdateUserMeasurementsStart());
  try {
    const data = await LogbookService.createOrUpdateMeasurements(payload);
    dispatch(actions.createOrUpdateUserMeasurementsSuccess(data));
  } catch (error) {
    dispatch(actions.createOrUpdateUserMeasurementsError(error));
  }
};
