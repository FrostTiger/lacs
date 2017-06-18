import dom from '../../lib/dom';

export default class Application {
    constructor() {
        console.log('Hello world!');
        var cy = cytoscape({
            container: document.getElementById('cy'),
            elements: [{
                    data: {
                        id: 'a'
                    }
                },
                {
                    data: {
                        id: 'b'
                    }
                },
                {
                    data: {
                        id: 'c'
                    }
                },
                {
                    data: {
                        id: 'd'
                    }
                },
                {
                    data: {
                        id: 'ab',
                        source: 'a',
                        target: 'b'
                    }
                },
                {
                    data: {
                        id: 'bc',
                        source: 'b',
                        target: 'c'
                    }
                },
                {
                    data: {
                        id: 'cd',
                        source: 'c',
                        target: 'd'
                    }
                }
            ],
            style: [{
                selector: 'node',
                style: {
                    shape: 'hexagon',
                    'background-color': 'red',
                    label: 'data(id)'
                }
            }]
        });
    }
}