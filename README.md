# Confluence '24

Confluence is the name of the annual fest of Hansraj College, University of Delhi.
This repo is for the website of the same.

## Architecture

This is a simple static website, without many moving parts. It is generally considered a good practice to decouple content and the code. I initially was gravitating towards such a set-up using Keystone.js. I was hoping to expose a GraphQL API to serve the content, with Keystone.js also providing an admin dashboard for data entry and manipulation out-of-the-box. That set-up was turning out to be time-consuming, and, thus, we find ourselves in this rather unwanted situation of having our data and code being figuratively intertwined.

Still, for what it's worth, there is a directory-level division between the logic and the content, which you can appreciate for yourself by browsing the files.

## Contributions

Anyone who is competent in Next.js and the other related technologies used in this repository (e.g. Tailwind), is welcome to introduce meaningful changes. Since the content is tightly coupled, any changes to the content are also (sadly) required to be done as a pull request.

Direct merging to `main` is restricted, as it is a protected branch.

Make sure to use the "Conventional Commits" commit-messages convention, or you won't be able to commit (`husky` will prevent you).

When a PR is merged, the changes should be live in a couple of minutes. Vercel takes care of Continuous Deployment.
