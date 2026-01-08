/*const galleryImages = [
  { src: "/images/image_driveway_dumpster.jpeg", alt: "Dumpster in driveway" },
  { src: "/images/gallery-2.jpg", alt: "Dumpster at job site" },
  { src: "/images/gallery-3.jpg", alt: "Kitchen remodel" },
  { src: "/images/gallery-4.jpg", alt: "Bathroom remodel" },
  { src: "/images/gallery-5.jpg", alt: "Flooring installation" },
  { src: "/images/gallery-6.jpg", alt: "Home renovation" },
  // add or remove as needed
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
        <p className="text-sm text-slate-700 mb-6">
          A look at some of our dumpsters and remodeling projects around
          Connecticut.
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          {galleryImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-32 w-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;*/
// So I am changing the code to check the images auto height as well and changing

const galleryImages = [
  { src: "/images/image_driveway_dumpster.jpeg", alt: "Dumpster in driveway" },
  { src: "/images/dump_job_site.jpeg", alt: "Dumpster at job site" },
  { src: "/images/Project Gallery1.jpeg", alt: "Our Work" },
  { src: "/images/Project Gallery3.jpeg", alt: "Work in milford" },
  { src: "/images/Project_Gallery2.jpeg", alt: "Dumpster in shelton" },
  { src: "/images/Project Gallery5r.jpeg", alt: "Work in Shelton" },
  { src: "/images/Project Gallery6.jpeg", alt: "Work in Shelton" },
  {src: "/images/another_dumpster.avif", alt: "Dumpster for rental"}

  // add or remove as needed
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
        <p className="text-sm text-slate-700 mb-6">
          A look at some of our dumpsters and remodeling projects around
          Connecticut.
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="w-full h-40 md:h-48 bg-slate-200 rounded-lg overflow-hidden"

            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-fill"

              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
// Old divisin code
        /*<div className="grid gap-4 md:grid-cols-4">
          {galleryImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="w-full h-auto rounded-lg object-contain bg-slate-200"*/

//Second old code no cropping but issue with boxes.

/*<div className="grid gap-4 md:grid-cols-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="w-full h-40 md:h-48 bg-slate-200 rounded-lg flex items-center justify-center overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>*/