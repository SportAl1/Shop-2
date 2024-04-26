function Header() {
    return <nav className="navbar bg-info border-bottom border-body" data-bs-theme="warning">
    <div className="container container-fluid">
        <a className="navbar-brand d-flex" href="!#">
            <h2 className="text-light text">React shop</h2>
        </a>
        <button className="btn btn-outline-light" type="submit">Shop</button>
    </div>
</nav>
}

export {Header};