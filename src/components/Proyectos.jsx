import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pianosmania } from './proyectos/Pianosmania';
import { Dont_be_shy } from './proyectos/Dont_be_shy';
import { Secundaria } from './proyectos/Secundaria';

export const Proyectos = () => {
    let x = false;

    if( window.matchMedia("(min-width: 768px)").matches ){
        x = true;
    }

    return (
        <section className="seccion" id='proyectos'>
            <div className="contenedor">
                <h2>Proyectos</h2>

                <Swiper
                    modules={[Navigation, Pagination ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={ x }
                    grabCursor={ true }
                    loop={ true }
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Pianosmania />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Dont_be_shy />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Secundaria />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
