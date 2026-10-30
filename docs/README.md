```
.github/
└── workflows/
    ├── ci.yml
    ├── backend-tests.yml
    ├── docker-build.yml
    └── docker-publish.yml
```

Chaque fichier a une responsabilité.

| Fichier              | Responsabilité         |
| -------------------- | ---------------------- |
| `ci.yml`             | Orchestration générale |
| `backend-tests.yml`  | Tests Node.js          |
| `docker-build.yml`   | Construction Docker    |
| `docker-publish.yml` | Publication GHCR       |