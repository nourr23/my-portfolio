"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormInput } from "../ui/input-form";
import { supabase } from "@/lib/supabase";
import { MessageType } from "@/types/message";
import { useState } from "react";
import { Spinner } from "../ui/spinner";
import { Toast } from "../ui/toast";
import { useTranslations } from "next-intl";

const sendMessageSchema = yup.object().shape({
  name: yup.string().required("Required"),
  mail: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string().required("Required"),
});
export const SendMessageForm = () => {
  const t = useTranslations("home");
  const [isPending, setIsPending] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    setTouched,
  } = useFormik({
    initialValues: {
      name: "",
      mail: "",
      message: "",
    },
    validationSchema: sendMessageSchema,
    onSubmit: (values) => {
      addMessage(values);
      console.log("Form submitted with values:", values);
    },
  });

  const addMessage = async (data: MessageType) => {
    const { name, message, mail } = data;
    try {
      setIsPending(true);
      const {} = await supabase
        .from("messages")
        .insert([{ name: name, message: message, mail: mail }])
        .select();
    } catch (error) {
      console.log("error", error);
      setIsPending(false);
    } finally {
      setValues({ name: "", mail: "", message: "" });
      setTouched({ name: false, mail: false, message: false });
      setIsPending(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <>
      <form
        className="md:mt-6 mt-2 flex flex-col gap-3 px-2 items-start"
        onSubmit={handleSubmit}
      >
        <div className=" w-full">
          <div className="text-white text-sm md:text-base capitalize">
            {t("full_name")}
          </div>
          <FormInput
            name="name"
            id="name"
            value={values.name}
            errors={errors.name}
            touched={touched.name}
            onChange={handleChange}
            handleBlur={handleBlur}
            type="text"
          />
        </div>
        <div className=" w-full">
          <div className="text-white text-sm md:text-base">Email</div>
          <FormInput
            name="mail"
            id="mail"
            type="email"
            value={values.mail}
            errors={errors.mail}
            touched={touched.mail}
            onChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>

        <div className=" w-full">
          <div className="text-white text-sm md:text-base">Message</div>
          <FormInput
            name="message"
            id="message"
            type="textarea"
            value={values.message}
            errors={errors.message}
            touched={touched.message}
            onChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>

        <div className=" p-[2px] mt-4 rounded-lg bg-gradient-to-r from-secondary-500 via-secondary-500 to-primary-500 ">
          <div className=" h-full w-full rounded-lg bg-dark-300 px-3 py-1">
            <button
              type="submit"
              className="text-white uppercase text-base  justify-between gap-x-2"
            >
              {isPending ? <Spinner /> : <div>{t("send")}</div>}
            </button>
          </div>
        </div>
      </form>
      {showToast && (
        <Toast title={"Success"} message={"Message Sent Successfully"} />
      )}
    </>
  );
};
