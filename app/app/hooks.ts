import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector
} from 'react-redux';
import type {
    AppDispatch,
    RootState,
} from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// The purpose of the above code is to simply allow us to use useAppDispatch 
// and useAppSelector instead of the plain useDispatch and useSelector. It’s just 
// some more boilerplate you should not worry about.