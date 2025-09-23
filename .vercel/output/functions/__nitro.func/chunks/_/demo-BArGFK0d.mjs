import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { S as Separator, c as cn } from './ssr.mjs';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { Outlet, Link } from '@tanstack/react-router';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-separator';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-none border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-black animate-pulse", className),
      ...props
    }
  );
}
const navbarEntries = [{
  title: "Overview",
  href: "/events/demo"
}, {
  title: "Entry List",
  href: "/events/demo/entries"
}, {
  title: "Agenda",
  href: "/events/demo/entries"
}, {
  title: "Travel",
  href: "/events/demo/entries"
}, {
  title: "Brackets",
  href: "/events/demo/brackets"
}, {
  title: "Upcoming Fights",
  href: "/events/demo/upcoming"
}, {
  title: "Livestream",
  href: "/events/demo/entries"
}];
function EventHeader() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-card text-card-foreground pt-4 space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-4 px-4", children: [
      " ",
      /* @__PURE__ */ jsx(Skeleton, { className: "h-32 w-32" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-4xl", children: "EVAC - Monster Mash 2025" }),
        /* @__PURE__ */ jsx("div", { children: "EAST VALLEY ATTACK COMBAT ROBOTICS is happy to partner with Combat Ready Robotics to present Monster Mash 2025" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs", children: "DATE" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm", children: "October 11th, 2025" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs", children: "LOCATION" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Tempe, AZ" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs", children: "WEIGHT CLASSES" }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm space-x-1 space-y-1", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Fairyweight" }),
              /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Antweight" }),
              /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Plastic Antweight" }),
              /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Beetleweight" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(NavigationMenu, { className: "", children: /* @__PURE__ */ jsxs(NavigationMenuList, { className: "flex flex-row w-full grow px-4 h-12", children: [
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
        navbarEntries.map((entry, idx, arr) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(NavigationMenuItem, { className: "px-4 hover:bg-gray-300 h-full justify-center flex flex-col", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: entry.href, className: "text-sm text-sky-600", children: entry.title }) }),
          /* @__PURE__ */ jsx(Separator, { orientation: "vertical" })
        ] }))
      ] }) })
    ] })
  ] });
}
const SplitComponent = function RouteComponent() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(EventHeader, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=demo-BArGFK0d.mjs.map
