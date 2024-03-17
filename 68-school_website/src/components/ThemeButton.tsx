import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { toggleTheme } from "../app/themeSlice"
import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../app/store"

const ThemeButton = () => {
    const dispatch = useDispatch();
    const themeColor = useSelector((state: IStore) => state.theme);
    return (
        <Button onClick={() => dispatch(toggleTheme())} style={{ width: "100%", marginTop: "20px" }}>
            {themeColor === "light" ? <MoonOutlined /> : <SunOutlined />}
            Mavzuni O'zgartirish
        </Button>
    )
}

export default ThemeButton