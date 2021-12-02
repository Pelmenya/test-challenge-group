import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CatFactResponse } from 'api/catFactsApi.types';

import { Button } from 'components/components/Button/Button';
import { Counter } from 'components/components/Counter/Counter';
import { Label } from '../components/Input/components/Label/Label';
import { Input } from '../components/Input/Input';

import '../Forms.css';
import './FormFactsSelection.css';
import {
    getCatFacts,
    getMaxDate,
    getMinDate,
    getNumberCatFactsState,
    getSortCatFacts,
} from '../../../../redux/selectors/catFactsState';
import { setNumberCatFacts } from '../../../../redux/actions/catFactsState/setNumberCatFacts';
import { setMinDate } from '../../../../redux/actions/catFactsState/setMinDate';
import { setMaxDate } from '../../../../redux/actions/catFactsState/setMaxDate';
import {
    setSortCatFacts, SetSortCatFactsPayload,
} from '../../../../redux/actions/catFactsState/setSortCatFacts';
import { getRandomFactsFulfilled } from '../../../../redux/actions/catFactsState/getRandomFacts';

export const FormFactsSelection = () => {
    const dispatch = useDispatch();
    const numberCatFacts = useSelector(getNumberCatFactsState);
    const catFacts = useSelector(getCatFacts);
    const minDate = useSelector(getMinDate);
    const maxDate = useSelector(getMaxDate);
    const sortCatFacts = useSelector(getSortCatFacts);

    const [
        countCatFacts,
        setCountCatFacts,
    ] = useState({
        numberCatFactsValue: numberCatFacts,
    });

    const [
        minDateState,
        setMinDateState,
    ] = useState({
        minDateStateValue: minDate,
    });

    const [
        maxDateState,
        setMaxDateState,
    ] = useState({
        maxDateStateValue: maxDate,
    });

    useEffect(() => {
        if (sortCatFacts === null) {
            if (catFacts !== null && Array.isArray(catFacts)) {
                const facts = [
                    ...catFacts,
                ];
                const sort = facts.sort((fact: CatFactResponse, factNext: CatFactResponse) => (
                    +new Date(String(fact.updatedAt).slice(0, 10)) - +new Date(String(factNext.updatedAt).slice(0, 10))
                ));
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                const min = String(sort[0].updatedAt).slice(0, 10);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                const max = String(sort[sort.length - 1].updatedAt).slice(0, 10);

                dispatch(setMinDate(min));
                dispatch(setMaxDate(max));

                if (
                    (minDateState.minDateStateValue === '')
                    || (maxDateState.maxDateStateValue === '')
                ) {
                    setMinDateState({ minDateStateValue: min });
                    setMaxDateState({ maxDateStateValue: max });
                    dispatch(setSortCatFacts(sort as SetSortCatFactsPayload));
                }
            }
        }
    });

    return (
        <form className="form form-fact-selection">
            <div className="form-fact-selection__dates-group">
                <div className="form__fields-group form-fact-selection__group">
                    <Input
                        onChange={(event: Event) => {
                            if (event.target instanceof HTMLInputElement) {
                                setMinDateState({ minDateStateValue: event.target.value });
                            }
                        }}
                        className="input input_normal form-fact-selection__date"
                        placeholder="Min Date"
                        name="minDate"
                        type="date"
                        value={minDateState.minDateStateValue}
                        min={minDate}
                        max={maxDate}
                    />
                    <Label className="label" inputName="minDate" text="Min Date" />
                </div>
                <div className="form__fields-group form-fact-selection__group">
                    <Input
                        onChange={(event: Event) => {
                            if (event.target instanceof HTMLInputElement) {
                                setMaxDateState({ maxDateStateValue: event.target.value });
                            }
                        }}
                        className="input input_normal form-fact-selection__date"
                        placeholder="Max Date"
                        name="maxDate"
                        type="date"
                        value={maxDateState.maxDateStateValue}
                        min={minDate}
                        max={maxDate}
                    />
                    <Label className="label" inputName="maxDate" text="Max Date" />
                </div>
            </div>
            <Button
                type="button"
                className="button button_orange"
                text="Sort Facts"
                onClick={() => {
                    const min = Number(+new Date(String(minDateState.minDateStateValue)));
                    const max = Number(+new Date(String(maxDateState.maxDateStateValue)));
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    const sortArr: SetSortCatFactsPayload | undefined = catFacts?.filter((fact: CatFactResponse) => (
                        ((min <= Number(+new Date(fact.updatedAt.slice(0, 10)))
                        && Number(+new Date(fact.updatedAt.slice(0, 10))) <= max))
                    ));
                    dispatch(setSortCatFacts(sortArr as SetSortCatFactsPayload));
                }}
            />
            <Counter
                value={countCatFacts.numberCatFactsValue}
                rightStepHandler={() => {
                    setCountCatFacts({
                        numberCatFactsValue: Number(countCatFacts.numberCatFactsValue) + 1,
                    });
                    dispatch(setNumberCatFacts(Number(countCatFacts.numberCatFactsValue) + 1));
                    dispatch(setSortCatFacts(null));
                    dispatch(getRandomFactsFulfilled(null));
                    dispatch(setMaxDate(''));
                    dispatch(setMinDate(''));
                }}
                leftStepHandler={() => {
                    if (countCatFacts.numberCatFactsValue) {
                        if (countCatFacts.numberCatFactsValue > 2) {
                            setCountCatFacts({
                                numberCatFactsValue: Number(countCatFacts.numberCatFactsValue) - 1,
                            });
                            dispatch(
                                setNumberCatFacts(Number(countCatFacts.numberCatFactsValue) - 1),
                            );
                            dispatch(setSortCatFacts(null));
                            dispatch(getRandomFactsFulfilled(null));
                            dispatch(setMaxDate(''));
                            dispatch(setMinDate(''));
                        }
                    }
                }}
                label="Number Cat Facts"
            />
        </form>
    );
};
