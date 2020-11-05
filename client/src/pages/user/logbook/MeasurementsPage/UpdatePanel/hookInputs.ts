import { HookFormInputInterface } from "components/inputs/HookFormInput";
import { Measurements } from "store/logbookReducer/interfaces/reducer";

export type UseMeasurementsFormInputs = Omit<Measurements, "createdAt">;

export interface MeasurementsInputs extends HookFormInputInterface {
  id: keyof Omit<Measurements, "createdAt">;
}

const min = {
  value: 1,
  message: "Minimum 0",
};

export const inputs: MeasurementsInputs[] = [
  {
    id: "weight",
    label: "Weight",
    type: "number",
    validation: {
      required: "This field is required",
      min,
    },
  },
  {
    id: "biceps",
    label: "Biceps",
    type: "number",
    validation: {
      required: "This field is required",
      min,
    },
  },
  {
    id: "chest",
    label: "Chest",
    type: "number",
    validation: {
      required: "This field is required",
      min,
    },
  },
  {
    id: "thigh",
    label: "Thigh",
    type: "number",
    validation: {
      required: "This field is required",
      min,
    },
  },
  {
    id: "calf",
    label: "Calf",
    type: "number",
    validation: {
      required: "This field is required",
      min,
    },
  },
  {
    id: "waist",
    label: "Waist",
    type: "number",
    validation: {
      required: "This field is required",
      min,
    },
  },
];
