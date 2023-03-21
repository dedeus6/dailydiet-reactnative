import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealCard } from "@components/MealCard";
import { MealDTO } from "@storage/meal/MealDTO";

import { useState } from "react";
import { ButtonLabel, Container } from "./styles";

import { FlatList } from 'react-native';
import { PercentCard } from "@components/PercentCard";

export function Home() {
    const [meals, setMeals] = useState<MealDTO[]>([{
        name: "X-Tudo",
        description: "comi um xtudo",
        date: "20-03-2023",  
        hour: "20:00",
        inDiet: false
    },
    {
        name: "X-Salada",
        description: "comi um salada",
        date: "19-03-2023",
        hour: "19:00",
        inDiet: true
    }]);

    return (
        <Container>
            <Header />
            <PercentCard type="PRIMARY"/>
            <ButtonLabel>Refeições</ButtonLabel>
            <Button icon="add"/>
            <FlatList
                data={meals}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <MealCard meal={item} />
                )}
            />
        </Container>
    )
}