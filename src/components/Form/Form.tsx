import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "../../context/UserContext";

import { tiers } from "../../assets/constants";


/**
 * Create the Form schema considering the following:
 * - For accept, use literal and add the errorMap a callback with message "You must accept Terms and Conditions." 
 * - For tier: add string with invalid_type_error: "Please select a payment tier." 
 * 
 * Something like:
 
 const FormSchema = z.object({
  email: z.string().email(),
  accept: z.literal(true, {
    errorMap: () => ({ message: "" }),
  }),
  tier: z
    .string({ invalid_type_error: "" })
    .refine((val) => tiers.map((tier) => tier.id).includes(val)),
});

Finally, create a FormSchemaType given the above, use typeof.
 */

type FormSchemaType = z.infer<T>;

const Form: FC = () => {
  const history = useNavigate();
  // Context should be here
  
  /**
   * Create the zod form validator
   */


  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await new Promise(async (resolve) => {
      await setTimeout(() => {
          // Add a new user.

        resolve(undefined);
      }, 3000);
    });

    history("/users");

  };

  return (
    <>
      <h1 className="text-gray-900 font-bold text-3xl">
        Create New Account
      </h1>
      <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
        Become a member in just three easy steps.
      </p>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block">
            <span className="block">Email</span>
            <input
              type="text"
              className={`block border text-lg px-4 py-3 mt-2 rounded-lg border-gray-200 focus:bg-white text-gray-900 focus:border-blue-600 focus:ring-0 outline-none w-full  disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`}
              {/*register email validation */}
              disabled={}
            />
          </label>
          {// Add email validation & error message 
           (
            <p className="text-sm text-red-600 mt-1">{}</p>
          )}
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="block border text-lg rounded w-6 h-6 border-gray-200 text-blue-600 focus:ring-0 focus:outline-none focus:ring-offset-0 disabled:text-gray-200 disabled:cursor-not-allowed"
              {/*register accept validation */}
              disabled={}
            />
            <span className="block ml-4">I accept the Terms of Service</span>
          </label>
          {// Add accept validation & error message 
           (
            <p className="text-sm text-red-600 mt-1">{}</p>
          )}
        </div>
        <div>
          <p className="block">Payment Tier</p>
          <ul className="space-y-2 mt-2">
            {tiers.map((tier) => {
              return (
                <li
                  className={`border rounded-lg border-gray-200 text-gray-900`}
                  key={tier.id}
                >
                  <label
                    className={`flex justify-between px-6 py-4 items-center cursor-pointer`}
                  >
                    <div>
                      <p className={`font-medium text-lg`}>{tier.name}</p>
                      <p className={`text-sm opacity-80`}>{tier.description}</p>
                    </div>
                    <div className="flex items-center">
                      <p className={`font-medium mr-4 text-sm`}>
                        {tier.price.toLocaleString("en-US", {
                          currency: "USD",
                          style: "currency",
                        })}
                      </p>
                      <input
                        type="radio"
                        className="w-6 h-6 border ring-0 border-gray-200 text-blue-600 disabled:text-gray-300 outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
                        value={tier.id}
                        {/*register tier validation */}
                        disabled={}
                      />
                    </div>
                  </label>
                </li>

              );
            })}
          </ul>
          {// Add tier validation & error message 
          (
            <p className="text-sm text-red-600 mt-1">{}</p>
          )}
        </div>
        {/*add watch to check the data is ready to submit through JSON.stringify */}
        <pre>{}</pre>
        <button
          type="submit"
          className="w-full px-8 py-4 flex items-center justify-center uppercase text-white font-semibold bg-blue-600 rounded-lg disabled:bg-gray-100 disabled:text-gray-400"
          disabled={}
        >
          Create account
        </button>
      </form>
    </>
  );
};

export default Form;