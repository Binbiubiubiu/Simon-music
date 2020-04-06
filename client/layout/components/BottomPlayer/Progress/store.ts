export interface ProgressState {
  current: number;
  sum: number;
  startVal: number;
  isMoving: boolean;
}

export const progressReducer = (state: ProgressState, payload: Partial<ProgressState>) => {
  return { ...state, ...payload };
};
