import { Github } from "lucide-react";

import { ThemeSwitcher } from "@/components/functional/ThemeSwitcher";
import { Button } from "@/components/ui/Button";
import { H1, H2, List, P } from "@/components/ui/Typography";

export default function Home() {
  return (
    <div className="py-20 px-6 max-w-2xl mx-auto">
      <H1>Windy Radix Template</H1>
      <P>Fusion of these cool projects😘</P>
      <List>
        <li>
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-11 transition-colors"
          >
            shadcn/ui
          </a>
        </li>
        <li>
          <a
            href="https://windy-radix-palette.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-11 transition-colors"
          >
            windy-radix-palette
          </a>
        </li>
      </List>
      <H2>In addition</H2>
      <P>These are already prepared🤩</P>
      <List>
        <li>Storybook</li>
        <li>ESLint import rules</li>
        <li>scaffdog template</li>
        <li>Theme switcher</li>
      </List>
      <div className="flex items-center gap-4">
        <Button>
          <Github className="mr-2 h-4 w-4" />
          <a
            href="https://github.com/hajimism/windy-radix-template"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Source
          </a>
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
