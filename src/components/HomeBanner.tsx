"use client"

type Props = {
  title: string
  text: string
}

export const HomeBanner = ({ title, text }: Props) => {
  return (
    <>
      <style jsx>{`
        .section-bg {
          background: url("/images/section-bg-2.png") center center no-repeat;
          background-size: cover;
        }

        @media (max-width: 1023px) {
          .section-bg {
            background: url("/images/section-bg-mobile-2.svg") center center
              no-repeat;
            background-size: cover;
          }
        }
      `}</style>
      <div className="section-bg">
        <div className="container mx-auto lg:pt-12 flex flex-col text-center justify-center items-center text-white sm:h-[40vh] h-[250px]">
          <h1 className="mb-3">{title}</h1>
          <p className="md:text-xl!">{text}</p>
        </div>
      </div>
    </>
  )
}
