//custom links

import { Link as RadixLink } from "@radix-ui/themes"
import NextLink from "next/link"

//in this page nextLink is used for navigation and 
//avoids full page reloading while radixLink used for styling of link

interface Props {
    href: string
    children: string
}

const Link = ({href, children }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
    </NextLink>
  )
}

export default Link