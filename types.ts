export type NavItemType = {
  label: string;
  elementId: string;
  id: string;
};

type CloudinaryImageType = {
  format: string;
  original_filename: string;
  public_id: string;
  resource_type: string;
  secure_url: string;
};

type FileType = {
  alt: string;
  cloudinary: CloudinaryImageType;
  created_at: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  mimeType: string;
  original_doc: {
    url: string;
  };
  url?: string;
  sizes?: {
    card: { width: number; height: number; mime_type: string; filesize: number; filename: string };
    tablet: {
      width: number;
      height: number;
      mime_type: string;
      filesize: number;
      filename: string;
    };
    thumbnail: {
      width: number;
      height: number;
      mime_type: string;
      filesize: number;
      filename: string;
    };
  };
};

interface SocialsType {
  id: string;
}

export type PhotoType = {
  src?: string;
  alt?: string;
};

export type ProjectType = {
  file?: FileType;
  id: string | number;
  text?: any;
  url: string;
};

export type AboutType = {
  file?: FileType;
  title: string;
  id: string | number;
  text?: any;
  url: string;
};

export type HeroType = {
  file?: FileType;
  title?: any;
  id: string | number;
  createdAt: string;
  globalType?: string;
};

export type WebInstanceType = {
  createdAt: string;
  globalType?: string;
  id: string;
  logo?: string;
  socials?: SocialsType[];
  file?: FileType;
  updatedAt: string;
};

export type ProjectsDataType = {
  createdAt: string;
  globalType?: string;
  id: string;
  updatedAt?: string;
  title?: string;
  projects: ProjectType[];
};
