## Description

This application is ready for exploring Marvel heroes.

## Stack

<ul>
<li>React (v.18.2.0)</li>
<li>Typescript (v.5.3.3)</li>
<li>Jest (v.29.7.0), </li>
<li>Styled-Components (v.6.1.1)</li>
<li>Node (v.20)</li>
</ul>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

## Running tests

Some example tests has been added. For a production enviroment complete the tests. (Check TODO: comments)

```bash
# development
$ npm run test
```

```
src
├── assets // Static files (images, icons, etc.)
├── components
│ ├── test // Unitary test for components
│ │ ├── Card.test.tsx
│ │ ├── SearchBar.test.tsx
│ │ └── Slider.test.tsx
│ ├── ui // User Interface Components(Search, Card, etc.)
│ │ ├── Card.tsx
│ │ ├── FavButton.tsx
│ │ ├── NavBar.tsx
│ │ ├── SearchBar.tsx
│ │ └── Slider.tsx
│ └── layout // Layout
│ ├── Grid.tsx
│ ├── Section.tsx
│ └── skeleton // Loading skeletons
│ ├── GridSkeleton.tsx
│ └── SliderSkeleton.tsx
├── context // Aplication global state
│ ├── Global.tsx
│ └── Theme.tsx
├── pages // App pages
│ ├── Detail[id].tsx // Details of a specific item. Dynamic path for details (ex: /detail/123)
│ └── Dashboard.tsx
├── routes // App router
│ └── Router.tsx
├── theme // App Theme
│ └── index.tsx
├── utils // Common functions and utilities
│ ├── Debounce.tsx // Events debouncer
│ ├── fetch.tsx // HTTP request
│ └── types.ts // Types definitions
├── App.tsx // App root component
├── i18n.js // i18n config for translations
└── index.tsx // App entry point
```

**Modular Architecture with Separation of Concerns:**

The project utilizes a modular architecture with a clear separation of concerns. This promotes code reusability, maintainability, and testability. Here's a breakdown of the key aspects:

- **Components:** Reusable UI components are organized within the `components` directory.
  - **Test:** Unit tests for individual components are stored in the `test` subdirectory. This promotes isolated testing of component functionality.
  - **UI:** User Interface components like `Card`, `SearchBar`, `Slider`, `FavButton`, and `NavBar` reside here.
  - **Layout:** Layout components like `Grid`, `Section`, and loading skeletons (`GridSkeleton` and `SliderSkeleton`) are stored here.
- **Context:** Global application state is managed using React Context. The project utilizes two contexts:
  - `Global.tsx`: Likely stores general application data.
  - `Theme.tsx`: Potentially manages the application's theme (colors, fonts, etc.). (Light and Dark themes has been configured and ready to use. Colors needs to be defined for this project)
- **Pages:** Application pages like `Detail[id].tsx` (dynamic detail page) and `Dashboard.tsx` are located here.
- **Routes:** Routing logic is likely handled in a separate `Router.tsx` file for cleaner separation.
- **Theme:** A dedicated `theme` directory potentially houses the application's theme configuration (`index.tsx`).
- **Utils:** Common functions and utilities like `Debounce.tsx` for event debouncing, `fetch.tsx` for making HTTP requests, and `types.ts` for custom type definitions are stored here.
- **App.tsx:** The root component of the application.
- **index.tsx:** The application entry point.

**Additional Considerations:**

- The use of unit tests within the `components/test` directory suggests a focus on testing individual components.
- The presence of a dedicated `theme` directory indicates potential theming capabilities for the application.

This structure promotes maintainability by separating different concerns. It also allows for easier testing and potential code sharing across different projects using the same component library.
