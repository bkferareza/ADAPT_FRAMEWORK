# Paggawa API Shell

ASP.NET Core Web API shell targeting .NET 9.

The only endpoint is `GET /health`, which reports process availability. It is not a business contract.

No persistence, production authentication, business services, secrets, or cloud resources are present. Future API work must follow the versioned contracts under `contracts/api` and the active ADAPT milestone.
