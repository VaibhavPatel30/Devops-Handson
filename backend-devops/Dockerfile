# Stage 1 — Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy solution (optional)
COPY backend-devops.sln ./

# Copy project file
COPY backend-devops.csproj ./

# Restore dependencies
RUN dotnet restore backend-devops.csproj

# Copy all files
COPY . .

# Publish application
RUN dotnet publish backend-devops.csproj -c Release -o /out

# Stage 2 — Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /out .

EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "backend-devops.dll"]