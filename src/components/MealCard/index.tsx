import { MealDTO } from "@storage/meal/MealDTO";
import { Circle, Container, Hour, InfoContainer, Title } from "./styles";

type Props = {
    meal: MealDTO;
}

export function MealCard({ meal, ...rest }: Props) {
    return (
        <Container {...rest}>
            <InfoContainer>
                <Hour>{meal.hour}</Hour>
                <Title>{meal.name}</Title>
            </InfoContainer>
            <Circle inDiet={meal.inDiet}/>
        </Container>
    )
}