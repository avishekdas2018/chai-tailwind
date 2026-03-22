const styles = {
  // --- Box ---
  "chai-border-box": `box-sizing: border-box;`,
  "chai-content-box": `box-sizing: content-box;`,

  // --- Display ---
  "chai-display-block": `display: block;`,
  "chai-display-hidden": `display: none;`,
  "chai-display-inline": `display: inline;`,
  "chai-display-inline-block": `display: inline-block;`,
  "chai-display-inline-flex": `display: inline-flex;`,
  "chai-display-inline-grid": `display: inline-grid;`,
  "chai-display-flex": `display: flex;`,
  "chai-display-grid": `display: grid;`,
  "chai-flex-row": `flex-direction: row;`,
  "chai-bg-gray-800": `background-color: #2d3748;`,
  "chai-bg-gray-900": `background-color: #1a202c;`,
  "chai-bg-red-900": `background-color: #742a2a;`,

  // --- Spacing ---
  "chai-p-0": `padding: 0;`,
  "chai-p-1": `padding: 4px;`,
  "chai-p-2": `padding: 8px;`,
  "chai-p-3": `padding: 16px;`,
  "chai-p-4": `padding: 24px;`,
  "chai-p-8": `padding: 32px;`,

  "chai-py-2": `padding-top: 8px; padding-bottom: 8px;`,
  "chai-py-4": `padding-top: 24px; padding-bottom: 24px;`,
  "chai-py-8": `padding-top: 32px; padding-bottom: 32px;`,

  "chai-px-4": `padding-left: 24px; padding-right: 24px;`,
  "chai-px-8": `padding-left: 32px; padding-right: 32px;`,

  "chai-m-0": `margin: 0;`,
  "chai-m-1": `margin: 4px;`,
  "chai-m-2": `margin: 8px;`,
  "chai-m-3": `margin: 16px;`,
  "chai-m-4": `margin: 24px;`,
  "chai-m-auto": `margin: auto;`,

  "chai-my-8": `margin-top: 32px; margin-bottom: 32px;`,
  "chai-mb-4": `margin-bottom: 24px;`,
  "chai-mb-8": `margin-bottom: 32px;`,

  // --- Colors ---
  "chai-bg-white": `background-color: #ffffff;`,
  "chai-bg-black": `background-color: #000000;`,
  "chai-bg-blue-500": `background-color: oklch(62.3% 0.214 259.815);`,
  "chai-bg-green-500": `background-color: oklch(72.3% 0.219 149.579)`,
  "chai-bg-red-500": `background-color: oklch(63.7% 0.237 25.331)`,
  "chai-bg-gray-500": `background-color: oklch(55.1% 0.027 264.364);`,
  "chai-bg-gray-900": `background-color: oklch(13% 0.028 261.692);`,
  "chai-bg-fuchsia-500": `background-color: oklch(59.1% 0.293 322.896)`,
  "chai-bg-amber-500": `background-color: oklch(76.9% 0.188 70.08)`,
  "chai-bg-yellow-500": `background-color: oklch(79.5% 0.184 86.047)`,

  "chai-text-white": `color: #ffffff;`,
  "chai-text-black": `color: #000000;`,
  "chai-text-gray-800": `color: oklch(21% 0.034 264.665);`,
  "chai-text-red-500": `color: oklch(63.7% 0.237 25.331);`,
  "chai-text-blue-500": `color: oklch(62.3% 0.214 259.815);`,
  "chai-text-green-500": `color: oklch(72.3% 0.219 149.579);`,
  "chai-text-fuchsia-500": `color: oklch(59.1% 0.293 322.896);`,

  // --- Typography ---
  "chai-text-sm": `font-size: 14px;`,
  "chai-text-base": `font-size: 16px;`,
  "chai-text-lg": `font-size: 18px;`,
  "chai-text-xl": `font-size: 24px;`,
  "chai-text-2xl": `font-size: 32px;`,
  "chai-text-3xl": `font-size: 48px;`,
  "chai-text-4xl": `font-size: 64px;`,

  "chai-font-normal": `font-weight: 400;`,
  "chai-font-bold": `font-weight: 700;`,

  "chai-text-left": `text-align: left;`,
  "chai-text-center": `text-align: center;`,
  "chai-text-right": `text-align: right;`,

  // --- Borders & Radius ---
  "chai-border": `border: 1px solid #e2e8f0;`,
  "chai-border-white": `border: 1px solid #ffffff;`,
  "chai-border-none": `border: none;`,

  "chai-rounded-none": `border-radius: 0;`,
  "chai-rounded-sm": `border-radius: 4px;`,
  "chai-rounded": `border-radius: 8px;`,
  "chai-rounded-lg": `border-radius: 16px;`,
  "chai-rounded-full": `border-radius: 9999px;`,

  // --- Layout ---
  "chai-w-full": `width: 100%;`,
  "chai-h-full": `height: 100%;`,
  "chai-w-1/2": `width: 50%;`,
  "chai-max-w-4xl": `max-width: 56rem;`,

  "chai-flex-col": `flex-direction: column;`,
  "chai-justify-start": `justify-content: flex-start;`,
  "chai-justify-center": `justify-content: center;`,
  "chai-justify-between": `justify-content: space-between;`,
  "chai-justify-end": `justify-content: flex-end;`,

  "chai-items-start": `align-items: flex-start;`,
  "chai-items-center": `align-items: center;`,
  "chai-items-stretch": `align-items: stretch;`,

  "chai-gap-1": `gap: 4px;`,
  "chai-gap-2": `gap: 8px;`,
  "chai-gap-3": `gap: 16px;`,
  "chai-gap-4": `gap: 24px;`,
  "chai-gap-8": `gap: 32px;`,
};

document.addEventListener("DOMContentLoaded", () => {
  try {
    for (const style in styles) {
      const value = styles[style];
      const styleElement = document.createElement("style");
      styleElement.textContent = `.${style} { ${value} }`;
      document.head.appendChild(styleElement);
    }
  } catch (error) {
    console.error("Error applying styles:", error);
  }
});
