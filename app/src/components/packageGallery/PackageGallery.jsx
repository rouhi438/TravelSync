import { useRef, useState, useEffect } from "react";
import placeholderImage from "../../assets/images/placeholder.png";
import { FaImage } from "react-icons/fa";
import "./PackageGallery.css";

export function PackageGallery({ pkg }) {
  const [selectedImage, setSelectedImage] = useState(pkg.image);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY;
      }
    };
    gallery.addEventListener("wheel", handleWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", handleWheel);
  }, []);

  const allImages = pkg.gallery?.length ? pkg.gallery : [pkg.image];
  const hasGallery = allImages.length > 1;

  return (
    <section className="detail-hero">
      <div className="hero-image-wrapper">
        <img
          src={selectedImage || placeholderImage}
          alt={pkg.name}
          className="hero-image"
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
        {hasGallery && (
          <button
            className="gallery-toggle-btn"
            onClick={() => setIsGalleryOpen(!isGalleryOpen)}
            aria-label="Toggle gallery"
          >
            <FaImage /> {isGalleryOpen ? "Hide Gallery" : "Show Gallery"}
          </button>
        )}
        <div className="hero-badge">
          <span className="badge-category">{pkg.category || "package"}</span>
          {pkg.availableSlots !== undefined && (
            <span
              className={`badge-availability ${pkg.availableSlots > 0 ? "available" : "sold-out"}`}
            >
              {pkg.availableSlots > 0
                ? `${pkg.availableSlots} spots left`
                : "Sold out"}
            </span>
          )}
        </div>
      </div>

      {isGalleryOpen && hasGallery && (
        <div className="gallery-preview" ref={galleryRef}>
          {allImages.map((img, index) => (
            <button
              key={index}
              className={`gallery-view ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img || placeholderImage}
                alt={`${pkg.name} - view ${index + 1}`}
                onError={(e) => {
                  e.target.src = placeholderImage;
                }}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
