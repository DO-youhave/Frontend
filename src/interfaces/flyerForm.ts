export interface ImageUploadProps {
  images: {
    image: File;
    url: string;
  }[];
  inputRef: {
    current: HTMLInputElement | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleDelete: (clickedImage: File) => void;
}

export interface FlyerFormProps {
  controller: {
    handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeMainText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleTag: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleDeleteTag: (tag: string) => void;
    handleContact: (e: React.ChangeEvent<HTMLFormElement>) => void;
    handleSubmit: () => void;
    handleAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isChatOn: boolean;
    isEmailOn: boolean;
    suggestTags: string;
    tagList: string[];
    tag: string;
    formRef: {
      current: HTMLInputElement | null;
    }[];
    image: ImageUploadProps;
  };
}

export interface SelectCategoryProps {
  controller: {
    backPage: () => void;
    handleChangeRadio: (e: React.ChangeEvent<HTMLFormElement>) => void;
  };
}