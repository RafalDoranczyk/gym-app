import axios from "helpers/axiosInstance";
import { MEASUREMENTS_URL } from "constants/apiURL";
import * as I from "./interfaces";

const LogbookService = () => {
  const fetchAllMeasurements = async () => {
    try {
      const { data } = await axios.get<I.FetchMeasurementsResponse>(
        MEASUREMENTS_URL
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const createOrUpdateMeasurements = async (
    payload: I.CreateOrUpdateMeasurementsRequest
  ) => {
    try {
      const { data } = await axios.post<I.CreateOrUpdateMeasurementsResponse>(
        MEASUREMENTS_URL,
        payload
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return { fetchAllMeasurements, createOrUpdateMeasurements };
};

export default LogbookService();
