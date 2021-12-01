import React from 'react';
import '../../Forms.css';
import './components/Label/Label.css';
import './Input.css';

export interface InputProps {
    type?: string;
    className?: string;
    value?: string | number;
    defaultValue?: string | number;
    placeholder?: string;
    name?: string;
    min?: string | number;
    max?: string | number;
    id?: string;
    labelText?: string;
    onClick?: () => void;
    onFocus?: () => void;
    onChange?: (event: any) => void;
    onBlur?: () => void;
}

export const Input = (props: InputProps) => (
    <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        min={String(props.min)}
        max={String(props.max)}
        defaultValue={props.defaultValue}
        aria-hidden="true"
        onClick={props.onClick}
        onFocus={props.onFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
    />
);
