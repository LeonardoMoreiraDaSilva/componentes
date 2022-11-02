import { ConteinerImage } from "../components/bannerSlide";
import BannerSwiperPlay from "../components/bannerSlide/BannerSwiperPlay";
import { DefaultButton, LightButton } from "../components/button";
import { Center } from "../components/layout";
import { Paragraph, Title1, Title2, Title3, Title4 } from "../components/text";


export default function Componentes(){
    return(
        <>
            
            <Center coluna>
                <Title1>Components</Title1>
                <ConteinerImage>
                    <BannerSwiperPlay/>
                </ConteinerImage>
                <Title2>Button</Title2>
                <Center>
                    <DefaultButton>Send</DefaultButton>
                    <LightButton>Enviar</LightButton>
                </Center>
                <Center coluna>
                    <Title2>Esta funcionando?</Title2>
                    <Title3>Sim, esta funcionando!</Title3>
                    <Title4>Ok, muito bom</Title4>
                    <Paragraph recuo="50px">
                        E sem O muito menos dessa é são que coisa custam nada nasceu 
                        de e how Não não respeito, O que tinha planetas é quando e your que hoje tarde. 
                        uiva vai mim Em que Agora, não não filled um eu é caramba. 
                        mais diminutivo regra não figured quanto principalmente.
                    </Paragraph>
                </Center>
            </Center>
        </>
    )
}