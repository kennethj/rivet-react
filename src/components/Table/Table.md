Tables are used to display tabular data in rows and columns.

View the [Rivet Documentation for Tables](https://rivet.uits.iu.edu/components/page-content/tables/)

### Default Table

Default tables in Rivet come with styled headers and bottom borders on row to help with readability.

```jsx
<Table>
    <caption className="rvt-sr-only">Table example one</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
            <td><a href="#">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Box</th>
            <td>Box is a no-cost cloud storage and collaboration environment available to students, faculty, and staff.</td>
            <td><a href="#">box.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```

### Striped Table

The *stripes* `variant` to alternate light gray backgrounds on table rows for improved scannability.

```jsx
<Table variant="stripes">
    <caption className="rvt-sr-only">Table example one</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
            <td><a href="#">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Box</th>
            <td>Box is a no-cost cloud storage and collaboration environment available to students, faculty, and staff.</td>
            <td><a href="#">box.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```

### Plain Table

The *plain* `variant` will remove all borders and formatting from the table.

```jsx
<Table variant="plain">
    <caption className="rvt-sr-only">Table example one</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
            <td><a href="#">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Box</th>
            <td>Box is a no-cost cloud storage and collaboration environment available to students, faculty, and staff.</td>
            <td><a href="#">box.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```