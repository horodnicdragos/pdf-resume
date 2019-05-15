const info = {
    fullName: 'John Doe',
    contact: [
        {
            label: 'Location:',
            value: 'Anywhere',
        },
        {
            label: 'E-mail:',
            value: 'john.doe@website.com',
            link: 'mailto://john.doe@website.com',
        },
        {
            label: 'Website:',
            value: 'website.com',
            link: 'https://website.com',
        },
        {
            label: 'Phone:',
            value: '+44 999 999 999'
        },
        {
            label: 'Linked In:',
            value: 'John Doe',
            link: 'https://linkedin.com/in/john-doe',
        },
        {
            label: 'Github:',
            value: 'john-doe',
            link: 'https://github.com/john-doe',
        }
    ],
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem urna, tristique nec mi et, consectetur ultricies nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lobortis nibh sed egestas aliquam. Sed eu metus dapibus, vestibulum diam in, lobortis ipsum. Nunc posuere odio neque, sed congue sapien euismod efficitur. Mauris at commodo dui, id molestie risus. Etiam interdum sed elit sed pretium.'
};

const experience = [
    {
        position: 'Fancy Position 1',
        company: 'Company LLC',
        interval: '2018 - present',
        stack: [
            { text: 'NodeJS', link: 'https://nodejs.org/en/' },
            { text: 'React', link: 'https://reactjs.org' },
            { text: 'Redux', link: 'https://redux.js.org' },
        ],
        companyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem urna, tristique nec mi et, consectetur ultricies nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lobortis nibh sed egestas aliquam. Sed eu metus dapibus, vestibulum diam in, lobortis ipsum. Nunc posuere odio neque, sed congue sapien euismod efficitur. Mauris at commodo dui, id molestie risus. Etiam interdum sed elit sed pretium.',
        description: `**Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Pellentesque sem urna, tristique nec mi et, consectetur ultricies nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lobortis nibh sed egestas aliquam. Sed eu metus dapibus, vestibulum diam in, lobortis ipsum. Nunc posuere odio neque, sed congue sapien euismod efficitur. Mauris at commodo dui, id molestie risus. Etiam interdum sed elit sed pretium.

        Vivamus augue purus, auctor vitae mi sit amet, lacinia porttitor justo. Duis quis odio tristique, venenatis dolor sit amet, viverra nunc. Praesent non luctus nisi. Aliquam imperdiet dignissim turpis, a sagittis nulla. Nulla facilisi. Vestibulum vehicula erat viverra facilisis malesuada. Morbi non convallis augue. Donec convallis ligula vel pharetra maximus.
        
        Morbi erat nisl, convallis sed ullamcorper eu, sagittis et lorem. Nunc consequat erat id finibus hendrerit. Nulla aliquet ornare felis et posuere. Morbi augue neque, dignissim nec luctus et, feugiat eget risus. Donec luctus aliquet velit, vitae blandit massa imperdiet eu. Phasellus pharetra facilisis vestibulum. Ut sagittis congue efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus arcu. Aenean bibendum tortor at magna tristique pulvinar. Nulla facilisi. Mauris ex lectus, cursus nec congue sed, auctor in ex.
        
        Proin condimentum sagittis ante et dapibus. Donec tristique nunc ac nibh gravida blandit eget in leo. Praesent faucibus sem at urna dapibus, ut placerat mi sagittis. Pellentesque ullamcorper vestibulum eros, tempus suscipit tellus finibus nec. Mauris eget viverra dolor. Proin eu est nisi. Nulla ac fringilla enim. Maecenas non tortor semper, consectetur magna eget, rutrum erat. Suspendisse accumsan malesuada mollis. Mauris ut imperdiet nisi.`
    },
    {
        position: 'Fancy Position 2',
        company: 'Company LLC',
        interval: '2017 - 2018',
        stack: [
            { text: 'NodeJS', link: 'https://nodejs.org/en/' },
            { text: 'React', link: 'https://reactjs.org' },
            { text: 'Redux', link: 'https://redux.js.org' },
        ],
        companyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem urna, tristique nec mi et, consectetur ultricies nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lobortis nibh sed egestas aliquam. Sed eu metus dapibus, vestibulum diam in, lobortis ipsum. Nunc posuere odio neque, sed congue sapien euismod efficitur. Mauris at commodo dui, id molestie risus. Etiam interdum sed elit sed pretium.',
        description: `**Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Pellentesque sem urna, tristique nec mi et, consectetur ultricies nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lobortis nibh sed egestas aliquam. Sed eu metus dapibus, vestibulum diam in, lobortis ipsum. Nunc posuere odio neque, sed congue sapien euismod efficitur. Mauris at commodo dui, id molestie risus. Etiam interdum sed elit sed pretium.

        Vivamus augue purus, auctor vitae mi sit amet, lacinia porttitor justo. Duis quis odio tristique, venenatis dolor sit amet, viverra nunc. Praesent non luctus nisi. Aliquam imperdiet dignissim turpis, a sagittis nulla. Nulla facilisi. Vestibulum vehicula erat viverra facilisis malesuada. Morbi non convallis augue. Donec convallis ligula vel pharetra maximus.
        
        Morbi erat nisl, convallis sed ullamcorper eu, sagittis et lorem. Nunc consequat erat id finibus hendrerit. Nulla aliquet ornare felis et posuere. Morbi augue neque, dignissim nec luctus et, feugiat eget risus. Donec luctus aliquet velit, vitae blandit massa imperdiet eu. Phasellus pharetra facilisis vestibulum. Ut sagittis congue efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus arcu. Aenean bibendum tortor at magna tristique pulvinar. Nulla facilisi. Mauris ex lectus, cursus nec congue sed, auctor in ex.`
    },
    {
        position: 'Fancy Position 3',
        company: 'Company LLC',
        interval: '2016 - 2017',
    }
]

const additionalExperience = `**Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Pellentesque sem urna, tristique nec mi et, consectetur ultricies nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lobortis nibh sed egestas aliquam. Sed eu metus dapibus, vestibulum diam in, lobortis ipsum. Nunc posuere odio neque, sed congue sapien euismod efficitur. Mauris at commodo dui, id molestie risus. Etiam interdum sed elit sed pretium.`

const projects = [
    { description: 'Project 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'https://github.com', linkText: 'Github Repo' },
    { description: 'Project 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'https://github.com', linkText: 'Github Repo' },
    { description: 'Project 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'https://github.com', linkText: 'Github Repo' },
    { description: 'Project 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'https://github.com', linkText: 'Github Repo' }
]
export default { info, experience, additionalExperience, projects }