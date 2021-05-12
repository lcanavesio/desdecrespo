import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface Category {
    title: string,
    databaseName: string,
    url: string,
    icon: any
}