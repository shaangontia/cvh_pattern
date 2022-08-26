import React from "react";
import { Buttons } from "./components/button";
import Container from "./components/container";
import { ElementList, Element } from "./components/elementList";
import { HeaderLogo } from "./headerLogo";

interface HeaderProps {
    cityName: string;
    userName: string;
    countryName: string;
    age: string;
    onClick: (e: any) => void;
}


//-----------------------------------
// Hook
//-----------------------------------

const useHook = (): HeaderProps =>{
    const cityName = "Berlin"
    const userName = "Shaan"
    const countryName = "Germany"
    const age = "20"
    const onClick = (e: any) => {
        const el = document.querySelector('span');
        if (el) el.innerHTML +=  userName + "of age " + age + " lives in " + cityName + " in " + countryName;
    }
    return {
        cityName,
        userName,
        countryName,
        age,
        onClick
    }
}

//-----------------------------------
// View
//-----------------------------------

const View: React.FC<HeaderProps> = ({cityName, userName, countryName, age, onClick}) => (
    <Container> 
            <ElementList>
                <Element>
                    <HeaderLogo />
                </Element> 
                <Element>
                    <Buttons label ={cityName} onClick={onClick} />
                </Element> 
                <Element>
                    <Buttons label ={userName} onClick={onClick} />
                </Element> 
                <Element>
                    <Buttons label ={countryName} onClick={onClick} />
                </Element>
                <Element>
                    <Buttons label ={age} onClick={onClick}/>
                </Element> 
        </ElementList>
    </Container> 
)

//-----------------------------------
// Container
//-----------------------------------
export const Header: React.FC = () => <View {...useHook()}/> 

