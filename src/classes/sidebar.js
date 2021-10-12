import { block } from "../utilits"
import { BlockText, BlockTitle } from "./bloks"

export class Sidebar {
    constructor(selector, updateModel) {
        this.$el = document.querySelector(selector)
        this.update = updateModel
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.addBlock.bind(this))
    }

    get template() {
        return [block('title'), block('text')].join('')
    }

    addBlock(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock

        switch (type) {
            case 'title':
                newBlock = new BlockTitle(value, {styles})
                break;
            case 'text':
                newBlock = new BlockText(value, {styles})
                break;
        
            default:
                break;
            }
            this.update(newBlock)
            event.target.value.value = ''
            event.target.styles.value = ''
    }
}