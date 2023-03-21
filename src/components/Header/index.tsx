import { BackButton, BackIcon, Container, ContainerImages, Logo, Photo } from "./styles";
import logoImg from "@assets/logo.png";
import photoImg from "@assets/photo.png";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false  }: Props) {
    return (
        <Container>
            {
                showBackButton ?
                    <BackButton>
                        <BackIcon />
                    </BackButton>
                    :
                    <ContainerImages>
                        <Logo source={logoImg}/> 
                        <Photo source={photoImg}/>
                    </ContainerImages>
            }
        </Container>
    )
}