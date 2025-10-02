# Changelog

## 2.1.0 - 2025-10-02
### Added
- Introduced a typography base contract on the `.d3-widgets` root:
  - `--dw-font-size` (default 16px) and `--dw-line-height` (1.25)
  - Applied `font-size`, `line-height`, `font-family`, `font-weight` at container level.
- Converted `.widget` font-size to `1em` (inherits base) and `.widget .title` to `1.25em` (≈20px) for relative scaling.

### Why
Provides a single scalable typographic baseline so host applications and custom (non-widget) elements placed inside the control panel inherit consistent sizing. Enables simple overrides:
```css
.d3-widgets { --dw-font-size: 15px; }
```

### Backward Compatibility
- Visual output should remain effectively unchanged (base still 16px).
- No API surface changes.

### Upgrade Guidance
No action required. To scale all widgets globally, override `--dw-font-size`. Future minor updates may migrate any additional absolute sizes to relative units.

## 2.0.3 - 2025-09-XX
- Previous release (reference) – baseline before typography contract.
