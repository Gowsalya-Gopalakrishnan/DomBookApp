const navbar = () => {
    let cart = `<a href="index.html">Home</a>
        <a href="admin.html">Admin</a>
        <a href="books.html">Books</a>`;

    document.getElementById("nav-cont").innerHTML = cart;
}
navbar();
export { navbar }