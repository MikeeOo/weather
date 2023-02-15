import Button from "../../cells/Button";
import BtnContent from "../../atoms/BtnContent";

import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {changeTheme} from "../../../redux/slices/themeStatusSlice";

import {FaLightbulb} from "react-icons/fa";
import {BsFillMoonFill} from "react-icons/bs";

import {HeaderWrapped, HeaderStyled, H1} from "./Header.styled";

const Header = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);
    return (
        <HeaderWrapped>
            <HeaderStyled>
                <H1>🌈weather-app🌈</H1>
                <Button onClick={() => dispatch(changeTheme( themeChangeStatus === "Light" ? "Dark" : "Light"))}
                        contrast
                        fontSize="1.2rem"
                        padding=".5em .5em">
                    <BtnContent iconText
                                icon={themeChangeStatus === "Light" ? <FaLightbulb/> : <BsFillMoonFill/>}
                                text={`${themeChangeStatus} Mode`}/>
                </Button>
            </HeaderStyled>
        </HeaderWrapped>
    );
};

export default Header;