"use client"
import { ServiceCard } from "@/components/cards"
import { QuoteForm } from "@/components/QuoteForm"
import { $services } from "@/models/service"
import { useUnit } from "effector-react"
import { useMemo } from "react"

export const ServiceFeatures = () => {
  const data = useUnit($services)

  const serviceList = useMemo(() => {
    return data.map((item) => ({
      title: item.name,
      desc: item.description,
      subItems: item.items.map((f) => f.title),
    }))
  }, [data])

  return (
    <section className="lg:pt-7 lg:pb-18 sm:py-12 py-6 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-4 lg:mb-20 mb-10">
          {serviceList.map((item, key) => (
            <ServiceCard key={key} {...item} />
          ))}
        </div>
        <QuoteForm />
      </div>
    </section>
  )
}
