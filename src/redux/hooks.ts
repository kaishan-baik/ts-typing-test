import type { RootState, AppDispatch } from "./store/store";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux/es/exports";

// get
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// set
export const useAppDispatch: () => AppDispatch = useDispatch;
