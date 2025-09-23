import { jsxs, jsx } from 'react/jsx-runtime';
import { c as cn } from './ssr.mjs';
import '@tanstack/react-router';
import '@radix-ui/react-navigation-menu';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-separator';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function EventCard() {
  return /* @__PURE__ */ jsxs(Card, { className: "p-2", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "EVAC - Monster Mash 2025" }) }),
    /* @__PURE__ */ jsx(CardContent, {})
  ] });
}
const SplitComponent = function RouteComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
    "Show events here!",
    /* @__PURE__ */ jsx(EventCard, {})
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-h-PIiIsp.mjs.map
