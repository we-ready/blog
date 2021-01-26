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
  allMarkdownRemark {
    nodes {
      fields {
        filename
      }
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
      }
      excerpt(format: PLAIN, pruneLength: 60)
      html
    }
  }
}
  `)
  // console.log(99999, gqlPosts.data.allMarkdownRemark.nodes);
  const gitBlogs = gqlPosts.data.allMarkdownRemark.nodes.filter((n) => (!!n.frontmatter && n.frontmatter.id));

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
