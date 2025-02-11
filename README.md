# Angular App with Azure AD Security

![Azure AD](https://img.shields.io/badge/Azure%20AD-0089D6?logo=microsoft-azure&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)

This **Angular App** is pre-configured with **Azure Active Directory (AD)** authentication to secure your application. It includes a protected route (`/home`) and automatically redirects unauthenticated users to the login page. The app is designed to be easy to set up and integrate with your Azure AD tenant.

---

## Features

- **Azure AD Authentication**: Secure your app with Azure AD Single Sign-On (SSO).
- **Protected Route**: The `/home` route is protected and accessible only to authenticated users.
- **Automatic Redirection**: Unauthenticated users are redirected to the Microsoft login page.
- **User-Friendly**: Simple setup and integration with Azure AD.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18.x or later).
- **[Angular CLI](https://angular.io/cli)** (v18 or later).
- **Azure AD Tenant**: Required for authentication.

---

## Installation

### Step 1: Clone the Repository

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Avichauhan9/Azure-AD-Angular.git
   ```

   or

   ```bash
   git clone git@github.com:Avichauhan9/Azure-AD-Angular.git
   ```

2. navigate to cloned repository

   ```bash
   cd Azure-AD-Angular
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

### Step 2: Configure Azure AD

1. Go to the [Azure Portal](https://portal.azure.com/).
2. Register a new application and note the following:
   - **Client ID**
   - **Tenant ID**
   - **Authority URL**
   - **Scope URI**
   - **Redirect URI**
   - **Allowed Scopes**
3. Update the `src/environments/environment.ts` file with your Azure AD credentials:
   ```typescript
   export const AZURE_AD_TENANT_ID = "YOUR_TENANT_ID";
   export const AZURE_AD_CLIENT_ID = "YOUR_CLIENT_ID";
   export const AZURE_AD_AUTHORITY_URL = `YOUR_AUTHORITY_URL`;
   export const AZURE_AD_SCOPE_URI = `YOUR_SCOPE_URL`;
   export const AZURE_AD_REDIRECT_URI = "http://localhost:4200/"; //If your angular app starts on port 4200.(Change the PORT if it's different)
   export const AZURE_AD_SCOPES = Array of allowed scopes;
   ```

---

### Step 3: Run the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:4200`.
3. You will be redirected to the Microsoft login page if you are not authenticated.

---

## Usage

### Protected Route (`/home`)

- The `/home` route is protected and can only be accessed by authenticated users.
- Users will be able to see their token information after successfully logging in on `/home` page.
- Unauthenticated users are automatically redirected to the Microsoft login page.

### Login and Logout

- **Login**: Users are redirected to the Microsoft login page when they try to access a protected route.
- **Logout**: Click on logout button from `/home` page to sign in with new users credentials.

---

## Code Overview

### Key Files

- **`src/app/app.factory.ts`**, **`src/app/app.factory.ts`**, **`src/app/app.config.ts`**: Handles Azure AD authentication and token management.
- **`src/app/components/home/home.component.ts`**: Protected route component.
- **`src/app/app.routes.ts`**: Defines protected routes and authentication guards.
- **`src/environments/environment.ts`**: Contains Azure AD configuration.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## Acknowledgments

- [Microsoft Azure](https://azure.microsoft.com/) for Azure AD integration.
- [Angular](https://angular.io/) for the frontend framework.
- [MSAL Angular](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular) for Azure AD authentication.

---

Enjoy building secure Angular apps with Azure AD authentication! 🚀
