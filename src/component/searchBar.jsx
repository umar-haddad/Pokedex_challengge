function SearchBar(onSearch) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control h-100 px-4 rounded-lg border border-dark"
            placeholder="Cari Pokemon..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
