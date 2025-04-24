export interface ButtonProps {
  props: {
    bg: string;
    color: string;
    txt: string;
  },
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  
}
