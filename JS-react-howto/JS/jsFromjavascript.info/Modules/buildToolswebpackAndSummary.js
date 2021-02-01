Build tools
In real-life, browser modules are rarely used in their “raw” form. Usually, we bundle them together with a special tool such as Webpack
and deploy to the production server.

Summary
A module is a file. To make import/export work, browsers need <script type="module">. Modules have several differences:
  Deferred by default.
  Async works on inline scripts.
  To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
  Duplicate external scripts are ignored.
Modules have their own, local top-level scope and interchange functionality via import/export.
Modules always use strict.
Module code is executed only once. Exports are created once and shared between importers.
When we use modules, each module implements the functionality and exports it. Then we use import to directly import it where it’s needed.
The browser loads and evaluates the scripts automatically.
