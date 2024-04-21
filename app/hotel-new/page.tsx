"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  /*   username: z.string().min(2).max(50), */
  bar: z.union([z.boolean(), z.null()]),
  bikeRental: z.union([z.boolean(), z.null()]),
  city: z.union([z.string(), z.null()]),
  country: z.union([z.string(), z.null()]),
  description: z.union([z.string(), z.null()]),
  freeParking: z.union([z.boolean(), z.null()]),
  freeWifi: z.union([z.boolean(), z.null()]),
  gym: z.union([z.boolean(), z.null()]),
  laundry: z.union([z.boolean(), z.null()]),
  locationDescription: z.union([z.string(), z.null()]),
  movieNights: z.union([z.boolean(), z.null()]),
  restaurant: z.union([z.boolean(), z.null()]),
  shopping: z.union([z.boolean(), z.null()]),
  spa: z.union([z.boolean(), z.null()]),
  state: z.union([z.string(), z.null()]),
  swimingPool: z.union([z.boolean(), z.null()]),
  title: z.union([z.string(), z.null()]),
});

const HotelNew = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      bar: false,
      bikeRental: false,
      freeParking: false,
      freeWifi: false,
      gym: false,
      laundry: false,
      movieNights: false,
      restaurant: false,
      shopping: false,
      spa: false,
      swimingPool: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="font-semibold text-lg">Describe your hotel</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hotel title *</FormLabel>
                    <FormDescription>provide your hotel name</FormDescription>
                    <FormControl>
                      <Input placeholder="beach hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hotel description *</FormLabel>
                    <FormDescription>
                      provide a detail description of your hotel
                    </FormDescription>
                    <FormControl>
                      <Input
                        placeholder="beach hotel is parked with many amenities!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1 flex flex-col  gap-6">part 2</div>
            {/*     <Button type="submit">Submit</Button> */}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HotelNew;
