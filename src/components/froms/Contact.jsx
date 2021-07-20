import React from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../ui";
import emailjs from "emailjs-com";
function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  React.useEffect(() => emailjs.init("user_KAIdTNgGv1QLAq1gXijUW"), []);
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_fcry95k",
        "template_eubkzcj",
        data,
        "user_KAIdTNgGv1QLAq1gXijUW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message is sent");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong");
        }
      );
  };
  return (
    <div className="py-20 dark:bg-gray-900  ">
      <div className=" py-10">
        <h1 className="font-bold text-center dark:text-white xl:text-4xl text-3xl text-primary mb-3">
          Get In Touch
        </h1>
        <p className="text-center dark:text-gray-300 max-w-screen-md mx-auto font-bold text-xl text-primary">
          Call us on 0426845865 or fill in the form below and we will get back
          to you within the hour.
        </p>
      </div>

      <form
        className="bg-gray-200 dark:bg-gray-900 px-4 py-5 max-w-screen-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">
            Your Name (required)
          </label>
          <input
            className="rounded-sm shadow-md  border-transparent focus:border-transparent px-2 text-lg mb-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("name", { required: true })}
            type="text"
          />
          {errors.name?.type === "required" && (
            <h1 className="text-red-500 mb-2 text-sm ">
              Your name is required
            </h1>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">
            Your Email (required)
          </label>
          <input
            className="rounded-sm shadow-sm border-transparent focus:border-transparent px-2 text-lg mb-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            type="email"
          />
          {errors.email?.type === "required" && (
            <h1 className="text-red-500 mb-2 text-sm">Email is required</h1>
          )}
          {errors.email?.type === "pattern" && (
            <h1 className="text-red-500 mb-2 text-sm">Invalid email type </h1>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">
            Your Phone
          </label>
          <input
            className="rounded-sm shadow-sm border-transparent focus:border-transparent px-2 text-lg mb-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("phone")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <input
            className="rounded-sm shadow-sm border-transparent focus:border-transparent px-2 text-lg mb-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("phone")}
            type="tel"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1 text-gray-700 dark:text-gray-300">
            Your message
          </label>
          <textarea
            cols={1}
            rows={5}
            className="rounded-sm shadow-sm border-transparent focus:border-transparent px-2 text-lg mb-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("subject")}
          />
        </div>

        <PrimaryButton
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
          title="send"
        />
      </form>
    </div>
  );
}

export default Contact;
