import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "./elements/Button";
import { setAddress } from "../stores/userInfo/addressSlice";

export function AddressForm({ onTabSwitch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setAddress(data));
    onTabSwitch("Payment");
  };

  return (
    <form
      className="md:w-2/3 md:mx-auto px-3 pt-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="pt-4 mb-6 text-2xl md:text-center">
        Address for the delivery
      </h3>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="streetAddress"
        >
          Street Address
        </label>
        <input
          {...register("address", { required: true })}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-zinc-700"
          id="stree-address"
          type="text"
          placeholder="Street Address"
        />
        {errors.address && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="city"
          >
            City
          </label>
          <input
            {...register("city", { required: true })}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-zinc-700"
            id="city"
            type="text"
            placeholder="City"
          />
          {errors.city && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="state"
          >
            State
          </label>
          <input
            {...register("state", { required: true })}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-zinc-700"
            id="state"
            type="text"
            placeholder="state"
          />
          {errors.state && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      </div>

      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="country"
          >
            Country
          </label>
          <input
            {...register("country", { required: true })}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-zinc-700"
            id="country"
            type="text"
            placeholder="Country"
          />
          {errors.country && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="postalCode"
          >
            Postal Code
          </label>
          <input
            {...register("postalCode", { required: true })}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-zinc-700"
            id="postal-code"
            type="text"
            placeholder="Postal Code"
          />
          {errors.postalCode && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      </div>

      <div className="flex justify-end p-2">
        <Button variant="dark" className="flex items-center" type="submit">
          <span className="mr-1">Next</span>
        </Button>
      </div>
    </form>
  );
}
