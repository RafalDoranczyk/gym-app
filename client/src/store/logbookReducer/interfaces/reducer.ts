export interface LogbookReducerState {
  readonly allMeasurements: Measurements[];
  readonly mealsToFoodDay: MealToFoodDay[];
  // date format is YYYY-MM-DD
  readonly selectedDate: string;
  readonly isSelectedDateMatch: boolean;
  readonly lastMeasurementsUpdate: LastMeasurementsUpdate;
  readonly isMeasurementsNeverUpdated: boolean;
}

export interface LastMeasurementsUpdate {
  readonly dateString: string;
  readonly days: number;
}

export interface Measurements {
  createdAt: string;
  weight: number;
  biceps: number;
  chest: number;
  thigh: number;
  calf: number;
  waist: number;
}

export interface DietFoodDay {}

export interface MealToFoodDay {
  createdAt: string;
}
