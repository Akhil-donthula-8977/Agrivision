"use client";
import React from 'react';
import Select from 'react-select';
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form"; // Adjust the path as needed

interface CustomDropDownProps {
  control: Control<any>;
  name: string;
  description?: string;
  placeholder?: string;
  label: string;
  options: Array<string>;
  className?: string;
  errors: FieldErrors<FieldValues>;
}

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  control,
  name,
  label,
  description = "",
  placeholder = "",
  options,
  className = "",
  errors
}) => {
  const error = errors[name]?.message;

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              options={options.map(option => ({ value: option, label: option }))}
              value={{ value: field.value, label: field.value }}
              onChange={(selectedOption) => field.onChange(selectedOption?.value)}
              placeholder={placeholder}
              className={className}
            />
          )}
          rules={{ required: "This field is required" }} // Adjust the validation message as needed
        />
      </FormControl>
      <FormDescription>{description}</FormDescription>
      {error && (
        <FormMessage>{error as string}</FormMessage>
      )}
    </FormItem>
  );
};

export default CustomDropDown;
