const poem =
  Math.random() > 0.5
    ? {
        name: "The Road Not Taken",
        pages: 5,
      }
    : {
        name: "Stopping by Woods on a Snowy Evening",
        rhymes: 4,
      };

poem;
// type: { name: string; pages: number; } | { name: string; rhymes: number; }
