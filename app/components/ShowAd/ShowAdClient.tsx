"use client"
import { Ad } from '@/models/Ad'
import React from 'react'
import { Container } from '../Container';
import { AdImagesCarousel } from '../AdImagesCarousel';
import GetDateFromDatetime from '@/utils/GetDateFromDatetime';
import GetHoursFromDate from '@/utils/GetHoursFromDate';
import WhiteCardAd from '../Cards/WhiteCardAd';
import FilterIntegerValueToReal from '@/utils/FilterIntegerValueToReal';
import { FiShare } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { FaRegClock, FaWhatsapp } from 'react-icons/fa6';
import PersonIcon from "../../../assets/person.svg";
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import GetYearFromDate from '@/utils/GetYearFromDate';
import RelatedAds from '../RelatedAds/RelatedAds';

const siteUrl = process.env.SITE_URL

type Props = {
  ad: Ad;
}

const ShowAdClient = ({ ad }: Props) => {

  const copyLink = () => {
    navigator.clipboard.writeText(`${siteUrl}/ad/${ad.id}`)
    toast.success("Link copiado!")
  }

  return (
    <Container bgColor='#ebebeb' minAllVh={true}>
      <div className='mt-7'>
        <small className='text-[13px] font-normal text-gray-600 w-full'>
          Publicado em {GetDateFromDatetime(ad.created_at)} às {GetHoursFromDate(ad.created_at)} cód. {ad.id}
        </small>
        <div className='w-full flex flex-col tablet:flex-row gap-3 h-full mt-2'>
          <div className='w-full tablet:w-[60%] h-full flex flex-col gap-4'>
            <AdImagesCarousel images={ad.files} />

            <h1 className='block tablet:hidden text-[22px] font-medium text-neutralBlack w-full'>{ad.title}</h1>

            <div className='flex tablet:hidden flex-col'>
              {ad.previous_price ?
                <small className='text-gray-500 line-through'>{FilterIntegerValueToReal(ad.previous_price)}</small>
                :
                <div className='h-[15px] mb-2' />
              }
              <h3 className='text-neutralBlack font-light text-4xl'>
                {FilterIntegerValueToReal(ad.price)}
              </h3>
            </div>

            <div>
              <h2 className='text-[20px] font-medium text-neutralBlack w-full'>Descrição</h2>
              <p className='text-[16px] font-normal text-neutralBlack mt-5 w-[90%]'>{ad.description}</p>
            </div>

            <div className='w-full h-[1px] rounded-full bg-slate-400/60 my-5' />

            <div>
              <h1 className='text-[20px] font-medium text-neutralBlack w-full'>Detalhes</h1>
              <div className='flex gap-10 mt-5'>
                <div className='flex flex-col'>
                  <small>Categoria</small>
                  <Link href="/" className='text-primaryOrange'>{ad.productCategory.name}</Link>
                </div>
                <div className='flex flex-col'>
                  <small>Subcategoria</small>
                  <Link href="/" className='text-primaryOrange'>{ad.subcategory.name}</Link>
                </div>
              </div>
            </div>

            <div className='w-full h-[1px] rounded-full bg-slate-400/60 my-5' />

            <RelatedAds adId={ad.id} categoryId={ad.product_category_id} price={ad.price} subcategoryId={ad.subcategory_id} />
          </div>

          <div className='w-full tablet:w-[40%] h-full flex flex-col gap-2 mb-10'>
            <div className='hidden tablet:block'>
              <WhiteCardAd>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center'>
                    <h1 className='text-[22px] font-medium text-neutralBlack w-full'>{ad.title}</h1>
                    <button onClick={() => copyLink()} className='flex items-center gap-2 text-xl p-2 rounded-full hover:bg-primaryOrange/30 duration-150 text-primaryOrange'><FiShare /></button>
                  </div>

                  <div className='flex flex-col'>
                    {ad.previous_price ?
                      <small className='text-gray-500 line-through'>{FilterIntegerValueToReal(ad.previous_price)}</small>
                      :
                      <div className='h-[15px] mb-2' />
                    }
                    <h3 className='text-neutralBlack font-light text-4xl'>
                      {FilterIntegerValueToReal(ad.price)}
                    </h3>
                  </div>
                  <div className='flex items-center w-full'>
                    <a href={`https://api.whatsapp.com/send?phone=${ad.user.phone}`} target='_blank'>
                      <button className='flex items-center gap-3 text-xl bg-primaryOrange py-2 px-5 text-white rounded-full duration-150 hover:bg-primaryOrange/80'>
                        Chat <FaWhatsapp />
                      </button>
                    </a>
                  </div>
                </div>
              </WhiteCardAd>
            </div>

            <WhiteCardAd>
              <div className='flex flex-col'>
                <h1 className='text-[20px] font-medium text-neutralBlack w-full'>Informações do vendedor</h1>

                <div className='flex items-center gap-4 mt-3'>
                  <div className='w-[42px] h-[42px] rounded-full'>
                    <img src={ad.user.avatar ? ad.user.avatar.file_url : PersonIcon} className='h-full w-full object-cover rounded-full' alt="user image" />
                  </div>

                  <div className='flex flex-col h-full justify-center'>
                    <h1 className='text-[18px] font-medium text-neutralBlack leading-[18px]'>{ad.user.surname}</h1>
                    <Link className='text-[14px] font-medium text-primaryOrange' href={`/seller/${ad.user_id}`}>Ver perfil</Link>
                  </div>
                </div>

                <div className='w-full h-[1px] rounded-full bg-slate-400/60 my-5' />

                <div className='flex items-start gap-3'>
                  <FaRegClock className="text-neutralBlack" fontSize={20} />

                  <div>
                    <h3 className='leading-[14px] text-[14px] text-neutralBlack'>Na FF desde</h3>
                    <small>{GetYearFromDate(ad.created_at)}</small>
                  </div>
                </div>

                <div className='w-full h-[1px] rounded-full bg-slate-400/60 my-5' />

                <div className='flex flex-col gap-3'>
                  <div className='flex gap-3 items-center'>
                    <div className='p-1 rounded-full bg-green-600 w-fit'>
                      <MdEmail fontSize={20} className="text-white" />
                    </div>
                    <h2 className='text-[14px] text-neutralBlack'>Email verificado</h2>
                  </div>
                </div>


              </div>
            </WhiteCardAd>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default ShowAdClient