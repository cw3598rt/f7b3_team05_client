import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Dispatch, RefObject, SetStateAction } from "react";

export interface ICommunityNewProps {
  isEdit: boolean;
  editData?: {
    fetchBoard: {
      title: string;
      content: string;
      mainImg: string;
      boardTags: any;
    };
  };
}

export interface IUpdateBoardInput {
  title?: string;
  content?: string;
  boardTags?: never[];
  mainImg?: string;
}

export interface IDataProps {
  content: string;
  title: string;
}

export interface IEditDataProps {
  title: string;
  content: string;
}

export interface ICommunityNewUIProps {
  onClickList: () => void;
  onClickSubmit: (data: any) => Promise<void>;
  editorRef: RefObject<unknown>;
  onChangeContent: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  tagItem: string;
  setTagItem: Dispatch<SetStateAction<string>>;
  tagList: never[];
  setTagList: Dispatch<SetStateAction<never[]>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
  imageUrl: string;
  setFileUrl: Dispatch<SetStateAction<string>>;
  isEdit: boolean;
  onClickEdit: (data: any) => Promise<void>;
  editData?: {
    fetchBoard: {
      title: string;
      content: string;
      mainImg: string;
      boardTags: any;
    };
  };
}

export interface IEl {
  title: string;
}
