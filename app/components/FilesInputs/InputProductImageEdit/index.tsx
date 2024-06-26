import { toast } from "react-hot-toast";
import { PiCameraPlus } from "react-icons/pi";

type Props = {
  setImages: React.Dispatch<React.SetStateAction<any[]>>;
  productImages: any[];
  productImagesCreates: number;
};

const InputProductImageEdit = ({ setImages, productImages, productImagesCreates }: Props) => {

  const handleSub = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    
    const maxFiles = 6;

    const currentProductImages = productImagesCreates + productImages.length

    if(currentProductImages >= maxFiles){
      toast.error("Selecione no máximo 6 imagens")
      return false;
    }

    // @ts-ignore: Object is possibly 'null'.
    [...e.target.files].map((file, i) => {
      if ((i + 1) + currentProductImages <= maxFiles) {
        setImages(olds => [...olds, file])
      }
    })
  };

  return (
    <label className="h-[100%]" htmlFor='icon-button-file'>
      <input
        className="hidden"
        accept="image/png, image/jpg, image/jpeg, image/svg"
        multiple
        id='icon-button-file'
        type='file'
        onChange={(e) => {
          handleSub(e)
        }}
      />
      <div
        aria-label='Upload da Imagem'
        style={{
          // width: "150px",
          height: "150px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "2px 2px 5px #00000047",
          transition: ".3s",
        }}
        className="bg-[#cb895454] hover:opacity-90"
      >
        <div className="flex items-center justify-center flex-col">
          <PiCameraPlus fontSize={65} className="text-primaryOrange" />
          <h1 className="text-primaryGraffiti font-medium text-lg text-center">Adicionar fotos</h1>
        </div>
      </div>
    </label>
  );
};

export default InputProductImageEdit;
