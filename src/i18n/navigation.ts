import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const {
  Link: IntlLink,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing)
