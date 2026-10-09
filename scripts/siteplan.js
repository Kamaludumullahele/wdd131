const SVG_NS = "http://www.w3.org/2000/svg";

function createSvgElement(name, attributes = {}, text = "") {
    const element = document.createElementNS(SVG_NS, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    element.textContent = text;
    return element;
}

function createLogo() {
    const svg = createSvgElement("svg", {
        class: "site-logo",
        viewBox: "0 0 320 120",
        role: "img",
        "aria-labelledby": "logo-title logo-description"
    });

    const body = "#536b53";
    const parts = [
        createSvgElement("title", { id: "logo-title" }, "Explore Sri Lanka logo"),
        createSvgElement("desc", { id: "logo-description" }, "An elephant on a beach beneath a sun, beside the text Explore Sri Lanka."),
        createSvgElement("circle", { cx: 98, cy: 24, r: 16, fill: "#e9a23b" }),
        createSvgElement("path", { d: "M0 68c15-8 30-8 45 0s30 8 45 0 20-6 30-3v20H0Z", fill: "#69b8c4" }),
        createSvgElement("path", { d: "M0 84c15-7 30-7 45 0s30 7 45 0 20-5 30-2v28H0Z", fill: "#e9d29c" }),
        createSvgElement("path", { d: "M28 82c0-14 10-24 24-24h14c13 0 22 8 22 20v8H28Z", fill: body }),
        createSvgElement("circle", { cx: 28, cy: 64, r: 13, fill: body }),
        createSvgElement("path", {
            d: "M18 66c-7-3-10 4-6 12m92-8c9 4 8 14 2 16",
            fill: "none", stroke: body, "stroke-linecap": "round", "stroke-width": 7
        }),
        createSvgElement("path", {
            d: "M36 86v14m16-14v14m30-14v14m12-14v14",
            stroke: body, "stroke-linecap": "round", "stroke-width": 8
        }),
        createSvgElement("circle", { cx: 30, cy: 60, r: 2, fill: "#fff" })
    ];

    const text = createSvgElement("text", {
        fill: "#315b4c",
        "font-family": "sans-serif",
        "font-size": 36,
        "font-weight": "bold"
    });
    text.append(
        createSvgElement("tspan", { x: 140, y: 52 }, "Explore"),
        createSvgElement("tspan", { x: 140, y: 92 }, "Sri Lanka")
    );

    svg.append(...parts, text);
    return svg;
}

document.getElementById("logo").append(createLogo());
