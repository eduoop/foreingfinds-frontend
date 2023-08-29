import styles from "./styles.module.css"

import PersonIcon from "../../../../assets/person.svg";
import { User } from "@/models/user";
import Image from "next/image";

type Props = {
  user: User | null;
  image: any;
  setImage: React.Dispatch<any>;
};

const InputUserRegisterImage = ({ user, image, setImage }: Props) => {

  const imageEdit = () => {
    if (user && !image && user.avatar) {
      return user.avatar.file_url === null ? PersonIcon : user.avatar.file_url;
    } else {
      console.log(false)
      return !image
        ? PersonIcon
        : URL.createObjectURL(image);
    }
  };

  return (
    <label className="h-[100%]" htmlFor='icon-button-file'>
      <input
        className="hidden"
        accept='image/*'
        id='icon-button-file'
        type='file'
        onChange={(e: any) => {
          setImage(e.target.files[0]);
        }}
      />
      <div
        aria-label='Upload da Imagem'
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#cb67535e",
          cursor: "pointer"
        }}
      >
        <Image src={imageEdit()} width={200} height={200} className={`object-cover h-[100%] w-[100%] ${user && user.avatar || image !== null ? "rounded-full" : "rounded-none"}`} alt='Envie uma imagem' />
      </div>
    </label>
  );
};

export default InputUserRegisterImage;
