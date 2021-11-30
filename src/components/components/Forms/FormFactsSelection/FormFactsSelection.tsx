import { Counter } from 'components/components/Counter/Counter';
import React from 'react';
import { Text } from '../../Text/Text';
import { ErrorLabel } from '../components/Input/components/ErrorLabel/ErrorLabel';
import { Label } from '../components/Input/components/Label/Label';
import { Input } from '../components/Input/Input';

import './FormFactsSelection.css';
import '../Forms.css';

export const FormFactsSelection = () => (
    <form className="form">
        <div className="form__fields-group">
            <Input
                className="input input_normal"
                placeholder="min Date"
                name="minDate"
                type="date"
            />
            <Label className="label" inputName="minDate" text="min Date" />
        </div>
        <div className="form__fields-group">
            <Input
                className="input input_normal"
                placeholder="max Date"
                name="maxDate"
                type="date"
            />
            <Label className="label" inputName="maxDate" text="max Date" />
        </div>
        <Counter value={10} rightStepHandler={() => {}} leftStepHandler={() => {}} label="Number Cat Facts" />
    </form>
);
