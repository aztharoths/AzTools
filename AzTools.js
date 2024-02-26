class Aztools {
    /**
     * Create an element
     * @param {string} tag - The tag of the element
     * @param {string|string[]} [classes] - The classes of the element
     * @param {object} [attributes] - The attributes of the element
     * @returns {HTMLElement} The element
     * @throws {Error} If classes is not an array or a string
     * @throws {Error} If attributes is not an object
     * @static
     * @example
     * // Create a div with the class "foo" and the id "bar"
     * Utils.createElt("div", "foo", { id: "bar" });
     * @example
     * // Create a div with the classes "foo" and "bar" and the id "baz"
     * Utils.createElt("div", ["foo", "bar"], { id: "baz" });
     * @example
     * // Create a div with the class "foo" and the id "bar" and the innerHTML "Hello world!"
     * Utils.createElt("div", "foo", { id: "bar", innerHTML: "Hello world!" });
     */
    static createElt(tag, classes, attributes) {
        const elt = document.createElement(tag);
        if (classes) {
            if (Array.isArray(classes)) {
                classes.forEach((className) => {
                    if (typeof className === "string") {
                        elt.classList.add(className);
                    } else {
                        throw new Error("Classes must be a string");
                    }
                });
            } else if (typeof classes === "string") {
                elt.classList.add(classes);
            } else {
                throw new Error("Classes must be an array or a string");
            }
        }
        if (attributes) {
            if (typeof attributes === "object") {
                for (const key in attributes) {
                    if (key === "innerHTML") {
                        elt.innerHTML = attributes[key];
                        continue;
                    }
                    if (key === "innerText") {
                        elt.innerText = attributes[key];
                        continue;
                    }
                    elt.setAttribute(key, attributes[key]);
                }
            } else {
                throw new Error("Attributes must be an object");
            }
        }
        return elt;
    }
}

export default Aztools;
