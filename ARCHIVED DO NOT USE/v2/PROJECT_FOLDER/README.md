# Paggawa Project Shell

M01 establishes a buildable project structure only.

## Structure

- `Paggawa.sln`: .NET solution shell.
- `src/Paggawa.Api`: ASP.NET Core Web API shell.
- `src/paggawa-web`: React/Vite shell.
- `contracts/api`: future API contract placeholders.
- `docs/architecture`: architecture boundaries and open decisions.
- `docs/deployment`: Azure-readiness notes without resources or credentials.
- `tests`: test-folder placeholders only.

## Current Boundary

No Paggawa business workflow is implemented. Database persistence, production authentication, cloud resources, secrets, payments, chat, GPS, maps, and live tracking are absent by design.

## Local Commands

```powershell
dotnet build Paggawa.sln
dotnet run --project src/Paggawa.Api
```

```powershell
Set-Location src/paggawa-web
npm.cmd install
npm.cmd run dev
```
