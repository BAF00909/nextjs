import { MenuItem } from "@/interfaces/menu.interface";
import { getMenu } from "../../api";

export const Menu = async (): Promise<JSX.Element> => {
    const menu = await getMenu(0);
    return (
        <ul>
            {menu?.map((item: MenuItem) => (
                <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
            ))}
        </ul>
    );
}