const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // console.log('+++ gatsby-node::onCreateNode +++', ); // node.sourceInstanceName, node.relativePath, node.internalComponentName, node.internal.type);
  // if (node.internal.type === `PRJ_MAINDATA`) {
  //   console.log(node);
  // }
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(node.id, node.frontmatter, node.fileAbsolutePath);
    const filename = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'filename',
      value: filename,
    });
  }
  // console.log('--- gatsby-node::onCreateNode ---');
}

module.exports.createPages = async ({ graphql, actions }) => {
  const gqlPosts = await graphql(`
query {
  allMarkdownRemark(filter: {frontmatter: {id: {ne: null}}}, sort: {fields: frontmatter___updated_when, order: DESC}) {
    nodes {
      frontmatter {
        id
        title
        subtitle
        subject
        author
        keywords
        tags
        category
        cover
        created_when(formatString: "YYYY-MM-DD")
        updated_when(formatString: "YYYY-MM-DD")
        level
      }
      excerpt(pruneLength: 20, truncate: true, format: MARKDOWN)
      html
    }
  }
}
  `)
  const gitBlogs = gqlPosts.data.allMarkdownRemark.nodes;
  // console.log(99999, gitBlogs);

  const { createPage }  = actions;
  const templateBlog    = path.resolve('./src/templates/blog.js');

  gitBlogs.forEach(item => {
    createPage({
      component: templateBlog,
      path: `/blog/${item.frontmatter.id}`,
      context: item
    });
  });
}
