According to the Feature Sliced Design,
this layer should contain:
  -the route components for each page in the app
  📂 ui/ — the UI kit, pure appearance, no business logic. For example, buttons, modal dialogs, form inputs.
  📂 api/ — convenience wrappers around request making primitives (like fetch() on the Web) and, optionally, functions for triggering particular requests according to the backend specification.
  📂 config/ — parsing environment variables
  📂 i18n/ — configuration of language support
  📂 router/ — routing primitives and route constants
                     