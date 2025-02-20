export const FormInput = ({
  handleChange,
  errors,
  touched,
  handleBlur,
  type,
  ...otherProps
}: any) => {
  return (
    <div className="">
      {type === "textarea" ? (
        <textarea
          onChange={handleChange}
          onBlur={handleBlur}
          {...otherProps}
          className={`w-full bg-transparent text-white border border-gray-600 rounded-md p-2  ${
            errors && touched ? "border-red-600" : " border-secondary-500"
          } `}
        />
      ) : (
        <input
          onChange={handleChange}
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
