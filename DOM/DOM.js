// DOM Methods :
    // 1. getElementById(id)
        const e1 = document.getElementById('id');

    // 2. querySelector(selector);
        const e2 = document.querySelector('.selector');
        
    // 3. querySelectorAll(selector)
        const e3 = document.querySelectorAll('.selector');

    // 4. getElementByClassName('class')
        const e4 = document.getElementsByClassName('class');

    // 5. createElement(tagName)
        const e5 = document.createElement('element');

    // 6. append(node)
        document.body.append(newElement);


// DOM Traversal
    // DOM traversal means moving through elements (nodes) in the documenttree—upwards to parents, downwards to children, or sideways to siblings.

        // 1. Accessing Parent Node
            // → element.parentElement
            // → element.parentNode
            // ● parentElement returns the parent element node (skips text/comments).
            // ● parentNode returns the parent node (can be an element or document itself).

        // 2. Accessing Child Nodes
            // → element.children
            // → element.childNodes
            // → element.childElementCount
            // ● children [ gives an HTMLCollection of only child elements ].
            // ● childNodes [ includes text nodes, comment nodes, and element nodes. ]
            // ● childElementCount [ gives the number of element children. ]

        // 3. Accessing First Child
            // → element.firstElementChild
            // → element.firstChild
            // ● firstElementChild [ returns the first child that is an element. ]
            //● firstChild [ returns the first child node (may include text or comments). ]

        // 4. Accessing Last Child
            // element.lastElementChild
            // element.lastChild
            // ● lastElementChild [ returns the last element child. ]
            // ● lastChild [ returns the last node (could be text, comment, or element). ]

        // 5. Accessing Next Sibling
            // element.nextElementSibling
            // element.nextSibling
            // ● nextElementSibling [ gives the next element in the same level. ]
            // ● nextSibling [ may include non-element nodes (e.g., text nodes). ]

        // 6. Accessing Previous Sibling
            // element.previousElementSibling
            // element.previousSibling
            // ● previousElementSibling [ accesses the previous sibling element. ]
            // ● previousSibling  [ accesses the previous sibling node (element/text/etc.). ]



// Creating HTML Element :
