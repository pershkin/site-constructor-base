import {row, col, css} from './utilits'

function title(block) {
    const {tag = h1, styles} = block.options
    const content = `<${tag}>${block.value}</${tag}>`
    css(styles)
    return  row(col(content), css(styles))
}

function text(block) {
    const {styles} = block.options
    const content = `<p>${block.value}</p>`
    return  row(col(content), css(styles))
}

function columns(block) {
    const {styles} = block.options
    const content = block.value.map(col).join('')
    return  row(content, css(styles))

}

function image(block) {
    const {styles, stylesImage, alt=''} = block.options
    const content = `<img style="${css(stylesImage)}" src="${block.value}" alt="${alt}">`  
    return  row(content, css(styles))

}



export const templates = {
    title,
    text,
    columns,
    image
}