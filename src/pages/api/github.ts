// export default async function handler(req: Request, res) {
//     const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
//     if (!accessToken) {
//       return res.status(500).json({ error: "Access token not found" });
//     }
  
//     const response = await fetch("https://api.github.com/graphql", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: `
//           query {
//             user(login: "JAILBREAK-101") {
//               pinnedItems(first: 6, types: REPOSITORY) {
//                 nodes {
//                   ... on Repository {
//                     name
//                     description
//                     url
//                     primaryLanguage {
//                       name
//                     }
//                     homepageUrl
//                   }
//                 }
//               }
//             }
//           }
//         `,
//       }),
//     });
  
//     const data = await response.json();
//     res.status(200).json(data);
//   }
  