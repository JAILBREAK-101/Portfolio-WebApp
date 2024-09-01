# My Portfolio WebApp

This is a full-stack portfolio web application built with Next.js, Prisma, and PostgreSQL. The application showcases personal projects, YouTube content, blog posts, services offered, GitHub activities, and a detailed resume.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Demo
A live demo of the application is available at: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)

## Features
- **Dashboard**: Lists personal projects with descriptions and links.
- **YouTube**: Embedded YouTube channel for showcasing video content.
<!-- - **Blog**: A blog section to share articles and insights. -->
- **Services**: Details the services you offer.
- **GitHub Activities**: Displays recent GitHub activities using the GitHub API.
- **Resume**: Showcases experience, education, and certifications.

## Tech Stack
- **Frontend/Backend**: [Next.js](https://nextjs.org)
- **Database**: [Prisma](https://www.prisma.io) with [PostgreSQL](https://www.postgresql.org)
- **Deployment**: [Vercel](https://vercel.com)

## Installation

### Prerequisites
- Node.js >= 14.x
- PostgreSQL >= 12.x
- Git

### Clone the repository
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

### Install dependencies
```bash
npm install
```

### Set up the database
1. Create a PostgreSQL database.
2. Configure the database URL in the `.env` file.

### Migrate the database
```bash
npx prisma migrate dev --name init
```

### Generate Prisma client
```bash
npx prisma generate
```

## Usage

### Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
GITHUB_API_URL="https://api.github.com/users/your_github_username/events"
```

- `DATABASE_URL`: The connection string for your PostgreSQL database.
- `NEXTAUTH_SECRET`: A secret key used by NextAuth.js for signing tokens.
- `NEXTAUTH_URL`: The base URL of your application, typically `http://localhost:3000` in development.
- `GITHUB_API_URL`: The GitHub API URL to fetch your GitHub activities.

## Deployment

### Deploying to Vercel
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the deployment command:
   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment. The application will be live at your Vercel domain.

### Additional Deployment Steps
- Set up environment variables on Vercel.
- Ensure the PostgreSQL database is accessible from the Vercel deployment.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name](https://yourwebsite.com).
```

### **Customizing the README**
- **Project URL:** Replace the demo URL with the actual link to your deployed site.
- **GitHub Repo:** Replace `https://github.com/yourusername/your-portfolio.git` with the actual URL of your GitHub repository.
- **Your Information:** Update the license section and add your name and personal website.


<!-- Ask ChatGPT for this information -->
**a.** Need help setting up environment variables on Vercel for deployment?

**b.** Want to include instructions for contributors in the README?