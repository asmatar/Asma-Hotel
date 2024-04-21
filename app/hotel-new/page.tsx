"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { PencilLine } from "lucide-react";
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
      gym: false,
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      bar: false,
      bikeRental: false,
      freeParking: false,
      freeWifi: false,
      laundry: false,
      movieNights: false,
      restaurant: false,
      shopping: false,
      coffeeShop: false,
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
                      <Textarea
                        placeholder="beach hotel is parked with many amenities!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="">
                <FormLabel>Choose Ameñities</FormLabel>
                <FormDescription>
                  Choose Amenities popular in your hotel
                </FormDescription>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <FormField
                    control={form.control}
                    name="gym"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Gym</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="spa"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Spa</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bar"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Bar</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="laundry"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Laundry</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="restaurant"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Restaurant</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shopping"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Shopping</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="freeParking"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Free Parking</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bikeRental"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Bike Rental</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="freeWifi"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Free Wifi</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="movieNights"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Movie Nights</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="swimingPool"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Swiming Pool</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coffeeShop"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md  p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Coffee Shop</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col  gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select a Country</FormLabel>
                      <FormDescription>
                        Choose a country where your hotel is located.
                      </FormDescription>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue
                            placeholder="select a country"
                            defaultValue={field.value}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {/* dynamic from package country-state-city*/}
                          <SelectItem value="light">country one</SelectItem>
                          <SelectItem value="dark">counmtry 2</SelectItem>
                          <SelectItem value="system">country 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select a State</FormLabel>
                      <FormDescription>
                        Choose a state where your hotel is located.
                      </FormDescription>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue
                            placeholder="select a state"
                            defaultValue={field.value}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {/* dynamic from package country-state-city*/}
                          <SelectItem value="light">country one</SelectItem>
                          <SelectItem value="dark">counmtry 2</SelectItem>
                          <SelectItem value="system">country 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select City (Optional)</FormLabel>
                    <FormDescription>
                      In wich city is your hotel located.
                    </FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          placeholder="Beach hotel is located at the very end of the beach road"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {/* dynamic from package country-state-city*/}
                        <SelectItem value="light">country one</SelectItem>
                        <SelectItem value="dark">counmtry 2</SelectItem>
                        <SelectItem value="system">country 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location description *</FormLabel>
                    <FormDescription>
                      Provide more information about the exact location of your
                      hotel. Tip, use landmarks like school, hospital, church
                      and roads
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Beach hotel is located at the very end of the beach road"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between gap-2 flex-wrap">
                <Button type="submit">
                  <PencilLine className="w-4 h-4 mr-2" />
                  Create Hotel
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HotelNew;
