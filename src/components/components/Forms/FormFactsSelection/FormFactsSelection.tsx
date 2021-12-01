import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/components/Button/Button';
import { Counter } from 'components/components/Counter/Counter';
import { Label } from '../components/Input/components/Label/Label';
import { Input } from '../components/Input/Input';

import '../Forms.css';
import './FormFactsSelection.css';
import { getNumberCatFactsState } from '../../../../redux/selectors/catFactsState';
import { setNumberCatFacts } from '../../../../redux/actions/catFactsState/setNumberCatFacts';

export const FormFactsSelection = () => {
    const dispatch = useDispatch();
    const numberCatFacts = useSelector(getNumberCatFactsState);

    const [
        countCatFacts,
        SetCountCatFacts,
    ] = useState({
        value: numberCatFacts,
    });

    return (
        <form className="form form-fact-selection">
            <div className="form-fact-selection__dates-group">
                <div className="form__fields-group form-fact-selection__group">
                    <Input
                        className="input input_normal form-fact-selection__date"
                        placeholder="min Date"
                        name="minDate"
                        type="date"
                    />
                    <Label className="label" inputName="minDate" text="Min Date" />
                </div>
                <div className="form__fields-group form-fact-selection__group">
                    <Input
                        className="input input_normal form-fact-selection__date"
                        placeholder="max Date"
                        name="maxDate"
                        type="date"
                    />
                    <Label className="label" inputName="maxDate" text="Max Date" />
                </div>
            </div>
            <Button type="button" className="button button_orange" text="Sort Facts" />
            <Counter
                value={countCatFacts.value}
                rightStepHandler={() => {
                    SetCountCatFacts({
                        value: Number(countCatFacts.value) + 1,
                    });
                    dispatch(setNumberCatFacts(Number(countCatFacts.value) + 1));
                }}
                leftStepHandler={() => {
                    if (countCatFacts?.value) {
                        if (countCatFacts?.value > 2) {
                            SetCountCatFacts({
                                value: Number(countCatFacts.value) - 1,
                            });
                            dispatch(setNumberCatFacts(Number(countCatFacts.value) - 1));
                        }
                    }
                }}
                label="Number Cat Facts"
            />
        </form>
    );
};
