import { LocationMountainIcon, PhoneCircleIcon } from "../icons"

export const Header = () => {
  return (
    <header className="h-(--header-height) lg:block hidden bg-header-background text-white px-4">
      <div className="container mx-auto h-full flex items-center justify-between">
        <a
          href="https://www.google.com/maps/place/1520+Rock+Run+Dr,+Crest+Hill,+IL+60403,+USA/@41.5502088,-88.1410926,17z/data=!3m1!4b1!4m6!3m5!1s0x880e60520c177a03:0x56ec0cb1279f0d6d!8m2!3d41.5502088!4d-88.1385177!16s%2Fg%2F11bw3w_7ts?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
          className="flex items-center gap-[5px]"
          target="_blank"
          rel="noopener nofollow"
        >
          <span className="text-primary">
            <LocationMountainIcon />
          </span>
          <span className="text-base">
            1520 Rock Run Dr Suite 4H, Crest Hill, IL 60403
          </span>
        </a>
        <a href="tel:+18722455555" className="flex items-center gap-[5px]">
          <span className="text-primary">
            <PhoneCircleIcon />
          </span>
          <span className="text-base opacity-100">+1 872-245-5555</span>
        </a>
      </div>
    </header>
  )
}
