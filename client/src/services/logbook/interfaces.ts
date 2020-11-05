import { Measurements } from "store/logbookReducer/interfaces/reducer";

export interface FetchMeasurementsResponse {
  data: Measurements[];
}

export type CreateOrUpdateMeasurementsRequest = Omit<
  Measurements,
  "user" | "id"
>;

export interface CreateOrUpdateMeasurementsResponse {
  message: string;
  data: Measurements;
}
