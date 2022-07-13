export interface IThemeListProps {
  data?: any;
  isToggled?: boolean;
  onClickToggled?: () => void;
  onClickTheme: (el: any) => (event: MouseEvent<HTMLLIElement>) => void;
}
