import image from './assets/pic.jpg'
import {BlockTitle, BlockText, BlockColumns, BlockImage} from './classes/bloks'

export const model = [
    new BlockTitle('Site constructor', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to top, #8e2de2, #4a00e0)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new BlockText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima tenetur perferendis hic incidunt qui!', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new BlockImage(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
          },
          stylesImage: {
              width: '600px',
              height: 'auto',
              'box-shadow': '0px 0px 16px -3px #000000',
              'border-radius': '10px'
          },
          alt: 'Description'
    }),
    new BlockColumns([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odit iste quod dolore illo ea.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odit iste'
    ], {
        styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
        }
    })
]

    