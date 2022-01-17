// exports.createPages = async function({actions, graphql}) {
//   const {data} = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);
//   // data.allMarkdownRemark.edges.forEach(edge => {
//   // const slug = edge.node.fields.slug;
//   actions.createPage({
//     // eslint-disable-next-line max-len
//     path: 'valle-maria-exitosa-2a-jornada-en-la-fiesta-provincial-del-sol-y-del-rio',
//     component: require.resolve(`./src/components/post/IndividualPost.tsx`),
//     context: {slug: slug},
//   });
//   // })
// };
