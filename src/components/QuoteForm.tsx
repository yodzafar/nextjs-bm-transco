"use client";
import { useTranslations } from "next-intl";
import { MaskedField } from "./ui/MaskedField";
import { PrimaryButton } from "./ui/PrimaryButton";
import { TextField } from "./ui/TextField";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useUnit } from "effector-react";
import { createQuoteRequestFx } from "@/models/quote";
import { useToast } from "./toast/useToast";
import { Toasts } from "./toast/Toast";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  equipment: string;
  trailerType: string;
  commodity: string;
  weight: string;
  description: string;
  pickupZipCode: string;
  pickupDate: string;
  deliveryZipCode: string;
  deliveryDate: string;
};

export const QuoteForm = () => {
  const { toasts, success, error, dismiss } = useToast();
  const t = useTranslations();
  const { createQuote, loading } = useUnit({
    createQuote: createQuoteRequestFx,
    loading: createQuoteRequestFx.pending,
  });

  const schema = z.object({
    fullName: z.string().min(2, t("form.error.requiredField")),
    email: z.email(),
    phone: z.string().min(1, t("form.error.requiredField")),
    equipment: z.string().min(2, t("form.error.requiredField")),
    trailerType: z.string().min(2, t("form.error.requiredField")),
    commodity: z.string().min(2, t("form.error.requiredField")),
    weight: z.string().min(2, t("form.error.requiredField")),
    description: z.string().min(2, t("form.error.requiredField")),
    pickupZipCode: z
      .string()
      .min(1, t("form.error.requiredField"))
      .refine((val) => val.match(/^\d{5}(-\d{4})?$/), {
        message: t("form.error.invalidZipCode"),
      }),
    pickupDate: z
      .string()
      .min(1, t("form.error.requiredField"))
      .refine(
        (val) => val.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/),
        {
          message: t("form.error.invalidDate"),
        },
      ),
    deliveryZipCode: z
      .string()
      .min(1, t("form.error.requiredField"))
      .refine((val) => val.match(/^\d{5}(-\d{4})?$/), {
        message: t("form.error.invalidZipCode"),
      }),
    deliveryDate: z
      .string()
      .min(1, t("form.error.requiredField"))
      .refine(
        (val) => {
          return val.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
        },
        {
          message: t("form.error.invalidDate"),
        },
      ),
  });

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      equipment: "",
      trailerType: "",
      commodity: "",
      weight: "",
      description: "",
      pickupZipCode: "",
      pickupDate: "",
      deliveryZipCode: "",
      deliveryDate: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data: FormValues) => {
      try {
        await createQuote({
          ...data,
          full_name: data.fullName,
          pickup_zip_code: data.pickupZipCode,
          dropoff_zip_code: data.deliveryZipCode,
          trailer_type: data.trailerType,
          pickup_date: data.pickupDate,
          dropoff_date: data.deliveryDate,
        });
        success(t("form.message.success.quoteCreated"));
      } catch (_e) {
        error(t("form.message.error.quoteFailed"));
      }
    },
    [createQuote, error, success, t],
  );

  return (
    <>
      <Toasts toasts={toasts} onClose={dismiss} />
      <form
        className="grid grid-cols-12 lg:gap-x-6 lg:gap-y-8 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-12">
          <h3 className="uppercase font-extrabold lg:text-3xl text-2xl leading-6">
            {t("action.getQuote")}
          </h3>
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="fullName"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.fullName")}
                placeholder={t("form.placeholder.enterFullName")}
                onChange={(v) => setValue("fullName", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                type="email"
                label={t("label.emailAddress")}
                placeholder={t("form.placeholder.enterEmail")}
                onChange={(v) => setValue("email", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState: { error } }) => (
              <MaskedField
                {...field}
                label={t("label.phoneNumber")}
                placeholder="+1 (___) ___-__-__"
                mask="+1 (___) ___-__-__"
                type="tel"
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="company"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.companyName")}
                placeholder={t("form.placeholder.enterCompanyName")}
                onChange={(v) => setValue("company", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="equipment"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.equipment")}
                placeholder={t("form.placeholder.enterEquipment")}
                onChange={(v) => setValue("equipment", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="trailerType"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.trailerType")}
                placeholder={t("form.placeholder.enterTrailerType")}
                onChange={(v) => setValue("trailerType", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="commodity"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.commodity")}
                placeholder={t("form.placeholder.enterCommodity")}
                onChange={(v) => setValue("commodity", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="weight"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.weight")}
                placeholder={t("form.placeholder.enterWeight")}
                onChange={(v) => setValue("weight", v)}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState: { error } }) => (
              <TextField
                multiple
                {...field}
                label={t("label.description")}
                placeholder={t("form.placeholder.enterText")}
                onChange={(v) => setValue("description", v)}
                error={!!error}
                helpText={error?.message}
                rows={4}
              />
            )}
          />
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="pickupZipCode"
            render={({ field, fieldState: { error } }) => (
              <MaskedField
                {...field}
                mask="_____-____"
                label={t("label.pickupZipCode")}
                placeholder="00000-0000"
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="pickupDate"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.pickupDate")}
                type="date"
                placeholder={t("form.placeholder.enterPickupDate")}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="deliveryZipCode"
            render={({ field, fieldState: { error } }) => (
              <MaskedField
                {...field}
                mask="_____-____"
                label={t("label.deliveryZipCode")}
                placeholder="00000-0000"
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12">
          <Controller
            control={control}
            name="deliveryDate"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("label.deliveryDate")}
                type="date"
                placeholder={t("form.placeholder.enterDeliveryDate")}
                error={!!error}
                helpText={error?.message}
              />
            )}
          />
        </div>
        <div className="col-span-12 flex lg:justify-start justify-center">
          <PrimaryButton type="submit" className="min-w-50" disabled={loading}>
            {t("action.submitRequest")}
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};
