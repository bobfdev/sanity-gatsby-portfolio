export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f984072bb3220b7c3ba4a7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xotdgax9',
                  apiId: '4ab0b1e2-7df5-465e-90dd-ff6f904fb846'
                },
                {
                  buildHookId: '61f9840865d3f42de0180f50',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5gxr2374',
                  apiId: 'e7d54ab9-5fa2-48f5-a599-0ac364380c2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bobfdev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5gxr2374.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
