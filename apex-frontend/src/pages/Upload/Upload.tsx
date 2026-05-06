import "./Upload.css";

const Upload = () => {
  return (
    <div className="upload-page">
      <h1 className="upload-title">Create a Listing</h1>
      <form className="upload-form">

        <div className="upload-image-section">
          <label className="image-drop-zone">
            <span className="image-drop-icon">&#128247;</span>
            <span className="image-drop-text">Click or drag to upload image</span>
            <input type="file" accept="image/*" hidden />
          </label>
        </div>

        <div className="upload-fields">

          <div className="field-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="e.g. Vintage Leather Sofa"
            />
          </div>

          <div className="field-group">
            <label htmlFor="price">Price ($)</label>
            <input
              id="price"
              type="number"
              min={0}
              placeholder="e.g. $350"
            />
          </div>

          <div className="field-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={5}
              placeholder="Describe your item — condition, dimensions, what's included..."
            />
          </div>

          <button type="submit" className="upload-submit">Submit Listing</button>

        </div>
      </form>
    </div>
  );
};

export default Upload;
