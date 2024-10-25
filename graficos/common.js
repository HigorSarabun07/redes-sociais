const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

export { getCSS }