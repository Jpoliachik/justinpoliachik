# Card Creator Implementation Plan (Simplified)

## Overview
Building a React-based trading card creator with real-time preview and form controls using shadcn/ui components and react-hook-form.

## Phase 1: Setup & Infrastructure ⚙️

### Dependencies to Install (Minimal)
- [ ] shadcn/ui core components
- [ ] react-hook-form (form state management)
- [ ] @radix-ui components (used by shadcn)
- [ ] clsx & tailwind-merge (utility functions)
- [ ] lucide-react (icons)

### Configuration
- [ ] Set up shadcn/ui components.json
- [ ] Add cn() utility function for className merging

## Phase 2: Form Fields (No Validation) 📋

### Loose Field Guidelines
- **Name**: Text input
- **HP**: Number input (maybe 1-999)
- **Tagline**: Text input
- **Image**: URL string only
- **Background**: Single color or two-color gradient
- **Moves** (1-3 moves):
  - Title: Text input
  - Description: Text input
  - Damage: Number input
  - Icon Count: 1-4
  - Type: Dropdown selection

## Phase 3: Image Handling 🖼️

### Single Input Method: URL Only
- [ ] Text input for image URL
- [ ] Display image preview
- [ ] Handle broken image URLs gracefully

### Implementation Notes
- Simple URL input field
- No file upload needed
- No validation required

## Phase 4: Form Components 🎨

### Basic Fields
- [ ] **Input** - Name field with character counter
- [ ] **Slider** - HP selector (1-999)
- [ ] **Textarea** - Tagline with character limit

### Image Section
- [ ] **Tabs** - Switch between URL/Upload/Gallery
- [ ] **ImagePreview** - Show selected image
- [ ] **FileUpload** - Drag & drop support

### Moves Array
- [ ] **FormArray** - Dynamic add/remove moves
- [ ] **MoveCard** - Collapsible card for each move
- [ ] **Select** - Move type dropdown
- [ ] **NumberInput** - Damage value
- [ ] **IconSelector** - Visual icon count picker

### Background Color
- [ ] **ColorPicker** - Visual color swatches
- [ ] **GradientToggle** - Switch between solid/gradient
- [ ] **ColorPreview** - Show selected colors

## Phase 5: Real-time Updates ⚡

### Implementation Strategy
- [ ] Use react-hook-form's `watch()` hook
- [ ] Implement debouncing for text inputs (300ms)
- [ ] Immediate updates for selections/toggles
- [ ] Optimize re-renders with React.memo

### Performance Considerations
- [ ] Debounce text input updates
- [ ] Memoize expensive computations
- [ ] Use form state instead of component state
- [ ] Lazy load preset images

## Phase 6: Export Features 💾

### Core Features
- [ ] **Download as PNG**
  - Use html2canvas or similar
  - Maintain high resolution (816x1110)
  - Client-side generation

- [ ] **Copy JSON**
  - Export card data structure
  - Include validation
  - Format for readability

- [ ] **Save/Load Presets**
  - LocalStorage persistence
  - Import/Export JSON files
  - Share via URL parameters

### Additional Features
- [ ] Print-friendly version
- [ ] Batch export multiple cards
- [ ] Template library

## Component Structure

```
CardCreator/
├── CardCreatorForm.tsx       # Main form container
├── CardPreview.tsx           # Live preview wrapper
├── TradingCard.tsx           # Card display (existing)
├── forms/
│   ├── BasicFieldsSection.tsx
│   ├── ImageSection.tsx
│   ├── MovesSection.tsx
│   └── BackgroundSection.tsx
├── ui/                       # Shadcn components
│   ├── form.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── slider.tsx
│   └── button.tsx
└── schemas/
    └── cardSchema.ts         # Zod validation schema
```

## Current Status

### Completed ✅
- [x] Research and plan form implementation approach
- [x] Create type definitions for card data
- [x] Copy SVG icon assets to public folder
- [x] Create TradingCard display component
- [x] Create CardCreator wrapper component
- [x] Create card-creator page route
- [x] Test rendering with hardcoded Bob Ross data

### In Progress 🔄
- [ ] Install shadcn/ui and dependencies

### Pending ⏳
- [ ] Set up shadcn/ui configuration
- [ ] Install react-hook-form and zod for validation
- [ ] Create form schema with validation rules
- [ ] Add shadcn form components
- [ ] Build basic form fields
- [ ] Implement image input
- [ ] Build moves array form
- [ ] Add background color selector
- [ ] Connect form to preview with real-time updates
- [ ] Add export/download functionality

## Notes & Decisions

### Image Handling Decision
- **Chosen Approach**: Combination of URL input, file upload, and preset gallery
- **Rationale**: Provides maximum flexibility while working within browser security constraints
- **Alternative Considered**: Electron app for local file access (rejected for complexity)

### Form Library Decision
- **Chosen**: react-hook-form with Zod
- **Rationale**: Excellent TypeScript support, performant, works well with shadcn/ui
- **Alternative Considered**: Formik (rejected due to performance concerns with real-time updates)

### UI Component Library Decision
- **Chosen**: shadcn/ui
- **Rationale**: Highly customizable, owns the components, great DX
- **Alternative Considered**: Material-UI, Ant Design (rejected for being too opinionated)

## Next Steps
1. Install all dependencies
2. Set up shadcn/ui configuration
3. Create the form schema
4. Build form sections incrementally
5. Test real-time updates
6. Implement export functionality