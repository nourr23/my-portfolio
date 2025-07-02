// import { FormikErrors, FormikTouched } from "formik";

import { ChangeEvent } from "react";

interface FormValues {
  name: string;
  mail: string;
  message: string;
}

interface InputFieldProps {
  id: string;
  name: keyof FormValues;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent) => void;
  handleBlur: (e: React.FocusEvent) => void;
  errors: string | undefined;
  touched: boolean | undefined;
}
export const FormInput = ({
  onChange,
  errors,
  touched,
  handleBlur,
  type,
  ...otherProps
}: InputFieldProps) => {
  return (
    <div className="">
      {type === "textarea" ? (
        <textarea
          onChange={onChange}
          onBlur={handleBlur}
          {...otherProps}
          className={`w-full bg-transparent text-white border border-gray-600 rounded-md p-2  ${
            errors && touched ? "border-red-600" : " border-secondary-500"
          } `}
        />
      ) : (
        <input
          onChange={onChange}
          onBlur={handleBlur}
          {...otherProps}
          className={`w-full !bg-transparent text-white border border-gray-600 rounded-md p-2  ${
            errors && touched ? "border-red-600" : " border-secondary-500"
          } `}
        />
      )}

      {errors && touched && (
        <div className="text-red-600 text-xs mt-1">{errors}</div>
      )}
    </div>
  );
};
