import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar"
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/ShoppingCart"
import FavoriteIcon from "@mui/icons-material/ShoppingCart"

export default function Actions() {
    return (
        <MyList type="row">
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCardIcon/>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
        </MyList>
    )
}