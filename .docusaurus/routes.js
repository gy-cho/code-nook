import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/code-nook/__docusaurus/debug',
    component: ComponentCreator('/code-nook/__docusaurus/debug', 'b65'),
    exact: true
  },
  {
    path: '/code-nook/__docusaurus/debug/config',
    component: ComponentCreator('/code-nook/__docusaurus/debug/config', 'db1'),
    exact: true
  },
  {
    path: '/code-nook/__docusaurus/debug/content',
    component: ComponentCreator('/code-nook/__docusaurus/debug/content', 'e39'),
    exact: true
  },
  {
    path: '/code-nook/__docusaurus/debug/globalData',
    component: ComponentCreator('/code-nook/__docusaurus/debug/globalData', '8d6'),
    exact: true
  },
  {
    path: '/code-nook/__docusaurus/debug/metadata',
    component: ComponentCreator('/code-nook/__docusaurus/debug/metadata', 'ea4'),
    exact: true
  },
  {
    path: '/code-nook/__docusaurus/debug/registry',
    component: ComponentCreator('/code-nook/__docusaurus/debug/registry', 'b35'),
    exact: true
  },
  {
    path: '/code-nook/__docusaurus/debug/routes',
    component: ComponentCreator('/code-nook/__docusaurus/debug/routes', '724'),
    exact: true
  },
  {
    path: '/code-nook/blog',
    component: ComponentCreator('/code-nook/blog', 'c1f'),
    exact: true
  },
  {
    path: '/code-nook/blog/archive',
    component: ComponentCreator('/code-nook/blog/archive', '3ee'),
    exact: true
  },
  {
    path: '/code-nook/blog/first-blog-post',
    component: ComponentCreator('/code-nook/blog/first-blog-post', 'd79'),
    exact: true
  },
  {
    path: '/code-nook/blog/long-blog-post',
    component: ComponentCreator('/code-nook/blog/long-blog-post', '897'),
    exact: true
  },
  {
    path: '/code-nook/blog/mdx-blog-post',
    component: ComponentCreator('/code-nook/blog/mdx-blog-post', '919'),
    exact: true
  },
  {
    path: '/code-nook/blog/tags',
    component: ComponentCreator('/code-nook/blog/tags', 'd92'),
    exact: true
  },
  {
    path: '/code-nook/blog/tags/docusaurus',
    component: ComponentCreator('/code-nook/blog/tags/docusaurus', 'f5c'),
    exact: true
  },
  {
    path: '/code-nook/blog/tags/facebook',
    component: ComponentCreator('/code-nook/blog/tags/facebook', 'db8'),
    exact: true
  },
  {
    path: '/code-nook/blog/tags/hello',
    component: ComponentCreator('/code-nook/blog/tags/hello', 'cdd'),
    exact: true
  },
  {
    path: '/code-nook/blog/tags/hola',
    component: ComponentCreator('/code-nook/blog/tags/hola', 'd60'),
    exact: true
  },
  {
    path: '/code-nook/blog/welcome',
    component: ComponentCreator('/code-nook/blog/welcome', 'a1b'),
    exact: true
  },
  {
    path: '/code-nook/markdown-page',
    component: ComponentCreator('/code-nook/markdown-page', '616'),
    exact: true
  },
  {
    path: '/code-nook/docs',
    component: ComponentCreator('/code-nook/docs', 'e8f'),
    routes: [
      {
        path: '/code-nook/docs',
        component: ComponentCreator('/code-nook/docs', 'd80'),
        routes: [
          {
            path: '/code-nook/docs',
            component: ComponentCreator('/code-nook/docs', '2f5'),
            routes: [
              {
                path: '/code-nook/docs/category/tutorial---basics',
                component: ComponentCreator('/code-nook/docs/category/tutorial---basics', 'cc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/category/tutorial---extras',
                component: ComponentCreator('/code-nook/docs/category/tutorial---extras', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/intro',
                component: ComponentCreator('/code-nook/docs/intro', '282'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/code-nook/docs/tutorial-basics/congratulations', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/code-nook/docs/tutorial-basics/create-a-blog-post', 'c6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/code-nook/docs/tutorial-basics/create-a-document', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/code-nook/docs/tutorial-basics/create-a-page', '982'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/code-nook/docs/tutorial-basics/deploy-your-site', '55d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/code-nook/docs/tutorial-basics/markdown-features', '0d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/code-nook/docs/tutorial-extras/manage-docs-versions', 'd4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/code-nook/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/code-nook/docs/tutorial-extras/translate-your-site', 'a10'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/code-nook/',
    component: ComponentCreator('/code-nook/', '460'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
