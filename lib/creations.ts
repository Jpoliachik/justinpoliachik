export type CreationItem = {
  title?: string;
  description?: string;
  createdDate?: string;
  images: string[];
  sketchName?: string;
};

export const creationsList = [
  {
    title: "Test Title",
    description: "test desc",
    createdDate: "2022-01-01",
    images: ["/images/test-image.png"],
  },
  {
    title: "Test Title 2",
    description: "test desc",
    createdDate: "2022-01-02",
    images: ["/images/test-image.png"],
  },
  {
    title: "Test Title 3",
    description: "test desc",
    createdDate: "2022-01-03",
    images: ["/images/test-image.png"],
  },
  {
    title: "Test Title 4",
    description: "test desc",
    createdDate: "2022-01-04",
    images: ["/images/test-image.png"],
  },
  {
    title: "Test Title 5",
    description: "test desc",
    createdDate: "2022-01-05",
    images: ["/images/test-image.png"],
  },
];
