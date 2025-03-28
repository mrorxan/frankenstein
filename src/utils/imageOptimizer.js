// Image loading optimization
export const optimizeImage = (src, size = 'medium') => {
  // If it's an external URL, return as is
  if (src.startsWith('http')) return src;
  
  // For local images, add size parameter
  const sizes = {
    small: '300w',
    medium: '600w',
    large: '1200w'
  };
  
  return `${src}?w=${sizes[size]}`;
};

// Lazy loading for images
export const lazyLoadImage = (element) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    
    observer.observe(element);
  }
};