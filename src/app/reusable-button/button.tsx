import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, FC } from "react"

import { cn } from "@/shared/utils"

const buttonVariants = {
  primary: "text-gray-50 bg-cyan-700 hover:bg-cyan-800",
  secondary: "text-gray-50 bg-blue-700 hover:bg-blue-800",
  outline: "text-gray-50 border border-current hover:bg-gray-100 hover:text-gray-900",
  // learn more about tailwind groups: https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups
  link: "group/link text-gray-100 ",
}

const buttonSizes = {
  lg: "px-4 py-3 rounded-none text-base ",
  md: "px-3 py-2 rounded-none text-sm ",
}

type CommonProps = {
  children: ReactNode
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  classes?: string
}

type ButtonProps = {
  element?: "button"
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  CommonProps

type AnchorProps = {
  element: "a"
  href: string // <-- required when using 'a'
  isExternal?: boolean
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> &
  CommonProps

// Polymorphism
type Props = ButtonProps | AnchorProps

const ContentWrapper = ({ children }: { children: ReactNode }) => (
  <span className="relative inline-block group-hover/link:underline group-hover/link:underline-offset-4">
    {children}
  </span>
)

const Button: FC<Props> = ({ variant = "primary", size = "lg", classes, element, children, ...rest }) => {

  const className = cn(
    "relative max-h-max leading-[0] inline-flex items-center font-semibold text-nowrap transition",
    buttonSizes[size],
    buttonVariants[variant],
    classes,
  )

  if (element === "a") {
    const { isExternal, ...anchorProps } = rest as AnchorProps
    return (
      <a
        {...anchorProps}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <ContentWrapper>{children}</ContentWrapper>
      </a>
    )
  }

  const buttonProps = rest as ButtonProps
  return (
    <button {...buttonProps} type="button" className={className}>
      <ContentWrapper>{children}</ContentWrapper>
    </button>
  )
}

export default Button
