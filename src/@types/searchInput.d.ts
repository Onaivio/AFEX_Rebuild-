export type Props = {
    children: React.ReactNode
}
export type MenuProps = {
    menu: boolean,
    setMenu: React.Dispatch<React.SetStateAction<boolean>>,
    menuShow: RefObject<HTMLDivElement>,
}
// export type OpenProps = {
//     iconRef: RefObject<HTMLDivElement>
// }

export interface ITranHistory {
        id: number,
        img: string,
        name: string,
        date: string,
        amount: string,
        transaction: string
}

export type SearchInputType = {
    showAll: boolean;
    searchHistory: string;
    transHistory: ITranHistory[];
    getFilteredTransaction: ITranHistory[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCloseHistory: () => void;
    handleAllHistory: () => void;
}