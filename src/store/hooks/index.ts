import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from '../types';

export const useFabricDispatch = () => useDispatch<AppDispatch>();
export const useFabricSelector: TypedUseSelectorHook<RootState> = useSelector;
