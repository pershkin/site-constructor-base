import {row, col, css} from './../utilits'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    createHTML() {
        throw new Error('Method createHTML not implemented')
    }
}

export class BlockTitle extends Block {
    constructor(value, options) {
        super(value, options)
    }

    createHTML() {
        const {tag = 'h1', styles} = this.options
        const content = `<${tag}>${this.value}</${tag}>`
        return  row(col(content), css(styles))
    }
}

export class BlockText  extends Block {
    constructor(value, options) {
        super(value, options)
    }

    createHTML() {
        const {styles} = this.options
        const content = `<p>${this.value}</p>`
        return  row(col(content), css(styles))
    }
 }

export class BlockColumns extends Block {
    constructor(value, options) {
        super(value, options)
    }

    createHTML() {
        const {styles} = this.options
        const content = this.value.map(col).join('')
        return  row(content, css(styles))
    }
}

export class BlockImage extends Block {
    constructor(value, options) {
        super(value, options)
    }

    createHTML() {
        const {styles, stylesImage, alt=''} = this.options
        const content = `<img style="${css(stylesImage)}" src="${this.value}" alt="${alt}">`  
        return  row(content, css(styles))
    }
}