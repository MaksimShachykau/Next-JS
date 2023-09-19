import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISkillsBlock extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    categories: string[]
}
