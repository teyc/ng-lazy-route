# Lazy Loading of Angular Modules

```
+---------------+
|   app         |
+---------------+
     |
     v
+---------------+
|  ui-parent    |
+---------------+
     |
     v
+---------------+
|  ui-child     |
+---------------+

```

## Note import paths

For shorter import paths 'ui-parent' and 'ui-child' instead of '../../projects/ui-parent/src' etc

file: tsconfig.json

```
    "paths": {
      "ui-child": [
        // "dist/ui-child"
        "projects/ui-child/src/public-api.ts"
      ],
      "ui-parent": [
        // "dist/ui-parent"
        "projects/ui-parent/src/public-api.ts"
      ]
    },
```