import { Button } from 'components/components/Button/Button';
import { Counter } from 'components/components/Counter/Counter';
import React from 'react';
import { Label } from '../components/Input/components/Label/Label';
import { Input } from '../components/Input/Input';

import '../Forms.css';
import './FormFactsSelection.css';

interface FormFactsSelectionProps {
    minDate: number;
    maxDate: number;
}

export const FormFactsSelection = (/* formFactsSelection: FormFactsSelectionProps */) => (
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
            value={10}
            rightStepHandler={() => {}}
            leftStepHandler={() => {}}
            label="Number Cat Facts"
        />
    </form>
);
