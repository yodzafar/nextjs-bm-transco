type Props = {
  title: string
}

export const Breadcrumb = ({ title }: Props) => {
  return (
    <div className="flex items-center uppercase text-foreground gap-6">
      <div className="h-0.5 bg-foreground w-18" />
      <h6 className="font-inter text-base tracking-wider font-bold leading-5">
        {title}
      </h6>
    </div>
  )
}
