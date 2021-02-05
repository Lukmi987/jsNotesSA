Event delegation
-Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
    The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single
    handler on their common ancestor.

    -In the handler we get event.target to see where the event actually happened and handle it

A good exampl wit a table
 -The table has 9 cells, but there could be 99 or 9999
    Our task is to highlight a cell <td> on click.
    Instead of assign an onclick handler to each <td> (can be many) – we’ll setup the “catch-all” handler on <table> element.

In the handler table.onclick we should take such event.target and find out whether the click was inside <td> or not.

    table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)

    if (!td) return; // (2)

    if (!table.contains(td)) return; // (3)

    highlight(td); // (4)
};

1. The method elem.closest(selector) returns the nerest ancestor that matches the selector.
2. If event.target is not inside any <td>, then the call returns immediately, as there’s nothing to do
3. In case of nested tables, event.target may be a <td>, but lying outside of the current table. So we check if that’s actually our table’s <td>.
--------------------------------------------------------------------------------------------------------------------------------------------------------
    <div id="menu">
        <button data-action="save">Save</button>
        <button data-action="load">Load</button>
        <button data-action="search">Search</button>
    </div>

const el = document.getElementById('menu');
el.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    switch (action) {
        case "save":
            console.log('saving ufc');
            save();
            break;
        case "load":
            load();
            break;
    }
})