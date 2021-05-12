const { reporter } = require("gatsby-cli/lib/reporter/reporter");

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      lessons: allContentfulLessons {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading lessons", JSON.stringify(result.errors));
  }

  result.data.lessons.edges.forEach(({ node }) => {
    actions.createPage({
      component: require.resolve("./src/templates/lesson-template.js"),
      path: `/lessons/${node.slug}`,
      context: {
        slug: node.slug,
      },
    });
  });
};
