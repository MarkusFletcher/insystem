import { Select } from './classes/select.js'

document.addEventListener('DOMContentLoaded', () => {
    const select1 = new Select('#select1')

    inputRanges()
    handleHeaderMenu()

    document.querySelector('.ordering__form').addEventListener('submit',e => {
        e.preventDefault();
        console.dir(e.target)
    })
})

const inputRanges = () => {
    const inputElements = document.querySelectorAll('[data-range="wrap"]')
    inputElements.forEach(el => {
        const value = el.querySelector('[data-range="value"]')
        const input = el.querySelector('[data-range="input"]')
        value.innerHTML = `${input.value} %`
        input.addEventListener('input', e => {
            value.innerHTML = `${e.target.value} %`
        })
    })
}

const handleHeaderMenu = () => {
    const buttonToggleMenu = document.querySelector('[data-header-menu="toggle"]');
    const headerMenu = document.querySelector('[data-header-menu="menu"]');

    buttonToggleMenu.onclick = () => {
        headerMenu.classList.toggle('header__menu--show');
    }
}