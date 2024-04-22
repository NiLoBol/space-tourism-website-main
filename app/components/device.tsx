function device() {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  else if (width >= 769 && width <= 1024) return "tablet";
  else return "desktop";
}

export const devicee = device();
