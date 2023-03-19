document.addEventListener('DOMContentLoaded', () => {
    inputRanges()
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