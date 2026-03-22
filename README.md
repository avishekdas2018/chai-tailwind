# Chai Tailwind CSS Framework

A lightweight, utility-first CSS framework inspired by Tailwind CSS. Build modern, responsive web interfaces with simple, composable utility classes.

## Features

- **Utility-First**: Compose complex layouts with small, reusable classes
- **Dark Theme Ready**: Designed with dark themes in mind
- **Responsive**: Mobile-first approach
- **Lightweight**: No dependencies, just pure CSS utilities
- **Customizable**: Easy to extend and modify

## Installation

1. Download `main.js` from this repository
2. Include it in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
  </head>
  <body>
    <!-- Your content here -->
    <script src="main.js"></script>
  </body>
</html>
```

That's it! The framework will automatically inject all utility classes into your page.

## Usage

Add Chai classes directly to your HTML elements:

```html
<div class="chai-bg-blue-500 chai-text-white chai-p-4 chai-rounded">
  <h1 class="chai-text-2xl chai-font-bold chai-mb-4">Hello World</h1>
  <p class="chai-text-base">This is a paragraph with Chai styling.</p>
  <button
    class="chai-bg-green-500 chai-text-white chai-px-8 chai-py-4 chai-rounded chai-font-bold"
  >
    Click Me
  </button>
</div>
```

## Available Classes

### Box Model

- `chai-border-box` - `box-sizing: border-box;`
- `chai-content-box` - `box-sizing: content-box;`

### Display

- `chai-display-block` - `display: block;`
- `chai-display-hidden` - `display: none;`
- `chai-display-inline` - `display: inline;`
- `chai-display-inline-block` - `display: inline-block;`
- `chai-display-inline-flex` - `display: inline-flex;`
- `chai-display-inline-grid` - `display: inline-grid;`
- `chai-display-flex` - `display: flex;`
- `chai-display-grid` - `display: grid;`
- `chai-flex-row` - `flex-direction: row;`
- `chai-flex-col` - `flex-direction: column;`

### Spacing

- Padding: `chai-p-0`, `chai-p-1`, `chai-p-2`, `chai-p-3`, `chai-p-4`, `chai-p-8`
- Vertical Padding: `chai-py-2`, `chai-py-4`, `chai-py-8`
- Horizontal Padding: `chai-px-4`, `chai-px-8`
- Margin: `chai-m-0`, `chai-m-1`, `chai-m-2`, `chai-m-3`, `chai-m-4`, `chai-m-auto`
- Vertical Margin: `chai-my-8`
- Bottom Margin: `chai-mb-4`, `chai-mb-8`

### Colors

#### Background Colors

- `chai-bg-white` - White background
- `chai-bg-black` - Black background
- `chai-bg-gray-500`, `chai-bg-gray-800`, `chai-bg-gray-900` - Gray backgrounds
- `chai-bg-blue-500` - Blue background
- `chai-bg-green-500` - Green background
- `chai-bg-red-500`, `chai-bg-red-900` - Red backgrounds
- `chai-bg-fuchsia-500` - Fuchsia background
- `chai-bg-amber-500` - Amber background
- `chai-bg-yellow-500` - Yellow background

#### Text Colors

- `chai-text-white` - White text
- `chai-text-black` - Black text
- `chai-text-gray-800` - Dark gray text
- `chai-text-blue-500` - Blue text
- `chai-text-green-500` - Green text
- `chai-text-red-500` - Red text
- `chai-text-fuchsia-500` - Fuchsia text

### Typography

- Font Sizes: `chai-text-sm`, `chai-text-base`, `chai-text-lg`, `chai-text-xl`, `chai-text-2xl`, `chai-text-3xl`, `chai-text-4xl`
- Font Weights: `chai-font-normal`, `chai-font-bold`
- Text Alignment: `chai-text-left`, `chai-text-center`, `chai-text-right`

### Borders & Radius

- Borders: `chai-border`, `chai-border-white`, `chai-border-none`
- Border Radius: `chai-rounded-none`, `chai-rounded-sm`, `chai-rounded`, `chai-rounded-lg`, `chai-rounded-full`

### Layout

- Width: `chai-w-full`, `chai-w-1/2`
- Height: `chai-h-full`
- Max Width: `chai-max-w-4xl`
- Flexbox:
  - Justify: `chai-justify-start`, `chai-justify-center`, `chai-justify-between`, `chai-justify-end`
  - Align Items: `chai-items-start`, `chai-items-center`, `chai-items-stretch`
- Gap: `chai-gap-1`, `chai-gap-2`, `chai-gap-3`, `chai-gap-4`, `chai-gap-8`

## Example

Check out the included `index.html` for a complete landing page example showcasing various Chai classes in action.
