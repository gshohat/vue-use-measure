export function useMeasure(element) {
    const elementRect = element.getBoundingClientRect();
    const parentElementRect = element.parentElement.getBoundingClientRect()
    const top = elementRect.top - parentElementRect.top;
    const left = elementRect.left - parentElementRect.left;
    const elementRectObject = elementRect.toJSON();
    return {...elementRectObject, top, left};
}
