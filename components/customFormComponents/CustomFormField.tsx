
import { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input"; // Assuming this is the path to your FormInput component from shadcn

interface CustomFormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  children?: ReactNode;
  type: string;
  className?: string;
}
const CustomFormField = ({
  control,
  name,
  label,
  description = "",
  placeholder = "",
  children,
  type,
  className = ""
}: CustomFormFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="flex flex-row flex-1">
            <FormControl>
              {children || (
                <Input
                  className={className}
                  placeholder={placeholder}
                  {...field}
                  type={type}
                  onChange={(e) =>
                    field.onChange(
                      type === "number" ? Number(e.target.value) : e.target.value
                    )
                  } // Convert to number if type is number
                />
              )}
            </FormControl>
          </div>
          <FormDescription>{description}</FormDescription>
          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
