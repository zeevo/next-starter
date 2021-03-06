import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import GhostButton, { ThemedButtonVariant } from "./Button";

interface ColorModeToggleProps {
  tooltip?: boolean;
  variant: ThemedButtonVariant;
}

const ColorModeToggle: React.FC<ColorModeToggleProps> = (
  { tooltip, variant } = { tooltip: false, variant: "text" }
) => {
  const { theme, setTheme } = useTheme();
  return (
    <GhostButton
      onClick={() => {
        const nextMode = theme === "light" ? "dark" : "light";
        setTheme(nextMode);
      }}
      tooltip={
        tooltip ? (theme === "light" ? "Light mode" : "Dark mode") : undefined
      }
      variant={variant}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </GhostButton>
  );
};
export default ColorModeToggle;
