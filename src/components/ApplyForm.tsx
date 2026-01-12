"use client"
import clsx from "clsx"
import { ContactInfoCard } from "./ContactInfoCard"
import { CheckboxField } from "./ui/CheckboxField"
import { PrimaryButton } from "./ui/PrimaryButton"
import { TextField } from "./ui/TextField"
import { useTranslations } from "next-intl"
import { Controller, useForm } from "react-hook-form"
import { useCallback } from "react"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUnit } from "effector-react"
import { createContactFormFx } from "@/models/contact"
import { Toasts } from "./toast/Toast"
import { useToast } from "./toast/useToast"
import { MaskedField } from "./ui/MaskedField"

type Props = {
  title: string
  desc: string
  isModal?: boolean
}

type FormValues = {
  fullName: string
  companyName: string
  email: string
  phone: string
  message: string
  agreeToTerms: boolean
}

export const ApplyForm = ({ title, desc, isModal }: Props) => {
  const { toasts, success, error, dismiss } = useToast()
  const t = useTranslations()
  const { sendContactForm, loading } = useUnit({
    sendContactForm: createContactFormFx,
    loading: createContactFormFx.pending,
  })

  const schema = z.object({
    fullName: z.string().min(1, t("form.error.requiredField")),
    companyName: z.string().min(1, t("form.error.requiredField")),
    email: z
      .email(t("form.error.emailInvalid"))
      .min(1, t("form.error.requiredField")),
    phone: z.string().min(1, t("form.error.requiredField")),
    message: z.string().min(1, t("form.error.requiredField")),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: t("form.error.requiredField"),
    }),
  })

  const { handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
      agreeToTerms: false,
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = useCallback(
    async (data: FormValues) => {
      try {
        await sendContactForm({
          fullName: data.fullName,
          company: data.companyName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        })
        success(t("form.message.success.messageSuccess"))
      } catch (_e) {
        error(t("form.message.error.messageFail"))
      }
    },
    [error, sendContactForm, success, t]
  )

  return (
    <>
      <Toasts toasts={toasts} onClose={dismiss} />
      <div className="flex lg:flex-nowrap flex-wrap xl:gap-10 gap-6">
        <div className="flex flex-col lg:w-1/2 w-full">
          <h4 className="text-2xl font-bold leading-6 mb-4">{title}</h4>
          <p className="lg:text-base! lg:mb-8 mb-4">{desc}</p>
          <form
            className="grid grid-cols-2 xl:gap-y-8 xl:gap-x-4 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="fullName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="lg:col-span-1 col-span-2">
                  <TextField
                    {...field}
                    label={t("label.fullName")}
                    onChange={(value) => setValue("fullName", value)}
                    placeholder={t("form.placeholder.enterFullName")}
                    error={!!error?.message}
                    helpText={error?.message}
                  />
                </div>
              )}
            />

            <Controller
              name="companyName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="lg:col-span-1 col-span-2">
                  <TextField
                    {...field}
                    label={t("label.companyName")}
                    onChange={(value) => setValue("companyName", value)}
                    error={!!error?.message}
                    helpText={error?.message}
                    placeholder={t("form.placeholder.enterCompanyName")}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <div className="lg:col-span-1 col-span-2">
                  <TextField
                    {...field}
                    label={t("label.emailAddress")}
                    onChange={(value) => setValue("email", value)}
                    error={!!error?.message}
                    helpText={error?.message}
                    placeholder="example@company.com"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState: { error } }) => (
                <div className="lg:col-span-1 col-span-2">
                  <MaskedField
                    {...field}
                    label={t("label.phoneNumber")}
                    placeholder="+1 (___) ___-__-__"
                    mask="+1 (___) ___-__-__"
                    type="tel"
                    error={!!error?.message}
                    helpText={error?.message}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="message"
              render={({ field, fieldState: { error } }) => (
                <div className="col-span-2">
                  <TextField
                    {...field}
                    label={t("label.message")}
                    placeholder={t("form.placeholder.yourMessage")}
                    rows={6}
                    onChange={(value) => setValue("message", value)}
                    multiple
                    error={!!error?.message}
                    helpText={error?.message}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="agreeToTerms"
              render={({ field, fieldState: { error } }) => (
                <div className="col-span-2">
                  <CheckboxField
                    checked={field.value}
                    onChange={(checked) => setValue("agreeToTerms", !!checked)}
                    error={!!error?.message}
                    label={t("form.checkbox.agreeToTerms")}
                  />
                </div>
              )}
            />
            <div className="col-span-2 flex lg:justify-start justify-center">
              <PrimaryButton
                type="submit"
                className="min-w-[200px]"
                disabled={loading}
              >
                {t("action.submit")}
              </PrimaryButton>
            </div>
          </form>
        </div>
        <div
          className={clsx(
            "lg:w-1/2 w-full",
            isModal ? "lg:block hidden" : "block"
          )}
        >
          <ContactInfoCard />
        </div>
      </div>
    </>
  )
}
